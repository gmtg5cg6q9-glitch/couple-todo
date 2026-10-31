import {configureFeatures,TodoPage,ProfileSettings,MovieActions,Watchlist,StatusNotice,useCollection,profile,dayNumber,nextAnnual,announce} from "./features.js";
(function () {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) r(s);
  new MutationObserver((s) => {
    for (const i of s)
      if (i.type === "childList")
        for (const a of i.addedNodes)
          a.tagName === "LINK" && a.rel === "modulepreload" && r(a);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(s) {
    const i = {};
    return (
      s.integrity && (i.integrity = s.integrity),
      s.referrerPolicy && (i.referrerPolicy = s.referrerPolicy),
      s.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : s.crossOrigin === "anonymous"
          ? (i.credentials = "omit")
          : (i.credentials = "same-origin"),
      i
    );
  }
  function r(s) {
    if (s.ep) return;
    s.ep = !0;
    const i = n(s);
    fetch(s.href, i);
  }
})();
function ag(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default")
    ? t.default
    : t;
}
var Xf = { exports: {} },
  $o = {},
  Zf = { exports: {} },
  Te = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Gi = Symbol.for("react.element"),
  og = Symbol.for("react.portal"),
  lg = Symbol.for("react.fragment"),
  cg = Symbol.for("react.strict_mode"),
  ug = Symbol.for("react.profiler"),
  dg = Symbol.for("react.provider"),
  hg = Symbol.for("react.context"),
  fg = Symbol.for("react.forward_ref"),
  pg = Symbol.for("react.suspense"),
  mg = Symbol.for("react.memo"),
  gg = Symbol.for("react.lazy"),
  nd = Symbol.iterator;
function vg(t) {
  return t === null || typeof t != "object"
    ? null
    : ((t = (nd && t[nd]) || t["@@iterator"]),
      typeof t == "function" ? t : null);
}
var Qf = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  ep = Object.assign,
  tp = {};
function Us(t, e, n) {
  ((this.props = t),
    (this.context = e),
    (this.refs = tp),
    (this.updater = n || Qf));
}
Us.prototype.isReactComponent = {};
Us.prototype.setState = function (t, e) {
  if (typeof t != "object" && typeof t != "function" && t != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
    );
  this.updater.enqueueSetState(this, t, e, "setState");
};
Us.prototype.forceUpdate = function (t) {
  this.updater.enqueueForceUpdate(this, t, "forceUpdate");
};
function np() {}
np.prototype = Us.prototype;
function su(t, e, n) {
  ((this.props = t),
    (this.context = e),
    (this.refs = tp),
    (this.updater = n || Qf));
}
var iu = (su.prototype = new np());
iu.constructor = su;
ep(iu, Us.prototype);
iu.isPureReactComponent = !0;
var rd = Array.isArray,
  rp = Object.prototype.hasOwnProperty,
  au = { current: null },
  sp = { key: !0, ref: !0, __self: !0, __source: !0 };
function ip(t, e, n) {
  var r,
    s = {},
    i = null,
    a = null;
  if (e != null)
    for (r in (e.ref !== void 0 && (a = e.ref),
    e.key !== void 0 && (i = "" + e.key),
    e))
      rp.call(e, r) && !sp.hasOwnProperty(r) && (s[r] = e[r]);
  var l = arguments.length - 2;
  if (l === 1) s.children = n;
  else if (1 < l) {
    for (var c = Array(l), u = 0; u < l; u++) c[u] = arguments[u + 2];
    s.children = c;
  }
  if (t && t.defaultProps)
    for (r in ((l = t.defaultProps), l)) s[r] === void 0 && (s[r] = l[r]);
  return {
    $$typeof: Gi,
    type: t,
    key: i,
    ref: a,
    props: s,
    _owner: au.current,
  };
}
function yg(t, e) {
  return {
    $$typeof: Gi,
    type: t.type,
    key: e,
    ref: t.ref,
    props: t.props,
    _owner: t._owner,
  };
}
function ou(t) {
  return typeof t == "object" && t !== null && t.$$typeof === Gi;
}
function wg(t) {
  var e = { "=": "=0", ":": "=2" };
  return (
    "$" +
    t.replace(/[=:]/g, function (n) {
      return e[n];
    })
  );
}
var sd = /\/+/g;
function ll(t, e) {
  return typeof t == "object" && t !== null && t.key != null
    ? wg("" + t.key)
    : e.toString(36);
}
function Ma(t, e, n, r, s) {
  var i = typeof t;
  (i === "undefined" || i === "boolean") && (t = null);
  var a = !1;
  if (t === null) a = !0;
  else
    switch (i) {
      case "string":
      case "number":
        a = !0;
        break;
      case "object":
        switch (t.$$typeof) {
          case Gi:
          case og:
            a = !0;
        }
    }
  if (a)
    return (
      (a = t),
      (s = s(a)),
      (t = r === "" ? "." + ll(a, 0) : r),
      rd(s)
        ? ((n = ""),
          t != null && (n = t.replace(sd, "$&/") + "/"),
          Ma(s, e, n, "", function (u) {
            return u;
          }))
        : s != null &&
          (ou(s) &&
            (s = yg(
              s,
              n +
                (!s.key || (a && a.key === s.key)
                  ? ""
                  : ("" + s.key).replace(sd, "$&/") + "/") +
                t,
            )),
          e.push(s)),
      1
    );
  if (((a = 0), (r = r === "" ? "." : r + ":"), rd(t)))
    for (var l = 0; l < t.length; l++) {
      i = t[l];
      var c = r + ll(i, l);
      a += Ma(i, e, n, c, s);
    }
  else if (((c = vg(t)), typeof c == "function"))
    for (t = c.call(t), l = 0; !(i = t.next()).done; )
      ((i = i.value), (c = r + ll(i, l++)), (a += Ma(i, e, n, c, s)));
  else if (i === "object")
    throw (
      (e = String(t)),
      Error(
        "Objects are not valid as a React child (found: " +
          (e === "[object Object]"
            ? "object with keys {" + Object.keys(t).join(", ") + "}"
            : e) +
          "). If you meant to render a collection of children, use an array instead.",
      )
    );
  return a;
}
function ra(t, e, n) {
  if (t == null) return t;
  var r = [],
    s = 0;
  return (
    Ma(t, r, "", "", function (i) {
      return e.call(n, i, s++);
    }),
    r
  );
}
function xg(t) {
  if (t._status === -1) {
    var e = t._result;
    ((e = e()),
      e.then(
        function (n) {
          (t._status === 0 || t._status === -1) &&
            ((t._status = 1), (t._result = n));
        },
        function (n) {
          (t._status === 0 || t._status === -1) &&
            ((t._status = 2), (t._result = n));
        },
      ),
      t._status === -1 && ((t._status = 0), (t._result = e)));
  }
  if (t._status === 1) return t._result.default;
  throw t._result;
}
var Rt = { current: null },
  $a = { transition: null },
  _g = {
    ReactCurrentDispatcher: Rt,
    ReactCurrentBatchConfig: $a,
    ReactCurrentOwner: au,
  };
function ap() {
  throw Error("act(...) is not supported in production builds of React.");
}
Te.Children = {
  map: ra,
  forEach: function (t, e, n) {
    ra(
      t,
      function () {
        e.apply(this, arguments);
      },
      n,
    );
  },
  count: function (t) {
    var e = 0;
    return (
      ra(t, function () {
        e++;
      }),
      e
    );
  },
  toArray: function (t) {
    return (
      ra(t, function (e) {
        return e;
      }) || []
    );
  },
  only: function (t) {
    if (!ou(t))
      throw Error(
        "React.Children.only expected to receive a single React element child.",
      );
    return t;
  },
};
Te.Component = Us;
Te.Fragment = lg;
Te.Profiler = ug;
Te.PureComponent = su;
Te.StrictMode = cg;
Te.Suspense = pg;
Te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = _g;
Te.act = ap;
Te.cloneElement = function (t, e, n) {
  if (t == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        t +
        ".",
    );
  var r = ep({}, t.props),
    s = t.key,
    i = t.ref,
    a = t._owner;
  if (e != null) {
    if (
      (e.ref !== void 0 && ((i = e.ref), (a = au.current)),
      e.key !== void 0 && (s = "" + e.key),
      t.type && t.type.defaultProps)
    )
      var l = t.type.defaultProps;
    for (c in e)
      rp.call(e, c) &&
        !sp.hasOwnProperty(c) &&
        (r[c] = e[c] === void 0 && l !== void 0 ? l[c] : e[c]);
  }
  var c = arguments.length - 2;
  if (c === 1) r.children = n;
  else if (1 < c) {
    l = Array(c);
    for (var u = 0; u < c; u++) l[u] = arguments[u + 2];
    r.children = l;
  }
  return { $$typeof: Gi, type: t.type, key: s, ref: i, props: r, _owner: a };
};
Te.createContext = function (t) {
  return (
    (t = {
      $$typeof: hg,
      _currentValue: t,
      _currentValue2: t,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (t.Provider = { $$typeof: dg, _context: t }),
    (t.Consumer = t)
  );
};
Te.createElement = ip;
Te.createFactory = function (t) {
  var e = ip.bind(null, t);
  return ((e.type = t), e);
};
Te.createRef = function () {
  return { current: null };
};
Te.forwardRef = function (t) {
  return { $$typeof: fg, render: t };
};
Te.isValidElement = ou;
Te.lazy = function (t) {
  return { $$typeof: gg, _payload: { _status: -1, _result: t }, _init: xg };
};
Te.memo = function (t, e) {
  return { $$typeof: mg, type: t, compare: e === void 0 ? null : e };
};
Te.startTransition = function (t) {
  var e = $a.transition;
  $a.transition = {};
  try {
    t();
  } finally {
    $a.transition = e;
  }
};
Te.unstable_act = ap;
Te.useCallback = function (t, e) {
  return Rt.current.useCallback(t, e);
};
Te.useContext = function (t) {
  return Rt.current.useContext(t);
};
Te.useDebugValue = function () {};
Te.useDeferredValue = function (t) {
  return Rt.current.useDeferredValue(t);
};
Te.useEffect = function (t, e) {
  return Rt.current.useEffect(t, e);
};
Te.useId = function () {
  return Rt.current.useId();
};
Te.useImperativeHandle = function (t, e, n) {
  return Rt.current.useImperativeHandle(t, e, n);
};
Te.useInsertionEffect = function (t, e) {
  return Rt.current.useInsertionEffect(t, e);
};
Te.useLayoutEffect = function (t, e) {
  return Rt.current.useLayoutEffect(t, e);
};
Te.useMemo = function (t, e) {
  return Rt.current.useMemo(t, e);
};
Te.useReducer = function (t, e, n) {
  return Rt.current.useReducer(t, e, n);
};
Te.useRef = function (t) {
  return Rt.current.useRef(t);
};
Te.useState = function (t) {
  return Rt.current.useState(t);
};
Te.useSyncExternalStore = function (t, e, n) {
  return Rt.current.useSyncExternalStore(t, e, n);
};
Te.useTransition = function () {
  return Rt.current.useTransition();
};
Te.version = "18.3.1";
Zf.exports = Te;
var b = Zf.exports;
const cl = ag(b);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var bg = b,
  kg = Symbol.for("react.element"),
  Sg = Symbol.for("react.fragment"),
  Eg = Object.prototype.hasOwnProperty,
  jg = bg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Tg = { key: !0, ref: !0, __self: !0, __source: !0 };
function op(t, e, n) {
  var r,
    s = {},
    i = null,
    a = null;
  (n !== void 0 && (i = "" + n),
    e.key !== void 0 && (i = "" + e.key),
    e.ref !== void 0 && (a = e.ref));
  for (r in e) Eg.call(e, r) && !Tg.hasOwnProperty(r) && (s[r] = e[r]);
  if (t && t.defaultProps)
    for (r in ((e = t.defaultProps), e)) s[r] === void 0 && (s[r] = e[r]);
  return {
    $$typeof: kg,
    type: t,
    key: i,
    ref: a,
    props: s,
    _owner: jg.current,
  };
}
$o.Fragment = Sg;
$o.jsx = op;
$o.jsxs = op;
Xf.exports = $o;
var o = Xf.exports,
  lp = { exports: {} },
  Yt = {},
  cp = { exports: {} },
  up = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (t) {
  function e(O, Q) {
    var Z = O.length;
    O.push(Q);
    e: for (; 0 < Z; ) {
      var Ne = (Z - 1) >>> 1,
        xe = O[Ne];
      if (0 < s(xe, Q)) ((O[Ne] = Q), (O[Z] = xe), (Z = Ne));
      else break e;
    }
  }
  function n(O) {
    return O.length === 0 ? null : O[0];
  }
  function r(O) {
    if (O.length === 0) return null;
    var Q = O[0],
      Z = O.pop();
    if (Z !== Q) {
      O[0] = Z;
      e: for (var Ne = 0, xe = O.length, K = xe >>> 1; Ne < K; ) {
        var J = 2 * (Ne + 1) - 1,
          de = O[J],
          j = J + 1,
          M = O[j];
        if (0 > s(de, Z))
          j < xe && 0 > s(M, de)
            ? ((O[Ne] = M), (O[j] = Z), (Ne = j))
            : ((O[Ne] = de), (O[J] = Z), (Ne = J));
        else if (j < xe && 0 > s(M, Z)) ((O[Ne] = M), (O[j] = Z), (Ne = j));
        else break e;
      }
    }
    return Q;
  }
  function s(O, Q) {
    var Z = O.sortIndex - Q.sortIndex;
    return Z !== 0 ? Z : O.id - Q.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    t.unstable_now = function () {
      return i.now();
    };
  } else {
    var a = Date,
      l = a.now();
    t.unstable_now = function () {
      return a.now() - l;
    };
  }
  var c = [],
    u = [],
    d = 1,
    f = null,
    h = 3,
    p = !1,
    v = !1,
    x = !1,
    _ = typeof setTimeout == "function" ? setTimeout : null,
    m = typeof clearTimeout == "function" ? clearTimeout : null,
    g = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function y(O) {
    for (var Q = n(u); Q !== null; ) {
      if (Q.callback === null) r(u);
      else if (Q.startTime <= O)
        (r(u), (Q.sortIndex = Q.expirationTime), e(c, Q));
      else break;
      Q = n(u);
    }
  }
  function E(O) {
    if (((x = !1), y(O), !v))
      if (n(c) !== null) ((v = !0), Le(R));
      else {
        var Q = n(u);
        Q !== null && Me(E, Q.startTime - O);
      }
  }
  function R(O, Q) {
    ((v = !1), x && ((x = !1), m(U), (U = -1)), (p = !0));
    var Z = h;
    try {
      for (
        y(Q), f = n(c);
        f !== null && (!(f.expirationTime > Q) || (O && !Se()));

      ) {
        var Ne = f.callback;
        if (typeof Ne == "function") {
          ((f.callback = null), (h = f.priorityLevel));
          var xe = Ne(f.expirationTime <= Q);
          ((Q = t.unstable_now()),
            typeof xe == "function" ? (f.callback = xe) : f === n(c) && r(c),
            y(Q));
        } else r(c);
        f = n(c);
      }
      if (f !== null) var K = !0;
      else {
        var J = n(u);
        (J !== null && Me(E, J.startTime - Q), (K = !1));
      }
      return K;
    } finally {
      ((f = null), (h = Z), (p = !1));
    }
  }
  var A = !1,
    P = null,
    U = -1,
    te = 5,
    z = -1;
  function Se() {
    return !(t.unstable_now() - z < te);
  }
  function Ee() {
    if (P !== null) {
      var O = t.unstable_now();
      z = O;
      var Q = !0;
      try {
        Q = P(!0, O);
      } finally {
        Q ? ne() : ((A = !1), (P = null));
      }
    } else A = !1;
  }
  var ne;
  if (typeof g == "function")
    ne = function () {
      g(Ee);
    };
  else if (typeof MessageChannel < "u") {
    var be = new MessageChannel(),
      fe = be.port2;
    ((be.port1.onmessage = Ee),
      (ne = function () {
        fe.postMessage(null);
      }));
  } else
    ne = function () {
      _(Ee, 0);
    };
  function Le(O) {
    ((P = O), A || ((A = !0), ne()));
  }
  function Me(O, Q) {
    U = _(function () {
      O(t.unstable_now());
    }, Q);
  }
  ((t.unstable_IdlePriority = 5),
    (t.unstable_ImmediatePriority = 1),
    (t.unstable_LowPriority = 4),
    (t.unstable_NormalPriority = 3),
    (t.unstable_Profiling = null),
    (t.unstable_UserBlockingPriority = 2),
    (t.unstable_cancelCallback = function (O) {
      O.callback = null;
    }),
    (t.unstable_continueExecution = function () {
      v || p || ((v = !0), Le(R));
    }),
    (t.unstable_forceFrameRate = function (O) {
      0 > O || 125 < O
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
          )
        : (te = 0 < O ? Math.floor(1e3 / O) : 5);
    }),
    (t.unstable_getCurrentPriorityLevel = function () {
      return h;
    }),
    (t.unstable_getFirstCallbackNode = function () {
      return n(c);
    }),
    (t.unstable_next = function (O) {
      switch (h) {
        case 1:
        case 2:
        case 3:
          var Q = 3;
          break;
        default:
          Q = h;
      }
      var Z = h;
      h = Q;
      try {
        return O();
      } finally {
        h = Z;
      }
    }),
    (t.unstable_pauseExecution = function () {}),
    (t.unstable_requestPaint = function () {}),
    (t.unstable_runWithPriority = function (O, Q) {
      switch (O) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          O = 3;
      }
      var Z = h;
      h = O;
      try {
        return Q();
      } finally {
        h = Z;
      }
    }),
    (t.unstable_scheduleCallback = function (O, Q, Z) {
      var Ne = t.unstable_now();
      switch (
        (typeof Z == "object" && Z !== null
          ? ((Z = Z.delay), (Z = typeof Z == "number" && 0 < Z ? Ne + Z : Ne))
          : (Z = Ne),
        O)
      ) {
        case 1:
          var xe = -1;
          break;
        case 2:
          xe = 250;
          break;
        case 5:
          xe = 1073741823;
          break;
        case 4:
          xe = 1e4;
          break;
        default:
          xe = 5e3;
      }
      return (
        (xe = Z + xe),
        (O = {
          id: d++,
          callback: Q,
          priorityLevel: O,
          startTime: Z,
          expirationTime: xe,
          sortIndex: -1,
        }),
        Z > Ne
          ? ((O.sortIndex = Z),
            e(u, O),
            n(c) === null &&
              O === n(u) &&
              (x ? (m(U), (U = -1)) : (x = !0), Me(E, Z - Ne)))
          : ((O.sortIndex = xe), e(c, O), v || p || ((v = !0), Le(R))),
        O
      );
    }),
    (t.unstable_shouldYield = Se),
    (t.unstable_wrapCallback = function (O) {
      var Q = h;
      return function () {
        var Z = h;
        h = Q;
        try {
          return O.apply(this, arguments);
        } finally {
          h = Z;
        }
      };
    }));
})(up);
cp.exports = up;
var Ng = cp.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Cg = b,
  Jt = Ng;
function $(t) {
  for (
    var e = "https://reactjs.org/docs/error-decoder.html?invariant=" + t, n = 1;
    n < arguments.length;
    n++
  )
    e += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    t +
    "; visit " +
    e +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var dp = new Set(),
  ki = {};
function Wr(t, e) {
  (Rs(t, e), Rs(t + "Capture", e));
}
function Rs(t, e) {
  for (ki[t] = e, t = 0; t < e.length; t++) dp.add(e[t]);
}
var qn = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Jl = Object.prototype.hasOwnProperty,
  Rg =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  id = {},
  ad = {};
function Ag(t) {
  return Jl.call(ad, t)
    ? !0
    : Jl.call(id, t)
      ? !1
      : Rg.test(t)
        ? (ad[t] = !0)
        : ((id[t] = !0), !1);
}
function Pg(t, e, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof e) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
          ? !n.acceptsBooleans
          : ((t = t.toLowerCase().slice(0, 5)), t !== "data-" && t !== "aria-");
    default:
      return !1;
  }
}
function Og(t, e, n, r) {
  if (e === null || typeof e > "u" || Pg(t, e, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !e;
      case 4:
        return e === !1;
      case 5:
        return isNaN(e);
      case 6:
        return isNaN(e) || 1 > e;
    }
  return !1;
}
function At(t, e, n, r, s, i, a) {
  ((this.acceptsBooleans = e === 2 || e === 3 || e === 4),
    (this.attributeName = r),
    (this.attributeNamespace = s),
    (this.mustUseProperty = n),
    (this.propertyName = t),
    (this.type = e),
    (this.sanitizeURL = i),
    (this.removeEmptyString = a));
}
var xt = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (t) {
    xt[t] = new At(t, 0, !1, t, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (t) {
  var e = t[0];
  xt[e] = new At(e, 1, !1, t[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (t) {
  xt[t] = new At(t, 2, !1, t.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (t) {
  xt[t] = new At(t, 2, !1, t, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (t) {
    xt[t] = new At(t, 3, !1, t.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (t) {
  xt[t] = new At(t, 3, !0, t, null, !1, !1);
});
["capture", "download"].forEach(function (t) {
  xt[t] = new At(t, 4, !1, t, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (t) {
  xt[t] = new At(t, 6, !1, t, null, !1, !1);
});
["rowSpan", "start"].forEach(function (t) {
  xt[t] = new At(t, 5, !1, t.toLowerCase(), null, !1, !1);
});
var lu = /[\-:]([a-z])/g;
function cu(t) {
  return t[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (t) {
    var e = t.replace(lu, cu);
    xt[e] = new At(e, 1, !1, t, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (t) {
    var e = t.replace(lu, cu);
    xt[e] = new At(e, 1, !1, t, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (t) {
  var e = t.replace(lu, cu);
  xt[e] = new At(e, 1, !1, t, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (t) {
  xt[t] = new At(t, 1, !1, t.toLowerCase(), null, !1, !1);
});
xt.xlinkHref = new At(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1,
);
["src", "href", "action", "formAction"].forEach(function (t) {
  xt[t] = new At(t, 1, !1, t.toLowerCase(), null, !0, !0);
});
function uu(t, e, n, r) {
  var s = xt.hasOwnProperty(e) ? xt[e] : null;
  (s !== null
    ? s.type !== 0
    : r ||
      !(2 < e.length) ||
      (e[0] !== "o" && e[0] !== "O") ||
      (e[1] !== "n" && e[1] !== "N")) &&
    (Og(e, n, s, r) && (n = null),
    r || s === null
      ? Ag(e) && (n === null ? t.removeAttribute(e) : t.setAttribute(e, "" + n))
      : s.mustUseProperty
        ? (t[s.propertyName] = n === null ? (s.type === 3 ? !1 : "") : n)
        : ((e = s.attributeName),
          (r = s.attributeNamespace),
          n === null
            ? t.removeAttribute(e)
            : ((s = s.type),
              (n = s === 3 || (s === 4 && n === !0) ? "" : "" + n),
              r ? t.setAttributeNS(r, e, n) : t.setAttribute(e, n))));
}
var Yn = Cg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  sa = Symbol.for("react.element"),
  os = Symbol.for("react.portal"),
  ls = Symbol.for("react.fragment"),
  du = Symbol.for("react.strict_mode"),
  Yl = Symbol.for("react.profiler"),
  hp = Symbol.for("react.provider"),
  fp = Symbol.for("react.context"),
  hu = Symbol.for("react.forward_ref"),
  Xl = Symbol.for("react.suspense"),
  Zl = Symbol.for("react.suspense_list"),
  fu = Symbol.for("react.memo"),
  er = Symbol.for("react.lazy"),
  pp = Symbol.for("react.offscreen"),
  od = Symbol.iterator;
function Ws(t) {
  return t === null || typeof t != "object"
    ? null
    : ((t = (od && t[od]) || t["@@iterator"]),
      typeof t == "function" ? t : null);
}
var nt = Object.assign,
  ul;
function si(t) {
  if (ul === void 0)
    try {
      throw Error();
    } catch (n) {
      var e = n.stack.trim().match(/\n( *(at )?)/);
      ul = (e && e[1]) || "";
    }
  return (
    `
` +
    ul +
    t
  );
}
var dl = !1;
function hl(t, e) {
  if (!t || dl) return "";
  dl = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (e)
      if (
        ((e = function () {
          throw Error();
        }),
        Object.defineProperty(e.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(e, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(t, [], e);
      } else {
        try {
          e.call();
        } catch (u) {
          r = u;
        }
        t.call(e.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      t();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var s = u.stack.split(`
`),
          i = r.stack.split(`
`),
          a = s.length - 1,
          l = i.length - 1;
        1 <= a && 0 <= l && s[a] !== i[l];

      )
        l--;
      for (; 1 <= a && 0 <= l; a--, l--)
        if (s[a] !== i[l]) {
          if (a !== 1 || l !== 1)
            do
              if ((a--, l--, 0 > l || s[a] !== i[l])) {
                var c =
                  `
` + s[a].replace(" at new ", " at ");
                return (
                  t.displayName &&
                    c.includes("<anonymous>") &&
                    (c = c.replace("<anonymous>", t.displayName)),
                  c
                );
              }
            while (1 <= a && 0 <= l);
          break;
        }
    }
  } finally {
    ((dl = !1), (Error.prepareStackTrace = n));
  }
  return (t = t ? t.displayName || t.name : "") ? si(t) : "";
}
function Ig(t) {
  switch (t.tag) {
    case 5:
      return si(t.type);
    case 16:
      return si("Lazy");
    case 13:
      return si("Suspense");
    case 19:
      return si("SuspenseList");
    case 0:
    case 2:
    case 15:
      return ((t = hl(t.type, !1)), t);
    case 11:
      return ((t = hl(t.type.render, !1)), t);
    case 1:
      return ((t = hl(t.type, !0)), t);
    default:
      return "";
  }
}
function Ql(t) {
  if (t == null) return null;
  if (typeof t == "function") return t.displayName || t.name || null;
  if (typeof t == "string") return t;
  switch (t) {
    case ls:
      return "Fragment";
    case os:
      return "Portal";
    case Yl:
      return "Profiler";
    case du:
      return "StrictMode";
    case Xl:
      return "Suspense";
    case Zl:
      return "SuspenseList";
  }
  if (typeof t == "object")
    switch (t.$$typeof) {
      case fp:
        return (t.displayName || "Context") + ".Consumer";
      case hp:
        return (t._context.displayName || "Context") + ".Provider";
      case hu:
        var e = t.render;
        return (
          (t = t.displayName),
          t ||
            ((t = e.displayName || e.name || ""),
            (t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")),
          t
        );
      case fu:
        return (
          (e = t.displayName || null),
          e !== null ? e : Ql(t.type) || "Memo"
        );
      case er:
        ((e = t._payload), (t = t._init));
        try {
          return Ql(t(e));
        } catch {}
    }
  return null;
}
function Lg(t) {
  var e = t.type;
  switch (t.tag) {
    case 24:
      return "Cache";
    case 9:
      return (e.displayName || "Context") + ".Consumer";
    case 10:
      return (e._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (t = e.render),
        (t = t.displayName || t.name || ""),
        e.displayName || (t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return e;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Ql(e);
    case 8:
      return e === du ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof e == "function") return e.displayName || e.name || null;
      if (typeof e == "string") return e;
  }
  return null;
}
function vr(t) {
  switch (typeof t) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return t;
    case "object":
      return t;
    default:
      return "";
  }
}
function mp(t) {
  var e = t.type;
  return (
    (t = t.nodeName) &&
    t.toLowerCase() === "input" &&
    (e === "checkbox" || e === "radio")
  );
}
function Mg(t) {
  var e = mp(t) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(t.constructor.prototype, e),
    r = "" + t[e];
  if (
    !t.hasOwnProperty(e) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var s = n.get,
      i = n.set;
    return (
      Object.defineProperty(t, e, {
        configurable: !0,
        get: function () {
          return s.call(this);
        },
        set: function (a) {
          ((r = "" + a), i.call(this, a));
        },
      }),
      Object.defineProperty(t, e, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (a) {
          r = "" + a;
        },
        stopTracking: function () {
          ((t._valueTracker = null), delete t[e]);
        },
      }
    );
  }
}
function ia(t) {
  t._valueTracker || (t._valueTracker = Mg(t));
}
function gp(t) {
  if (!t) return !1;
  var e = t._valueTracker;
  if (!e) return !0;
  var n = e.getValue(),
    r = "";
  return (
    t && (r = mp(t) ? (t.checked ? "true" : "false") : t.value),
    (t = r),
    t !== n ? (e.setValue(t), !0) : !1
  );
}
function Za(t) {
  if (((t = t || (typeof document < "u" ? document : void 0)), typeof t > "u"))
    return null;
  try {
    return t.activeElement || t.body;
  } catch {
    return t.body;
  }
}
function ec(t, e) {
  var n = e.checked;
  return nt({}, e, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? t._wrapperState.initialChecked,
  });
}
function ld(t, e) {
  var n = e.defaultValue == null ? "" : e.defaultValue,
    r = e.checked != null ? e.checked : e.defaultChecked;
  ((n = vr(e.value != null ? e.value : n)),
    (t._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        e.type === "checkbox" || e.type === "radio"
          ? e.checked != null
          : e.value != null,
    }));
}
function vp(t, e) {
  ((e = e.checked), e != null && uu(t, "checked", e, !1));
}
function tc(t, e) {
  vp(t, e);
  var n = vr(e.value),
    r = e.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && t.value === "") || t.value != n) && (t.value = "" + n)
      : t.value !== "" + n && (t.value = "" + n);
  else if (r === "submit" || r === "reset") {
    t.removeAttribute("value");
    return;
  }
  (e.hasOwnProperty("value")
    ? nc(t, e.type, n)
    : e.hasOwnProperty("defaultValue") && nc(t, e.type, vr(e.defaultValue)),
    e.checked == null &&
      e.defaultChecked != null &&
      (t.defaultChecked = !!e.defaultChecked));
}
function cd(t, e, n) {
  if (e.hasOwnProperty("value") || e.hasOwnProperty("defaultValue")) {
    var r = e.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (e.value !== void 0 && e.value !== null)
      )
    )
      return;
    ((e = "" + t._wrapperState.initialValue),
      n || e === t.value || (t.value = e),
      (t.defaultValue = e));
  }
  ((n = t.name),
    n !== "" && (t.name = ""),
    (t.defaultChecked = !!t._wrapperState.initialChecked),
    n !== "" && (t.name = n));
}
function nc(t, e, n) {
  (e !== "number" || Za(t.ownerDocument) !== t) &&
    (n == null
      ? (t.defaultValue = "" + t._wrapperState.initialValue)
      : t.defaultValue !== "" + n && (t.defaultValue = "" + n));
}
var ii = Array.isArray;
function ws(t, e, n, r) {
  if (((t = t.options), e)) {
    e = {};
    for (var s = 0; s < n.length; s++) e["$" + n[s]] = !0;
    for (n = 0; n < t.length; n++)
      ((s = e.hasOwnProperty("$" + t[n].value)),
        t[n].selected !== s && (t[n].selected = s),
        s && r && (t[n].defaultSelected = !0));
  } else {
    for (n = "" + vr(n), e = null, s = 0; s < t.length; s++) {
      if (t[s].value === n) {
        ((t[s].selected = !0), r && (t[s].defaultSelected = !0));
        return;
      }
      e !== null || t[s].disabled || (e = t[s]);
    }
    e !== null && (e.selected = !0);
  }
}
function rc(t, e) {
  if (e.dangerouslySetInnerHTML != null) throw Error($(91));
  return nt({}, e, {
    value: void 0,
    defaultValue: void 0,
    children: "" + t._wrapperState.initialValue,
  });
}
function ud(t, e) {
  var n = e.value;
  if (n == null) {
    if (((n = e.children), (e = e.defaultValue), n != null)) {
      if (e != null) throw Error($(92));
      if (ii(n)) {
        if (1 < n.length) throw Error($(93));
        n = n[0];
      }
      e = n;
    }
    (e == null && (e = ""), (n = e));
  }
  t._wrapperState = { initialValue: vr(n) };
}
function yp(t, e) {
  var n = vr(e.value),
    r = vr(e.defaultValue);
  (n != null &&
    ((n = "" + n),
    n !== t.value && (t.value = n),
    e.defaultValue == null && t.defaultValue !== n && (t.defaultValue = n)),
    r != null && (t.defaultValue = "" + r));
}
function dd(t) {
  var e = t.textContent;
  e === t._wrapperState.initialValue && e !== "" && e !== null && (t.value = e);
}
function wp(t) {
  switch (t) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function sc(t, e) {
  return t == null || t === "http://www.w3.org/1999/xhtml"
    ? wp(e)
    : t === "http://www.w3.org/2000/svg" && e === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : t;
}
var aa,
  xp = (function (t) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (e, n, r, s) {
          MSApp.execUnsafeLocalFunction(function () {
            return t(e, n, r, s);
          });
        }
      : t;
  })(function (t, e) {
    if (t.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in t)
      t.innerHTML = e;
    else {
      for (
        aa = aa || document.createElement("div"),
          aa.innerHTML = "<svg>" + e.valueOf().toString() + "</svg>",
          e = aa.firstChild;
        t.firstChild;

      )
        t.removeChild(t.firstChild);
      for (; e.firstChild; ) t.appendChild(e.firstChild);
    }
  });
function Si(t, e) {
  if (e) {
    var n = t.firstChild;
    if (n && n === t.lastChild && n.nodeType === 3) {
      n.nodeValue = e;
      return;
    }
  }
  t.textContent = e;
}
var fi = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  $g = ["Webkit", "ms", "Moz", "O"];
Object.keys(fi).forEach(function (t) {
  $g.forEach(function (e) {
    ((e = e + t.charAt(0).toUpperCase() + t.substring(1)), (fi[e] = fi[t]));
  });
});
function _p(t, e, n) {
  return e == null || typeof e == "boolean" || e === ""
    ? ""
    : n || typeof e != "number" || e === 0 || (fi.hasOwnProperty(t) && fi[t])
      ? ("" + e).trim()
      : e + "px";
}
function bp(t, e) {
  t = t.style;
  for (var n in e)
    if (e.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        s = _p(n, e[n], r);
      (n === "float" && (n = "cssFloat"), r ? t.setProperty(n, s) : (t[n] = s));
    }
}
var Dg = nt(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  },
);
function ic(t, e) {
  if (e) {
    if (Dg[t] && (e.children != null || e.dangerouslySetInnerHTML != null))
      throw Error($(137, t));
    if (e.dangerouslySetInnerHTML != null) {
      if (e.children != null) throw Error($(60));
      if (
        typeof e.dangerouslySetInnerHTML != "object" ||
        !("__html" in e.dangerouslySetInnerHTML)
      )
        throw Error($(61));
    }
    if (e.style != null && typeof e.style != "object") throw Error($(62));
  }
}
function ac(t, e) {
  if (t.indexOf("-") === -1) return typeof e.is == "string";
  switch (t) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var oc = null;
function pu(t) {
  return (
    (t = t.target || t.srcElement || window),
    t.correspondingUseElement && (t = t.correspondingUseElement),
    t.nodeType === 3 ? t.parentNode : t
  );
}
var lc = null,
  xs = null,
  _s = null;
function hd(t) {
  if ((t = Xi(t))) {
    if (typeof lc != "function") throw Error($(280));
    var e = t.stateNode;
    e && ((e = Fo(e)), lc(t.stateNode, t.type, e));
  }
}
function kp(t) {
  xs ? (_s ? _s.push(t) : (_s = [t])) : (xs = t);
}
function Sp() {
  if (xs) {
    var t = xs,
      e = _s;
    if (((_s = xs = null), hd(t), e)) for (t = 0; t < e.length; t++) hd(e[t]);
  }
}
function Ep(t, e) {
  return t(e);
}
function jp() {}
var fl = !1;
function Tp(t, e, n) {
  if (fl) return t(e, n);
  fl = !0;
  try {
    return Ep(t, e, n);
  } finally {
    ((fl = !1), (xs !== null || _s !== null) && (jp(), Sp()));
  }
}
function Ei(t, e) {
  var n = t.stateNode;
  if (n === null) return null;
  var r = Fo(n);
  if (r === null) return null;
  n = r[e];
  e: switch (e) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      ((r = !r.disabled) ||
        ((t = t.type),
        (r = !(
          t === "button" ||
          t === "input" ||
          t === "select" ||
          t === "textarea"
        ))),
        (t = !r));
      break e;
    default:
      t = !1;
  }
  if (t) return null;
  if (n && typeof n != "function") throw Error($(231, e, typeof n));
  return n;
}
var cc = !1;
if (qn)
  try {
    var qs = {};
    (Object.defineProperty(qs, "passive", {
      get: function () {
        cc = !0;
      },
    }),
      window.addEventListener("test", qs, qs),
      window.removeEventListener("test", qs, qs));
  } catch {
    cc = !1;
  }
function Ug(t, e, n, r, s, i, a, l, c) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    e.apply(n, u);
  } catch (d) {
    this.onError(d);
  }
}
var pi = !1,
  Qa = null,
  eo = !1,
  uc = null,
  Bg = {
    onError: function (t) {
      ((pi = !0), (Qa = t));
    },
  };
function zg(t, e, n, r, s, i, a, l, c) {
  ((pi = !1), (Qa = null), Ug.apply(Bg, arguments));
}
function Fg(t, e, n, r, s, i, a, l, c) {
  if ((zg.apply(this, arguments), pi)) {
    if (pi) {
      var u = Qa;
      ((pi = !1), (Qa = null));
    } else throw Error($(198));
    eo || ((eo = !0), (uc = u));
  }
}
function qr(t) {
  var e = t,
    n = t;
  if (t.alternate) for (; e.return; ) e = e.return;
  else {
    t = e;
    do ((e = t), e.flags & 4098 && (n = e.return), (t = e.return));
    while (t);
  }
  return e.tag === 3 ? n : null;
}
function Np(t) {
  if (t.tag === 13) {
    var e = t.memoizedState;
    if (
      (e === null && ((t = t.alternate), t !== null && (e = t.memoizedState)),
      e !== null)
    )
      return e.dehydrated;
  }
  return null;
}
function fd(t) {
  if (qr(t) !== t) throw Error($(188));
}
function Hg(t) {
  var e = t.alternate;
  if (!e) {
    if (((e = qr(t)), e === null)) throw Error($(188));
    return e !== t ? null : t;
  }
  for (var n = t, r = e; ; ) {
    var s = n.return;
    if (s === null) break;
    var i = s.alternate;
    if (i === null) {
      if (((r = s.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (s.child === i.child) {
      for (i = s.child; i; ) {
        if (i === n) return (fd(s), t);
        if (i === r) return (fd(s), e);
        i = i.sibling;
      }
      throw Error($(188));
    }
    if (n.return !== r.return) ((n = s), (r = i));
    else {
      for (var a = !1, l = s.child; l; ) {
        if (l === n) {
          ((a = !0), (n = s), (r = i));
          break;
        }
        if (l === r) {
          ((a = !0), (r = s), (n = i));
          break;
        }
        l = l.sibling;
      }
      if (!a) {
        for (l = i.child; l; ) {
          if (l === n) {
            ((a = !0), (n = i), (r = s));
            break;
          }
          if (l === r) {
            ((a = !0), (r = i), (n = s));
            break;
          }
          l = l.sibling;
        }
        if (!a) throw Error($(189));
      }
    }
    if (n.alternate !== r) throw Error($(190));
  }
  if (n.tag !== 3) throw Error($(188));
  return n.stateNode.current === n ? t : e;
}
function Cp(t) {
  return ((t = Hg(t)), t !== null ? Rp(t) : null);
}
function Rp(t) {
  if (t.tag === 5 || t.tag === 6) return t;
  for (t = t.child; t !== null; ) {
    var e = Rp(t);
    if (e !== null) return e;
    t = t.sibling;
  }
  return null;
}
var Ap = Jt.unstable_scheduleCallback,
  pd = Jt.unstable_cancelCallback,
  Vg = Jt.unstable_shouldYield,
  Wg = Jt.unstable_requestPaint,
  at = Jt.unstable_now,
  qg = Jt.unstable_getCurrentPriorityLevel,
  mu = Jt.unstable_ImmediatePriority,
  Pp = Jt.unstable_UserBlockingPriority,
  to = Jt.unstable_NormalPriority,
  Kg = Jt.unstable_LowPriority,
  Op = Jt.unstable_IdlePriority,
  Do = null,
  An = null;
function Gg(t) {
  if (An && typeof An.onCommitFiberRoot == "function")
    try {
      An.onCommitFiberRoot(Do, t, void 0, (t.current.flags & 128) === 128);
    } catch {}
}
var gn = Math.clz32 ? Math.clz32 : Xg,
  Jg = Math.log,
  Yg = Math.LN2;
function Xg(t) {
  return ((t >>>= 0), t === 0 ? 32 : (31 - ((Jg(t) / Yg) | 0)) | 0);
}
var oa = 64,
  la = 4194304;
function ai(t) {
  switch (t & -t) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return t & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return t;
  }
}
function no(t, e) {
  var n = t.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    s = t.suspendedLanes,
    i = t.pingedLanes,
    a = n & 268435455;
  if (a !== 0) {
    var l = a & ~s;
    l !== 0 ? (r = ai(l)) : ((i &= a), i !== 0 && (r = ai(i)));
  } else ((a = n & ~s), a !== 0 ? (r = ai(a)) : i !== 0 && (r = ai(i)));
  if (r === 0) return 0;
  if (
    e !== 0 &&
    e !== r &&
    !(e & s) &&
    ((s = r & -r), (i = e & -e), s >= i || (s === 16 && (i & 4194240) !== 0))
  )
    return e;
  if ((r & 4 && (r |= n & 16), (e = t.entangledLanes), e !== 0))
    for (t = t.entanglements, e &= r; 0 < e; )
      ((n = 31 - gn(e)), (s = 1 << n), (r |= t[n]), (e &= ~s));
  return r;
}
function Zg(t, e) {
  switch (t) {
    case 1:
    case 2:
    case 4:
      return e + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Qg(t, e) {
  for (
    var n = t.suspendedLanes,
      r = t.pingedLanes,
      s = t.expirationTimes,
      i = t.pendingLanes;
    0 < i;

  ) {
    var a = 31 - gn(i),
      l = 1 << a,
      c = s[a];
    (c === -1
      ? (!(l & n) || l & r) && (s[a] = Zg(l, e))
      : c <= e && (t.expiredLanes |= l),
      (i &= ~l));
  }
}
function dc(t) {
  return (
    (t = t.pendingLanes & -1073741825),
    t !== 0 ? t : t & 1073741824 ? 1073741824 : 0
  );
}
function Ip() {
  var t = oa;
  return ((oa <<= 1), !(oa & 4194240) && (oa = 64), t);
}
function pl(t) {
  for (var e = [], n = 0; 31 > n; n++) e.push(t);
  return e;
}
function Ji(t, e, n) {
  ((t.pendingLanes |= e),
    e !== 536870912 && ((t.suspendedLanes = 0), (t.pingedLanes = 0)),
    (t = t.eventTimes),
    (e = 31 - gn(e)),
    (t[e] = n));
}
function ev(t, e) {
  var n = t.pendingLanes & ~e;
  ((t.pendingLanes = e),
    (t.suspendedLanes = 0),
    (t.pingedLanes = 0),
    (t.expiredLanes &= e),
    (t.mutableReadLanes &= e),
    (t.entangledLanes &= e),
    (e = t.entanglements));
  var r = t.eventTimes;
  for (t = t.expirationTimes; 0 < n; ) {
    var s = 31 - gn(n),
      i = 1 << s;
    ((e[s] = 0), (r[s] = -1), (t[s] = -1), (n &= ~i));
  }
}
function gu(t, e) {
  var n = (t.entangledLanes |= e);
  for (t = t.entanglements; n; ) {
    var r = 31 - gn(n),
      s = 1 << r;
    ((s & e) | (t[r] & e) && (t[r] |= e), (n &= ~s));
  }
}
var Be = 0;
function Lp(t) {
  return (
    (t &= -t),
    1 < t ? (4 < t ? (t & 268435455 ? 16 : 536870912) : 4) : 1
  );
}
var Mp,
  vu,
  $p,
  Dp,
  Up,
  hc = !1,
  ca = [],
  cr = null,
  ur = null,
  dr = null,
  ji = new Map(),
  Ti = new Map(),
  nr = [],
  tv =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " ",
    );
function md(t, e) {
  switch (t) {
    case "focusin":
    case "focusout":
      cr = null;
      break;
    case "dragenter":
    case "dragleave":
      ur = null;
      break;
    case "mouseover":
    case "mouseout":
      dr = null;
      break;
    case "pointerover":
    case "pointerout":
      ji.delete(e.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Ti.delete(e.pointerId);
  }
}
function Ks(t, e, n, r, s, i) {
  return t === null || t.nativeEvent !== i
    ? ((t = {
        blockedOn: e,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [s],
      }),
      e !== null && ((e = Xi(e)), e !== null && vu(e)),
      t)
    : ((t.eventSystemFlags |= r),
      (e = t.targetContainers),
      s !== null && e.indexOf(s) === -1 && e.push(s),
      t);
}
function nv(t, e, n, r, s) {
  switch (e) {
    case "focusin":
      return ((cr = Ks(cr, t, e, n, r, s)), !0);
    case "dragenter":
      return ((ur = Ks(ur, t, e, n, r, s)), !0);
    case "mouseover":
      return ((dr = Ks(dr, t, e, n, r, s)), !0);
    case "pointerover":
      var i = s.pointerId;
      return (ji.set(i, Ks(ji.get(i) || null, t, e, n, r, s)), !0);
    case "gotpointercapture":
      return (
        (i = s.pointerId),
        Ti.set(i, Ks(Ti.get(i) || null, t, e, n, r, s)),
        !0
      );
  }
  return !1;
}
function Bp(t) {
  var e = Ar(t.target);
  if (e !== null) {
    var n = qr(e);
    if (n !== null) {
      if (((e = n.tag), e === 13)) {
        if (((e = Np(n)), e !== null)) {
          ((t.blockedOn = e),
            Up(t.priority, function () {
              $p(n);
            }));
          return;
        }
      } else if (e === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        t.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  t.blockedOn = null;
}
function Da(t) {
  if (t.blockedOn !== null) return !1;
  for (var e = t.targetContainers; 0 < e.length; ) {
    var n = fc(t.domEventName, t.eventSystemFlags, e[0], t.nativeEvent);
    if (n === null) {
      n = t.nativeEvent;
      var r = new n.constructor(n.type, n);
      ((oc = r), n.target.dispatchEvent(r), (oc = null));
    } else return ((e = Xi(n)), e !== null && vu(e), (t.blockedOn = n), !1);
    e.shift();
  }
  return !0;
}
function gd(t, e, n) {
  Da(t) && n.delete(e);
}
function rv() {
  ((hc = !1),
    cr !== null && Da(cr) && (cr = null),
    ur !== null && Da(ur) && (ur = null),
    dr !== null && Da(dr) && (dr = null),
    ji.forEach(gd),
    Ti.forEach(gd));
}
function Gs(t, e) {
  t.blockedOn === e &&
    ((t.blockedOn = null),
    hc ||
      ((hc = !0),
      Jt.unstable_scheduleCallback(Jt.unstable_NormalPriority, rv)));
}
function Ni(t) {
  function e(s) {
    return Gs(s, t);
  }
  if (0 < ca.length) {
    Gs(ca[0], t);
    for (var n = 1; n < ca.length; n++) {
      var r = ca[n];
      r.blockedOn === t && (r.blockedOn = null);
    }
  }
  for (
    cr !== null && Gs(cr, t),
      ur !== null && Gs(ur, t),
      dr !== null && Gs(dr, t),
      ji.forEach(e),
      Ti.forEach(e),
      n = 0;
    n < nr.length;
    n++
  )
    ((r = nr[n]), r.blockedOn === t && (r.blockedOn = null));
  for (; 0 < nr.length && ((n = nr[0]), n.blockedOn === null); )
    (Bp(n), n.blockedOn === null && nr.shift());
}
var bs = Yn.ReactCurrentBatchConfig,
  ro = !0;
function sv(t, e, n, r) {
  var s = Be,
    i = bs.transition;
  bs.transition = null;
  try {
    ((Be = 1), yu(t, e, n, r));
  } finally {
    ((Be = s), (bs.transition = i));
  }
}
function iv(t, e, n, r) {
  var s = Be,
    i = bs.transition;
  bs.transition = null;
  try {
    ((Be = 4), yu(t, e, n, r));
  } finally {
    ((Be = s), (bs.transition = i));
  }
}
function yu(t, e, n, r) {
  if (ro) {
    var s = fc(t, e, n, r);
    if (s === null) (Sl(t, e, r, so, n), md(t, r));
    else if (nv(s, t, e, n, r)) r.stopPropagation();
    else if ((md(t, r), e & 4 && -1 < tv.indexOf(t))) {
      for (; s !== null; ) {
        var i = Xi(s);
        if (
          (i !== null && Mp(i),
          (i = fc(t, e, n, r)),
          i === null && Sl(t, e, r, so, n),
          i === s)
        )
          break;
        s = i;
      }
      s !== null && r.stopPropagation();
    } else Sl(t, e, r, null, n);
  }
}
var so = null;
function fc(t, e, n, r) {
  if (((so = null), (t = pu(r)), (t = Ar(t)), t !== null))
    if (((e = qr(t)), e === null)) t = null;
    else if (((n = e.tag), n === 13)) {
      if (((t = Np(e)), t !== null)) return t;
      t = null;
    } else if (n === 3) {
      if (e.stateNode.current.memoizedState.isDehydrated)
        return e.tag === 3 ? e.stateNode.containerInfo : null;
      t = null;
    } else e !== t && (t = null);
  return ((so = t), null);
}
function zp(t) {
  switch (t) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (qg()) {
        case mu:
          return 1;
        case Pp:
          return 4;
        case to:
        case Kg:
          return 16;
        case Op:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var ar = null,
  wu = null,
  Ua = null;
function Fp() {
  if (Ua) return Ua;
  var t,
    e = wu,
    n = e.length,
    r,
    s = "value" in ar ? ar.value : ar.textContent,
    i = s.length;
  for (t = 0; t < n && e[t] === s[t]; t++);
  var a = n - t;
  for (r = 1; r <= a && e[n - r] === s[i - r]; r++);
  return (Ua = s.slice(t, 1 < r ? 1 - r : void 0));
}
function Ba(t) {
  var e = t.keyCode;
  return (
    "charCode" in t
      ? ((t = t.charCode), t === 0 && e === 13 && (t = 13))
      : (t = e),
    t === 10 && (t = 13),
    32 <= t || t === 13 ? t : 0
  );
}
function ua() {
  return !0;
}
function vd() {
  return !1;
}
function Xt(t) {
  function e(n, r, s, i, a) {
    ((this._reactName = n),
      (this._targetInst = s),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = a),
      (this.currentTarget = null));
    for (var l in t)
      t.hasOwnProperty(l) && ((n = t[l]), (this[l] = n ? n(i) : i[l]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? ua
        : vd),
      (this.isPropagationStopped = vd),
      this
    );
  }
  return (
    nt(e.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = ua));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = ua));
      },
      persist: function () {},
      isPersistent: ua,
    }),
    e
  );
}
var Bs = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (t) {
      return t.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  xu = Xt(Bs),
  Yi = nt({}, Bs, { view: 0, detail: 0 }),
  av = Xt(Yi),
  ml,
  gl,
  Js,
  Uo = nt({}, Yi, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: _u,
    button: 0,
    buttons: 0,
    relatedTarget: function (t) {
      return t.relatedTarget === void 0
        ? t.fromElement === t.srcElement
          ? t.toElement
          : t.fromElement
        : t.relatedTarget;
    },
    movementX: function (t) {
      return "movementX" in t
        ? t.movementX
        : (t !== Js &&
            (Js && t.type === "mousemove"
              ? ((ml = t.screenX - Js.screenX), (gl = t.screenY - Js.screenY))
              : (gl = ml = 0),
            (Js = t)),
          ml);
    },
    movementY: function (t) {
      return "movementY" in t ? t.movementY : gl;
    },
  }),
  yd = Xt(Uo),
  ov = nt({}, Uo, { dataTransfer: 0 }),
  lv = Xt(ov),
  cv = nt({}, Yi, { relatedTarget: 0 }),
  vl = Xt(cv),
  uv = nt({}, Bs, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  dv = Xt(uv),
  hv = nt({}, Bs, {
    clipboardData: function (t) {
      return "clipboardData" in t ? t.clipboardData : window.clipboardData;
    },
  }),
  fv = Xt(hv),
  pv = nt({}, Bs, { data: 0 }),
  wd = Xt(pv),
  mv = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  gv = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  vv = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function yv(t) {
  var e = this.nativeEvent;
  return e.getModifierState ? e.getModifierState(t) : (t = vv[t]) ? !!e[t] : !1;
}
function _u() {
  return yv;
}
var wv = nt({}, Yi, {
    key: function (t) {
      if (t.key) {
        var e = mv[t.key] || t.key;
        if (e !== "Unidentified") return e;
      }
      return t.type === "keypress"
        ? ((t = Ba(t)), t === 13 ? "Enter" : String.fromCharCode(t))
        : t.type === "keydown" || t.type === "keyup"
          ? gv[t.keyCode] || "Unidentified"
          : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: _u,
    charCode: function (t) {
      return t.type === "keypress" ? Ba(t) : 0;
    },
    keyCode: function (t) {
      return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    },
    which: function (t) {
      return t.type === "keypress"
        ? Ba(t)
        : t.type === "keydown" || t.type === "keyup"
          ? t.keyCode
          : 0;
    },
  }),
  xv = Xt(wv),
  _v = nt({}, Uo, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  xd = Xt(_v),
  bv = nt({}, Yi, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: _u,
  }),
  kv = Xt(bv),
  Sv = nt({}, Bs, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Ev = Xt(Sv),
  jv = nt({}, Uo, {
    deltaX: function (t) {
      return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
    },
    deltaY: function (t) {
      return "deltaY" in t
        ? t.deltaY
        : "wheelDeltaY" in t
          ? -t.wheelDeltaY
          : "wheelDelta" in t
            ? -t.wheelDelta
            : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Tv = Xt(jv),
  Nv = [9, 13, 27, 32],
  bu = qn && "CompositionEvent" in window,
  mi = null;
qn && "documentMode" in document && (mi = document.documentMode);
var Cv = qn && "TextEvent" in window && !mi,
  Hp = qn && (!bu || (mi && 8 < mi && 11 >= mi)),
  _d = " ",
  bd = !1;
function Vp(t, e) {
  switch (t) {
    case "keyup":
      return Nv.indexOf(e.keyCode) !== -1;
    case "keydown":
      return e.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Wp(t) {
  return ((t = t.detail), typeof t == "object" && "data" in t ? t.data : null);
}
var cs = !1;
function Rv(t, e) {
  switch (t) {
    case "compositionend":
      return Wp(e);
    case "keypress":
      return e.which !== 32 ? null : ((bd = !0), _d);
    case "textInput":
      return ((t = e.data), t === _d && bd ? null : t);
    default:
      return null;
  }
}
function Av(t, e) {
  if (cs)
    return t === "compositionend" || (!bu && Vp(t, e))
      ? ((t = Fp()), (Ua = wu = ar = null), (cs = !1), t)
      : null;
  switch (t) {
    case "paste":
      return null;
    case "keypress":
      if (!(e.ctrlKey || e.altKey || e.metaKey) || (e.ctrlKey && e.altKey)) {
        if (e.char && 1 < e.char.length) return e.char;
        if (e.which) return String.fromCharCode(e.which);
      }
      return null;
    case "compositionend":
      return Hp && e.locale !== "ko" ? null : e.data;
    default:
      return null;
  }
}
var Pv = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function kd(t) {
  var e = t && t.nodeName && t.nodeName.toLowerCase();
  return e === "input" ? !!Pv[t.type] : e === "textarea";
}
function qp(t, e, n, r) {
  (kp(r),
    (e = io(e, "onChange")),
    0 < e.length &&
      ((n = new xu("onChange", "change", null, n, r)),
      t.push({ event: n, listeners: e })));
}
var gi = null,
  Ci = null;
function Ov(t) {
  rm(t, 0);
}
function Bo(t) {
  var e = hs(t);
  if (gp(e)) return t;
}
function Iv(t, e) {
  if (t === "change") return e;
}
var Kp = !1;
if (qn) {
  var yl;
  if (qn) {
    var wl = "oninput" in document;
    if (!wl) {
      var Sd = document.createElement("div");
      (Sd.setAttribute("oninput", "return;"),
        (wl = typeof Sd.oninput == "function"));
    }
    yl = wl;
  } else yl = !1;
  Kp = yl && (!document.documentMode || 9 < document.documentMode);
}
function Ed() {
  gi && (gi.detachEvent("onpropertychange", Gp), (Ci = gi = null));
}
function Gp(t) {
  if (t.propertyName === "value" && Bo(Ci)) {
    var e = [];
    (qp(e, Ci, t, pu(t)), Tp(Ov, e));
  }
}
function Lv(t, e, n) {
  t === "focusin"
    ? (Ed(), (gi = e), (Ci = n), gi.attachEvent("onpropertychange", Gp))
    : t === "focusout" && Ed();
}
function Mv(t) {
  if (t === "selectionchange" || t === "keyup" || t === "keydown")
    return Bo(Ci);
}
function $v(t, e) {
  if (t === "click") return Bo(e);
}
function Dv(t, e) {
  if (t === "input" || t === "change") return Bo(e);
}
function Uv(t, e) {
  return (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e);
}
var yn = typeof Object.is == "function" ? Object.is : Uv;
function Ri(t, e) {
  if (yn(t, e)) return !0;
  if (typeof t != "object" || t === null || typeof e != "object" || e === null)
    return !1;
  var n = Object.keys(t),
    r = Object.keys(e);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var s = n[r];
    if (!Jl.call(e, s) || !yn(t[s], e[s])) return !1;
  }
  return !0;
}
function jd(t) {
  for (; t && t.firstChild; ) t = t.firstChild;
  return t;
}
function Td(t, e) {
  var n = jd(t);
  t = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = t + n.textContent.length), t <= e && r >= e))
        return { node: n, offset: e - t };
      t = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = jd(n);
  }
}
function Jp(t, e) {
  return t && e
    ? t === e
      ? !0
      : t && t.nodeType === 3
        ? !1
        : e && e.nodeType === 3
          ? Jp(t, e.parentNode)
          : "contains" in t
            ? t.contains(e)
            : t.compareDocumentPosition
              ? !!(t.compareDocumentPosition(e) & 16)
              : !1
    : !1;
}
function Yp() {
  for (var t = window, e = Za(); e instanceof t.HTMLIFrameElement; ) {
    try {
      var n = typeof e.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) t = e.contentWindow;
    else break;
    e = Za(t.document);
  }
  return e;
}
function ku(t) {
  var e = t && t.nodeName && t.nodeName.toLowerCase();
  return (
    e &&
    ((e === "input" &&
      (t.type === "text" ||
        t.type === "search" ||
        t.type === "tel" ||
        t.type === "url" ||
        t.type === "password")) ||
      e === "textarea" ||
      t.contentEditable === "true")
  );
}
function Bv(t) {
  var e = Yp(),
    n = t.focusedElem,
    r = t.selectionRange;
  if (
    e !== n &&
    n &&
    n.ownerDocument &&
    Jp(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && ku(n)) {
      if (
        ((e = r.start),
        (t = r.end),
        t === void 0 && (t = e),
        "selectionStart" in n)
      )
        ((n.selectionStart = e),
          (n.selectionEnd = Math.min(t, n.value.length)));
      else if (
        ((t = ((e = n.ownerDocument || document) && e.defaultView) || window),
        t.getSelection)
      ) {
        t = t.getSelection();
        var s = n.textContent.length,
          i = Math.min(r.start, s);
        ((r = r.end === void 0 ? i : Math.min(r.end, s)),
          !t.extend && i > r && ((s = r), (r = i), (i = s)),
          (s = Td(n, i)));
        var a = Td(n, r);
        s &&
          a &&
          (t.rangeCount !== 1 ||
            t.anchorNode !== s.node ||
            t.anchorOffset !== s.offset ||
            t.focusNode !== a.node ||
            t.focusOffset !== a.offset) &&
          ((e = e.createRange()),
          e.setStart(s.node, s.offset),
          t.removeAllRanges(),
          i > r
            ? (t.addRange(e), t.extend(a.node, a.offset))
            : (e.setEnd(a.node, a.offset), t.addRange(e)));
      }
    }
    for (e = [], t = n; (t = t.parentNode); )
      t.nodeType === 1 &&
        e.push({ element: t, left: t.scrollLeft, top: t.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < e.length; n++)
      ((t = e[n]),
        (t.element.scrollLeft = t.left),
        (t.element.scrollTop = t.top));
  }
}
var zv = qn && "documentMode" in document && 11 >= document.documentMode,
  us = null,
  pc = null,
  vi = null,
  mc = !1;
function Nd(t, e, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  mc ||
    us == null ||
    us !== Za(r) ||
    ((r = us),
    "selectionStart" in r && ku(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (vi && Ri(vi, r)) ||
      ((vi = r),
      (r = io(pc, "onSelect")),
      0 < r.length &&
        ((e = new xu("onSelect", "select", null, e, n)),
        t.push({ event: e, listeners: r }),
        (e.target = us))));
}
function da(t, e) {
  var n = {};
  return (
    (n[t.toLowerCase()] = e.toLowerCase()),
    (n["Webkit" + t] = "webkit" + e),
    (n["Moz" + t] = "moz" + e),
    n
  );
}
var ds = {
    animationend: da("Animation", "AnimationEnd"),
    animationiteration: da("Animation", "AnimationIteration"),
    animationstart: da("Animation", "AnimationStart"),
    transitionend: da("Transition", "TransitionEnd"),
  },
  xl = {},
  Xp = {};
qn &&
  ((Xp = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete ds.animationend.animation,
    delete ds.animationiteration.animation,
    delete ds.animationstart.animation),
  "TransitionEvent" in window || delete ds.transitionend.transition);
function zo(t) {
  if (xl[t]) return xl[t];
  if (!ds[t]) return t;
  var e = ds[t],
    n;
  for (n in e) if (e.hasOwnProperty(n) && n in Xp) return (xl[t] = e[n]);
  return t;
}
var Zp = zo("animationend"),
  Qp = zo("animationiteration"),
  em = zo("animationstart"),
  tm = zo("transitionend"),
  nm = new Map(),
  Cd =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " ",
    );
function xr(t, e) {
  (nm.set(t, e), Wr(e, [t]));
}
for (var _l = 0; _l < Cd.length; _l++) {
  var bl = Cd[_l],
    Fv = bl.toLowerCase(),
    Hv = bl[0].toUpperCase() + bl.slice(1);
  xr(Fv, "on" + Hv);
}
xr(Zp, "onAnimationEnd");
xr(Qp, "onAnimationIteration");
xr(em, "onAnimationStart");
xr("dblclick", "onDoubleClick");
xr("focusin", "onFocus");
xr("focusout", "onBlur");
xr(tm, "onTransitionEnd");
Rs("onMouseEnter", ["mouseout", "mouseover"]);
Rs("onMouseLeave", ["mouseout", "mouseover"]);
Rs("onPointerEnter", ["pointerout", "pointerover"]);
Rs("onPointerLeave", ["pointerout", "pointerover"]);
Wr(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(
    " ",
  ),
);
Wr(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " ",
  ),
);
Wr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Wr(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" "),
);
Wr(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" "),
);
Wr(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
);
var oi =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " ",
    ),
  Vv = new Set("cancel close invalid load scroll toggle".split(" ").concat(oi));
function Rd(t, e, n) {
  var r = t.type || "unknown-event";
  ((t.currentTarget = n), Fg(r, e, void 0, t), (t.currentTarget = null));
}
function rm(t, e) {
  e = (e & 4) !== 0;
  for (var n = 0; n < t.length; n++) {
    var r = t[n],
      s = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (e)
        for (var a = r.length - 1; 0 <= a; a--) {
          var l = r[a],
            c = l.instance,
            u = l.currentTarget;
          if (((l = l.listener), c !== i && s.isPropagationStopped())) break e;
          (Rd(s, l, u), (i = c));
        }
      else
        for (a = 0; a < r.length; a++) {
          if (
            ((l = r[a]),
            (c = l.instance),
            (u = l.currentTarget),
            (l = l.listener),
            c !== i && s.isPropagationStopped())
          )
            break e;
          (Rd(s, l, u), (i = c));
        }
    }
  }
  if (eo) throw ((t = uc), (eo = !1), (uc = null), t);
}
function Ke(t, e) {
  var n = e[xc];
  n === void 0 && (n = e[xc] = new Set());
  var r = t + "__bubble";
  n.has(r) || (sm(e, t, 2, !1), n.add(r));
}
function kl(t, e, n) {
  var r = 0;
  (e && (r |= 4), sm(n, t, r, e));
}
var ha = "_reactListening" + Math.random().toString(36).slice(2);
function Ai(t) {
  if (!t[ha]) {
    ((t[ha] = !0),
      dp.forEach(function (n) {
        n !== "selectionchange" && (Vv.has(n) || kl(n, !1, t), kl(n, !0, t));
      }));
    var e = t.nodeType === 9 ? t : t.ownerDocument;
    e === null || e[ha] || ((e[ha] = !0), kl("selectionchange", !1, e));
  }
}
function sm(t, e, n, r) {
  switch (zp(e)) {
    case 1:
      var s = sv;
      break;
    case 4:
      s = iv;
      break;
    default:
      s = yu;
  }
  ((n = s.bind(null, e, n, t)),
    (s = void 0),
    !cc ||
      (e !== "touchstart" && e !== "touchmove" && e !== "wheel") ||
      (s = !0),
    r
      ? s !== void 0
        ? t.addEventListener(e, n, { capture: !0, passive: s })
        : t.addEventListener(e, n, !0)
      : s !== void 0
        ? t.addEventListener(e, n, { passive: s })
        : t.addEventListener(e, n, !1));
}
function Sl(t, e, n, r, s) {
  var i = r;
  if (!(e & 1) && !(e & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var a = r.tag;
      if (a === 3 || a === 4) {
        var l = r.stateNode.containerInfo;
        if (l === s || (l.nodeType === 8 && l.parentNode === s)) break;
        if (a === 4)
          for (a = r.return; a !== null; ) {
            var c = a.tag;
            if (
              (c === 3 || c === 4) &&
              ((c = a.stateNode.containerInfo),
              c === s || (c.nodeType === 8 && c.parentNode === s))
            )
              return;
            a = a.return;
          }
        for (; l !== null; ) {
          if (((a = Ar(l)), a === null)) return;
          if (((c = a.tag), c === 5 || c === 6)) {
            r = i = a;
            continue e;
          }
          l = l.parentNode;
        }
      }
      r = r.return;
    }
  Tp(function () {
    var u = i,
      d = pu(n),
      f = [];
    e: {
      var h = nm.get(t);
      if (h !== void 0) {
        var p = xu,
          v = t;
        switch (t) {
          case "keypress":
            if (Ba(n) === 0) break e;
          case "keydown":
          case "keyup":
            p = xv;
            break;
          case "focusin":
            ((v = "focus"), (p = vl));
            break;
          case "focusout":
            ((v = "blur"), (p = vl));
            break;
          case "beforeblur":
          case "afterblur":
            p = vl;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            p = yd;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            p = lv;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            p = kv;
            break;
          case Zp:
          case Qp:
          case em:
            p = dv;
            break;
          case tm:
            p = Ev;
            break;
          case "scroll":
            p = av;
            break;
          case "wheel":
            p = Tv;
            break;
          case "copy":
          case "cut":
          case "paste":
            p = fv;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            p = xd;
        }
        var x = (e & 4) !== 0,
          _ = !x && t === "scroll",
          m = x ? (h !== null ? h + "Capture" : null) : h;
        x = [];
        for (var g = u, y; g !== null; ) {
          y = g;
          var E = y.stateNode;
          if (
            (y.tag === 5 &&
              E !== null &&
              ((y = E),
              m !== null && ((E = Ei(g, m)), E != null && x.push(Pi(g, E, y)))),
            _)
          )
            break;
          g = g.return;
        }
        0 < x.length &&
          ((h = new p(h, v, null, n, d)), f.push({ event: h, listeners: x }));
      }
    }
    if (!(e & 7)) {
      e: {
        if (
          ((h = t === "mouseover" || t === "pointerover"),
          (p = t === "mouseout" || t === "pointerout"),
          h &&
            n !== oc &&
            (v = n.relatedTarget || n.fromElement) &&
            (Ar(v) || v[Kn]))
        )
          break e;
        if (
          (p || h) &&
          ((h =
            d.window === d
              ? d
              : (h = d.ownerDocument)
                ? h.defaultView || h.parentWindow
                : window),
          p
            ? ((v = n.relatedTarget || n.toElement),
              (p = u),
              (v = v ? Ar(v) : null),
              v !== null &&
                ((_ = qr(v)), v !== _ || (v.tag !== 5 && v.tag !== 6)) &&
                (v = null))
            : ((p = null), (v = u)),
          p !== v)
        ) {
          if (
            ((x = yd),
            (E = "onMouseLeave"),
            (m = "onMouseEnter"),
            (g = "mouse"),
            (t === "pointerout" || t === "pointerover") &&
              ((x = xd),
              (E = "onPointerLeave"),
              (m = "onPointerEnter"),
              (g = "pointer")),
            (_ = p == null ? h : hs(p)),
            (y = v == null ? h : hs(v)),
            (h = new x(E, g + "leave", p, n, d)),
            (h.target = _),
            (h.relatedTarget = y),
            (E = null),
            Ar(d) === u &&
              ((x = new x(m, g + "enter", v, n, d)),
              (x.target = y),
              (x.relatedTarget = _),
              (E = x)),
            (_ = E),
            p && v)
          )
            t: {
              for (x = p, m = v, g = 0, y = x; y; y = Jr(y)) g++;
              for (y = 0, E = m; E; E = Jr(E)) y++;
              for (; 0 < g - y; ) ((x = Jr(x)), g--);
              for (; 0 < y - g; ) ((m = Jr(m)), y--);
              for (; g--; ) {
                if (x === m || (m !== null && x === m.alternate)) break t;
                ((x = Jr(x)), (m = Jr(m)));
              }
              x = null;
            }
          else x = null;
          (p !== null && Ad(f, h, p, x, !1),
            v !== null && _ !== null && Ad(f, _, v, x, !0));
        }
      }
      e: {
        if (
          ((h = u ? hs(u) : window),
          (p = h.nodeName && h.nodeName.toLowerCase()),
          p === "select" || (p === "input" && h.type === "file"))
        )
          var R = Iv;
        else if (kd(h))
          if (Kp) R = Dv;
          else {
            R = Mv;
            var A = Lv;
          }
        else
          (p = h.nodeName) &&
            p.toLowerCase() === "input" &&
            (h.type === "checkbox" || h.type === "radio") &&
            (R = $v);
        if (R && (R = R(t, u))) {
          qp(f, R, n, d);
          break e;
        }
        (A && A(t, h, u),
          t === "focusout" &&
            (A = h._wrapperState) &&
            A.controlled &&
            h.type === "number" &&
            nc(h, "number", h.value));
      }
      switch (((A = u ? hs(u) : window), t)) {
        case "focusin":
          (kd(A) || A.contentEditable === "true") &&
            ((us = A), (pc = u), (vi = null));
          break;
        case "focusout":
          vi = pc = us = null;
          break;
        case "mousedown":
          mc = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          ((mc = !1), Nd(f, n, d));
          break;
        case "selectionchange":
          if (zv) break;
        case "keydown":
        case "keyup":
          Nd(f, n, d);
      }
      var P;
      if (bu)
        e: {
          switch (t) {
            case "compositionstart":
              var U = "onCompositionStart";
              break e;
            case "compositionend":
              U = "onCompositionEnd";
              break e;
            case "compositionupdate":
              U = "onCompositionUpdate";
              break e;
          }
          U = void 0;
        }
      else
        cs
          ? Vp(t, n) && (U = "onCompositionEnd")
          : t === "keydown" && n.keyCode === 229 && (U = "onCompositionStart");
      (U &&
        (Hp &&
          n.locale !== "ko" &&
          (cs || U !== "onCompositionStart"
            ? U === "onCompositionEnd" && cs && (P = Fp())
            : ((ar = d),
              (wu = "value" in ar ? ar.value : ar.textContent),
              (cs = !0))),
        (A = io(u, U)),
        0 < A.length &&
          ((U = new wd(U, t, null, n, d)),
          f.push({ event: U, listeners: A }),
          P ? (U.data = P) : ((P = Wp(n)), P !== null && (U.data = P)))),
        (P = Cv ? Rv(t, n) : Av(t, n)) &&
          ((u = io(u, "onBeforeInput")),
          0 < u.length &&
            ((d = new wd("onBeforeInput", "beforeinput", null, n, d)),
            f.push({ event: d, listeners: u }),
            (d.data = P))));
    }
    rm(f, e);
  });
}
function Pi(t, e, n) {
  return { instance: t, listener: e, currentTarget: n };
}
function io(t, e) {
  for (var n = e + "Capture", r = []; t !== null; ) {
    var s = t,
      i = s.stateNode;
    (s.tag === 5 &&
      i !== null &&
      ((s = i),
      (i = Ei(t, n)),
      i != null && r.unshift(Pi(t, i, s)),
      (i = Ei(t, e)),
      i != null && r.push(Pi(t, i, s))),
      (t = t.return));
  }
  return r;
}
function Jr(t) {
  if (t === null) return null;
  do t = t.return;
  while (t && t.tag !== 5);
  return t || null;
}
function Ad(t, e, n, r, s) {
  for (var i = e._reactName, a = []; n !== null && n !== r; ) {
    var l = n,
      c = l.alternate,
      u = l.stateNode;
    if (c !== null && c === r) break;
    (l.tag === 5 &&
      u !== null &&
      ((l = u),
      s
        ? ((c = Ei(n, i)), c != null && a.unshift(Pi(n, c, l)))
        : s || ((c = Ei(n, i)), c != null && a.push(Pi(n, c, l)))),
      (n = n.return));
  }
  a.length !== 0 && t.push({ event: e, listeners: a });
}
var Wv = /\r\n?/g,
  qv = /\u0000|\uFFFD/g;
function Pd(t) {
  return (typeof t == "string" ? t : "" + t)
    .replace(
      Wv,
      `
`,
    )
    .replace(qv, "");
}
function fa(t, e, n) {
  if (((e = Pd(e)), Pd(t) !== e && n)) throw Error($(425));
}
function ao() {}
var gc = null,
  vc = null;
function yc(t, e) {
  return (
    t === "textarea" ||
    t === "noscript" ||
    typeof e.children == "string" ||
    typeof e.children == "number" ||
    (typeof e.dangerouslySetInnerHTML == "object" &&
      e.dangerouslySetInnerHTML !== null &&
      e.dangerouslySetInnerHTML.__html != null)
  );
}
var wc = typeof setTimeout == "function" ? setTimeout : void 0,
  Kv = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Od = typeof Promise == "function" ? Promise : void 0,
  Gv =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Od < "u"
        ? function (t) {
            return Od.resolve(null).then(t).catch(Jv);
          }
        : wc;
function Jv(t) {
  setTimeout(function () {
    throw t;
  });
}
function El(t, e) {
  var n = e,
    r = 0;
  do {
    var s = n.nextSibling;
    if ((t.removeChild(n), s && s.nodeType === 8))
      if (((n = s.data), n === "/$")) {
        if (r === 0) {
          (t.removeChild(s), Ni(e));
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = s;
  } while (n);
  Ni(e);
}
function hr(t) {
  for (; t != null; t = t.nextSibling) {
    var e = t.nodeType;
    if (e === 1 || e === 3) break;
    if (e === 8) {
      if (((e = t.data), e === "$" || e === "$!" || e === "$?")) break;
      if (e === "/$") return null;
    }
  }
  return t;
}
function Id(t) {
  t = t.previousSibling;
  for (var e = 0; t; ) {
    if (t.nodeType === 8) {
      var n = t.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (e === 0) return t;
        e--;
      } else n === "/$" && e++;
    }
    t = t.previousSibling;
  }
  return null;
}
var zs = Math.random().toString(36).slice(2),
  Rn = "__reactFiber$" + zs,
  Oi = "__reactProps$" + zs,
  Kn = "__reactContainer$" + zs,
  xc = "__reactEvents$" + zs,
  Yv = "__reactListeners$" + zs,
  Xv = "__reactHandles$" + zs;
function Ar(t) {
  var e = t[Rn];
  if (e) return e;
  for (var n = t.parentNode; n; ) {
    if ((e = n[Kn] || n[Rn])) {
      if (
        ((n = e.alternate),
        e.child !== null || (n !== null && n.child !== null))
      )
        for (t = Id(t); t !== null; ) {
          if ((n = t[Rn])) return n;
          t = Id(t);
        }
      return e;
    }
    ((t = n), (n = t.parentNode));
  }
  return null;
}
function Xi(t) {
  return (
    (t = t[Rn] || t[Kn]),
    !t || (t.tag !== 5 && t.tag !== 6 && t.tag !== 13 && t.tag !== 3) ? null : t
  );
}
function hs(t) {
  if (t.tag === 5 || t.tag === 6) return t.stateNode;
  throw Error($(33));
}
function Fo(t) {
  return t[Oi] || null;
}
var _c = [],
  fs = -1;
function _r(t) {
  return { current: t };
}
function Ge(t) {
  0 > fs || ((t.current = _c[fs]), (_c[fs] = null), fs--);
}
function qe(t, e) {
  (fs++, (_c[fs] = t.current), (t.current = e));
}
var yr = {},
  Et = _r(yr),
  Dt = _r(!1),
  Br = yr;
function As(t, e) {
  var n = t.type.contextTypes;
  if (!n) return yr;
  var r = t.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === e)
    return r.__reactInternalMemoizedMaskedChildContext;
  var s = {},
    i;
  for (i in n) s[i] = e[i];
  return (
    r &&
      ((t = t.stateNode),
      (t.__reactInternalMemoizedUnmaskedChildContext = e),
      (t.__reactInternalMemoizedMaskedChildContext = s)),
    s
  );
}
function Ut(t) {
  return ((t = t.childContextTypes), t != null);
}
function oo() {
  (Ge(Dt), Ge(Et));
}
function Ld(t, e, n) {
  if (Et.current !== yr) throw Error($(168));
  (qe(Et, e), qe(Dt, n));
}
function im(t, e, n) {
  var r = t.stateNode;
  if (((e = e.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var s in r) if (!(s in e)) throw Error($(108, Lg(t) || "Unknown", s));
  return nt({}, n, r);
}
function lo(t) {
  return (
    (t =
      ((t = t.stateNode) && t.__reactInternalMemoizedMergedChildContext) || yr),
    (Br = Et.current),
    qe(Et, t),
    qe(Dt, Dt.current),
    !0
  );
}
function Md(t, e, n) {
  var r = t.stateNode;
  if (!r) throw Error($(169));
  (n
    ? ((t = im(t, e, Br)),
      (r.__reactInternalMemoizedMergedChildContext = t),
      Ge(Dt),
      Ge(Et),
      qe(Et, t))
    : Ge(Dt),
    qe(Dt, n));
}
var zn = null,
  Ho = !1,
  jl = !1;
function am(t) {
  zn === null ? (zn = [t]) : zn.push(t);
}
function Zv(t) {
  ((Ho = !0), am(t));
}
function br() {
  if (!jl && zn !== null) {
    jl = !0;
    var t = 0,
      e = Be;
    try {
      var n = zn;
      for (Be = 1; t < n.length; t++) {
        var r = n[t];
        do r = r(!0);
        while (r !== null);
      }
      ((zn = null), (Ho = !1));
    } catch (s) {
      throw (zn !== null && (zn = zn.slice(t + 1)), Ap(mu, br), s);
    } finally {
      ((Be = e), (jl = !1));
    }
  }
  return null;
}
var ps = [],
  ms = 0,
  co = null,
  uo = 0,
  en = [],
  tn = 0,
  zr = null,
  Hn = 1,
  Vn = "";
function Tr(t, e) {
  ((ps[ms++] = uo), (ps[ms++] = co), (co = t), (uo = e));
}
function om(t, e, n) {
  ((en[tn++] = Hn), (en[tn++] = Vn), (en[tn++] = zr), (zr = t));
  var r = Hn;
  t = Vn;
  var s = 32 - gn(r) - 1;
  ((r &= ~(1 << s)), (n += 1));
  var i = 32 - gn(e) + s;
  if (30 < i) {
    var a = s - (s % 5);
    ((i = (r & ((1 << a) - 1)).toString(32)),
      (r >>= a),
      (s -= a),
      (Hn = (1 << (32 - gn(e) + s)) | (n << s) | r),
      (Vn = i + t));
  } else ((Hn = (1 << i) | (n << s) | r), (Vn = t));
}
function Su(t) {
  t.return !== null && (Tr(t, 1), om(t, 1, 0));
}
function Eu(t) {
  for (; t === co; )
    ((co = ps[--ms]), (ps[ms] = null), (uo = ps[--ms]), (ps[ms] = null));
  for (; t === zr; )
    ((zr = en[--tn]),
      (en[tn] = null),
      (Vn = en[--tn]),
      (en[tn] = null),
      (Hn = en[--tn]),
      (en[tn] = null));
}
var Gt = null,
  Kt = null,
  Ze = !1,
  pn = null;
function lm(t, e) {
  var n = rn(5, null, null, 0);
  ((n.elementType = "DELETED"),
    (n.stateNode = e),
    (n.return = t),
    (e = t.deletions),
    e === null ? ((t.deletions = [n]), (t.flags |= 16)) : e.push(n));
}
function $d(t, e) {
  switch (t.tag) {
    case 5:
      var n = t.type;
      return (
        (e =
          e.nodeType !== 1 || n.toLowerCase() !== e.nodeName.toLowerCase()
            ? null
            : e),
        e !== null
          ? ((t.stateNode = e), (Gt = t), (Kt = hr(e.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (e = t.pendingProps === "" || e.nodeType !== 3 ? null : e),
        e !== null ? ((t.stateNode = e), (Gt = t), (Kt = null), !0) : !1
      );
    case 13:
      return (
        (e = e.nodeType !== 8 ? null : e),
        e !== null
          ? ((n = zr !== null ? { id: Hn, overflow: Vn } : null),
            (t.memoizedState = {
              dehydrated: e,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = rn(18, null, null, 0)),
            (n.stateNode = e),
            (n.return = t),
            (t.child = n),
            (Gt = t),
            (Kt = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function bc(t) {
  return (t.mode & 1) !== 0 && (t.flags & 128) === 0;
}
function kc(t) {
  if (Ze) {
    var e = Kt;
    if (e) {
      var n = e;
      if (!$d(t, e)) {
        if (bc(t)) throw Error($(418));
        e = hr(n.nextSibling);
        var r = Gt;
        e && $d(t, e)
          ? lm(r, n)
          : ((t.flags = (t.flags & -4097) | 2), (Ze = !1), (Gt = t));
      }
    } else {
      if (bc(t)) throw Error($(418));
      ((t.flags = (t.flags & -4097) | 2), (Ze = !1), (Gt = t));
    }
  }
}
function Dd(t) {
  for (t = t.return; t !== null && t.tag !== 5 && t.tag !== 3 && t.tag !== 13; )
    t = t.return;
  Gt = t;
}
function pa(t) {
  if (t !== Gt) return !1;
  if (!Ze) return (Dd(t), (Ze = !0), !1);
  var e;
  if (
    ((e = t.tag !== 3) &&
      !(e = t.tag !== 5) &&
      ((e = t.type),
      (e = e !== "head" && e !== "body" && !yc(t.type, t.memoizedProps))),
    e && (e = Kt))
  ) {
    if (bc(t)) throw (cm(), Error($(418)));
    for (; e; ) (lm(t, e), (e = hr(e.nextSibling)));
  }
  if ((Dd(t), t.tag === 13)) {
    if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
      throw Error($(317));
    e: {
      for (t = t.nextSibling, e = 0; t; ) {
        if (t.nodeType === 8) {
          var n = t.data;
          if (n === "/$") {
            if (e === 0) {
              Kt = hr(t.nextSibling);
              break e;
            }
            e--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || e++;
        }
        t = t.nextSibling;
      }
      Kt = null;
    }
  } else Kt = Gt ? hr(t.stateNode.nextSibling) : null;
  return !0;
}
function cm() {
  for (var t = Kt; t; ) t = hr(t.nextSibling);
}
function Ps() {
  ((Kt = Gt = null), (Ze = !1));
}
function ju(t) {
  pn === null ? (pn = [t]) : pn.push(t);
}
var Qv = Yn.ReactCurrentBatchConfig;
function Ys(t, e, n) {
  if (
    ((t = n.ref), t !== null && typeof t != "function" && typeof t != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error($(309));
        var r = n.stateNode;
      }
      if (!r) throw Error($(147, t));
      var s = r,
        i = "" + t;
      return e !== null &&
        e.ref !== null &&
        typeof e.ref == "function" &&
        e.ref._stringRef === i
        ? e.ref
        : ((e = function (a) {
            var l = s.refs;
            a === null ? delete l[i] : (l[i] = a);
          }),
          (e._stringRef = i),
          e);
    }
    if (typeof t != "string") throw Error($(284));
    if (!n._owner) throw Error($(290, t));
  }
  return t;
}
function ma(t, e) {
  throw (
    (t = Object.prototype.toString.call(e)),
    Error(
      $(
        31,
        t === "[object Object]"
          ? "object with keys {" + Object.keys(e).join(", ") + "}"
          : t,
      ),
    )
  );
}
function Ud(t) {
  var e = t._init;
  return e(t._payload);
}
function um(t) {
  function e(m, g) {
    if (t) {
      var y = m.deletions;
      y === null ? ((m.deletions = [g]), (m.flags |= 16)) : y.push(g);
    }
  }
  function n(m, g) {
    if (!t) return null;
    for (; g !== null; ) (e(m, g), (g = g.sibling));
    return null;
  }
  function r(m, g) {
    for (m = new Map(); g !== null; )
      (g.key !== null ? m.set(g.key, g) : m.set(g.index, g), (g = g.sibling));
    return m;
  }
  function s(m, g) {
    return ((m = gr(m, g)), (m.index = 0), (m.sibling = null), m);
  }
  function i(m, g, y) {
    return (
      (m.index = y),
      t
        ? ((y = m.alternate),
          y !== null
            ? ((y = y.index), y < g ? ((m.flags |= 2), g) : y)
            : ((m.flags |= 2), g))
        : ((m.flags |= 1048576), g)
    );
  }
  function a(m) {
    return (t && m.alternate === null && (m.flags |= 2), m);
  }
  function l(m, g, y, E) {
    return g === null || g.tag !== 6
      ? ((g = Ol(y, m.mode, E)), (g.return = m), g)
      : ((g = s(g, y)), (g.return = m), g);
  }
  function c(m, g, y, E) {
    var R = y.type;
    return R === ls
      ? d(m, g, y.props.children, E, y.key)
      : g !== null &&
          (g.elementType === R ||
            (typeof R == "object" &&
              R !== null &&
              R.$$typeof === er &&
              Ud(R) === g.type))
        ? ((E = s(g, y.props)), (E.ref = Ys(m, g, y)), (E.return = m), E)
        : ((E = Ka(y.type, y.key, y.props, null, m.mode, E)),
          (E.ref = Ys(m, g, y)),
          (E.return = m),
          E);
  }
  function u(m, g, y, E) {
    return g === null ||
      g.tag !== 4 ||
      g.stateNode.containerInfo !== y.containerInfo ||
      g.stateNode.implementation !== y.implementation
      ? ((g = Il(y, m.mode, E)), (g.return = m), g)
      : ((g = s(g, y.children || [])), (g.return = m), g);
  }
  function d(m, g, y, E, R) {
    return g === null || g.tag !== 7
      ? ((g = Ur(y, m.mode, E, R)), (g.return = m), g)
      : ((g = s(g, y)), (g.return = m), g);
  }
  function f(m, g, y) {
    if ((typeof g == "string" && g !== "") || typeof g == "number")
      return ((g = Ol("" + g, m.mode, y)), (g.return = m), g);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case sa:
          return (
            (y = Ka(g.type, g.key, g.props, null, m.mode, y)),
            (y.ref = Ys(m, null, g)),
            (y.return = m),
            y
          );
        case os:
          return ((g = Il(g, m.mode, y)), (g.return = m), g);
        case er:
          var E = g._init;
          return f(m, E(g._payload), y);
      }
      if (ii(g) || Ws(g))
        return ((g = Ur(g, m.mode, y, null)), (g.return = m), g);
      ma(m, g);
    }
    return null;
  }
  function h(m, g, y, E) {
    var R = g !== null ? g.key : null;
    if ((typeof y == "string" && y !== "") || typeof y == "number")
      return R !== null ? null : l(m, g, "" + y, E);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case sa:
          return y.key === R ? c(m, g, y, E) : null;
        case os:
          return y.key === R ? u(m, g, y, E) : null;
        case er:
          return ((R = y._init), h(m, g, R(y._payload), E));
      }
      if (ii(y) || Ws(y)) return R !== null ? null : d(m, g, y, E, null);
      ma(m, y);
    }
    return null;
  }
  function p(m, g, y, E, R) {
    if ((typeof E == "string" && E !== "") || typeof E == "number")
      return ((m = m.get(y) || null), l(g, m, "" + E, R));
    if (typeof E == "object" && E !== null) {
      switch (E.$$typeof) {
        case sa:
          return (
            (m = m.get(E.key === null ? y : E.key) || null),
            c(g, m, E, R)
          );
        case os:
          return (
            (m = m.get(E.key === null ? y : E.key) || null),
            u(g, m, E, R)
          );
        case er:
          var A = E._init;
          return p(m, g, y, A(E._payload), R);
      }
      if (ii(E) || Ws(E)) return ((m = m.get(y) || null), d(g, m, E, R, null));
      ma(g, E);
    }
    return null;
  }
  function v(m, g, y, E) {
    for (
      var R = null, A = null, P = g, U = (g = 0), te = null;
      P !== null && U < y.length;
      U++
    ) {
      P.index > U ? ((te = P), (P = null)) : (te = P.sibling);
      var z = h(m, P, y[U], E);
      if (z === null) {
        P === null && (P = te);
        break;
      }
      (t && P && z.alternate === null && e(m, P),
        (g = i(z, g, U)),
        A === null ? (R = z) : (A.sibling = z),
        (A = z),
        (P = te));
    }
    if (U === y.length) return (n(m, P), Ze && Tr(m, U), R);
    if (P === null) {
      for (; U < y.length; U++)
        ((P = f(m, y[U], E)),
          P !== null &&
            ((g = i(P, g, U)),
            A === null ? (R = P) : (A.sibling = P),
            (A = P)));
      return (Ze && Tr(m, U), R);
    }
    for (P = r(m, P); U < y.length; U++)
      ((te = p(P, m, U, y[U], E)),
        te !== null &&
          (t && te.alternate !== null && P.delete(te.key === null ? U : te.key),
          (g = i(te, g, U)),
          A === null ? (R = te) : (A.sibling = te),
          (A = te)));
    return (
      t &&
        P.forEach(function (Se) {
          return e(m, Se);
        }),
      Ze && Tr(m, U),
      R
    );
  }
  function x(m, g, y, E) {
    var R = Ws(y);
    if (typeof R != "function") throw Error($(150));
    if (((y = R.call(y)), y == null)) throw Error($(151));
    for (
      var A = (R = null), P = g, U = (g = 0), te = null, z = y.next();
      P !== null && !z.done;
      U++, z = y.next()
    ) {
      P.index > U ? ((te = P), (P = null)) : (te = P.sibling);
      var Se = h(m, P, z.value, E);
      if (Se === null) {
        P === null && (P = te);
        break;
      }
      (t && P && Se.alternate === null && e(m, P),
        (g = i(Se, g, U)),
        A === null ? (R = Se) : (A.sibling = Se),
        (A = Se),
        (P = te));
    }
    if (z.done) return (n(m, P), Ze && Tr(m, U), R);
    if (P === null) {
      for (; !z.done; U++, z = y.next())
        ((z = f(m, z.value, E)),
          z !== null &&
            ((g = i(z, g, U)),
            A === null ? (R = z) : (A.sibling = z),
            (A = z)));
      return (Ze && Tr(m, U), R);
    }
    for (P = r(m, P); !z.done; U++, z = y.next())
      ((z = p(P, m, U, z.value, E)),
        z !== null &&
          (t && z.alternate !== null && P.delete(z.key === null ? U : z.key),
          (g = i(z, g, U)),
          A === null ? (R = z) : (A.sibling = z),
          (A = z)));
    return (
      t &&
        P.forEach(function (Ee) {
          return e(m, Ee);
        }),
      Ze && Tr(m, U),
      R
    );
  }
  function _(m, g, y, E) {
    if (
      (typeof y == "object" &&
        y !== null &&
        y.type === ls &&
        y.key === null &&
        (y = y.props.children),
      typeof y == "object" && y !== null)
    ) {
      switch (y.$$typeof) {
        case sa:
          e: {
            for (var R = y.key, A = g; A !== null; ) {
              if (A.key === R) {
                if (((R = y.type), R === ls)) {
                  if (A.tag === 7) {
                    (n(m, A.sibling),
                      (g = s(A, y.props.children)),
                      (g.return = m),
                      (m = g));
                    break e;
                  }
                } else if (
                  A.elementType === R ||
                  (typeof R == "object" &&
                    R !== null &&
                    R.$$typeof === er &&
                    Ud(R) === A.type)
                ) {
                  (n(m, A.sibling),
                    (g = s(A, y.props)),
                    (g.ref = Ys(m, A, y)),
                    (g.return = m),
                    (m = g));
                  break e;
                }
                n(m, A);
                break;
              } else e(m, A);
              A = A.sibling;
            }
            y.type === ls
              ? ((g = Ur(y.props.children, m.mode, E, y.key)),
                (g.return = m),
                (m = g))
              : ((E = Ka(y.type, y.key, y.props, null, m.mode, E)),
                (E.ref = Ys(m, g, y)),
                (E.return = m),
                (m = E));
          }
          return a(m);
        case os:
          e: {
            for (A = y.key; g !== null; ) {
              if (g.key === A)
                if (
                  g.tag === 4 &&
                  g.stateNode.containerInfo === y.containerInfo &&
                  g.stateNode.implementation === y.implementation
                ) {
                  (n(m, g.sibling),
                    (g = s(g, y.children || [])),
                    (g.return = m),
                    (m = g));
                  break e;
                } else {
                  n(m, g);
                  break;
                }
              else e(m, g);
              g = g.sibling;
            }
            ((g = Il(y, m.mode, E)), (g.return = m), (m = g));
          }
          return a(m);
        case er:
          return ((A = y._init), _(m, g, A(y._payload), E));
      }
      if (ii(y)) return v(m, g, y, E);
      if (Ws(y)) return x(m, g, y, E);
      ma(m, y);
    }
    return (typeof y == "string" && y !== "") || typeof y == "number"
      ? ((y = "" + y),
        g !== null && g.tag === 6
          ? (n(m, g.sibling), (g = s(g, y)), (g.return = m), (m = g))
          : (n(m, g), (g = Ol(y, m.mode, E)), (g.return = m), (m = g)),
        a(m))
      : n(m, g);
  }
  return _;
}
var Os = um(!0),
  dm = um(!1),
  ho = _r(null),
  fo = null,
  gs = null,
  Tu = null;
function Nu() {
  Tu = gs = fo = null;
}
function Cu(t) {
  var e = ho.current;
  (Ge(ho), (t._currentValue = e));
}
function Sc(t, e, n) {
  for (; t !== null; ) {
    var r = t.alternate;
    if (
      ((t.childLanes & e) !== e
        ? ((t.childLanes |= e), r !== null && (r.childLanes |= e))
        : r !== null && (r.childLanes & e) !== e && (r.childLanes |= e),
      t === n)
    )
      break;
    t = t.return;
  }
}
function ks(t, e) {
  ((fo = t),
    (Tu = gs = null),
    (t = t.dependencies),
    t !== null &&
      t.firstContext !== null &&
      (t.lanes & e && ($t = !0), (t.firstContext = null)));
}
function an(t) {
  var e = t._currentValue;
  if (Tu !== t)
    if (((t = { context: t, memoizedValue: e, next: null }), gs === null)) {
      if (fo === null) throw Error($(308));
      ((gs = t), (fo.dependencies = { lanes: 0, firstContext: t }));
    } else gs = gs.next = t;
  return e;
}
var Pr = null;
function Ru(t) {
  Pr === null ? (Pr = [t]) : Pr.push(t);
}
function hm(t, e, n, r) {
  var s = e.interleaved;
  return (
    s === null ? ((n.next = n), Ru(e)) : ((n.next = s.next), (s.next = n)),
    (e.interleaved = n),
    Gn(t, r)
  );
}
function Gn(t, e) {
  t.lanes |= e;
  var n = t.alternate;
  for (n !== null && (n.lanes |= e), n = t, t = t.return; t !== null; )
    ((t.childLanes |= e),
      (n = t.alternate),
      n !== null && (n.childLanes |= e),
      (n = t),
      (t = t.return));
  return n.tag === 3 ? n.stateNode : null;
}
var tr = !1;
function Au(t) {
  t.updateQueue = {
    baseState: t.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function fm(t, e) {
  ((t = t.updateQueue),
    e.updateQueue === t &&
      (e.updateQueue = {
        baseState: t.baseState,
        firstBaseUpdate: t.firstBaseUpdate,
        lastBaseUpdate: t.lastBaseUpdate,
        shared: t.shared,
        effects: t.effects,
      }));
}
function Wn(t, e) {
  return {
    eventTime: t,
    lane: e,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function fr(t, e, n) {
  var r = t.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), Ie & 2)) {
    var s = r.pending;
    return (
      s === null ? (e.next = e) : ((e.next = s.next), (s.next = e)),
      (r.pending = e),
      Gn(t, n)
    );
  }
  return (
    (s = r.interleaved),
    s === null ? ((e.next = e), Ru(r)) : ((e.next = s.next), (s.next = e)),
    (r.interleaved = e),
    Gn(t, n)
  );
}
function za(t, e, n) {
  if (
    ((e = e.updateQueue), e !== null && ((e = e.shared), (n & 4194240) !== 0))
  ) {
    var r = e.lanes;
    ((r &= t.pendingLanes), (n |= r), (e.lanes = n), gu(t, n));
  }
}
function Bd(t, e) {
  var n = t.updateQueue,
    r = t.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var s = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var a = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        (i === null ? (s = i = a) : (i = i.next = a), (n = n.next));
      } while (n !== null);
      i === null ? (s = i = e) : (i = i.next = e);
    } else s = i = e;
    ((n = {
      baseState: r.baseState,
      firstBaseUpdate: s,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (t.updateQueue = n));
    return;
  }
  ((t = n.lastBaseUpdate),
    t === null ? (n.firstBaseUpdate = e) : (t.next = e),
    (n.lastBaseUpdate = e));
}
function po(t, e, n, r) {
  var s = t.updateQueue;
  tr = !1;
  var i = s.firstBaseUpdate,
    a = s.lastBaseUpdate,
    l = s.shared.pending;
  if (l !== null) {
    s.shared.pending = null;
    var c = l,
      u = c.next;
    ((c.next = null), a === null ? (i = u) : (a.next = u), (a = c));
    var d = t.alternate;
    d !== null &&
      ((d = d.updateQueue),
      (l = d.lastBaseUpdate),
      l !== a &&
        (l === null ? (d.firstBaseUpdate = u) : (l.next = u),
        (d.lastBaseUpdate = c)));
  }
  if (i !== null) {
    var f = s.baseState;
    ((a = 0), (d = u = c = null), (l = i));
    do {
      var h = l.lane,
        p = l.eventTime;
      if ((r & h) === h) {
        d !== null &&
          (d = d.next =
            {
              eventTime: p,
              lane: 0,
              tag: l.tag,
              payload: l.payload,
              callback: l.callback,
              next: null,
            });
        e: {
          var v = t,
            x = l;
          switch (((h = e), (p = n), x.tag)) {
            case 1:
              if (((v = x.payload), typeof v == "function")) {
                f = v.call(p, f, h);
                break e;
              }
              f = v;
              break e;
            case 3:
              v.flags = (v.flags & -65537) | 128;
            case 0:
              if (
                ((v = x.payload),
                (h = typeof v == "function" ? v.call(p, f, h) : v),
                h == null)
              )
                break e;
              f = nt({}, f, h);
              break e;
            case 2:
              tr = !0;
          }
        }
        l.callback !== null &&
          l.lane !== 0 &&
          ((t.flags |= 64),
          (h = s.effects),
          h === null ? (s.effects = [l]) : h.push(l));
      } else
        ((p = {
          eventTime: p,
          lane: h,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null,
        }),
          d === null ? ((u = d = p), (c = f)) : (d = d.next = p),
          (a |= h));
      if (((l = l.next), l === null)) {
        if (((l = s.shared.pending), l === null)) break;
        ((h = l),
          (l = h.next),
          (h.next = null),
          (s.lastBaseUpdate = h),
          (s.shared.pending = null));
      }
    } while (!0);
    if (
      (d === null && (c = f),
      (s.baseState = c),
      (s.firstBaseUpdate = u),
      (s.lastBaseUpdate = d),
      (e = s.shared.interleaved),
      e !== null)
    ) {
      s = e;
      do ((a |= s.lane), (s = s.next));
      while (s !== e);
    } else i === null && (s.shared.lanes = 0);
    ((Hr |= a), (t.lanes = a), (t.memoizedState = f));
  }
}
function zd(t, e, n) {
  if (((t = e.effects), (e.effects = null), t !== null))
    for (e = 0; e < t.length; e++) {
      var r = t[e],
        s = r.callback;
      if (s !== null) {
        if (((r.callback = null), (r = n), typeof s != "function"))
          throw Error($(191, s));
        s.call(r);
      }
    }
}
var Zi = {},
  Pn = _r(Zi),
  Ii = _r(Zi),
  Li = _r(Zi);
function Or(t) {
  if (t === Zi) throw Error($(174));
  return t;
}
function Pu(t, e) {
  switch ((qe(Li, e), qe(Ii, t), qe(Pn, Zi), (t = e.nodeType), t)) {
    case 9:
    case 11:
      e = (e = e.documentElement) ? e.namespaceURI : sc(null, "");
      break;
    default:
      ((t = t === 8 ? e.parentNode : e),
        (e = t.namespaceURI || null),
        (t = t.tagName),
        (e = sc(e, t)));
  }
  (Ge(Pn), qe(Pn, e));
}
function Is() {
  (Ge(Pn), Ge(Ii), Ge(Li));
}
function pm(t) {
  Or(Li.current);
  var e = Or(Pn.current),
    n = sc(e, t.type);
  e !== n && (qe(Ii, t), qe(Pn, n));
}
function Ou(t) {
  Ii.current === t && (Ge(Pn), Ge(Ii));
}
var Qe = _r(0);
function mo(t) {
  for (var e = t; e !== null; ) {
    if (e.tag === 13) {
      var n = e.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return e;
    } else if (e.tag === 19 && e.memoizedProps.revealOrder !== void 0) {
      if (e.flags & 128) return e;
    } else if (e.child !== null) {
      ((e.child.return = e), (e = e.child));
      continue;
    }
    if (e === t) break;
    for (; e.sibling === null; ) {
      if (e.return === null || e.return === t) return null;
      e = e.return;
    }
    ((e.sibling.return = e.return), (e = e.sibling));
  }
  return null;
}
var Tl = [];
function Iu() {
  for (var t = 0; t < Tl.length; t++)
    Tl[t]._workInProgressVersionPrimary = null;
  Tl.length = 0;
}
var Fa = Yn.ReactCurrentDispatcher,
  Nl = Yn.ReactCurrentBatchConfig,
  Fr = 0,
  tt = null,
  ut = null,
  ft = null,
  go = !1,
  yi = !1,
  Mi = 0,
  ey = 0;
function _t() {
  throw Error($(321));
}
function Lu(t, e) {
  if (e === null) return !1;
  for (var n = 0; n < e.length && n < t.length; n++)
    if (!yn(t[n], e[n])) return !1;
  return !0;
}
function Mu(t, e, n, r, s, i) {
  if (
    ((Fr = i),
    (tt = e),
    (e.memoizedState = null),
    (e.updateQueue = null),
    (e.lanes = 0),
    (Fa.current = t === null || t.memoizedState === null ? sy : iy),
    (t = n(r, s)),
    yi)
  ) {
    i = 0;
    do {
      if (((yi = !1), (Mi = 0), 25 <= i)) throw Error($(301));
      ((i += 1),
        (ft = ut = null),
        (e.updateQueue = null),
        (Fa.current = ay),
        (t = n(r, s)));
    } while (yi);
  }
  if (
    ((Fa.current = vo),
    (e = ut !== null && ut.next !== null),
    (Fr = 0),
    (ft = ut = tt = null),
    (go = !1),
    e)
  )
    throw Error($(300));
  return t;
}
function $u() {
  var t = Mi !== 0;
  return ((Mi = 0), t);
}
function Tn() {
  var t = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return (ft === null ? (tt.memoizedState = ft = t) : (ft = ft.next = t), ft);
}
function on() {
  if (ut === null) {
    var t = tt.alternate;
    t = t !== null ? t.memoizedState : null;
  } else t = ut.next;
  var e = ft === null ? tt.memoizedState : ft.next;
  if (e !== null) ((ft = e), (ut = t));
  else {
    if (t === null) throw Error($(310));
    ((ut = t),
      (t = {
        memoizedState: ut.memoizedState,
        baseState: ut.baseState,
        baseQueue: ut.baseQueue,
        queue: ut.queue,
        next: null,
      }),
      ft === null ? (tt.memoizedState = ft = t) : (ft = ft.next = t));
  }
  return ft;
}
function $i(t, e) {
  return typeof e == "function" ? e(t) : e;
}
function Cl(t) {
  var e = on(),
    n = e.queue;
  if (n === null) throw Error($(311));
  n.lastRenderedReducer = t;
  var r = ut,
    s = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (s !== null) {
      var a = s.next;
      ((s.next = i.next), (i.next = a));
    }
    ((r.baseQueue = s = i), (n.pending = null));
  }
  if (s !== null) {
    ((i = s.next), (r = r.baseState));
    var l = (a = null),
      c = null,
      u = i;
    do {
      var d = u.lane;
      if ((Fr & d) === d)
        (c !== null &&
          (c = c.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : t(r, u.action)));
      else {
        var f = {
          lane: d,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        (c === null ? ((l = c = f), (a = r)) : (c = c.next = f),
          (tt.lanes |= d),
          (Hr |= d));
      }
      u = u.next;
    } while (u !== null && u !== i);
    (c === null ? (a = r) : (c.next = l),
      yn(r, e.memoizedState) || ($t = !0),
      (e.memoizedState = r),
      (e.baseState = a),
      (e.baseQueue = c),
      (n.lastRenderedState = r));
  }
  if (((t = n.interleaved), t !== null)) {
    s = t;
    do ((i = s.lane), (tt.lanes |= i), (Hr |= i), (s = s.next));
    while (s !== t);
  } else s === null && (n.lanes = 0);
  return [e.memoizedState, n.dispatch];
}
function Rl(t) {
  var e = on(),
    n = e.queue;
  if (n === null) throw Error($(311));
  n.lastRenderedReducer = t;
  var r = n.dispatch,
    s = n.pending,
    i = e.memoizedState;
  if (s !== null) {
    n.pending = null;
    var a = (s = s.next);
    do ((i = t(i, a.action)), (a = a.next));
    while (a !== s);
    (yn(i, e.memoizedState) || ($t = !0),
      (e.memoizedState = i),
      e.baseQueue === null && (e.baseState = i),
      (n.lastRenderedState = i));
  }
  return [i, r];
}
function mm() {}
function gm(t, e) {
  var n = tt,
    r = on(),
    s = e(),
    i = !yn(r.memoizedState, s);
  if (
    (i && ((r.memoizedState = s), ($t = !0)),
    (r = r.queue),
    Du(wm.bind(null, n, r, t), [t]),
    r.getSnapshot !== e || i || (ft !== null && ft.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Di(9, ym.bind(null, n, r, s, e), void 0, null),
      pt === null)
    )
      throw Error($(349));
    Fr & 30 || vm(n, e, s);
  }
  return s;
}
function vm(t, e, n) {
  ((t.flags |= 16384),
    (t = { getSnapshot: e, value: n }),
    (e = tt.updateQueue),
    e === null
      ? ((e = { lastEffect: null, stores: null }),
        (tt.updateQueue = e),
        (e.stores = [t]))
      : ((n = e.stores), n === null ? (e.stores = [t]) : n.push(t)));
}
function ym(t, e, n, r) {
  ((e.value = n), (e.getSnapshot = r), xm(e) && _m(t));
}
function wm(t, e, n) {
  return n(function () {
    xm(e) && _m(t);
  });
}
function xm(t) {
  var e = t.getSnapshot;
  t = t.value;
  try {
    var n = e();
    return !yn(t, n);
  } catch {
    return !0;
  }
}
function _m(t) {
  var e = Gn(t, 1);
  e !== null && vn(e, t, 1, -1);
}
function Fd(t) {
  var e = Tn();
  return (
    typeof t == "function" && (t = t()),
    (e.memoizedState = e.baseState = t),
    (t = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: $i,
      lastRenderedState: t,
    }),
    (e.queue = t),
    (t = t.dispatch = ry.bind(null, tt, t)),
    [e.memoizedState, t]
  );
}
function Di(t, e, n, r) {
  return (
    (t = { tag: t, create: e, destroy: n, deps: r, next: null }),
    (e = tt.updateQueue),
    e === null
      ? ((e = { lastEffect: null, stores: null }),
        (tt.updateQueue = e),
        (e.lastEffect = t.next = t))
      : ((n = e.lastEffect),
        n === null
          ? (e.lastEffect = t.next = t)
          : ((r = n.next), (n.next = t), (t.next = r), (e.lastEffect = t))),
    t
  );
}
function bm() {
  return on().memoizedState;
}
function Ha(t, e, n, r) {
  var s = Tn();
  ((tt.flags |= t),
    (s.memoizedState = Di(1 | e, n, void 0, r === void 0 ? null : r)));
}
function Vo(t, e, n, r) {
  var s = on();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (ut !== null) {
    var a = ut.memoizedState;
    if (((i = a.destroy), r !== null && Lu(r, a.deps))) {
      s.memoizedState = Di(e, n, i, r);
      return;
    }
  }
  ((tt.flags |= t), (s.memoizedState = Di(1 | e, n, i, r)));
}
function Hd(t, e) {
  return Ha(8390656, 8, t, e);
}
function Du(t, e) {
  return Vo(2048, 8, t, e);
}
function km(t, e) {
  return Vo(4, 2, t, e);
}
function Sm(t, e) {
  return Vo(4, 4, t, e);
}
function Em(t, e) {
  if (typeof e == "function")
    return (
      (t = t()),
      e(t),
      function () {
        e(null);
      }
    );
  if (e != null)
    return (
      (t = t()),
      (e.current = t),
      function () {
        e.current = null;
      }
    );
}
function jm(t, e, n) {
  return (
    (n = n != null ? n.concat([t]) : null),
    Vo(4, 4, Em.bind(null, e, t), n)
  );
}
function Uu() {}
function Tm(t, e) {
  var n = on();
  e = e === void 0 ? null : e;
  var r = n.memoizedState;
  return r !== null && e !== null && Lu(e, r[1])
    ? r[0]
    : ((n.memoizedState = [t, e]), t);
}
function Nm(t, e) {
  var n = on();
  e = e === void 0 ? null : e;
  var r = n.memoizedState;
  return r !== null && e !== null && Lu(e, r[1])
    ? r[0]
    : ((t = t()), (n.memoizedState = [t, e]), t);
}
function Cm(t, e, n) {
  return Fr & 21
    ? (yn(n, e) || ((n = Ip()), (tt.lanes |= n), (Hr |= n), (t.baseState = !0)),
      e)
    : (t.baseState && ((t.baseState = !1), ($t = !0)), (t.memoizedState = n));
}
function ty(t, e) {
  var n = Be;
  ((Be = n !== 0 && 4 > n ? n : 4), t(!0));
  var r = Nl.transition;
  Nl.transition = {};
  try {
    (t(!1), e());
  } finally {
    ((Be = n), (Nl.transition = r));
  }
}
function Rm() {
  return on().memoizedState;
}
function ny(t, e, n) {
  var r = mr(t);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Am(t))
  )
    Pm(e, n);
  else if (((n = hm(t, e, n, r)), n !== null)) {
    var s = Ct();
    (vn(n, t, r, s), Om(n, e, r));
  }
}
function ry(t, e, n) {
  var r = mr(t),
    s = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Am(t)) Pm(e, s);
  else {
    var i = t.alternate;
    if (
      t.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = e.lastRenderedReducer), i !== null)
    )
      try {
        var a = e.lastRenderedState,
          l = i(a, n);
        if (((s.hasEagerState = !0), (s.eagerState = l), yn(l, a))) {
          var c = e.interleaved;
          (c === null
            ? ((s.next = s), Ru(e))
            : ((s.next = c.next), (c.next = s)),
            (e.interleaved = s));
          return;
        }
      } catch {
      } finally {
      }
    ((n = hm(t, e, s, r)),
      n !== null && ((s = Ct()), vn(n, t, r, s), Om(n, e, r)));
  }
}
function Am(t) {
  var e = t.alternate;
  return t === tt || (e !== null && e === tt);
}
function Pm(t, e) {
  yi = go = !0;
  var n = t.pending;
  (n === null ? (e.next = e) : ((e.next = n.next), (n.next = e)),
    (t.pending = e));
}
function Om(t, e, n) {
  if (n & 4194240) {
    var r = e.lanes;
    ((r &= t.pendingLanes), (n |= r), (e.lanes = n), gu(t, n));
  }
}
var vo = {
    readContext: an,
    useCallback: _t,
    useContext: _t,
    useEffect: _t,
    useImperativeHandle: _t,
    useInsertionEffect: _t,
    useLayoutEffect: _t,
    useMemo: _t,
    useReducer: _t,
    useRef: _t,
    useState: _t,
    useDebugValue: _t,
    useDeferredValue: _t,
    useTransition: _t,
    useMutableSource: _t,
    useSyncExternalStore: _t,
    useId: _t,
    unstable_isNewReconciler: !1,
  },
  sy = {
    readContext: an,
    useCallback: function (t, e) {
      return ((Tn().memoizedState = [t, e === void 0 ? null : e]), t);
    },
    useContext: an,
    useEffect: Hd,
    useImperativeHandle: function (t, e, n) {
      return (
        (n = n != null ? n.concat([t]) : null),
        Ha(4194308, 4, Em.bind(null, e, t), n)
      );
    },
    useLayoutEffect: function (t, e) {
      return Ha(4194308, 4, t, e);
    },
    useInsertionEffect: function (t, e) {
      return Ha(4, 2, t, e);
    },
    useMemo: function (t, e) {
      var n = Tn();
      return (
        (e = e === void 0 ? null : e),
        (t = t()),
        (n.memoizedState = [t, e]),
        t
      );
    },
    useReducer: function (t, e, n) {
      var r = Tn();
      return (
        (e = n !== void 0 ? n(e) : e),
        (r.memoizedState = r.baseState = e),
        (t = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: t,
          lastRenderedState: e,
        }),
        (r.queue = t),
        (t = t.dispatch = ny.bind(null, tt, t)),
        [r.memoizedState, t]
      );
    },
    useRef: function (t) {
      var e = Tn();
      return ((t = { current: t }), (e.memoizedState = t));
    },
    useState: Fd,
    useDebugValue: Uu,
    useDeferredValue: function (t) {
      return (Tn().memoizedState = t);
    },
    useTransition: function () {
      var t = Fd(!1),
        e = t[0];
      return ((t = ty.bind(null, t[1])), (Tn().memoizedState = t), [e, t]);
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (t, e, n) {
      var r = tt,
        s = Tn();
      if (Ze) {
        if (n === void 0) throw Error($(407));
        n = n();
      } else {
        if (((n = e()), pt === null)) throw Error($(349));
        Fr & 30 || vm(r, e, n);
      }
      s.memoizedState = n;
      var i = { value: n, getSnapshot: e };
      return (
        (s.queue = i),
        Hd(wm.bind(null, r, i, t), [t]),
        (r.flags |= 2048),
        Di(9, ym.bind(null, r, i, n, e), void 0, null),
        n
      );
    },
    useId: function () {
      var t = Tn(),
        e = pt.identifierPrefix;
      if (Ze) {
        var n = Vn,
          r = Hn;
        ((n = (r & ~(1 << (32 - gn(r) - 1))).toString(32) + n),
          (e = ":" + e + "R" + n),
          (n = Mi++),
          0 < n && (e += "H" + n.toString(32)),
          (e += ":"));
      } else ((n = ey++), (e = ":" + e + "r" + n.toString(32) + ":"));
      return (t.memoizedState = e);
    },
    unstable_isNewReconciler: !1,
  },
  iy = {
    readContext: an,
    useCallback: Tm,
    useContext: an,
    useEffect: Du,
    useImperativeHandle: jm,
    useInsertionEffect: km,
    useLayoutEffect: Sm,
    useMemo: Nm,
    useReducer: Cl,
    useRef: bm,
    useState: function () {
      return Cl($i);
    },
    useDebugValue: Uu,
    useDeferredValue: function (t) {
      var e = on();
      return Cm(e, ut.memoizedState, t);
    },
    useTransition: function () {
      var t = Cl($i)[0],
        e = on().memoizedState;
      return [t, e];
    },
    useMutableSource: mm,
    useSyncExternalStore: gm,
    useId: Rm,
    unstable_isNewReconciler: !1,
  },
  ay = {
    readContext: an,
    useCallback: Tm,
    useContext: an,
    useEffect: Du,
    useImperativeHandle: jm,
    useInsertionEffect: km,
    useLayoutEffect: Sm,
    useMemo: Nm,
    useReducer: Rl,
    useRef: bm,
    useState: function () {
      return Rl($i);
    },
    useDebugValue: Uu,
    useDeferredValue: function (t) {
      var e = on();
      return ut === null ? (e.memoizedState = t) : Cm(e, ut.memoizedState, t);
    },
    useTransition: function () {
      var t = Rl($i)[0],
        e = on().memoizedState;
      return [t, e];
    },
    useMutableSource: mm,
    useSyncExternalStore: gm,
    useId: Rm,
    unstable_isNewReconciler: !1,
  };
function dn(t, e) {
  if (t && t.defaultProps) {
    ((e = nt({}, e)), (t = t.defaultProps));
    for (var n in t) e[n] === void 0 && (e[n] = t[n]);
    return e;
  }
  return e;
}
function Ec(t, e, n, r) {
  ((e = t.memoizedState),
    (n = n(r, e)),
    (n = n == null ? e : nt({}, e, n)),
    (t.memoizedState = n),
    t.lanes === 0 && (t.updateQueue.baseState = n));
}
var Wo = {
  isMounted: function (t) {
    return (t = t._reactInternals) ? qr(t) === t : !1;
  },
  enqueueSetState: function (t, e, n) {
    t = t._reactInternals;
    var r = Ct(),
      s = mr(t),
      i = Wn(r, s);
    ((i.payload = e),
      n != null && (i.callback = n),
      (e = fr(t, i, s)),
      e !== null && (vn(e, t, s, r), za(e, t, s)));
  },
  enqueueReplaceState: function (t, e, n) {
    t = t._reactInternals;
    var r = Ct(),
      s = mr(t),
      i = Wn(r, s);
    ((i.tag = 1),
      (i.payload = e),
      n != null && (i.callback = n),
      (e = fr(t, i, s)),
      e !== null && (vn(e, t, s, r), za(e, t, s)));
  },
  enqueueForceUpdate: function (t, e) {
    t = t._reactInternals;
    var n = Ct(),
      r = mr(t),
      s = Wn(n, r);
    ((s.tag = 2),
      e != null && (s.callback = e),
      (e = fr(t, s, r)),
      e !== null && (vn(e, t, r, n), za(e, t, r)));
  },
};
function Vd(t, e, n, r, s, i, a) {
  return (
    (t = t.stateNode),
    typeof t.shouldComponentUpdate == "function"
      ? t.shouldComponentUpdate(r, i, a)
      : e.prototype && e.prototype.isPureReactComponent
        ? !Ri(n, r) || !Ri(s, i)
        : !0
  );
}
function Im(t, e, n) {
  var r = !1,
    s = yr,
    i = e.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = an(i))
      : ((s = Ut(e) ? Br : Et.current),
        (r = e.contextTypes),
        (i = (r = r != null) ? As(t, s) : yr)),
    (e = new e(n, i)),
    (t.memoizedState = e.state !== null && e.state !== void 0 ? e.state : null),
    (e.updater = Wo),
    (t.stateNode = e),
    (e._reactInternals = t),
    r &&
      ((t = t.stateNode),
      (t.__reactInternalMemoizedUnmaskedChildContext = s),
      (t.__reactInternalMemoizedMaskedChildContext = i)),
    e
  );
}
function Wd(t, e, n, r) {
  ((t = e.state),
    typeof e.componentWillReceiveProps == "function" &&
      e.componentWillReceiveProps(n, r),
    typeof e.UNSAFE_componentWillReceiveProps == "function" &&
      e.UNSAFE_componentWillReceiveProps(n, r),
    e.state !== t && Wo.enqueueReplaceState(e, e.state, null));
}
function jc(t, e, n, r) {
  var s = t.stateNode;
  ((s.props = n), (s.state = t.memoizedState), (s.refs = {}), Au(t));
  var i = e.contextType;
  (typeof i == "object" && i !== null
    ? (s.context = an(i))
    : ((i = Ut(e) ? Br : Et.current), (s.context = As(t, i))),
    (s.state = t.memoizedState),
    (i = e.getDerivedStateFromProps),
    typeof i == "function" && (Ec(t, e, i, n), (s.state = t.memoizedState)),
    typeof e.getDerivedStateFromProps == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function" ||
      (typeof s.UNSAFE_componentWillMount != "function" &&
        typeof s.componentWillMount != "function") ||
      ((e = s.state),
      typeof s.componentWillMount == "function" && s.componentWillMount(),
      typeof s.UNSAFE_componentWillMount == "function" &&
        s.UNSAFE_componentWillMount(),
      e !== s.state && Wo.enqueueReplaceState(s, s.state, null),
      po(t, n, s, r),
      (s.state = t.memoizedState)),
    typeof s.componentDidMount == "function" && (t.flags |= 4194308));
}
function Ls(t, e) {
  try {
    var n = "",
      r = e;
    do ((n += Ig(r)), (r = r.return));
    while (r);
    var s = n;
  } catch (i) {
    s =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: t, source: e, stack: s, digest: null };
}
function Al(t, e, n) {
  return { value: t, source: null, stack: n ?? null, digest: e ?? null };
}
function Tc(t, e) {
  try {
    console.error(e.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var oy = typeof WeakMap == "function" ? WeakMap : Map;
function Lm(t, e, n) {
  ((n = Wn(-1, n)), (n.tag = 3), (n.payload = { element: null }));
  var r = e.value;
  return (
    (n.callback = function () {
      (wo || ((wo = !0), ($c = r)), Tc(t, e));
    }),
    n
  );
}
function Mm(t, e, n) {
  ((n = Wn(-1, n)), (n.tag = 3));
  var r = t.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var s = e.value;
    ((n.payload = function () {
      return r(s);
    }),
      (n.callback = function () {
        Tc(t, e);
      }));
  }
  var i = t.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        (Tc(t, e),
          typeof r != "function" &&
            (pr === null ? (pr = new Set([this])) : pr.add(this)));
        var a = e.stack;
        this.componentDidCatch(e.value, {
          componentStack: a !== null ? a : "",
        });
      }),
    n
  );
}
function qd(t, e, n) {
  var r = t.pingCache;
  if (r === null) {
    r = t.pingCache = new oy();
    var s = new Set();
    r.set(e, s);
  } else ((s = r.get(e)), s === void 0 && ((s = new Set()), r.set(e, s)));
  s.has(n) || (s.add(n), (t = _y.bind(null, t, e, n)), e.then(t, t));
}
function Kd(t) {
  do {
    var e;
    if (
      ((e = t.tag === 13) &&
        ((e = t.memoizedState), (e = e !== null ? e.dehydrated !== null : !0)),
      e)
    )
      return t;
    t = t.return;
  } while (t !== null);
  return null;
}
function Gd(t, e, n, r, s) {
  return t.mode & 1
    ? ((t.flags |= 65536), (t.lanes = s), t)
    : (t === e
        ? (t.flags |= 65536)
        : ((t.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((e = Wn(-1, 1)), (e.tag = 2), fr(n, e, 1))),
          (n.lanes |= 1)),
      t);
}
var ly = Yn.ReactCurrentOwner,
  $t = !1;
function Nt(t, e, n, r) {
  e.child = t === null ? dm(e, null, n, r) : Os(e, t.child, n, r);
}
function Jd(t, e, n, r, s) {
  n = n.render;
  var i = e.ref;
  return (
    ks(e, s),
    (r = Mu(t, e, n, r, i, s)),
    (n = $u()),
    t !== null && !$t
      ? ((e.updateQueue = t.updateQueue),
        (e.flags &= -2053),
        (t.lanes &= ~s),
        Jn(t, e, s))
      : (Ze && n && Su(e), (e.flags |= 1), Nt(t, e, r, s), e.child)
  );
}
function Yd(t, e, n, r, s) {
  if (t === null) {
    var i = n.type;
    return typeof i == "function" &&
      !Ku(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((e.tag = 15), (e.type = i), $m(t, e, i, r, s))
      : ((t = Ka(n.type, null, r, e, e.mode, s)),
        (t.ref = e.ref),
        (t.return = e),
        (e.child = t));
  }
  if (((i = t.child), !(t.lanes & s))) {
    var a = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Ri), n(a, r) && t.ref === e.ref)
    )
      return Jn(t, e, s);
  }
  return (
    (e.flags |= 1),
    (t = gr(i, r)),
    (t.ref = e.ref),
    (t.return = e),
    (e.child = t)
  );
}
function $m(t, e, n, r, s) {
  if (t !== null) {
    var i = t.memoizedProps;
    if (Ri(i, r) && t.ref === e.ref)
      if ((($t = !1), (e.pendingProps = r = i), (t.lanes & s) !== 0))
        t.flags & 131072 && ($t = !0);
      else return ((e.lanes = t.lanes), Jn(t, e, s));
  }
  return Nc(t, e, n, r, s);
}
function Dm(t, e, n) {
  var r = e.pendingProps,
    s = r.children,
    i = t !== null ? t.memoizedState : null;
  if (r.mode === "hidden")
    if (!(e.mode & 1))
      ((e.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        qe(ys, Vt),
        (Vt |= n));
    else {
      if (!(n & 1073741824))
        return (
          (t = i !== null ? i.baseLanes | n : n),
          (e.lanes = e.childLanes = 1073741824),
          (e.memoizedState = {
            baseLanes: t,
            cachePool: null,
            transitions: null,
          }),
          (e.updateQueue = null),
          qe(ys, Vt),
          (Vt |= t),
          null
        );
      ((e.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        qe(ys, Vt),
        (Vt |= r));
    }
  else
    (i !== null ? ((r = i.baseLanes | n), (e.memoizedState = null)) : (r = n),
      qe(ys, Vt),
      (Vt |= r));
  return (Nt(t, e, s, n), e.child);
}
function Um(t, e) {
  var n = e.ref;
  ((t === null && n !== null) || (t !== null && t.ref !== n)) &&
    ((e.flags |= 512), (e.flags |= 2097152));
}
function Nc(t, e, n, r, s) {
  var i = Ut(n) ? Br : Et.current;
  return (
    (i = As(e, i)),
    ks(e, s),
    (n = Mu(t, e, n, r, i, s)),
    (r = $u()),
    t !== null && !$t
      ? ((e.updateQueue = t.updateQueue),
        (e.flags &= -2053),
        (t.lanes &= ~s),
        Jn(t, e, s))
      : (Ze && r && Su(e), (e.flags |= 1), Nt(t, e, n, s), e.child)
  );
}
function Xd(t, e, n, r, s) {
  if (Ut(n)) {
    var i = !0;
    lo(e);
  } else i = !1;
  if ((ks(e, s), e.stateNode === null))
    (Va(t, e), Im(e, n, r), jc(e, n, r, s), (r = !0));
  else if (t === null) {
    var a = e.stateNode,
      l = e.memoizedProps;
    a.props = l;
    var c = a.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = an(u))
      : ((u = Ut(n) ? Br : Et.current), (u = As(e, u)));
    var d = n.getDerivedStateFromProps,
      f =
        typeof d == "function" ||
        typeof a.getSnapshotBeforeUpdate == "function";
    (f ||
      (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
        typeof a.componentWillReceiveProps != "function") ||
      ((l !== r || c !== u) && Wd(e, a, r, u)),
      (tr = !1));
    var h = e.memoizedState;
    ((a.state = h),
      po(e, r, a, s),
      (c = e.memoizedState),
      l !== r || h !== c || Dt.current || tr
        ? (typeof d == "function" && (Ec(e, n, d, r), (c = e.memoizedState)),
          (l = tr || Vd(e, n, l, r, h, c, u))
            ? (f ||
                (typeof a.UNSAFE_componentWillMount != "function" &&
                  typeof a.componentWillMount != "function") ||
                (typeof a.componentWillMount == "function" &&
                  a.componentWillMount(),
                typeof a.UNSAFE_componentWillMount == "function" &&
                  a.UNSAFE_componentWillMount()),
              typeof a.componentDidMount == "function" && (e.flags |= 4194308))
            : (typeof a.componentDidMount == "function" && (e.flags |= 4194308),
              (e.memoizedProps = r),
              (e.memoizedState = c)),
          (a.props = r),
          (a.state = c),
          (a.context = u),
          (r = l))
        : (typeof a.componentDidMount == "function" && (e.flags |= 4194308),
          (r = !1)));
  } else {
    ((a = e.stateNode),
      fm(t, e),
      (l = e.memoizedProps),
      (u = e.type === e.elementType ? l : dn(e.type, l)),
      (a.props = u),
      (f = e.pendingProps),
      (h = a.context),
      (c = n.contextType),
      typeof c == "object" && c !== null
        ? (c = an(c))
        : ((c = Ut(n) ? Br : Et.current), (c = As(e, c))));
    var p = n.getDerivedStateFromProps;
    ((d =
      typeof p == "function" ||
      typeof a.getSnapshotBeforeUpdate == "function") ||
      (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
        typeof a.componentWillReceiveProps != "function") ||
      ((l !== f || h !== c) && Wd(e, a, r, c)),
      (tr = !1),
      (h = e.memoizedState),
      (a.state = h),
      po(e, r, a, s));
    var v = e.memoizedState;
    l !== f || h !== v || Dt.current || tr
      ? (typeof p == "function" && (Ec(e, n, p, r), (v = e.memoizedState)),
        (u = tr || Vd(e, n, u, r, h, v, c) || !1)
          ? (d ||
              (typeof a.UNSAFE_componentWillUpdate != "function" &&
                typeof a.componentWillUpdate != "function") ||
              (typeof a.componentWillUpdate == "function" &&
                a.componentWillUpdate(r, v, c),
              typeof a.UNSAFE_componentWillUpdate == "function" &&
                a.UNSAFE_componentWillUpdate(r, v, c)),
            typeof a.componentDidUpdate == "function" && (e.flags |= 4),
            typeof a.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024))
          : (typeof a.componentDidUpdate != "function" ||
              (l === t.memoizedProps && h === t.memoizedState) ||
              (e.flags |= 4),
            typeof a.getSnapshotBeforeUpdate != "function" ||
              (l === t.memoizedProps && h === t.memoizedState) ||
              (e.flags |= 1024),
            (e.memoizedProps = r),
            (e.memoizedState = v)),
        (a.props = r),
        (a.state = v),
        (a.context = c),
        (r = u))
      : (typeof a.componentDidUpdate != "function" ||
          (l === t.memoizedProps && h === t.memoizedState) ||
          (e.flags |= 4),
        typeof a.getSnapshotBeforeUpdate != "function" ||
          (l === t.memoizedProps && h === t.memoizedState) ||
          (e.flags |= 1024),
        (r = !1));
  }
  return Cc(t, e, n, r, i, s);
}
function Cc(t, e, n, r, s, i) {
  Um(t, e);
  var a = (e.flags & 128) !== 0;
  if (!r && !a) return (s && Md(e, n, !1), Jn(t, e, i));
  ((r = e.stateNode), (ly.current = e));
  var l =
    a && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (e.flags |= 1),
    t !== null && a
      ? ((e.child = Os(e, t.child, null, i)), (e.child = Os(e, null, l, i)))
      : Nt(t, e, l, i),
    (e.memoizedState = r.state),
    s && Md(e, n, !0),
    e.child
  );
}
function Bm(t) {
  var e = t.stateNode;
  (e.pendingContext
    ? Ld(t, e.pendingContext, e.pendingContext !== e.context)
    : e.context && Ld(t, e.context, !1),
    Pu(t, e.containerInfo));
}
function Zd(t, e, n, r, s) {
  return (Ps(), ju(s), (e.flags |= 256), Nt(t, e, n, r), e.child);
}
var Rc = { dehydrated: null, treeContext: null, retryLane: 0 };
function Ac(t) {
  return { baseLanes: t, cachePool: null, transitions: null };
}
function zm(t, e, n) {
  var r = e.pendingProps,
    s = Qe.current,
    i = !1,
    a = (e.flags & 128) !== 0,
    l;
  if (
    ((l = a) ||
      (l = t !== null && t.memoizedState === null ? !1 : (s & 2) !== 0),
    l
      ? ((i = !0), (e.flags &= -129))
      : (t === null || t.memoizedState !== null) && (s |= 1),
    qe(Qe, s & 1),
    t === null)
  )
    return (
      kc(e),
      (t = e.memoizedState),
      t !== null && ((t = t.dehydrated), t !== null)
        ? (e.mode & 1
            ? t.data === "$!"
              ? (e.lanes = 8)
              : (e.lanes = 1073741824)
            : (e.lanes = 1),
          null)
        : ((a = r.children),
          (t = r.fallback),
          i
            ? ((r = e.mode),
              (i = e.child),
              (a = { mode: "hidden", children: a }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = a))
                : (i = Go(a, r, 0, null)),
              (t = Ur(t, r, n, null)),
              (i.return = e),
              (t.return = e),
              (i.sibling = t),
              (e.child = i),
              (e.child.memoizedState = Ac(n)),
              (e.memoizedState = Rc),
              t)
            : Bu(e, a))
    );
  if (((s = t.memoizedState), s !== null && ((l = s.dehydrated), l !== null)))
    return cy(t, e, a, r, l, s, n);
  if (i) {
    ((i = r.fallback), (a = e.mode), (s = t.child), (l = s.sibling));
    var c = { mode: "hidden", children: r.children };
    return (
      !(a & 1) && e.child !== s
        ? ((r = e.child),
          (r.childLanes = 0),
          (r.pendingProps = c),
          (e.deletions = null))
        : ((r = gr(s, c)), (r.subtreeFlags = s.subtreeFlags & 14680064)),
      l !== null ? (i = gr(l, i)) : ((i = Ur(i, a, n, null)), (i.flags |= 2)),
      (i.return = e),
      (r.return = e),
      (r.sibling = i),
      (e.child = r),
      (r = i),
      (i = e.child),
      (a = t.child.memoizedState),
      (a =
        a === null
          ? Ac(n)
          : {
              baseLanes: a.baseLanes | n,
              cachePool: null,
              transitions: a.transitions,
            }),
      (i.memoizedState = a),
      (i.childLanes = t.childLanes & ~n),
      (e.memoizedState = Rc),
      r
    );
  }
  return (
    (i = t.child),
    (t = i.sibling),
    (r = gr(i, { mode: "visible", children: r.children })),
    !(e.mode & 1) && (r.lanes = n),
    (r.return = e),
    (r.sibling = null),
    t !== null &&
      ((n = e.deletions),
      n === null ? ((e.deletions = [t]), (e.flags |= 16)) : n.push(t)),
    (e.child = r),
    (e.memoizedState = null),
    r
  );
}
function Bu(t, e) {
  return (
    (e = Go({ mode: "visible", children: e }, t.mode, 0, null)),
    (e.return = t),
    (t.child = e)
  );
}
function ga(t, e, n, r) {
  return (
    r !== null && ju(r),
    Os(e, t.child, null, n),
    (t = Bu(e, e.pendingProps.children)),
    (t.flags |= 2),
    (e.memoizedState = null),
    t
  );
}
function cy(t, e, n, r, s, i, a) {
  if (n)
    return e.flags & 256
      ? ((e.flags &= -257), (r = Al(Error($(422)))), ga(t, e, a, r))
      : e.memoizedState !== null
        ? ((e.child = t.child), (e.flags |= 128), null)
        : ((i = r.fallback),
          (s = e.mode),
          (r = Go({ mode: "visible", children: r.children }, s, 0, null)),
          (i = Ur(i, s, a, null)),
          (i.flags |= 2),
          (r.return = e),
          (i.return = e),
          (r.sibling = i),
          (e.child = r),
          e.mode & 1 && Os(e, t.child, null, a),
          (e.child.memoizedState = Ac(a)),
          (e.memoizedState = Rc),
          i);
  if (!(e.mode & 1)) return ga(t, e, a, null);
  if (s.data === "$!") {
    if (((r = s.nextSibling && s.nextSibling.dataset), r)) var l = r.dgst;
    return (
      (r = l),
      (i = Error($(419))),
      (r = Al(i, r, void 0)),
      ga(t, e, a, r)
    );
  }
  if (((l = (a & t.childLanes) !== 0), $t || l)) {
    if (((r = pt), r !== null)) {
      switch (a & -a) {
        case 4:
          s = 2;
          break;
        case 16:
          s = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          s = 32;
          break;
        case 536870912:
          s = 268435456;
          break;
        default:
          s = 0;
      }
      ((s = s & (r.suspendedLanes | a) ? 0 : s),
        s !== 0 &&
          s !== i.retryLane &&
          ((i.retryLane = s), Gn(t, s), vn(r, t, s, -1)));
    }
    return (qu(), (r = Al(Error($(421)))), ga(t, e, a, r));
  }
  return s.data === "$?"
    ? ((e.flags |= 128),
      (e.child = t.child),
      (e = by.bind(null, t)),
      (s._reactRetry = e),
      null)
    : ((t = i.treeContext),
      (Kt = hr(s.nextSibling)),
      (Gt = e),
      (Ze = !0),
      (pn = null),
      t !== null &&
        ((en[tn++] = Hn),
        (en[tn++] = Vn),
        (en[tn++] = zr),
        (Hn = t.id),
        (Vn = t.overflow),
        (zr = e)),
      (e = Bu(e, r.children)),
      (e.flags |= 4096),
      e);
}
function Qd(t, e, n) {
  t.lanes |= e;
  var r = t.alternate;
  (r !== null && (r.lanes |= e), Sc(t.return, e, n));
}
function Pl(t, e, n, r, s) {
  var i = t.memoizedState;
  i === null
    ? (t.memoizedState = {
        isBackwards: e,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: s,
      })
    : ((i.isBackwards = e),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = s));
}
function Fm(t, e, n) {
  var r = e.pendingProps,
    s = r.revealOrder,
    i = r.tail;
  if ((Nt(t, e, r.children, n), (r = Qe.current), r & 2))
    ((r = (r & 1) | 2), (e.flags |= 128));
  else {
    if (t !== null && t.flags & 128)
      e: for (t = e.child; t !== null; ) {
        if (t.tag === 13) t.memoizedState !== null && Qd(t, n, e);
        else if (t.tag === 19) Qd(t, n, e);
        else if (t.child !== null) {
          ((t.child.return = t), (t = t.child));
          continue;
        }
        if (t === e) break e;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) break e;
          t = t.return;
        }
        ((t.sibling.return = t.return), (t = t.sibling));
      }
    r &= 1;
  }
  if ((qe(Qe, r), !(e.mode & 1))) e.memoizedState = null;
  else
    switch (s) {
      case "forwards":
        for (n = e.child, s = null; n !== null; )
          ((t = n.alternate),
            t !== null && mo(t) === null && (s = n),
            (n = n.sibling));
        ((n = s),
          n === null
            ? ((s = e.child), (e.child = null))
            : ((s = n.sibling), (n.sibling = null)),
          Pl(e, !1, s, n, i));
        break;
      case "backwards":
        for (n = null, s = e.child, e.child = null; s !== null; ) {
          if (((t = s.alternate), t !== null && mo(t) === null)) {
            e.child = s;
            break;
          }
          ((t = s.sibling), (s.sibling = n), (n = s), (s = t));
        }
        Pl(e, !0, n, null, i);
        break;
      case "together":
        Pl(e, !1, null, null, void 0);
        break;
      default:
        e.memoizedState = null;
    }
  return e.child;
}
function Va(t, e) {
  !(e.mode & 1) &&
    t !== null &&
    ((t.alternate = null), (e.alternate = null), (e.flags |= 2));
}
function Jn(t, e, n) {
  if (
    (t !== null && (e.dependencies = t.dependencies),
    (Hr |= e.lanes),
    !(n & e.childLanes))
  )
    return null;
  if (t !== null && e.child !== t.child) throw Error($(153));
  if (e.child !== null) {
    for (
      t = e.child, n = gr(t, t.pendingProps), e.child = n, n.return = e;
      t.sibling !== null;

    )
      ((t = t.sibling),
        (n = n.sibling = gr(t, t.pendingProps)),
        (n.return = e));
    n.sibling = null;
  }
  return e.child;
}
function uy(t, e, n) {
  switch (e.tag) {
    case 3:
      (Bm(e), Ps());
      break;
    case 5:
      pm(e);
      break;
    case 1:
      Ut(e.type) && lo(e);
      break;
    case 4:
      Pu(e, e.stateNode.containerInfo);
      break;
    case 10:
      var r = e.type._context,
        s = e.memoizedProps.value;
      (qe(ho, r._currentValue), (r._currentValue = s));
      break;
    case 13:
      if (((r = e.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (qe(Qe, Qe.current & 1), (e.flags |= 128), null)
          : n & e.child.childLanes
            ? zm(t, e, n)
            : (qe(Qe, Qe.current & 1),
              (t = Jn(t, e, n)),
              t !== null ? t.sibling : null);
      qe(Qe, Qe.current & 1);
      break;
    case 19:
      if (((r = (n & e.childLanes) !== 0), t.flags & 128)) {
        if (r) return Fm(t, e, n);
        e.flags |= 128;
      }
      if (
        ((s = e.memoizedState),
        s !== null &&
          ((s.rendering = null), (s.tail = null), (s.lastEffect = null)),
        qe(Qe, Qe.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return ((e.lanes = 0), Dm(t, e, n));
  }
  return Jn(t, e, n);
}
var Hm, Pc, Vm, Wm;
Hm = function (t, e) {
  for (var n = e.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) t.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      ((n.child.return = n), (n = n.child));
      continue;
    }
    if (n === e) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === e) return;
      n = n.return;
    }
    ((n.sibling.return = n.return), (n = n.sibling));
  }
};
Pc = function () {};
Vm = function (t, e, n, r) {
  var s = t.memoizedProps;
  if (s !== r) {
    ((t = e.stateNode), Or(Pn.current));
    var i = null;
    switch (n) {
      case "input":
        ((s = ec(t, s)), (r = ec(t, r)), (i = []));
        break;
      case "select":
        ((s = nt({}, s, { value: void 0 })),
          (r = nt({}, r, { value: void 0 })),
          (i = []));
        break;
      case "textarea":
        ((s = rc(t, s)), (r = rc(t, r)), (i = []));
        break;
      default:
        typeof s.onClick != "function" &&
          typeof r.onClick == "function" &&
          (t.onclick = ao);
    }
    ic(n, r);
    var a;
    n = null;
    for (u in s)
      if (!r.hasOwnProperty(u) && s.hasOwnProperty(u) && s[u] != null)
        if (u === "style") {
          var l = s[u];
          for (a in l) l.hasOwnProperty(a) && (n || (n = {}), (n[a] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (ki.hasOwnProperty(u)
              ? i || (i = [])
              : (i = i || []).push(u, null));
    for (u in r) {
      var c = r[u];
      if (
        ((l = s != null ? s[u] : void 0),
        r.hasOwnProperty(u) && c !== l && (c != null || l != null))
      )
        if (u === "style")
          if (l) {
            for (a in l)
              !l.hasOwnProperty(a) ||
                (c && c.hasOwnProperty(a)) ||
                (n || (n = {}), (n[a] = ""));
            for (a in c)
              c.hasOwnProperty(a) &&
                l[a] !== c[a] &&
                (n || (n = {}), (n[a] = c[a]));
          } else (n || (i || (i = []), i.push(u, n)), (n = c));
        else
          u === "dangerouslySetInnerHTML"
            ? ((c = c ? c.__html : void 0),
              (l = l ? l.__html : void 0),
              c != null && l !== c && (i = i || []).push(u, c))
            : u === "children"
              ? (typeof c != "string" && typeof c != "number") ||
                (i = i || []).push(u, "" + c)
              : u !== "suppressContentEditableWarning" &&
                u !== "suppressHydrationWarning" &&
                (ki.hasOwnProperty(u)
                  ? (c != null && u === "onScroll" && Ke("scroll", t),
                    i || l === c || (i = []))
                  : (i = i || []).push(u, c));
    }
    n && (i = i || []).push("style", n);
    var u = i;
    (e.updateQueue = u) && (e.flags |= 4);
  }
};
Wm = function (t, e, n, r) {
  n !== r && (e.flags |= 4);
};
function Xs(t, e) {
  if (!Ze)
    switch (t.tailMode) {
      case "hidden":
        e = t.tail;
        for (var n = null; e !== null; )
          (e.alternate !== null && (n = e), (e = e.sibling));
        n === null ? (t.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = t.tail;
        for (var r = null; n !== null; )
          (n.alternate !== null && (r = n), (n = n.sibling));
        r === null
          ? e || t.tail === null
            ? (t.tail = null)
            : (t.tail.sibling = null)
          : (r.sibling = null);
    }
}
function bt(t) {
  var e = t.alternate !== null && t.alternate.child === t.child,
    n = 0,
    r = 0;
  if (e)
    for (var s = t.child; s !== null; )
      ((n |= s.lanes | s.childLanes),
        (r |= s.subtreeFlags & 14680064),
        (r |= s.flags & 14680064),
        (s.return = t),
        (s = s.sibling));
  else
    for (s = t.child; s !== null; )
      ((n |= s.lanes | s.childLanes),
        (r |= s.subtreeFlags),
        (r |= s.flags),
        (s.return = t),
        (s = s.sibling));
  return ((t.subtreeFlags |= r), (t.childLanes = n), e);
}
function dy(t, e, n) {
  var r = e.pendingProps;
  switch ((Eu(e), e.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return (bt(e), null);
    case 1:
      return (Ut(e.type) && oo(), bt(e), null);
    case 3:
      return (
        (r = e.stateNode),
        Is(),
        Ge(Dt),
        Ge(Et),
        Iu(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (t === null || t.child === null) &&
          (pa(e)
            ? (e.flags |= 4)
            : t === null ||
              (t.memoizedState.isDehydrated && !(e.flags & 256)) ||
              ((e.flags |= 1024), pn !== null && (Bc(pn), (pn = null)))),
        Pc(t, e),
        bt(e),
        null
      );
    case 5:
      Ou(e);
      var s = Or(Li.current);
      if (((n = e.type), t !== null && e.stateNode != null))
        (Vm(t, e, n, r, s),
          t.ref !== e.ref && ((e.flags |= 512), (e.flags |= 2097152)));
      else {
        if (!r) {
          if (e.stateNode === null) throw Error($(166));
          return (bt(e), null);
        }
        if (((t = Or(Pn.current)), pa(e))) {
          ((r = e.stateNode), (n = e.type));
          var i = e.memoizedProps;
          switch (((r[Rn] = e), (r[Oi] = i), (t = (e.mode & 1) !== 0), n)) {
            case "dialog":
              (Ke("cancel", r), Ke("close", r));
              break;
            case "iframe":
            case "object":
            case "embed":
              Ke("load", r);
              break;
            case "video":
            case "audio":
              for (s = 0; s < oi.length; s++) Ke(oi[s], r);
              break;
            case "source":
              Ke("error", r);
              break;
            case "img":
            case "image":
            case "link":
              (Ke("error", r), Ke("load", r));
              break;
            case "details":
              Ke("toggle", r);
              break;
            case "input":
              (ld(r, i), Ke("invalid", r));
              break;
            case "select":
              ((r._wrapperState = { wasMultiple: !!i.multiple }),
                Ke("invalid", r));
              break;
            case "textarea":
              (ud(r, i), Ke("invalid", r));
          }
          (ic(n, i), (s = null));
          for (var a in i)
            if (i.hasOwnProperty(a)) {
              var l = i[a];
              a === "children"
                ? typeof l == "string"
                  ? r.textContent !== l &&
                    (i.suppressHydrationWarning !== !0 &&
                      fa(r.textContent, l, t),
                    (s = ["children", l]))
                  : typeof l == "number" &&
                    r.textContent !== "" + l &&
                    (i.suppressHydrationWarning !== !0 &&
                      fa(r.textContent, l, t),
                    (s = ["children", "" + l]))
                : ki.hasOwnProperty(a) &&
                  l != null &&
                  a === "onScroll" &&
                  Ke("scroll", r);
            }
          switch (n) {
            case "input":
              (ia(r), cd(r, i, !0));
              break;
            case "textarea":
              (ia(r), dd(r));
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = ao);
          }
          ((r = s), (e.updateQueue = r), r !== null && (e.flags |= 4));
        } else {
          ((a = s.nodeType === 9 ? s : s.ownerDocument),
            t === "http://www.w3.org/1999/xhtml" && (t = wp(n)),
            t === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((t = a.createElement("div")),
                  (t.innerHTML = "<script><\/script>"),
                  (t = t.removeChild(t.firstChild)))
                : typeof r.is == "string"
                  ? (t = a.createElement(n, { is: r.is }))
                  : ((t = a.createElement(n)),
                    n === "select" &&
                      ((a = t),
                      r.multiple
                        ? (a.multiple = !0)
                        : r.size && (a.size = r.size)))
              : (t = a.createElementNS(t, n)),
            (t[Rn] = e),
            (t[Oi] = r),
            Hm(t, e, !1, !1),
            (e.stateNode = t));
          e: {
            switch (((a = ac(n, r)), n)) {
              case "dialog":
                (Ke("cancel", t), Ke("close", t), (s = r));
                break;
              case "iframe":
              case "object":
              case "embed":
                (Ke("load", t), (s = r));
                break;
              case "video":
              case "audio":
                for (s = 0; s < oi.length; s++) Ke(oi[s], t);
                s = r;
                break;
              case "source":
                (Ke("error", t), (s = r));
                break;
              case "img":
              case "image":
              case "link":
                (Ke("error", t), Ke("load", t), (s = r));
                break;
              case "details":
                (Ke("toggle", t), (s = r));
                break;
              case "input":
                (ld(t, r), (s = ec(t, r)), Ke("invalid", t));
                break;
              case "option":
                s = r;
                break;
              case "select":
                ((t._wrapperState = { wasMultiple: !!r.multiple }),
                  (s = nt({}, r, { value: void 0 })),
                  Ke("invalid", t));
                break;
              case "textarea":
                (ud(t, r), (s = rc(t, r)), Ke("invalid", t));
                break;
              default:
                s = r;
            }
            (ic(n, s), (l = s));
            for (i in l)
              if (l.hasOwnProperty(i)) {
                var c = l[i];
                i === "style"
                  ? bp(t, c)
                  : i === "dangerouslySetInnerHTML"
                    ? ((c = c ? c.__html : void 0), c != null && xp(t, c))
                    : i === "children"
                      ? typeof c == "string"
                        ? (n !== "textarea" || c !== "") && Si(t, c)
                        : typeof c == "number" && Si(t, "" + c)
                      : i !== "suppressContentEditableWarning" &&
                        i !== "suppressHydrationWarning" &&
                        i !== "autoFocus" &&
                        (ki.hasOwnProperty(i)
                          ? c != null && i === "onScroll" && Ke("scroll", t)
                          : c != null && uu(t, i, c, a));
              }
            switch (n) {
              case "input":
                (ia(t), cd(t, r, !1));
                break;
              case "textarea":
                (ia(t), dd(t));
                break;
              case "option":
                r.value != null && t.setAttribute("value", "" + vr(r.value));
                break;
              case "select":
                ((t.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? ws(t, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      ws(t, !!r.multiple, r.defaultValue, !0));
                break;
              default:
                typeof s.onClick == "function" && (t.onclick = ao);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (e.flags |= 4);
        }
        e.ref !== null && ((e.flags |= 512), (e.flags |= 2097152));
      }
      return (bt(e), null);
    case 6:
      if (t && e.stateNode != null) Wm(t, e, t.memoizedProps, r);
      else {
        if (typeof r != "string" && e.stateNode === null) throw Error($(166));
        if (((n = Or(Li.current)), Or(Pn.current), pa(e))) {
          if (
            ((r = e.stateNode),
            (n = e.memoizedProps),
            (r[Rn] = e),
            (i = r.nodeValue !== n) && ((t = Gt), t !== null))
          )
            switch (t.tag) {
              case 3:
                fa(r.nodeValue, n, (t.mode & 1) !== 0);
                break;
              case 5:
                t.memoizedProps.suppressHydrationWarning !== !0 &&
                  fa(r.nodeValue, n, (t.mode & 1) !== 0);
            }
          i && (e.flags |= 4);
        } else
          ((r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Rn] = e),
            (e.stateNode = r));
      }
      return (bt(e), null);
    case 13:
      if (
        (Ge(Qe),
        (r = e.memoizedState),
        t === null ||
          (t.memoizedState !== null && t.memoizedState.dehydrated !== null))
      ) {
        if (Ze && Kt !== null && e.mode & 1 && !(e.flags & 128))
          (cm(), Ps(), (e.flags |= 98560), (i = !1));
        else if (((i = pa(e)), r !== null && r.dehydrated !== null)) {
          if (t === null) {
            if (!i) throw Error($(318));
            if (
              ((i = e.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error($(317));
            i[Rn] = e;
          } else
            (Ps(),
              !(e.flags & 128) && (e.memoizedState = null),
              (e.flags |= 4));
          (bt(e), (i = !1));
        } else (pn !== null && (Bc(pn), (pn = null)), (i = !0));
        if (!i) return e.flags & 65536 ? e : null;
      }
      return e.flags & 128
        ? ((e.lanes = n), e)
        : ((r = r !== null),
          r !== (t !== null && t.memoizedState !== null) &&
            r &&
            ((e.child.flags |= 8192),
            e.mode & 1 &&
              (t === null || Qe.current & 1 ? dt === 0 && (dt = 3) : qu())),
          e.updateQueue !== null && (e.flags |= 4),
          bt(e),
          null);
    case 4:
      return (
        Is(),
        Pc(t, e),
        t === null && Ai(e.stateNode.containerInfo),
        bt(e),
        null
      );
    case 10:
      return (Cu(e.type._context), bt(e), null);
    case 17:
      return (Ut(e.type) && oo(), bt(e), null);
    case 19:
      if ((Ge(Qe), (i = e.memoizedState), i === null)) return (bt(e), null);
      if (((r = (e.flags & 128) !== 0), (a = i.rendering), a === null))
        if (r) Xs(i, !1);
        else {
          if (dt !== 0 || (t !== null && t.flags & 128))
            for (t = e.child; t !== null; ) {
              if (((a = mo(t)), a !== null)) {
                for (
                  e.flags |= 128,
                    Xs(i, !1),
                    r = a.updateQueue,
                    r !== null && ((e.updateQueue = r), (e.flags |= 4)),
                    e.subtreeFlags = 0,
                    r = n,
                    n = e.child;
                  n !== null;

                )
                  ((i = n),
                    (t = r),
                    (i.flags &= 14680066),
                    (a = i.alternate),
                    a === null
                      ? ((i.childLanes = 0),
                        (i.lanes = t),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = a.childLanes),
                        (i.lanes = a.lanes),
                        (i.child = a.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = a.memoizedProps),
                        (i.memoizedState = a.memoizedState),
                        (i.updateQueue = a.updateQueue),
                        (i.type = a.type),
                        (t = a.dependencies),
                        (i.dependencies =
                          t === null
                            ? null
                            : {
                                lanes: t.lanes,
                                firstContext: t.firstContext,
                              })),
                    (n = n.sibling));
                return (qe(Qe, (Qe.current & 1) | 2), e.child);
              }
              t = t.sibling;
            }
          i.tail !== null &&
            at() > Ms &&
            ((e.flags |= 128), (r = !0), Xs(i, !1), (e.lanes = 4194304));
        }
      else {
        if (!r)
          if (((t = mo(a)), t !== null)) {
            if (
              ((e.flags |= 128),
              (r = !0),
              (n = t.updateQueue),
              n !== null && ((e.updateQueue = n), (e.flags |= 4)),
              Xs(i, !0),
              i.tail === null && i.tailMode === "hidden" && !a.alternate && !Ze)
            )
              return (bt(e), null);
          } else
            2 * at() - i.renderingStartTime > Ms &&
              n !== 1073741824 &&
              ((e.flags |= 128), (r = !0), Xs(i, !1), (e.lanes = 4194304));
        i.isBackwards
          ? ((a.sibling = e.child), (e.child = a))
          : ((n = i.last),
            n !== null ? (n.sibling = a) : (e.child = a),
            (i.last = a));
      }
      return i.tail !== null
        ? ((e = i.tail),
          (i.rendering = e),
          (i.tail = e.sibling),
          (i.renderingStartTime = at()),
          (e.sibling = null),
          (n = Qe.current),
          qe(Qe, r ? (n & 1) | 2 : n & 1),
          e)
        : (bt(e), null);
    case 22:
    case 23:
      return (
        Wu(),
        (r = e.memoizedState !== null),
        t !== null && (t.memoizedState !== null) !== r && (e.flags |= 8192),
        r && e.mode & 1
          ? Vt & 1073741824 && (bt(e), e.subtreeFlags & 6 && (e.flags |= 8192))
          : bt(e),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error($(156, e.tag));
}
function hy(t, e) {
  switch ((Eu(e), e.tag)) {
    case 1:
      return (
        Ut(e.type) && oo(),
        (t = e.flags),
        t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
      );
    case 3:
      return (
        Is(),
        Ge(Dt),
        Ge(Et),
        Iu(),
        (t = e.flags),
        t & 65536 && !(t & 128) ? ((e.flags = (t & -65537) | 128), e) : null
      );
    case 5:
      return (Ou(e), null);
    case 13:
      if (
        (Ge(Qe), (t = e.memoizedState), t !== null && t.dehydrated !== null)
      ) {
        if (e.alternate === null) throw Error($(340));
        Ps();
      }
      return (
        (t = e.flags),
        t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
      );
    case 19:
      return (Ge(Qe), null);
    case 4:
      return (Is(), null);
    case 10:
      return (Cu(e.type._context), null);
    case 22:
    case 23:
      return (Wu(), null);
    case 24:
      return null;
    default:
      return null;
  }
}
var va = !1,
  St = !1,
  fy = typeof WeakSet == "function" ? WeakSet : Set,
  X = null;
function vs(t, e) {
  var n = t.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        st(t, e, r);
      }
    else n.current = null;
}
function Oc(t, e, n) {
  try {
    n();
  } catch (r) {
    st(t, e, r);
  }
}
var eh = !1;
function py(t, e) {
  if (((gc = ro), (t = Yp()), ku(t))) {
    if ("selectionStart" in t)
      var n = { start: t.selectionStart, end: t.selectionEnd };
    else
      e: {
        n = ((n = t.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var s = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            (n.nodeType, i.nodeType);
          } catch {
            n = null;
            break e;
          }
          var a = 0,
            l = -1,
            c = -1,
            u = 0,
            d = 0,
            f = t,
            h = null;
          t: for (;;) {
            for (
              var p;
              f !== n || (s !== 0 && f.nodeType !== 3) || (l = a + s),
                f !== i || (r !== 0 && f.nodeType !== 3) || (c = a + r),
                f.nodeType === 3 && (a += f.nodeValue.length),
                (p = f.firstChild) !== null;

            )
              ((h = f), (f = p));
            for (;;) {
              if (f === t) break t;
              if (
                (h === n && ++u === s && (l = a),
                h === i && ++d === r && (c = a),
                (p = f.nextSibling) !== null)
              )
                break;
              ((f = h), (h = f.parentNode));
            }
            f = p;
          }
          n = l === -1 || c === -1 ? null : { start: l, end: c };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (vc = { focusedElem: t, selectionRange: n }, ro = !1, X = e; X !== null; )
    if (((e = X), (t = e.child), (e.subtreeFlags & 1028) !== 0 && t !== null))
      ((t.return = e), (X = t));
    else
      for (; X !== null; ) {
        e = X;
        try {
          var v = e.alternate;
          if (e.flags & 1024)
            switch (e.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (v !== null) {
                  var x = v.memoizedProps,
                    _ = v.memoizedState,
                    m = e.stateNode,
                    g = m.getSnapshotBeforeUpdate(
                      e.elementType === e.type ? x : dn(e.type, x),
                      _,
                    );
                  m.__reactInternalSnapshotBeforeUpdate = g;
                }
                break;
              case 3:
                var y = e.stateNode.containerInfo;
                y.nodeType === 1
                  ? (y.textContent = "")
                  : y.nodeType === 9 &&
                    y.documentElement &&
                    y.removeChild(y.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error($(163));
            }
        } catch (E) {
          st(e, e.return, E);
        }
        if (((t = e.sibling), t !== null)) {
          ((t.return = e.return), (X = t));
          break;
        }
        X = e.return;
      }
  return ((v = eh), (eh = !1), v);
}
function wi(t, e, n) {
  var r = e.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var s = (r = r.next);
    do {
      if ((s.tag & t) === t) {
        var i = s.destroy;
        ((s.destroy = void 0), i !== void 0 && Oc(e, n, i));
      }
      s = s.next;
    } while (s !== r);
  }
}
function qo(t, e) {
  if (
    ((e = e.updateQueue), (e = e !== null ? e.lastEffect : null), e !== null)
  ) {
    var n = (e = e.next);
    do {
      if ((n.tag & t) === t) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== e);
  }
}
function Ic(t) {
  var e = t.ref;
  if (e !== null) {
    var n = t.stateNode;
    switch (t.tag) {
      case 5:
        t = n;
        break;
      default:
        t = n;
    }
    typeof e == "function" ? e(t) : (e.current = t);
  }
}
function qm(t) {
  var e = t.alternate;
  (e !== null && ((t.alternate = null), qm(e)),
    (t.child = null),
    (t.deletions = null),
    (t.sibling = null),
    t.tag === 5 &&
      ((e = t.stateNode),
      e !== null &&
        (delete e[Rn], delete e[Oi], delete e[xc], delete e[Yv], delete e[Xv])),
    (t.stateNode = null),
    (t.return = null),
    (t.dependencies = null),
    (t.memoizedProps = null),
    (t.memoizedState = null),
    (t.pendingProps = null),
    (t.stateNode = null),
    (t.updateQueue = null));
}
function Km(t) {
  return t.tag === 5 || t.tag === 3 || t.tag === 4;
}
function th(t) {
  e: for (;;) {
    for (; t.sibling === null; ) {
      if (t.return === null || Km(t.return)) return null;
      t = t.return;
    }
    for (
      t.sibling.return = t.return, t = t.sibling;
      t.tag !== 5 && t.tag !== 6 && t.tag !== 18;

    ) {
      if (t.flags & 2 || t.child === null || t.tag === 4) continue e;
      ((t.child.return = t), (t = t.child));
    }
    if (!(t.flags & 2)) return t.stateNode;
  }
}
function Lc(t, e, n) {
  var r = t.tag;
  if (r === 5 || r === 6)
    ((t = t.stateNode),
      e
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(t, e)
          : n.insertBefore(t, e)
        : (n.nodeType === 8
            ? ((e = n.parentNode), e.insertBefore(t, n))
            : ((e = n), e.appendChild(t)),
          (n = n._reactRootContainer),
          n != null || e.onclick !== null || (e.onclick = ao)));
  else if (r !== 4 && ((t = t.child), t !== null))
    for (Lc(t, e, n), t = t.sibling; t !== null; )
      (Lc(t, e, n), (t = t.sibling));
}
function Mc(t, e, n) {
  var r = t.tag;
  if (r === 5 || r === 6)
    ((t = t.stateNode), e ? n.insertBefore(t, e) : n.appendChild(t));
  else if (r !== 4 && ((t = t.child), t !== null))
    for (Mc(t, e, n), t = t.sibling; t !== null; )
      (Mc(t, e, n), (t = t.sibling));
}
var yt = null,
  fn = !1;
function Xn(t, e, n) {
  for (n = n.child; n !== null; ) (Gm(t, e, n), (n = n.sibling));
}
function Gm(t, e, n) {
  if (An && typeof An.onCommitFiberUnmount == "function")
    try {
      An.onCommitFiberUnmount(Do, n);
    } catch {}
  switch (n.tag) {
    case 5:
      St || vs(n, e);
    case 6:
      var r = yt,
        s = fn;
      ((yt = null),
        Xn(t, e, n),
        (yt = r),
        (fn = s),
        yt !== null &&
          (fn
            ? ((t = yt),
              (n = n.stateNode),
              t.nodeType === 8 ? t.parentNode.removeChild(n) : t.removeChild(n))
            : yt.removeChild(n.stateNode)));
      break;
    case 18:
      yt !== null &&
        (fn
          ? ((t = yt),
            (n = n.stateNode),
            t.nodeType === 8
              ? El(t.parentNode, n)
              : t.nodeType === 1 && El(t, n),
            Ni(t))
          : El(yt, n.stateNode));
      break;
    case 4:
      ((r = yt),
        (s = fn),
        (yt = n.stateNode.containerInfo),
        (fn = !0),
        Xn(t, e, n),
        (yt = r),
        (fn = s));
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !St &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        s = r = r.next;
        do {
          var i = s,
            a = i.destroy;
          ((i = i.tag),
            a !== void 0 && (i & 2 || i & 4) && Oc(n, e, a),
            (s = s.next));
        } while (s !== r);
      }
      Xn(t, e, n);
      break;
    case 1:
      if (
        !St &&
        (vs(n, e),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          ((r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount());
        } catch (l) {
          st(n, e, l);
        }
      Xn(t, e, n);
      break;
    case 21:
      Xn(t, e, n);
      break;
    case 22:
      n.mode & 1
        ? ((St = (r = St) || n.memoizedState !== null), Xn(t, e, n), (St = r))
        : Xn(t, e, n);
      break;
    default:
      Xn(t, e, n);
  }
}
function nh(t) {
  var e = t.updateQueue;
  if (e !== null) {
    t.updateQueue = null;
    var n = t.stateNode;
    (n === null && (n = t.stateNode = new fy()),
      e.forEach(function (r) {
        var s = ky.bind(null, t, r);
        n.has(r) || (n.add(r), r.then(s, s));
      }));
  }
}
function ln(t, e) {
  var n = e.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var s = n[r];
      try {
        var i = t,
          a = e,
          l = a;
        e: for (; l !== null; ) {
          switch (l.tag) {
            case 5:
              ((yt = l.stateNode), (fn = !1));
              break e;
            case 3:
              ((yt = l.stateNode.containerInfo), (fn = !0));
              break e;
            case 4:
              ((yt = l.stateNode.containerInfo), (fn = !0));
              break e;
          }
          l = l.return;
        }
        if (yt === null) throw Error($(160));
        (Gm(i, a, s), (yt = null), (fn = !1));
        var c = s.alternate;
        (c !== null && (c.return = null), (s.return = null));
      } catch (u) {
        st(s, e, u);
      }
    }
  if (e.subtreeFlags & 12854)
    for (e = e.child; e !== null; ) (Jm(e, t), (e = e.sibling));
}
function Jm(t, e) {
  var n = t.alternate,
    r = t.flags;
  switch (t.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((ln(e, t), Sn(t), r & 4)) {
        try {
          (wi(3, t, t.return), qo(3, t));
        } catch (x) {
          st(t, t.return, x);
        }
        try {
          wi(5, t, t.return);
        } catch (x) {
          st(t, t.return, x);
        }
      }
      break;
    case 1:
      (ln(e, t), Sn(t), r & 512 && n !== null && vs(n, n.return));
      break;
    case 5:
      if (
        (ln(e, t),
        Sn(t),
        r & 512 && n !== null && vs(n, n.return),
        t.flags & 32)
      ) {
        var s = t.stateNode;
        try {
          Si(s, "");
        } catch (x) {
          st(t, t.return, x);
        }
      }
      if (r & 4 && ((s = t.stateNode), s != null)) {
        var i = t.memoizedProps,
          a = n !== null ? n.memoizedProps : i,
          l = t.type,
          c = t.updateQueue;
        if (((t.updateQueue = null), c !== null))
          try {
            (l === "input" && i.type === "radio" && i.name != null && vp(s, i),
              ac(l, a));
            var u = ac(l, i);
            for (a = 0; a < c.length; a += 2) {
              var d = c[a],
                f = c[a + 1];
              d === "style"
                ? bp(s, f)
                : d === "dangerouslySetInnerHTML"
                  ? xp(s, f)
                  : d === "children"
                    ? Si(s, f)
                    : uu(s, d, f, u);
            }
            switch (l) {
              case "input":
                tc(s, i);
                break;
              case "textarea":
                yp(s, i);
                break;
              case "select":
                var h = s._wrapperState.wasMultiple;
                s._wrapperState.wasMultiple = !!i.multiple;
                var p = i.value;
                p != null
                  ? ws(s, !!i.multiple, p, !1)
                  : h !== !!i.multiple &&
                    (i.defaultValue != null
                      ? ws(s, !!i.multiple, i.defaultValue, !0)
                      : ws(s, !!i.multiple, i.multiple ? [] : "", !1));
            }
            s[Oi] = i;
          } catch (x) {
            st(t, t.return, x);
          }
      }
      break;
    case 6:
      if ((ln(e, t), Sn(t), r & 4)) {
        if (t.stateNode === null) throw Error($(162));
        ((s = t.stateNode), (i = t.memoizedProps));
        try {
          s.nodeValue = i;
        } catch (x) {
          st(t, t.return, x);
        }
      }
      break;
    case 3:
      if (
        (ln(e, t), Sn(t), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Ni(e.containerInfo);
        } catch (x) {
          st(t, t.return, x);
        }
      break;
    case 4:
      (ln(e, t), Sn(t));
      break;
    case 13:
      (ln(e, t),
        Sn(t),
        (s = t.child),
        s.flags & 8192 &&
          ((i = s.memoizedState !== null),
          (s.stateNode.isHidden = i),
          !i ||
            (s.alternate !== null && s.alternate.memoizedState !== null) ||
            (Hu = at())),
        r & 4 && nh(t));
      break;
    case 22:
      if (
        ((d = n !== null && n.memoizedState !== null),
        t.mode & 1 ? ((St = (u = St) || d), ln(e, t), (St = u)) : ln(e, t),
        Sn(t),
        r & 8192)
      ) {
        if (
          ((u = t.memoizedState !== null),
          (t.stateNode.isHidden = u) && !d && t.mode & 1)
        )
          for (X = t, d = t.child; d !== null; ) {
            for (f = X = d; X !== null; ) {
              switch (((h = X), (p = h.child), h.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  wi(4, h, h.return);
                  break;
                case 1:
                  vs(h, h.return);
                  var v = h.stateNode;
                  if (typeof v.componentWillUnmount == "function") {
                    ((r = h), (n = h.return));
                    try {
                      ((e = r),
                        (v.props = e.memoizedProps),
                        (v.state = e.memoizedState),
                        v.componentWillUnmount());
                    } catch (x) {
                      st(r, n, x);
                    }
                  }
                  break;
                case 5:
                  vs(h, h.return);
                  break;
                case 22:
                  if (h.memoizedState !== null) {
                    sh(f);
                    continue;
                  }
              }
              p !== null ? ((p.return = h), (X = p)) : sh(f);
            }
            d = d.sibling;
          }
        e: for (d = null, f = t; ; ) {
          if (f.tag === 5) {
            if (d === null) {
              d = f;
              try {
                ((s = f.stateNode),
                  u
                    ? ((i = s.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((l = f.stateNode),
                      (c = f.memoizedProps.style),
                      (a =
                        c != null && c.hasOwnProperty("display")
                          ? c.display
                          : null),
                      (l.style.display = _p("display", a))));
              } catch (x) {
                st(t, t.return, x);
              }
            }
          } else if (f.tag === 6) {
            if (d === null)
              try {
                f.stateNode.nodeValue = u ? "" : f.memoizedProps;
              } catch (x) {
                st(t, t.return, x);
              }
          } else if (
            ((f.tag !== 22 && f.tag !== 23) ||
              f.memoizedState === null ||
              f === t) &&
            f.child !== null
          ) {
            ((f.child.return = f), (f = f.child));
            continue;
          }
          if (f === t) break e;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === t) break e;
            (d === f && (d = null), (f = f.return));
          }
          (d === f && (d = null),
            (f.sibling.return = f.return),
            (f = f.sibling));
        }
      }
      break;
    case 19:
      (ln(e, t), Sn(t), r & 4 && nh(t));
      break;
    case 21:
      break;
    default:
      (ln(e, t), Sn(t));
  }
}
function Sn(t) {
  var e = t.flags;
  if (e & 2) {
    try {
      e: {
        for (var n = t.return; n !== null; ) {
          if (Km(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error($(160));
      }
      switch (r.tag) {
        case 5:
          var s = r.stateNode;
          r.flags & 32 && (Si(s, ""), (r.flags &= -33));
          var i = th(t);
          Mc(t, i, s);
          break;
        case 3:
        case 4:
          var a = r.stateNode.containerInfo,
            l = th(t);
          Lc(t, l, a);
          break;
        default:
          throw Error($(161));
      }
    } catch (c) {
      st(t, t.return, c);
    }
    t.flags &= -3;
  }
  e & 4096 && (t.flags &= -4097);
}
function my(t, e, n) {
  ((X = t), Ym(t));
}
function Ym(t, e, n) {
  for (var r = (t.mode & 1) !== 0; X !== null; ) {
    var s = X,
      i = s.child;
    if (s.tag === 22 && r) {
      var a = s.memoizedState !== null || va;
      if (!a) {
        var l = s.alternate,
          c = (l !== null && l.memoizedState !== null) || St;
        l = va;
        var u = St;
        if (((va = a), (St = c) && !u))
          for (X = s; X !== null; )
            ((a = X),
              (c = a.child),
              a.tag === 22 && a.memoizedState !== null
                ? ih(s)
                : c !== null
                  ? ((c.return = a), (X = c))
                  : ih(s));
        for (; i !== null; ) ((X = i), Ym(i), (i = i.sibling));
        ((X = s), (va = l), (St = u));
      }
      rh(t);
    } else
      s.subtreeFlags & 8772 && i !== null ? ((i.return = s), (X = i)) : rh(t);
  }
}
function rh(t) {
  for (; X !== null; ) {
    var e = X;
    if (e.flags & 8772) {
      var n = e.alternate;
      try {
        if (e.flags & 8772)
          switch (e.tag) {
            case 0:
            case 11:
            case 15:
              St || qo(5, e);
              break;
            case 1:
              var r = e.stateNode;
              if (e.flags & 4 && !St)
                if (n === null) r.componentDidMount();
                else {
                  var s =
                    e.elementType === e.type
                      ? n.memoizedProps
                      : dn(e.type, n.memoizedProps);
                  r.componentDidUpdate(
                    s,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate,
                  );
                }
              var i = e.updateQueue;
              i !== null && zd(e, i, r);
              break;
            case 3:
              var a = e.updateQueue;
              if (a !== null) {
                if (((n = null), e.child !== null))
                  switch (e.child.tag) {
                    case 5:
                      n = e.child.stateNode;
                      break;
                    case 1:
                      n = e.child.stateNode;
                  }
                zd(e, a, n);
              }
              break;
            case 5:
              var l = e.stateNode;
              if (n === null && e.flags & 4) {
                n = l;
                var c = e.memoizedProps;
                switch (e.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    c.autoFocus && n.focus();
                    break;
                  case "img":
                    c.src && (n.src = c.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (e.memoizedState === null) {
                var u = e.alternate;
                if (u !== null) {
                  var d = u.memoizedState;
                  if (d !== null) {
                    var f = d.dehydrated;
                    f !== null && Ni(f);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error($(163));
          }
        St || (e.flags & 512 && Ic(e));
      } catch (h) {
        st(e, e.return, h);
      }
    }
    if (e === t) {
      X = null;
      break;
    }
    if (((n = e.sibling), n !== null)) {
      ((n.return = e.return), (X = n));
      break;
    }
    X = e.return;
  }
}
function sh(t) {
  for (; X !== null; ) {
    var e = X;
    if (e === t) {
      X = null;
      break;
    }
    var n = e.sibling;
    if (n !== null) {
      ((n.return = e.return), (X = n));
      break;
    }
    X = e.return;
  }
}
function ih(t) {
  for (; X !== null; ) {
    var e = X;
    try {
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          var n = e.return;
          try {
            qo(4, e);
          } catch (c) {
            st(e, n, c);
          }
          break;
        case 1:
          var r = e.stateNode;
          if (typeof r.componentDidMount == "function") {
            var s = e.return;
            try {
              r.componentDidMount();
            } catch (c) {
              st(e, s, c);
            }
          }
          var i = e.return;
          try {
            Ic(e);
          } catch (c) {
            st(e, i, c);
          }
          break;
        case 5:
          var a = e.return;
          try {
            Ic(e);
          } catch (c) {
            st(e, a, c);
          }
      }
    } catch (c) {
      st(e, e.return, c);
    }
    if (e === t) {
      X = null;
      break;
    }
    var l = e.sibling;
    if (l !== null) {
      ((l.return = e.return), (X = l));
      break;
    }
    X = e.return;
  }
}
var gy = Math.ceil,
  yo = Yn.ReactCurrentDispatcher,
  zu = Yn.ReactCurrentOwner,
  sn = Yn.ReactCurrentBatchConfig,
  Ie = 0,
  pt = null,
  ct = null,
  wt = 0,
  Vt = 0,
  ys = _r(0),
  dt = 0,
  Ui = null,
  Hr = 0,
  Ko = 0,
  Fu = 0,
  xi = null,
  Lt = null,
  Hu = 0,
  Ms = 1 / 0,
  Mn = null,
  wo = !1,
  $c = null,
  pr = null,
  ya = !1,
  or = null,
  xo = 0,
  _i = 0,
  Dc = null,
  Wa = -1,
  qa = 0;
function Ct() {
  return Ie & 6 ? at() : Wa !== -1 ? Wa : (Wa = at());
}
function mr(t) {
  return t.mode & 1
    ? Ie & 2 && wt !== 0
      ? wt & -wt
      : Qv.transition !== null
        ? (qa === 0 && (qa = Ip()), qa)
        : ((t = Be),
          t !== 0 || ((t = window.event), (t = t === void 0 ? 16 : zp(t.type))),
          t)
    : 1;
}
function vn(t, e, n, r) {
  if (50 < _i) throw ((_i = 0), (Dc = null), Error($(185)));
  (Ji(t, n, r),
    (!(Ie & 2) || t !== pt) &&
      (t === pt && (!(Ie & 2) && (Ko |= n), dt === 4 && rr(t, wt)),
      Bt(t, r),
      n === 1 && Ie === 0 && !(e.mode & 1) && ((Ms = at() + 500), Ho && br())));
}
function Bt(t, e) {
  var n = t.callbackNode;
  Qg(t, e);
  var r = no(t, t === pt ? wt : 0);
  if (r === 0)
    (n !== null && pd(n), (t.callbackNode = null), (t.callbackPriority = 0));
  else if (((e = r & -r), t.callbackPriority !== e)) {
    if ((n != null && pd(n), e === 1))
      (t.tag === 0 ? Zv(ah.bind(null, t)) : am(ah.bind(null, t)),
        Gv(function () {
          !(Ie & 6) && br();
        }),
        (n = null));
    else {
      switch (Lp(r)) {
        case 1:
          n = mu;
          break;
        case 4:
          n = Pp;
          break;
        case 16:
          n = to;
          break;
        case 536870912:
          n = Op;
          break;
        default:
          n = to;
      }
      n = s0(n, Xm.bind(null, t));
    }
    ((t.callbackPriority = e), (t.callbackNode = n));
  }
}
function Xm(t, e) {
  if (((Wa = -1), (qa = 0), Ie & 6)) throw Error($(327));
  var n = t.callbackNode;
  if (Ss() && t.callbackNode !== n) return null;
  var r = no(t, t === pt ? wt : 0);
  if (r === 0) return null;
  if (r & 30 || r & t.expiredLanes || e) e = _o(t, r);
  else {
    e = r;
    var s = Ie;
    Ie |= 2;
    var i = Qm();
    (pt !== t || wt !== e) && ((Mn = null), (Ms = at() + 500), Dr(t, e));
    do
      try {
        wy();
        break;
      } catch (l) {
        Zm(t, l);
      }
    while (!0);
    (Nu(),
      (yo.current = i),
      (Ie = s),
      ct !== null ? (e = 0) : ((pt = null), (wt = 0), (e = dt)));
  }
  if (e !== 0) {
    if (
      (e === 2 && ((s = dc(t)), s !== 0 && ((r = s), (e = Uc(t, s)))), e === 1)
    )
      throw ((n = Ui), Dr(t, 0), rr(t, r), Bt(t, at()), n);
    if (e === 6) rr(t, r);
    else {
      if (
        ((s = t.current.alternate),
        !(r & 30) &&
          !vy(s) &&
          ((e = _o(t, r)),
          e === 2 && ((i = dc(t)), i !== 0 && ((r = i), (e = Uc(t, i)))),
          e === 1))
      )
        throw ((n = Ui), Dr(t, 0), rr(t, r), Bt(t, at()), n);
      switch (((t.finishedWork = s), (t.finishedLanes = r), e)) {
        case 0:
        case 1:
          throw Error($(345));
        case 2:
          Nr(t, Lt, Mn);
          break;
        case 3:
          if (
            (rr(t, r), (r & 130023424) === r && ((e = Hu + 500 - at()), 10 < e))
          ) {
            if (no(t, 0) !== 0) break;
            if (((s = t.suspendedLanes), (s & r) !== r)) {
              (Ct(), (t.pingedLanes |= t.suspendedLanes & s));
              break;
            }
            t.timeoutHandle = wc(Nr.bind(null, t, Lt, Mn), e);
            break;
          }
          Nr(t, Lt, Mn);
          break;
        case 4:
          if ((rr(t, r), (r & 4194240) === r)) break;
          for (e = t.eventTimes, s = -1; 0 < r; ) {
            var a = 31 - gn(r);
            ((i = 1 << a), (a = e[a]), a > s && (s = a), (r &= ~i));
          }
          if (
            ((r = s),
            (r = at() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                  ? 480
                  : 1080 > r
                    ? 1080
                    : 1920 > r
                      ? 1920
                      : 3e3 > r
                        ? 3e3
                        : 4320 > r
                          ? 4320
                          : 1960 * gy(r / 1960)) - r),
            10 < r)
          ) {
            t.timeoutHandle = wc(Nr.bind(null, t, Lt, Mn), r);
            break;
          }
          Nr(t, Lt, Mn);
          break;
        case 5:
          Nr(t, Lt, Mn);
          break;
        default:
          throw Error($(329));
      }
    }
  }
  return (Bt(t, at()), t.callbackNode === n ? Xm.bind(null, t) : null);
}
function Uc(t, e) {
  var n = xi;
  return (
    t.current.memoizedState.isDehydrated && (Dr(t, e).flags |= 256),
    (t = _o(t, e)),
    t !== 2 && ((e = Lt), (Lt = n), e !== null && Bc(e)),
    t
  );
}
function Bc(t) {
  Lt === null ? (Lt = t) : Lt.push.apply(Lt, t);
}
function vy(t) {
  for (var e = t; ; ) {
    if (e.flags & 16384) {
      var n = e.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var s = n[r],
            i = s.getSnapshot;
          s = s.value;
          try {
            if (!yn(i(), s)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = e.child), e.subtreeFlags & 16384 && n !== null))
      ((n.return = e), (e = n));
    else {
      if (e === t) break;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) return !0;
        e = e.return;
      }
      ((e.sibling.return = e.return), (e = e.sibling));
    }
  }
  return !0;
}
function rr(t, e) {
  for (
    e &= ~Fu,
      e &= ~Ko,
      t.suspendedLanes |= e,
      t.pingedLanes &= ~e,
      t = t.expirationTimes;
    0 < e;

  ) {
    var n = 31 - gn(e),
      r = 1 << n;
    ((t[n] = -1), (e &= ~r));
  }
}
function ah(t) {
  if (Ie & 6) throw Error($(327));
  Ss();
  var e = no(t, 0);
  if (!(e & 1)) return (Bt(t, at()), null);
  var n = _o(t, e);
  if (t.tag !== 0 && n === 2) {
    var r = dc(t);
    r !== 0 && ((e = r), (n = Uc(t, r)));
  }
  if (n === 1) throw ((n = Ui), Dr(t, 0), rr(t, e), Bt(t, at()), n);
  if (n === 6) throw Error($(345));
  return (
    (t.finishedWork = t.current.alternate),
    (t.finishedLanes = e),
    Nr(t, Lt, Mn),
    Bt(t, at()),
    null
  );
}
function Vu(t, e) {
  var n = Ie;
  Ie |= 1;
  try {
    return t(e);
  } finally {
    ((Ie = n), Ie === 0 && ((Ms = at() + 500), Ho && br()));
  }
}
function Vr(t) {
  or !== null && or.tag === 0 && !(Ie & 6) && Ss();
  var e = Ie;
  Ie |= 1;
  var n = sn.transition,
    r = Be;
  try {
    if (((sn.transition = null), (Be = 1), t)) return t();
  } finally {
    ((Be = r), (sn.transition = n), (Ie = e), !(Ie & 6) && br());
  }
}
function Wu() {
  ((Vt = ys.current), Ge(ys));
}
function Dr(t, e) {
  ((t.finishedWork = null), (t.finishedLanes = 0));
  var n = t.timeoutHandle;
  if ((n !== -1 && ((t.timeoutHandle = -1), Kv(n)), ct !== null))
    for (n = ct.return; n !== null; ) {
      var r = n;
      switch ((Eu(r), r.tag)) {
        case 1:
          ((r = r.type.childContextTypes), r != null && oo());
          break;
        case 3:
          (Is(), Ge(Dt), Ge(Et), Iu());
          break;
        case 5:
          Ou(r);
          break;
        case 4:
          Is();
          break;
        case 13:
          Ge(Qe);
          break;
        case 19:
          Ge(Qe);
          break;
        case 10:
          Cu(r.type._context);
          break;
        case 22:
        case 23:
          Wu();
      }
      n = n.return;
    }
  if (
    ((pt = t),
    (ct = t = gr(t.current, null)),
    (wt = Vt = e),
    (dt = 0),
    (Ui = null),
    (Fu = Ko = Hr = 0),
    (Lt = xi = null),
    Pr !== null)
  ) {
    for (e = 0; e < Pr.length; e++)
      if (((n = Pr[e]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var s = r.next,
          i = n.pending;
        if (i !== null) {
          var a = i.next;
          ((i.next = s), (r.next = a));
        }
        n.pending = r;
      }
    Pr = null;
  }
  return t;
}
function Zm(t, e) {
  do {
    var n = ct;
    try {
      if ((Nu(), (Fa.current = vo), go)) {
        for (var r = tt.memoizedState; r !== null; ) {
          var s = r.queue;
          (s !== null && (s.pending = null), (r = r.next));
        }
        go = !1;
      }
      if (
        ((Fr = 0),
        (ft = ut = tt = null),
        (yi = !1),
        (Mi = 0),
        (zu.current = null),
        n === null || n.return === null)
      ) {
        ((dt = 1), (Ui = e), (ct = null));
        break;
      }
      e: {
        var i = t,
          a = n.return,
          l = n,
          c = e;
        if (
          ((e = wt),
          (l.flags |= 32768),
          c !== null && typeof c == "object" && typeof c.then == "function")
        ) {
          var u = c,
            d = l,
            f = d.tag;
          if (!(d.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var h = d.alternate;
            h
              ? ((d.updateQueue = h.updateQueue),
                (d.memoizedState = h.memoizedState),
                (d.lanes = h.lanes))
              : ((d.updateQueue = null), (d.memoizedState = null));
          }
          var p = Kd(a);
          if (p !== null) {
            ((p.flags &= -257),
              Gd(p, a, l, i, e),
              p.mode & 1 && qd(i, u, e),
              (e = p),
              (c = u));
            var v = e.updateQueue;
            if (v === null) {
              var x = new Set();
              (x.add(c), (e.updateQueue = x));
            } else v.add(c);
            break e;
          } else {
            if (!(e & 1)) {
              (qd(i, u, e), qu());
              break e;
            }
            c = Error($(426));
          }
        } else if (Ze && l.mode & 1) {
          var _ = Kd(a);
          if (_ !== null) {
            (!(_.flags & 65536) && (_.flags |= 256),
              Gd(_, a, l, i, e),
              ju(Ls(c, l)));
            break e;
          }
        }
        ((i = c = Ls(c, l)),
          dt !== 4 && (dt = 2),
          xi === null ? (xi = [i]) : xi.push(i),
          (i = a));
        do {
          switch (i.tag) {
            case 3:
              ((i.flags |= 65536), (e &= -e), (i.lanes |= e));
              var m = Lm(i, c, e);
              Bd(i, m);
              break e;
            case 1:
              l = c;
              var g = i.type,
                y = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof g.getDerivedStateFromError == "function" ||
                  (y !== null &&
                    typeof y.componentDidCatch == "function" &&
                    (pr === null || !pr.has(y))))
              ) {
                ((i.flags |= 65536), (e &= -e), (i.lanes |= e));
                var E = Mm(i, l, e);
                Bd(i, E);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      t0(n);
    } catch (R) {
      ((e = R), ct === n && n !== null && (ct = n = n.return));
      continue;
    }
    break;
  } while (!0);
}
function Qm() {
  var t = yo.current;
  return ((yo.current = vo), t === null ? vo : t);
}
function qu() {
  ((dt === 0 || dt === 3 || dt === 2) && (dt = 4),
    pt === null || (!(Hr & 268435455) && !(Ko & 268435455)) || rr(pt, wt));
}
function _o(t, e) {
  var n = Ie;
  Ie |= 2;
  var r = Qm();
  (pt !== t || wt !== e) && ((Mn = null), Dr(t, e));
  do
    try {
      yy();
      break;
    } catch (s) {
      Zm(t, s);
    }
  while (!0);
  if ((Nu(), (Ie = n), (yo.current = r), ct !== null)) throw Error($(261));
  return ((pt = null), (wt = 0), dt);
}
function yy() {
  for (; ct !== null; ) e0(ct);
}
function wy() {
  for (; ct !== null && !Vg(); ) e0(ct);
}
function e0(t) {
  var e = r0(t.alternate, t, Vt);
  ((t.memoizedProps = t.pendingProps),
    e === null ? t0(t) : (ct = e),
    (zu.current = null));
}
function t0(t) {
  var e = t;
  do {
    var n = e.alternate;
    if (((t = e.return), e.flags & 32768)) {
      if (((n = hy(n, e)), n !== null)) {
        ((n.flags &= 32767), (ct = n));
        return;
      }
      if (t !== null)
        ((t.flags |= 32768), (t.subtreeFlags = 0), (t.deletions = null));
      else {
        ((dt = 6), (ct = null));
        return;
      }
    } else if (((n = dy(n, e, Vt)), n !== null)) {
      ct = n;
      return;
    }
    if (((e = e.sibling), e !== null)) {
      ct = e;
      return;
    }
    ct = e = t;
  } while (e !== null);
  dt === 0 && (dt = 5);
}
function Nr(t, e, n) {
  var r = Be,
    s = sn.transition;
  try {
    ((sn.transition = null), (Be = 1), xy(t, e, n, r));
  } finally {
    ((sn.transition = s), (Be = r));
  }
  return null;
}
function xy(t, e, n, r) {
  do Ss();
  while (or !== null);
  if (Ie & 6) throw Error($(327));
  n = t.finishedWork;
  var s = t.finishedLanes;
  if (n === null) return null;
  if (((t.finishedWork = null), (t.finishedLanes = 0), n === t.current))
    throw Error($(177));
  ((t.callbackNode = null), (t.callbackPriority = 0));
  var i = n.lanes | n.childLanes;
  if (
    (ev(t, i),
    t === pt && ((ct = pt = null), (wt = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      ya ||
      ((ya = !0),
      s0(to, function () {
        return (Ss(), null);
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    ((i = sn.transition), (sn.transition = null));
    var a = Be;
    Be = 1;
    var l = Ie;
    ((Ie |= 4),
      (zu.current = null),
      py(t, n),
      Jm(n, t),
      Bv(vc),
      (ro = !!gc),
      (vc = gc = null),
      (t.current = n),
      my(n),
      Wg(),
      (Ie = l),
      (Be = a),
      (sn.transition = i));
  } else t.current = n;
  if (
    (ya && ((ya = !1), (or = t), (xo = s)),
    (i = t.pendingLanes),
    i === 0 && (pr = null),
    Gg(n.stateNode),
    Bt(t, at()),
    e !== null)
  )
    for (r = t.onRecoverableError, n = 0; n < e.length; n++)
      ((s = e[n]), r(s.value, { componentStack: s.stack, digest: s.digest }));
  if (wo) throw ((wo = !1), (t = $c), ($c = null), t);
  return (
    xo & 1 && t.tag !== 0 && Ss(),
    (i = t.pendingLanes),
    i & 1 ? (t === Dc ? _i++ : ((_i = 0), (Dc = t))) : (_i = 0),
    br(),
    null
  );
}
function Ss() {
  if (or !== null) {
    var t = Lp(xo),
      e = sn.transition,
      n = Be;
    try {
      if (((sn.transition = null), (Be = 16 > t ? 16 : t), or === null))
        var r = !1;
      else {
        if (((t = or), (or = null), (xo = 0), Ie & 6)) throw Error($(331));
        var s = Ie;
        for (Ie |= 4, X = t.current; X !== null; ) {
          var i = X,
            a = i.child;
          if (X.flags & 16) {
            var l = i.deletions;
            if (l !== null) {
              for (var c = 0; c < l.length; c++) {
                var u = l[c];
                for (X = u; X !== null; ) {
                  var d = X;
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      wi(8, d, i);
                  }
                  var f = d.child;
                  if (f !== null) ((f.return = d), (X = f));
                  else
                    for (; X !== null; ) {
                      d = X;
                      var h = d.sibling,
                        p = d.return;
                      if ((qm(d), d === u)) {
                        X = null;
                        break;
                      }
                      if (h !== null) {
                        ((h.return = p), (X = h));
                        break;
                      }
                      X = p;
                    }
                }
              }
              var v = i.alternate;
              if (v !== null) {
                var x = v.child;
                if (x !== null) {
                  v.child = null;
                  do {
                    var _ = x.sibling;
                    ((x.sibling = null), (x = _));
                  } while (x !== null);
                }
              }
              X = i;
            }
          }
          if (i.subtreeFlags & 2064 && a !== null) ((a.return = i), (X = a));
          else
            e: for (; X !== null; ) {
              if (((i = X), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    wi(9, i, i.return);
                }
              var m = i.sibling;
              if (m !== null) {
                ((m.return = i.return), (X = m));
                break e;
              }
              X = i.return;
            }
        }
        var g = t.current;
        for (X = g; X !== null; ) {
          a = X;
          var y = a.child;
          if (a.subtreeFlags & 2064 && y !== null) ((y.return = a), (X = y));
          else
            e: for (a = g; X !== null; ) {
              if (((l = X), l.flags & 2048))
                try {
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      qo(9, l);
                  }
                } catch (R) {
                  st(l, l.return, R);
                }
              if (l === a) {
                X = null;
                break e;
              }
              var E = l.sibling;
              if (E !== null) {
                ((E.return = l.return), (X = E));
                break e;
              }
              X = l.return;
            }
        }
        if (
          ((Ie = s), br(), An && typeof An.onPostCommitFiberRoot == "function")
        )
          try {
            An.onPostCommitFiberRoot(Do, t);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      ((Be = n), (sn.transition = e));
    }
  }
  return !1;
}
function oh(t, e, n) {
  ((e = Ls(n, e)),
    (e = Lm(t, e, 1)),
    (t = fr(t, e, 1)),
    (e = Ct()),
    t !== null && (Ji(t, 1, e), Bt(t, e)));
}
function st(t, e, n) {
  if (t.tag === 3) oh(t, t, n);
  else
    for (; e !== null; ) {
      if (e.tag === 3) {
        oh(e, t, n);
        break;
      } else if (e.tag === 1) {
        var r = e.stateNode;
        if (
          typeof e.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (pr === null || !pr.has(r)))
        ) {
          ((t = Ls(n, t)),
            (t = Mm(e, t, 1)),
            (e = fr(e, t, 1)),
            (t = Ct()),
            e !== null && (Ji(e, 1, t), Bt(e, t)));
          break;
        }
      }
      e = e.return;
    }
}
function _y(t, e, n) {
  var r = t.pingCache;
  (r !== null && r.delete(e),
    (e = Ct()),
    (t.pingedLanes |= t.suspendedLanes & n),
    pt === t &&
      (wt & n) === n &&
      (dt === 4 || (dt === 3 && (wt & 130023424) === wt && 500 > at() - Hu)
        ? Dr(t, 0)
        : (Fu |= n)),
    Bt(t, e));
}
function n0(t, e) {
  e === 0 &&
    (t.mode & 1
      ? ((e = la), (la <<= 1), !(la & 130023424) && (la = 4194304))
      : (e = 1));
  var n = Ct();
  ((t = Gn(t, e)), t !== null && (Ji(t, e, n), Bt(t, n)));
}
function by(t) {
  var e = t.memoizedState,
    n = 0;
  (e !== null && (n = e.retryLane), n0(t, n));
}
function ky(t, e) {
  var n = 0;
  switch (t.tag) {
    case 13:
      var r = t.stateNode,
        s = t.memoizedState;
      s !== null && (n = s.retryLane);
      break;
    case 19:
      r = t.stateNode;
      break;
    default:
      throw Error($(314));
  }
  (r !== null && r.delete(e), n0(t, n));
}
var r0;
r0 = function (t, e, n) {
  if (t !== null)
    if (t.memoizedProps !== e.pendingProps || Dt.current) $t = !0;
    else {
      if (!(t.lanes & n) && !(e.flags & 128)) return (($t = !1), uy(t, e, n));
      $t = !!(t.flags & 131072);
    }
  else (($t = !1), Ze && e.flags & 1048576 && om(e, uo, e.index));
  switch (((e.lanes = 0), e.tag)) {
    case 2:
      var r = e.type;
      (Va(t, e), (t = e.pendingProps));
      var s = As(e, Et.current);
      (ks(e, n), (s = Mu(null, e, r, t, s, n)));
      var i = $u();
      return (
        (e.flags |= 1),
        typeof s == "object" &&
        s !== null &&
        typeof s.render == "function" &&
        s.$$typeof === void 0
          ? ((e.tag = 1),
            (e.memoizedState = null),
            (e.updateQueue = null),
            Ut(r) ? ((i = !0), lo(e)) : (i = !1),
            (e.memoizedState =
              s.state !== null && s.state !== void 0 ? s.state : null),
            Au(e),
            (s.updater = Wo),
            (e.stateNode = s),
            (s._reactInternals = e),
            jc(e, r, t, n),
            (e = Cc(null, e, r, !0, i, n)))
          : ((e.tag = 0), Ze && i && Su(e), Nt(null, e, s, n), (e = e.child)),
        e
      );
    case 16:
      r = e.elementType;
      e: {
        switch (
          (Va(t, e),
          (t = e.pendingProps),
          (s = r._init),
          (r = s(r._payload)),
          (e.type = r),
          (s = e.tag = Ey(r)),
          (t = dn(r, t)),
          s)
        ) {
          case 0:
            e = Nc(null, e, r, t, n);
            break e;
          case 1:
            e = Xd(null, e, r, t, n);
            break e;
          case 11:
            e = Jd(null, e, r, t, n);
            break e;
          case 14:
            e = Yd(null, e, r, dn(r.type, t), n);
            break e;
        }
        throw Error($(306, r, ""));
      }
      return e;
    case 0:
      return (
        (r = e.type),
        (s = e.pendingProps),
        (s = e.elementType === r ? s : dn(r, s)),
        Nc(t, e, r, s, n)
      );
    case 1:
      return (
        (r = e.type),
        (s = e.pendingProps),
        (s = e.elementType === r ? s : dn(r, s)),
        Xd(t, e, r, s, n)
      );
    case 3:
      e: {
        if ((Bm(e), t === null)) throw Error($(387));
        ((r = e.pendingProps),
          (i = e.memoizedState),
          (s = i.element),
          fm(t, e),
          po(e, r, null, n));
        var a = e.memoizedState;
        if (((r = a.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: a.cache,
              pendingSuspenseBoundaries: a.pendingSuspenseBoundaries,
              transitions: a.transitions,
            }),
            (e.updateQueue.baseState = i),
            (e.memoizedState = i),
            e.flags & 256)
          ) {
            ((s = Ls(Error($(423)), e)), (e = Zd(t, e, r, n, s)));
            break e;
          } else if (r !== s) {
            ((s = Ls(Error($(424)), e)), (e = Zd(t, e, r, n, s)));
            break e;
          } else
            for (
              Kt = hr(e.stateNode.containerInfo.firstChild),
                Gt = e,
                Ze = !0,
                pn = null,
                n = dm(e, null, r, n),
                e.child = n;
              n;

            )
              ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
        else {
          if ((Ps(), r === s)) {
            e = Jn(t, e, n);
            break e;
          }
          Nt(t, e, r, n);
        }
        e = e.child;
      }
      return e;
    case 5:
      return (
        pm(e),
        t === null && kc(e),
        (r = e.type),
        (s = e.pendingProps),
        (i = t !== null ? t.memoizedProps : null),
        (a = s.children),
        yc(r, s) ? (a = null) : i !== null && yc(r, i) && (e.flags |= 32),
        Um(t, e),
        Nt(t, e, a, n),
        e.child
      );
    case 6:
      return (t === null && kc(e), null);
    case 13:
      return zm(t, e, n);
    case 4:
      return (
        Pu(e, e.stateNode.containerInfo),
        (r = e.pendingProps),
        t === null ? (e.child = Os(e, null, r, n)) : Nt(t, e, r, n),
        e.child
      );
    case 11:
      return (
        (r = e.type),
        (s = e.pendingProps),
        (s = e.elementType === r ? s : dn(r, s)),
        Jd(t, e, r, s, n)
      );
    case 7:
      return (Nt(t, e, e.pendingProps, n), e.child);
    case 8:
      return (Nt(t, e, e.pendingProps.children, n), e.child);
    case 12:
      return (Nt(t, e, e.pendingProps.children, n), e.child);
    case 10:
      e: {
        if (
          ((r = e.type._context),
          (s = e.pendingProps),
          (i = e.memoizedProps),
          (a = s.value),
          qe(ho, r._currentValue),
          (r._currentValue = a),
          i !== null)
        )
          if (yn(i.value, a)) {
            if (i.children === s.children && !Dt.current) {
              e = Jn(t, e, n);
              break e;
            }
          } else
            for (i = e.child, i !== null && (i.return = e); i !== null; ) {
              var l = i.dependencies;
              if (l !== null) {
                a = i.child;
                for (var c = l.firstContext; c !== null; ) {
                  if (c.context === r) {
                    if (i.tag === 1) {
                      ((c = Wn(-1, n & -n)), (c.tag = 2));
                      var u = i.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var d = u.pending;
                        (d === null
                          ? (c.next = c)
                          : ((c.next = d.next), (d.next = c)),
                          (u.pending = c));
                      }
                    }
                    ((i.lanes |= n),
                      (c = i.alternate),
                      c !== null && (c.lanes |= n),
                      Sc(i.return, n, e),
                      (l.lanes |= n));
                    break;
                  }
                  c = c.next;
                }
              } else if (i.tag === 10) a = i.type === e.type ? null : i.child;
              else if (i.tag === 18) {
                if (((a = i.return), a === null)) throw Error($(341));
                ((a.lanes |= n),
                  (l = a.alternate),
                  l !== null && (l.lanes |= n),
                  Sc(a, n, e),
                  (a = i.sibling));
              } else a = i.child;
              if (a !== null) a.return = i;
              else
                for (a = i; a !== null; ) {
                  if (a === e) {
                    a = null;
                    break;
                  }
                  if (((i = a.sibling), i !== null)) {
                    ((i.return = a.return), (a = i));
                    break;
                  }
                  a = a.return;
                }
              i = a;
            }
        (Nt(t, e, s.children, n), (e = e.child));
      }
      return e;
    case 9:
      return (
        (s = e.type),
        (r = e.pendingProps.children),
        ks(e, n),
        (s = an(s)),
        (r = r(s)),
        (e.flags |= 1),
        Nt(t, e, r, n),
        e.child
      );
    case 14:
      return (
        (r = e.type),
        (s = dn(r, e.pendingProps)),
        (s = dn(r.type, s)),
        Yd(t, e, r, s, n)
      );
    case 15:
      return $m(t, e, e.type, e.pendingProps, n);
    case 17:
      return (
        (r = e.type),
        (s = e.pendingProps),
        (s = e.elementType === r ? s : dn(r, s)),
        Va(t, e),
        (e.tag = 1),
        Ut(r) ? ((t = !0), lo(e)) : (t = !1),
        ks(e, n),
        Im(e, r, s),
        jc(e, r, s, n),
        Cc(null, e, r, !0, t, n)
      );
    case 19:
      return Fm(t, e, n);
    case 22:
      return Dm(t, e, n);
  }
  throw Error($(156, e.tag));
};
function s0(t, e) {
  return Ap(t, e);
}
function Sy(t, e, n, r) {
  ((this.tag = t),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = e),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null));
}
function rn(t, e, n, r) {
  return new Sy(t, e, n, r);
}
function Ku(t) {
  return ((t = t.prototype), !(!t || !t.isReactComponent));
}
function Ey(t) {
  if (typeof t == "function") return Ku(t) ? 1 : 0;
  if (t != null) {
    if (((t = t.$$typeof), t === hu)) return 11;
    if (t === fu) return 14;
  }
  return 2;
}
function gr(t, e) {
  var n = t.alternate;
  return (
    n === null
      ? ((n = rn(t.tag, e, t.key, t.mode)),
        (n.elementType = t.elementType),
        (n.type = t.type),
        (n.stateNode = t.stateNode),
        (n.alternate = t),
        (t.alternate = n))
      : ((n.pendingProps = e),
        (n.type = t.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = t.flags & 14680064),
    (n.childLanes = t.childLanes),
    (n.lanes = t.lanes),
    (n.child = t.child),
    (n.memoizedProps = t.memoizedProps),
    (n.memoizedState = t.memoizedState),
    (n.updateQueue = t.updateQueue),
    (e = t.dependencies),
    (n.dependencies =
      e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }),
    (n.sibling = t.sibling),
    (n.index = t.index),
    (n.ref = t.ref),
    n
  );
}
function Ka(t, e, n, r, s, i) {
  var a = 2;
  if (((r = t), typeof t == "function")) Ku(t) && (a = 1);
  else if (typeof t == "string") a = 5;
  else
    e: switch (t) {
      case ls:
        return Ur(n.children, s, i, e);
      case du:
        ((a = 8), (s |= 8));
        break;
      case Yl:
        return (
          (t = rn(12, n, e, s | 2)),
          (t.elementType = Yl),
          (t.lanes = i),
          t
        );
      case Xl:
        return ((t = rn(13, n, e, s)), (t.elementType = Xl), (t.lanes = i), t);
      case Zl:
        return ((t = rn(19, n, e, s)), (t.elementType = Zl), (t.lanes = i), t);
      case pp:
        return Go(n, s, i, e);
      default:
        if (typeof t == "object" && t !== null)
          switch (t.$$typeof) {
            case hp:
              a = 10;
              break e;
            case fp:
              a = 9;
              break e;
            case hu:
              a = 11;
              break e;
            case fu:
              a = 14;
              break e;
            case er:
              ((a = 16), (r = null));
              break e;
          }
        throw Error($(130, t == null ? t : typeof t, ""));
    }
  return (
    (e = rn(a, n, e, s)),
    (e.elementType = t),
    (e.type = r),
    (e.lanes = i),
    e
  );
}
function Ur(t, e, n, r) {
  return ((t = rn(7, t, r, e)), (t.lanes = n), t);
}
function Go(t, e, n, r) {
  return (
    (t = rn(22, t, r, e)),
    (t.elementType = pp),
    (t.lanes = n),
    (t.stateNode = { isHidden: !1 }),
    t
  );
}
function Ol(t, e, n) {
  return ((t = rn(6, t, null, e)), (t.lanes = n), t);
}
function Il(t, e, n) {
  return (
    (e = rn(4, t.children !== null ? t.children : [], t.key, e)),
    (e.lanes = n),
    (e.stateNode = {
      containerInfo: t.containerInfo,
      pendingChildren: null,
      implementation: t.implementation,
    }),
    e
  );
}
function jy(t, e, n, r, s) {
  ((this.tag = e),
    (this.containerInfo = t),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = pl(0)),
    (this.expirationTimes = pl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = pl(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = s),
    (this.mutableSourceEagerHydrationData = null));
}
function Gu(t, e, n, r, s, i, a, l, c) {
  return (
    (t = new jy(t, e, n, l, c)),
    e === 1 ? ((e = 1), i === !0 && (e |= 8)) : (e = 0),
    (i = rn(3, null, null, e)),
    (t.current = i),
    (i.stateNode = t),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Au(i),
    t
  );
}
function Ty(t, e, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: os,
    key: r == null ? null : "" + r,
    children: t,
    containerInfo: e,
    implementation: n,
  };
}
function i0(t) {
  if (!t) return yr;
  t = t._reactInternals;
  e: {
    if (qr(t) !== t || t.tag !== 1) throw Error($(170));
    var e = t;
    do {
      switch (e.tag) {
        case 3:
          e = e.stateNode.context;
          break e;
        case 1:
          if (Ut(e.type)) {
            e = e.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      e = e.return;
    } while (e !== null);
    throw Error($(171));
  }
  if (t.tag === 1) {
    var n = t.type;
    if (Ut(n)) return im(t, n, e);
  }
  return e;
}
function a0(t, e, n, r, s, i, a, l, c) {
  return (
    (t = Gu(n, r, !0, t, s, i, a, l, c)),
    (t.context = i0(null)),
    (n = t.current),
    (r = Ct()),
    (s = mr(n)),
    (i = Wn(r, s)),
    (i.callback = e ?? null),
    fr(n, i, s),
    (t.current.lanes = s),
    Ji(t, s, r),
    Bt(t, r),
    t
  );
}
function Jo(t, e, n, r) {
  var s = e.current,
    i = Ct(),
    a = mr(s);
  return (
    (n = i0(n)),
    e.context === null ? (e.context = n) : (e.pendingContext = n),
    (e = Wn(i, a)),
    (e.payload = { element: t }),
    (r = r === void 0 ? null : r),
    r !== null && (e.callback = r),
    (t = fr(s, e, a)),
    t !== null && (vn(t, s, a, i), za(t, s, a)),
    a
  );
}
function bo(t) {
  if (((t = t.current), !t.child)) return null;
  switch (t.child.tag) {
    case 5:
      return t.child.stateNode;
    default:
      return t.child.stateNode;
  }
}
function lh(t, e) {
  if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
    var n = t.retryLane;
    t.retryLane = n !== 0 && n < e ? n : e;
  }
}
function Ju(t, e) {
  (lh(t, e), (t = t.alternate) && lh(t, e));
}
function Ny() {
  return null;
}
var o0 =
  typeof reportError == "function"
    ? reportError
    : function (t) {
        console.error(t);
      };
function Yu(t) {
  this._internalRoot = t;
}
Yo.prototype.render = Yu.prototype.render = function (t) {
  var e = this._internalRoot;
  if (e === null) throw Error($(409));
  Jo(t, e, null, null);
};
Yo.prototype.unmount = Yu.prototype.unmount = function () {
  var t = this._internalRoot;
  if (t !== null) {
    this._internalRoot = null;
    var e = t.containerInfo;
    (Vr(function () {
      Jo(null, t, null, null);
    }),
      (e[Kn] = null));
  }
};
function Yo(t) {
  this._internalRoot = t;
}
Yo.prototype.unstable_scheduleHydration = function (t) {
  if (t) {
    var e = Dp();
    t = { blockedOn: null, target: t, priority: e };
    for (var n = 0; n < nr.length && e !== 0 && e < nr[n].priority; n++);
    (nr.splice(n, 0, t), n === 0 && Bp(t));
  }
};
function Xu(t) {
  return !(!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11));
}
function Xo(t) {
  return !(
    !t ||
    (t.nodeType !== 1 &&
      t.nodeType !== 9 &&
      t.nodeType !== 11 &&
      (t.nodeType !== 8 || t.nodeValue !== " react-mount-point-unstable "))
  );
}
function ch() {}
function Cy(t, e, n, r, s) {
  if (s) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var u = bo(a);
        i.call(u);
      };
    }
    var a = a0(e, r, t, 0, null, !1, !1, "", ch);
    return (
      (t._reactRootContainer = a),
      (t[Kn] = a.current),
      Ai(t.nodeType === 8 ? t.parentNode : t),
      Vr(),
      a
    );
  }
  for (; (s = t.lastChild); ) t.removeChild(s);
  if (typeof r == "function") {
    var l = r;
    r = function () {
      var u = bo(c);
      l.call(u);
    };
  }
  var c = Gu(t, 0, !1, null, null, !1, !1, "", ch);
  return (
    (t._reactRootContainer = c),
    (t[Kn] = c.current),
    Ai(t.nodeType === 8 ? t.parentNode : t),
    Vr(function () {
      Jo(e, c, n, r);
    }),
    c
  );
}
function Zo(t, e, n, r, s) {
  var i = n._reactRootContainer;
  if (i) {
    var a = i;
    if (typeof s == "function") {
      var l = s;
      s = function () {
        var c = bo(a);
        l.call(c);
      };
    }
    Jo(e, a, t, s);
  } else a = Cy(n, e, t, s, r);
  return bo(a);
}
Mp = function (t) {
  switch (t.tag) {
    case 3:
      var e = t.stateNode;
      if (e.current.memoizedState.isDehydrated) {
        var n = ai(e.pendingLanes);
        n !== 0 &&
          (gu(e, n | 1), Bt(e, at()), !(Ie & 6) && ((Ms = at() + 500), br()));
      }
      break;
    case 13:
      (Vr(function () {
        var r = Gn(t, 1);
        if (r !== null) {
          var s = Ct();
          vn(r, t, 1, s);
        }
      }),
        Ju(t, 1));
  }
};
vu = function (t) {
  if (t.tag === 13) {
    var e = Gn(t, 134217728);
    if (e !== null) {
      var n = Ct();
      vn(e, t, 134217728, n);
    }
    Ju(t, 134217728);
  }
};
$p = function (t) {
  if (t.tag === 13) {
    var e = mr(t),
      n = Gn(t, e);
    if (n !== null) {
      var r = Ct();
      vn(n, t, e, r);
    }
    Ju(t, e);
  }
};
Dp = function () {
  return Be;
};
Up = function (t, e) {
  var n = Be;
  try {
    return ((Be = t), e());
  } finally {
    Be = n;
  }
};
lc = function (t, e, n) {
  switch (e) {
    case "input":
      if ((tc(t, n), (e = n.name), n.type === "radio" && e != null)) {
        for (n = t; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + e) + '][type="radio"]',
          ),
            e = 0;
          e < n.length;
          e++
        ) {
          var r = n[e];
          if (r !== t && r.form === t.form) {
            var s = Fo(r);
            if (!s) throw Error($(90));
            (gp(r), tc(r, s));
          }
        }
      }
      break;
    case "textarea":
      yp(t, n);
      break;
    case "select":
      ((e = n.value), e != null && ws(t, !!n.multiple, e, !1));
  }
};
Ep = Vu;
jp = Vr;
var Ry = { usingClientEntryPoint: !1, Events: [Xi, hs, Fo, kp, Sp, Vu] },
  Zs = {
    findFiberByHostInstance: Ar,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  Ay = {
    bundleType: Zs.bundleType,
    version: Zs.version,
    rendererPackageName: Zs.rendererPackageName,
    rendererConfig: Zs.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Yn.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (t) {
      return ((t = Cp(t)), t === null ? null : t.stateNode);
    },
    findFiberByHostInstance: Zs.findFiberByHostInstance || Ny,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var wa = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!wa.isDisabled && wa.supportsFiber)
    try {
      ((Do = wa.inject(Ay)), (An = wa));
    } catch {}
}
Yt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ry;
Yt.createPortal = function (t, e) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Xu(e)) throw Error($(200));
  return Ty(t, e, null, n);
};
Yt.createRoot = function (t, e) {
  if (!Xu(t)) throw Error($(299));
  var n = !1,
    r = "",
    s = o0;
  return (
    e != null &&
      (e.unstable_strictMode === !0 && (n = !0),
      e.identifierPrefix !== void 0 && (r = e.identifierPrefix),
      e.onRecoverableError !== void 0 && (s = e.onRecoverableError)),
    (e = Gu(t, 1, !1, null, null, n, !1, r, s)),
    (t[Kn] = e.current),
    Ai(t.nodeType === 8 ? t.parentNode : t),
    new Yu(e)
  );
};
Yt.findDOMNode = function (t) {
  if (t == null) return null;
  if (t.nodeType === 1) return t;
  var e = t._reactInternals;
  if (e === void 0)
    throw typeof t.render == "function"
      ? Error($(188))
      : ((t = Object.keys(t).join(",")), Error($(268, t)));
  return ((t = Cp(e)), (t = t === null ? null : t.stateNode), t);
};
Yt.flushSync = function (t) {
  return Vr(t);
};
Yt.hydrate = function (t, e, n) {
  if (!Xo(e)) throw Error($(200));
  return Zo(null, t, e, !0, n);
};
Yt.hydrateRoot = function (t, e, n) {
  if (!Xu(t)) throw Error($(405));
  var r = (n != null && n.hydratedSources) || null,
    s = !1,
    i = "",
    a = o0;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (s = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (a = n.onRecoverableError)),
    (e = a0(e, null, t, 1, n ?? null, s, !1, i, a)),
    (t[Kn] = e.current),
    Ai(t),
    r)
  )
    for (t = 0; t < r.length; t++)
      ((n = r[t]),
        (s = n._getVersion),
        (s = s(n._source)),
        e.mutableSourceEagerHydrationData == null
          ? (e.mutableSourceEagerHydrationData = [n, s])
          : e.mutableSourceEagerHydrationData.push(n, s));
  return new Yo(e);
};
Yt.render = function (t, e, n) {
  if (!Xo(e)) throw Error($(200));
  return Zo(null, t, e, !1, n);
};
Yt.unmountComponentAtNode = function (t) {
  if (!Xo(t)) throw Error($(40));
  return t._reactRootContainer
    ? (Vr(function () {
        Zo(null, null, t, !1, function () {
          ((t._reactRootContainer = null), (t[Kn] = null));
        });
      }),
      !0)
    : !1;
};
Yt.unstable_batchedUpdates = Vu;
Yt.unstable_renderSubtreeIntoContainer = function (t, e, n, r) {
  if (!Xo(n)) throw Error($(200));
  if (t == null || t._reactInternals === void 0) throw Error($(38));
  return Zo(t, e, n, !1, r);
};
Yt.version = "18.3.1-next-f1338f8080-20240426";
function l0() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l0);
    } catch (t) {
      console.error(t);
    }
}
(l0(), (lp.exports = Yt));
var ko = lp.exports,
  c0,
  uh = ko;
((c0 = uh.createRoot), uh.hydrateRoot);
const Py = ["bottom", "top", "left", "right"],
  dh = 12,
  Oy = 0.4,
  Ll = 0.38,
  Iy = 450,
  Wt = 9,
  lr = 9,
  li = 10,
  xa = 8,
  Zn = 8,
  Ly = "cubic-bezier(0.2, 1.25, 0.4, 1)",
  hh = {
    dark: {
      "--dock-panel": "rgba(38, 35, 46, 0.66)",
      "--dock-panel-edge": "rgba(255, 255, 255, 0.08)",
      "--dock-panel-highlight": "rgba(255, 255, 255, 0.07)",
      "--dock-panel-shadow":
        "0 22px 44px -20px rgba(0, 0, 0, 0.8), 0 6px 16px -8px rgba(0, 0, 0, 0.5)",
      "--dock-tile": "linear-gradient(180deg, #3a3644 0%, #27242f 100%)",
      "--dock-tile-edge": "rgba(255, 255, 255, 0.07)",
      "--dock-tile-highlight": "rgba(255, 255, 255, 0.12)",
      "--dock-tile-shadow": "0 4px 10px -4px rgba(0, 0, 0, 0.7)",
      "--dock-ink": "#f4f4f5",
      "--dock-label": "#2a2731",
      "--dock-label-ink": "#f4f4f5",
      "--dock-dot": "rgba(255, 255, 255, 0.72)",
      "--dock-separator": "rgba(255, 255, 255, 0.12)",
      "--dock-press": "brightness(0.75)",
      "--dock-menu": "rgba(40, 37, 47, 0.8)",
      "--dock-menu-edge": "rgba(255, 255, 255, 0.13)",
      "--dock-menu-ink": "#f4f4f5",
      "--dock-menu-muted": "rgba(244, 244, 245, 0.42)",
      "--dock-menu-separator": "rgba(255, 255, 255, 0.1)",
      "--dock-menu-shadow":
        "0 18px 40px -12px rgba(0, 0, 0, 0.65), 0 3px 10px rgba(0, 0, 0, 0.3)",
    },
    light: {
      "--dock-panel": "rgba(240, 240, 243, 0.8)",
      "--dock-panel-edge": "rgba(24, 24, 27, 0.07)",
      "--dock-panel-highlight": "rgba(255, 255, 255, 0.95)",
      "--dock-panel-shadow":
        "0 22px 44px -22px rgba(24, 24, 27, 0.3), 0 6px 16px -10px rgba(24, 24, 27, 0.16)",
      "--dock-tile": "linear-gradient(180deg, #ffffff 0%, #f6f6f8 100%)",
      "--dock-tile-edge": "rgba(24, 24, 27, 0.08)",
      "--dock-tile-highlight": "rgba(255, 255, 255, 1)",
      "--dock-tile-shadow": "0 4px 10px -5px rgba(24, 24, 27, 0.25)",
      "--dock-ink": "#27272a",
      "--dock-label": "#ffffff",
      "--dock-label-ink": "#18181b",
      "--dock-dot": "rgba(24, 24, 27, 0.55)",
      "--dock-separator": "rgba(24, 24, 27, 0.12)",
      "--dock-press": "brightness(0.9)",
      "--dock-menu": "rgba(248, 248, 250, 0.86)",
      "--dock-menu-edge": "rgba(24, 24, 27, 0.1)",
      "--dock-menu-ink": "#18181b",
      "--dock-menu-muted": "rgba(24, 24, 27, 0.4)",
      "--dock-menu-separator": "rgba(24, 24, 27, 0.1)",
      "--dock-menu-shadow":
        "0 18px 40px -14px rgba(24, 24, 27, 0.3), 0 3px 10px rgba(24, 24, 27, 0.1)",
    },
  },
  So = typeof window > "u" ? b.useEffect : b.useLayoutEffect,
  My = (t) => t != null && t !== !1,
  Qs = (t) => !!t && !t.separator && !t.disabled,
  rs = (t, e, n) => Math.min(Math.max(t, e), Math.max(e, n)),
  $y = (t, e, n, r) => {
    const s = li,
      i = (l, c) => `${(l + Wt).toFixed(2)} ${(c + Wt).toFixed(2)}`,
      a = (l, c, u, d, f, h) => {
        const p = (v, x) => i(l + u * v + f * x, c + d * v + h * x);
        return `L ${p(-lr, 0)} L ${p(-lr * 0.18, Wt * 0.82)} Q ${p(0, Wt)} ${p(lr * 0.18, Wt * 0.82)} L ${p(lr, 0)}`;
      };
    return [
      `M ${i(s, 0)}`,
      n === "top" ? a(r, 0, 1, 0, 0, -1) : "",
      `L ${i(t - s, 0)} A ${s} ${s} 0 0 1 ${i(t, s)}`,
      n === "right" ? a(t, r, 0, 1, 1, 0) : "",
      `L ${i(t, e - s)} A ${s} ${s} 0 0 1 ${i(t - s, e)}`,
      n === "bottom" ? a(r, e, -1, 0, 0, 1) : "",
      `L ${i(s, e)} A ${s} ${s} 0 0 1 ${i(0, e - s)}`,
      n === "left" ? a(0, r, 0, -1, -1, 0) : "",
      `L ${i(0, s)} A ${s} ${s} 0 0 1 ${i(s, 0)} Z`,
    ].join(" ");
  },
  Dy = () =>
    o.jsx("svg", {
      viewBox: "0 0 16 16",
      width: "12",
      height: "12",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      children: o.jsx("path", {
        d: "M3.5 8.5l3 3 6-7",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
    }),
  Uy = () =>
    o.jsx("svg", {
      viewBox: "0 0 16 16",
      width: "10",
      height: "10",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      children: o.jsx("path", {
        d: "M6 3.5L10.5 8 6 12.5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
    });
function u0({
  rows: t,
  label: e,
  side: n = null,
  point: r,
  edge: s,
  tokens: i,
  nested: a = !1,
  focusFirst: l = !1,
  closing: c = !1,
  pressingRef: u,
  onSelect: d,
  onDismiss: f,
  onBack: h,
  onEnter: p,
  onExited: v,
}) {
  const x = b.useRef(null),
    _ = b.useRef(null),
    m = b.useRef(null),
    g = b.useRef(null),
    y = b.useRef(null),
    E = b.useRef(null),
    R = b.useRef([]),
    A = b.useRef(null),
    P = b.useRef(0),
    U = b.useRef(!0),
    te = b.useRef(!1),
    z = b.useRef({}),
    [Se, Ee] = b.useState(-1),
    [ne, be] = b.useState(null),
    [fe, Le] = b.useState(!1),
    [Me, O] = b.useState(!1),
    Q = t.some((M) => M && !M.separator && M.checked !== void 0);
  ((z.current = { onSelect: d, onDismiss: f, onBack: h, onExited: v }),
    So(() => {
      var je, De;
      const M = x.current,
        H = _.current,
        k = m.current,
        D = y.current;
      if (!M || !H || !k || !D) return;
      U.current = !0;
      const ke = [M.firstElementChild, k, g.current, H].filter(Boolean),
        { x: oe, y: ue } = r ?? { x: 0, y: 0 },
        we = s ?? { left: 0, right: 0, top: 0 },
        ve =
          ((je = window.matchMedia) == null
            ? void 0
            : je.call(window, "(prefers-reduced-motion: reduce)").matches) ??
          !1;
      te.current = ve;
      const _e = H.offsetWidth,
        ye = H.offsetHeight,
        pe = document.documentElement.clientWidth,
        N = document.documentElement.clientHeight;
      let V,
        S,
        T = 0,
        w;
      if (n === "bottom" || n === "top")
        ((V = rs(oe - _e / 2, Zn, pe - Zn - _e)),
          (S = n === "bottom" ? ue - Wt - ye : ue + Wt),
          (T = rs(oe - V, li + lr, _e - li - lr)),
          (w = `${T}px ${n === "bottom" ? ye + Wt : -Wt}px`));
      else if (n === "left" || n === "right")
        ((S = rs(ue - ye / 2, Zn, N - Zn - ye)),
          (V = n === "right" ? oe - Wt - _e : oe + Wt),
          (T = rs(ue - S, li + lr, ye - li - lr)),
          (w = `${n === "right" ? _e + Wt : -Wt}px ${T}px`));
      else {
        const Ue = we.right - 4 + _e > pe - Zn && we.left + 4 - _e >= Zn;
        ((V = Ue ? we.left + 4 - _e : we.right - 4),
          (S = rs(we.top - 5, Zn, N - Zn - ye)),
          (w = Ue ? "right top" : "left top"));
      }
      const L = $y(_e, ye, n, T);
      ((A.current = { left: V, top: S, width: _e, height: ye }),
        (M.style.left = `${V}px`),
        (M.style.top = `${S}px`),
        (M.style.transformOrigin = w),
        (M.style.visibility = "visible"),
        (k.style.clipPath = `path('${L}')`),
        D.setAttribute("d", L),
        ve
          ? ke.forEach((Ue) =>
              Ue.animate([{ opacity: 0 }, { opacity: 1 }], {
                duration: 120,
                easing: "ease-out",
              }),
            )
          : (M.animate(
              [
                { transform: `scale(${a ? 0.94 : 0.82})` },
                { transform: "scale(1)" },
              ],
              { duration: a ? 220 : 340, easing: Ly },
            ),
            ke.forEach((Ue) =>
              Ue.animate([{ opacity: 0 }, { opacity: 1 }], {
                duration: a ? 120 : 160,
                easing: "ease-out",
              }),
            )));
      const me = t.findIndex(Qs);
      return (
        l && me >= 0
          ? (Ee(me),
            (De = R.current[me]) == null || De.focus({ preventScroll: !0 }))
          : H.focus({ preventScroll: !0 }),
        () => {
          ((U.current = !1), window.clearTimeout(P.current));
        }
      );
    }, []),
    b.useEffect(() => {
      if (!c) return;
      const M = x.current,
        H = [
          M == null ? void 0 : M.firstElementChild,
          m.current,
          g.current,
          _.current,
        ].filter(Boolean),
        k = te.current ? 100 : 150;
      let D = !1;
      const ke = () => {
        var ue, we;
        D ||
          !U.current ||
          ((D = !0), (we = (ue = z.current).onExited) == null || we.call(ue));
      };
      (M &&
        !te.current &&
        M.animate([{ transform: "scale(1)" }, { transform: "scale(0.96)" }], {
          duration: k,
          easing: "ease-in",
          fill: "forwards",
        }),
        H.forEach((ue) =>
          ue.animate([{ opacity: 1 }, { opacity: 0 }], {
            duration: k,
            easing: "ease-in",
            fill: "forwards",
          }),
        ));
      const oe = window.setTimeout(ke, k);
      return () => window.clearTimeout(oe);
    }, [c]),
    So(() => {
      const M = E.current;
      if (!M) return;
      const H = R.current[Se];
      if (!H || fe) {
        (fe && (M.style.transition = "none"), (M.style.opacity = "0"));
        return;
      }
      const k = M.style.opacity !== "1" || te.current;
      (k && (M.style.transition = "none"),
        (M.style.transform = `translateY(${H.offsetTop}px)`),
        (M.style.height = `${H.offsetHeight}px`),
        (M.style.opacity = "1"),
        k && (M.offsetHeight, (M.style.transition = "")));
    }, [Se, fe]));
  const Z = (M) => {
      var H;
      (Ee(M), (H = R.current[M]) == null || H.focus({ preventScroll: !0 }));
    },
    Ne = (M, H) => {
      window.clearTimeout(P.current);
      const k = A.current,
        D = R.current[M];
      !k ||
        !D ||
        be({
          index: M,
          keyboard: H,
          edge: {
            left: k.left,
            right: k.left + k.width,
            top: k.top + D.offsetTop,
          },
        });
    },
    xe = () => {
      (window.clearTimeout(P.current), be(null));
    },
    K = (M, H) => {
      var D, ke;
      if (Me) return;
      const k = t[M];
      if ((O(!0), Ee(M), window.clearTimeout(P.current), te.current)) {
        (ke = (D = z.current).onSelect) == null || ke.call(D, k, H);
        return;
      }
      (Le(!0),
        window.setTimeout(() => U.current && Le(!1), 70),
        window.setTimeout(() => {
          var oe, ue;
          return (
            U.current &&
            ((ue = (oe = z.current).onSelect) == null
              ? void 0
              : ue.call(oe, k, H))
          );
        }, 150));
    },
    J = (M) => {
      var H;
      Me ||
        Se === M ||
        !Qs(t[M]) ||
        (Z(M),
        window.clearTimeout(P.current),
        (H = t[M].items) != null && H.length
          ? (ne == null ? void 0 : ne.index) !== M &&
            (P.current = window.setTimeout(() => Ne(M, !1), 120))
          : ne && (P.current = window.setTimeout(xe, 220)));
    },
    de = (M) => {
      var ke, oe, ue, we, ve, _e;
      if (Me) return;
      const { key: H } = M,
        k = t.flatMap((ye, pe) => (Qs(ye) ? [pe] : []));
      let D = !0;
      if (H === "ArrowDown" || H === "ArrowUp" || H === "Home" || H === "End") {
        if (k.length) {
          const ye = k.indexOf(Se);
          let pe = k[0];
          (H === "End"
            ? (pe = k[k.length - 1])
            : H === "ArrowDown"
              ? (pe = k[(ye + 1) % k.length])
              : H === "ArrowUp" && (pe = k[ye <= 0 ? k.length - 1 : ye - 1]),
            ne && xe(),
            Z(pe));
        }
      } else
        H === "ArrowRight" &&
        (oe = (ke = t[Se]) == null ? void 0 : ke.items) != null &&
        oe.length
          ? Ne(Se, !0)
          : (H === "ArrowLeft" || H === "Escape") && a
            ? (we = (ue = z.current).onBack) == null || we.call(ue)
            : H === "Escape" || H === "Tab"
              ? (_e = (ve = z.current).onDismiss) == null || _e.call(ve, !0)
              : (D = !1);
      D && (M.preventDefault(), M.stopPropagation());
    },
    j = ne ? t[ne.index] : null;
  return o.jsxs(o.Fragment, {
    children: [
      ko.createPortal(
        o.jsxs("div", {
          ref: x,
          className: "dock-menu",
          style: i,
          "data-dock-menu": "",
          children: [
            o.jsx("span", { className: "dock-menu-shadow" }),
            o.jsx("span", { ref: m, className: "dock-menu-glass" }),
            o.jsx("svg", {
              ref: g,
              className: "dock-menu-shape",
              "aria-hidden": "true",
              children: o.jsx("path", { ref: y }),
            }),
            o.jsxs("div", {
              ref: _,
              className: "dock-menu-list",
              role: "menu",
              "aria-label": e,
              tabIndex: -1,
              onKeyDown: de,
              onPointerEnter: () => (p == null ? void 0 : p()),
              onPointerLeave: () => {
                var M;
                ne ||
                  Me ||
                  (Ee(-1),
                  (M = _.current) == null || M.focus({ preventScroll: !0 }));
              },
              children: [
                o.jsx("span", { ref: E, className: "dock-menu-highlight" }),
                t.map((M, H) => {
                  var ke;
                  if (!M) return null;
                  if (M.separator)
                    return o.jsx(
                      "span",
                      { className: "dock-menu-separator", role: "separator" },
                      H,
                    );
                  const k = H === Se && !fe,
                    D = !!((ke = M.items) != null && ke.length);
                  return o.jsxs(
                    "button",
                    {
                      ref: (oe) => {
                        R.current[H] = oe;
                      },
                      type: "button",
                      className: "dock-menu-row",
                      role:
                        M.checked !== void 0 ? "menuitemcheckbox" : "menuitem",
                      "aria-checked":
                        M.checked !== void 0 ? !!M.checked : void 0,
                      "aria-disabled": M.disabled ? !0 : void 0,
                      "aria-haspopup": D ? "menu" : void 0,
                      "aria-expanded": D
                        ? (ne == null ? void 0 : ne.index) === H
                        : void 0,
                      tabIndex: -1,
                      "data-dock-row": H,
                      "data-active": k ? "" : void 0,
                      onPointerMove: () => J(H),
                      onPointerUp: () => {
                        !(u != null && u.current) ||
                          !Qs(M) ||
                          D ||
                          ((u.current = !1), K(H, !1));
                      },
                      onClick: (oe) => {
                        Me ||
                          !Qs(M) ||
                          (D ? Ne(H, oe.detail === 0) : K(H, oe.detail === 0));
                      },
                      children: [
                        Q
                          ? o.jsx("span", {
                              className: "dock-menu-check",
                              children: M.checked ? o.jsx(Dy, {}) : null,
                            })
                          : null,
                        M.icon
                          ? o.jsx("span", {
                              className: "dock-menu-icon",
                              children: M.icon,
                            })
                          : null,
                        o.jsx("span", {
                          className: "dock-menu-text",
                          children: M.label,
                        }),
                        M.shortcut
                          ? o.jsx("span", {
                              className: "dock-menu-shortcut",
                              children: M.shortcut,
                            })
                          : null,
                        D
                          ? o.jsx("span", {
                              className: "dock-menu-chevron",
                              children: o.jsx(Uy, {}),
                            })
                          : null,
                      ],
                    },
                    H,
                  );
                }),
              ],
            }),
          ],
        }),
        document.body,
      ),
      ne
        ? o.jsx(
            u0,
            {
              rows: (j == null ? void 0 : j.items) ?? [],
              label:
                typeof (j == null ? void 0 : j.label) == "string"
                  ? j.label
                  : void 0,
              edge: ne.edge,
              tokens: i,
              nested: !0,
              focusFirst: ne.keyboard,
              closing: c,
              pressingRef: u,
              onSelect: (M, H) => {
                var k, D;
                return (D = (k = z.current).onSelect) == null
                  ? void 0
                  : D.call(k, M, H);
              },
              onDismiss: (M) => {
                var H, k;
                return (k = (H = z.current).onDismiss) == null
                  ? void 0
                  : k.call(H, M);
              },
              onBack: () => {
                const M = ne.index;
                (xe(), Z(M));
              },
              onEnter: () => {
                (window.clearTimeout(P.current), Ee(ne.index));
              },
            },
            ne.index,
          )
        : null,
    ],
  });
}
function By({
  items: t = [],
  position: e = "bottom",
  theme: n = "dark",
  baseItemSize: r = 50,
  magnification: s = 70,
  distance: i = 200,
  panelHeight: a = 68,
  gap: l = 10,
  roundness: c = 0.5,
  spring: u = { mass: 0.1, stiffness: 150, damping: 12 },
  bounce: d = !0,
  autoHide: f = !1,
  tiles: h = !0,
  showLabels: p = !0,
  showIndicators: v = !0,
  showBadges: x = !0,
  badgeColor: _ = "#ff453a",
  accentColor: m = "#0a84ff",
  className: g = "",
  style: y,
}) {
  var ye, pe;
  const E = b.useRef(null),
    R = b.useRef([]),
    A = b.useRef(null),
    P = b.useRef(null),
    U = b.useRef(null),
    te = b.useRef(0),
    z = b.useRef(null),
    Se = b.useRef(!1),
    Ee = b.useRef(-1),
    [ne, be] = b.useState(1),
    [fe, Le] = b.useState(null),
    Me = Py.includes(e) ? e : "bottom",
    O = Me === "left" || Me === "right",
    Q = Math.max(16, r),
    Z = Math.max(Q, s),
    Ne = Math.max(Q, a),
    xe = Math.max(0, l),
    K =
      t.reduce((N, V) => N + (V != null && V.separator ? 1 : Q), 0) +
      xe * Math.max(0, t.length - 1) +
      Ne -
      Q,
    J = Q * ne,
    de = Z * ne,
    j = Ne * ne,
    M = { ...(hh[n] ?? hh.dark), "--dock-accent": m, "--dock-badge": _ },
    H = {
      items: t,
      side: Me,
      vertical: O,
      length: K + Z - Q,
      base: J,
      peak: de,
      thickness: j,
      gap: xe * ne,
      distance: Math.max(1, i) * ne,
      mass: Math.max(0.01, (u == null ? void 0 : u.mass) ?? 0.1),
      stiffness: Math.max(1, (u == null ? void 0 : u.stiffness) ?? 150),
      damping: Math.max(0, (u == null ? void 0 : u.damping) ?? 12),
      bounce: d,
      autoHide: f,
    },
    k = b.useRef(H);
  ((k.current = H),
    (U.current = fe),
    b.useEffect(() => {
      var N;
      (N = A.current) == null || N.call(A);
    }),
    So(() => {
      var N;
      f && ((N = E.current) == null || N.setAttribute("data-hidden", ""));
    }, []),
    So(() => {
      const N = E.current;
      if (!N) return;
      const V = N.offsetParent ?? document.documentElement,
        S = () => {
          const w = k.current,
            L = (w.vertical ? V.clientHeight : V.clientWidth) - dh * 2,
            me = w.length > 0 ? Math.min(1, Math.max(0.4, L / w.length)) : 1;
          be(Math.round(me * 1e3) / 1e3);
        };
      S();
      const T = new ResizeObserver(S);
      return (T.observe(V), () => T.disconnect());
    }, [K, O, Z, Q]),
    b.useEffect(() => {
      var Fe;
      const N = E.current;
      if (!N) return;
      const V =
          ((Fe = window.matchMedia) == null
            ? void 0
            : Fe.call(window, "(prefers-reduced-motion: reduce)").matches) ??
          !1,
        S = new Map(),
        T = { x: 0, y: 0, inside: !1 };
      let w = -1,
        L = null,
        me = null,
        je = [],
        De = k.current.base,
        Ue = N.hasAttribute("data-hidden"),
        jt = k.current.autoHide,
        it = 0,
        Zt = 0,
        zt = 0,
        wn = !0;
      const xn = (ae) => {
          let B = S.get(ae);
          return (
            B ||
              ((B = {
                size: k.current.base,
                velocity: 0,
                lift: 0,
                rise: 0,
                launch: 0,
                gravity: 0,
                hopping: !1,
                drawn: "",
                node: null,
              }),
              S.set(ae, B)),
            B
          );
        },
        _n = (ae) => {
          if (((Zt = 0), !wn)) return;
          const B = k.current,
            Ce = Math.min(1 / 30, Math.max(0.001, (ae - zt) / 1e3));
          if (((zt = ae), B.base !== De)) {
            const ie = B.base / De;
            (S.forEach((Ae) => {
              ((Ae.size *= ie), (Ae.velocity *= ie));
            }),
              (De = B.base));
          }
          const Re = N.getBoundingClientRect(),
            ze = B.vertical ? Re.top + Re.height / 2 : Re.left + Re.width / 2,
            Ve = B.items.map((ie) => (ie != null && ie.separator ? 1 : B.base));
          let gt =
            -(
              Ve.reduce((ie, Ae) => ie + Ae, 0) +
              B.gap * Math.max(0, Ve.length - 1)
            ) / 2;
          const Pt = Ve.map((ie) => {
            const Ae = gt + ie / 2;
            return ((gt += ie + B.gap), Ae);
          });
          let Ot = null;
          (L !== null
            ? (Ot = L)
            : T.inside
              ? (Ot = (B.vertical ? T.y : T.x) - ze)
              : Pt[w] !== void 0 && (Ot = Pt[w]),
            (me = Ot),
            (je = Pt));
          const Vs = Math.max(1, Math.ceil(Ce * 240)),
            bn = Ce / Vs,
            F = B.stiffness / B.mass,
            ee = B.damping / B.mass;
          let Y = !1;
          (B.items.forEach((ie, Ae) => {
            const Pe = R.current[Ae];
            if (!Pe || (ie != null && ie.separator)) return;
            const ce = xn(Ae),
              Oe = Ot === null ? 1 : Math.abs(Ot - Pt[Ae]) / B.distance,
              Ye =
                B.base +
                (B.peak - B.base) *
                  (Oe < 1 ? Math.cos((Oe * Math.PI) / 2) ** 2 : 0);
            if (V) ((ce.size = Ye), (ce.velocity = 0));
            else
              for (let Ft = 0; Ft < Vs; Ft++)
                ((ce.velocity =
                  (ce.velocity + bn * F * (Ye - ce.size)) /
                  (1 + bn * ee + bn * bn * F)),
                  (ce.size += ce.velocity * bn),
                  ce.hopping &&
                    ((ce.rise -= ce.gravity * bn),
                    (ce.lift += ce.rise * bn),
                    !(ce.lift > 0) &&
                      ((ce.lift = 0),
                      (ce.rise *= -0.36),
                      ce.rise < ce.launch * 0.2 &&
                        ((ce.rise = 0),
                        (ce.hopping = !1),
                        Pe.removeAttribute("data-hop")))));
            (Math.abs(ce.velocity) < 0.01 && Math.abs(Ye - ce.size) < 0.01
              ? ((ce.size = Ye), (ce.velocity = 0))
              : (Y = !0),
              ce.hopping && (Y = !0));
            const $e = Math.max(1, ce.size),
              Xe = `${$e.toFixed(2)} ${ce.lift.toFixed(2)} ${B.side}`;
            if (Xe === ce.drawn && Pe === ce.node) return;
            ((ce.drawn = Xe), (ce.node = Pe));
            const He =
                B.side === "bottom" || B.side === "right" ? -ce.lift : ce.lift,
              Tt = Pe.firstElementChild;
            ((Pe.style.width = `${$e}px`),
              (Pe.style.height = `${$e}px`),
              Tt &&
                (Tt.style.transform = `translate(${B.vertical ? `${He}px, 0` : `0, ${He}px`}) scale(${$e / B.base})`));
          }),
            Y && (Zt = requestAnimationFrame(_n)));
        },
        mt = () => {
          Zt ||
            !wn ||
            ((zt = performance.now()), (Zt = requestAnimationFrame(_n)));
        },
        C = () => {
          (window.clearTimeout(it),
            (it = 0),
            Ue && ((Ue = !1), N.removeAttribute("data-hidden")));
        },
        I = () => {
          (window.clearTimeout(it), (it = 0));
          const ae =
            T.inside || L !== null || N.contains(document.activeElement);
          Ue ||
            !k.current.autoHide ||
            ae ||
            ((Ue = !0), N.setAttribute("data-hidden", ""));
        },
        q = () => {
          Ue || it || !k.current.autoHide || (it = window.setTimeout(I, 600));
        };
      ((A.current = () => {
        const ae = k.current.autoHide;
        (ae !== jt && ((jt = ae), ae ? I() : C()), mt());
      }),
        (P.current = {
          hop: (ae) => {
            const B = R.current[ae];
            if (V || !k.current.bounce || !B) return;
            const Ce = xn(ae);
            if (Ce.hopping) return;
            const Re = Ce.size * Oy;
            ((Ce.gravity = (8 * Re) / (Ll * Ll)),
              (Ce.launch = (Ce.gravity * Ll) / 2),
              (Ce.rise = Ce.launch),
              (Ce.hopping = !0),
              B.setAttribute("data-hop", ""),
              mt());
          },
          focus: (ae) => {
            ((w = ae), mt());
          },
          hold: (ae) => {
            if (ae === null) {
              ((L = null), mt(), q());
              return;
            }
            ((L = me ?? je[ae] ?? 0), C(), mt());
          },
        }));
      const re = (ae) => {
          ((T.x = ae.clientX), (T.y = ae.clientY), (T.inside = !0), C(), mt());
        },
        he = () => {
          ((T.inside = !1), mt(), q());
        },
        ge = (ae) => {
          N.contains(ae.relatedTarget) || q();
        },
        se = (ae) => {
          const B = k.current;
          if (!B.autoHide || T.inside) return;
          const Ce = N.offsetParent,
            Re = Ce
              ? Ce.getBoundingClientRect()
              : {
                  left: 0,
                  top: 0,
                  right: window.innerWidth,
                  bottom: window.innerHeight,
                },
            ze = dh + B.thickness * 0.6,
            Ve = ae.clientX,
            gt = ae.clientY,
            Pt =
              Ve >= Re.left &&
              Ve <= Re.right &&
              gt >= Re.top &&
              gt <= Re.bottom,
            Ot = {
              bottom: gt >= Re.bottom - ze,
              top: gt <= Re.top + ze,
              left: Ve <= Re.left + ze,
              right: Ve >= Re.right - ze,
            }[B.side];
          Pt && Ot ? C() : q();
        };
      return (
        N.addEventListener("pointermove", re),
        N.addEventListener("pointerdown", re),
        N.addEventListener("pointerleave", he),
        N.addEventListener("pointercancel", he),
        N.addEventListener("focusin", C),
        N.addEventListener("focusout", ge),
        window.addEventListener("pointermove", se),
        window.addEventListener("pointerdown", se),
        mt(),
        () => {
          ((wn = !1),
            cancelAnimationFrame(Zt),
            window.clearTimeout(it),
            N.removeEventListener("pointermove", re),
            N.removeEventListener("pointerdown", re),
            N.removeEventListener("pointerleave", he),
            N.removeEventListener("pointercancel", he),
            N.removeEventListener("focusin", C),
            N.removeEventListener("focusout", ge),
            window.removeEventListener("pointermove", se),
            window.removeEventListener("pointerdown", se),
            (A.current = null),
            (P.current = null));
          const ae = z.current;
          ae && (window.clearTimeout(ae.timer), ae.cleanup());
        }
      );
    }, []));
  const D = b.useCallback((N) => {
      var w;
      const V = U.current;
      if (!V || V.closing) return;
      const S =
          ((w = k.current.items[V.index]) == null ? void 0 : w.menu) ?? [],
        T = { ...V, closing: !0, restore: N, rows: S };
      ((U.current = T), Le(T));
    }, []),
    ke = b.useCallback(() => {
      var V, S;
      const N = U.current;
      ((U.current = null),
        Le(null),
        (V = P.current) == null || V.hold(null),
        N != null &&
          N.restore &&
          ((S = R.current[N.index]) == null || S.focus({ preventScroll: !0 })));
    }, []);
  b.useEffect(() => {
    if (!fe || fe.closing) return;
    const N = R.current[fe.index],
      V = (w) => {
        const L = w.target;
        (L instanceof Element &&
          (L.closest("[data-dock-menu]") || (N != null && N.contains(L)))) ||
          D(!1);
      },
      S = (w) => {
        (w.target instanceof Element && w.target.closest("[data-dock-menu]")) ||
          D(!1);
      },
      T = () => D(!1);
    return (
      document.addEventListener("pointerdown", V, !0),
      window.addEventListener("scroll", S, !0),
      window.addEventListener("resize", T),
      window.addEventListener("blur", T),
      () => {
        (document.removeEventListener("pointerdown", V, !0),
          window.removeEventListener("scroll", S, !0),
          window.removeEventListener("resize", T),
          window.removeEventListener("blur", T));
      }
    );
  }, [fe, D]);
  const oe = (N, V) => {
      var je, De, Ue;
      const S = R.current[N];
      if (
        !S ||
        !((De = (je = t[N]) == null ? void 0 : je.menu) != null && De.length)
      )
        return !1;
      const T = U.current;
      if (T && T.index === N && !T.closing) return !0;
      (Ue = P.current) == null || Ue.hold(N);
      const w = S.getBoundingClientRect(),
        L = {
          bottom: { x: w.left + w.width / 2, y: w.top - xa },
          top: { x: w.left + w.width / 2, y: w.bottom + xa },
          left: { x: w.right + xa, y: w.top + w.height / 2 },
          right: { x: w.left - xa, y: w.top + w.height / 2 },
        }[Me];
      te.current += 1;
      const me = {
        id: te.current,
        index: N,
        point: L,
        keyboard: V === "keyboard",
        closing: !1,
        restore: !1,
      };
      return ((U.current = me), Le(me), !0);
    },
    ue = () => {
      const N = z.current;
      N && (window.clearTimeout(N.timer), N.cleanup(), (z.current = null));
    },
    we = (N, V) => {
      var me;
      ue();
      const S = N.currentTarget,
        T = {
          id: N.pointerId,
          x: N.clientX,
          y: N.clientY,
          timer: 0,
          cleanup: () => {},
        };
      (me = S.hasPointerCapture) != null &&
        me.call(S, N.pointerId) &&
        S.releasePointerCapture(N.pointerId);
      const w = (je) => {
          je.pointerId === T.id &&
            Math.hypot(je.clientX - T.x, je.clientY - T.y) > 8 &&
            ue();
        },
        L = (je) => {
          je.pointerId === T.id && ue();
        };
      ((T.cleanup = () => {
        (window.removeEventListener("pointermove", w),
          window.removeEventListener("pointerup", L),
          window.removeEventListener("pointercancel", L));
      }),
        (T.timer = window.setTimeout(() => {
          (T.cleanup(),
            (z.current = null),
            oe(V, "press") &&
              ((Ee.current = V),
              (Se.current = !0),
              window.addEventListener(
                "pointerup",
                () => {
                  Se.current = !1;
                },
                { once: !0 },
              )));
        }, Iy)),
        window.addEventListener("pointermove", w),
        window.addEventListener("pointerup", L),
        window.addEventListener("pointercancel", L),
        (z.current = T));
    },
    ve = (N, V) => {
      var je;
      const S = {
        bottom: "ArrowUp",
        top: "ArrowDown",
        left: "ArrowRight",
        right: "ArrowLeft",
      }[Me];
      if (
        N.key === "ContextMenu" ||
        (N.shiftKey && N.key === "F10") ||
        N.key === S
      ) {
        oe(V, "keyboard") && N.preventDefault();
        return;
      }
      const T = t.flatMap((De, Ue) => (De != null && De.separator ? [] : [Ue])),
        w = T.indexOf(V),
        L = O ? ["ArrowUp", "ArrowDown"] : ["ArrowLeft", "ArrowRight"];
      let me;
      (N.key === L[0]
        ? (me = T[(w - 1 + T.length) % T.length])
        : N.key === L[1]
          ? (me = T[(w + 1) % T.length])
          : N.key === "Home"
            ? (me = T[0])
            : N.key === "End" && (me = T[T.length - 1]),
        me !== void 0 &&
          (N.preventDefault(), (je = R.current[me]) == null || je.focus()));
    },
    _e = fe && !fe.closing ? fe.index : -1;
  return o.jsxs("div", {
    ref: E,
    className: `dock dock--${Me}${h ? "" : " dock--bare"}${g ? ` ${g}` : ""}`,
    role: "toolbar",
    "aria-label": "Dock",
    "aria-orientation": O ? "vertical" : "horizontal",
    style: {
      ...M,
      "--dock-base": `${J}px`,
      "--dock-thickness": `${j}px`,
      "--dock-gap": `${xe * ne}px`,
      "--dock-pad": `${(j - J) / 2}px`,
      "--dock-reach": `${de - J}px`,
      "--dock-round": rs(c, 0, 1),
      ...y,
    },
    children: [
      t.map((N, V) => {
        var S, T;
        return N != null && N.separator
          ? o.jsx(
              "span",
              { className: "dock-separator", "aria-hidden": "true" },
              V,
            )
          : o.jsxs(
              "button",
              {
                ref: (w) => {
                  R.current[V] = w;
                },
                type: "button",
                className: `dock-item${N.className ? ` ${N.className}` : ""}`,
                "aria-label": N.label,
                "aria-haspopup":
                  (S = N.menu) != null && S.length ? "menu" : void 0,
                "aria-expanded":
                  (T = N.menu) != null && T.length ? _e === V : void 0,
                "data-open": _e === V ? "" : void 0,
                onPointerDown: (w) => {
                  var me;
                  Ee.current = -1;
                  const L = U.current;
                  if (L && !L.closing) {
                    if (w.button === 2 || w.ctrlKey) return;
                    ((Ee.current = V), D(!1));
                    return;
                  }
                  (me = N.menu) != null &&
                    me.length &&
                    w.button === 0 &&
                    !w.ctrlKey &&
                    we(w, V);
                },
                onContextMenu: (w) => {
                  var L;
                  (L = N.menu) != null &&
                    L.length &&
                    (w.preventDefault(), ue(), oe(V, "pointer"));
                },
                onClick: () => {
                  var w, L;
                  if (Ee.current === V) {
                    Ee.current = -1;
                    return;
                  }
                  ((w = P.current) == null || w.hop(V),
                    (L = N.onClick) == null || L.call(N));
                },
                onFocus: (w) => {
                  var L;
                  w.currentTarget.matches(":focus-visible") &&
                    ((L = P.current) == null || L.focus(V));
                },
                onBlur: () => {
                  var w;
                  return (w = P.current) == null ? void 0 : w.focus(-1);
                },
                onKeyDown: (w) => ve(w, V),
                children: [
                  o.jsxs("span", {
                    className: "dock-tile",
                    children: [
                      o.jsx("span", {
                        className: "dock-face",
                        children: N.icon,
                      }),
                      x && My(N.badge)
                        ? o.jsx("span", {
                            className: "dock-badge",
                            children: N.badge === !0 ? null : N.badge,
                          })
                        : null,
                    ],
                  }),
                  v && N.active
                    ? o.jsx("span", {
                        className: "dock-dot",
                        "aria-hidden": "true",
                      })
                    : null,
                  p && N.label && !fe
                    ? o.jsx("span", {
                        className: "dock-label",
                        "aria-hidden": "true",
                        children: N.label,
                      })
                    : null,
                ],
              },
              V,
            );
      }),
      fe
        ? o.jsx(
            u0,
            {
              rows:
                fe.rows ??
                ((ye = t[fe.index]) == null ? void 0 : ye.menu) ??
                [],
              label: (pe = t[fe.index]) == null ? void 0 : pe.label,
              side: Me,
              point: fe.point,
              tokens: M,
              focusFirst: fe.keyboard,
              closing: fe.closing,
              pressingRef: Se,
              onSelect: (N, V) => {
                var S, T;
                (D(V || !!((S = U.current) != null && S.keyboard)),
                  (T = N.onClick) == null || T.call(N));
              },
              onDismiss: D,
              onExited: ke,
            },
            fe.id,
          )
        : null,
    ],
  });
}
const zy = [
  { id: "home", label: "首页", icon: "🏠" },
  { id: "todo", label: "待办", icon: "📝" },
  { id: "anniv", label: "纪念日", icon: "🎈" },
  { id: "photos", label: "照片", icon: "📸" },
  { id: "games", label: "游戏", icon: "🎮" },
  { id: "movies", label: "影视", icon: "🎬" },
  { id: "settings", label: "设置", icon: "⚙️" },
];
function Fy() {
  const [t, e] = b.useState(
    typeof window < "u" ? window.matchMedia("(max-width: 760px)").matches : !1,
  );
  return (
    b.useEffect(() => {
      const n = window.matchMedia("(max-width: 760px)"),
        r = (s) => e(s.matches);
      return (
        n.addEventListener("change", r),
        () => n.removeEventListener("change", r)
      );
    }, []),
    t
  );
}
function Hy({ view: t, onChange: e }) {
  const n = Fy(),
    r = zy.map((s) => ({
      icon: o.jsx("span", { className: "dock-emoji", children: s.icon }),
      label: s.label,
      active: t === s.id,
      className: t === s.id ? "is-on" : "",
      onClick: () => e(s.id),
    }));
  return o.jsx("div", {
    className: "dock-host",
    children: o.jsx(By, {
      items: r,
      position: n ? "bottom" : "left",
      theme: "light",
      baseItemSize: n ? 44 : 46,
      magnification: n ? 56 : 66,
      distance: n ? 140 : 190,
      panelHeight: n ? 58 : 62,
      gap: n ? 6 : 7,
      roundness: 0.45,
      accentColor: "#1c4568",
      bounce: !0,
    }),
  });
}
const Vy = Symbol.for("@supabase/supabase-js.traceContextExtractor");
function Wy() {
  return globalThis[Vy];
}
function Qo(t, e) {
  var n = {};
  for (var r in t)
    Object.prototype.hasOwnProperty.call(t, r) &&
      e.indexOf(r) < 0 &&
      (n[r] = t[r]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, r = Object.getOwnPropertySymbols(t); s < r.length; s++)
      e.indexOf(r[s]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(t, r[s]) &&
        (n[r[s]] = t[r[s]]);
  return n;
}
function qy(t, e, n, r) {
  function s(i) {
    return i instanceof n
      ? i
      : new n(function (a) {
          a(i);
        });
  }
  return new (n || (n = Promise))(function (i, a) {
    function l(d) {
      try {
        u(r.next(d));
      } catch (f) {
        a(f);
      }
    }
    function c(d) {
      try {
        u(r.throw(d));
      } catch (f) {
        a(f);
      }
    }
    function u(d) {
      d.done ? i(d.value) : s(d.value).then(l, c);
    }
    u((r = r.apply(t, e || [])).next());
  });
}
const Ky = (t) => (t ? (...e) => t(...e) : (...e) => fetch(...e));
class Zu extends Error {
  constructor(e, n = "FunctionsError", r) {
    (super(e), (this.name = n), (this.context = r));
  }
  toJSON() {
    return { name: this.name, message: this.message, context: this.context };
  }
}
class Gy extends Zu {
  constructor(e) {
    super(
      "Failed to send a request to the Edge Function",
      "FunctionsFetchError",
      e,
    );
  }
}
class fh extends Zu {
  constructor(e) {
    super("Relay Error invoking the Edge Function", "FunctionsRelayError", e);
  }
}
class ph extends Zu {
  constructor(e) {
    super(
      "Edge Function returned a non-2xx status code",
      "FunctionsHttpError",
      e,
    );
  }
}
var zc;
(function (t) {
  ((t.Any = "any"),
    (t.ApNortheast1 = "ap-northeast-1"),
    (t.ApNortheast2 = "ap-northeast-2"),
    (t.ApSouth1 = "ap-south-1"),
    (t.ApSoutheast1 = "ap-southeast-1"),
    (t.ApSoutheast2 = "ap-southeast-2"),
    (t.CaCentral1 = "ca-central-1"),
    (t.EuCentral1 = "eu-central-1"),
    (t.EuWest1 = "eu-west-1"),
    (t.EuWest2 = "eu-west-2"),
    (t.EuWest3 = "eu-west-3"),
    (t.SaEast1 = "sa-east-1"),
    (t.UsEast1 = "us-east-1"),
    (t.UsWest1 = "us-west-1"),
    (t.UsWest2 = "us-west-2"));
})(zc || (zc = {}));
class Jy {
  constructor(e, { headers: n = {}, customFetch: r, region: s = zc.Any } = {}) {
    ((this.url = e),
      (this.headers = n),
      (this.region = s),
      (this.fetch = Ky(r)));
  }
  setAuth(e) {
    this.headers.Authorization = `Bearer ${e}`;
  }
  invoke(e) {
    return qy(this, arguments, void 0, function* (n, r = {}) {
      var s, i;
      let a, l, c;
      try {
        const { headers: u, method: d, body: f, signal: h, timeout: p } = r;
        let v = {},
          { region: x } = r;
        x || (x = this.region);
        const _ = new URL(`${this.url}/${n}`);
        x &&
          x !== "any" &&
          ((v["x-region"] = x), _.searchParams.set("forceFunctionRegion", x));
        let m;
        const g =
          !!u && Object.keys(u).some((U) => U.toLowerCase() === "content-type");
        f && !g
          ? (typeof Blob < "u" && f instanceof Blob) || f instanceof ArrayBuffer
            ? ((v["Content-Type"] = f.type || "application/octet-stream"),
              (m = f))
            : typeof f == "string"
              ? ((v["Content-Type"] = "text/plain"), (m = f))
              : typeof FormData < "u" && f instanceof FormData
                ? (m = f)
                : ((v["Content-Type"] = "application/json"),
                  (m = JSON.stringify(f)))
          : f &&
              typeof f != "string" &&
              !(typeof Blob < "u" && f instanceof Blob) &&
              !(f instanceof ArrayBuffer) &&
              !(typeof FormData < "u" && f instanceof FormData)
            ? (m = JSON.stringify(f))
            : (m = f);
        let y = h;
        p &&
          ((l = new AbortController()),
          (a = setTimeout(() => l.abort(), p)),
          h
            ? ((y = l.signal),
              (c = () => l.abort()),
              h.addEventListener("abort", c))
            : (y = l.signal));
        const E = yield this.fetch(_.toString(), {
            method: d || "POST",
            headers: Object.assign(
              Object.assign(Object.assign({}, v), this.headers),
              u,
            ),
            body: m,
            signal: y,
          }).catch((U) => {
            throw new Gy(U);
          }),
          R = E.headers.get("x-relay-error");
        if (R && R === "true") throw new fh(E);
        if (!E.ok) throw new ph(E);
        let A = (
            (s = E.headers.get("Content-Type")) !== null && s !== void 0
              ? s
              : "text/plain"
          )
            .split(";")[0]
            .trim()
            .toLowerCase(),
          P;
        return (
          A === "application/json"
            ? (P = yield E.json())
            : A === "application/octet-stream" || A === "application/pdf"
              ? (P = yield E.blob())
              : A === "text/event-stream"
                ? (P = E)
                : A === "multipart/form-data"
                  ? (P = yield E.formData())
                  : (P = yield E.text()),
          { data: P, error: null, response: E }
        );
      } catch (u) {
        return {
          data: null,
          error: u,
          response: u instanceof ph || u instanceof fh ? u.context : void 0,
        };
      } finally {
        (a && clearTimeout(a),
          c &&
            ((i = r.signal) === null ||
              i === void 0 ||
              i.removeEventListener("abort", c)));
      }
    });
  }
}
var Es = class extends Error {
  constructor(t) {
    (super(t.message),
      (this.name = "PostgrestError"),
      (this.details = t.details),
      (this.hint = t.hint),
      (this.code = t.code));
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      details: this.details,
      hint: this.hint,
      code: this.code,
    };
  }
};
const d0 = 3,
  mh = (t) => Math.min(1e3 * 2 ** t, 3e4),
  Yy = [520, 503],
  h0 = ["GET", "HEAD", "OPTIONS"];
function Bi(t) {
  "@babel/helpers - typeof";
  return (
    (Bi =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              typeof Symbol == "function" &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          }),
    Bi(t)
  );
}
function Xy(t, e) {
  if (Bi(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if (Bi(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function Zy(t) {
  var e = Xy(t, "string");
  return Bi(e) == "symbol" ? e : e + "";
}
function Qy(t, e, n) {
  return (
    (e = Zy(e)) in t
      ? Object.defineProperty(t, e, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[e] = n),
    t
  );
}
function gh(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    (e &&
      (r = r.filter(function (s) {
        return Object.getOwnPropertyDescriptor(t, s).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function Ir(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? gh(Object(n), !0).forEach(function (r) {
          Qy(t, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
        : gh(Object(n)).forEach(function (r) {
            Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
          });
  }
  return t;
}
function vh(t, e) {
  return new Promise((n) => {
    if (e != null && e.aborted) {
      n();
      return;
    }
    const r = setTimeout(() => {
      (e == null || e.removeEventListener("abort", s), n());
    }, t);
    function s() {
      (clearTimeout(r), n());
    }
    e == null || e.addEventListener("abort", s);
  });
}
function ew(t, e, n, r) {
  return !(!r || n >= d0 || !h0.includes(t) || !Yy.includes(e));
}
async function f0(t, e, n, r) {
  let s = 0;
  for (;;) {
    const c = Ir({}, n.headers);
    s > 0 && (c["X-Retry-Count"] = String(s));
    let u;
    try {
      u = await t(e, {
        method: n.method,
        headers: c,
        body: n.body,
        signal: n.signal,
      });
    } catch (d) {
      var i;
      if (
        (d == null ? void 0 : d.name) === "AbortError" ||
        (d == null ? void 0 : d.code) === "ABORT_ERR" ||
        ((d == null ? void 0 : d.name) === "TimeoutError" &&
          !((i = n.signal) === null || i === void 0) &&
          i.aborted) ||
        !h0.includes(n.method)
      )
        throw d;
      if (r && s < d0) {
        const f = mh(s);
        (s++, await vh(f, n.signal));
        continue;
      }
      throw d;
    }
    if (ew(n.method, u.status, s, r)) {
      var a, l;
      const d =
          (a =
            (l = u.headers) === null || l === void 0
              ? void 0
              : l.get("Retry-After")) !== null && a !== void 0
            ? a
            : null,
        f = d !== null ? Math.max(0, parseInt(d, 10) || 0) * 1e3 : mh(s);
      (await u.text(), s++, await vh(f, n.signal));
      continue;
    }
    return u;
  }
}
var tw = class {
    constructor(t) {
      var e, n, r, s, i;
      ((this.shouldThrowOnError = !1),
        (this.retryEnabled = !0),
        (this.method = t.method),
        (this.url = t.url),
        (this.headers = new Headers(t.headers)),
        (this.schema = t.schema),
        (this.body = t.body),
        (this.shouldThrowOnError =
          (e = t.shouldThrowOnError) !== null && e !== void 0 ? e : !1),
        (this.signal = t.signal),
        (this.isMaybeSingle =
          (n = t.isMaybeSingle) !== null && n !== void 0 ? n : !1),
        (this.shouldStripNulls =
          (r = t.shouldStripNulls) !== null && r !== void 0 ? r : !1),
        (this.urlLengthLimit =
          (s = t.urlLengthLimit) !== null && s !== void 0 ? s : 8e3),
        (this.retryEnabled = (i = t.retry) !== null && i !== void 0 ? i : !0),
        t.fetch ? (this.fetch = t.fetch) : (this.fetch = fetch));
    }
    throwOnError() {
      return ((this.shouldThrowOnError = !0), this);
    }
    stripNulls() {
      if (this.headers.get("Accept") === "text/csv")
        throw new Error("stripNulls() cannot be used with csv()");
      return ((this.shouldStripNulls = !0), this);
    }
    setHeader(t, e) {
      return (
        (this.headers = new Headers(this.headers)),
        this.headers.set(t, e),
        this
      );
    }
    retry(t) {
      return ((this.retryEnabled = t), this);
    }
    then(t, e) {
      var n = this;
      if (
        (this.schema === void 0 ||
          (["GET", "HEAD"].includes(this.method)
            ? this.headers.set("Accept-Profile", this.schema)
            : this.headers.set("Content-Profile", this.schema)),
        this.method !== "GET" &&
          this.method !== "HEAD" &&
          this.headers.set("Content-Type", "application/json"),
        this.shouldStripNulls)
      ) {
        const a = this.headers.get("Accept");
        a === "application/vnd.pgrst.object+json"
          ? this.headers.set(
              "Accept",
              "application/vnd.pgrst.object+json;nulls=stripped",
            )
          : (!a || a === "application/json") &&
            this.headers.set(
              "Accept",
              "application/vnd.pgrst.array+json;nulls=stripped",
            );
      }
      const r = this.fetch;
      let i = (async () => {
        const a = {};
        n.headers.forEach((c, u) => {
          a[u] = c;
        });
        const l = await f0(
          r,
          n.url.toString(),
          {
            method: n.method,
            headers: a,
            body: JSON.stringify(n.body, (c, u) =>
              typeof u == "bigint" ? u.toString() : u,
            ),
            signal: n.signal,
          },
          n.retryEnabled,
        );
        return await n.processResponse(l);
      })();
      return (
        this.shouldThrowOnError ||
          (i = i.catch((a) => {
            var l;
            let c = "",
              u = "",
              d = "";
            const f = a == null ? void 0 : a.cause;
            if (f) {
              var h, p, v, x;
              const g =
                  (h = f == null ? void 0 : f.message) !== null && h !== void 0
                    ? h
                    : "",
                y =
                  (p = f == null ? void 0 : f.code) !== null && p !== void 0
                    ? p
                    : "";
              ((c = `${(v = a == null ? void 0 : a.name) !== null && v !== void 0 ? v : "FetchError"}: ${a == null ? void 0 : a.message}`),
                (c += `

Caused by: ${(x = f == null ? void 0 : f.name) !== null && x !== void 0 ? x : "Error"}: ${g}`),
                y && (c += ` (${y})`),
                f != null &&
                  f.stack &&
                  (c += `
${f.stack}`));
            } else {
              var _;
              c =
                (_ = a == null ? void 0 : a.stack) !== null && _ !== void 0
                  ? _
                  : "";
            }
            const m = this.url.toString().length;
            return (
              (a == null ? void 0 : a.name) === "AbortError" ||
              (a == null ? void 0 : a.code) === "ABORT_ERR"
                ? ((d = ""),
                  (u = "Request was aborted (timeout or manual cancellation)"),
                  m > this.urlLengthLimit &&
                    (u += `. Note: Your request URL is ${m} characters, which may exceed server limits. If selecting many fields, consider using views. If filtering with large arrays (e.g., .in('id', [many IDs])), consider using an RPC function to pass values server-side.`))
                : ((f == null ? void 0 : f.name) === "HeadersOverflowError" ||
                    (f == null ? void 0 : f.code) ===
                      "UND_ERR_HEADERS_OVERFLOW") &&
                  ((d = ""),
                  (u = "HTTP headers exceeded server limits (typically 16KB)"),
                  m > this.urlLengthLimit &&
                    (u += `. Your request URL is ${m} characters. If selecting many fields, consider using views. If filtering with large arrays (e.g., .in('id', [200+ IDs])), consider using an RPC function instead.`)),
              {
                success: !1,
                error: {
                  message: `${(l = a == null ? void 0 : a.name) !== null && l !== void 0 ? l : "FetchError"}: ${a == null ? void 0 : a.message}`,
                  details: c,
                  hint: u,
                  code: d,
                },
                data: null,
                count: null,
                status: 0,
                statusText: "",
              }
            );
          })),
        i.then(t, e)
      );
    }
    async processResponse(t) {
      var e = this;
      let n = null,
        r = null,
        s = null,
        i = t.status,
        a = t.statusText;
      if (t.ok) {
        var l, c;
        if (e.method !== "HEAD") {
          var u;
          const p = await t.text();
          if (p !== "")
            if (e.headers.get("Accept") === "text/csv") r = p;
            else if (
              e.headers.get("Accept") &&
              !((u = e.headers.get("Accept")) === null || u === void 0) &&
              u.includes("application/vnd.pgrst.plan+text")
            )
              r = p;
            else
              try {
                r = JSON.parse(p);
              } catch {
                if (((n = { message: p }), (r = null), e.shouldThrowOnError))
                  throw new Es({ message: p, details: "", hint: "", code: "" });
              }
        }
        const f =
            (l = e.headers.get("Prefer")) === null || l === void 0
              ? void 0
              : l.match(/count=(exact|planned|estimated)/),
          h =
            (c = t.headers.get("content-range")) === null || c === void 0
              ? void 0
              : c.split("/");
        if (
          (f && h && h.length > 1 && (s = parseInt(h[1])),
          e.isMaybeSingle && Array.isArray(r))
        )
          if (r.length > 1) {
            if (
              ((n = {
                code: "PGRST116",
                details: `Results contain ${r.length} rows, application/vnd.pgrst.object+json requires 1 row`,
                hint: null,
                message:
                  "JSON object requested, multiple (or no) rows returned",
              }),
              (r = null),
              (s = null),
              (i = 406),
              (a = "Not Acceptable"),
              e.shouldThrowOnError)
            ) {
              var d;
              throw new Es(
                Ir(
                  Ir({}, n),
                  {},
                  { hint: (d = n.hint) !== null && d !== void 0 ? d : "" },
                ),
              );
            }
          } else r.length === 1 ? (r = r[0]) : (r = null);
      } else {
        const f = await t.text();
        try {
          ((n = JSON.parse(f)),
            Array.isArray(n) &&
              t.status === 404 &&
              ((r = []), (n = null), (i = 200), (a = "OK")));
        } catch {
          t.status === 404 && f === ""
            ? ((i = 204), (a = "No Content"))
            : (n = { message: f });
        }
        if (n && e.shouldThrowOnError) throw new Es(n);
      }
      return {
        success: n === null,
        error: n,
        data: r,
        count: s,
        status: i,
        statusText: a,
      };
    }
    returns() {
      return this;
    }
    overrideTypes() {
      return this;
    }
  },
  nw = class extends tw {
    throwOnError() {
      return super.throwOnError();
    }
    select(t) {
      let e = !1;
      const n = (t ?? "*")
        .split("")
        .map((r) => (/\s/.test(r) && !e ? "" : (r === '"' && (e = !e), r)))
        .join("");
      return (
        this.url.searchParams.set("select", n),
        this.headers.append("Prefer", "return=representation"),
        this
      );
    }
    order(
      t,
      {
        ascending: e = !0,
        nullsFirst: n,
        foreignTable: r,
        referencedTable: s = r,
      } = {},
    ) {
      const i = s ? `${s}.order` : "order",
        a = this.url.searchParams.get(i);
      return (
        this.url.searchParams.set(
          i,
          `${a ? `${a},` : ""}${t}.${e ? "asc" : "desc"}${n === void 0 ? "" : n ? ".nullsfirst" : ".nullslast"}`,
        ),
        this
      );
    }
    limit(t, { foreignTable: e, referencedTable: n = e } = {}) {
      const r = typeof n > "u" ? "limit" : `${n}.limit`;
      return (this.url.searchParams.set(r, `${t}`), this);
    }
    range(t, e, { foreignTable: n, referencedTable: r = n } = {}) {
      const s = typeof r > "u" ? "offset" : `${r}.offset`,
        i = typeof r > "u" ? "limit" : `${r}.limit`;
      return (
        this.url.searchParams.set(s, `${t}`),
        this.url.searchParams.set(i, `${e - t + 1}`),
        this
      );
    }
    abortSignal(t) {
      return ((this.signal = t), this);
    }
    single() {
      return (
        this.headers.set("Accept", "application/vnd.pgrst.object+json"),
        this
      );
    }
    maybeSingle() {
      return ((this.isMaybeSingle = !0), this);
    }
    csv() {
      return (this.headers.set("Accept", "text/csv"), this);
    }
    geojson() {
      return (this.headers.set("Accept", "application/geo+json"), this);
    }
    explain({
      analyze: t = !1,
      verbose: e = !1,
      settings: n = !1,
      buffers: r = !1,
      wal: s = !1,
      format: i = "text",
    } = {}) {
      var a;
      const l = [
          t ? "analyze" : null,
          e ? "verbose" : null,
          n ? "settings" : null,
          r ? "buffers" : null,
          s ? "wal" : null,
        ]
          .filter(Boolean)
          .join("|"),
        c =
          (a = this.headers.get("Accept")) !== null && a !== void 0
            ? a
            : "application/json";
      return (
        this.headers.set(
          "Accept",
          `application/vnd.pgrst.plan+${i}; for="${c}"; options=${l};`,
        ),
        i === "json" ? this : this
      );
    }
    rollback() {
      return (this.headers.append("Prefer", "tx=rollback"), this);
    }
    returns() {
      return this;
    }
    maxAffected(t) {
      return (
        this.headers.append("Prefer", "handling=strict"),
        this.headers.append("Prefer", `max-affected=${t}`),
        this
      );
    }
  };
const yh = new RegExp("[,()]");
var ss = class extends nw {
    throwOnError() {
      return super.throwOnError();
    }
    eq(t, e) {
      return (this.url.searchParams.append(t, `eq.${e}`), this);
    }
    neq(t, e) {
      return (this.url.searchParams.append(t, `neq.${e}`), this);
    }
    gt(t, e) {
      return (this.url.searchParams.append(t, `gt.${e}`), this);
    }
    gte(t, e) {
      return (this.url.searchParams.append(t, `gte.${e}`), this);
    }
    lt(t, e) {
      return (this.url.searchParams.append(t, `lt.${e}`), this);
    }
    lte(t, e) {
      return (this.url.searchParams.append(t, `lte.${e}`), this);
    }
    like(t, e) {
      return (this.url.searchParams.append(t, `like.${e}`), this);
    }
    likeAllOf(t, e) {
      return (
        this.url.searchParams.append(t, `like(all).{${e.join(",")}}`),
        this
      );
    }
    likeAnyOf(t, e) {
      return (
        this.url.searchParams.append(t, `like(any).{${e.join(",")}}`),
        this
      );
    }
    ilike(t, e) {
      return (this.url.searchParams.append(t, `ilike.${e}`), this);
    }
    ilikeAllOf(t, e) {
      return (
        this.url.searchParams.append(t, `ilike(all).{${e.join(",")}}`),
        this
      );
    }
    ilikeAnyOf(t, e) {
      return (
        this.url.searchParams.append(t, `ilike(any).{${e.join(",")}}`),
        this
      );
    }
    regexMatch(t, e) {
      return (this.url.searchParams.append(t, `match.${e}`), this);
    }
    regexIMatch(t, e) {
      return (this.url.searchParams.append(t, `imatch.${e}`), this);
    }
    is(t, e) {
      return (this.url.searchParams.append(t, `is.${e}`), this);
    }
    isDistinct(t, e) {
      return (this.url.searchParams.append(t, `isdistinct.${e}`), this);
    }
    in(t, e) {
      const n = Array.from(new Set(e))
        .map((r) => (typeof r == "string" && yh.test(r) ? `"${r}"` : `${r}`))
        .join(",");
      return (this.url.searchParams.append(t, `in.(${n})`), this);
    }
    notIn(t, e) {
      const n = Array.from(new Set(e))
        .map((r) => (typeof r == "string" && yh.test(r) ? `"${r}"` : `${r}`))
        .join(",");
      return (this.url.searchParams.append(t, `not.in.(${n})`), this);
    }
    contains(t, e) {
      return (
        typeof e == "string"
          ? this.url.searchParams.append(t, `cs.${e}`)
          : Array.isArray(e)
            ? this.url.searchParams.append(t, `cs.{${e.join(",")}}`)
            : this.url.searchParams.append(t, `cs.${JSON.stringify(e)}`),
        this
      );
    }
    containedBy(t, e) {
      return (
        typeof e == "string"
          ? this.url.searchParams.append(t, `cd.${e}`)
          : Array.isArray(e)
            ? this.url.searchParams.append(t, `cd.{${e.join(",")}}`)
            : this.url.searchParams.append(t, `cd.${JSON.stringify(e)}`),
        this
      );
    }
    rangeGt(t, e) {
      return (this.url.searchParams.append(t, `sr.${e}`), this);
    }
    rangeGte(t, e) {
      return (this.url.searchParams.append(t, `nxl.${e}`), this);
    }
    rangeLt(t, e) {
      return (this.url.searchParams.append(t, `sl.${e}`), this);
    }
    rangeLte(t, e) {
      return (this.url.searchParams.append(t, `nxr.${e}`), this);
    }
    rangeAdjacent(t, e) {
      return (this.url.searchParams.append(t, `adj.${e}`), this);
    }
    overlaps(t, e) {
      return (
        typeof e == "string"
          ? this.url.searchParams.append(t, `ov.${e}`)
          : this.url.searchParams.append(t, `ov.{${e.join(",")}}`),
        this
      );
    }
    textSearch(t, e, { config: n, type: r } = {}) {
      let s = "";
      r === "plain"
        ? (s = "pl")
        : r === "phrase"
          ? (s = "ph")
          : r === "websearch" && (s = "w");
      const i = n === void 0 ? "" : `(${n})`;
      return (this.url.searchParams.append(t, `${s}fts${i}.${e}`), this);
    }
    match(t) {
      return (
        Object.entries(t)
          .filter(([e, n]) => n !== void 0)
          .forEach(([e, n]) => {
            this.url.searchParams.append(e, `eq.${n}`);
          }),
        this
      );
    }
    not(t, e, n) {
      return (this.url.searchParams.append(t, `not.${e}.${n}`), this);
    }
    or(t, { foreignTable: e, referencedTable: n = e } = {}) {
      const r = n ? `${n}.or` : "or";
      return (this.url.searchParams.append(r, `(${t})`), this);
    }
    filter(t, e, n) {
      return (this.url.searchParams.append(t, `${e}.${n}`), this);
    }
  },
  rw = class {
    constructor(
      t,
      {
        headers: e = {},
        schema: n,
        fetch: r,
        urlLengthLimit: s = 8e3,
        retry: i,
      },
    ) {
      ((this.url = t),
        (this.headers = new Headers(e)),
        (this.schema = n),
        (this.fetch = r),
        (this.urlLengthLimit = s),
        (this.retry = i));
    }
    cloneRequestState() {
      return {
        url: new URL(this.url.toString()),
        headers: new Headers(this.headers),
      };
    }
    select(t, e) {
      const { head: n = !1, count: r } = e ?? {},
        s = n ? "HEAD" : "GET";
      let i = !1;
      const a = (t ?? "*")
          .split("")
          .map((u) => (/\s/.test(u) && !i ? "" : (u === '"' && (i = !i), u)))
          .join(""),
        { url: l, headers: c } = this.cloneRequestState();
      return (
        l.searchParams.set("select", a),
        r && c.append("Prefer", `count=${r}`),
        new ss({
          method: s,
          url: l,
          headers: c,
          schema: this.schema,
          fetch: this.fetch,
          urlLengthLimit: this.urlLengthLimit,
          retry: this.retry,
        })
      );
    }
    insert(t, { count: e, defaultToNull: n = !0 } = {}) {
      var r;
      const s = "POST",
        { url: i, headers: a } = this.cloneRequestState();
      if (
        (e && a.append("Prefer", `count=${e}`),
        n || a.append("Prefer", "missing=default"),
        Array.isArray(t))
      ) {
        const l = t.reduce((c, u) => c.concat(Object.keys(u)), []);
        if (l.length > 0) {
          const c = [...new Set(l)].map((u) => `"${u}"`);
          i.searchParams.set("columns", c.join(","));
        }
      }
      return new ss({
        method: s,
        url: i,
        headers: a,
        schema: this.schema,
        body: t,
        fetch: (r = this.fetch) !== null && r !== void 0 ? r : fetch,
        urlLengthLimit: this.urlLengthLimit,
        retry: this.retry,
      });
    }
    upsert(
      t,
      {
        onConflict: e,
        ignoreDuplicates: n = !1,
        count: r,
        defaultToNull: s = !0,
      } = {},
    ) {
      var i;
      const a = "POST",
        { url: l, headers: c } = this.cloneRequestState();
      if (
        (c.append("Prefer", `resolution=${n ? "ignore" : "merge"}-duplicates`),
        e !== void 0 && l.searchParams.set("on_conflict", e),
        r && c.append("Prefer", `count=${r}`),
        s || c.append("Prefer", "missing=default"),
        Array.isArray(t))
      ) {
        const u = t.reduce((d, f) => d.concat(Object.keys(f)), []);
        if (u.length > 0) {
          const d = [...new Set(u)].map((f) => `"${f}"`);
          l.searchParams.set("columns", d.join(","));
        }
      }
      return new ss({
        method: a,
        url: l,
        headers: c,
        schema: this.schema,
        body: t,
        fetch: (i = this.fetch) !== null && i !== void 0 ? i : fetch,
        urlLengthLimit: this.urlLengthLimit,
        retry: this.retry,
      });
    }
    update(t, { count: e } = {}) {
      var n;
      const r = "PATCH",
        { url: s, headers: i } = this.cloneRequestState();
      return (
        e && i.append("Prefer", `count=${e}`),
        new ss({
          method: r,
          url: s,
          headers: i,
          schema: this.schema,
          body: t,
          fetch: (n = this.fetch) !== null && n !== void 0 ? n : fetch,
          urlLengthLimit: this.urlLengthLimit,
          retry: this.retry,
        })
      );
    }
    delete({ count: t } = {}) {
      var e;
      const n = "DELETE",
        { url: r, headers: s } = this.cloneRequestState();
      return (
        t && s.append("Prefer", `count=${t}`),
        new ss({
          method: n,
          url: r,
          headers: s,
          schema: this.schema,
          fetch: (e = this.fetch) !== null && e !== void 0 ? e : fetch,
          urlLengthLimit: this.urlLengthLimit,
          retry: this.retry,
        })
      );
    }
  };
function sw(t, e) {
  try {
    const a = JSON.parse(t);
    if (a && typeof a == "object" && !Array.isArray(a)) {
      var n, r, s, i;
      return new Es({
        message: String((n = a.message) !== null && n !== void 0 ? n : t),
        details: (r = a.details) !== null && r !== void 0 ? r : "",
        hint: (s = a.hint) !== null && s !== void 0 ? s : "",
        code: (i = a.code) !== null && i !== void 0 ? i : "",
      });
    }
  } catch {}
  return new Es({ message: t || e, details: "", hint: "", code: "" });
}
function wh(t, e, n) {
  var r;
  const s = t;
  return {
    success: !1,
    error: new Es({
      message: `${(r = s == null ? void 0 : s.name) !== null && r !== void 0 ? r : "FetchError"}: ${s == null ? void 0 : s.message}`,
      details: "",
      hint: "",
      code: "",
    }),
    data: null,
    count: null,
    status: e,
    statusText: n,
  };
}
var iw = class p0 {
  constructor(
    e,
    {
      headers: n = {},
      schema: r,
      fetch: s,
      timeout: i,
      urlLengthLimit: a = 8e3,
      retry: l,
    } = {},
  ) {
    ((this.url = e),
      (this.headers = new Headers(n)),
      (this.schemaName = r),
      (this.urlLengthLimit = a));
    const c = s ?? globalThis.fetch;
    (i !== void 0 && i > 0
      ? (this.fetch = (u, d) => {
          const f = new AbortController(),
            h = setTimeout(() => f.abort(), i),
            p = d == null ? void 0 : d.signal;
          if (p) {
            if (p.aborted) return (clearTimeout(h), c(u, d));
            const v = () => {
              (clearTimeout(h), f.abort());
            };
            return (
              p.addEventListener("abort", v, { once: !0 }),
              c(u, Ir(Ir({}, d), {}, { signal: f.signal })).finally(() => {
                (clearTimeout(h), p.removeEventListener("abort", v));
              })
            );
          }
          return c(u, Ir(Ir({}, d), {}, { signal: f.signal })).finally(() =>
            clearTimeout(h),
          );
        })
      : (this.fetch = c),
      (this.retry = l));
  }
  from(e) {
    if (!e || typeof e != "string" || e.trim() === "")
      throw new Error(
        "Invalid relation name: relation must be a non-empty string.",
      );
    return new rw(new URL(`${this.url}/${e}`), {
      headers: new Headers(this.headers),
      schema: this.schemaName,
      fetch: this.fetch,
      urlLengthLimit: this.urlLengthLimit,
      retry: this.retry,
    });
  }
  schema(e) {
    return new p0(this.url, {
      headers: this.headers,
      schema: e,
      fetch: this.fetch,
      urlLengthLimit: this.urlLengthLimit,
      retry: this.retry,
    });
  }
  async getOpenApiSpec() {
    var e = this,
      n;
    const r = new Headers(e.headers);
    (r.set("Accept", "application/openapi+json"),
      e.schemaName && r.set("Accept-Profile", e.schemaName));
    const s = {};
    r.forEach((u, d) => {
      s[d] = u;
    });
    const i = (n = e.fetch) !== null && n !== void 0 ? n : globalThis.fetch;
    let a;
    try {
      var l;
      a = await f0(
        i,
        `${e.url}/`,
        { method: "GET", headers: s },
        (l = e.retry) !== null && l !== void 0 ? l : !0,
      );
    } catch (u) {
      return wh(u, 0, "");
    }
    let c;
    try {
      c = await a.text();
    } catch (u) {
      return wh(u, a.status, a.statusText);
    }
    if (a.ok)
      try {
        return {
          success: !0,
          error: null,
          data: JSON.parse(c),
          count: null,
          status: a.status,
          statusText: a.statusText,
        };
      } catch {}
    return {
      success: !1,
      error: sw(c, a.statusText),
      data: null,
      count: null,
      status: a.status,
      statusText: a.statusText,
    };
  }
  rpc(e, n = {}, { head: r = !1, get: s = !1, count: i } = {}) {
    var a;
    let l;
    const c = new URL(`${this.url}/rpc/${e}`);
    let u;
    const d = (p) =>
        p !== null && typeof p == "object" && (!Array.isArray(p) || p.some(d)),
      f = r && Object.values(n).some(d);
    f
      ? ((l = "POST"), (u = n))
      : r || s
        ? ((l = r ? "HEAD" : "GET"),
          Object.entries(n)
            .filter(([p, v]) => v !== void 0)
            .map(([p, v]) => [
              p,
              Array.isArray(v) ? `{${v.join(",")}}` : `${v}`,
            ])
            .forEach(([p, v]) => {
              c.searchParams.append(p, v);
            }))
        : ((l = "POST"), (u = n));
    const h = new Headers(this.headers);
    return (
      f
        ? h.set("Prefer", i ? `count=${i},return=minimal` : "return=minimal")
        : i && h.set("Prefer", `count=${i}`),
      new ss({
        method: l,
        url: c,
        headers: h,
        schema: this.schemaName,
        body: u,
        fetch: (a = this.fetch) !== null && a !== void 0 ? a : fetch,
        urlLengthLimit: this.urlLengthLimit,
        retry: this.retry,
      })
    );
  }
};
class aw {
  constructor() {}
  static detectEnvironment() {
    var e;
    if (typeof WebSocket < "u")
      return { type: "native", wsConstructor: WebSocket };
    const n = globalThis;
    if (typeof globalThis < "u" && typeof n.WebSocket < "u")
      return { type: "native", wsConstructor: n.WebSocket };
    const r = typeof global < "u" ? global : void 0;
    if (r && typeof r.WebSocket < "u")
      return { type: "native", wsConstructor: r.WebSocket };
    if (
      typeof globalThis < "u" &&
      typeof n.WebSocketPair < "u" &&
      typeof globalThis.WebSocket > "u"
    )
      return {
        type: "cloudflare",
        error:
          "Cloudflare Workers detected. WebSocket clients are not supported in Cloudflare Workers.",
        workaround:
          "Use Cloudflare Workers WebSocket API for server-side WebSocket handling, or deploy to a different runtime.",
      };
    if (
      (typeof globalThis < "u" && n.EdgeRuntime) ||
      (typeof navigator < "u" &&
        !((e = navigator.userAgent) === null || e === void 0) &&
        e.includes("Vercel-Edge"))
    )
      return {
        type: "unsupported",
        error:
          "Edge runtime detected (Vercel Edge/Netlify Edge). WebSockets are not supported in edge functions.",
        workaround:
          "Use serverless functions or a different deployment target for WebSocket functionality.",
      };
    const s = globalThis.process;
    if (s) {
      const i = s.versions;
      if (i && i.node)
        return {
          type: "unsupported",
          error: "Node.js detected but native WebSocket not found.",
          workaround:
            "Ensure you are running Node.js 22+ or provide a WebSocket implementation via the transport option.",
        };
    }
    return {
      type: "unsupported",
      error: "Unknown JavaScript runtime without WebSocket support.",
      workaround:
        "Ensure you're running in a supported environment (browser, Node.js, Deno) or provide a custom WebSocket implementation.",
    };
  }
  static getWebSocketConstructor() {
    const e = this.detectEnvironment();
    if (e.wsConstructor) return e.wsConstructor;
    let n = e.error || "WebSocket not supported in this environment.";
    throw (
      e.workaround &&
        (n += `

Suggested solution: ${e.workaround}`),
      new Error(n)
    );
  }
  static isWebSocketSupported() {
    try {
      return this.detectEnvironment().type === "native";
    } catch {
      return !1;
    }
  }
}
const ow = "2.118.0",
  lw = `realtime-js/${ow}`,
  cw = "1.0.0",
  m0 = "2.0.0",
  uw = m0,
  dw = 1e4,
  hw = 15e3,
  fw = 1e4,
  pw = 100,
  sr = {
    closed: "closed",
    errored: "errored",
    joined: "joined",
    joining: "joining",
    leaving: "leaving",
  },
  g0 = {
    close: "phx_close",
    error: "phx_error",
    join: "phx_join",
    leave: "phx_leave",
    access_token: "access_token",
  },
  Fc = { connecting: "connecting", closing: "closing", closed: "closed" };
class mw {
  constructor(e) {
    ((this.HEADER_LENGTH = 1),
      (this.USER_BROADCAST_PUSH_META_LENGTH = 6),
      (this.KINDS = { userBroadcastPush: 3, userBroadcast: 4 }),
      (this.BINARY_ENCODING = 0),
      (this.JSON_ENCODING = 1),
      (this.BROADCAST_EVENT = "broadcast"),
      (this.allowedMetadataKeys = []),
      (this.allowedMetadataKeys = e ?? []));
  }
  encode(e, n) {
    if (
      e.event === this.BROADCAST_EVENT &&
      !(e.payload instanceof ArrayBuffer) &&
      typeof e.payload.event == "string"
    )
      return n(this._binaryEncodeUserBroadcastPush(e));
    let r = [e.join_ref, e.ref, e.topic, e.event, e.payload];
    return n(JSON.stringify(r));
  }
  _binaryEncodeUserBroadcastPush(e) {
    var n;
    return this._isArrayBuffer(
      (n = e.payload) === null || n === void 0 ? void 0 : n.payload,
    )
      ? this._encodeBinaryUserBroadcastPush(e)
      : this._encodeJsonUserBroadcastPush(e);
  }
  _encodeBinaryUserBroadcastPush(e) {
    var n, r;
    const s =
      (r = (n = e.payload) === null || n === void 0 ? void 0 : n.payload) !==
        null && r !== void 0
        ? r
        : new ArrayBuffer(0);
    return this._encodeUserBroadcastPush(e, this.BINARY_ENCODING, s);
  }
  _encodeJsonUserBroadcastPush(e) {
    var n, r;
    const s =
        (r = (n = e.payload) === null || n === void 0 ? void 0 : n.payload) !==
          null && r !== void 0
          ? r
          : {},
      a = new TextEncoder().encode(JSON.stringify(s)).buffer;
    return this._encodeUserBroadcastPush(e, this.JSON_ENCODING, a);
  }
  _encodeUserBroadcastPush(e, n, r) {
    var s, i;
    const a = new TextEncoder(),
      l = a.encode(e.topic),
      c = a.encode((s = e.ref) !== null && s !== void 0 ? s : ""),
      u = a.encode((i = e.join_ref) !== null && i !== void 0 ? i : ""),
      d = a.encode(e.payload.event),
      f = this.allowedMetadataKeys
        ? this._pick(e.payload, this.allowedMetadataKeys)
        : {},
      h = a.encode(Object.keys(f).length === 0 ? "" : JSON.stringify(f));
    if (u.length > 255)
      throw new Error(`joinRef length ${u.length} exceeds maximum of 255`);
    if (c.length > 255)
      throw new Error(`ref length ${c.length} exceeds maximum of 255`);
    if (l.length > 255)
      throw new Error(`topic length ${l.length} exceeds maximum of 255`);
    if (d.length > 255)
      throw new Error(`userEvent length ${d.length} exceeds maximum of 255`);
    if (h.length > 255)
      throw new Error(`metadata length ${h.length} exceeds maximum of 255`);
    const p =
        this.USER_BROADCAST_PUSH_META_LENGTH +
        u.length +
        c.length +
        l.length +
        d.length +
        h.length,
      v = new ArrayBuffer(this.HEADER_LENGTH + p),
      x = new DataView(v),
      _ = new Uint8Array(v);
    let m = 0;
    (x.setUint8(m++, this.KINDS.userBroadcastPush),
      x.setUint8(m++, u.length),
      x.setUint8(m++, c.length),
      x.setUint8(m++, l.length),
      x.setUint8(m++, d.length),
      x.setUint8(m++, h.length),
      x.setUint8(m++, n),
      _.set(u, m),
      (m += u.length),
      _.set(c, m),
      (m += c.length),
      _.set(l, m),
      (m += l.length),
      _.set(d, m),
      (m += d.length),
      _.set(h, m),
      (m += h.length));
    var g = new Uint8Array(v.byteLength + r.byteLength);
    return (
      g.set(new Uint8Array(v), 0),
      g.set(new Uint8Array(r), v.byteLength),
      g.buffer
    );
  }
  decode(e, n) {
    if (this._isArrayBuffer(e)) {
      let r = this._binaryDecode(e);
      return n(r);
    }
    if (typeof e == "string") {
      const r = JSON.parse(e),
        [s, i, a, l, c] = r;
      return n({ join_ref: s, ref: i, topic: a, event: l, payload: c });
    }
    return n({});
  }
  _binaryDecode(e) {
    const n = new DataView(e),
      r = n.getUint8(0),
      s = new TextDecoder();
    switch (r) {
      case this.KINDS.userBroadcast:
        return this._decodeUserBroadcast(e, n, s);
    }
  }
  _decodeUserBroadcast(e, n, r) {
    const s = n.getUint8(1),
      i = n.getUint8(2),
      a = n.getUint8(3),
      l = n.getUint8(4);
    let c = this.HEADER_LENGTH + 4;
    const u = r.decode(e.slice(c, c + s));
    c = c + s;
    const d = r.decode(e.slice(c, c + i));
    c = c + i;
    const f = r.decode(e.slice(c, c + a));
    c = c + a;
    const h = e.slice(c, e.byteLength),
      p = l === this.JSON_ENCODING ? JSON.parse(r.decode(h)) : h,
      v = { type: this.BROADCAST_EVENT, event: d, payload: p };
    return (
      a > 0 && (v.meta = JSON.parse(f)),
      {
        join_ref: null,
        ref: null,
        topic: u,
        event: this.BROADCAST_EVENT,
        payload: v,
      }
    );
  }
  _isArrayBuffer(e) {
    var n;
    return (
      e instanceof ArrayBuffer ||
      ((n = e == null ? void 0 : e.constructor) === null || n === void 0
        ? void 0
        : n.name) === "ArrayBuffer"
    );
  }
  _pick(e, n) {
    return !e || typeof e != "object"
      ? {}
      : Object.fromEntries(Object.entries(e).filter(([r]) => n.includes(r)));
  }
}
var We;
(function (t) {
  ((t.abstime = "abstime"),
    (t.bool = "bool"),
    (t.date = "date"),
    (t.daterange = "daterange"),
    (t.float4 = "float4"),
    (t.float8 = "float8"),
    (t.int2 = "int2"),
    (t.int4 = "int4"),
    (t.int4range = "int4range"),
    (t.int8 = "int8"),
    (t.int8range = "int8range"),
    (t.json = "json"),
    (t.jsonb = "jsonb"),
    (t.money = "money"),
    (t.numeric = "numeric"),
    (t.oid = "oid"),
    (t.reltime = "reltime"),
    (t.text = "text"),
    (t.time = "time"),
    (t.timestamp = "timestamp"),
    (t.timestamptz = "timestamptz"),
    (t.timetz = "timetz"),
    (t.tsrange = "tsrange"),
    (t.tstzrange = "tstzrange"));
})(We || (We = {}));
const xh = (t, e, n = {}) => {
    var r;
    const s = (r = n.skipTypes) !== null && r !== void 0 ? r : [];
    return e
      ? Object.keys(e).reduce((i, a) => ((i[a] = gw(a, t, e, s)), i), {})
      : {};
  },
  gw = (t, e, n, r) => {
    const s = e.find((l) => l.name === t),
      i = s == null ? void 0 : s.type,
      a = n[t];
    return i && !r.includes(i) ? v0(i, a) : Hc(a);
  },
  v0 = (t, e) => {
    if (t.charAt(0) === "_") {
      const n = t.slice(1, t.length);
      return xw(e, n);
    }
    switch (t) {
      case We.bool:
        return vw(e);
      case We.float4:
      case We.float8:
      case We.int2:
      case We.int4:
      case We.int8:
      case We.numeric:
      case We.oid:
        return yw(e);
      case We.json:
      case We.jsonb:
        return ww(e);
      case We.timestamp:
        return _w(e);
      case We.abstime:
      case We.date:
      case We.daterange:
      case We.int4range:
      case We.int8range:
      case We.money:
      case We.reltime:
      case We.text:
      case We.time:
      case We.timestamptz:
      case We.timetz:
      case We.tsrange:
      case We.tstzrange:
        return Hc(e);
      default:
        return Hc(e);
    }
  },
  Hc = (t) => t,
  vw = (t) => {
    switch (t) {
      case "t":
        return !0;
      case "f":
        return !1;
      default:
        return t;
    }
  },
  yw = (t) => {
    if (typeof t == "string") {
      const e = parseFloat(t);
      if (!Number.isNaN(e)) return e;
    }
    return t;
  },
  ww = (t) => {
    if (typeof t == "string")
      try {
        return JSON.parse(t);
      } catch {
        return t;
      }
    return t;
  },
  xw = (t, e) => {
    if (typeof t != "string") return t;
    const n = t.length - 1,
      r = t[n];
    if (t[0] === "{" && r === "}") {
      let i;
      const a = t.slice(1, n);
      try {
        i = JSON.parse("[" + a + "]");
      } catch {
        i = a ? a.split(",") : [];
      }
      return i.map((l) => v0(e, l));
    }
    return t;
  },
  _w = (t) => (typeof t == "string" ? t.replace(" ", "T") : t),
  y0 = (t) => {
    const e = new URL(t);
    return (
      (e.protocol = e.protocol.replace(/^ws/i, "http")),
      (e.pathname = e.pathname
        .replace(/\/+$/, "")
        .replace(/\/socket\/websocket$/i, "")
        .replace(/\/socket$/i, "")
        .replace(/\/websocket$/i, "")),
      e.pathname === "" || e.pathname === "/"
        ? (e.pathname = "/api/broadcast")
        : (e.pathname = e.pathname + "/api/broadcast"),
      e.href
    );
  };
var js = (t) =>
    typeof t == "function"
      ? t
      : function () {
          return t;
        },
  bw = typeof self < "u" ? self : null,
  is = typeof window < "u" ? window : null,
  Nn = bw || is || globalThis,
  kw = "2.0.0",
  Sw = 1e4,
  Ew = 1e3,
  jw = 100,
  Cn = { connecting: 0, open: 1, closing: 2, closed: 3 },
  It = {
    closed: "closed",
    errored: "errored",
    joined: "joined",
    joining: "joining",
    leaving: "leaving",
  },
  $n = {
    close: "phx_close",
    error: "phx_error",
    join: "phx_join",
    reply: "phx_reply",
    leave: "phx_leave",
  },
  Vc = { longpoll: "longpoll", websocket: "websocket" },
  Tw = { complete: 4 },
  Wc = "base64url.bearer.phx.",
  _a = class {
    constructor(t, e, n, r) {
      ((this.channel = t),
        (this.event = e),
        (this.payload =
          n ||
          function () {
            return {};
          }),
        (this.receivedResp = null),
        (this.timeout = r),
        (this.timeoutTimer = null),
        (this.recHooks = []),
        (this.sent = !1),
        (this.ref = void 0));
    }
    resend(t) {
      ((this.timeout = t), this.reset(), this.send());
    }
    send() {
      this.hasReceived("timeout") ||
        (this.startTimeout(),
        (this.sent = !0),
        this.channel.socket.push({
          topic: this.channel.topic,
          event: this.event,
          payload: this.payload(),
          ref: this.ref,
          join_ref: this.channel.joinRef(),
        }));
    }
    receive(t, e) {
      return (
        this.hasReceived(t) && e(this.receivedResp.response),
        this.recHooks.push({ status: t, callback: e }),
        this
      );
    }
    reset() {
      (this.cancelRefEvent(),
        (this.ref = null),
        (this.refEvent = null),
        (this.receivedResp = null),
        (this.sent = !1));
    }
    destroy() {
      (this.cancelRefEvent(), this.cancelTimeout());
    }
    matchReceive({ status: t, response: e, _ref: n }) {
      this.recHooks.filter((r) => r.status === t).forEach((r) => r.callback(e));
    }
    cancelRefEvent() {
      this.refEvent && this.channel.off(this.refEvent);
    }
    cancelTimeout() {
      (clearTimeout(this.timeoutTimer), (this.timeoutTimer = null));
    }
    startTimeout() {
      (this.timeoutTimer && this.cancelTimeout(),
        (this.ref = this.channel.socket.makeRef()),
        (this.refEvent = this.channel.replyEventName(this.ref)),
        this.channel.on(this.refEvent, (t) => {
          (this.cancelRefEvent(),
            this.cancelTimeout(),
            (this.receivedResp = t),
            this.matchReceive(t));
        }),
        (this.timeoutTimer = setTimeout(() => {
          this.trigger("timeout", {});
        }, this.timeout)));
    }
    hasReceived(t) {
      return this.receivedResp && this.receivedResp.status === t;
    }
    trigger(t, e) {
      this.channel.trigger(this.refEvent, { status: t, response: e });
    }
  },
  w0 = class {
    constructor(t, e) {
      ((this.callback = t),
        (this.timerCalc = e),
        (this.timer = void 0),
        (this.tries = 0));
    }
    reset() {
      ((this.tries = 0), clearTimeout(this.timer));
    }
    scheduleTimeout() {
      (clearTimeout(this.timer),
        (this.timer = setTimeout(
          () => {
            ((this.tries = this.tries + 1), this.callback());
          },
          this.timerCalc(this.tries + 1),
        )));
    }
  },
  Nw = class {
    constructor(t, e, n) {
      ((this.state = It.closed),
        (this.topic = t),
        (this.params = js(e || {})),
        (this.socket = n),
        (this.bindings = []),
        (this.bindingRef = 0),
        (this.timeout = this.socket.timeout),
        (this.joinedOnce = !1),
        (this.joinPush = new _a(this, $n.join, this.params, this.timeout)),
        (this.pushBuffer = []),
        (this.stateChangeRefs = []),
        (this.rejoinTimer = new w0(() => {
          this.socket.isConnected() && this.rejoin();
        }, this.socket.rejoinAfterMs)),
        this.stateChangeRefs.push(
          this.socket.onError(() => this.rejoinTimer.reset()),
        ),
        this.stateChangeRefs.push(
          this.socket.onOpen(() => {
            (this.rejoinTimer.reset(), this.isErrored() && this.rejoin());
          }),
        ),
        this.joinPush.receive("ok", () => {
          ((this.state = It.joined),
            this.rejoinTimer.reset(),
            this.pushBuffer.forEach((r) => r.send()),
            (this.pushBuffer = []));
        }),
        this.joinPush.receive("error", (r) => {
          ((this.state = It.errored),
            this.socket.hasLogger() &&
              this.socket.log("channel", `error ${this.topic}`, r),
            this.socket.isConnected() && this.rejoinTimer.scheduleTimeout());
        }),
        this.onClose(() => {
          (this.rejoinTimer.reset(),
            this.socket.hasLogger() &&
              this.socket.log("channel", `close ${this.topic}`),
            (this.state = It.closed),
            this.socket.remove(this));
        }),
        this.onError((r) => {
          (this.socket.hasLogger() &&
            this.socket.log("channel", `error ${this.topic}`, r),
            this.isJoining() && this.joinPush.reset(),
            (this.state = It.errored),
            this.socket.isConnected() && this.rejoinTimer.scheduleTimeout());
        }),
        this.joinPush.receive("timeout", () => {
          (this.socket.hasLogger() &&
            this.socket.log(
              "channel",
              `timeout ${this.topic}`,
              this.joinPush.timeout,
            ),
            new _a(this, $n.leave, js({}), this.timeout).send(),
            (this.state = It.errored),
            this.joinPush.reset(),
            this.socket.isConnected() && this.rejoinTimer.scheduleTimeout());
        }),
        this.on($n.reply, (r, s) => {
          this.trigger(this.replyEventName(s), r);
        }));
    }
    join(t = this.timeout) {
      if (this.joinedOnce)
        throw new Error(
          "tried to join multiple times. 'join' can only be called a single time per channel instance",
        );
      return (
        (this.timeout = t),
        (this.joinedOnce = !0),
        this.rejoin(),
        this.joinPush
      );
    }
    teardown() {
      (this.pushBuffer.forEach((t) => t.destroy()),
        (this.pushBuffer = []),
        this.rejoinTimer.reset(),
        this.joinPush.destroy(),
        (this.state = It.closed),
        (this.bindings = []));
    }
    onClose(t) {
      this.on($n.close, t);
    }
    onError(t) {
      return this.on($n.error, (e) => t(e));
    }
    on(t, e) {
      let n = this.bindingRef++;
      return (this.bindings.push({ event: t, ref: n, callback: e }), n);
    }
    off(t, e) {
      this.bindings = this.bindings.filter(
        (n) => !(n.event === t && (typeof e > "u" || e === n.ref)),
      );
    }
    canPush() {
      return this.socket.isConnected() && this.isJoined();
    }
    push(t, e, n = this.timeout) {
      if (((e = e || {}), !this.joinedOnce))
        throw new Error(
          `tried to push '${t}' to '${this.topic}' before joining. Use channel.join() before pushing events`,
        );
      let r = new _a(
        this,
        t,
        function () {
          return e;
        },
        n,
      );
      return (
        this.canPush() ? r.send() : (r.startTimeout(), this.pushBuffer.push(r)),
        r
      );
    }
    leave(t = this.timeout) {
      (this.rejoinTimer.reset(),
        this.joinPush.cancelTimeout(),
        (this.state = It.leaving));
      let e = () => {
          (this.socket.hasLogger() &&
            this.socket.log("channel", `leave ${this.topic}`),
            this.trigger($n.close, "leave"));
        },
        n = new _a(this, $n.leave, js({}), t);
      return (
        n.receive("ok", () => e()).receive("timeout", () => e()),
        n.send(),
        this.canPush() || n.trigger("ok", {}),
        n
      );
    }
    onMessage(t, e, n) {
      return e;
    }
    filterBindings(t, e, n) {
      return !0;
    }
    isMember(t, e, n, r) {
      return this.topic !== t
        ? !1
        : r && r !== this.joinRef()
          ? (this.socket.hasLogger() &&
              this.socket.log("channel", "dropping outdated message", {
                topic: t,
                event: e,
                payload: n,
                joinRef: r,
              }),
            !1)
          : !0;
    }
    joinRef() {
      return this.joinPush.ref;
    }
    rejoin(t = this.timeout) {
      this.isLeaving() ||
        (this.socket.leaveOpenTopic(this.topic),
        (this.state = It.joining),
        this.joinPush.resend(t));
    }
    trigger(t, e, n, r) {
      let s = this.onMessage(t, e, n, r);
      if (e && !s)
        throw new Error(
          "channel onMessage callbacks must return the payload, modified or unmodified",
        );
      let i = this.bindings.filter(
        (a) => a.event === t && this.filterBindings(a, e, n),
      );
      for (let a = 0; a < i.length; a++)
        i[a].callback(s, n, r || this.joinRef());
    }
    replyEventName(t) {
      return `chan_reply_${t}`;
    }
    isClosed() {
      return this.state === It.closed;
    }
    isErrored() {
      return this.state === It.errored;
    }
    isJoined() {
      return this.state === It.joined;
    }
    isJoining() {
      return this.state === It.joining;
    }
    isLeaving() {
      return this.state === It.leaving;
    }
  },
  Eo = class {
    static request(t, e, n, r, s, i, a) {
      if (Nn.XDomainRequest) {
        let l = new Nn.XDomainRequest();
        return this.xdomainRequest(l, t, e, r, s, i, a);
      } else if (Nn.XMLHttpRequest) {
        let l = new Nn.XMLHttpRequest();
        return this.xhrRequest(l, t, e, n, r, s, i, a);
      } else {
        if (Nn.fetch && Nn.AbortController)
          return this.fetchRequest(t, e, n, r, s, i, a);
        throw new Error("No suitable XMLHttpRequest implementation found");
      }
    }
    static fetchRequest(t, e, n, r, s, i, a) {
      let l = { method: t, headers: n, body: r },
        c = null;
      return (
        s &&
          ((c = new AbortController()),
          setTimeout(() => c.abort(), s),
          (l.signal = c.signal)),
        Nn.fetch(e, l)
          .then((u) => u.text())
          .then((u) => this.parseJSON(u))
          .then((u) => a && a(u))
          .catch((u) => {
            u.name === "AbortError" && i ? i() : a && a(null);
          }),
        c
      );
    }
    static xdomainRequest(t, e, n, r, s, i, a) {
      return (
        (t.timeout = s),
        t.open(e, n),
        (t.onload = () => {
          let l = this.parseJSON(t.responseText);
          a && a(l);
        }),
        i && (t.ontimeout = i),
        (t.onprogress = () => {}),
        t.send(r),
        t
      );
    }
    static xhrRequest(t, e, n, r, s, i, a, l) {
      (t.open(e, n, !0), (t.timeout = i));
      for (let [c, u] of Object.entries(r)) t.setRequestHeader(c, u);
      return (
        (t.onerror = () => l && l(null)),
        (t.onreadystatechange = () => {
          if (t.readyState === Tw.complete && l) {
            let c = this.parseJSON(t.responseText);
            l(c);
          }
        }),
        a && (t.ontimeout = a),
        t.send(s),
        t
      );
    }
    static parseJSON(t) {
      if (!t || t === "") return null;
      try {
        return JSON.parse(t);
      } catch {
        return (
          console && console.log("failed to parse JSON response", t),
          null
        );
      }
    }
    static serialize(t, e) {
      let n = [];
      for (var r in t) {
        if (!Object.prototype.hasOwnProperty.call(t, r)) continue;
        let s = e ? `${e}[${r}]` : r,
          i = t[r];
        typeof i == "object"
          ? n.push(this.serialize(i, s))
          : n.push(encodeURIComponent(s) + "=" + encodeURIComponent(i));
      }
      return n.join("&");
    }
    static appendParams(t, e) {
      if (Object.keys(e).length === 0) return t;
      let n = t.match(/\?/) ? "&" : "?";
      return `${t}${n}${this.serialize(e)}`;
    }
  },
  Cw = (t) => {
    let e = "",
      n = new Uint8Array(t),
      r = n.byteLength;
    for (let s = 0; s < r; s++) e += String.fromCharCode(n[s]);
    return btoa(e);
  },
  Yr = class {
    constructor(t, e) {
      (e &&
        e.length === 2 &&
        e[1].startsWith(Wc) &&
        (this.authToken = atob(e[1].slice(Wc.length))),
        (this.endPoint = null),
        (this.token = null),
        (this.skipHeartbeat = !0),
        (this.reqs = new Set()),
        (this.awaitingBatchAck = !1),
        (this.currentBatch = null),
        (this.currentBatchTimer = null),
        (this.batchBuffer = []),
        (this.onopen = function () {}),
        (this.onerror = function () {}),
        (this.onmessage = function () {}),
        (this.onclose = function () {}),
        (this.pollEndpoint = this.normalizeEndpoint(t)),
        (this.readyState = Cn.connecting),
        setTimeout(() => this.poll(), 0));
    }
    normalizeEndpoint(t) {
      return t
        .replace("ws://", "http://")
        .replace("wss://", "https://")
        .replace(new RegExp("(.*)/" + Vc.websocket), "$1/" + Vc.longpoll);
    }
    endpointURL() {
      return Eo.appendParams(this.pollEndpoint, { token: this.token });
    }
    closeAndRetry(t, e, n) {
      (this.close(t, e, n), (this.readyState = Cn.connecting));
    }
    ontimeout() {
      (this.onerror("timeout"), this.closeAndRetry(1005, "timeout", !1));
    }
    isActive() {
      return this.readyState === Cn.open || this.readyState === Cn.connecting;
    }
    poll() {
      const t = { Accept: "application/json" };
      (this.authToken && (t["X-Phoenix-AuthToken"] = this.authToken),
        this.ajax(
          "GET",
          t,
          null,
          () => this.ontimeout(),
          (e) => {
            if (e) {
              var { status: n, token: r, messages: s } = e;
              if (n === 410 && this.token !== null) {
                (this.onerror(410),
                  this.closeAndRetry(3410, "session_gone", !1));
                return;
              }
              this.token = r;
            } else n = 0;
            switch (n) {
              case 200:
                (s.forEach((i) => {
                  setTimeout(() => this.onmessage({ data: i }), 0);
                }),
                  this.poll());
                break;
              case 204:
                this.poll();
                break;
              case 410:
                ((this.readyState = Cn.open), this.onopen({}), this.poll());
                break;
              case 403:
                (this.onerror(403), this.close(1008, "forbidden", !1));
                break;
              case 0:
              case 500:
                (this.onerror(500),
                  this.closeAndRetry(1011, "internal server error", 500));
                break;
              default:
                throw new Error(`unhandled poll status ${n}`);
            }
          },
        ));
    }
    send(t) {
      (typeof t != "string" && (t = Cw(t)),
        this.currentBatch
          ? this.currentBatch.push(t)
          : this.awaitingBatchAck
            ? this.batchBuffer.push(t)
            : ((this.currentBatch = [t]),
              (this.currentBatchTimer = setTimeout(() => {
                (this.batchSend(this.currentBatch), (this.currentBatch = null));
              }, 0))));
    }
    batchSend(t, e = 0) {
      this.awaitingBatchAck = !0;
      const n = e + jw,
        r = t.slice(e, n);
      this.ajax(
        "POST",
        { "Content-Type": "application/x-ndjson" },
        r.join(`
`),
        () => this.onerror("timeout"),
        (s) => {
          !s || s.status !== 200
            ? ((this.awaitingBatchAck = !1),
              this.onerror(s && s.status),
              this.closeAndRetry(1011, "internal server error", !1))
            : n < t.length
              ? this.batchSend(t, n)
              : this.batchBuffer.length > 0
                ? (this.batchSend(this.batchBuffer), (this.batchBuffer = []))
                : (this.awaitingBatchAck = !1);
        },
      );
    }
    close(t, e, n) {
      for (let s of this.reqs) s.abort();
      this.readyState = Cn.closed;
      let r = Object.assign(
        { code: 1e3, reason: void 0, wasClean: !0 },
        { code: t, reason: e, wasClean: n },
      );
      ((this.batchBuffer = []),
        clearTimeout(this.currentBatchTimer),
        (this.currentBatchTimer = null),
        typeof CloseEvent < "u"
          ? this.onclose(new CloseEvent("close", r))
          : this.onclose(r));
    }
    ajax(t, e, n, r, s) {
      let i,
        a = () => {
          (this.reqs.delete(i), r());
        };
      ((i = Eo.request(t, this.endpointURL(), e, n, this.timeout, a, (l) => {
        (this.reqs.delete(i), this.isActive() && s(l));
      })),
        this.reqs.add(i));
    }
  },
  Rw = class ci {
    constructor(e, n = {}) {
      let r = n.events || { state: "presence_state", diff: "presence_diff" };
      ((this.state = Object.create(null)),
        (this.pendingDiffs = []),
        (this.channel = e),
        (this.joinRef = null),
        (this.caller = {
          onJoin: function () {},
          onLeave: function () {},
          onSync: function () {},
        }),
        this.channel.on(r.state, (s) => {
          let { onJoin: i, onLeave: a, onSync: l } = this.caller;
          ((this.joinRef = this.channel.joinRef()),
            (this.state = ci.syncState(this.state, s, i, a)),
            this.pendingDiffs.forEach((c) => {
              this.state = ci.syncDiff(this.state, c, i, a);
            }),
            (this.pendingDiffs = []),
            l());
        }),
        this.channel.on(r.diff, (s) => {
          let { onJoin: i, onLeave: a, onSync: l } = this.caller;
          this.inPendingSyncState()
            ? this.pendingDiffs.push(s)
            : ((this.state = ci.syncDiff(this.state, s, i, a)), l());
        }));
    }
    onJoin(e) {
      this.caller.onJoin = e;
    }
    onLeave(e) {
      this.caller.onLeave = e;
    }
    onSync(e) {
      this.caller.onSync = e;
    }
    list(e) {
      return ci.list(this.state, e);
    }
    inPendingSyncState() {
      return !this.joinRef || this.joinRef !== this.channel.joinRef();
    }
    static syncState(e, n, r, s) {
      let i = this.toNullProtoObj(this.clone(e));
      n = this.toNullProtoObj(n);
      let a = Object.create(null),
        l = Object.create(null);
      return (
        this.map(i, (c, u) => {
          n[c] || (l[c] = u);
        }),
        this.map(n, (c, u) => {
          let d = i[c];
          if (d) {
            let f = u.metas.map((x) => x.phx_ref),
              h = d.metas.map((x) => x.phx_ref),
              p = u.metas.filter((x) => h.indexOf(x.phx_ref) < 0),
              v = d.metas.filter((x) => f.indexOf(x.phx_ref) < 0);
            (p.length > 0 && ((a[c] = u), (a[c].metas = p)),
              v.length > 0 && ((l[c] = this.clone(d)), (l[c].metas = v)));
          } else a[c] = u;
        }),
        this.syncDiff(i, { joins: a, leaves: l }, r, s)
      );
    }
    static syncDiff(e, n, r, s) {
      e = this.toNullProtoObj(e);
      let { joins: i, leaves: a } = this.clone(n);
      return (
        r || (r = function () {}),
        s || (s = function () {}),
        this.map(i, (l, c) => {
          let u = e[l];
          if (((e[l] = this.clone(c)), u)) {
            let d = e[l].metas.map((h) => h.phx_ref),
              f = u.metas.filter((h) => d.indexOf(h.phx_ref) < 0);
            e[l].metas.unshift(...f);
          }
          r(l, u, c);
        }),
        this.map(a, (l, c) => {
          let u = e[l];
          if (!u) return;
          let d = c.metas.map((f) => f.phx_ref);
          ((u.metas = u.metas.filter((f) => d.indexOf(f.phx_ref) < 0)),
            s(l, u, c),
            u.metas.length === 0 && delete e[l]);
        }),
        e
      );
    }
    static list(e, n) {
      return (
        n ||
          (n = function (r, s) {
            return s;
          }),
        this.map(e, (r, s) => n(r, s))
      );
    }
    static map(e, n) {
      return Object.getOwnPropertyNames(e).map((r) => n(r, e[r]));
    }
    static toNullProtoObj(e) {
      if (Object.getPrototypeOf(e) === null) return e;
      let n = Object.create(null);
      return (
        Object.getOwnPropertyNames(e).forEach((r) => {
          n[r] = e[r];
        }),
        n
      );
    }
    static clone(e) {
      return JSON.parse(JSON.stringify(e));
    }
  },
  ba = {
    HEADER_LENGTH: 1,
    META_LENGTH: 4,
    KINDS: { push: 0, reply: 1, broadcast: 2 },
    encode(t, e) {
      if (t.payload.constructor === ArrayBuffer) return e(this.binaryEncode(t));
      {
        let n = [t.join_ref, t.ref, t.topic, t.event, t.payload];
        return e(JSON.stringify(n));
      }
    },
    decode(t, e) {
      if (t.constructor === ArrayBuffer) return e(this.binaryDecode(t));
      {
        let [n, r, s, i, a] = JSON.parse(t);
        return e({ join_ref: n, ref: r, topic: s, event: i, payload: a });
      }
    },
    binaryEncode(t) {
      let { join_ref: e, ref: n, event: r, topic: s, payload: i } = t,
        a = new TextEncoder(),
        l = a.encode(e),
        c = a.encode(n),
        u = a.encode(s),
        d = a.encode(r);
      (this.assertFieldSize(l.byteLength, "join_ref"),
        this.assertFieldSize(c.byteLength, "ref"),
        this.assertFieldSize(u.byteLength, "topic"),
        this.assertFieldSize(d.byteLength, "event"));
      let f =
          this.META_LENGTH +
          l.byteLength +
          c.byteLength +
          u.byteLength +
          d.byteLength,
        h = new ArrayBuffer(this.HEADER_LENGTH + f),
        p = new Uint8Array(h),
        v = new DataView(h),
        x = 0;
      (v.setUint8(x++, this.KINDS.push),
        v.setUint8(x++, l.byteLength),
        v.setUint8(x++, c.byteLength),
        v.setUint8(x++, u.byteLength),
        v.setUint8(x++, d.byteLength),
        p.set(l, x),
        (x += l.byteLength),
        p.set(c, x),
        (x += c.byteLength),
        p.set(u, x),
        (x += u.byteLength),
        p.set(d, x),
        (x += d.byteLength));
      var _ = new Uint8Array(h.byteLength + i.byteLength);
      return (_.set(p, 0), _.set(new Uint8Array(i), h.byteLength), _.buffer);
    },
    assertFieldSize(t, e) {
      if (t > 255)
        throw new Error(
          `unable to convert ${e} to binary: must be less than or equal to 255 bytes, but is ${t} bytes`,
        );
    },
    binaryDecode(t) {
      let e = new DataView(t),
        n = e.getUint8(0),
        r = new TextDecoder();
      switch (n) {
        case this.KINDS.push:
          return this.decodePush(t, e, r);
        case this.KINDS.reply:
          return this.decodeReply(t, e, r);
        case this.KINDS.broadcast:
          return this.decodeBroadcast(t, e, r);
      }
    },
    decodePush(t, e, n) {
      let r = e.getUint8(1),
        s = e.getUint8(2),
        i = e.getUint8(3),
        a = this.HEADER_LENGTH + this.META_LENGTH - 1,
        l = n.decode(t.slice(a, a + r));
      a = a + r;
      let c = n.decode(t.slice(a, a + s));
      a = a + s;
      let u = n.decode(t.slice(a, a + i));
      a = a + i;
      let d = t.slice(a, t.byteLength);
      return { join_ref: l, ref: null, topic: c, event: u, payload: d };
    },
    decodeReply(t, e, n) {
      let r = e.getUint8(1),
        s = e.getUint8(2),
        i = e.getUint8(3),
        a = e.getUint8(4),
        l = this.HEADER_LENGTH + this.META_LENGTH,
        c = n.decode(t.slice(l, l + r));
      l = l + r;
      let u = n.decode(t.slice(l, l + s));
      l = l + s;
      let d = n.decode(t.slice(l, l + i));
      l = l + i;
      let f = n.decode(t.slice(l, l + a));
      l = l + a;
      let h = t.slice(l, t.byteLength),
        p = { status: f, response: h };
      return { join_ref: c, ref: u, topic: d, event: $n.reply, payload: p };
    },
    decodeBroadcast(t, e, n) {
      let r = e.getUint8(1),
        s = e.getUint8(2),
        i = this.HEADER_LENGTH + 2,
        a = n.decode(t.slice(i, i + r));
      i = i + r;
      let l = n.decode(t.slice(i, i + s));
      i = i + s;
      let c = t.slice(i, t.byteLength);
      return { join_ref: null, ref: null, topic: a, event: l, payload: c };
    },
  },
  Aw = class {
    constructor(t, e = {}) {
      ((this.stateChangeCallbacks = {
        open: [],
        close: [],
        error: [],
        message: [],
      }),
        (this.channels = []),
        (this.sendBuffer = []),
        (this.ref = 0),
        (this.fallbackRef = null),
        (this.timeout = e.timeout || Sw),
        (this.transport = e.transport || Nn.WebSocket || Yr),
        (this.conn = void 0),
        (this.primaryPassedHealthCheck = !1),
        (this.longPollFallbackMs = e.longPollFallbackMs),
        (this.fallbackTimer = null));
      let n = null;
      try {
        n = Nn && Nn.sessionStorage;
      } catch {}
      ((this.sessionStore = e.sessionStorage || n),
        (this.establishedConnections = 0),
        (this.defaultEncoder = ba.encode.bind(ba)),
        (this.defaultDecoder = ba.decode.bind(ba)),
        (this.closeWasClean = !0),
        (this.disconnecting = !1),
        (this.binaryType = e.binaryType || "arraybuffer"),
        (this.connectClock = 1),
        (this.pageHidden = !1),
        (this.encode = void 0),
        (this.decode = void 0),
        this.transport !== Yr
          ? ((this.encode = e.encode || this.defaultEncoder),
            (this.decode = e.decode || this.defaultDecoder))
          : ((this.encode = this.defaultEncoder),
            (this.decode = this.defaultDecoder)));
      let r = null;
      (is &&
        is.addEventListener &&
        (is.addEventListener("pagehide", (s) => {
          this.conn && (this.disconnect(), (r = this.connectClock));
        }),
        is.addEventListener("pageshow", (s) => {
          r === this.connectClock && ((r = null), this.connect());
        }),
        is.addEventListener("visibilitychange", () => {
          document.visibilityState === "hidden"
            ? (this.pageHidden = !0)
            : ((this.pageHidden = !1),
              !this.isConnected() &&
                !this.closeWasClean &&
                this.teardown(() => this.connect()));
        })),
        (this.heartbeatIntervalMs = e.heartbeatIntervalMs || 3e4),
        (this.autoSendHeartbeat = e.autoSendHeartbeat ?? !0),
        (this.heartbeatCallback = e.heartbeatCallback ?? (() => {})),
        (this.rejoinAfterMs = (s) =>
          e.rejoinAfterMs ? e.rejoinAfterMs(s) : [1e3, 2e3, 5e3][s - 1] || 1e4),
        (this.reconnectAfterMs = (s) =>
          e.reconnectAfterMs
            ? e.reconnectAfterMs(s)
            : [10, 50, 100, 150, 200, 250, 500, 1e3, 2e3][s - 1] || 5e3),
        (this.logger = e.logger || null),
        !this.logger &&
          e.debug &&
          (this.logger = (s, i, a) => {
            console.log(`${s}: ${i}`, a);
          }),
        (this.longpollerTimeout = e.longpollerTimeout || 2e4),
        (this.params = js(e.params || {})),
        (this.endPoint = `${t}/${Vc.websocket}`),
        (this.vsn = e.vsn || kw),
        (this.heartbeatTimeoutTimer = null),
        (this.heartbeatTimer = null),
        (this.heartbeatSentAt = null),
        (this.pendingHeartbeatRef = null),
        (this.reconnectTimer = new w0(() => {
          if (this.pageHidden) {
            (this.log("Not reconnecting as page is hidden!"), this.teardown());
            return;
          }
          this.teardown(async () => {
            (e.beforeReconnect && (await e.beforeReconnect()), this.connect());
          });
        }, this.reconnectAfterMs)),
        (this.authToken = e.authToken && js(e.authToken)));
    }
    getLongPollTransport() {
      return Yr;
    }
    replaceTransport(t) {
      (this.connectClock++,
        (this.closeWasClean = !0),
        clearTimeout(this.fallbackTimer),
        this.reconnectTimer.reset(),
        this.conn && (this.conn.close(), (this.conn = null)),
        (this.transport = t));
    }
    protocol() {
      return location.protocol.match(/^https/) ? "wss" : "ws";
    }
    endPointURL() {
      let t = Eo.appendParams(Eo.appendParams(this.endPoint, this.params()), {
        vsn: this.vsn,
      });
      return t.charAt(0) !== "/"
        ? t
        : t.charAt(1) === "/"
          ? `${this.protocol()}:${t}`
          : `${this.protocol()}://${location.host}${t}`;
    }
    disconnect(t, e, n) {
      (this.connectClock++,
        (this.disconnecting = !0),
        (this.closeWasClean = !0),
        clearTimeout(this.fallbackTimer),
        this.reconnectTimer.reset(),
        this.teardown(
          () => {
            ((this.disconnecting = !1), t && t());
          },
          e,
          n,
        ));
    }
    connect(t) {
      (t &&
        (console &&
          console.log(
            "passing params to connect is deprecated. Instead pass :params to the Socket constructor",
          ),
        (this.params = js(t))),
        !(this.conn && !this.disconnecting) &&
          (this.longPollFallbackMs && this.transport !== Yr
            ? this.connectWithFallback(Yr, this.longPollFallbackMs)
            : this.transportConnect()));
    }
    log(t, e, n) {
      this.logger && this.logger(t, e, n);
    }
    hasLogger() {
      return this.logger !== null;
    }
    onOpen(t) {
      let e = this.makeRef();
      return (this.stateChangeCallbacks.open.push([e, t]), e);
    }
    onClose(t) {
      let e = this.makeRef();
      return (this.stateChangeCallbacks.close.push([e, t]), e);
    }
    onError(t) {
      let e = this.makeRef();
      return (this.stateChangeCallbacks.error.push([e, t]), e);
    }
    onMessage(t) {
      let e = this.makeRef();
      return (this.stateChangeCallbacks.message.push([e, t]), e);
    }
    onHeartbeat(t) {
      this.heartbeatCallback = t;
    }
    ping(t) {
      if (!this.isConnected()) return !1;
      let e = this.makeRef(),
        n = Date.now();
      this.push({ topic: "phoenix", event: "heartbeat", payload: {}, ref: e });
      let r = this.onMessage((s) => {
        s.ref === e && (this.off([r]), t(Date.now() - n));
      });
      return !0;
    }
    transportName(t) {
      switch (t) {
        case Yr:
          return "LongPoll";
        default:
          return t.name;
      }
    }
    transportConnect() {
      (this.connectClock++, (this.closeWasClean = !1));
      let t;
      (this.authToken &&
        (t = ["phoenix", `${Wc}${btoa(this.authToken()).replace(/=/g, "")}`]),
        (this.conn = new this.transport(this.endPointURL(), t)),
        (this.conn.binaryType = this.binaryType),
        (this.conn.timeout = this.longpollerTimeout),
        (this.conn.onopen = () => this.onConnOpen()),
        (this.conn.onerror = (e) => this.onConnError(e)),
        (this.conn.onmessage = (e) => this.onConnMessage(e)),
        (this.conn.onclose = (e) => this.onConnClose(e)));
    }
    getSession(t) {
      return this.sessionStore && this.sessionStore.getItem(t);
    }
    storeSession(t, e) {
      this.sessionStore && this.sessionStore.setItem(t, e);
    }
    connectWithFallback(t, e = 2500) {
      clearTimeout(this.fallbackTimer);
      let n = !1,
        r = !0,
        s,
        i,
        a = this.transportName(t),
        l = (c) => {
          (this.log("transport", `falling back to ${a}...`, c),
            this.off([s, i]),
            (r = !1),
            this.replaceTransport(t),
            this.transportConnect());
        };
      if (this.getSession(`phx:fallback:${a}`)) return l("memorized");
      ((this.fallbackTimer = setTimeout(l, e)),
        (i = this.onError((c) => {
          (this.log("transport", "error", c),
            r && !n && (clearTimeout(this.fallbackTimer), l(c)));
        })),
        this.fallbackRef && this.off([this.fallbackRef]),
        (this.fallbackRef = this.onOpen(() => {
          if (((n = !0), !r)) {
            let c = this.transportName(t);
            return (
              this.primaryPassedHealthCheck ||
                this.storeSession(`phx:fallback:${c}`, "true"),
              this.log("transport", `established ${c} fallback`)
            );
          }
          (clearTimeout(this.fallbackTimer),
            (this.fallbackTimer = setTimeout(l, e)),
            this.ping((c) => {
              (this.log("transport", "connected to primary after", c),
                (this.primaryPassedHealthCheck = !0),
                clearTimeout(this.fallbackTimer));
            }));
        })),
        this.transportConnect());
    }
    clearHeartbeats() {
      (clearTimeout(this.heartbeatTimer),
        clearTimeout(this.heartbeatTimeoutTimer));
    }
    onConnOpen() {
      (this.hasLogger() &&
        this.log("transport", `connected to ${this.endPointURL()}`),
        (this.closeWasClean = !1),
        (this.disconnecting = !1),
        this.establishedConnections++,
        this.flushSendBuffer(),
        this.reconnectTimer.reset(),
        this.autoSendHeartbeat && this.resetHeartbeat(),
        this.triggerStateCallbacks("open"));
    }
    heartbeatTimeout() {
      if (this.pendingHeartbeatRef) {
        ((this.pendingHeartbeatRef = null),
          (this.heartbeatSentAt = null),
          this.hasLogger() &&
            this.log(
              "transport",
              "heartbeat timeout. Attempting to re-establish connection",
            ));
        try {
          this.heartbeatCallback("timeout");
        } catch (t) {
          this.log("error", "error in heartbeat callback", t);
        }
        (this.triggerChanError(new Error("heartbeat timeout")),
          (this.closeWasClean = !1),
          this.teardown(
            () => this.reconnectTimer.scheduleTimeout(),
            Ew,
            "heartbeat timeout",
          ));
      }
    }
    resetHeartbeat() {
      (this.conn && this.conn.skipHeartbeat) ||
        ((this.pendingHeartbeatRef = null),
        this.clearHeartbeats(),
        (this.heartbeatTimer = setTimeout(
          () => this.sendHeartbeat(),
          this.heartbeatIntervalMs,
        )));
    }
    teardown(t, e, n) {
      if (!this.conn) return t && t();
      const r = this.conn;
      this.waitForBufferDone(r, () => {
        (e ? r.close(e, n || "") : r.close(),
          this.waitForSocketClosed(r, () => {
            (this.conn === r &&
              ((this.conn.onopen = function () {}),
              (this.conn.onerror = function () {}),
              (this.conn.onmessage = function () {}),
              (this.conn.onclose = function () {}),
              (this.conn = null)),
              t && t());
          }));
      });
    }
    waitForBufferDone(t, e, n = 1) {
      if (n === 5 || !t.bufferedAmount) {
        e();
        return;
      }
      setTimeout(() => {
        this.waitForBufferDone(t, e, n + 1);
      }, 150 * n);
    }
    waitForSocketClosed(t, e, n = 1) {
      if (n === 5 || t.readyState === Cn.closed) {
        e();
        return;
      }
      setTimeout(() => {
        this.waitForSocketClosed(t, e, n + 1);
      }, 150 * n);
    }
    onConnClose(t) {
      (this.conn && (this.conn.onclose = () => {}),
        this.hasLogger() && this.log("transport", "close", t),
        this.triggerChanError(t),
        this.clearHeartbeats(),
        this.closeWasClean || this.reconnectTimer.scheduleTimeout(),
        this.triggerStateCallbacks("close", t));
    }
    onConnError(t) {
      this.hasLogger() && this.log("transport", "error", t);
      let e = this.transport,
        n = this.establishedConnections;
      (this.triggerStateCallbacks("error", t, e, n),
        (e === this.transport || n > 0) && this.triggerChanError(t));
    }
    triggerChanError(t) {
      this.channels.forEach((e) => {
        e.isErrored() ||
          e.isLeaving() ||
          e.isClosed() ||
          e.trigger($n.error, t);
      });
    }
    connectionState() {
      switch (this.conn && this.conn.readyState) {
        case Cn.connecting:
          return "connecting";
        case Cn.open:
          return "open";
        case Cn.closing:
          return "closing";
        default:
          return "closed";
      }
    }
    isConnected() {
      return this.connectionState() === "open";
    }
    remove(t) {
      (this.off(t.stateChangeRefs),
        (this.channels = this.channels.filter((e) => e !== t)));
    }
    off(t) {
      for (let e in this.stateChangeCallbacks)
        this.stateChangeCallbacks[e] = this.stateChangeCallbacks[e].filter(
          ([n]) => t.indexOf(n) === -1,
        );
    }
    channel(t, e = {}) {
      let n = new Nw(t, e, this);
      return (this.channels.push(n), n);
    }
    push(t) {
      if (this.hasLogger()) {
        let { topic: e, event: n, payload: r, ref: s, join_ref: i } = t;
        this.log("push", `${e} ${n} (${i}, ${s})`, r);
      }
      this.isConnected()
        ? this.encode(t, (e) => this.conn.send(e))
        : this.sendBuffer.push(() => this.encode(t, (e) => this.conn.send(e)));
    }
    makeRef() {
      let t = this.ref + 1;
      return (
        t === this.ref ? (this.ref = 0) : (this.ref = t),
        this.ref.toString()
      );
    }
    sendHeartbeat() {
      if (!this.isConnected()) {
        try {
          this.heartbeatCallback("disconnected");
        } catch (t) {
          this.log("error", "error in heartbeat callback", t);
        }
        return;
      }
      if (this.pendingHeartbeatRef) {
        this.heartbeatTimeout();
        return;
      }
      ((this.pendingHeartbeatRef = this.makeRef()),
        (this.heartbeatSentAt = Date.now()),
        this.push({
          topic: "phoenix",
          event: "heartbeat",
          payload: {},
          ref: this.pendingHeartbeatRef,
        }));
      try {
        this.heartbeatCallback("sent");
      } catch (t) {
        this.log("error", "error in heartbeat callback", t);
      }
      this.heartbeatTimeoutTimer = setTimeout(
        () => this.heartbeatTimeout(),
        this.heartbeatIntervalMs,
      );
    }
    flushSendBuffer() {
      this.isConnected() &&
        this.sendBuffer.length > 0 &&
        (this.sendBuffer.forEach((t) => t()), (this.sendBuffer = []));
    }
    onConnMessage(t) {
      this.decode(t.data, (e) => {
        let { topic: n, event: r, payload: s, ref: i, join_ref: a } = e;
        if (i && i === this.pendingHeartbeatRef) {
          const l = this.heartbeatSentAt
            ? Date.now() - this.heartbeatSentAt
            : void 0;
          this.clearHeartbeats();
          try {
            this.heartbeatCallback(s.status === "ok" ? "ok" : "error", l);
          } catch (c) {
            this.log("error", "error in heartbeat callback", c);
          }
          ((this.pendingHeartbeatRef = null),
            (this.heartbeatSentAt = null),
            this.autoSendHeartbeat &&
              (this.heartbeatTimer = setTimeout(
                () => this.sendHeartbeat(),
                this.heartbeatIntervalMs,
              )));
        }
        this.hasLogger() &&
          this.log(
            "receive",
            `${s.status || ""} ${n} ${r} ${(i && "(" + i + ")") || ""}`.trim(),
            s,
          );
        for (let l = 0; l < this.channels.length; l++) {
          const c = this.channels[l];
          c.isMember(n, r, s, a) && c.trigger(r, s, i, a);
        }
        this.triggerStateCallbacks("message", e);
      });
    }
    triggerStateCallbacks(t, ...e) {
      try {
        this.stateChangeCallbacks[t].forEach(([n, r]) => {
          try {
            r(...e);
          } catch (s) {
            this.log("error", `error in ${t} callback`, s);
          }
        });
      } catch (n) {
        this.log("error", `error triggering ${t} callbacks`, n);
      }
    }
    leaveOpenTopic(t) {
      let e = this.channels.find(
        (n) => n.topic === t && (n.isJoined() || n.isJoining()),
      );
      e &&
        (this.hasLogger() &&
          this.log("transport", `leaving duplicate topic "${t}"`),
        e.leave());
    }
  };
class bi {
  constructor(e, n) {
    const r = Ow(n);
    ((this.presence = new Rw(e.getChannel(), r)),
      this.presence.onJoin((s, i, a) => {
        const l = bi.onJoinPayload(s, i, a);
        e.getChannel().trigger("presence", l);
      }),
      this.presence.onLeave((s, i, a) => {
        const l = bi.onLeavePayload(s, i, a);
        e.getChannel().trigger("presence", l);
      }),
      this.presence.onSync(() => {
        e.getChannel().trigger("presence", { event: "sync" });
      }));
  }
  get state() {
    return bi.transformState(this.presence.state);
  }
  static transformState(e) {
    return (
      (e = Pw(e)),
      Object.getOwnPropertyNames(e).reduce((n, r) => {
        const s = e[r];
        return ((n[r] = Ga(s)), n);
      }, {})
    );
  }
  static onJoinPayload(e, n, r) {
    const s = _h(n),
      i = Ga(r);
    return { event: "join", key: e, currentPresences: s, newPresences: i };
  }
  static onLeavePayload(e, n, r) {
    const s = _h(n),
      i = Ga(r);
    return { event: "leave", key: e, currentPresences: s, leftPresences: i };
  }
}
function Ga(t) {
  return t.metas.map((e) => {
    const n = Object.getOwnPropertyDescriptors(e),
      r = Object.defineProperties({}, n);
    return (
      (r.presence_ref = r.phx_ref),
      delete r.phx_ref,
      delete r.phx_ref_prev,
      r
    );
  });
}
function Pw(t) {
  return JSON.parse(JSON.stringify(t));
}
function Ow(t) {
  return (t == null ? void 0 : t.events) && { events: t.events };
}
function _h(t) {
  return t != null && t.metas ? Ga(t) : [];
}
var bh;
(function (t) {
  ((t.SYNC = "sync"), (t.JOIN = "join"), (t.LEAVE = "leave"));
})(bh || (bh = {}));
class Iw {
  get state() {
    return this.presenceAdapter.state;
  }
  constructor(e, n) {
    ((this.channel = e),
      (this.presenceAdapter = new bi(this.channel.channelAdapter, n)));
  }
}
function Lw(t) {
  if (t instanceof Error) return t;
  if (typeof t == "string") return new Error(t);
  if (t && typeof t == "object") {
    const e = t;
    if (typeof e.code == "number") {
      const n = typeof e.reason == "string" && e.reason ? ` (${e.reason})` : "";
      return new Error(`socket closed: ${e.code}${n}`, { cause: t });
    }
    return new Error("channel error: transport failure", { cause: t });
  }
  return new Error("channel error: connection lost");
}
class Mw {
  constructor(e, n, r) {
    const s = $w(r);
    ((this.channel = e.getSocket().channel(n, s)), (this.socket = e));
  }
  get state() {
    return this.channel.state;
  }
  set state(e) {
    this.channel.state = e;
  }
  get joinedOnce() {
    return this.channel.joinedOnce;
  }
  get joinPush() {
    return this.channel.joinPush;
  }
  get rejoinTimer() {
    return this.channel.rejoinTimer;
  }
  on(e, n) {
    return this.channel.on(e, n);
  }
  off(e, n) {
    this.channel.off(e, n);
  }
  subscribe(e) {
    return this.channel.join(e);
  }
  unsubscribe(e) {
    return this.channel.leave(e);
  }
  teardown() {
    this.channel.teardown();
  }
  onClose(e) {
    this.channel.onClose(e);
  }
  onError(e) {
    return this.channel.onError(e);
  }
  push(e, n, r) {
    let s;
    try {
      s = this.channel.push(e, n, r);
    } catch {
      throw new Error(
        `tried to push '${e}' to '${this.channel.topic}' before joining. Use channel.subscribe() before pushing events`,
      );
    }
    if (this.channel.pushBuffer.length > pw) {
      const i = this.channel.pushBuffer.shift();
      (i.cancelTimeout(),
        this.socket.log(
          "channel",
          `discarded push due to buffer overflow: ${i.event}`,
          i.payload(),
        ));
    }
    return s;
  }
  updateJoinPayload(e) {
    const n = this.channel.joinPush.payload();
    this.channel.joinPush.payload = () =>
      Object.assign(Object.assign({}, n), e);
  }
  canPush() {
    return this.socket.isConnected() && this.state === sr.joined;
  }
  isJoined() {
    return this.state === sr.joined;
  }
  isJoining() {
    return this.state === sr.joining;
  }
  isClosed() {
    return this.state === sr.closed;
  }
  isLeaving() {
    return this.state === sr.leaving;
  }
  updateFilterBindings(e) {
    this.channel.filterBindings = e;
  }
  updatePayloadTransform(e) {
    this.channel.onMessage = e;
  }
  getChannel() {
    return this.channel;
  }
}
function $w(t) {
  return {
    config: Object.assign(
      {
        broadcast: { ack: !1, self: !1 },
        presence: { key: "", enabled: !1 },
        private: !1,
      },
      t.config,
    ),
  };
}
const Dw = /[,()"\\]/,
  Uw = (t) => Dw.test(t) || t !== t.trim(),
  Bw = (t) => `"${t.replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"`,
  kh = (t) => {
    const e = t === null ? "null" : String(t);
    return Uw(e) ? Bw(e) : e;
  },
  zw = (t) => (t === null ? "null" : String(t)),
  Fw = (t, e) => {
    if (t === "in") {
      const n = Array.isArray(e) ? e : [e];
      if (n.length === 0)
        throw new Error("Realtime `in` filter requires at least one value.");
      return `in.(${Array.from(new Set(n))
        .map((s) => kh(s))
        .join(",")})`;
    }
    return t === "is" ? `is.${zw(e)}` : `${t}.${kh(e)}`;
  };
class Hw {
  constructor() {
    this.filters = [];
  }
  add(e, n, r, s = !1) {
    const i = s ? "not." : "";
    return (this.filters.push(`${e}=${i}${Fw(n, r)}`), this);
  }
  eq(e, n) {
    return this.add(e, "eq", n);
  }
  neq(e, n) {
    return this.add(e, "neq", n);
  }
  gt(e, n) {
    return this.add(e, "gt", n);
  }
  gte(e, n) {
    return this.add(e, "gte", n);
  }
  lt(e, n) {
    return this.add(e, "lt", n);
  }
  lte(e, n) {
    return this.add(e, "lte", n);
  }
  in(e, n) {
    return this.add(e, "in", n);
  }
  like(e, n) {
    return this.add(e, "like", n);
  }
  ilike(e, n) {
    return this.add(e, "ilike", n);
  }
  match(e, n) {
    return this.add(e, "match", n);
  }
  imatch(e, n) {
    return this.add(e, "imatch", n);
  }
  is(e, n) {
    return this.add(e, "is", n);
  }
  isDistinct(e, n) {
    return this.add(e, "isdistinct", n);
  }
  not(e, n, r) {
    return this.add(e, n, r, !0);
  }
  build() {
    return this.filters.join(",");
  }
  toString() {
    return this.build();
  }
}
var Sh;
(function (t) {
  ((t.ALL = "*"),
    (t.INSERT = "INSERT"),
    (t.UPDATE = "UPDATE"),
    (t.DELETE = "DELETE"));
})(Sh || (Sh = {}));
var Rr;
(function (t) {
  ((t.BROADCAST = "broadcast"),
    (t.PRESENCE = "presence"),
    (t.POSTGRES_CHANGES = "postgres_changes"),
    (t.SYSTEM = "system"));
})(Rr || (Rr = {}));
var Dn;
(function (t) {
  ((t.SUBSCRIBED = "SUBSCRIBED"),
    (t.TIMED_OUT = "TIMED_OUT"),
    (t.CLOSED = "CLOSED"),
    (t.CHANNEL_ERROR = "CHANNEL_ERROR"));
})(Dn || (Dn = {}));
class Un {
  get state() {
    return this.channelAdapter.state;
  }
  set state(e) {
    this.channelAdapter.state = e;
  }
  get joinedOnce() {
    return this.channelAdapter.joinedOnce;
  }
  get timeout() {
    return this.socket.timeout;
  }
  get joinPush() {
    return this.channelAdapter.joinPush;
  }
  get rejoinTimer() {
    return this.channelAdapter.rejoinTimer;
  }
  constructor(e, n = { config: {} }, r) {
    var s, i;
    if (
      ((this.topic = e),
      (this.params = n),
      (this.socket = r),
      (this.bindings = {}),
      (this.subTopic = e.replace(/^realtime:/i, "")),
      (this.params.config = Object.assign(
        {
          broadcast: { ack: !1, self: !1 },
          presence: { key: "", enabled: !1 },
          private: !1,
        },
        n.config,
      )),
      (this.channelAdapter = new Mw(this.socket.socketAdapter, e, this.params)),
      (this.presence = new Iw(this)),
      this._onClose(() => {
        this.socket._remove(this);
      }),
      this._updateFilterTransform(),
      (this.broadcastEndpointURL = y0(this.socket.socketAdapter.endPointURL())),
      (this.private = this.params.config.private || !1),
      !this.private &&
        !(
          (i =
            (s = this.params.config) === null || s === void 0
              ? void 0
              : s.broadcast) === null || i === void 0
        ) &&
        i.replay)
    )
      throw new Error(
        `tried to use replay on public channel '${this.topic}'. It must be a private channel.`,
      );
  }
  subscribe(e, n = this.timeout) {
    var r, s, i, a;
    if (
      (this.socket.isConnected() || this.socket.connect(),
      this.channelAdapter.isClosed())
    ) {
      const {
          config: {
            broadcast: l,
            presence: c,
            private: u,
            postgres_changes_options: d,
          },
        } = this.params,
        f =
          (s =
            (r = this.bindings.postgres_changes) === null || r === void 0
              ? void 0
              : r.map((_) => _.filter)) !== null && s !== void 0
            ? s
            : [],
        h =
          (!!this.bindings[Rr.PRESENCE] &&
            this.bindings[Rr.PRESENCE].length > 0) ||
          ((i = this.params.config.presence) === null || i === void 0
            ? void 0
            : i.enabled) === !0,
        p = {},
        v = Object.assign(
          {
            broadcast: l,
            presence: Object.assign(Object.assign({}, c), { enabled: h }),
            postgres_changes: f,
            private: u,
          },
          d ? { postgres_changes_options: d } : {},
        );
      (this.socket.accessTokenValue &&
        (p.access_token = this.socket.accessTokenValue),
        this._onError((_) => {
          e == null || e(Dn.CHANNEL_ERROR, Lw(_));
        }),
        this._onClose(() => (e == null ? void 0 : e(Dn.CLOSED))),
        this.updateJoinPayload(Object.assign({ config: v }, p)),
        this._updateFilterMessage());
      const x =
        d != null && d.wait && f.length > 0
          ? Math.max(
              n,
              ((a = d.timeout) !== null && a !== void 0 ? a : hw) + fw,
            )
          : n;
      this.channelAdapter
        .subscribe(x)
        .receive("ok", async ({ postgres_changes: _ }) => {
          if (
            (this.socket._isManualToken() || this.socket.setAuth(),
            _ === void 0)
          ) {
            e == null || e(Dn.SUBSCRIBED);
            return;
          }
          this._updatePostgresBindings(_, e);
        })
        .receive("error", (_) => {
          this.state = sr.errored;
          const m = Object.values(_).join(", ") || "error";
          e == null || e(Dn.CHANNEL_ERROR, new Error(m, { cause: _ }));
        })
        .receive("timeout", () => {
          e == null || e(Dn.TIMED_OUT);
        });
    }
    return this;
  }
  _updatePostgresBindings(e, n) {
    var r;
    const s = this.bindings.postgres_changes,
      i = (r = s == null ? void 0 : s.length) !== null && r !== void 0 ? r : 0,
      a = [];
    for (let l = 0; l < i; l++) {
      const c = s[l],
        {
          filter: { event: u, schema: d, table: f, filter: h },
        } = c,
        p = e && e[l];
      if (
        p &&
        p.event === u &&
        Un.isFilterValueEqual(p.schema, d) &&
        Un.isFilterValueEqual(p.table, f) &&
        Un.isFilterValueEqual(p.filter, h)
      )
        a.push(Object.assign(Object.assign({}, c), { id: p.id }));
      else {
        (this.unsubscribe(),
          (this.state = sr.errored),
          n == null ||
            n(
              Dn.CHANNEL_ERROR,
              new Error(
                "mismatch between server and client bindings for postgres changes",
              ),
            ));
        return;
      }
    }
    ((this.bindings.postgres_changes = a),
      this.state != sr.errored && n && n(Dn.SUBSCRIBED));
  }
  presenceState() {
    return this.presence.state;
  }
  async track(e, n = {}) {
    return await this.send({ type: "presence", event: "track", payload: e }, n);
  }
  async untrack(e = {}) {
    return await this.send({ type: "presence", event: "untrack" }, e);
  }
  on(e, n, r) {
    const s = this.channelAdapter.isJoined() || this.channelAdapter.isJoining(),
      i = e === Rr.PRESENCE || e === Rr.POSTGRES_CHANGES;
    if (s && i)
      throw (
        this.socket.log(
          "channel",
          `cannot add \`${e}\` callbacks for ${this.topic} after \`subscribe()\`.`,
        ),
        new Error(
          `cannot add \`${e}\` callbacks for ${this.topic} after \`subscribe()\`.`,
        )
      );
    return this._on(e, n, r);
  }
  async httpSend(e, n, r = {}) {
    var s;
    if (n == null)
      return Promise.reject(new Error("Payload is required for httpSend()"));
    const i = n instanceof ArrayBuffer || ArrayBuffer.isView(n),
      a = {
        apikey: this.socket.apiKey ? this.socket.apiKey : "",
        "Content-Type": i ? "application/octet-stream" : "application/json",
      };
    this.socket.accessTokenValue &&
      (a.Authorization = `Bearer ${this.socket.accessTokenValue}`);
    const l = new URL(this.broadcastEndpointURL);
    ((l.pathname += `/${encodeURIComponent(this.subTopic)}/events/${encodeURIComponent(e)}`),
      this.private && l.searchParams.set("private", "true"));
    const c = { method: "POST", headers: a, body: i ? n : JSON.stringify(n) },
      u = await this._fetchWithTimeout(
        l.toString(),
        c,
        (s = r.timeout) !== null && s !== void 0 ? s : this.timeout,
      );
    if (u.status === 202) return { success: !0 };
    if (u.status === 404)
      return Promise.reject(
        new Error(
          "httpSend() requires Realtime server v2.97.0 or newer; the endpoint returned 404. Update your Supabase CLI to a recent version, or upgrade the Realtime server in your self-hosted setup. See https://github.com/supabase/supabase-js/blob/master/packages/core/realtime-js/migrations/httpsend-server-version.md",
        ),
      );
    let d = u.statusText;
    try {
      const f = await u.json();
      d = f.error || f.message || d;
    } catch {}
    return Promise.reject(new Error(d));
  }
  async send(e, n = {}) {
    var r, s;
    if (!this.channelAdapter.canPush() && e.type === "broadcast") {
      const i =
        "Realtime send() is automatically falling back to REST API. This behavior will be deprecated in the future. Please use httpSend() explicitly for REST delivery.";
      this.socket.hasLogger() ? this.socket.log("channel", i) : console.warn(i);
      const { event: a, payload: l } = e,
        c = {
          apikey: this.socket.apiKey ? this.socket.apiKey : "",
          "Content-Type": "application/json",
        };
      this.socket.accessTokenValue &&
        (c.Authorization = `Bearer ${this.socket.accessTokenValue}`);
      const u = {
        method: "POST",
        headers: c,
        body: JSON.stringify({
          messages: [
            {
              topic: this.subTopic,
              event: a,
              payload: l,
              private: this.private,
            },
          ],
        }),
      };
      try {
        const d = await this._fetchWithTimeout(
          this.broadcastEndpointURL,
          u,
          (r = n.timeout) !== null && r !== void 0 ? r : this.timeout,
        );
        return (
          await ((s = d.body) === null || s === void 0 ? void 0 : s.cancel()),
          d.ok ? "ok" : "error"
        );
      } catch (d) {
        return d instanceof Error && d.name === "AbortError"
          ? "timed out"
          : "error";
      }
    } else
      return new Promise((i) => {
        var a, l, c;
        const u = this.channelAdapter.push(
          e.type,
          e,
          n.timeout || this.timeout,
        );
        (e.type === "broadcast" &&
          !(
            !(
              (c =
                (l =
                  (a = this.params) === null || a === void 0
                    ? void 0
                    : a.config) === null || l === void 0
                  ? void 0
                  : l.broadcast) === null || c === void 0
            ) && c.ack
          ) &&
          i("ok"),
          u.receive("ok", () => i("ok")),
          u.receive("error", () => i("error")),
          u.receive("timeout", () => i("timed out")));
      });
  }
  updateJoinPayload(e) {
    this.channelAdapter.updateJoinPayload(e);
  }
  async unsubscribe(e = this.timeout) {
    return new Promise((n) => {
      this.channelAdapter
        .unsubscribe(e)
        .receive("ok", () => n("ok"))
        .receive("timeout", () => n("timed out"))
        .receive("error", () => n("error"));
    });
  }
  teardown() {
    this.channelAdapter.teardown();
  }
  async _fetchWithTimeout(e, n, r) {
    const s = new AbortController(),
      i = setTimeout(() => s.abort(), r),
      a = await this.socket.fetch(
        e,
        Object.assign(Object.assign({}, n), { signal: s.signal }),
      );
    return (clearTimeout(i), a);
  }
  _on(e, n, r) {
    var s;
    const i = e.toLocaleLowerCase(),
      a = n == null ? void 0 : n.filter;
    if (
      ((a instanceof Hw ||
        (typeof a == "object" && a !== null && typeof a.build == "function")) &&
        (n = Object.assign(Object.assign({}, n), { filter: a.build() })),
      i === Rr.POSTGRES_CHANGES &&
        ((s = this.bindings[i]) === null || s === void 0
          ? void 0
          : s.find((d) => Un.isSamePostgresFilter(d.filter, n))))
    )
      return (
        this.socket.log(
          "error",
          `duplicate \`postgres_changes\` binding for ${this.topic} ignored`,
          n,
        ),
        this
      );
    const l = this.channelAdapter.on(e, r),
      c = { type: i, filter: n, callback: r, ref: l };
    return (
      this.bindings[i] ? this.bindings[i].push(c) : (this.bindings[i] = [c]),
      this._updateFilterMessage(),
      this
    );
  }
  _onClose(e) {
    this.channelAdapter.onClose(e);
  }
  _onError(e) {
    this.channelAdapter.onError(e);
  }
  _updateFilterMessage() {
    this.channelAdapter.updateFilterBindings((e, n, r) => {
      var s, i, a, l, c, u, d;
      const f = e.event.toLocaleLowerCase();
      if (this._notThisChannelEvent(f, r)) return !1;
      const h =
        (s = this.bindings[f]) === null || s === void 0
          ? void 0
          : s.find((p) => p.ref === e.ref);
      if (!h) return !0;
      if (["broadcast", "presence", "postgres_changes"].includes(f))
        if ("id" in h) {
          const p = h.id,
            v = (i = h.filter) === null || i === void 0 ? void 0 : i.event;
          return (
            p &&
            ((a = n.ids) === null || a === void 0 ? void 0 : a.includes(p)) &&
            (v === "*" ||
              (v == null ? void 0 : v.toLocaleLowerCase()) ===
                ((l = n.data) === null || l === void 0
                  ? void 0
                  : l.type.toLocaleLowerCase()))
          );
        } else {
          const p =
            (u =
              (c = h == null ? void 0 : h.filter) === null || c === void 0
                ? void 0
                : c.event) === null || u === void 0
              ? void 0
              : u.toLocaleLowerCase();
          return (
            p === "*" ||
            p ===
              ((d = n == null ? void 0 : n.event) === null || d === void 0
                ? void 0
                : d.toLocaleLowerCase())
          );
        }
      else return h.type.toLocaleLowerCase() === f;
    });
  }
  _notThisChannelEvent(e, n) {
    const { close: r, error: s, leave: i, join: a } = g0;
    return n && [r, s, i, a].includes(e) && n !== this.joinPush.ref;
  }
  _updateFilterTransform() {
    this.channelAdapter.updatePayloadTransform((e, n, r) => {
      if (typeof n == "object" && "ids" in n) {
        const s = n.data,
          { schema: i, table: a, commit_timestamp: l, type: c, errors: u } = s;
        return Object.assign(
          Object.assign(
            {},
            {
              schema: i,
              table: a,
              commit_timestamp: l,
              eventType: c,
              new: {},
              old: {},
              errors: u,
            },
          ),
          this._getPayloadRecords(s),
        );
      }
      return n;
    });
  }
  copyBindings(e) {
    if (this.joinedOnce)
      throw new Error("cannot copy bindings into joined channel");
    for (const n in e.bindings)
      for (const r of e.bindings[n]) this._on(r.type, r.filter, r.callback);
  }
  static isFilterValueEqual(e, n) {
    return (e ?? void 0) === (n ?? void 0);
  }
  static isSamePostgresFilter(e, n) {
    var r, s, i, a;
    const l =
        (s =
          (r = e == null ? void 0 : e.select) === null || r === void 0
            ? void 0
            : r.join()) !== null && s !== void 0
          ? s
          : void 0,
      c =
        (a =
          (i = n == null ? void 0 : n.select) === null || i === void 0
            ? void 0
            : i.join()) !== null && a !== void 0
          ? a
          : void 0;
    return (
      (e == null ? void 0 : e.event) === (n == null ? void 0 : n.event) &&
      Un.isFilterValueEqual(
        e == null ? void 0 : e.schema,
        n == null ? void 0 : n.schema,
      ) &&
      Un.isFilterValueEqual(
        e == null ? void 0 : e.table,
        n == null ? void 0 : n.table,
      ) &&
      Un.isFilterValueEqual(
        e == null ? void 0 : e.filter,
        n == null ? void 0 : n.filter,
      ) &&
      l === c
    );
  }
  _getPayloadRecords(e) {
    const n = { new: {}, old: {} };
    return (
      (e.type === "INSERT" || e.type === "UPDATE") &&
        (n.new = xh(e.columns, e.record)),
      (e.type === "UPDATE" || e.type === "DELETE") &&
        (n.old = xh(e.columns, e.old_record)),
      n
    );
  }
}
class Vw {
  constructor(e, n) {
    this.socket = new Aw(e, n);
  }
  get timeout() {
    return this.socket.timeout;
  }
  get endPoint() {
    return this.socket.endPoint;
  }
  get transport() {
    return this.socket.transport;
  }
  get heartbeatIntervalMs() {
    return this.socket.heartbeatIntervalMs;
  }
  get heartbeatCallback() {
    return this.socket.heartbeatCallback;
  }
  set heartbeatCallback(e) {
    this.socket.heartbeatCallback = e;
  }
  get heartbeatTimer() {
    return this.socket.heartbeatTimer;
  }
  get pendingHeartbeatRef() {
    return this.socket.pendingHeartbeatRef;
  }
  get reconnectTimer() {
    return this.socket.reconnectTimer;
  }
  get vsn() {
    return this.socket.vsn;
  }
  get encode() {
    return this.socket.encode;
  }
  get decode() {
    return this.socket.decode;
  }
  get reconnectAfterMs() {
    return this.socket.reconnectAfterMs;
  }
  get sendBuffer() {
    return this.socket.sendBuffer;
  }
  get stateChangeCallbacks() {
    return this.socket.stateChangeCallbacks;
  }
  connect() {
    this.socket.connect();
  }
  disconnect(e, n, r, s = 1e4) {
    return new Promise((i) => {
      (setTimeout(() => i("timeout"), s),
        this.socket.disconnect(
          () => {
            (e(), i("ok"));
          },
          n,
          r,
        ));
    });
  }
  push(e) {
    this.socket.push(e);
  }
  log(e, n, r) {
    this.socket.log(e, n, r);
  }
  hasLogger() {
    return this.socket.hasLogger();
  }
  makeRef() {
    return this.socket.makeRef();
  }
  onOpen(e) {
    this.socket.onOpen(e);
  }
  onClose(e) {
    this.socket.onClose(e);
  }
  onError(e) {
    this.socket.onError(e);
  }
  onMessage(e) {
    this.socket.onMessage(e);
  }
  isConnected() {
    return this.socket.isConnected();
  }
  isConnecting() {
    return this.socket.connectionState() == Fc.connecting;
  }
  isDisconnecting() {
    return this.socket.connectionState() == Fc.closing;
  }
  connectionState() {
    return this.socket.connectionState();
  }
  endPointURL() {
    return this.socket.endPointURL();
  }
  sendHeartbeat() {
    this.socket.sendHeartbeat();
  }
  getSocket() {
    return this.socket;
  }
}
const Eh = { HEARTBEAT_INTERVAL: 25e3 },
  Ww = [1e3, 2e3, 5e3, 1e4],
  qw = 1e4;
function Kw() {
  const t = new Map();
  return {
    get length() {
      return t.size;
    },
    clear() {
      t.clear();
    },
    getItem(e) {
      return t.has(e) ? t.get(e) : null;
    },
    key(e) {
      var n;
      return (n = Array.from(t.keys())[e]) !== null && n !== void 0 ? n : null;
    },
    removeItem(e) {
      t.delete(e);
    },
    setItem(e, n) {
      t.set(e, String(n));
    },
  };
}
function Gw() {
  try {
    if (typeof globalThis < "u" && globalThis.sessionStorage)
      return globalThis.sessionStorage;
  } catch {}
  return Kw();
}
const Jw = `
  addEventListener("message", (e) => {
    if (e.data.event === "start") {
      setInterval(() => postMessage({ event: "keepAlive" }), e.data.interval);
    }
  });`;
class Yw {
  get endPoint() {
    return this.socketAdapter.endPoint;
  }
  get timeout() {
    return this.socketAdapter.timeout;
  }
  get transport() {
    return this.socketAdapter.transport;
  }
  get heartbeatCallback() {
    return this.socketAdapter.heartbeatCallback;
  }
  get heartbeatIntervalMs() {
    return this.socketAdapter.heartbeatIntervalMs;
  }
  get heartbeatTimer() {
    return this.worker
      ? this._workerHeartbeatTimer
      : this.socketAdapter.heartbeatTimer;
  }
  get pendingHeartbeatRef() {
    return this.worker
      ? this._pendingWorkerHeartbeatRef
      : this.socketAdapter.pendingHeartbeatRef;
  }
  get reconnectTimer() {
    return this.socketAdapter.reconnectTimer;
  }
  get vsn() {
    return this.socketAdapter.vsn;
  }
  get encode() {
    return this.socketAdapter.encode;
  }
  get decode() {
    return this.socketAdapter.decode;
  }
  get reconnectAfterMs() {
    return this.socketAdapter.reconnectAfterMs;
  }
  get sendBuffer() {
    return this.socketAdapter.sendBuffer;
  }
  get stateChangeCallbacks() {
    return this.socketAdapter.stateChangeCallbacks;
  }
  constructor(e, n) {
    var r;
    if (
      ((this.channels = new Array()),
      (this.accessTokenValue = null),
      (this.accessToken = null),
      (this.apiKey = null),
      (this.httpEndpoint = ""),
      (this.headers = {}),
      (this.params = {}),
      (this.ref = 0),
      (this.serializer = new mw()),
      (this._manuallySetToken = !1),
      (this._authPromise = null),
      (this._authGeneration = 0),
      (this._workerHeartbeatTimer = void 0),
      (this._pendingWorkerHeartbeatRef = null),
      (this._pendingDisconnectTimer = null),
      (this._disconnectOnEmptyChannelsAfterMs = 0),
      (this._resolveFetch = (i) =>
        i ? (...a) => i(...a) : (...a) => fetch(...a)),
      !(
        !((r = n == null ? void 0 : n.params) === null || r === void 0) &&
        r.apikey
      ))
    )
      throw new Error("API key is required to connect to Realtime");
    this.apiKey = n.params.apikey;
    const s = this._initializeOptions(n);
    ((this.socketAdapter = new Vw(e, s)),
      (this.httpEndpoint = y0(e)),
      (this.fetch = this._resolveFetch(n == null ? void 0 : n.fetch)));
  }
  connect() {
    if (
      !(this.isConnecting() || this.isDisconnecting() || this.isConnected())
    ) {
      (this.accessToken && !this._authPromise && this._setAuthSafely("connect"),
        this._setupConnectionHandlers());
      try {
        this.socketAdapter.connect();
      } catch (e) {
        const n = e.message;
        throw new Error(`WebSocket not available: ${n}`);
      }
      this._handleNodeJsRaceCondition();
    }
  }
  endpointURL() {
    return this.socketAdapter.endPointURL();
  }
  async disconnect(e, n) {
    return (
      this._cancelPendingDisconnect(),
      this.isDisconnecting()
        ? "ok"
        : await this.socketAdapter.disconnect(
            () => {
              (clearInterval(this._workerHeartbeatTimer),
                this._terminateWorker());
            },
            e,
            n,
          )
    );
  }
  getChannels() {
    return this.channels;
  }
  async removeChannel(e) {
    const n = await e.unsubscribe();
    return (n === "ok" && e.teardown(), n);
  }
  async removeAllChannels() {
    const e = this.channels.map(async (r) => {
        const s = await r.unsubscribe();
        return (r.teardown(), s);
      }),
      n = await Promise.all(e);
    return (await this.disconnect(), n);
  }
  log(e, n, r) {
    this.socketAdapter.log(e, n, r);
  }
  hasLogger() {
    return this.socketAdapter.hasLogger();
  }
  connectionState() {
    return this.socketAdapter.connectionState() || Fc.closed;
  }
  isConnected() {
    return this.socketAdapter.isConnected();
  }
  isConnecting() {
    return this.socketAdapter.isConnecting();
  }
  isDisconnecting() {
    return this.socketAdapter.isDisconnecting();
  }
  channel(e, n = { config: {} }) {
    const r = `realtime:${e}`,
      s = this.getChannels().find((i) => i.topic === r);
    if (s) return s;
    {
      const i = new Un(`realtime:${e}`, n, this);
      return (this._cancelPendingDisconnect(), this.channels.push(i), i);
    }
  }
  push(e) {
    this.socketAdapter.push(e);
  }
  async setAuth(e = null) {
    const n = ++this._authGeneration,
      r = this._performAuth(e, n);
    n === this._authGeneration && (this._authPromise = r);
    try {
      await r;
    } finally {
      this._authPromise === r && (this._authPromise = null);
    }
  }
  _isManualToken() {
    return this._manuallySetToken;
  }
  async sendHeartbeat() {
    this.socketAdapter.sendHeartbeat();
  }
  onHeartbeat(e) {
    this.socketAdapter.heartbeatCallback = this._wrapHeartbeatCallback(e);
  }
  _makeRef() {
    return this.socketAdapter.makeRef();
  }
  _remove(e) {
    ((this.channels = this.channels.filter((n) => n.topic !== e.topic)),
      this.channels.length === 0 &&
        (this.log("transport", "no channels remaining, scheduling disconnect"),
        this._schedulePendingDisconnect()));
  }
  _schedulePendingDisconnect() {
    if (
      (this._cancelPendingDisconnect(),
      this._disconnectOnEmptyChannelsAfterMs === 0)
    ) {
      (this.log("transport", "disconnecting immediately - no channels"),
        this.disconnect());
      return;
    }
    ((this._pendingDisconnectTimer = setTimeout(() => {
      ((this._pendingDisconnectTimer = null),
        this.channels.length === 0 &&
          (this.log(
            "transport",
            "deferred disconnect fired - no channels, disconnecting",
          ),
          this.disconnect()));
    }, this._disconnectOnEmptyChannelsAfterMs)),
      this.log(
        "transport",
        `deferred disconnect scheduled in ${this._disconnectOnEmptyChannelsAfterMs}ms`,
      ));
  }
  _cancelPendingDisconnect() {
    this._pendingDisconnectTimer !== null &&
      (this.log(
        "transport",
        "pending disconnect cancelled - channel activity detected",
      ),
      clearTimeout(this._pendingDisconnectTimer),
      (this._pendingDisconnectTimer = null));
  }
  async _performAuth(e, n) {
    let r,
      s = !1;
    if (e) ((r = e), (s = !0));
    else if (this.accessToken)
      try {
        r = await this.accessToken();
      } catch (i) {
        (this.log("error", "Error fetching access token from callback", i),
          (r = this.accessTokenValue));
      }
    else r = this.accessTokenValue;
    n === this._authGeneration &&
      (this.accessToken
        ? (this._manuallySetToken = !1)
        : s && (this._manuallySetToken = !0),
      this.accessTokenValue != r &&
        ((this.accessTokenValue = r),
        this.channels.forEach((i) => {
          const a = { access_token: r, version: lw };
          (i.updateJoinPayload(a),
            i.joinedOnce &&
              i.channelAdapter.isJoined() &&
              i.channelAdapter.push(g0.access_token, { access_token: r }));
        })));
  }
  async _waitForAuthIfNeeded() {
    this._authPromise && (await this._authPromise);
  }
  _setAuthSafely(e = "general") {
    this._isManualToken() ||
      this.setAuth().catch((n) => {
        this.log("error", `Error setting auth in ${e}`, n);
      });
  }
  _setupConnectionHandlers() {
    (this.socketAdapter.onOpen(() => {
      ((
        this._authPromise ||
        (this.accessToken && !this.accessTokenValue
          ? this.setAuth()
          : Promise.resolve())
      ).catch((n) => {
        this.log("error", "error waiting for auth on connect", n);
      }),
        this.worker && !this.workerRef && this._startWorkerHeartbeat());
    }),
      this.socketAdapter.onClose(() => {
        this.worker && this.workerRef && this._terminateWorker();
      }),
      this.socketAdapter.onMessage((e) => {
        e.ref &&
          e.ref === this._pendingWorkerHeartbeatRef &&
          (this._pendingWorkerHeartbeatRef = null);
      }));
  }
  _handleNodeJsRaceCondition() {
    this.socketAdapter.isConnected() &&
      this.socketAdapter.getSocket().onConnOpen();
  }
  _wrapHeartbeatCallback(e) {
    return (n, r) => {
      n !== "disconnected" &&
        (n == "sent" && this._setAuthSafely(), e && e(n, r));
    };
  }
  _startWorkerHeartbeat() {
    this.workerUrl
      ? this.log("worker", `starting worker for from ${this.workerUrl}`)
      : this.log("worker", "starting default worker");
    const e = this._workerObjectUrl(this.workerUrl);
    ((this.workerRef = new Worker(e)),
      (this.workerRef.onerror = (n) => {
        (this.log("worker", "worker error", n.message),
          this._terminateWorker(),
          this.disconnect());
      }),
      (this.workerRef.onmessage = (n) => {
        n.data.event === "keepAlive" && this.sendHeartbeat();
      }),
      this.workerRef.postMessage({
        event: "start",
        interval: this.heartbeatIntervalMs,
      }));
  }
  _terminateWorker() {
    this.workerRef &&
      (this.log("worker", "terminating worker"),
      this.workerRef.terminate(),
      (this.workerRef = void 0));
  }
  _workerObjectUrl(e) {
    let n;
    if (e) n = e;
    else {
      const r = new Blob([Jw], { type: "application/javascript" });
      n = URL.createObjectURL(r);
    }
    return n;
  }
  _initializeOptions(e) {
    var n, r, s, i, a, l, c, u, d, f, h, p;
    ((this.worker =
      (n = e == null ? void 0 : e.worker) !== null && n !== void 0 ? n : !1),
      (this.accessToken =
        (r = e == null ? void 0 : e.accessToken) !== null && r !== void 0
          ? r
          : null));
    const v = {};
    ((v.timeout =
      (s = e == null ? void 0 : e.timeout) !== null && s !== void 0 ? s : dw),
      (v.heartbeatIntervalMs =
        (i = e == null ? void 0 : e.heartbeatIntervalMs) !== null &&
        i !== void 0
          ? i
          : Eh.HEARTBEAT_INTERVAL),
      (this._disconnectOnEmptyChannelsAfterMs =
        (a = e == null ? void 0 : e.disconnectOnEmptyChannelsAfterMs) !==
          null && a !== void 0
          ? a
          : 2 *
            ((l = e == null ? void 0 : e.heartbeatIntervalMs) !== null &&
            l !== void 0
              ? l
              : Eh.HEARTBEAT_INTERVAL)),
      (v.transport =
        (c = e == null ? void 0 : e.transport) !== null && c !== void 0
          ? c
          : aw.getWebSocketConstructor()),
      (v.params = e == null ? void 0 : e.params),
      (v.logger = e == null ? void 0 : e.logger),
      (v.heartbeatCallback = this._wrapHeartbeatCallback(
        e == null ? void 0 : e.heartbeatCallback,
      )),
      (v.sessionStorage =
        (u = e == null ? void 0 : e.sessionStorage) !== null && u !== void 0
          ? u
          : Gw()),
      (v.reconnectAfterMs =
        (d = e == null ? void 0 : e.reconnectAfterMs) !== null && d !== void 0
          ? d
          : (g) => Ww[g - 1] || qw));
    let x, _;
    const m =
      (f = e == null ? void 0 : e.vsn) !== null && f !== void 0 ? f : uw;
    switch (m) {
      case cw:
        ((x = (g, y) => y(JSON.stringify(g))),
          (_ = (g, y) => y(JSON.parse(g))));
        break;
      case m0:
        ((x = this.serializer.encode.bind(this.serializer)),
          (_ = this.serializer.decode.bind(this.serializer)));
        break;
      default:
        throw new Error(`Unsupported serializer version: ${v.vsn}`);
    }
    if (
      ((v.vsn = m),
      (v.encode =
        (h = e == null ? void 0 : e.encode) !== null && h !== void 0 ? h : x),
      (v.decode =
        (p = e == null ? void 0 : e.decode) !== null && p !== void 0 ? p : _),
      (v.beforeReconnect = this._reconnectAuth.bind(this)),
      ((e != null && e.logLevel) || (e != null && e.log_level)) &&
        ((this.logLevel = e.logLevel || e.log_level),
        (v.params = Object.assign(Object.assign({}, v.params), {
          log_level: this.logLevel,
        }))),
      this.worker)
    ) {
      if (typeof window < "u" && !window.Worker)
        throw new Error("Web Worker is not supported");
      ((this.workerUrl = e == null ? void 0 : e.workerUrl),
        (v.autoSendHeartbeat = !this.worker));
    }
    return v;
  }
  async _reconnectAuth() {
    (await this._waitForAuthIfNeeded(), this.isConnected() || this.connect());
  }
}
var zi = class extends Error {
  constructor(t, e) {
    var n;
    (super(t),
      (this.name = "IcebergError"),
      (this.status = e.status),
      (this.icebergType = e.icebergType),
      (this.icebergCode = e.icebergCode),
      (this.details = e.details),
      (this.isCommitStateUnknown =
        e.icebergType === "CommitStateUnknownException" ||
        ([500, 502, 504].includes(e.status) &&
          ((n = e.icebergType) == null ? void 0 : n.includes("CommitState")) ===
            !0)));
  }
  isNotFound() {
    return this.status === 404;
  }
  isConflict() {
    return this.status === 409;
  }
  isAuthenticationTimeout() {
    return this.status === 419;
  }
};
function Xw(t, e, n) {
  const r = new URL(e, t);
  if (n)
    for (const [s, i] of Object.entries(n))
      i !== void 0 && r.searchParams.set(s, i);
  return r.toString();
}
async function Zw(t) {
  return !t || t.type === "none"
    ? {}
    : t.type === "bearer"
      ? { Authorization: `Bearer ${t.token}` }
      : t.type === "header"
        ? { [t.name]: t.value }
        : t.type === "custom"
          ? await t.getHeaders()
          : {};
}
function Qw(t) {
  const e = t.fetchImpl ?? globalThis.fetch;
  return {
    async request({ method: n, path: r, query: s, body: i, headers: a }) {
      const l = Xw(t.baseUrl, r, s),
        c = await Zw(t.auth),
        u = await e(l, {
          method: n,
          headers: {
            ...(i ? { "Content-Type": "application/json" } : {}),
            ...c,
            ...a,
          },
          body: i ? JSON.stringify(i) : void 0,
        }),
        d = await u.text(),
        f = (u.headers.get("content-type") || "").includes("application/json"),
        h = f && d ? JSON.parse(d) : d;
      if (!u.ok) {
        const p = f ? h : void 0,
          v = p == null ? void 0 : p.error;
        throw new zi(
          (v == null ? void 0 : v.message) ??
            `Request failed with status ${u.status}`,
          {
            status: u.status,
            icebergType: v == null ? void 0 : v.type,
            icebergCode: v == null ? void 0 : v.code,
            details: p,
          },
        );
      }
      return { status: u.status, headers: u.headers, data: h };
    },
  };
}
function ka(t) {
  return t.join("");
}
var ex = class {
  constructor(t, e = "") {
    ((this.client = t), (this.prefix = e));
  }
  async listNamespaces(t) {
    const e = t ? { parent: ka(t.namespace) } : void 0;
    return (
      await this.client.request({
        method: "GET",
        path: `${this.prefix}/namespaces`,
        query: e,
      })
    ).data.namespaces.map((r) => ({ namespace: r }));
  }
  async createNamespace(t, e) {
    const n = {
      namespace: t.namespace,
      properties: e == null ? void 0 : e.properties,
    };
    return (
      await this.client.request({
        method: "POST",
        path: `${this.prefix}/namespaces`,
        body: n,
      })
    ).data;
  }
  async dropNamespace(t) {
    await this.client.request({
      method: "DELETE",
      path: `${this.prefix}/namespaces/${ka(t.namespace)}`,
    });
  }
  async loadNamespaceMetadata(t) {
    return {
      properties: (
        await this.client.request({
          method: "GET",
          path: `${this.prefix}/namespaces/${ka(t.namespace)}`,
        })
      ).data.properties,
    };
  }
  async namespaceExists(t) {
    try {
      return (
        await this.client.request({
          method: "HEAD",
          path: `${this.prefix}/namespaces/${ka(t.namespace)}`,
        }),
        !0
      );
    } catch (e) {
      if (e instanceof zi && e.status === 404) return !1;
      throw e;
    }
  }
  async createNamespaceIfNotExists(t, e) {
    try {
      return await this.createNamespace(t, e);
    } catch (n) {
      if (n instanceof zi && n.status === 409) return;
      throw n;
    }
  }
};
function Xr(t) {
  return t.join("");
}
var tx = class {
    constructor(t, e = "", n) {
      ((this.client = t), (this.prefix = e), (this.accessDelegation = n));
    }
    async listTables(t) {
      return (
        await this.client.request({
          method: "GET",
          path: `${this.prefix}/namespaces/${Xr(t.namespace)}/tables`,
        })
      ).data.identifiers;
    }
    async createTable(t, e) {
      const n = {};
      return (
        this.accessDelegation &&
          (n["X-Iceberg-Access-Delegation"] = this.accessDelegation),
        (
          await this.client.request({
            method: "POST",
            path: `${this.prefix}/namespaces/${Xr(t.namespace)}/tables`,
            body: e,
            headers: n,
          })
        ).data.metadata
      );
    }
    async updateTable(t, e) {
      const n = await this.client.request({
        method: "POST",
        path: `${this.prefix}/namespaces/${Xr(t.namespace)}/tables/${t.name}`,
        body: e,
      });
      return {
        "metadata-location": n.data["metadata-location"],
        metadata: n.data.metadata,
      };
    }
    async dropTable(t, e) {
      await this.client.request({
        method: "DELETE",
        path: `${this.prefix}/namespaces/${Xr(t.namespace)}/tables/${t.name}`,
        query: { purgeRequested: String((e == null ? void 0 : e.purge) ?? !1) },
      });
    }
    async loadTable(t) {
      const e = {};
      return (
        this.accessDelegation &&
          (e["X-Iceberg-Access-Delegation"] = this.accessDelegation),
        (
          await this.client.request({
            method: "GET",
            path: `${this.prefix}/namespaces/${Xr(t.namespace)}/tables/${t.name}`,
            headers: e,
          })
        ).data.metadata
      );
    }
    async tableExists(t) {
      const e = {};
      this.accessDelegation &&
        (e["X-Iceberg-Access-Delegation"] = this.accessDelegation);
      try {
        return (
          await this.client.request({
            method: "HEAD",
            path: `${this.prefix}/namespaces/${Xr(t.namespace)}/tables/${t.name}`,
            headers: e,
          }),
          !0
        );
      } catch (n) {
        if (n instanceof zi && n.status === 404) return !1;
        throw n;
      }
    }
    async createTableIfNotExists(t, e) {
      try {
        return await this.createTable(t, e);
      } catch (n) {
        if (n instanceof zi && n.status === 409)
          return await this.loadTable({ namespace: t.namespace, name: e.name });
        throw n;
      }
    }
  },
  nx = class {
    constructor(t) {
      var r;
      let e = "v1";
      t.catalogName && (e += `/${t.catalogName}`);
      const n = t.baseUrl.endsWith("/") ? t.baseUrl : `${t.baseUrl}/`;
      ((this.client = Qw({ baseUrl: n, auth: t.auth, fetchImpl: t.fetch })),
        (this.accessDelegation =
          (r = t.accessDelegation) == null ? void 0 : r.join(",")),
        (this.namespaceOps = new ex(this.client, e)),
        (this.tableOps = new tx(this.client, e, this.accessDelegation)));
    }
    async listNamespaces(t) {
      return this.namespaceOps.listNamespaces(t);
    }
    async createNamespace(t, e) {
      return this.namespaceOps.createNamespace(t, e);
    }
    async dropNamespace(t) {
      await this.namespaceOps.dropNamespace(t);
    }
    async loadNamespaceMetadata(t) {
      return this.namespaceOps.loadNamespaceMetadata(t);
    }
    async listTables(t) {
      return this.tableOps.listTables(t);
    }
    async createTable(t, e) {
      return this.tableOps.createTable(t, e);
    }
    async updateTable(t, e) {
      return this.tableOps.updateTable(t, e);
    }
    async dropTable(t, e) {
      await this.tableOps.dropTable(t, e);
    }
    async loadTable(t) {
      return this.tableOps.loadTable(t);
    }
    async namespaceExists(t) {
      return this.namespaceOps.namespaceExists(t);
    }
    async tableExists(t) {
      return this.tableOps.tableExists(t);
    }
    async createNamespaceIfNotExists(t, e) {
      return this.namespaceOps.createNamespaceIfNotExists(t, e);
    }
    async createTableIfNotExists(t, e) {
      return this.tableOps.createTableIfNotExists(t, e);
    }
  };
function Fi(t) {
  "@babel/helpers - typeof";
  return (
    (Fi =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              typeof Symbol == "function" &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          }),
    Fi(t)
  );
}
function rx(t, e) {
  if (Fi(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if (Fi(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function sx(t) {
  var e = rx(t, "string");
  return Fi(e) == "symbol" ? e : e + "";
}
function ix(t, e, n) {
  return (
    (e = sx(e)) in t
      ? Object.defineProperty(t, e, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[e] = n),
    t
  );
}
function jh(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    (e &&
      (r = r.filter(function (s) {
        return Object.getOwnPropertyDescriptor(t, s).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function le(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? jh(Object(n), !0).forEach(function (r) {
          ix(t, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
        : jh(Object(n)).forEach(function (r) {
            Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
          });
  }
  return t;
}
var el = class extends Error {
  constructor(t, e = "storage", n, r) {
    (super(t),
      (this.__isStorageError = !0),
      (this.namespace = e),
      (this.name = e === "vectors" ? "StorageVectorsError" : "StorageError"),
      (this.status = n),
      (this.statusCode = r));
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      status: this.status,
      statusCode: this.statusCode,
    };
  }
};
function tl(t) {
  return typeof t == "object" && t !== null && "__isStorageError" in t;
}
var qc = class extends el {
    constructor(t, e, n, r = "storage", s) {
      (super(t, r, e, n),
        (this.name =
          r === "vectors" ? "StorageVectorsApiError" : "StorageApiError"),
        (this.status = e),
        (this.statusCode = n),
        (this.code = s));
    }
    toJSON() {
      return le(le({}, super.toJSON()), {}, { code: this.code });
    }
  },
  x0 = class extends el {
    constructor(t, e, n = "storage") {
      (super(t, n),
        (this.name =
          n === "vectors"
            ? "StorageVectorsUnknownError"
            : "StorageUnknownError"),
        (this.originalError = e));
    }
  };
function jo(t, e, n) {
  const r = le({}, t),
    s = e.toLowerCase();
  for (const i of Object.keys(r)) i.toLowerCase() === s && delete r[i];
  return ((r[s] = n), r);
}
function ax(t) {
  const e = {};
  for (const [n, r] of Object.entries(t)) e[n.toLowerCase()] = r;
  return e;
}
const ox = (t) => (t ? (...e) => t(...e) : (...e) => fetch(...e)),
  lx = (t) => {
    if (typeof t != "object" || t === null) return !1;
    const e = Object.getPrototypeOf(t);
    return (
      (e === null ||
        e === Object.prototype ||
        Object.getPrototypeOf(e) === null) &&
      !(Symbol.toStringTag in t) &&
      !(Symbol.iterator in t)
    );
  },
  Kc = (t) => {
    if (Array.isArray(t)) return t.map((n) => Kc(n));
    if (typeof t == "function" || t !== Object(t)) return t;
    const e = {};
    return (
      Object.entries(t).forEach(([n, r]) => {
        const s = n.replace(/([-_][a-z])/gi, (i) =>
          i.toUpperCase().replace(/[-_]/g, ""),
        );
        e[s] = Kc(r);
      }),
      e
    );
  },
  cx = (t) =>
    !t ||
    typeof t != "string" ||
    t.length === 0 ||
    t.length > 100 ||
    t.trim() !== t ||
    t.includes("/") ||
    t.includes("\\")
      ? !1
      : /^[\w!.\*'() &$@=;:+,?-]+$/.test(t),
  Gc = (t) => t.split("/").map(encodeURIComponent).join("/"),
  Th = (t) => {
    if (typeof t == "object" && t !== null) {
      const e = t;
      if (typeof e.msg == "string") return e.msg;
      if (typeof e.message == "string") return e.message;
      if (typeof e.error_description == "string") return e.error_description;
      if (typeof e.error == "string") return e.error;
      if (typeof e.error == "object" && e.error !== null) {
        const n = e.error;
        if (typeof n.message == "string") return n.message;
      }
    }
    return JSON.stringify(t);
  },
  ux = async (t, e, n, r) => {
    if (
      t !== null &&
      typeof t == "object" &&
      "json" in t &&
      typeof t.json == "function"
    ) {
      const s = t;
      let i = parseInt(String(s.status), 10);
      (Number.isFinite(i) || (i = 500),
        s
          .json()
          .then((a) => {
            const l =
              (a == null ? void 0 : a.statusCode) ||
              (a == null ? void 0 : a.code) ||
              i + "";
            e(new qc(Th(a), i, l, r, a == null ? void 0 : a.code));
          })
          .catch(() => {
            const a = i + "";
            e(new qc(s.statusText || `HTTP ${i} error`, i, a, r));
          }));
    } else e(new x0(Th(t), t, r));
  },
  dx = (t, e, n, r) => {
    const s = { method: t, headers: (e == null ? void 0 : e.headers) || {} };
    if (t === "GET" || t === "HEAD" || !r) return le(le({}, s), n);
    if (lx(r)) {
      var i;
      const a = (e == null ? void 0 : e.headers) || {};
      let l;
      for (const [c, u] of Object.entries(a))
        c.toLowerCase() === "content-type" && (l = u);
      ((s.headers = jo(
        a,
        "Content-Type",
        (i = l) !== null && i !== void 0 ? i : "application/json",
      )),
        (s.body = JSON.stringify(r)));
    } else s.body = r;
    return (e != null && e.duplex && (s.duplex = e.duplex), le(le({}, s), n));
  };
async function ei(t, e, n, r, s, i, a) {
  return new Promise((l, c) => {
    t(n, dx(e, r, s, i))
      .then((u) => {
        if (!u.ok) throw u;
        if (r != null && r.noResolveJson) return u;
        if (a === "vectors") {
          const d = u.headers.get("content-type");
          if (u.headers.get("content-length") === "0" || u.status === 204)
            return {};
          if (!d || !d.includes("application/json")) return {};
        }
        return u.json();
      })
      .then((u) => l(u))
      .catch((u) => ux(u, c, r, a));
  });
}
function _0(t = "storage") {
  return {
    get: async (e, n, r, s) => ei(e, "GET", n, r, s, void 0, t),
    post: async (e, n, r, s, i) => ei(e, "POST", n, s, i, r, t),
    put: async (e, n, r, s, i) => ei(e, "PUT", n, s, i, r, t),
    head: async (e, n, r, s) =>
      ei(e, "HEAD", n, le(le({}, r), {}, { noResolveJson: !0 }), s, void 0, t),
    remove: async (e, n, r, s, i) => ei(e, "DELETE", n, s, i, r, t),
  };
}
const hx = _0("storage"),
  { get: Ts, post: hn, put: To, head: fx, remove: Ns } = hx,
  qt = _0("vectors");
var Fs = class {
  constructor(t, e = {}, n, r = "storage") {
    ((this.shouldThrowOnError = !1),
      (this.url = t),
      (this.headers = ax(e)),
      (this.fetch = ox(n)),
      (this.namespace = r));
  }
  throwOnError() {
    return ((this.shouldThrowOnError = !0), this);
  }
  setHeader(t, e) {
    return ((this.headers = jo(this.headers, t, e)), this);
  }
  async handleOperation(t) {
    var e = this;
    try {
      return { data: await t(), error: null };
    } catch (n) {
      if (e.shouldThrowOnError) throw n;
      if (tl(n)) return { data: null, error: n };
      throw n;
    }
  }
};
let b0;
b0 = Symbol.toStringTag;
var px = class {
  constructor(t, e) {
    ((this.downloadFn = t),
      (this.shouldThrowOnError = e),
      (this[b0] = "StreamDownloadBuilder"),
      (this.promise = null));
  }
  then(t, e) {
    return this.getPromise().then(t, e);
  }
  catch(t) {
    return this.getPromise().catch(t);
  }
  finally(t) {
    return this.getPromise().finally(t);
  }
  getPromise() {
    return (this.promise || (this.promise = this.execute()), this.promise);
  }
  async execute() {
    var t = this;
    try {
      return { data: (await t.downloadFn()).body, error: null };
    } catch (e) {
      if (t.shouldThrowOnError) throw e;
      if (tl(e)) return { data: null, error: e };
      throw e;
    }
  }
};
let k0;
k0 = Symbol.toStringTag;
var mx = class {
  constructor(t, e) {
    ((this.downloadFn = t),
      (this.shouldThrowOnError = e),
      (this[k0] = "BlobDownloadBuilder"),
      (this.promise = null));
  }
  asStream() {
    return new px(this.downloadFn, this.shouldThrowOnError);
  }
  then(t, e) {
    return this.getPromise().then(t, e);
  }
  catch(t) {
    return this.getPromise().catch(t);
  }
  finally(t) {
    return this.getPromise().finally(t);
  }
  getPromise() {
    return (this.promise || (this.promise = this.execute()), this.promise);
  }
  async execute() {
    var t = this;
    try {
      return { data: await (await t.downloadFn()).blob(), error: null };
    } catch (e) {
      if (t.shouldThrowOnError) throw e;
      if (tl(e)) return { data: null, error: e };
      throw e;
    }
  }
};
const Ml = { limit: 100, offset: 0, sortBy: { column: "name", order: "asc" } },
  Nh = {
    cacheControl: "3600",
    contentType: "text/plain;charset=UTF-8",
    upsert: !1,
  };
var gx = class extends Fs {
  constructor(t, e = {}, n, r) {
    (super(t, e, r, "storage"), (this.bucketId = n));
  }
  async uploadOrUpdate(t, e, n, r) {
    var s = this;
    return s.handleOperation(async () => {
      let i;
      const a = le(le({}, Nh), r);
      let l = le(
        le({}, s.headers),
        t === "POST" && { "x-upsert": String(a.upsert) },
      );
      const c = a.metadata;
      if (
        ((typeof Blob < "u" && n instanceof Blob) ||
        (typeof FormData < "u" && n instanceof FormData)
          ? (i = s.prepareUploadFormData(n, a))
          : ((i = n),
            (l["cache-control"] = `max-age=${a.cacheControl}`),
            (l["content-type"] = a.contentType),
            a.contentEncoding && (l["content-encoding"] = a.contentEncoding),
            c && (l["x-metadata"] = s.toBase64(s.encodeMetadata(c))),
            ((typeof ReadableStream < "u" && i instanceof ReadableStream) ||
              (i &&
                typeof i == "object" &&
                "pipe" in i &&
                typeof i.pipe == "function")) &&
              !a.duplex &&
              (a.duplex = "half")),
        r != null && r.headers)
      )
        for (const [h, p] of Object.entries(r.headers)) l = jo(l, h, p);
      const u = s._removeEmptyFolders(e),
        d = s._getFinalPath(u),
        f = await (t == "PUT" ? To : hn)(
          s.fetch,
          `${s.url}/object/${d}`,
          i,
          le({ headers: l }, a != null && a.duplex ? { duplex: a.duplex } : {}),
        );
      return { path: u, id: f.Id, fullPath: f.Key };
    });
  }
  async upload(t, e, n) {
    return this.uploadOrUpdate("POST", t, e, n);
  }
  async uploadToSignedUrl(t, e, n, r) {
    var s = this;
    const i = s._removeEmptyFolders(t),
      a = s._getFinalPath(i),
      l = new URL(s.url + `/object/upload/sign/${a}`);
    return (
      l.searchParams.set("token", e),
      s.handleOperation(async () => {
        let c;
        const u = le(le({}, Nh), r);
        let d = le(le({}, s.headers), { "x-upsert": String(u.upsert) });
        const f = u.metadata;
        if (
          ((typeof Blob < "u" && n instanceof Blob) ||
          (typeof FormData < "u" && n instanceof FormData)
            ? (c = s.prepareUploadFormData(n, u))
            : ((c = n),
              (d["cache-control"] = `max-age=${u.cacheControl}`),
              (d["content-type"] = u.contentType),
              u.contentEncoding && (d["content-encoding"] = u.contentEncoding),
              f && (d["x-metadata"] = s.toBase64(s.encodeMetadata(f))),
              ((typeof ReadableStream < "u" && c instanceof ReadableStream) ||
                (c &&
                  typeof c == "object" &&
                  "pipe" in c &&
                  typeof c.pipe == "function")) &&
                !u.duplex &&
                (u.duplex = "half")),
          r != null && r.headers)
        )
          for (const [h, p] of Object.entries(r.headers)) d = jo(d, h, p);
        return {
          path: i,
          fullPath: (
            await To(
              s.fetch,
              l.toString(),
              c,
              le(
                { headers: d },
                u != null && u.duplex ? { duplex: u.duplex } : {},
              ),
            )
          ).Key,
        };
      })
    );
  }
  async createSignedUploadUrl(t, e) {
    var n = this;
    return n.handleOperation(async () => {
      let r = n._getFinalPath(t);
      const s = le({}, n.headers);
      e != null && e.upsert && (s["x-upsert"] = "true");
      const i = await hn(
          n.fetch,
          `${n.url}/object/upload/sign/${r}`,
          {},
          { headers: s },
        ),
        a = new URL(n.url + i.url),
        l = a.searchParams.get("token");
      if (!l) throw new el("No token returned by API");
      return { signedUrl: a.toString(), path: t, token: l };
    });
  }
  async update(t, e, n) {
    return this.uploadOrUpdate("PUT", t, e, n);
  }
  async move(t, e, n) {
    var r = this;
    return r.handleOperation(
      async () =>
        await hn(
          r.fetch,
          `${r.url}/object/move`,
          {
            bucketId: r.bucketId,
            sourceKey: t,
            destinationKey: e,
            destinationBucket: n == null ? void 0 : n.destinationBucket,
            sourceVersionId: n == null ? void 0 : n.sourceVersionId,
          },
          { headers: r.headers },
        ),
    );
  }
  async copy(t, e, n) {
    var r = this;
    return r.handleOperation(async () => {
      const s = n;
      return {
        path: (
          await hn(
            r.fetch,
            `${r.url}/object/copy`,
            {
              bucketId: r.bucketId,
              sourceKey: t,
              destinationKey: e,
              destinationBucket: n == null ? void 0 : n.destinationBucket,
              sourceVersionId: n == null ? void 0 : n.sourceVersionId,
              copyMetadata:
                typeof (s == null ? void 0 : s.copyMetadata) == "boolean"
                  ? s.copyMetadata
                  : void 0,
              metadata:
                (s == null ? void 0 : s.copyMetadata) === !1
                  ? s.metadata
                  : void 0,
            },
            { headers: r.headers },
          )
        ).Key,
      };
    });
  }
  async createSignedUrl(t, e, n) {
    var r = this;
    return r.handleOperation(async () => {
      let s = r._getFinalPath(t);
      const i =
        typeof (n == null ? void 0 : n.transform) == "object" &&
        n.transform !== null &&
        Object.keys(n.transform).length > 0;
      let a = await hn(
        r.fetch,
        `${r.url}/object/sign/${s}`,
        le(
          le({ expiresIn: e }, i ? { transform: n.transform } : {}),
          (n == null ? void 0 : n.versionId) != null
            ? { versionId: n.versionId }
            : {},
        ),
        { headers: r.headers },
      );
      const l = new URLSearchParams();
      (n != null &&
        n.download &&
        l.set("download", n.download === !0 ? "" : n.download),
        (n == null ? void 0 : n.cacheNonce) != null &&
          l.set("cacheNonce", String(n.cacheNonce)));
      const c = l.toString();
      return {
        signedUrl: encodeURI(`${r.url}${a.signedURL}${c ? `&${c}` : ""}`),
      };
    });
  }
  async createSignedUrls(t, e, n) {
    var r = this;
    return r.handleOperation(async () => {
      const s = await hn(
          r.fetch,
          `${r.url}/object/sign/${r.bucketId}`,
          { expiresIn: e, paths: t },
          { headers: r.headers },
        ),
        i = new URLSearchParams();
      (n != null &&
        n.download &&
        i.set("download", n.download === !0 ? "" : n.download),
        (n == null ? void 0 : n.cacheNonce) != null &&
          i.set("cacheNonce", String(n.cacheNonce)));
      const a = i.toString();
      return s.map((l) =>
        le(
          le({}, l),
          {},
          {
            signedUrl: l.signedURL
              ? encodeURI(`${r.url}${l.signedURL}${a ? `&${a}` : ""}`)
              : null,
          },
        ),
      );
    });
  }
  download(t, e, n) {
    const r =
        typeof (e == null ? void 0 : e.transform) == "object" &&
        e.transform !== null &&
        Object.keys(e.transform).length > 0
          ? "render/image/authenticated"
          : "object",
      s = new URLSearchParams();
    (e != null && e.transform && this.applyTransformOptsToQuery(s, e.transform),
      (e == null ? void 0 : e.cacheNonce) != null &&
        s.set("cacheNonce", String(e.cacheNonce)),
      (e == null ? void 0 : e.versionId) != null &&
        s.set("versionId", String(e.versionId)));
    const i = s.toString(),
      a = this._getFinalPath(t),
      l = () =>
        Ts(
          this.fetch,
          `${this.url}/${r}/${a}${i ? `?${i}` : ""}`,
          { headers: this.headers, noResolveJson: !0 },
          n,
        );
    return new mx(l, this.shouldThrowOnError);
  }
  async info(t, e) {
    var n = this;
    const r = n._getFinalPath(t),
      s = new URLSearchParams();
    (e == null ? void 0 : e.versionId) != null &&
      s.set("versionId", String(e.versionId));
    const i = s.toString();
    return n.handleOperation(async () =>
      Kc(
        await Ts(n.fetch, `${n.url}/object/info/${r}${i ? `?${i}` : ""}`, {
          headers: n.headers,
        }),
      ),
    );
  }
  async exists(t) {
    var e = this;
    const n = e._getFinalPath(t);
    try {
      return (
        await fx(e.fetch, `${e.url}/object/${n}`, { headers: e.headers }),
        { data: !0, error: null }
      );
    } catch (s) {
      if (e.shouldThrowOnError) throw s;
      if (tl(s)) {
        var r;
        const i =
          s instanceof qc
            ? s.status
            : s instanceof x0
              ? (r = s.originalError) === null || r === void 0
                ? void 0
                : r.status
              : void 0;
        if (i !== void 0 && [400, 404].includes(i))
          return { data: !1, error: s };
      }
      throw s;
    }
  }
  getPublicUrl(t, e) {
    const n = this._getFinalPath(t),
      r = new URLSearchParams();
    (e != null &&
      e.download &&
      r.set("download", e.download === !0 ? "" : e.download),
      e != null &&
        e.transform &&
        this.applyTransformOptsToQuery(r, e.transform),
      (e == null ? void 0 : e.cacheNonce) != null &&
        r.set("cacheNonce", String(e.cacheNonce)),
      (e == null ? void 0 : e.versionId) != null &&
        r.set("versionId", String(e.versionId)));
    const s = r.toString(),
      i =
        typeof (e == null ? void 0 : e.transform) == "object" &&
        e.transform !== null &&
        Object.keys(e.transform).length > 0
          ? "render/image"
          : "object";
    return {
      data: {
        publicUrl:
          encodeURI(`${this.url}/${i}/public/${n}`) + (s ? `?${s}` : ""),
      },
    };
  }
  async remove(t) {
    var e = this;
    return e.handleOperation(
      async () =>
        await Ns(
          e.fetch,
          `${e.url}/object/${e.bucketId}`,
          { prefixes: t },
          { headers: e.headers },
        ),
    );
  }
  async purgeCache(t, e, n) {
    var r = this;
    return r.handleOperation(async () => {
      const s = Gc(r._getFinalPath(t)),
        i = new URLSearchParams();
      e != null && e.transformations && i.set("transformations", "true");
      const a = i.toString();
      return await Ns(
        r.fetch,
        `${r.url}/cdn/${s}${a ? `?${a}` : ""}`,
        {},
        { headers: r.headers },
        n,
      );
    });
  }
  async list(t, e, n) {
    var r = this;
    return r.handleOperation(async () => {
      const s =
          e != null && e.sortBy ? le(le({}, Ml.sortBy), e.sortBy) : Ml.sortBy,
        i = le(le(le({}, Ml), e), {}, { sortBy: s, prefix: t || "" });
      return await hn(
        r.fetch,
        `${r.url}/object/list/${r.bucketId}`,
        i,
        { headers: r.headers },
        n,
      );
    });
  }
  async listV2(t, e) {
    var n = this;
    return n.handleOperation(async () => {
      const r = le({}, t);
      return await hn(
        n.fetch,
        `${n.url}/object/list-v2/${n.bucketId}`,
        r,
        { headers: n.headers },
        e,
      );
    });
  }
  prepareUploadFormData(t, e) {
    const n = new FormData(),
      r = [];
    (t instanceof FormData
      ? t.forEach((s, i) => {
          typeof s == "string" ? n.append(i, s) : r.push([i, s]);
        })
      : r.push(["", t]),
      n.has("cacheControl") || n.append("cacheControl", e.cacheControl),
      e.metadata &&
        !n.has("metadata") &&
        n.append("metadata", this.encodeMetadata(e.metadata)),
      e.contentEncoding &&
        !n.has("contentEncoding") &&
        n.append("contentEncoding", e.contentEncoding));
    for (const [s, i] of r) n.append(s, i);
    return n;
  }
  encodeMetadata(t) {
    return JSON.stringify(t);
  }
  toBase64(t) {
    return typeof Buffer < "u" ? Buffer.from(t).toString("base64") : btoa(t);
  }
  _getFinalPath(t) {
    return `${this.bucketId}/${t.replace(/^\/+/, "")}`;
  }
  _removeEmptyFolders(t) {
    return t.replace(/^\/|\/$/g, "").replace(/\/+/g, "/");
  }
  applyTransformOptsToQuery(t, e) {
    return (
      e.width && t.set("width", e.width.toString()),
      e.height && t.set("height", e.height.toString()),
      e.resize && t.set("resize", e.resize),
      e.format && t.set("format", e.format),
      e.quality && t.set("quality", e.quality.toString()),
      t
    );
  }
};
const vx = "2.118.0",
  Qi = { "X-Client-Info": `storage-js/${vx}` };
var yx = class extends Fs {
    constructor(t, e = {}, n, r) {
      const s = new URL(t);
      r != null &&
        r.useNewHostname &&
        /supabase\.(co|in|red)$/.test(s.hostname) &&
        !s.hostname.includes("storage.supabase.") &&
        (s.hostname = s.hostname.replace("supabase.", "storage.supabase."));
      const i = s.href.replace(/\/$/, ""),
        a = le(le({}, Qi), e);
      super(i, a, n, "storage");
    }
    async listBuckets(t) {
      var e = this;
      return e.handleOperation(async () => {
        const n = e.listBucketOptionsToQueryString(t);
        return await Ts(e.fetch, `${e.url}/bucket${n}`, { headers: e.headers });
      });
    }
    async getBucket(t) {
      var e = this;
      return e.handleOperation(
        async () =>
          await Ts(e.fetch, `${e.url}/bucket/${t}`, { headers: e.headers }),
      );
    }
    async createBucket(t, e = { public: !1 }) {
      var n = this;
      return n.handleOperation(
        async () =>
          await hn(
            n.fetch,
            `${n.url}/bucket`,
            {
              id: t,
              name: t,
              type: e.type,
              public: e.public,
              file_size_limit: e.fileSizeLimit,
              allowed_mime_types: e.allowedMimeTypes,
              versioning_status: e.versioningStatus,
            },
            { headers: n.headers },
          ),
      );
    }
    async updateBucket(t, e) {
      var n = this;
      return n.handleOperation(
        async () =>
          await To(
            n.fetch,
            `${n.url}/bucket/${t}`,
            {
              id: t,
              name: t,
              public: e.public,
              file_size_limit: e.fileSizeLimit,
              allowed_mime_types: e.allowedMimeTypes,
              versioning_status: e.versioningStatus,
            },
            { headers: n.headers },
          ),
      );
    }
    async emptyBucket(t) {
      var e = this;
      return e.handleOperation(
        async () =>
          await hn(
            e.fetch,
            `${e.url}/bucket/${t}/empty`,
            {},
            { headers: e.headers },
          ),
      );
    }
    async deleteBucket(t) {
      var e = this;
      return e.handleOperation(
        async () =>
          await Ns(e.fetch, `${e.url}/bucket/${t}`, {}, { headers: e.headers }),
      );
    }
    async getBucketLifecycle(t) {
      var e = this;
      return e.handleOperation(
        async () =>
          await Ts(e.fetch, e.bucketLifecycleUrl(t), { headers: e.headers }),
      );
    }
    async updateBucketLifecycle(t, e) {
      var n = this;
      return n.handleOperation(
        async () =>
          await To(n.fetch, n.bucketLifecycleUrl(t), e, { headers: n.headers }),
      );
    }
    async deleteBucketLifecycle(t) {
      var e = this;
      return e.handleOperation(
        async () =>
          await Ns(
            e.fetch,
            e.bucketLifecycleUrl(t),
            {},
            { headers: e.headers },
          ),
      );
    }
    async purgeBucketCache(t, e, n) {
      var r = this;
      return r.handleOperation(async () => {
        const s = new URLSearchParams();
        e != null && e.transformations && s.set("transformations", "true");
        const i = s.toString();
        return await Ns(
          r.fetch,
          `${r.url}/cdn/${Gc(t)}${i ? `?${i}` : ""}`,
          {},
          { headers: r.headers },
          n,
        );
      });
    }
    bucketLifecycleUrl(t) {
      return `${this.url}/bucket/${Gc(t)}/lifecycle`;
    }
    listBucketOptionsToQueryString(t) {
      const e = {};
      return (
        t &&
          ("limit" in t && (e.limit = String(t.limit)),
          "offset" in t && (e.offset = String(t.offset)),
          t.search && (e.search = t.search),
          t.sortColumn && (e.sortColumn = t.sortColumn),
          t.sortOrder && (e.sortOrder = t.sortOrder)),
        Object.keys(e).length > 0 ? "?" + new URLSearchParams(e).toString() : ""
      );
    }
  },
  wx = class extends Fs {
    constructor(t, e = {}, n) {
      const r = t.replace(/\/$/, ""),
        s = le(le({}, Qi), e);
      super(r, s, n, "storage");
    }
    async createBucket(t) {
      var e = this;
      return e.handleOperation(
        async () =>
          await hn(
            e.fetch,
            `${e.url}/bucket`,
            { name: t },
            { headers: e.headers },
          ),
      );
    }
    async listBuckets(t) {
      var e = this;
      return e.handleOperation(async () => {
        const n = new URLSearchParams();
        ((t == null ? void 0 : t.limit) !== void 0 &&
          n.set("limit", t.limit.toString()),
          (t == null ? void 0 : t.offset) !== void 0 &&
            n.set("offset", t.offset.toString()),
          t != null && t.sortColumn && n.set("sortColumn", t.sortColumn),
          t != null && t.sortOrder && n.set("sortOrder", t.sortOrder),
          t != null && t.search && n.set("search", t.search));
        const r = n.toString(),
          s = r ? `${e.url}/bucket?${r}` : `${e.url}/bucket`;
        return await Ts(e.fetch, s, { headers: e.headers });
      });
    }
    async deleteBucket(t) {
      var e = this;
      return e.handleOperation(
        async () =>
          await Ns(e.fetch, `${e.url}/bucket/${t}`, {}, { headers: e.headers }),
      );
    }
    from(t) {
      var e = this;
      if (!cx(t))
        throw new el(
          "Invalid bucket name: File, folder, and bucket names must follow AWS object key naming guidelines and should avoid the use of any other characters.",
        );
      const n = new nx({
          baseUrl: this.url,
          catalogName: t,
          auth: { type: "custom", getHeaders: async () => e.headers },
          fetch: this.fetch,
        }),
        r = this.shouldThrowOnError;
      return new Proxy(n, {
        get(s, i) {
          const a = s[i];
          return typeof a != "function"
            ? a
            : async (...l) => {
                try {
                  return { data: await a.apply(s, l), error: null };
                } catch (c) {
                  if (r) throw c;
                  return { data: null, error: c };
                }
              };
        },
      });
    }
  },
  xx = class extends Fs {
    constructor(t, e = {}, n) {
      const r = t.replace(/\/$/, ""),
        s = le(le({}, Qi), {}, { "Content-Type": "application/json" }, e);
      super(r, s, n, "vectors");
    }
    async createIndex(t) {
      var e = this;
      return e.handleOperation(
        async () =>
          (await qt.post(e.fetch, `${e.url}/CreateIndex`, t, {
            headers: e.headers,
          })) || {},
      );
    }
    async getIndex(t, e) {
      var n = this;
      return n.handleOperation(
        async () =>
          await qt.post(
            n.fetch,
            `${n.url}/GetIndex`,
            { vectorBucketName: t, indexName: e },
            { headers: n.headers },
          ),
      );
    }
    async listIndexes(t) {
      var e = this;
      return e.handleOperation(
        async () =>
          await qt.post(e.fetch, `${e.url}/ListIndexes`, t, {
            headers: e.headers,
          }),
      );
    }
    async deleteIndex(t, e) {
      var n = this;
      return n.handleOperation(
        async () =>
          (await qt.post(
            n.fetch,
            `${n.url}/DeleteIndex`,
            { vectorBucketName: t, indexName: e },
            { headers: n.headers },
          )) || {},
      );
    }
  },
  _x = class extends Fs {
    constructor(t, e = {}, n) {
      const r = t.replace(/\/$/, ""),
        s = le(le({}, Qi), {}, { "Content-Type": "application/json" }, e);
      super(r, s, n, "vectors");
    }
    async putVectors(t) {
      var e = this;
      if (t.vectors.length < 1 || t.vectors.length > 500)
        throw new Error("Vector batch size must be between 1 and 500 items");
      return e.handleOperation(
        async () =>
          (await qt.post(e.fetch, `${e.url}/PutVectors`, t, {
            headers: e.headers,
          })) || {},
      );
    }
    async getVectors(t) {
      var e = this;
      return e.handleOperation(
        async () =>
          await qt.post(e.fetch, `${e.url}/GetVectors`, t, {
            headers: e.headers,
          }),
      );
    }
    async listVectors(t) {
      var e = this;
      if (t.segmentCount !== void 0) {
        if (t.segmentCount < 1 || t.segmentCount > 16)
          throw new Error("segmentCount must be between 1 and 16");
        if (
          t.segmentIndex !== void 0 &&
          (t.segmentIndex < 0 || t.segmentIndex >= t.segmentCount)
        )
          throw new Error(
            `segmentIndex must be between 0 and ${t.segmentCount - 1}`,
          );
      }
      return e.handleOperation(
        async () =>
          await qt.post(e.fetch, `${e.url}/ListVectors`, t, {
            headers: e.headers,
          }),
      );
    }
    async queryVectors(t) {
      var e = this;
      return e.handleOperation(
        async () =>
          await qt.post(e.fetch, `${e.url}/QueryVectors`, t, {
            headers: e.headers,
          }),
      );
    }
    async deleteVectors(t) {
      var e = this;
      if (t.keys.length < 1 || t.keys.length > 500)
        throw new Error("Keys batch size must be between 1 and 500 items");
      return e.handleOperation(
        async () =>
          (await qt.post(e.fetch, `${e.url}/DeleteVectors`, t, {
            headers: e.headers,
          })) || {},
      );
    }
  },
  bx = class extends Fs {
    constructor(t, e = {}, n) {
      const r = t.replace(/\/$/, ""),
        s = le(le({}, Qi), {}, { "Content-Type": "application/json" }, e);
      super(r, s, n, "vectors");
    }
    async createBucket(t) {
      var e = this;
      return e.handleOperation(
        async () =>
          (await qt.post(
            e.fetch,
            `${e.url}/CreateVectorBucket`,
            { vectorBucketName: t },
            { headers: e.headers },
          )) || {},
      );
    }
    async getBucket(t) {
      var e = this;
      return e.handleOperation(
        async () =>
          await qt.post(
            e.fetch,
            `${e.url}/GetVectorBucket`,
            { vectorBucketName: t },
            { headers: e.headers },
          ),
      );
    }
    async listBuckets(t = {}) {
      var e = this;
      return e.handleOperation(
        async () =>
          await qt.post(e.fetch, `${e.url}/ListVectorBuckets`, t, {
            headers: e.headers,
          }),
      );
    }
    async deleteBucket(t) {
      var e = this;
      return e.handleOperation(
        async () =>
          (await qt.post(
            e.fetch,
            `${e.url}/DeleteVectorBucket`,
            { vectorBucketName: t },
            { headers: e.headers },
          )) || {},
      );
    }
  },
  kx = class extends bx {
    constructor(t, e = {}) {
      super(t, e.headers || {}, e.fetch);
    }
    from(t) {
      return new Sx(this.url, this.headers, t, this.fetch);
    }
    async createBucket(t) {
      var e = () => super.createBucket,
        n = this;
      return e().call(n, t);
    }
    async getBucket(t) {
      var e = () => super.getBucket,
        n = this;
      return e().call(n, t);
    }
    async listBuckets(t = {}) {
      var e = () => super.listBuckets,
        n = this;
      return e().call(n, t);
    }
    async deleteBucket(t) {
      var e = () => super.deleteBucket,
        n = this;
      return e().call(n, t);
    }
  },
  Sx = class extends xx {
    constructor(t, e, n, r) {
      (super(t, e, r), (this.vectorBucketName = n));
    }
    async createIndex(t) {
      var e = () => super.createIndex,
        n = this;
      return e().call(
        n,
        le(le({}, t), {}, { vectorBucketName: n.vectorBucketName }),
      );
    }
    async listIndexes(t = {}) {
      var e = () => super.listIndexes,
        n = this;
      return e().call(
        n,
        le(le({}, t), {}, { vectorBucketName: n.vectorBucketName }),
      );
    }
    async getIndex(t) {
      var e = () => super.getIndex,
        n = this;
      return e().call(n, n.vectorBucketName, t);
    }
    async deleteIndex(t) {
      var e = () => super.deleteIndex,
        n = this;
      return e().call(n, n.vectorBucketName, t);
    }
    index(t) {
      return new Ex(
        this.url,
        this.headers,
        this.vectorBucketName,
        t,
        this.fetch,
      );
    }
  },
  Ex = class extends _x {
    constructor(t, e, n, r, s) {
      (super(t, e, s), (this.vectorBucketName = n), (this.indexName = r));
    }
    async putVectors(t) {
      var e = () => super.putVectors,
        n = this;
      return e().call(
        n,
        le(
          le({}, t),
          {},
          { vectorBucketName: n.vectorBucketName, indexName: n.indexName },
        ),
      );
    }
    async getVectors(t) {
      var e = () => super.getVectors,
        n = this;
      return e().call(
        n,
        le(
          le({}, t),
          {},
          { vectorBucketName: n.vectorBucketName, indexName: n.indexName },
        ),
      );
    }
    async listVectors(t = {}) {
      var e = () => super.listVectors,
        n = this;
      return e().call(
        n,
        le(
          le({}, t),
          {},
          { vectorBucketName: n.vectorBucketName, indexName: n.indexName },
        ),
      );
    }
    async queryVectors(t) {
      var e = () => super.queryVectors,
        n = this;
      return e().call(
        n,
        le(
          le({}, t),
          {},
          { vectorBucketName: n.vectorBucketName, indexName: n.indexName },
        ),
      );
    }
    async deleteVectors(t) {
      var e = () => super.deleteVectors,
        n = this;
      return e().call(
        n,
        le(
          le({}, t),
          {},
          { vectorBucketName: n.vectorBucketName, indexName: n.indexName },
        ),
      );
    }
  },
  jx = class extends yx {
    constructor(t, e = {}, n, r) {
      super(t, e, n, r);
    }
    from(t) {
      return new gx(this.url, this.headers, t, this.fetch);
    }
    get vectors() {
      return new kx(this.url + "/vector", {
        headers: this.headers,
        fetch: this.fetch,
      });
    }
    get analytics() {
      return new wx(this.url + "/iceberg", this.headers, this.fetch);
    }
  };
const S0 = "2.118.0",
  Bn = 30 * 1e3,
  ui = 3,
  $l = ui * Bn,
  Tx = 2 * Bn,
  Nx = "http://localhost:9999",
  Cx = "supabase.auth.token",
  Rx = { "X-Client-Info": `gotrue-js/${S0}` },
  Jc = "X-Supabase-Api-Version",
  E0 = {
    "2024-01-01": {
      timestamp: Date.parse("2024-01-01T00:00:00.0Z"),
      name: "2024-01-01",
    },
  },
  Ax = /^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}$|[a-z0-9_-]{2}$)$/i,
  Lr = "sb_flow_id",
  Px = 5,
  Ox = 10 * 60 * 1e3;
class Hi extends Error {
  constructor(e, n, r) {
    (super(e),
      (this.__isAuthError = !0),
      (this.name = "AuthError"),
      (this.status = n),
      (this.code = r));
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      status: this.status,
      code: this.code,
    };
  }
}
function W(t) {
  return typeof t == "object" && t !== null && "__isAuthError" in t;
}
class Ix extends Hi {
  constructor(e, n, r) {
    (super(e, n, r),
      (this.name = "AuthApiError"),
      (this.status = n),
      (this.code = r));
  }
}
function Ch(t) {
  return W(t) && t.name === "AuthApiError";
}
class mn extends Hi {
  constructor(e, n) {
    (super(e), (this.name = "AuthUnknownError"), (this.originalError = n));
  }
}
class On extends Hi {
  constructor(e, n, r, s) {
    (super(e, r, s), (this.name = n), (this.status = r));
  }
}
class ht extends On {
  constructor() {
    super("Auth session missing!", "AuthSessionMissingError", 400, void 0);
  }
}
function Sa(t) {
  return W(t) && t.name === "AuthSessionMissingError";
}
class Zr extends On {
  constructor() {
    super(
      "Auth session or user missing",
      "AuthInvalidTokenResponseError",
      500,
      void 0,
    );
  }
}
class Ea extends On {
  constructor(e) {
    super(e, "AuthInvalidCredentialsError", 400, void 0);
  }
}
class ja extends On {
  constructor(e, n = null) {
    (super(e, "AuthImplicitGrantRedirectError", 500, void 0),
      (this.details = null),
      (this.details = n));
  }
  toJSON() {
    return Object.assign(Object.assign({}, super.toJSON()), {
      details: this.details,
    });
  }
}
function Lx(t) {
  return W(t) && t.name === "AuthImplicitGrantRedirectError";
}
class Rh extends On {
  constructor(e, n = null) {
    (super(e, "AuthPKCEGrantCodeExchangeError", 500, void 0),
      (this.details = null),
      (this.details = n));
  }
  toJSON() {
    return Object.assign(Object.assign({}, super.toJSON()), {
      details: this.details,
    });
  }
}
class Mx extends On {
  constructor() {
    super(
      "PKCE code verifier not found in storage. This can happen if the auth flow was initiated in a different browser or device, or if the storage was cleared. For SSR frameworks (Next.js, SvelteKit, etc.), use @supabase/ssr on both the server and client to store the code verifier in cookies.",
      "AuthPKCECodeVerifierMissingError",
      400,
      "pkce_code_verifier_not_found",
    );
  }
}
class Ja extends On {
  constructor(e, n) {
    super(e, "AuthRetryableFetchError", n, void 0);
  }
}
function Ta(t) {
  return W(t) && t.name === "AuthRetryableFetchError";
}
class Ah extends On {
  constructor(
    e = "Refresh result discarded: session state changed mid-flight (e.g., concurrent signOut)",
  ) {
    super(e, "AuthRefreshDiscardedError", 409, void 0);
  }
}
function Ph(t) {
  return W(t) && t.name === "AuthRefreshDiscardedError";
}
class Oh extends On {
  constructor(e, n, r) {
    (super(e, "AuthWeakPasswordError", n, "weak_password"), (this.reasons = r));
  }
  toJSON() {
    return Object.assign(Object.assign({}, super.toJSON()), {
      reasons: this.reasons,
    });
  }
}
class No extends On {
  constructor(e) {
    super(e, "AuthInvalidJwtError", 400, "invalid_jwt");
  }
}
const Co =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".split(
      "",
    ),
  Ih = ` 	
\r=`.split(""),
  $x = (() => {
    const t = new Array(128);
    for (let e = 0; e < t.length; e += 1) t[e] = -1;
    for (let e = 0; e < Ih.length; e += 1) t[Ih[e].charCodeAt(0)] = -2;
    for (let e = 0; e < Co.length; e += 1) t[Co[e].charCodeAt(0)] = e;
    return t;
  })();
function Lh(t, e, n) {
  if (t !== null)
    for (e.queue = (e.queue << 8) | t, e.queuedBits += 8; e.queuedBits >= 6; ) {
      const r = (e.queue >> (e.queuedBits - 6)) & 63;
      (n(Co[r]), (e.queuedBits -= 6));
    }
  else if (e.queuedBits > 0)
    for (
      e.queue = e.queue << (6 - e.queuedBits), e.queuedBits = 6;
      e.queuedBits >= 6;

    ) {
      const r = (e.queue >> (e.queuedBits - 6)) & 63;
      (n(Co[r]), (e.queuedBits -= 6));
    }
}
function j0(t, e, n) {
  const r = $x[t];
  if (r > -1)
    for (e.queue = (e.queue << 6) | r, e.queuedBits += 6; e.queuedBits >= 8; )
      (n((e.queue >> (e.queuedBits - 8)) & 255), (e.queuedBits -= 8));
  else {
    if (r === -2) return;
    throw new Error(`Invalid Base64-URL character "${String.fromCharCode(t)}"`);
  }
}
function Mh(t) {
  const e = [],
    n = (a) => {
      e.push(String.fromCodePoint(a));
    },
    r = { utf8seq: 0, codepoint: 0 },
    s = { queue: 0, queuedBits: 0 },
    i = (a) => {
      Bx(a, r, n);
    };
  for (let a = 0; a < t.length; a += 1) j0(t.charCodeAt(a), s, i);
  return e.join("");
}
function Dx(t, e) {
  if (t <= 127) {
    e(t);
    return;
  } else if (t <= 2047) {
    (e(192 | (t >> 6)), e(128 | (t & 63)));
    return;
  } else if (t <= 65535) {
    (e(224 | (t >> 12)), e(128 | ((t >> 6) & 63)), e(128 | (t & 63)));
    return;
  } else if (t <= 1114111) {
    (e(240 | (t >> 18)),
      e(128 | ((t >> 12) & 63)),
      e(128 | ((t >> 6) & 63)),
      e(128 | (t & 63)));
    return;
  }
  throw new Error(`Unrecognized Unicode codepoint: ${t.toString(16)}`);
}
function Ux(t, e) {
  for (let n = 0; n < t.length; n += 1) {
    let r = t.charCodeAt(n);
    if (r > 55295 && r <= 56319) {
      const s = ((r - 55296) * 1024) & 65535;
      ((r = (((t.charCodeAt(n + 1) - 56320) & 65535) | s) + 65536), (n += 1));
    }
    Dx(r, e);
  }
}
function Bx(t, e, n) {
  if (e.utf8seq === 0) {
    if (t <= 127) {
      n(t);
      return;
    }
    for (let r = 1; r < 6; r += 1)
      if (!((t >> (7 - r)) & 1)) {
        e.utf8seq = r;
        break;
      }
    if (e.utf8seq === 2) e.codepoint = t & 31;
    else if (e.utf8seq === 3) e.codepoint = t & 15;
    else if (e.utf8seq === 4) e.codepoint = t & 7;
    else throw new Error("Invalid UTF-8 sequence");
    e.utf8seq -= 1;
  } else if (e.utf8seq > 0) {
    if (t <= 127) throw new Error("Invalid UTF-8 sequence");
    ((e.codepoint = (e.codepoint << 6) | (t & 63)),
      (e.utf8seq -= 1),
      e.utf8seq === 0 && n(e.codepoint));
  }
}
function Cs(t) {
  const e = [],
    n = { queue: 0, queuedBits: 0 },
    r = (s) => {
      e.push(s);
    };
  for (let s = 0; s < t.length; s += 1) j0(t.charCodeAt(s), n, r);
  return new Uint8Array(e);
}
function zx(t) {
  const e = [];
  return (Ux(t, (n) => e.push(n)), new Uint8Array(e));
}
function Mr(t) {
  const e = [],
    n = { queue: 0, queuedBits: 0 },
    r = (s) => {
      e.push(s);
    };
  return (t.forEach((s) => Lh(s, n, r)), Lh(null, n, r), e.join(""));
}
function T0(t) {
  return Math.round(Date.now() / 1e3) + t;
}
function Fx() {
  return Symbol("auth-callback");
}
const vt = () => typeof window < "u" && typeof document < "u",
  Er = { tested: !1, writable: !1 },
  N0 = () => {
    if (!vt()) return !1;
    try {
      if (typeof globalThis.localStorage != "object") return !1;
    } catch {
      return !1;
    }
    if (Er.tested) return Er.writable;
    const t = `lswt-${Math.random()}${Math.random()}`;
    try {
      (globalThis.localStorage.setItem(t, t),
        globalThis.localStorage.removeItem(t),
        (Er.tested = !0),
        (Er.writable = !0));
    } catch {
      ((Er.tested = !0), (Er.writable = !1));
    }
    return Er.writable;
  };
function $h(t) {
  const e = {},
    n = new URL(t);
  if (n.hash && n.hash[0] === "#")
    try {
      new URLSearchParams(n.hash.substring(1)).forEach((s, i) => {
        e[i] = s;
      });
    } catch {}
  return (
    n.searchParams.forEach((r, s) => {
      e[s] = r;
    }),
    e
  );
}
const C0 = (t) => (t ? (...e) => t(...e) : (...e) => fetch(...e)),
  Hx = (t) =>
    typeof t == "object" &&
    t !== null &&
    "status" in t &&
    "ok" in t &&
    "json" in t &&
    typeof t.json == "function",
  Fn = async (t, e, n) => {
    await t.setItem(e, JSON.stringify(n));
  },
  kt = async (t, e) => {
    const n = await t.getItem(e);
    if (!n) return null;
    try {
      return JSON.parse(n);
    } catch {
      return null;
    }
  },
  Mt = async (t, e) => {
    await t.removeItem(e);
  };
class nl {
  constructor() {
    this.promise = new nl.promiseConstructor((e, n) => {
      ((this.resolve = e), (this.reject = n));
    });
  }
}
nl.promiseConstructor = Promise;
function Na(t) {
  const e = t.split(".");
  if (e.length !== 3) throw new No("Invalid JWT structure");
  for (let r = 0; r < e.length; r++)
    if (!Ax.test(e[r])) throw new No("JWT not in base64url format");
  return {
    header: JSON.parse(Mh(e[0])),
    payload: JSON.parse(Mh(e[1])),
    signature: Cs(e[2]),
    raw: { header: e[0], payload: e[1] },
  };
}
async function Vx(t) {
  return await new Promise((e) => {
    setTimeout(() => e(null), t);
  });
}
function Wx(t, e) {
  return new Promise((r, s) => {
    (async () => {
      for (let i = 0; i < 1 / 0; i++)
        try {
          const a = await t(i);
          if (!e(i, null, a)) {
            r(a);
            return;
          }
        } catch (a) {
          if (!e(i, a)) {
            s(a);
            return;
          }
        }
    })();
  });
}
function R0(t) {
  return ("0" + t.toString(16)).substr(-2);
}
function qx() {
  const e = new Uint32Array(56);
  if (typeof crypto > "u") {
    const n =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~",
      r = n.length;
    let s = "";
    for (let i = 0; i < 56; i++) s += n.charAt(Math.floor(Math.random() * r));
    return s;
  }
  return (crypto.getRandomValues(e), Array.from(e, R0).join(""));
}
async function Kx(t) {
  const n = new TextEncoder().encode(t),
    r = await crypto.subtle.digest("SHA-256", n),
    s = new Uint8Array(r);
  return Array.from(s)
    .map((i) => String.fromCharCode(i))
    .join("");
}
async function Gx(t) {
  if (
    !(
      typeof crypto < "u" &&
      typeof crypto.subtle < "u" &&
      typeof TextEncoder < "u"
    )
  )
    return (
      console.warn(
        "WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256.",
      ),
      t
    );
  const n = await Kx(t);
  return btoa(n).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}
const Jx = /^[a-zA-Z0-9_-]{8,64}$/;
function Ya(t) {
  return typeof t == "string" && Jx.test(t) ? t : null;
}
function Yx() {
  if (typeof crypto < "u" && typeof crypto.getRandomValues == "function") {
    const e = new Uint8Array(16);
    return (crypto.getRandomValues(e), Array.from(e, R0).join(""));
  }
  let t = "";
  for (let e = 0; e < 32; e++) t += Math.floor(Math.random() * 16).toString(16);
  return t;
}
const $s = (t, e) => `${t}-flow-${e}-code-verifier`,
  Vi = (t) => `${t}-flows-code-verifier`;
async function Qu(t, e) {
  const n = await kt(t, Vi(e));
  return Array.isArray(n) ? n.filter((r) => Ya(r) !== null) : [];
}
async function Xx(t, e, n, r, s) {
  await Fn(t, $s(e, n), r);
  const i = (await Qu(t, e)).filter((a) => a !== n);
  for (i.push(n); i.length > Px; ) {
    const a = i.shift();
    (await Mt(t, $s(e, a)), s == null || s(a));
  }
  (await Fn(t, Vi(e), i), await Fn(t, `${e}-code-verifier`, r));
}
async function Zx(t, e, n) {
  if (n) {
    const s = await kt(t, $s(e, n));
    return { verifier: typeof s == "string" ? s : null, flowId: n };
  }
  const r = await kt(t, `${e}-code-verifier`);
  return { verifier: typeof r == "string" ? r : null, flowId: null };
}
async function cn(t, e, n) {
  const r = `${e}-code-verifier`;
  if (!n) {
    await Mt(t, r);
    return;
  }
  const s = $s(e, n),
    i = await kt(t, s);
  await Mt(t, s);
  const a = await Qu(t, e),
    l = a.filter((c) => c !== n);
  (l.length !== a.length &&
    (l.length > 0 ? await Fn(t, Vi(e), l) : await Mt(t, Vi(e))),
    i != null && i === (await kt(t, r)) && (await Mt(t, r)));
}
async function Qx(t, e) {
  const n = await Qu(t, e);
  for (const r of n) await Mt(t, $s(e, r));
  (await Mt(t, Vi(e)), await Mt(t, `${e}-code-verifier`));
}
function e_(t, e) {
  const n = t.indexOf("#");
  let r = n === -1 ? t : t.slice(0, n);
  const s = n === -1 ? "" : t.slice(n),
    i = r.indexOf("?");
  if (i !== -1) {
    const l = r.slice(0, i),
      c = r
        .slice(i + 1)
        .split("&")
        .filter((u) => u !== "" && u !== Lr && !u.startsWith(`${Lr}=`));
    r = c.length > 0 ? `${l}?${c.join("&")}` : l;
  }
  const a = r.includes("?") ? "&" : "?";
  return `${r}${a}${Lr}=${encodeURIComponent(e)}${s}`;
}
async function t_(t, e, n = !1, r) {
  const s = qx();
  let i = s;
  n && (i += "/recovery");
  const a = Yx();
  await Xx(t, e, a, i, r);
  const l = await Gx(s);
  return [l, s === l ? "plain" : "s256", a];
}
const n_ = /^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i;
function r_(t) {
  const e = t.headers.get(Jc);
  if (!e || !e.match(n_)) return null;
  try {
    return new Date(`${e}T00:00:00.0Z`);
  } catch {
    return null;
  }
}
function s_(t) {
  if (!t) throw new Error("Missing exp claim");
  const e = Math.floor(Date.now() / 1e3);
  if (t <= e) throw new Error("JWT has expired");
}
function i_(t) {
  switch (t) {
    case "RS256":
      return { name: "RSASSA-PKCS1-v1_5", hash: { name: "SHA-256" } };
    case "ES256":
      return { name: "ECDSA", namedCurve: "P-256", hash: { name: "SHA-256" } };
    default:
      throw new Error("Invalid alg claim");
  }
}
const a_ = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
function Ln(t) {
  if (!a_.test(t))
    throw new Error(
      "@supabase/auth-js: Expected parameter to be UUID but is not",
    );
}
function ti(t) {
  if (!t.recoveryCodes)
    throw new Error(
      "@supabase/auth-js: the MFA recovery codes API is experimental and disabled by default. Enable it by passing `auth: { experimental: { recoveryCodes: true } }` to createClient (or to the GoTrueClient constructor).",
    );
}
function Dl() {
  const t = {};
  return new Proxy(t, {
    get: (e, n) => {
      if (n === "__isUserNotAvailableProxy") return !0;
      if (typeof n == "symbol") {
        const r = n.toString();
        if (
          r === "Symbol(Symbol.toPrimitive)" ||
          r === "Symbol(Symbol.toStringTag)" ||
          r === "Symbol(util.inspect.custom)"
        )
          return;
      }
      throw new Error(
        `@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Accessing the "${n}" property of the session object is not supported. Please use getUser() instead.`,
      );
    },
    set: (e, n) => {
      throw new Error(
        `@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Setting the "${n}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`,
      );
    },
    deleteProperty: (e, n) => {
      throw new Error(
        `@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Deleting the "${n}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`,
      );
    },
  });
}
function o_(t, e) {
  return new Proxy(t, {
    get: (n, r, s) => {
      if (r === "__isInsecureUserWarningProxy") return !0;
      if (typeof r == "symbol") {
        const i = r.toString();
        if (
          i === "Symbol(Symbol.toPrimitive)" ||
          i === "Symbol(Symbol.toStringTag)" ||
          i === "Symbol(util.inspect.custom)" ||
          i === "Symbol(nodejs.util.inspect.custom)"
        )
          return Reflect.get(n, r, s);
      }
      return (
        !e.value &&
          typeof r == "string" &&
          (console.warn(
            "Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and may not be authentic. Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server.",
          ),
          (e.value = !0)),
        Reflect.get(n, r, s)
      );
    },
  });
}
function Dh(t) {
  return JSON.parse(JSON.stringify(t));
}
const Cr = (t) => {
    if (typeof t == "object" && t !== null) {
      const e = t;
      if (typeof e.msg == "string") return e.msg;
      if (typeof e.message == "string") return e.message;
      if (typeof e.error_description == "string") return e.error_description;
      if (typeof e.error == "string") return e.error;
    }
    return JSON.stringify(t);
  },
  Uh = [
    500, 501, 502, 503, 504, 520, 521, 522, 523, 524, 525, 526, 527, 528, 529,
    530,
  ];
async function Bh(t) {
  var e;
  if (!Hx(t)) throw new Ja(Cr(t), 0);
  let n;
  try {
    n = await t.json();
  } catch (i) {
    throw Uh.includes(t.status)
      ? new Ja(t.statusText || `HTTP ${t.status}`, t.status)
      : new mn(Cr(i), i);
  }
  if (Uh.includes(t.status)) throw new Ja(Cr(n), t.status);
  let r;
  const s = r_(t);
  if (
    (s &&
    s.getTime() >= E0["2024-01-01"].timestamp &&
    typeof n == "object" &&
    n &&
    typeof n.code == "string"
      ? (r = n.code)
      : typeof n == "object" &&
        n &&
        typeof n.error_code == "string" &&
        (r = n.error_code),
    r)
  ) {
    if (r === "weak_password")
      throw new Oh(
        Cr(n),
        t.status,
        ((e = n.weak_password) === null || e === void 0 ? void 0 : e.reasons) ||
          [],
      );
    if (r === "session_not_found") throw new ht();
  } else if (
    typeof n == "object" &&
    n &&
    typeof n.weak_password == "object" &&
    n.weak_password &&
    Array.isArray(n.weak_password.reasons) &&
    n.weak_password.reasons.length &&
    n.weak_password.reasons.reduce((i, a) => i && typeof a == "string", !0)
  )
    throw new Oh(Cr(n), t.status, n.weak_password.reasons);
  throw new Ix(Cr(n), t.status || 500, r);
}
const l_ = (t, e, n, r) => {
  const s = { method: t, headers: (e == null ? void 0 : e.headers) || {} };
  return t === "GET"
    ? s
    : ((s.headers = Object.assign(
        { "Content-Type": "application/json;charset=UTF-8" },
        e == null ? void 0 : e.headers,
      )),
      (s.body = JSON.stringify(r)),
      Object.assign(Object.assign({}, s), n));
};
async function G(t, e, n, r) {
  var s;
  const i = Object.assign({}, r == null ? void 0 : r.headers);
  (i[Jc] || (i[Jc] = E0["2024-01-01"].name),
    r != null && r.jwt && (i.Authorization = `Bearer ${r.jwt}`));
  const a =
    (s = r == null ? void 0 : r.query) !== null && s !== void 0 ? s : {};
  r != null && r.redirectTo && (a.redirect_to = r.redirectTo);
  const l = Object.keys(a).length
      ? "?" + new URLSearchParams(a).toString()
      : "",
    c = await c_(
      t,
      e,
      n + l,
      { headers: i, noResolveJson: r == null ? void 0 : r.noResolveJson },
      {},
      r == null ? void 0 : r.body,
    );
  return r != null && r.xform
    ? r == null
      ? void 0
      : r.xform(c)
    : { data: Object.assign({}, c), error: null };
}
async function c_(t, e, n, r, s, i) {
  const a = l_(e, r, s, i);
  let l;
  try {
    l = await t(n, Object.assign({}, a));
  } catch (c) {
    throw new Ja(Cr(c), 0);
  }
  if ((l.ok || (await Bh(l)), r != null && r.noResolveJson)) return l;
  try {
    return await l.json();
  } catch (c) {
    await Bh(c);
  }
}
function Qt(t) {
  var e;
  let n = null;
  h_(t) &&
    ((n = Object.assign({}, t)),
    t.expires_at || (n.expires_at = T0(t.expires_in)));
  const r =
    (e = t.user) !== null && e !== void 0
      ? e
      : typeof (t == null ? void 0 : t.id) == "string"
        ? t
        : null;
  return { data: { session: n, user: r }, error: null };
}
function zh(t) {
  const e = Qt(t);
  return (
    !e.error &&
      t.weak_password &&
      typeof t.weak_password == "object" &&
      Array.isArray(t.weak_password.reasons) &&
      t.weak_password.reasons.length &&
      t.weak_password.message &&
      typeof t.weak_password.message == "string" &&
      t.weak_password.reasons.reduce((n, r) => n && typeof r == "string", !0) &&
      (e.data.weak_password = t.weak_password),
    e
  );
}
function ir(t) {
  var e;
  return {
    data: { user: (e = t.user) !== null && e !== void 0 ? e : t },
    error: null,
  };
}
function u_(t) {
  return { data: t, error: null };
}
function d_(t) {
  const {
      action_link: e,
      email_otp: n,
      hashed_token: r,
      redirect_to: s,
      verification_type: i,
    } = t,
    a = Qo(t, [
      "action_link",
      "email_otp",
      "hashed_token",
      "redirect_to",
      "verification_type",
    ]),
    l = {
      action_link: e,
      email_otp: n,
      hashed_token: r,
      redirect_to: s,
      verification_type: i,
    },
    c = Object.assign({}, a);
  return { data: { properties: l, user: c }, error: null };
}
function Fh(t) {
  return t;
}
function h_(t) {
  return !!t.access_token && !!t.refresh_token && !!t.expires_in;
}
const Ul = ["global", "local", "others"];
class f_ {
  constructor({ url: e = "", headers: n = {}, fetch: r, experimental: s }) {
    ((this.url = e),
      (this.headers = n),
      (this.fetch = C0(r)),
      (this.experimental = s ?? {}),
      (this.mfa = {
        listFactors: this._listFactors.bind(this),
        deleteFactor: this._deleteFactor.bind(this),
      }),
      (this.oauth = {
        listClients: this._listOAuthClients.bind(this),
        createClient: this._createOAuthClient.bind(this),
        getClient: this._getOAuthClient.bind(this),
        updateClient: this._updateOAuthClient.bind(this),
        deleteClient: this._deleteOAuthClient.bind(this),
        regenerateClientSecret: this._regenerateOAuthClientSecret.bind(this),
      }),
      (this.customProviders = {
        listProviders: this._listCustomProviders.bind(this),
        createProvider: this._createCustomProvider.bind(this),
        getProvider: this._getCustomProvider.bind(this),
        updateProvider: this._updateCustomProvider.bind(this),
        deleteProvider: this._deleteCustomProvider.bind(this),
      }),
      (this.passkey = {
        listPasskeys: this._adminListPasskeys.bind(this),
        deletePasskey: this._adminDeletePasskey.bind(this),
      }));
  }
  async signOut(e, n = Ul[0]) {
    if (Ul.indexOf(n) < 0)
      throw new Error(
        `@supabase/auth-js: Parameter scope must be one of ${Ul.join(", ")}`,
      );
    try {
      return (
        await G(this.fetch, "POST", `${this.url}/logout?scope=${n}`, {
          headers: this.headers,
          jwt: e,
          noResolveJson: !0,
        }),
        { data: null, error: null }
      );
    } catch (r) {
      if (W(r)) return { data: null, error: r };
      throw r;
    }
  }
  async inviteUserByEmail(e, n = {}) {
    try {
      return await G(this.fetch, "POST", `${this.url}/invite`, {
        body: { email: e, data: n.data },
        headers: this.headers,
        redirectTo: n.redirectTo,
        xform: ir,
      });
    } catch (r) {
      if (W(r)) return { data: { user: null }, error: r };
      throw r;
    }
  }
  async generateLink(e) {
    try {
      const { options: n } = e,
        r = Qo(e, ["options"]),
        s = Object.assign(Object.assign({}, r), n);
      return (
        "newEmail" in r &&
          ((s.new_email = r == null ? void 0 : r.newEmail), delete s.newEmail),
        await G(this.fetch, "POST", `${this.url}/admin/generate_link`, {
          body: s,
          headers: this.headers,
          xform: d_,
          redirectTo: n == null ? void 0 : n.redirectTo,
        })
      );
    } catch (n) {
      if (W(n)) return { data: { properties: null, user: null }, error: n };
      throw n;
    }
  }
  async createUser(e) {
    try {
      return await G(this.fetch, "POST", `${this.url}/admin/users`, {
        body: e,
        headers: this.headers,
        xform: ir,
      });
    } catch (n) {
      if (W(n)) return { data: { user: null }, error: n };
      throw n;
    }
  }
  async listUsers(e) {
    var n, r, s, i, a, l, c;
    try {
      const u = { nextPage: null, lastPage: 0, total: 0 },
        d = await G(this.fetch, "GET", `${this.url}/admin/users`, {
          headers: this.headers,
          noResolveJson: !0,
          query: {
            page:
              (r =
                (n = e == null ? void 0 : e.page) === null || n === void 0
                  ? void 0
                  : n.toString()) !== null && r !== void 0
                ? r
                : "",
            per_page:
              (i =
                (s = e == null ? void 0 : e.perPage) === null || s === void 0
                  ? void 0
                  : s.toString()) !== null && i !== void 0
                ? i
                : "",
          },
          xform: Fh,
        });
      if (d.error) throw d.error;
      const f = await d.json(),
        h =
          (a = d.headers.get("x-total-count")) !== null && a !== void 0 ? a : 0,
        p =
          (c =
            (l = d.headers.get("link")) === null || l === void 0
              ? void 0
              : l.split(",")) !== null && c !== void 0
            ? c
            : [];
      return (
        p.length > 0 &&
          (p.forEach((v) => {
            const x = parseInt(v.split(";")[0].split("=")[1].substring(0, 1)),
              _ = JSON.parse(v.split(";")[1].split("=")[1]);
            u[`${_}Page`] = x;
          }),
          (u.total = parseInt(h))),
        { data: Object.assign(Object.assign({}, f), u), error: null }
      );
    } catch (u) {
      if (W(u)) return { data: { users: [] }, error: u };
      throw u;
    }
  }
  async getUserById(e) {
    Ln(e);
    try {
      return await G(this.fetch, "GET", `${this.url}/admin/users/${e}`, {
        headers: this.headers,
        xform: ir,
      });
    } catch (n) {
      if (W(n)) return { data: { user: null }, error: n };
      throw n;
    }
  }
  async updateUserById(e, n) {
    Ln(e);
    try {
      return await G(this.fetch, "PUT", `${this.url}/admin/users/${e}`, {
        body: n,
        headers: this.headers,
        xform: ir,
      });
    } catch (r) {
      if (W(r)) return { data: { user: null }, error: r };
      throw r;
    }
  }
  async deleteUser(e, n = !1) {
    Ln(e);
    try {
      return await G(this.fetch, "DELETE", `${this.url}/admin/users/${e}`, {
        headers: this.headers,
        body: { should_soft_delete: n },
        xform: ir,
      });
    } catch (r) {
      if (W(r)) return { data: { user: null }, error: r };
      throw r;
    }
  }
  async _listFactors(e) {
    Ln(e.userId);
    try {
      const { data: n, error: r } = await G(
        this.fetch,
        "GET",
        `${this.url}/admin/users/${e.userId}/factors`,
        {
          headers: this.headers,
          xform: (s) => ({ data: { factors: s }, error: null }),
        },
      );
      return { data: n, error: r };
    } catch (n) {
      if (W(n)) return { data: null, error: n };
      throw n;
    }
  }
  async _deleteFactor(e) {
    (Ln(e.userId), Ln(e.id));
    try {
      return {
        data: await G(
          this.fetch,
          "DELETE",
          `${this.url}/admin/users/${e.userId}/factors/${e.id}`,
          { headers: this.headers },
        ),
        error: null,
      };
    } catch (n) {
      if (W(n)) return { data: null, error: n };
      throw n;
    }
  }
  async _listOAuthClients(e) {
    var n, r, s, i, a, l, c;
    try {
      const u = { nextPage: null, lastPage: 0, total: 0 },
        d = await G(this.fetch, "GET", `${this.url}/admin/oauth/clients`, {
          headers: this.headers,
          noResolveJson: !0,
          query: {
            page:
              (r =
                (n = e == null ? void 0 : e.page) === null || n === void 0
                  ? void 0
                  : n.toString()) !== null && r !== void 0
                ? r
                : "",
            per_page:
              (i =
                (s = e == null ? void 0 : e.perPage) === null || s === void 0
                  ? void 0
                  : s.toString()) !== null && i !== void 0
                ? i
                : "",
          },
          xform: Fh,
        });
      if (d.error) throw d.error;
      const f = await d.json(),
        h =
          (a = d.headers.get("x-total-count")) !== null && a !== void 0 ? a : 0,
        p =
          (c =
            (l = d.headers.get("link")) === null || l === void 0
              ? void 0
              : l.split(",")) !== null && c !== void 0
            ? c
            : [];
      return (
        p.length > 0 &&
          (p.forEach((v) => {
            const x = parseInt(v.split(";")[0].split("=")[1].substring(0, 1)),
              _ = JSON.parse(v.split(";")[1].split("=")[1]);
            u[`${_}Page`] = x;
          }),
          (u.total = parseInt(h))),
        { data: Object.assign(Object.assign({}, f), u), error: null }
      );
    } catch (u) {
      if (W(u)) return { data: { clients: [] }, error: u };
      throw u;
    }
  }
  async _createOAuthClient(e) {
    try {
      return await G(this.fetch, "POST", `${this.url}/admin/oauth/clients`, {
        body: e,
        headers: this.headers,
        xform: (n) => ({ data: n, error: null }),
      });
    } catch (n) {
      if (W(n)) return { data: null, error: n };
      throw n;
    }
  }
  async _getOAuthClient(e) {
    try {
      return await G(
        this.fetch,
        "GET",
        `${this.url}/admin/oauth/clients/${e}`,
        { headers: this.headers, xform: (n) => ({ data: n, error: null }) },
      );
    } catch (n) {
      if (W(n)) return { data: null, error: n };
      throw n;
    }
  }
  async _updateOAuthClient(e, n) {
    try {
      return await G(
        this.fetch,
        "PUT",
        `${this.url}/admin/oauth/clients/${e}`,
        {
          body: n,
          headers: this.headers,
          xform: (r) => ({ data: r, error: null }),
        },
      );
    } catch (r) {
      if (W(r)) return { data: null, error: r };
      throw r;
    }
  }
  async _deleteOAuthClient(e) {
    try {
      return (
        await G(this.fetch, "DELETE", `${this.url}/admin/oauth/clients/${e}`, {
          headers: this.headers,
          noResolveJson: !0,
        }),
        { data: null, error: null }
      );
    } catch (n) {
      if (W(n)) return { data: null, error: n };
      throw n;
    }
  }
  async _regenerateOAuthClientSecret(e) {
    try {
      return await G(
        this.fetch,
        "POST",
        `${this.url}/admin/oauth/clients/${e}/regenerate_secret`,
        { headers: this.headers, xform: (n) => ({ data: n, error: null }) },
      );
    } catch (n) {
      if (W(n)) return { data: null, error: n };
      throw n;
    }
  }
  async _listCustomProviders(e) {
    try {
      const n = {};
      return (
        e != null && e.type && (n.type = e.type),
        await G(this.fetch, "GET", `${this.url}/admin/custom-providers`, {
          headers: this.headers,
          query: n,
          xform: (r) => {
            var s;
            return {
              data: {
                providers:
                  (s = r == null ? void 0 : r.providers) !== null &&
                  s !== void 0
                    ? s
                    : [],
              },
              error: null,
            };
          },
        })
      );
    } catch (n) {
      if (W(n)) return { data: { providers: [] }, error: n };
      throw n;
    }
  }
  async _createCustomProvider(e) {
    try {
      return await G(this.fetch, "POST", `${this.url}/admin/custom-providers`, {
        body: e,
        headers: this.headers,
        xform: (n) => ({ data: n, error: null }),
      });
    } catch (n) {
      if (W(n)) return { data: null, error: n };
      throw n;
    }
  }
  async _getCustomProvider(e) {
    try {
      return await G(
        this.fetch,
        "GET",
        `${this.url}/admin/custom-providers/${e}`,
        { headers: this.headers, xform: (n) => ({ data: n, error: null }) },
      );
    } catch (n) {
      if (W(n)) return { data: null, error: n };
      throw n;
    }
  }
  async _updateCustomProvider(e, n) {
    try {
      return await G(
        this.fetch,
        "PUT",
        `${this.url}/admin/custom-providers/${e}`,
        {
          body: n,
          headers: this.headers,
          xform: (r) => ({ data: r, error: null }),
        },
      );
    } catch (r) {
      if (W(r)) return { data: null, error: r };
      throw r;
    }
  }
  async _deleteCustomProvider(e) {
    try {
      return (
        await G(
          this.fetch,
          "DELETE",
          `${this.url}/admin/custom-providers/${e}`,
          { headers: this.headers, noResolveJson: !0 },
        ),
        { data: null, error: null }
      );
    } catch (n) {
      if (W(n)) return { data: null, error: n };
      throw n;
    }
  }
  async _adminListPasskeys(e) {
    Ln(e.userId);
    try {
      return await G(
        this.fetch,
        "GET",
        `${this.url}/admin/users/${e.userId}/passkeys`,
        { headers: this.headers, xform: (n) => ({ data: n, error: null }) },
      );
    } catch (n) {
      if (W(n)) return { data: null, error: n };
      throw n;
    }
  }
  async _adminDeletePasskey(e) {
    (Ln(e.userId), Ln(e.passkeyId));
    try {
      return (
        await G(
          this.fetch,
          "DELETE",
          `${this.url}/admin/users/${e.userId}/passkeys/${e.passkeyId}`,
          { headers: this.headers, noResolveJson: !0 },
        ),
        { data: null, error: null }
      );
    } catch (n) {
      if (W(n)) return { data: null, error: n };
      throw n;
    }
  }
}
function Hh(t = {}) {
  return {
    getItem: (e) => t[e] || null,
    setItem: (e, n) => {
      t[e] = n;
    },
    removeItem: (e) => {
      delete t[e];
    },
  };
}
globalThis &&
  N0() &&
  globalThis.localStorage &&
  globalThis.localStorage.getItem("supabase.gotrue-js.locks.debug");
class p_ extends Error {
  constructor(e) {
    (super(e), (this.isAcquireTimeout = !0));
  }
}
function m_() {
  if (typeof globalThis != "object")
    try {
      (Object.defineProperty(Object.prototype, "__magic__", {
        get: function () {
          return this;
        },
        configurable: !0,
      }),
        (__magic__.globalThis = __magic__),
        delete Object.prototype.__magic__);
    } catch {
      typeof self < "u" && (self.globalThis = self);
    }
}
function A0(t) {
  if (!/^0x[a-fA-F0-9]{40}$/.test(t))
    throw new Error(`@supabase/auth-js: Address "${t}" is invalid.`);
  return t.toLowerCase();
}
function g_(t) {
  return parseInt(t, 16);
}
function v_(t) {
  const e = new TextEncoder().encode(t);
  return "0x" + Array.from(e, (r) => r.toString(16).padStart(2, "0")).join("");
}
function y_(t) {
  var e;
  const {
    chainId: n,
    domain: r,
    expirationTime: s,
    issuedAt: i = new Date(),
    nonce: a,
    notBefore: l,
    requestId: c,
    resources: u,
    scheme: d,
    uri: f,
    version: h,
  } = t;
  {
    if (!Number.isInteger(n))
      throw new Error(
        `@supabase/auth-js: Invalid SIWE message field "chainId". Chain ID must be a EIP-155 chain ID. Provided value: ${n}`,
      );
    if (!r)
      throw new Error(
        '@supabase/auth-js: Invalid SIWE message field "domain". Domain must be provided.',
      );
    if (a && a.length < 8)
      throw new Error(
        `@supabase/auth-js: Invalid SIWE message field "nonce". Nonce must be at least 8 characters. Provided value: ${a}`,
      );
    if (!f)
      throw new Error(
        '@supabase/auth-js: Invalid SIWE message field "uri". URI must be provided.',
      );
    if (h !== "1")
      throw new Error(
        `@supabase/auth-js: Invalid SIWE message field "version". Version must be '1'. Provided value: ${h}`,
      );
    if (
      !((e = t.statement) === null || e === void 0) &&
      e.includes(`
`)
    )
      throw new Error(
        `@supabase/auth-js: Invalid SIWE message field "statement". Statement must not include '\\n'. Provided value: ${t.statement}`,
      );
  }
  const p = A0(t.address),
    v = d ? `${d}://${r}` : r,
    x = t.statement
      ? `${t.statement}
`
      : "",
    _ = `${v} wants you to sign in with your Ethereum account:
${p}

${x}`;
  let m = `URI: ${f}
Version: ${h}
Chain ID: ${n}${
    a
      ? `
Nonce: ${a}`
      : ""
  }
Issued At: ${i.toISOString()}`;
  if (
    (s &&
      (m += `
Expiration Time: ${s.toISOString()}`),
    l &&
      (m += `
Not Before: ${l.toISOString()}`),
    c &&
      (m += `
Request ID: ${c}`),
    u)
  ) {
    let g = `
Resources:`;
    for (const y of u) {
      if (!y || typeof y != "string")
        throw new Error(
          `@supabase/auth-js: Invalid SIWE message field "resources". Every resource must be a valid string. Provided value: ${y}`,
        );
      g += `
- ${y}`;
    }
    m += g;
  }
  return `${_}
${m}`;
}
class ot extends Error {
  constructor({ message: e, code: n, cause: r, name: s }) {
    var i;
    (super(e, { cause: r }),
      (this.__isWebAuthnError = !0),
      (this.name =
        (i = s ?? (r instanceof Error ? r.name : void 0)) !== null &&
        i !== void 0
          ? i
          : "Unknown Error"),
      (this.code = n));
  }
  toJSON() {
    return { name: this.name, message: this.message, code: this.code };
  }
}
class Ro extends ot {
  constructor(e, n) {
    (super({
      code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
      cause: n,
      message: e,
    }),
      (this.name = "WebAuthnUnknownError"),
      (this.originalError = n));
  }
}
function w_({ error: t, options: e }) {
  var n, r, s;
  const { publicKey: i } = e;
  if (!i) throw Error("options was missing required publicKey property");
  if (t.name === "AbortError") {
    if (e.signal instanceof AbortSignal)
      return new ot({
        message: "Registration ceremony was sent an abort signal",
        code: "ERROR_CEREMONY_ABORTED",
        cause: t,
      });
  } else if (t.name === "ConstraintError") {
    if (
      ((n = i.authenticatorSelection) === null || n === void 0
        ? void 0
        : n.requireResidentKey) === !0
    )
      return new ot({
        message:
          "Discoverable credentials were required but no available authenticator supported it",
        code: "ERROR_AUTHENTICATOR_MISSING_DISCOVERABLE_CREDENTIAL_SUPPORT",
        cause: t,
      });
    if (
      e.mediation === "conditional" &&
      ((r = i.authenticatorSelection) === null || r === void 0
        ? void 0
        : r.userVerification) === "required"
    )
      return new ot({
        message:
          "User verification was required during automatic registration but it could not be performed",
        code: "ERROR_AUTO_REGISTER_USER_VERIFICATION_FAILURE",
        cause: t,
      });
    if (
      ((s = i.authenticatorSelection) === null || s === void 0
        ? void 0
        : s.userVerification) === "required"
    )
      return new ot({
        message:
          "User verification was required but no available authenticator supported it",
        code: "ERROR_AUTHENTICATOR_MISSING_USER_VERIFICATION_SUPPORT",
        cause: t,
      });
  } else {
    if (t.name === "InvalidStateError")
      return new ot({
        message: "The authenticator was previously registered",
        code: "ERROR_AUTHENTICATOR_PREVIOUSLY_REGISTERED",
        cause: t,
      });
    if (t.name === "NotAllowedError")
      return new ot({
        message: t.message,
        code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
        cause: t,
      });
    if (t.name === "NotSupportedError")
      return i.pubKeyCredParams.filter((l) => l.type === "public-key")
        .length === 0
        ? new ot({
            message: 'No entry in pubKeyCredParams was of type "public-key"',
            code: "ERROR_MALFORMED_PUBKEYCREDPARAMS",
            cause: t,
          })
        : new ot({
            message:
              "No available authenticator supported any of the specified pubKeyCredParams algorithms",
            code: "ERROR_AUTHENTICATOR_NO_SUPPORTED_PUBKEYCREDPARAMS_ALG",
            cause: t,
          });
    if (t.name === "SecurityError") {
      const a = window.location.hostname;
      if (P0(a)) {
        if (i.rp.id !== a)
          return new ot({
            message: `The RP ID "${i.rp.id}" is invalid for this domain`,
            code: "ERROR_INVALID_RP_ID",
            cause: t,
          });
      } else
        return new ot({
          message: `${window.location.hostname} is an invalid domain`,
          code: "ERROR_INVALID_DOMAIN",
          cause: t,
        });
    } else if (t.name === "TypeError") {
      if (i.user.id.byteLength < 1 || i.user.id.byteLength > 64)
        return new ot({
          message: "User ID was not between 1 and 64 characters",
          code: "ERROR_INVALID_USER_ID_LENGTH",
          cause: t,
        });
    } else if (t.name === "UnknownError")
      return new ot({
        message:
          "The authenticator was unable to process the specified options, or could not create a new credential",
        code: "ERROR_AUTHENTICATOR_GENERAL_ERROR",
        cause: t,
      });
  }
  return new ot({
    message: "a Non-Webauthn related error has occurred",
    code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
    cause: t,
  });
}
function x_({ error: t, options: e }) {
  const { publicKey: n } = e;
  if (!n) throw Error("options was missing required publicKey property");
  if (t.name === "AbortError") {
    if (e.signal instanceof AbortSignal)
      return new ot({
        message: "Authentication ceremony was sent an abort signal",
        code: "ERROR_CEREMONY_ABORTED",
        cause: t,
      });
  } else {
    if (t.name === "NotAllowedError")
      return new ot({
        message: t.message,
        code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
        cause: t,
      });
    if (t.name === "SecurityError") {
      const r = window.location.hostname;
      if (P0(r)) {
        if (n.rpId !== r)
          return new ot({
            message: `The RP ID "${n.rpId}" is invalid for this domain`,
            code: "ERROR_INVALID_RP_ID",
            cause: t,
          });
      } else
        return new ot({
          message: `${window.location.hostname} is an invalid domain`,
          code: "ERROR_INVALID_DOMAIN",
          cause: t,
        });
    } else if (t.name === "UnknownError")
      return new ot({
        message:
          "The authenticator was unable to process the specified options, or could not create a new assertion signature",
        code: "ERROR_AUTHENTICATOR_GENERAL_ERROR",
        cause: t,
      });
  }
  return new ot({
    message: "a Non-Webauthn related error has occurred",
    code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
    cause: t,
  });
}
class __ {
  createNewAbortSignal() {
    if (this.controller) {
      const n = new Error("Cancelling existing WebAuthn API call for new one");
      ((n.name = "AbortError"), this.controller.abort(n));
    }
    const e = new AbortController();
    return ((this.controller = e), e.signal);
  }
  cancelCeremony() {
    if (this.controller) {
      const e = new Error("Manually cancelling existing WebAuthn API call");
      ((e.name = "AbortError"),
        this.controller.abort(e),
        (this.controller = void 0));
    }
  }
}
const Yc = new __();
function Vh(t) {
  if (!t) throw new Error("Credential creation options are required");
  if (
    typeof PublicKeyCredential < "u" &&
    "parseCreationOptionsFromJSON" in PublicKeyCredential &&
    typeof PublicKeyCredential.parseCreationOptionsFromJSON == "function"
  )
    return PublicKeyCredential.parseCreationOptionsFromJSON(t);
  const { challenge: e, user: n, excludeCredentials: r } = t,
    s = Qo(t, ["challenge", "user", "excludeCredentials"]),
    i = Cs(e).buffer,
    a = Object.assign(Object.assign({}, n), { id: Cs(n.id).buffer }),
    l = Object.assign(Object.assign({}, s), { challenge: i, user: a });
  if (r && r.length > 0) {
    l.excludeCredentials = new Array(r.length);
    for (let c = 0; c < r.length; c++) {
      const u = r[c];
      l.excludeCredentials[c] = Object.assign(Object.assign({}, u), {
        id: Cs(u.id).buffer,
        type: u.type || "public-key",
        transports: u.transports,
      });
    }
  }
  return l;
}
function Wh(t) {
  if (!t) throw new Error("Credential request options are required");
  if (
    typeof PublicKeyCredential < "u" &&
    "parseRequestOptionsFromJSON" in PublicKeyCredential &&
    typeof PublicKeyCredential.parseRequestOptionsFromJSON == "function"
  )
    return PublicKeyCredential.parseRequestOptionsFromJSON(t);
  const { challenge: e, allowCredentials: n } = t,
    r = Qo(t, ["challenge", "allowCredentials"]),
    s = Cs(e).buffer,
    i = Object.assign(Object.assign({}, r), { challenge: s });
  if (n && n.length > 0) {
    i.allowCredentials = new Array(n.length);
    for (let a = 0; a < n.length; a++) {
      const l = n[a];
      i.allowCredentials[a] = Object.assign(Object.assign({}, l), {
        id: Cs(l.id).buffer,
        type: l.type || "public-key",
        transports: l.transports,
      });
    }
  }
  return i;
}
function qh(t) {
  var e;
  if ("toJSON" in t && typeof t.toJSON == "function") return t.toJSON();
  const n = t;
  return {
    id: t.id,
    rawId: t.id,
    response: {
      attestationObject: Mr(new Uint8Array(t.response.attestationObject)),
      clientDataJSON: Mr(new Uint8Array(t.response.clientDataJSON)),
    },
    type: "public-key",
    clientExtensionResults: t.getClientExtensionResults(),
    authenticatorAttachment:
      (e = n.authenticatorAttachment) !== null && e !== void 0 ? e : void 0,
  };
}
function Kh(t) {
  var e;
  if ("toJSON" in t && typeof t.toJSON == "function") return t.toJSON();
  const n = t,
    r = t.getClientExtensionResults(),
    s = t.response;
  return {
    id: t.id,
    rawId: t.id,
    response: {
      authenticatorData: Mr(new Uint8Array(s.authenticatorData)),
      clientDataJSON: Mr(new Uint8Array(s.clientDataJSON)),
      signature: Mr(new Uint8Array(s.signature)),
      userHandle: s.userHandle ? Mr(new Uint8Array(s.userHandle)) : void 0,
    },
    type: "public-key",
    clientExtensionResults: r,
    authenticatorAttachment:
      (e = n.authenticatorAttachment) !== null && e !== void 0 ? e : void 0,
  };
}
function P0(t) {
  return t === "localhost" || /^([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,}$/i.test(t);
}
function Ao() {
  var t, e;
  return !!(
    vt() &&
    "PublicKeyCredential" in window &&
    window.PublicKeyCredential &&
    "credentials" in navigator &&
    typeof ((t = navigator == null ? void 0 : navigator.credentials) === null ||
    t === void 0
      ? void 0
      : t.create) == "function" &&
    typeof ((e = navigator == null ? void 0 : navigator.credentials) === null ||
    e === void 0
      ? void 0
      : e.get) == "function"
  );
}
async function O0(t) {
  try {
    const e = await navigator.credentials.create(t);
    return e
      ? e instanceof PublicKeyCredential
        ? { data: e, error: null }
        : {
            data: null,
            error: new Ro("Browser returned unexpected credential type", e),
          }
      : { data: null, error: new Ro("Empty credential response", e) };
  } catch (e) {
    return { data: null, error: w_({ error: e, options: t }) };
  }
}
async function I0(t) {
  try {
    const e = await navigator.credentials.get(t);
    return e
      ? e instanceof PublicKeyCredential
        ? { data: e, error: null }
        : {
            data: null,
            error: new Ro("Browser returned unexpected credential type", e),
          }
      : { data: null, error: new Ro("Empty credential response", e) };
  } catch (e) {
    return { data: null, error: x_({ error: e, options: t }) };
  }
}
const b_ = {
    hints: ["security-key"],
    authenticatorSelection: {
      authenticatorAttachment: "cross-platform",
      requireResidentKey: !1,
      userVerification: "preferred",
      residentKey: "discouraged",
    },
    attestation: "direct",
  },
  k_ = {
    userVerification: "preferred",
    hints: ["security-key"],
    attestation: "direct",
  };
function Po(...t) {
  const e = (s) => s !== null && typeof s == "object" && !Array.isArray(s),
    n = (s) => s instanceof ArrayBuffer || ArrayBuffer.isView(s),
    r = {};
  for (const s of t)
    if (s)
      for (const i in s) {
        const a = s[i];
        if (a !== void 0)
          if (Array.isArray(a)) r[i] = a;
          else if (n(a)) r[i] = a;
          else if (e(a)) {
            const l = r[i];
            e(l) ? (r[i] = Po(l, a)) : (r[i] = Po(a));
          } else r[i] = a;
      }
  return r;
}
function S_(t, e) {
  return Po(b_, t, e || {});
}
function E_(t, e) {
  return Po(k_, t, e || {});
}
class j_ {
  constructor(e) {
    ((this.client = e),
      (this.enroll = this._enroll.bind(this)),
      (this.challenge = this._challenge.bind(this)),
      (this.verify = this._verify.bind(this)),
      (this.authenticate = this._authenticate.bind(this)),
      (this.register = this._register.bind(this)));
  }
  async _enroll(e) {
    return this.client.mfa.enroll(
      Object.assign(Object.assign({}, e), { factorType: "webauthn" }),
    );
  }
  async _challenge(
    { factorId: e, webauthn: n, friendlyName: r, signal: s },
    i,
  ) {
    var a;
    try {
      const { data: l, error: c } = await this.client.mfa.challenge({
        factorId: e,
        webauthn: n,
      });
      if (!l) return { data: null, error: c };
      const u = s ?? Yc.createNewAbortSignal();
      if (l.webauthn.type === "create") {
        const { user: d } = l.webauthn.credential_options.publicKey;
        if (!d.name) {
          const f = r;
          if (f) d.name = `${d.id}:${f}`;
          else {
            const p = (await this.client.getUser()).data.user,
              v =
                ((a = p == null ? void 0 : p.user_metadata) === null ||
                a === void 0
                  ? void 0
                  : a.name) ||
                (p == null ? void 0 : p.email) ||
                (p == null ? void 0 : p.id) ||
                "User";
            d.name = `${d.id}:${v}`;
          }
        }
        d.displayName || (d.displayName = d.name);
      }
      switch (l.webauthn.type) {
        case "create": {
          const d = S_(
              l.webauthn.credential_options.publicKey,
              i == null ? void 0 : i.create,
            ),
            { data: f, error: h } = await O0({ publicKey: d, signal: u });
          return f
            ? {
                data: {
                  factorId: e,
                  challengeId: l.id,
                  webauthn: { type: l.webauthn.type, credential_response: f },
                },
                error: null,
              }
            : { data: null, error: h };
        }
        case "request": {
          const d = E_(
              l.webauthn.credential_options.publicKey,
              i == null ? void 0 : i.request,
            ),
            { data: f, error: h } = await I0(
              Object.assign(Object.assign({}, l.webauthn.credential_options), {
                publicKey: d,
                signal: u,
              }),
            );
          return f
            ? {
                data: {
                  factorId: e,
                  challengeId: l.id,
                  webauthn: { type: l.webauthn.type, credential_response: f },
                },
                error: null,
              }
            : { data: null, error: h };
        }
      }
    } catch (l) {
      return W(l)
        ? { data: null, error: l }
        : { data: null, error: new mn("Unexpected error in challenge", l) };
    }
  }
  async _verify({ challengeId: e, factorId: n, webauthn: r }) {
    return this.client.mfa.verify({ factorId: n, challengeId: e, webauthn: r });
  }
  async _authenticate(
    {
      factorId: e,
      webauthn: {
        rpId: n = typeof window < "u" ? window.location.hostname : void 0,
        rpOrigins: r = typeof window < "u" ? [window.location.origin] : void 0,
        signal: s,
      } = {},
    },
    i,
  ) {
    if (!n)
      return {
        data: null,
        error: new Hi("rpId is required for WebAuthn authentication"),
      };
    try {
      if (!Ao())
        return {
          data: null,
          error: new mn("Browser does not support WebAuthn", null),
        };
      const { data: a, error: l } = await this.challenge(
        { factorId: e, webauthn: { rpId: n, rpOrigins: r }, signal: s },
        { request: i },
      );
      if (!a) return { data: null, error: l };
      const { webauthn: c } = a;
      return this._verify({
        factorId: e,
        challengeId: a.challengeId,
        webauthn: {
          type: c.type,
          rpId: n,
          rpOrigins: r,
          credential_response: c.credential_response,
        },
      });
    } catch (a) {
      return W(a)
        ? { data: null, error: a }
        : { data: null, error: new mn("Unexpected error in authenticate", a) };
    }
  }
  async _register(
    {
      friendlyName: e,
      webauthn: {
        rpId: n = typeof window < "u" ? window.location.hostname : void 0,
        rpOrigins: r = typeof window < "u" ? [window.location.origin] : void 0,
        signal: s,
      } = {},
    },
    i,
  ) {
    if (!n)
      return {
        data: null,
        error: new Hi("rpId is required for WebAuthn registration"),
      };
    try {
      if (!Ao())
        return {
          data: null,
          error: new mn("Browser does not support WebAuthn", null),
        };
      const { data: a, error: l } = await this._enroll({ friendlyName: e });
      if (!a)
        return (
          await this.client.mfa
            .listFactors()
            .then((d) => {
              var f;
              return (f = d.data) === null || f === void 0
                ? void 0
                : f.all.find(
                    (h) =>
                      h.factor_type === "webauthn" &&
                      h.friendly_name === e &&
                      h.status === "unverified",
                  );
            })
            .then((d) =>
              d
                ? this.client.mfa.unenroll({
                    factorId: d == null ? void 0 : d.id,
                  })
                : void 0,
            ),
          { data: null, error: l }
        );
      const { data: c, error: u } = await this._challenge(
        {
          factorId: a.id,
          friendlyName: a.friendly_name,
          webauthn: { rpId: n, rpOrigins: r },
          signal: s,
        },
        { create: i },
      );
      return c
        ? this._verify({
            factorId: a.id,
            challengeId: c.challengeId,
            webauthn: {
              rpId: n,
              rpOrigins: r,
              type: c.webauthn.type,
              credential_response: c.webauthn.credential_response,
            },
          })
        : { data: null, error: u };
    } catch (a) {
      return W(a)
        ? { data: null, error: a }
        : { data: null, error: new mn("Unexpected error in register", a) };
    }
  }
}
m_();
const T_ = {
    url: Nx,
    storageKey: Cx,
    autoRefreshToken: !0,
    persistSession: !0,
    detectSessionInUrl: !0,
    headers: Rx,
    flowType: "implicit",
    debug: !1,
    hasCustomAuthorizationHeader: !1,
    throwOnError: !1,
    lockAcquireTimeout: 5e3,
    skipAutoInitialize: !1,
    experimental: {},
  },
  Qr = {};
let Gh = !1;
class Wi {
  get jwks() {
    var e, n;
    return (n =
      (e = Qr[this.storageKey]) === null || e === void 0 ? void 0 : e.jwks) !==
      null && n !== void 0
      ? n
      : { keys: [] };
  }
  set jwks(e) {
    Qr[this.storageKey] = Object.assign(
      Object.assign({}, Qr[this.storageKey]),
      { jwks: e },
    );
  }
  get jwks_cached_at() {
    var e, n;
    return (n =
      (e = Qr[this.storageKey]) === null || e === void 0
        ? void 0
        : e.cachedAt) !== null && n !== void 0
      ? n
      : Number.MIN_SAFE_INTEGER;
  }
  set jwks_cached_at(e) {
    Qr[this.storageKey] = Object.assign(
      Object.assign({}, Qr[this.storageKey]),
      { cachedAt: e },
    );
  }
  constructor(e) {
    var n, r, s;
    ((this.userStorage = null),
      (this.memoryStorage = null),
      (this.stateChangeEmitters = new Map()),
      (this.autoRefreshTicker = null),
      (this.autoRefreshTickTimeout = null),
      (this.visibilityChangedCallback = null),
      (this.refreshingDeferred = null),
      (this.lastRefreshFailure = null),
      (this._sessionRemovalEpoch = 0),
      (this.initializePromise = null),
      (this._pendingInitNotifications = null),
      (this.detectSessionInUrl = !0),
      (this.hasCustomAuthorizationHeader = !1),
      (this.suppressGetSessionWarning = !1),
      (this.lock = null),
      (this.lockAcquired = !1),
      (this.pendingInLock = []),
      (this.broadcastChannel = null),
      (this.logger = console.log));
    const i = Object.assign(Object.assign({}, T_), e);
    if (
      ((this.storageKey = i.storageKey),
      (this.instanceID =
        (n = Wi.nextInstanceID[this.storageKey]) !== null && n !== void 0
          ? n
          : 0),
      (Wi.nextInstanceID[this.storageKey] = this.instanceID + 1),
      (this.logDebugMessages = !!i.debug),
      typeof i.debug == "function" && (this.logger = i.debug),
      this.instanceID > 0 && vt())
    ) {
      const a = `${this._logPrefix()} Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.`;
      (console.warn(a), this.logDebugMessages && console.trace(a));
    }
    if (
      ((this.persistSession = i.persistSession),
      (this.autoRefreshToken = i.autoRefreshToken),
      (this.experimental =
        (r = i.experimental) !== null && r !== void 0 ? r : {}),
      (this.admin = new f_({
        url: i.url,
        headers: i.headers,
        fetch: i.fetch,
        experimental: this.experimental,
      })),
      (this.url = i.url),
      (this.headers = i.headers),
      (this.fetch = C0(i.fetch)),
      (this.detectSessionInUrl = i.detectSessionInUrl),
      (this.flowType = i.flowType),
      (this.hasCustomAuthorizationHeader = i.hasCustomAuthorizationHeader),
      (this.throwOnError = i.throwOnError),
      (this.lockAcquireTimeout = i.lockAcquireTimeout),
      i.lock != null &&
        ((this.lock = i.lock),
        Gh ||
          ((Gh = !0),
          console.warn(
            `${this._logPrefix()} The "lock" option is deprecated and will be removed in v3. The client now coordinates session refreshes without a lock, so most apps can drop the option. See https://github.com/supabase/supabase-js/blob/master/packages/core/auth-js/migrations/lockless-coordination.md`,
          ))),
      this.jwks ||
        ((this.jwks = { keys: [] }),
        (this.jwks_cached_at = Number.MIN_SAFE_INTEGER)),
      (this.mfa = {
        verify: this._verify.bind(this),
        enroll: this._enroll.bind(this),
        unenroll: this._unenroll.bind(this),
        challenge: this._challenge.bind(this),
        listFactors: this._listFactors.bind(this),
        challengeAndVerify: this._challengeAndVerify.bind(this),
        getAuthenticatorAssuranceLevel:
          this._getAuthenticatorAssuranceLevel.bind(this),
        webauthn: new j_(this),
        recoveryCodes: {
          getStatus: this._getRecoveryCodesStatus.bind(this),
          generate: this._generateRecoveryCodes.bind(this),
          verify: this._verifyRecoveryCode.bind(this),
          regenerate: this._regenerateRecoveryCodes.bind(this),
          unenroll: this._unenrollRecoveryCodes.bind(this),
        },
      }),
      (this.oauth = {
        getAuthorizationDetails: this._getAuthorizationDetails.bind(this),
        approveAuthorization: this._approveAuthorization.bind(this),
        denyAuthorization: this._denyAuthorization.bind(this),
        listGrants: this._listOAuthGrants.bind(this),
        revokeGrant: this._revokeOAuthGrant.bind(this),
      }),
      (this.passkey = {
        startRegistration: this._startPasskeyRegistration.bind(this),
        verifyRegistration: this._verifyPasskeyRegistration.bind(this),
        startAuthentication: this._startPasskeyAuthentication.bind(this),
        verifyAuthentication: this._verifyPasskeyAuthentication.bind(this),
        list: this._listPasskeys.bind(this),
        update: this._updatePasskey.bind(this),
        delete: this._deletePasskey.bind(this),
      }),
      this.persistSession
        ? (i.storage
            ? (this.storage = i.storage)
            : N0()
              ? (this.storage = globalThis.localStorage)
              : ((this.memoryStorage = {}),
                (this.storage = Hh(this.memoryStorage))),
          i.userStorage && (this.userStorage = i.userStorage))
        : ((this.memoryStorage = {}), (this.storage = Hh(this.memoryStorage))),
      vt() &&
        globalThis.BroadcastChannel &&
        this.persistSession &&
        this.storageKey)
    ) {
      try {
        this.broadcastChannel = new globalThis.BroadcastChannel(
          this.storageKey,
        );
      } catch (a) {
        console.error(
          "Failed to create a new BroadcastChannel, multi-tab state changes will not be available",
          a,
        );
      }
      (s = this.broadcastChannel) === null ||
        s === void 0 ||
        s.addEventListener("message", async (a) => {
          (this._debug(
            "received broadcast notification from other tab or client",
            a,
          ),
            (a.data.event === "TOKEN_REFRESHED" ||
              a.data.event === "SIGNED_IN") &&
              (this.lastRefreshFailure = null));
          try {
            await this._notifyAllSubscribers(a.data.event, a.data.session, !1);
          } catch (l) {
            this._debug("#broadcastChannel", "error", l);
          }
        });
    }
    i.skipAutoInitialize ||
      this.initialize().catch((a) => {
        this._debug("#initialize()", "error", a);
      });
  }
  isThrowOnErrorEnabled() {
    return this.throwOnError;
  }
  _returnResult(e) {
    if (this.throwOnError && e && e.error) throw e.error;
    return e;
  }
  _logPrefix() {
    return `GoTrueClient@${this.storageKey}:${this.instanceID} (${S0}) ${new Date().toISOString()}`;
  }
  _debug(...e) {
    return (
      this.logDebugMessages && this.logger(this._logPrefix(), ...e),
      this
    );
  }
  async initialize() {
    var e;
    if (this.initializePromise) return await this.initializePromise;
    ((this._pendingInitNotifications = []),
      (this.initializePromise = (async () =>
        this.lock != null
          ? await this._acquireLock(
              this.lockAcquireTimeout,
              async () => await this._initialize(),
            )
          : await this._initialize())()));
    const n = await this.initializePromise,
      r =
        (e = this._pendingInitNotifications) !== null && e !== void 0 ? e : [];
    this._pendingInitNotifications = null;
    for (const s of r)
      await this._notifyAllSubscribers(s.event, s.session, s.broadcast);
    return n;
  }
  async _initialize() {
    var e;
    try {
      let n = {},
        r = "none";
      if (
        (vt() &&
          ((n = $h(window.location.href)),
          this._isImplicitGrantCallback(n)
            ? (r = "implicit")
            : (await this._isPKCECallback(n)) && (r = "pkce")),
        vt() && this.detectSessionInUrl && r !== "none")
      ) {
        const { data: s, error: i } = await this._getSessionFromURL(n, r);
        if (i) {
          if (
            (this._debug(
              "#_initialize()",
              "error detecting session from URL",
              i,
            ),
            Lx(i))
          ) {
            const c =
              (e = i.details) === null || e === void 0 ? void 0 : e.code;
            if (
              c === "identity_already_exists" ||
              c === "identity_not_found" ||
              c === "single_identity_not_deletable"
            )
              return { error: i };
          }
          return { error: i };
        }
        const { session: a, redirectType: l } = s;
        return (
          this._debug(
            "#_initialize()",
            "detected session in URL",
            a,
            "redirect type",
            l,
          ),
          await this._saveSession(a),
          setTimeout(async () => {
            l === "recovery"
              ? await this._notifyAllSubscribers("PASSWORD_RECOVERY", a)
              : await this._notifyAllSubscribers("SIGNED_IN", a);
          }, 0),
          { error: null }
        );
      }
      return (await this._recoverAndRefresh(), { error: null });
    } catch (n) {
      return W(n)
        ? this._returnResult({ error: n })
        : this._returnResult({
            error: new mn("Unexpected error during initialization", n),
          });
    } finally {
      (await this._handleVisibilityChange(),
        this._debug("#_initialize()", "end"));
    }
  }
  async signInAnonymously(e) {
    var n, r, s;
    try {
      const i = await G(this.fetch, "POST", `${this.url}/signup`, {
          headers: this.headers,
          body: {
            data:
              (r =
                (n = e == null ? void 0 : e.options) === null || n === void 0
                  ? void 0
                  : n.data) !== null && r !== void 0
                ? r
                : {},
            gotrue_meta_security: {
              captcha_token:
                (s = e == null ? void 0 : e.options) === null || s === void 0
                  ? void 0
                  : s.captchaToken,
            },
          },
          xform: Qt,
        }),
        { data: a, error: l } = i;
      if (l || !a)
        return this._returnResult({
          data: { user: null, session: null },
          error: l,
        });
      const c = a.session,
        u = a.user;
      return (
        a.session &&
          (await this._saveSession(a.session),
          await this._notifyAllSubscribers("SIGNED_IN", c)),
        this._returnResult({ data: { user: u, session: c }, error: null })
      );
    } catch (i) {
      if (W(i))
        return this._returnResult({
          data: { user: null, session: null },
          error: i,
        });
      throw i;
    }
  }
  async signUp(e) {
    var n, r, s;
    let i = null;
    try {
      let a;
      if ("email" in e) {
        const { email: f, password: h, options: p } = e;
        let v = null,
          x = null;
        (this.flowType === "pkce" &&
          ([v, x, i] = await this._getCodeChallengeAndMethod()),
          (a = await G(this.fetch, "POST", `${this.url}/signup`, {
            headers: this.headers,
            redirectTo: this._maybeAppendFlowIdToRedirect(
              p == null ? void 0 : p.emailRedirectTo,
              i,
            ),
            body: {
              email: f,
              password: h,
              data:
                (n = p == null ? void 0 : p.data) !== null && n !== void 0
                  ? n
                  : {},
              gotrue_meta_security: {
                captcha_token: p == null ? void 0 : p.captchaToken,
              },
              code_challenge: v,
              code_challenge_method: x,
            },
            xform: Qt,
          })));
      } else if ("phone" in e) {
        const { phone: f, password: h, options: p } = e;
        a = await G(this.fetch, "POST", `${this.url}/signup`, {
          headers: this.headers,
          body: {
            phone: f,
            password: h,
            data:
              (r = p == null ? void 0 : p.data) !== null && r !== void 0
                ? r
                : {},
            channel:
              (s = p == null ? void 0 : p.channel) !== null && s !== void 0
                ? s
                : "sms",
            gotrue_meta_security: {
              captcha_token: p == null ? void 0 : p.captchaToken,
            },
          },
          xform: Qt,
        });
      } else
        throw new Ea(
          "You must provide either an email or phone number and a password",
        );
      const { data: l, error: c } = a;
      if (c || !l)
        return (
          await cn(this.storage, this.storageKey, i),
          this._returnResult({ data: { user: null, session: null }, error: c })
        );
      const u = l.session,
        d = l.user;
      return (
        l.session &&
          (await this._saveSession(l.session),
          await this._notifyAllSubscribers("SIGNED_IN", u)),
        this._returnResult({ data: { user: d, session: u }, error: null })
      );
    } catch (a) {
      if ((await cn(this.storage, this.storageKey, i), W(a)))
        return this._returnResult({
          data: { user: null, session: null },
          error: a,
        });
      throw a;
    }
  }
  async signInWithPassword(e) {
    try {
      let n;
      if ("email" in e) {
        const { email: i, password: a, options: l } = e;
        n = await G(
          this.fetch,
          "POST",
          `${this.url}/token?grant_type=password`,
          {
            headers: this.headers,
            body: {
              email: i,
              password: a,
              gotrue_meta_security: {
                captcha_token: l == null ? void 0 : l.captchaToken,
              },
            },
            xform: zh,
          },
        );
      } else if ("phone" in e) {
        const { phone: i, password: a, options: l } = e;
        n = await G(
          this.fetch,
          "POST",
          `${this.url}/token?grant_type=password`,
          {
            headers: this.headers,
            body: {
              phone: i,
              password: a,
              gotrue_meta_security: {
                captcha_token: l == null ? void 0 : l.captchaToken,
              },
            },
            xform: zh,
          },
        );
      } else
        throw new Ea(
          "You must provide either an email or phone number and a password",
        );
      const { data: r, error: s } = n;
      if (s)
        return this._returnResult({
          data: { user: null, session: null },
          error: s,
        });
      if (!r || !r.session || !r.user) {
        const i = new Zr();
        return this._returnResult({
          data: { user: null, session: null },
          error: i,
        });
      }
      return (
        r.session &&
          (await this._saveSession(r.session),
          await this._notifyAllSubscribers("SIGNED_IN", r.session)),
        this._returnResult({
          data: Object.assign(
            { user: r.user, session: r.session },
            r.weak_password ? { weakPassword: r.weak_password } : null,
          ),
          error: s,
        })
      );
    } catch (n) {
      if (W(n))
        return this._returnResult({
          data: { user: null, session: null },
          error: n,
        });
      throw n;
    }
  }
  async signInWithOAuth(e) {
    var n, r, s, i;
    return await this._handleProviderSignIn(e.provider, {
      redirectTo:
        (n = e.options) === null || n === void 0 ? void 0 : n.redirectTo,
      scopes: (r = e.options) === null || r === void 0 ? void 0 : r.scopes,
      queryParams:
        (s = e.options) === null || s === void 0 ? void 0 : s.queryParams,
      skipBrowserRedirect:
        (i = e.options) === null || i === void 0
          ? void 0
          : i.skipBrowserRedirect,
    });
  }
  async exchangeCodeForSession(e, n) {
    return (
      await this.initializePromise,
      this.lock != null
        ? this._acquireLock(this.lockAcquireTimeout, async () =>
            this._exchangeCodeForSession(e, n),
          )
        : this._exchangeCodeForSession(e, n)
    );
  }
  async signInWithWeb3(e) {
    const { chain: n } = e;
    switch (n) {
      case "ethereum":
        return await this.signInWithEthereum(e);
      case "solana":
        return await this.signInWithSolana(e);
      default:
        throw new Error(`@supabase/auth-js: Unsupported chain "${n}"`);
    }
  }
  async signInWithEthereum(e) {
    var n, r, s, i, a, l, c, u, d, f, h;
    let p, v;
    if ("message" in e) ((p = e.message), (v = e.signature));
    else {
      const { chain: x, wallet: _, statement: m, options: g } = e;
      let y;
      if (vt())
        if (typeof _ == "object") y = _;
        else {
          const te = window;
          if (
            "ethereum" in te &&
            typeof te.ethereum == "object" &&
            "request" in te.ethereum &&
            typeof te.ethereum.request == "function"
          )
            y = te.ethereum;
          else
            throw new Error(
              "@supabase/auth-js: No compatible Ethereum wallet interface on the window object (window.ethereum) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'ethereum', wallet: resolvedUserWallet }) instead.",
            );
        }
      else {
        if (typeof _ != "object" || !(g != null && g.url))
          throw new Error(
            "@supabase/auth-js: Both wallet and url must be specified in non-browser environments.",
          );
        y = _;
      }
      const E = new URL(
          (n = g == null ? void 0 : g.url) !== null && n !== void 0
            ? n
            : window.location.href,
        ),
        R = await y
          .request({ method: "eth_requestAccounts" })
          .then((te) => te)
          .catch(() => {
            throw new Error(
              "@supabase/auth-js: Wallet method eth_requestAccounts is missing or invalid",
            );
          });
      if (!R || R.length === 0)
        throw new Error(
          "@supabase/auth-js: No accounts available. Please ensure the wallet is connected.",
        );
      const A = A0(R[0]);
      let P =
        (r = g == null ? void 0 : g.signInWithEthereum) === null || r === void 0
          ? void 0
          : r.chainId;
      if (!P) {
        const te = await y.request({ method: "eth_chainId" });
        P = g_(te);
      }
      const U = {
        domain: E.host,
        address: A,
        statement: m,
        uri: E.href,
        version: "1",
        chainId: P,
        nonce:
          (s = g == null ? void 0 : g.signInWithEthereum) === null ||
          s === void 0
            ? void 0
            : s.nonce,
        issuedAt:
          (a =
            (i = g == null ? void 0 : g.signInWithEthereum) === null ||
            i === void 0
              ? void 0
              : i.issuedAt) !== null && a !== void 0
            ? a
            : new Date(),
        expirationTime:
          (l = g == null ? void 0 : g.signInWithEthereum) === null ||
          l === void 0
            ? void 0
            : l.expirationTime,
        notBefore:
          (c = g == null ? void 0 : g.signInWithEthereum) === null ||
          c === void 0
            ? void 0
            : c.notBefore,
        requestId:
          (u = g == null ? void 0 : g.signInWithEthereum) === null ||
          u === void 0
            ? void 0
            : u.requestId,
        resources:
          (d = g == null ? void 0 : g.signInWithEthereum) === null ||
          d === void 0
            ? void 0
            : d.resources,
      };
      ((p = y_(U)),
        (v = await y.request({ method: "personal_sign", params: [v_(p), A] })));
    }
    try {
      const { data: x, error: _ } = await G(
        this.fetch,
        "POST",
        `${this.url}/token?grant_type=web3`,
        {
          headers: this.headers,
          body: Object.assign(
            { chain: "ethereum", message: p, signature: v },
            !((f = e.options) === null || f === void 0) && f.captchaToken
              ? {
                  gotrue_meta_security: {
                    captcha_token:
                      (h = e.options) === null || h === void 0
                        ? void 0
                        : h.captchaToken,
                  },
                }
              : null,
          ),
          xform: Qt,
        },
      );
      if (_) throw _;
      if (!x || !x.session || !x.user) {
        const m = new Zr();
        return this._returnResult({
          data: { user: null, session: null },
          error: m,
        });
      }
      return (
        x.session &&
          (await this._saveSession(x.session),
          await this._notifyAllSubscribers("SIGNED_IN", x.session)),
        this._returnResult({ data: Object.assign({}, x), error: _ })
      );
    } catch (x) {
      if (W(x))
        return this._returnResult({
          data: { user: null, session: null },
          error: x,
        });
      throw x;
    }
  }
  async signInWithSolana(e) {
    var n, r, s, i, a, l, c, u, d, f, h, p;
    let v, x;
    if ("message" in e) ((v = e.message), (x = e.signature));
    else {
      const { chain: _, wallet: m, statement: g, options: y } = e;
      let E;
      if (vt())
        if (typeof m == "object") E = m;
        else {
          const A = window;
          if (
            "solana" in A &&
            typeof A.solana == "object" &&
            (("signIn" in A.solana && typeof A.solana.signIn == "function") ||
              ("signMessage" in A.solana &&
                typeof A.solana.signMessage == "function"))
          )
            E = A.solana;
          else
            throw new Error(
              "@supabase/auth-js: No compatible Solana wallet interface on the window object (window.solana) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'solana', wallet: resolvedUserWallet }) instead.",
            );
        }
      else {
        if (typeof m != "object" || !(y != null && y.url))
          throw new Error(
            "@supabase/auth-js: Both wallet and url must be specified in non-browser environments.",
          );
        E = m;
      }
      const R = new URL(
        (n = y == null ? void 0 : y.url) !== null && n !== void 0
          ? n
          : window.location.href,
      );
      if ("signIn" in E && E.signIn) {
        const A = await E.signIn(
          Object.assign(
            Object.assign(
              Object.assign(
                { issuedAt: new Date().toISOString() },
                y == null ? void 0 : y.signInWithSolana,
              ),
              { version: "1", domain: R.host, uri: R.href },
            ),
            g ? { statement: g } : null,
          ),
        );
        let P;
        if (Array.isArray(A) && A[0] && typeof A[0] == "object") P = A[0];
        else if (
          A &&
          typeof A == "object" &&
          "signedMessage" in A &&
          "signature" in A
        )
          P = A;
        else
          throw new Error(
            "@supabase/auth-js: Wallet method signIn() returned unrecognized value",
          );
        if (
          "signedMessage" in P &&
          "signature" in P &&
          (typeof P.signedMessage == "string" ||
            P.signedMessage instanceof Uint8Array) &&
          P.signature instanceof Uint8Array
        )
          ((v =
            typeof P.signedMessage == "string"
              ? P.signedMessage
              : new TextDecoder().decode(P.signedMessage)),
            (x = P.signature));
        else
          throw new Error(
            "@supabase/auth-js: Wallet method signIn() API returned object without signedMessage and signature fields",
          );
      } else {
        if (
          !("signMessage" in E) ||
          typeof E.signMessage != "function" ||
          !("publicKey" in E) ||
          typeof E != "object" ||
          !E.publicKey ||
          !("toBase58" in E.publicKey) ||
          typeof E.publicKey.toBase58 != "function"
        )
          throw new Error(
            "@supabase/auth-js: Wallet does not have a compatible signMessage() and publicKey.toBase58() API",
          );
        v = [
          `${R.host} wants you to sign in with your Solana account:`,
          E.publicKey.toBase58(),
          ...(g ? ["", g, ""] : [""]),
          "Version: 1",
          `URI: ${R.href}`,
          `Issued At: ${(s = (r = y == null ? void 0 : y.signInWithSolana) === null || r === void 0 ? void 0 : r.issuedAt) !== null && s !== void 0 ? s : new Date().toISOString()}`,
          ...(!(
            (i = y == null ? void 0 : y.signInWithSolana) === null ||
            i === void 0
          ) && i.notBefore
            ? [`Not Before: ${y.signInWithSolana.notBefore}`]
            : []),
          ...(!(
            (a = y == null ? void 0 : y.signInWithSolana) === null ||
            a === void 0
          ) && a.expirationTime
            ? [`Expiration Time: ${y.signInWithSolana.expirationTime}`]
            : []),
          ...(!(
            (l = y == null ? void 0 : y.signInWithSolana) === null ||
            l === void 0
          ) && l.chainId
            ? [`Chain ID: ${y.signInWithSolana.chainId}`]
            : []),
          ...(!(
            (c = y == null ? void 0 : y.signInWithSolana) === null ||
            c === void 0
          ) && c.nonce
            ? [`Nonce: ${y.signInWithSolana.nonce}`]
            : []),
          ...(!(
            (u = y == null ? void 0 : y.signInWithSolana) === null ||
            u === void 0
          ) && u.requestId
            ? [`Request ID: ${y.signInWithSolana.requestId}`]
            : []),
          ...(!(
            (f =
              (d = y == null ? void 0 : y.signInWithSolana) === null ||
              d === void 0
                ? void 0
                : d.resources) === null || f === void 0
          ) && f.length
            ? [
                "Resources",
                ...y.signInWithSolana.resources.map((P) => `- ${P}`),
              ]
            : []),
        ].join(`
`);
        const A = await E.signMessage(new TextEncoder().encode(v), "utf8");
        if (!A || !(A instanceof Uint8Array))
          throw new Error(
            "@supabase/auth-js: Wallet signMessage() API returned an recognized value",
          );
        x = A;
      }
    }
    try {
      const { data: _, error: m } = await G(
        this.fetch,
        "POST",
        `${this.url}/token?grant_type=web3`,
        {
          headers: this.headers,
          body: Object.assign(
            { chain: "solana", message: v, signature: Mr(x) },
            !((h = e.options) === null || h === void 0) && h.captchaToken
              ? {
                  gotrue_meta_security: {
                    captcha_token:
                      (p = e.options) === null || p === void 0
                        ? void 0
                        : p.captchaToken,
                  },
                }
              : null,
          ),
          xform: Qt,
        },
      );
      if (m) throw m;
      if (!_ || !_.session || !_.user) {
        const g = new Zr();
        return this._returnResult({
          data: { user: null, session: null },
          error: g,
        });
      }
      return (
        _.session &&
          (await this._saveSession(_.session),
          await this._notifyAllSubscribers("SIGNED_IN", _.session)),
        this._returnResult({ data: Object.assign({}, _), error: m })
      );
    } catch (_) {
      if (W(_))
        return this._returnResult({
          data: { user: null, session: null },
          error: _,
        });
      throw _;
    }
  }
  async _exchangeCodeForSession(e, n) {
    const r = (n == null ? void 0 : n.flowId) != null,
      s = r
        ? Ya(n == null ? void 0 : n.flowId)
        : vt()
          ? Ya($h(window.location.href)[Lr])
          : null;
    r &&
      !s &&
      this._debug(
        "#_exchangeCodeForSession()",
        "provided flowId is not a valid flow id",
        n == null ? void 0 : n.flowId,
      );
    const { verifier: i, flowId: a } =
        r && !s
          ? { verifier: null, flowId: null }
          : await Zx(this.storage, this.storageKey, s),
      [l, c] = (i ?? "").split("/");
    try {
      if (!l && this.flowType === "pkce") throw new Mx();
      const { data: u, error: d } = await G(
        this.fetch,
        "POST",
        `${this.url}/token?grant_type=pkce`,
        {
          headers: this.headers,
          body: { auth_code: e, code_verifier: l },
          xform: Qt,
        },
      );
      if ((await cn(this.storage, this.storageKey, a), d)) throw d;
      if (!u || !u.session || !u.user) {
        const f = new Zr();
        return this._returnResult({
          data: { user: null, session: null, redirectType: null },
          error: f,
        });
      }
      return (
        u.session &&
          (await this._saveSession(u.session),
          await this._notifyAllSubscribers(
            c === "recovery" ? "PASSWORD_RECOVERY" : "SIGNED_IN",
            u.session,
          )),
        this._returnResult({
          data: Object.assign(Object.assign({}, u), {
            redirectType: c ?? null,
          }),
          error: d,
        })
      );
    } catch (u) {
      if ((await cn(this.storage, this.storageKey, a), W(u)))
        return this._returnResult({
          data: { user: null, session: null, redirectType: null },
          error: u,
        });
      throw u;
    }
  }
  async signInWithIdToken(e) {
    try {
      const {
          options: n,
          provider: r,
          token: s,
          access_token: i,
          nonce: a,
        } = e,
        l = await G(
          this.fetch,
          "POST",
          `${this.url}/token?grant_type=id_token`,
          {
            headers: this.headers,
            body: {
              provider: r,
              id_token: s,
              access_token: i,
              nonce: a,
              gotrue_meta_security: {
                captcha_token: n == null ? void 0 : n.captchaToken,
              },
            },
            xform: Qt,
          },
        ),
        { data: c, error: u } = l;
      if (u)
        return this._returnResult({
          data: { user: null, session: null },
          error: u,
        });
      if (!c || !c.session || !c.user) {
        const d = new Zr();
        return this._returnResult({
          data: { user: null, session: null },
          error: d,
        });
      }
      return (
        c.session &&
          (await this._saveSession(c.session),
          await this._notifyAllSubscribers("SIGNED_IN", c.session)),
        this._returnResult({ data: c, error: u })
      );
    } catch (n) {
      if (W(n))
        return this._returnResult({
          data: { user: null, session: null },
          error: n,
        });
      throw n;
    }
  }
  async signInWithOtp(e) {
    var n, r, s, i, a;
    let l = null;
    try {
      if ("email" in e) {
        const { email: c, options: u } = e;
        let d = null,
          f = null;
        this.flowType === "pkce" &&
          ([d, f, l] = await this._getCodeChallengeAndMethod());
        const { error: h } = await G(this.fetch, "POST", `${this.url}/otp`, {
          headers: this.headers,
          body: {
            email: c,
            data:
              (n = u == null ? void 0 : u.data) !== null && n !== void 0
                ? n
                : {},
            create_user:
              (r = u == null ? void 0 : u.shouldCreateUser) !== null &&
              r !== void 0
                ? r
                : !0,
            gotrue_meta_security: {
              captcha_token: u == null ? void 0 : u.captchaToken,
            },
            code_challenge: d,
            code_challenge_method: f,
          },
          redirectTo: this._maybeAppendFlowIdToRedirect(
            u == null ? void 0 : u.emailRedirectTo,
            l,
          ),
        });
        return this._returnResult({
          data: { user: null, session: null },
          error: h,
        });
      }
      if ("phone" in e) {
        const { phone: c, options: u } = e,
          { data: d, error: f } = await G(
            this.fetch,
            "POST",
            `${this.url}/otp`,
            {
              headers: this.headers,
              body: {
                phone: c,
                data:
                  (s = u == null ? void 0 : u.data) !== null && s !== void 0
                    ? s
                    : {},
                create_user:
                  (i = u == null ? void 0 : u.shouldCreateUser) !== null &&
                  i !== void 0
                    ? i
                    : !0,
                gotrue_meta_security: {
                  captcha_token: u == null ? void 0 : u.captchaToken,
                },
                channel:
                  (a = u == null ? void 0 : u.channel) !== null && a !== void 0
                    ? a
                    : "sms",
              },
            },
          );
        return this._returnResult({
          data: {
            user: null,
            session: null,
            messageId: d == null ? void 0 : d.message_id,
          },
          error: f,
        });
      }
      throw new Ea("You must provide either an email or phone number.");
    } catch (c) {
      if ((await cn(this.storage, this.storageKey, l), W(c)))
        return this._returnResult({
          data: { user: null, session: null },
          error: c,
        });
      throw c;
    }
  }
  async verifyOtp(e) {
    var n, r;
    try {
      let s, i;
      "options" in e &&
        ((s = (n = e.options) === null || n === void 0 ? void 0 : n.redirectTo),
        (i =
          (r = e.options) === null || r === void 0 ? void 0 : r.captchaToken));
      const { data: a, error: l } = await G(
        this.fetch,
        "POST",
        `${this.url}/verify`,
        {
          headers: this.headers,
          body: Object.assign(Object.assign({}, e), {
            gotrue_meta_security: { captcha_token: i },
          }),
          redirectTo: s,
          xform: Qt,
        },
      );
      if (l) throw l;
      if (!a) throw new Error("An error occurred on token verification.");
      const c = a.session,
        u = a.user;
      return (
        c != null &&
          c.access_token &&
          (await this._saveSession(c),
          await this._notifyAllSubscribers(
            e.type == "recovery" ? "PASSWORD_RECOVERY" : "SIGNED_IN",
            c,
          )),
        this._returnResult({ data: { user: u, session: c }, error: null })
      );
    } catch (s) {
      if (W(s))
        return this._returnResult({
          data: { user: null, session: null },
          error: s,
        });
      throw s;
    }
  }
  async signInWithSSO(e) {
    var n, r, s, i;
    let a = null;
    try {
      let l = null,
        c = null;
      this.flowType === "pkce" &&
        ([l, c, a] = await this._getCodeChallengeAndMethod());
      const u = await G(this.fetch, "POST", `${this.url}/sso`, {
        body: Object.assign(
          Object.assign(
            Object.assign(
              Object.assign(
                Object.assign(
                  {},
                  "providerId" in e ? { provider_id: e.providerId } : null,
                ),
                "domain" in e ? { domain: e.domain } : null,
              ),
              {
                redirect_to: this._maybeAppendFlowIdToRedirect(
                  (n = e.options) === null || n === void 0
                    ? void 0
                    : n.redirectTo,
                  a,
                ),
              },
            ),
            !((r = e == null ? void 0 : e.options) === null || r === void 0) &&
              r.captchaToken
              ? {
                  gotrue_meta_security: {
                    captcha_token: e.options.captchaToken,
                  },
                }
              : null,
          ),
          {
            skip_http_redirect: !0,
            code_challenge: l,
            code_challenge_method: c,
          },
        ),
        headers: this.headers,
        xform: u_,
      });
      return (
        !((s = u.data) === null || s === void 0) &&
          s.url &&
          vt() &&
          !(
            !((i = e.options) === null || i === void 0) && i.skipBrowserRedirect
          ) &&
          window.location.assign(u.data.url),
        this._returnResult(u)
      );
    } catch (l) {
      if ((await cn(this.storage, this.storageKey, a), W(l)))
        return this._returnResult({ data: null, error: l });
      throw l;
    }
  }
  async reauthenticate() {
    return (
      await this.initializePromise,
      this.lock != null
        ? await this._acquireLock(
            this.lockAcquireTimeout,
            async () => await this._reauthenticate(),
          )
        : await this._reauthenticate()
    );
  }
  async _reauthenticate() {
    try {
      return await this._useSession(async (e) => {
        const {
          data: { session: n },
          error: r,
        } = e;
        if (r) throw r;
        if (!n) throw new ht();
        const { error: s } = await G(
          this.fetch,
          "GET",
          `${this.url}/reauthenticate`,
          { headers: this.headers, jwt: n.access_token },
        );
        return this._returnResult({
          data: { user: null, session: null },
          error: s,
        });
      });
    } catch (e) {
      if (W(e))
        return this._returnResult({
          data: { user: null, session: null },
          error: e,
        });
      throw e;
    }
  }
  async resend(e) {
    let n = null;
    try {
      const r = `${this.url}/resend`;
      if ("email" in e) {
        const { email: s, type: i, options: a } = e;
        let l = null,
          c = null;
        this.flowType === "pkce" &&
          ([l, c, n] = await this._getCodeChallengeAndMethod());
        const { error: u } = await G(this.fetch, "POST", r, {
          headers: this.headers,
          body: {
            email: s,
            type: i,
            gotrue_meta_security: {
              captcha_token: a == null ? void 0 : a.captchaToken,
            },
            code_challenge: l,
            code_challenge_method: c,
          },
          redirectTo: this._maybeAppendFlowIdToRedirect(
            a == null ? void 0 : a.emailRedirectTo,
            n,
          ),
        });
        return (
          u && (await cn(this.storage, this.storageKey, n)),
          this._returnResult({ data: { user: null, session: null }, error: u })
        );
      } else if ("phone" in e) {
        const { phone: s, type: i, options: a } = e,
          { data: l, error: c } = await G(this.fetch, "POST", r, {
            headers: this.headers,
            body: {
              phone: s,
              type: i,
              gotrue_meta_security: {
                captcha_token: a == null ? void 0 : a.captchaToken,
              },
            },
          });
        return this._returnResult({
          data: {
            user: null,
            session: null,
            messageId: l == null ? void 0 : l.message_id,
          },
          error: c,
        });
      }
      throw new Ea(
        "You must provide either an email or phone number and a type",
      );
    } catch (r) {
      if ((await cn(this.storage, this.storageKey, n), W(r)))
        return this._returnResult({
          data: { user: null, session: null },
          error: r,
        });
      throw r;
    }
  }
  async getSession() {
    return (
      await this.initializePromise,
      this.lock != null
        ? await this._acquireLock(this.lockAcquireTimeout, async () =>
            this._useSession(async (e) => e),
          )
        : await this._useSession(async (e) => e)
    );
  }
  async _acquireLock(e, n) {
    this._debug("#_acquireLock", "begin", e);
    try {
      if (this.lockAcquired) {
        const r = this.pendingInLock.length
            ? this.pendingInLock[this.pendingInLock.length - 1]
            : Promise.resolve(),
          s = (async () => (await r, await n()))();
        return (
          this.pendingInLock.push(
            (async () => {
              try {
                await s;
              } catch {}
            })(),
          ),
          s
        );
      }
      return await this.lock(`lock:${this.storageKey}`, e, async () => {
        this._debug(
          "#_acquireLock",
          "lock acquired for storage key",
          this.storageKey,
        );
        try {
          this.lockAcquired = !0;
          const r = n();
          for (
            this.pendingInLock.push(
              (async () => {
                try {
                  await r;
                } catch {}
              })(),
            ),
              await r;
            this.pendingInLock.length;

          ) {
            const s = [...this.pendingInLock];
            (await Promise.all(s), this.pendingInLock.splice(0, s.length));
          }
          return await r;
        } finally {
          (this._debug(
            "#_acquireLock",
            "lock released for storage key",
            this.storageKey,
          ),
            (this.lockAcquired = !1));
        }
      });
    } finally {
      this._debug("#_acquireLock", "end");
    }
  }
  async _useSession(e) {
    this._debug("#_useSession", "begin");
    try {
      const n = await this.__loadSession();
      return await e(n);
    } finally {
      this._debug("#_useSession", "end");
    }
  }
  async __loadSession() {
    (this._debug("#__loadSession()", "begin"),
      this.lock != null &&
        !this.lockAcquired &&
        this._debug(
          "#__loadSession()",
          "used outside of an acquired lock!",
          new Error().stack,
        ));
    try {
      let e = null;
      const n = await kt(this.storage, this.storageKey);
      if (
        (this._debug("#getSession()", "session from storage", n),
        n !== null &&
          (this._isValidSession(n)
            ? (e = n)
            : (this._debug(
                "#getSession()",
                "session from storage is not valid",
              ),
              await this._removeSession())),
        !e)
      )
        return { data: { session: null }, error: null };
      const r = e.expires_at ? e.expires_at * 1e3 - Date.now() < $l : !1;
      if (
        (this._debug(
          "#__loadSession()",
          `session has${r ? "" : " not"} expired`,
          "expires_at",
          e.expires_at,
        ),
        !r)
      )
        return {
          data: { session: await this._hydrateSessionUser(e) },
          error: null,
        };
      const { data: s, error: i } = await this._callRefreshToken(
        e.refresh_token,
      );
      if (i) {
        const a = await kt(this.storage, this.storageKey);
        return a &&
          this._isValidSession(a) &&
          a.expires_at &&
          a.expires_at * 1e3 > Date.now()
          ? this._returnResult({
              data: { session: await this._hydrateSessionUser(a) },
              error: null,
            })
          : this._returnResult({ data: { session: null }, error: i });
      }
      return this._returnResult({ data: { session: s }, error: null });
    } finally {
      this._debug("#__loadSession()", "end");
    }
  }
  async _hydrateSessionUser(e) {
    if (this.userStorage) {
      const n = await kt(this.userStorage, this.storageKey + "-user");
      e.user = n != null && n.user ? n.user : Dl();
    }
    if (this.storage.isServer && e.user && !e.user.__isUserNotAvailableProxy) {
      const n = { value: this.suppressGetSessionWarning };
      ((e.user = o_(e.user, n)),
        n.value && (this.suppressGetSessionWarning = !0));
    }
    return e;
  }
  async getUser(e) {
    if (e) return await this._getUser(e);
    await this.initializePromise;
    let n;
    return (
      this.lock != null
        ? (n = await this._acquireLock(
            this.lockAcquireTimeout,
            async () => await this._getUser(),
          ))
        : (n = await this._getUser()),
      n.data.user && (this.suppressGetSessionWarning = !0),
      n
    );
  }
  async _getUser(e) {
    try {
      return e
        ? await G(this.fetch, "GET", `${this.url}/user`, {
            headers: this.headers,
            jwt: e,
            xform: ir,
          })
        : await this._useSession(async (n) => {
            var r, s, i;
            const { data: a, error: l } = n;
            if (l) throw l;
            return !(
              !((r = a.session) === null || r === void 0) && r.access_token
            ) && !this.hasCustomAuthorizationHeader
              ? { data: { user: null }, error: new ht() }
              : await G(this.fetch, "GET", `${this.url}/user`, {
                  headers: this.headers,
                  jwt:
                    (i =
                      (s = a.session) === null || s === void 0
                        ? void 0
                        : s.access_token) !== null && i !== void 0
                      ? i
                      : void 0,
                  xform: ir,
                });
          });
    } catch (n) {
      if (W(n))
        return (
          Sa(n) && (await this._removeSession()),
          this._returnResult({ data: { user: null }, error: n })
        );
      throw n;
    }
  }
  async updateUser(e, n = {}) {
    return (
      await this.initializePromise,
      this.lock != null
        ? await this._acquireLock(
            this.lockAcquireTimeout,
            async () => await this._updateUser(e, n),
          )
        : await this._updateUser(e, n)
    );
  }
  async _updateUser(e, n = {}) {
    let r = null;
    try {
      return await this._useSession(async (s) => {
        const { data: i, error: a } = s;
        if (a) throw a;
        if (!i.session) throw new ht();
        const l = i.session;
        let c = null,
          u = null;
        this.flowType === "pkce" &&
          e.email != null &&
          ([c, u, r] = await this._getCodeChallengeAndMethod());
        const { data: d, error: f } = await G(
          this.fetch,
          "PUT",
          `${this.url}/user`,
          {
            headers: this.headers,
            redirectTo: this._maybeAppendFlowIdToRedirect(
              n == null ? void 0 : n.emailRedirectTo,
              r,
            ),
            body: Object.assign(Object.assign({}, e), {
              code_challenge: c,
              code_challenge_method: u,
            }),
            jwt: l.access_token,
            xform: ir,
          },
        );
        if (f) throw f;
        return (
          (l.user = d.user),
          await this._saveSession(l),
          await this._notifyAllSubscribers("USER_UPDATED", l),
          this._returnResult({ data: { user: l.user }, error: null })
        );
      });
    } catch (s) {
      if ((await cn(this.storage, this.storageKey, r), W(s)))
        return this._returnResult({ data: { user: null }, error: s });
      throw s;
    }
  }
  async setSession(e) {
    return (
      await this.initializePromise,
      this.lock != null
        ? await this._acquireLock(
            this.lockAcquireTimeout,
            async () => await this._setSession(e),
          )
        : await this._setSession(e)
    );
  }
  async _setSession(e) {
    try {
      if (!e.access_token || !e.refresh_token) throw new ht();
      const n = Date.now() / 1e3;
      let r = n,
        s = !0,
        i = null;
      const { payload: a } = Na(e.access_token);
      if ((a.exp && ((r = a.exp), (s = r <= n)), s)) {
        const { data: l, error: c } = await this._callRefreshToken(
          e.refresh_token,
        );
        if (c)
          return this._returnResult({
            data: { user: null, session: null },
            error: c,
          });
        if (!l) return { data: { user: null, session: null }, error: null };
        i = l;
      } else {
        const { data: l, error: c } = await this._getUser(e.access_token);
        if (c)
          return this._returnResult({
            data: { user: null, session: null },
            error: c,
          });
        ((i = {
          access_token: e.access_token,
          refresh_token: e.refresh_token,
          user: l.user,
          token_type: "bearer",
          expires_in: r - n,
          expires_at: r,
        }),
          await this._saveSession(i),
          await this._notifyAllSubscribers("SIGNED_IN", i));
      }
      return this._returnResult({
        data: { user: i.user, session: i },
        error: null,
      });
    } catch (n) {
      if (W(n))
        return this._returnResult({
          data: { session: null, user: null },
          error: n,
        });
      throw n;
    }
  }
  async refreshSession(e) {
    return (
      await this.initializePromise,
      this.lock != null
        ? await this._acquireLock(
            this.lockAcquireTimeout,
            async () => await this._refreshSession(e),
          )
        : await this._refreshSession(e)
    );
  }
  async _refreshSession(e) {
    try {
      return await this._useSession(async (n) => {
        var r;
        if (!e) {
          const { data: a, error: l } = n;
          if (l) throw l;
          e = (r = a.session) !== null && r !== void 0 ? r : void 0;
        }
        if (!(e != null && e.refresh_token)) throw new ht();
        const { data: s, error: i } = await this._callRefreshToken(
          e.refresh_token,
        );
        return i
          ? this._returnResult({
              data: { user: null, session: null },
              error: i,
            })
          : s
            ? this._returnResult({
                data: { user: s.user, session: s },
                error: null,
              })
            : this._returnResult({
                data: { user: null, session: null },
                error: null,
              });
      });
    } catch (n) {
      if (W(n))
        return this._returnResult({
          data: { user: null, session: null },
          error: n,
        });
      throw n;
    }
  }
  async _getSessionFromURL(e, n) {
    var r;
    try {
      if (!vt()) throw new ja("No browser detected.");
      if (e.error || e.error_description || e.error_code)
        throw new ja(
          e.error_description ||
            "Error in URL with unspecified error_description",
          {
            error: e.error || "unspecified_error",
            code: e.error_code || "unspecified_code",
          },
        );
      switch (n) {
        case "implicit":
          if (this.flowType === "pkce")
            throw new Rh("Not a valid PKCE flow url.");
          break;
        case "pkce":
          if (this.flowType === "implicit")
            throw new ja("Not a valid implicit grant flow url.");
          break;
        default:
      }
      if (n === "pkce") {
        if (
          (this._debug("#_initialize()", "begin", "is PKCE flow", !0), !e.code)
        )
          throw new Rh("No code detected.");
        const { data: y, error: E } = await this._exchangeCodeForSession(
          e.code,
          { flowId: e[Lr] },
        );
        if (E) throw E;
        const R = new URL(window.location.href);
        return (
          R.searchParams.delete("code"),
          R.searchParams.delete(Lr),
          window.history.replaceState(window.history.state, "", R.toString()),
          {
            data: {
              session: y.session,
              redirectType:
                (r = y.redirectType) !== null && r !== void 0 ? r : null,
            },
            error: null,
          }
        );
      }
      const {
        provider_token: s,
        provider_refresh_token: i,
        access_token: a,
        refresh_token: l,
        expires_in: c,
        expires_at: u,
        token_type: d,
      } = e;
      if (!a || !c || !l || !d) throw new ja("No session defined in URL");
      const f = Math.round(Date.now() / 1e3),
        h = parseInt(c);
      let p = f + h;
      u && (p = parseInt(u));
      const v = p - f;
      v * 1e3 <= Bn &&
        console.warn(
          `@supabase/gotrue-js: Session as retrieved from URL expires in ${v}s, should have been closer to ${h}s`,
        );
      const x = p - h;
      f - x >= 120
        ? console.warn(
            "@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale",
            x,
            p,
            f,
          )
        : f - x < 0 &&
          console.warn(
            "@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clock for skew",
            x,
            p,
            f,
          );
      const { data: _, error: m } = await this._getUser(a);
      if (m) throw m;
      const g = {
        provider_token: s,
        provider_refresh_token: i,
        access_token: a,
        expires_in: h,
        expires_at: p,
        refresh_token: l,
        token_type: d,
        user: _.user,
      };
      return (
        (window.location.hash = ""),
        this._debug("#_getSessionFromURL()", "clearing window.location.hash"),
        this._returnResult({
          data: { session: g, redirectType: e.type },
          error: null,
        })
      );
    } catch (s) {
      if (W(s))
        return this._returnResult({
          data: { session: null, redirectType: null },
          error: s,
        });
      throw s;
    }
  }
  _isImplicitGrantCallback(e) {
    return typeof this.detectSessionInUrl == "function"
      ? this.detectSessionInUrl(new URL(window.location.href), e)
      : !!(e.access_token || e.error || e.error_description || e.error_code);
  }
  async _isPKCECallback(e) {
    if (!e.code) return !1;
    const n = Ya(e[Lr]);
    return n && (await kt(this.storage, $s(this.storageKey, n)))
      ? !0
      : !!(await kt(this.storage, `${this.storageKey}-code-verifier`));
  }
  async signOut(e = { scope: "global" }) {
    return (
      await this.initializePromise,
      this.lock != null
        ? await this._acquireLock(
            this.lockAcquireTimeout,
            async () => await this._signOut(e),
          )
        : await this._signOut(e)
    );
  }
  async _signOut({ scope: e } = { scope: "global" }) {
    return await this._useSession(async (n) => {
      var r;
      const s = async () => {
          await this._removeSession();
        },
        { data: i, error: a } = n;
      if (a && !Sa(a)) return this._returnResult({ error: a });
      const l =
        (r = i.session) === null || r === void 0 ? void 0 : r.access_token;
      if (l) {
        const { error: c } = await this.admin.signOut(l, e);
        if (
          c &&
          !(
            (Ch(c) &&
              (c.status === 404 || c.status === 401 || c.status === 403)) ||
            Sa(c)
          )
        )
          return (
            e !== "others" && (await s()),
            this._returnResult({ error: c })
          );
      }
      return (
        e !== "others" && (await s()),
        this._returnResult({ error: null })
      );
    });
  }
  onAuthStateChange(e) {
    const n = Fx(),
      r = {
        id: n,
        callback: e,
        unsubscribe: () => {
          (this._debug(
            "#unsubscribe()",
            "state change callback with id removed",
            n,
          ),
            this.stateChangeEmitters.delete(n));
        },
      };
    return (
      this._debug("#onAuthStateChange()", "registered callback with id", n),
      this.stateChangeEmitters.set(n, r),
      (async () => (
        await this.initializePromise,
        this.lock != null
          ? await this._acquireLock(this.lockAcquireTimeout, async () => {
              this._emitInitialSession(n);
            })
          : await this._emitInitialSession(n)
      ))(),
      { data: { subscription: r } }
    );
  }
  async _emitInitialSession(e) {
    return await this._useSession(async (n) => {
      var r, s;
      try {
        const {
          data: { session: i },
          error: a,
        } = n;
        if (a) throw a;
        (await ((r = this.stateChangeEmitters.get(e)) === null || r === void 0
          ? void 0
          : r.callback("INITIAL_SESSION", i)),
          this._debug("INITIAL_SESSION", "callback id", e, "session", i));
      } catch (i) {
        if (
          (await ((s = this.stateChangeEmitters.get(e)) === null || s === void 0
            ? void 0
            : s.callback("INITIAL_SESSION", null)),
          this._debug("INITIAL_SESSION", "callback id", e, "error", i),
          Ph(i))
        )
          return;
        Sa(i) ||
        Ta(i) ||
        (Ch(i) &&
          (i.code === "refresh_token_not_found" ||
            i.code === "refresh_token_already_used" ||
            i.code === "session_expired"))
          ? console.warn(i)
          : console.error(i);
      }
    });
  }
  async resetPasswordForEmail(e, n = {}) {
    let r = null,
      s = null,
      i = null;
    this.flowType === "pkce" &&
      ([r, s, i] = await this._getCodeChallengeAndMethod(!0));
    try {
      return await G(this.fetch, "POST", `${this.url}/recover`, {
        body: {
          email: e,
          code_challenge: r,
          code_challenge_method: s,
          gotrue_meta_security: { captcha_token: n.captchaToken },
        },
        headers: this.headers,
        redirectTo: this._maybeAppendFlowIdToRedirect(n.redirectTo, i),
      });
    } catch (a) {
      if ((await cn(this.storage, this.storageKey, i), W(a)))
        return this._returnResult({ data: null, error: a });
      throw a;
    }
  }
  async getUserIdentities() {
    var e;
    try {
      const { data: n, error: r } = await this.getUser();
      if (r) throw r;
      return this._returnResult({
        data: {
          identities: (e = n.user.identities) !== null && e !== void 0 ? e : [],
        },
        error: null,
      });
    } catch (n) {
      if (W(n)) return this._returnResult({ data: null, error: n });
      throw n;
    }
  }
  async linkIdentity(e) {
    return "token" in e
      ? this.linkIdentityIdToken(e)
      : this.linkIdentityOAuth(e);
  }
  async linkIdentityOAuth(e) {
    var n;
    let r = null;
    try {
      const { data: s, error: i } = await this._useSession(async (a) => {
        var l, c, u, d, f;
        const { data: h, error: p } = a;
        if (p) throw p;
        const { url: v, flowId: x } = await this._getUrlForProvider(
          `${this.url}/user/identities/authorize`,
          e.provider,
          {
            redirectTo:
              (l = e.options) === null || l === void 0 ? void 0 : l.redirectTo,
            scopes:
              (c = e.options) === null || c === void 0 ? void 0 : c.scopes,
            queryParams:
              (u = e.options) === null || u === void 0 ? void 0 : u.queryParams,
            skipBrowserRedirect: !0,
          },
        );
        return (
          (r = x),
          await G(this.fetch, "GET", v, {
            headers: this.headers,
            jwt:
              (f =
                (d = h.session) === null || d === void 0
                  ? void 0
                  : d.access_token) !== null && f !== void 0
                ? f
                : void 0,
          })
        );
      });
      if (i) throw i;
      return (
        vt() &&
          !(
            !((n = e.options) === null || n === void 0) && n.skipBrowserRedirect
          ) &&
          window.location.assign(s == null ? void 0 : s.url),
        this._returnResult({
          data: {
            provider: e.provider,
            url: s == null ? void 0 : s.url,
            flowId: r,
          },
          error: null,
        })
      );
    } catch (s) {
      if (W(s))
        return this._returnResult({
          data: { provider: e.provider, url: null, flowId: r },
          error: s,
        });
      throw s;
    }
  }
  async linkIdentityIdToken(e) {
    return await this._useSession(async (n) => {
      var r;
      try {
        const {
          error: s,
          data: { session: i },
        } = n;
        if (s) throw s;
        const {
            options: a,
            provider: l,
            token: c,
            access_token: u,
            nonce: d,
          } = e,
          f = await G(
            this.fetch,
            "POST",
            `${this.url}/token?grant_type=id_token`,
            {
              headers: this.headers,
              jwt:
                (r = i == null ? void 0 : i.access_token) !== null &&
                r !== void 0
                  ? r
                  : void 0,
              body: {
                provider: l,
                id_token: c,
                access_token: u,
                nonce: d,
                link_identity: !0,
                gotrue_meta_security: {
                  captcha_token: a == null ? void 0 : a.captchaToken,
                },
              },
              xform: Qt,
            },
          ),
          { data: h, error: p } = f;
        return p
          ? this._returnResult({
              data: { user: null, session: null },
              error: p,
            })
          : !h || !h.session || !h.user
            ? this._returnResult({
                data: { user: null, session: null },
                error: new Zr(),
              })
            : (h.session &&
                (await this._saveSession(h.session),
                await this._notifyAllSubscribers("USER_UPDATED", h.session)),
              this._returnResult({ data: h, error: p }));
      } catch (s) {
        if ((await cn(this.storage, this.storageKey, null), W(s)))
          return this._returnResult({
            data: { user: null, session: null },
            error: s,
          });
        throw s;
      }
    });
  }
  async unlinkIdentity(e) {
    try {
      return await this._useSession(async (n) => {
        var r, s;
        const { data: i, error: a } = n;
        if (a) throw a;
        return await G(
          this.fetch,
          "DELETE",
          `${this.url}/user/identities/${e.identity_id}`,
          {
            headers: this.headers,
            jwt:
              (s =
                (r = i.session) === null || r === void 0
                  ? void 0
                  : r.access_token) !== null && s !== void 0
                ? s
                : void 0,
          },
        );
      });
    } catch (n) {
      if (W(n)) return this._returnResult({ data: null, error: n });
      throw n;
    }
  }
  async _refreshAccessToken(e) {
    const n = "#_refreshAccessToken()";
    this._debug(n, "begin");
    try {
      const r = Date.now();
      return await Wx(
        async (s) => (
          s > 0 && (await Vx(200 * Math.pow(2, s - 1))),
          this._debug(n, "refreshing attempt", s),
          await G(
            this.fetch,
            "POST",
            `${this.url}/token?grant_type=refresh_token`,
            { body: { refresh_token: e }, headers: this.headers, xform: Qt },
          )
        ),
        (s, i) => {
          const a = 200 * Math.pow(2, s);
          return i && Ta(i) && Date.now() + a - r < Bn;
        },
      );
    } catch (r) {
      if ((this._debug(n, "error", r), W(r)))
        return this._returnResult({
          data: { session: null, user: null },
          error: r,
        });
      throw r;
    } finally {
      this._debug(n, "end");
    }
  }
  _isValidSession(e) {
    return (
      typeof e == "object" &&
      e !== null &&
      "access_token" in e &&
      "refresh_token" in e &&
      "expires_at" in e
    );
  }
  async _handleProviderSignIn(e, n) {
    const { url: r, flowId: s } = await this._getUrlForProvider(
      `${this.url}/authorize`,
      e,
      {
        redirectTo: n.redirectTo,
        scopes: n.scopes,
        queryParams: n.queryParams,
      },
    );
    return (
      this._debug(
        "#_handleProviderSignIn()",
        "provider",
        e,
        "options",
        n,
        "url",
        r,
      ),
      vt() && !n.skipBrowserRedirect && window.location.assign(r),
      { data: { provider: e, url: r, flowId: s }, error: null }
    );
  }
  async _recoverAndRefresh() {
    var e, n;
    const r = "#_recoverAndRefresh()";
    this._debug(r, "begin");
    try {
      const s = await kt(this.storage, this.storageKey);
      if (s && this.userStorage) {
        let a = await kt(this.userStorage, this.storageKey + "-user");
        (!this.storage.isServer &&
          Object.is(this.storage, this.userStorage) &&
          !a &&
          ((a = { user: s.user }),
          await Fn(this.userStorage, this.storageKey + "-user", a)),
          (s.user =
            (e = a == null ? void 0 : a.user) !== null && e !== void 0
              ? e
              : Dl()));
      } else if (s && !s.user && !s.user) {
        const a = await kt(this.storage, this.storageKey + "-user");
        a && a != null && a.user
          ? ((s.user = a.user),
            await Mt(this.storage, this.storageKey + "-user"),
            await Fn(this.storage, this.storageKey, s))
          : (s.user = Dl());
      }
      if (
        (this._debug(r, "session from storage", s), !this._isValidSession(s))
      ) {
        (this._debug(r, "session is not valid"),
          s !== null && (await this._removeSession()));
        return;
      }
      const i =
        ((n = s.expires_at) !== null && n !== void 0 ? n : 1 / 0) * 1e3 -
          Date.now() <
        $l;
      if (
        (this._debug(
          r,
          `session has${i ? "" : " not"} expired with margin of ${$l}s`,
        ),
        i)
      ) {
        if (this.autoRefreshToken && s.refresh_token) {
          const { error: a } = await this._callRefreshToken(s.refresh_token);
          a &&
            (Ph(a)
              ? this._debug(r, "refresh discarded by commit guard", a)
              : this._debug(r, "refresh failed", a));
        }
      } else if (s.user && s.user.__isUserNotAvailableProxy === !0)
        try {
          const { data: a, error: l } = await this._getUser(s.access_token);
          !l && a != null && a.user
            ? ((s.user = a.user),
              await this._saveSession(s),
              await this._notifyAllSubscribers("SIGNED_IN", s))
            : this._debug(
                r,
                "could not get user data, skipping SIGNED_IN notification",
              );
        } catch (a) {
          (console.error("Error getting user data:", a),
            this._debug(
              r,
              "error getting user data, skipping SIGNED_IN notification",
              a,
            ));
        }
      else await this._notifyAllSubscribers("SIGNED_IN", s);
    } catch (s) {
      (this._debug(r, "error", s), Ta(s) ? console.warn(s) : console.error(s));
      return;
    } finally {
      this._debug(r, "end");
    }
  }
  async _callRefreshToken(e) {
    var n, r;
    if (!e) throw new ht();
    if (this.refreshingDeferred) return this.refreshingDeferred.promise;
    if (
      this.lastRefreshFailure &&
      this.lastRefreshFailure.refreshToken === e &&
      Date.now() < this.lastRefreshFailure.expiresAt
    )
      return (
        this._debug(
          "#_callRefreshToken()",
          "returning cached failure (cooldown active)",
        ),
        this.lastRefreshFailure.result
      );
    const s = "#_callRefreshToken()";
    this._debug(s, "begin");
    try {
      ((this.refreshingDeferred = new nl()),
        this.refreshingDeferred.promise.then(void 0, () => {}));
      const i = await kt(this.storage, this.storageKey),
        { data: a, error: l } = await this._refreshAccessToken(e);
      if (l) throw l;
      if (!a.session) throw new ht();
      const c = await kt(this.storage, this.storageKey);
      if (i !== null && (c === null || c.refresh_token !== i.refresh_token)) {
        this._debug(
          s,
          "commit guard: storage changed since refresh started, discarding rotated tokens",
          { startedWith: "present", nowHolds: c ? "replaced" : "cleared" },
        );
        const h = { data: null, error: new Ah() };
        return (this.refreshingDeferred.resolve(h), h);
      }
      const d = this._sessionRemovalEpoch;
      if (
        (await this._saveSession(a.session), this._sessionRemovalEpoch !== d)
      ) {
        (this._debug(
          s,
          "commit guard (post-save): _removeSession ran during _saveSession, undoing write",
        ),
          await Mt(this.storage, this.storageKey),
          this.userStorage &&
            (await Mt(this.userStorage, this.storageKey + "-user")));
        const h = { data: null, error: new Ah() };
        return (this.refreshingDeferred.resolve(h), h);
      }
      await this._notifyAllSubscribers("TOKEN_REFRESHED", a.session);
      const f = { data: a.session, error: null };
      return (
        (this.lastRefreshFailure = null),
        this.refreshingDeferred.resolve(f),
        f
      );
    } catch (i) {
      if ((this._debug(s, "error", i), W(i))) {
        const a = { data: null, error: i };
        if (!Ta(i)) {
          const l = await kt(this.storage, this.storageKey);
          !!(l != null && l.expires_at && l.expires_at * 1e3 > Date.now())
            ? this._debug(
                s,
                "proactive refresh failed, access token still valid — preserving session",
              )
            : await this._removeSession();
        }
        return (
          (this.lastRefreshFailure = {
            refreshToken: e,
            result: a,
            expiresAt: Date.now() + Tx,
          }),
          (n = this.refreshingDeferred) === null ||
            n === void 0 ||
            n.resolve(a),
          a
        );
      }
      throw (
        (r = this.refreshingDeferred) === null || r === void 0 || r.reject(i),
        i
      );
    } finally {
      ((this.refreshingDeferred = null), this._debug(s, "end"));
    }
  }
  async _notifyAllSubscribers(e, n, r = !0) {
    if (this._pendingInitNotifications !== null && r) {
      this._pendingInitNotifications.push({
        event: e,
        session: n,
        broadcast: r,
      });
      return;
    }
    const s = `#_notifyAllSubscribers(${e})`;
    this._debug(s, "begin", n, `broadcast = ${r}`);
    try {
      this.broadcastChannel &&
        r &&
        this.broadcastChannel.postMessage({ event: e, session: n });
      const i = [],
        a = Array.from(this.stateChangeEmitters.values()).map(async (l) => {
          try {
            await l.callback(e, n);
          } catch (c) {
            i.push(c);
          }
        });
      if ((await Promise.all(a), i.length > 0)) {
        for (let l = 0; l < i.length; l += 1) console.error(i[l]);
        throw i[0];
      }
    } finally {
      this._debug(s, "end");
    }
  }
  async _saveSession(e) {
    (this._debug("#_saveSession()", e), (this.suppressGetSessionWarning = !0));
    const n = Object.assign({}, e),
      r = n.user && n.user.__isUserNotAvailableProxy === !0;
    if (this.userStorage) {
      !r &&
        n.user &&
        (await Fn(this.userStorage, this.storageKey + "-user", {
          user: n.user,
        }));
      const s = Object.assign({}, n);
      delete s.user;
      const i = Dh(s);
      await Fn(this.storage, this.storageKey, i);
    } else {
      const s = Dh(n);
      await Fn(this.storage, this.storageKey, s);
    }
  }
  async _removeSession() {
    ((this._sessionRemovalEpoch += 1),
      this._debug("#_removeSession()"),
      (this.lastRefreshFailure = null),
      (this.suppressGetSessionWarning = !1),
      await Mt(this.storage, this.storageKey),
      await Qx(this.storage, this.storageKey),
      await Mt(this.storage, this.storageKey + "-user"),
      this.userStorage &&
        (await Mt(this.userStorage, this.storageKey + "-user")),
      await this._notifyAllSubscribers("SIGNED_OUT", null));
  }
  _removeVisibilityChangedCallback() {
    this._debug("#_removeVisibilityChangedCallback()");
    const e = this.visibilityChangedCallback;
    this.visibilityChangedCallback = null;
    try {
      e &&
        vt() &&
        window != null &&
        window.removeEventListener &&
        window.removeEventListener("visibilitychange", e);
    } catch (n) {
      console.error("removing visibilitychange callback failed", n);
    }
  }
  async _startAutoRefresh() {
    (await this._stopAutoRefresh(), this._debug("#_startAutoRefresh()"));
    const e = setInterval(() => this._autoRefreshTokenTick(), Bn);
    ((this.autoRefreshTicker = e),
      e && typeof e == "object" && typeof e.unref == "function"
        ? e.unref()
        : typeof Deno < "u" &&
          typeof Deno.unrefTimer == "function" &&
          Deno.unrefTimer(e));
    const n = setTimeout(async () => {
      (await this.initializePromise, await this._autoRefreshTokenTick());
    }, 0);
    ((this.autoRefreshTickTimeout = n),
      n && typeof n == "object" && typeof n.unref == "function"
        ? n.unref()
        : typeof Deno < "u" &&
          typeof Deno.unrefTimer == "function" &&
          Deno.unrefTimer(n));
  }
  async _stopAutoRefresh() {
    this._debug("#_stopAutoRefresh()");
    const e = this.autoRefreshTicker;
    ((this.autoRefreshTicker = null), e && clearInterval(e));
    const n = this.autoRefreshTickTimeout;
    ((this.autoRefreshTickTimeout = null), n && clearTimeout(n));
  }
  async startAutoRefresh() {
    (this._removeVisibilityChangedCallback(), await this._startAutoRefresh());
  }
  async stopAutoRefresh() {
    (this._removeVisibilityChangedCallback(), await this._stopAutoRefresh());
  }
  async dispose() {
    var e;
    (this._removeVisibilityChangedCallback(),
      await this._stopAutoRefresh(),
      (e = this.broadcastChannel) === null || e === void 0 || e.close(),
      (this.broadcastChannel = null),
      this.stateChangeEmitters.clear());
  }
  async _autoRefreshTokenTick() {
    if ((this._debug("#_autoRefreshTokenTick()", "begin"), this.lock != null)) {
      try {
        await this._acquireLock(0, async () => {
          try {
            const e = Date.now();
            try {
              return await this._useSession(async (n) => {
                const {
                  data: { session: r },
                } = n;
                if (!r || !r.refresh_token || !r.expires_at) {
                  this._debug("#_autoRefreshTokenTick()", "no session");
                  return;
                }
                const s = Math.floor((r.expires_at * 1e3 - e) / Bn);
                (this._debug(
                  "#_autoRefreshTokenTick()",
                  `access token expires in ${s} ticks, a tick lasts ${Bn}ms, refresh threshold is ${ui} ticks`,
                ),
                  s <= ui && (await this._callRefreshToken(r.refresh_token)));
              });
            } catch (n) {
              console.error(
                "Auto refresh tick failed with error. This is likely a transient error.",
                n,
              );
            }
          } finally {
            this._debug("#_autoRefreshTokenTick()", "end");
          }
        });
      } catch (e) {
        if (e instanceof p_)
          this._debug("auto refresh token tick lock not available");
        else throw e;
      }
      return;
    }
    if (this.refreshingDeferred !== null) {
      this._debug(
        "#_autoRefreshTokenTick()",
        "refresh already in flight, skipping",
      );
      return;
    }
    try {
      const e = Date.now();
      try {
        await this._useSession(async (n) => {
          const {
            data: { session: r },
          } = n;
          if (!r || !r.refresh_token || !r.expires_at) {
            this._debug("#_autoRefreshTokenTick()", "no session");
            return;
          }
          const s = Math.floor((r.expires_at * 1e3 - e) / Bn);
          (this._debug(
            "#_autoRefreshTokenTick()",
            `access token expires in ${s} ticks, a tick lasts ${Bn}ms, refresh threshold is ${ui} ticks`,
          ),
            s <= ui && (await this._callRefreshToken(r.refresh_token)));
        });
      } catch (n) {
        console.error(
          "Auto refresh tick failed with error. This is likely a transient error.",
          n,
        );
      }
    } finally {
      this._debug("#_autoRefreshTokenTick()", "end");
    }
  }
  async _handleVisibilityChange() {
    if (
      (this._debug("#_handleVisibilityChange()"),
      !vt() || !(window != null && window.addEventListener))
    )
      return (this.autoRefreshToken && this.startAutoRefresh(), !1);
    try {
      ((this.visibilityChangedCallback = async () => {
        try {
          await this._onVisibilityChanged(!1);
        } catch (e) {
          this._debug("#visibilityChangedCallback", "error", e);
        }
      }),
        window == null ||
          window.addEventListener(
            "visibilitychange",
            this.visibilityChangedCallback,
          ),
        await this._onVisibilityChanged(!0));
    } catch (e) {
      console.error("_handleVisibilityChange", e);
    }
  }
  async _onVisibilityChanged(e) {
    const n = `#_onVisibilityChanged(${e})`;
    if (
      (this._debug(n, "visibilityState", document.visibilityState),
      document.visibilityState === "visible")
    ) {
      if ((this.autoRefreshToken && this._startAutoRefresh(), !e))
        if ((await this.initializePromise, this.lock != null))
          await this._acquireLock(this.lockAcquireTimeout, async () => {
            if (document.visibilityState !== "visible") {
              this._debug(
                n,
                "acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting",
              );
              return;
            }
            await this._recoverAndRefresh();
          });
        else {
          if (document.visibilityState !== "visible") {
            this._debug(
              n,
              "visibilityState is no longer visible, skipping recovery",
            );
            return;
          }
          await this._recoverAndRefresh();
        }
    } else
      document.visibilityState === "hidden" &&
        this.autoRefreshToken &&
        this._stopAutoRefresh();
  }
  async _getUrlForProvider(e, n, r) {
    let s = r == null ? void 0 : r.redirectTo,
      i = null,
      a = null,
      l = null;
    this.flowType === "pkce" &&
      (([i, a, l] = await this._getCodeChallengeAndMethod()),
      (s = this._maybeAppendFlowIdToRedirect(s, l)));
    const c = [`provider=${encodeURIComponent(n)}`];
    if (
      (s && c.push(`redirect_to=${encodeURIComponent(s)}`),
      r != null && r.scopes && c.push(`scopes=${encodeURIComponent(r.scopes)}`),
      i != null && a != null)
    ) {
      const u = new URLSearchParams({
        code_challenge: `${encodeURIComponent(i)}`,
        code_challenge_method: `${encodeURIComponent(a)}`,
      });
      c.push(u.toString());
    }
    if (r != null && r.queryParams) {
      const u = new URLSearchParams(r.queryParams);
      c.push(u.toString());
    }
    return (
      r != null &&
        r.skipBrowserRedirect &&
        c.push(`skip_http_redirect=${r.skipBrowserRedirect}`),
      { url: `${e}?${c.join("&")}`, flowId: l }
    );
  }
  _maybeAppendFlowIdToRedirect(e, n) {
    return !e || !n || !this.experimental.appendPkceFlowIdToRedirects
      ? (e ?? void 0)
      : e_(e, n);
  }
  async _getCodeChallengeAndMethod(e = !1) {
    return t_(this.storage, this.storageKey, e, (n) =>
      this._debug(
        "#_getCodeChallengeAndMethod()",
        "evicted oldest pending PKCE verifier slot",
        n,
      ),
    );
  }
  async _unenroll(e) {
    try {
      return await this._useSession(async (n) => {
        var r;
        const { data: s, error: i } = n;
        return i
          ? this._returnResult({ data: null, error: i })
          : await G(this.fetch, "DELETE", `${this.url}/factors/${e.factorId}`, {
              headers: this.headers,
              jwt:
                (r = s == null ? void 0 : s.session) === null || r === void 0
                  ? void 0
                  : r.access_token,
            });
      });
    } catch (n) {
      if (W(n)) return this._returnResult({ data: null, error: n });
      throw n;
    }
  }
  async _enroll(e) {
    try {
      return await this._useSession(async (n) => {
        var r, s;
        const { data: i, error: a } = n;
        if (a) return this._returnResult({ data: null, error: a });
        const l = Object.assign(
            { friendly_name: e.friendlyName, factor_type: e.factorType },
            e.factorType === "phone"
              ? { phone: e.phone }
              : e.factorType === "totp"
                ? { issuer: e.issuer }
                : {},
          ),
          { data: c, error: u } = await G(
            this.fetch,
            "POST",
            `${this.url}/factors`,
            {
              body: l,
              headers: this.headers,
              jwt:
                (r = i == null ? void 0 : i.session) === null || r === void 0
                  ? void 0
                  : r.access_token,
            },
          );
        return u
          ? this._returnResult({ data: null, error: u })
          : (e.factorType === "totp" &&
              c.type === "totp" &&
              !((s = c == null ? void 0 : c.totp) === null || s === void 0) &&
              s.qr_code &&
              (c.totp.qr_code = `data:image/svg+xml;utf-8,${c.totp.qr_code}`),
            this._returnResult({ data: c, error: null }));
      });
    } catch (n) {
      if (W(n)) return this._returnResult({ data: null, error: n });
      throw n;
    }
  }
  async _verify(e) {
    const n = async () => {
      try {
        return await this._useSession(async (r) => {
          var s;
          const { data: i, error: a } = r;
          if (a) return this._returnResult({ data: null, error: a });
          const l = Object.assign(
              { challenge_id: e.challengeId },
              "webauthn" in e
                ? {
                    webauthn: Object.assign(Object.assign({}, e.webauthn), {
                      credential_response:
                        e.webauthn.type === "create"
                          ? qh(e.webauthn.credential_response)
                          : Kh(e.webauthn.credential_response),
                    }),
                  }
                : { code: e.code },
            ),
            { data: c, error: u } = await G(
              this.fetch,
              "POST",
              `${this.url}/factors/${e.factorId}/verify`,
              {
                body: l,
                headers: this.headers,
                jwt:
                  (s = i == null ? void 0 : i.session) === null || s === void 0
                    ? void 0
                    : s.access_token,
              },
            );
          return u
            ? this._returnResult({ data: null, error: u })
            : (await this._saveSession(
                Object.assign(
                  { expires_at: Math.round(Date.now() / 1e3) + c.expires_in },
                  c,
                ),
              ),
              await this._notifyAllSubscribers("MFA_CHALLENGE_VERIFIED", c),
              this._returnResult({ data: c, error: u }));
        });
      } catch (r) {
        if (W(r)) return this._returnResult({ data: null, error: r });
        throw r;
      }
    };
    return this.lock != null
      ? this._acquireLock(this.lockAcquireTimeout, n)
      : n();
  }
  async _challenge(e) {
    const n = async () => {
      try {
        return await this._useSession(async (r) => {
          var s;
          const { data: i, error: a } = r;
          if (a) return this._returnResult({ data: null, error: a });
          const l = await G(
            this.fetch,
            "POST",
            `${this.url}/factors/${e.factorId}/challenge`,
            {
              body: e,
              headers: this.headers,
              jwt:
                (s = i == null ? void 0 : i.session) === null || s === void 0
                  ? void 0
                  : s.access_token,
            },
          );
          if (l.error) return l;
          const { data: c } = l;
          if (c.type !== "webauthn") return { data: c, error: null };
          switch (c.webauthn.type) {
            case "create":
              return {
                data: Object.assign(Object.assign({}, c), {
                  webauthn: Object.assign(Object.assign({}, c.webauthn), {
                    credential_options: Object.assign(
                      Object.assign({}, c.webauthn.credential_options),
                      {
                        publicKey: Vh(c.webauthn.credential_options.publicKey),
                      },
                    ),
                  }),
                }),
                error: null,
              };
            case "request":
              return {
                data: Object.assign(Object.assign({}, c), {
                  webauthn: Object.assign(Object.assign({}, c.webauthn), {
                    credential_options: Object.assign(
                      Object.assign({}, c.webauthn.credential_options),
                      {
                        publicKey: Wh(c.webauthn.credential_options.publicKey),
                      },
                    ),
                  }),
                }),
                error: null,
              };
          }
        });
      } catch (r) {
        if (W(r)) return this._returnResult({ data: null, error: r });
        throw r;
      }
    };
    return this.lock != null
      ? this._acquireLock(this.lockAcquireTimeout, n)
      : n();
  }
  async _challengeAndVerify(e) {
    const { data: n, error: r } = await this._challenge({
      factorId: e.factorId,
    });
    return r
      ? this._returnResult({ data: null, error: r })
      : await this._verify({
          factorId: e.factorId,
          challengeId: n.id,
          code: e.code,
        });
  }
  async _listFactors() {
    var e;
    const {
      data: { user: n },
      error: r,
    } = await this.getUser();
    if (r) return { data: null, error: r };
    const s = { all: [], phone: [], totp: [], webauthn: [], recovery_code: [] };
    for (const i of (e = n == null ? void 0 : n.factors) !== null &&
    e !== void 0
      ? e
      : [])
      (s.all.push(i),
        i.status === "verified" &&
          i.factor_type in s &&
          Array.isArray(s[i.factor_type]) &&
          s[i.factor_type].push(i));
    return { data: s, error: null };
  }
  async _getAuthenticatorAssuranceLevel(e) {
    var n, r, s, i;
    if (e)
      try {
        const { payload: p } = Na(e);
        let v = null;
        p.aal && (v = p.aal);
        let x = v;
        const {
          data: { user: _ },
          error: m,
        } = await this.getUser(e);
        if (m) return this._returnResult({ data: null, error: m });
        ((r =
          (n = _ == null ? void 0 : _.factors) === null || n === void 0
            ? void 0
            : n.filter((E) => E.status === "verified")) !== null && r !== void 0
          ? r
          : []
        ).length > 0 && (x = "aal2");
        const y = p.amr || [];
        return {
          data: {
            currentLevel: v,
            nextLevel: x,
            currentAuthenticationMethods: y,
          },
          error: null,
        };
      } catch (p) {
        if (W(p)) return this._returnResult({ data: null, error: p });
        throw p;
      }
    const {
      data: { session: a },
      error: l,
    } = await this.getSession();
    if (l) return this._returnResult({ data: null, error: l });
    if (!a)
      return {
        data: {
          currentLevel: null,
          nextLevel: null,
          currentAuthenticationMethods: [],
        },
        error: null,
      };
    const { payload: c } = Na(a.access_token);
    let u = null;
    c.aal && (u = c.aal);
    let d = u;
    ((i =
      (s = a.user.factors) === null || s === void 0
        ? void 0
        : s.filter((p) => p.status === "verified")) !== null && i !== void 0
      ? i
      : []
    ).length > 0 && (d = "aal2");
    const h = c.amr || [];
    return {
      data: { currentLevel: u, nextLevel: d, currentAuthenticationMethods: h },
      error: null,
    };
  }
  async _getRecoveryCodesStatus() {
    ti(this.experimental);
    try {
      return await this._useSession(async (e) => {
        var n;
        const { data: r, error: s } = e;
        if (s) return this._returnResult({ data: null, error: s });
        const { data: i, error: a } = await G(
          this.fetch,
          "GET",
          `${this.url}/factors/recovery-codes`,
          {
            headers: this.headers,
            jwt:
              (n = r == null ? void 0 : r.session) === null || n === void 0
                ? void 0
                : n.access_token,
          },
        );
        return a
          ? this._returnResult({ data: null, error: a })
          : this._returnResult({ data: i, error: null });
      });
    } catch (e) {
      if (W(e)) return this._returnResult({ data: null, error: e });
      throw e;
    }
  }
  async _generateRecoveryCodes(e) {
    ti(this.experimental);
    try {
      return await this._useSession(async (n) => {
        var r;
        const { data: s, error: i } = n;
        if (i) return this._returnResult({ data: null, error: i });
        const { data: a, error: l } = await G(
          this.fetch,
          "POST",
          `${this.url}/factors/recovery-codes`,
          {
            body:
              e != null && e.friendlyName
                ? { friendly_name: e.friendlyName }
                : void 0,
            headers: this.headers,
            jwt:
              (r = s == null ? void 0 : s.session) === null || r === void 0
                ? void 0
                : r.access_token,
          },
        );
        return l
          ? this._returnResult({ data: null, error: l })
          : this._returnResult({ data: a, error: null });
      });
    } catch (n) {
      if (W(n)) return this._returnResult({ data: null, error: n });
      throw n;
    }
  }
  async _verifyRecoveryCode(e) {
    ti(this.experimental);
    const n = async () => {
      try {
        return await this._useSession(async (r) => {
          var s;
          const { data: i, error: a } = r;
          if (a) return this._returnResult({ data: null, error: a });
          const { data: l, error: c } = await G(
            this.fetch,
            "POST",
            `${this.url}/factors/recovery-codes/verify`,
            {
              body: { code: e.code },
              headers: this.headers,
              jwt:
                (s = i == null ? void 0 : i.session) === null || s === void 0
                  ? void 0
                  : s.access_token,
            },
          );
          if (c) return this._returnResult({ data: null, error: c });
          const u = Object.assign({ expires_at: T0(l.expires_in) }, l);
          return (
            await this._saveSession(u),
            await this._notifyAllSubscribers("MFA_CHALLENGE_VERIFIED", u),
            this._returnResult({ data: l, error: null })
          );
        });
      } catch (r) {
        if (W(r)) return this._returnResult({ data: null, error: r });
        throw r;
      }
    };
    return this.lock != null
      ? this._acquireLock(this.lockAcquireTimeout, n)
      : n();
  }
  async _regenerateRecoveryCodes() {
    ti(this.experimental);
    try {
      return await this._useSession(async (e) => {
        var n;
        const { data: r, error: s } = e;
        if (s) return this._returnResult({ data: null, error: s });
        const { data: i, error: a } = await G(
          this.fetch,
          "POST",
          `${this.url}/factors/recovery-codes/regenerate`,
          {
            headers: this.headers,
            jwt:
              (n = r == null ? void 0 : r.session) === null || n === void 0
                ? void 0
                : n.access_token,
          },
        );
        return a
          ? this._returnResult({ data: null, error: a })
          : this._returnResult({ data: i, error: null });
      });
    } catch (e) {
      if (W(e)) return this._returnResult({ data: null, error: e });
      throw e;
    }
  }
  async _unenrollRecoveryCodes() {
    ti(this.experimental);
    try {
      return await this._useSession(async (e) => {
        var n;
        const { data: r, error: s } = e;
        if (s) return this._returnResult({ data: null, error: s });
        const { data: i, error: a } = await G(
          this.fetch,
          "DELETE",
          `${this.url}/factors/recovery-codes`,
          {
            headers: this.headers,
            jwt:
              (n = r == null ? void 0 : r.session) === null || n === void 0
                ? void 0
                : n.access_token,
          },
        );
        return a
          ? this._returnResult({ data: null, error: a })
          : this._returnResult({ data: i, error: null });
      });
    } catch (e) {
      if (W(e)) return this._returnResult({ data: null, error: e });
      throw e;
    }
  }
  async _getAuthorizationDetails(e) {
    try {
      return await this._useSession(async (n) => {
        const {
          data: { session: r },
          error: s,
        } = n;
        return s
          ? this._returnResult({ data: null, error: s })
          : r
            ? await G(
                this.fetch,
                "GET",
                `${this.url}/oauth/authorizations/${e}`,
                {
                  headers: this.headers,
                  jwt: r.access_token,
                  xform: (i) => ({ data: i, error: null }),
                },
              )
            : this._returnResult({ data: null, error: new ht() });
      });
    } catch (n) {
      if (W(n)) return this._returnResult({ data: null, error: n });
      throw n;
    }
  }
  async _approveAuthorization(e, n) {
    try {
      return await this._useSession(async (r) => {
        const {
          data: { session: s },
          error: i,
        } = r;
        if (i) return this._returnResult({ data: null, error: i });
        if (!s) return this._returnResult({ data: null, error: new ht() });
        const a = await G(
          this.fetch,
          "POST",
          `${this.url}/oauth/authorizations/${e}/consent`,
          {
            headers: this.headers,
            jwt: s.access_token,
            body: { action: "approve" },
            xform: (l) => ({ data: l, error: null }),
          },
        );
        return (
          a.data &&
            a.data.redirect_url &&
            vt() &&
            !(n != null && n.skipBrowserRedirect) &&
            window.location.assign(a.data.redirect_url),
          a
        );
      });
    } catch (r) {
      if (W(r)) return this._returnResult({ data: null, error: r });
      throw r;
    }
  }
  async _denyAuthorization(e, n) {
    try {
      return await this._useSession(async (r) => {
        const {
          data: { session: s },
          error: i,
        } = r;
        if (i) return this._returnResult({ data: null, error: i });
        if (!s) return this._returnResult({ data: null, error: new ht() });
        const a = await G(
          this.fetch,
          "POST",
          `${this.url}/oauth/authorizations/${e}/consent`,
          {
            headers: this.headers,
            jwt: s.access_token,
            body: { action: "deny" },
            xform: (l) => ({ data: l, error: null }),
          },
        );
        return (
          a.data &&
            a.data.redirect_url &&
            vt() &&
            !(n != null && n.skipBrowserRedirect) &&
            window.location.assign(a.data.redirect_url),
          a
        );
      });
    } catch (r) {
      if (W(r)) return this._returnResult({ data: null, error: r });
      throw r;
    }
  }
  async _listOAuthGrants() {
    try {
      return await this._useSession(async (e) => {
        const {
          data: { session: n },
          error: r,
        } = e;
        return r
          ? this._returnResult({ data: null, error: r })
          : n
            ? await G(this.fetch, "GET", `${this.url}/user/oauth/grants`, {
                headers: this.headers,
                jwt: n.access_token,
                xform: (s) => ({ data: s, error: null }),
              })
            : this._returnResult({ data: null, error: new ht() });
      });
    } catch (e) {
      if (W(e)) return this._returnResult({ data: null, error: e });
      throw e;
    }
  }
  async _revokeOAuthGrant(e) {
    try {
      return await this._useSession(async (n) => {
        const {
          data: { session: r },
          error: s,
        } = n;
        return s
          ? this._returnResult({ data: null, error: s })
          : r
            ? (await G(this.fetch, "DELETE", `${this.url}/user/oauth/grants`, {
                headers: this.headers,
                jwt: r.access_token,
                query: { client_id: e.clientId },
                noResolveJson: !0,
              }),
              { data: {}, error: null })
            : this._returnResult({ data: null, error: new ht() });
      });
    } catch (n) {
      if (W(n)) return this._returnResult({ data: null, error: n });
      throw n;
    }
  }
  async fetchJwk(e, n = { keys: [] }) {
    let r = n.keys.find((l) => l.kid === e);
    if (r) return r;
    const s = Date.now();
    if (
      ((r = this.jwks.keys.find((l) => l.kid === e)),
      r && this.jwks_cached_at + Ox > s)
    )
      return r;
    const { data: i, error: a } = await G(
      this.fetch,
      "GET",
      `${this.url}/.well-known/jwks.json`,
      { headers: this.headers },
    );
    if (a) throw a;
    return !i.keys ||
      i.keys.length === 0 ||
      ((this.jwks = i),
      (this.jwks_cached_at = s),
      (r = i.keys.find((l) => l.kid === e)),
      !r)
      ? null
      : r;
  }
  async getClaims(e, n = {}) {
    try {
      let r = e;
      if (!r) {
        const { data: p, error: v } = await this.getSession();
        if (v || !p.session)
          return this._returnResult({ data: null, error: v });
        r = p.session.access_token;
      }
      const {
        header: s,
        payload: i,
        signature: a,
        raw: { header: l, payload: c },
      } = Na(r);
      if (!(n != null && n.allowExpired))
        try {
          s_(i.exp);
        } catch (p) {
          throw new No(
            p instanceof Error ? p.message : "JWT validation failed",
          );
        }
      const u =
        !s.alg ||
        s.alg.startsWith("HS") ||
        !s.kid ||
        !("crypto" in globalThis && "subtle" in globalThis.crypto)
          ? null
          : await this.fetchJwk(
              s.kid,
              n != null && n.keys
                ? { keys: n.keys }
                : n == null
                  ? void 0
                  : n.jwks,
            );
      if (!u) {
        const { error: p } = await this.getUser(r);
        if (p) throw p;
        return { data: { claims: i, header: s, signature: a }, error: null };
      }
      const d = i_(s.alg),
        f = await crypto.subtle.importKey("jwk", u, d, !0, ["verify"]);
      if (!(await crypto.subtle.verify(d, f, a, zx(`${l}.${c}`))))
        throw new No("Invalid JWT signature");
      return { data: { claims: i, header: s, signature: a }, error: null };
    } catch (r) {
      if (W(r)) return this._returnResult({ data: null, error: r });
      throw r;
    }
  }
  async signInWithPasskey(e) {
    var n, r, s, i;
    try {
      if (!Ao())
        return this._returnResult({
          data: null,
          error: new mn("Browser does not support WebAuthn", null),
        });
      const { data: a, error: l } = await this._startPasskeyAuthentication({
        options: {
          captchaToken:
            (n = e == null ? void 0 : e.options) === null || n === void 0
              ? void 0
              : n.captchaToken,
        },
      });
      if (l || !a) return this._returnResult({ data: null, error: l });
      const c = Wh(a.options),
        u =
          (s =
            (r = e == null ? void 0 : e.options) === null || r === void 0
              ? void 0
              : r.signal) !== null && s !== void 0
            ? s
            : Yc.createNewAbortSignal(),
        { data: d, error: f } = await I0({
          publicKey: c,
          signal: u,
          mediation:
            (i = e == null ? void 0 : e.options) === null || i === void 0
              ? void 0
              : i.mediation,
        });
      if (f || !d)
        return this._returnResult({
          data: null,
          error: f ?? new mn("WebAuthn ceremony failed", null),
        });
      const h = Kh(d);
      return this._verifyPasskeyAuthentication({
        challengeId: a.challenge_id,
        credential: h,
      });
    } catch (a) {
      if (W(a)) return this._returnResult({ data: null, error: a });
      throw a;
    }
  }
  async registerPasskey(e) {
    var n, r;
    try {
      if (!Ao())
        return this._returnResult({
          data: null,
          error: new mn("Browser does not support WebAuthn", null),
        });
      const { data: s, error: i } = await this._startPasskeyRegistration();
      if (i || !s) return this._returnResult({ data: null, error: i });
      const a = Vh(s.options),
        l =
          (r =
            (n = e == null ? void 0 : e.options) === null || n === void 0
              ? void 0
              : n.signal) !== null && r !== void 0
            ? r
            : Yc.createNewAbortSignal(),
        { data: c, error: u } = await O0({ publicKey: a, signal: l });
      if (u || !c)
        return this._returnResult({
          data: null,
          error: u ?? new mn("WebAuthn ceremony failed", null),
        });
      const d = qh(c);
      return this._verifyPasskeyRegistration({
        challengeId: s.challenge_id,
        credential: d,
      });
    } catch (s) {
      if (W(s)) return this._returnResult({ data: null, error: s });
      throw s;
    }
  }
  async _startPasskeyRegistration() {
    try {
      return await this._useSession(async (e) => {
        const {
          data: { session: n },
          error: r,
        } = e;
        if (r) return this._returnResult({ data: null, error: r });
        if (!n) return this._returnResult({ data: null, error: new ht() });
        const { data: s, error: i } = await G(
          this.fetch,
          "POST",
          `${this.url}/passkeys/registration/options`,
          { headers: this.headers, jwt: n.access_token, body: {} },
        );
        return i
          ? this._returnResult({ data: null, error: i })
          : this._returnResult({ data: s, error: null });
      });
    } catch (e) {
      if (W(e)) return this._returnResult({ data: null, error: e });
      throw e;
    }
  }
  async _verifyPasskeyRegistration(e) {
    try {
      return await this._useSession(async (n) => {
        const {
          data: { session: r },
          error: s,
        } = n;
        if (s) return this._returnResult({ data: null, error: s });
        if (!r) return this._returnResult({ data: null, error: new ht() });
        const { data: i, error: a } = await G(
          this.fetch,
          "POST",
          `${this.url}/passkeys/registration/verify`,
          {
            headers: this.headers,
            jwt: r.access_token,
            body: { challenge_id: e.challengeId, credential: e.credential },
          },
        );
        return a
          ? this._returnResult({ data: null, error: a })
          : this._returnResult({ data: i, error: null });
      });
    } catch (n) {
      if (W(n)) return this._returnResult({ data: null, error: n });
      throw n;
    }
  }
  async _startPasskeyAuthentication(e) {
    var n;
    try {
      const { data: r, error: s } = await G(
        this.fetch,
        "POST",
        `${this.url}/passkeys/authentication/options`,
        {
          headers: this.headers,
          body: {
            gotrue_meta_security: {
              captcha_token:
                (n = e == null ? void 0 : e.options) === null || n === void 0
                  ? void 0
                  : n.captchaToken,
            },
          },
        },
      );
      return s
        ? this._returnResult({ data: null, error: s })
        : this._returnResult({ data: r, error: null });
    } catch (r) {
      if (W(r)) return this._returnResult({ data: null, error: r });
      throw r;
    }
  }
  async _verifyPasskeyAuthentication(e) {
    try {
      const { data: n, error: r } = await G(
        this.fetch,
        "POST",
        `${this.url}/passkeys/authentication/verify`,
        {
          headers: this.headers,
          body: { challenge_id: e.challengeId, credential: e.credential },
          xform: Qt,
        },
      );
      return r
        ? this._returnResult({ data: null, error: r })
        : (n.session &&
            (await this._saveSession(n.session),
            await this._notifyAllSubscribers("SIGNED_IN", n.session)),
          this._returnResult({ data: n, error: null }));
    } catch (n) {
      if (W(n)) return this._returnResult({ data: null, error: n });
      throw n;
    }
  }
  async _listPasskeys() {
    try {
      return await this._useSession(async (e) => {
        const {
          data: { session: n },
          error: r,
        } = e;
        if (r) return this._returnResult({ data: null, error: r });
        if (!n) return this._returnResult({ data: null, error: new ht() });
        const { data: s, error: i } = await G(
          this.fetch,
          "GET",
          `${this.url}/passkeys`,
          {
            headers: this.headers,
            jwt: n.access_token,
            xform: (a) => ({ data: a, error: null }),
          },
        );
        return i
          ? this._returnResult({ data: null, error: i })
          : this._returnResult({ data: s, error: null });
      });
    } catch (e) {
      if (W(e)) return this._returnResult({ data: null, error: e });
      throw e;
    }
  }
  async _updatePasskey(e) {
    try {
      return await this._useSession(async (n) => {
        const {
          data: { session: r },
          error: s,
        } = n;
        if (s) return this._returnResult({ data: null, error: s });
        if (!r) return this._returnResult({ data: null, error: new ht() });
        const { data: i, error: a } = await G(
          this.fetch,
          "PATCH",
          `${this.url}/passkeys/${e.passkeyId}`,
          {
            headers: this.headers,
            jwt: r.access_token,
            body: { friendly_name: e.friendlyName },
          },
        );
        return a
          ? this._returnResult({ data: null, error: a })
          : this._returnResult({ data: i, error: null });
      });
    } catch (n) {
      if (W(n)) return this._returnResult({ data: null, error: n });
      throw n;
    }
  }
  async _deletePasskey(e) {
    try {
      return await this._useSession(async (n) => {
        const {
          data: { session: r },
          error: s,
        } = n;
        if (s) return this._returnResult({ data: null, error: s });
        if (!r) return this._returnResult({ data: null, error: new ht() });
        const { error: i } = await G(
          this.fetch,
          "DELETE",
          `${this.url}/passkeys/${e.passkeyId}`,
          { headers: this.headers, jwt: r.access_token, noResolveJson: !0 },
        );
        return i
          ? this._returnResult({ data: null, error: i })
          : this._returnResult({ data: null, error: null });
      });
    } catch (n) {
      if (W(n)) return this._returnResult({ data: null, error: n });
      throw n;
    }
  }
}
Wi.nextInstanceID = {};
const N_ = Wi,
  C_ = "2.118.0";
let di = "",
  Oo;
if (typeof Deno < "u") {
  var Bl;
  ((di = "deno"),
    (Oo = (Bl = Deno.version) === null || Bl === void 0 ? void 0 : Bl.deno));
} else if (typeof document < "u") di = "web";
else if (typeof navigator < "u" && navigator.product === "ReactNative")
  di = "react-native";
else {
  var zl;
  di = "node";
  const t = globalThis.process;
  Oo =
    t == null || (zl = t.version) === null || zl === void 0
      ? void 0
      : zl.replace(/^v/, "");
}
const L0 = [`runtime=${di}`];
Oo && L0.push(`runtime-version=${Oo}`);
const R_ = { "X-Client-Info": `supabase-js/${C_}; ${L0.join("; ")}` },
  A_ = { headers: R_ },
  P_ = { schema: "public" },
  O_ = {
    autoRefreshToken: !0,
    persistSession: !0,
    detectSessionInUrl: !0,
    flowType: "implicit",
  },
  I_ = {},
  L_ = { enabled: !1, respectSamplingDecision: !0 };
function M_(t) {
  if (!t || typeof t != "string") return null;
  const e = t.split("-");
  if (e.length !== 4) return null;
  const [n, r, s, i] = e;
  if (n.length !== 2 || r.length !== 32 || s.length !== 16 || i.length !== 2)
    return null;
  const a = /^[0-9a-f]+$/i;
  return !a.test(n) ||
    !a.test(r) ||
    !a.test(s) ||
    !a.test(i) ||
    r === "00000000000000000000000000000000" ||
    s === "0000000000000000"
    ? null
    : {
        version: n,
        traceId: r,
        parentId: s,
        traceFlags: i,
        isSampled: (parseInt(i, 16) & 1) === 1,
      };
}
function $_(t, e) {
  if (!t || !e || e.length === 0) return !1;
  let n;
  if (t instanceof URL) n = t;
  else
    try {
      n = new URL(t);
    } catch {
      return !1;
    }
  for (const r of e)
    try {
      if (typeof r == "string") {
        if (D_(n.hostname, r)) return !0;
      } else if (r instanceof RegExp) {
        if (r.test(n.hostname)) return !0;
      } else if (typeof r == "function" && r(n)) return !0;
    } catch {
      continue;
    }
  return !1;
}
function D_(t, e) {
  if (e === t) return !0;
  if (e.startsWith("*.")) {
    const n = e.slice(2);
    if (t.endsWith(n) && (t === n || t.endsWith("." + n))) return !0;
  }
  return !1;
}
function U_(t) {
  const e = [];
  try {
    const n = new URL(t);
    e.push(n.hostname);
  } catch {}
  return (
    e.push("*.supabase.co", "*.supabase.in"),
    e.push("localhost", "127.0.0.1", "[::1]"),
    e
  );
}
function qi(t) {
  "@babel/helpers - typeof";
  return (
    (qi =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              typeof Symbol == "function" &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          }),
    qi(t)
  );
}
function B_(t, e) {
  if (qi(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if (qi(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function z_(t) {
  var e = B_(t, "string");
  return qi(e) == "symbol" ? e : e + "";
}
function F_(t, e, n) {
  return (
    (e = z_(e)) in t
      ? Object.defineProperty(t, e, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[e] = n),
    t
  );
}
function Jh(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    (e &&
      (r = r.filter(function (s) {
        return Object.getOwnPropertyDescriptor(t, s).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function rt(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? Jh(Object(n), !0).forEach(function (r) {
          F_(t, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
        : Jh(Object(n)).forEach(function (r) {
            Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
          });
  }
  return t;
}
const H_ = (t) => (t ? (...e) => t(...e) : (...e) => fetch(...e)),
  V_ = () => Headers,
  M0 = (t) => t.startsWith("sb_publishable_") || t.startsWith("sb_secret_"),
  W_ = "sb_temp_",
  Yh = new Set(),
  q_ = (t) => {
    var e, n;
    if (!t.startsWith("sb_") || M0(t) || t.startsWith(W_)) return;
    const r =
      (e =
        (n = t.match(/^sb_[a-zA-Z0-9]+_/)) === null || n === void 0
          ? void 0
          : n[0]) !== null && e !== void 0
        ? e
        : "unknown";
    Yh.has(r) ||
      (Yh.add(r),
      console.warn(
        "@supabase/supabase-js: Unrecognized Supabase API key format. The client will proceed and send this key as-is; if you see authentication errors you may need to upgrade @supabase/supabase-js to a version that recognizes this key type.",
      ));
  },
  Xh = (t, e, n, r, s, i) => {
    const a = H_(r),
      l = V_(),
      c = (s == null ? void 0 : s.enabled) === !0,
      u = (s == null ? void 0 : s.respectSamplingDecision) !== !1,
      d = c ? U_(e) : null,
      f = !(i != null && i.omitApiKeyAsBearer && M0(t));
    return async (h, p) => {
      const v = await n();
      let x = new l(p == null ? void 0 : p.headers);
      if ((x.has("apikey") || x.set("apikey", t), !x.has("Authorization"))) {
        const _ = v ?? (f ? t : null);
        _ && x.set("Authorization", `Bearer ${_}`);
      }
      if (d) {
        const _ = K_(h, d, u);
        _ &&
          (_.traceparent &&
            !x.has("traceparent") &&
            x.set("traceparent", _.traceparent),
          _.tracestate &&
            !x.has("tracestate") &&
            x.set("tracestate", _.tracestate),
          _.baggage && !x.has("baggage") && x.set("baggage", _.baggage));
      }
      return a(h, rt(rt({}, p), {}, { headers: x }));
    };
  };
let Zh = !1,
  Qh = !1;
function K_(t, e, n) {
  const r = Wy();
  if (!r)
    return (
      Zh ||
        ((Zh = !0),
        console.warn(
          "@supabase/supabase-js: tracePropagation is enabled but the tracing runtime is not loaded, so trace headers will not be attached. Add `import '@supabase/supabase-js/tracing'` at your application entry point (requires the OpenTelemetry API package to be installed). The CDN/UMD build does not support trace propagation.",
        )),
      null
    );
  if (!$_(typeof t == "string" || t instanceof URL ? t : t.url, e)) return null;
  const s = r();
  if (!s || !s.traceparent) {
    var i;
    if (
      !(s == null || (i = s.carrierKeys) === null || i === void 0) &&
      i.length &&
      !Qh
    ) {
      Qh = !0;
      const a = s.carrierKeys.includes("sentry-trace")
        ? " Sentry detected: set `propagateTraceparent: true` in Sentry.init() to emit it."
        : " Configure your tracing SDK to emit W3C trace context on outgoing requests.";
      console.warn(
        `@supabase/supabase-js: tracePropagation is enabled and a tracing SDK is active, but its propagator wrote [${s.carrierKeys.join(", ")}] and no W3C traceparent header, so trace headers will not be attached.` +
          a,
      );
    }
    return null;
  }
  if (n) {
    const a = M_(s.traceparent);
    if (a && !a.isSampled) return { traceparent: s.traceparent };
  }
  return s;
}
function ef(t) {
  return typeof t == "boolean" ? { enabled: t } : t;
}
function G_(t) {
  return t.endsWith("/") ? t : t + "/";
}
let tf = !1;
function J_(t) {
  tf ||
    typeof t != "object" ||
    t === null ||
    !("schema" in t) ||
    t.schema === void 0 ||
    ((tf = !0),
    console.warn(
      `@supabase/supabase-js: The "schema" option must be nested under "db", e.g. createClient(url, key, { db: { schema: 'myschema' } }). A top-level "schema" is ignored and queries go to the default schema.`,
    ));
}
function Y_(t, e) {
  var n, r, s, i, a, l;
  const { db: c, auth: u, realtime: d, global: f } = t,
    { db: h, auth: p, realtime: v, global: x } = e,
    _ = ef(t.tracePropagation),
    m = ef(e.tracePropagation),
    g = {
      db: rt(rt({}, h), c),
      auth: rt(rt({}, p), u),
      realtime: rt(rt({}, v), d),
      storage: {},
      global: rt(
        rt(rt({}, x), f),
        {},
        {
          headers: rt(
            rt(
              {},
              (n = x == null ? void 0 : x.headers) !== null && n !== void 0
                ? n
                : {},
            ),
            (r = f == null ? void 0 : f.headers) !== null && r !== void 0
              ? r
              : {},
          ),
        },
      ),
      tracePropagation: {
        enabled:
          (s =
            (i = _ == null ? void 0 : _.enabled) !== null && i !== void 0
              ? i
              : m == null
                ? void 0
                : m.enabled) !== null && s !== void 0
            ? s
            : !1,
        respectSamplingDecision:
          (a =
            (l = _ == null ? void 0 : _.respectSamplingDecision) !== null &&
            l !== void 0
              ? l
              : m == null
                ? void 0
                : m.respectSamplingDecision) !== null && a !== void 0
            ? a
            : !0,
      },
      accessToken: async () => "",
    };
  return (
    t.accessToken ? (g.accessToken = t.accessToken) : delete g.accessToken,
    g
  );
}
function X_(t) {
  const e = t == null ? void 0 : t.trim();
  if (!e) throw new Error("supabaseUrl is required.");
  if (!e.match(/^https?:\/\//i))
    throw new Error("Invalid supabaseUrl: Must be a valid HTTP or HTTPS URL.");
  try {
    return new URL(G_(e));
  } catch {
    throw Error("Invalid supabaseUrl: Provided URL is malformed.");
  }
}
var Z_ = class extends N_ {
    constructor(t) {
      super(t);
    }
  },
  Q_ = class {
    constructor(t, e, n) {
      var r, s;
      ((this.supabaseUrl = t), (this.supabaseKey = e));
      const i = X_(t);
      if (!e) throw new Error("supabaseKey is required.");
      (q_(e),
        J_(n),
        (this.realtimeUrl = new URL("realtime/v1", i)),
        (this.realtimeUrl.protocol = this.realtimeUrl.protocol.replace(
          "http",
          "ws",
        )),
        (this.authUrl = new URL("auth/v1", i)),
        (this.storageUrl = new URL("storage/v1", i)),
        (this.functionsUrl = new URL("functions/v1", i)));
      const a = `sb-${i.hostname.split(".")[0]}-auth-token`,
        l = {
          db: P_,
          realtime: I_,
          auth: rt(rt({}, O_), {}, { storageKey: a }),
          global: A_,
          tracePropagation: L_,
        },
        c = Y_(n ?? {}, l);
      if (
        ((this.settings = c),
        (this.storageKey =
          (r = c.auth.storageKey) !== null && r !== void 0 ? r : ""),
        (this.headers =
          (s = c.global.headers) !== null && s !== void 0 ? s : {}),
        c.accessToken)
      )
        ((this.accessToken = c.accessToken),
          (this.auth = new Proxy(
            {},
            {
              get: (d, f) => {
                throw new Error(
                  `@supabase/supabase-js: Supabase Client is configured with the accessToken option, accessing supabase.auth.${String(f)} is not possible`,
                );
              },
            },
          )));
      else {
        var u;
        this.auth = this._initSupabaseAuthClient(
          (u = c.auth) !== null && u !== void 0 ? u : {},
          this.headers,
          c.global.fetch,
        );
      }
      ((this.fetch = Xh(
        e,
        t,
        this._getSessionToken.bind(this),
        c.global.fetch,
        c.tracePropagation,
      )),
        (this.functionsFetch = Xh(
          e,
          t,
          this._getSessionToken.bind(this),
          c.global.fetch,
          c.tracePropagation,
          { omitApiKeyAsBearer: !0 },
        )),
        (this.realtime = this._initRealtimeClient(
          rt(
            {
              headers: this.headers,
              accessToken: this._getAccessToken.bind(this),
              fetch: this.fetch,
            },
            c.realtime,
          ),
        )),
        this.accessToken &&
          Promise.resolve(this.accessToken())
            .then((d) => this.realtime.setAuth(d))
            .catch((d) =>
              console.warn("Failed to set initial Realtime auth token:", d),
            ),
        (this.rest = new iw(new URL("rest/v1", i).href, {
          headers: this.headers,
          schema: c.db.schema,
          fetch: this.fetch,
          timeout: c.db.timeout,
          urlLengthLimit: c.db.urlLengthLimit,
          retry: c.db.retry,
        })),
        (this.storage = new jx(
          this.storageUrl.href,
          this.headers,
          this.fetch,
          n == null ? void 0 : n.storage,
        )),
        c.accessToken || this._listenForAuthEvents());
    }
    get functions() {
      return new Jy(this.functionsUrl.href, {
        headers: this.headers,
        customFetch: this.functionsFetch,
      });
    }
    from(t) {
      return this.rest.from(t);
    }
    schema(t) {
      return this.rest.schema(t);
    }
    getOpenApiSpec() {
      return this.rest.getOpenApiSpec();
    }
    rpc(t, e = {}, n = { head: !1, get: !1, count: void 0 }) {
      return this.rest.rpc(t, e, n);
    }
    channel(t, e = { config: {} }) {
      return this.realtime.channel(t, e);
    }
    getChannels() {
      return this.realtime.getChannels();
    }
    removeChannel(t) {
      return this.realtime.removeChannel(t);
    }
    removeAllChannels() {
      return this.realtime.removeAllChannels();
    }
    async _getSessionToken() {
      var t = this,
        e,
        n;
      if (t.accessToken) return await t.accessToken();
      const { data: r } = await t.auth.getSession();
      return (e =
        (n = r.session) === null || n === void 0 ? void 0 : n.access_token) !==
        null && e !== void 0
        ? e
        : null;
    }
    async _getAccessToken() {
      var t = this,
        e;
      return (e = await t._getSessionToken()) !== null && e !== void 0
        ? e
        : t.supabaseKey;
    }
    _initSupabaseAuthClient(
      {
        autoRefreshToken: t,
        persistSession: e,
        detectSessionInUrl: n,
        storage: r,
        userStorage: s,
        storageKey: i,
        flowType: a,
        lock: l,
        debug: c,
        throwOnError: u,
        experimental: d,
        lockAcquireTimeout: f,
        skipAutoInitialize: h,
      },
      p,
      v,
    ) {
      const x = {
        Authorization: `Bearer ${this.supabaseKey}`,
        apikey: `${this.supabaseKey}`,
      };
      return new Z_({
        url: this.authUrl.href,
        headers: rt(rt({}, x), p),
        storageKey: i,
        autoRefreshToken: t,
        persistSession: e,
        detectSessionInUrl: n,
        storage: r,
        userStorage: s,
        flowType: a,
        lock: l,
        debug: c,
        throwOnError: u,
        experimental: d,
        fetch: v,
        lockAcquireTimeout: f,
        skipAutoInitialize: h,
        hasCustomAuthorizationHeader: Object.keys(this.headers).some(
          (_) => _.toLowerCase() === "authorization",
        ),
      });
    }
    _initRealtimeClient(t) {
      return new Yw(
        this.realtimeUrl.href,
        rt(
          rt({}, t),
          {},
          {
            params: rt(
              rt({}, { apikey: this.supabaseKey }),
              t == null ? void 0 : t.params,
            ),
          },
        ),
      );
    }
    _listenForAuthEvents() {
      return this.auth.onAuthStateChange((t, e) => {
        this._handleTokenChanged(
          t,
          "CLIENT",
          e == null ? void 0 : e.access_token,
        );
      });
    }
    _handleTokenChanged(t, e, n) {
      (t === "TOKEN_REFRESHED" ||
        t === "SIGNED_IN" ||
        t === "INITIAL_SESSION") &&
      this.changedAccessToken !== n
        ? ((this.changedAccessToken = n), this.realtime.setAuth(n))
        : t === "SIGNED_OUT" &&
          (this.realtime.setAuth(),
          e == "STORAGE" && this.auth.signOut(),
          (this.changedAccessToken = void 0));
    }
  };
const e1 = (t, e, n) => new Q_(t, e, n);
function t1() {
  if (typeof window < "u" || globalThis.Deno !== void 0) return !1;
  const t = globalThis.process;
  if (!t) return !1;
  const e = t.version;
  if (e == null) return !1;
  const n = e.match(/^v(\d+)\./);
  return n ? parseInt(n[1], 10) <= 20 : !1;
}
t1() &&
  console.warn(
    "⚠️  Node.js 20 and below are deprecated and will no longer be supported in future versions of @supabase/supabase-js. Please upgrade to Node.js 22 or later. For more information, visit: https://github.com/orgs/supabase/discussions/45715",
  );
const $0 = "couple-cloud";
let hi = null,
  as;
function Hs() {
  if (as !== void 0) return as;
  try {
    as = JSON.parse(localStorage.getItem($0) || "null");
  } catch {
    as = null;
  }
  return as;
}
function n1(t) {
  ((as = t), (hi = null));
  try {
    localStorage.setItem($0, JSON.stringify(t));
  } catch {}
}
function ea() {
  const t = Hs();
  return !!(t && t.enabled && t.url && t.anon && t.coupleId);
}
function Kr() {
  if (!ea()) return null;
  if (hi) return hi;
  const t = Hs();
  return (
    (hi = e1(t.url, t.anon, {
      realtime: { params: { eventsPerSecond: 5 } },
      auth: { persistSession: !1, autoRefreshToken: !1 },
    })),
    hi
  );
}
function wr() {
  var t;
  return ((t = Hs()) == null ? void 0 : t.coupleId) || "default-couple";
}
function D0() {
  var t;
  return ((t = Hs()) == null ? void 0 : t.tmdbProxy) || "";
}
function U0() {
  var t;
  return ((t = Hs()) == null ? void 0 : t.tmdbKey) || "";
}
const rl = "couple_rows",
  Ki = "couple-photos";
async function Io(kind) {
    const client=Kr(); if(!client)return [];
    const {data,error}=await client.from(rl).select('id,payload,updated_at').eq('couple_id',wr()).eq('kind',kind);
    if(error)throw error;
    return [...new Map((data||[]).sort((a,b)=>String(a.updated_at).localeCompare(String(b.updated_at))).map(row=>[row.payload.id,{...row.payload}])).values()];
  }
async function $r(t, e) {
  const n = Kr();
  if (!n) return;
  const { error: r } = await n
    .from(rl)
    .upsert(
      {
        id: wr()+":"+t+":"+e.id,
        couple_id: wr(),
        kind: t,
        payload: e,
        updated_at: new Date().toISOString(),
      },
      { onConflict: "id" },
    );
  if(r)throw r;
}
async function B0(t, e) {
  const n = Kr();
  if (!n) return;
  const { error: r } = await n
    .from(rl)
    .delete()
    .in("id", [e,wr()+":"+t+":"+e])
    .eq("couple_id", wr()).eq("kind",t);
  if(r)throw r;
}
function z0(t, e) {
  const n = Kr();
  if (!n) return () => {};
  const r = n
    .channel(`couple-${wr()}-${t}`)
    .on(
      "postgres_changes",
      {
        event: "*",
        schema: "public",
        table: rl,
        filter: `couple_id=eq.${wr()}`,
      },
      () => e(),
    )
    .subscribe();
  return () => {
    n.removeChannel(r);
  };
}
function Xc(t) {
  return `${wr()}/${t}`;
}
async function nf() {
  const t = Kr();
  if (!t) return [];
  const { data: e, error: n } = await t.storage
    .from(Ki)
    .list(wr(), { limit:1000, sortBy: { column: "created_at", order: "desc" } });
  return n
    ? (()=>{throw n})()
    : (e || []).map((r) => {
        const s = `${wr()}/${r.name}`,
          { data: i } = t.storage.from(Ki).getPublicUrl(s);
        return {
          id: r.name,
          name: r.name,
          url: i.publicUrl,
          createdAt: new Date(r.created_at || Date.now()).getTime(),
        };
      });
}
async function r1(t, e, n) {
  const r = Kr();
  if (!r) return null;
  const { error: s } = await r.storage
    .from(Ki)
    .upload(Xc(t), e, { contentType: n, upsert: !0, cacheControl: "3600" });
  if(s)throw s;
  const { data: i } = r.storage.from(Ki).getPublicUrl(Xc(t));
  return (i == null ? void 0 : i.publicUrl) || null;
}
async function rf(t) {
  const e = Kr();
  if (!e) return;
  const { error: n } = await e.storage.from(Ki).remove([Xc(t)]);
  if(n)throw n;
}
const F0 = "couple-todo-v2",
  s1 = [
    { id: "s1", text: "一起看一部电影 🍿", done: !1, cat: "date" },
    { id: "s2", text: "买周末的早餐食材", done: !0, cat: "shop" },
    { id: "s3", text: "给阳台的花浇水 🌿", done: !1, cat: "home" },
  ],
  i1 = s1;
function a1() {
  try {
    const t = localStorage.getItem(F0);
    if (t) return JSON.parse(t);
  } catch {}
  return i1;
}
function o1() {
  return typeof crypto < "u" && crypto.randomUUID
    ? crypto.randomUUID()
    : String(Date.now() + Math.random());
}
function l1(){
    const {items,mutate}=useCollection('todos',F0,i1);
    return {todos:items,addTodo:(text,cat)=>{const item={id:o1(),text,cat,done:false,createdAt:Date.now()};mutate(item.id,item);},toggle:id=>{const item=items.find(v=>v.id===id);if(item)mutate(id,{...item,done:!item.done});},remove:id=>mutate(id,null),edit:(id,text)=>{const item=items.find(v=>v.id===id);if(item&&text.trim())mutate(id,{...item,text:text.trim()});}};
  }
function c1({ pct: t = 0 }) {
  const n = 2 * Math.PI * 26,
    r = n * (1 - t / 100);
  return o.jsxs("div", {
    className: "ring",
    children: [
      o.jsxs("svg", {
        width: "64",
        height: "64",
        viewBox: "0 0 64 64",
        children: [
          o.jsx("defs", {
            children: o.jsxs("linearGradient", {
              id: "rg",
              x1: "0",
              y1: "0",
              x2: "1",
              y2: "1",
              children: [
                o.jsx("stop", { offset: "0", stopColor: "var(--sky)" }),
                o.jsx("stop", { offset: "1", stopColor: "var(--lav)" }),
              ],
            }),
          }),
          o.jsx("circle", {
            cx: "32",
            cy: "32",
            r: 26,
            fill: "none",
            stroke: "var(--line)",
            strokeWidth: "7",
          }),
          o.jsx("circle", {
            cx: "32",
            cy: "32",
            r: 26,
            fill: "none",
            stroke: "url(#rg)",
            strokeWidth: "7",
            strokeLinecap: "round",
            strokeDasharray: n,
            strokeDashoffset: r,
            transform: "rotate(-90 32 32)",
            style: {
              transition: "stroke-dashoffset .55s cubic-bezier(.4,1.4,.5,1)",
            },
          }),
        ],
      }),
      o.jsxs("span", { className: "ring-num", children: [t, "%"] }),
    ],
  });
}
function u1({ pct: t, done: e, total: n }) {
  return o.jsxs("header", {
    className: "header",
    children: [
      o.jsx("h1", { className: "title", children: "我们的小日子" }),
      o.jsx("p", {
        className: "subtitle",
        children: "一起把每一天都过得闪闪发光 ✨",
      }),
      o.jsxs("div", {
        className: "header-row",
        children: [
          o.jsxs("div", {
            className: "partners",
            children: [
              o.jsx("div", {
                className: "avatar you",
                title: profile().you,
                children: profile().you,
              }),
              o.jsx("span", { className: "heart", children: "💛" }),
              o.jsx("div", {
                className: "avatar love",
                title: profile().partner,
                children: profile().partner,
              }),
            ],
          }),
          o.jsx(c1, { pct: t }),
        ],
      }),
      o.jsxs("p", {
        className: "count",
        children: ["已完成 ", o.jsx("b", { children: e }), " / ", n],
      }),
    ],
  });
}
function d1({ cats: t, cat: e, setCat: n, onAdd: r }) {
  const [s, i] = b.useState("");
  function a(l) {
    (l.preventDefault(), s.trim() && (r(s), i("")));
  }
  return o.jsxs("form", {
    className: "add",
    onSubmit: a,
    children: [
      o.jsxs("div", {
        className: "add-row",
        children: [
          o.jsx("input", {
            className: "add-input",
            value: s,
            onChange: (l) => i(l.target.value),
            placeholder: "今天想一起做点什么？",
            "aria-label": "添加待办",
          }),
          o.jsx("button", {
            className: "add-btn",
            type: "submit",
            "aria-label": "添加",
            children: "＋",
          }),
        ],
      }),
      o.jsx("div", {
        className: "cats",
        children: t.map((l) =>
          o.jsx(
            "button",
            {
              type: "button",
              className: "cat" + (l.id === e ? " active" : ""),
              style: { "--c": l.color },
              onClick: () => n(l.id),
              children: l.label,
            },
            l.id,
          ),
        ),
      }),
    ],
  });
}
const h1 = [
  ["all", "全部"],
  ["todo", "进行中"],
  ["done", "已完成"],
];
function f1({ filter: t, setFilter: e }) {
  return o.jsx("div", {
    className: "seg",
    role: "tablist",
    children: h1.map(([n, r]) =>
      o.jsx(
        "button",
        {
          role: "tab",
          "aria-selected": t === n,
          className: t === n ? "active" : "",
          onClick: () => e(n),
          children: r,
        },
        n,
      ),
    ),
  });
}
function p1({ todo: t, cats: e, onToggle: n, onRemove: r, onEdit: s }) {
  const [i, a] = b.useState(!1),
    [l, c] = b.useState(t.text),
    [u, d] = b.useState(!1),
    f = e.find((v) => v.id === t.cat) || e[0];
  function h() {
    (d(!0), setTimeout(() => r(t.id), 280));
  }
  function p() {
    (s(t.id, l), a(!1));
  }
  return o.jsxs("li", {
    className: "todo-item" + (t.done ? " done" : "") + (u ? " removing" : ""),
    children: [
      o.jsx("button", {
        className: "check",
        onClick: () => n(t),
        "aria-label": t.done ? "取消完成" : "标记完成",
        children: o.jsx("span", { className: "tick" }),
      }),
      i
        ? o.jsx("input", {
            className: "edit",
            value: l,
            autoFocus: !0,
            onChange: (v) => c(v.target.value),
            onBlur: p,
            onKeyDown: (v) => {
              (v.key === "Enter" && p(),
                v.key === "Escape" && (c(t.text), a(!1)));
            },
          })
        : o.jsx("span", {
            className: "text",
            onDoubleClick: () => a(!0),
            title: "双击编辑",
            children: t.text,
          }),
      o.jsx("span", {
        className: "cat-tag",
        style: { "--c": f.color },
        children: f.label,
      }),
      o.jsx("button", {
        className: "del",
        onClick: h,
        "aria-label": "删除",
        children: "✕",
      }),
    ],
  });
}
function m1() {
  return o.jsxs("div", {
    className: "empty",
    children: [
      o.jsx("div", { className: "empty-emoji", children: "🌈" }),
      o.jsx("p", { className: "empty-title", children: "这里空空的～" }),
      o.jsx("p", {
        className: "empty-sub",
        children: "添加一件小事，开启你们的小日子吧",
      }),
    ],
  });
}
function g1({ items: t, cats: e, onToggle: n, onRemove: r, onEdit: s }) {
  return t.length === 0
    ? o.jsx(m1, {})
    : o.jsx("ul", {
        className: "list",
        children: t.map((i) =>
          o.jsx(
            p1,
            { todo: i, cats: e, onToggle: n, onRemove: r, onEdit: s },
            i.id,
          ),
        ),
      });
}
function kr() {
  if (typeof document > "u") return;
  const t = document.createElement("canvas");
  ((t.style.cssText =
    "position:fixed;inset:0;width:100%;height:100%;pointer-events:none;z-index:9999"),
    document.body.appendChild(t));
  const e = t.getContext("2d"),
    n = window.devicePixelRatio || 1;
  (() => {
    ((t.width = window.innerWidth * n),
      (t.height = window.innerHeight * n),
      e.setTransform(n, 0, 0, n, 0, 0));
  })();
  const s = ["#4DA3F0", "#FF8A8A", "#FFD66B", "#5FE0C0", "#B79CF0"],
    a = Array.from({ length: 130 }, () => ({
      x: window.innerWidth / 2 + (Math.random() - 0.5) * 140,
      y: window.innerHeight / 2,
      vx: (Math.random() - 0.5) * 10,
      vy: Math.random() * -12 - 5,
      g: 0.26 + Math.random() * 0.16,
      s: 6 + Math.random() * 7,
      c: s[(Math.random() * s.length) | 0],
      r: Math.random() * Math.PI,
      vr: (Math.random() - 0.5) * 0.32,
    }));
  let l = 0;
  function c() {
    e.clearRect(0, 0, window.innerWidth, window.innerHeight);
    let u = !1;
    for (const d of a)
      ((d.vy += d.g),
        (d.x += d.vx),
        (d.y += d.vy),
        (d.r += d.vr),
        d.y < window.innerHeight + 40 && (u = !0),
        e.save(),
        e.translate(d.x, d.y),
        e.rotate(d.r),
        (e.fillStyle = d.c),
        e.fillRect(-d.s / 2, -d.s / 2, d.s, d.s * 0.6),
        e.restore());
    (l++, u && l < 220 ? requestAnimationFrame(c) : t.remove());
  }
  requestAnimationFrame(c);
}
const sf = [
  { id: "shop", label: "购物", color: "var(--coral)" },
  { id: "date", label: "约会", color: "var(--sun)" },
  { id: "home", label: "家务", color: "var(--mint)" },
  { id: "wish", label: "心愿", color: "var(--lav)" },
  { id: "alarm", label: "提醒", color: "var(--sky)" },
];
function v1(props){return o.jsx(TodoPage,props);}
const H0 = "couple-anniv-v1",
  y1 = [
    {
      id: "a1",
      title: "在一起",
      date: "2023-02-14",
      emoji: "💞",
      color: "var(--coral)",
      repeat: "yearly",
    },
    {
      id: "a2",
      title: "第一次旅行",
      date: "2023-07-20",
      emoji: "✈️",
      color: "var(--sky)",
      repeat: "yearly",
    },
  ],
  w1 = y1;
function x1() {
  try {
    const t = localStorage.getItem(H0);
    if (t) return JSON.parse(t);
  } catch {}
  return w1;
}
function _1() {
  return typeof crypto < "u" && crypto.randomUUID
    ? crypto.randomUUID()
    : String(Date.now() + Math.random());
}
function b1(){
    const {items,mutate}=useCollection('anniv',H0,w1);
    return {list:items,add:value=>{const item={...value,id:_1()};mutate(item.id,item);},update:(id,value)=>{const item=items.find(v=>v.id===id);if(item)mutate(id,{...item,...value});},remove:id=>mutate(id,null)};
  }
const sl = [
    19416, 19168, 42352, 21717, 53856, 55632, 91476, 22176, 39632, 21970, 19168,
    42422, 42192, 53840, 119381, 46400, 54944, 44450, 38320, 84343, 18800,
    42160, 46261, 27216, 27968, 109396, 11104, 38256, 21234, 18800, 25958,
    54432, 59984, 28309, 23248, 11104, 100067, 37600, 116951, 51536, 54432,
    120998, 46416, 22176, 107956, 9680, 37584, 53938, 43344, 46423, 27808,
    46416, 86869, 19872, 42416, 83315, 21168, 43432, 59728, 27296, 44710, 43856,
    19296, 43748, 42352, 21088, 62051, 55632, 23383, 22176, 38608, 19925, 19152,
    42192, 54484, 53840, 54616, 46400, 46752, 103846, 38320, 18864, 43380,
    42160, 45690, 27216, 27968, 44870, 43872, 38256, 19189, 18800, 25776, 29859,
    59984, 27480, 21952, 43872, 38613, 37600, 51552, 55636, 54432, 55888, 30034,
    22176, 43959, 9680, 37584, 51893, 43344, 46240, 47780, 44368, 21977, 19360,
    42416, 86390, 21168, 43312, 31060, 27296, 44368, 23378, 19296, 42726, 42208,
    53856, 60005, 54576, 23200, 30371, 38608, 19195, 19152, 42192, 118966,
    53840, 54560, 56645, 46496, 22224, 21938, 18864, 42359, 42160, 43600,
    111189, 27936, 44448, 84835, 37744, 18936, 18800, 25776, 92326, 59984,
    27424, 108228, 43744, 41696, 53987, 51552, 54615, 54432, 55968, 23893,
    22176, 42704, 21972, 21200, 43448, 43344, 46240, 46758, 44368, 21920, 43940,
    42416, 21168, 45683, 26928, 29495, 27296, 44368, 84821, 19296, 42352, 21732,
    53600, 59752, 54560, 55968, 92838, 22224, 19168, 43476, 41680, 53584, 62034,
    54560,
  ],
  af = 1900,
  k1 = 2100;
function S1(t) {
  let e = 348;
  for (let n = 32768; n > 8; n >>= 1) e += sl[t - 1900] & n ? 1 : 0;
  return e + W0(t);
}
function V0(t) {
  return sl[t - 1900] & 15;
}
function W0(t) {
  return V0(t) ? (sl[t - 1900] & 65536 ? 30 : 29) : 0;
}
function E1(t, e) {
  return sl[t - 1900] & (65536 >> e) ? 30 : 29;
}
function j1(t, e, n, r) {
  if (t < af || t > k1 || e < 1 || e > 12 || n < 1 || n > 30) return null;
  const s = V0(t);
  if ((r && s !== e) || n > (r ? W0(t) : E1(t,e))) return null;
  let i = 0;
  for (let c = af; c < t; c++) i += S1(c);
  const a = r ? e : e - 1;
  for (let c = 1; c <= a; c++) i += E1(t, c);
  (s > 0 && s < e && (i += W0(t)), (i += n - 1));
  const l = new Date(1900, 0, 31);
  return (l.setDate(l.getDate() + i), Number.isFinite(l.getTime()) ? l : null);
}
const Zc = [
    "正",
    "二",
    "三",
    "四",
    "五",
    "六",
    "七",
    "八",
    "九",
    "十",
    "冬",
    "腊",
  ],
  Qc = [
    "初一",
    "初二",
    "初三",
    "初四",
    "初五",
    "初六",
    "初七",
    "初八",
    "初九",
    "初十",
    "十一",
    "十二",
    "十三",
    "十四",
    "十五",
    "十六",
    "十七",
    "十八",
    "十九",
    "二十",
    "廿一",
    "廿二",
    "廿三",
    "廿四",
    "廿五",
    "廿六",
    "廿七",
    "廿八",
    "廿九",
    "三十",
  ];
function T1(t, e, n) {
  const r = Zc[(t - 1 + 12) % 12],
    s = Qc[(e - 1 + 30) % 30];
  return `农历 ${n ? "闰" : ""}${r}月${s}`;
}
function N1() {
  const t = new Date();
  return (t.setHours(0, 0, 0, 0), t);
}
function C1(t) {
  const e = N1();
  if (t.type === "lunar") {
    let l = null;
    for (let u = e.getFullYear(); u <= k1; u++) {
      const d = j1(u, t.lMonth, t.lDay, t.lLeap);
      if (d && d >= e) {
        l = d;
        break;
      }
    }
    if (!l) return { diff: null, isToday: !1, dateStr: null };
    const c = Math.round((l - e) / 864e5);
    return { diff: c, isToday: c === 0, dateStr: of(l) };
  }
  const [n, r, s] = String(t.date).split("-").map(Number);
  let i = new Date(n, r - 1, s);
  if (t.repeat === "once") {
    const l = Math.round((i - e) / 864e5);
    return { diff: l, isToday: l === 0, dateStr: t.date };
  }
  i = nextAnnual(t.date,e); if(!i)return {diff:null,isToday:false,dateStr:null};
  const a = Math.round((i - e) / 864e5);
  return { diff: a, isToday: a === 0, dateStr: of(i) };
}
function R1(t) {
  if (t.type === "lunar") return T1(t.lMonth, t.lDay, t.lLeap);
  const [e, n, r] = String(t.date).split("-").map(Number);
  return `${e}年${n}月${r}日`;
}
function of(t) {
  return `${t.getFullYear()}-${String(t.getMonth() + 1).padStart(2, "0")}-${String(t.getDate()).padStart(2, "0")}`;
}
const A1 = ["💞", "✈️", "🎂", "💍", "🌟", "🏠", "🐱", "🍰", "🌈", "🔔"],
  P1 = [
    "var(--coral)",
    "var(--sky)",
    "var(--mint)",
    "var(--lav)",
    "var(--sun)",
  ];
function O1() {
  const { list: t, add: e, update: n, remove: r } = b1(),
    [s, i] = b.useState({
      title: "",
      date: "",
      emoji: "💞",
      color: "var(--coral)",
      repeat: "yearly",
      cal: "solar",
      lMonth: 1,
      lDay: 1,
      lLeap: !1,
    }),
    [a, l] = b.useState(null),
    c = b.useMemo(() => t.map((h) => ({ ...h, ...C1(h) })).sort((a,b)=>(a.diff===null?Infinity:a.diff<0?100000-a.diff:a.diff)-(b.diff===null?Infinity:b.diff<0?100000-b.diff:b.diff)), [t]);
  b.useEffect(() => {
    c.some((h) => h.isToday) && kr();
  }, [c]);
  function u(h) {
    if ((h.preventDefault(), !s.title.trim())) return;
    const p = { title: s.title.trim(), emoji: s.emoji, color: s.color };
    let v;
    if (s.cal === "lunar")
      v = {
        ...p,
        type: "lunar",
        lMonth: Number(s.lMonth),
        lDay: Number(s.lDay),
        lLeap: !!s.lLeap,
      };
    else {
      if (!s.date) return;
      v = { ...p, type: "solar", date: s.date, repeat: s.repeat };
    }
    (a ? (n(a, v), l(null)) : e(v),
      i({
        title: "",
        date: "",
        emoji: "💞",
        color: "var(--coral)",
        repeat: "yearly",
        cal: "solar",
        lMonth: 1,
        lDay: 1,
        lLeap: !1,
      }));
  }
  function d(h) {
    (l(h.id),
      i({
        title: h.title,
        date: h.date || "",
        emoji: h.emoji,
        color: h.color,
        repeat: h.repeat || "yearly",
        cal: h.type === "lunar" ? "lunar" : "solar",
        lMonth: h.lMonth || 1,
        lDay: h.lDay || 1,
        lLeap: !!h.lLeap,
      }));
  }
  const f =
    s.cal === "lunar"
      ? `农历 ${s.lLeap ? "闰" : ""}${Zc[s.lMonth - 1]}月${Qc[s.lDay - 1]}`
      : "";
  return o.jsxs("div", {
    className: "card",
    children: [
      o.jsxs("div", {
        className: "view-head",
        children: [
          o.jsx("h2", { className: "view-title", children: "纪念日倒数" }),
          o.jsx("p", {
            className: "view-sub",
            children: "重要的日子，提前一天开始期待 ✨",
          }),
        ],
      }),
      o.jsxs("form", {
        className: "anniv-form",
        onSubmit: u,
        children: [
          o.jsx("input", {
            className: "field",
            placeholder: "纪念日名称，如：在一起",
            "aria-label":"纪念日名称",required:true,maxLength:80,
            value: s.title,
            onChange: (h) => i({ ...s, title: h.target.value }),
          }),
          o.jsxs("div", {
            className: "seg cal-seg",
            children: [
              o.jsx("button", {
                type: "button",
                className: s.cal === "solar" ? "active" : "",
                onClick: () => i({ ...s, cal: "solar" }),
                children: "公历",
              }),
              o.jsx("button", {
                type: "button",
                className: s.cal === "lunar" ? "active" : "",
                onClick: () => i({ ...s, cal: "lunar" }),
                children: "农历",
              }),
            ],
          }),
          s.cal === "solar"
            ? o.jsxs("div", {
                className: "anniv-row",
                children: [
                  o.jsx("input", {
                    className: "field",
                    type: "date",
                    value: s.date,"aria-label":"纪念日日期",required:true,onInput:(h)=>i({...s,date:h.target.value}),
                    onChange: (h) => i({ ...s, date: h.target.value }),
                  }),
                  o.jsxs("select", {
                    className: "field",
                    value: s.repeat,
                    onChange: (h) => i({ ...s, repeat: h.target.value }),
                    children: [
                      o.jsx("option", { value: "yearly", children: "每年" }),
                      o.jsx("option", { value: "once", children: "仅一次" }),
                    ],
                  }),
                ],
              })
            : o.jsxs("div", {
                className: "anniv-row lunar-row",
                children: [
                  o.jsx("select", {
                    className: "field",
                    value: s.lMonth,
                    onChange: (h) =>
                      i({ ...s, lMonth: Number(h.target.value) }),
                    children: Zc.map((h, p) =>
                      o.jsxs(
                        "option",
                        { value: p + 1, children: [h, "月"] },
                        p + 1,
                      ),
                    ),
                  }),
                  o.jsx("select", {
                    className: "field",
                    value: s.lDay,
                    onChange: (h) => i({ ...s, lDay: Number(h.target.value) }),
                    children: Qc.map((h, p) =>
                      o.jsx("option", { value: p + 1, children: h }, p + 1),
                    ),
                  }),
                  o.jsxs("label", {
                    className: "leap-toggle",
                    children: [
                      o.jsx("input", {
                        type: "checkbox",
                        checked: s.lLeap,
                        onChange: (h) => i({ ...s, lLeap: h.target.checked }),
                      }),
                      "闰月",
                    ],
                  }),
                ],
              }),
          s.cal === "lunar" &&
            o.jsxs("p", {
              className: "lunar-preview",
              children: [f, " · 每年这一天提醒你"],
            }),
          o.jsx("div", {
            className: "picker",
            children: A1.map((h) =>
              o.jsx(
                "button",
                {
                  type: "button",
                  className: "pick" + (s.emoji === h ? " active" : ""),
                  onClick: () => i({ ...s, emoji: h }),
                  children: h,
                },
                h,
              ),
            ),
          }),
          o.jsx("div", {
            className: "picker",
            children: P1.map((h) =>
              o.jsx(
                "button",
                {
                  type: "button",
                  className: "dot" + (s.color === h ? " active" : ""),
                  style: { background: h },
                  onClick: () => i({ ...s, color: h }),
                  "aria-label": "选择颜色",
                },
                h,
              ),
            ),
          }),
          o.jsx("button", {
            className: "primary-btn",
            type: "submit",
            children: a ? "保存修改" : "添加纪念日",
          }),
          a && o.jsx("button",{type:"button",className:"mini-btn",onClick:()=>{l(null);i({...s,title:"",date:""});},children:"取消编辑"}),
        ],
      }),
      c.length === 0
        ? o.jsxs("div", {
            className: "empty",
            children: [
              o.jsx("div", { className: "empty-emoji", children: "📅" }),
              o.jsx("p", {
                className: "empty-title",
                children: "还没有纪念日",
              }),
              o.jsx("p", {
                className: "empty-sub",
                children: "添加你们的第一个重要日子吧",
              }),
            ],
          })
        : o.jsx("ul", {
            className: "anniv-list",
            children: c.map((h) =>
              o.jsxs(
                "li",
                {
                  className: "anniv-item",
                  style: { "--c": h.color },
                  children: [
                    o.jsx("div", {
                      className: "anniv-emoji",
                      children: h.emoji,
                    }),
                    o.jsxs("div", {
                      className: "anniv-body",
                      children: [
                        o.jsx("div", {
                          className: "anniv-name",
                          children: h.title,
                        }),
                        o.jsx("div", {
                          className: "anniv-date",
                          children: R1(h),
                        }),
                        o.jsx("div", {
                          className: "anniv-count",
                          children:
                            h.diff === null
                              ? o.jsx("span", {
                                  className: "muted",
                                  children: "今年无此农历日",
                                })
                              : h.isToday
                                ? o.jsx("b", {
                                    className: "today",
                                    children: "就是今天 🎉",
                                  })
                                : h.diff > 0
                                  ? o.jsxs(o.Fragment, {
                                      children: [
                                        "还有 ",
                                        o.jsx("b", { children: h.diff }),
                                        " 天",
                                      ],
                                    })
                                  : o.jsxs(o.Fragment, {
                                      children: [
                                        "已过 ",
                                        o.jsx("b", { children: -h.diff }),
                                        " 天",
                                      ],
                                    }),
                        }),
                      ],
                    }),
                    o.jsxs("div", {
                      className: "anniv-actions",
                      children: [
                        o.jsx("button", {
                          className: "mini-btn",
                          onClick: () => d(h),
                          children: "编辑",
                        }),
                        o.jsx("button", {
                          className: "mini-btn danger",
                          onClick: () => r(h.id),
                          children: "删",
                        }),
                      ],
                    }),
                  ],
                },
                h.id,
              ),
            ),
          }),
    ],
  });
}
const I1 = "couple-todo-media",
  Lo = "photos",
  L1 = 1;
let Ca = null;
function il() {
  return (
    Ca ||
    ((Ca = new Promise((t, e) => {
      const n = indexedDB.open(I1, L1);
      ((n.onupgradeneeded = () => {
        const r = n.result;
        r.objectStoreNames.contains(Lo) ||
          r.createObjectStore(Lo, { keyPath: "id" });
      }),
        (n.onsuccess = () => t(n.result)),
        (n.onerror = () => e(n.error)));
    })),
    Ca)
  );
}
function al(t, e) {
  return t.transaction(Lo, e).objectStore(Lo);
}
async function M1(t) {
  const e = await il();
  return new Promise((n, r) => {
    const s = al(e, "readwrite");
    (s.put(t),
      (s.transaction.oncomplete = () => n()),
      (s.transaction.onerror = () => r(s.transaction.error)));
  });
}
async function $1() {
  const t = await il();
  return new Promise((e, n) => {
    const s = al(t, "readonly").getAll();
    ((s.onsuccess = () => e(s.result || [])), (s.onerror = () => n(s.error)));
  });
}
async function D1(t) {
  const e = await il();
  return new Promise((n, r) => {
    const s = al(e, "readwrite");
    (s.delete(t),
      (s.transaction.oncomplete = () => n()),
      (s.transaction.onerror = () => r(s.transaction.error)));
  });
}
async function U1() {
  const t = await il();
  return new Promise((e, n) => {
    const r = al(t, "readwrite");
    (r.clear(),
      (r.transaction.oncomplete = () => e()),
      (r.transaction.onerror = () => n(r.transaction.error)));
  });
}
function lf() {
  return typeof crypto < "u" && crypto.randomUUID
    ? crypto.randomUUID()
    : String(Date.now() + Math.random());
}
function q0() {
  const [t, e] = b.useState([]),
    [n, r] = b.useState(!1),
    s = ea(),
    i = b.useCallback(async () => {
      if (s) {
        const d = await nf();
        (e(d), r(!0));
        return;
      }
      const u = await $1();
      (u.sort((d, f) => f.createdAt - d.createdAt), e(u), r(!0));
    }, [s]);
  b.useEffect(() => {
    i().catch(()=>announce("照片加载失败，请检查云端配置或设备存储"));
    const timer=s?setInterval(()=>i().catch(()=>{}),15000):null;return()=>clearInterval(timer);
  }, [i,s]);
  const a = b.useCallback(
      async (u, d = "") => {
        const f = u.filter((h) => h && h.type && h.type.startsWith("image/"));
        if (f.length) {
          if (s)
            for (const h of f) {
              const p = lf();
              await r1(p, h, h.type);
            }
          else
            for (const h of f)
              await M1({
                id: lf(),
                name: h.name,
                type: h.type,
                blob: h,
                caption: d,
                createdAt: Date.now(),
              });
          await i();
        }
      },
      [s, i],
    ),
    l = b.useCallback(
      async (u) => {
        (s ? await rf(u) : await D1(u), await i());
      },
      [s, i],
    ),
    c = b.useCallback(async () => {
      if (s) {
        const u = await nf();
        for (const d of u) await rf(d.id);
      } else await U1();
      await i();
    }, [s, i]);
  return {
    photos: t,
    loaded: n,
    addFiles: a,
    remove: l,
    clearAll: c,
    cloud: s,
  };
}
function B1(t, e, n) {
  return Math.max(e, Math.min(t, n));
}
const Je = {
  toVector(t, e) {
    return (t === void 0 && (t = e), Array.isArray(t) ? t : [t, t]);
  },
  add(t, e) {
    return [t[0] + e[0], t[1] + e[1]];
  },
  sub(t, e) {
    return [t[0] - e[0], t[1] - e[1]];
  },
  addTo(t, e) {
    ((t[0] += e[0]), (t[1] += e[1]));
  },
  subTo(t, e) {
    ((t[0] -= e[0]), (t[1] -= e[1]));
  },
};
function cf(t, e, n) {
  return e === 0 || Math.abs(e) === 1 / 0
    ? Math.pow(t, n * 5)
    : (t * e * n) / (e + n * t);
}
function uf(t, e, n, r = 0.15) {
  return r === 0
    ? B1(t, e, n)
    : t < e
      ? -cf(e - t, n - e, r) + e
      : t > n
        ? +cf(t - n, n - e, r) + n
        : t;
}
function z1(t, [e, n], [r, s]) {
  const [[i, a], [l, c]] = t;
  return [uf(e, i, a, r), uf(n, l, c, s)];
}
function F1(t, e) {
  if (typeof t != "object" || t === null) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function H1(t) {
  var e = F1(t, "string");
  return typeof e == "symbol" ? e : String(e);
}
function lt(t, e, n) {
  return (
    (e = H1(e)),
    e in t
      ? Object.defineProperty(t, e, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[e] = n),
    t
  );
}
function df(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    (e &&
      (r = r.filter(function (s) {
        return Object.getOwnPropertyDescriptor(t, s).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function et(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? df(Object(n), !0).forEach(function (r) {
          lt(t, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
        : df(Object(n)).forEach(function (r) {
            Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
          });
  }
  return t;
}
const K0 = {
  pointer: { start: "down", change: "move", end: "up" },
  mouse: { start: "down", change: "move", end: "up" },
  touch: { start: "start", change: "move", end: "end" },
  gesture: { start: "start", change: "change", end: "end" },
};
function hf(t) {
  return t ? t[0].toUpperCase() + t.slice(1) : "";
}
const V1 = ["enter", "leave"];
function W1(t = !1, e) {
  return t && !V1.includes(e);
}
function q1(t, e = "", n = !1) {
  const r = K0[t],
    s = (r && r[e]) || e;
  return "on" + hf(t) + hf(s) + (W1(n, s) ? "Capture" : "");
}
const K1 = ["gotpointercapture", "lostpointercapture"];
function G1(t) {
  let e = t.substring(2).toLowerCase();
  const n = !!~e.indexOf("passive");
  n && (e = e.replace("passive", ""));
  const r = K1.includes(e) ? "capturecapture" : "capture",
    s = !!~e.indexOf(r);
  return (
    s && (e = e.replace("capture", "")),
    { device: e, capture: s, passive: n }
  );
}
function J1(t, e = "") {
  const n = K0[t],
    r = (n && n[e]) || e;
  return t + r;
}
function ol(t) {
  return "touches" in t;
}
function G0(t) {
  return ol(t) ? "touch" : "pointerType" in t ? t.pointerType : "mouse";
}
function Y1(t) {
  return Array.from(t.touches).filter((e) => {
    var n, r;
    return (
      e.target === t.currentTarget ||
      ((n = t.currentTarget) === null ||
      n === void 0 ||
      (r = n.contains) === null ||
      r === void 0
        ? void 0
        : r.call(n, e.target))
    );
  });
}
function X1(t) {
  return t.type === "touchend" || t.type === "touchcancel"
    ? t.changedTouches
    : t.targetTouches;
}
function J0(t) {
  return ol(t) ? X1(t)[0] : t;
}
function eu(t, e) {
  try {
    const n = e.clientX - t.clientX,
      r = e.clientY - t.clientY,
      s = (e.clientX + t.clientX) / 2,
      i = (e.clientY + t.clientY) / 2,
      a = Math.hypot(n, r);
    return {
      angle: -(Math.atan2(n, r) * 180) / Math.PI,
      distance: a,
      origin: [s, i],
    };
  } catch {}
  return null;
}
function Z1(t) {
  return Y1(t).map((e) => e.identifier);
}
function ff(t, e) {
  const [n, r] = Array.from(t.touches).filter((s) => e.includes(s.identifier));
  return eu(n, r);
}
function Fl(t) {
  const e = J0(t);
  return ol(t) ? e.identifier : e.pointerId;
}
function Ds(t) {
  const e = J0(t);
  return [e.clientX, e.clientY];
}
const pf = 40,
  mf = 800;
function Y0(t) {
  let { deltaX: e, deltaY: n, deltaMode: r } = t;
  return (
    r === 1 ? ((e *= pf), (n *= pf)) : r === 2 && ((e *= mf), (n *= mf)),
    [e, n]
  );
}
function Q1(t) {
  var e, n;
  const {
    scrollX: r,
    scrollY: s,
    scrollLeft: i,
    scrollTop: a,
  } = t.currentTarget;
  return [
    (e = r ?? i) !== null && e !== void 0 ? e : 0,
    (n = s ?? a) !== null && n !== void 0 ? n : 0,
  ];
}
function eb(t) {
  const e = {};
  if (("buttons" in t && (e.buttons = t.buttons), "shiftKey" in t)) {
    const { shiftKey: n, altKey: r, metaKey: s, ctrlKey: i } = t;
    Object.assign(e, { shiftKey: n, altKey: r, metaKey: s, ctrlKey: i });
  }
  return e;
}
function Mo(t, ...e) {
  return typeof t == "function" ? t(...e) : t;
}
function tb() {}
function nb(...t) {
  return t.length === 0
    ? tb
    : t.length === 1
      ? t[0]
      : function () {
          let e;
          for (const n of t) e = n.apply(this, arguments) || e;
          return e;
        };
}
function gf(t, e) {
  return Object.assign({}, e, t || {});
}
const rb = 32;
class X0 {
  constructor(e, n, r) {
    ((this.ctrl = e),
      (this.args = n),
      (this.key = r),
      this.state ||
        ((this.state = {}),
        this.computeValues([0, 0]),
        this.computeInitial(),
        this.init && this.init(),
        this.reset()));
  }
  get state() {
    return this.ctrl.state[this.key];
  }
  set state(e) {
    this.ctrl.state[this.key] = e;
  }
  get shared() {
    return this.ctrl.state.shared;
  }
  get eventStore() {
    return this.ctrl.gestureEventStores[this.key];
  }
  get timeoutStore() {
    return this.ctrl.gestureTimeoutStores[this.key];
  }
  get config() {
    return this.ctrl.config[this.key];
  }
  get sharedConfig() {
    return this.ctrl.config.shared;
  }
  get handler() {
    return this.ctrl.handlers[this.key];
  }
  reset() {
    const { state: e, shared: n, ingKey: r, args: s } = this;
    ((n[r] = e._active = e.active = e._blocked = e._force = !1),
      (e._step = [!1, !1]),
      (e.intentional = !1),
      (e._movement = [0, 0]),
      (e._distance = [0, 0]),
      (e._direction = [0, 0]),
      (e._delta = [0, 0]),
      (e._bounds = [
        [-1 / 0, 1 / 0],
        [-1 / 0, 1 / 0],
      ]),
      (e.args = s),
      (e.axis = void 0),
      (e.memo = void 0),
      (e.elapsedTime = e.timeDelta = 0),
      (e.direction = [0, 0]),
      (e.distance = [0, 0]),
      (e.overflow = [0, 0]),
      (e._movementBound = [!1, !1]),
      (e.velocity = [0, 0]),
      (e.movement = [0, 0]),
      (e.delta = [0, 0]),
      (e.timeStamp = 0));
  }
  start(e) {
    const n = this.state,
      r = this.config;
    n._active ||
      (this.reset(),
      this.computeInitial(),
      (n._active = !0),
      (n.target = e.target),
      (n.currentTarget = e.currentTarget),
      (n.lastOffset = r.from ? Mo(r.from, n) : n.offset),
      (n.offset = n.lastOffset),
      (n.startTime = n.timeStamp = e.timeStamp));
  }
  computeValues(e) {
    const n = this.state;
    ((n._values = e), (n.values = this.config.transform(e)));
  }
  computeInitial() {
    const e = this.state;
    ((e._initial = e._values), (e.initial = e.values));
  }
  compute(e) {
    const { state: n, config: r, shared: s } = this;
    n.args = this.args;
    let i = 0;
    if (
      (e &&
        ((n.event = e),
        r.preventDefault && e.cancelable && n.event.preventDefault(),
        (n.type = e.type),
        (s.touches = this.ctrl.pointerIds.size || this.ctrl.touchIds.size),
        (s.locked = !!document.pointerLockElement),
        Object.assign(s, eb(e)),
        (s.down = s.pressed = s.buttons % 2 === 1 || s.touches > 0),
        (i = e.timeStamp - n.timeStamp),
        (n.timeStamp = e.timeStamp),
        (n.elapsedTime = n.timeStamp - n.startTime)),
      n._active)
    ) {
      const A = n._delta.map(Math.abs);
      Je.addTo(n._distance, A);
    }
    this.axisIntent && this.axisIntent(e);
    const [a, l] = n._movement,
      [c, u] = r.threshold,
      { _step: d, values: f } = n;
    if (
      (r.hasCustomTransform
        ? (d[0] === !1 && (d[0] = Math.abs(a) >= c && f[0]),
          d[1] === !1 && (d[1] = Math.abs(l) >= u && f[1]))
        : (d[0] === !1 && (d[0] = Math.abs(a) >= c && Math.sign(a) * c),
          d[1] === !1 && (d[1] = Math.abs(l) >= u && Math.sign(l) * u)),
      (n.intentional = d[0] !== !1 || d[1] !== !1),
      !n.intentional)
    )
      return;
    const h = [0, 0];
    if (r.hasCustomTransform) {
      const [A, P] = f;
      ((h[0] = d[0] !== !1 ? A - d[0] : 0),
        (h[1] = d[1] !== !1 ? P - d[1] : 0));
    } else
      ((h[0] = d[0] !== !1 ? a - d[0] : 0),
        (h[1] = d[1] !== !1 ? l - d[1] : 0));
    this.restrictToAxis && !n._blocked && this.restrictToAxis(h);
    const p = n.offset,
      v = (n._active && !n._blocked) || n.active;
    v &&
      ((n.first = n._active && !n.active),
      (n.last = !n._active && n.active),
      (n.active = s[this.ingKey] = n._active),
      e &&
        (n.first &&
          ("bounds" in r && (n._bounds = Mo(r.bounds, n)),
          this.setup && this.setup()),
        (n.movement = h),
        this.computeOffset()));
    const [x, _] = n.offset,
      [[m, g], [y, E]] = n._bounds;
    ((n.overflow = [x < m ? -1 : x > g ? 1 : 0, _ < y ? -1 : _ > E ? 1 : 0]),
      (n._movementBound[0] = n.overflow[0]
        ? n._movementBound[0] === !1
          ? n._movement[0]
          : n._movementBound[0]
        : !1),
      (n._movementBound[1] = n.overflow[1]
        ? n._movementBound[1] === !1
          ? n._movement[1]
          : n._movementBound[1]
        : !1));
    const R = n._active ? r.rubberband || [0, 0] : [0, 0];
    if (
      ((n.offset = z1(n._bounds, n.offset, R)),
      (n.delta = Je.sub(n.offset, p)),
      this.computeMovement(),
      v && (!n.last || i > rb))
    ) {
      n.delta = Je.sub(n.offset, p);
      const A = n.delta.map(Math.abs);
      (Je.addTo(n.distance, A),
        (n.direction = n.delta.map(Math.sign)),
        (n._direction = n._delta.map(Math.sign)),
        !n.first &&
          i > 0 &&
          ((n.velocity = [A[0] / i, A[1] / i]), (n.timeDelta = i)));
    }
  }
  emit() {
    const e = this.state,
      n = this.shared,
      r = this.config;
    if (
      (e._active || this.clean(),
      (e._blocked || !e.intentional) && !e._force && !r.triggerAllEvents)
    )
      return;
    const s = this.handler(
      et(et(et({}, n), e), {}, { [this.aliasKey]: e.values }),
    );
    s !== void 0 && (e.memo = s);
  }
  clean() {
    (this.eventStore.clean(), this.timeoutStore.clean());
  }
}
function sb([t, e], n) {
  const r = Math.abs(t),
    s = Math.abs(e);
  if (r > s && r > n) return "x";
  if (s > r && s > n) return "y";
}
class ta extends X0 {
  constructor(...e) {
    (super(...e), lt(this, "aliasKey", "xy"));
  }
  reset() {
    (super.reset(), (this.state.axis = void 0));
  }
  init() {
    ((this.state.offset = [0, 0]), (this.state.lastOffset = [0, 0]));
  }
  computeOffset() {
    this.state.offset = Je.add(this.state.lastOffset, this.state.movement);
  }
  computeMovement() {
    this.state.movement = Je.sub(this.state.offset, this.state.lastOffset);
  }
  axisIntent(e) {
    const n = this.state,
      r = this.config;
    if (!n.axis && e) {
      const s =
        typeof r.axisThreshold == "object"
          ? r.axisThreshold[G0(e)]
          : r.axisThreshold;
      n.axis = sb(n._movement, s);
    }
    n._blocked =
      ((r.lockDirection || !!r.axis) && !n.axis) ||
      (!!r.axis && r.axis !== n.axis);
  }
  restrictToAxis(e) {
    if (this.config.axis || this.config.lockDirection)
      switch (this.state.axis) {
        case "x":
          e[1] = 0;
          break;
        case "y":
          e[0] = 0;
          break;
      }
  }
}
const ib = (t) => t,
  vf = 0.15,
  Z0 = {
    enabled(t = !0) {
      return t;
    },
    eventOptions(t, e, n) {
      return et(et({}, n.shared.eventOptions), t);
    },
    preventDefault(t = !1) {
      return t;
    },
    triggerAllEvents(t = !1) {
      return t;
    },
    rubberband(t = 0) {
      switch (t) {
        case !0:
          return [vf, vf];
        case !1:
          return [0, 0];
        default:
          return Je.toVector(t);
      }
    },
    from(t) {
      if (typeof t == "function") return t;
      if (t != null) return Je.toVector(t);
    },
    transform(t, e, n) {
      const r = t || n.shared.transform;
      return ((this.hasCustomTransform = !!r), r || ib);
    },
    threshold(t) {
      return Je.toVector(t, 0);
    },
  },
  ab = 0,
  Gr = et(
    et({}, Z0),
    {},
    {
      axis(t, e, { axis: n }) {
        if (((this.lockDirection = n === "lock"), !this.lockDirection))
          return n;
      },
      axisThreshold(t = ab) {
        return t;
      },
      bounds(t = {}) {
        if (typeof t == "function") return (i) => Gr.bounds(t(i));
        if ("current" in t) return () => t.current;
        if (typeof HTMLElement == "function" && t instanceof HTMLElement)
          return t;
        const {
          left: e = -1 / 0,
          right: n = 1 / 0,
          top: r = -1 / 0,
          bottom: s = 1 / 0,
        } = t;
        return [
          [e, n],
          [r, s],
        ];
      },
    },
  ),
  yf = {
    ArrowRight: (t, e = 1) => [t * e, 0],
    ArrowLeft: (t, e = 1) => [-1 * t * e, 0],
    ArrowUp: (t, e = 1) => [0, -1 * t * e],
    ArrowDown: (t, e = 1) => [0, t * e],
  };
class ob extends ta {
  constructor(...e) {
    (super(...e), lt(this, "ingKey", "dragging"));
  }
  reset() {
    super.reset();
    const e = this.state;
    ((e._pointerId = void 0),
      (e._pointerActive = !1),
      (e._keyboardActive = !1),
      (e._preventScroll = !1),
      (e._delayed = !1),
      (e.swipe = [0, 0]),
      (e.tap = !1),
      (e.canceled = !1),
      (e.cancel = this.cancel.bind(this)));
  }
  setup() {
    const e = this.state;
    if (e._bounds instanceof HTMLElement) {
      const n = e._bounds.getBoundingClientRect(),
        r = e.currentTarget.getBoundingClientRect(),
        s = {
          left: n.left - r.left + e.offset[0],
          right: n.right - r.right + e.offset[0],
          top: n.top - r.top + e.offset[1],
          bottom: n.bottom - r.bottom + e.offset[1],
        };
      e._bounds = Gr.bounds(s);
    }
  }
  cancel() {
    const e = this.state;
    e.canceled ||
      ((e.canceled = !0),
      (e._active = !1),
      setTimeout(() => {
        (this.compute(), this.emit());
      }, 0));
  }
  setActive() {
    this.state._active =
      this.state._pointerActive || this.state._keyboardActive;
  }
  clean() {
    (this.pointerClean(),
      (this.state._pointerActive = !1),
      (this.state._keyboardActive = !1),
      super.clean());
  }
  pointerDown(e) {
    const n = this.config,
      r = this.state;
    if (
      e.buttons != null &&
      (Array.isArray(n.pointerButtons)
        ? !n.pointerButtons.includes(e.buttons)
        : n.pointerButtons !== -1 && n.pointerButtons !== e.buttons)
    )
      return;
    const s = this.ctrl.setEventIds(e);
    (n.pointerCapture && e.target.setPointerCapture(e.pointerId),
      !(s && s.size > 1 && r._pointerActive) &&
        (this.start(e),
        this.setupPointer(e),
        (r._pointerId = Fl(e)),
        (r._pointerActive = !0),
        this.computeValues(Ds(e)),
        this.computeInitial(),
        n.preventScrollAxis && G0(e) !== "mouse"
          ? ((r._active = !1), this.setupScrollPrevention(e))
          : n.delay > 0
            ? (this.setupDelayTrigger(e),
              n.triggerAllEvents && (this.compute(e), this.emit()))
            : this.startPointerDrag(e)));
  }
  startPointerDrag(e) {
    const n = this.state;
    ((n._active = !0),
      (n._preventScroll = !0),
      (n._delayed = !1),
      this.compute(e),
      this.emit());
  }
  pointerMove(e) {
    const n = this.state,
      r = this.config;
    if (!n._pointerActive) return;
    const s = Fl(e);
    if (n._pointerId !== void 0 && s !== n._pointerId) return;
    const i = Ds(e);
    if (
      (document.pointerLockElement === e.target
        ? (n._delta = [e.movementX, e.movementY])
        : ((n._delta = Je.sub(i, n._values)), this.computeValues(i)),
      Je.addTo(n._movement, n._delta),
      this.compute(e),
      n._delayed && n.intentional)
    ) {
      (this.timeoutStore.remove("dragDelay"),
        (n.active = !1),
        this.startPointerDrag(e));
      return;
    }
    if (r.preventScrollAxis && !n._preventScroll)
      if (n.axis)
        if (n.axis === r.preventScrollAxis || r.preventScrollAxis === "xy") {
          ((n._active = !1), this.clean());
          return;
        } else {
          (this.timeoutStore.remove("startPointerDrag"),
            this.startPointerDrag(e));
          return;
        }
      else return;
    this.emit();
  }
  pointerUp(e) {
    this.ctrl.setEventIds(e);
    try {
      this.config.pointerCapture &&
        e.target.hasPointerCapture(e.pointerId) &&
        e.target.releasePointerCapture(e.pointerId);
    } catch {}
    const n = this.state,
      r = this.config;
    if (!n._active || !n._pointerActive) return;
    const s = Fl(e);
    if (n._pointerId !== void 0 && s !== n._pointerId) return;
    ((this.state._pointerActive = !1), this.setActive(), this.compute(e));
    const [i, a] = n._distance;
    if (
      ((n.tap = i <= r.tapsThreshold && a <= r.tapsThreshold),
      n.tap && r.filterTaps)
    )
      n._force = !0;
    else {
      const [l, c] = n._delta,
        [u, d] = n._movement,
        [f, h] = r.swipe.velocity,
        [p, v] = r.swipe.distance,
        x = r.swipe.duration;
      if (n.elapsedTime < x) {
        const _ = Math.abs(l / n.timeDelta),
          m = Math.abs(c / n.timeDelta);
        (_ > f && Math.abs(u) > p && (n.swipe[0] = Math.sign(l)),
          m > h && Math.abs(d) > v && (n.swipe[1] = Math.sign(c)));
      }
    }
    this.emit();
  }
  pointerClick(e) {
    !this.state.tap &&
      e.detail > 0 &&
      (e.preventDefault(), e.stopPropagation());
  }
  setupPointer(e) {
    const n = this.config,
      r = n.device;
    (n.pointerLock && e.currentTarget.requestPointerLock(),
      n.pointerCapture ||
        (this.eventStore.add(
          this.sharedConfig.window,
          r,
          "change",
          this.pointerMove.bind(this),
        ),
        this.eventStore.add(
          this.sharedConfig.window,
          r,
          "end",
          this.pointerUp.bind(this),
        ),
        this.eventStore.add(
          this.sharedConfig.window,
          r,
          "cancel",
          this.pointerUp.bind(this),
        )));
  }
  pointerClean() {
    this.config.pointerLock &&
      document.pointerLockElement === this.state.currentTarget &&
      document.exitPointerLock();
  }
  preventScroll(e) {
    this.state._preventScroll && e.cancelable && e.preventDefault();
  }
  setupScrollPrevention(e) {
    ((this.state._preventScroll = !1), lb(e));
    const n = this.eventStore.add(
      this.sharedConfig.window,
      "touch",
      "change",
      this.preventScroll.bind(this),
      { passive: !1 },
    );
    (this.eventStore.add(this.sharedConfig.window, "touch", "end", n),
      this.eventStore.add(this.sharedConfig.window, "touch", "cancel", n),
      this.timeoutStore.add(
        "startPointerDrag",
        this.startPointerDrag.bind(this),
        this.config.preventScrollDelay,
        e,
      ));
  }
  setupDelayTrigger(e) {
    ((this.state._delayed = !0),
      this.timeoutStore.add(
        "dragDelay",
        () => {
          ((this.state._step = [0, 0]), this.startPointerDrag(e));
        },
        this.config.delay,
      ));
  }
  keyDown(e) {
    const n = yf[e.key];
    if (n) {
      const r = this.state,
        s = e.shiftKey ? 10 : e.altKey ? 0.1 : 1;
      (this.start(e),
        (r._delta = n(this.config.keyboardDisplacement, s)),
        (r._keyboardActive = !0),
        Je.addTo(r._movement, r._delta),
        this.compute(e),
        this.emit());
    }
  }
  keyUp(e) {
    e.key in yf &&
      ((this.state._keyboardActive = !1),
      this.setActive(),
      this.compute(e),
      this.emit());
  }
  bind(e) {
    const n = this.config.device;
    (e(n, "start", this.pointerDown.bind(this)),
      this.config.pointerCapture &&
        (e(n, "change", this.pointerMove.bind(this)),
        e(n, "end", this.pointerUp.bind(this)),
        e(n, "cancel", this.pointerUp.bind(this)),
        e("lostPointerCapture", "", this.pointerUp.bind(this))),
      this.config.keys &&
        (e("key", "down", this.keyDown.bind(this)),
        e("key", "up", this.keyUp.bind(this))),
      this.config.filterTaps &&
        e("click", "", this.pointerClick.bind(this), {
          capture: !0,
          passive: !1,
        }));
  }
}
function lb(t) {
  "persist" in t && typeof t.persist == "function" && t.persist();
}
const na =
  typeof window < "u" && window.document && window.document.createElement;
function Q0() {
  return na && "ontouchstart" in window;
}
function cb() {
  return Q0() || (na && window.navigator.maxTouchPoints > 1);
}
function ub() {
  return na && "onpointerdown" in window;
}
function db() {
  return na && "exitPointerLock" in window.document;
}
function hb() {
  try {
    return "constructor" in GestureEvent;
  } catch {
    return !1;
  }
}
const nn = {
    isBrowser: na,
    gesture: hb(),
    touch: Q0(),
    touchscreen: cb(),
    pointer: ub(),
    pointerLock: db(),
  },
  fb = 250,
  pb = 180,
  mb = 0.5,
  gb = 50,
  vb = 250,
  yb = 10,
  wf = { mouse: 0, touch: 0, pen: 8 },
  wb = et(
    et({}, Gr),
    {},
    {
      device(
        t,
        e,
        { pointer: { touch: n = !1, lock: r = !1, mouse: s = !1 } = {} },
      ) {
        return (
          (this.pointerLock = r && nn.pointerLock),
          nn.touch && n
            ? "touch"
            : this.pointerLock
              ? "mouse"
              : nn.pointer && !s
                ? "pointer"
                : nn.touch
                  ? "touch"
                  : "mouse"
        );
      },
      preventScrollAxis(t, e, { preventScroll: n }) {
        if (
          ((this.preventScrollDelay =
            typeof n == "number" ? n : n || (n === void 0 && t) ? fb : void 0),
          !(!nn.touchscreen || n === !1))
        )
          return t || (n !== void 0 ? "y" : void 0);
      },
      pointerCapture(
        t,
        e,
        { pointer: { capture: n = !0, buttons: r = 1, keys: s = !0 } = {} },
      ) {
        return (
          (this.pointerButtons = r),
          (this.keys = s),
          !this.pointerLock && this.device === "pointer" && n
        );
      },
      threshold(
        t,
        e,
        { filterTaps: n = !1, tapsThreshold: r = 3, axis: s = void 0 },
      ) {
        const i = Je.toVector(t, n ? r : s ? 1 : 0);
        return ((this.filterTaps = n), (this.tapsThreshold = r), i);
      },
      swipe({ velocity: t = mb, distance: e = gb, duration: n = vb } = {}) {
        return {
          velocity: this.transform(Je.toVector(t)),
          distance: this.transform(Je.toVector(e)),
          duration: n,
        };
      },
      delay(t = 0) {
        switch (t) {
          case !0:
            return pb;
          case !1:
            return 0;
          default:
            return t;
        }
      },
      axisThreshold(t) {
        return t ? et(et({}, wf), t) : wf;
      },
      keyboardDisplacement(t = yb) {
        return t;
      },
    },
  );
function eg(t) {
  const [e, n] = t.overflow,
    [r, s] = t._delta,
    [i, a] = t._direction;
  (((e < 0 && r > 0 && i < 0) || (e > 0 && r < 0 && i > 0)) &&
    (t._movement[0] = t._movementBound[0]),
    ((n < 0 && s > 0 && a < 0) || (n > 0 && s < 0 && a > 0)) &&
      (t._movement[1] = t._movementBound[1]));
}
const xb = 30,
  _b = 100;
class bb extends X0 {
  constructor(...e) {
    (super(...e), lt(this, "ingKey", "pinching"), lt(this, "aliasKey", "da"));
  }
  init() {
    ((this.state.offset = [1, 0]),
      (this.state.lastOffset = [1, 0]),
      (this.state._pointerEvents = new Map()));
  }
  reset() {
    super.reset();
    const e = this.state;
    ((e._touchIds = []),
      (e.canceled = !1),
      (e.cancel = this.cancel.bind(this)),
      (e.turns = 0));
  }
  computeOffset() {
    const { type: e, movement: n, lastOffset: r } = this.state;
    e === "wheel"
      ? (this.state.offset = Je.add(n, r))
      : (this.state.offset = [(1 + n[0]) * r[0], n[1] + r[1]]);
  }
  computeMovement() {
    const { offset: e, lastOffset: n } = this.state;
    this.state.movement = [e[0] / n[0], e[1] - n[1]];
  }
  axisIntent() {
    const e = this.state,
      [n, r] = e._movement;
    if (!e.axis) {
      const s = Math.abs(n) * xb - Math.abs(r);
      s < 0 ? (e.axis = "angle") : s > 0 && (e.axis = "scale");
    }
  }
  restrictToAxis(e) {
    this.config.lockDirection &&
      (this.state.axis === "scale"
        ? (e[1] = 0)
        : this.state.axis === "angle" && (e[0] = 0));
  }
  cancel() {
    const e = this.state;
    e.canceled ||
      setTimeout(() => {
        ((e.canceled = !0), (e._active = !1), this.compute(), this.emit());
      }, 0);
  }
  touchStart(e) {
    this.ctrl.setEventIds(e);
    const n = this.state,
      r = this.ctrl.touchIds;
    if ((n._active && n._touchIds.every((i) => r.has(i))) || r.size < 2) return;
    (this.start(e), (n._touchIds = Array.from(r).slice(0, 2)));
    const s = ff(e, n._touchIds);
    s && this.pinchStart(e, s);
  }
  pointerStart(e) {
    if (e.buttons != null && e.buttons % 2 !== 1) return;
    (this.ctrl.setEventIds(e), e.target.setPointerCapture(e.pointerId));
    const n = this.state,
      r = n._pointerEvents,
      s = this.ctrl.pointerIds;
    if (
      (n._active && Array.from(r.keys()).every((a) => s.has(a))) ||
      (r.size < 2 && r.set(e.pointerId, e), n._pointerEvents.size < 2)
    )
      return;
    this.start(e);
    const i = eu(...Array.from(r.values()));
    i && this.pinchStart(e, i);
  }
  pinchStart(e, n) {
    const r = this.state;
    ((r.origin = n.origin),
      this.computeValues([n.distance, n.angle]),
      this.computeInitial(),
      this.compute(e),
      this.emit());
  }
  touchMove(e) {
    if (!this.state._active) return;
    const n = ff(e, this.state._touchIds);
    n && this.pinchMove(e, n);
  }
  pointerMove(e) {
    const n = this.state._pointerEvents;
    if ((n.has(e.pointerId) && n.set(e.pointerId, e), !this.state._active))
      return;
    const r = eu(...Array.from(n.values()));
    r && this.pinchMove(e, r);
  }
  pinchMove(e, n) {
    const r = this.state,
      s = r._values[1],
      i = n.angle - s;
    let a = 0;
    (Math.abs(i) > 270 && (a += Math.sign(i)),
      this.computeValues([n.distance, n.angle - 360 * a]),
      (r.origin = n.origin),
      (r.turns = a),
      (r._movement = [
        r._values[0] / r._initial[0] - 1,
        r._values[1] - r._initial[1],
      ]),
      this.compute(e),
      this.emit());
  }
  touchEnd(e) {
    (this.ctrl.setEventIds(e),
      this.state._active &&
        this.state._touchIds.some((n) => !this.ctrl.touchIds.has(n)) &&
        ((this.state._active = !1), this.compute(e), this.emit()));
  }
  pointerEnd(e) {
    const n = this.state;
    this.ctrl.setEventIds(e);
    try {
      e.target.releasePointerCapture(e.pointerId);
    } catch {}
    (n._pointerEvents.has(e.pointerId) && n._pointerEvents.delete(e.pointerId),
      n._active &&
        n._pointerEvents.size < 2 &&
        ((n._active = !1), this.compute(e), this.emit()));
  }
  gestureStart(e) {
    e.cancelable && e.preventDefault();
    const n = this.state;
    n._active ||
      (this.start(e),
      this.computeValues([e.scale, e.rotation]),
      (n.origin = [e.clientX, e.clientY]),
      this.compute(e),
      this.emit());
  }
  gestureMove(e) {
    if ((e.cancelable && e.preventDefault(), !this.state._active)) return;
    const n = this.state;
    (this.computeValues([e.scale, e.rotation]),
      (n.origin = [e.clientX, e.clientY]));
    const r = n._movement;
    ((n._movement = [e.scale - 1, e.rotation]),
      (n._delta = Je.sub(n._movement, r)),
      this.compute(e),
      this.emit());
  }
  gestureEnd(e) {
    this.state._active &&
      ((this.state._active = !1), this.compute(e), this.emit());
  }
  wheel(e) {
    const n = this.config.modifierKey;
    (n && (Array.isArray(n) ? !n.find((r) => e[r]) : !e[n])) ||
      (this.state._active ? this.wheelChange(e) : this.wheelStart(e),
      this.timeoutStore.add("wheelEnd", this.wheelEnd.bind(this)));
  }
  wheelStart(e) {
    (this.start(e), this.wheelChange(e));
  }
  wheelChange(e) {
    "uv" in e || (e.cancelable && e.preventDefault());
    const r = this.state;
    ((r._delta = [(-Y0(e)[1] / _b) * r.offset[0], 0]),
      Je.addTo(r._movement, r._delta),
      eg(r),
      (this.state.origin = [e.clientX, e.clientY]),
      this.compute(e),
      this.emit());
  }
  wheelEnd() {
    this.state._active &&
      ((this.state._active = !1), this.compute(), this.emit());
  }
  bind(e) {
    const n = this.config.device;
    (n &&
      (e(n, "start", this[n + "Start"].bind(this)),
      e(n, "change", this[n + "Move"].bind(this)),
      e(n, "end", this[n + "End"].bind(this)),
      e(n, "cancel", this[n + "End"].bind(this)),
      e("lostPointerCapture", "", this[n + "End"].bind(this))),
      this.config.pinchOnWheel &&
        e("wheel", "", this.wheel.bind(this), { passive: !1 }));
  }
}
const kb = et(
  et({}, Z0),
  {},
  {
    device(t, e, { shared: n, pointer: { touch: r = !1 } = {} }) {
      if (n.target && !nn.touch && nn.gesture) return "gesture";
      if (nn.touch && r) return "touch";
      if (nn.touchscreen) {
        if (nn.pointer) return "pointer";
        if (nn.touch) return "touch";
      }
    },
    bounds(t, e, { scaleBounds: n = {}, angleBounds: r = {} }) {
      const s = (a) => {
          const l = gf(Mo(n, a), { min: -1 / 0, max: 1 / 0 });
          return [l.min, l.max];
        },
        i = (a) => {
          const l = gf(Mo(r, a), { min: -1 / 0, max: 1 / 0 });
          return [l.min, l.max];
        };
      return typeof n != "function" && typeof r != "function"
        ? [s(), i()]
        : (a) => [s(a), i(a)];
    },
    threshold(t, e, n) {
      return (
        (this.lockDirection = n.axis === "lock"),
        Je.toVector(t, this.lockDirection ? [0.1, 3] : 0)
      );
    },
    modifierKey(t) {
      return t === void 0 ? "ctrlKey" : t;
    },
    pinchOnWheel(t = !0) {
      return t;
    },
  },
);
class Sb extends ta {
  constructor(...e) {
    (super(...e), lt(this, "ingKey", "moving"));
  }
  move(e) {
    (this.config.mouseOnly && e.pointerType !== "mouse") ||
      (this.state._active ? this.moveChange(e) : this.moveStart(e),
      this.timeoutStore.add("moveEnd", this.moveEnd.bind(this)));
  }
  moveStart(e) {
    (this.start(e),
      this.computeValues(Ds(e)),
      this.compute(e),
      this.computeInitial(),
      this.emit());
  }
  moveChange(e) {
    if (!this.state._active) return;
    const n = Ds(e),
      r = this.state;
    ((r._delta = Je.sub(n, r._values)),
      Je.addTo(r._movement, r._delta),
      this.computeValues(n),
      this.compute(e),
      this.emit());
  }
  moveEnd(e) {
    this.state._active &&
      ((this.state._active = !1), this.compute(e), this.emit());
  }
  bind(e) {
    (e("pointer", "change", this.move.bind(this)),
      e("pointer", "leave", this.moveEnd.bind(this)));
  }
}
const Eb = et(et({}, Gr), {}, { mouseOnly: (t = !0) => t });
class jb extends ta {
  constructor(...e) {
    (super(...e), lt(this, "ingKey", "scrolling"));
  }
  scroll(e) {
    (this.state._active || this.start(e),
      this.scrollChange(e),
      this.timeoutStore.add("scrollEnd", this.scrollEnd.bind(this)));
  }
  scrollChange(e) {
    e.cancelable && e.preventDefault();
    const n = this.state,
      r = Q1(e);
    ((n._delta = Je.sub(r, n._values)),
      Je.addTo(n._movement, n._delta),
      this.computeValues(r),
      this.compute(e),
      this.emit());
  }
  scrollEnd() {
    this.state._active &&
      ((this.state._active = !1), this.compute(), this.emit());
  }
  bind(e) {
    e("scroll", "", this.scroll.bind(this));
  }
}
const Tb = Gr;
class Nb extends ta {
  constructor(...e) {
    (super(...e), lt(this, "ingKey", "wheeling"));
  }
  wheel(e) {
    (this.state._active || this.start(e),
      this.wheelChange(e),
      this.timeoutStore.add("wheelEnd", this.wheelEnd.bind(this)));
  }
  wheelChange(e) {
    const n = this.state;
    ((n._delta = Y0(e)),
      Je.addTo(n._movement, n._delta),
      eg(n),
      this.compute(e),
      this.emit());
  }
  wheelEnd() {
    this.state._active &&
      ((this.state._active = !1), this.compute(), this.emit());
  }
  bind(e) {
    e("wheel", "", this.wheel.bind(this));
  }
}
const Cb = Gr;
class Rb extends ta {
  constructor(...e) {
    (super(...e), lt(this, "ingKey", "hovering"));
  }
  enter(e) {
    (this.config.mouseOnly && e.pointerType !== "mouse") ||
      (this.start(e), this.computeValues(Ds(e)), this.compute(e), this.emit());
  }
  leave(e) {
    if (this.config.mouseOnly && e.pointerType !== "mouse") return;
    const n = this.state;
    if (!n._active) return;
    n._active = !1;
    const r = Ds(e);
    ((n._movement = n._delta = Je.sub(r, n._values)),
      this.computeValues(r),
      this.compute(e),
      (n.delta = n.movement),
      this.emit());
  }
  bind(e) {
    (e("pointer", "enter", this.enter.bind(this)),
      e("pointer", "leave", this.leave.bind(this)));
  }
}
const Ab = et(et({}, Gr), {}, { mouseOnly: (t = !0) => t }),
  ed = new Map(),
  tu = new Map();
function Pb(t) {
  (ed.set(t.key, t.engine), tu.set(t.key, t.resolver));
}
const Ob = { key: "drag", engine: ob, resolver: wb },
  Ib = { key: "hover", engine: Rb, resolver: Ab },
  Lb = { key: "move", engine: Sb, resolver: Eb },
  Mb = { key: "pinch", engine: bb, resolver: kb },
  $b = { key: "scroll", engine: jb, resolver: Tb },
  Db = { key: "wheel", engine: Nb, resolver: Cb };
function Ub(t, e) {
  if (t == null) return {};
  var n = {},
    r = Object.keys(t),
    s,
    i;
  for (i = 0; i < r.length; i++)
    ((s = r[i]), !(e.indexOf(s) >= 0) && (n[s] = t[s]));
  return n;
}
function Bb(t, e) {
  if (t == null) return {};
  var n = Ub(t, e),
    r,
    s;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(t);
    for (s = 0; s < i.length; s++)
      ((r = i[s]),
        !(e.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(t, r) &&
          (n[r] = t[r]));
  }
  return n;
}
const zb = {
    target(t) {
      if (t) return () => ("current" in t ? t.current : t);
    },
    enabled(t = !0) {
      return t;
    },
    window(t = nn.isBrowser ? window : void 0) {
      return t;
    },
    eventOptions({ passive: t = !0, capture: e = !1 } = {}) {
      return { passive: t, capture: e };
    },
    transform(t) {
      return t;
    },
  },
  Fb = ["target", "eventOptions", "window", "enabled", "transform"];
function Xa(t = {}, e) {
  const n = {};
  for (const [r, s] of Object.entries(e))
    switch (typeof s) {
      case "function":
        n[r] = s.call(n, t[r], r, t);
        break;
      case "object":
        n[r] = Xa(t[r], s);
        break;
      case "boolean":
        s && (n[r] = t[r]);
        break;
    }
  return n;
}
function Hb(t, e, n = {}) {
  const r = t,
    { target: s, eventOptions: i, window: a, enabled: l, transform: c } = r,
    u = Bb(r, Fb);
  if (
    ((n.shared = Xa(
      { target: s, eventOptions: i, window: a, enabled: l, transform: c },
      zb,
    )),
    e)
  ) {
    const d = tu.get(e);
    n[e] = Xa(et({ shared: n.shared }, u), d);
  } else
    for (const d in u) {
      const f = tu.get(d);
      f && (n[d] = Xa(et({ shared: n.shared }, u[d]), f));
    }
  return n;
}
class tg {
  constructor(e, n) {
    (lt(this, "_listeners", new Set()),
      (this._ctrl = e),
      (this._gestureKey = n));
  }
  add(e, n, r, s, i) {
    const a = this._listeners,
      l = J1(n, r),
      c = this._gestureKey
        ? this._ctrl.config[this._gestureKey].eventOptions
        : {},
      u = et(et({}, c), i);
    e.addEventListener(l, s, u);
    const d = () => {
      (e.removeEventListener(l, s, u), a.delete(d));
    };
    return (a.add(d), d);
  }
  clean() {
    (this._listeners.forEach((e) => e()), this._listeners.clear());
  }
}
class Vb {
  constructor() {
    lt(this, "_timeouts", new Map());
  }
  add(e, n, r = 140, ...s) {
    (this.remove(e), this._timeouts.set(e, window.setTimeout(n, r, ...s)));
  }
  remove(e) {
    const n = this._timeouts.get(e);
    n && window.clearTimeout(n);
  }
  clean() {
    (this._timeouts.forEach((e) => void window.clearTimeout(e)),
      this._timeouts.clear());
  }
}
class Wb {
  constructor(e) {
    (lt(this, "gestures", new Set()),
      lt(this, "_targetEventStore", new tg(this)),
      lt(this, "gestureEventStores", {}),
      lt(this, "gestureTimeoutStores", {}),
      lt(this, "handlers", {}),
      lt(this, "config", {}),
      lt(this, "pointerIds", new Set()),
      lt(this, "touchIds", new Set()),
      lt(this, "state", {
        shared: { shiftKey: !1, metaKey: !1, ctrlKey: !1, altKey: !1 },
      }),
      qb(this, e));
  }
  setEventIds(e) {
    if (ol(e)) return ((this.touchIds = new Set(Z1(e))), this.touchIds);
    if ("pointerId" in e)
      return (
        e.type === "pointerup" || e.type === "pointercancel"
          ? this.pointerIds.delete(e.pointerId)
          : e.type === "pointerdown" && this.pointerIds.add(e.pointerId),
        this.pointerIds
      );
  }
  applyHandlers(e, n) {
    ((this.handlers = e), (this.nativeHandlers = n));
  }
  applyConfig(e, n) {
    this.config = Hb(e, n, this.config);
  }
  clean() {
    this._targetEventStore.clean();
    for (const e of this.gestures)
      (this.gestureEventStores[e].clean(),
        this.gestureTimeoutStores[e].clean());
  }
  effect() {
    return (
      this.config.shared.target && this.bind(),
      () => this._targetEventStore.clean()
    );
  }
  bind(...e) {
    const n = this.config.shared,
      r = {};
    let s;
    if (!(n.target && ((s = n.target()), !s))) {
      if (n.enabled) {
        for (const a of this.gestures) {
          const l = this.config[a],
            c = xf(r, l.eventOptions, !!s);
          if (l.enabled) {
            const u = ed.get(a);
            new u(this, e, a).bind(c);
          }
        }
        const i = xf(r, n.eventOptions, !!s);
        for (const a in this.nativeHandlers)
          i(
            a,
            "",
            (l) =>
              this.nativeHandlers[a](
                et(et({}, this.state.shared), {}, { event: l, args: e }),
              ),
            void 0,
            !0,
          );
      }
      for (const i in r) r[i] = nb(...r[i]);
      if (!s) return r;
      for (const i in r) {
        const { device: a, capture: l, passive: c } = G1(i);
        this._targetEventStore.add(s, a, "", r[i], { capture: l, passive: c });
      }
    }
  }
}
function es(t, e) {
  (t.gestures.add(e),
    (t.gestureEventStores[e] = new tg(t, e)),
    (t.gestureTimeoutStores[e] = new Vb()));
}
function qb(t, e) {
  (e.drag && es(t, "drag"),
    e.wheel && es(t, "wheel"),
    e.scroll && es(t, "scroll"),
    e.move && es(t, "move"),
    e.pinch && es(t, "pinch"),
    e.hover && es(t, "hover"));
}
const xf =
    (t, e, n) =>
    (r, s, i, a = {}, l = !1) => {
      var c, u;
      const d = (c = a.capture) !== null && c !== void 0 ? c : e.capture,
        f = (u = a.passive) !== null && u !== void 0 ? u : e.passive;
      let h = l ? r : q1(r, s, d);
      (n && f && (h += "Passive"), (t[h] = t[h] || []), t[h].push(i));
    },
  Kb = /^on(Drag|Wheel|Scroll|Move|Pinch|Hover)/;
function Gb(t) {
  const e = {},
    n = {},
    r = new Set();
  for (let s in t)
    Kb.test(s) ? (r.add(RegExp.lastMatch), (n[s] = t[s])) : (e[s] = t[s]);
  return [n, e, r];
}
function ts(t, e, n, r, s, i) {
  if (!t.has(n) || !ed.has(r)) return;
  const a = n + "Start",
    l = n + "End",
    c = (u) => {
      let d;
      return (
        u.first && a in e && e[a](u),
        n in e && (d = e[n](u)),
        u.last && l in e && e[l](u),
        d
      );
    };
  ((s[r] = c), (i[r] = i[r] || {}));
}
function Jb(t, e) {
  const [n, r, s] = Gb(t),
    i = {};
  return (
    ts(s, n, "onDrag", "drag", i, e),
    ts(s, n, "onWheel", "wheel", i, e),
    ts(s, n, "onScroll", "scroll", i, e),
    ts(s, n, "onPinch", "pinch", i, e),
    ts(s, n, "onMove", "move", i, e),
    ts(s, n, "onHover", "hover", i, e),
    { handlers: i, config: e, nativeHandlers: r }
  );
}
function Yb(t, e = {}, n, r) {
  const s = cl.useMemo(() => new Wb(t), []);
  if (
    (s.applyHandlers(t, r),
    s.applyConfig(e, n),
    cl.useEffect(s.effect.bind(s)),
    cl.useEffect(() => s.clean.bind(s), []),
    e.target === void 0)
  )
    return s.bind.bind(s);
}
function Xb(t) {
  return (
    t.forEach(Pb),
    function (n, r) {
      const { handlers: s, nativeHandlers: i, config: a } = Jb(n, r || {});
      return Yb(s, a, void 0, i);
    }
  );
}
function Zb(t, e) {
  return Xb([Ob, Mb, $b, Db, Lb, Ib])(t, e || {});
}
const Qb = [],
  Ra = {
    maxVerticalRotationDeg: 5,
    dragSensitivity: 20,
    enlargeTransitionMs: 300,
    segments: 35,
  },
  Qn = (t, e, n) => Math.min(Math.max(t, e), n),
  _f = (t) => ((t % 360) + 360) % 360,
  bf = (t) => ((((t + 180) % 360) + 360) % 360) - 180,
  Aa = (t, e, n) => {
    const r = t.dataset[e] ?? t.getAttribute(`data-${e}`),
      s = r == null ? NaN : parseFloat(r);
    return Number.isFinite(s) ? s : n;
  };
function e2(t, e) {
  const n = Array.from({ length: e }, (u, d) => -37 + d * 2),
    r = [-4, -2, 0, 2, 4],
    s = [-3, -1, 1, 3, 5],
    i = n.flatMap((u, d) =>
      (d % 2 === 0 ? r : s).map((h) => ({ x: u, y: h, sizeX: 2, sizeY: 2 })),
    ),
    a = i.length;
  if (t.length === 0) return i.map((u) => ({ ...u, src: "", alt: "" }));
  t.length > a &&
    console.warn(
      `[DomeGallery] Provided image count (${t.length}) exceeds available tiles (${a}). Some images will not be shown.`,
    );
  const l = t.map((u) =>
      typeof u == "string"
        ? { src: u, alt: "" }
        : { src: u.src || "", alt: u.alt || "" },
    ),
    c = Array.from({ length: a }, (u, d) => l[d % l.length]);
  for (let u = 1; u < c.length; u++)
    if (c[u].src === c[u - 1].src) {
      for (let d = u + 1; d < c.length; d++)
        if (c[d].src !== c[u].src) {
          const f = c[u];
          ((c[u] = c[d]), (c[d] = f));
          break;
        }
    }
  return i.map((u, d) => ({ ...u, src: c[d].src, alt: c[d].alt }));
}
function t2(t, e, n, r, s) {
  const i = 360 / s / 2,
    a = i * (t + (n - 1) / 2);
  return { rotateX: i * (e - (r - 1) / 2), rotateY: a };
}
function n2({
  images: t = Qb,
  fit: e = 0.5,
  fitBasis: n = "auto",
  minRadius: r = 600,
  maxRadius: s = 1 / 0,
  padFactor: i = 0.25,
  overlayBlurColor: a = "#120F17",
  maxVerticalRotationDeg: l = Ra.maxVerticalRotationDeg,
  dragSensitivity: c = Ra.dragSensitivity,
  enlargeTransitionMs: u = Ra.enlargeTransitionMs,
  segments: d = Ra.segments,
  dragDampening: f = 2,
  openedImageWidth: h = "400px",
  openedImageHeight: p = "400px",
  imageBorderRadius: v = "30px",
  openedImageBorderRadius: x = "30px",
  grayscale: _ = !0,
}) {
  const m = b.useRef(null),
    g = b.useRef(null),
    y = b.useRef(null),
    E = b.useRef(null),
    R = b.useRef(null),
    A = b.useRef(null),
    P = b.useRef(null),
    U = b.useRef(null),
    te = b.useRef({ x: 0, y: 0 }),
    z = b.useRef({ x: 0, y: 0 }),
    Se = b.useRef(null),
    Ee = b.useRef(!1),
    ne = b.useRef(!1),
    be = b.useRef(null),
    fe = b.useRef(!1),
    Le = b.useRef(0),
    Me = b.useRef(0),
    O = b.useRef(!1),
    Q = b.useCallback(() => {
      O.current ||
        ((O.current = !0), document.body.classList.add("dg-scroll-lock"));
    }, []),
    Z = b.useCallback(() => {
      var k;
      O.current &&
        ((k = m.current) == null
          ? void 0
          : k.getAttribute("data-enlarging")) !== "true" &&
        ((O.current = !1), document.body.classList.remove("dg-scroll-lock"));
    }, []),
    Ne = b.useMemo(() => e2(t, d), [t, d]),
    xe = (k, D) => {
      const ke = y.current;
      ke &&
        (ke.style.transform = `translateZ(calc(var(--radius) * -1)) rotateX(${k}deg) rotateY(${D}deg)`);
    },
    K = b.useRef(null);
  (b.useEffect(() => {
    const k = m.current;
    if (!k) return;
    const D = new ResizeObserver((ke) => {
      var w;
      const oe = ke[0].contentRect,
        ue = Math.max(1, oe.width),
        we = Math.max(1, oe.height),
        ve = Math.min(ue, we),
        _e = Math.max(ue, we),
        ye = ue / we;
      let pe;
      switch (n) {
        case "min":
          pe = ve;
          break;
        case "max":
          pe = _e;
          break;
        case "width":
          pe = ue;
          break;
        case "height":
          pe = we;
          break;
        default:
          pe = ye >= 1.3 ? ue : ve;
      }
      let N = pe * e;
      const V = we * 1.35;
      ((N = Math.min(N, V)), (N = Qn(N, r, s)), (K.current = Math.round(N)));
      const S = Math.max(8, Math.round(ve * i));
      (k.style.setProperty("--radius", `${K.current}px`),
        k.style.setProperty("--viewer-pad", `${S}px`),
        k.style.setProperty("--overlay-blur-color", a),
        k.style.setProperty("--tile-radius", v),
        k.style.setProperty("--enlarge-radius", x),
        k.style.setProperty("--image-filter", _ ? "grayscale(1)" : "none"),
        xe(te.current.x, te.current.y));
      const T = (w = R.current) == null ? void 0 : w.querySelector(".enlarge");
      if (T && E.current && g.current) {
        const L = E.current.getBoundingClientRect(),
          me = g.current.getBoundingClientRect();
        if (h && p) {
          const De = document.createElement("div");
          ((De.style.cssText = `position: absolute; width: ${h}; height: ${p}; visibility: hidden;`),
            document.body.appendChild(De));
          const Ue = De.getBoundingClientRect();
          document.body.removeChild(De);
          const jt = L.left - me.left + (L.width - Ue.width) / 2,
            it = L.top - me.top + (L.height - Ue.height) / 2;
          ((T.style.left = `${jt}px`), (T.style.top = `${it}px`));
        } else
          ((T.style.left = `${L.left - me.left}px`),
            (T.style.top = `${L.top - me.top}px`),
            (T.style.width = `${L.width}px`),
            (T.style.height = `${L.height}px`));
      }
    });
    return (D.observe(k), () => D.disconnect());
  }, [e, n, r, s, i, a, _, v, x, h, p]),
    b.useEffect(() => {
      xe(te.current.x, te.current.y);
    }, []));
  const J = b.useCallback(() => {
      be.current && (cancelAnimationFrame(be.current), (be.current = null));
    }, []),
    de = b.useCallback(
      (k, D) => {
        let oe = Qn(k, -1.4, 1.4) * 80,
          ue = Qn(D, -1.4, 1.4) * 80,
          we = 0;
        const ve = Qn(f ?? 0.6, 0, 1),
          _e = 0.94 + 0.055 * ve,
          ye = 0.015 - 0.01 * ve,
          pe = Math.round(90 + 270 * ve),
          N = () => {
            if (
              ((oe *= _e), (ue *= _e), Math.abs(oe) < ye && Math.abs(ue) < ye)
            ) {
              be.current = null;
              return;
            }
            if (++we > pe) {
              be.current = null;
              return;
            }
            const V = Qn(te.current.x - ue / 200, -l, l),
              S = bf(te.current.y + oe / 200);
            ((te.current = { x: V, y: S }),
              xe(V, S),
              (be.current = requestAnimationFrame(N)));
          };
        (J(), (be.current = requestAnimationFrame(N)));
      },
      [f, l, J],
    );
  (Zb(
    {
      onDragStart: ({ event: k }) => {
        if (P.current) return;
        J();
        const D = k;
        ((Ee.current = !0),
          (ne.current = !1),
          (z.current = { ...te.current }),
          (Se.current = { x: D.clientX, y: D.clientY }));
      },
      onDrag: ({
        event: k,
        last: D,
        velocity: ke = [0, 0],
        direction: oe = [0, 0],
        movement: ue,
      }) => {
        if (P.current || !Ee.current || !Se.current) return;
        const we = k,
          ve = we.clientX - Se.current.x,
          _e = we.clientY - Se.current.y;
        ne.current || (ve * ve + _e * _e > 16 && (ne.current = !0));
        const ye = Qn(z.current.x - _e / c, -l, l),
          pe = bf(z.current.y + ve / c);
        if (
          ((te.current.x !== ye || te.current.y !== pe) &&
            ((te.current = { x: ye, y: pe }), xe(ye, pe)),
          D)
        ) {
          Ee.current = !1;
          let [N, V] = ke;
          const [S, T] = oe;
          let w = N * S,
            L = V * T;
          if (Math.abs(w) < 0.001 && Math.abs(L) < 0.001 && Array.isArray(ue)) {
            const [me, je] = ue;
            ((w = Qn((me / c) * 0.02, -1.2, 1.2)),
              (L = Qn((je / c) * 0.02, -1.2, 1.2)));
          }
          ((Math.abs(w) > 0.005 || Math.abs(L) > 0.005) && de(w, L),
            ne.current && (Me.current = performance.now()),
            (ne.current = !1));
        }
      },
    },
    { target: g, eventOptions: { passive: !0 } },
  ),
    b.useEffect(() => {
      const k = A.current;
      if (!k) return;
      const D = () => {
        var L, me;
        if (performance.now() - Le.current < 250) return;
        const oe = P.current;
        if (!oe) return;
        const ue = oe.parentElement,
          we = (L = R.current) == null ? void 0 : L.querySelector(".enlarge");
        if (!we) return;
        const ve = ue.querySelector(".item__image--reference"),
          _e = U.current;
        if (!_e) {
          (we.remove(),
            ve && ve.remove(),
            ue.style.setProperty("--rot-y-delta", "0deg"),
            ue.style.setProperty("--rot-x-delta", "0deg"),
            (oe.style.visibility = ""),
            (oe.style.zIndex = 0),
            (P.current = null),
            (me = m.current) == null || me.removeAttribute("data-enlarging"),
            (fe.current = !1),
            Z());
          return;
        }
        const ye = we.getBoundingClientRect(),
          pe = m.current.getBoundingClientRect(),
          N = {
            left: _e.left - pe.left,
            top: _e.top - pe.top,
            width: _e.width,
            height: _e.height,
          },
          V = {
            left: ye.left - pe.left,
            top: ye.top - pe.top,
            width: ye.width,
            height: ye.height,
          },
          S = document.createElement("div");
        ((S.className = "enlarge-closing"),
          (S.style.cssText = `position:absolute;left:${V.left}px;top:${V.top}px;width:${V.width}px;height:${V.height}px;z-index:9999;border-radius: var(--enlarge-radius, 32px);overflow:hidden;box-shadow:0 10px 30px rgba(0,0,0,.35);transition:all ${u}ms ease-out;pointer-events:none;margin:0;transform:none;`));
        const T = we.querySelector("img");
        if (T) {
          const je = T.cloneNode();
          ((je.style.cssText = "width:100%;height:100%;object-fit:cover;"),
            S.appendChild(je));
        }
        (we.remove(),
          m.current.appendChild(S),
          S.getBoundingClientRect(),
          requestAnimationFrame(() => {
            ((S.style.left = N.left + "px"),
              (S.style.top = N.top + "px"),
              (S.style.width = N.width + "px"),
              (S.style.height = N.height + "px"),
              (S.style.opacity = "0"));
          }));
        const w = () => {
          (S.remove(),
            (U.current = null),
            ve && ve.remove(),
            (ue.style.transition = "none"),
            (oe.style.transition = "none"),
            ue.style.setProperty("--rot-y-delta", "0deg"),
            ue.style.setProperty("--rot-x-delta", "0deg"),
            requestAnimationFrame(() => {
              var je;
              ((oe.style.visibility = ""),
                (oe.style.opacity = "0"),
                (oe.style.zIndex = 0),
                (P.current = null),
                (je = m.current) == null ||
                  je.removeAttribute("data-enlarging"),
                requestAnimationFrame(() => {
                  ((ue.style.transition = ""),
                    (oe.style.transition = "opacity 300ms ease-out"),
                    requestAnimationFrame(() => {
                      ((oe.style.opacity = "1"),
                        setTimeout(() => {
                          var De;
                          ((oe.style.transition = ""),
                            (oe.style.opacity = ""),
                            (fe.current = !1),
                            !Ee.current &&
                              ((De = m.current) == null
                                ? void 0
                                : De.getAttribute("data-enlarging")) !==
                                "true" &&
                              document.body.classList.remove("dg-scroll-lock"));
                        }, 300));
                    }));
                }));
            }));
        };
        S.addEventListener("transitionend", w, { once: !0 });
      };
      k.addEventListener("click", D);
      const ke = (oe) => {
        oe.key === "Escape" && D();
      };
      return (
        window.addEventListener("keydown", ke),
        () => {
          (k.removeEventListener("click", D),
            window.removeEventListener("keydown", ke));
        }
      );
    }, [u, Z]));
  const j = b.useCallback(
      (k) => {
        var xn, _n, mt;
        if (fe.current) return;
        ((fe.current = !0), (Le.current = performance.now()), Q());
        const D = k.parentElement;
        ((P.current = k), k.setAttribute("data-focused", "true"));
        const ke = Aa(D, "offsetX", 0),
          oe = Aa(D, "offsetY", 0),
          ue = Aa(D, "sizeX", 2),
          we = Aa(D, "sizeY", 2),
          ve = t2(ke, oe, ue, we, d),
          _e = _f(ve.rotateY),
          ye = _f(te.current.y);
        let pe = -(_e + ye) % 360;
        pe < -180 && (pe += 360);
        const N = -ve.rotateX - te.current.x;
        (D.style.setProperty("--rot-y-delta", `${pe}deg`),
          D.style.setProperty("--rot-x-delta", `${N}deg`));
        const V = document.createElement("div");
        ((V.className = "item__image item__image--reference"),
          (V.style.opacity = "0"),
          (V.style.transform = `rotateX(${-ve.rotateX}deg) rotateY(${-ve.rotateY}deg)`),
          D.appendChild(V),
          V.offsetHeight);
        const S = V.getBoundingClientRect(),
          T = (xn = g.current) == null ? void 0 : xn.getBoundingClientRect(),
          w = (_n = E.current) == null ? void 0 : _n.getBoundingClientRect();
        if (!T || !w || S.width <= 0 || S.height <= 0) {
          ((fe.current = !1), (P.current = null), D.removeChild(V), Z());
          return;
        }
        ((U.current = {
          left: S.left,
          top: S.top,
          width: S.width,
          height: S.height,
        }),
          (k.style.visibility = "hidden"),
          (k.style.zIndex = 0));
        const L = document.createElement("div");
        ((L.className = "enlarge"),
          (L.style.position = "absolute"),
          (L.style.left = w.left - T.left + "px"),
          (L.style.top = w.top - T.top + "px"),
          (L.style.width = w.width + "px"),
          (L.style.height = w.height + "px"),
          (L.style.opacity = "0"),
          (L.style.zIndex = "30"),
          (L.style.willChange = "transform, opacity"),
          (L.style.transformOrigin = "top left"),
          (L.style.transition = `transform ${u}ms ease, opacity ${u}ms ease`));
        const me =
            D.dataset.src ||
            ((mt = k.querySelector("img")) == null ? void 0 : mt.src) ||
            "",
          je = document.createElement("img");
        ((je.src = me), L.appendChild(je), R.current.appendChild(L));
        const De = S.left - w.left,
          Ue = S.top - w.top,
          jt = S.width / w.width,
          it = S.height / w.height,
          Zt = isFinite(jt) && jt > 0 ? jt : 1,
          zt = isFinite(it) && it > 0 ? it : 1;
        if (
          ((L.style.transform = `translate(${De}px, ${Ue}px) scale(${Zt}, ${zt})`),
          setTimeout(() => {
            var C;
            L.parentElement &&
              ((L.style.opacity = "1"),
              (L.style.transform = "translate(0px, 0px) scale(1, 1)"),
              (C = m.current) == null ||
                C.setAttribute("data-enlarging", "true"));
          }, 16),
          h || p)
        ) {
          const C = (I) => {
            if (I.propertyName !== "transform") return;
            L.removeEventListener("transitionend", C);
            const q = L.style.transition;
            L.style.transition = "none";
            const re = h || `${w.width}px`,
              he = p || `${w.height}px`;
            ((L.style.width = re), (L.style.height = he));
            const ge = L.getBoundingClientRect();
            ((L.style.width = w.width + "px"),
              (L.style.height = w.height + "px"),
              L.offsetWidth,
              (L.style.transition = `left ${u}ms ease, top ${u}ms ease, width ${u}ms ease, height ${u}ms ease`));
            const se = w.left - T.left + (w.width - ge.width) / 2,
              Fe = w.top - T.top + (w.height - ge.height) / 2;
            requestAnimationFrame(() => {
              ((L.style.left = `${se}px`),
                (L.style.top = `${Fe}px`),
                (L.style.width = re),
                (L.style.height = he));
            });
            const ae = () => {
              (L.removeEventListener("transitionend", ae),
                (L.style.transition = q));
            };
            L.addEventListener("transitionend", ae, { once: !0 });
          };
          L.addEventListener("transitionend", C);
        }
      },
      [u, Q, p, h, d, Z],
    ),
    M = b.useCallback(
      (k) => {
        Ee.current ||
          ne.current ||
          performance.now() - Me.current < 80 ||
          fe.current ||
          j(k.currentTarget);
      },
      [j],
    ),
    H = b.useCallback(
      (k) => {
        k.pointerType === "touch" &&
          (Ee.current ||
            ne.current ||
            performance.now() - Me.current < 80 ||
            fe.current ||
            j(k.currentTarget));
      },
      [j],
    );
  return (
    b.useEffect(
      () => () => {
        document.body.classList.remove("dg-scroll-lock");
      },
      [],
    ),
    o.jsx("div", {
      ref: m,
      className: "sphere-root",
      style: {
        "--segments-x": d,
        "--segments-y": d,
        "--overlay-blur-color": a,
        "--tile-radius": v,
        "--enlarge-radius": x,
        "--image-filter": _ ? "grayscale(1)" : "none",
      },
      children: o.jsxs("main", {
        ref: g,
        className: "sphere-main",
        children: [
          o.jsx("div", {
            className: "stage",
            children: o.jsx("div", {
              ref: y,
              className: "sphere",
              children: Ne.map((k, D) =>
                o.jsx(
                  "div",
                  {
                    className: "item",
                    "data-src": k.src,
                    "data-offset-x": k.x,
                    "data-offset-y": k.y,
                    "data-size-x": k.sizeX,
                    "data-size-y": k.sizeY,
                    style: {
                      "--offset-x": k.x,
                      "--offset-y": k.y,
                      "--item-size-x": k.sizeX,
                      "--item-size-y": k.sizeY,
                    },
                    children: o.jsx("div", {
                      className: "item__image",
                      role: "button",
                      tabIndex: 0,
                      "aria-label": k.alt || "Open image",
                      onClick: M,
                      onPointerUp: H,
                      children: o.jsx("img", {
                        src: k.src,
                        draggable: !1,
                        alt: k.alt,
                      }),
                    }),
                  },
                  `${k.x},${k.y},${D}`,
                ),
              ),
            }),
          }),
          o.jsx("div", { className: "overlay" }),
          o.jsx("div", { className: "overlay overlay--blur" }),
          o.jsx("div", { className: "edge-fade edge-fade--top" }),
          o.jsx("div", { className: "edge-fade edge-fade--bottom" }),
          o.jsxs("div", {
            className: "viewer",
            ref: R,
            children: [
              o.jsx("div", { ref: A, className: "scrim" }),
              o.jsx("div", { ref: E, className: "frame" }),
            ],
          }),
        ],
      }),
    })
  );
}
const ng = "tale.photoMode";
function r2() {
  try {
    return localStorage.getItem(ng) === "wall" ? "wall" : "dome";
  } catch {
    return "dome";
  }
}
function s2() {
  const {
      photos: t,
      loaded: e,
      addFiles: n,
      remove: r,
      clearAll: s,
      cloud: i,
    } = q0(),
    [a, l] = b.useState({}),
    [c, u] = b.useState(null),
    [d, f] = b.useState(r2),
    h = b.useRef(null);
  (b.useEffect(() => {
    const _ = {};
    for (const m of t)
      if (m.url) _[m.id] = m.url;
      else if (m.blob)
        try {
          _[m.id] = URL.createObjectURL(m.blob);
        } catch {}
    return (
      l(_),
      () => {
        Object.values(_).forEach((m) => {
          m.startsWith("blob:") && URL.revokeObjectURL(m);
        });
      }
    );
  }, [t]),
    b.useEffect(() => {
      if (!c) return;
      const _ = (m) => {
        m.key === "Escape" && u(null);
      };
      return (
        window.addEventListener("keydown", _),
        () => window.removeEventListener("keydown", _)
      );
    }, [c]));
  async function p(event){
    const files=Array.from(event.target.files||[]);event.target.value='';
    if(!files.length)return;
    if(files.some(file=>file.size>20*1024*1024)){announce('单张照片不能超过 20 MB');return;}
    if(files.some(file=>!/^image\/(jpeg|png|webp|gif|avif)$/.test(file.type))){announce('请选择 JPG、PNG、WebP、GIF 或 AVIF 照片');return;}
    announce('正在保存照片…');
    try {await n(files);announce('照片已保存');}catch{announce('部分照片保存失败，请检查连接和存储空间后重试');}
  }
  function v(_) {
    f(_);
    try {
      localStorage.setItem(ng, _);
    } catch {}
  }
  const x = t
    .filter((_) => a[_.id])
    .map((_) => ({ src: a[_.id], alt: _.caption || _.name || "" }));
  return o.jsxs("div", {
    className: "card",
    children: [
      o.jsxs("div", {
        className: "view-head",
        children: [
          o.jsx("h2", { className: "view-title", children: "我们的照片墙" }),
          o.jsxs("p", {
            className: "view-sub",
            children: [
              d === "dome"
                ? "拖动穹顶环视，点一张放大 · "
                : "点任意一张看大图 · ",
              i ? "已同步到云端共享相册" : "仅存于这台设备",
            ],
          }),
        ],
      }),
      o.jsxs("div", {
        className: "photo-actions",
        children: [
          o.jsx("button", {
            className: "primary-btn",
            onClick: () => {
              var _;
              return (_ = h.current) == null ? void 0 : _.click();
            },
            children: "＋ 添加照片",
          }),
          t.length > 1 &&
            o.jsxs("div", {
              className: "photo-modes",
              children: [
                o.jsx("button", {
                  type: "button",
                  className: "photo-mode" + (d === "dome" ? " active" : ""),
                  onClick: () => v("dome"),
                  children: "✦ 穹顶",
                }),
                o.jsx("button", {
                  type: "button",
                  className: "photo-mode" + (d === "wall" ? " active" : ""),
                  onClick: () => v("wall"),
                  children: "▦ 瀑布",
                }),
              ],
            }),
          t.length > 0 &&
            o.jsx("button", {
              className: "ghost-btn",
              onClick: () => {
                confirm("确定清空全部照片？此操作不可恢复。") && s().catch(()=>announce("清空失败，请重试"));
              },
              children: "清空",
            }),
          o.jsx("input", {
            ref: h,
            type: "file",
            accept: "image/*",
            multiple: !0,
            hidden: !0,
            onChange: p,
          }),
        ],
      }),
      e
        ? t.length === 0
          ? o.jsxs("div", {
              className: "empty",
              children: [
                o.jsx("div", { className: "empty-emoji", children: "📸" }),
                o.jsx("p", {
                  className: "empty-title",
                  children: "还没有照片",
                }),
                o.jsx("p", {
                  className: "empty-sub",
                  children: "点上方按钮，把这些瞬间贴满这面墙",
                }),
              ],
            })
          : d === "dome" && x.length > 0
            ? o.jsxs("div", {
                className: "dome-stage",
                children: [
                  o.jsx(n2, {
                    images: x,
                    grayscale: !1,
                    openedImageWidth: "min(78vw, 420px)",
                    openedImageHeight: "min(78vw, 420px)",
                  }),
                  o.jsx("p", {
                    className: "dome-hint",
                    children: "按住拖动可以环视这一圈回忆",
                  }),
                ],
              })
            : o.jsx("div", {
                className: "masonry",
                children: t.map((_) =>
                  o.jsxs(
                    "figure",
                    {
                      className: "masonry-item",
                      children: [
                        a[_.id]
                          ? o.jsx("img", {
                              src: a[_.id],
                              alt: _.caption || _.name || "",
                              loading: "lazy",
                              onClick: () => u(_),
                            })
                          : o.jsx("div", {
                              className: "masonry-fallback",
                              children: "🖼️",
                            }),
                        o.jsx("button", {
                          className: "masonry-del",
                          title: "删除这张",
                          "aria-label": "删除这张",
                          onClick: () => {
                            confirm("删除这张照片？") && r(_.id).catch(()=>announce("删除失败，请重试"));
                          },
                          children: "×",
                        }),
                      ],
                    },
                    _.id,
                  ),
                ),
              })
        : o.jsx("p", { className: "view-sub", children: "加载中…" }),
      c &&
        a[c.id] &&
        o.jsx("div", {
          className: "lightbox",
          onClick: () => u(null),
          children: o.jsxs("div", {
            className: "lightbox-inner",
            onClick: (_) => _.stopPropagation(),
            children: [
              o.jsx("img", { src: a[c.id], alt: c.caption || c.name || "" }),
              (c.caption || c.name) &&
                o.jsx("p", {
                  className: "lightbox-cap",
                  children: c.caption || c.name,
                }),
              o.jsx("div", {
                className: "lightbox-actions",
                children: o.jsx("button", {
                  className: "mini-btn",
                  onClick: () => u(null),
                  children: "关闭",
                }),
              }),
            ],
          }),
        }),
    ],
  });
}
const kf = [
    "#1c4568",
    "#2f6f9e",
    "#d78b6a",
    "#e0866b",
    "#eebd55",
    "#79bda4",
    "#b3a4d2",
    "#4a89b6",
  ],
  Hl = [
    { id: "rock", label: "石头", emoji: "✊" },
    { id: "paper", label: "布", emoji: "✋" },
    { id: "scissors", label: "剪刀", emoji: "✌️" },
  ],
  i2 = { rock: "scissors", scissors: "paper", paper: "rock" },
  Sf = [
    "如果只能带一样东西去荒岛，你会带什么？",
    "我们第一次见面时，你对我第一印象是什么？",
    "最近一次偷偷想我，是在什么时候？",
    "我身上你最喜欢的地方是哪里？",
    "你最想和我一起完成的一个愿望是什么？",
    "上一段让我们笑到肚子疼的回忆是什么？",
    "如果中彩票，第一件想给我们买的是什么？",
    "你最舍不得删掉的我们的聊天记录是哪一段？",
  ],
  Ef = [
    "用最深情的语气对屏幕说一句「我好喜欢你」",
    "给 TA 发一条只有 emoji 的表白",
    "模仿对方的一个小习惯，让 TA 猜",
    "唱出你们定情曲的一句副歌",
    "闭眼抱住最近的人 10 秒",
    "用家乡话对 TA 说一句晚安",
    "当场拍一张自拍发给 TA",
    "说出三个 TA 让你心动的瞬间",
  ],
  jf = [
    { q: "下次的旅行想去哪类地方？", a: "海边", b: "山里" },
    { q: "晚饭一般由谁来决定？", a: "你定", b: "我定" },
    { q: "周末你们更常？", a: "宅家", b: "出门" },
    { q: "吵完架通常谁先低头？", a: "你", b: "我" },
    { q: "想养的宠物是？", a: "猫", b: "狗" },
    { q: "看电影更偏？", a: "喜剧", b: "悬疑" },
    { q: "纪念日礼物更想要？", a: "惊喜", b: "实用" },
  ],
  Tf = [
    { a: "奶茶", b: "咖啡" },
    { a: "早起", b: "熬夜" },
    { a: "火锅", b: "烧烤" },
    { a: "看星星", b: "看日出" },
    { a: "长发", b: "短发" },
    { a: "甜豆花", b: "咸豆花" },
    { a: "计划控", b: "随性派" },
    { a: "窝沙发", b: "去户外" },
  ],
  ni = ["💑", "🌟", "🍰", "✈️", "🌈", "💍"],
  a2 = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ],
  Nf = [
    "一起做一顿从没做过的菜",
    "去家附近没去过的咖啡馆待一下午",
    "骑车沿江边兜风，看不认识的路",
    "去超市各挑一样对方没吃过的零食",
    "在家布置一次烛光晚餐",
    "带毯子和水果去公园野餐",
    "一起看一部老电影，手写一张影评",
    "去城市最高点看一次日落",
    "互相给对方拍一组照片",
    "一起做一次手工（陶艺 / 绘画）",
    "去夜市从头吃到尾",
    "周末去周边小镇住一晚",
    "一起整理一份「我们的愿望清单」",
    "在家开一场只属于两人的歌单",
    "去书店各挑一本书送给对方",
    "一起挑战一件小事（拼图 / 乐高）",
  ];
function Cf(t) {
  for (const [e, n, r] of a2)
    if (t[e] && t[e] === t[n] && t[e] === t[r]) return t[e];
  return null;
}
function o2(t) {
  const e = t.slice();
  for (let n = e.length - 1; n > 0; n--) {
    const r = Math.floor(Math.random() * (n + 1));
    [e[n], e[r]] = [e[r], e[n]];
  }
  return e;
}
function l2() {
  const [t, e] = b.useState("你, TA"),
    n = t
      .split(/[,，\s]+/)
      .map((x) => x.trim())
      .filter(Boolean)
      .slice(0, 8),
    r = Math.max(2, n.length),
    s = 360 / r,
    [i, a] = b.useState(0),
    [l, c] = b.useState(!1),
    [u, d] = b.useState(null),
    f = b.useRef(0),
    h = b.useRef(0);
  function p() {
    if (l || r < 2) return;
    const x = Math.floor(Math.random() * r),
      _ = 360 * (5 + Math.floor(Math.random() * 2)),
      m = (360 - (x * s + s / 2) + 360) % 360,
      g = ((f.current % 360) + 360) % 360;
    let y = m - g;
    y < 0 && (y += 360);
    const E = f.current + _ + y;
    ((f.current = E),
      c(!0),
      d(null),
      a(E),
      clearTimeout(h.current),
      (h.current = setTimeout(() => {
        (c(!1), d(n[x]), kr());
      }, 4200)));
  }
  const v = n
    .map((x, _) => `${kf[_ % kf.length]} ${_ * s}deg ${(_ + 1) * s}deg`)
    .join(", ");
  return o.jsxs("div", {
    className: "game",
    children: [
      o.jsx("h3", { className: "game-title", children: "🎡 今天谁 XX" }),
      o.jsx("p", {
        className: "view-sub",
        children: "把选项填好，转一转，交给命运～",
      }),
      o.jsx("input", {
        className: "field",
        value: t,
        onChange: (x) => {
          (e(x.target.value), d(null));
        },
        placeholder: "逗号或空格分隔，如：你, TA, 谁洗碗",
      }),
      o.jsxs("div", {
        className: "wheel-wrap",
        children: [
          o.jsx("div", { className: "wheel-pointer" }),
          o.jsx("div", {
            className: "wheel",
            style: {
              background: `conic-gradient(${v})`,
              transform: `rotate(${i}deg)`,
              transition: l
                ? "transform 4.2s cubic-bezier(.17,.67,.16,.99)"
                : "none",
            },
            children: n.map((x, _) => {
              const m = _ * s + s / 2;
              return o.jsx(
                "div",
                {
                  className: "wheel-label",
                  style: { transform: `rotate(${m}deg)` },
                  children: o.jsx("span", {
                    className: "wheel-label-text",
                    style: { transform: `translateX(-50%) rotate(${-m}deg)` },
                    children: x,
                  }),
                },
                _,
              );
            }),
          }),
        ],
      }),
      o.jsx("button", {
        className: "primary-btn",
        onClick: p,
        disabled: l,
        children: l ? "转动中…" : "转 一 转",
      }),
      u &&
        !l &&
        o.jsxs("div", {
          className: "game-result",
          children: ["结果是：", o.jsx("b", { children: u }), " 🎉"],
        }),
    ],
  });
}
function c2() {
  const [t, e] = b.useState(0),
    [n, r] = b.useState(0),
    [s, i] = b.useState(null);
  function a(c) {
    const u = Hl[Math.floor(Math.random() * Hl.length)].id;
    c === u
      ? i("draw")
      : i2[c] === u
        ? (i("win"), e((d) => d + 1), kr())
        : (i("lose"), r((d) => d + 1));
  }
  const l =
    s === "win"
      ? "你赢啦 🎉"
      : s === "lose"
        ? "TA 赢了 😏"
        : s === "draw"
          ? "平局 🤝"
          : "选一个吧";
  return o.jsxs("div", {
    className: "game",
    children: [
      o.jsx("h3", { className: "game-title", children: "✊ 石头剪刀布" }),
      o.jsx("p", {
        className: "view-sub",
        children: "和 TA 轮流出，或挑战随机 AI",
      }),
      o.jsxs("div", {
        className: "rps-score",
        children: [
          o.jsxs("span", { children: ["你 ", o.jsx("b", { children: t })] }),
          o.jsxs("span", { children: ["TA ", o.jsx("b", { children: n })] }),
        ],
      }),
      o.jsx("div", {
        className: "rps-hand",
        children: Hl.map((c) =>
          o.jsxs(
            "button",
            {
              className: "rps-btn",
              onClick: () => a(c.id),
              children: [
                o.jsx("span", { className: "rps-emoji", children: c.emoji }),
                o.jsx("span", { children: c.label }),
              ],
            },
            c.id,
          ),
        ),
      }),
      o.jsx("div", { className: "game-result " + (s || ""), children: l }),
      o.jsx("button", {
        className: "ghost-btn",
        onClick: () => {
          (e(0), r(0), i(null));
        },
        children: "重置比分",
      }),
    ],
  });
}
function u2() {
  const [t, e] = b.useState(null),
    [n, r] = b.useState(""),
    s = (a) => {
      const l = a === "truth" ? Sf : Ef;
      (e(a), r(l[Math.floor(Math.random() * l.length)]));
    },
    i = () => {
      const a = t === "truth" ? Sf : Ef;
      r(a[Math.floor(Math.random() * a.length)]);
    };
  return o.jsxs("div", {
    className: "game",
    children: [
      o.jsx("h3", { className: "game-title", children: "💬 真心话大冒险" }),
      o.jsx("p", { className: "view-sub", children: "轮流抽，输的人认罚～" }),
      o.jsxs("div", {
        className: "td-btns",
        children: [
          o.jsx("button", {
            className: "td-btn truth" + (t === "truth" ? " active" : ""),
            onClick: () => s("truth"),
            children: "真心话",
          }),
          o.jsx("button", {
            className: "td-btn dare" + (t === "dare" ? " active" : ""),
            onClick: () => s("dare"),
            children: "大冒险",
          }),
        ],
      }),
      n &&
        o.jsxs("div", {
          className: "td-card",
          children: [
            o.jsx("span", {
              className: "td-tag",
              children: t === "truth" ? "真心话" : "大冒险",
            }),
            o.jsx("p", { className: "td-text", children: n }),
            o.jsx("button", {
              className: "ghost-btn",
              onClick: i,
              children: "换一个",
            }),
          ],
        }),
    ],
  });
}
function d2() {
  const [t, e] = b.useState(0),
    [n, r] = b.useState("p1"),
    [s, i] = b.useState(null),
    [a, l] = b.useState(null),
    [c, u] = b.useState(0),
    [d, f] = b.useState(0),
    h = jf[t % jf.length];
  function p(x, _) {
    x === "p1"
      ? (i(_), r("p2"))
      : (l(_), r("done"), s === _ && u((m) => m + 1), f((m) => m + 1));
  }
  function v() {
    (e((x) => x + 1), i(null), l(null), r("p1"));
  }
  return o.jsxs("div", {
    className: "game",
    children: [
      o.jsx("h3", { className: "game-title", children: "🤝 默契问答" }),
      o.jsx("p", {
        className: "view-sub",
        children: "两人各选一次，心有灵犀吗？",
      }),
      o.jsx("div", { className: "tacit-q", children: h.q }),
      n !== "done"
        ? o.jsxs(o.Fragment, {
            children: [
              o.jsx("p", {
                className: "tacit-hint",
                children: n === "p1" ? "玩家 1 悄悄选" : "玩家 2（别偷看）选",
              }),
              o.jsxs("div", {
                className: "tacit-opts",
                children: [
                  o.jsx("button", {
                    className: "tacit-opt",
                    onClick: () => p(n, h.a),
                    children: h.a,
                  }),
                  o.jsx("button", {
                    className: "tacit-opt",
                    onClick: () => p(n, h.b),
                    children: h.b,
                  }),
                ],
              }),
            ],
          })
        : o.jsxs(o.Fragment, {
            children: [
              o.jsxs("div", {
                className: "tacit-reveal",
                children: [
                  o.jsxs("div", {
                    className: "tacit-side",
                    children: [
                      o.jsx("span", { children: "玩家1" }),
                      o.jsx("b", { children: s }),
                    ],
                  }),
                  o.jsx("div", {
                    className: "tacit-match" + (s === a ? " yes" : " no"),
                    children: s === a ? "默契 +1 💞" : "不一样 😄",
                  }),
                  o.jsxs("div", {
                    className: "tacit-side",
                    children: [
                      o.jsx("span", { children: "玩家2" }),
                      o.jsx("b", { children: a }),
                    ],
                  }),
                ],
              }),
              o.jsxs("div", {
                className: "tacit-score",
                children: [
                  "默契度 ",
                  d ? Math.round((c / d) * 100) : 0,
                  "% （",
                  c,
                  "/",
                  d,
                  "）",
                ],
              }),
              o.jsx("button", {
                className: "primary-btn",
                onClick: v,
                children: "下一题",
              }),
            ],
          }),
    ],
  });
}
function h2() {
  const [t, e] = b.useState(0),
    [n, r] = b.useState(null),
    s = Tf[t % Tf.length],
    i = () => {
      (r(null), e((a) => a + 1));
    };
  return o.jsxs("div", {
    className: "game",
    children: [
      o.jsx("h3", { className: "game-title", children: "⚖️ 二选一" }),
      o.jsx("p", {
        className: "view-sub",
        children: "没有标准答案，看看你们像不像",
      }),
      o.jsxs("div", {
        className: "tot-wrap",
        children: [
          o.jsx("button", {
            className: "tot-side" + (n === "a" ? " picked" : ""),
            onClick: () => r("a"),
            children: s.a,
          }),
          o.jsx("span", { className: "tot-vs", children: "VS" }),
          o.jsx("button", {
            className: "tot-side" + (n === "b" ? " picked" : ""),
            onClick: () => r("b"),
            children: s.b,
          }),
        ],
      }),
      n &&
        o.jsxs("div", {
          className: "game-result",
          children: [
            "你选了 ",
            o.jsx("b", { children: n === "a" ? s.a : s.b }),
            "，问问 TA 选哪个？",
            o.jsx("button", {
              className: "ghost-btn",
              onClick: i,
              children: "换一对",
            }),
          ],
        }),
    ],
  });
}
function f2() {
  const t = () =>
      o2([...ni, ...ni]).map((h, p) => ({
        id: p,
        emoji: h,
        open: !1,
        matched: !1,
      })),
    [e, n] = b.useState(t),
    [r, s] = b.useState([]),
    [i, a] = b.useState(0),
    [l, c] = b.useState(0);
  function u(h) {
    if (r.length === 2 || e[h].matched || r.includes(h)) return;
    const p = [...r, h];
    if ((s(p), p.length === 2)) {
      a((_) => _ + 1);
      const [v, x] = p;
      e[v].emoji === e[x].emoji
        ? setTimeout(() => {
            (n((_) =>
              _.map((m, g) => (g === v || g === x ? { ...m, matched: !0 } : m)),
            ),
              c((_) => {
                const m = _ + 1;
                return (m === ni.length && kr(), m);
              }),
              s([]));
          }, 550)
        : setTimeout(() => s([]), 800);
    }
  }
  function d() {
    (n(t()), s([]), a(0), c(0));
  }
  const f = l === ni.length;
  return o.jsxs("div", {
    className: "game",
    children: [
      o.jsx("h3", { className: "game-title", children: "🃏 翻牌配对" }),
      o.jsx("p", {
        className: "view-sub",
        children: "找出两两相同的图案 · 步数越少越默契",
      }),
      o.jsxs("div", {
        className: "memo-stats",
        children: [
          o.jsxs("span", { children: ["已配对 ", l, "/", ni.length] }),
          o.jsxs("span", { children: ["步数 ", i] }),
          o.jsx("button", {
            className: "ghost-btn sm",
            onClick: d,
            children: "重开",
          }),
        ],
      }),
      o.jsx("div", {
        className: "memo-grid",
        children: e.map((h, p) => {
          const v = h.matched || r.includes(p);
          return o.jsx(
            "button",
            {
              className:
                "memo-card" +
                (v ? " open" : "") +
                (h.matched ? " matched" : ""),
              onClick: () => u(p),
              children: v ? h.emoji : "❓",
            },
            h.id,
          );
        }),
      }),
      f &&
        o.jsxs("div", {
          className: "game-result",
          children: ["全部配对完成 🎉 用了 ", i, " 步"],
        }),
    ],
  });
}
function p2() {
  const [t, e] = b.useState(null),
    [n, r] = b.useState(null),
    [s, i] = b.useState({ you: 0, ta: 0 }),
    a = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"],
    l = () => {
      const u = 1 + Math.floor(Math.random() * 6),
        d = 1 + Math.floor(Math.random() * 6);
      (e(u),
        r(d),
        u > d
          ? (i((f) => ({ ...f, you: f.you + 1 })), kr())
          : d > u && i((f) => ({ ...f, ta: f.ta + 1 })));
    },
    c =
      t == null
        ? "摇一下试试运球"
        : t > n
          ? "你赢啦 🎉"
          : n > t
            ? "TA 赢了 😏"
            : "平局，再来一次 🤝";
  return o.jsxs("div", {
    className: "game",
    children: [
      o.jsx("h3", { className: "game-title", children: "🎲 骰子比大小" }),
      o.jsx("p", {
        className: "view-sub",
        children: "谁点数大谁赢，一起摇起来",
      }),
      o.jsxs("div", {
        className: "rps-score",
        children: [
          o.jsxs("span", {
            children: ["你 ", o.jsx("b", { children: s.you })],
          }),
          o.jsxs("span", { children: ["TA ", o.jsx("b", { children: s.ta })] }),
        ],
      }),
      o.jsxs("div", {
        className: "dice-wrap",
        children: [
          o.jsxs("div", {
            className: "dice-col",
            children: [
              o.jsx("span", {
                className: "dice-face",
                children: t ? a[t - 1] : "🎲",
              }),
              o.jsx("span", { className: "dice-name", children: "你" }),
            ],
          }),
          o.jsx("span", { className: "tot-vs", children: "VS" }),
          o.jsxs("div", {
            className: "dice-col",
            children: [
              o.jsx("span", {
                className: "dice-face",
                children: n ? a[n - 1] : "🎲",
              }),
              o.jsx("span", { className: "dice-name", children: "TA" }),
            ],
          }),
        ],
      }),
      o.jsx("div", {
        className:
          "game-result " +
          (t == null ? "" : t > n ? "win" : n > t ? "lose" : ""),
        children: c,
      }),
      o.jsx("button", {
        className: "primary-btn",
        onClick: l,
        children: "摇 骰 子",
      }),
    ],
  });
}
function m2() {
  const [t, e] = b.useState(Array(9).fill("")),
    [n, r] = b.useState("X"),
    s = Cf(t),
    i = t.every(Boolean),
    a = (u) => {
      if (t[u] || s) return;
      const d = t.slice();
      ((d[u] = n), e(d), Cf(d) && kr(), r(n === "X" ? "O" : "X"));
    },
    l = () => {
      (e(Array(9).fill("")), r("X"));
    },
    c = s
      ? `${s === "X" ? "❌" : "⭕"} 赢了！`
      : i
        ? "平局 🤝"
        : `轮到 ${n === "X" ? "❌" : "⭕"}`;
  return o.jsxs("div", {
    className: "game",
    children: [
      o.jsx("h3", { className: "game-title", children: "⭕ 井字棋" }),
      o.jsx("p", {
        className: "view-sub",
        children: "两人面对面轮流下，连成一线就赢",
      }),
      o.jsx("div", { className: "bomb-turn", children: c }),
      o.jsx("div", {
        className: "ttt-grid",
        children: t.map((u, d) =>
          o.jsx(
            "button",
            {
              className:
                "ttt-cell" + (u === "X" ? " x" : u === "O" ? " o" : ""),
              onClick: () => a(d),
              disabled: !!u || !!s,
              children: u,
            },
            d,
          ),
        ),
      }),
      o.jsx("button", {
        className: "ghost-btn",
        onClick: l,
        children: "重新开始",
      }),
    ],
  });
}
function g2() {
  const [t, e] = b.useState(() => 1 + Math.floor(Math.random() * 100)),
    [n, r] = b.useState(1),
    [s, i] = b.useState(100),
    [a, l] = b.useState("p1"),
    [c, u] = b.useState(""),
    [d, f] = b.useState(!1),
    [h, p] = b.useState([]),
    v = (m) => (m === "p1" ? "玩家1" : "玩家2"),
    x = () => {
      const m = Number(c);
      if (!(!m || m < n || m > s || d)) {
        if (m === t) {
          (f(!0),
            kr(),
            p((g) => [...g, `${v(a)} 猜 ${m} 💥 踩中炸弹！`]),
            u(""));
          return;
        }
        (p((g) => [
          ...g,
          `${v(a)} 猜 ${m} · ${m < t ? "太小了 ↑" : "太大了 ↓"}`,
        ]),
          m < t ? r(m + 1) : i(m - 1),
          l(a === "p1" ? "p2" : "p1"),
          u(""));
      }
    },
    _ = () => {
      (e(1 + Math.floor(Math.random() * 100)),
        r(1),
        i(100),
        l("p1"),
        u(""),
        f(!1),
        p([]));
    };
  return o.jsxs("div", {
    className: "game",
    children: [
      o.jsx("h3", { className: "game-title", children: "💣 数字炸弹" }),
      o.jsx("p", {
        className: "view-sub",
        children: "1–100 藏着一个炸弹，轮流猜，谁猜中谁输",
      }),
      o.jsx("div", {
        className: "bomb-range",
        children: d ? "💥 爆炸啦！" : `范围 ${n} – ${s}`,
      }),
      o.jsx("div", {
        className: "bomb-turn",
        children: d ? `${v(a)} 踩雷，换人重开吧` : `轮到 ${v(a)}`,
      }),
      !d &&
        o.jsxs("div", {
          className: "add-row",
          children: [
            o.jsx("input", {
              className: "field",
              type: "number",
              min: n,
              max: s,
              value: c,
              onChange: (m) => u(m.target.value),
              onKeyDown: (m) => m.key === "Enter" && x(),
              placeholder: `输入 ${n}–${s} 之间的数`,
            }),
            o.jsx("button", {
              className: "primary-btn",
              onClick: x,
              children: "猜",
            }),
          ],
        }),
      h.length > 0 &&
        o.jsx("ul", {
          className: "bomb-log",
          children: h
            .slice()
            .reverse()
            .map((m, g) => o.jsx("li", { children: m }, g)),
        }),
      o.jsx("button", {
        className: "ghost-btn",
        onClick: _,
        children: "重开一局",
      }),
    ],
  });
}
function v2() {
  const [t, e] = b.useState(null),
    n = () => e(Nf[Math.floor(Math.random() * Nf.length)]);
  return o.jsxs("div", {
    className: "game",
    children: [
      o.jsx("h3", { className: "game-title", children: "💡 约会灵感" }),
      o.jsx("p", {
        className: "view-sub",
        children: "不知道干嘛？抽一个，说走就走",
      }),
      o.jsx("div", {
        className: "idea-card" + (t ? "" : " empty"),
        children: t || "点下面的按钮，抽一个约会点子 ✨",
      }),
      o.jsx("button", {
        className: "primary-btn",
        onClick: n,
        children: t ? "再抽一个" : "抽 一 个",
      }),
    ],
  });
}
const Vl = "#小程序://双人局/JsJIhmjrNtJVoHz";
function y2() {
  const [t, e] = b.useState(null);
  async function n() {
    let r = !0;
    try {
      if (navigator.clipboard && window.isSecureContext)
        await navigator.clipboard.writeText(Vl);
      else {
        const s = document.createElement("textarea");
        ((s.value = Vl),
          s.setAttribute("readonly", ""),
          (s.style.position = "fixed"),
          (s.style.left = "-9999px"),
          document.body.appendChild(s),
          s.select(),
          (r = document.execCommand("copy")),
          document.body.removeChild(s));
      }
    } catch {
      r = !1;
    }
    e(r ? "ok" : "fail");
  }
  return o.jsxs("div", {
    className: "mp-card",
    children: [
      o.jsxs("div", {
        className: "mp-head",
        children: [
          o.jsx("h3", { className: "mp-title", children: "双人局" }),
          o.jsx("span", { className: "mp-badge", children: "微信小程序" }),
        ],
      }),
      o.jsx("p", {
        className: "mp-note",
        children:
          "小程序跑在微信里，网页没法直接嵌进来。复制下面这条链接，粘贴到微信任意聊天框（发给自己就行），点它就会打开。",
      }),
      o.jsx("div", {
        className: "mp-link" + (t === "fail" ? " manual" : ""),
        children: Vl,
      }),
      o.jsxs("div", {
        className: "mp-foot",
        children: [
          o.jsx("button", {
            className: "mp-copy",
            onClick: n,
            children: t === "ok" ? "已复制 ✓" : "复制小程序链接",
          }),
          o.jsxs("ol", {
            className: "mp-steps",
            children: [
              o.jsx("li", { children: "复制" }),
              o.jsx("li", { children: "粘贴进微信" }),
              o.jsx("li", { children: "点卡片进入" }),
            ],
          }),
        ],
      }),
      t === "ok" &&
        o.jsx("p", {
          className: "mp-status ok",
          children: "链接已复制，去微信粘贴即可",
        }),
      t === "fail" &&
        o.jsx("p", {
          className: "mp-status warn",
          children: "浏览器拦住了自动复制，选中上面那行手动复制",
        }),
      !t &&
        o.jsx("p", {
          className: "mp-status",
          children: "微信电脑版聊天里粘贴，也能直接点开",
        }),
    ],
  });
}
const w2 = [
  { id: "wheel", label: "🎡 转盘" },
  { id: "rps", label: "✊ 猜拳" },
  { id: "dice", label: "🎲 骰子" },
  { id: "td", label: "💬 心冒险" },
  { id: "tacit", label: "🤝 默契" },
  { id: "tot", label: "⚖️ 二选一" },
  { id: "ttt", label: "⭕ 井字棋" },
  { id: "bomb", label: "💣 数字炸弹" },
  { id: "memo", label: "🃏 翻牌" },
  { id: "idea", label: "💡 约会灵感" },
];
function x2() {
  const [t, e] = b.useState("wheel");
  return o.jsxs("div", {
    className: "card",
    children: [
      o.jsxs("div", {
        className: "view-head",
        children: [
          o.jsx("h2", { className: "view-title", children: "情侣小游戏" }),
          o.jsx("p", {
            className: "view-sub",
            children: "两个人一起玩才好玩 💛",
          }),
        ],
      }),
      o.jsx(y2, {}),
      o.jsx("div", {
        className: "game-tabs",
        children: w2.map((n) =>
          o.jsx(
            "button",
            {
              className: "game-tab" + (t === n.id ? " active" : ""),
              onClick: () => e(n.id),
              children: n.label,
            },
            n.id,
          ),
        ),
      }),
      t === "wheel" && o.jsx(l2, {}),
      t === "rps" && o.jsx(c2, {}),
      t === "dice" && o.jsx(p2, {}),
      t === "td" && o.jsx(u2, {}),
      t === "tacit" && o.jsx(d2, {}),
      t === "tot" && o.jsx(h2, {}),
      t === "ttt" && o.jsx(m2, {}),
      t === "bomb" && o.jsx(g2, {}),
      t === "memo" && o.jsx(f2, {}),
      t === "idea" && o.jsx(v2, {}),
    ],
  });
}
const _2 = `#version 300 es
in vec2 aCorner;
in vec4 aTile;
uniform vec4 uOrientation;
uniform mat4 uProjection;
uniform float uCamera;
uniform float uRadius;
uniform float uTileRadius;
uniform vec4 uSpin;
uniform float uStretch;
uniform float uShift;
out vec2 vUv;
out float vFront;
out float vItem;

vec3 rotate(vec4 q, vec3 v) {
  vec3 t = 2.0 * cross(q.xyz, v);
  return v + q.w * t + cross(q.xyz, t);
}

void main() {
  vec3 center = normalize(rotate(uOrientation, aTile.xyz));
  vec3 reference = abs(center.y) > 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(0.0, 1.0, 0.0);
  vec3 tangent = normalize(cross(reference, center));
  vec3 bitangent = cross(center, tangent);
  float front = max(center.z, 0.0);
  vec3 offset = (tangent * aCorner.x + bitangent * aCorner.y) * uTileRadius * mix(0.5, 1.0, front);
  vec3 motion = cross(uSpin.xyz, center);
  float sweep = length(motion);
  if (sweep > 0.0001) {
    vec3 direction = motion / sweep;
    float amount = min(0.9, uSpin.w * uStretch * 0.12) * sweep;
    offset += direction * dot(offset, direction) * amount;
  }
  vec3 world = normalize(center * uRadius + offset) * uRadius * (1.0 + 0.003 * center.z);
  gl_Position = uProjection * vec4(world.xy, world.z - uCamera, 1.0);
  gl_Position.y += uShift * gl_Position.w;
  vUv = aCorner;
  vFront = center.z;
  vItem = aTile.w;
}`,
  b2 = `#version 300 es
precision highp float;
uniform sampler2D uAtlas;
uniform float uCells;
uniform float uInset;
uniform float uRoundness;
uniform float uGrayscale;
uniform float uDim;
uniform float uReveal;
uniform vec3 uPlaceholder;
uniform vec3 uTone;
in vec2 vUv;
in float vFront;
in float vItem;
out vec4 outColor;

void main() {
  float corner = clamp(uRoundness, 0.0, 1.0);
  vec2 q = abs(vUv) - (1.0 - corner);
  float d = length(max(q, 0.0)) + min(max(q.x, q.y), 0.0) - corner;
  float aa = max(fwidth(d), 0.0001);
  float mask = 1.0 - smoothstep(-aa, aa, d);
  float alpha = mask * smoothstep(0.02, 0.4, vFront) * uReveal;
  if (alpha < 0.002) discard;
  vec2 cell = vec2(mod(vItem, uCells), floor(vItem / uCells));
  vec2 local = vec2(vUv.x, -vUv.y) * 0.5 + 0.5;
  vec4 sampled = texture(uAtlas, (cell + uInset + local * (1.0 - 2.0 * uInset)) / uCells);
  vec3 color = mix(uPlaceholder, sampled.rgb, sampled.a);
  float focus = smoothstep(0.93, 0.997, vFront);
  float gray = dot(color, vec3(0.2126, 0.7152, 0.0722));
  color = mix(color, vec3(gray), uGrayscale * (1.0 - focus));
  color = mix(color, uTone, uDim * (1.0 - focus));
  outColor = vec4(color * alpha, alpha);
}`,
  En = 12,
  jn = 2,
  Pa = (30 * Math.PI) / 180,
  Rf = [0, 0, 1],
  Ht = (t, e, n) => Math.min(n, Math.max(e, t)),
  Af = (t, e) => t[0] * e[0] + t[1] * e[1] + t[2] * e[2],
  nu = (t, e) => [
    t[1] * e[2] - t[2] * e[1],
    t[2] * e[0] - t[0] * e[2],
    t[0] * e[1] - t[1] * e[0],
  ],
  Wl = (t) => {
    const e = Math.hypot(t[0], t[1], t[2]) || 1;
    return [t[0] / e, t[1] / e, t[2] / e];
  },
  ql = (t, e) => [
    t[3] * e[0] + t[0] * e[3] + t[1] * e[2] - t[2] * e[1],
    t[3] * e[1] - t[0] * e[2] + t[1] * e[3] + t[2] * e[0],
    t[3] * e[2] + t[0] * e[1] - t[1] * e[0] + t[2] * e[3],
    t[3] * e[3] - t[0] * e[0] - t[1] * e[1] - t[2] * e[2],
  ],
  Kl = (t, e) => {
    const n = Math.sin(e / 2);
    return [t[0] * n, t[1] * n, t[2] * n, Math.cos(e / 2)];
  },
  Oa = (t) => {
    const e = Math.hypot(t[0], t[1], t[2], t[3]) || 1;
    return [t[0] / e, t[1] / e, t[2] / e, t[3] / e];
  },
  jr = (t, e) => {
    const n = nu(t, e).map((s) => s * 2),
      r = nu(t, n);
    return [
      e[0] + t[3] * n[0] + r[0],
      e[1] + t[3] * n[1] + r[1],
      e[2] + t[3] * n[2] + r[2],
    ];
  },
  k2 = (t) => {
    const e = Math.PI * (3 - Math.sqrt(5));
    return Array.from({ length: t }, (n, r) => {
      const s = 1 - (2 * (r + 0.5)) / t,
        i = Math.sqrt(1 - s * s);
      return [Math.cos(e * r) * i, s, Math.sin(e * r) * i];
    });
  },
  S2 = (t) => {
    const e = t.replace("#", ""),
      n = e.length === 3 ? e.replace(/./g, (s) => s + s) : e.slice(0, 6),
      r = parseInt(n, 16);
    return Number.isNaN(r)
      ? 0
      : (0.2126 * ((r >> 16) & 255) +
          0.7152 * ((r >> 8) & 255) +
          0.0722 * (r & 255)) /
          255;
  },
  Pf = (t, e, n) => {
    const r = t.createShader(e);
    return r
      ? (t.shaderSource(r, n),
        t.compileShader(r),
        t.getShaderParameter(r, t.COMPILE_STATUS)
          ? r
          : (t.deleteShader(r), null))
      : null;
  },
  Of = () =>
    o.jsx("svg", {
      width: "20",
      height: "20",
      viewBox: "0 0 24 24",
      fill: "none",
      "aria-hidden": "true",
      children: o.jsx("path", {
        d: "M7 17L17 7M17 7H9M17 7V15",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
    }),
  E2 = ({
    items: t = [],
    count: e = 160,
    tileSize: n = 0.63,
    roundness: r = 0.2,
    zoom: s = 1.65,
    pullBack: i = 1,
    stretch: a = 0.6,
    inertia: l = 0.6,
    autoplay: c = 3,
    grayscale: u = !0,
    dim: d = 0.5,
    intro: f = !0,
    showInfo: h = !0,
    renderInfo: p,
    theme: v = "dark",
    accentColor: x,
    backgroundColor: _,
    onActiveChange: m,
    onItemClick: g,
    className: y = "",
    style: E,
  }) => {
    const R = b.useRef(null),
      A = b.useRef(null),
      P = b.useRef(null),
      [U, te] = b.useState(0),
      [z, Se] = b.useState(!0),
      [Ee, ne] = b.useState("side"),
      be = {
        count: Ht(Math.round(e), 6, 400),
        tileSize: Ht(n, 0.2, 1.2),
        roundness: Ht(r, 0, 1),
        zoom: Ht(s, 0.2, 4),
        pullBack: Ht(i, 0, 3),
        stretch: Ht(a, 0, 3),
        inertia: Ht(l, 0, 1),
        autoplay: Math.max(0, c),
        grayscale: u,
        dim: Ht(d, 0, 1),
        intro: f,
        theme: v === "light" ? "light" : "dark",
      },
      fe = b.useRef(be);
    fe.current = be;
    const Le = b.useRef(t);
    Le.current = t;
    const Me = b.useRef({ onActiveChange: m, onItemClick: g });
    ((Me.current = { onActiveChange: m, onItemClick: g }),
      b.useEffect(() => {
        var bn;
        const J = R.current,
          de = A.current,
          j =
            de == null
              ? void 0
              : de.getContext("webgl2", {
                  alpha: !0,
                  premultipliedAlpha: !0,
                  antialias: !0,
                });
        if (!J || !de || !j) return;
        const M = Pf(j, j.VERTEX_SHADER, _2),
          H = Pf(j, j.FRAGMENT_SHADER, b2),
          k = j.createProgram();
        if (
          !M ||
          !H ||
          !k ||
          (j.attachShader(k, M),
          j.attachShader(k, H),
          j.linkProgram(k),
          !j.getProgramParameter(k, j.LINK_STATUS))
        )
          return;
        j.useProgram(k);
        const D = {};
        for (const F of [
          "uOrientation",
          "uProjection",
          "uCamera",
          "uRadius",
          "uTileRadius",
          "uSpin",
          "uStretch",
          "uShift",
          "uAtlas",
          "uCells",
          "uInset",
          "uRoundness",
          "uGrayscale",
          "uDim",
          "uReveal",
          "uPlaceholder",
          "uTone",
        ])
          D[F] = j.getUniformLocation(k, F);
        const ke = [],
          oe = [];
        for (let F = 0; F <= En; F++)
          for (let ee = 0; ee <= En; ee++)
            ke.push((ee / En) * 2 - 1, (F / En) * 2 - 1);
        for (let F = 0; F < En; F++)
          for (let ee = 0; ee < En; ee++) {
            const Y = F * (En + 1) + ee;
            oe.push(Y, Y + 1, Y + En + 1, Y + 1, Y + En + 2, Y + En + 1);
          }
        const ue = j.createVertexArray();
        j.bindVertexArray(ue);
        const we = j.createBuffer();
        (j.bindBuffer(j.ARRAY_BUFFER, we),
          j.bufferData(j.ARRAY_BUFFER, new Float32Array(ke), j.STATIC_DRAW));
        const ve = j.getAttribLocation(k, "aCorner");
        (j.enableVertexAttribArray(ve),
          j.vertexAttribPointer(ve, 2, j.FLOAT, !1, 0, 0));
        const _e = j.createBuffer();
        (j.bindBuffer(j.ELEMENT_ARRAY_BUFFER, _e),
          j.bufferData(
            j.ELEMENT_ARRAY_BUFFER,
            new Uint16Array(oe),
            j.STATIC_DRAW,
          ));
        const ye = j.createBuffer();
        j.bindBuffer(j.ARRAY_BUFFER, ye);
        const pe = j.getAttribLocation(k, "aTile");
        (j.enableVertexAttribArray(pe),
          j.vertexAttribPointer(pe, 4, j.FLOAT, !1, 0, 0),
          j.vertexAttribDivisor(pe, 1),
          j.bindVertexArray(null));
        const N = j.createTexture();
        (j.activeTexture(j.TEXTURE0),
          j.bindTexture(j.TEXTURE_2D, N),
          j.texParameteri(j.TEXTURE_2D, j.TEXTURE_WRAP_S, j.CLAMP_TO_EDGE),
          j.texParameteri(j.TEXTURE_2D, j.TEXTURE_WRAP_T, j.CLAMP_TO_EDGE),
          j.texParameteri(
            j.TEXTURE_2D,
            j.TEXTURE_MIN_FILTER,
            j.LINEAR_MIPMAP_LINEAR,
          ),
          j.texParameteri(j.TEXTURE_2D, j.TEXTURE_MAG_FILTER, j.LINEAR),
          j.texImage2D(
            j.TEXTURE_2D,
            0,
            j.RGBA,
            1,
            1,
            0,
            j.RGBA,
            j.UNSIGNED_BYTE,
            new Uint8Array([0, 0, 0, 0]),
          ),
          j.uniform1i(D.uAtlas, 0));
        const V =
            ((bn = window.matchMedia) == null
              ? void 0
              : bn.call(window, "(prefers-reduced-motion: reduce)").matches) ??
            !1,
          S = {
            canvas: document.createElement("canvas"),
            cells: 1,
            cell: 512,
            request: 0,
            dirty: !1,
          },
          T = {
            active: !1,
            id: -1,
            x: 0,
            y: 0,
            dx: 0,
            dy: 0,
            moved: 0,
            start: 0,
          },
          w = {
            width: 1,
            height: 1,
            tiles: [],
            assign: [],
            count: 0,
            orientation: Oa([0.08, -0.3, 0, 1]),
            axis: [0, 1, 0],
            speed: fe.current.intro && !V ? 3.2 : 0,
            camera: 0,
            target: -1,
            front: 0,
            shown: -1,
            moving: !0,
            reveal: 0,
            hovered: !1,
            focused: !1,
            idle: 0,
            settle: 0,
            tilePx: 0,
            layout: "side",
            shift: 0,
            started: !1,
          };
        let L = 0,
          me = 0,
          je = 0,
          De = !0,
          Ue = !0;
        const jt = () => {
            const F = fe.current;
            if (F.count === w.count) return;
            ((w.count = F.count), (w.tiles = k2(F.count)));
            const ee = Math.max(1, Le.current.length),
              Y = new Array(ee).fill(0);
            ((w.assign = w.tiles.map(() => -1)),
              w.tiles.forEach((ce, Oe) => {
                const Ye = w.tiles
                  .map((Xe, He) => [He === Oe ? -2 : Af(ce, Xe), He])
                  .sort((Xe, He) => He[0] - Xe[0])
                  .slice(0, 6)
                  .map(([, Xe]) => w.assign[Xe]);
                let $e = -1;
                for (let Xe = 0; Xe < ee; Xe++) {
                  const He = (Oe + Xe) % ee;
                  Ye.includes(He) || (($e < 0 || Y[He] < Y[$e]) && ($e = He));
                }
                ($e < 0 && ($e = Oe % ee), (w.assign[Oe] = $e), (Y[$e] += 1));
              }));
            const ie = new Float32Array(F.count * 4);
            (w.tiles.forEach((ce, Oe) =>
              ie.set([ce[0], ce[1], ce[2], w.assign[Oe]], Oe * 4),
            ),
              j.bindBuffer(j.ARRAY_BUFFER, ye),
              j.bufferData(j.ARRAY_BUFFER, ie, j.STATIC_DRAW));
            let Ae = -1,
              Pe = -2;
            (w.tiles.forEach((ce, Oe) => {
              const Ye = jr(w.orientation, ce)[2];
              w.assign[Oe] === 0 && Ye > Pe && ((Pe = Ye), (Ae = Oe));
            }),
              (w.target = Ae));
          },
          it = () => {
            ((S.dirty = !1),
              j.activeTexture(j.TEXTURE0),
              j.bindTexture(j.TEXTURE_2D, N),
              j.texImage2D(
                j.TEXTURE_2D,
                0,
                j.RGBA,
                j.RGBA,
                j.UNSIGNED_BYTE,
                S.canvas,
              ),
              j.generateMipmap(j.TEXTURE_2D));
          },
          Zt = (F) => {
            const ee = ++S.request,
              Y = Math.max(1, F.length);
            ((S.cells = Math.ceil(Math.sqrt(Y))),
              (S.cell = Ht(Math.floor(4096 / S.cells), 64, 512)),
              (S.canvas.width = S.cells * S.cell),
              (S.canvas.height = S.cells * S.cell));
            const ie = S.canvas.getContext("2d");
            (ie == null || ie.clearRect(0, 0, S.canvas.width, S.canvas.height),
              it(),
              (w.count = 0),
              jt());
            let Ae = F.length;
            (Ae || (w.started = !0),
              F.forEach((Pe, ce) => {
                const Oe = new Image();
                ((Oe.crossOrigin = "anonymous"), (Oe.decoding = "async"));
                const Ye = () => {
                  ((Ae -= 1), Ae <= 0 && (w.started = !0), se());
                };
                ((Oe.onload = () => {
                  if (!Ue || ee !== S.request || !ie) return;
                  const $e = S.cell,
                    Xe = Math.max($e / Oe.naturalWidth, $e / Oe.naturalHeight),
                    He = Oe.naturalWidth * Xe,
                    Tt = Oe.naturalHeight * Xe,
                    Ft = (ce % S.cells) * $e,
                    kn = Math.floor(ce / S.cells) * $e;
                  (ie.save(),
                    ie.beginPath(),
                    ie.rect(Ft, kn, $e, $e),
                    ie.clip(),
                    ie.drawImage(
                      Oe,
                      Ft + ($e - He) / 2,
                      kn + ($e - Tt) / 2,
                      He,
                      Tt,
                    ),
                    ie.restore(),
                    (S.dirty = !0),
                    Ye());
                }),
                  (Oe.onerror = () => {
                    !Ue || ee !== S.request || Ye();
                  }),
                  (Oe.src = (Pe == null ? void 0 : Pe.image) ?? ""));
              }));
          },
          zt = () =>
            0.5 *
            jn *
            Math.sqrt((4 * Math.PI) / Math.max(1, w.count)) *
            fe.current.tileSize,
          wn = () => {
            const F = fe.current,
              ee = w.width / w.height,
              Y = Math.tan(Pa / 2) * Math.min(1, ee);
            return jn + zt() / (0.46 * F.zoom * Y);
          },
          xn = () => {
            const F = wn(),
              ee = (zt() / ((F - jn) * Math.tan(Pa / 2))) * (w.height / 2),
              Y = Math.round(ee);
            Y !== w.tilePx &&
              ((w.tilePx = Y),
              J.style.setProperty("--infinite-menu-tile", `${Y}px`));
            const ie = w.width / 2 - ee < 120 ? "stacked" : "side";
            ie !== w.layout && ((w.layout = ie), ne(ie));
          },
          _n = () => {
            let F = 0,
              ee = -2;
            for (let Y = 0; Y < w.tiles.length; Y++) {
              const ie = jr(w.orientation, w.tiles[Y])[2];
              ie > ee && ((ee = ie), (F = Y));
            }
            return F;
          },
          mt = (F, ee) => {
            const Y = jr(w.orientation, w.tiles[F]);
            let ie = -1,
              Ae = 1 / 0;
            for (let Pe = 0; Pe < w.tiles.length; Pe++) {
              if (Pe === F) continue;
              const ce = jr(w.orientation, w.tiles[Pe]);
              if (ce[2] < 0) continue;
              const Oe = ce[0] - Y[0],
                Ye = ce[1] - Y[1],
                $e = Math.hypot(Oe, Ye);
              if ($e < 1e-4) continue;
              const Xe = (Oe * ee[0] + Ye * ee[1]) / $e;
              if (Xe < 0.55) continue;
              const He = $e * (2.2 - Xe);
              He < Ae && ((Ae = He), (ie = Pe));
            }
            return ie;
          },
          C = (F) => {
            F < 0 || ((w.target = F), (w.speed = 0), (w.idle = 0), se());
          },
          I = (F, ee) => {
            const Y = de.getBoundingClientRect(),
              ie = Y.width / Y.height,
              Ae = Math.tan(Pa / 2),
              Pe = (((F - Y.left) / Y.width) * 2 - 1) * ie,
              ce = 1 - ((ee - Y.top) / Y.height) * 2 - w.shift,
              Oe = zt();
            let Ye = -1,
              $e = 1 / 0;
            for (let Xe = 0; Xe < w.tiles.length; Xe++) {
              const He = jr(w.orientation, w.tiles[Xe]);
              if (He[2] < 0.2) continue;
              const Tt = w.camera - He[2] * jn,
                Ft = (He[0] * jn) / (Tt * Ae),
                kn = (He[1] * jn) / (Tt * Ae),
                In = (Oe * (0.5 + 0.5 * He[2])) / (Tt * Ae),
                Sr = Math.hypot(Ft - Pe, kn - ce);
              Sr < In && Sr < $e && (($e = Sr), (Ye = Xe));
            }
            return Ye;
          },
          q = (F) => {
            const ee = Le.current;
            if (!ee.length) return;
            const Y = (w.assign[F] ?? 0) % ee.length,
              ie = ee[Y],
              Ae = Me.current.onItemClick;
            Ae
              ? Ae(ie, Y)
              : ie != null &&
                ie.link &&
                window.open(
                  ie.link,
                  ie.link.startsWith("http") ? "_blank" : "_self",
                  "noopener",
                );
          },
          re = () => {
            var Y, ie;
            const F = Le.current,
              ee = F.length ? (w.assign[w.front] ?? 0) % F.length : 0;
            !w.moving &&
              ee !== w.shown &&
              ((w.shown = ee),
              te(ee),
              (ie = (Y = Me.current).onActiveChange) == null ||
                ie.call(Y, F[ee], ee));
          },
          he = (F) => {
            if (((L = 0), !Ue || !De)) return;
            const ee = fe.current,
              Y = je ? Math.min(0.05, (F - je) / 1e3) : 1 / 60;
            ((je = F),
              jt(),
              S.dirty && it(),
              w.started &&
                (w.reveal = Math.min(1, w.reveal + Y / (V ? 0.01 : 0.7))));
            const ie = Math.min(w.width, w.height);
            if (T.active)
              if (T.dx || T.dy) {
                const Tt = (Math.hypot(T.dx, T.dy) / ie) * 2.6,
                  Ft = Wl([T.dy, T.dx, 0]);
                w.orientation = Oa(ql(Kl(Ft, Tt), w.orientation));
                const kn = 1 - Math.exp(-Y * 30);
                ((w.axis = Wl(w.axis.map((In, Sr) => In + (Ft[Sr] - In) * kn))),
                  (w.speed += (Tt / Y - w.speed) * kn),
                  (T.dx = 0),
                  (T.dy = 0));
              } else w.speed *= Math.exp(-Y * 14);
            else {
              w.speed > 5e-4
                ? ((w.orientation = Oa(
                    ql(Kl(w.axis, w.speed * Y), w.orientation),
                  )),
                  (w.speed *= Math.exp(-Y * (6 - 5 * ee.inertia))))
                : (w.speed = 0);
              const He = w.target >= 0 ? w.target : _n(),
                Tt = jr(w.orientation, w.tiles[He]),
                Ft = Math.acos(Ht(Af(Tt, Rf), -1, 1)),
                kn = Ht(1 - w.speed / 1.4, 0, 1);
              if (Ft > 2e-4 && kn > 0) {
                const In = nu(Tt, Rf),
                  Sr = Ft * (1 - Math.exp(-Y * (w.target >= 0 ? 6 : 8))) * kn;
                Math.hypot(In[0], In[1], In[2]) > 1e-6 &&
                  (w.orientation = Oa(ql(Kl(Wl(In), Sr), w.orientation)));
              } else w.target >= 0 && w.speed === 0 && (w.target = -1);
              w.front = He;
            }
            const Ae = Math.acos(
                Ht(jr(w.orientation, w.tiles[w.front])[2], -1, 1),
              ),
              Pe = T.active || w.speed > 0.08 || Ae > 0.01;
            (Pe !== w.moving && ((w.moving = Pe), Se(Pe)),
              (w.settle +=
                ((Pe ? 0 : 1) - w.settle) * (1 - Math.exp(-Y * (Pe ? 10 : 3)))),
              Pe || re());
            const ce = wn(),
              Oe = Ht(T.active ? 1 : w.speed / 2.2, 0, 1),
              Ye =
                ce + ee.pullBack * Oe * jn * 1.25 + (1 - w.reveal) * jn * 1.5;
            (w.camera || (w.camera = Ye + jn),
              (w.camera += (Ye - w.camera) * (1 - Math.exp(-Y * 4.5))),
              ee.autoplay > 0 && !Pe && !w.hovered && !w.focused && !V
                ? ((w.idle += Y),
                  w.idle >= ee.autoplay &&
                    ((w.idle = 0), C(mt(w.front, [1, 0]))))
                : (w.idle = 0),
              xn());
            const $e =
              w.layout === "stacked" ? Math.min(0.3, 72 / w.height) : 0;
            ((w.shift += ($e - w.shift) * (1 - Math.exp(-Y * 6))),
              ge(),
              Pe ||
              Math.abs(Ye - w.camera) > 0.001 ||
              Math.abs(
                (w.layout === "stacked" ? Math.min(0.3, 72 / w.height) : 0) -
                  w.shift,
              ) > 5e-4 ||
              Math.abs((Pe ? 0 : 1) - w.settle) > 0.002 ||
              w.reveal < 1 ||
              S.dirty ||
              !w.started
                ? (L = requestAnimationFrame(he))
                : ((je = 0),
                  ee.autoplay > 0 &&
                    !w.hovered &&
                    !w.focused &&
                    !V &&
                    (clearTimeout(me),
                    (me = window.setTimeout(
                      se,
                      Math.max(16, (ee.autoplay - w.idle) * 1e3),
                    )))));
          },
          ge = () => {
            const F = fe.current,
              ee = w.width / w.height,
              Y = 1 / Math.tan(Pa / 2),
              ie = 0.05,
              Ae = 50,
              Pe = new Float32Array([
                Y / ee,
                0,
                0,
                0,
                0,
                Y,
                0,
                0,
                0,
                0,
                (Ae + ie) / (ie - Ae),
                -1,
                0,
                0,
                (2 * Ae * ie) / (ie - Ae),
                0,
              ]);
            (j.viewport(0, 0, de.width, de.height),
              j.clearColor(0, 0, 0, 0),
              j.clear(j.COLOR_BUFFER_BIT | j.DEPTH_BUFFER_BIT),
              j.enable(j.DEPTH_TEST),
              j.enable(j.BLEND),
              j.blendFunc(j.ONE, j.ONE_MINUS_SRC_ALPHA),
              j.useProgram(k));
            const [ce, Oe, Ye, $e] = w.orientation;
            (j.uniform4f(D.uOrientation, ce, Oe, Ye, $e),
              j.uniformMatrix4fv(D.uProjection, !1, Pe),
              j.uniform1f(D.uCamera, w.camera),
              j.uniform1f(D.uRadius, jn),
              j.uniform1f(D.uTileRadius, zt()),
              j.uniform4f(
                D.uSpin,
                w.axis[0],
                w.axis[1],
                w.axis[2],
                V ? 0 : w.speed,
              ),
              j.uniform1f(D.uStretch, F.stretch),
              j.uniform1f(D.uShift, w.shift),
              j.uniform1f(D.uCells, S.cells),
              j.uniform1f(D.uInset, 2 / S.cell),
              j.uniform1f(D.uRoundness, F.roundness),
              j.uniform1f(D.uGrayscale, F.grayscale ? 1 : 0),
              j.uniform1f(D.uDim, F.dim * (0.45 + 0.55 * w.settle)),
              j.uniform1f(D.uReveal, w.reveal),
              F.theme === "light"
                ? (j.uniform3f(D.uPlaceholder, 0.9, 0.9, 0.91),
                  j.uniform3f(D.uTone, 1, 1, 1))
                : (j.uniform3f(D.uPlaceholder, 0.13, 0.12, 0.15),
                  j.uniform3f(D.uTone, 0.04, 0.035, 0.05)),
              j.activeTexture(j.TEXTURE0),
              j.bindTexture(j.TEXTURE_2D, N),
              j.bindVertexArray(ue),
              j.drawElementsInstanced(
                j.TRIANGLES,
                oe.length,
                j.UNSIGNED_SHORT,
                0,
                w.tiles.length,
              ),
              j.bindVertexArray(null));
          },
          se = () => {
            (clearTimeout(me),
              !(L || !Ue || !De) && (L = requestAnimationFrame(he)));
          },
          Fe = (F) => {
            var ee;
            (F.pointerType === "mouse" && F.button !== 0) ||
              ((ee = de.setPointerCapture) == null || ee.call(de, F.pointerId),
              (T.active = !0),
              (T.id = F.pointerId),
              (T.x = F.clientX),
              (T.y = F.clientY),
              (T.dx = 0),
              (T.dy = 0),
              (T.moved = 0),
              (T.start = performance.now()),
              (w.target = -1),
              se());
          },
          ae = (F) => {
            if (!T.active || F.pointerId !== T.id) return;
            const ee = F.clientX - T.x,
              Y = F.clientY - T.y;
            ((T.x = F.clientX),
              (T.y = F.clientY),
              (T.dx += ee),
              (T.dy += Y),
              (T.moved += Math.hypot(ee, Y)),
              se());
          },
          B = (F) => {
            var ee;
            if (!(!T.active || F.pointerId !== T.id)) {
              if (
                ((T.active = !1),
                (ee = de.releasePointerCapture) == null ||
                  ee.call(de, F.pointerId),
                T.moved < 6 && performance.now() - T.start < 450)
              ) {
                const Y = I(F.clientX, F.clientY);
                Y >= 0 && Y === w.front ? q(Y) : Y >= 0 && C(Y);
              }
              se();
            }
          },
          Ce = (F) => {
            const ee = {
              ArrowRight: [1, 0],
              ArrowLeft: [-1, 0],
              ArrowUp: [0, 1],
              ArrowDown: [0, -1],
            };
            ee[F.key]
              ? (F.preventDefault(),
                C(mt(w.target >= 0 ? w.target : w.front, ee[F.key])))
              : F.key === "Enter" &&
                F.target === J &&
                (F.preventDefault(), q(w.front));
          },
          Re = () => {
            w.hovered = !0;
          },
          ze = () => {
            ((w.hovered = !1), se());
          },
          Ve = () => {
            w.focused = !0;
          },
          gt = (F) => {
            J.contains(F.relatedTarget) || ((w.focused = !1), se());
          },
          Pt = () => {
            const F = Math.min(window.devicePixelRatio || 1, 2);
            ((w.width = Math.max(1, J.clientWidth)),
              (w.height = Math.max(1, J.clientHeight)),
              (de.width = Math.round(w.width * F)),
              (de.height = Math.round(w.height * F)),
              L || ge(),
              se());
          };
        ((P.current = { loadItems: Zt, wake: se }),
          de.addEventListener("pointerdown", Fe),
          de.addEventListener("pointermove", ae),
          de.addEventListener("pointerup", B),
          de.addEventListener("pointercancel", B),
          J.addEventListener("keydown", Ce),
          J.addEventListener("pointerenter", Re),
          J.addEventListener("pointerleave", ze),
          J.addEventListener("focusin", Ve),
          J.addEventListener("focusout", gt));
        const Ot = new ResizeObserver(Pt);
        Ot.observe(J);
        const Vs = new IntersectionObserver((F) => {
          ((De = F.some((ee) => ee.isIntersecting)), De && ((je = 0), se()));
        });
        return (
          Vs.observe(J),
          jt(),
          Pt(),
          () => {
            ((Ue = !1),
              cancelAnimationFrame(L),
              clearTimeout(me),
              (P.current = null),
              de.removeEventListener("pointerdown", Fe),
              de.removeEventListener("pointermove", ae),
              de.removeEventListener("pointerup", B),
              de.removeEventListener("pointercancel", B),
              J.removeEventListener("keydown", Ce),
              J.removeEventListener("pointerenter", Re),
              J.removeEventListener("pointerleave", ze),
              J.removeEventListener("focusin", Ve),
              J.removeEventListener("focusout", gt),
              Ot.disconnect(),
              Vs.disconnect(),
              j.deleteTexture(N),
              j.deleteBuffer(we),
              j.deleteBuffer(_e),
              j.deleteBuffer(ye),
              j.deleteVertexArray(ue),
              j.deleteProgram(k),
              j.deleteShader(M),
              j.deleteShader(H));
          }
        );
      }, []),
      b.useEffect(() => {
        var J;
        (J = P.current) == null || J.loadItems(t);
      }, [t]),
      b.useEffect(() => {
        var J;
        (J = P.current) == null || J.wake();
      }));
    const O = t.length ? t[U % t.length] : null,
      Q = be.theme === "light" ? "#120f17" : "#ffffff",
      Z = x || Q,
      Ne = S2(Z) > 0.5 ? "#120f17" : "#ffffff",
      xe = !!((O != null && O.link) || g),
      K = (J) => {
        O && g && (g(O, U % t.length), O.link || J.preventDefault());
      };
    return o.jsxs("div", {
      ref: R,
      className: `infinite-menu${y ? ` ${y}` : ""}`,
      tabIndex: 0,
      role: "group",
      "aria-roledescription": "carousel",
      "aria-label": (O == null ? void 0 : O.title) || "Infinite menu",
      style: {
        backgroundColor: _,
        "--infinite-menu-text": Q,
        "--infinite-menu-accent": Z,
        "--infinite-menu-on-accent": Ne,
        "--infinite-menu-shadow":
          be.theme === "light"
            ? "0 2px 18px rgba(255, 255, 255, 0.7)"
            : "0 2px 18px rgba(0, 0, 0, 0.45)",
        ...E,
      },
      children: [
        o.jsx("canvas", { ref: A, className: "infinite-menu__canvas" }),
        h &&
          O &&
          (p
            ? o.jsx("div", {
                className: "infinite-menu__custom",
                children: p(O, U % t.length, z),
              })
            : o.jsxs("div", {
                className: "infinite-menu__info",
                "data-moving": z,
                "data-layout": Ee,
                children: [
                  O.title &&
                    o.jsx("h2", {
                      className: "infinite-menu__title",
                      children: O.title,
                    }),
                  O.description &&
                    o.jsx("p", {
                      className: "infinite-menu__description",
                      children: O.description,
                    }),
                  xe &&
                    (O.link
                      ? o.jsx("a", {
                          className: "infinite-menu__action",
                          href: O.link,
                          target: O.link.startsWith("http") ? "_blank" : void 0,
                          rel: O.link.startsWith("http")
                            ? "noreferrer"
                            : void 0,
                          "aria-label": O.title ? `Open ${O.title}` : "Open",
                          onClick: K,
                          children: o.jsx(Of, {}),
                        })
                      : o.jsx("button", {
                          type: "button",
                          className: "infinite-menu__action",
                          "aria-label": O.title ? `Open ${O.title}` : "Open",
                          onClick: K,
                          children: o.jsx(Of, {}),
                        })),
                ],
              })),
      ],
    });
  },
  j2 = [
    {
      title: "怦然心动",
      year: 2010,
      type: "电影",
      genre: "青春 / 治愈",
      emoji: "🌻",
      synopsis:
        "男孩女孩从童年邻居到青春期的双向暗恋，两家人截然不同的价值观交织出一段清新温暖的成长故事。",
    },
    {
      title: "爱在黎明破晓前",
      year: 1995,
      type: "电影",
      genre: "爱情 / 文艺",
      emoji: "🚆",
      synopsis:
        "火车上偶遇的年轻人决定在维也纳共度一晚，一路散步长谈，把短暂相遇活成一生难忘的浪漫。",
    },
    {
      title: "时空恋旅人",
      year: 2013,
      type: "电影",
      genre: "奇幻 / 温情",
      emoji: "⏳",
      synopsis:
        "男主发现自己能穿越时间，于是用这份能力一遍遍重过与爱人相处的每一天，最终懂得珍惜当下。",
    },
    {
      title: "查令十字街84号",
      year: 1987,
      type: "电影",
      genre: "书信 / 治愈",
      emoji: "✉️",
      synopsis:
        "纽约女作家与伦敦旧书店老板靠书信往来二十年，素未谋面却缔结了最温柔的跨洋情谊。",
    },
    {
      title: "如晴天，似雨天",
      year: 2014,
      type: "电影",
      genre: "文艺 / 治愈",
      emoji: "🎻",
      synopsis:
        "失业音乐人与富家小天才的夏日相遇，两个孤独灵魂在纽约的琴声与漫步里彼此照亮。",
    },
    {
      title: "请回答1988",
      year: 2015,
      type: "剧集",
      genre: "家庭 / 怀旧",
      emoji: "🏘️",
      synopsis:
        "双门洞五个家庭的故事，邻里温情与青梅竹马的爱恋交织，是韩剧里最治愈的群像烟火气。",
    },
    {
      title: "去有风的地方",
      year: 2023,
      type: "剧集",
      genre: "田园 / 治愈",
      emoji: "🍃",
      synopsis:
        "都市女孩在大理云苗村停下脚步，在慢生活与邻里人情中重新找回生活的松弛与方向。",
    },
    {
      title: "机智的医生生活",
      year: 2020,
      type: "剧集",
      genre: "友情 / 群像",
      emoji: "🩺",
      synopsis:
        "五位相识二十年的医生好友，在医院与乐队排练室之间，把职场与友谊都过得热气腾腾。",
    },
    {
      title: "爱乐之城",
      year: 2016,
      type: "电影",
      genre: "歌舞 / 追梦",
      emoji: "🎬",
      synopsis:
        "怀揣演员梦的女孩与爵士钢琴师在洛杉矶相爱，理想与爱情拉扯出一场绚烂又心碎的追梦寓言。",
    },
    {
      title: "哈尔的移动城堡",
      year: 2004,
      type: "电影",
      genre: "动画 / 奇幻",
      emoji: "🏰",
      synopsis:
        "被诅咒成老妇的少女闯入移动城堡，与魔法师哈尔在战火与温柔里学会接纳真实的彼此。",
    },
    {
      title: "花束般的恋爱",
      year: 2021,
      type: "电影",
      genre: "爱情 / 写实",
      emoji: "💐",
      synopsis:
        "因相同品味而相恋的情侣，从如花束般美好的开始，到被现实消磨的无奈离散，真实得让人心颤。",
    },
    {
      title: "风速二十米",
      year: 2024,
      type: "剧集",
      genre: "运动 / 青春",
      emoji: "🚴",
      synopsis:
        "自行车竞技少年的热血群像，把青春、友情与冲刺终点的执念拍得又燃又干净。",
    },
  ],
  T2 = {
    28: "动作",
    12: "冒险",
    16: "动画",
    35: "喜剧",
    80: "犯罪",
    99: "纪录",
    18: "剧情",
    10751: "家庭",
    14: "奇幻",
    36: "历史",
    27: "恐怖",
    10402: "音乐",
    9648: "悬疑",
    10749: "爱情",
    878: "科幻",
    10770: "电视电影",
    53: "惊悚",
    10752: "战争",
    37: "西部",
    10759: "动作冒险",
    10762: "儿童",
    10763: "新闻",
    10764: "真人秀",
    10765: "科幻奇幻",
    10766: "肥皂剧",
    10767: "脱口秀",
    10768: "政府",
  },
  If = "couple-tmdb-daily-v1",
  N2 = "https://api.themoviedb.org/3";
function C2(t) {
  return t.includes("爱情")
    ? "💞"
    : t.includes("动画")
      ? "🧸"
      : t.includes("喜剧")
        ? "😆"
        : t.includes("科幻") || t.includes("奇幻")
          ? "🚀"
          : t.includes("纪录")
            ? "🎥"
            : t.includes("恐怖")
              ? "👻"
              : "🎬";
}
function rg(t) {
  const e = t.media_type === "tv",
    n = t.title || t.name || "未命名",
    r = t.release_date || t.first_air_date || "",
    s =
      (t.genre_ids || [])
        .map((a) => T2[a])
        .filter(Boolean)
        .slice(0, 2)
        .join("/") || (e ? "剧集" : "电影"),
    i = t.poster_path ? `https://image.tmdb.org/t/p/w342${t.poster_path}` : "";
  return {
    title: n,
    year: r.slice(0, 4),
    type: e ? "剧集" : "电影",
    genre: s,
    emoji: C2(s),
    synopsis: t.overview || "暂无简介。",
    poster: i,
  };
}
function R2() {
  const t = new Date();
  return `${t.getFullYear()}-${String(t.getMonth() + 1).padStart(2, "0")}-${String(t.getDate()).padStart(2, "0")}`;
}
function A2() {
  return !!(D0() || U0());
}
async function sg(t, e) {
  const n = D0(),
    r = U0();
  let s;
  if (n) s = `${n.replace(/\/$/, "")}${t}?${new URLSearchParams(e)}`;
  else if (r) s = `${N2}${t}?${new URLSearchParams({ ...e, api_key: r })}`;
  else return null;
  try {
    const i = await fetch(s,{signal:AbortSignal.timeout(8000)});
    return i.ok ? await i.json() : null;
  } catch (i) {
    return (console.warn("[tmdb] fetch failed", i), null);
  }
}
async function P2() {
  const t = R2();
  try {
    const r = localStorage.getItem(If);
    if (r) {
      const s = JSON.parse(r);
      if (s && s.date === t && Array.isArray(s.list) && s.list.length)
        return s.list;
    }
  } catch {}
  const e = await sg("/trending/all/day", { language: "zh-CN" });
  if (!e) return null;
  const n = (e.results || [])
    .filter((r) => r.media_type === "movie" || r.media_type === "tv")
    .map(rg);
  if (n.length)
    try {
      localStorage.setItem(If, JSON.stringify({ date: t, list: n }));
    } catch {}
  return n;
}
async function O2(t) {
  const e = await sg("/search/multi", {
    query: t,
    language: "zh-CN",
    page: 1,
    include_adult: "false",
  });
  return e
    ? (e.results || [])
        .filter((r) => r.media_type === "movie" || r.media_type === "tv")
        .map(rg)
    : null;
}
async function I2(t) {
  const e = (t || "").trim();
  return e ? O2(e) : P2();
}
function L2(t) {
  if (!t || !t.length) return t;
  const n = Math.floor(Date.now() / 864e5) % t.length;
  return [...t.slice(n), ...t.slice(0, n)];
}
function Lf({
  src: t,
  emoji: e,
  title: n,
  cls: r = "movie-thumb",
  bigEmoji: s = !1,
}) {
  const [i, a] = b.useState(!1);
  return !t || i
    ? o.jsx("span", {
        className: "movie-emoji" + (s ? " big" : ""),
        children: e,
      })
    : o.jsx("img", {
        className: r + (s ? " big" : ""),
        src: t,
        alt: n,
        loading: "lazy",
        onError: () => a(!0),
      });
}
function M2() {
  const [t, e] = b.useState(
    typeof window < "u" ? window.matchMedia("(max-width: 760px)").matches : !1,
  );
  return (
    b.useEffect(() => {
      const n = window.matchMedia("(max-width: 760px)"),
        r = (s) => e(s.matches);
      return (
        n.addEventListener("change", r),
        () => n.removeEventListener("change", r)
      );
    }, []),
    t
  );
}
const Mf = [
  ["#1c4568", "#2f6f9e"],
  ["#d78b6a", "#eebd55"],
  ["#4f9e86", "#2f6f9e"],
  ["#8f7fc0", "#b3a4d2"],
  ["#cf6f56", "#e0866b"],
  ["#dda13c", "#eebd55"],
  ["#1b557d", "#4a89b6"],
  ["#79bda4", "#e7d5ba"],
];
function $2(t, e) {
  const r = document.createElement("canvas");
  ((r.width = 480), (r.height = 480));
  const s = r.getContext("2d"),
    [i, a] = Mf[e % Mf.length],
    l = s.createLinearGradient(0, 0, 480, 480);
  (l.addColorStop(0, i),
    l.addColorStop(1, a),
    (s.fillStyle = l),
    s.fillRect(0, 0, 480, 480));
  const c = s.createRadialGradient(
    480 * 0.3,
    480 * 0.22,
    10,
    480 * 0.3,
    480 * 0.22,
    480 * 0.9,
  );
  return (
    c.addColorStop(0, "rgba(255,255,255,0.34)"),
    c.addColorStop(1, "rgba(255,255,255,0)"),
    (s.fillStyle = c),
    s.fillRect(0, 0, 480, 480),
    (s.globalAlpha = 0.12),
    (s.fillStyle = "#ffffff"),
    s.beginPath(),
    s.arc(480 * 0.82, 480 * 0.18, 480 * 0.26, 0, Math.PI * 2),
    s.fill(),
    (s.globalAlpha = 1),
    (s.textAlign = "center"),
    (s.textBaseline = "middle"),
    (s.font = `${Math.round(480 * 0.34)}px "Segoe UI Emoji", "Apple Color Emoji", "Noto Color Emoji", serif`),
    s.fillText(t.emoji, 480 / 2, 480 * 0.44),
    (s.fillStyle = "rgba(255,255,255,0.96)"),
    (s.font = `600 ${Math.round(480 * 0.082)}px "Noto Serif SC", "Songti SC", Georgia, serif`),
    s.fillText(t.title, 480 / 2, 480 * 0.79),
    r.toDataURL("image/png")
  );
}
function D2() {
  try {
    return !!document.createElement("canvas").getContext("webgl2");
  } catch {
    return !1;
  }
}
function U2() {
  const [t, e] = b.useState(""),
    [n, r] = b.useState(0),
    [s, i] = b.useState(null),
    [a, l] = b.useState(null),
    [c, u] = b.useState(!1),
    d = A2(),
    f = b.useMemo(() => L2(j2), []);
  b.useEffect(() => {
    if (!d) {
      l(null);
      return;
    }
    let E = !0;
    return (
      u(!0),
      setTimeout(()=>{if(E) I2(t).then((R)=>{E&&(l(R),u(false));}).catch(()=>{E&&(l(null),u(false));});},350),
      () => {
        E = !1;
      }
    );
  }, [d, t]);
  const p = (a && a.length ? a : f).filter((E) =>
      (E.title + E.genre + E.type + E.year)
        .toLowerCase()
        .includes(t.trim().toLowerCase()),
    ),
    v = b.useMemo(() => D2(), []),
    x = M2(),
    _ = v && p.length > 0 && t.trim() === "",
    m = b.useMemo(
      () =>
        p.map((E, R) => ({
          image: $2(E, R),
          title: E.title,
          description: `${E.year} · ${E.type} · ${E.genre}`,
        })),
      [t, a],
    ),
    g = p[Math.min(n, p.length - 1)],
    y = !!(d && a && a.length);
  return o.jsxs("div", {
    className: "card",
    children: [
      o.jsxs("div", {
        className: "view-head",
        children: [
          o.jsx("h2", { className: "view-title", children: "今晚看什么" }),
          o.jsx("p", {
            className: "view-sub",
            children: y
              ? "拖动这颗星球找片 · 今日热门 · 每天在线更新"
              : "拖动这颗星球找片 · 内置精选每日轮换 · 点开看简介",
          }),
        ],
      }),
      o.jsx(Watchlist, {}),
      o.jsx("div", {
        className: "add-row movie-search",
        children: o.jsx("input", {
          className: "add-input",
          placeholder: "搜索片名 / 类型，如：治愈、剧集",
          value: t,
          onChange: (E) => e(E.target.value),
        }),
      }),
      d && c
        ? o.jsx("p", { className: "view-sub", children: "今日推荐在线获取中…" })
        : p.length === 0
          ? o.jsxs("div", {
              className: "empty",
              children: [
                o.jsx("div", { className: "empty-emoji", children: "🍿" }),
                o.jsx("p", {
                  className: "empty-title",
                  children: "没有匹配的影片",
                }),
                o.jsx("p", {
                  className: "empty-sub",
                  children: "换个关键词试试",
                }),
              ],
            })
          : _
            ? o.jsxs(o.Fragment, {
                children: [
                  o.jsx("div", {
                    className: "menu-wrap",
                    children: o.jsx(E2, {
                      items: m,
                      count: x ? 130 : 190,
                      tileSize: x ? 0.62 : 0.72,
                      roundness: 0.22,
                      zoom: x ? 0.55 : 0.8,
                      pullBack: 0.9,
                      stretch: 0.55,
                      inertia: 0.62,
                      autoplay: 4,
                      grayscale: !1,
                      dim: 0.14,
                      intro: !0,
                      showInfo: !1,
                      theme: "light",
                      accentColor: "#1c4568",
                      onActiveChange: (E, R) => r(R),
                      onItemClick: (E, R) => i(R),
                    }),
                  }),
                  g &&
                    o.jsx("div", {
                      className: "movie-detail",
                      children: o.jsxs("div", {
                        className: "movie-detail-head",
                        children: [
                          o.jsx("span", {
                            className: "movie-emoji",
                            children: g.emoji,
                          }),
                          o.jsxs("div", {
                            children: [
                              o.jsxs("div", {
                                className: "movie-name",
                                children: [
                                  g.title,
                                  " ",
                                  o.jsx("span", {
                                    className: "movie-year",
                                    children: g.year,
                                  }),
                                ],
                              }),
                              o.jsxs("div", {
                                className: "movie-tags",
                                children: [
                                  o.jsx("span", {
                                    className: "tag",
                                    children: g.type,
                                  }),
                                  o.jsx("span", {
                                    className: "tag soft",
                                    children: g.genre,
                                  }),
                                ],
                              }),
                            ],
                          }),
                          o.jsx("button", {
                            className: "mini-btn",
                            onClick: () => i(p.indexOf(g)),
                            children: "简介",
                          }),
                        ],
                      }),
                    }),
                ],
              })
            : o.jsx("ul", {
                className: "movie-list",
                children: p.map((E, R) => {
                  const A = s === R;
                  return o.jsxs(
                    "li",
                    {
                      className: "movie-item" + (A ? " open" : ""),
                      onClick: () => i(A ? null : R),
                      children: [
                        o.jsxs("div", {
                          className: "movie-top",
                          children: [
                            o.jsx(Lf, {
                              src: E.poster,
                              emoji: E.emoji,
                              title: E.title,
                            }),
                            o.jsxs("div", {
                              className: "movie-meta",
                              children: [
                                o.jsxs("div", {
                                  className: "movie-name",
                                  children: [
                                    E.title,
                                    " ",
                                    o.jsx("span", {
                                      className: "movie-year",
                                      children: E.year,
                                    }),
                                  ],
                                }),
                                o.jsxs("div", {
                                  className: "movie-tags",
                                  children: [
                                    o.jsx("span", {
                                      className: "tag",
                                      children: E.type,
                                    }),
                                    o.jsx("span", {
                                      className: "tag soft",
                                      children: E.genre,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            o.jsx("span", {
                              className: "movie-chevron",
                              children: A ? "▲" : "▼",
                            }),
                          ],
                        }),
                        A &&
                          o.jsx("p", {
                            className: "movie-syn",
                            children: E.synopsis,
                          }),
                      ],
                    },
                    E.title,
                  );
                }),
              }),
      s !== null &&
        p[s] &&
        o.jsx("div", {
          className: "movie-sheet",
          role: "dialog",
          "aria-modal": "true",
          onClick: () => i(null),
          children: o.jsxs("div", {
            className: "movie-sheet-inner",
            onClick: (E) => E.stopPropagation(),
            children: [
              o.jsx(Lf, {
                src: p[s].poster,
                emoji: p[s].emoji,
                title: p[s].title,
                cls: "movie-poster",
                bigEmoji: !0,
              }),
              o.jsxs("h3", {
                className: "movie-sheet-title",
                children: [
                  p[s].title,
                  " ",
                  o.jsx("span", {
                    className: "movie-year",
                    children: p[s].year,
                  }),
                ],
              }),
              o.jsxs("div", {
                className: "movie-tags center",
                children: [
                  o.jsx("span", { className: "tag", children: p[s].type }),
                  o.jsx("span", {
                    className: "tag soft",
                    children: p[s].genre,
                  }),
                ],
              }),
              o.jsx("p", { className: "movie-syn", children: p[s].synopsis }),
              o.jsx(MovieActions, {movie:p[s]}),
              o.jsx("button", {
                className: "primary-btn",
                onClick: () => i(null),
                children: "知道了",
              }),
            ],
          }),
        }),
    ],
  });
}
const B2 = new URL("../",import.meta.url).href,
  $f = `-- 在 Supabase 控制台 → SQL Editor 执行：
create table couple_rows (
  id text primary key,
  couple_id text not null,
  kind text not null,
  payload jsonb not null,
  updated_at timestamptz default now()
);
create index on couple_rows (couple_id, kind);

alter table couple_rows enable row level security;
-- 演示用：用「共享口令」近似隔离（公开可读写，仅适合私人小工具）
create policy "open_rw" on couple_rows
  for all to anon
  using (true) with check (true);

-- Storage：新建 bucket「couple-photos」并设为 Public，
-- 再添加策略允许 anon 读写该 bucket。`;
function z2({ text: t }) {
  const [e, n] = b.useState(!1);
  return o.jsx("button", {
    className: "mini-btn",
    onClick: async () => {
      try {
        (await navigator.clipboard.writeText(t),
          n(!0),
          setTimeout(() => n(!1), 1500));
      } catch {}
    },
    children: e ? "已复制" : "复制",
  });
}
function F2() {
  const t = Hs() || {},
    [e, n] = b.useState(!!(t.enabled && t.url && t.anon)),
    [r, s] = b.useState(t.url || ""),
    [i, a] = b.useState(t.anon || ""),
    [l, c] = b.useState(t.coupleId || "our-little-days"),
    [u, d] = b.useState(t.tmdbProxy || ""),
    [f, h] = b.useState(t.tmdbKey || ""),
    [p, v] = b.useState(!1),
    [x, _] = b.useState(ea());
  function m() {
    const g = {
      enabled: e && !!r && !!i,
      url: r.trim(),
      anon: i.trim(),
      coupleId: (l.trim() || "our-little-days").trim(),
      tmdbProxy: u.trim(),
      tmdbKey: f.trim(),
    };
    if(e && (!/^https:\/\//.test(g.url)||!g.anon||!g.coupleId)){announce('请填写有效的 HTTPS Supabase URL、公开 Key 和空间口令');return;}
    try { n1(g); _(g.enabled); v(true);setTimeout(()=>v(false),2000); }catch{announce('配置保存失败，请检查输入和设备空间');}
  }
  return o.jsxs("div", {
    className: "card",
    children: [
      o.jsxs("div", {
        className: "view-head",
        children: [
          o.jsx("h2", { className: "view-title", children: "设置" }),
          o.jsx("p", {
            className: "view-sub",
            children: "我们的小日子 · v0.4",
          }),
        ],
      }),
      o.jsx(ProfileSettings, {}),
      o.jsxs("div", {
        className: "set-block",
        children: [
          o.jsx("div", {
            className: "set-name",
            children: "☁️ 云端同步（双人实时）",
          }),
          o.jsxs("p", {
            className: "set-desc",
            children: [
              "填入免费的 Supabase 项目信息后，待办、纪念日会自动实时同步到两台手机， 照片墙共享同一个云端相册。两端填",
              o.jsx("strong", { children: "相同的共享口令" }),
              "即视为同一个空间。 不填则保持纯本地版，功能照常使用。",
            ],
          }),
          o.jsxs("div", {
            className: "set-row",
            style: { borderBottom: "none", paddingBottom: 0 },
            children: [
              o.jsx("div", {
                className: "set-name",
                style: { marginBottom: 0 },
                children: "启用云端同步",
              }),
              o.jsx("button", {
                className: "switch" + (e ? " on" : ""),
                onClick: () => n((g) => !g),
                "aria-pressed": e,
                children: o.jsx("span", { className: "knob" }),
              }),
            ],
          }),
          o.jsxs("div", {
              className: "cloud-form",
              children: [
                o.jsx("label", {
                  className: "field-label",
                  children: "Supabase URL",
                }),
                o.jsx("input", {
                  className: "field",
                  placeholder: "https://xxxx.supabase.co",
                  value: r,
                  onChange: (g) => s(g.target.value),
                }),
                o.jsx("label", {
                  className: "field-label",
                  children: "anon key（公开，可放心放前端）",
                }),
                o.jsx("input", {
                  className: "field",
                  placeholder: "eyJhbGciOi...",
                  value: i,
                  onChange: (g) => a(g.target.value),
                }),
                o.jsx("label", {
                  className: "field-label",
                  children: "共享口令（coupleId）",
                }),
                o.jsx("input", {
                  className: "field",
                  placeholder: "our-little-days",
                  value: l,
                  onChange: (g) => c(g.target.value),
                }),
                o.jsx("button", {
                  className: "primary-btn",
                  onClick: m,
                  children: e ? "保存并启用" : "保存云端设置",
                }),
                p &&
                  o.jsx("p", {
                    className: "cloud-ok",
                    children: x
                      ? "配置已保存，进入待办页查看连接和同步状态"
                      : "已保存（未启用：需填写 URL 与 anon key）",
                  }),
              ],
            }),
          o.jsxs("details", {
            className: "sql-help",
            children: [
              o.jsx("summary", {
                children: "📐 还需要在 Supabase 里建表 / 建桶（点开）",
              }),
              o.jsxs("p", {
                className: "set-desc",
                children: [
                  "下面是原有演示建表方案，允许匿名读写，共享口令不代替身份验证；只适合非敏感测试。私人数据请先配置登录权限和 RLS，或继续使用本机模式。Storage 需另建 bucket「couple-photos」。TMDB 代理参考 ",
                  o.jsx("code", {
                    className: "code-inline",
                    children: "07freedom/tmdb-proxy",
                  }),
                  "。",
                ],
              }),
              o.jsxs("div", {
                className: "code-box",
                children: [
                  $f,
                  o.jsx("div", {
                    style: { marginTop: 8 },
                    children: o.jsx(z2, { text: $f }),
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      o.jsxs("div", {
        className: "set-block",
        children: [
          o.jsx("div", {
            className: "set-name",
            children: "🎬 影视每日推荐（在线更新）",
          }),
          o.jsxs("p", {
            className: "set-desc",
            children: [
              "「今晚看什么」默认用内置精选片单，每天轮换。填入免费的 ",
              o.jsx("strong", { children: "TMDB API Key" }),
              " 后， 会每天自动拉取",
              o.jsx("strong", { children: "当日热门电影 / 剧集" }),
              "（每天更新一次，并按当天缓存）。 国内访问 TMDB 可能需要科学上网，连不上时会自动回落到内置片单。",
            ],
          }),
          o.jsx("label", {
            className: "field-label",
            children: "TMDB API Key（v3，免费）",
          }),
          o.jsx("input", {
            className: "field",
            placeholder: "themoviedb.org → 设置 → API 里免费申请",
            value: f,
            onChange: (g) => h(g.target.value),
          }),
          o.jsx("label", {
            className: "field-label",
            children: "TMDB 代理地址（可选；有自建代理才填）",
          }),
          o.jsx("input", {
            className: "field",
            placeholder: "https://xxxx.supabase.co/functions/v1/tmdb",
            value: u,
            onChange: (g) => d(g.target.value),
          }),
          o.jsx("button", {
            className: "primary-btn",
            onClick: m,
            children: "保存",
          }),
          p &&
            o.jsx("p", {
              className: "cloud-ok",
              children:
                f.trim() || u.trim()
                  ? "配置已保存；连接成功后会显示在线推荐，失败时使用内置片单"
                  : "已保存（未填 Key，继续用内置片单每日轮换）",
            }),
        ],
      }),
      o.jsxs("div", {
        className: "set-block",
        children: [
          o.jsx("div", {
            className: "set-name",
            children: "📱 全局快捷操作（iOS 快捷指令）",
          }),
          o.jsx("p", {
            className: "set-desc",
            children:
              "网页支持通过网址参数直接添加待办。复制下面的链接，在 iPhone「快捷指令」里用「打开 URL」即可一键添加：",
          }),
          o.jsxs("code", {
            className: "code-box",
            children: [B2, "?add=买周末的早餐食材"],
          }),
          o.jsxs("ul", {
            className: "tips",
            children: [
              o.jsxs("li", {
                children: [
                  o.jsx("b", { children: "Action Button" }),
                  "：在支持操作按钮的 iPhone 中，设置→操作按钮→快捷指令→指向「快速添加」。",
                ],
              }),
              o.jsxs("li", {
                children: [
                  o.jsx("b", { children: "轻点背面" }),
                  "：设置→辅助功能→轻点背面→双击/三击→运行该快捷指令。",
                ],
              }),
              o.jsxs("li", {
                children: [
                  o.jsx("b", { children: "锁屏小组件" }),
                  "：长按锁屏→添加「快捷指令」小组件，指向它。",
                ],
              }),
              o.jsxs("li", {
                children: [
                  o.jsx("b", { children: "Siri" }),
                  "：「嘿 Siri，快速添加」即可听写并打开链接。",
                ],
              }),
              o.jsxs("li", {
                children: [
                  o.jsx("b", { children: "主屏 PWA" }),
                  "：Safari 打开后「添加到主屏幕」，首次联网后可离线打开本机资料。",
                ],
              }),
            ],
          }),
        ],
      }),
      o.jsxs("div", {
        className: "set-block warn",
        children: [
          o.jsx("div", {
            className: "set-name",
            children: "📅 提醒与快捷入口",
          }),
          o.jsx("p", {
            className: "set-desc",
            children:
              "截止日期会在待办列表中标出，打开网页即可查看。添加到主屏幕或设置快捷指令，可以更快记录小事；当前没有后台通知和灵动岛提醒。",
          }),
        ],
      }),
      o.jsxs("div", {
        className: "set-block",
        children: [
          o.jsx("div", { className: "set-name", children: "📋 功能与数据说明" }),
          o.jsxs("ul", {
            className: "tips",
            children: [
              o.jsx("li", {
                children:
                  "待办与纪念日支持实时同步、离线队列及失败重试；需要可用的 Supabase 配置",
              }),
              o.jsx("li", {
                children: "照片支持本机存储或云端相册，上传结果以实际连接为准",
              }),
              o.jsx("li", {
                children:
                  "影视支持每日推荐与想看／看过片单；内置片单无需配置",
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
const Df = typeof window > "u" ? b.useEffect : b.useLayoutEffect,
  Uf = {
    dark: {
      "--swap-tile": "linear-gradient(180deg, #3a3644 0%, #27242f 100%)",
      "--swap-tile-edge": "rgba(255, 255, 255, 0.07)",
      "--swap-tile-highlight": "rgba(255, 255, 255, 0.12)",
      "--swap-shadow":
        "0 30px 60px -24px rgba(0, 0, 0, 0.8), 0 10px 24px -12px rgba(0, 0, 0, 0.55)",
      "--swap-media-edge": "rgba(255, 255, 255, 0.06)",
      "--swap-ink": "#f4f4f5",
      "--swap-badge": "rgba(255, 255, 255, 0.08)",
      "--swap-shade": "#100e15",
    },
    light: {
      "--swap-tile": "linear-gradient(180deg, #ffffff 0%, #f6f6f8 100%)",
      "--swap-tile-edge": "rgba(24, 24, 27, 0.08)",
      "--swap-tile-highlight": "rgba(255, 255, 255, 1)",
      "--swap-shadow":
        "0 30px 60px -28px rgba(24, 24, 27, 0.35), 0 10px 24px -14px rgba(24, 24, 27, 0.2)",
      "--swap-media-edge": "rgba(24, 24, 27, 0.06)",
      "--swap-ink": "#27272a",
      "--swap-badge": "rgba(24, 24, 27, 0.05)",
      "--swap-shade": "#ffffff",
    },
  },
  H2 = [
    {
      title: "Golden hour",
      image:
        "https://images.unsplash.com/photo-1514519334989-3d5c8b1a9f91?w=900&q=80&auto=format&fit=crop",
    },
    {
      title: "Black beach",
      image:
        "https://images.unsplash.com/photo-1511300636408-a63a89df3482?w=900&q=80&auto=format&fit=crop",
    },
    {
      title: "Steel arches",
      image:
        "https://images.unsplash.com/photo-1520930528075-4ea5ead759f5?w=900&q=80&auto=format&fit=crop",
    },
    {
      title: "Pink drift",
      image:
        "https://images.unsplash.com/photo-1778849097774-0ab2a873a858?w=900&q=80&auto=format&fit=crop",
    },
  ],
  Bf = 900,
  ri = Math.PI * 2,
  zf = 1 / 240,
  Ia = 32,
  Ff = ["x", "y", "z", "r", "p"],
  Gl = { x: 0, y: 1 },
  un = (t, e, n) => Math.min(n, Math.max(e, t)),
  V2 = ({
    width: t,
    height: e,
    cardDistance: n,
    verticalDistance: r,
    depth: s,
    skewAmount: i,
    visible: a,
    hoverSpread: l,
  }) => {
    const c = Math.tan((i * Math.PI) / 180),
      u = 1 + Math.max(0, l);
    let d = 1 / 0,
      f = -1 / 0,
      h = 1 / 0,
      p = -1 / 0;
    for (let v = 0; v < a; v++) {
      const x = Bf / (Bf + v * s);
      for (const _ of [-t / 2, t / 2])
        for (const m of [-e / 2, e / 2]) {
          const g = (v * n * u + _) * x,
            y = (-v * r * u + m + _ * c) * x;
          ((d = Math.min(d, g)),
            (f = Math.max(f, g)),
            (h = Math.min(h, y)),
            (p = Math.max(p, y)));
        }
    }
    return {
      width: Math.ceil(f - d + Ia * 2),
      height: Math.ceil(p - h + Ia * 2),
      originX: Ia - d,
      originY: Ia - h,
    };
  },
  td = b.forwardRef(({ customClass: t, className: e, children: n, ...r }, s) =>
    o.jsxs("div", {
      ref: s,
      ...r,
      className: ["card-swap-card", t, e].filter(Boolean).join(" "),
      children: [
        n,
        o.jsx("span", {
          className: "card-swap-card-rim",
          "aria-hidden": "true",
        }),
      ],
    }),
  );
td.displayName = "Card";
const W2 = ({ item: t }) =>
    o.jsx(td, {
      children: o.jsxs("div", {
        className: "card-swap-item",
        children: [
          (t.icon || t.title) &&
            o.jsxs("div", {
              className: "card-swap-head",
              children: [
                t.icon &&
                  o.jsx("span", {
                    className: "card-swap-icon",
                    children: t.icon,
                  }),
                t.title &&
                  o.jsx("span", {
                    className: "card-swap-title",
                    children: t.title,
                  }),
              ],
            }),
          t.image &&
            o.jsx("div", {
              className: "card-swap-media",
              children: o.jsx("img", {
                src: t.image,
                alt: t.alt ?? t.title ?? "",
                draggable: !1,
              }),
            }),
        ],
      }),
    }),
  ig = b.forwardRef(
    (
      {
        items: t,
        width: e = 460,
        height: n = 340,
        cardDistance: r = 60,
        verticalDistance: s = 70,
        depth: i = 90,
        skewAmount: a = 6,
        visibleCards: l = 4,
        delay: c = 4e3,
        autoplay: u = !0,
        pauseOnHover: d = !0,
        draggable: f = !0,
        speed: h = 1,
        bounce: p = 0.35,
        parallax: v = 0.5,
        hoverSpread: x = 0.12,
        dim: _ = 0.5,
        cardRadius: m = 18,
        intro: g = !0,
        theme: y = "light",
        onCardClick: E,
        onChange: R,
        className: A = "",
        children: P,
      },
      U,
    ) => {
      const te = b.useRef(null),
        z = b.useRef(null),
        Se = b.useRef([]),
        Ee = b.useRef([]),
        ne = b.useRef(null),
        be = b.useRef(null),
        fe = b.useMemo(() => {
          const K = b.Children.toArray(P).filter(b.isValidElement);
          return K.length
            ? K
            : (t != null && t.length ? t : H2).map((J, de) =>
                o.jsx(W2, { item: J }, `${J.title ?? "card"}-${de}`),
              );
        }, [P, t]),
        Le = fe.length,
        Me = Math.max(40, Number(e) || 460),
        O = Math.max(40, Number(n) || 340),
        Q = un(Math.round(l), 1, Math.max(1, Le)),
        Z = b.useMemo(
          () =>
            V2({
              width: Me,
              height: O,
              cardDistance: r,
              verticalDistance: s,
              depth: Math.max(0, i),
              skewAmount: a,
              visible: Q,
              hoverSpread: x,
            }),
          [Me, O, r, s, i, a, Q, x],
        );
      ((be.current = {
        width: Me,
        height: O,
        dx: r,
        dy: s,
        dz: Math.max(0, i),
        skew: a,
        visible: Q,
        delay: c,
        autoplay: u,
        pauseOnHover: d,
        draggable: f,
        speed: un(h, 0.1, 4),
        bounce: un(p, 0, 1),
        parallax: un(v, 0, 1),
        hoverSpread: Math.max(0, x),
        dim: un(_, 0, 1),
        bounds: Z,
        onCardClick: E,
        onChange: R,
      }),
        b.useImperativeHandle(
          U,
          () => ({
            next: () => {
              var K;
              return (K = ne.current) == null ? void 0 : K.next();
            },
            prev: () => {
              var K;
              return (K = ne.current) == null ? void 0 : K.prev();
            },
          }),
          [],
        ),
        Df(() => {
          var _n, mt;
          const K = te.current,
            J = z.current;
          if (!K || !J || !Le) return;
          const de =
              ((_n = window.matchMedia) == null
                ? void 0
                : _n.call(window, "(prefers-reduced-motion: reduce)")
                    .matches) ?? !1,
            j = performance.now(),
            M = be.current,
            H = Array.from({ length: Le }, (C, I) => ({
              el: Se.current[I],
              shade: Ee.current[I],
              index: I,
              pos: I,
              from: I,
              hold: 0,
              nudge: 0,
              phase: "rest",
              dir: { x: 0, y: 1 },
              tilt: 0,
              top: 0,
              under: !1,
              x: 0,
              y: 0,
              z: 0,
              r: 0,
              p: 0,
              v: { x: 0, y: 0, z: 0, r: 0, p: 0 },
            })),
            k = {
              order: H.map((C) => C.index),
              raf: 0,
              last: 0,
              timer: 0,
              queue: [],
              layers: 0,
              scale: 1,
              hovered: !1,
              overCard: !1,
              inView: !0,
              drag: null,
              spread: 0,
              spreadV: 0,
              px: 0,
              py: 0,
              pvx: 0,
              pvy: 0,
              tx: 0,
              ty: 0,
              dragged: !1,
              autoplay: M.autoplay,
              delay: M.delay,
            },
            D = (C, I) => {
              const q = Math.min(C, I.visible),
                re = 1 + k.spread;
              return {
                x: q * I.dx * re,
                y: -q * I.dy * re,
                z: -q * I.dz,
                r: 0,
                p: q,
              };
            },
            ke = (C, I) =>
              Math.abs(I.x) * C.width + Math.abs(I.y) * C.height + 12,
            oe = (C, I, q) => {
              if (C.phase === "exit") {
                const he = D(0, I),
                  ge = ke(I, C.dir) * 1.3;
                return {
                  x: he.x + C.dir.x * ge,
                  y: he.y + C.dir.y * ge,
                  z: he.z,
                  r: C.tilt,
                  p: 0,
                };
              }
              if (C.phase === "enter") {
                const he = D(0, I);
                return {
                  x: he.x,
                  y: he.y + ke(I, Gl) * 1.3,
                  z: he.z,
                  r: 0,
                  p: C.p,
                };
              }
              const re = (q < C.hold ? C.from : C.pos) + C.nudge;
              return D(Math.max(0, re), I);
            },
            ue = (C) =>
              C.top ? 1e3 + C.top : C.under ? 1 : 10 + (Le - C.pos) * 2,
            we = (C, I) => {
              const { el: q, shade: re } = C;
              if (!q) return;
              ((q.style.transform = `translate3d(${C.x.toFixed(2)}px, ${C.y.toFixed(2)}px, ${C.z.toFixed(2)}px) rotate(${C.r.toFixed(3)}deg) skewY(${I.skew}deg)`),
                (q.style.zIndex = String(ue(C))));
              const he = un(I.visible - C.p, 0, 1);
              if (
                ((q.style.opacity = he < 1 ? he.toFixed(3) : ""),
                (q.style.visibility = he <= 0.001 ? "hidden" : ""),
                re)
              ) {
                const ge = un(C.p / Math.max(1, I.visible - 1), 0, 1);
                re.style.opacity = (I.dim * 0.62 * ge).toFixed(3);
              }
              ((q.style.cursor =
                C.phase === "drag"
                  ? "grabbing"
                  : C.pos > 0
                    ? "pointer"
                    : I.draggable
                      ? "grab"
                      : ""),
                C.pos === 0
                  ? q.setAttribute("data-front", "")
                  : q.removeAttribute("data-front"));
            },
            ve = (C) => {
              const I = C.bounds.originX + k.px,
                q = C.bounds.originY + k.py;
              J.style.perspectiveOrigin = `${I.toFixed(2)}px ${q.toFixed(2)}px`;
            },
            _e = (C, I, q, re, he) => {
              const ge = q * q,
                se = 2 * re * q,
                Fe = Math.max(1, Math.ceil(he / zf)),
                ae = he / Fe;
              for (let B = 0; B < Fe; B++)
                for (const Ce of Ff) {
                  const Re =
                    C.v[Ce] + (ge * (I[Ce] - C[Ce]) - se * C.v[Ce]) * ae;
                  ((C.v[Ce] = Re), (C[Ce] += Re * ae));
                }
            },
            ye = (C, I, q, re, he, ge) => {
              const se = re * re,
                Fe = 2 * he * re,
                ae = Math.max(1, Math.ceil(ge / zf)),
                B = ge / ae;
              let Ce = C,
                Re = I;
              for (let ze = 0; ze < ae; ze++)
                ((Re += (se * (q - Ce) - Fe * Re) * B), (Ce += Re * B));
              return [Ce, Re];
            },
            pe = (C) => {
              k.raf = 0;
              const I = be.current,
                q = k.last ? Math.min(0.05, (C - k.last) / 1e3) : 1 / 60;
              k.last = C;
              const re = I.speed,
                he = ri * 1.7 * re,
                ge = de ? 1 : 1 - 0.72 * I.bounce,
                se = ri * 1.9 * re;
              let Fe = !1;
              const ae = k.hovered && !de ? I.hoverSpread : 0;
              (([k.spread, k.spreadV] = ye(
                k.spread,
                k.spreadV,
                ae,
                ri * 1.4,
                0.9,
                q,
              )),
                ([k.px, k.pvx] = ye(
                  k.px,
                  k.pvx,
                  de ? 0 : k.tx,
                  ri * 1.1,
                  1,
                  q,
                )),
                ([k.py, k.pvy] = ye(
                  k.py,
                  k.pvy,
                  de ? 0 : k.ty,
                  ri * 1.1,
                  1,
                  q,
                )),
                (Math.abs(k.spread - ae) > 5e-4 ||
                  Math.abs(k.spreadV) > 5e-4 ||
                  Math.abs(k.px - k.tx) > 0.05 ||
                  Math.abs(k.py - k.ty) > 0.05 ||
                  Math.abs(k.pvx) + Math.abs(k.pvy) > 0.05) &&
                  (Fe = !0),
                ve(I));
              for (const B of H) {
                if (B.phase === "drag") {
                  ((Fe = !0), we(B, I));
                  continue;
                }
                const Ce = oe(B, I, C),
                  Re = B.phase === "exit" || B.phase === "enter";
                if (
                  (_e(B, Ce, Re ? se : he, Re ? 1 : ge, q), B.phase === "exit")
                ) {
                  const ze = D(0, I);
                  (B.x - ze.x) * B.dir.x + (B.y - ze.y) * B.dir.y >=
                    ke(I, B.dir) &&
                    ((B.phase = "rest"), (B.top = 0), (B.hold = 0));
                } else if (B.phase === "enter") {
                  const ze = D(0, I);
                  B.y - ze.y >= ke(I, Gl) &&
                    ((B.phase = "rest"), (B.under = !1), (B.hold = 0));
                }
                (B.hold > C || B.phase !== "rest") && (Fe = !0);
                for (const ze of Ff) {
                  const Ve = ze === "p" ? 0.001 : 0.02;
                  (Math.abs(Ce[ze] - B[ze]) > Ve || Math.abs(B.v[ze]) > Ve) &&
                    (Fe = !0);
                }
                we(B, I);
              }
              if (Fe) k.raf = requestAnimationFrame(pe);
              else {
                k.last = 0;
                for (const B of H) B.top && B.phase === "rest" && (B.top = 0);
              }
            },
            N = () => {
              k.raf || (k.raf = requestAnimationFrame(pe));
            },
            V = () => {
              const C = be.current;
              return (
                !C.autoplay ||
                Le < 2 ||
                (C.pauseOnHover && k.overCard) ||
                k.drag ||
                !k.inView ||
                document.visibilityState === "hidden"
              );
            },
            S = () => {
              (clearTimeout(k.timer),
                (k.timer = 0),
                !V() &&
                  (k.timer = window.setTimeout(
                    () => {
                      ((k.timer = 0), w(1));
                    },
                    Math.max(400, be.current.delay),
                  )));
            },
            T = (C, I) => {
              k.order.forEach((q, re) => {
                const he = H[q];
                he.pos !== re &&
                  ((he.from = he.pos),
                  (he.pos = re),
                  (he.hold = C + Math.max(0, re) * I));
              });
            },
            w = (C, I = {}) => {
              var ge;
              if (Le < 2) return;
              const q = be.current,
                re = performance.now(),
                he = 0.05 / q.speed;
              if (C > 0) {
                const se = H[k.order[0]];
                ((k.order = [...k.order.slice(1), se.index]),
                  T(re, he * 1e3),
                  (se.phase = "exit"),
                  (se.dir = I.dir ?? Gl),
                  (se.tilt = I.tilt ?? 0),
                  (se.top = ++k.layers),
                  (se.under = !1),
                  (se.nudge = 0),
                  (se.hold = 0),
                  I.velocity &&
                    ((se.v.x = I.velocity.x), (se.v.y = I.velocity.y)));
              } else {
                const se = H[k.order[Le - 1]];
                ((k.order = [se.index, ...k.order.slice(0, Le - 1)]),
                  T(re, he * 1e3),
                  (se.phase = "enter"),
                  (se.top = 0),
                  (se.under = !0),
                  (se.nudge = 0),
                  (se.hold = 0));
              }
              (H.forEach((se) => {
                se.phase === "rest" && (se.nudge = 0);
              }),
                (ge = q.onChange) == null || ge.call(q, k.order[0]),
                N(),
                S());
            },
            L = (C) => {
              (k.queue.forEach(clearTimeout), (k.queue = []));
              const I = 110 / be.current.speed;
              for (let q = 0; q < C; q++)
                k.queue.push(window.setTimeout(() => w(1), q * I));
            },
            me = () => {
              const C = be.current,
                I = K.clientWidth,
                q = K.clientHeight,
                re = Math.min(
                  1,
                  I / C.bounds.width,
                  q > 0 ? q / C.bounds.height : 1,
                );
              ((k.scale = re > 0 ? re : 1),
                (J.style.transform = `translate(-50%, -50%) scale(${k.scale.toFixed(4)})`));
            },
            je = (C) => {
              const I = K.getBoundingClientRect();
              return {
                x: C.clientX - I.left,
                y: C.clientY - I.top,
                w: I.width,
                h: I.height,
              };
            },
            De = (C) => {
              var Ce, Re, ze;
              const I = be.current;
              if (C.pointerType !== "touch") {
                const Ve = je(C),
                  gt = un((Ve.x / Math.max(1, Ve.w)) * 2 - 1, -1, 1),
                  Pt = un((Ve.y / Math.max(1, Ve.h)) * 2 - 1, -1, 1);
                ((k.tx = gt * I.parallax * 0.35 * I.bounds.width),
                  (k.ty = Pt * I.parallax * 0.35 * I.bounds.height),
                  (k.hovered = !0));
                const Ot = !!(
                  (Re = (Ce = C.target).closest) != null &&
                  Re.call(Ce, "[data-swap-index]")
                );
                (Ot !== k.overCard && ((k.overCard = Ot), S()), N());
              }
              const q = k.drag;
              if (!q || q.id !== C.pointerId) return;
              const re = (C.clientX - q.startX) / k.scale,
                he = (C.clientY - q.startY) / k.scale;
              if (!q.active) {
                if (Math.hypot(re, he) < 5) return;
                ((q.active = !0), (k.dragged = !0));
                const Ve = H[q.index];
                ((Ve.phase = "drag"),
                  (Ve.v = { x: 0, y: 0, z: 0, r: 0, p: 0 }),
                  (ze = K.setPointerCapture) == null || ze.call(K, C.pointerId),
                  (K.style.cursor = "grabbing"));
              }
              const ge = H[q.index],
                se = D(0, I);
              ((ge.x = se.x + re),
                (ge.y = se.y + he),
                (ge.z = se.z),
                (ge.r = un(re * 0.035, -9, 9)),
                (ge.p = 0));
              const Fe = performance.now();
              for (
                q.samples.push({ x: ge.x, y: ge.y, t: Fe });
                q.samples.length > 2 && Fe - q.samples[0].t > 90;

              )
                q.samples.shift();
              const ae = un(
                  Math.hypot(re, he) / (Math.min(I.width, I.height) * 0.3),
                  0,
                  1,
                ),
                B = H[k.order[1]];
              (B && B.phase === "rest" && (B.nudge = -0.22 * ae), N());
            },
            Ue = (C) => {
              var I;
              C.pointerType !== "touch" &&
                (((I = k.drag) != null && I.active) ||
                  ((k.hovered = !1),
                  (k.overCard = !1),
                  (k.tx = 0),
                  (k.ty = 0),
                  S(),
                  N()));
            },
            jt = (C) => {
              var he, ge;
              const I = be.current;
              if (((k.dragged = !1), !I.draggable || C.button > 0 || Le < 2))
                return;
              const q =
                (ge = (he = C.target).closest) == null
                  ? void 0
                  : ge.call(he, "[data-swap-index]");
              if (!q || !K.contains(q)) return;
              const re = Number(q.getAttribute("data-swap-index"));
              re !== k.order[0] ||
                H[re].phase !== "rest" ||
                ((k.drag = {
                  id: C.pointerId,
                  index: re,
                  startX: C.clientX,
                  startY: C.clientY,
                  active: !1,
                  samples: [],
                }),
                S());
            },
            it = (C) => {
              var Ve;
              const I = k.drag;
              if (!I || I.id !== C.pointerId) return;
              if (((k.drag = null), (K.style.cursor = ""), !I.active)) {
                S();
                return;
              }
              (Ve = K.releasePointerCapture) == null || Ve.call(K, C.pointerId);
              const q = be.current,
                re = H[I.index],
                he = D(0, q),
                ge = I.samples[0],
                se = I.samples[I.samples.length - 1],
                Fe = ge && se ? Math.max(0.016, (se.t - ge.t) / 1e3) : 1,
                ae =
                  ge && se && se !== ge
                    ? { x: (se.x - ge.x) / Fe, y: (se.y - ge.y) / Fe }
                    : { x: 0, y: 0 },
                B = { x: re.x - he.x, y: re.y - he.y },
                Ce = Math.hypot(B.x, B.y),
                Re = Math.hypot(ae.x, ae.y),
                ze = H[k.order[1]];
              if (
                (ze && (ze.nudge = 0),
                C.type !== "pointercancel" &&
                  (Ce > Math.min(q.width, q.height) * 0.3 || Re > 700))
              ) {
                const gt = { x: B.x + ae.x * 0.12, y: B.y + ae.y * 0.12 },
                  Pt = Math.hypot(gt.x, gt.y) || 1;
                ((re.phase = "rest"),
                  w(1, {
                    dir: { x: gt.x / Pt, y: gt.y / Pt },
                    tilt: re.r,
                    velocity: ae,
                  }));
              } else
                ((re.phase = "rest"),
                  (re.v.x = ae.x),
                  (re.v.y = ae.y),
                  N(),
                  S());
            },
            Zt = (C) => {
              var he, ge, se, Fe;
              if (k.dragged) {
                k.dragged = !1;
                return;
              }
              const I =
                (ge = (he = C.target).closest) == null
                  ? void 0
                  : ge.call(he, "[data-swap-index]");
              if (!I || !K.contains(I)) return;
              const q = Number(I.getAttribute("data-swap-index"));
              (Fe = (se = be.current).onCardClick) == null || Fe.call(se, q);
              const re = k.order.indexOf(q);
              re > 0 && L(re);
            },
            zt = () => S();
          ((ne.current = {
            next: () => w(1),
            prev: () => w(-1),
            refresh: () => {
              const C = be.current;
              (H.forEach((I) => {
                const q = Se.current[I.index],
                  re = Ee.current[I.index];
                (q === I.el && re === I.shade) ||
                  ((I.el = q), (I.shade = re), we(I, C));
              }),
                (C.autoplay !== k.autoplay || C.delay !== k.delay) &&
                  ((k.autoplay = C.autoplay), (k.delay = C.delay), S()),
                me(),
                N());
            },
          }),
            g && !de
              ? (H.forEach((C) => {
                  ((C.from = 0), (C.hold = j + (C.pos * 70) / M.speed));
                }),
                (mt = J.animate) == null ||
                  mt.call(J, [{ opacity: 0 }, { opacity: 1 }], {
                    duration: 420,
                    easing: "ease-out",
                  }))
              : H.forEach((C) => {
                  Object.assign(C, D(C.pos, M));
                }),
            me(),
            ve(M),
            H.forEach((C) => we(C, M)),
            N());
          const wn = new ResizeObserver(me);
          wn.observe(K);
          const xn = new IntersectionObserver((C) => {
            var I;
            ((k.inView =
              ((I = C[C.length - 1]) == null ? void 0 : I.isIntersecting) ??
              !0),
              S());
          });
          return (
            xn.observe(K),
            K.addEventListener("pointermove", De),
            K.addEventListener("pointerleave", Ue),
            K.addEventListener("pointerdown", jt),
            K.addEventListener("pointerup", it),
            K.addEventListener("pointercancel", it),
            K.addEventListener("click", Zt),
            document.addEventListener("visibilitychange", zt),
            S(),
            () => {
              (cancelAnimationFrame(k.raf),
                clearTimeout(k.timer),
                k.queue.forEach(clearTimeout),
                wn.disconnect(),
                xn.disconnect(),
                K.removeEventListener("pointermove", De),
                K.removeEventListener("pointerleave", Ue),
                K.removeEventListener("pointerdown", jt),
                K.removeEventListener("pointerup", it),
                K.removeEventListener("pointercancel", it),
                K.removeEventListener("click", Zt),
                document.removeEventListener("visibilitychange", zt),
                (ne.current = null));
            }
          );
        }, [Le]),
        Df(() => {
          var K;
          (K = ne.current) == null || K.refresh();
        }));
      const Ne = (K) => {
          var J, de;
          K.key === "ArrowRight" || K.key === "ArrowDown"
            ? (K.preventDefault(), (J = ne.current) == null || J.next())
            : (K.key === "ArrowLeft" || K.key === "ArrowUp") &&
              (K.preventDefault(), (de = ne.current) == null || de.prev());
        },
        xe = {
          ...(Uf[y] ?? Uf.dark),
          "--swap-w": `${Me}px`,
          "--swap-h": `${O}px`,
          "--swap-ox": `${Z.originX}px`,
          "--swap-oy": `${Z.originY}px`,
          "--swap-stage-w": `${Z.width}px`,
          "--swap-stage-h": `${Z.height}px`,
          "--swap-ratio": `${Z.width} / ${Z.height}`,
          "--swap-radius": `${Math.max(0, m)}px`,
        };
      return o.jsxs("div", {
        ref: te,
        className: `card-swap${A ? ` ${A}` : ""}`,
        style: xe,
        tabIndex: 0,
        role: "region",
        "aria-roledescription": "carousel",
        "aria-label": "Card stack",
        onKeyDown: Ne,
        children: [
          o.jsx("div", {
            className: "card-swap-sizer",
            "aria-hidden": "true",
            children: o.jsx("span", {}),
          }),
          o.jsx("div", {
            ref: z,
            className: "card-swap-stage",
            children: fe.map((K, J) =>
              o.jsxs(
                "div",
                {
                  ref: (de) => {
                    Se.current[J] = de;
                  },
                  className: "card-swap-slot",
                  "data-swap-index": J,
                  children: [
                    K,
                    o.jsx("span", {
                      ref: (de) => {
                        Ee.current[J] = de;
                      },
                      className: "card-swap-shade",
                      "aria-hidden": "true",
                    }),
                  ],
                },
                J,
              ),
            ),
          }),
        ],
      });
    },
  );
ig.displayName = "CardSwap";
const ru = "tale.cities",
  Hf = [
    "linear-gradient(150deg,#4d5a45,#8a7a58)",
    "linear-gradient(150deg,#3e5148,#9b7f5e)",
    "linear-gradient(150deg,#55483f,#a8926b)",
    "linear-gradient(150deg,#3f4a5c,#94a087)",
    "linear-gradient(150deg,#5c4352,#b39a72)",
    "linear-gradient(150deg,#41564d,#a69b6d)",
  ];
function q2() {
  try {
    const t = JSON.parse(localStorage.getItem(ru) || "[]");
    return Array.isArray(t) ? t : [];
  } catch {
    return [];
  }
}
function K2(t) {
  let e = 0;
  for (let n = 0; n < t.length; n++) e = (e * 31 + t.charCodeAt(n)) >>> 0;
  return Hf[e % Hf.length];
}
function G2() {
  const [t, e] = b.useState(q2),
    n = b.useCallback(
      ({ name: s, en: i = "", note: a = "", photoId: l = "" }) => {
        const c = s.trim();
        if (!c) return null;
        const u = {
          id: `c${Date.now().toString(36)}`,
          name: c,
          en: i.trim(),
          note: a.trim(),
          photoId: l || "",
          grad: K2(c),
        };
        return (
          e((d) => {
            const f = [...d, u];
            try {
              localStorage.setItem(ru, JSON.stringify(f));
            } catch {}
            return f;
          }),
          u
        );
      },
      [],
    ),
    r = b.useCallback((s) => {
      e((i) => {
        const a = i.filter((l) => l.id !== s);
        try {
          localStorage.setItem(ru, JSON.stringify(a));
        } catch {}
        return a;
      });
    }, []);
  return { custom: t, add: n, remove: r };
}
const Vf = [
    {
      name: "贵阳",
      en: "Guiyang",
      note: "山城烟火 · 2023",
      img: "cities/guiyang.jpg",
      grad: "linear-gradient(150deg,#4d5a45,#8a7a58)",
    },
    {
      name: "水富",
      en: "Shuifu",
      note: "金沙江畔 · 2023",
      img: "cities/shuifu.jpg",
      grad: "linear-gradient(150deg,#3e5148,#9b7f5e)",
    },
    {
      name: "阳朔",
      en: "Yangshuo",
      note: "漓江山水 · 2024",
      img: "cities/yangshuo.jpg",
      grad: "linear-gradient(150deg,#4f6247,#a6a077)",
    },
    {
      name: "三亚",
      en: "Sanya",
      note: "椰风海浪 · 2024",
      img: "cities/sanya.jpg",
      grad: "linear-gradient(150deg,#7d8c72,#d0b184)",
    },
    {
      name: "海口",
      en: "Haikou",
      note: "骑楼老街 · 2025",
      img: "cities/haikou.jpg",
      grad: "linear-gradient(150deg,#8b7654,#cdb694)",
    },
    {
      name: "成都",
      en: "Chengdu",
      note: "慢生活 · 2025",
      img: "cities/chengdu.jpg",
      grad: "linear-gradient(150deg,#55614a,#9c8a66)",
    },
  ],
  J2 = [
    { left: "8%", top: "18%", delay: "0s" },
    { left: "19%", top: "35%", delay: "1.1s" },
    { left: "31%", top: "12%", delay: "2.3s" },
    { left: "46%", top: "27%", delay: ".7s" },
    { left: "58%", top: "9%", delay: "1.8s" },
    { left: "71%", top: "22%", delay: ".2s" },
    { left: "83%", top: "13%", delay: "2.7s" },
    { left: "91%", top: "33%", delay: "1.4s" },
  ],
  Y2 = [
    { left: "13%", bottom: "25%", delay: "0s", dur: "7.5s" },
    { left: "29%", bottom: "18%", delay: "1.6s", dur: "9s" },
    { left: "47%", bottom: "27%", delay: "3.1s", dur: "8.2s" },
    { left: "63%", bottom: "16%", delay: ".8s", dur: "10s" },
    { left: "78%", bottom: "24%", delay: "2.2s", dur: "7.8s" },
    { left: "88%", bottom: "19%", delay: "4s", dur: "9.4s" },
  ],
  Wf = [
    "今天的风，替我说了想你。",
    "愿我们一直有说走就走的勇气。",
    "把这一刻，折进明信片里。",
    "明天也要一起看日落呀。",
    "愿所有平凡的日子，都闪着微光。",
    "下一次出发，还是和你一起。",
  ],
  qf = [
    "手给我，剩下的路由我们慢慢走。",
    "今天的你，比画里的风景好看。",
    "不用去很远，和你站着就很好。",
    "下一座城，还一起去看日落吧。",
    "谢谢你，把平凡的日子过成童话。",
    "风把我的喜欢，吹到你耳边了吗？",
  ],
  ns = [
    "愿今天的风，替我把温柔送到你身边。",
    "不必着急长大，和喜欢的人慢慢走就好。",
    "把平凡的一天，过成值得收藏的一页。",
    "如果生活是一本童话，你是我翻到就不想合上的那一页。",
    "今晚的月亮很好，适合一起抬头看一会儿。",
    "去牵一次手吧，像第一次心动那样。",
    "世界很大，我们的故事很小，但刚刚好。",
    "今天的烦恼，就先交给晚风保管。",
    "愿你们的日子，有烟火，也有星辰。",
    "把想说的话，轻轻说给身边的人听。",
    "再普通的一天，和你一起就闪闪发光。",
    "明天也要记得，给彼此留一块软软的地方。",
  ],
  Kf = [
    "P.S. 记得把今天的好心情，留给明天一点。",
    "P.S. 慢一点也没关系，我在。",
    "P.S. 这一页，替我们好好收着。",
    "P.S. 翻到下一页，还是我们。",
    "P.S. 抬头的时候，替我也看一眼月亮。",
    "P.S. 下一次心动，还要一起。",
    "P.S. 小事也算数，拥抱也算数。",
    "P.S. 今晚的风，我替你收好了。",
    "P.S. 有你在，烟火和星辰都不算远。",
    "P.S. 想说的话，别留到明天。",
    "P.S. 闪闪发光的不是日子，是我们。",
    "P.S. 留一块软软的地方，给彼此。",
  ],
  X2 = [
    { left: "18%", top: "24%", delay: "0s", dur: "21s" },
    { left: "38%", top: "18%", delay: "5s", dur: "26s" },
    { left: "57%", top: "30%", delay: "2.4s", dur: "23s" },
    { left: "74%", top: "20%", delay: "8s", dur: "28s" },
    { left: "88%", top: "38%", delay: "3.6s", dur: "24s" },
  ],
  Z2 = [
    [228, 314, 0.95],
    [266, 322, 0.8],
    [360, 318, 0.9],
    [398, 326, 0.75],
    [468, 314, 0.85],
    [556, 310, 0.9],
    [592, 320, 0.7],
  ],
  Q2 = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];
function ek() {
  let t = "2023-02-14";
  try {
    t = localStorage.getItem("couple-start") || t;
  } catch {}
  const e = new Date(t+"T00:00:00");
  if (Number.isNaN(e.getTime())) return { start: "2023-02-14", days: 0 };
  const n = new Date();
  return (
    n.setHours(0, 0, 0, 0),
    e.setHours(0, 0, 0, 0),
    { start: t, days: dayNumber(t,n) }
  );
}
function tk(t) {
  const n =
      (((t.getHours() * 60 + t.getMinutes() - 360 + 1440) % 1440) / 1440) * 360,
    r = n < 180,
    s = r ? n : n - 180,
    i = (s * Math.PI) / 180,
    a = t.getHours();
  return {
    phase:
      a >= 5 && a < 9
        ? "dawn"
        : a >= 9 && a < 17
          ? "day"
          : a >= 17 && a < 20
            ? "dusk"
            : "night",
    isDay: r,
    progress: s / 180,
    x: 50 - 44 * Math.cos(i),
    y: 52 - 30 * Math.sin(i),
  };
}
function nk(t) {
  return t < 5
    ? { hello: "夜深了，两位", sub: "把今天收好，早点休息。" }
    : t < 9
      ? { hello: "早安，两位", sub: "新的一天，慢慢开始。" }
      : t < 12
        ? { hello: "上午好，两位", sub: "今天也一起，把日子过成童话。" }
        : t < 14
          ? { hello: "中午好，两位", sub: "记得一起好好吃饭。" }
          : t < 18
            ? { hello: "下午好，两位", sub: "今天也一起，把日子过成童话。" }
            : t < 22
              ? { hello: "晚上好，两位", sub: "把今天收进回忆里。" }
              : { hello: "夜深了，两位", sub: "把今天收好，早点休息。" };
}
function rk(t, e = 1200) {
  const [n, r] = b.useState(0);
  return (
    b.useEffect(() => {
      var c;
      if (
        (typeof window < "u" &&
          ((c = window.matchMedia) == null
            ? void 0
            : c.call(window, "(prefers-reduced-motion: reduce)").matches)) ||
        document.visibilityState === "hidden" ||
        t <= 0
      ) {
        r(t);
        return;
      }
      let i = 0;
      const a = performance.now(),
        l = (u) => {
          const d = Math.min(1, (u - a) / e);
          (r(Math.round(t * (1 - Math.pow(1 - d, 3)))),
            d < 1 && (i = requestAnimationFrame(l)));
        };
      return ((i = requestAnimationFrame(l)), () => cancelAnimationFrame(i));
    }, [t, e]),
    n
  );
}
function sk() {
  const [t, e] = b.useState(
    typeof window < "u" ? window.matchMedia("(max-width: 760px)").matches : !1,
  );
  return (
    b.useEffect(() => {
      const n = window.matchMedia("(max-width: 760px)"),
        r = (s) => e(s.matches);
      return (
        n.addEventListener("change", r),
        () => n.removeEventListener("change", r)
      );
    }, []),
    t
  );
}
function ik(t) {
  const e = String(t).split("·");
  return e.length > 1 ? e[e.length - 1].trim() : "";
}
const Gf = (t) => new URL("../"+t,import.meta.url).href;
function ak() {
  return o.jsxs("svg", {
    className: "tale-land",
    viewBox: "0 0 800 340",
    preserveAspectRatio: "xMidYMax slice",
    "aria-hidden": "true",
    focusable: "false",
    children: [
      o.jsxs("defs", {
        children: [
          o.jsxs("g", {
            id: "tale-flower",
            children: [
              o.jsx("path", { className: "tale-flower-stem", d: "M0 2 v 12" }),
              o.jsx("circle", {
                className: "tale-flower-petal",
                cx: "0",
                cy: "-4.6",
                r: "2.5",
              }),
              o.jsx("circle", {
                className: "tale-flower-petal",
                cx: "4.4",
                cy: "-1.4",
                r: "2.5",
              }),
              o.jsx("circle", {
                className: "tale-flower-petal",
                cx: "2.7",
                cy: "3.8",
                r: "2.5",
              }),
              o.jsx("circle", {
                className: "tale-flower-petal",
                cx: "-2.7",
                cy: "3.8",
                r: "2.5",
              }),
              o.jsx("circle", {
                className: "tale-flower-petal",
                cx: "-4.4",
                cy: "-1.4",
                r: "2.5",
              }),
              o.jsx("circle", {
                className: "tale-flower-core",
                cx: "0",
                cy: "0",
                r: "1.8",
              }),
            ],
          }),
          o.jsxs("g", {
            id: "tale-pine",
            children: [
              o.jsx("path", {
                className: "tale-pine-body",
                d: "M0 -38 L-11 -10 L11 -10 Z",
              }),
              o.jsx("path", {
                className: "tale-pine-body",
                d: "M0 -26 L-14 4 L14 4 Z",
              }),
              o.jsx("path", {
                className: "tale-pine-trunk",
                d: "M-1.4 4 h2.8 v8 h-2.8 Z",
              }),
            ],
          }),
          o.jsxs("g", {
            id: "tale-mushroom",
            children: [
              o.jsx("path", {
                className: "tale-mushroom-stem",
                d: "M-1.8 0 h3.6 v8 h-3.6 Z",
              }),
              o.jsx("path", {
                className: "tale-mushroom-cap",
                d: "M-7 0 C -7 -8 7 -8 7 0 Z",
              }),
              o.jsx("circle", {
                className: "tale-mushroom-dot",
                cx: "-2.4",
                cy: "-3",
                r: "1",
              }),
              o.jsx("circle", {
                className: "tale-mushroom-dot",
                cx: "2.2",
                cy: "-4.4",
                r: "0.8",
              }),
            ],
          }),
        ],
      }),
      o.jsxs("g", {
        className: "tale-ridges",
        children: [
          o.jsx("path", {
            className: "tale-ridge back",
            d: "M0 198 C 44 188 80 170 124 174 C 168 178 196 156 238 150 C 276 145 298 166 336 164 C 374 162 396 142 438 146 C 480 150 504 176 546 172 C 592 168 618 144 662 150 C 706 156 738 178 776 172 L800 168 L800 340 L0 340 Z",
          }),
          o.jsx("path", {
            className: "tale-ridge front",
            d: "M0 214 C 52 200 98 188 150 194 C 202 200 234 182 284 186 C 334 190 364 206 414 200 C 464 194 504 178 554 186 C 608 194 642 212 696 204 C 738 198 770 206 800 200 L800 340 L0 340 Z",
          }),
          o.jsx("path", {
            className: "tale-snow",
            d: "M228 153 L238 150 L246 153 L241 156 L236 153 L232 157 Z",
          }),
          o.jsx("path", {
            className: "tale-snow",
            d: "M426 149 L438 146 L446 149 L441 152 L436 149 L430 153 Z",
          }),
        ],
      }),
      o.jsxs("g", {
        className: "tale-far-pines",
        children: [
          o.jsx("path", {
            d: "M186 216 l4 -10 4 10 Z M196 216 l5 -13 5 13 Z M208 216 l4 -9 4 9 Z",
          }),
          o.jsx("path", {
            d: "M318 208 l4 -9 4 9 Z M330 208 l5 -12 5 12 Z M344 208 l4 -8 4 8 Z",
          }),
          o.jsx("path", {
            d: "M492 212 l5 -11 5 11 Z M504 212 l4 -9 4 9 Z M516 212 l5 -12 5 12 Z",
          }),
          o.jsx("path", { d: "M604 218 l4 -9 4 9 Z M616 218 l5 -12 5 12 Z" }),
        ],
      }),
      o.jsx("path", {
        className: "tale-hill far",
        d: "M0 240 C 88 220 168 226 258 238 C 348 250 428 220 518 228 C 608 236 700 220 800 232 L800 340 L0 340 Z",
      }),
      o.jsxs("g", {
        className: "tale-village",
        children: [
          o.jsx("path", { className: "v-house", d: "M66 246 v-18 h20 v18 Z" }),
          o.jsx("path", {
            className: "v-roof",
            d: "M62 228 L76 215 L90 228 Z",
          }),
          o.jsx("path", { className: "v-chimney", d: "M80 222 v-9 h3.5 v6" }),
          o.jsx("path", {
            className: "v-smoke",
            d: "M81.5 211 C 78 205 84 202 81 196",
          }),
          o.jsx("path", { className: "v-house", d: "M96 248 v-13 h15 v13 Z" }),
          o.jsx("path", {
            className: "v-roof",
            d: "M92 235 L103 225 L114 235 Z",
          }),
          o.jsx("path", {
            className: "v-window",
            d: "M72 236 h4 v5 h-4 Z M102 240 h3 v4 h-3 Z",
          }),
          o.jsxs("g", {
            transform: "translate(692 248)",
            children: [
              o.jsx("path", {
                className: "v-house",
                d: "M-8 0 L-5 -34 L5 -34 L8 0 Z",
              }),
              o.jsx("path", {
                className: "v-roof",
                d: "M-6 -34 L0 -42 L6 -34 Z",
              }),
              o.jsx("circle", {
                className: "v-window-dot",
                cx: "0",
                cy: "-16",
                r: "1.8",
              }),
              o.jsxs("g", {
                className: "windmill-blades",
                children: [
                  o.jsx("path", { d: "M-1.6 -46 h3.2 v30 h-3.2 Z" }),
                  o.jsx("path", { d: "M-16 -31.4 h32 v3.2 h-32 Z" }),
                  o.jsx("circle", {
                    className: "v-window-dot",
                    cx: "0",
                    cy: "-31",
                    r: "2.2",
                  }),
                ],
              }),
            ],
          }),
          o.jsx("path", {
            className: "v-church",
            d: "M636 240 v-20 h12 v20 Z",
          }),
          o.jsx("path", {
            className: "v-roof",
            d: "M634 220 L642 206 L650 220 Z",
          }),
          o.jsx("path", {
            className: "v-church-spire",
            d: "M642 206 v-14 M639 206 h6",
          }),
        ],
      }),
      o.jsx("path", {
        className: "tale-hill mid",
        d: "M0 270 C 110 252 200 260 300 270 C 400 280 500 252 610 260 C 700 266 760 258 800 264 L800 340 L0 340 Z",
      }),
      o.jsx("path", {
        className: "tale-contour",
        d: "M0 224 C 92 206 180 210 268 224 C 364 240 452 210 552 216 C 654 224 740 210 800 216",
      }),
      o.jsx("path", {
        className: "tale-contour soft",
        d: "M0 284 C 120 266 212 272 312 284 C 418 296 516 266 616 272 C 704 278 764 270 800 276",
      }),
      o.jsx("path", {
        className: "tale-hill near",
        d: "M0 308 C 120 294 240 308 360 310 C 480 312 620 294 800 304 L800 340 L0 340 Z",
      }),
      o.jsxs("g", {
        className: "tale-fence",
        children: [
          o.jsx("path", {
            className: "fence-rail",
            d: "M204 291 C 228 287 260 287 286 293 M204 297 C 228 293 260 293 286 299",
          }),
          o.jsx("path", {
            className: "fence-post",
            d: "M208 286 v13 M224 285 v13 M240 285 v13 M256 286 v13 M272 288 v13",
          }),
        ],
      }),
      o.jsx("path", {
        className: "tale-castle-mound",
        d: "M398 340 C 410 314 434 282 470 266 C 500 252 546 252 578 268 C 608 284 624 314 632 340 Z",
      }),
      o.jsxs("g", {
        className: "tale-sheep",
        children: [
          o.jsxs("g", {
            transform: "translate(372 270) scale(0.92)",
            children: [
              o.jsx("ellipse", { cx: "0", cy: "0", rx: "7.6", ry: "5" }),
              o.jsx("circle", { cx: "7.6", cy: "-2.6", r: "3.1" }),
              o.jsx("path", { className: "sheep-legs", d: "M-4 4 v5 M3 4 v5" }),
              o.jsx("path", { className: "sheep-ear", d: "M9.4 -4.4 l2.6 -1" }),
            ],
          }),
          o.jsxs("g", {
            transform: "translate(396 278) scale(0.72)",
            children: [
              o.jsx("ellipse", { cx: "0", cy: "0", rx: "7.6", ry: "5" }),
              o.jsx("circle", { cx: "7.6", cy: "-2.6", r: "3.1" }),
              o.jsx("path", { className: "sheep-legs", d: "M-4 4 v5 M3 4 v5" }),
              o.jsx("path", { className: "sheep-ear", d: "M9.4 -4.4 l2.6 -1" }),
            ],
          }),
          o.jsxs("g", {
            transform: "translate(414 272) scale(0.6)",
            children: [
              o.jsx("ellipse", { cx: "0", cy: "0", rx: "7.6", ry: "5" }),
              o.jsx("circle", { cx: "7.6", cy: "-2.6", r: "3.1" }),
              o.jsx("path", { className: "sheep-legs", d: "M-4 4 v5 M3 4 v5" }),
              o.jsx("path", { className: "sheep-ear", d: "M9.4 -4.4 l2.6 -1" }),
            ],
          }),
        ],
      }),
      o.jsxs("g", {
        className: "tale-grove back",
        children: [
          o.jsx("path", {
            className: "tale-tree-trunk",
            d: "M256 306 v-24 M594 300 v-20",
          }),
          o.jsx("path", {
            className: "tale-tree-round",
            d: "M232 286 C 228 264 242 250 256 252 C 270 254 280 268 276 284 C 272 298 242 300 232 286 Z",
          }),
          o.jsx("path", {
            className: "tale-tree-round light",
            d: "M244 270 C 244 258 256 252 264 258 C 272 264 270 278 260 282 C 250 286 240 280 244 270 Z",
          }),
          o.jsx("path", {
            className: "tale-tree-round",
            d: "M580 284 C 574 268 586 256 598 258 C 610 260 618 272 614 284 C 610 296 586 296 580 284 Z",
          }),
          o.jsx("use", {
            href: "#tale-pine",
            transform: "translate(604 290) scale(0.9)",
          }),
        ],
      }),
      o.jsxs("g", {
        className: "tale-birds",
        children: [
          o.jsx("path", { d: "M238 92 q 8 -8 15 0 q 7 -8 15 0" }),
          o.jsx("path", { d: "M282 74 q 6 -6 11 0 q 5 -6 11 0" }),
          o.jsx("path", { d: "M344 64 q 5 -5 9 0 q 4 -5 9 0" }),
        ],
      }),
      o.jsx("g", {
        transform: "translate(304 132) scale(0.9)",
        children: o.jsxs("g", {
          className: "tale-balloon",
          children: [
            o.jsx("path", {
              className: "balloon-envelope",
              d: "M0 -26 C 14 -26 22 -14 22 -2 C 22 8 16 14 20 20 L-20 20 C-16 14 -22 8 -22 -2 C-22 -14 -14 -26 0 -26 Z",
            }),
            o.jsx("path", {
              className: "balloon-stripe",
              d: "M0 -26 C 6 -18 7 -6 0 19 M0 -26 C -6 -18 -7 -6 0 19",
            }),
            o.jsx("path", {
              className: "balloon-band",
              d: "M-19 12 C -10 17 10 17 19 12",
            }),
            o.jsx("path", {
              className: "balloon-rope",
              d: "M-11 20 L-6 30 M11 20 L6 30",
            }),
            o.jsx("path", {
              className: "balloon-basket",
              d: "M-7 30 h14 v9 h-14 Z",
            }),
            o.jsx("path", {
              className: "balloon-flag",
              d: "M0 -27 v-8 M0 -35 l8 3 -8 3",
            }),
          ],
        }),
      }),
      o.jsxs("g", {
        className: "tale-castle",
        children: [
          o.jsx("path", {
            className: "castle-walls",
            d: "M452 262 L452 224 L580 224 L580 262 Z",
          }),
          o.jsx("path", {
            className: "castle-keep",
            d: "M486 262 L486 178 L538 178 L538 262 Z",
          }),
          o.jsx("path", {
            className: "castle-tower",
            d: "M452 262 L452 192 L482 192 L482 262 Z",
          }),
          o.jsx("path", {
            className: "castle-tower",
            d: "M544 262 L544 200 L574 200 L574 262 Z",
          }),
          o.jsx("path", {
            className: "castle-upper",
            d: "M502 182 L502 134 L522 134 L522 182 Z",
          }),
          o.jsx("path", {
            className: "castle-roof",
            d: "M500 136 Q508 112 512 84 Q516 112 524 136 Z",
          }),
          o.jsx("path", {
            className: "castle-roof",
            d: "M448 194 Q456 172 467 142 Q478 172 486 194 Z",
          }),
          o.jsx("path", {
            className: "castle-roof",
            d: "M540 202 Q549 180 559 150 Q569 180 578 202 Z",
          }),
          o.jsx("path", {
            className: "castle-crenel",
            d: "M452 224 v-8 h6 v8 h6 v-8 h6 v8 h6 v-8 h6 v8 h6 v-8 h6 v8 h6 v-8 h6 v8 h6 v-8 h6 v8 h6 v-8 h6 v8 h6 v-8 h6 v8 h6 v-8 h6 v8 h6 v-8 h6 v8 h6 v-8 h6 v8 h6 v-8 h6 v8",
          }),
          o.jsx("path", {
            className: "castle-seam",
            d: "M452 242 h128 M486 210 h52 M486 232 h52",
          }),
          o.jsx("path", {
            className: "castle-seam thin",
            d: "M470 192 v70 M558 200 v62 M512 134 v48",
          }),
          o.jsxs("g", {
            className: "castle-clock",
            children: [
              o.jsx("circle", {
                className: "clock-face",
                cx: "512",
                cy: "190",
                r: "8.6",
              }),
              o.jsx("circle", {
                className: "clock-ring",
                cx: "512",
                cy: "190",
                r: "6.6",
              }),
              o.jsx("path", {
                className: "clock-hands",
                d: "M512 190 v-4.2 M512 190 l3 2.4",
              }),
              o.jsx("circle", {
                className: "clock-pin",
                cx: "512",
                cy: "190",
                r: "1.1",
              }),
            ],
          }),
          o.jsx("path", {
            className: "castle-gate",
            d: "M502 262 v-22 a10 10 0 0 1 20 0 v22 Z",
          }),
          o.jsx("path", {
            className: "castle-portcullis",
            d: "M506 262 v-20 M512 262 v-24 M518 262 v-20 M503 249 h18",
          }),
          o.jsx("path", {
            className: "castle-steps",
            d: "M499 266 h24 M502 272 h18 M505 278 h12",
          }),
          o.jsx("path", {
            className: "castle-finial",
            d: "M512 82 v-12 M508 76 h8",
          }),
          o.jsx("path", {
            className: "castle-finial",
            d: "M467 142 v-9 M464 137 h6",
          }),
          o.jsx("path", {
            className: "castle-finial",
            d: "M559 150 v-9 M556 145 h6",
          }),
          o.jsx("path", {
            className: "castle-flag flag-main",
            d: "M512 70 C 520 66 527 70 531 75 L512 77 Z",
          }),
          o.jsx("path", {
            className: "castle-flag",
            d: "M559 141 C 566 138 571 141 574 145 L559 146 Z",
          }),
          o.jsx("path", {
            className: "castle-bunting",
            d: "M467 160 C 492 168 532 168 559 166",
          }),
          o.jsx("path", {
            className: "castle-bunting-flags",
            d: "M482 163 l2 8 l4 -7 Z M500 166 l2 8 l4 -7 Z M518 167 l2 8 l4 -7 Z M536 166 l2 8 l4 -7 Z",
          }),
          o.jsx("path", {
            className: "castle-ivy",
            d: "M456 260 C 462 250 468 252 470 244 C 474 252 480 250 482 258 M566 260 C 560 250 554 254 552 246 C 548 254 542 252 540 260",
          }),
        ],
      }),
      o.jsxs("g", {
        className: "tale-windows",
        children: [
          o.jsx("path", { d: "M458 230 v-9 a5 5 0 0 1 10 0 v9 Z" }),
          o.jsx("path", { d: "M470 248 v-7 a4 4 0 0 1 8 0 v7 Z" }),
          o.jsx("path", { d: "M550 226 v-8 a4.5 4.5 0 0 1 9 0 v8 Z" }),
          o.jsx("path", { d: "M558 248 v-7 a4 4 0 0 1 8 0 v7 Z" }),
          o.jsx("path", { d: "M495 210 v-9 a5 5 0 0 1 10 0 v9 Z" }),
          o.jsx("path", { d: "M519 210 v-9 a5 5 0 0 1 10 0 v9 Z" }),
          o.jsx("path", { d: "M506 152 v-8 a5 5 0 0 1 10 0 v8 Z" }),
          o.jsx("path", { d: "M506 252 v-9 a6 6 0 0 1 12 0 v9 Z" }),
        ],
      }),
      o.jsx("g", {
        className: "tale-window-trim",
        children: o.jsx("path", {
          d: "M463 230 v-9 M553 226 v-8 M500 210 v-9 M524 210 v-9 M511 152 v-8",
        }),
      }),
      o.jsxs("g", {
        className: "tale-garden",
        children: [
          o.jsx("path", {
            className: "tale-hedge",
            d: "M484 264 C 490 254 500 256 504 262 C 510 252 520 254 524 262 C 532 252 542 254 546 264 Z",
          }),
          o.jsx("path", {
            className: "tale-hedge small",
            d: "M436 276 C 442 268 451 270 454 276 C 460 268 468 270 472 277 Z",
          }),
        ],
      }),
      o.jsx("path", {
        className: "tale-road-edge",
        d: "M512 274 C 480 280 444 284 404 289 C 372 293 348 297 330 302",
      }),
      o.jsx("path", {
        className: "tale-road",
        d: "M512 274 C 480 280 444 284 404 289 C 372 293 348 297 330 302",
      }),
      o.jsxs("g", {
        className: "tale-pebbles",
        children: [
          o.jsx("ellipse", { cx: "472", cy: "282", rx: "2.4", ry: "1.1" }),
          o.jsx("ellipse", { cx: "428", cy: "288", rx: "2", ry: "1" }),
          o.jsx("ellipse", { cx: "384", cy: "293", rx: "2.2", ry: "1" }),
        ],
      }),
      o.jsxs("g", {
        className: "tale-lanterns",
        children: [
          o.jsxs("g", {
            transform: "translate(418 292)",
            children: [
              o.jsx("path", { className: "lantern-post", d: "M0 8 v-12" }),
              o.jsx("path", {
                className: "lantern-cap",
                d: "M-3.4 -4 h6.8 l-1 -3.2 h-4.8 Z",
              }),
              o.jsx("rect", {
                className: "lantern-glow",
                x: "-2.4",
                y: "-1.4",
                width: "4.8",
                height: "4.2",
                rx: "1",
              }),
            ],
          }),
          o.jsxs("g", {
            transform: "translate(474 284) scale(0.85)",
            children: [
              o.jsx("path", { className: "lantern-post", d: "M0 8 v-12" }),
              o.jsx("path", {
                className: "lantern-cap",
                d: "M-3.4 -4 h6.8 l-1 -3.2 h-4.8 Z",
              }),
              o.jsx("rect", {
                className: "lantern-glow",
                x: "-2.4",
                y: "-1.4",
                width: "4.8",
                height: "4.2",
                rx: "1",
              }),
            ],
          }),
        ],
      }),
      o.jsxs("g", {
        className: "tale-grove front",
        children: [
          o.jsx("use", { href: "#tale-pine", transform: "translate(212 300)" }),
          o.jsx("use", {
            href: "#tale-pine",
            transform: "translate(232 304) scale(0.8)",
          }),
          o.jsx("use", {
            href: "#tale-pine",
            transform: "translate(586 298) scale(1.1)",
          }),
          o.jsx("use", {
            href: "#tale-pine",
            transform: "translate(606 304) scale(0.82)",
          }),
          o.jsx("use", {
            href: "#tale-pine",
            transform: "translate(642 300) scale(0.9)",
          }),
          o.jsx("path", {
            className: "tale-shrub",
            d: "M372 306 C 366 296 376 288 384 294 C 390 286 400 292 400 302 C 402 310 380 312 372 306 Z",
          }),
          o.jsx("path", {
            className: "tale-shrub small",
            d: "M338 308 C 334 302 341 296 347 301 C 352 295 359 300 358 307 Z",
          }),
          o.jsx("path", {
            className: "tale-shrub small",
            d: "M448 300 C 444 294 451 288 457 293 C 462 287 469 292 468 299 Z",
          }),
        ],
      }),
      o.jsxs("g", {
        className: "tale-couple",
        children: [
          o.jsx("path", {
            className: "tale-arm",
            d: "M312 276 C 318 272 323 270 328 267",
          }),
          o.jsx("circle", { cx: "303", cy: "256", r: "8.4" }),
          o.jsx("path", {
            d: "M295 302 C 295 282 299 266 303 264 C 307 266 311 282 311 302 Z",
          }),
          o.jsx("circle", { cx: "322", cy: "252", r: "7.8" }),
          o.jsx("circle", {
            cx: "327",
            cy: "245",
            r: "3.2",
            className: "tale-bun",
          }),
          o.jsx("path", {
            d: "M316 302 C 317 288 319 266 322 263 C 325 266 329 288 332 302 Z",
          }),
          o.jsx("path", {
            className: "tale-heart-mini",
            d: "M317 230 C 313 227 312 223 314 221 C 316 219 318 220 318 222 C 318 220 320 219 322 221 C 324 223 323 227 317 230 Z",
          }),
        ],
      }),
      o.jsxs("g", {
        className: "tale-dog",
        children: [
          o.jsx("path", {
            className: "tale-dog-tail",
            d: "M352 293 C 359 289 360 284 357 281",
          }),
          o.jsx("ellipse", { cx: "344", cy: "293", rx: "8.4", ry: "5.4" }),
          o.jsx("circle", { cx: "337", cy: "288", r: "4.8" }),
          o.jsx("path", { d: "M334 285 l-1.6 -5.4 4.2 2.4 Z" }),
          o.jsx("path", {
            className: "tale-dog-legs",
            d: "M338 297 l-1 5 M348 297 l1 5",
          }),
        ],
      }),
      o.jsx("g", {
        transform: "translate(352 176) scale(0.9)",
        children: o.jsxs("g", {
          className: "tale-butterfly",
          children: [
            o.jsx("path", {
              className: "tale-wing",
              d: "M0 0 C -5 -7 -13 -3 -8 3 C -12 9 -3 9 0 3 C 3 9 12 9 8 3 C 13 -3 5 -7 0 0 Z",
            }),
            o.jsx("path", { className: "tale-wing-line", d: "M0 -1 v5" }),
          ],
        }),
      }),
      o.jsx("g", {
        transform: "translate(446 132) scale(0.66)",
        children: o.jsxs("g", {
          className: "tale-butterfly b2",
          children: [
            o.jsx("path", {
              className: "tale-wing",
              d: "M0 0 C -5 -7 -13 -3 -8 3 C -12 9 -3 9 0 3 C 3 9 12 9 8 3 C 13 -3 5 -7 0 0 Z",
            }),
            o.jsx("path", { className: "tale-wing-line", d: "M0 -1 v5" }),
          ],
        }),
      }),
      o.jsx("path", {
        className: "tale-spark",
        d: "M240 126 L244 138 L256 142 L244 146 L240 158 L236 146 L224 142 L236 138 Z",
      }),
      o.jsx("path", {
        className: "tale-spark small",
        d: "M370 112 L372 118 L378 120 L372 122 L370 128 L368 122 L362 120 L368 118 Z",
      }),
      o.jsx("path", {
        className: "tale-spark tiny",
        d: "M462 88 L463.5 92 L467.5 93.5 L463.5 95 L462 99 L460.5 95 L456.5 93.5 L460.5 92 Z",
      }),
      o.jsxs("g", {
        className: "tale-flora",
        children: [
          Z2.map(([t, e, n]) =>
            o.jsx(
              "use",
              {
                href: "#tale-flower",
                transform: `translate(${t} ${e}) scale(${n})`,
              },
              `${t}-${e}`,
            ),
          ),
          o.jsx("use", {
            href: "#tale-mushroom",
            transform: "translate(284 316) scale(0.95)",
          }),
          o.jsx("use", {
            href: "#tale-mushroom",
            transform: "translate(534 320) scale(0.8)",
          }),
          o.jsx("path", {
            className: "tale-grass",
            d: "M204 320 q 3 -8 6 0 M212 322 q 2 -6 5 0 M392 320 q 3 -7 6 0 M488 312 q 3 -7 6 0 M572 316 q 3 -8 6 0 M246 310 q 2 -6 5 0 M416 312 q 3 -8 6 0 M620 312 q 2 -6 5 0",
          }),
        ],
      }),
    ],
  });
}
function ok() {
  return o.jsxs("svg", {
    className: "arch-crest",
    viewBox: "0 0 84 58",
    "aria-hidden": "true",
    focusable: "false",
    children: [
      o.jsx("path", {
        className: "ac-wing",
        d: "M8 46 C 22 47 31 39 33 29 M76 46 C 62 47 53 39 51 29",
      }),
      o.jsx("path", {
        className: "ac-wing",
        d: "M14 52 C 24 52 31 46 34 39 M70 52 C 60 52 53 46 50 39",
      }),
      o.jsx("path", {
        className: "ac-fleur",
        d: "M23 38 L26 17 L36 27.5 L42 10 L48 27.5 L58 17 L61 38 Z",
      }),
      o.jsx("path", { className: "ac-band", d: "M22 40 h40 v5 h-40 Z" }),
      o.jsx("circle", { className: "ac-pearl", cx: "26", cy: "16", r: "2" }),
      o.jsx("circle", { className: "ac-pearl", cx: "42", cy: "8", r: "2.4" }),
      o.jsx("circle", { className: "ac-pearl", cx: "58", cy: "16", r: "2" }),
      o.jsx("circle", { className: "ac-dot", cx: "42", cy: "51", r: "2" }),
    ],
  });
}
function Jf({ side: t }) {
  return o.jsxs("svg", {
    className: `arch-filigree ${t}`,
    viewBox: "0 0 110 170",
    "aria-hidden": "true",
    focusable: "false",
    children: [
      o.jsx("path", {
        className: "af-line",
        d: "M10 4 C 28 44 30 76 20 108 C 14 128 24 146 44 152",
      }),
      o.jsx("path", {
        className: "af-curl",
        d: "M28 44 C 48 36 58 52 48 64 C 41 72 30 66 33 56",
      }),
      o.jsx("path", {
        className: "af-curl",
        d: "M20 108 C 40 100 50 116 40 128 C 33 136 22 130 25 120",
      }),
      o.jsx("path", {
        className: "af-leaf",
        d: "M22 78 C 32 70 44 74 46 84 C 36 89 26 87 22 78 Z",
      }),
      o.jsx("path", {
        className: "af-leaf",
        d: "M30 128 C 40 134 44 144 38 150 C 30 144 27 134 30 128 Z",
      }),
      o.jsx("circle", { className: "af-dot", cx: "10", cy: "10", r: "2" }),
      o.jsx("circle", { className: "af-dot", cx: "44", cy: "152", r: "2" }),
    ],
  });
}
function La({ pos: t }) {
  return o.jsxs("svg", {
    className: `corner-flourish ${t}`,
    viewBox: "0 0 120 120",
    "aria-hidden": "true",
    focusable: "false",
    children: [
      o.jsx("path", { className: "cf-line", d: "M6 6 L6 52 M6 6 L52 6" }),
      o.jsx("path", {
        className: "cf-curl",
        d: "M6 66 C 6 44 24 32 40 38 C 52 43 50 60 38 60 C 30 60 27 52 33 48",
      }),
      o.jsx("path", {
        className: "cf-leaf",
        d: "M14 34 C 22 28 30 30 34 36 C 26 41 18 40 14 34 Z",
      }),
      o.jsx("circle", { className: "cf-dot", cx: "6", cy: "72", r: "2.4" }),
      o.jsx("circle", { className: "cf-dot", cx: "72", cy: "6", r: "2.4" }),
    ],
  });
}
function lk() {
  return o.jsxs("svg", {
    className: "compass-rose",
    viewBox: "0 0 200 200",
    "aria-hidden": "true",
    focusable: "false",
    children: [
      o.jsx("circle", { className: "cr-ring", cx: "100", cy: "100", r: "92" }),
      o.jsx("circle", {
        className: "cr-ring thin",
        cx: "100",
        cy: "100",
        r: "76",
      }),
      o.jsx("path", {
        className: "cr-star",
        d: "M100 22 L112 88 L178 100 L112 112 L100 178 L88 112 L22 100 L88 88 Z",
      }),
      o.jsx("path", {
        className: "cr-star small",
        d: "M100 58 L107 93 L142 100 L107 107 L100 142 L93 107 L58 100 L93 93 Z",
      }),
      o.jsx("circle", { className: "cr-core", cx: "100", cy: "100", r: "5" }),
      ["N", "E", "S", "W"].map((t, e) =>
        o.jsx(
          "text",
          {
            className: "cr-letter",
            x: [100, 176, 100, 24][e],
            y: [16, 104, 192, 104][e],
            children: t,
          },
          t,
        ),
      ),
    ],
  });
}
function Yf({ className: t = "" }) {
  return o.jsxs("svg", {
    className: `vine ${t}`,
    viewBox: "0 0 220 90",
    "aria-hidden": "true",
    focusable: "false",
    children: [
      o.jsx("path", {
        className: "vine-line",
        d: "M2 84 C 40 84 58 58 92 58 C 128 58 140 34 176 34 C 196 34 208 26 218 14",
      }),
      o.jsx("path", {
        className: "vine-leaf",
        d: "M46 78 C 54 64 68 62 76 68 C 68 79 56 82 46 78 Z",
      }),
      o.jsx("path", {
        className: "vine-leaf",
        d: "M104 58 C 112 43 126 41 134 47 C 126 58 114 61 104 58 Z",
      }),
      o.jsx("path", {
        className: "vine-leaf",
        d: "M160 40 C 168 26 182 24 190 30 C 182 41 170 44 160 40 Z",
      }),
      o.jsx("circle", {
        className: "vine-berry",
        cx: "70",
        cy: "70",
        r: "2.6",
      }),
      o.jsx("circle", {
        className: "vine-berry",
        cx: "132",
        cy: "50",
        r: "2.4",
      }),
      o.jsx("circle", {
        className: "vine-berry",
        cx: "196",
        cy: "26",
        r: "2.2",
      }),
    ],
  });
}
function ck() {
  const t = sk(),
    e = ek(),
    n = e.days,
    [r, s] = b.useState(() => new Date());
  b.useEffect(() => {
    const S = setInterval(() => s(new Date()), 3e4);
    return () => clearInterval(S);
  }, []);
  const i = tk(r),
    a = nk(r.getHours()),
    l = ["日", "一", "二", "三", "四", "五", "六"],
    c = `${r.getFullYear()} 年 ${r.getMonth() + 1} 月 ${r.getDate()} 日 · 星期${l[r.getDay()]}`,
    u = `${String(r.getHours()).padStart(2, "0")}:${String(r.getMinutes()).padStart(2, "0")}`,
    [d, f, h] = e.start.split("-"),
    p = `${d} 年 ${Number(f)} 月 ${Number(h)} 日`,
    [v, x] = b.useState(0),
    [_, m] = b.useState(null),
    g = b.useRef(0),
    y = b.useRef(null),
    { photos: E } = q0(),
    { custom: R, add: A, remove: P } = G2(),
    [U, te] = b.useState({});
  b.useEffect(() => {
    const S = {},
      T = [];
    for (const w of E)
      if (w.url) S[w.id] = w.url;
      else if (w.blob)
        try {
          const L = URL.createObjectURL(w.blob);
          ((S[w.id] = L), T.push(L));
        } catch {}
    return (te(S), () => T.forEach((w) => URL.revokeObjectURL(w)));
  }, [E]);
  const z = b.useMemo(
      () => [
        ...Vf,
        ...R.map((S) => ({
          ...S,
          custom: !0,
          img: "",
          src: U[S.photoId] || "",
        })),
      ],
      [R, U],
    ),
    [Se, Ee] = b.useState(!1),
    [ne, be] = b.useState({ name: "", en: "", note: "", photoId: "" }),
    [fe, Le] = b.useState(""),
    Me = (S) => {
      ((g.current = S), x(S));
    },
    O = (S) => {
      S === g.current && m(S);
    };
  (b.useEffect(() => {
    if (_ === null && !Se) return;
    const S = (T) => {
      T.key === "Escape" && (m(null), Ee(!1));
    };
    return (
      window.addEventListener("keydown", S),
      () => window.removeEventListener("keydown", S)
    );
  }, [_, Se]),
    b.useEffect(() => {
      const S = z.length - 1;
      (g.current > S && ((g.current = Math.max(0, S)), x(Math.max(0, S))),
        _ !== null && _ > S && m(null));
    }, [z.length, _]));
  function Q() {
    (be({ name: "", en: "", note: "", photoId: "" }), Le(""), Ee(!0));
  }
  function Z() {
    if (!ne.name.trim()) {
      Le("总得给这一站起个名字");
      return;
    }
    A(ne) && Ee(!1);
  }
  function Ne(S) {
    const T = z[S];
    T != null &&
      T.custom &&
      window.confirm(`删掉「${T.name}」这一站？`) &&
      (P(T.id), m(null));
  }
  const [xe, K] = b.useState(null),
    J = b.useRef(0),
    de = () => {
      (K({ key: Date.now(), text: Wf[Math.floor(Math.random() * Wf.length)] }),
        clearTimeout(J.current),
        (J.current = setTimeout(() => K(null), 3600)));
    };
  b.useEffect(() => () => clearTimeout(J.current), []);
  const [j, M] = b.useState(null),
    H = b.useRef(0),
    k = b.useRef(0),
    D = () => {
      ((k.current += 1),
        M({ key: Date.now(), text: qf[(k.current - 1) % qf.length] }),
        clearTimeout(H.current),
        (H.current = setTimeout(() => M(null), 3800)));
    };
  b.useEffect(() => () => clearTimeout(H.current), []);
  const [ke, oe] = b.useState(() => ns[new Date().getDate() % ns.length]),
    [ue, we] = b.useState(0),
    [ve, _e] = b.useState(!1),
    ye = () => {
      (oe((S) => {
        let T = S;
        for (; T === S && ns.length > 1; )
          T = ns[Math.floor(Math.random() * ns.length)];
        return T;
      }),
        we((S) => S + 1),
        _e(!0));
    },
    pe = z[Math.min(v, z.length - 1)] || z[0],
    N = Math.max(0, ns.indexOf(ke)),
    V = Kf[N] || Kf[0];
  return o.jsxs("div", {
    className: "home tale-home",
    children: [
      o.jsxs("header", {
        className: "tale-head",
        children: [
          o.jsxs("div", {
            className: "tale-eyebrow",
            children: [
              o.jsx("span", { className: "tale-rule", "aria-hidden": "true" }),
              o.jsx("span", {
                className: "tale-brand",
                children: "Our Little Days",
              }),
              o.jsx("span", {
                className: "tale-star",
                "aria-hidden": "true",
                children: "✦",
              }),
              o.jsx("span", { className: "tale-date", children: c }),
              o.jsx("span", { className: "tale-rule", "aria-hidden": "true" }),
            ],
          }),
          o.jsxs("div", {
            className: "tale-head-row",
            children: [
              o.jsxs("div", {
                className: "tale-greet",
                children: [
                  o.jsx("h1", { className: "tale-title", children: a.hello }),
                  o.jsx("p", { className: "tale-sub", children: a.sub }),
                ],
              }),
              o.jsx("div", {
                className: "tale-medallion",
                "aria-label": `现在 ${u}`,
                children: o.jsxs("span", {
                  className: "tale-medallion-inner",
                  children: [
                    o.jsx("span", {
                      className: "tale-medallion-time",
                      children: u,
                    }),
                    o.jsx("span", {
                      className: "tale-medallion-cap",
                      children: i.isDay ? "DAYLIGHT" : "MOONLIGHT",
                    }),
                  ],
                }),
              }),
            ],
          }),
        ],
      }),
      o.jsxs("section", {
        className: `tale-hero is-${i.phase}`,
        "aria-label": "在一起的天数",
        children: [
          o.jsx(ok, {}),
          o.jsxs("div", {
            className: "tale-arch",
            children: [
              o.jsxs("div", {
                className: "tale-scene",
                children: [
                  o.jsx("span", {
                    className: "tale-sky-glow",
                    "aria-hidden": "true",
                  }),
                  o.jsx("span", {
                    className: "tale-cloud c1",
                    "aria-hidden": "true",
                  }),
                  o.jsx("span", {
                    className: "tale-cloud c2",
                    "aria-hidden": "true",
                  }),
                  o.jsx("span", {
                    className: "tale-cloud c3",
                    "aria-hidden": "true",
                  }),
                  o.jsx("span", {
                    className: "tale-stars",
                    "aria-hidden": "true",
                    children: J2.map((S, T) =>
                      o.jsx(
                        "i",
                        {
                          style: {
                            left: S.left,
                            top: S.top,
                            animationDelay: S.delay,
                          },
                        },
                        T,
                      ),
                    ),
                  }),
                  o.jsx("span", {
                    className: "tale-petals",
                    "aria-hidden": "true",
                    children: X2.map((S, T) =>
                      o.jsx(
                        "i",
                        {
                          style: {
                            left: S.left,
                            top: S.top,
                            animationDelay: S.delay,
                            animationDuration: S.dur,
                          },
                        },
                        T,
                      ),
                    ),
                  }),
                  o.jsxs("svg", {
                    className: "tale-arc",
                    viewBox: "0 0 100 100",
                    preserveAspectRatio: "none",
                    "aria-hidden": "true",
                    children: [
                      o.jsx("path", {
                        className: "tale-arc-line",
                        d: "M6 52 A 44 30 0 0 1 94 52",
                      }),
                      o.jsx("path", {
                        className: "tale-arc-gold",
                        d: "M6 52 A 44 30 0 0 1 94 52",
                      }),
                    ],
                  }),
                  o.jsx("span", {
                    className: "tale-mark m1",
                    "aria-hidden": "true",
                    children: "VI",
                  }),
                  o.jsx("span", {
                    className: "tale-mark m2",
                    "aria-hidden": "true",
                    children: "XVIII",
                  }),
                  o.jsxs("button", {
                    type: "button",
                    className: "tale-orb",
                    style: { left: `${i.x}%`, top: `${i.y}%` },
                    onClick: de,
                    "aria-label": "轻触日月，许一个愿望",
                    children: [
                      o.jsx("span", { className: "tale-orb-halo" }),
                      o.jsx("span", { className: "tale-orb-core" }),
                    ],
                  }),
                  xe &&
                    o.jsxs(
                      "span",
                      {
                        className: "tale-wish",
                        role: "status",
                        children: [
                          o.jsx("i", { "aria-hidden": "true", children: "✦" }),
                          xe.text,
                        ],
                      },
                      xe.key,
                    ),
                  o.jsx(ak, {}),
                  o.jsx("button", {
                    type: "button",
                    className: "tale-couple-hit",
                    onClick: D,
                    "aria-label": "轻触画里的两个人，听一句悄悄话",
                  }),
                  j &&
                    o.jsxs(
                      "span",
                      {
                        className: "tale-whisper",
                        role: "status",
                        children: [
                          o.jsx("i", { "aria-hidden": "true", children: "♥" }),
                          j.text,
                        ],
                      },
                      j.key,
                    ),
                  j &&
                    o.jsx(
                      "span",
                      {
                        className: "tale-hearts couple-hearts",
                        "aria-hidden": "true",
                        children: [0, 1, 2, 3, 4].map((S) => o.jsx("i", {}, S)),
                      },
                      `c${j.key}`,
                    ),
                  xe &&
                    o.jsx(
                      "span",
                      {
                        className: "tale-hearts orb-hearts",
                        "aria-hidden": "true",
                        style: { left: `${i.x}%`, top: `${i.y}%` },
                        children: [0, 1, 2, 3].map((S) => o.jsx("i", {}, S)),
                      },
                      `o${xe.key}`,
                    ),
                  o.jsx("span", {
                    className: "tale-fireflies",
                    "aria-hidden": "true",
                    children: Y2.map((S, T) =>
                      o.jsx(
                        "i",
                        {
                          style: {
                            left: S.left,
                            bottom: S.bottom,
                            animationDelay: S.delay,
                            animationDuration: S.dur,
                          },
                        },
                        T,
                      ),
                    ),
                  }),
                  o.jsx("span", {
                    className: "tale-shade",
                    "aria-hidden": "true",
                  }),
                  o.jsx(Yf, { className: "tale-vine" }),
                ],
              }),
              o.jsx(Jf, { side: "left" }),
              o.jsx(Jf, { side: "right" }),
            ],
          }),
          o.jsxs("div", {
            className: "tale-plaque",
            children: [
              o.jsx("span", {
                className: "tale-plaque-label",
                children: "在一起的第",
              }),
              o.jsxs("span", {
                className: "tale-plaque-num",
                children: [
                  o.jsx("b", { children: n }),
                  o.jsx("i", { children: "天" }),
                ],
              }),
              o.jsx("span", {
                className: "tale-plaque-rule",
                "aria-hidden": "true",
                children: o.jsx("span", { children: "✦" }),
              }),
              o.jsxs("span", {
                className: "tale-plaque-sub",
                children: ["从 ", p, " 开始 · 走过 ", Vf.length, " 座城市"],
              }),
            ],
          }),
          o.jsxs("p", {
            className: "tale-quote",
            children: [
              o.jsx("span", { "aria-hidden": "true", children: "❦" }),
              " and every day, a little more",
              " ",
              o.jsx("span", { "aria-hidden": "true", children: "❦" }),
            ],
          }),
          o.jsxs("p", {
            className: "tale-play-hint",
            children: [
              o.jsx("span", { "aria-hidden": "true", children: "✦" }),
              " 轻触日月，许个愿；碰碰画里人，听句悄悄话",
            ],
          }),
        ],
      }),
      o.jsxs("section", {
        className: "journey",
        "aria-label": "一起走过的城市",
        children: [
          o.jsx(La, { pos: "tl" }),
          o.jsx(La, { pos: "tr" }),
          o.jsx(La, { pos: "bl" }),
          o.jsx(La, { pos: "br" }),
          o.jsxs("div", {
            className: "journey-head",
            children: [
              o.jsx("span", {
                className: "journey-kicker",
                children: "Our Journey · To Be Continued",
              }),
              o.jsx("h2", {
                className: "journey-title",
                children: "一起走过的城市",
              }),
              o.jsx("p", {
                className: "journey-sub",
                children: "每一张明信片，都是我们寄给自己的回忆",
              }),
            ],
          }),
          o.jsxs("div", {
            className: "journey-body",
            children: [
              o.jsxs("div", {
                className: "journey-info",
                children: [
                  o.jsxs("span", {
                    className: "journey-chapter",
                    children: ["CHAPTER ", String(v + 1).padStart(2, "0")],
                  }),
                  o.jsx("h3", { className: "journey-city", children: pe.name }),
                  pe.en
                    ? o.jsx("span", {
                        className: "journey-en",
                        children: pe.en,
                      })
                    : null,
                  o.jsx("p", { className: "journey-note", children: pe.note }),
                  o.jsx("span", {
                    className: "journey-stamps-cap",
                    children: "Postmarks",
                  }),
                  o.jsx("ul", {
                    className: "journey-dots",
                    "aria-hidden": "true",
                    children: z.map((S, T) =>
                      o.jsx(
                        "li",
                        {
                          className: T === v ? "on" : "",
                          children: o.jsx("span", { children: S.name[0] }),
                        },
                        S.id || S.name,
                      ),
                    ),
                  }),
                  o.jsxs("div", {
                    className: "journey-nav",
                    children: [
                      o.jsx("button", {
                        type: "button",
                        onClick: () => {
                          var S;
                          return (S = y.current) == null ? void 0 : S.prev();
                        },
                        "aria-label": "上一张明信片",
                        children: "‹",
                      }),
                      o.jsxs("span", {
                        children: [
                          String(v + 1).padStart(2, "0"),
                          " ",
                          o.jsxs("i", {
                            children: ["/ ", String(z.length).padStart(2, "0")],
                          }),
                        ],
                      }),
                      o.jsx("button", {
                        type: "button",
                        onClick: () => {
                          var S;
                          return (S = y.current) == null ? void 0 : S.next();
                        },
                        "aria-label": "下一张明信片",
                        children: "›",
                      }),
                    ],
                  }),
                  o.jsxs("button", {
                    type: "button",
                    className: "journey-add",
                    onClick: Q,
                    children: [
                      o.jsx("span", { "aria-hidden": "true", children: "＋" }),
                      " 添加一站",
                    ],
                  }),
                  o.jsx("p", {
                    className: "journey-hint",
                    children: "拖动或点击明信片，翻看下一页",
                  }),
                ],
              }),
              o.jsxs("div", {
                className: "journey-deck",
                children: [
                  o.jsx(lk, {}),
                  o.jsx(ig, {
                    ref: y,
                    width: t ? 332 : 404,
                    height: t ? 224 : 264,
                    cardDistance: t ? 26 : 42,
                    verticalDistance: t ? 32 : 46,
                    depth: t ? 56 : 84,
                    skewAmount: 4,
                    visibleCards: t ? 2 : 3,
                    delay: 5200,
                    speed: 1,
                    bounce: 0.42,
                    hoverSpread: 0.1,
                    parallax: 0.35,
                    dim: 0.48,
                    cardRadius: 14,
                    theme: "light",
                    onChange: Me,
                    onCardClick: O,
                    children: z.map((S, T) =>
                      o.jsx(
                        td,
                        {
                          className: "tale-pc-holder",
                          children: o.jsxs("div", {
                            className: "tale-pc",
                            children: [
                              o.jsxs("div", {
                                className: "tale-pc-photo",
                                style: { background: S.grad },
                                children: [
                                  o.jsx("span", {
                                    className: "tale-pc-fallback",
                                    children: S.name,
                                  }),
                                  S.src || S.img
                                    ? o.jsx("img", {
                                        src: S.src || Gf(S.img),
                                        alt: `${S.name}的明信片插画`,
                                        loading: "lazy",
                                        draggable: "false",
                                        onError: (w) => {
                                          w.currentTarget.style.display =
                                            "none";
                                        },
                                      })
                                    : null,
                                  o.jsx("span", {
                                    className: "tale-pc-vignette",
                                    "aria-hidden": "true",
                                  }),
                                  o.jsx("span", {
                                    className: "tale-pc-stamp",
                                    "aria-hidden": "true",
                                    children: S.name[0],
                                  }),
                                  o.jsx("span", {
                                    className: "tale-pc-postmark",
                                    "aria-hidden": "true",
                                    children: ik(S.note),
                                  }),
                                ],
                              }),
                              o.jsxs("div", {
                                className: "tale-pc-bottom",
                                children: [
                                  o.jsxs("span", {
                                    className: "tale-pc-cap",
                                    children: [
                                      "Chapter ",
                                      String(T + 1).padStart(2, "0"),
                                    ],
                                  }),
                                  o.jsx("b", { children: S.name }),
                                  o.jsx("span", {
                                    className: "tale-pc-note",
                                    children: S.note,
                                  }),
                                  o.jsx("span", {
                                    className: "tale-pc-seal",
                                    "aria-hidden": "true",
                                    children: "♥",
                                  }),
                                ],
                              }),
                              o.jsx("span", {
                                className: "tale-pc-frame",
                                "aria-hidden": "true",
                              }),
                            ],
                          }),
                        },
                        S.id || S.name,
                      ),
                    ),
                  }),
                ],
              }),
            ],
          }),
          o.jsxs("p", {
            className: "journey-foot",
            children: [
              o.jsx("span", { "aria-hidden": "true", children: "✦" }),
              " 下一站，还在等我们一起写",
            ],
          }),
        ],
      }),
      o.jsxs("section", {
        className: `letter ${ve ? "is-open" : ""}`,
        "aria-label": "今日一签",
        children: [
          o.jsx(Yf, { className: "letter-vine" }),
          o.jsxs("svg", {
            className: "letter-postmark",
            viewBox: "0 0 150 120",
            "aria-hidden": "true",
            focusable: "false",
            children: [
              o.jsx("circle", {
                className: "lp-ring",
                cx: "96",
                cy: "60",
                r: "34",
              }),
              o.jsx("circle", {
                className: "lp-ring thin",
                cx: "96",
                cy: "60",
                r: "27",
              }),
              o.jsx("path", {
                className: "lp-wave",
                d: "M0 46 q 8 -7 16 0 t 16 0 t 16 0 t 16 0 M0 60 q 8 -7 16 0 t 16 0 t 16 0 t 16 0 M0 74 q 8 -7 16 0 t 16 0 t 16 0 t 16 0",
              }),
              o.jsx("path", {
                className: "lp-star",
                d: "M96 52 l3 6 6 2 -6 2 -3 7 -3 -7 -6 -2 6 -2 Z",
              }),
            ],
          }),
          o.jsxs("div", {
            className: "letter-top",
            children: [
              o.jsx("span", {
                className: "letter-kicker",
                children: "A Note For Today",
              }),
              o.jsxs("div", {
                className: "letter-stamp",
                "aria-hidden": "true",
                children: [
                  o.jsx("span", { children: Q2[r.getMonth()] }),
                  o.jsx("b", {
                    children: String(r.getDate()).padStart(2, "0"),
                  }),
                  o.jsx("i", { children: "✦" }),
                ],
              }),
            ],
          }),
          o.jsxs("div", {
            className: "letter-main",
            children: [
              o.jsx("p", { className: "letter-lead", children: "今日一签" }),
              o.jsx(
                "p",
                {
                  className: "letter-verse",
                  "aria-live": "polite",
                  children: ve ? ke : "把今天的小心意，封进这封信里。",
                },
                ue,
              ),
              ve
                ? o.jsxs(o.Fragment, {
                    children: [
                      o.jsx(
                        "p",
                        { className: "letter-ps", children: V },
                        `ps${ue}`,
                      ),
                      o.jsx("p", {
                        className: "letter-sign",
                        children: "—— 小日子邮局 · 敬上",
                      }),
                    ],
                  })
                : o.jsx("p", {
                    className: "letter-sub",
                    children: "轻触火漆印，拆开属于我们的一页",
                  }),
            ],
          }),
          o.jsxs("div", {
            className: "letter-foot",
            children: [
              o.jsxs("span", { children: ["OUR DAY ", e.days] }),
              o.jsx("button", {
                type: "button",
                className: "letter-more",
                onClick: ye,
                children: "再抽一签",
              }),
            ],
          }),
          o.jsxs("button", {
            type: "button",
            className: `letter-seal ${ve ? "open" : ""}`,
            onClick: () => _e((S) => !S),
            "aria-expanded": ve,
            "aria-label": ve ? "合上信笺" : "拆开信笺",
            children: [
              o.jsxs("svg", {
                className: "letter-seal-svg",
                viewBox: "0 0 56 56",
                "aria-hidden": "true",
                children: [
                  o.jsx("circle", {
                    className: "seal-wax",
                    cx: "28",
                    cy: "28",
                    r: "25",
                  }),
                  o.jsx("circle", {
                    className: "seal-ring",
                    cx: "28",
                    cy: "28",
                    r: "19",
                  }),
                  o.jsx("path", {
                    className: "seal-heart",
                    d: "M28 38 C 18 31 16 24 20 20 C 24 16 28 20 28 24 C 28 20 32 16 36 20 C 40 24 38 31 28 38 Z",
                  }),
                ],
              }),
              o.jsx("span", { children: ve ? "合上" : "拆开" }),
            ],
          }),
        ],
      }),
      o.jsx("p", {
        className: "tale-foot",
        children: "愿你们的故事，被岁月温柔收藏 ✦",
      }),
      _ !== null &&
        z[_] &&
        ko.createPortal(
          o.jsx("div", {
            className: "tale-modal",
            role: "dialog",
            "aria-modal": "true",
            "aria-label": `${z[_].name} 的明信片`,
            onClick: () => m(null),
            children: o.jsxs("div", {
              className: "tale-modal-inner",
              onClick: (S) => S.stopPropagation(),
              children: [
                o.jsx("button", {
                  type: "button",
                  className: "tale-modal-close",
                  onClick: () => m(null),
                  "aria-label": "关闭",
                  children: "✕",
                }),
                o.jsxs("div", {
                  className: "tale-modal-photo",
                  style: { background: z[_].grad },
                  children: [
                    o.jsx("span", {
                      className: "tale-modal-fallback",
                      children: z[_].name,
                    }),
                    z[_].src || z[_].img
                      ? o.jsx("img", {
                          src: z[_].src || Gf(z[_].img),
                          alt: `${z[_].name}的明信片插画`,
                        })
                      : null,
                  ],
                }),
                o.jsxs("div", {
                  className: "tale-modal-cap",
                  children: [
                    o.jsxs("span", {
                      children: [
                        "CHAPTER ",
                        String(_ + 1).padStart(2, "0"),
                        z[_].en ? ` · ${z[_].en.toUpperCase()}` : "",
                      ],
                    }),
                    o.jsx("b", { children: z[_].name }),
                    o.jsx("i", { children: z[_].note }),
                  ],
                }),
                z[_].custom
                  ? o.jsx("button", {
                      type: "button",
                      className: "tale-modal-del",
                      onClick: () => Ne(_),
                      children: "删除这一站",
                    })
                  : null,
              ],
            }),
          }),
          document.body,
        ),
      Se &&
        ko.createPortal(
          o.jsx("div", {
            className: "tale-modal is-form",
            role: "dialog",
            "aria-modal": "true",
            "aria-label": "添加一站",
            onClick: () => Ee(!1),
            children: o.jsxs("form", {
              className: "tale-form",
              onClick: (S) => S.stopPropagation(),
              onSubmit: (S) => {
                (S.preventDefault(), Z());
              },
              children: [
                o.jsx("button", {
                  type: "button",
                  className: "tale-modal-close",
                  onClick: () => Ee(!1),
                  "aria-label": "关闭",
                  children: "✕",
                }),
                o.jsx("span", {
                  className: "tale-form-kicker",
                  children: "Add A Chapter",
                }),
                o.jsx("h3", {
                  className: "tale-form-title",
                  children: "给这一站写张明信片",
                }),
                o.jsxs("label", {
                  className: "tale-field",
                  children: [
                    o.jsx("span", { children: "城市 / 地点" }),
                    o.jsx("input", {
                      className: "tale-input",
                      value: ne.name,
                      maxLength: 8,
                      placeholder: "比如：大理",
                      onChange: (S) => be({ ...ne, name: S.target.value }),
                    }),
                  ],
                }),
                o.jsxs("label", {
                  className: "tale-field",
                  children: [
                    o.jsx("span", { children: "英文名（可不填）" }),
                    o.jsx("input", {
                      className: "tale-input",
                      value: ne.en,
                      maxLength: 24,
                      placeholder: "Dali",
                      onChange: (S) => be({ ...ne, en: S.target.value }),
                    }),
                  ],
                }),
                o.jsxs("label", {
                  className: "tale-field",
                  children: [
                    o.jsx("span", { children: "一句话备注" }),
                    o.jsx("input", {
                      className: "tale-input",
                      value: ne.note,
                      maxLength: 24,
                      placeholder: "风花雪月 · 2026",
                      onChange: (S) => be({ ...ne, note: S.target.value }),
                    }),
                  ],
                }),
                o.jsxs("div", {
                  className: "tale-pick",
                  children: [
                    o.jsx("span", {
                      className: "tale-pick-cap",
                      children: "挑一张照片墙里的照片",
                    }),
                    E.length === 0
                      ? o.jsx("p", {
                          className: "tale-pick-empty",
                          children:
                            "照片墙还空着 —— 先去「照片墙」传几张，或者留空用插画底",
                        })
                      : o.jsx("ul", {
                          className: "tale-pick-grid",
                          children: E.map((S) =>
                            o.jsx(
                              "li",
                              {
                                children: o.jsx("button", {
                                  type: "button",
                                  className:
                                    "tale-pick-item" +
                                    (ne.photoId === S.id ? " on" : ""),
                                  "aria-label": "用这张照片",
                                  onClick: () =>
                                    be({
                                      ...ne,
                                      photoId: ne.photoId === S.id ? "" : S.id,
                                    }),
                                  children: U[S.id]
                                    ? o.jsx("img", {
                                        src: U[S.id],
                                        alt: "",
                                        loading: "lazy",
                                      })
                                    : o.jsx("span", { children: "🖼️" }),
                                }),
                              },
                              S.id,
                            ),
                          ),
                        }),
                  ],
                }),
                o.jsx("p", {
                  className: `tale-form-err${fe ? " show" : ""}`,
                  children: fe || " ",
                }),
                o.jsxs("div", {
                  className: "tale-form-foot",
                  children: [
                    o.jsx("button", {
                      type: "button",
                      className: "tale-btn ghost",
                      onClick: () => Ee(!1),
                      children: "取消",
                    }),
                    o.jsx("button", {
                      type: "submit",
                      className: "tale-btn gold",
                      children: "收进卡组",
                    }),
                  ],
                }),
              ],
            }),
          }),
          document.body,
        ),
    ],
  });
}
function uk() {
  const [t, e] = b.useState("home"),
    [n, r] = b.useState(null);
  b.useEffect(()=>{window.scrollTo({top:0,behavior:"auto"});},[t]);
  return (
    b.useEffect(() => {
      const i = new URLSearchParams(window.location.search).get("add");
      if (i) {
        const a = i.trim().slice(0,300);
        (e("todo"),
          r(a),
          window.history.replaceState(
            {},
            "",
            window.location.pathname + window.location.hash,
          ),
          setTimeout(() => r(null), 1200));
      }
    }, []),
    o.jsxs(o.Fragment, {
      children: [
        o.jsx("div", {
          className: "app",
          children: o.jsxs(
            "div",
            {
              className: "view-stage",
              children: [
                t === "home" && o.jsx(ck, { onChange: e }),
                t === "todo" && o.jsx(v1, { pendingAdd: n }),
                t === "anniv" && o.jsx(O1, {}),
                t === "photos" && o.jsx(s2, {}),
                t === "games" && o.jsx(x2, {}),
                t === "movies" && o.jsx(U2, {}),
                t === "settings" && o.jsx(F2, {}),
              ],
            },
            t,
          ),
        }),
        o.jsx(Hy, { view: t, onChange: e }),
        o.jsx(StatusNotice, {}),
      ],
    })
  );
}
configureFeatures(b,{enabled:ea,config:Hs,pull:Io,upsert:$r,remove:B0,subscribe:z0,categories:sf,todoSeed:i1,Header:u1,celebrate:kr,photos:$1,restorePhotos:async photos=>{const db=await il();await new Promise((resolve,reject)=>{const tx=db.transaction(Lo,'readwrite');for(const photo of photos)tx.objectStore(Lo).put(photo);tx.oncomplete=resolve;tx.onerror=()=>reject(tx.error);tx.onabort=()=>reject(tx.error);});}});
  if('serviceWorker' in navigator)navigator.serviceWorker.register(new URL('../sw.js',import.meta.url),{scope:new URL('../',import.meta.url).pathname}).catch(()=>{});

c0(document.getElementById("root")).render(o.jsx(uk, {}));
