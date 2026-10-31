-- 小日子 v0.5：在本项目 SQL Editor 中执行一次。
-- 同时在 Authentication / Sign In Providers 中开启 Anonymous Sign-Ins。
-- 只创建本应用的表和策略，不清空任何原数据。
begin;
create extension if not exists pgcrypto with schema extensions;

create table if not exists public.couple_rooms (
  id uuid primary key default gen_random_uuid(),
  code_hash text not null unique,
  created_at timestamptz not null default now()
);
create table if not exists public.couple_members (
  room_id uuid not null references public.couple_rooms(id) on delete cascade,
  user_id uuid not null references auth.users(id) on delete cascade,
  joined_at timestamptz not null default now(),
  primary key(room_id,user_id)
);
create table if not exists public.couple_rows (
  id text primary key,
  couple_id text not null,
  kind text not null,
  payload jsonb not null default '{}'::jsonb,
  deleted boolean not null default false,
  updated_at timestamptz not null default now()
);
alter table public.couple_rows add column if not exists deleted boolean not null default false;
create index if not exists couple_rows_space_kind on public.couple_rows(couple_id,kind);
alter table public.couple_rooms enable row level security;
alter table public.couple_members enable row level security;
alter table public.couple_rows enable row level security;

create or replace function public.is_couple_member(p_room text)
returns boolean language sql stable security definer
set search_path=public,pg_temp
as $$ select exists(select 1 from public.couple_members where room_id::text=p_room and user_id=auth.uid()); $$;
revoke all on function public.is_couple_member(text) from public,anon;
grant execute on function public.is_couple_member(text) to authenticated;

create or replace function public.join_couple_space(p_code text)
returns uuid language plpgsql security definer
set search_path=public,extensions,pg_temp
as $$
declare v_hash text;v_room uuid;
begin
  if auth.uid() is null then raise exception '请先登录此设备';end if;
  if p_code !~ '^[A-Za-z0-9_-]{16,100}$' then raise exception '空间码格式不正确';end if;
  v_hash:=encode(extensions.digest(p_code,'sha256'),'hex');
  perform pg_advisory_xact_lock(hashtextextended('little-days:'||v_hash,0));
  insert into public.couple_rooms(code_hash) values(v_hash) on conflict(code_hash) do nothing;
  select id into v_room from public.couple_rooms where code_hash=v_hash;
  if exists(select 1 from public.couple_members where room_id=v_room and user_id=auth.uid())then return v_room;end if;
  if (select count(*) from public.couple_members where room_id=v_room)>=2 then raise exception '这个空间已有两位成员，请使用原设备或创建新空间';end if;
  insert into public.couple_members(room_id,user_id)values(v_room,auth.uid());
  return v_room;
end;$$;
revoke all on function public.join_couple_space(text) from public,anon;
grant execute on function public.join_couple_space(text) to authenticated;

revoke all on public.couple_rooms,public.couple_members,public.couple_rows from anon;
grant select on public.couple_members to authenticated;
grant select,insert,update on public.couple_rows to authenticated;
drop policy if exists little_days_members on public.couple_members;
create policy little_days_members on public.couple_members for select to authenticated using(public.is_couple_member(room_id::text));
drop policy if exists little_days_rows_read on public.couple_rows;
drop policy if exists little_days_rows_insert on public.couple_rows;
drop policy if exists little_days_rows_update on public.couple_rows;
create policy little_days_rows_read on public.couple_rows for select to authenticated using(public.is_couple_member(couple_id));
create policy little_days_rows_insert on public.couple_rows for insert to authenticated with check(public.is_couple_member(couple_id));
create policy little_days_rows_update on public.couple_rows for update to authenticated using(public.is_couple_member(couple_id)) with check(public.is_couple_member(couple_id));

-- Tombstones keep deletion events filtered to the correct space.
do $$ begin
  if exists(select 1 from pg_publication where pubname='supabase_realtime') and not exists(select 1 from pg_publication_tables where pubname='supabase_realtime' and schemaname='public' and tablename='couple_rows')then
    alter publication supabase_realtime add table public.couple_rows;
  end if;
end;$$;

drop policy if exists little_days_presence_read on realtime.messages;
drop policy if exists little_days_presence_write on realtime.messages;
create policy little_days_presence_read on realtime.messages for select to authenticated using(realtime.topic() like 'couple:%' and public.is_couple_member(substring(realtime.topic() from 8)));
create policy little_days_presence_write on realtime.messages for insert to authenticated with check(realtime.topic() like 'couple:%' and public.is_couple_member(substring(realtime.topic() from 8)));

insert into storage.buckets(id,name,public,file_size_limit,allowed_mime_types)
values('couple-photos-private','couple-photos-private',false,20971520,array['image/jpeg','image/png','image/webp','image/gif','image/avif'])
on conflict(id)do nothing;
drop policy if exists little_days_photo_read on storage.objects;
drop policy if exists little_days_photo_insert on storage.objects;
drop policy if exists little_days_photo_update on storage.objects;
drop policy if exists little_days_photo_delete on storage.objects;
create policy little_days_photo_read on storage.objects for select to authenticated using(bucket_id='couple-photos-private' and public.is_couple_member((storage.foldername(name))[1]));
create policy little_days_photo_insert on storage.objects for insert to authenticated with check(bucket_id='couple-photos-private' and public.is_couple_member((storage.foldername(name))[1]));
create policy little_days_photo_update on storage.objects for update to authenticated using(bucket_id='couple-photos-private' and public.is_couple_member((storage.foldername(name))[1])) with check(bucket_id='couple-photos-private' and public.is_couple_member((storage.foldername(name))[1]));
create policy little_days_photo_delete on storage.objects for delete to authenticated using(bucket_id='couple-photos-private' and public.is_couple_member((storage.foldername(name))[1]));
notify pgrst,'reload schema';
commit;
