function Bh(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const i in r)
        if (i !== "default" && !(i in e)) {
          const o = Object.getOwnPropertyDescriptor(r, i);
          o &&
            Object.defineProperty(
              e,
              i,
              o.get ? o : { enumerable: !0, get: () => r[i] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const o of i)
      if (o.type === "childList")
        for (const s of o.addedNodes)
          s.tagName === "LINK" && s.rel === "modulepreload" && r(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const o = {};
    return (
      i.integrity && (o.integrity = i.integrity),
      i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : i.crossOrigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const o = n(i);
    fetch(i.href, o);
  }
})();
function bh(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var _c = { exports: {} },
  mo = {},
  Sc = { exports: {} },
  D = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ur = Symbol.for("react.element"),
  $h = Symbol.for("react.portal"),
  Hh = Symbol.for("react.fragment"),
  Vh = Symbol.for("react.strict_mode"),
  Wh = Symbol.for("react.profiler"),
  Kh = Symbol.for("react.provider"),
  Gh = Symbol.for("react.context"),
  Qh = Symbol.for("react.forward_ref"),
  Yh = Symbol.for("react.suspense"),
  Jh = Symbol.for("react.memo"),
  Xh = Symbol.for("react.lazy"),
  Aa = Symbol.iterator;
function qh(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Aa && e[Aa]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Ec = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  kc = Object.assign,
  Cc = {};
function Fn(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Cc),
    (this.updater = n || Ec);
}
Fn.prototype.isReactComponent = {};
Fn.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Fn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Ic() {}
Ic.prototype = Fn.prototype;
function Cl(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Cc),
    (this.updater = n || Ec);
}
var Il = (Cl.prototype = new Ic());
Il.constructor = Cl;
kc(Il, Fn.prototype);
Il.isPureReactComponent = !0;
var Da = Array.isArray,
  xc = Object.prototype.hasOwnProperty,
  xl = { current: null },
  Tc = { key: !0, ref: !0, __self: !0, __source: !0 };
function Nc(e, t, n) {
  var r,
    i = {},
    o = null,
    s = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (s = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      xc.call(t, r) && !Tc.hasOwnProperty(r) && (i[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1) i.children = n;
  else if (1 < l) {
    for (var a = Array(l), u = 0; u < l; u++) a[u] = arguments[u + 2];
    i.children = a;
  }
  if (e && e.defaultProps)
    for (r in ((l = e.defaultProps), l)) i[r] === void 0 && (i[r] = l[r]);
  return {
    $$typeof: Ur,
    type: e,
    key: o,
    ref: s,
    props: i,
    _owner: xl.current,
  };
}
function Zh(e, t) {
  return {
    $$typeof: Ur,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Tl(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Ur;
}
function ep(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Ma = /\/+/g;
function Bo(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? ep("" + e.key)
    : t.toString(36);
}
function vi(e, t, n, r, i) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var s = !1;
  if (e === null) s = !0;
  else
    switch (o) {
      case "string":
      case "number":
        s = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Ur:
          case $h:
            s = !0;
        }
    }
  if (s)
    return (
      (s = e),
      (i = i(s)),
      (e = r === "" ? "." + Bo(s, 0) : r),
      Da(i)
        ? ((n = ""),
          e != null && (n = e.replace(Ma, "$&/") + "/"),
          vi(i, t, n, "", function (u) {
            return u;
          }))
        : i != null &&
          (Tl(i) &&
            (i = Zh(
              i,
              n +
                (!i.key || (s && s.key === i.key)
                  ? ""
                  : ("" + i.key).replace(Ma, "$&/") + "/") +
                e
            )),
          t.push(i)),
      1
    );
  if (((s = 0), (r = r === "" ? "." : r + ":"), Da(e)))
    for (var l = 0; l < e.length; l++) {
      o = e[l];
      var a = r + Bo(o, l);
      s += vi(o, t, n, a, i);
    }
  else if (((a = qh(e)), typeof a == "function"))
    for (e = a.call(e), l = 0; !(o = e.next()).done; )
      (o = o.value), (a = r + Bo(o, l++)), (s += vi(o, t, n, a, i));
  else if (o === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return s;
}
function Zr(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    vi(e, r, "", "", function (o) {
      return t.call(n, o, i++);
    }),
    r
  );
}
function tp(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var fe = { current: null },
  yi = { transition: null },
  np = {
    ReactCurrentDispatcher: fe,
    ReactCurrentBatchConfig: yi,
    ReactCurrentOwner: xl,
  };
D.Children = {
  map: Zr,
  forEach: function (e, t, n) {
    Zr(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Zr(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Zr(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Tl(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
D.Component = Fn;
D.Fragment = Hh;
D.Profiler = Wh;
D.PureComponent = Cl;
D.StrictMode = Vh;
D.Suspense = Yh;
D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = np;
D.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = kc({}, e.props),
    i = e.key,
    o = e.ref,
    s = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (s = xl.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var l = e.type.defaultProps;
    for (a in t)
      xc.call(t, a) &&
        !Tc.hasOwnProperty(a) &&
        (r[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    l = Array(a);
    for (var u = 0; u < a; u++) l[u] = arguments[u + 2];
    r.children = l;
  }
  return { $$typeof: Ur, type: e.type, key: i, ref: o, props: r, _owner: s };
};
D.createContext = function (e) {
  return (
    (e = {
      $$typeof: Gh,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Kh, _context: e }),
    (e.Consumer = e)
  );
};
D.createElement = Nc;
D.createFactory = function (e) {
  var t = Nc.bind(null, e);
  return (t.type = e), t;
};
D.createRef = function () {
  return { current: null };
};
D.forwardRef = function (e) {
  return { $$typeof: Qh, render: e };
};
D.isValidElement = Tl;
D.lazy = function (e) {
  return { $$typeof: Xh, _payload: { _status: -1, _result: e }, _init: tp };
};
D.memo = function (e, t) {
  return { $$typeof: Jh, type: e, compare: t === void 0 ? null : t };
};
D.startTransition = function (e) {
  var t = yi.transition;
  yi.transition = {};
  try {
    e();
  } finally {
    yi.transition = t;
  }
};
D.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
D.useCallback = function (e, t) {
  return fe.current.useCallback(e, t);
};
D.useContext = function (e) {
  return fe.current.useContext(e);
};
D.useDebugValue = function () {};
D.useDeferredValue = function (e) {
  return fe.current.useDeferredValue(e);
};
D.useEffect = function (e, t) {
  return fe.current.useEffect(e, t);
};
D.useId = function () {
  return fe.current.useId();
};
D.useImperativeHandle = function (e, t, n) {
  return fe.current.useImperativeHandle(e, t, n);
};
D.useInsertionEffect = function (e, t) {
  return fe.current.useInsertionEffect(e, t);
};
D.useLayoutEffect = function (e, t) {
  return fe.current.useLayoutEffect(e, t);
};
D.useMemo = function (e, t) {
  return fe.current.useMemo(e, t);
};
D.useReducer = function (e, t, n) {
  return fe.current.useReducer(e, t, n);
};
D.useRef = function (e) {
  return fe.current.useRef(e);
};
D.useState = function (e) {
  return fe.current.useState(e);
};
D.useSyncExternalStore = function (e, t, n) {
  return fe.current.useSyncExternalStore(e, t, n);
};
D.useTransition = function () {
  return fe.current.useTransition();
};
D.version = "18.2.0";
Sc.exports = D;
var S = Sc.exports;
const et = bh(S),
  rp = Bh({ __proto__: null, default: et }, [S]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ip = S,
  op = Symbol.for("react.element"),
  sp = Symbol.for("react.fragment"),
  lp = Object.prototype.hasOwnProperty,
  ap = ip.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  up = { key: !0, ref: !0, __self: !0, __source: !0 };
function Pc(e, t, n) {
  var r,
    i = {},
    o = null,
    s = null;
  n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (s = t.ref);
  for (r in t) lp.call(t, r) && !up.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: op,
    type: e,
    key: o,
    ref: s,
    props: i,
    _owner: ap.current,
  };
}
mo.Fragment = sp;
mo.jsx = Pc;
mo.jsxs = Pc;
_c.exports = mo;
var g = _c.exports,
  Ss = {},
  Rc = { exports: {} },
  ke = {},
  Oc = { exports: {} },
  Lc = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(N, O) {
    var L = N.length;
    N.push(O);
    e: for (; 0 < L; ) {
      var G = (L - 1) >>> 1,
        Z = N[G];
      if (0 < i(Z, O)) (N[G] = O), (N[L] = Z), (L = G);
      else break e;
    }
  }
  function n(N) {
    return N.length === 0 ? null : N[0];
  }
  function r(N) {
    if (N.length === 0) return null;
    var O = N[0],
      L = N.pop();
    if (L !== O) {
      N[0] = L;
      e: for (var G = 0, Z = N.length, Xr = Z >>> 1; G < Xr; ) {
        var Bt = 2 * (G + 1) - 1,
          Fo = N[Bt],
          bt = Bt + 1,
          qr = N[bt];
        if (0 > i(Fo, L))
          bt < Z && 0 > i(qr, Fo)
            ? ((N[G] = qr), (N[bt] = L), (G = bt))
            : ((N[G] = Fo), (N[Bt] = L), (G = Bt));
        else if (bt < Z && 0 > i(qr, L)) (N[G] = qr), (N[bt] = L), (G = bt);
        else break e;
      }
    }
    return O;
  }
  function i(N, O) {
    var L = N.sortIndex - O.sortIndex;
    return L !== 0 ? L : N.id - O.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var s = Date,
      l = s.now();
    e.unstable_now = function () {
      return s.now() - l;
    };
  }
  var a = [],
    u = [],
    f = 1,
    p = null,
    m = 3,
    y = !1,
    w = !1,
    _ = !1,
    x = typeof setTimeout == "function" ? setTimeout : null,
    h = typeof clearTimeout == "function" ? clearTimeout : null,
    c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function d(N) {
    for (var O = n(u); O !== null; ) {
      if (O.callback === null) r(u);
      else if (O.startTime <= N)
        r(u), (O.sortIndex = O.expirationTime), t(a, O);
      else break;
      O = n(u);
    }
  }
  function v(N) {
    if (((_ = !1), d(N), !w))
      if (n(a) !== null) (w = !0), Uo(E);
      else {
        var O = n(u);
        O !== null && zo(v, O.startTime - N);
      }
  }
  function E(N, O) {
    (w = !1), _ && ((_ = !1), h(P), (P = -1)), (y = !0);
    var L = m;
    try {
      for (
        d(O), p = n(a);
        p !== null && (!(p.expirationTime > O) || (N && !Oe()));

      ) {
        var G = p.callback;
        if (typeof G == "function") {
          (p.callback = null), (m = p.priorityLevel);
          var Z = G(p.expirationTime <= O);
          (O = e.unstable_now()),
            typeof Z == "function" ? (p.callback = Z) : p === n(a) && r(a),
            d(O);
        } else r(a);
        p = n(a);
      }
      if (p !== null) var Xr = !0;
      else {
        var Bt = n(u);
        Bt !== null && zo(v, Bt.startTime - O), (Xr = !1);
      }
      return Xr;
    } finally {
      (p = null), (m = L), (y = !1);
    }
  }
  var I = !1,
    C = null,
    P = -1,
    F = 5,
    A = -1;
  function Oe() {
    return !(e.unstable_now() - A < F);
  }
  function Wn() {
    if (C !== null) {
      var N = e.unstable_now();
      A = N;
      var O = !0;
      try {
        O = C(!0, N);
      } finally {
        O ? Kn() : ((I = !1), (C = null));
      }
    } else I = !1;
  }
  var Kn;
  if (typeof c == "function")
    Kn = function () {
      c(Wn);
    };
  else if (typeof MessageChannel < "u") {
    var La = new MessageChannel(),
      Fh = La.port2;
    (La.port1.onmessage = Wn),
      (Kn = function () {
        Fh.postMessage(null);
      });
  } else
    Kn = function () {
      x(Wn, 0);
    };
  function Uo(N) {
    (C = N), I || ((I = !0), Kn());
  }
  function zo(N, O) {
    P = x(function () {
      N(e.unstable_now());
    }, O);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (N) {
      N.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      w || y || ((w = !0), Uo(E));
    }),
    (e.unstable_forceFrameRate = function (N) {
      0 > N || 125 < N
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (F = 0 < N ? Math.floor(1e3 / N) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return m;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a);
    }),
    (e.unstable_next = function (N) {
      switch (m) {
        case 1:
        case 2:
        case 3:
          var O = 3;
          break;
        default:
          O = m;
      }
      var L = m;
      m = O;
      try {
        return N();
      } finally {
        m = L;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (N, O) {
      switch (N) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          N = 3;
      }
      var L = m;
      m = N;
      try {
        return O();
      } finally {
        m = L;
      }
    }),
    (e.unstable_scheduleCallback = function (N, O, L) {
      var G = e.unstable_now();
      switch (
        (typeof L == "object" && L !== null
          ? ((L = L.delay), (L = typeof L == "number" && 0 < L ? G + L : G))
          : (L = G),
        N)
      ) {
        case 1:
          var Z = -1;
          break;
        case 2:
          Z = 250;
          break;
        case 5:
          Z = 1073741823;
          break;
        case 4:
          Z = 1e4;
          break;
        default:
          Z = 5e3;
      }
      return (
        (Z = L + Z),
        (N = {
          id: f++,
          callback: O,
          priorityLevel: N,
          startTime: L,
          expirationTime: Z,
          sortIndex: -1,
        }),
        L > G
          ? ((N.sortIndex = L),
            t(u, N),
            n(a) === null &&
              N === n(u) &&
              (_ ? (h(P), (P = -1)) : (_ = !0), zo(v, L - G)))
          : ((N.sortIndex = Z), t(a, N), w || y || ((w = !0), Uo(E))),
        N
      );
    }),
    (e.unstable_shouldYield = Oe),
    (e.unstable_wrapCallback = function (N) {
      var O = m;
      return function () {
        var L = m;
        m = O;
        try {
          return N.apply(this, arguments);
        } finally {
          m = L;
        }
      };
    });
})(Lc);
Oc.exports = Lc;
var cp = Oc.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ac = S,
  Ee = cp;
function k(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Dc = new Set(),
  mr = {};
function sn(e, t) {
  Rn(e, t), Rn(e + "Capture", t);
}
function Rn(e, t) {
  for (mr[e] = t, e = 0; e < t.length; e++) Dc.add(t[e]);
}
var nt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Es = Object.prototype.hasOwnProperty,
  dp =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  ja = {},
  Ua = {};
function fp(e) {
  return Es.call(Ua, e)
    ? !0
    : Es.call(ja, e)
    ? !1
    : dp.test(e)
    ? (Ua[e] = !0)
    : ((ja[e] = !0), !1);
}
function hp(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function pp(e, t, n, r) {
  if (t === null || typeof t > "u" || hp(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function he(e, t, n, r, i, o, s) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = s);
}
var ie = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    ie[e] = new he(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  ie[t] = new he(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  ie[e] = new he(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  ie[e] = new he(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    ie[e] = new he(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  ie[e] = new he(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  ie[e] = new he(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  ie[e] = new he(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  ie[e] = new he(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Nl = /[\-:]([a-z])/g;
function Pl(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Nl, Pl);
    ie[t] = new he(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Nl, Pl);
    ie[t] = new he(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Nl, Pl);
  ie[t] = new he(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  ie[e] = new he(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ie.xlinkHref = new he(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  ie[e] = new he(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Rl(e, t, n, r) {
  var i = ie.hasOwnProperty(t) ? ie[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (pp(t, n, i, r) && (n = null),
    r || i === null
      ? fp(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : i.mustUseProperty
      ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
      : ((t = i.attributeName),
        (r = i.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((i = i.type),
            (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var lt = Ac.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  ei = Symbol.for("react.element"),
  un = Symbol.for("react.portal"),
  cn = Symbol.for("react.fragment"),
  Ol = Symbol.for("react.strict_mode"),
  ks = Symbol.for("react.profiler"),
  Mc = Symbol.for("react.provider"),
  jc = Symbol.for("react.context"),
  Ll = Symbol.for("react.forward_ref"),
  Cs = Symbol.for("react.suspense"),
  Is = Symbol.for("react.suspense_list"),
  Al = Symbol.for("react.memo"),
  ft = Symbol.for("react.lazy"),
  Uc = Symbol.for("react.offscreen"),
  za = Symbol.iterator;
function Gn(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (za && e[za]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var W = Object.assign,
  bo;
function tr(e) {
  if (bo === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      bo = (t && t[1]) || "";
    }
  return (
    `
` +
    bo +
    e
  );
}
var $o = !1;
function Ho(e, t) {
  if (!e || $o) return "";
  $o = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var i = u.stack.split(`
`),
          o = r.stack.split(`
`),
          s = i.length - 1,
          l = o.length - 1;
        1 <= s && 0 <= l && i[s] !== o[l];

      )
        l--;
      for (; 1 <= s && 0 <= l; s--, l--)
        if (i[s] !== o[l]) {
          if (s !== 1 || l !== 1)
            do
              if ((s--, l--, 0 > l || i[s] !== o[l])) {
                var a =
                  `
` + i[s].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    a.includes("<anonymous>") &&
                    (a = a.replace("<anonymous>", e.displayName)),
                  a
                );
              }
            while (1 <= s && 0 <= l);
          break;
        }
    }
  } finally {
    ($o = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? tr(e) : "";
}
function mp(e) {
  switch (e.tag) {
    case 5:
      return tr(e.type);
    case 16:
      return tr("Lazy");
    case 13:
      return tr("Suspense");
    case 19:
      return tr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Ho(e.type, !1)), e;
    case 11:
      return (e = Ho(e.type.render, !1)), e;
    case 1:
      return (e = Ho(e.type, !0)), e;
    default:
      return "";
  }
}
function xs(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case cn:
      return "Fragment";
    case un:
      return "Portal";
    case ks:
      return "Profiler";
    case Ol:
      return "StrictMode";
    case Cs:
      return "Suspense";
    case Is:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case jc:
        return (e.displayName || "Context") + ".Consumer";
      case Mc:
        return (e._context.displayName || "Context") + ".Provider";
      case Ll:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Al:
        return (
          (t = e.displayName || null), t !== null ? t : xs(e.type) || "Memo"
        );
      case ft:
        (t = e._payload), (e = e._init);
        try {
          return xs(e(t));
        } catch {}
    }
  return null;
}
function gp(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return xs(t);
    case 8:
      return t === Ol ? "StrictMode" : "Mode";
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
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Dt(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function zc(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function vp(e) {
  var t = zc(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (s) {
          (r = "" + s), o.call(this, s);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (s) {
          r = "" + s;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function ti(e) {
  e._valueTracker || (e._valueTracker = vp(e));
}
function Fc(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = zc(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Di(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Ts(e, t) {
  var n = t.checked;
  return W({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Fa(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Dt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Bc(e, t) {
  (t = t.checked), t != null && Rl(e, "checked", t, !1);
}
function Ns(e, t) {
  Bc(e, t);
  var n = Dt(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Ps(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Ps(e, t.type, Dt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Ba(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function Ps(e, t, n) {
  (t !== "number" || Di(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var nr = Array.isArray;
function Sn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Dt(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function Rs(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(k(91));
  return W({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function ba(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(k(92));
      if (nr(n)) {
        if (1 < n.length) throw Error(k(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Dt(n) };
}
function bc(e, t) {
  var n = Dt(t.value),
    r = Dt(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function $a(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function $c(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Os(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? $c(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var ni,
  Hc = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        ni = ni || document.createElement("div"),
          ni.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = ni.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function gr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var or = {
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
  yp = ["Webkit", "ms", "Moz", "O"];
Object.keys(or).forEach(function (e) {
  yp.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (or[t] = or[e]);
  });
});
function Vc(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (or.hasOwnProperty(e) && or[e])
    ? ("" + t).trim()
    : t + "px";
}
function Wc(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = Vc(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var wp = W(
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
  }
);
function Ls(e, t) {
  if (t) {
    if (wp[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(k(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(k(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(k(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(k(62));
  }
}
function As(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
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
var Ds = null;
function Dl(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Ms = null,
  En = null,
  kn = null;
function Ha(e) {
  if ((e = Br(e))) {
    if (typeof Ms != "function") throw Error(k(280));
    var t = e.stateNode;
    t && ((t = _o(t)), Ms(e.stateNode, e.type, t));
  }
}
function Kc(e) {
  En ? (kn ? kn.push(e) : (kn = [e])) : (En = e);
}
function Gc() {
  if (En) {
    var e = En,
      t = kn;
    if (((kn = En = null), Ha(e), t)) for (e = 0; e < t.length; e++) Ha(t[e]);
  }
}
function Qc(e, t) {
  return e(t);
}
function Yc() {}
var Vo = !1;
function Jc(e, t, n) {
  if (Vo) return e(t, n);
  Vo = !0;
  try {
    return Qc(e, t, n);
  } finally {
    (Vo = !1), (En !== null || kn !== null) && (Yc(), Gc());
  }
}
function vr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = _o(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
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
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(k(231, t, typeof n));
  return n;
}
var js = !1;
if (nt)
  try {
    var Qn = {};
    Object.defineProperty(Qn, "passive", {
      get: function () {
        js = !0;
      },
    }),
      window.addEventListener("test", Qn, Qn),
      window.removeEventListener("test", Qn, Qn);
  } catch {
    js = !1;
  }
function _p(e, t, n, r, i, o, s, l, a) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (f) {
    this.onError(f);
  }
}
var sr = !1,
  Mi = null,
  ji = !1,
  Us = null,
  Sp = {
    onError: function (e) {
      (sr = !0), (Mi = e);
    },
  };
function Ep(e, t, n, r, i, o, s, l, a) {
  (sr = !1), (Mi = null), _p.apply(Sp, arguments);
}
function kp(e, t, n, r, i, o, s, l, a) {
  if ((Ep.apply(this, arguments), sr)) {
    if (sr) {
      var u = Mi;
      (sr = !1), (Mi = null);
    } else throw Error(k(198));
    ji || ((ji = !0), (Us = u));
  }
}
function ln(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Xc(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Va(e) {
  if (ln(e) !== e) throw Error(k(188));
}
function Cp(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = ln(e)), t === null)) throw Error(k(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var o = i.alternate;
    if (o === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === o.child) {
      for (o = i.child; o; ) {
        if (o === n) return Va(i), e;
        if (o === r) return Va(i), t;
        o = o.sibling;
      }
      throw Error(k(188));
    }
    if (n.return !== r.return) (n = i), (r = o);
    else {
      for (var s = !1, l = i.child; l; ) {
        if (l === n) {
          (s = !0), (n = i), (r = o);
          break;
        }
        if (l === r) {
          (s = !0), (r = i), (n = o);
          break;
        }
        l = l.sibling;
      }
      if (!s) {
        for (l = o.child; l; ) {
          if (l === n) {
            (s = !0), (n = o), (r = i);
            break;
          }
          if (l === r) {
            (s = !0), (r = o), (n = i);
            break;
          }
          l = l.sibling;
        }
        if (!s) throw Error(k(189));
      }
    }
    if (n.alternate !== r) throw Error(k(190));
  }
  if (n.tag !== 3) throw Error(k(188));
  return n.stateNode.current === n ? e : t;
}
function qc(e) {
  return (e = Cp(e)), e !== null ? Zc(e) : null;
}
function Zc(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Zc(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var ed = Ee.unstable_scheduleCallback,
  Wa = Ee.unstable_cancelCallback,
  Ip = Ee.unstable_shouldYield,
  xp = Ee.unstable_requestPaint,
  Q = Ee.unstable_now,
  Tp = Ee.unstable_getCurrentPriorityLevel,
  Ml = Ee.unstable_ImmediatePriority,
  td = Ee.unstable_UserBlockingPriority,
  Ui = Ee.unstable_NormalPriority,
  Np = Ee.unstable_LowPriority,
  nd = Ee.unstable_IdlePriority,
  go = null,
  $e = null;
function Pp(e) {
  if ($e && typeof $e.onCommitFiberRoot == "function")
    try {
      $e.onCommitFiberRoot(go, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var je = Math.clz32 ? Math.clz32 : Lp,
  Rp = Math.log,
  Op = Math.LN2;
function Lp(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Rp(e) / Op) | 0)) | 0;
}
var ri = 64,
  ii = 4194304;
function rr(e) {
  switch (e & -e) {
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
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function zi(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    o = e.pingedLanes,
    s = n & 268435455;
  if (s !== 0) {
    var l = s & ~i;
    l !== 0 ? (r = rr(l)) : ((o &= s), o !== 0 && (r = rr(o)));
  } else (s = n & ~i), s !== 0 ? (r = rr(s)) : o !== 0 && (r = rr(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (o = t & -t), i >= o || (i === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - je(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function Ap(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
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
      return t + 5e3;
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
function Dp(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var s = 31 - je(o),
      l = 1 << s,
      a = i[s];
    a === -1
      ? (!(l & n) || l & r) && (i[s] = Ap(l, t))
      : a <= t && (e.expiredLanes |= l),
      (o &= ~l);
  }
}
function zs(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function rd() {
  var e = ri;
  return (ri <<= 1), !(ri & 4194240) && (ri = 64), e;
}
function Wo(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function zr(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - je(t)),
    (e[t] = n);
}
function Mp(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - je(n),
      o = 1 << i;
    (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~o);
  }
}
function jl(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - je(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var j = 0;
function id(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var od,
  Ul,
  sd,
  ld,
  ad,
  Fs = !1,
  oi = [],
  Et = null,
  kt = null,
  Ct = null,
  yr = new Map(),
  wr = new Map(),
  pt = [],
  jp =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Ka(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Et = null;
      break;
    case "dragenter":
    case "dragleave":
      kt = null;
      break;
    case "mouseover":
    case "mouseout":
      Ct = null;
      break;
    case "pointerover":
    case "pointerout":
      yr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      wr.delete(t.pointerId);
  }
}
function Yn(e, t, n, r, i, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [i],
      }),
      t !== null && ((t = Br(t)), t !== null && Ul(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function Up(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return (Et = Yn(Et, e, t, n, r, i)), !0;
    case "dragenter":
      return (kt = Yn(kt, e, t, n, r, i)), !0;
    case "mouseover":
      return (Ct = Yn(Ct, e, t, n, r, i)), !0;
    case "pointerover":
      var o = i.pointerId;
      return yr.set(o, Yn(yr.get(o) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return (
        (o = i.pointerId), wr.set(o, Yn(wr.get(o) || null, e, t, n, r, i)), !0
      );
  }
  return !1;
}
function ud(e) {
  var t = Wt(e.target);
  if (t !== null) {
    var n = ln(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Xc(n)), t !== null)) {
          (e.blockedOn = t),
            ad(e.priority, function () {
              sd(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function wi(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Bs(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Ds = r), n.target.dispatchEvent(r), (Ds = null);
    } else return (t = Br(n)), t !== null && Ul(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Ga(e, t, n) {
  wi(e) && n.delete(t);
}
function zp() {
  (Fs = !1),
    Et !== null && wi(Et) && (Et = null),
    kt !== null && wi(kt) && (kt = null),
    Ct !== null && wi(Ct) && (Ct = null),
    yr.forEach(Ga),
    wr.forEach(Ga);
}
function Jn(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Fs ||
      ((Fs = !0),
      Ee.unstable_scheduleCallback(Ee.unstable_NormalPriority, zp)));
}
function _r(e) {
  function t(i) {
    return Jn(i, e);
  }
  if (0 < oi.length) {
    Jn(oi[0], e);
    for (var n = 1; n < oi.length; n++) {
      var r = oi[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Et !== null && Jn(Et, e),
      kt !== null && Jn(kt, e),
      Ct !== null && Jn(Ct, e),
      yr.forEach(t),
      wr.forEach(t),
      n = 0;
    n < pt.length;
    n++
  )
    (r = pt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < pt.length && ((n = pt[0]), n.blockedOn === null); )
    ud(n), n.blockedOn === null && pt.shift();
}
var Cn = lt.ReactCurrentBatchConfig,
  Fi = !0;
function Fp(e, t, n, r) {
  var i = j,
    o = Cn.transition;
  Cn.transition = null;
  try {
    (j = 1), zl(e, t, n, r);
  } finally {
    (j = i), (Cn.transition = o);
  }
}
function Bp(e, t, n, r) {
  var i = j,
    o = Cn.transition;
  Cn.transition = null;
  try {
    (j = 4), zl(e, t, n, r);
  } finally {
    (j = i), (Cn.transition = o);
  }
}
function zl(e, t, n, r) {
  if (Fi) {
    var i = Bs(e, t, n, r);
    if (i === null) ts(e, t, r, Bi, n), Ka(e, r);
    else if (Up(i, e, t, n, r)) r.stopPropagation();
    else if ((Ka(e, r), t & 4 && -1 < jp.indexOf(e))) {
      for (; i !== null; ) {
        var o = Br(i);
        if (
          (o !== null && od(o),
          (o = Bs(e, t, n, r)),
          o === null && ts(e, t, r, Bi, n),
          o === i)
        )
          break;
        i = o;
      }
      i !== null && r.stopPropagation();
    } else ts(e, t, r, null, n);
  }
}
var Bi = null;
function Bs(e, t, n, r) {
  if (((Bi = null), (e = Dl(r)), (e = Wt(e)), e !== null))
    if (((t = ln(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Xc(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Bi = e), null;
}
function cd(e) {
  switch (e) {
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
      switch (Tp()) {
        case Ml:
          return 1;
        case td:
          return 4;
        case Ui:
        case Np:
          return 16;
        case nd:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var wt = null,
  Fl = null,
  _i = null;
function dd() {
  if (_i) return _i;
  var e,
    t = Fl,
    n = t.length,
    r,
    i = "value" in wt ? wt.value : wt.textContent,
    o = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === i[o - r]; r++);
  return (_i = i.slice(e, 1 < r ? 1 - r : void 0));
}
function Si(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function si() {
  return !0;
}
function Qa() {
  return !1;
}
function Ce(e) {
  function t(n, r, i, o, s) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = s),
      (this.currentTarget = null);
    for (var l in e)
      e.hasOwnProperty(l) && ((n = e[l]), (this[l] = n ? n(o) : o[l]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? si
        : Qa),
      (this.isPropagationStopped = Qa),
      this
    );
  }
  return (
    W(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = si));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = si));
      },
      persist: function () {},
      isPersistent: si,
    }),
    t
  );
}
var Bn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Bl = Ce(Bn),
  Fr = W({}, Bn, { view: 0, detail: 0 }),
  bp = Ce(Fr),
  Ko,
  Go,
  Xn,
  vo = W({}, Fr, {
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
    getModifierState: bl,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Xn &&
            (Xn && e.type === "mousemove"
              ? ((Ko = e.screenX - Xn.screenX), (Go = e.screenY - Xn.screenY))
              : (Go = Ko = 0),
            (Xn = e)),
          Ko);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Go;
    },
  }),
  Ya = Ce(vo),
  $p = W({}, vo, { dataTransfer: 0 }),
  Hp = Ce($p),
  Vp = W({}, Fr, { relatedTarget: 0 }),
  Qo = Ce(Vp),
  Wp = W({}, Bn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Kp = Ce(Wp),
  Gp = W({}, Bn, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Qp = Ce(Gp),
  Yp = W({}, Bn, { data: 0 }),
  Ja = Ce(Yp),
  Jp = {
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
  Xp = {
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
  qp = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Zp(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = qp[e]) ? !!t[e] : !1;
}
function bl() {
  return Zp;
}
var em = W({}, Fr, {
    key: function (e) {
      if (e.key) {
        var t = Jp[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Si(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? Xp[e.keyCode] || "Unidentified"
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
    getModifierState: bl,
    charCode: function (e) {
      return e.type === "keypress" ? Si(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Si(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  tm = Ce(em),
  nm = W({}, vo, {
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
  Xa = Ce(nm),
  rm = W({}, Fr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: bl,
  }),
  im = Ce(rm),
  om = W({}, Bn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  sm = Ce(om),
  lm = W({}, vo, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  am = Ce(lm),
  um = [9, 13, 27, 32],
  $l = nt && "CompositionEvent" in window,
  lr = null;
nt && "documentMode" in document && (lr = document.documentMode);
var cm = nt && "TextEvent" in window && !lr,
  fd = nt && (!$l || (lr && 8 < lr && 11 >= lr)),
  qa = String.fromCharCode(32),
  Za = !1;
function hd(e, t) {
  switch (e) {
    case "keyup":
      return um.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function pd(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var dn = !1;
function dm(e, t) {
  switch (e) {
    case "compositionend":
      return pd(t);
    case "keypress":
      return t.which !== 32 ? null : ((Za = !0), qa);
    case "textInput":
      return (e = t.data), e === qa && Za ? null : e;
    default:
      return null;
  }
}
function fm(e, t) {
  if (dn)
    return e === "compositionend" || (!$l && hd(e, t))
      ? ((e = dd()), (_i = Fl = wt = null), (dn = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return fd && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var hm = {
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
function eu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!hm[e.type] : t === "textarea";
}
function md(e, t, n, r) {
  Kc(r),
    (t = bi(t, "onChange")),
    0 < t.length &&
      ((n = new Bl("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var ar = null,
  Sr = null;
function pm(e) {
  xd(e, 0);
}
function yo(e) {
  var t = pn(e);
  if (Fc(t)) return e;
}
function mm(e, t) {
  if (e === "change") return t;
}
var gd = !1;
if (nt) {
  var Yo;
  if (nt) {
    var Jo = "oninput" in document;
    if (!Jo) {
      var tu = document.createElement("div");
      tu.setAttribute("oninput", "return;"),
        (Jo = typeof tu.oninput == "function");
    }
    Yo = Jo;
  } else Yo = !1;
  gd = Yo && (!document.documentMode || 9 < document.documentMode);
}
function nu() {
  ar && (ar.detachEvent("onpropertychange", vd), (Sr = ar = null));
}
function vd(e) {
  if (e.propertyName === "value" && yo(Sr)) {
    var t = [];
    md(t, Sr, e, Dl(e)), Jc(pm, t);
  }
}
function gm(e, t, n) {
  e === "focusin"
    ? (nu(), (ar = t), (Sr = n), ar.attachEvent("onpropertychange", vd))
    : e === "focusout" && nu();
}
function vm(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return yo(Sr);
}
function ym(e, t) {
  if (e === "click") return yo(t);
}
function wm(e, t) {
  if (e === "input" || e === "change") return yo(t);
}
function _m(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var ze = typeof Object.is == "function" ? Object.is : _m;
function Er(e, t) {
  if (ze(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!Es.call(t, i) || !ze(e[i], t[i])) return !1;
  }
  return !0;
}
function ru(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function iu(e, t) {
  var n = ru(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
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
    n = ru(n);
  }
}
function yd(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? yd(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function wd() {
  for (var e = window, t = Di(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Di(e.document);
  }
  return t;
}
function Hl(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function Sm(e) {
  var t = wd(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    yd(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Hl(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = n.textContent.length,
          o = Math.min(r.start, i);
        (r = r.end === void 0 ? o : Math.min(r.end, i)),
          !e.extend && o > r && ((i = r), (r = o), (o = i)),
          (i = iu(n, o));
        var s = iu(n, r);
        i &&
          s &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== s.node ||
            e.focusOffset !== s.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(s.node, s.offset))
            : (t.setEnd(s.node, s.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Em = nt && "documentMode" in document && 11 >= document.documentMode,
  fn = null,
  bs = null,
  ur = null,
  $s = !1;
function ou(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  $s ||
    fn == null ||
    fn !== Di(r) ||
    ((r = fn),
    "selectionStart" in r && Hl(r)
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
    (ur && Er(ur, r)) ||
      ((ur = r),
      (r = bi(bs, "onSelect")),
      0 < r.length &&
        ((t = new Bl("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = fn))));
}
function li(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var hn = {
    animationend: li("Animation", "AnimationEnd"),
    animationiteration: li("Animation", "AnimationIteration"),
    animationstart: li("Animation", "AnimationStart"),
    transitionend: li("Transition", "TransitionEnd"),
  },
  Xo = {},
  _d = {};
nt &&
  ((_d = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete hn.animationend.animation,
    delete hn.animationiteration.animation,
    delete hn.animationstart.animation),
  "TransitionEvent" in window || delete hn.transitionend.transition);
function wo(e) {
  if (Xo[e]) return Xo[e];
  if (!hn[e]) return e;
  var t = hn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in _d) return (Xo[e] = t[n]);
  return e;
}
var Sd = wo("animationend"),
  Ed = wo("animationiteration"),
  kd = wo("animationstart"),
  Cd = wo("transitionend"),
  Id = new Map(),
  su =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function jt(e, t) {
  Id.set(e, t), sn(t, [e]);
}
for (var qo = 0; qo < su.length; qo++) {
  var Zo = su[qo],
    km = Zo.toLowerCase(),
    Cm = Zo[0].toUpperCase() + Zo.slice(1);
  jt(km, "on" + Cm);
}
jt(Sd, "onAnimationEnd");
jt(Ed, "onAnimationIteration");
jt(kd, "onAnimationStart");
jt("dblclick", "onDoubleClick");
jt("focusin", "onFocus");
jt("focusout", "onBlur");
jt(Cd, "onTransitionEnd");
Rn("onMouseEnter", ["mouseout", "mouseover"]);
Rn("onMouseLeave", ["mouseout", "mouseover"]);
Rn("onPointerEnter", ["pointerout", "pointerover"]);
Rn("onPointerLeave", ["pointerout", "pointerover"]);
sn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
sn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
sn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
sn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
sn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
sn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var ir =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Im = new Set("cancel close invalid load scroll toggle".split(" ").concat(ir));
function lu(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), kp(r, t, void 0, e), (e.currentTarget = null);
}
function xd(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var s = r.length - 1; 0 <= s; s--) {
          var l = r[s],
            a = l.instance,
            u = l.currentTarget;
          if (((l = l.listener), a !== o && i.isPropagationStopped())) break e;
          lu(i, l, u), (o = a);
        }
      else
        for (s = 0; s < r.length; s++) {
          if (
            ((l = r[s]),
            (a = l.instance),
            (u = l.currentTarget),
            (l = l.listener),
            a !== o && i.isPropagationStopped())
          )
            break e;
          lu(i, l, u), (o = a);
        }
    }
  }
  if (ji) throw ((e = Us), (ji = !1), (Us = null), e);
}
function B(e, t) {
  var n = t[Gs];
  n === void 0 && (n = t[Gs] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Td(t, e, 2, !1), n.add(r));
}
function es(e, t, n) {
  var r = 0;
  t && (r |= 4), Td(n, e, r, t);
}
var ai = "_reactListening" + Math.random().toString(36).slice(2);
function kr(e) {
  if (!e[ai]) {
    (e[ai] = !0),
      Dc.forEach(function (n) {
        n !== "selectionchange" && (Im.has(n) || es(n, !1, e), es(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[ai] || ((t[ai] = !0), es("selectionchange", !1, t));
  }
}
function Td(e, t, n, r) {
  switch (cd(t)) {
    case 1:
      var i = Fp;
      break;
    case 4:
      i = Bp;
      break;
    default:
      i = zl;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !js ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
      ? e.addEventListener(t, n, { passive: i })
      : e.addEventListener(t, n, !1);
}
function ts(e, t, n, r, i) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var s = r.tag;
      if (s === 3 || s === 4) {
        var l = r.stateNode.containerInfo;
        if (l === i || (l.nodeType === 8 && l.parentNode === i)) break;
        if (s === 4)
          for (s = r.return; s !== null; ) {
            var a = s.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = s.stateNode.containerInfo),
              a === i || (a.nodeType === 8 && a.parentNode === i))
            )
              return;
            s = s.return;
          }
        for (; l !== null; ) {
          if (((s = Wt(l)), s === null)) return;
          if (((a = s.tag), a === 5 || a === 6)) {
            r = o = s;
            continue e;
          }
          l = l.parentNode;
        }
      }
      r = r.return;
    }
  Jc(function () {
    var u = o,
      f = Dl(n),
      p = [];
    e: {
      var m = Id.get(e);
      if (m !== void 0) {
        var y = Bl,
          w = e;
        switch (e) {
          case "keypress":
            if (Si(n) === 0) break e;
          case "keydown":
          case "keyup":
            y = tm;
            break;
          case "focusin":
            (w = "focus"), (y = Qo);
            break;
          case "focusout":
            (w = "blur"), (y = Qo);
            break;
          case "beforeblur":
          case "afterblur":
            y = Qo;
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
            y = Ya;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            y = Hp;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            y = im;
            break;
          case Sd:
          case Ed:
          case kd:
            y = Kp;
            break;
          case Cd:
            y = sm;
            break;
          case "scroll":
            y = bp;
            break;
          case "wheel":
            y = am;
            break;
          case "copy":
          case "cut":
          case "paste":
            y = Qp;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            y = Xa;
        }
        var _ = (t & 4) !== 0,
          x = !_ && e === "scroll",
          h = _ ? (m !== null ? m + "Capture" : null) : m;
        _ = [];
        for (var c = u, d; c !== null; ) {
          d = c;
          var v = d.stateNode;
          if (
            (d.tag === 5 &&
              v !== null &&
              ((d = v),
              h !== null && ((v = vr(c, h)), v != null && _.push(Cr(c, v, d)))),
            x)
          )
            break;
          c = c.return;
        }
        0 < _.length &&
          ((m = new y(m, w, null, n, f)), p.push({ event: m, listeners: _ }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((m = e === "mouseover" || e === "pointerover"),
          (y = e === "mouseout" || e === "pointerout"),
          m &&
            n !== Ds &&
            (w = n.relatedTarget || n.fromElement) &&
            (Wt(w) || w[rt]))
        )
          break e;
        if (
          (y || m) &&
          ((m =
            f.window === f
              ? f
              : (m = f.ownerDocument)
              ? m.defaultView || m.parentWindow
              : window),
          y
            ? ((w = n.relatedTarget || n.toElement),
              (y = u),
              (w = w ? Wt(w) : null),
              w !== null &&
                ((x = ln(w)), w !== x || (w.tag !== 5 && w.tag !== 6)) &&
                (w = null))
            : ((y = null), (w = u)),
          y !== w)
        ) {
          if (
            ((_ = Ya),
            (v = "onMouseLeave"),
            (h = "onMouseEnter"),
            (c = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((_ = Xa),
              (v = "onPointerLeave"),
              (h = "onPointerEnter"),
              (c = "pointer")),
            (x = y == null ? m : pn(y)),
            (d = w == null ? m : pn(w)),
            (m = new _(v, c + "leave", y, n, f)),
            (m.target = x),
            (m.relatedTarget = d),
            (v = null),
            Wt(f) === u &&
              ((_ = new _(h, c + "enter", w, n, f)),
              (_.target = d),
              (_.relatedTarget = x),
              (v = _)),
            (x = v),
            y && w)
          )
            t: {
              for (_ = y, h = w, c = 0, d = _; d; d = an(d)) c++;
              for (d = 0, v = h; v; v = an(v)) d++;
              for (; 0 < c - d; ) (_ = an(_)), c--;
              for (; 0 < d - c; ) (h = an(h)), d--;
              for (; c--; ) {
                if (_ === h || (h !== null && _ === h.alternate)) break t;
                (_ = an(_)), (h = an(h));
              }
              _ = null;
            }
          else _ = null;
          y !== null && au(p, m, y, _, !1),
            w !== null && x !== null && au(p, x, w, _, !0);
        }
      }
      e: {
        if (
          ((m = u ? pn(u) : window),
          (y = m.nodeName && m.nodeName.toLowerCase()),
          y === "select" || (y === "input" && m.type === "file"))
        )
          var E = mm;
        else if (eu(m))
          if (gd) E = wm;
          else {
            E = vm;
            var I = gm;
          }
        else
          (y = m.nodeName) &&
            y.toLowerCase() === "input" &&
            (m.type === "checkbox" || m.type === "radio") &&
            (E = ym);
        if (E && (E = E(e, u))) {
          md(p, E, n, f);
          break e;
        }
        I && I(e, m, u),
          e === "focusout" &&
            (I = m._wrapperState) &&
            I.controlled &&
            m.type === "number" &&
            Ps(m, "number", m.value);
      }
      switch (((I = u ? pn(u) : window), e)) {
        case "focusin":
          (eu(I) || I.contentEditable === "true") &&
            ((fn = I), (bs = u), (ur = null));
          break;
        case "focusout":
          ur = bs = fn = null;
          break;
        case "mousedown":
          $s = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          ($s = !1), ou(p, n, f);
          break;
        case "selectionchange":
          if (Em) break;
        case "keydown":
        case "keyup":
          ou(p, n, f);
      }
      var C;
      if ($l)
        e: {
          switch (e) {
            case "compositionstart":
              var P = "onCompositionStart";
              break e;
            case "compositionend":
              P = "onCompositionEnd";
              break e;
            case "compositionupdate":
              P = "onCompositionUpdate";
              break e;
          }
          P = void 0;
        }
      else
        dn
          ? hd(e, n) && (P = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (P = "onCompositionStart");
      P &&
        (fd &&
          n.locale !== "ko" &&
          (dn || P !== "onCompositionStart"
            ? P === "onCompositionEnd" && dn && (C = dd())
            : ((wt = f),
              (Fl = "value" in wt ? wt.value : wt.textContent),
              (dn = !0))),
        (I = bi(u, P)),
        0 < I.length &&
          ((P = new Ja(P, e, null, n, f)),
          p.push({ event: P, listeners: I }),
          C ? (P.data = C) : ((C = pd(n)), C !== null && (P.data = C)))),
        (C = cm ? dm(e, n) : fm(e, n)) &&
          ((u = bi(u, "onBeforeInput")),
          0 < u.length &&
            ((f = new Ja("onBeforeInput", "beforeinput", null, n, f)),
            p.push({ event: f, listeners: u }),
            (f.data = C)));
    }
    xd(p, t);
  });
}
function Cr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function bi(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e,
      o = i.stateNode;
    i.tag === 5 &&
      o !== null &&
      ((i = o),
      (o = vr(e, n)),
      o != null && r.unshift(Cr(e, o, i)),
      (o = vr(e, t)),
      o != null && r.push(Cr(e, o, i))),
      (e = e.return);
  }
  return r;
}
function an(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function au(e, t, n, r, i) {
  for (var o = t._reactName, s = []; n !== null && n !== r; ) {
    var l = n,
      a = l.alternate,
      u = l.stateNode;
    if (a !== null && a === r) break;
    l.tag === 5 &&
      u !== null &&
      ((l = u),
      i
        ? ((a = vr(n, o)), a != null && s.unshift(Cr(n, a, l)))
        : i || ((a = vr(n, o)), a != null && s.push(Cr(n, a, l)))),
      (n = n.return);
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var xm = /\r\n?/g,
  Tm = /\u0000|\uFFFD/g;
function uu(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      xm,
      `
`
    )
    .replace(Tm, "");
}
function ui(e, t, n) {
  if (((t = uu(t)), uu(e) !== t && n)) throw Error(k(425));
}
function $i() {}
var Hs = null,
  Vs = null;
function Ws(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Ks = typeof setTimeout == "function" ? setTimeout : void 0,
  Nm = typeof clearTimeout == "function" ? clearTimeout : void 0,
  cu = typeof Promise == "function" ? Promise : void 0,
  Pm =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof cu < "u"
      ? function (e) {
          return cu.resolve(null).then(e).catch(Rm);
        }
      : Ks;
function Rm(e) {
  setTimeout(function () {
    throw e;
  });
}
function ns(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(i), _r(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  _r(t);
}
function It(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function du(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var bn = Math.random().toString(36).slice(2),
  be = "__reactFiber$" + bn,
  Ir = "__reactProps$" + bn,
  rt = "__reactContainer$" + bn,
  Gs = "__reactEvents$" + bn,
  Om = "__reactListeners$" + bn,
  Lm = "__reactHandles$" + bn;
function Wt(e) {
  var t = e[be];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[rt] || n[be])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = du(e); e !== null; ) {
          if ((n = e[be])) return n;
          e = du(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Br(e) {
  return (
    (e = e[be] || e[rt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function pn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(k(33));
}
function _o(e) {
  return e[Ir] || null;
}
var Qs = [],
  mn = -1;
function Ut(e) {
  return { current: e };
}
function b(e) {
  0 > mn || ((e.current = Qs[mn]), (Qs[mn] = null), mn--);
}
function z(e, t) {
  mn++, (Qs[mn] = e.current), (e.current = t);
}
var Mt = {},
  ae = Ut(Mt),
  ge = Ut(!1),
  qt = Mt;
function On(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Mt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    o;
  for (o in n) i[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function ve(e) {
  return (e = e.childContextTypes), e != null;
}
function Hi() {
  b(ge), b(ae);
}
function fu(e, t, n) {
  if (ae.current !== Mt) throw Error(k(168));
  z(ae, t), z(ge, n);
}
function Nd(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(k(108, gp(e) || "Unknown", i));
  return W({}, n, r);
}
function Vi(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Mt),
    (qt = ae.current),
    z(ae, e),
    z(ge, ge.current),
    !0
  );
}
function hu(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(k(169));
  n
    ? ((e = Nd(e, t, qt)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      b(ge),
      b(ae),
      z(ae, e))
    : b(ge),
    z(ge, n);
}
var Qe = null,
  So = !1,
  rs = !1;
function Pd(e) {
  Qe === null ? (Qe = [e]) : Qe.push(e);
}
function Am(e) {
  (So = !0), Pd(e);
}
function zt() {
  if (!rs && Qe !== null) {
    rs = !0;
    var e = 0,
      t = j;
    try {
      var n = Qe;
      for (j = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Qe = null), (So = !1);
    } catch (i) {
      throw (Qe !== null && (Qe = Qe.slice(e + 1)), ed(Ml, zt), i);
    } finally {
      (j = t), (rs = !1);
    }
  }
  return null;
}
var gn = [],
  vn = 0,
  Wi = null,
  Ki = 0,
  Ie = [],
  xe = 0,
  Zt = null,
  Je = 1,
  Xe = "";
function $t(e, t) {
  (gn[vn++] = Ki), (gn[vn++] = Wi), (Wi = e), (Ki = t);
}
function Rd(e, t, n) {
  (Ie[xe++] = Je), (Ie[xe++] = Xe), (Ie[xe++] = Zt), (Zt = e);
  var r = Je;
  e = Xe;
  var i = 32 - je(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var o = 32 - je(t) + i;
  if (30 < o) {
    var s = i - (i % 5);
    (o = (r & ((1 << s) - 1)).toString(32)),
      (r >>= s),
      (i -= s),
      (Je = (1 << (32 - je(t) + i)) | (n << i) | r),
      (Xe = o + e);
  } else (Je = (1 << o) | (n << i) | r), (Xe = e);
}
function Vl(e) {
  e.return !== null && ($t(e, 1), Rd(e, 1, 0));
}
function Wl(e) {
  for (; e === Wi; )
    (Wi = gn[--vn]), (gn[vn] = null), (Ki = gn[--vn]), (gn[vn] = null);
  for (; e === Zt; )
    (Zt = Ie[--xe]),
      (Ie[xe] = null),
      (Xe = Ie[--xe]),
      (Ie[xe] = null),
      (Je = Ie[--xe]),
      (Ie[xe] = null);
}
var Se = null,
  _e = null,
  $ = !1,
  Me = null;
function Od(e, t) {
  var n = Te(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function pu(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Se = e), (_e = It(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Se = e), (_e = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Zt !== null ? { id: Je, overflow: Xe } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Te(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Se = e),
            (_e = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Ys(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Js(e) {
  if ($) {
    var t = _e;
    if (t) {
      var n = t;
      if (!pu(e, t)) {
        if (Ys(e)) throw Error(k(418));
        t = It(n.nextSibling);
        var r = Se;
        t && pu(e, t)
          ? Od(r, n)
          : ((e.flags = (e.flags & -4097) | 2), ($ = !1), (Se = e));
      }
    } else {
      if (Ys(e)) throw Error(k(418));
      (e.flags = (e.flags & -4097) | 2), ($ = !1), (Se = e);
    }
  }
}
function mu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Se = e;
}
function ci(e) {
  if (e !== Se) return !1;
  if (!$) return mu(e), ($ = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Ws(e.type, e.memoizedProps))),
    t && (t = _e))
  ) {
    if (Ys(e)) throw (Ld(), Error(k(418)));
    for (; t; ) Od(e, t), (t = It(t.nextSibling));
  }
  if ((mu(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(k(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              _e = It(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      _e = null;
    }
  } else _e = Se ? It(e.stateNode.nextSibling) : null;
  return !0;
}
function Ld() {
  for (var e = _e; e; ) e = It(e.nextSibling);
}
function Ln() {
  (_e = Se = null), ($ = !1);
}
function Kl(e) {
  Me === null ? (Me = [e]) : Me.push(e);
}
var Dm = lt.ReactCurrentBatchConfig;
function Ae(e, t) {
  if (e && e.defaultProps) {
    (t = W({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var Gi = Ut(null),
  Qi = null,
  yn = null,
  Gl = null;
function Ql() {
  Gl = yn = Qi = null;
}
function Yl(e) {
  var t = Gi.current;
  b(Gi), (e._currentValue = t);
}
function Xs(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function In(e, t) {
  (Qi = e),
    (Gl = yn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (me = !0), (e.firstContext = null));
}
function Pe(e) {
  var t = e._currentValue;
  if (Gl !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), yn === null)) {
      if (Qi === null) throw Error(k(308));
      (yn = e), (Qi.dependencies = { lanes: 0, firstContext: e });
    } else yn = yn.next = e;
  return t;
}
var Kt = null;
function Jl(e) {
  Kt === null ? (Kt = [e]) : Kt.push(e);
}
function Ad(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), Jl(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    it(e, r)
  );
}
function it(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var ht = !1;
function Xl(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Dd(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function tt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function xt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), M & 2)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      it(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), Jl(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    it(e, n)
  );
}
function Ei(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), jl(e, n);
  }
}
function gu(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var s = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (i = o = s) : (o = o.next = s), (n = n.next);
      } while (n !== null);
      o === null ? (i = o = t) : (o = o.next = t);
    } else i = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Yi(e, t, n, r) {
  var i = e.updateQueue;
  ht = !1;
  var o = i.firstBaseUpdate,
    s = i.lastBaseUpdate,
    l = i.shared.pending;
  if (l !== null) {
    i.shared.pending = null;
    var a = l,
      u = a.next;
    (a.next = null), s === null ? (o = u) : (s.next = u), (s = a);
    var f = e.alternate;
    f !== null &&
      ((f = f.updateQueue),
      (l = f.lastBaseUpdate),
      l !== s &&
        (l === null ? (f.firstBaseUpdate = u) : (l.next = u),
        (f.lastBaseUpdate = a)));
  }
  if (o !== null) {
    var p = i.baseState;
    (s = 0), (f = u = a = null), (l = o);
    do {
      var m = l.lane,
        y = l.eventTime;
      if ((r & m) === m) {
        f !== null &&
          (f = f.next =
            {
              eventTime: y,
              lane: 0,
              tag: l.tag,
              payload: l.payload,
              callback: l.callback,
              next: null,
            });
        e: {
          var w = e,
            _ = l;
          switch (((m = t), (y = n), _.tag)) {
            case 1:
              if (((w = _.payload), typeof w == "function")) {
                p = w.call(y, p, m);
                break e;
              }
              p = w;
              break e;
            case 3:
              w.flags = (w.flags & -65537) | 128;
            case 0:
              if (
                ((w = _.payload),
                (m = typeof w == "function" ? w.call(y, p, m) : w),
                m == null)
              )
                break e;
              p = W({}, p, m);
              break e;
            case 2:
              ht = !0;
          }
        }
        l.callback !== null &&
          l.lane !== 0 &&
          ((e.flags |= 64),
          (m = i.effects),
          m === null ? (i.effects = [l]) : m.push(l));
      } else
        (y = {
          eventTime: y,
          lane: m,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null,
        }),
          f === null ? ((u = f = y), (a = p)) : (f = f.next = y),
          (s |= m);
      if (((l = l.next), l === null)) {
        if (((l = i.shared.pending), l === null)) break;
        (m = l),
          (l = m.next),
          (m.next = null),
          (i.lastBaseUpdate = m),
          (i.shared.pending = null);
      }
    } while (1);
    if (
      (f === null && (a = p),
      (i.baseState = a),
      (i.firstBaseUpdate = u),
      (i.lastBaseUpdate = f),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (s |= i.lane), (i = i.next);
      while (i !== t);
    } else o === null && (i.shared.lanes = 0);
    (tn |= s), (e.lanes = s), (e.memoizedState = p);
  }
}
function vu(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(k(191, i));
        i.call(r);
      }
    }
}
var Md = new Ac.Component().refs;
function qs(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : W({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Eo = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? ln(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = de(),
      i = Nt(e),
      o = tt(r, i);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = xt(e, o, i)),
      t !== null && (Ue(t, e, i, r), Ei(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = de(),
      i = Nt(e),
      o = tt(r, i);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = xt(e, o, i)),
      t !== null && (Ue(t, e, i, r), Ei(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = de(),
      r = Nt(e),
      i = tt(n, r);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = xt(e, i, r)),
      t !== null && (Ue(t, e, r, n), Ei(t, e, r));
  },
};
function yu(e, t, n, r, i, o, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, s)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Er(n, r) || !Er(i, o)
      : !0
  );
}
function jd(e, t, n) {
  var r = !1,
    i = Mt,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = Pe(o))
      : ((i = ve(t) ? qt : ae.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? On(e, i) : Mt)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Eo),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function wu(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Eo.enqueueReplaceState(t, t.state, null);
}
function Zs(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = Md), Xl(e);
  var o = t.contextType;
  typeof o == "object" && o !== null
    ? (i.context = Pe(o))
    : ((o = ve(t) ? qt : ae.current), (i.context = On(e, o))),
    (i.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (qs(e, t, o, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && Eo.enqueueReplaceState(i, i.state, null),
      Yi(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function qn(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(k(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(k(147, e));
      var i = r,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (s) {
            var l = i.refs;
            l === Md && (l = i.refs = {}),
              s === null ? delete l[o] : (l[o] = s);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(k(284));
    if (!n._owner) throw Error(k(290, e));
  }
  return e;
}
function di(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      k(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function _u(e) {
  var t = e._init;
  return t(e._payload);
}
function Ud(e) {
  function t(h, c) {
    if (e) {
      var d = h.deletions;
      d === null ? ((h.deletions = [c]), (h.flags |= 16)) : d.push(c);
    }
  }
  function n(h, c) {
    if (!e) return null;
    for (; c !== null; ) t(h, c), (c = c.sibling);
    return null;
  }
  function r(h, c) {
    for (h = new Map(); c !== null; )
      c.key !== null ? h.set(c.key, c) : h.set(c.index, c), (c = c.sibling);
    return h;
  }
  function i(h, c) {
    return (h = Pt(h, c)), (h.index = 0), (h.sibling = null), h;
  }
  function o(h, c, d) {
    return (
      (h.index = d),
      e
        ? ((d = h.alternate),
          d !== null
            ? ((d = d.index), d < c ? ((h.flags |= 2), c) : d)
            : ((h.flags |= 2), c))
        : ((h.flags |= 1048576), c)
    );
  }
  function s(h) {
    return e && h.alternate === null && (h.flags |= 2), h;
  }
  function l(h, c, d, v) {
    return c === null || c.tag !== 6
      ? ((c = cs(d, h.mode, v)), (c.return = h), c)
      : ((c = i(c, d)), (c.return = h), c);
  }
  function a(h, c, d, v) {
    var E = d.type;
    return E === cn
      ? f(h, c, d.props.children, v, d.key)
      : c !== null &&
        (c.elementType === E ||
          (typeof E == "object" &&
            E !== null &&
            E.$$typeof === ft &&
            _u(E) === c.type))
      ? ((v = i(c, d.props)), (v.ref = qn(h, c, d)), (v.return = h), v)
      : ((v = Ni(d.type, d.key, d.props, null, h.mode, v)),
        (v.ref = qn(h, c, d)),
        (v.return = h),
        v);
  }
  function u(h, c, d, v) {
    return c === null ||
      c.tag !== 4 ||
      c.stateNode.containerInfo !== d.containerInfo ||
      c.stateNode.implementation !== d.implementation
      ? ((c = ds(d, h.mode, v)), (c.return = h), c)
      : ((c = i(c, d.children || [])), (c.return = h), c);
  }
  function f(h, c, d, v, E) {
    return c === null || c.tag !== 7
      ? ((c = Jt(d, h.mode, v, E)), (c.return = h), c)
      : ((c = i(c, d)), (c.return = h), c);
  }
  function p(h, c, d) {
    if ((typeof c == "string" && c !== "") || typeof c == "number")
      return (c = cs("" + c, h.mode, d)), (c.return = h), c;
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case ei:
          return (
            (d = Ni(c.type, c.key, c.props, null, h.mode, d)),
            (d.ref = qn(h, null, c)),
            (d.return = h),
            d
          );
        case un:
          return (c = ds(c, h.mode, d)), (c.return = h), c;
        case ft:
          var v = c._init;
          return p(h, v(c._payload), d);
      }
      if (nr(c) || Gn(c))
        return (c = Jt(c, h.mode, d, null)), (c.return = h), c;
      di(h, c);
    }
    return null;
  }
  function m(h, c, d, v) {
    var E = c !== null ? c.key : null;
    if ((typeof d == "string" && d !== "") || typeof d == "number")
      return E !== null ? null : l(h, c, "" + d, v);
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case ei:
          return d.key === E ? a(h, c, d, v) : null;
        case un:
          return d.key === E ? u(h, c, d, v) : null;
        case ft:
          return (E = d._init), m(h, c, E(d._payload), v);
      }
      if (nr(d) || Gn(d)) return E !== null ? null : f(h, c, d, v, null);
      di(h, d);
    }
    return null;
  }
  function y(h, c, d, v, E) {
    if ((typeof v == "string" && v !== "") || typeof v == "number")
      return (h = h.get(d) || null), l(c, h, "" + v, E);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case ei:
          return (h = h.get(v.key === null ? d : v.key) || null), a(c, h, v, E);
        case un:
          return (h = h.get(v.key === null ? d : v.key) || null), u(c, h, v, E);
        case ft:
          var I = v._init;
          return y(h, c, d, I(v._payload), E);
      }
      if (nr(v) || Gn(v)) return (h = h.get(d) || null), f(c, h, v, E, null);
      di(c, v);
    }
    return null;
  }
  function w(h, c, d, v) {
    for (
      var E = null, I = null, C = c, P = (c = 0), F = null;
      C !== null && P < d.length;
      P++
    ) {
      C.index > P ? ((F = C), (C = null)) : (F = C.sibling);
      var A = m(h, C, d[P], v);
      if (A === null) {
        C === null && (C = F);
        break;
      }
      e && C && A.alternate === null && t(h, C),
        (c = o(A, c, P)),
        I === null ? (E = A) : (I.sibling = A),
        (I = A),
        (C = F);
    }
    if (P === d.length) return n(h, C), $ && $t(h, P), E;
    if (C === null) {
      for (; P < d.length; P++)
        (C = p(h, d[P], v)),
          C !== null &&
            ((c = o(C, c, P)), I === null ? (E = C) : (I.sibling = C), (I = C));
      return $ && $t(h, P), E;
    }
    for (C = r(h, C); P < d.length; P++)
      (F = y(C, h, P, d[P], v)),
        F !== null &&
          (e && F.alternate !== null && C.delete(F.key === null ? P : F.key),
          (c = o(F, c, P)),
          I === null ? (E = F) : (I.sibling = F),
          (I = F));
    return (
      e &&
        C.forEach(function (Oe) {
          return t(h, Oe);
        }),
      $ && $t(h, P),
      E
    );
  }
  function _(h, c, d, v) {
    var E = Gn(d);
    if (typeof E != "function") throw Error(k(150));
    if (((d = E.call(d)), d == null)) throw Error(k(151));
    for (
      var I = (E = null), C = c, P = (c = 0), F = null, A = d.next();
      C !== null && !A.done;
      P++, A = d.next()
    ) {
      C.index > P ? ((F = C), (C = null)) : (F = C.sibling);
      var Oe = m(h, C, A.value, v);
      if (Oe === null) {
        C === null && (C = F);
        break;
      }
      e && C && Oe.alternate === null && t(h, C),
        (c = o(Oe, c, P)),
        I === null ? (E = Oe) : (I.sibling = Oe),
        (I = Oe),
        (C = F);
    }
    if (A.done) return n(h, C), $ && $t(h, P), E;
    if (C === null) {
      for (; !A.done; P++, A = d.next())
        (A = p(h, A.value, v)),
          A !== null &&
            ((c = o(A, c, P)), I === null ? (E = A) : (I.sibling = A), (I = A));
      return $ && $t(h, P), E;
    }
    for (C = r(h, C); !A.done; P++, A = d.next())
      (A = y(C, h, P, A.value, v)),
        A !== null &&
          (e && A.alternate !== null && C.delete(A.key === null ? P : A.key),
          (c = o(A, c, P)),
          I === null ? (E = A) : (I.sibling = A),
          (I = A));
    return (
      e &&
        C.forEach(function (Wn) {
          return t(h, Wn);
        }),
      $ && $t(h, P),
      E
    );
  }
  function x(h, c, d, v) {
    if (
      (typeof d == "object" &&
        d !== null &&
        d.type === cn &&
        d.key === null &&
        (d = d.props.children),
      typeof d == "object" && d !== null)
    ) {
      switch (d.$$typeof) {
        case ei:
          e: {
            for (var E = d.key, I = c; I !== null; ) {
              if (I.key === E) {
                if (((E = d.type), E === cn)) {
                  if (I.tag === 7) {
                    n(h, I.sibling),
                      (c = i(I, d.props.children)),
                      (c.return = h),
                      (h = c);
                    break e;
                  }
                } else if (
                  I.elementType === E ||
                  (typeof E == "object" &&
                    E !== null &&
                    E.$$typeof === ft &&
                    _u(E) === I.type)
                ) {
                  n(h, I.sibling),
                    (c = i(I, d.props)),
                    (c.ref = qn(h, I, d)),
                    (c.return = h),
                    (h = c);
                  break e;
                }
                n(h, I);
                break;
              } else t(h, I);
              I = I.sibling;
            }
            d.type === cn
              ? ((c = Jt(d.props.children, h.mode, v, d.key)),
                (c.return = h),
                (h = c))
              : ((v = Ni(d.type, d.key, d.props, null, h.mode, v)),
                (v.ref = qn(h, c, d)),
                (v.return = h),
                (h = v));
          }
          return s(h);
        case un:
          e: {
            for (I = d.key; c !== null; ) {
              if (c.key === I)
                if (
                  c.tag === 4 &&
                  c.stateNode.containerInfo === d.containerInfo &&
                  c.stateNode.implementation === d.implementation
                ) {
                  n(h, c.sibling),
                    (c = i(c, d.children || [])),
                    (c.return = h),
                    (h = c);
                  break e;
                } else {
                  n(h, c);
                  break;
                }
              else t(h, c);
              c = c.sibling;
            }
            (c = ds(d, h.mode, v)), (c.return = h), (h = c);
          }
          return s(h);
        case ft:
          return (I = d._init), x(h, c, I(d._payload), v);
      }
      if (nr(d)) return w(h, c, d, v);
      if (Gn(d)) return _(h, c, d, v);
      di(h, d);
    }
    return (typeof d == "string" && d !== "") || typeof d == "number"
      ? ((d = "" + d),
        c !== null && c.tag === 6
          ? (n(h, c.sibling), (c = i(c, d)), (c.return = h), (h = c))
          : (n(h, c), (c = cs(d, h.mode, v)), (c.return = h), (h = c)),
        s(h))
      : n(h, c);
  }
  return x;
}
var An = Ud(!0),
  zd = Ud(!1),
  br = {},
  He = Ut(br),
  xr = Ut(br),
  Tr = Ut(br);
function Gt(e) {
  if (e === br) throw Error(k(174));
  return e;
}
function ql(e, t) {
  switch ((z(Tr, t), z(xr, e), z(He, br), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Os(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Os(t, e));
  }
  b(He), z(He, t);
}
function Dn() {
  b(He), b(xr), b(Tr);
}
function Fd(e) {
  Gt(Tr.current);
  var t = Gt(He.current),
    n = Os(t, e.type);
  t !== n && (z(xr, e), z(He, n));
}
function Zl(e) {
  xr.current === e && (b(He), b(xr));
}
var H = Ut(0);
function Ji(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var is = [];
function ea() {
  for (var e = 0; e < is.length; e++)
    is[e]._workInProgressVersionPrimary = null;
  is.length = 0;
}
var ki = lt.ReactCurrentDispatcher,
  os = lt.ReactCurrentBatchConfig,
  en = 0,
  V = null,
  X = null,
  ee = null,
  Xi = !1,
  cr = !1,
  Nr = 0,
  Mm = 0;
function oe() {
  throw Error(k(321));
}
function ta(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!ze(e[n], t[n])) return !1;
  return !0;
}
function na(e, t, n, r, i, o) {
  if (
    ((en = o),
    (V = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (ki.current = e === null || e.memoizedState === null ? Fm : Bm),
    (e = n(r, i)),
    cr)
  ) {
    o = 0;
    do {
      if (((cr = !1), (Nr = 0), 25 <= o)) throw Error(k(301));
      (o += 1),
        (ee = X = null),
        (t.updateQueue = null),
        (ki.current = bm),
        (e = n(r, i));
    } while (cr);
  }
  if (
    ((ki.current = qi),
    (t = X !== null && X.next !== null),
    (en = 0),
    (ee = X = V = null),
    (Xi = !1),
    t)
  )
    throw Error(k(300));
  return e;
}
function ra() {
  var e = Nr !== 0;
  return (Nr = 0), e;
}
function Be() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return ee === null ? (V.memoizedState = ee = e) : (ee = ee.next = e), ee;
}
function Re() {
  if (X === null) {
    var e = V.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = X.next;
  var t = ee === null ? V.memoizedState : ee.next;
  if (t !== null) (ee = t), (X = e);
  else {
    if (e === null) throw Error(k(310));
    (X = e),
      (e = {
        memoizedState: X.memoizedState,
        baseState: X.baseState,
        baseQueue: X.baseQueue,
        queue: X.queue,
        next: null,
      }),
      ee === null ? (V.memoizedState = ee = e) : (ee = ee.next = e);
  }
  return ee;
}
function Pr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function ss(e) {
  var t = Re(),
    n = t.queue;
  if (n === null) throw Error(k(311));
  n.lastRenderedReducer = e;
  var r = X,
    i = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (i !== null) {
      var s = i.next;
      (i.next = o.next), (o.next = s);
    }
    (r.baseQueue = i = o), (n.pending = null);
  }
  if (i !== null) {
    (o = i.next), (r = r.baseState);
    var l = (s = null),
      a = null,
      u = o;
    do {
      var f = u.lane;
      if ((en & f) === f)
        a !== null &&
          (a = a.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var p = {
          lane: f,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        a === null ? ((l = a = p), (s = r)) : (a = a.next = p),
          (V.lanes |= f),
          (tn |= f);
      }
      u = u.next;
    } while (u !== null && u !== o);
    a === null ? (s = r) : (a.next = l),
      ze(r, t.memoizedState) || (me = !0),
      (t.memoizedState = r),
      (t.baseState = s),
      (t.baseQueue = a),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (o = i.lane), (V.lanes |= o), (tn |= o), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function ls(e) {
  var t = Re(),
    n = t.queue;
  if (n === null) throw Error(k(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    o = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var s = (i = i.next);
    do (o = e(o, s.action)), (s = s.next);
    while (s !== i);
    ze(o, t.memoizedState) || (me = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function Bd() {}
function bd(e, t) {
  var n = V,
    r = Re(),
    i = t(),
    o = !ze(r.memoizedState, i);
  if (
    (o && ((r.memoizedState = i), (me = !0)),
    (r = r.queue),
    ia(Vd.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (ee !== null && ee.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Rr(9, Hd.bind(null, n, r, i, t), void 0, null),
      te === null)
    )
      throw Error(k(349));
    en & 30 || $d(n, t, i);
  }
  return i;
}
function $d(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = V.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (V.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Hd(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Wd(t) && Kd(e);
}
function Vd(e, t, n) {
  return n(function () {
    Wd(t) && Kd(e);
  });
}
function Wd(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !ze(e, n);
  } catch {
    return !0;
  }
}
function Kd(e) {
  var t = it(e, 1);
  t !== null && Ue(t, e, 1, -1);
}
function Su(e) {
  var t = Be();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Pr,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = zm.bind(null, V, e)),
    [t.memoizedState, e]
  );
}
function Rr(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = V.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (V.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Gd() {
  return Re().memoizedState;
}
function Ci(e, t, n, r) {
  var i = Be();
  (V.flags |= e),
    (i.memoizedState = Rr(1 | t, n, void 0, r === void 0 ? null : r));
}
function ko(e, t, n, r) {
  var i = Re();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (X !== null) {
    var s = X.memoizedState;
    if (((o = s.destroy), r !== null && ta(r, s.deps))) {
      i.memoizedState = Rr(t, n, o, r);
      return;
    }
  }
  (V.flags |= e), (i.memoizedState = Rr(1 | t, n, o, r));
}
function Eu(e, t) {
  return Ci(8390656, 8, e, t);
}
function ia(e, t) {
  return ko(2048, 8, e, t);
}
function Qd(e, t) {
  return ko(4, 2, e, t);
}
function Yd(e, t) {
  return ko(4, 4, e, t);
}
function Jd(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Xd(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), ko(4, 4, Jd.bind(null, t, e), n)
  );
}
function oa() {}
function qd(e, t) {
  var n = Re();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ta(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Zd(e, t) {
  var n = Re();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ta(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function ef(e, t, n) {
  return en & 21
    ? (ze(n, t) || ((n = rd()), (V.lanes |= n), (tn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (me = !0)), (e.memoizedState = n));
}
function jm(e, t) {
  var n = j;
  (j = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = os.transition;
  os.transition = {};
  try {
    e(!1), t();
  } finally {
    (j = n), (os.transition = r);
  }
}
function tf() {
  return Re().memoizedState;
}
function Um(e, t, n) {
  var r = Nt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    nf(e))
  )
    rf(t, n);
  else if (((n = Ad(e, t, n, r)), n !== null)) {
    var i = de();
    Ue(n, e, r, i), of(n, t, r);
  }
}
function zm(e, t, n) {
  var r = Nt(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (nf(e)) rf(t, i);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var s = t.lastRenderedState,
          l = o(s, n);
        if (((i.hasEagerState = !0), (i.eagerState = l), ze(l, s))) {
          var a = t.interleaved;
          a === null
            ? ((i.next = i), Jl(t))
            : ((i.next = a.next), (a.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = Ad(e, t, i, r)),
      n !== null && ((i = de()), Ue(n, e, r, i), of(n, t, r));
  }
}
function nf(e) {
  var t = e.alternate;
  return e === V || (t !== null && t === V);
}
function rf(e, t) {
  cr = Xi = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function of(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), jl(e, n);
  }
}
var qi = {
    readContext: Pe,
    useCallback: oe,
    useContext: oe,
    useEffect: oe,
    useImperativeHandle: oe,
    useInsertionEffect: oe,
    useLayoutEffect: oe,
    useMemo: oe,
    useReducer: oe,
    useRef: oe,
    useState: oe,
    useDebugValue: oe,
    useDeferredValue: oe,
    useTransition: oe,
    useMutableSource: oe,
    useSyncExternalStore: oe,
    useId: oe,
    unstable_isNewReconciler: !1,
  },
  Fm = {
    readContext: Pe,
    useCallback: function (e, t) {
      return (Be().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Pe,
    useEffect: Eu,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Ci(4194308, 4, Jd.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Ci(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Ci(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Be();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Be();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Um.bind(null, V, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Be();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Su,
    useDebugValue: oa,
    useDeferredValue: function (e) {
      return (Be().memoizedState = e);
    },
    useTransition: function () {
      var e = Su(!1),
        t = e[0];
      return (e = jm.bind(null, e[1])), (Be().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = V,
        i = Be();
      if ($) {
        if (n === void 0) throw Error(k(407));
        n = n();
      } else {
        if (((n = t()), te === null)) throw Error(k(349));
        en & 30 || $d(r, t, n);
      }
      i.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (i.queue = o),
        Eu(Vd.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        Rr(9, Hd.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Be(),
        t = te.identifierPrefix;
      if ($) {
        var n = Xe,
          r = Je;
        (n = (r & ~(1 << (32 - je(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Nr++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = Mm++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Bm = {
    readContext: Pe,
    useCallback: qd,
    useContext: Pe,
    useEffect: ia,
    useImperativeHandle: Xd,
    useInsertionEffect: Qd,
    useLayoutEffect: Yd,
    useMemo: Zd,
    useReducer: ss,
    useRef: Gd,
    useState: function () {
      return ss(Pr);
    },
    useDebugValue: oa,
    useDeferredValue: function (e) {
      var t = Re();
      return ef(t, X.memoizedState, e);
    },
    useTransition: function () {
      var e = ss(Pr)[0],
        t = Re().memoizedState;
      return [e, t];
    },
    useMutableSource: Bd,
    useSyncExternalStore: bd,
    useId: tf,
    unstable_isNewReconciler: !1,
  },
  bm = {
    readContext: Pe,
    useCallback: qd,
    useContext: Pe,
    useEffect: ia,
    useImperativeHandle: Xd,
    useInsertionEffect: Qd,
    useLayoutEffect: Yd,
    useMemo: Zd,
    useReducer: ls,
    useRef: Gd,
    useState: function () {
      return ls(Pr);
    },
    useDebugValue: oa,
    useDeferredValue: function (e) {
      var t = Re();
      return X === null ? (t.memoizedState = e) : ef(t, X.memoizedState, e);
    },
    useTransition: function () {
      var e = ls(Pr)[0],
        t = Re().memoizedState;
      return [e, t];
    },
    useMutableSource: Bd,
    useSyncExternalStore: bd,
    useId: tf,
    unstable_isNewReconciler: !1,
  };
function Mn(e, t) {
  try {
    var n = "",
      r = t;
    do (n += mp(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (o) {
    i =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function as(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function el(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var $m = typeof WeakMap == "function" ? WeakMap : Map;
function sf(e, t, n) {
  (n = tt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      eo || ((eo = !0), (cl = r)), el(e, t);
    }),
    n
  );
}
function lf(e, t, n) {
  (n = tt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        el(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        el(e, t),
          typeof r != "function" &&
            (Tt === null ? (Tt = new Set([this])) : Tt.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: s !== null ? s : "",
        });
      }),
    n
  );
}
function ku(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new $m();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = ng.bind(null, e, t, n)), t.then(e, e));
}
function Cu(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Iu(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = tt(-1, 1)), (t.tag = 2), xt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Hm = lt.ReactCurrentOwner,
  me = !1;
function ce(e, t, n, r) {
  t.child = e === null ? zd(t, null, n, r) : An(t, e.child, n, r);
}
function xu(e, t, n, r, i) {
  n = n.render;
  var o = t.ref;
  return (
    In(t, i),
    (r = na(e, t, n, r, o, i)),
    (n = ra()),
    e !== null && !me
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        ot(e, t, i))
      : ($ && n && Vl(t), (t.flags |= 1), ce(e, t, r, i), t.child)
  );
}
function Tu(e, t, n, r, i) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !ha(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), af(e, t, o, r, i))
      : ((e = Ni(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & i))) {
    var s = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Er), n(s, r) && e.ref === t.ref)
    )
      return ot(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = Pt(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function af(e, t, n, r, i) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Er(o, r) && e.ref === t.ref)
      if (((me = !1), (t.pendingProps = r = o), (e.lanes & i) !== 0))
        e.flags & 131072 && (me = !0);
      else return (t.lanes = e.lanes), ot(e, t, i);
  }
  return tl(e, t, n, r, i);
}
function uf(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        z(_n, we),
        (we |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          z(_n, we),
          (we |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        z(_n, we),
        (we |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      z(_n, we),
      (we |= r);
  return ce(e, t, i, n), t.child;
}
function cf(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function tl(e, t, n, r, i) {
  var o = ve(n) ? qt : ae.current;
  return (
    (o = On(t, o)),
    In(t, i),
    (n = na(e, t, n, r, o, i)),
    (r = ra()),
    e !== null && !me
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        ot(e, t, i))
      : ($ && r && Vl(t), (t.flags |= 1), ce(e, t, n, i), t.child)
  );
}
function Nu(e, t, n, r, i) {
  if (ve(n)) {
    var o = !0;
    Vi(t);
  } else o = !1;
  if ((In(t, i), t.stateNode === null))
    Ii(e, t), jd(t, n, r), Zs(t, n, r, i), (r = !0);
  else if (e === null) {
    var s = t.stateNode,
      l = t.memoizedProps;
    s.props = l;
    var a = s.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = Pe(u))
      : ((u = ve(n) ? qt : ae.current), (u = On(t, u)));
    var f = n.getDerivedStateFromProps,
      p =
        typeof f == "function" ||
        typeof s.getSnapshotBeforeUpdate == "function";
    p ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((l !== r || a !== u) && wu(t, s, r, u)),
      (ht = !1);
    var m = t.memoizedState;
    (s.state = m),
      Yi(t, r, s, i),
      (a = t.memoizedState),
      l !== r || m !== a || ge.current || ht
        ? (typeof f == "function" && (qs(t, n, f, r), (a = t.memoizedState)),
          (l = ht || yu(t, n, l, r, m, a, u))
            ? (p ||
                (typeof s.UNSAFE_componentWillMount != "function" &&
                  typeof s.componentWillMount != "function") ||
                (typeof s.componentWillMount == "function" &&
                  s.componentWillMount(),
                typeof s.UNSAFE_componentWillMount == "function" &&
                  s.UNSAFE_componentWillMount()),
              typeof s.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = a)),
          (s.props = r),
          (s.state = a),
          (s.context = u),
          (r = l))
        : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (s = t.stateNode),
      Dd(e, t),
      (l = t.memoizedProps),
      (u = t.type === t.elementType ? l : Ae(t.type, l)),
      (s.props = u),
      (p = t.pendingProps),
      (m = s.context),
      (a = n.contextType),
      typeof a == "object" && a !== null
        ? (a = Pe(a))
        : ((a = ve(n) ? qt : ae.current), (a = On(t, a)));
    var y = n.getDerivedStateFromProps;
    (f =
      typeof y == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function") ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((l !== p || m !== a) && wu(t, s, r, a)),
      (ht = !1),
      (m = t.memoizedState),
      (s.state = m),
      Yi(t, r, s, i);
    var w = t.memoizedState;
    l !== p || m !== w || ge.current || ht
      ? (typeof y == "function" && (qs(t, n, y, r), (w = t.memoizedState)),
        (u = ht || yu(t, n, u, r, m, w, a) || !1)
          ? (f ||
              (typeof s.UNSAFE_componentWillUpdate != "function" &&
                typeof s.componentWillUpdate != "function") ||
              (typeof s.componentWillUpdate == "function" &&
                s.componentWillUpdate(r, w, a),
              typeof s.UNSAFE_componentWillUpdate == "function" &&
                s.UNSAFE_componentWillUpdate(r, w, a)),
            typeof s.componentDidUpdate == "function" && (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof s.componentDidUpdate != "function" ||
              (l === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != "function" ||
              (l === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = w)),
        (s.props = r),
        (s.state = w),
        (s.context = a),
        (r = u))
      : (typeof s.componentDidUpdate != "function" ||
          (l === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" ||
          (l === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return nl(e, t, n, r, o, i);
}
function nl(e, t, n, r, i, o) {
  cf(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return i && hu(t, n, !1), ot(e, t, o);
  (r = t.stateNode), (Hm.current = t);
  var l =
    s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && s
      ? ((t.child = An(t, e.child, null, o)), (t.child = An(t, null, l, o)))
      : ce(e, t, l, o),
    (t.memoizedState = r.state),
    i && hu(t, n, !0),
    t.child
  );
}
function df(e) {
  var t = e.stateNode;
  t.pendingContext
    ? fu(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && fu(e, t.context, !1),
    ql(e, t.containerInfo);
}
function Pu(e, t, n, r, i) {
  return Ln(), Kl(i), (t.flags |= 256), ce(e, t, n, r), t.child;
}
var rl = { dehydrated: null, treeContext: null, retryLane: 0 };
function il(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function ff(e, t, n) {
  var r = t.pendingProps,
    i = H.current,
    o = !1,
    s = (t.flags & 128) !== 0,
    l;
  if (
    ((l = s) ||
      (l = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    l
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    z(H, i & 1),
    e === null)
  )
    return (
      Js(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((s = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (s = { mode: "hidden", children: s }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = s))
                : (o = xo(s, r, 0, null)),
              (e = Jt(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = il(n)),
              (t.memoizedState = rl),
              e)
            : sa(t, s))
    );
  if (((i = e.memoizedState), i !== null && ((l = i.dehydrated), l !== null)))
    return Vm(e, t, s, r, l, i, n);
  if (o) {
    (o = r.fallback), (s = t.mode), (i = e.child), (l = i.sibling);
    var a = { mode: "hidden", children: r.children };
    return (
      !(s & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = a),
          (t.deletions = null))
        : ((r = Pt(i, a)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      l !== null ? (o = Pt(l, o)) : ((o = Jt(o, s, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (s = e.child.memoizedState),
      (s =
        s === null
          ? il(n)
          : {
              baseLanes: s.baseLanes | n,
              cachePool: null,
              transitions: s.transitions,
            }),
      (o.memoizedState = s),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = rl),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = Pt(o, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function sa(e, t) {
  return (
    (t = xo({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function fi(e, t, n, r) {
  return (
    r !== null && Kl(r),
    An(t, e.child, null, n),
    (e = sa(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Vm(e, t, n, r, i, o, s) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = as(Error(k(422)))), fi(e, t, s, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (i = t.mode),
        (r = xo({ mode: "visible", children: r.children }, i, 0, null)),
        (o = Jt(o, i, s, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && An(t, e.child, null, s),
        (t.child.memoizedState = il(s)),
        (t.memoizedState = rl),
        o);
  if (!(t.mode & 1)) return fi(e, t, s, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var l = r.dgst;
    return (r = l), (o = Error(k(419))), (r = as(o, r, void 0)), fi(e, t, s, r);
  }
  if (((l = (s & e.childLanes) !== 0), me || l)) {
    if (((r = te), r !== null)) {
      switch (s & -s) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
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
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (r.suspendedLanes | s) ? 0 : i),
        i !== 0 &&
          i !== o.retryLane &&
          ((o.retryLane = i), it(e, i), Ue(r, e, i, -1));
    }
    return fa(), (r = as(Error(k(421)))), fi(e, t, s, r);
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = rg.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (_e = It(i.nextSibling)),
      (Se = t),
      ($ = !0),
      (Me = null),
      e !== null &&
        ((Ie[xe++] = Je),
        (Ie[xe++] = Xe),
        (Ie[xe++] = Zt),
        (Je = e.id),
        (Xe = e.overflow),
        (Zt = t)),
      (t = sa(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Ru(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Xs(e.return, t, n);
}
function us(e, t, n, r, i) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = i));
}
function hf(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    o = r.tail;
  if ((ce(e, t, r.children, n), (r = H.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Ru(e, n, t);
        else if (e.tag === 19) Ru(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((z(H, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate),
            e !== null && Ji(e) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          us(t, !1, i, n, o);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && Ji(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        us(t, !0, n, null, o);
        break;
      case "together":
        us(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Ii(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function ot(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (tn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(k(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Pt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Pt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Wm(e, t, n) {
  switch (t.tag) {
    case 3:
      df(t), Ln();
      break;
    case 5:
      Fd(t);
      break;
    case 1:
      ve(t.type) && Vi(t);
      break;
    case 4:
      ql(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      z(Gi, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (z(H, H.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? ff(e, t, n)
          : (z(H, H.current & 1),
            (e = ot(e, t, n)),
            e !== null ? e.sibling : null);
      z(H, H.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return hf(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        z(H, H.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), uf(e, t, n);
  }
  return ot(e, t, n);
}
var pf, ol, mf, gf;
pf = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
ol = function () {};
mf = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), Gt(He.current);
    var o = null;
    switch (n) {
      case "input":
        (i = Ts(e, i)), (r = Ts(e, r)), (o = []);
        break;
      case "select":
        (i = W({}, i, { value: void 0 })),
          (r = W({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (i = Rs(e, i)), (r = Rs(e, r)), (o = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = $i);
    }
    Ls(n, r);
    var s;
    n = null;
    for (u in i)
      if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
        if (u === "style") {
          var l = i[u];
          for (s in l) l.hasOwnProperty(s) && (n || (n = {}), (n[s] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (mr.hasOwnProperty(u)
              ? o || (o = [])
              : (o = o || []).push(u, null));
    for (u in r) {
      var a = r[u];
      if (
        ((l = i != null ? i[u] : void 0),
        r.hasOwnProperty(u) && a !== l && (a != null || l != null))
      )
        if (u === "style")
          if (l) {
            for (s in l)
              !l.hasOwnProperty(s) ||
                (a && a.hasOwnProperty(s)) ||
                (n || (n = {}), (n[s] = ""));
            for (s in a)
              a.hasOwnProperty(s) &&
                l[s] !== a[s] &&
                (n || (n = {}), (n[s] = a[s]));
          } else n || (o || (o = []), o.push(u, n)), (n = a);
        else
          u === "dangerouslySetInnerHTML"
            ? ((a = a ? a.__html : void 0),
              (l = l ? l.__html : void 0),
              a != null && l !== a && (o = o || []).push(u, a))
            : u === "children"
            ? (typeof a != "string" && typeof a != "number") ||
              (o = o || []).push(u, "" + a)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (mr.hasOwnProperty(u)
                ? (a != null && u === "onScroll" && B("scroll", e),
                  o || l === a || (o = []))
                : (o = o || []).push(u, a));
    }
    n && (o = o || []).push("style", n);
    var u = o;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
gf = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Zn(e, t) {
  if (!$)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function se(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function Km(e, t, n) {
  var r = t.pendingProps;
  switch ((Wl(t), t.tag)) {
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
      return se(t), null;
    case 1:
      return ve(t.type) && Hi(), se(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Dn(),
        b(ge),
        b(ae),
        ea(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (ci(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Me !== null && (hl(Me), (Me = null)))),
        ol(e, t),
        se(t),
        null
      );
    case 5:
      Zl(t);
      var i = Gt(Tr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        mf(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(k(166));
          return se(t), null;
        }
        if (((e = Gt(He.current)), ci(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[be] = t), (r[Ir] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              B("cancel", r), B("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              B("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < ir.length; i++) B(ir[i], r);
              break;
            case "source":
              B("error", r);
              break;
            case "img":
            case "image":
            case "link":
              B("error", r), B("load", r);
              break;
            case "details":
              B("toggle", r);
              break;
            case "input":
              Fa(r, o), B("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                B("invalid", r);
              break;
            case "textarea":
              ba(r, o), B("invalid", r);
          }
          Ls(n, o), (i = null);
          for (var s in o)
            if (o.hasOwnProperty(s)) {
              var l = o[s];
              s === "children"
                ? typeof l == "string"
                  ? r.textContent !== l &&
                    (o.suppressHydrationWarning !== !0 &&
                      ui(r.textContent, l, e),
                    (i = ["children", l]))
                  : typeof l == "number" &&
                    r.textContent !== "" + l &&
                    (o.suppressHydrationWarning !== !0 &&
                      ui(r.textContent, l, e),
                    (i = ["children", "" + l]))
                : mr.hasOwnProperty(s) &&
                  l != null &&
                  s === "onScroll" &&
                  B("scroll", r);
            }
          switch (n) {
            case "input":
              ti(r), Ba(r, o, !0);
              break;
            case "textarea":
              ti(r), $a(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = $i);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (s = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = $c(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = s.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = s.createElement(n, { is: r.is }))
                : ((e = s.createElement(n)),
                  n === "select" &&
                    ((s = e),
                    r.multiple
                      ? (s.multiple = !0)
                      : r.size && (s.size = r.size)))
              : (e = s.createElementNS(e, n)),
            (e[be] = t),
            (e[Ir] = r),
            pf(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((s = As(n, r)), n)) {
              case "dialog":
                B("cancel", e), B("close", e), (i = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                B("load", e), (i = r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < ir.length; i++) B(ir[i], e);
                i = r;
                break;
              case "source":
                B("error", e), (i = r);
                break;
              case "img":
              case "image":
              case "link":
                B("error", e), B("load", e), (i = r);
                break;
              case "details":
                B("toggle", e), (i = r);
                break;
              case "input":
                Fa(e, r), (i = Ts(e, r)), B("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = W({}, r, { value: void 0 })),
                  B("invalid", e);
                break;
              case "textarea":
                ba(e, r), (i = Rs(e, r)), B("invalid", e);
                break;
              default:
                i = r;
            }
            Ls(n, i), (l = i);
            for (o in l)
              if (l.hasOwnProperty(o)) {
                var a = l[o];
                o === "style"
                  ? Wc(e, a)
                  : o === "dangerouslySetInnerHTML"
                  ? ((a = a ? a.__html : void 0), a != null && Hc(e, a))
                  : o === "children"
                  ? typeof a == "string"
                    ? (n !== "textarea" || a !== "") && gr(e, a)
                    : typeof a == "number" && gr(e, "" + a)
                  : o !== "suppressContentEditableWarning" &&
                    o !== "suppressHydrationWarning" &&
                    o !== "autoFocus" &&
                    (mr.hasOwnProperty(o)
                      ? a != null && o === "onScroll" && B("scroll", e)
                      : a != null && Rl(e, o, a, s));
              }
            switch (n) {
              case "input":
                ti(e), Ba(e, r, !1);
                break;
              case "textarea":
                ti(e), $a(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Dt(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? Sn(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      Sn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = $i);
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
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return se(t), null;
    case 6:
      if (e && t.stateNode != null) gf(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(k(166));
        if (((n = Gt(Tr.current)), Gt(He.current), ci(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[be] = t),
            (o = r.nodeValue !== n) && ((e = Se), e !== null))
          )
            switch (e.tag) {
              case 3:
                ui(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  ui(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[be] = t),
            (t.stateNode = r);
      }
      return se(t), null;
    case 13:
      if (
        (b(H),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if ($ && _e !== null && t.mode & 1 && !(t.flags & 128))
          Ld(), Ln(), (t.flags |= 98560), (o = !1);
        else if (((o = ci(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(k(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(k(317));
            o[be] = t;
          } else
            Ln(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          se(t), (o = !1);
        } else Me !== null && (hl(Me), (Me = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || H.current & 1 ? q === 0 && (q = 3) : fa())),
          t.updateQueue !== null && (t.flags |= 4),
          se(t),
          null);
    case 4:
      return (
        Dn(), ol(e, t), e === null && kr(t.stateNode.containerInfo), se(t), null
      );
    case 10:
      return Yl(t.type._context), se(t), null;
    case 17:
      return ve(t.type) && Hi(), se(t), null;
    case 19:
      if ((b(H), (o = t.memoizedState), o === null)) return se(t), null;
      if (((r = (t.flags & 128) !== 0), (s = o.rendering), s === null))
        if (r) Zn(o, !1);
        else {
          if (q !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((s = Ji(e)), s !== null)) {
                for (
                  t.flags |= 128,
                    Zn(o, !1),
                    r = s.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (s = o.alternate),
                    s === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = s.childLanes),
                        (o.lanes = s.lanes),
                        (o.child = s.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = s.memoizedProps),
                        (o.memoizedState = s.memoizedState),
                        (o.updateQueue = s.updateQueue),
                        (o.type = s.type),
                        (e = s.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return z(H, (H.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            Q() > jn &&
            ((t.flags |= 128), (r = !0), Zn(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Ji(s)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Zn(o, !0),
              o.tail === null && o.tailMode === "hidden" && !s.alternate && !$)
            )
              return se(t), null;
          } else
            2 * Q() - o.renderingStartTime > jn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Zn(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((s.sibling = t.child), (t.child = s))
          : ((n = o.last),
            n !== null ? (n.sibling = s) : (t.child = s),
            (o.last = s));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = Q()),
          (t.sibling = null),
          (n = H.current),
          z(H, r ? (n & 1) | 2 : n & 1),
          t)
        : (se(t), null);
    case 22:
    case 23:
      return (
        da(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? we & 1073741824 && (se(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : se(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(k(156, t.tag));
}
function Gm(e, t) {
  switch ((Wl(t), t.tag)) {
    case 1:
      return (
        ve(t.type) && Hi(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Dn(),
        b(ge),
        b(ae),
        ea(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Zl(t), null;
    case 13:
      if ((b(H), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(k(340));
        Ln();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return b(H), null;
    case 4:
      return Dn(), null;
    case 10:
      return Yl(t.type._context), null;
    case 22:
    case 23:
      return da(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var hi = !1,
  le = !1,
  Qm = typeof WeakSet == "function" ? WeakSet : Set,
  T = null;
function wn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        K(e, t, r);
      }
    else n.current = null;
}
function sl(e, t, n) {
  try {
    n();
  } catch (r) {
    K(e, t, r);
  }
}
var Ou = !1;
function Ym(e, t) {
  if (((Hs = Fi), (e = wd()), Hl(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var s = 0,
            l = -1,
            a = -1,
            u = 0,
            f = 0,
            p = e,
            m = null;
          t: for (;;) {
            for (
              var y;
              p !== n || (i !== 0 && p.nodeType !== 3) || (l = s + i),
                p !== o || (r !== 0 && p.nodeType !== 3) || (a = s + r),
                p.nodeType === 3 && (s += p.nodeValue.length),
                (y = p.firstChild) !== null;

            )
              (m = p), (p = y);
            for (;;) {
              if (p === e) break t;
              if (
                (m === n && ++u === i && (l = s),
                m === o && ++f === r && (a = s),
                (y = p.nextSibling) !== null)
              )
                break;
              (p = m), (m = p.parentNode);
            }
            p = y;
          }
          n = l === -1 || a === -1 ? null : { start: l, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Vs = { focusedElem: e, selectionRange: n }, Fi = !1, T = t; T !== null; )
    if (((t = T), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (T = e);
    else
      for (; T !== null; ) {
        t = T;
        try {
          var w = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (w !== null) {
                  var _ = w.memoizedProps,
                    x = w.memoizedState,
                    h = t.stateNode,
                    c = h.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? _ : Ae(t.type, _),
                      x
                    );
                  h.__reactInternalSnapshotBeforeUpdate = c;
                }
                break;
              case 3:
                var d = t.stateNode.containerInfo;
                d.nodeType === 1
                  ? (d.textContent = "")
                  : d.nodeType === 9 &&
                    d.documentElement &&
                    d.removeChild(d.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(k(163));
            }
        } catch (v) {
          K(t, t.return, v);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (T = e);
          break;
        }
        T = t.return;
      }
  return (w = Ou), (Ou = !1), w;
}
function dr(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var o = i.destroy;
        (i.destroy = void 0), o !== void 0 && sl(t, n, o);
      }
      i = i.next;
    } while (i !== r);
  }
}
function Co(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function ll(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function vf(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), vf(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[be], delete t[Ir], delete t[Gs], delete t[Om], delete t[Lm])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function yf(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Lu(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || yf(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function al(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = $i));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (al(e, t, n), e = e.sibling; e !== null; ) al(e, t, n), (e = e.sibling);
}
function ul(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ul(e, t, n), e = e.sibling; e !== null; ) ul(e, t, n), (e = e.sibling);
}
var ne = null,
  De = !1;
function ct(e, t, n) {
  for (n = n.child; n !== null; ) wf(e, t, n), (n = n.sibling);
}
function wf(e, t, n) {
  if ($e && typeof $e.onCommitFiberUnmount == "function")
    try {
      $e.onCommitFiberUnmount(go, n);
    } catch {}
  switch (n.tag) {
    case 5:
      le || wn(n, t);
    case 6:
      var r = ne,
        i = De;
      (ne = null),
        ct(e, t, n),
        (ne = r),
        (De = i),
        ne !== null &&
          (De
            ? ((e = ne),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : ne.removeChild(n.stateNode));
      break;
    case 18:
      ne !== null &&
        (De
          ? ((e = ne),
            (n = n.stateNode),
            e.nodeType === 8
              ? ns(e.parentNode, n)
              : e.nodeType === 1 && ns(e, n),
            _r(e))
          : ns(ne, n.stateNode));
      break;
    case 4:
      (r = ne),
        (i = De),
        (ne = n.stateNode.containerInfo),
        (De = !0),
        ct(e, t, n),
        (ne = r),
        (De = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !le &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var o = i,
            s = o.destroy;
          (o = o.tag),
            s !== void 0 && (o & 2 || o & 4) && sl(n, t, s),
            (i = i.next);
        } while (i !== r);
      }
      ct(e, t, n);
      break;
    case 1:
      if (
        !le &&
        (wn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (l) {
          K(n, t, l);
        }
      ct(e, t, n);
      break;
    case 21:
      ct(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((le = (r = le) || n.memoizedState !== null), ct(e, t, n), (le = r))
        : ct(e, t, n);
      break;
    default:
      ct(e, t, n);
  }
}
function Au(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Qm()),
      t.forEach(function (r) {
        var i = ig.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function Le(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var o = e,
          s = t,
          l = s;
        e: for (; l !== null; ) {
          switch (l.tag) {
            case 5:
              (ne = l.stateNode), (De = !1);
              break e;
            case 3:
              (ne = l.stateNode.containerInfo), (De = !0);
              break e;
            case 4:
              (ne = l.stateNode.containerInfo), (De = !0);
              break e;
          }
          l = l.return;
        }
        if (ne === null) throw Error(k(160));
        wf(o, s, i), (ne = null), (De = !1);
        var a = i.alternate;
        a !== null && (a.return = null), (i.return = null);
      } catch (u) {
        K(i, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) _f(t, e), (t = t.sibling);
}
function _f(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Le(t, e), Fe(e), r & 4)) {
        try {
          dr(3, e, e.return), Co(3, e);
        } catch (_) {
          K(e, e.return, _);
        }
        try {
          dr(5, e, e.return);
        } catch (_) {
          K(e, e.return, _);
        }
      }
      break;
    case 1:
      Le(t, e), Fe(e), r & 512 && n !== null && wn(n, n.return);
      break;
    case 5:
      if (
        (Le(t, e),
        Fe(e),
        r & 512 && n !== null && wn(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          gr(i, "");
        } catch (_) {
          K(e, e.return, _);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var o = e.memoizedProps,
          s = n !== null ? n.memoizedProps : o,
          l = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            l === "input" && o.type === "radio" && o.name != null && Bc(i, o),
              As(l, s);
            var u = As(l, o);
            for (s = 0; s < a.length; s += 2) {
              var f = a[s],
                p = a[s + 1];
              f === "style"
                ? Wc(i, p)
                : f === "dangerouslySetInnerHTML"
                ? Hc(i, p)
                : f === "children"
                ? gr(i, p)
                : Rl(i, f, p, u);
            }
            switch (l) {
              case "input":
                Ns(i, o);
                break;
              case "textarea":
                bc(i, o);
                break;
              case "select":
                var m = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!o.multiple;
                var y = o.value;
                y != null
                  ? Sn(i, !!o.multiple, y, !1)
                  : m !== !!o.multiple &&
                    (o.defaultValue != null
                      ? Sn(i, !!o.multiple, o.defaultValue, !0)
                      : Sn(i, !!o.multiple, o.multiple ? [] : "", !1));
            }
            i[Ir] = o;
          } catch (_) {
            K(e, e.return, _);
          }
      }
      break;
    case 6:
      if ((Le(t, e), Fe(e), r & 4)) {
        if (e.stateNode === null) throw Error(k(162));
        (i = e.stateNode), (o = e.memoizedProps);
        try {
          i.nodeValue = o;
        } catch (_) {
          K(e, e.return, _);
        }
      }
      break;
    case 3:
      if (
        (Le(t, e), Fe(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          _r(t.containerInfo);
        } catch (_) {
          K(e, e.return, _);
        }
      break;
    case 4:
      Le(t, e), Fe(e);
      break;
    case 13:
      Le(t, e),
        Fe(e),
        (i = e.child),
        i.flags & 8192 &&
          ((o = i.memoizedState !== null),
          (i.stateNode.isHidden = o),
          !o ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (ua = Q())),
        r & 4 && Au(e);
      break;
    case 22:
      if (
        ((f = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((le = (u = le) || f), Le(t, e), (le = u)) : Le(t, e),
        Fe(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !f && e.mode & 1)
        )
          for (T = e, f = e.child; f !== null; ) {
            for (p = T = f; T !== null; ) {
              switch (((m = T), (y = m.child), m.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  dr(4, m, m.return);
                  break;
                case 1:
                  wn(m, m.return);
                  var w = m.stateNode;
                  if (typeof w.componentWillUnmount == "function") {
                    (r = m), (n = m.return);
                    try {
                      (t = r),
                        (w.props = t.memoizedProps),
                        (w.state = t.memoizedState),
                        w.componentWillUnmount();
                    } catch (_) {
                      K(r, n, _);
                    }
                  }
                  break;
                case 5:
                  wn(m, m.return);
                  break;
                case 22:
                  if (m.memoizedState !== null) {
                    Mu(p);
                    continue;
                  }
              }
              y !== null ? ((y.return = m), (T = y)) : Mu(p);
            }
            f = f.sibling;
          }
        e: for (f = null, p = e; ; ) {
          if (p.tag === 5) {
            if (f === null) {
              f = p;
              try {
                (i = p.stateNode),
                  u
                    ? ((o = i.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((l = p.stateNode),
                      (a = p.memoizedProps.style),
                      (s =
                        a != null && a.hasOwnProperty("display")
                          ? a.display
                          : null),
                      (l.style.display = Vc("display", s)));
              } catch (_) {
                K(e, e.return, _);
              }
            }
          } else if (p.tag === 6) {
            if (f === null)
              try {
                p.stateNode.nodeValue = u ? "" : p.memoizedProps;
              } catch (_) {
                K(e, e.return, _);
              }
          } else if (
            ((p.tag !== 22 && p.tag !== 23) ||
              p.memoizedState === null ||
              p === e) &&
            p.child !== null
          ) {
            (p.child.return = p), (p = p.child);
            continue;
          }
          if (p === e) break e;
          for (; p.sibling === null; ) {
            if (p.return === null || p.return === e) break e;
            f === p && (f = null), (p = p.return);
          }
          f === p && (f = null), (p.sibling.return = p.return), (p = p.sibling);
        }
      }
      break;
    case 19:
      Le(t, e), Fe(e), r & 4 && Au(e);
      break;
    case 21:
      break;
    default:
      Le(t, e), Fe(e);
  }
}
function Fe(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (yf(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(k(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (gr(i, ""), (r.flags &= -33));
          var o = Lu(e);
          ul(e, o, i);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo,
            l = Lu(e);
          al(e, l, s);
          break;
        default:
          throw Error(k(161));
      }
    } catch (a) {
      K(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Jm(e, t, n) {
  (T = e), Sf(e);
}
function Sf(e, t, n) {
  for (var r = (e.mode & 1) !== 0; T !== null; ) {
    var i = T,
      o = i.child;
    if (i.tag === 22 && r) {
      var s = i.memoizedState !== null || hi;
      if (!s) {
        var l = i.alternate,
          a = (l !== null && l.memoizedState !== null) || le;
        l = hi;
        var u = le;
        if (((hi = s), (le = a) && !u))
          for (T = i; T !== null; )
            (s = T),
              (a = s.child),
              s.tag === 22 && s.memoizedState !== null
                ? ju(i)
                : a !== null
                ? ((a.return = s), (T = a))
                : ju(i);
        for (; o !== null; ) (T = o), Sf(o), (o = o.sibling);
        (T = i), (hi = l), (le = u);
      }
      Du(e);
    } else
      i.subtreeFlags & 8772 && o !== null ? ((o.return = i), (T = o)) : Du(e);
  }
}
function Du(e) {
  for (; T !== null; ) {
    var t = T;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              le || Co(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !le)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Ae(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = t.updateQueue;
              o !== null && vu(t, o, r);
              break;
            case 3:
              var s = t.updateQueue;
              if (s !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                vu(t, s, n);
              }
              break;
            case 5:
              var l = t.stateNode;
              if (n === null && t.flags & 4) {
                n = l;
                var a = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    a.autoFocus && n.focus();
                    break;
                  case "img":
                    a.src && (n.src = a.src);
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
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var f = u.memoizedState;
                  if (f !== null) {
                    var p = f.dehydrated;
                    p !== null && _r(p);
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
              throw Error(k(163));
          }
        le || (t.flags & 512 && ll(t));
      } catch (m) {
        K(t, t.return, m);
      }
    }
    if (t === e) {
      T = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (T = n);
      break;
    }
    T = t.return;
  }
}
function Mu(e) {
  for (; T !== null; ) {
    var t = T;
    if (t === e) {
      T = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (T = n);
      break;
    }
    T = t.return;
  }
}
function ju(e) {
  for (; T !== null; ) {
    var t = T;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Co(4, t);
          } catch (a) {
            K(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              K(t, i, a);
            }
          }
          var o = t.return;
          try {
            ll(t);
          } catch (a) {
            K(t, o, a);
          }
          break;
        case 5:
          var s = t.return;
          try {
            ll(t);
          } catch (a) {
            K(t, s, a);
          }
      }
    } catch (a) {
      K(t, t.return, a);
    }
    if (t === e) {
      T = null;
      break;
    }
    var l = t.sibling;
    if (l !== null) {
      (l.return = t.return), (T = l);
      break;
    }
    T = t.return;
  }
}
var Xm = Math.ceil,
  Zi = lt.ReactCurrentDispatcher,
  la = lt.ReactCurrentOwner,
  Ne = lt.ReactCurrentBatchConfig,
  M = 0,
  te = null,
  Y = null,
  re = 0,
  we = 0,
  _n = Ut(0),
  q = 0,
  Or = null,
  tn = 0,
  Io = 0,
  aa = 0,
  fr = null,
  pe = null,
  ua = 0,
  jn = 1 / 0,
  Ge = null,
  eo = !1,
  cl = null,
  Tt = null,
  pi = !1,
  _t = null,
  to = 0,
  hr = 0,
  dl = null,
  xi = -1,
  Ti = 0;
function de() {
  return M & 6 ? Q() : xi !== -1 ? xi : (xi = Q());
}
function Nt(e) {
  return e.mode & 1
    ? M & 2 && re !== 0
      ? re & -re
      : Dm.transition !== null
      ? (Ti === 0 && (Ti = rd()), Ti)
      : ((e = j),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : cd(e.type))),
        e)
    : 1;
}
function Ue(e, t, n, r) {
  if (50 < hr) throw ((hr = 0), (dl = null), Error(k(185)));
  zr(e, n, r),
    (!(M & 2) || e !== te) &&
      (e === te && (!(M & 2) && (Io |= n), q === 4 && mt(e, re)),
      ye(e, r),
      n === 1 && M === 0 && !(t.mode & 1) && ((jn = Q() + 500), So && zt()));
}
function ye(e, t) {
  var n = e.callbackNode;
  Dp(e, t);
  var r = zi(e, e === te ? re : 0);
  if (r === 0)
    n !== null && Wa(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Wa(n), t === 1))
      e.tag === 0 ? Am(Uu.bind(null, e)) : Pd(Uu.bind(null, e)),
        Pm(function () {
          !(M & 6) && zt();
        }),
        (n = null);
    else {
      switch (id(r)) {
        case 1:
          n = Ml;
          break;
        case 4:
          n = td;
          break;
        case 16:
          n = Ui;
          break;
        case 536870912:
          n = nd;
          break;
        default:
          n = Ui;
      }
      n = Pf(n, Ef.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Ef(e, t) {
  if (((xi = -1), (Ti = 0), M & 6)) throw Error(k(327));
  var n = e.callbackNode;
  if (xn() && e.callbackNode !== n) return null;
  var r = zi(e, e === te ? re : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = no(e, r);
  else {
    t = r;
    var i = M;
    M |= 2;
    var o = Cf();
    (te !== e || re !== t) && ((Ge = null), (jn = Q() + 500), Yt(e, t));
    do
      try {
        eg();
        break;
      } catch (l) {
        kf(e, l);
      }
    while (1);
    Ql(),
      (Zi.current = o),
      (M = i),
      Y !== null ? (t = 0) : ((te = null), (re = 0), (t = q));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = zs(e)), i !== 0 && ((r = i), (t = fl(e, i)))), t === 1)
    )
      throw ((n = Or), Yt(e, 0), mt(e, r), ye(e, Q()), n);
    if (t === 6) mt(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !qm(i) &&
          ((t = no(e, r)),
          t === 2 && ((o = zs(e)), o !== 0 && ((r = o), (t = fl(e, o)))),
          t === 1))
      )
        throw ((n = Or), Yt(e, 0), mt(e, r), ye(e, Q()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(k(345));
        case 2:
          Ht(e, pe, Ge);
          break;
        case 3:
          if (
            (mt(e, r), (r & 130023424) === r && ((t = ua + 500 - Q()), 10 < t))
          ) {
            if (zi(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              de(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = Ks(Ht.bind(null, e, pe, Ge), t);
            break;
          }
          Ht(e, pe, Ge);
          break;
        case 4:
          if ((mt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var s = 31 - je(r);
            (o = 1 << s), (s = t[s]), s > i && (i = s), (r &= ~o);
          }
          if (
            ((r = i),
            (r = Q() - r),
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
                : 1960 * Xm(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Ks(Ht.bind(null, e, pe, Ge), r);
            break;
          }
          Ht(e, pe, Ge);
          break;
        case 5:
          Ht(e, pe, Ge);
          break;
        default:
          throw Error(k(329));
      }
    }
  }
  return ye(e, Q()), e.callbackNode === n ? Ef.bind(null, e) : null;
}
function fl(e, t) {
  var n = fr;
  return (
    e.current.memoizedState.isDehydrated && (Yt(e, t).flags |= 256),
    (e = no(e, t)),
    e !== 2 && ((t = pe), (pe = n), t !== null && hl(t)),
    e
  );
}
function hl(e) {
  pe === null ? (pe = e) : pe.push.apply(pe, e);
}
function qm(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            o = i.getSnapshot;
          i = i.value;
          try {
            if (!ze(o(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function mt(e, t) {
  for (
    t &= ~aa,
      t &= ~Io,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - je(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Uu(e) {
  if (M & 6) throw Error(k(327));
  xn();
  var t = zi(e, 0);
  if (!(t & 1)) return ye(e, Q()), null;
  var n = no(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = zs(e);
    r !== 0 && ((t = r), (n = fl(e, r)));
  }
  if (n === 1) throw ((n = Or), Yt(e, 0), mt(e, t), ye(e, Q()), n);
  if (n === 6) throw Error(k(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Ht(e, pe, Ge),
    ye(e, Q()),
    null
  );
}
function ca(e, t) {
  var n = M;
  M |= 1;
  try {
    return e(t);
  } finally {
    (M = n), M === 0 && ((jn = Q() + 500), So && zt());
  }
}
function nn(e) {
  _t !== null && _t.tag === 0 && !(M & 6) && xn();
  var t = M;
  M |= 1;
  var n = Ne.transition,
    r = j;
  try {
    if (((Ne.transition = null), (j = 1), e)) return e();
  } finally {
    (j = r), (Ne.transition = n), (M = t), !(M & 6) && zt();
  }
}
function da() {
  (we = _n.current), b(_n);
}
function Yt(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Nm(n)), Y !== null))
    for (n = Y.return; n !== null; ) {
      var r = n;
      switch ((Wl(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Hi();
          break;
        case 3:
          Dn(), b(ge), b(ae), ea();
          break;
        case 5:
          Zl(r);
          break;
        case 4:
          Dn();
          break;
        case 13:
          b(H);
          break;
        case 19:
          b(H);
          break;
        case 10:
          Yl(r.type._context);
          break;
        case 22:
        case 23:
          da();
      }
      n = n.return;
    }
  if (
    ((te = e),
    (Y = e = Pt(e.current, null)),
    (re = we = t),
    (q = 0),
    (Or = null),
    (aa = Io = tn = 0),
    (pe = fr = null),
    Kt !== null)
  ) {
    for (t = 0; t < Kt.length; t++)
      if (((n = Kt[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          o = n.pending;
        if (o !== null) {
          var s = o.next;
          (o.next = i), (r.next = s);
        }
        n.pending = r;
      }
    Kt = null;
  }
  return e;
}
function kf(e, t) {
  do {
    var n = Y;
    try {
      if ((Ql(), (ki.current = qi), Xi)) {
        for (var r = V.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        Xi = !1;
      }
      if (
        ((en = 0),
        (ee = X = V = null),
        (cr = !1),
        (Nr = 0),
        (la.current = null),
        n === null || n.return === null)
      ) {
        (q = 1), (Or = t), (Y = null);
        break;
      }
      e: {
        var o = e,
          s = n.return,
          l = n,
          a = t;
        if (
          ((t = re),
          (l.flags |= 32768),
          a !== null && typeof a == "object" && typeof a.then == "function")
        ) {
          var u = a,
            f = l,
            p = f.tag;
          if (!(f.mode & 1) && (p === 0 || p === 11 || p === 15)) {
            var m = f.alternate;
            m
              ? ((f.updateQueue = m.updateQueue),
                (f.memoizedState = m.memoizedState),
                (f.lanes = m.lanes))
              : ((f.updateQueue = null), (f.memoizedState = null));
          }
          var y = Cu(s);
          if (y !== null) {
            (y.flags &= -257),
              Iu(y, s, l, o, t),
              y.mode & 1 && ku(o, u, t),
              (t = y),
              (a = u);
            var w = t.updateQueue;
            if (w === null) {
              var _ = new Set();
              _.add(a), (t.updateQueue = _);
            } else w.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              ku(o, u, t), fa();
              break e;
            }
            a = Error(k(426));
          }
        } else if ($ && l.mode & 1) {
          var x = Cu(s);
          if (x !== null) {
            !(x.flags & 65536) && (x.flags |= 256),
              Iu(x, s, l, o, t),
              Kl(Mn(a, l));
            break e;
          }
        }
        (o = a = Mn(a, l)),
          q !== 4 && (q = 2),
          fr === null ? (fr = [o]) : fr.push(o),
          (o = s);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var h = sf(o, a, t);
              gu(o, h);
              break e;
            case 1:
              l = a;
              var c = o.type,
                d = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof c.getDerivedStateFromError == "function" ||
                  (d !== null &&
                    typeof d.componentDidCatch == "function" &&
                    (Tt === null || !Tt.has(d))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var v = lf(o, l, t);
                gu(o, v);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      xf(n);
    } catch (E) {
      (t = E), Y === n && n !== null && (Y = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function Cf() {
  var e = Zi.current;
  return (Zi.current = qi), e === null ? qi : e;
}
function fa() {
  (q === 0 || q === 3 || q === 2) && (q = 4),
    te === null || (!(tn & 268435455) && !(Io & 268435455)) || mt(te, re);
}
function no(e, t) {
  var n = M;
  M |= 2;
  var r = Cf();
  (te !== e || re !== t) && ((Ge = null), Yt(e, t));
  do
    try {
      Zm();
      break;
    } catch (i) {
      kf(e, i);
    }
  while (1);
  if ((Ql(), (M = n), (Zi.current = r), Y !== null)) throw Error(k(261));
  return (te = null), (re = 0), q;
}
function Zm() {
  for (; Y !== null; ) If(Y);
}
function eg() {
  for (; Y !== null && !Ip(); ) If(Y);
}
function If(e) {
  var t = Nf(e.alternate, e, we);
  (e.memoizedProps = e.pendingProps),
    t === null ? xf(e) : (Y = t),
    (la.current = null);
}
function xf(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Gm(n, t)), n !== null)) {
        (n.flags &= 32767), (Y = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (q = 6), (Y = null);
        return;
      }
    } else if (((n = Km(n, t, we)), n !== null)) {
      Y = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Y = t;
      return;
    }
    Y = t = e;
  } while (t !== null);
  q === 0 && (q = 5);
}
function Ht(e, t, n) {
  var r = j,
    i = Ne.transition;
  try {
    (Ne.transition = null), (j = 1), tg(e, t, n, r);
  } finally {
    (Ne.transition = i), (j = r);
  }
  return null;
}
function tg(e, t, n, r) {
  do xn();
  while (_t !== null);
  if (M & 6) throw Error(k(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(k(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (Mp(e, o),
    e === te && ((Y = te = null), (re = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      pi ||
      ((pi = !0),
      Pf(Ui, function () {
        return xn(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = Ne.transition), (Ne.transition = null);
    var s = j;
    j = 1;
    var l = M;
    (M |= 4),
      (la.current = null),
      Ym(e, n),
      _f(n, e),
      Sm(Vs),
      (Fi = !!Hs),
      (Vs = Hs = null),
      (e.current = n),
      Jm(n),
      xp(),
      (M = l),
      (j = s),
      (Ne.transition = o);
  } else e.current = n;
  if (
    (pi && ((pi = !1), (_t = e), (to = i)),
    (o = e.pendingLanes),
    o === 0 && (Tt = null),
    Pp(n.stateNode),
    ye(e, Q()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (eo) throw ((eo = !1), (e = cl), (cl = null), e);
  return (
    to & 1 && e.tag !== 0 && xn(),
    (o = e.pendingLanes),
    o & 1 ? (e === dl ? hr++ : ((hr = 0), (dl = e))) : (hr = 0),
    zt(),
    null
  );
}
function xn() {
  if (_t !== null) {
    var e = id(to),
      t = Ne.transition,
      n = j;
    try {
      if (((Ne.transition = null), (j = 16 > e ? 16 : e), _t === null))
        var r = !1;
      else {
        if (((e = _t), (_t = null), (to = 0), M & 6)) throw Error(k(331));
        var i = M;
        for (M |= 4, T = e.current; T !== null; ) {
          var o = T,
            s = o.child;
          if (T.flags & 16) {
            var l = o.deletions;
            if (l !== null) {
              for (var a = 0; a < l.length; a++) {
                var u = l[a];
                for (T = u; T !== null; ) {
                  var f = T;
                  switch (f.tag) {
                    case 0:
                    case 11:
                    case 15:
                      dr(8, f, o);
                  }
                  var p = f.child;
                  if (p !== null) (p.return = f), (T = p);
                  else
                    for (; T !== null; ) {
                      f = T;
                      var m = f.sibling,
                        y = f.return;
                      if ((vf(f), f === u)) {
                        T = null;
                        break;
                      }
                      if (m !== null) {
                        (m.return = y), (T = m);
                        break;
                      }
                      T = y;
                    }
                }
              }
              var w = o.alternate;
              if (w !== null) {
                var _ = w.child;
                if (_ !== null) {
                  w.child = null;
                  do {
                    var x = _.sibling;
                    (_.sibling = null), (_ = x);
                  } while (_ !== null);
                }
              }
              T = o;
            }
          }
          if (o.subtreeFlags & 2064 && s !== null) (s.return = o), (T = s);
          else
            e: for (; T !== null; ) {
              if (((o = T), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    dr(9, o, o.return);
                }
              var h = o.sibling;
              if (h !== null) {
                (h.return = o.return), (T = h);
                break e;
              }
              T = o.return;
            }
        }
        var c = e.current;
        for (T = c; T !== null; ) {
          s = T;
          var d = s.child;
          if (s.subtreeFlags & 2064 && d !== null) (d.return = s), (T = d);
          else
            e: for (s = c; T !== null; ) {
              if (((l = T), l.flags & 2048))
                try {
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Co(9, l);
                  }
                } catch (E) {
                  K(l, l.return, E);
                }
              if (l === s) {
                T = null;
                break e;
              }
              var v = l.sibling;
              if (v !== null) {
                (v.return = l.return), (T = v);
                break e;
              }
              T = l.return;
            }
        }
        if (
          ((M = i), zt(), $e && typeof $e.onPostCommitFiberRoot == "function")
        )
          try {
            $e.onPostCommitFiberRoot(go, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (j = n), (Ne.transition = t);
    }
  }
  return !1;
}
function zu(e, t, n) {
  (t = Mn(n, t)),
    (t = sf(e, t, 1)),
    (e = xt(e, t, 1)),
    (t = de()),
    e !== null && (zr(e, 1, t), ye(e, t));
}
function K(e, t, n) {
  if (e.tag === 3) zu(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        zu(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Tt === null || !Tt.has(r)))
        ) {
          (e = Mn(n, e)),
            (e = lf(t, e, 1)),
            (t = xt(t, e, 1)),
            (e = de()),
            t !== null && (zr(t, 1, e), ye(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function ng(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = de()),
    (e.pingedLanes |= e.suspendedLanes & n),
    te === e &&
      (re & n) === n &&
      (q === 4 || (q === 3 && (re & 130023424) === re && 500 > Q() - ua)
        ? Yt(e, 0)
        : (aa |= n)),
    ye(e, t);
}
function Tf(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = ii), (ii <<= 1), !(ii & 130023424) && (ii = 4194304))
      : (t = 1));
  var n = de();
  (e = it(e, t)), e !== null && (zr(e, t, n), ye(e, n));
}
function rg(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Tf(e, n);
}
function ig(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(k(314));
  }
  r !== null && r.delete(t), Tf(e, n);
}
var Nf;
Nf = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || ge.current) me = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (me = !1), Wm(e, t, n);
      me = !!(e.flags & 131072);
    }
  else (me = !1), $ && t.flags & 1048576 && Rd(t, Ki, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Ii(e, t), (e = t.pendingProps);
      var i = On(t, ae.current);
      In(t, n), (i = na(null, t, r, e, i, n));
      var o = ra();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            ve(r) ? ((o = !0), Vi(t)) : (o = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            Xl(t),
            (i.updater = Eo),
            (t.stateNode = i),
            (i._reactInternals = t),
            Zs(t, r, e, n),
            (t = nl(null, t, r, !0, o, n)))
          : ((t.tag = 0), $ && o && Vl(t), ce(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Ii(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = sg(r)),
          (e = Ae(r, e)),
          i)
        ) {
          case 0:
            t = tl(null, t, r, e, n);
            break e;
          case 1:
            t = Nu(null, t, r, e, n);
            break e;
          case 11:
            t = xu(null, t, r, e, n);
            break e;
          case 14:
            t = Tu(null, t, r, Ae(r.type, e), n);
            break e;
        }
        throw Error(k(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Ae(r, i)),
        tl(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Ae(r, i)),
        Nu(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((df(t), e === null)) throw Error(k(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (i = o.element),
          Dd(e, t),
          Yi(t, r, null, n);
        var s = t.memoizedState;
        if (((r = s.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: s.cache,
              pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
              transitions: s.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (i = Mn(Error(k(423)), t)), (t = Pu(e, t, r, n, i));
            break e;
          } else if (r !== i) {
            (i = Mn(Error(k(424)), t)), (t = Pu(e, t, r, n, i));
            break e;
          } else
            for (
              _e = It(t.stateNode.containerInfo.firstChild),
                Se = t,
                $ = !0,
                Me = null,
                n = zd(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Ln(), r === i)) {
            t = ot(e, t, n);
            break e;
          }
          ce(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Fd(t),
        e === null && Js(t),
        (r = t.type),
        (i = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (s = i.children),
        Ws(r, i) ? (s = null) : o !== null && Ws(r, o) && (t.flags |= 32),
        cf(e, t),
        ce(e, t, s, n),
        t.child
      );
    case 6:
      return e === null && Js(t), null;
    case 13:
      return ff(e, t, n);
    case 4:
      return (
        ql(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = An(t, null, r, n)) : ce(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Ae(r, i)),
        xu(e, t, r, i, n)
      );
    case 7:
      return ce(e, t, t.pendingProps, n), t.child;
    case 8:
      return ce(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ce(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (o = t.memoizedProps),
          (s = i.value),
          z(Gi, r._currentValue),
          (r._currentValue = s),
          o !== null)
        )
          if (ze(o.value, s)) {
            if (o.children === i.children && !ge.current) {
              t = ot(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var l = o.dependencies;
              if (l !== null) {
                s = o.child;
                for (var a = l.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (o.tag === 1) {
                      (a = tt(-1, n & -n)), (a.tag = 2);
                      var u = o.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var f = u.pending;
                        f === null
                          ? (a.next = a)
                          : ((a.next = f.next), (f.next = a)),
                          (u.pending = a);
                      }
                    }
                    (o.lanes |= n),
                      (a = o.alternate),
                      a !== null && (a.lanes |= n),
                      Xs(o.return, n, t),
                      (l.lanes |= n);
                    break;
                  }
                  a = a.next;
                }
              } else if (o.tag === 10) s = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((s = o.return), s === null)) throw Error(k(341));
                (s.lanes |= n),
                  (l = s.alternate),
                  l !== null && (l.lanes |= n),
                  Xs(s, n, t),
                  (s = o.sibling);
              } else s = o.child;
              if (s !== null) s.return = o;
              else
                for (s = o; s !== null; ) {
                  if (s === t) {
                    s = null;
                    break;
                  }
                  if (((o = s.sibling), o !== null)) {
                    (o.return = s.return), (s = o);
                    break;
                  }
                  s = s.return;
                }
              o = s;
            }
        ce(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        In(t, n),
        (i = Pe(i)),
        (r = r(i)),
        (t.flags |= 1),
        ce(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = Ae(r, t.pendingProps)),
        (i = Ae(r.type, i)),
        Tu(e, t, r, i, n)
      );
    case 15:
      return af(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Ae(r, i)),
        Ii(e, t),
        (t.tag = 1),
        ve(r) ? ((e = !0), Vi(t)) : (e = !1),
        In(t, n),
        jd(t, r, i),
        Zs(t, r, i, n),
        nl(null, t, r, !0, e, n)
      );
    case 19:
      return hf(e, t, n);
    case 22:
      return uf(e, t, n);
  }
  throw Error(k(156, t.tag));
};
function Pf(e, t) {
  return ed(e, t);
}
function og(e, t, n, r) {
  (this.tag = e),
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
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Te(e, t, n, r) {
  return new og(e, t, n, r);
}
function ha(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function sg(e) {
  if (typeof e == "function") return ha(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Ll)) return 11;
    if (e === Al) return 14;
  }
  return 2;
}
function Pt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Te(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Ni(e, t, n, r, i, o) {
  var s = 2;
  if (((r = e), typeof e == "function")) ha(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else
    e: switch (e) {
      case cn:
        return Jt(n.children, i, o, t);
      case Ol:
        (s = 8), (i |= 8);
        break;
      case ks:
        return (
          (e = Te(12, n, t, i | 2)), (e.elementType = ks), (e.lanes = o), e
        );
      case Cs:
        return (e = Te(13, n, t, i)), (e.elementType = Cs), (e.lanes = o), e;
      case Is:
        return (e = Te(19, n, t, i)), (e.elementType = Is), (e.lanes = o), e;
      case Uc:
        return xo(n, i, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Mc:
              s = 10;
              break e;
            case jc:
              s = 9;
              break e;
            case Ll:
              s = 11;
              break e;
            case Al:
              s = 14;
              break e;
            case ft:
              (s = 16), (r = null);
              break e;
          }
        throw Error(k(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Te(s, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function Jt(e, t, n, r) {
  return (e = Te(7, e, r, t)), (e.lanes = n), e;
}
function xo(e, t, n, r) {
  return (
    (e = Te(22, e, r, t)),
    (e.elementType = Uc),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function cs(e, t, n) {
  return (e = Te(6, e, null, t)), (e.lanes = n), e;
}
function ds(e, t, n) {
  return (
    (t = Te(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function lg(e, t, n, r, i) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Wo(0)),
    (this.expirationTimes = Wo(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Wo(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function pa(e, t, n, r, i, o, s, l, a) {
  return (
    (e = new lg(e, t, n, l, a)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = Te(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Xl(o),
    e
  );
}
function ag(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: un,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Rf(e) {
  if (!e) return Mt;
  e = e._reactInternals;
  e: {
    if (ln(e) !== e || e.tag !== 1) throw Error(k(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (ve(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(k(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (ve(n)) return Nd(e, n, t);
  }
  return t;
}
function Of(e, t, n, r, i, o, s, l, a) {
  return (
    (e = pa(n, r, !0, e, i, o, s, l, a)),
    (e.context = Rf(null)),
    (n = e.current),
    (r = de()),
    (i = Nt(n)),
    (o = tt(r, i)),
    (o.callback = t ?? null),
    xt(n, o, i),
    (e.current.lanes = i),
    zr(e, i, r),
    ye(e, r),
    e
  );
}
function To(e, t, n, r) {
  var i = t.current,
    o = de(),
    s = Nt(i);
  return (
    (n = Rf(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = tt(o, s)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = xt(i, t, s)),
    e !== null && (Ue(e, i, s, o), Ei(e, i, s)),
    s
  );
}
function ro(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Fu(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function ma(e, t) {
  Fu(e, t), (e = e.alternate) && Fu(e, t);
}
function ug() {
  return null;
}
var Lf =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function ga(e) {
  this._internalRoot = e;
}
No.prototype.render = ga.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(k(409));
  To(e, t, null, null);
};
No.prototype.unmount = ga.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    nn(function () {
      To(null, e, null, null);
    }),
      (t[rt] = null);
  }
};
function No(e) {
  this._internalRoot = e;
}
No.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = ld();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < pt.length && t !== 0 && t < pt[n].priority; n++);
    pt.splice(n, 0, e), n === 0 && ud(e);
  }
};
function va(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Po(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Bu() {}
function cg(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var u = ro(s);
        o.call(u);
      };
    }
    var s = Of(t, r, e, 0, null, !1, !1, "", Bu);
    return (
      (e._reactRootContainer = s),
      (e[rt] = s.current),
      kr(e.nodeType === 8 ? e.parentNode : e),
      nn(),
      s
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == "function") {
    var l = r;
    r = function () {
      var u = ro(a);
      l.call(u);
    };
  }
  var a = pa(e, 0, !1, null, null, !1, !1, "", Bu);
  return (
    (e._reactRootContainer = a),
    (e[rt] = a.current),
    kr(e.nodeType === 8 ? e.parentNode : e),
    nn(function () {
      To(t, a, n, r);
    }),
    a
  );
}
function Ro(e, t, n, r, i) {
  var o = n._reactRootContainer;
  if (o) {
    var s = o;
    if (typeof i == "function") {
      var l = i;
      i = function () {
        var a = ro(s);
        l.call(a);
      };
    }
    To(t, s, e, i);
  } else s = cg(n, t, e, i, r);
  return ro(s);
}
od = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = rr(t.pendingLanes);
        n !== 0 &&
          (jl(t, n | 1), ye(t, Q()), !(M & 6) && ((jn = Q() + 500), zt()));
      }
      break;
    case 13:
      nn(function () {
        var r = it(e, 1);
        if (r !== null) {
          var i = de();
          Ue(r, e, 1, i);
        }
      }),
        ma(e, 1);
  }
};
Ul = function (e) {
  if (e.tag === 13) {
    var t = it(e, 134217728);
    if (t !== null) {
      var n = de();
      Ue(t, e, 134217728, n);
    }
    ma(e, 134217728);
  }
};
sd = function (e) {
  if (e.tag === 13) {
    var t = Nt(e),
      n = it(e, t);
    if (n !== null) {
      var r = de();
      Ue(n, e, t, r);
    }
    ma(e, t);
  }
};
ld = function () {
  return j;
};
ad = function (e, t) {
  var n = j;
  try {
    return (j = e), t();
  } finally {
    j = n;
  }
};
Ms = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Ns(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = _o(r);
            if (!i) throw Error(k(90));
            Fc(r), Ns(r, i);
          }
        }
      }
      break;
    case "textarea":
      bc(e, n);
      break;
    case "select":
      (t = n.value), t != null && Sn(e, !!n.multiple, t, !1);
  }
};
Qc = ca;
Yc = nn;
var dg = { usingClientEntryPoint: !1, Events: [Br, pn, _o, Kc, Gc, ca] },
  er = {
    findFiberByHostInstance: Wt,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  fg = {
    bundleType: er.bundleType,
    version: er.version,
    rendererPackageName: er.rendererPackageName,
    rendererConfig: er.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: lt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = qc(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: er.findFiberByHostInstance || ug,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var mi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!mi.isDisabled && mi.supportsFiber)
    try {
      (go = mi.inject(fg)), ($e = mi);
    } catch {}
}
ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = dg;
ke.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!va(t)) throw Error(k(200));
  return ag(e, t, null, n);
};
ke.createRoot = function (e, t) {
  if (!va(e)) throw Error(k(299));
  var n = !1,
    r = "",
    i = Lf;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = pa(e, 1, !1, null, null, n, !1, r, i)),
    (e[rt] = t.current),
    kr(e.nodeType === 8 ? e.parentNode : e),
    new ga(t)
  );
};
ke.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(k(188))
      : ((e = Object.keys(e).join(",")), Error(k(268, e)));
  return (e = qc(t)), (e = e === null ? null : e.stateNode), e;
};
ke.flushSync = function (e) {
  return nn(e);
};
ke.hydrate = function (e, t, n) {
  if (!Po(t)) throw Error(k(200));
  return Ro(null, e, t, !0, n);
};
ke.hydrateRoot = function (e, t, n) {
  if (!va(e)) throw Error(k(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    o = "",
    s = Lf;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    (t = Of(t, null, e, 1, n ?? null, i, !1, o, s)),
    (e[rt] = t.current),
    kr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new No(t);
};
ke.render = function (e, t, n) {
  if (!Po(t)) throw Error(k(200));
  return Ro(null, e, t, !1, n);
};
ke.unmountComponentAtNode = function (e) {
  if (!Po(e)) throw Error(k(40));
  return e._reactRootContainer
    ? (nn(function () {
        Ro(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[rt] = null);
        });
      }),
      !0)
    : !1;
};
ke.unstable_batchedUpdates = ca;
ke.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Po(n)) throw Error(k(200));
  if (e == null || e._reactInternals === void 0) throw Error(k(38));
  return Ro(e, t, n, !1, r);
};
ke.version = "18.2.0-next-9e3b772b8-20220608";
function Af() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Af);
    } catch (e) {
      console.error(e);
    }
}
Af(), (Rc.exports = ke);
var hg = Rc.exports,
  bu = hg;
(Ss.createRoot = bu.createRoot), (Ss.hydrateRoot = bu.hydrateRoot);
var Df = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  $u = et.createContext && et.createContext(Df),
  Rt =
    (globalThis && globalThis.__assign) ||
    function () {
      return (
        (Rt =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++) {
              t = arguments[n];
              for (var i in t)
                Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            }
            return e;
          }),
        Rt.apply(this, arguments)
      );
    },
  pg =
    (globalThis && globalThis.__rest) ||
    function (e, t) {
      var n = {};
      for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) &&
          t.indexOf(r) < 0 &&
          (n[r] = e[r]);
      if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
          t.indexOf(r[i]) < 0 &&
            Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
            (n[r[i]] = e[r[i]]);
      return n;
    };
function Mf(e) {
  return (
    e &&
    e.map(function (t, n) {
      return et.createElement(t.tag, Rt({ key: n }, t.attr), Mf(t.child));
    })
  );
}
function at(e) {
  return function (t) {
    return et.createElement(mg, Rt({ attr: Rt({}, e.attr) }, t), Mf(e.child));
  };
}
function mg(e) {
  var t = function (n) {
    var r = e.attr,
      i = e.size,
      o = e.title,
      s = pg(e, ["attr", "size", "title"]),
      l = i || n.size || "1em",
      a;
    return (
      n.className && (a = n.className),
      e.className && (a = (a ? a + " " : "") + e.className),
      et.createElement(
        "svg",
        Rt(
          { stroke: "currentColor", fill: "currentColor", strokeWidth: "0" },
          n.attr,
          r,
          s,
          {
            className: a,
            style: Rt(Rt({ color: e.color || n.color }, n.style), e.style),
            height: l,
            width: l,
            xmlns: "http://www.w3.org/2000/svg",
          }
        ),
        o && et.createElement("title", null, o),
        e.children
      )
    );
  };
  return $u !== void 0
    ? et.createElement($u.Consumer, null, function (n) {
        return t(n);
      })
    : t(Df);
}
/**
 * @remix-run/router v1.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Lr() {
  return (
    (Lr = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Lr.apply(this, arguments)
  );
}
var St;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(St || (St = {}));
const Hu = "popstate";
function gg(e) {
  e === void 0 && (e = {});
  function t(r, i) {
    let { pathname: o, search: s, hash: l } = r.location;
    return pl(
      "",
      { pathname: o, search: s, hash: l },
      (i.state && i.state.usr) || null,
      (i.state && i.state.key) || "default"
    );
  }
  function n(r, i) {
    return typeof i == "string" ? i : io(i);
  }
  return yg(t, n, null, e);
}
function J(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function ya(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function vg() {
  return Math.random().toString(36).substr(2, 8);
}
function Vu(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function pl(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    Lr(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? $n(t) : t,
      { state: n, key: (t && t.key) || r || vg() }
    )
  );
}
function io(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function $n(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function yg(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: i = document.defaultView, v5Compat: o = !1 } = r,
    s = i.history,
    l = St.Pop,
    a = null,
    u = f();
  u == null && ((u = 0), s.replaceState(Lr({}, s.state, { idx: u }), ""));
  function f() {
    return (s.state || { idx: null }).idx;
  }
  function p() {
    l = St.Pop;
    let x = f(),
      h = x == null ? null : x - u;
    (u = x), a && a({ action: l, location: _.location, delta: h });
  }
  function m(x, h) {
    l = St.Push;
    let c = pl(_.location, x, h);
    n && n(c, x), (u = f() + 1);
    let d = Vu(c, u),
      v = _.createHref(c);
    try {
      s.pushState(d, "", v);
    } catch (E) {
      if (E instanceof DOMException && E.name === "DataCloneError") throw E;
      i.location.assign(v);
    }
    o && a && a({ action: l, location: _.location, delta: 1 });
  }
  function y(x, h) {
    l = St.Replace;
    let c = pl(_.location, x, h);
    n && n(c, x), (u = f());
    let d = Vu(c, u),
      v = _.createHref(c);
    s.replaceState(d, "", v),
      o && a && a({ action: l, location: _.location, delta: 0 });
  }
  function w(x) {
    let h = i.location.origin !== "null" ? i.location.origin : i.location.href,
      c = typeof x == "string" ? x : io(x);
    return (
      J(
        h,
        "No window.location.(origin|href) available to create URL for href: " +
          c
      ),
      new URL(c, h)
    );
  }
  let _ = {
    get action() {
      return l;
    },
    get location() {
      return e(i, s);
    },
    listen(x) {
      if (a) throw new Error("A history only accepts one active listener");
      return (
        i.addEventListener(Hu, p),
        (a = x),
        () => {
          i.removeEventListener(Hu, p), (a = null);
        }
      );
    },
    createHref(x) {
      return t(i, x);
    },
    createURL: w,
    encodeLocation(x) {
      let h = w(x);
      return { pathname: h.pathname, search: h.search, hash: h.hash };
    },
    push: m,
    replace: y,
    go(x) {
      return s.go(x);
    },
  };
  return _;
}
var Wu;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(Wu || (Wu = {}));
function wg(e, t, n) {
  n === void 0 && (n = "/");
  let r = typeof t == "string" ? $n(t) : t,
    i = wa(r.pathname || "/", n);
  if (i == null) return null;
  let o = jf(e);
  _g(o);
  let s = null;
  for (let l = 0; s == null && l < o.length; ++l) s = Pg(o[l], Lg(i));
  return s;
}
function jf(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let i = (o, s, l) => {
    let a = {
      relativePath: l === void 0 ? o.path || "" : l,
      caseSensitive: o.caseSensitive === !0,
      childrenIndex: s,
      route: o,
    };
    a.relativePath.startsWith("/") &&
      (J(
        a.relativePath.startsWith(r),
        'Absolute route path "' +
          a.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (a.relativePath = a.relativePath.slice(r.length)));
    let u = Ot([r, a.relativePath]),
      f = n.concat(a);
    o.children &&
      o.children.length > 0 &&
      (J(
        o.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + u + '".')
      ),
      jf(o.children, t, f, u)),
      !(o.path == null && !o.index) &&
        t.push({ path: u, score: Tg(u, o.index), routesMeta: f });
  };
  return (
    e.forEach((o, s) => {
      var l;
      if (o.path === "" || !((l = o.path) != null && l.includes("?"))) i(o, s);
      else for (let a of Uf(o.path)) i(o, s, a);
    }),
    t
  );
}
function Uf(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    i = n.endsWith("?"),
    o = n.replace(/\?$/, "");
  if (r.length === 0) return i ? [o, ""] : [o];
  let s = Uf(r.join("/")),
    l = [];
  return (
    l.push(...s.map((a) => (a === "" ? o : [o, a].join("/")))),
    i && l.push(...s),
    l.map((a) => (e.startsWith("/") && a === "" ? "/" : a))
  );
}
function _g(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : Ng(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const Sg = /^:\w+$/,
  Eg = 3,
  kg = 2,
  Cg = 1,
  Ig = 10,
  xg = -2,
  Ku = (e) => e === "*";
function Tg(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(Ku) && (r += xg),
    t && (r += kg),
    n
      .filter((i) => !Ku(i))
      .reduce((i, o) => i + (Sg.test(o) ? Eg : o === "" ? Cg : Ig), r)
  );
}
function Ng(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, i) => r === t[i])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function Pg(e, t) {
  let { routesMeta: n } = e,
    r = {},
    i = "/",
    o = [];
  for (let s = 0; s < n.length; ++s) {
    let l = n[s],
      a = s === n.length - 1,
      u = i === "/" ? t : t.slice(i.length) || "/",
      f = Rg(
        { path: l.relativePath, caseSensitive: l.caseSensitive, end: a },
        u
      );
    if (!f) return null;
    Object.assign(r, f.params);
    let p = l.route;
    o.push({
      params: r,
      pathname: Ot([i, f.pathname]),
      pathnameBase: jg(Ot([i, f.pathnameBase])),
      route: p,
    }),
      f.pathnameBase !== "/" && (i = Ot([i, f.pathnameBase]));
  }
  return o;
}
function Rg(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = Og(e.path, e.caseSensitive, e.end),
    i = t.match(n);
  if (!i) return null;
  let o = i[0],
    s = o.replace(/(.)\/+$/, "$1"),
    l = i.slice(1);
  return {
    params: r.reduce((u, f, p) => {
      if (f === "*") {
        let m = l[p] || "";
        s = o.slice(0, o.length - m.length).replace(/(.)\/+$/, "$1");
      }
      return (u[f] = Ag(l[p] || "", f)), u;
    }, {}),
    pathname: o,
    pathnameBase: s,
    pattern: e,
  };
}
function Og(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    ya(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    i =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^$?{}|()[\]]/g, "\\$&")
        .replace(/\/:(\w+)/g, (s, l) => (r.push(l), "/([^\\/]+)"));
  return (
    e.endsWith("*")
      ? (r.push("*"),
        (i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (i += "\\/*$")
      : e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"),
    [new RegExp(i, t ? void 0 : "i"), r]
  );
}
function Lg(e) {
  try {
    return decodeURI(e);
  } catch (t) {
    return (
      ya(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function Ag(e, t) {
  try {
    return decodeURIComponent(e);
  } catch (n) {
    return (
      ya(
        !1,
        'The value for the URL param "' +
          t +
          '" will not be decoded because' +
          (' the string "' +
            e +
            '" is a malformed URL segment. This is probably') +
          (" due to a bad percent encoding (" + n + ").")
      ),
      e
    );
  }
}
function wa(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function Dg(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: i = "",
  } = typeof e == "string" ? $n(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : Mg(n, t)) : t,
    search: Ug(r),
    hash: zg(i),
  };
}
function Mg(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((i) => {
      i === ".." ? n.length > 1 && n.pop() : i !== "." && n.push(i);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function fs(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function zf(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function Ff(e, t, n, r) {
  r === void 0 && (r = !1);
  let i;
  typeof e == "string"
    ? (i = $n(e))
    : ((i = Lr({}, e)),
      J(
        !i.pathname || !i.pathname.includes("?"),
        fs("?", "pathname", "search", i)
      ),
      J(
        !i.pathname || !i.pathname.includes("#"),
        fs("#", "pathname", "hash", i)
      ),
      J(!i.search || !i.search.includes("#"), fs("#", "search", "hash", i)));
  let o = e === "" || i.pathname === "",
    s = o ? "/" : i.pathname,
    l;
  if (r || s == null) l = n;
  else {
    let p = t.length - 1;
    if (s.startsWith("..")) {
      let m = s.split("/");
      for (; m[0] === ".."; ) m.shift(), (p -= 1);
      i.pathname = m.join("/");
    }
    l = p >= 0 ? t[p] : "/";
  }
  let a = Dg(i, l),
    u = s && s !== "/" && s.endsWith("/"),
    f = (o || s === ".") && n.endsWith("/");
  return !a.pathname.endsWith("/") && (u || f) && (a.pathname += "/"), a;
}
const Ot = (e) => e.join("/").replace(/\/\/+/g, "/"),
  jg = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  Ug = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  zg = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function Fg(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const Bf = ["post", "put", "patch", "delete"];
new Set(Bf);
const Bg = ["get", ...Bf];
new Set(Bg);
/**
 * React Router v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function oo() {
  return (
    (oo = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    oo.apply(this, arguments)
  );
}
const _a = S.createContext(null),
  bg = S.createContext(null),
  Hn = S.createContext(null),
  Oo = S.createContext(null),
  ut = S.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  bf = S.createContext(null);
function $g(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  $r() || J(!1);
  let { basename: r, navigator: i } = S.useContext(Hn),
    { hash: o, pathname: s, search: l } = Hf(e, { relative: n }),
    a = s;
  return (
    r !== "/" && (a = s === "/" ? r : Ot([r, s])),
    i.createHref({ pathname: a, search: l, hash: o })
  );
}
function $r() {
  return S.useContext(Oo) != null;
}
function Lo() {
  return $r() || J(!1), S.useContext(Oo).location;
}
function $f(e) {
  S.useContext(Hn).static || S.useLayoutEffect(e);
}
function Hr() {
  let { isDataRoute: e } = S.useContext(ut);
  return e ? rv() : Hg();
}
function Hg() {
  $r() || J(!1);
  let e = S.useContext(_a),
    { basename: t, navigator: n } = S.useContext(Hn),
    { matches: r } = S.useContext(ut),
    { pathname: i } = Lo(),
    o = JSON.stringify(zf(r).map((a) => a.pathnameBase)),
    s = S.useRef(!1);
  return (
    $f(() => {
      s.current = !0;
    }),
    S.useCallback(
      function (a, u) {
        if ((u === void 0 && (u = {}), !s.current)) return;
        if (typeof a == "number") {
          n.go(a);
          return;
        }
        let f = Ff(a, JSON.parse(o), i, u.relative === "path");
        e == null &&
          t !== "/" &&
          (f.pathname = f.pathname === "/" ? t : Ot([t, f.pathname])),
          (u.replace ? n.replace : n.push)(f, u.state, u);
      },
      [t, n, o, i, e]
    )
  );
}
const Vg = S.createContext(null);
function Wg(e) {
  let t = S.useContext(ut).outlet;
  return t && S.createElement(Vg.Provider, { value: e }, t);
}
function Sa() {
  let { matches: e } = S.useContext(ut),
    t = e[e.length - 1];
  return t ? t.params : {};
}
function Hf(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { matches: r } = S.useContext(ut),
    { pathname: i } = Lo(),
    o = JSON.stringify(zf(r).map((s) => s.pathnameBase));
  return S.useMemo(() => Ff(e, JSON.parse(o), i, n === "path"), [e, o, i, n]);
}
function Kg(e, t) {
  return Gg(e, t);
}
function Gg(e, t, n) {
  $r() || J(!1);
  let { navigator: r } = S.useContext(Hn),
    { matches: i } = S.useContext(ut),
    o = i[i.length - 1],
    s = o ? o.params : {};
  o && o.pathname;
  let l = o ? o.pathnameBase : "/";
  o && o.route;
  let a = Lo(),
    u;
  if (t) {
    var f;
    let _ = typeof t == "string" ? $n(t) : t;
    l === "/" || ((f = _.pathname) != null && f.startsWith(l)) || J(!1),
      (u = _);
  } else u = a;
  let p = u.pathname || "/",
    m = l === "/" ? p : p.slice(l.length) || "/",
    y = wg(e, { pathname: m }),
    w = qg(
      y &&
        y.map((_) =>
          Object.assign({}, _, {
            params: Object.assign({}, s, _.params),
            pathname: Ot([
              l,
              r.encodeLocation
                ? r.encodeLocation(_.pathname).pathname
                : _.pathname,
            ]),
            pathnameBase:
              _.pathnameBase === "/"
                ? l
                : Ot([
                    l,
                    r.encodeLocation
                      ? r.encodeLocation(_.pathnameBase).pathname
                      : _.pathnameBase,
                  ]),
          })
        ),
      i,
      n
    );
  return t && w
    ? S.createElement(
        Oo.Provider,
        {
          value: {
            location: oo(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              u
            ),
            navigationType: St.Pop,
          },
        },
        w
      )
    : w;
}
function Qg() {
  let e = nv(),
    t = Fg(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    i = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" },
    o = null;
  return S.createElement(
    S.Fragment,
    null,
    S.createElement("h2", null, "Unexpected Application Error!"),
    S.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? S.createElement("pre", { style: i }, n) : null,
    o
  );
}
const Yg = S.createElement(Qg, null);
class Jg extends S.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error || n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n
    );
  }
  render() {
    return this.state.error
      ? S.createElement(
          ut.Provider,
          { value: this.props.routeContext },
          S.createElement(bf.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function Xg(e) {
  let { routeContext: t, match: n, children: r } = e,
    i = S.useContext(_a);
  return (
    i &&
      i.static &&
      i.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (i.staticContext._deepestRenderedBoundaryId = n.route.id),
    S.createElement(ut.Provider, { value: t }, r)
  );
}
function qg(e, t, n) {
  var r;
  if ((t === void 0 && (t = []), n === void 0 && (n = null), e == null)) {
    var i;
    if ((i = n) != null && i.errors) e = n.matches;
    else return null;
  }
  let o = e,
    s = (r = n) == null ? void 0 : r.errors;
  if (s != null) {
    let l = o.findIndex(
      (a) => a.route.id && (s == null ? void 0 : s[a.route.id])
    );
    l >= 0 || J(!1), (o = o.slice(0, Math.min(o.length, l + 1)));
  }
  return o.reduceRight((l, a, u) => {
    let f = a.route.id ? (s == null ? void 0 : s[a.route.id]) : null,
      p = null;
    n && (p = a.route.errorElement || Yg);
    let m = t.concat(o.slice(0, u + 1)),
      y = () => {
        let w;
        return (
          f
            ? (w = p)
            : a.route.Component
            ? (w = S.createElement(a.route.Component, null))
            : a.route.element
            ? (w = a.route.element)
            : (w = l),
          S.createElement(Xg, {
            match: a,
            routeContext: { outlet: l, matches: m, isDataRoute: n != null },
            children: w,
          })
        );
      };
    return n && (a.route.ErrorBoundary || a.route.errorElement || u === 0)
      ? S.createElement(Jg, {
          location: n.location,
          revalidation: n.revalidation,
          component: p,
          error: f,
          children: y(),
          routeContext: { outlet: null, matches: m, isDataRoute: !0 },
        })
      : y();
  }, null);
}
var Vf = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(Vf || {}),
  so = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(so || {});
function Zg(e) {
  let t = S.useContext(_a);
  return t || J(!1), t;
}
function ev(e) {
  let t = S.useContext(bg);
  return t || J(!1), t;
}
function tv(e) {
  let t = S.useContext(ut);
  return t || J(!1), t;
}
function Wf(e) {
  let t = tv(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || J(!1), n.route.id;
}
function nv() {
  var e;
  let t = S.useContext(bf),
    n = ev(so.UseRouteError),
    r = Wf(so.UseRouteError);
  return t || ((e = n.errors) == null ? void 0 : e[r]);
}
function rv() {
  let { router: e } = Zg(Vf.UseNavigateStable),
    t = Wf(so.UseNavigateStable),
    n = S.useRef(!1);
  return (
    $f(() => {
      n.current = !0;
    }),
    S.useCallback(
      function (i, o) {
        o === void 0 && (o = {}),
          n.current &&
            (typeof i == "number"
              ? e.navigate(i)
              : e.navigate(i, oo({ fromRouteId: t }, o)));
      },
      [e, t]
    )
  );
}
function iv(e) {
  return Wg(e.context);
}
function Pi(e) {
  J(!1);
}
function ov(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: i = St.Pop,
    navigator: o,
    static: s = !1,
  } = e;
  $r() && J(!1);
  let l = t.replace(/^\/*/, "/"),
    a = S.useMemo(() => ({ basename: l, navigator: o, static: s }), [l, o, s]);
  typeof r == "string" && (r = $n(r));
  let {
      pathname: u = "/",
      search: f = "",
      hash: p = "",
      state: m = null,
      key: y = "default",
    } = r,
    w = S.useMemo(() => {
      let _ = wa(u, l);
      return _ == null
        ? null
        : {
            location: { pathname: _, search: f, hash: p, state: m, key: y },
            navigationType: i,
          };
    }, [l, u, f, p, m, y, i]);
  return w == null
    ? null
    : S.createElement(
        Hn.Provider,
        { value: a },
        S.createElement(Oo.Provider, { children: n, value: w })
      );
}
function sv(e) {
  let { children: t, location: n } = e;
  return Kg(ml(t), n);
}
new Promise(() => {});
function ml(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    S.Children.forEach(e, (r, i) => {
      if (!S.isValidElement(r)) return;
      let o = [...t, i];
      if (r.type === S.Fragment) {
        n.push.apply(n, ml(r.props.children, o));
        return;
      }
      r.type !== Pi && J(!1), !r.props.index || !r.props.children || J(!1);
      let s = {
        id: r.props.id || o.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      r.props.children && (s.children = ml(r.props.children, o)), n.push(s);
    }),
    n
  );
}
/**
 * React Router DOM v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function gl() {
  return (
    (gl = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    gl.apply(this, arguments)
  );
}
function lv(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    i,
    o;
  for (o = 0; o < r.length; o++)
    (i = r[o]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function av(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function uv(e, t) {
  return e.button === 0 && (!t || t === "_self") && !av(e);
}
const cv = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
  ],
  dv = "startTransition",
  Gu = rp[dv];
function fv(e) {
  let { basename: t, children: n, future: r, window: i } = e,
    o = S.useRef();
  o.current == null && (o.current = gg({ window: i, v5Compat: !0 }));
  let s = o.current,
    [l, a] = S.useState({ action: s.action, location: s.location }),
    { v7_startTransition: u } = r || {},
    f = S.useCallback(
      (p) => {
        u && Gu ? Gu(() => a(p)) : a(p);
      },
      [a, u]
    );
  return (
    S.useLayoutEffect(() => s.listen(f), [s, f]),
    S.createElement(ov, {
      basename: t,
      children: n,
      location: l.location,
      navigationType: l.action,
      navigator: s,
    })
  );
}
const hv =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  pv = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Kf = S.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: i,
        reloadDocument: o,
        replace: s,
        state: l,
        target: a,
        to: u,
        preventScrollReset: f,
      } = t,
      p = lv(t, cv),
      { basename: m } = S.useContext(Hn),
      y,
      w = !1;
    if (typeof u == "string" && pv.test(u) && ((y = u), hv))
      try {
        let c = new URL(window.location.href),
          d = u.startsWith("//") ? new URL(c.protocol + u) : new URL(u),
          v = wa(d.pathname, m);
        d.origin === c.origin && v != null
          ? (u = v + d.search + d.hash)
          : (w = !0);
      } catch {}
    let _ = $g(u, { relative: i }),
      x = mv(u, {
        replace: s,
        state: l,
        target: a,
        preventScrollReset: f,
        relative: i,
      });
    function h(c) {
      r && r(c), c.defaultPrevented || x(c);
    }
    return S.createElement(
      "a",
      gl({}, p, { href: y || _, onClick: w || o ? r : h, ref: n, target: a })
    );
  });
var Qu;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher");
})(Qu || (Qu = {}));
var Yu;
(function (e) {
  (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(Yu || (Yu = {}));
function mv(e, t) {
  let {
      target: n,
      replace: r,
      state: i,
      preventScrollReset: o,
      relative: s,
    } = t === void 0 ? {} : t,
    l = Hr(),
    a = Lo(),
    u = Hf(e, { relative: s });
  return S.useCallback(
    (f) => {
      if (uv(f, n)) {
        f.preventDefault();
        let p = r !== void 0 ? r : io(a) === io(u);
        l(e, { replace: p, state: i, preventScrollReset: o, relative: s });
      }
    },
    [a, l, u, r, i, n, e, o, s]
  );
}
function gv(e) {
  const [t, n] = S.useState(!1),
    [r, i] = S.useState(!1),
    o = Hr(),
    s = () => {
      console.log("clicked"), n((l) => !l);
    };
  return g.jsxs("div", {
    className: " pt-8 grid w-full",
    children: [
      g.jsx("div", {
        className: "text-3xl col-start-2 font-bold",
        children: "Notes",
      }),
      g.jsx("div", {
        className: "text-3xl col-start-11 font-bold",
        children: g.jsx("img", {
          src: "/profile.png",
          className: " h-20 w-25 cursor-pointer",
          onClick: s,
          alt: "",
        }),
      }),
      t &&
        g.jsxs("div", {
          className: " right-48 absolute h-56 w-48 rounded-md  bg-purple-500",
          children: [
            g.jsx("div", {
              className:
                "flex justify-center text-2xl p-2 border-b-2 border-purple-700",
              children: g.jsx("h1", { children: e.Name }),
            }),
            g.jsx("div", {
              className: "flex justify-center text-2xl p-2",
              children: g.jsx("button", {
                onClick: () => {
                  i((l) => !l);
                },
                children: "Log out",
              }),
            }),
          ],
        }),
      r &&
        g.jsxs("div", {
          className:
            "absolute z-20 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] h-80 w-[560px] bg-purple-500 rounded-md backdrop-blur-3xl border-purple-700 border-2",
          children: [
            g.jsx("div", {
              className: "flex justify-center p-5",
              children: g.jsx("h1", {
                className: "text-3xl",
                children: "Are you sure you want to Log Out ?",
              }),
            }),
            g.jsxs("div", {
              className: "flex justify-around items-end h-60",
              children: [
                g.jsx("button", {
                  className: "bg-purple-600 rounded text-2xl m-2 p-2 w-60",
                  onClick: () => {
                    i((l) => !l);
                  },
                  children: "No",
                }),
                g.jsx("button", {
                  className: "bg-purple-600 rounded text-2xl m-2 p-2 w-60",
                  onClick: () => o("/"),
                  children: "Yes",
                }),
              ],
            }),
          ],
        }),
    ],
  });
}
function Gf({ onSelectColor: e }) {
  const t = [
    "bg-pink-300",
    "bg-orange-300",
    "bg-green-300",
    "bg-teal-300",
    "bg-sky-300",
    "bg-red-300",
    "bg-violet-300",
    "bg-amber-300",
  ];
  return g.jsx("div", {
    className: "flex mt-4 relative pl-16",
    children: t.map((n, r) =>
      g.jsx(
        "div",
        {
          className: `flex flex-col w-8 h-8 border border-black rounded-full ${n} mr-2 cursor-pointer`,
          onClick: () => e(n),
        },
        r
      )
    ),
  });
}
function vv(e) {
  return at({
    tag: "svg",
    attr: { viewBox: "0 0 384 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M0 64C0 46.3 14.3 32 32 32H80 96 224c70.7 0 128 57.3 128 128c0 31.3-11.3 60.1-30 82.3c37.1 22.4 62 63.1 62 109.7c0 70.7-57.3 128-128 128H96 80 32c-17.7 0-32-14.3-32-32s14.3-32 32-32H48V256 96H32C14.3 96 0 81.7 0 64zM224 224c35.3 0 64-28.7 64-64s-28.7-64-64-64H112V224H224zM112 288V416H256c35.3 0 64-28.7 64-64s-28.7-64-64-64H224 112z",
        },
      },
    ],
  })(e);
}
function yv(e) {
  return at({
    tag: "svg",
    attr: { viewBox: "0 0 384 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M128 64c0-17.7 14.3-32 32-32H352c17.7 0 32 14.3 32 32s-14.3 32-32 32H293.3L160 416h64c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H90.7L224 96H160c-17.7 0-32-14.3-32-32z",
        },
      },
    ],
  })(e);
}
function wv(e) {
  return at({
    tag: "svg",
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M16 64c0-17.7 14.3-32 32-32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H128V224c0 53 43 96 96 96s96-43 96-96V96H304c-17.7 0-32-14.3-32-32s14.3-32 32-32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H384V224c0 88.4-71.6 160-160 160s-160-71.6-160-160V96H48C30.3 96 16 81.7 16 64zM0 448c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32z",
        },
      },
    ],
  })(e);
}
function _v(e) {
  return at({
    tag: "svg",
    attr: { viewBox: "0 0 1024 1024" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M868 545.5L536.1 163a31.96 31.96 0 0 0-48.3 0L156 545.5a7.97 7.97 0 0 0 6 13.2h81c4.6 0 9-2 12.1-5.5L474 300.9V864c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V300.9l218.9 252.3c3 3.5 7.4 5.5 12.1 5.5h81c6.8 0 10.5-8 6-13.2z",
        },
      },
    ],
  })(e);
}
function Sv(e) {
  return at({
    tag: "svg",
    attr: { viewBox: "0 0 1024 1024" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z",
        },
      },
    ],
  })(e);
}
function Ev(e) {
  return at({
    tag: "svg",
    attr: { viewBox: "0 0 1024 1024" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 0 0 0-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 0 0 9.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z",
        },
      },
    ],
  })(e);
}
const kv = ({ ref: e, calculateFor: t = "topLeft" }) => {
    const [n, r] = S.useState(),
      [i, o] = S.useState({}),
      [s, l] = S.useState(!1),
      a = S.useCallback(
        (y, w, _, x) => {
          if (t === "bottomRight") {
            o({
              x: Math.max(
                Math.min(window.innerWidth - y, window.innerWidth - (_ + y)),
                0
              ),
              y: Math.max(
                Math.min(window.innerHeight - w, window.innerHeight - (x + w)),
                0
              ),
            });
            return;
          }
          o({
            x: Math.min(Math.max(0, _), window.innerWidth - y),
            y: Math.min(Math.max(0, x), window.innerHeight - w),
          });
        },
        [t]
      ),
      u = (y) => {
        y.preventDefault(), l(!1);
      },
      f = (y) => {
        y.preventDefault();
        const { clientX: w, clientY: _ } = y,
          { current: x } = e;
        if (!x) return;
        const {
          top: h,
          left: c,
          width: d,
          height: v,
        } = x.getBoundingClientRect();
        l(!0),
          r({ startX: w, startY: _, top: h, left: c, width: d, height: v });
      },
      p = S.useCallback(
        (y) => {
          const { current: w } = e;
          if (!s || !w) return;
          y.preventDefault();
          const { clientX: _, clientY: x } = y,
            h = { x: n.startX - _, y: n.startY - x },
            { top: c, left: d, width: v, height: E } = n;
          a(v, E, d - h.x, c - h.y);
        },
        [s, n, e, a]
      ),
      m = (y, w) => {
        const { current: _ } = e,
          { top: x, left: h, width: c, height: d } = _.getBoundingClientRect();
        a(y ?? c, w ?? d, h, x);
      };
    return (
      S.useEffect(
        () => (
          document.addEventListener("mousemove", p),
          document.addEventListener("mouseup", u),
          () => {
            document.removeEventListener("mousemove", p),
              document.removeEventListener("mouseup", u);
          }
        ),
        [p]
      ),
      { position: i, handleMouseDown: f, recalculate: m }
    );
  },
  Cv = ({ onAddNote: e }) => {
    const { id: t } = Sa(),
      [n, r] = S.useState(!1),
      [i, o] = S.useState(""),
      [s, l] = S.useState(""),
      [a, u] = S.useState(!1),
      [f, p] = S.useState({ bold: !1, italics: !1, underline: !1 }),
      m = S.useRef(null),
      { position: y, handleMouseDown: w } = kv({ ref: m }),
      _ = () => {
        r((C) => !C);
      },
      x = (C) => {
        o(C.target.value);
      },
      h = () => {
        u((C) => !C);
      },
      c = (C) => {
        l(C), u(!1);
      },
      d = () => {
        let C = !f.bold;
        p({ ...f, bold: C });
      },
      v = () => {
        let C = !f.italics;
        p({ ...f, italics: C });
      },
      E = () => {
        let C = !f.underline;
        p({ ...f, underline: C });
      },
      I = () => {
        i != "" &&
          (fetch("http://localhost:4000/Notes/" + t, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              content: i,
              color: s,
              bold: f.bold,
              italics: f.italics,
              underline: f.underline,
            }),
          })
            .then((C) => C.json())
            .then((C) => {
              console.log(C);
            }),
          e({ content: i, color: s }),
          o(""),
          l(""),
          r(!1));
      };
    return g.jsx("div", {
      children: g.jsxs("div", {
        className: "flex justify-center",
        children: [
          g.jsx("div", {
            className:
              "border border-purple-800 bg-purple-600 rounded-full w-11 h-11  mt-12 mb-12 text-3xl hover:rotate-90 duration-700 cursor-pointer text-center hover:scale-110",
            onClick: _,
            children: "+",
          }),
          n &&
            g.jsxs("div", {
              className: "absolute top-20 left-40 z-10 w-96 ",
              ref: m,
              style: { top: y.y, left: y.x },
              children: [
                g.jsxs("div", {
                  className: "flex justify-end w-[340px] mb-2",
                  children: [
                    g.jsx(vv, {
                      className: `m-0.5 text-3xl cursor-pointer p-1 ${
                        f.bold ? "bg-purple-500" : "hover:bg-purple-500"
                      }  rounded-lg`,
                      onClick: d,
                    }),
                    g.jsx(yv, {
                      className: `m-0.5 text-3xl cursor-pointer p-1 ${
                        f.italics ? "bg-purple-500" : "hover:bg-purple-500"
                      }  rounded-lg`,
                      onClick: v,
                    }),
                    g.jsx(wv, {
                      className: `m-0.5 text-3xl cursor-pointer p-1 ${
                        f.underline ? "bg-purple-500" : "hover:bg-purple-500"
                      }  rounded-lg`,
                      onClick: E,
                    }),
                  ],
                }),
                g.jsx("textarea", {
                  name: "",
                  id: "",
                  cols: "30",
                  rows: "10",
                  className: `border ml-16 border-black p-4 ${s} resize-none`,
                  style: {
                    backgroundColor: { selectedColor: s },
                    fontWeight: f.bold ? "bold" : "normal",
                    fontStyle: f.italics ? "italic" : "normal",
                    textDecoration: f.underline ? "underline" : "none",
                  },
                  value: i,
                  onChange: x,
                }),
                g.jsxs("div", {
                  className: "flex  justify-center  hover:cursor-move",
                  onMouseDown: w,
                  children: [
                    g.jsx("button", {
                      className: "p-2 w-16  bg-green-500 rounded",
                      onClick: h,
                      children: "Color",
                    }),
                    g.jsx("button", {
                      className: "p-2 w-16 ml-3 bg-sky-400 rounded",
                      onClick: I,
                      children: "Add",
                    }),
                  ],
                }),
                a && g.jsx(Gf, { onSelectColor: c }),
              ],
            }),
        ],
      }),
    });
  };
function Iv(e) {
  return at({
    tag: "svg",
    attr: { viewBox: "0 0 24 24" },
    child: [
      {
        tag: "path",
        attr: {
          fill: "none",
          stroke: "#000",
          strokeWidth: "2",
          d: "M3,3 L21,21 M3,21 L21,3",
        },
      },
    ],
  })(e);
}
function xv({ content: e, setShowContent: t }) {
  return g.jsxs("div", {
    className:
      "border border-gray-400 rounded-md w-[500px] h-[400px] p-6 ml-[600px] absolute top-56 bg-white overflow-auto",
    children: [
      g.jsx(Iv, { className: "cursor-pointer fixed", onClick: t }),
      g.jsx("div", { className: "mt-6", children: e }),
    ],
  });
}
function Tv({ notes: e, setNotes: t, showContent: n }) {
  const [r, i] = S.useState(null),
    [o, s] = S.useState(""),
    [l, a] = S.useState(!1),
    [u, f] = S.useState(""),
    [p, m] = S.useState(!1),
    { id: y } = Sa(),
    w = (d) => {
      const v = e.filter((E, I) => I !== d);
      t(v),
        fetch("http://localhost:4000/Notes/" + y, {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ index: d }),
        })
          .then((E) => E.json())
          .then((E) => console.log(E));
    },
    _ = (d, v) => {
      a((E) => !E), i(d), s(v);
    },
    x = () => {
      m((d) => !d);
    },
    h = (d) => {
      f(d), m(!1);
    },
    c = (d) => {
      if (o.trim() !== "") {
        const v = e.map((E, I) =>
          I === d ? { ...E, content: o, color: u } : E
        );
        t(v),
          fetch("http://localhost:4000/Notes/" + y, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ content: o, index: d, color: u }),
          })
            .then((E) => E.json())
            .then((E) => console.log(E)),
          i(null),
          s("");
      }
    };
  return g.jsx("div", {
    className: "w-full mt-3 grid grid-flow-col",
    children: g.jsx("div", {
      className: "flex flex-wrap justify-center p-5",
      children: e.map((d, v) =>
        g.jsxs(
          "div",
          {
            className: `w-[320px] h-[250px] py-2 px-5 m-2 border border-gray-300 shadow-md rounded ${d.color}`,
            style: { backgroundColor: u },
            children: [
              g.jsxs("div", {
                className: "flex justify-end",
                children: [
                  g.jsx(Ev, {
                    className: "mt-2 mr-2 text-xl cursor-pointer",
                    onClick: () => _(v, d.content),
                  }),
                  g.jsx(Sv, {
                    className: "mr-2 mt-2 text-xl cursor-pointer",
                    onClick: () => w(v),
                  }),
                ],
              }),
              l && r === v
                ? g.jsxs("div", {
                    children: [
                      g.jsx("textarea", {
                        value: o,
                        className: "p-2 ml-2 mt-2 resize-none",
                        onChange: (E) => s(E.target.value),
                        rows: 5,
                        cols: 30,
                      }),
                      g.jsx("button", {
                        className: "p-2 w-16  bg-green-500 rounded",
                        onClick: x,
                        children: "Color",
                      }),
                      g.jsx("button", {
                        onClick: () => c(v),
                        className: "bg-sky-500 p-2 rounded mt-2 ml-2",
                        children: "Update",
                      }),
                      g.jsx("div", {
                        className: "w-[380px] scale-[.6] pr-2",
                        children: p && g.jsx(Gf, { onSelectColor: h }),
                      }),
                    ],
                  })
                : g.jsxs("div", {
                    className: "relative",
                    children: [
                      g.jsx("div", {
                        style: {
                          maxHeight: "150px",
                          overflow: "hidden",
                          fontWeight: d.bold ? "bold" : "normal",
                          fontStyle: d.italics ? "italic" : "normal",
                          textDecoration: d.underline ? "underline" : "none",
                        },
                        children: d.content
                          .split(
                            `
`
                          )
                          .map((E, I) => g.jsx("div", { children: E }, I)),
                      }),
                      d.content.length > 500 &&
                        g.jsx("div", {
                          className: "absolute right-2  cursor-pointer",
                          onClick: () => n(v),
                          children: g.jsx(_v, { className: "text-2xl mt-4" }),
                        }),
                    ],
                  }),
            ],
          },
          v
        )
      ),
    }),
  });
}
function hs(e) {
  return at({
    tag: "svg",
    attr: { fill: "currentColor", viewBox: "0 0 16 16" },
    child: [
      {
        tag: "path",
        attr: { d: "M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" },
      },
    ],
  })(e);
}
const Nv = () =>
    g.jsxs("div", {
      className:
        "flex justify-center backdrop-blur-3xl absolute z-50 items-center h-[100vh] w-full ",
      children: [
        g.jsx("div", {
          className: " text-4xl font-bold animate-bounce-slow pt-5 ",
          children: "L",
        }),
        g.jsx("div", {
          className: " text-4xl font-bold animate-bounce-medium pt-5 ",
          children: "o",
        }),
        g.jsx("div", {
          className: " text-4xl font-bold animate-bounce-fast pt-5 ",
          children: "a",
        }),
        g.jsx("div", {
          className: " text-4xl font-bold animate-bounce-slow pt-5 ",
          children: "d",
        }),
        g.jsx("div", {
          className: " text-4xl font-bold animate-bounce-medium pt-5 ",
          children: "i",
        }),
        g.jsx("div", {
          className: " text-4xl font-bold animate-bounce-fast pt-5 ",
          children: "n",
        }),
        g.jsx("div", {
          className: " text-4xl font-bold animate-bounce-slow pt-5 ",
          children: "g",
        }),
        g.jsx("div", {
          className: " animate-bounce-medium pt-5 text-2xl",
          children: g.jsx(hs, {}),
        }),
        g.jsx("div", {
          className: " animate-bounce-fast pt-5 text-2xl",
          children: g.jsx(hs, {}),
        }),
        g.jsx("div", {
          className: " animate-bounce-slow pt-5 text-2xl",
          children: g.jsx(hs, {}),
        }),
      ],
    }),
  Pv = () => {
    const [e, t] = S.useState([]),
      [n, r] = S.useState(null),
      [i, o] = S.useState(!0),
      { id: s } = Sa(),
      [l, a] = S.useState("");
    S.useEffect(() => {
      fetch("http://localhost:4000/Notes/" + s)
        .then((p) => p.json())
        .then((p) => {
          a(p.name), t(p.Notes), o(!1);
        });
    }, []);
    const u = (p) => {
        t([...e, p]);
      },
      f = (p) => {
        r(p);
      };
    return g.jsxs(g.Fragment, {
      children: [
        i && g.jsx(Nv, {}),
        g.jsx(gv, { Name: l }),
        g.jsxs("div", {
          children: [
            g.jsx(Cv, { onAddNote: u }),
            g.jsx(Tv, { notes: e, setNotes: t, showContent: f }),
            n !== null &&
              g.jsx(xv, {
                content: e[n].content,
                setShowContent: () => r(null),
              }),
          ],
        }),
      ],
    });
  };
function Rv(e) {
  return at({
    tag: "svg",
    attr: {
      version: "1.1",
      x: "0px",
      y: "0px",
      viewBox: "0 0 48 48",
      enableBackground: "new 0 0 48 48",
    },
    child: [
      {
        tag: "path",
        attr: {
          fill: "#FFC107",
          d: `M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12\r
	c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24\r
	c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z`,
        },
      },
      {
        tag: "path",
        attr: {
          fill: "#FF3D00",
          d: `M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657\r
	C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z`,
        },
      },
      {
        tag: "path",
        attr: {
          fill: "#4CAF50",
          d: `M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36\r
	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z`,
        },
      },
      {
        tag: "path",
        attr: {
          fill: "#1976D2",
          d: `M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571\r
	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z`,
        },
      },
    ],
  })(e);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Qf = function (e) {
    const t = [];
    let n = 0;
    for (let r = 0; r < e.length; r++) {
      let i = e.charCodeAt(r);
      i < 128
        ? (t[n++] = i)
        : i < 2048
        ? ((t[n++] = (i >> 6) | 192), (t[n++] = (i & 63) | 128))
        : (i & 64512) === 55296 &&
          r + 1 < e.length &&
          (e.charCodeAt(r + 1) & 64512) === 56320
        ? ((i = 65536 + ((i & 1023) << 10) + (e.charCodeAt(++r) & 1023)),
          (t[n++] = (i >> 18) | 240),
          (t[n++] = ((i >> 12) & 63) | 128),
          (t[n++] = ((i >> 6) & 63) | 128),
          (t[n++] = (i & 63) | 128))
        : ((t[n++] = (i >> 12) | 224),
          (t[n++] = ((i >> 6) & 63) | 128),
          (t[n++] = (i & 63) | 128));
    }
    return t;
  },
  Ov = function (e) {
    const t = [];
    let n = 0,
      r = 0;
    for (; n < e.length; ) {
      const i = e[n++];
      if (i < 128) t[r++] = String.fromCharCode(i);
      else if (i > 191 && i < 224) {
        const o = e[n++];
        t[r++] = String.fromCharCode(((i & 31) << 6) | (o & 63));
      } else if (i > 239 && i < 365) {
        const o = e[n++],
          s = e[n++],
          l = e[n++],
          a =
            (((i & 7) << 18) | ((o & 63) << 12) | ((s & 63) << 6) | (l & 63)) -
            65536;
        (t[r++] = String.fromCharCode(55296 + (a >> 10))),
          (t[r++] = String.fromCharCode(56320 + (a & 1023)));
      } else {
        const o = e[n++],
          s = e[n++];
        t[r++] = String.fromCharCode(
          ((i & 15) << 12) | ((o & 63) << 6) | (s & 63)
        );
      }
    }
    return t.join("");
  },
  Yf = {
    byteToCharMap_: null,
    charToByteMap_: null,
    byteToCharMapWebSafe_: null,
    charToByteMapWebSafe_: null,
    ENCODED_VALS_BASE:
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
    get ENCODED_VALS() {
      return this.ENCODED_VALS_BASE + "+/=";
    },
    get ENCODED_VALS_WEBSAFE() {
      return this.ENCODED_VALS_BASE + "-_.";
    },
    HAS_NATIVE_SUPPORT: typeof atob == "function",
    encodeByteArray(e, t) {
      if (!Array.isArray(e))
        throw Error("encodeByteArray takes an array as a parameter");
      this.init_();
      const n = t ? this.byteToCharMapWebSafe_ : this.byteToCharMap_,
        r = [];
      for (let i = 0; i < e.length; i += 3) {
        const o = e[i],
          s = i + 1 < e.length,
          l = s ? e[i + 1] : 0,
          a = i + 2 < e.length,
          u = a ? e[i + 2] : 0,
          f = o >> 2,
          p = ((o & 3) << 4) | (l >> 4);
        let m = ((l & 15) << 2) | (u >> 6),
          y = u & 63;
        a || ((y = 64), s || (m = 64)), r.push(n[f], n[p], n[m], n[y]);
      }
      return r.join("");
    },
    encodeString(e, t) {
      return this.HAS_NATIVE_SUPPORT && !t
        ? btoa(e)
        : this.encodeByteArray(Qf(e), t);
    },
    decodeString(e, t) {
      return this.HAS_NATIVE_SUPPORT && !t
        ? atob(e)
        : Ov(this.decodeStringToByteArray(e, t));
    },
    decodeStringToByteArray(e, t) {
      this.init_();
      const n = t ? this.charToByteMapWebSafe_ : this.charToByteMap_,
        r = [];
      for (let i = 0; i < e.length; ) {
        const o = n[e.charAt(i++)],
          l = i < e.length ? n[e.charAt(i)] : 0;
        ++i;
        const u = i < e.length ? n[e.charAt(i)] : 64;
        ++i;
        const p = i < e.length ? n[e.charAt(i)] : 64;
        if ((++i, o == null || l == null || u == null || p == null))
          throw new Lv();
        const m = (o << 2) | (l >> 4);
        if ((r.push(m), u !== 64)) {
          const y = ((l << 4) & 240) | (u >> 2);
          if ((r.push(y), p !== 64)) {
            const w = ((u << 6) & 192) | p;
            r.push(w);
          }
        }
      }
      return r;
    },
    init_() {
      if (!this.byteToCharMap_) {
        (this.byteToCharMap_ = {}),
          (this.charToByteMap_ = {}),
          (this.byteToCharMapWebSafe_ = {}),
          (this.charToByteMapWebSafe_ = {});
        for (let e = 0; e < this.ENCODED_VALS.length; e++)
          (this.byteToCharMap_[e] = this.ENCODED_VALS.charAt(e)),
            (this.charToByteMap_[this.byteToCharMap_[e]] = e),
            (this.byteToCharMapWebSafe_[e] =
              this.ENCODED_VALS_WEBSAFE.charAt(e)),
            (this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]] = e),
            e >= this.ENCODED_VALS_BASE.length &&
              ((this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)] = e),
              (this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)] = e));
      }
    },
  };
class Lv extends Error {
  constructor() {
    super(...arguments), (this.name = "DecodeBase64StringError");
  }
}
const Av = function (e) {
    const t = Qf(e);
    return Yf.encodeByteArray(t, !0);
  },
  Jf = function (e) {
    return Av(e).replace(/\./g, "");
  },
  Xf = function (e) {
    try {
      return Yf.decodeString(e, !0);
    } catch (t) {
      console.error("base64Decode failed: ", t);
    }
    return null;
  };
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Dv() {
  if (typeof self < "u") return self;
  if (typeof window < "u") return window;
  if (typeof global < "u") return global;
  throw new Error("Unable to locate global object.");
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Mv = () => Dv().__FIREBASE_DEFAULTS__,
  jv = () => {
    if (typeof process > "u" || typeof process.env > "u") return;
    const e = {}.__FIREBASE_DEFAULTS__;
    if (e) return JSON.parse(e);
  },
  Uv = () => {
    if (typeof document > "u") return;
    let e;
    try {
      e = document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/);
    } catch {
      return;
    }
    const t = e && Xf(e[1]);
    return t && JSON.parse(t);
  },
  Ea = () => {
    try {
      return Mv() || jv() || Uv();
    } catch (e) {
      console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);
      return;
    }
  },
  zv = (e) => {
    var t, n;
    return (n =
      (t = Ea()) === null || t === void 0 ? void 0 : t.emulatorHosts) ===
      null || n === void 0
      ? void 0
      : n[e];
  },
  qf = () => {
    var e;
    return (e = Ea()) === null || e === void 0 ? void 0 : e.config;
  },
  Zf = (e) => {
    var t;
    return (t = Ea()) === null || t === void 0 ? void 0 : t[`_${e}`];
  };
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Fv {
  constructor() {
    (this.reject = () => {}),
      (this.resolve = () => {}),
      (this.promise = new Promise((t, n) => {
        (this.resolve = t), (this.reject = n);
      }));
  }
  wrapCallback(t) {
    return (n, r) => {
      n ? this.reject(n) : this.resolve(r),
        typeof t == "function" &&
          (this.promise.catch(() => {}), t.length === 1 ? t(n) : t(n, r));
    };
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function ue() {
  return typeof navigator < "u" && typeof navigator.userAgent == "string"
    ? navigator.userAgent
    : "";
}
function Bv() {
  return (
    typeof window < "u" &&
    !!(window.cordova || window.phonegap || window.PhoneGap) &&
    /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ue())
  );
}
function bv() {
  const e =
    typeof chrome == "object"
      ? chrome.runtime
      : typeof browser == "object"
      ? browser.runtime
      : void 0;
  return typeof e == "object" && e.id !== void 0;
}
function $v() {
  return typeof navigator == "object" && navigator.product === "ReactNative";
}
function Hv() {
  const e = ue();
  return e.indexOf("MSIE ") >= 0 || e.indexOf("Trident/") >= 0;
}
function Vv() {
  try {
    return typeof indexedDB == "object";
  } catch {
    return !1;
  }
}
function Wv() {
  return new Promise((e, t) => {
    try {
      let n = !0;
      const r = "validate-browser-context-for-indexeddb-analytics-module",
        i = self.indexedDB.open(r);
      (i.onsuccess = () => {
        i.result.close(), n || self.indexedDB.deleteDatabase(r), e(!0);
      }),
        (i.onupgradeneeded = () => {
          n = !1;
        }),
        (i.onerror = () => {
          var o;
          t(
            ((o = i.error) === null || o === void 0 ? void 0 : o.message) || ""
          );
        });
    } catch (n) {
      t(n);
    }
  });
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Kv = "FirebaseError";
class Ft extends Error {
  constructor(t, n, r) {
    super(n),
      (this.code = t),
      (this.customData = r),
      (this.name = Kv),
      Object.setPrototypeOf(this, Ft.prototype),
      Error.captureStackTrace &&
        Error.captureStackTrace(this, Vr.prototype.create);
  }
}
class Vr {
  constructor(t, n, r) {
    (this.service = t), (this.serviceName = n), (this.errors = r);
  }
  create(t, ...n) {
    const r = n[0] || {},
      i = `${this.service}/${t}`,
      o = this.errors[t],
      s = o ? Gv(o, r) : "Error",
      l = `${this.serviceName}: ${s} (${i}).`;
    return new Ft(i, l, r);
  }
}
function Gv(e, t) {
  return e.replace(Qv, (n, r) => {
    const i = t[r];
    return i != null ? String(i) : `<${r}?>`;
  });
}
const Qv = /\{\$([^}]+)}/g;
function Yv(e) {
  for (const t in e) if (Object.prototype.hasOwnProperty.call(e, t)) return !1;
  return !0;
}
function lo(e, t) {
  if (e === t) return !0;
  const n = Object.keys(e),
    r = Object.keys(t);
  for (const i of n) {
    if (!r.includes(i)) return !1;
    const o = e[i],
      s = t[i];
    if (Ju(o) && Ju(s)) {
      if (!lo(o, s)) return !1;
    } else if (o !== s) return !1;
  }
  for (const i of r) if (!n.includes(i)) return !1;
  return !0;
}
function Ju(e) {
  return e !== null && typeof e == "object";
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Wr(e) {
  const t = [];
  for (const [n, r] of Object.entries(e))
    Array.isArray(r)
      ? r.forEach((i) => {
          t.push(encodeURIComponent(n) + "=" + encodeURIComponent(i));
        })
      : t.push(encodeURIComponent(n) + "=" + encodeURIComponent(r));
  return t.length ? "&" + t.join("&") : "";
}
function Jv(e, t) {
  const n = new Xv(e, t);
  return n.subscribe.bind(n);
}
class Xv {
  constructor(t, n) {
    (this.observers = []),
      (this.unsubscribes = []),
      (this.observerCount = 0),
      (this.task = Promise.resolve()),
      (this.finalized = !1),
      (this.onNoObservers = n),
      this.task
        .then(() => {
          t(this);
        })
        .catch((r) => {
          this.error(r);
        });
  }
  next(t) {
    this.forEachObserver((n) => {
      n.next(t);
    });
  }
  error(t) {
    this.forEachObserver((n) => {
      n.error(t);
    }),
      this.close(t);
  }
  complete() {
    this.forEachObserver((t) => {
      t.complete();
    }),
      this.close();
  }
  subscribe(t, n, r) {
    let i;
    if (t === void 0 && n === void 0 && r === void 0)
      throw new Error("Missing Observer.");
    qv(t, ["next", "error", "complete"])
      ? (i = t)
      : (i = { next: t, error: n, complete: r }),
      i.next === void 0 && (i.next = ps),
      i.error === void 0 && (i.error = ps),
      i.complete === void 0 && (i.complete = ps);
    const o = this.unsubscribeOne.bind(this, this.observers.length);
    return (
      this.finalized &&
        this.task.then(() => {
          try {
            this.finalError ? i.error(this.finalError) : i.complete();
          } catch {}
        }),
      this.observers.push(i),
      o
    );
  }
  unsubscribeOne(t) {
    this.observers === void 0 ||
      this.observers[t] === void 0 ||
      (delete this.observers[t],
      (this.observerCount -= 1),
      this.observerCount === 0 &&
        this.onNoObservers !== void 0 &&
        this.onNoObservers(this));
  }
  forEachObserver(t) {
    if (!this.finalized)
      for (let n = 0; n < this.observers.length; n++) this.sendOne(n, t);
  }
  sendOne(t, n) {
    this.task.then(() => {
      if (this.observers !== void 0 && this.observers[t] !== void 0)
        try {
          n(this.observers[t]);
        } catch (r) {
          typeof console < "u" && console.error && console.error(r);
        }
    });
  }
  close(t) {
    this.finalized ||
      ((this.finalized = !0),
      t !== void 0 && (this.finalError = t),
      this.task.then(() => {
        (this.observers = void 0), (this.onNoObservers = void 0);
      }));
  }
}
function qv(e, t) {
  if (typeof e != "object" || e === null) return !1;
  for (const n of t) if (n in e && typeof e[n] == "function") return !0;
  return !1;
}
function ps() {}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Vn(e) {
  return e && e._delegate ? e._delegate : e;
}
class Un {
  constructor(t, n, r) {
    (this.name = t),
      (this.instanceFactory = n),
      (this.type = r),
      (this.multipleInstances = !1),
      (this.serviceProps = {}),
      (this.instantiationMode = "LAZY"),
      (this.onInstanceCreated = null);
  }
  setInstantiationMode(t) {
    return (this.instantiationMode = t), this;
  }
  setMultipleInstances(t) {
    return (this.multipleInstances = t), this;
  }
  setServiceProps(t) {
    return (this.serviceProps = t), this;
  }
  setInstanceCreatedCallback(t) {
    return (this.onInstanceCreated = t), this;
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Vt = "[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Zv {
  constructor(t, n) {
    (this.name = t),
      (this.container = n),
      (this.component = null),
      (this.instances = new Map()),
      (this.instancesDeferred = new Map()),
      (this.instancesOptions = new Map()),
      (this.onInitCallbacks = new Map());
  }
  get(t) {
    const n = this.normalizeInstanceIdentifier(t);
    if (!this.instancesDeferred.has(n)) {
      const r = new Fv();
      if (
        (this.instancesDeferred.set(n, r),
        this.isInitialized(n) || this.shouldAutoInitialize())
      )
        try {
          const i = this.getOrInitializeService({ instanceIdentifier: n });
          i && r.resolve(i);
        } catch {}
    }
    return this.instancesDeferred.get(n).promise;
  }
  getImmediate(t) {
    var n;
    const r = this.normalizeInstanceIdentifier(
        t == null ? void 0 : t.identifier
      ),
      i =
        (n = t == null ? void 0 : t.optional) !== null && n !== void 0 ? n : !1;
    if (this.isInitialized(r) || this.shouldAutoInitialize())
      try {
        return this.getOrInitializeService({ instanceIdentifier: r });
      } catch (o) {
        if (i) return null;
        throw o;
      }
    else {
      if (i) return null;
      throw Error(`Service ${this.name} is not available`);
    }
  }
  getComponent() {
    return this.component;
  }
  setComponent(t) {
    if (t.name !== this.name)
      throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);
    if (this.component)
      throw Error(`Component for ${this.name} has already been provided`);
    if (((this.component = t), !!this.shouldAutoInitialize())) {
      if (t0(t))
        try {
          this.getOrInitializeService({ instanceIdentifier: Vt });
        } catch {}
      for (const [n, r] of this.instancesDeferred.entries()) {
        const i = this.normalizeInstanceIdentifier(n);
        try {
          const o = this.getOrInitializeService({ instanceIdentifier: i });
          r.resolve(o);
        } catch {}
      }
    }
  }
  clearInstance(t = Vt) {
    this.instancesDeferred.delete(t),
      this.instancesOptions.delete(t),
      this.instances.delete(t);
  }
  async delete() {
    const t = Array.from(this.instances.values());
    await Promise.all([
      ...t.filter((n) => "INTERNAL" in n).map((n) => n.INTERNAL.delete()),
      ...t.filter((n) => "_delete" in n).map((n) => n._delete()),
    ]);
  }
  isComponentSet() {
    return this.component != null;
  }
  isInitialized(t = Vt) {
    return this.instances.has(t);
  }
  getOptions(t = Vt) {
    return this.instancesOptions.get(t) || {};
  }
  initialize(t = {}) {
    const { options: n = {} } = t,
      r = this.normalizeInstanceIdentifier(t.instanceIdentifier);
    if (this.isInitialized(r))
      throw Error(`${this.name}(${r}) has already been initialized`);
    if (!this.isComponentSet())
      throw Error(`Component ${this.name} has not been registered yet`);
    const i = this.getOrInitializeService({
      instanceIdentifier: r,
      options: n,
    });
    for (const [o, s] of this.instancesDeferred.entries()) {
      const l = this.normalizeInstanceIdentifier(o);
      r === l && s.resolve(i);
    }
    return i;
  }
  onInit(t, n) {
    var r;
    const i = this.normalizeInstanceIdentifier(n),
      o =
        (r = this.onInitCallbacks.get(i)) !== null && r !== void 0
          ? r
          : new Set();
    o.add(t), this.onInitCallbacks.set(i, o);
    const s = this.instances.get(i);
    return (
      s && t(s, i),
      () => {
        o.delete(t);
      }
    );
  }
  invokeOnInitCallbacks(t, n) {
    const r = this.onInitCallbacks.get(n);
    if (r)
      for (const i of r)
        try {
          i(t, n);
        } catch {}
  }
  getOrInitializeService({ instanceIdentifier: t, options: n = {} }) {
    let r = this.instances.get(t);
    if (
      !r &&
      this.component &&
      ((r = this.component.instanceFactory(this.container, {
        instanceIdentifier: e0(t),
        options: n,
      })),
      this.instances.set(t, r),
      this.instancesOptions.set(t, n),
      this.invokeOnInitCallbacks(r, t),
      this.component.onInstanceCreated)
    )
      try {
        this.component.onInstanceCreated(this.container, t, r);
      } catch {}
    return r || null;
  }
  normalizeInstanceIdentifier(t = Vt) {
    return this.component ? (this.component.multipleInstances ? t : Vt) : t;
  }
  shouldAutoInitialize() {
    return !!this.component && this.component.instantiationMode !== "EXPLICIT";
  }
}
function e0(e) {
  return e === Vt ? void 0 : e;
}
function t0(e) {
  return e.instantiationMode === "EAGER";
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class n0 {
  constructor(t) {
    (this.name = t), (this.providers = new Map());
  }
  addComponent(t) {
    const n = this.getProvider(t.name);
    if (n.isComponentSet())
      throw new Error(
        `Component ${t.name} has already been registered with ${this.name}`
      );
    n.setComponent(t);
  }
  addOrOverwriteComponent(t) {
    this.getProvider(t.name).isComponentSet() && this.providers.delete(t.name),
      this.addComponent(t);
  }
  getProvider(t) {
    if (this.providers.has(t)) return this.providers.get(t);
    const n = new Zv(t, this);
    return this.providers.set(t, n), n;
  }
  getProviders() {
    return Array.from(this.providers.values());
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var U;
(function (e) {
  (e[(e.DEBUG = 0)] = "DEBUG"),
    (e[(e.VERBOSE = 1)] = "VERBOSE"),
    (e[(e.INFO = 2)] = "INFO"),
    (e[(e.WARN = 3)] = "WARN"),
    (e[(e.ERROR = 4)] = "ERROR"),
    (e[(e.SILENT = 5)] = "SILENT");
})(U || (U = {}));
const r0 = {
    debug: U.DEBUG,
    verbose: U.VERBOSE,
    info: U.INFO,
    warn: U.WARN,
    error: U.ERROR,
    silent: U.SILENT,
  },
  i0 = U.INFO,
  o0 = {
    [U.DEBUG]: "log",
    [U.VERBOSE]: "log",
    [U.INFO]: "info",
    [U.WARN]: "warn",
    [U.ERROR]: "error",
  },
  s0 = (e, t, ...n) => {
    if (t < e.logLevel) return;
    const r = new Date().toISOString(),
      i = o0[t];
    if (i) console[i](`[${r}]  ${e.name}:`, ...n);
    else
      throw new Error(
        `Attempted to log a message with an invalid logType (value: ${t})`
      );
  };
class eh {
  constructor(t) {
    (this.name = t),
      (this._logLevel = i0),
      (this._logHandler = s0),
      (this._userLogHandler = null);
  }
  get logLevel() {
    return this._logLevel;
  }
  set logLevel(t) {
    if (!(t in U))
      throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);
    this._logLevel = t;
  }
  setLogLevel(t) {
    this._logLevel = typeof t == "string" ? r0[t] : t;
  }
  get logHandler() {
    return this._logHandler;
  }
  set logHandler(t) {
    if (typeof t != "function")
      throw new TypeError("Value assigned to `logHandler` must be a function");
    this._logHandler = t;
  }
  get userLogHandler() {
    return this._userLogHandler;
  }
  set userLogHandler(t) {
    this._userLogHandler = t;
  }
  debug(...t) {
    this._userLogHandler && this._userLogHandler(this, U.DEBUG, ...t),
      this._logHandler(this, U.DEBUG, ...t);
  }
  log(...t) {
    this._userLogHandler && this._userLogHandler(this, U.VERBOSE, ...t),
      this._logHandler(this, U.VERBOSE, ...t);
  }
  info(...t) {
    this._userLogHandler && this._userLogHandler(this, U.INFO, ...t),
      this._logHandler(this, U.INFO, ...t);
  }
  warn(...t) {
    this._userLogHandler && this._userLogHandler(this, U.WARN, ...t),
      this._logHandler(this, U.WARN, ...t);
  }
  error(...t) {
    this._userLogHandler && this._userLogHandler(this, U.ERROR, ...t),
      this._logHandler(this, U.ERROR, ...t);
  }
}
const l0 = (e, t) => t.some((n) => e instanceof n);
let Xu, qu;
function a0() {
  return (
    Xu ||
    (Xu = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])
  );
}
function u0() {
  return (
    qu ||
    (qu = [
      IDBCursor.prototype.advance,
      IDBCursor.prototype.continue,
      IDBCursor.prototype.continuePrimaryKey,
    ])
  );
}
const th = new WeakMap(),
  vl = new WeakMap(),
  nh = new WeakMap(),
  ms = new WeakMap(),
  ka = new WeakMap();
function c0(e) {
  const t = new Promise((n, r) => {
    const i = () => {
        e.removeEventListener("success", o), e.removeEventListener("error", s);
      },
      o = () => {
        n(Lt(e.result)), i();
      },
      s = () => {
        r(e.error), i();
      };
    e.addEventListener("success", o), e.addEventListener("error", s);
  });
  return (
    t
      .then((n) => {
        n instanceof IDBCursor && th.set(n, e);
      })
      .catch(() => {}),
    ka.set(t, e),
    t
  );
}
function d0(e) {
  if (vl.has(e)) return;
  const t = new Promise((n, r) => {
    const i = () => {
        e.removeEventListener("complete", o),
          e.removeEventListener("error", s),
          e.removeEventListener("abort", s);
      },
      o = () => {
        n(), i();
      },
      s = () => {
        r(e.error || new DOMException("AbortError", "AbortError")), i();
      };
    e.addEventListener("complete", o),
      e.addEventListener("error", s),
      e.addEventListener("abort", s);
  });
  vl.set(e, t);
}
let yl = {
  get(e, t, n) {
    if (e instanceof IDBTransaction) {
      if (t === "done") return vl.get(e);
      if (t === "objectStoreNames") return e.objectStoreNames || nh.get(e);
      if (t === "store")
        return n.objectStoreNames[1]
          ? void 0
          : n.objectStore(n.objectStoreNames[0]);
    }
    return Lt(e[t]);
  },
  set(e, t, n) {
    return (e[t] = n), !0;
  },
  has(e, t) {
    return e instanceof IDBTransaction && (t === "done" || t === "store")
      ? !0
      : t in e;
  },
};
function f0(e) {
  yl = e(yl);
}
function h0(e) {
  return e === IDBDatabase.prototype.transaction &&
    !("objectStoreNames" in IDBTransaction.prototype)
    ? function (t, ...n) {
        const r = e.call(gs(this), t, ...n);
        return nh.set(r, t.sort ? t.sort() : [t]), Lt(r);
      }
    : u0().includes(e)
    ? function (...t) {
        return e.apply(gs(this), t), Lt(th.get(this));
      }
    : function (...t) {
        return Lt(e.apply(gs(this), t));
      };
}
function p0(e) {
  return typeof e == "function"
    ? h0(e)
    : (e instanceof IDBTransaction && d0(e),
      l0(e, a0()) ? new Proxy(e, yl) : e);
}
function Lt(e) {
  if (e instanceof IDBRequest) return c0(e);
  if (ms.has(e)) return ms.get(e);
  const t = p0(e);
  return t !== e && (ms.set(e, t), ka.set(t, e)), t;
}
const gs = (e) => ka.get(e);
function m0(e, t, { blocked: n, upgrade: r, blocking: i, terminated: o } = {}) {
  const s = indexedDB.open(e, t),
    l = Lt(s);
  return (
    r &&
      s.addEventListener("upgradeneeded", (a) => {
        r(Lt(s.result), a.oldVersion, a.newVersion, Lt(s.transaction), a);
      }),
    n && s.addEventListener("blocked", (a) => n(a.oldVersion, a.newVersion, a)),
    l
      .then((a) => {
        o && a.addEventListener("close", () => o()),
          i &&
            a.addEventListener("versionchange", (u) =>
              i(u.oldVersion, u.newVersion, u)
            );
      })
      .catch(() => {}),
    l
  );
}
const g0 = ["get", "getKey", "getAll", "getAllKeys", "count"],
  v0 = ["put", "add", "delete", "clear"],
  vs = new Map();
function Zu(e, t) {
  if (!(e instanceof IDBDatabase && !(t in e) && typeof t == "string")) return;
  if (vs.get(t)) return vs.get(t);
  const n = t.replace(/FromIndex$/, ""),
    r = t !== n,
    i = v0.includes(n);
  if (
    !(n in (r ? IDBIndex : IDBObjectStore).prototype) ||
    !(i || g0.includes(n))
  )
    return;
  const o = async function (s, ...l) {
    const a = this.transaction(s, i ? "readwrite" : "readonly");
    let u = a.store;
    return (
      r && (u = u.index(l.shift())),
      (await Promise.all([u[n](...l), i && a.done]))[0]
    );
  };
  return vs.set(t, o), o;
}
f0((e) => ({
  ...e,
  get: (t, n, r) => Zu(t, n) || e.get(t, n, r),
  has: (t, n) => !!Zu(t, n) || e.has(t, n),
}));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class y0 {
  constructor(t) {
    this.container = t;
  }
  getPlatformInfoString() {
    return this.container
      .getProviders()
      .map((n) => {
        if (w0(n)) {
          const r = n.getImmediate();
          return `${r.library}/${r.version}`;
        } else return null;
      })
      .filter((n) => n)
      .join(" ");
  }
}
function w0(e) {
  const t = e.getComponent();
  return (t == null ? void 0 : t.type) === "VERSION";
}
const wl = "@firebase/app",
  ec = "0.9.19";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const rn = new eh("@firebase/app"),
  _0 = "@firebase/app-compat",
  S0 = "@firebase/analytics-compat",
  E0 = "@firebase/analytics",
  k0 = "@firebase/app-check-compat",
  C0 = "@firebase/app-check",
  I0 = "@firebase/auth",
  x0 = "@firebase/auth-compat",
  T0 = "@firebase/database",
  N0 = "@firebase/database-compat",
  P0 = "@firebase/functions",
  R0 = "@firebase/functions-compat",
  O0 = "@firebase/installations",
  L0 = "@firebase/installations-compat",
  A0 = "@firebase/messaging",
  D0 = "@firebase/messaging-compat",
  M0 = "@firebase/performance",
  j0 = "@firebase/performance-compat",
  U0 = "@firebase/remote-config",
  z0 = "@firebase/remote-config-compat",
  F0 = "@firebase/storage",
  B0 = "@firebase/storage-compat",
  b0 = "@firebase/firestore",
  $0 = "@firebase/firestore-compat",
  H0 = "firebase",
  V0 = "10.4.0";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const _l = "[DEFAULT]",
  W0 = {
    [wl]: "fire-core",
    [_0]: "fire-core-compat",
    [E0]: "fire-analytics",
    [S0]: "fire-analytics-compat",
    [C0]: "fire-app-check",
    [k0]: "fire-app-check-compat",
    [I0]: "fire-auth",
    [x0]: "fire-auth-compat",
    [T0]: "fire-rtdb",
    [N0]: "fire-rtdb-compat",
    [P0]: "fire-fn",
    [R0]: "fire-fn-compat",
    [O0]: "fire-iid",
    [L0]: "fire-iid-compat",
    [A0]: "fire-fcm",
    [D0]: "fire-fcm-compat",
    [M0]: "fire-perf",
    [j0]: "fire-perf-compat",
    [U0]: "fire-rc",
    [z0]: "fire-rc-compat",
    [F0]: "fire-gcs",
    [B0]: "fire-gcs-compat",
    [b0]: "fire-fst",
    [$0]: "fire-fst-compat",
    "fire-js": "fire-js",
    [H0]: "fire-js-all",
  };
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const ao = new Map(),
  Sl = new Map();
function K0(e, t) {
  try {
    e.container.addComponent(t);
  } catch (n) {
    rn.debug(
      `Component ${t.name} failed to register with FirebaseApp ${e.name}`,
      n
    );
  }
}
function Ar(e) {
  const t = e.name;
  if (Sl.has(t))
    return (
      rn.debug(`There were multiple attempts to register component ${t}.`), !1
    );
  Sl.set(t, e);
  for (const n of ao.values()) K0(n, e);
  return !0;
}
function rh(e, t) {
  const n = e.container.getProvider("heartbeat").getImmediate({ optional: !0 });
  return n && n.triggerHeartbeat(), e.container.getProvider(t);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const G0 = {
    "no-app":
      "No Firebase App '{$appName}' has been created - call initializeApp() first",
    "bad-app-name": "Illegal App name: '{$appName}",
    "duplicate-app":
      "Firebase App named '{$appName}' already exists with different options or config",
    "app-deleted": "Firebase App named '{$appName}' already deleted",
    "no-options":
      "Need to provide options, when not being deployed to hosting via source.",
    "invalid-app-argument":
      "firebase.{$appName}() takes either no argument or a Firebase App instance.",
    "invalid-log-argument":
      "First argument to `onLog` must be null or a function.",
    "idb-open":
      "Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",
    "idb-get":
      "Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",
    "idb-set":
      "Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",
    "idb-delete":
      "Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",
  },
  At = new Vr("app", "Firebase", G0);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Q0 {
  constructor(t, n, r) {
    (this._isDeleted = !1),
      (this._options = Object.assign({}, t)),
      (this._config = Object.assign({}, n)),
      (this._name = n.name),
      (this._automaticDataCollectionEnabled = n.automaticDataCollectionEnabled),
      (this._container = r),
      this.container.addComponent(new Un("app", () => this, "PUBLIC"));
  }
  get automaticDataCollectionEnabled() {
    return this.checkDestroyed(), this._automaticDataCollectionEnabled;
  }
  set automaticDataCollectionEnabled(t) {
    this.checkDestroyed(), (this._automaticDataCollectionEnabled = t);
  }
  get name() {
    return this.checkDestroyed(), this._name;
  }
  get options() {
    return this.checkDestroyed(), this._options;
  }
  get config() {
    return this.checkDestroyed(), this._config;
  }
  get container() {
    return this._container;
  }
  get isDeleted() {
    return this._isDeleted;
  }
  set isDeleted(t) {
    this._isDeleted = t;
  }
  checkDestroyed() {
    if (this.isDeleted) throw At.create("app-deleted", { appName: this._name });
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Kr = V0;
function ih(e, t = {}) {
  let n = e;
  typeof t != "object" && (t = { name: t });
  const r = Object.assign({ name: _l, automaticDataCollectionEnabled: !1 }, t),
    i = r.name;
  if (typeof i != "string" || !i)
    throw At.create("bad-app-name", { appName: String(i) });
  if ((n || (n = qf()), !n)) throw At.create("no-options");
  const o = ao.get(i);
  if (o) {
    if (lo(n, o.options) && lo(r, o.config)) return o;
    throw At.create("duplicate-app", { appName: i });
  }
  const s = new n0(i);
  for (const a of Sl.values()) s.addComponent(a);
  const l = new Q0(n, r, s);
  return ao.set(i, l), l;
}
function Y0(e = _l) {
  const t = ao.get(e);
  if (!t && e === _l && qf()) return ih();
  if (!t) throw At.create("no-app", { appName: e });
  return t;
}
function Tn(e, t, n) {
  var r;
  let i = (r = W0[e]) !== null && r !== void 0 ? r : e;
  n && (i += `-${n}`);
  const o = i.match(/\s|\//),
    s = t.match(/\s|\//);
  if (o || s) {
    const l = [`Unable to register library "${i}" with version "${t}":`];
    o &&
      l.push(
        `library name "${i}" contains illegal characters (whitespace or "/")`
      ),
      o && s && l.push("and"),
      s &&
        l.push(
          `version name "${t}" contains illegal characters (whitespace or "/")`
        ),
      rn.warn(l.join(" "));
    return;
  }
  Ar(new Un(`${i}-version`, () => ({ library: i, version: t }), "VERSION"));
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const J0 = "firebase-heartbeat-database",
  X0 = 1,
  Dr = "firebase-heartbeat-store";
let ys = null;
function oh() {
  return (
    ys ||
      (ys = m0(J0, X0, {
        upgrade: (e, t) => {
          switch (t) {
            case 0:
              e.createObjectStore(Dr);
          }
        },
      }).catch((e) => {
        throw At.create("idb-open", { originalErrorMessage: e.message });
      })),
    ys
  );
}
async function q0(e) {
  try {
    return await (await oh()).transaction(Dr).objectStore(Dr).get(sh(e));
  } catch (t) {
    if (t instanceof Ft) rn.warn(t.message);
    else {
      const n = At.create("idb-get", {
        originalErrorMessage: t == null ? void 0 : t.message,
      });
      rn.warn(n.message);
    }
  }
}
async function tc(e, t) {
  try {
    const r = (await oh()).transaction(Dr, "readwrite");
    await r.objectStore(Dr).put(t, sh(e)), await r.done;
  } catch (n) {
    if (n instanceof Ft) rn.warn(n.message);
    else {
      const r = At.create("idb-set", {
        originalErrorMessage: n == null ? void 0 : n.message,
      });
      rn.warn(r.message);
    }
  }
}
function sh(e) {
  return `${e.name}!${e.options.appId}`;
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Z0 = 1024,
  ey = 30 * 24 * 60 * 60 * 1e3;
class ty {
  constructor(t) {
    (this.container = t), (this._heartbeatsCache = null);
    const n = this.container.getProvider("app").getImmediate();
    (this._storage = new ry(n)),
      (this._heartbeatsCachePromise = this._storage
        .read()
        .then((r) => ((this._heartbeatsCache = r), r)));
  }
  async triggerHeartbeat() {
    const n = this.container
        .getProvider("platform-logger")
        .getImmediate()
        .getPlatformInfoString(),
      r = nc();
    if (
      (this._heartbeatsCache === null &&
        (this._heartbeatsCache = await this._heartbeatsCachePromise),
      !(
        this._heartbeatsCache.lastSentHeartbeatDate === r ||
        this._heartbeatsCache.heartbeats.some((i) => i.date === r)
      ))
    )
      return (
        this._heartbeatsCache.heartbeats.push({ date: r, agent: n }),
        (this._heartbeatsCache.heartbeats =
          this._heartbeatsCache.heartbeats.filter((i) => {
            const o = new Date(i.date).valueOf();
            return Date.now() - o <= ey;
          })),
        this._storage.overwrite(this._heartbeatsCache)
      );
  }
  async getHeartbeatsHeader() {
    if (
      (this._heartbeatsCache === null && (await this._heartbeatsCachePromise),
      this._heartbeatsCache === null ||
        this._heartbeatsCache.heartbeats.length === 0)
    )
      return "";
    const t = nc(),
      { heartbeatsToSend: n, unsentEntries: r } = ny(
        this._heartbeatsCache.heartbeats
      ),
      i = Jf(JSON.stringify({ version: 2, heartbeats: n }));
    return (
      (this._heartbeatsCache.lastSentHeartbeatDate = t),
      r.length > 0
        ? ((this._heartbeatsCache.heartbeats = r),
          await this._storage.overwrite(this._heartbeatsCache))
        : ((this._heartbeatsCache.heartbeats = []),
          this._storage.overwrite(this._heartbeatsCache)),
      i
    );
  }
}
function nc() {
  return new Date().toISOString().substring(0, 10);
}
function ny(e, t = Z0) {
  const n = [];
  let r = e.slice();
  for (const i of e) {
    const o = n.find((s) => s.agent === i.agent);
    if (o) {
      if ((o.dates.push(i.date), rc(n) > t)) {
        o.dates.pop();
        break;
      }
    } else if ((n.push({ agent: i.agent, dates: [i.date] }), rc(n) > t)) {
      n.pop();
      break;
    }
    r = r.slice(1);
  }
  return { heartbeatsToSend: n, unsentEntries: r };
}
class ry {
  constructor(t) {
    (this.app = t),
      (this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck());
  }
  async runIndexedDBEnvironmentCheck() {
    return Vv()
      ? Wv()
          .then(() => !0)
          .catch(() => !1)
      : !1;
  }
  async read() {
    return (await this._canUseIndexedDBPromise)
      ? (await q0(this.app)) || { heartbeats: [] }
      : { heartbeats: [] };
  }
  async overwrite(t) {
    var n;
    if (await this._canUseIndexedDBPromise) {
      const i = await this.read();
      return tc(this.app, {
        lastSentHeartbeatDate:
          (n = t.lastSentHeartbeatDate) !== null && n !== void 0
            ? n
            : i.lastSentHeartbeatDate,
        heartbeats: t.heartbeats,
      });
    } else return;
  }
  async add(t) {
    var n;
    if (await this._canUseIndexedDBPromise) {
      const i = await this.read();
      return tc(this.app, {
        lastSentHeartbeatDate:
          (n = t.lastSentHeartbeatDate) !== null && n !== void 0
            ? n
            : i.lastSentHeartbeatDate,
        heartbeats: [...i.heartbeats, ...t.heartbeats],
      });
    } else return;
  }
}
function rc(e) {
  return Jf(JSON.stringify({ version: 2, heartbeats: e })).length;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function iy(e) {
  Ar(new Un("platform-logger", (t) => new y0(t), "PRIVATE")),
    Ar(new Un("heartbeat", (t) => new ty(t), "PRIVATE")),
    Tn(wl, ec, e),
    Tn(wl, ec, "esm2017"),
    Tn("fire-js", "");
}
iy("");
function Ca(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      t.indexOf(r[i]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
        (n[r[i]] = e[r[i]]);
  return n;
}
function lh() {
  return {
    "dependent-sdk-initialized-before-auth":
      "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",
  };
}
const oy = lh,
  ah = new Vr("auth", "Firebase", lh());
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const uo = new eh("@firebase/auth");
function sy(e, ...t) {
  uo.logLevel <= U.WARN && uo.warn(`Auth (${Kr}): ${e}`, ...t);
}
function Ri(e, ...t) {
  uo.logLevel <= U.ERROR && uo.error(`Auth (${Kr}): ${e}`, ...t);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Ke(e, ...t) {
  throw Ia(e, ...t);
}
function Ve(e, ...t) {
  return Ia(e, ...t);
}
function uh(e, t, n) {
  const r = Object.assign(Object.assign({}, oy()), { [t]: n });
  return new Vr("auth", "Firebase", r).create(t, { appName: e.name });
}
function ly(e, t, n) {
  const r = n;
  if (!(t instanceof r))
    throw (
      (r.name !== t.constructor.name && Ke(e, "argument-error"),
      uh(
        e,
        "argument-error",
        `Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`
      ))
    );
}
function Ia(e, ...t) {
  if (typeof e != "string") {
    const n = t[0],
      r = [...t.slice(1)];
    return r[0] && (r[0].appName = e.name), e._errorFactory.create(n, ...r);
  }
  return ah.create(e, ...t);
}
function R(e, t, ...n) {
  if (!e) throw Ia(t, ...n);
}
function qe(e) {
  const t = "INTERNAL ASSERTION FAILED: " + e;
  throw (Ri(t), new Error(t));
}
function st(e, t) {
  e || qe(t);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function El() {
  var e;
  return (
    (typeof self < "u" &&
      ((e = self.location) === null || e === void 0 ? void 0 : e.href)) ||
    ""
  );
}
function ay() {
  return ic() === "http:" || ic() === "https:";
}
function ic() {
  var e;
  return (
    (typeof self < "u" &&
      ((e = self.location) === null || e === void 0 ? void 0 : e.protocol)) ||
    null
  );
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function uy() {
  return typeof navigator < "u" &&
    navigator &&
    "onLine" in navigator &&
    typeof navigator.onLine == "boolean" &&
    (ay() || bv() || "connection" in navigator)
    ? navigator.onLine
    : !0;
}
function cy() {
  if (typeof navigator > "u") return null;
  const e = navigator;
  return (e.languages && e.languages[0]) || e.language || null;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Gr {
  constructor(t, n) {
    (this.shortDelay = t),
      (this.longDelay = n),
      st(n > t, "Short delay should be less than long delay!"),
      (this.isMobile = Bv() || $v());
  }
  get() {
    return uy()
      ? this.isMobile
        ? this.longDelay
        : this.shortDelay
      : Math.min(5e3, this.shortDelay);
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function xa(e, t) {
  st(e.emulator, "Emulator should always be set here");
  const { url: n } = e.emulator;
  return t ? `${n}${t.startsWith("/") ? t.slice(1) : t}` : n;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ch {
  static initialize(t, n, r) {
    (this.fetchImpl = t),
      n && (this.headersImpl = n),
      r && (this.responseImpl = r);
  }
  static fetch() {
    if (this.fetchImpl) return this.fetchImpl;
    if (typeof self < "u" && "fetch" in self) return self.fetch;
    qe(
      "Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill"
    );
  }
  static headers() {
    if (this.headersImpl) return this.headersImpl;
    if (typeof self < "u" && "Headers" in self) return self.Headers;
    qe(
      "Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill"
    );
  }
  static response() {
    if (this.responseImpl) return this.responseImpl;
    if (typeof self < "u" && "Response" in self) return self.Response;
    qe(
      "Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill"
    );
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const dy = {
  CREDENTIAL_MISMATCH: "custom-token-mismatch",
  MISSING_CUSTOM_TOKEN: "internal-error",
  INVALID_IDENTIFIER: "invalid-email",
  MISSING_CONTINUE_URI: "internal-error",
  INVALID_PASSWORD: "wrong-password",
  MISSING_PASSWORD: "missing-password",
  EMAIL_EXISTS: "email-already-in-use",
  PASSWORD_LOGIN_DISABLED: "operation-not-allowed",
  INVALID_IDP_RESPONSE: "invalid-credential",
  INVALID_PENDING_TOKEN: "invalid-credential",
  FEDERATED_USER_ID_ALREADY_LINKED: "credential-already-in-use",
  MISSING_REQ_TYPE: "internal-error",
  EMAIL_NOT_FOUND: "user-not-found",
  RESET_PASSWORD_EXCEED_LIMIT: "too-many-requests",
  EXPIRED_OOB_CODE: "expired-action-code",
  INVALID_OOB_CODE: "invalid-action-code",
  MISSING_OOB_CODE: "internal-error",
  CREDENTIAL_TOO_OLD_LOGIN_AGAIN: "requires-recent-login",
  INVALID_ID_TOKEN: "invalid-user-token",
  TOKEN_EXPIRED: "user-token-expired",
  USER_NOT_FOUND: "user-token-expired",
  TOO_MANY_ATTEMPTS_TRY_LATER: "too-many-requests",
  PASSWORD_DOES_NOT_MEET_REQUIREMENTS: "password-does-not-meet-requirements",
  INVALID_CODE: "invalid-verification-code",
  INVALID_SESSION_INFO: "invalid-verification-id",
  INVALID_TEMPORARY_PROOF: "invalid-credential",
  MISSING_SESSION_INFO: "missing-verification-id",
  SESSION_EXPIRED: "code-expired",
  MISSING_ANDROID_PACKAGE_NAME: "missing-android-pkg-name",
  UNAUTHORIZED_DOMAIN: "unauthorized-continue-uri",
  INVALID_OAUTH_CLIENT_ID: "invalid-oauth-client-id",
  ADMIN_ONLY_OPERATION: "admin-restricted-operation",
  INVALID_MFA_PENDING_CREDENTIAL: "invalid-multi-factor-session",
  MFA_ENROLLMENT_NOT_FOUND: "multi-factor-info-not-found",
  MISSING_MFA_ENROLLMENT_ID: "missing-multi-factor-info",
  MISSING_MFA_PENDING_CREDENTIAL: "missing-multi-factor-session",
  SECOND_FACTOR_EXISTS: "second-factor-already-in-use",
  SECOND_FACTOR_LIMIT_EXCEEDED: "maximum-second-factor-count-exceeded",
  BLOCKING_FUNCTION_ERROR_RESPONSE: "internal-error",
  RECAPTCHA_NOT_ENABLED: "recaptcha-not-enabled",
  MISSING_RECAPTCHA_TOKEN: "missing-recaptcha-token",
  INVALID_RECAPTCHA_TOKEN: "invalid-recaptcha-token",
  INVALID_RECAPTCHA_ACTION: "invalid-recaptcha-action",
  MISSING_CLIENT_TYPE: "missing-client-type",
  MISSING_RECAPTCHA_VERSION: "missing-recaptcha-version",
  INVALID_RECAPTCHA_VERSION: "invalid-recaptcha-version",
  INVALID_REQ_TYPE: "invalid-req-type",
};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const fy = new Gr(3e4, 6e4);
function dh(e, t) {
  return e.tenantId && !t.tenantId
    ? Object.assign(Object.assign({}, t), { tenantId: e.tenantId })
    : t;
}
async function Qr(e, t, n, r, i = {}) {
  return fh(e, i, async () => {
    let o = {},
      s = {};
    r && (t === "GET" ? (s = r) : (o = { body: JSON.stringify(r) }));
    const l = Wr(Object.assign({ key: e.config.apiKey }, s)).slice(1),
      a = await e._getAdditionalHeaders();
    return (
      (a["Content-Type"] = "application/json"),
      e.languageCode && (a["X-Firebase-Locale"] = e.languageCode),
      ch.fetch()(
        hh(e, e.config.apiHost, n, l),
        Object.assign(
          { method: t, headers: a, referrerPolicy: "no-referrer" },
          o
        )
      )
    );
  });
}
async function fh(e, t, n) {
  e._canInitEmulator = !1;
  const r = Object.assign(Object.assign({}, dy), t);
  try {
    const i = new py(e),
      o = await Promise.race([n(), i.promise]);
    i.clearNetworkTimeout();
    const s = await o.json();
    if ("needConfirmation" in s)
      throw gi(e, "account-exists-with-different-credential", s);
    if (o.ok && !("errorMessage" in s)) return s;
    {
      const l = o.ok ? s.errorMessage : s.error.message,
        [a, u] = l.split(" : ");
      if (a === "FEDERATED_USER_ID_ALREADY_LINKED")
        throw gi(e, "credential-already-in-use", s);
      if (a === "EMAIL_EXISTS") throw gi(e, "email-already-in-use", s);
      if (a === "USER_DISABLED") throw gi(e, "user-disabled", s);
      const f = r[a] || a.toLowerCase().replace(/[_\s]+/g, "-");
      if (u) throw uh(e, f, u);
      Ke(e, f);
    }
  } catch (i) {
    if (i instanceof Ft) throw i;
    Ke(e, "network-request-failed", { message: String(i) });
  }
}
async function hy(e, t, n, r, i = {}) {
  const o = await Qr(e, t, n, r, i);
  return (
    "mfaPendingCredential" in o &&
      Ke(e, "multi-factor-auth-required", { _serverResponse: o }),
    o
  );
}
function hh(e, t, n, r) {
  const i = `${t}${n}?${r}`;
  return e.config.emulator ? xa(e.config, i) : `${e.config.apiScheme}://${i}`;
}
class py {
  constructor(t) {
    (this.auth = t),
      (this.timer = null),
      (this.promise = new Promise((n, r) => {
        this.timer = setTimeout(
          () => r(Ve(this.auth, "network-request-failed")),
          fy.get()
        );
      }));
  }
  clearNetworkTimeout() {
    clearTimeout(this.timer);
  }
}
function gi(e, t, n) {
  const r = { appName: e.name };
  n.email && (r.email = n.email),
    n.phoneNumber && (r.phoneNumber = n.phoneNumber);
  const i = Ve(e, t, r);
  return (i.customData._tokenResponse = n), i;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function my(e, t) {
  return Qr(e, "POST", "/v1/accounts:delete", t);
}
async function gy(e, t) {
  return Qr(e, "POST", "/v1/accounts:lookup", t);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function pr(e) {
  if (e)
    try {
      const t = new Date(Number(e));
      if (!isNaN(t.getTime())) return t.toUTCString();
    } catch {}
}
async function vy(e, t = !1) {
  const n = Vn(e),
    r = await n.getIdToken(t),
    i = Ta(r);
  R(i && i.exp && i.auth_time && i.iat, n.auth, "internal-error");
  const o = typeof i.firebase == "object" ? i.firebase : void 0,
    s = o == null ? void 0 : o.sign_in_provider;
  return {
    claims: i,
    token: r,
    authTime: pr(ws(i.auth_time)),
    issuedAtTime: pr(ws(i.iat)),
    expirationTime: pr(ws(i.exp)),
    signInProvider: s || null,
    signInSecondFactor: (o == null ? void 0 : o.sign_in_second_factor) || null,
  };
}
function ws(e) {
  return Number(e) * 1e3;
}
function Ta(e) {
  const [t, n, r] = e.split(".");
  if (t === void 0 || n === void 0 || r === void 0)
    return Ri("JWT malformed, contained fewer than 3 sections"), null;
  try {
    const i = Xf(n);
    return i
      ? JSON.parse(i)
      : (Ri("Failed to decode base64 JWT payload"), null);
  } catch (i) {
    return (
      Ri(
        "Caught error parsing JWT payload as JSON",
        i == null ? void 0 : i.toString()
      ),
      null
    );
  }
}
function yy(e) {
  const t = Ta(e);
  return (
    R(t, "internal-error"),
    R(typeof t.exp < "u", "internal-error"),
    R(typeof t.iat < "u", "internal-error"),
    Number(t.exp) - Number(t.iat)
  );
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function Mr(e, t, n = !1) {
  if (n) return t;
  try {
    return await t;
  } catch (r) {
    throw (
      (r instanceof Ft &&
        wy(r) &&
        e.auth.currentUser === e &&
        (await e.auth.signOut()),
      r)
    );
  }
}
function wy({ code: e }) {
  return e === "auth/user-disabled" || e === "auth/user-token-expired";
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class _y {
  constructor(t) {
    (this.user = t),
      (this.isRunning = !1),
      (this.timerId = null),
      (this.errorBackoff = 3e4);
  }
  _start() {
    this.isRunning || ((this.isRunning = !0), this.schedule());
  }
  _stop() {
    this.isRunning &&
      ((this.isRunning = !1),
      this.timerId !== null && clearTimeout(this.timerId));
  }
  getInterval(t) {
    var n;
    if (t) {
      const r = this.errorBackoff;
      return (this.errorBackoff = Math.min(this.errorBackoff * 2, 96e4)), r;
    } else {
      this.errorBackoff = 3e4;
      const i =
        ((n = this.user.stsTokenManager.expirationTime) !== null && n !== void 0
          ? n
          : 0) -
        Date.now() -
        3e5;
      return Math.max(0, i);
    }
  }
  schedule(t = !1) {
    if (!this.isRunning) return;
    const n = this.getInterval(t);
    this.timerId = setTimeout(async () => {
      await this.iteration();
    }, n);
  }
  async iteration() {
    try {
      await this.user.getIdToken(!0);
    } catch (t) {
      (t == null ? void 0 : t.code) === "auth/network-request-failed" &&
        this.schedule(!0);
      return;
    }
    this.schedule();
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ph {
  constructor(t, n) {
    (this.createdAt = t), (this.lastLoginAt = n), this._initializeTime();
  }
  _initializeTime() {
    (this.lastSignInTime = pr(this.lastLoginAt)),
      (this.creationTime = pr(this.createdAt));
  }
  _copy(t) {
    (this.createdAt = t.createdAt),
      (this.lastLoginAt = t.lastLoginAt),
      this._initializeTime();
  }
  toJSON() {
    return { createdAt: this.createdAt, lastLoginAt: this.lastLoginAt };
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function co(e) {
  var t;
  const n = e.auth,
    r = await e.getIdToken(),
    i = await Mr(e, gy(n, { idToken: r }));
  R(i == null ? void 0 : i.users.length, n, "internal-error");
  const o = i.users[0];
  e._notifyReloadListener(o);
  const s =
      !((t = o.providerUserInfo) === null || t === void 0) && t.length
        ? ky(o.providerUserInfo)
        : [],
    l = Ey(e.providerData, s),
    a = e.isAnonymous,
    u = !(e.email && o.passwordHash) && !(l != null && l.length),
    f = a ? u : !1,
    p = {
      uid: o.localId,
      displayName: o.displayName || null,
      photoURL: o.photoUrl || null,
      email: o.email || null,
      emailVerified: o.emailVerified || !1,
      phoneNumber: o.phoneNumber || null,
      tenantId: o.tenantId || null,
      providerData: l,
      metadata: new ph(o.createdAt, o.lastLoginAt),
      isAnonymous: f,
    };
  Object.assign(e, p);
}
async function Sy(e) {
  const t = Vn(e);
  await co(t),
    await t.auth._persistUserIfCurrent(t),
    t.auth._notifyListenersIfCurrent(t);
}
function Ey(e, t) {
  return [
    ...e.filter((r) => !t.some((i) => i.providerId === r.providerId)),
    ...t,
  ];
}
function ky(e) {
  return e.map((t) => {
    var { providerId: n } = t,
      r = Ca(t, ["providerId"]);
    return {
      providerId: n,
      uid: r.rawId || "",
      displayName: r.displayName || null,
      email: r.email || null,
      phoneNumber: r.phoneNumber || null,
      photoURL: r.photoUrl || null,
    };
  });
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function Cy(e, t) {
  const n = await fh(e, {}, async () => {
    const r = Wr({ grant_type: "refresh_token", refresh_token: t }).slice(1),
      { tokenApiHost: i, apiKey: o } = e.config,
      s = hh(e, i, "/v1/token", `key=${o}`),
      l = await e._getAdditionalHeaders();
    return (
      (l["Content-Type"] = "application/x-www-form-urlencoded"),
      ch.fetch()(s, { method: "POST", headers: l, body: r })
    );
  });
  return {
    accessToken: n.access_token,
    expiresIn: n.expires_in,
    refreshToken: n.refresh_token,
  };
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class jr {
  constructor() {
    (this.refreshToken = null),
      (this.accessToken = null),
      (this.expirationTime = null);
  }
  get isExpired() {
    return !this.expirationTime || Date.now() > this.expirationTime - 3e4;
  }
  updateFromServerResponse(t) {
    R(t.idToken, "internal-error"),
      R(typeof t.idToken < "u", "internal-error"),
      R(typeof t.refreshToken < "u", "internal-error");
    const n =
      "expiresIn" in t && typeof t.expiresIn < "u"
        ? Number(t.expiresIn)
        : yy(t.idToken);
    this.updateTokensAndExpiration(t.idToken, t.refreshToken, n);
  }
  async getToken(t, n = !1) {
    return (
      R(!this.accessToken || this.refreshToken, t, "user-token-expired"),
      !n && this.accessToken && !this.isExpired
        ? this.accessToken
        : this.refreshToken
        ? (await this.refresh(t, this.refreshToken), this.accessToken)
        : null
    );
  }
  clearRefreshToken() {
    this.refreshToken = null;
  }
  async refresh(t, n) {
    const { accessToken: r, refreshToken: i, expiresIn: o } = await Cy(t, n);
    this.updateTokensAndExpiration(r, i, Number(o));
  }
  updateTokensAndExpiration(t, n, r) {
    (this.refreshToken = n || null),
      (this.accessToken = t || null),
      (this.expirationTime = Date.now() + r * 1e3);
  }
  static fromJSON(t, n) {
    const { refreshToken: r, accessToken: i, expirationTime: o } = n,
      s = new jr();
    return (
      r &&
        (R(typeof r == "string", "internal-error", { appName: t }),
        (s.refreshToken = r)),
      i &&
        (R(typeof i == "string", "internal-error", { appName: t }),
        (s.accessToken = i)),
      o &&
        (R(typeof o == "number", "internal-error", { appName: t }),
        (s.expirationTime = o)),
      s
    );
  }
  toJSON() {
    return {
      refreshToken: this.refreshToken,
      accessToken: this.accessToken,
      expirationTime: this.expirationTime,
    };
  }
  _assign(t) {
    (this.accessToken = t.accessToken),
      (this.refreshToken = t.refreshToken),
      (this.expirationTime = t.expirationTime);
  }
  _clone() {
    return Object.assign(new jr(), this.toJSON());
  }
  _performRefresh() {
    return qe("not implemented");
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function dt(e, t) {
  R(typeof e == "string" || typeof e > "u", "internal-error", { appName: t });
}
class Xt {
  constructor(t) {
    var { uid: n, auth: r, stsTokenManager: i } = t,
      o = Ca(t, ["uid", "auth", "stsTokenManager"]);
    (this.providerId = "firebase"),
      (this.proactiveRefresh = new _y(this)),
      (this.reloadUserInfo = null),
      (this.reloadListener = null),
      (this.uid = n),
      (this.auth = r),
      (this.stsTokenManager = i),
      (this.accessToken = i.accessToken),
      (this.displayName = o.displayName || null),
      (this.email = o.email || null),
      (this.emailVerified = o.emailVerified || !1),
      (this.phoneNumber = o.phoneNumber || null),
      (this.photoURL = o.photoURL || null),
      (this.isAnonymous = o.isAnonymous || !1),
      (this.tenantId = o.tenantId || null),
      (this.providerData = o.providerData ? [...o.providerData] : []),
      (this.metadata = new ph(o.createdAt || void 0, o.lastLoginAt || void 0));
  }
  async getIdToken(t) {
    const n = await Mr(this, this.stsTokenManager.getToken(this.auth, t));
    return (
      R(n, this.auth, "internal-error"),
      this.accessToken !== n &&
        ((this.accessToken = n),
        await this.auth._persistUserIfCurrent(this),
        this.auth._notifyListenersIfCurrent(this)),
      n
    );
  }
  getIdTokenResult(t) {
    return vy(this, t);
  }
  reload() {
    return Sy(this);
  }
  _assign(t) {
    this !== t &&
      (R(this.uid === t.uid, this.auth, "internal-error"),
      (this.displayName = t.displayName),
      (this.photoURL = t.photoURL),
      (this.email = t.email),
      (this.emailVerified = t.emailVerified),
      (this.phoneNumber = t.phoneNumber),
      (this.isAnonymous = t.isAnonymous),
      (this.tenantId = t.tenantId),
      (this.providerData = t.providerData.map((n) => Object.assign({}, n))),
      this.metadata._copy(t.metadata),
      this.stsTokenManager._assign(t.stsTokenManager));
  }
  _clone(t) {
    const n = new Xt(
      Object.assign(Object.assign({}, this), {
        auth: t,
        stsTokenManager: this.stsTokenManager._clone(),
      })
    );
    return n.metadata._copy(this.metadata), n;
  }
  _onReload(t) {
    R(!this.reloadListener, this.auth, "internal-error"),
      (this.reloadListener = t),
      this.reloadUserInfo &&
        (this._notifyReloadListener(this.reloadUserInfo),
        (this.reloadUserInfo = null));
  }
  _notifyReloadListener(t) {
    this.reloadListener ? this.reloadListener(t) : (this.reloadUserInfo = t);
  }
  _startProactiveRefresh() {
    this.proactiveRefresh._start();
  }
  _stopProactiveRefresh() {
    this.proactiveRefresh._stop();
  }
  async _updateTokensIfNecessary(t, n = !1) {
    let r = !1;
    t.idToken &&
      t.idToken !== this.stsTokenManager.accessToken &&
      (this.stsTokenManager.updateFromServerResponse(t), (r = !0)),
      n && (await co(this)),
      await this.auth._persistUserIfCurrent(this),
      r && this.auth._notifyListenersIfCurrent(this);
  }
  async delete() {
    const t = await this.getIdToken();
    return (
      await Mr(this, my(this.auth, { idToken: t })),
      this.stsTokenManager.clearRefreshToken(),
      this.auth.signOut()
    );
  }
  toJSON() {
    return Object.assign(
      Object.assign(
        {
          uid: this.uid,
          email: this.email || void 0,
          emailVerified: this.emailVerified,
          displayName: this.displayName || void 0,
          isAnonymous: this.isAnonymous,
          photoURL: this.photoURL || void 0,
          phoneNumber: this.phoneNumber || void 0,
          tenantId: this.tenantId || void 0,
          providerData: this.providerData.map((t) => Object.assign({}, t)),
          stsTokenManager: this.stsTokenManager.toJSON(),
          _redirectEventId: this._redirectEventId,
        },
        this.metadata.toJSON()
      ),
      { apiKey: this.auth.config.apiKey, appName: this.auth.name }
    );
  }
  get refreshToken() {
    return this.stsTokenManager.refreshToken || "";
  }
  static _fromJSON(t, n) {
    var r, i, o, s, l, a, u, f;
    const p = (r = n.displayName) !== null && r !== void 0 ? r : void 0,
      m = (i = n.email) !== null && i !== void 0 ? i : void 0,
      y = (o = n.phoneNumber) !== null && o !== void 0 ? o : void 0,
      w = (s = n.photoURL) !== null && s !== void 0 ? s : void 0,
      _ = (l = n.tenantId) !== null && l !== void 0 ? l : void 0,
      x = (a = n._redirectEventId) !== null && a !== void 0 ? a : void 0,
      h = (u = n.createdAt) !== null && u !== void 0 ? u : void 0,
      c = (f = n.lastLoginAt) !== null && f !== void 0 ? f : void 0,
      {
        uid: d,
        emailVerified: v,
        isAnonymous: E,
        providerData: I,
        stsTokenManager: C,
      } = n;
    R(d && C, t, "internal-error");
    const P = jr.fromJSON(this.name, C);
    R(typeof d == "string", t, "internal-error"),
      dt(p, t.name),
      dt(m, t.name),
      R(typeof v == "boolean", t, "internal-error"),
      R(typeof E == "boolean", t, "internal-error"),
      dt(y, t.name),
      dt(w, t.name),
      dt(_, t.name),
      dt(x, t.name),
      dt(h, t.name),
      dt(c, t.name);
    const F = new Xt({
      uid: d,
      auth: t,
      email: m,
      emailVerified: v,
      displayName: p,
      isAnonymous: E,
      photoURL: w,
      phoneNumber: y,
      tenantId: _,
      stsTokenManager: P,
      createdAt: h,
      lastLoginAt: c,
    });
    return (
      I &&
        Array.isArray(I) &&
        (F.providerData = I.map((A) => Object.assign({}, A))),
      x && (F._redirectEventId = x),
      F
    );
  }
  static async _fromIdTokenResponse(t, n, r = !1) {
    const i = new jr();
    i.updateFromServerResponse(n);
    const o = new Xt({
      uid: n.localId,
      auth: t,
      stsTokenManager: i,
      isAnonymous: r,
    });
    return await co(o), o;
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const oc = new Map();
function Ze(e) {
  st(e instanceof Function, "Expected a class definition");
  let t = oc.get(e);
  return t
    ? (st(t instanceof e, "Instance stored in cache mismatched with class"), t)
    : ((t = new e()), oc.set(e, t), t);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class mh {
  constructor() {
    (this.type = "NONE"), (this.storage = {});
  }
  async _isAvailable() {
    return !0;
  }
  async _set(t, n) {
    this.storage[t] = n;
  }
  async _get(t) {
    const n = this.storage[t];
    return n === void 0 ? null : n;
  }
  async _remove(t) {
    delete this.storage[t];
  }
  _addListener(t, n) {}
  _removeListener(t, n) {}
}
mh.type = "NONE";
const sc = mh;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Oi(e, t, n) {
  return `firebase:${e}:${t}:${n}`;
}
class Nn {
  constructor(t, n, r) {
    (this.persistence = t), (this.auth = n), (this.userKey = r);
    const { config: i, name: o } = this.auth;
    (this.fullUserKey = Oi(this.userKey, i.apiKey, o)),
      (this.fullPersistenceKey = Oi("persistence", i.apiKey, o)),
      (this.boundEventHandler = n._onStorageEvent.bind(n)),
      this.persistence._addListener(this.fullUserKey, this.boundEventHandler);
  }
  setCurrentUser(t) {
    return this.persistence._set(this.fullUserKey, t.toJSON());
  }
  async getCurrentUser() {
    const t = await this.persistence._get(this.fullUserKey);
    return t ? Xt._fromJSON(this.auth, t) : null;
  }
  removeCurrentUser() {
    return this.persistence._remove(this.fullUserKey);
  }
  savePersistenceForRedirect() {
    return this.persistence._set(
      this.fullPersistenceKey,
      this.persistence.type
    );
  }
  async setPersistence(t) {
    if (this.persistence === t) return;
    const n = await this.getCurrentUser();
    if ((await this.removeCurrentUser(), (this.persistence = t), n))
      return this.setCurrentUser(n);
  }
  delete() {
    this.persistence._removeListener(this.fullUserKey, this.boundEventHandler);
  }
  static async create(t, n, r = "authUser") {
    if (!n.length) return new Nn(Ze(sc), t, r);
    const i = (
      await Promise.all(
        n.map(async (u) => {
          if (await u._isAvailable()) return u;
        })
      )
    ).filter((u) => u);
    let o = i[0] || Ze(sc);
    const s = Oi(r, t.config.apiKey, t.name);
    let l = null;
    for (const u of n)
      try {
        const f = await u._get(s);
        if (f) {
          const p = Xt._fromJSON(t, f);
          u !== o && (l = p), (o = u);
          break;
        }
      } catch {}
    const a = i.filter((u) => u._shouldAllowMigration);
    return !o._shouldAllowMigration || !a.length
      ? new Nn(o, t, r)
      : ((o = a[0]),
        l && (await o._set(s, l.toJSON())),
        await Promise.all(
          n.map(async (u) => {
            if (u !== o)
              try {
                await u._remove(s);
              } catch {}
          })
        ),
        new Nn(o, t, r));
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function lc(e) {
  const t = e.toLowerCase();
  if (t.includes("opera/") || t.includes("opr/") || t.includes("opios/"))
    return "Opera";
  if (yh(t)) return "IEMobile";
  if (t.includes("msie") || t.includes("trident/")) return "IE";
  if (t.includes("edge/")) return "Edge";
  if (gh(t)) return "Firefox";
  if (t.includes("silk/")) return "Silk";
  if (_h(t)) return "Blackberry";
  if (Sh(t)) return "Webos";
  if (Na(t)) return "Safari";
  if ((t.includes("chrome/") || vh(t)) && !t.includes("edge/")) return "Chrome";
  if (wh(t)) return "Android";
  {
    const n = /([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,
      r = e.match(n);
    if ((r == null ? void 0 : r.length) === 2) return r[1];
  }
  return "Other";
}
function gh(e = ue()) {
  return /firefox\//i.test(e);
}
function Na(e = ue()) {
  const t = e.toLowerCase();
  return (
    t.includes("safari/") &&
    !t.includes("chrome/") &&
    !t.includes("crios/") &&
    !t.includes("android")
  );
}
function vh(e = ue()) {
  return /crios\//i.test(e);
}
function yh(e = ue()) {
  return /iemobile/i.test(e);
}
function wh(e = ue()) {
  return /android/i.test(e);
}
function _h(e = ue()) {
  return /blackberry/i.test(e);
}
function Sh(e = ue()) {
  return /webos/i.test(e);
}
function Ao(e = ue()) {
  return (
    /iphone|ipad|ipod/i.test(e) || (/macintosh/i.test(e) && /mobile/i.test(e))
  );
}
function Iy(e = ue()) {
  var t;
  return (
    Ao(e) &&
    !!(!((t = window.navigator) === null || t === void 0) && t.standalone)
  );
}
function xy() {
  return Hv() && document.documentMode === 10;
}
function Eh(e = ue()) {
  return Ao(e) || wh(e) || Sh(e) || _h(e) || /windows phone/i.test(e) || yh(e);
}
function Ty() {
  try {
    return !!(window && window !== window.top);
  } catch {
    return !1;
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function kh(e, t = []) {
  let n;
  switch (e) {
    case "Browser":
      n = lc(ue());
      break;
    case "Worker":
      n = `${lc(ue())}-${e}`;
      break;
    default:
      n = e;
  }
  const r = t.length ? t.join(",") : "FirebaseCore-web";
  return `${n}/JsCore/${Kr}/${r}`;
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Ny {
  constructor(t) {
    (this.auth = t), (this.queue = []);
  }
  pushCallback(t, n) {
    const r = (o) =>
      new Promise((s, l) => {
        try {
          const a = t(o);
          s(a);
        } catch (a) {
          l(a);
        }
      });
    (r.onAbort = n), this.queue.push(r);
    const i = this.queue.length - 1;
    return () => {
      this.queue[i] = () => Promise.resolve();
    };
  }
  async runMiddleware(t) {
    if (this.auth.currentUser === t) return;
    const n = [];
    try {
      for (const r of this.queue) await r(t), r.onAbort && n.push(r.onAbort);
    } catch (r) {
      n.reverse();
      for (const i of n)
        try {
          i();
        } catch {}
      throw this.auth._errorFactory.create("login-blocked", {
        originalMessage: r == null ? void 0 : r.message,
      });
    }
  }
}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function Py(e, t = {}) {
  return Qr(e, "GET", "/v2/passwordPolicy", dh(e, t));
}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Ry = 6;
class Oy {
  constructor(t) {
    var n, r, i, o;
    const s = t.customStrengthOptions;
    (this.customStrengthOptions = {}),
      (this.customStrengthOptions.minPasswordLength =
        (n = s.minPasswordLength) !== null && n !== void 0 ? n : Ry),
      s.maxPasswordLength &&
        (this.customStrengthOptions.maxPasswordLength = s.maxPasswordLength),
      s.containsLowercaseCharacter !== void 0 &&
        (this.customStrengthOptions.containsLowercaseLetter =
          s.containsLowercaseCharacter),
      s.containsUppercaseCharacter !== void 0 &&
        (this.customStrengthOptions.containsUppercaseLetter =
          s.containsUppercaseCharacter),
      s.containsNumericCharacter !== void 0 &&
        (this.customStrengthOptions.containsNumericCharacter =
          s.containsNumericCharacter),
      s.containsNonAlphanumericCharacter !== void 0 &&
        (this.customStrengthOptions.containsNonAlphanumericCharacter =
          s.containsNonAlphanumericCharacter),
      (this.enforcementState = t.enforcementState),
      this.enforcementState === "ENFORCEMENT_STATE_UNSPECIFIED" &&
        (this.enforcementState = "OFF"),
      (this.allowedNonAlphanumericCharacters =
        (i =
          (r = t.allowedNonAlphanumericCharacters) === null || r === void 0
            ? void 0
            : r.join("")) !== null && i !== void 0
          ? i
          : ""),
      (this.forceUpgradeOnSignin =
        (o = t.forceUpgradeOnSignin) !== null && o !== void 0 ? o : !1),
      (this.schemaVersion = t.schemaVersion);
  }
  validatePassword(t) {
    var n, r, i, o, s, l;
    const a = { isValid: !0, passwordPolicy: this };
    return (
      this.validatePasswordLengthOptions(t, a),
      this.validatePasswordCharacterOptions(t, a),
      a.isValid &&
        (a.isValid =
          (n = a.meetsMinPasswordLength) !== null && n !== void 0 ? n : !0),
      a.isValid &&
        (a.isValid =
          (r = a.meetsMaxPasswordLength) !== null && r !== void 0 ? r : !0),
      a.isValid &&
        (a.isValid =
          (i = a.containsLowercaseLetter) !== null && i !== void 0 ? i : !0),
      a.isValid &&
        (a.isValid =
          (o = a.containsUppercaseLetter) !== null && o !== void 0 ? o : !0),
      a.isValid &&
        (a.isValid =
          (s = a.containsNumericCharacter) !== null && s !== void 0 ? s : !0),
      a.isValid &&
        (a.isValid =
          (l = a.containsNonAlphanumericCharacter) !== null && l !== void 0
            ? l
            : !0),
      a
    );
  }
  validatePasswordLengthOptions(t, n) {
    const r = this.customStrengthOptions.minPasswordLength,
      i = this.customStrengthOptions.maxPasswordLength;
    r && (n.meetsMinPasswordLength = t.length >= r),
      i && (n.meetsMaxPasswordLength = t.length <= i);
  }
  validatePasswordCharacterOptions(t, n) {
    this.updatePasswordCharacterOptionsStatuses(n, !1, !1, !1, !1);
    let r;
    for (let i = 0; i < t.length; i++)
      (r = t.charAt(i)),
        this.updatePasswordCharacterOptionsStatuses(
          n,
          r >= "a" && r <= "z",
          r >= "A" && r <= "Z",
          r >= "0" && r <= "9",
          this.allowedNonAlphanumericCharacters.includes(r)
        );
  }
  updatePasswordCharacterOptionsStatuses(t, n, r, i, o) {
    this.customStrengthOptions.containsLowercaseLetter &&
      (t.containsLowercaseLetter || (t.containsLowercaseLetter = n)),
      this.customStrengthOptions.containsUppercaseLetter &&
        (t.containsUppercaseLetter || (t.containsUppercaseLetter = r)),
      this.customStrengthOptions.containsNumericCharacter &&
        (t.containsNumericCharacter || (t.containsNumericCharacter = i)),
      this.customStrengthOptions.containsNonAlphanumericCharacter &&
        (t.containsNonAlphanumericCharacter ||
          (t.containsNonAlphanumericCharacter = o));
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Ly {
  constructor(t, n, r, i) {
    (this.app = t),
      (this.heartbeatServiceProvider = n),
      (this.appCheckServiceProvider = r),
      (this.config = i),
      (this.currentUser = null),
      (this.emulatorConfig = null),
      (this.operations = Promise.resolve()),
      (this.authStateSubscription = new ac(this)),
      (this.idTokenSubscription = new ac(this)),
      (this.beforeStateQueue = new Ny(this)),
      (this.redirectUser = null),
      (this.isProactiveRefreshEnabled = !1),
      (this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION = 1),
      (this._canInitEmulator = !0),
      (this._isInitialized = !1),
      (this._deleted = !1),
      (this._initializationPromise = null),
      (this._popupRedirectResolver = null),
      (this._errorFactory = ah),
      (this._agentRecaptchaConfig = null),
      (this._tenantRecaptchaConfigs = {}),
      (this._projectPasswordPolicy = null),
      (this._tenantPasswordPolicies = {}),
      (this.lastNotifiedUid = void 0),
      (this.languageCode = null),
      (this.tenantId = null),
      (this.settings = { appVerificationDisabledForTesting: !1 }),
      (this.frameworks = []),
      (this.name = t.name),
      (this.clientVersion = i.sdkClientVersion);
  }
  _initializeWithPersistence(t, n) {
    return (
      n && (this._popupRedirectResolver = Ze(n)),
      (this._initializationPromise = this.queue(async () => {
        var r, i;
        if (
          !this._deleted &&
          ((this.persistenceManager = await Nn.create(this, t)), !this._deleted)
        ) {
          if (
            !((r = this._popupRedirectResolver) === null || r === void 0) &&
            r._shouldInitProactively
          )
            try {
              await this._popupRedirectResolver._initialize(this);
            } catch {}
          await this.initializeCurrentUser(n),
            (this.lastNotifiedUid =
              ((i = this.currentUser) === null || i === void 0
                ? void 0
                : i.uid) || null),
            !this._deleted && (this._isInitialized = !0);
        }
      })),
      this._initializationPromise
    );
  }
  async _onStorageEvent() {
    if (this._deleted) return;
    const t = await this.assertedPersistence.getCurrentUser();
    if (!(!this.currentUser && !t)) {
      if (this.currentUser && t && this.currentUser.uid === t.uid) {
        this._currentUser._assign(t), await this.currentUser.getIdToken();
        return;
      }
      await this._updateCurrentUser(t, !0);
    }
  }
  async initializeCurrentUser(t) {
    var n;
    const r = await this.assertedPersistence.getCurrentUser();
    let i = r,
      o = !1;
    if (t && this.config.authDomain) {
      await this.getOrInitRedirectPersistenceManager();
      const s =
          (n = this.redirectUser) === null || n === void 0
            ? void 0
            : n._redirectEventId,
        l = i == null ? void 0 : i._redirectEventId,
        a = await this.tryRedirectSignIn(t);
      (!s || s === l) && a != null && a.user && ((i = a.user), (o = !0));
    }
    if (!i) return this.directlySetCurrentUser(null);
    if (!i._redirectEventId) {
      if (o)
        try {
          await this.beforeStateQueue.runMiddleware(i);
        } catch (s) {
          (i = r),
            this._popupRedirectResolver._overrideRedirectResult(this, () =>
              Promise.reject(s)
            );
        }
      return i
        ? this.reloadAndSetCurrentUserOrClear(i)
        : this.directlySetCurrentUser(null);
    }
    return (
      R(this._popupRedirectResolver, this, "argument-error"),
      await this.getOrInitRedirectPersistenceManager(),
      this.redirectUser &&
      this.redirectUser._redirectEventId === i._redirectEventId
        ? this.directlySetCurrentUser(i)
        : this.reloadAndSetCurrentUserOrClear(i)
    );
  }
  async tryRedirectSignIn(t) {
    let n = null;
    try {
      n = await this._popupRedirectResolver._completeRedirectFn(this, t, !0);
    } catch {
      await this._setRedirectUser(null);
    }
    return n;
  }
  async reloadAndSetCurrentUserOrClear(t) {
    try {
      await co(t);
    } catch (n) {
      if ((n == null ? void 0 : n.code) !== "auth/network-request-failed")
        return this.directlySetCurrentUser(null);
    }
    return this.directlySetCurrentUser(t);
  }
  useDeviceLanguage() {
    this.languageCode = cy();
  }
  async _delete() {
    this._deleted = !0;
  }
  async updateCurrentUser(t) {
    const n = t ? Vn(t) : null;
    return (
      n &&
        R(
          n.auth.config.apiKey === this.config.apiKey,
          this,
          "invalid-user-token"
        ),
      this._updateCurrentUser(n && n._clone(this))
    );
  }
  async _updateCurrentUser(t, n = !1) {
    if (!this._deleted)
      return (
        t && R(this.tenantId === t.tenantId, this, "tenant-id-mismatch"),
        n || (await this.beforeStateQueue.runMiddleware(t)),
        this.queue(async () => {
          await this.directlySetCurrentUser(t), this.notifyAuthListeners();
        })
      );
  }
  async signOut() {
    return (
      await this.beforeStateQueue.runMiddleware(null),
      (this.redirectPersistenceManager || this._popupRedirectResolver) &&
        (await this._setRedirectUser(null)),
      this._updateCurrentUser(null, !0)
    );
  }
  setPersistence(t) {
    return this.queue(async () => {
      await this.assertedPersistence.setPersistence(Ze(t));
    });
  }
  _getRecaptchaConfig() {
    return this.tenantId == null
      ? this._agentRecaptchaConfig
      : this._tenantRecaptchaConfigs[this.tenantId];
  }
  async validatePassword(t) {
    this._getPasswordPolicyInternal() || (await this._updatePasswordPolicy());
    const n = this._getPasswordPolicyInternal();
    return n.schemaVersion !== this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION
      ? Promise.reject(
          this._errorFactory.create(
            "unsupported-password-policy-schema-version",
            {}
          )
        )
      : n.validatePassword(t);
  }
  _getPasswordPolicyInternal() {
    return this.tenantId === null
      ? this._projectPasswordPolicy
      : this._tenantPasswordPolicies[this.tenantId];
  }
  async _updatePasswordPolicy() {
    const t = await Py(this),
      n = new Oy(t);
    this.tenantId === null
      ? (this._projectPasswordPolicy = n)
      : (this._tenantPasswordPolicies[this.tenantId] = n);
  }
  _getPersistence() {
    return this.assertedPersistence.persistence.type;
  }
  _updateErrorMap(t) {
    this._errorFactory = new Vr("auth", "Firebase", t());
  }
  onAuthStateChanged(t, n, r) {
    return this.registerStateListener(this.authStateSubscription, t, n, r);
  }
  beforeAuthStateChanged(t, n) {
    return this.beforeStateQueue.pushCallback(t, n);
  }
  onIdTokenChanged(t, n, r) {
    return this.registerStateListener(this.idTokenSubscription, t, n, r);
  }
  authStateReady() {
    return new Promise((t, n) => {
      if (this.currentUser) t();
      else {
        const r = this.onAuthStateChanged(() => {
          r(), t();
        }, n);
      }
    });
  }
  toJSON() {
    var t;
    return {
      apiKey: this.config.apiKey,
      authDomain: this.config.authDomain,
      appName: this.name,
      currentUser:
        (t = this._currentUser) === null || t === void 0 ? void 0 : t.toJSON(),
    };
  }
  async _setRedirectUser(t, n) {
    const r = await this.getOrInitRedirectPersistenceManager(n);
    return t === null ? r.removeCurrentUser() : r.setCurrentUser(t);
  }
  async getOrInitRedirectPersistenceManager(t) {
    if (!this.redirectPersistenceManager) {
      const n = (t && Ze(t)) || this._popupRedirectResolver;
      R(n, this, "argument-error"),
        (this.redirectPersistenceManager = await Nn.create(
          this,
          [Ze(n._redirectPersistence)],
          "redirectUser"
        )),
        (this.redirectUser =
          await this.redirectPersistenceManager.getCurrentUser());
    }
    return this.redirectPersistenceManager;
  }
  async _redirectUserForId(t) {
    var n, r;
    return (
      this._isInitialized && (await this.queue(async () => {})),
      ((n = this._currentUser) === null || n === void 0
        ? void 0
        : n._redirectEventId) === t
        ? this._currentUser
        : ((r = this.redirectUser) === null || r === void 0
            ? void 0
            : r._redirectEventId) === t
        ? this.redirectUser
        : null
    );
  }
  async _persistUserIfCurrent(t) {
    if (t === this.currentUser)
      return this.queue(async () => this.directlySetCurrentUser(t));
  }
  _notifyListenersIfCurrent(t) {
    t === this.currentUser && this.notifyAuthListeners();
  }
  _key() {
    return `${this.config.authDomain}:${this.config.apiKey}:${this.name}`;
  }
  _startProactiveRefresh() {
    (this.isProactiveRefreshEnabled = !0),
      this.currentUser && this._currentUser._startProactiveRefresh();
  }
  _stopProactiveRefresh() {
    (this.isProactiveRefreshEnabled = !1),
      this.currentUser && this._currentUser._stopProactiveRefresh();
  }
  get _currentUser() {
    return this.currentUser;
  }
  notifyAuthListeners() {
    var t, n;
    if (!this._isInitialized) return;
    this.idTokenSubscription.next(this.currentUser);
    const r =
      (n = (t = this.currentUser) === null || t === void 0 ? void 0 : t.uid) !==
        null && n !== void 0
        ? n
        : null;
    this.lastNotifiedUid !== r &&
      ((this.lastNotifiedUid = r),
      this.authStateSubscription.next(this.currentUser));
  }
  registerStateListener(t, n, r, i) {
    if (this._deleted) return () => {};
    const o = typeof n == "function" ? n : n.next.bind(n);
    let s = !1;
    const l = this._isInitialized
      ? Promise.resolve()
      : this._initializationPromise;
    if (
      (R(l, this, "internal-error"),
      l.then(() => {
        s || o(this.currentUser);
      }),
      typeof n == "function")
    ) {
      const a = t.addObserver(n, r, i);
      return () => {
        (s = !0), a();
      };
    } else {
      const a = t.addObserver(n);
      return () => {
        (s = !0), a();
      };
    }
  }
  async directlySetCurrentUser(t) {
    this.currentUser &&
      this.currentUser !== t &&
      this._currentUser._stopProactiveRefresh(),
      t && this.isProactiveRefreshEnabled && t._startProactiveRefresh(),
      (this.currentUser = t),
      t
        ? await this.assertedPersistence.setCurrentUser(t)
        : await this.assertedPersistence.removeCurrentUser();
  }
  queue(t) {
    return (this.operations = this.operations.then(t, t)), this.operations;
  }
  get assertedPersistence() {
    return (
      R(this.persistenceManager, this, "internal-error"),
      this.persistenceManager
    );
  }
  _logFramework(t) {
    !t ||
      this.frameworks.includes(t) ||
      (this.frameworks.push(t),
      this.frameworks.sort(),
      (this.clientVersion = kh(
        this.config.clientPlatform,
        this._getFrameworks()
      )));
  }
  _getFrameworks() {
    return this.frameworks;
  }
  async _getAdditionalHeaders() {
    var t;
    const n = { "X-Client-Version": this.clientVersion };
    this.app.options.appId && (n["X-Firebase-gmpid"] = this.app.options.appId);
    const r = await ((t = this.heartbeatServiceProvider.getImmediate({
      optional: !0,
    })) === null || t === void 0
      ? void 0
      : t.getHeartbeatsHeader());
    r && (n["X-Firebase-Client"] = r);
    const i = await this._getAppCheckToken();
    return i && (n["X-Firebase-AppCheck"] = i), n;
  }
  async _getAppCheckToken() {
    var t;
    const n = await ((t = this.appCheckServiceProvider.getImmediate({
      optional: !0,
    })) === null || t === void 0
      ? void 0
      : t.getToken());
    return (
      n != null &&
        n.error &&
        sy(`Error while retrieving App Check token: ${n.error}`),
      n == null ? void 0 : n.token
    );
  }
}
function Do(e) {
  return Vn(e);
}
class ac {
  constructor(t) {
    (this.auth = t),
      (this.observer = null),
      (this.addObserver = Jv((n) => (this.observer = n)));
  }
  get next() {
    return (
      R(this.observer, this.auth, "internal-error"),
      this.observer.next.bind(this.observer)
    );
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Ay() {
  var e, t;
  return (t =
    (e = document.getElementsByTagName("head")) === null || e === void 0
      ? void 0
      : e[0]) !== null && t !== void 0
    ? t
    : document;
}
function Dy(e) {
  return new Promise((t, n) => {
    const r = document.createElement("script");
    r.setAttribute("src", e),
      (r.onload = t),
      (r.onerror = (i) => {
        const o = Ve("internal-error");
        (o.customData = i), n(o);
      }),
      (r.type = "text/javascript"),
      (r.charset = "UTF-8"),
      Ay().appendChild(r);
  });
}
function My(e) {
  return `__${e}${Math.floor(Math.random() * 1e6)}`;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function jy(e, t) {
  const n = rh(e, "auth");
  if (n.isInitialized()) {
    const i = n.getImmediate(),
      o = n.getOptions();
    if (lo(o, t ?? {})) return i;
    Ke(i, "already-initialized");
  }
  return n.initialize({ options: t });
}
function Uy(e, t) {
  const n = (t == null ? void 0 : t.persistence) || [],
    r = (Array.isArray(n) ? n : [n]).map(Ze);
  t != null && t.errorMap && e._updateErrorMap(t.errorMap),
    e._initializeWithPersistence(
      r,
      t == null ? void 0 : t.popupRedirectResolver
    );
}
function zy(e, t, n) {
  const r = Do(e);
  R(r._canInitEmulator, r, "emulator-config-failed"),
    R(/^https?:\/\//.test(t), r, "invalid-emulator-scheme");
  const i = !!(n != null && n.disableWarnings),
    o = Ch(t),
    { host: s, port: l } = Fy(t),
    a = l === null ? "" : `:${l}`;
  (r.config.emulator = { url: `${o}//${s}${a}/` }),
    (r.settings.appVerificationDisabledForTesting = !0),
    (r.emulatorConfig = Object.freeze({
      host: s,
      port: l,
      protocol: o.replace(":", ""),
      options: Object.freeze({ disableWarnings: i }),
    })),
    i || By();
}
function Ch(e) {
  const t = e.indexOf(":");
  return t < 0 ? "" : e.substr(0, t + 1);
}
function Fy(e) {
  const t = Ch(e),
    n = /(\/\/)?([^?#/]+)/.exec(e.substr(t.length));
  if (!n) return { host: "", port: null };
  const r = n[2].split("@").pop() || "",
    i = /^(\[[^\]]+\])(:|$)/.exec(r);
  if (i) {
    const o = i[1];
    return { host: o, port: uc(r.substr(o.length + 1)) };
  } else {
    const [o, s] = r.split(":");
    return { host: o, port: uc(s) };
  }
}
function uc(e) {
  if (!e) return null;
  const t = Number(e);
  return isNaN(t) ? null : t;
}
function By() {
  function e() {
    const t = document.createElement("p"),
      n = t.style;
    (t.innerText =
      "Running in emulator mode. Do not use with production credentials."),
      (n.position = "fixed"),
      (n.width = "100%"),
      (n.backgroundColor = "#ffffff"),
      (n.border = ".1em solid #000000"),
      (n.color = "#b50000"),
      (n.bottom = "0px"),
      (n.left = "0px"),
      (n.margin = "0px"),
      (n.zIndex = "10000"),
      (n.textAlign = "center"),
      t.classList.add("firebase-emulator-warning"),
      document.body.appendChild(t);
  }
  typeof console < "u" &&
    typeof console.info == "function" &&
    console.info(
      "WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."
    ),
    typeof window < "u" &&
      typeof document < "u" &&
      (document.readyState === "loading"
        ? window.addEventListener("DOMContentLoaded", e)
        : e());
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Ih {
  constructor(t, n) {
    (this.providerId = t), (this.signInMethod = n);
  }
  toJSON() {
    return qe("not implemented");
  }
  _getIdTokenResponse(t) {
    return qe("not implemented");
  }
  _linkToIdToken(t, n) {
    return qe("not implemented");
  }
  _getReauthenticationResolver(t) {
    return qe("not implemented");
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function Pn(e, t) {
  return hy(e, "POST", "/v1/accounts:signInWithIdp", dh(e, t));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const by = "http://localhost";
class on extends Ih {
  constructor() {
    super(...arguments), (this.pendingToken = null);
  }
  static _fromParams(t) {
    const n = new on(t.providerId, t.signInMethod);
    return (
      t.idToken || t.accessToken
        ? (t.idToken && (n.idToken = t.idToken),
          t.accessToken && (n.accessToken = t.accessToken),
          t.nonce && !t.pendingToken && (n.nonce = t.nonce),
          t.pendingToken && (n.pendingToken = t.pendingToken))
        : t.oauthToken && t.oauthTokenSecret
        ? ((n.accessToken = t.oauthToken), (n.secret = t.oauthTokenSecret))
        : Ke("argument-error"),
      n
    );
  }
  toJSON() {
    return {
      idToken: this.idToken,
      accessToken: this.accessToken,
      secret: this.secret,
      nonce: this.nonce,
      pendingToken: this.pendingToken,
      providerId: this.providerId,
      signInMethod: this.signInMethod,
    };
  }
  static fromJSON(t) {
    const n = typeof t == "string" ? JSON.parse(t) : t,
      { providerId: r, signInMethod: i } = n,
      o = Ca(n, ["providerId", "signInMethod"]);
    if (!r || !i) return null;
    const s = new on(r, i);
    return (
      (s.idToken = o.idToken || void 0),
      (s.accessToken = o.accessToken || void 0),
      (s.secret = o.secret),
      (s.nonce = o.nonce),
      (s.pendingToken = o.pendingToken || null),
      s
    );
  }
  _getIdTokenResponse(t) {
    const n = this.buildRequest();
    return Pn(t, n);
  }
  _linkToIdToken(t, n) {
    const r = this.buildRequest();
    return (r.idToken = n), Pn(t, r);
  }
  _getReauthenticationResolver(t) {
    const n = this.buildRequest();
    return (n.autoCreate = !1), Pn(t, n);
  }
  buildRequest() {
    const t = { requestUri: by, returnSecureToken: !0 };
    if (this.pendingToken) t.pendingToken = this.pendingToken;
    else {
      const n = {};
      this.idToken && (n.id_token = this.idToken),
        this.accessToken && (n.access_token = this.accessToken),
        this.secret && (n.oauth_token_secret = this.secret),
        (n.providerId = this.providerId),
        this.nonce && !this.pendingToken && (n.nonce = this.nonce),
        (t.postBody = Wr(n));
    }
    return t;
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Pa {
  constructor(t) {
    (this.providerId = t),
      (this.defaultLanguageCode = null),
      (this.customParameters = {});
  }
  setDefaultLanguage(t) {
    this.defaultLanguageCode = t;
  }
  setCustomParameters(t) {
    return (this.customParameters = t), this;
  }
  getCustomParameters() {
    return this.customParameters;
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Yr extends Pa {
  constructor() {
    super(...arguments), (this.scopes = []);
  }
  addScope(t) {
    return this.scopes.includes(t) || this.scopes.push(t), this;
  }
  getScopes() {
    return [...this.scopes];
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class gt extends Yr {
  constructor() {
    super("facebook.com");
  }
  static credential(t) {
    return on._fromParams({
      providerId: gt.PROVIDER_ID,
      signInMethod: gt.FACEBOOK_SIGN_IN_METHOD,
      accessToken: t,
    });
  }
  static credentialFromResult(t) {
    return gt.credentialFromTaggedObject(t);
  }
  static credentialFromError(t) {
    return gt.credentialFromTaggedObject(t.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: t }) {
    if (!t || !("oauthAccessToken" in t) || !t.oauthAccessToken) return null;
    try {
      return gt.credential(t.oauthAccessToken);
    } catch {
      return null;
    }
  }
}
gt.FACEBOOK_SIGN_IN_METHOD = "facebook.com";
gt.PROVIDER_ID = "facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Ye extends Yr {
  constructor() {
    super("google.com"), this.addScope("profile");
  }
  static credential(t, n) {
    return on._fromParams({
      providerId: Ye.PROVIDER_ID,
      signInMethod: Ye.GOOGLE_SIGN_IN_METHOD,
      idToken: t,
      accessToken: n,
    });
  }
  static credentialFromResult(t) {
    return Ye.credentialFromTaggedObject(t);
  }
  static credentialFromError(t) {
    return Ye.credentialFromTaggedObject(t.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: t }) {
    if (!t) return null;
    const { oauthIdToken: n, oauthAccessToken: r } = t;
    if (!n && !r) return null;
    try {
      return Ye.credential(n, r);
    } catch {
      return null;
    }
  }
}
Ye.GOOGLE_SIGN_IN_METHOD = "google.com";
Ye.PROVIDER_ID = "google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class vt extends Yr {
  constructor() {
    super("github.com");
  }
  static credential(t) {
    return on._fromParams({
      providerId: vt.PROVIDER_ID,
      signInMethod: vt.GITHUB_SIGN_IN_METHOD,
      accessToken: t,
    });
  }
  static credentialFromResult(t) {
    return vt.credentialFromTaggedObject(t);
  }
  static credentialFromError(t) {
    return vt.credentialFromTaggedObject(t.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: t }) {
    if (!t || !("oauthAccessToken" in t) || !t.oauthAccessToken) return null;
    try {
      return vt.credential(t.oauthAccessToken);
    } catch {
      return null;
    }
  }
}
vt.GITHUB_SIGN_IN_METHOD = "github.com";
vt.PROVIDER_ID = "github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class yt extends Yr {
  constructor() {
    super("twitter.com");
  }
  static credential(t, n) {
    return on._fromParams({
      providerId: yt.PROVIDER_ID,
      signInMethod: yt.TWITTER_SIGN_IN_METHOD,
      oauthToken: t,
      oauthTokenSecret: n,
    });
  }
  static credentialFromResult(t) {
    return yt.credentialFromTaggedObject(t);
  }
  static credentialFromError(t) {
    return yt.credentialFromTaggedObject(t.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: t }) {
    if (!t) return null;
    const { oauthAccessToken: n, oauthTokenSecret: r } = t;
    if (!n || !r) return null;
    try {
      return yt.credential(n, r);
    } catch {
      return null;
    }
  }
}
yt.TWITTER_SIGN_IN_METHOD = "twitter.com";
yt.PROVIDER_ID = "twitter.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class zn {
  constructor(t) {
    (this.user = t.user),
      (this.providerId = t.providerId),
      (this._tokenResponse = t._tokenResponse),
      (this.operationType = t.operationType);
  }
  static async _fromIdTokenResponse(t, n, r, i = !1) {
    const o = await Xt._fromIdTokenResponse(t, r, i),
      s = cc(r);
    return new zn({
      user: o,
      providerId: s,
      _tokenResponse: r,
      operationType: n,
    });
  }
  static async _forOperation(t, n, r) {
    await t._updateTokensIfNecessary(r, !0);
    const i = cc(r);
    return new zn({
      user: t,
      providerId: i,
      _tokenResponse: r,
      operationType: n,
    });
  }
}
function cc(e) {
  return e.providerId ? e.providerId : "phoneNumber" in e ? "phone" : null;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class fo extends Ft {
  constructor(t, n, r, i) {
    var o;
    super(n.code, n.message),
      (this.operationType = r),
      (this.user = i),
      Object.setPrototypeOf(this, fo.prototype),
      (this.customData = {
        appName: t.name,
        tenantId: (o = t.tenantId) !== null && o !== void 0 ? o : void 0,
        _serverResponse: n.customData._serverResponse,
        operationType: r,
      });
  }
  static _fromErrorAndOperation(t, n, r, i) {
    return new fo(t, n, r, i);
  }
}
function xh(e, t, n, r) {
  return (
    t === "reauthenticate"
      ? n._getReauthenticationResolver(e)
      : n._getIdTokenResponse(e)
  ).catch((o) => {
    throw o.code === "auth/multi-factor-auth-required"
      ? fo._fromErrorAndOperation(e, o, t, r)
      : o;
  });
}
async function $y(e, t, n = !1) {
  const r = await Mr(e, t._linkToIdToken(e.auth, await e.getIdToken()), n);
  return zn._forOperation(e, "link", r);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function Hy(e, t, n = !1) {
  const { auth: r } = e,
    i = "reauthenticate";
  try {
    const o = await Mr(e, xh(r, i, t, e), n);
    R(o.idToken, r, "internal-error");
    const s = Ta(o.idToken);
    R(s, r, "internal-error");
    const { sub: l } = s;
    return R(e.uid === l, r, "user-mismatch"), zn._forOperation(e, i, o);
  } catch (o) {
    throw (
      ((o == null ? void 0 : o.code) === "auth/user-not-found" &&
        Ke(r, "user-mismatch"),
      o)
    );
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function Vy(e, t, n = !1) {
  const r = "signIn",
    i = await xh(e, r, t),
    o = await zn._fromIdTokenResponse(e, r, i);
  return n || (await e._updateCurrentUser(o.user)), o;
}
function Wy(e, t, n, r) {
  return Vn(e).onIdTokenChanged(t, n, r);
}
function Ky(e, t, n) {
  return Vn(e).beforeAuthStateChanged(t, n);
}
const ho = "__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Th {
  constructor(t, n) {
    (this.storageRetriever = t), (this.type = n);
  }
  _isAvailable() {
    try {
      return this.storage
        ? (this.storage.setItem(ho, "1"),
          this.storage.removeItem(ho),
          Promise.resolve(!0))
        : Promise.resolve(!1);
    } catch {
      return Promise.resolve(!1);
    }
  }
  _set(t, n) {
    return this.storage.setItem(t, JSON.stringify(n)), Promise.resolve();
  }
  _get(t) {
    const n = this.storage.getItem(t);
    return Promise.resolve(n ? JSON.parse(n) : null);
  }
  _remove(t) {
    return this.storage.removeItem(t), Promise.resolve();
  }
  get storage() {
    return this.storageRetriever();
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Gy() {
  const e = ue();
  return Na(e) || Ao(e);
}
const Qy = 1e3,
  Yy = 10;
class Nh extends Th {
  constructor() {
    super(() => window.localStorage, "LOCAL"),
      (this.boundEventHandler = (t, n) => this.onStorageEvent(t, n)),
      (this.listeners = {}),
      (this.localCache = {}),
      (this.pollTimer = null),
      (this.safariLocalStorageNotSynced = Gy() && Ty()),
      (this.fallbackToPolling = Eh()),
      (this._shouldAllowMigration = !0);
  }
  forAllChangedKeys(t) {
    for (const n of Object.keys(this.listeners)) {
      const r = this.storage.getItem(n),
        i = this.localCache[n];
      r !== i && t(n, i, r);
    }
  }
  onStorageEvent(t, n = !1) {
    if (!t.key) {
      this.forAllChangedKeys((s, l, a) => {
        this.notifyListeners(s, a);
      });
      return;
    }
    const r = t.key;
    if (
      (n ? this.detachListener() : this.stopPolling(),
      this.safariLocalStorageNotSynced)
    ) {
      const s = this.storage.getItem(r);
      if (t.newValue !== s)
        t.newValue !== null
          ? this.storage.setItem(r, t.newValue)
          : this.storage.removeItem(r);
      else if (this.localCache[r] === t.newValue && !n) return;
    }
    const i = () => {
        const s = this.storage.getItem(r);
        (!n && this.localCache[r] === s) || this.notifyListeners(r, s);
      },
      o = this.storage.getItem(r);
    xy() && o !== t.newValue && t.newValue !== t.oldValue
      ? setTimeout(i, Yy)
      : i();
  }
  notifyListeners(t, n) {
    this.localCache[t] = n;
    const r = this.listeners[t];
    if (r) for (const i of Array.from(r)) i(n && JSON.parse(n));
  }
  startPolling() {
    this.stopPolling(),
      (this.pollTimer = setInterval(() => {
        this.forAllChangedKeys((t, n, r) => {
          this.onStorageEvent(
            new StorageEvent("storage", { key: t, oldValue: n, newValue: r }),
            !0
          );
        });
      }, Qy));
  }
  stopPolling() {
    this.pollTimer && (clearInterval(this.pollTimer), (this.pollTimer = null));
  }
  attachListener() {
    window.addEventListener("storage", this.boundEventHandler);
  }
  detachListener() {
    window.removeEventListener("storage", this.boundEventHandler);
  }
  _addListener(t, n) {
    Object.keys(this.listeners).length === 0 &&
      (this.fallbackToPolling ? this.startPolling() : this.attachListener()),
      this.listeners[t] ||
        ((this.listeners[t] = new Set()),
        (this.localCache[t] = this.storage.getItem(t))),
      this.listeners[t].add(n);
  }
  _removeListener(t, n) {
    this.listeners[t] &&
      (this.listeners[t].delete(n),
      this.listeners[t].size === 0 && delete this.listeners[t]),
      Object.keys(this.listeners).length === 0 &&
        (this.detachListener(), this.stopPolling());
  }
  async _set(t, n) {
    await super._set(t, n), (this.localCache[t] = JSON.stringify(n));
  }
  async _get(t) {
    const n = await super._get(t);
    return (this.localCache[t] = JSON.stringify(n)), n;
  }
  async _remove(t) {
    await super._remove(t), delete this.localCache[t];
  }
}
Nh.type = "LOCAL";
const Jy = Nh;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Ph extends Th {
  constructor() {
    super(() => window.sessionStorage, "SESSION");
  }
  _addListener(t, n) {}
  _removeListener(t, n) {}
}
Ph.type = "SESSION";
const Rh = Ph;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Xy(e) {
  return Promise.all(
    e.map(async (t) => {
      try {
        return { fulfilled: !0, value: await t };
      } catch (n) {
        return { fulfilled: !1, reason: n };
      }
    })
  );
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Mo {
  constructor(t) {
    (this.eventTarget = t),
      (this.handlersMap = {}),
      (this.boundEventHandler = this.handleEvent.bind(this));
  }
  static _getInstance(t) {
    const n = this.receivers.find((i) => i.isListeningto(t));
    if (n) return n;
    const r = new Mo(t);
    return this.receivers.push(r), r;
  }
  isListeningto(t) {
    return this.eventTarget === t;
  }
  async handleEvent(t) {
    const n = t,
      { eventId: r, eventType: i, data: o } = n.data,
      s = this.handlersMap[i];
    if (!(s != null && s.size)) return;
    n.ports[0].postMessage({ status: "ack", eventId: r, eventType: i });
    const l = Array.from(s).map(async (u) => u(n.origin, o)),
      a = await Xy(l);
    n.ports[0].postMessage({
      status: "done",
      eventId: r,
      eventType: i,
      response: a,
    });
  }
  _subscribe(t, n) {
    Object.keys(this.handlersMap).length === 0 &&
      this.eventTarget.addEventListener("message", this.boundEventHandler),
      this.handlersMap[t] || (this.handlersMap[t] = new Set()),
      this.handlersMap[t].add(n);
  }
  _unsubscribe(t, n) {
    this.handlersMap[t] && n && this.handlersMap[t].delete(n),
      (!n || this.handlersMap[t].size === 0) && delete this.handlersMap[t],
      Object.keys(this.handlersMap).length === 0 &&
        this.eventTarget.removeEventListener("message", this.boundEventHandler);
  }
}
Mo.receivers = [];
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Ra(e = "", t = 10) {
  let n = "";
  for (let r = 0; r < t; r++) n += Math.floor(Math.random() * 10);
  return e + n;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class qy {
  constructor(t) {
    (this.target = t), (this.handlers = new Set());
  }
  removeMessageHandler(t) {
    t.messageChannel &&
      (t.messageChannel.port1.removeEventListener("message", t.onMessage),
      t.messageChannel.port1.close()),
      this.handlers.delete(t);
  }
  async _send(t, n, r = 50) {
    const i = typeof MessageChannel < "u" ? new MessageChannel() : null;
    if (!i) throw new Error("connection_unavailable");
    let o, s;
    return new Promise((l, a) => {
      const u = Ra("", 20);
      i.port1.start();
      const f = setTimeout(() => {
        a(new Error("unsupported_event"));
      }, r);
      (s = {
        messageChannel: i,
        onMessage(p) {
          const m = p;
          if (m.data.eventId === u)
            switch (m.data.status) {
              case "ack":
                clearTimeout(f),
                  (o = setTimeout(() => {
                    a(new Error("timeout"));
                  }, 3e3));
                break;
              case "done":
                clearTimeout(o), l(m.data.response);
                break;
              default:
                clearTimeout(f),
                  clearTimeout(o),
                  a(new Error("invalid_response"));
                break;
            }
        },
      }),
        this.handlers.add(s),
        i.port1.addEventListener("message", s.onMessage),
        this.target.postMessage({ eventType: t, eventId: u, data: n }, [
          i.port2,
        ]);
    }).finally(() => {
      s && this.removeMessageHandler(s);
    });
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function We() {
  return window;
}
function Zy(e) {
  We().location.href = e;
}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Oh() {
  return (
    typeof We().WorkerGlobalScope < "u" &&
    typeof We().importScripts == "function"
  );
}
async function e1() {
  if (!(navigator != null && navigator.serviceWorker)) return null;
  try {
    return (await navigator.serviceWorker.ready).active;
  } catch {
    return null;
  }
}
function t1() {
  var e;
  return (
    ((e = navigator == null ? void 0 : navigator.serviceWorker) === null ||
    e === void 0
      ? void 0
      : e.controller) || null
  );
}
function n1() {
  return Oh() ? self : null;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Lh = "firebaseLocalStorageDb",
  r1 = 1,
  po = "firebaseLocalStorage",
  Ah = "fbase_key";
class Jr {
  constructor(t) {
    this.request = t;
  }
  toPromise() {
    return new Promise((t, n) => {
      this.request.addEventListener("success", () => {
        t(this.request.result);
      }),
        this.request.addEventListener("error", () => {
          n(this.request.error);
        });
    });
  }
}
function jo(e, t) {
  return e.transaction([po], t ? "readwrite" : "readonly").objectStore(po);
}
function i1() {
  const e = indexedDB.deleteDatabase(Lh);
  return new Jr(e).toPromise();
}
function kl() {
  const e = indexedDB.open(Lh, r1);
  return new Promise((t, n) => {
    e.addEventListener("error", () => {
      n(e.error);
    }),
      e.addEventListener("upgradeneeded", () => {
        const r = e.result;
        try {
          r.createObjectStore(po, { keyPath: Ah });
        } catch (i) {
          n(i);
        }
      }),
      e.addEventListener("success", async () => {
        const r = e.result;
        r.objectStoreNames.contains(po)
          ? t(r)
          : (r.close(), await i1(), t(await kl()));
      });
  });
}
async function dc(e, t, n) {
  const r = jo(e, !0).put({ [Ah]: t, value: n });
  return new Jr(r).toPromise();
}
async function o1(e, t) {
  const n = jo(e, !1).get(t),
    r = await new Jr(n).toPromise();
  return r === void 0 ? null : r.value;
}
function fc(e, t) {
  const n = jo(e, !0).delete(t);
  return new Jr(n).toPromise();
}
const s1 = 800,
  l1 = 3;
class Dh {
  constructor() {
    (this.type = "LOCAL"),
      (this._shouldAllowMigration = !0),
      (this.listeners = {}),
      (this.localCache = {}),
      (this.pollTimer = null),
      (this.pendingWrites = 0),
      (this.receiver = null),
      (this.sender = null),
      (this.serviceWorkerReceiverAvailable = !1),
      (this.activeServiceWorker = null),
      (this._workerInitializationPromise =
        this.initializeServiceWorkerMessaging().then(
          () => {},
          () => {}
        ));
  }
  async _openDb() {
    return this.db ? this.db : ((this.db = await kl()), this.db);
  }
  async _withRetries(t) {
    let n = 0;
    for (;;)
      try {
        const r = await this._openDb();
        return await t(r);
      } catch (r) {
        if (n++ > l1) throw r;
        this.db && (this.db.close(), (this.db = void 0));
      }
  }
  async initializeServiceWorkerMessaging() {
    return Oh() ? this.initializeReceiver() : this.initializeSender();
  }
  async initializeReceiver() {
    (this.receiver = Mo._getInstance(n1())),
      this.receiver._subscribe("keyChanged", async (t, n) => ({
        keyProcessed: (await this._poll()).includes(n.key),
      })),
      this.receiver._subscribe("ping", async (t, n) => ["keyChanged"]);
  }
  async initializeSender() {
    var t, n;
    if (((this.activeServiceWorker = await e1()), !this.activeServiceWorker))
      return;
    this.sender = new qy(this.activeServiceWorker);
    const r = await this.sender._send("ping", {}, 800);
    r &&
      !((t = r[0]) === null || t === void 0) &&
      t.fulfilled &&
      !((n = r[0]) === null || n === void 0) &&
      n.value.includes("keyChanged") &&
      (this.serviceWorkerReceiverAvailable = !0);
  }
  async notifyServiceWorker(t) {
    if (
      !(
        !this.sender ||
        !this.activeServiceWorker ||
        t1() !== this.activeServiceWorker
      )
    )
      try {
        await this.sender._send(
          "keyChanged",
          { key: t },
          this.serviceWorkerReceiverAvailable ? 800 : 50
        );
      } catch {}
  }
  async _isAvailable() {
    try {
      if (!indexedDB) return !1;
      const t = await kl();
      return await dc(t, ho, "1"), await fc(t, ho), !0;
    } catch {}
    return !1;
  }
  async _withPendingWrite(t) {
    this.pendingWrites++;
    try {
      await t();
    } finally {
      this.pendingWrites--;
    }
  }
  async _set(t, n) {
    return this._withPendingWrite(
      async () => (
        await this._withRetries((r) => dc(r, t, n)),
        (this.localCache[t] = n),
        this.notifyServiceWorker(t)
      )
    );
  }
  async _get(t) {
    const n = await this._withRetries((r) => o1(r, t));
    return (this.localCache[t] = n), n;
  }
  async _remove(t) {
    return this._withPendingWrite(
      async () => (
        await this._withRetries((n) => fc(n, t)),
        delete this.localCache[t],
        this.notifyServiceWorker(t)
      )
    );
  }
  async _poll() {
    const t = await this._withRetries((i) => {
      const o = jo(i, !1).getAll();
      return new Jr(o).toPromise();
    });
    if (!t) return [];
    if (this.pendingWrites !== 0) return [];
    const n = [],
      r = new Set();
    for (const { fbase_key: i, value: o } of t)
      r.add(i),
        JSON.stringify(this.localCache[i]) !== JSON.stringify(o) &&
          (this.notifyListeners(i, o), n.push(i));
    for (const i of Object.keys(this.localCache))
      this.localCache[i] &&
        !r.has(i) &&
        (this.notifyListeners(i, null), n.push(i));
    return n;
  }
  notifyListeners(t, n) {
    this.localCache[t] = n;
    const r = this.listeners[t];
    if (r) for (const i of Array.from(r)) i(n);
  }
  startPolling() {
    this.stopPolling(),
      (this.pollTimer = setInterval(async () => this._poll(), s1));
  }
  stopPolling() {
    this.pollTimer && (clearInterval(this.pollTimer), (this.pollTimer = null));
  }
  _addListener(t, n) {
    Object.keys(this.listeners).length === 0 && this.startPolling(),
      this.listeners[t] || ((this.listeners[t] = new Set()), this._get(t)),
      this.listeners[t].add(n);
  }
  _removeListener(t, n) {
    this.listeners[t] &&
      (this.listeners[t].delete(n),
      this.listeners[t].size === 0 && delete this.listeners[t]),
      Object.keys(this.listeners).length === 0 && this.stopPolling();
  }
}
Dh.type = "LOCAL";
const a1 = Dh;
new Gr(3e4, 6e4);
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Mh(e, t) {
  return t
    ? Ze(t)
    : (R(e._popupRedirectResolver, e, "argument-error"),
      e._popupRedirectResolver);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Oa extends Ih {
  constructor(t) {
    super("custom", "custom"), (this.params = t);
  }
  _getIdTokenResponse(t) {
    return Pn(t, this._buildIdpRequest());
  }
  _linkToIdToken(t, n) {
    return Pn(t, this._buildIdpRequest(n));
  }
  _getReauthenticationResolver(t) {
    return Pn(t, this._buildIdpRequest());
  }
  _buildIdpRequest(t) {
    const n = {
      requestUri: this.params.requestUri,
      sessionId: this.params.sessionId,
      postBody: this.params.postBody,
      tenantId: this.params.tenantId,
      pendingToken: this.params.pendingToken,
      returnSecureToken: !0,
      returnIdpCredential: !0,
    };
    return t && (n.idToken = t), n;
  }
}
function u1(e) {
  return Vy(e.auth, new Oa(e), e.bypassAuthState);
}
function c1(e) {
  const { auth: t, user: n } = e;
  return R(n, t, "internal-error"), Hy(n, new Oa(e), e.bypassAuthState);
}
async function d1(e) {
  const { auth: t, user: n } = e;
  return R(n, t, "internal-error"), $y(n, new Oa(e), e.bypassAuthState);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class jh {
  constructor(t, n, r, i, o = !1) {
    (this.auth = t),
      (this.resolver = r),
      (this.user = i),
      (this.bypassAuthState = o),
      (this.pendingPromise = null),
      (this.eventManager = null),
      (this.filter = Array.isArray(n) ? n : [n]);
  }
  execute() {
    return new Promise(async (t, n) => {
      this.pendingPromise = { resolve: t, reject: n };
      try {
        (this.eventManager = await this.resolver._initialize(this.auth)),
          await this.onExecution(),
          this.eventManager.registerConsumer(this);
      } catch (r) {
        this.reject(r);
      }
    });
  }
  async onAuthEvent(t) {
    const {
      urlResponse: n,
      sessionId: r,
      postBody: i,
      tenantId: o,
      error: s,
      type: l,
    } = t;
    if (s) {
      this.reject(s);
      return;
    }
    const a = {
      auth: this.auth,
      requestUri: n,
      sessionId: r,
      tenantId: o || void 0,
      postBody: i || void 0,
      user: this.user,
      bypassAuthState: this.bypassAuthState,
    };
    try {
      this.resolve(await this.getIdpTask(l)(a));
    } catch (u) {
      this.reject(u);
    }
  }
  onError(t) {
    this.reject(t);
  }
  getIdpTask(t) {
    switch (t) {
      case "signInViaPopup":
      case "signInViaRedirect":
        return u1;
      case "linkViaPopup":
      case "linkViaRedirect":
        return d1;
      case "reauthViaPopup":
      case "reauthViaRedirect":
        return c1;
      default:
        Ke(this.auth, "internal-error");
    }
  }
  resolve(t) {
    st(this.pendingPromise, "Pending promise was never set"),
      this.pendingPromise.resolve(t),
      this.unregisterAndCleanUp();
  }
  reject(t) {
    st(this.pendingPromise, "Pending promise was never set"),
      this.pendingPromise.reject(t),
      this.unregisterAndCleanUp();
  }
  unregisterAndCleanUp() {
    this.eventManager && this.eventManager.unregisterConsumer(this),
      (this.pendingPromise = null),
      this.cleanUp();
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const f1 = new Gr(2e3, 1e4);
async function h1(e, t, n) {
  const r = Do(e);
  ly(e, t, Pa);
  const i = Mh(r, n);
  return new Qt(r, "signInViaPopup", t, i).executeNotNull();
}
class Qt extends jh {
  constructor(t, n, r, i, o) {
    super(t, n, i, o),
      (this.provider = r),
      (this.authWindow = null),
      (this.pollId = null),
      Qt.currentPopupAction && Qt.currentPopupAction.cancel(),
      (Qt.currentPopupAction = this);
  }
  async executeNotNull() {
    const t = await this.execute();
    return R(t, this.auth, "internal-error"), t;
  }
  async onExecution() {
    st(this.filter.length === 1, "Popup operations only handle one event");
    const t = Ra();
    (this.authWindow = await this.resolver._openPopup(
      this.auth,
      this.provider,
      this.filter[0],
      t
    )),
      (this.authWindow.associatedEvent = t),
      this.resolver._originValidation(this.auth).catch((n) => {
        this.reject(n);
      }),
      this.resolver._isIframeWebStorageSupported(this.auth, (n) => {
        n || this.reject(Ve(this.auth, "web-storage-unsupported"));
      }),
      this.pollUserCancellation();
  }
  get eventId() {
    var t;
    return (
      ((t = this.authWindow) === null || t === void 0
        ? void 0
        : t.associatedEvent) || null
    );
  }
  cancel() {
    this.reject(Ve(this.auth, "cancelled-popup-request"));
  }
  cleanUp() {
    this.authWindow && this.authWindow.close(),
      this.pollId && window.clearTimeout(this.pollId),
      (this.authWindow = null),
      (this.pollId = null),
      (Qt.currentPopupAction = null);
  }
  pollUserCancellation() {
    const t = () => {
      var n, r;
      if (
        !(
          (r =
            (n = this.authWindow) === null || n === void 0
              ? void 0
              : n.window) === null || r === void 0
        ) &&
        r.closed
      ) {
        this.pollId = window.setTimeout(() => {
          (this.pollId = null),
            this.reject(Ve(this.auth, "popup-closed-by-user"));
        }, 8e3);
        return;
      }
      this.pollId = window.setTimeout(t, f1.get());
    };
    t();
  }
}
Qt.currentPopupAction = null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const p1 = "pendingRedirect",
  Li = new Map();
class m1 extends jh {
  constructor(t, n, r = !1) {
    super(
      t,
      ["signInViaRedirect", "linkViaRedirect", "reauthViaRedirect", "unknown"],
      n,
      void 0,
      r
    ),
      (this.eventId = null);
  }
  async execute() {
    let t = Li.get(this.auth._key());
    if (!t) {
      try {
        const r = (await g1(this.resolver, this.auth))
          ? await super.execute()
          : null;
        t = () => Promise.resolve(r);
      } catch (n) {
        t = () => Promise.reject(n);
      }
      Li.set(this.auth._key(), t);
    }
    return (
      this.bypassAuthState ||
        Li.set(this.auth._key(), () => Promise.resolve(null)),
      t()
    );
  }
  async onAuthEvent(t) {
    if (t.type === "signInViaRedirect") return super.onAuthEvent(t);
    if (t.type === "unknown") {
      this.resolve(null);
      return;
    }
    if (t.eventId) {
      const n = await this.auth._redirectUserForId(t.eventId);
      if (n) return (this.user = n), super.onAuthEvent(t);
      this.resolve(null);
    }
  }
  async onExecution() {}
  cleanUp() {}
}
async function g1(e, t) {
  const n = w1(t),
    r = y1(e);
  if (!(await r._isAvailable())) return !1;
  const i = (await r._get(n)) === "true";
  return await r._remove(n), i;
}
function v1(e, t) {
  Li.set(e._key(), t);
}
function y1(e) {
  return Ze(e._redirectPersistence);
}
function w1(e) {
  return Oi(p1, e.config.apiKey, e.name);
}
async function _1(e, t, n = !1) {
  const r = Do(e),
    i = Mh(r, t),
    s = await new m1(r, i, n).execute();
  return (
    s &&
      !n &&
      (delete s.user._redirectEventId,
      await r._persistUserIfCurrent(s.user),
      await r._setRedirectUser(null, t)),
    s
  );
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const S1 = 10 * 60 * 1e3;
class E1 {
  constructor(t) {
    (this.auth = t),
      (this.cachedEventUids = new Set()),
      (this.consumers = new Set()),
      (this.queuedRedirectEvent = null),
      (this.hasHandledPotentialRedirect = !1),
      (this.lastProcessedEventTime = Date.now());
  }
  registerConsumer(t) {
    this.consumers.add(t),
      this.queuedRedirectEvent &&
        this.isEventForConsumer(this.queuedRedirectEvent, t) &&
        (this.sendToConsumer(this.queuedRedirectEvent, t),
        this.saveEventToCache(this.queuedRedirectEvent),
        (this.queuedRedirectEvent = null));
  }
  unregisterConsumer(t) {
    this.consumers.delete(t);
  }
  onEvent(t) {
    if (this.hasEventBeenHandled(t)) return !1;
    let n = !1;
    return (
      this.consumers.forEach((r) => {
        this.isEventForConsumer(t, r) &&
          ((n = !0), this.sendToConsumer(t, r), this.saveEventToCache(t));
      }),
      this.hasHandledPotentialRedirect ||
        !k1(t) ||
        ((this.hasHandledPotentialRedirect = !0),
        n || ((this.queuedRedirectEvent = t), (n = !0))),
      n
    );
  }
  sendToConsumer(t, n) {
    var r;
    if (t.error && !Uh(t)) {
      const i =
        ((r = t.error.code) === null || r === void 0
          ? void 0
          : r.split("auth/")[1]) || "internal-error";
      n.onError(Ve(this.auth, i));
    } else n.onAuthEvent(t);
  }
  isEventForConsumer(t, n) {
    const r = n.eventId === null || (!!t.eventId && t.eventId === n.eventId);
    return n.filter.includes(t.type) && r;
  }
  hasEventBeenHandled(t) {
    return (
      Date.now() - this.lastProcessedEventTime >= S1 &&
        this.cachedEventUids.clear(),
      this.cachedEventUids.has(hc(t))
    );
  }
  saveEventToCache(t) {
    this.cachedEventUids.add(hc(t)), (this.lastProcessedEventTime = Date.now());
  }
}
function hc(e) {
  return [e.type, e.eventId, e.sessionId, e.tenantId]
    .filter((t) => t)
    .join("-");
}
function Uh({ type: e, error: t }) {
  return (
    e === "unknown" && (t == null ? void 0 : t.code) === "auth/no-auth-event"
  );
}
function k1(e) {
  switch (e.type) {
    case "signInViaRedirect":
    case "linkViaRedirect":
    case "reauthViaRedirect":
      return !0;
    case "unknown":
      return Uh(e);
    default:
      return !1;
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function C1(e, t = {}) {
  return Qr(e, "GET", "/v1/projects", t);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const I1 = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,
  x1 = /^https?/;
async function T1(e) {
  if (e.config.emulator) return;
  const { authorizedDomains: t } = await C1(e);
  for (const n of t)
    try {
      if (N1(n)) return;
    } catch {}
  Ke(e, "unauthorized-domain");
}
function N1(e) {
  const t = El(),
    { protocol: n, hostname: r } = new URL(t);
  if (e.startsWith("chrome-extension://")) {
    const s = new URL(e);
    return s.hostname === "" && r === ""
      ? n === "chrome-extension:" &&
          e.replace("chrome-extension://", "") ===
            t.replace("chrome-extension://", "")
      : n === "chrome-extension:" && s.hostname === r;
  }
  if (!x1.test(n)) return !1;
  if (I1.test(e)) return r === e;
  const i = e.replace(/\./g, "\\.");
  return new RegExp("^(.+\\." + i + "|" + i + ")$", "i").test(r);
}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const P1 = new Gr(3e4, 6e4);
function pc() {
  const e = We().___jsl;
  if (e != null && e.H) {
    for (const t of Object.keys(e.H))
      if (
        ((e.H[t].r = e.H[t].r || []),
        (e.H[t].L = e.H[t].L || []),
        (e.H[t].r = [...e.H[t].L]),
        e.CP)
      )
        for (let n = 0; n < e.CP.length; n++) e.CP[n] = null;
  }
}
function R1(e) {
  return new Promise((t, n) => {
    var r, i, o;
    function s() {
      pc(),
        gapi.load("gapi.iframes", {
          callback: () => {
            t(gapi.iframes.getContext());
          },
          ontimeout: () => {
            pc(), n(Ve(e, "network-request-failed"));
          },
          timeout: P1.get(),
        });
    }
    if (
      !(
        (i = (r = We().gapi) === null || r === void 0 ? void 0 : r.iframes) ===
          null || i === void 0
      ) &&
      i.Iframe
    )
      t(gapi.iframes.getContext());
    else if (!((o = We().gapi) === null || o === void 0) && o.load) s();
    else {
      const l = My("iframefcb");
      return (
        (We()[l] = () => {
          gapi.load ? s() : n(Ve(e, "network-request-failed"));
        }),
        Dy(`https://apis.google.com/js/api.js?onload=${l}`).catch((a) => n(a))
      );
    }
  }).catch((t) => {
    throw ((Ai = null), t);
  });
}
let Ai = null;
function O1(e) {
  return (Ai = Ai || R1(e)), Ai;
}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const L1 = new Gr(5e3, 15e3),
  A1 = "__/auth/iframe",
  D1 = "emulator/auth/iframe",
  M1 = {
    style: { position: "absolute", top: "-100px", width: "1px", height: "1px" },
    "aria-hidden": "true",
    tabindex: "-1",
  },
  j1 = new Map([
    ["identitytoolkit.googleapis.com", "p"],
    ["staging-identitytoolkit.sandbox.googleapis.com", "s"],
    ["test-identitytoolkit.sandbox.googleapis.com", "t"],
  ]);
function U1(e) {
  const t = e.config;
  R(t.authDomain, e, "auth-domain-config-required");
  const n = t.emulator ? xa(t, D1) : `https://${e.config.authDomain}/${A1}`,
    r = { apiKey: t.apiKey, appName: e.name, v: Kr },
    i = j1.get(e.config.apiHost);
  i && (r.eid = i);
  const o = e._getFrameworks();
  return o.length && (r.fw = o.join(",")), `${n}?${Wr(r).slice(1)}`;
}
async function z1(e) {
  const t = await O1(e),
    n = We().gapi;
  return (
    R(n, e, "internal-error"),
    t.open(
      {
        where: document.body,
        url: U1(e),
        messageHandlersFilter: n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,
        attributes: M1,
        dontclear: !0,
      },
      (r) =>
        new Promise(async (i, o) => {
          await r.restyle({ setHideOnLeave: !1 });
          const s = Ve(e, "network-request-failed"),
            l = We().setTimeout(() => {
              o(s);
            }, L1.get());
          function a() {
            We().clearTimeout(l), i(r);
          }
          r.ping(a).then(a, () => {
            o(s);
          });
        })
    )
  );
}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const F1 = {
    location: "yes",
    resizable: "yes",
    statusbar: "yes",
    toolbar: "no",
  },
  B1 = 500,
  b1 = 600,
  $1 = "_blank",
  H1 = "http://localhost";
class mc {
  constructor(t) {
    (this.window = t), (this.associatedEvent = null);
  }
  close() {
    if (this.window)
      try {
        this.window.close();
      } catch {}
  }
}
function V1(e, t, n, r = B1, i = b1) {
  const o = Math.max((window.screen.availHeight - i) / 2, 0).toString(),
    s = Math.max((window.screen.availWidth - r) / 2, 0).toString();
  let l = "";
  const a = Object.assign(Object.assign({}, F1), {
      width: r.toString(),
      height: i.toString(),
      top: o,
      left: s,
    }),
    u = ue().toLowerCase();
  n && (l = vh(u) ? $1 : n), gh(u) && ((t = t || H1), (a.scrollbars = "yes"));
  const f = Object.entries(a).reduce((m, [y, w]) => `${m}${y}=${w},`, "");
  if (Iy(u) && l !== "_self") return W1(t || "", l), new mc(null);
  const p = window.open(t || "", l, f);
  R(p, e, "popup-blocked");
  try {
    p.focus();
  } catch {}
  return new mc(p);
}
function W1(e, t) {
  const n = document.createElement("a");
  (n.href = e), (n.target = t);
  const r = document.createEvent("MouseEvent");
  r.initMouseEvent(
    "click",
    !0,
    !0,
    window,
    1,
    0,
    0,
    0,
    0,
    !1,
    !1,
    !1,
    !1,
    1,
    null
  ),
    n.dispatchEvent(r);
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const K1 = "__/auth/handler",
  G1 = "emulator/auth/handler",
  Q1 = encodeURIComponent("fac");
async function gc(e, t, n, r, i, o) {
  R(e.config.authDomain, e, "auth-domain-config-required"),
    R(e.config.apiKey, e, "invalid-api-key");
  const s = {
    apiKey: e.config.apiKey,
    appName: e.name,
    authType: n,
    redirectUrl: r,
    v: Kr,
    eventId: i,
  };
  if (t instanceof Pa) {
    t.setDefaultLanguage(e.languageCode),
      (s.providerId = t.providerId || ""),
      Yv(t.getCustomParameters()) ||
        (s.customParameters = JSON.stringify(t.getCustomParameters()));
    for (const [f, p] of Object.entries(o || {})) s[f] = p;
  }
  if (t instanceof Yr) {
    const f = t.getScopes().filter((p) => p !== "");
    f.length > 0 && (s.scopes = f.join(","));
  }
  e.tenantId && (s.tid = e.tenantId);
  const l = s;
  for (const f of Object.keys(l)) l[f] === void 0 && delete l[f];
  const a = await e._getAppCheckToken(),
    u = a ? `#${Q1}=${encodeURIComponent(a)}` : "";
  return `${Y1(e)}?${Wr(l).slice(1)}${u}`;
}
function Y1({ config: e }) {
  return e.emulator ? xa(e, G1) : `https://${e.authDomain}/${K1}`;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const _s = "webStorageSupport";
class J1 {
  constructor() {
    (this.eventManagers = {}),
      (this.iframes = {}),
      (this.originValidationPromises = {}),
      (this._redirectPersistence = Rh),
      (this._completeRedirectFn = _1),
      (this._overrideRedirectResult = v1);
  }
  async _openPopup(t, n, r, i) {
    var o;
    st(
      (o = this.eventManagers[t._key()]) === null || o === void 0
        ? void 0
        : o.manager,
      "_initialize() not called before _openPopup()"
    );
    const s = await gc(t, n, r, El(), i);
    return V1(t, s, Ra());
  }
  async _openRedirect(t, n, r, i) {
    await this._originValidation(t);
    const o = await gc(t, n, r, El(), i);
    return Zy(o), new Promise(() => {});
  }
  _initialize(t) {
    const n = t._key();
    if (this.eventManagers[n]) {
      const { manager: i, promise: o } = this.eventManagers[n];
      return i
        ? Promise.resolve(i)
        : (st(o, "If manager is not set, promise should be"), o);
    }
    const r = this.initAndGetManager(t);
    return (
      (this.eventManagers[n] = { promise: r }),
      r.catch(() => {
        delete this.eventManagers[n];
      }),
      r
    );
  }
  async initAndGetManager(t) {
    const n = await z1(t),
      r = new E1(t);
    return (
      n.register(
        "authEvent",
        (i) => (
          R(i == null ? void 0 : i.authEvent, t, "invalid-auth-event"),
          { status: r.onEvent(i.authEvent) ? "ACK" : "ERROR" }
        ),
        gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER
      ),
      (this.eventManagers[t._key()] = { manager: r }),
      (this.iframes[t._key()] = n),
      r
    );
  }
  _isIframeWebStorageSupported(t, n) {
    this.iframes[t._key()].send(
      _s,
      { type: _s },
      (i) => {
        var o;
        const s =
          (o = i == null ? void 0 : i[0]) === null || o === void 0
            ? void 0
            : o[_s];
        s !== void 0 && n(!!s), Ke(t, "internal-error");
      },
      gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER
    );
  }
  _originValidation(t) {
    const n = t._key();
    return (
      this.originValidationPromises[n] ||
        (this.originValidationPromises[n] = T1(t)),
      this.originValidationPromises[n]
    );
  }
  get _shouldInitProactively() {
    return Eh() || Na() || Ao();
  }
}
const X1 = J1;
var vc = "@firebase/auth",
  yc = "1.3.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class q1 {
  constructor(t) {
    (this.auth = t), (this.internalListeners = new Map());
  }
  getUid() {
    var t;
    return (
      this.assertAuthConfigured(),
      ((t = this.auth.currentUser) === null || t === void 0 ? void 0 : t.uid) ||
        null
    );
  }
  async getToken(t) {
    return (
      this.assertAuthConfigured(),
      await this.auth._initializationPromise,
      this.auth.currentUser
        ? { accessToken: await this.auth.currentUser.getIdToken(t) }
        : null
    );
  }
  addAuthTokenListener(t) {
    if ((this.assertAuthConfigured(), this.internalListeners.has(t))) return;
    const n = this.auth.onIdTokenChanged((r) => {
      t((r == null ? void 0 : r.stsTokenManager.accessToken) || null);
    });
    this.internalListeners.set(t, n), this.updateProactiveRefresh();
  }
  removeAuthTokenListener(t) {
    this.assertAuthConfigured();
    const n = this.internalListeners.get(t);
    n && (this.internalListeners.delete(t), n(), this.updateProactiveRefresh());
  }
  assertAuthConfigured() {
    R(
      this.auth._initializationPromise,
      "dependent-sdk-initialized-before-auth"
    );
  }
  updateProactiveRefresh() {
    this.internalListeners.size > 0
      ? this.auth._startProactiveRefresh()
      : this.auth._stopProactiveRefresh();
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Z1(e) {
  switch (e) {
    case "Node":
      return "node";
    case "ReactNative":
      return "rn";
    case "Worker":
      return "webworker";
    case "Cordova":
      return "cordova";
    default:
      return;
  }
}
function ew(e) {
  Ar(
    new Un(
      "auth",
      (t, { options: n }) => {
        const r = t.getProvider("app").getImmediate(),
          i = t.getProvider("heartbeat"),
          o = t.getProvider("app-check-internal"),
          { apiKey: s, authDomain: l } = r.options;
        R(s && !s.includes(":"), "invalid-api-key", { appName: r.name });
        const a = {
            apiKey: s,
            authDomain: l,
            clientPlatform: e,
            apiHost: "identitytoolkit.googleapis.com",
            tokenApiHost: "securetoken.googleapis.com",
            apiScheme: "https",
            sdkClientVersion: kh(e),
          },
          u = new Ly(r, i, o, a);
        return Uy(u, n), u;
      },
      "PUBLIC"
    )
      .setInstantiationMode("EXPLICIT")
      .setInstanceCreatedCallback((t, n, r) => {
        t.getProvider("auth-internal").initialize();
      })
  ),
    Ar(
      new Un(
        "auth-internal",
        (t) => {
          const n = Do(t.getProvider("auth").getImmediate());
          return ((r) => new q1(r))(n);
        },
        "PRIVATE"
      ).setInstantiationMode("EXPLICIT")
    ),
    Tn(vc, yc, Z1(e)),
    Tn(vc, yc, "esm2017");
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const tw = 5 * 60,
  nw = Zf("authIdTokenMaxAge") || tw;
let wc = null;
const rw = (e) => async (t) => {
  const n = t && (await t.getIdTokenResult()),
    r = n && (new Date().getTime() - Date.parse(n.issuedAtTime)) / 1e3;
  if (r && r > nw) return;
  const i = n == null ? void 0 : n.token;
  wc !== i &&
    ((wc = i),
    await fetch(e, {
      method: i ? "POST" : "DELETE",
      headers: i ? { Authorization: `Bearer ${i}` } : {},
    }));
};
function iw(e = Y0()) {
  const t = rh(e, "auth");
  if (t.isInitialized()) return t.getImmediate();
  const n = jy(e, { popupRedirectResolver: X1, persistence: [a1, Jy, Rh] }),
    r = Zf("authTokenSyncURL");
  if (r) {
    const o = rw(r);
    Ky(n, o, () => o(n.currentUser)), Wy(n, (s) => o(s));
  }
  const i = zv("auth");
  return i && zy(n, `http://${i}`), n;
}
ew("Browser");
var ow = "firebase",
  sw = "10.4.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ Tn(ow, sw, "app");
const lw = {
    apiKey: "AIzaSyBENNkfiQq53ocJsN8SxB2EVoIqsIEwOaU",
    authDomain: "notes-app-91d86.firebaseapp.com",
    projectId: "notes-app-91d86",
    storageBucket: "notes-app-91d86.appspot.com",
    messagingSenderId: "1008462561660",
    appId: "1:1008462561660:web:c199345b172c89b217e4f9",
  },
  aw = ih(lw),
  zh = () => {
    const e = Hr(),
      t = async () => {
        try {
          const n = new Ye(),
            r = iw(aw),
            i = await h1(r, n),
            o = await fetch("http://localhost:4000/google", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                name: i.user.displayName,
                email: i.user.email,
              }),
            })
              .then((s) => s.json())
              .then((s) => e("/notes/" + s._id));
        } catch (n) {
          console.log(n);
        }
      };
    return g.jsxs("button", {
      type: "button",
      className:
        "rounded bg-purple-500 p-2 flex justify-center hover:bg-purple-400 duration-500 text-xl w-72 ",
      onClick: t,
      children: ["Continue with ", g.jsx(Rv, { className: "ml-2 mt-1" })],
    });
  },
  uw = () => {
    const [e, t] = S.useState(""),
      [n, r] = S.useState(""),
      i = Hr(),
      o = (a) => {
        t(a.target.value);
      },
      s = (a) => {
        r(a.target.value);
      },
      l = (a) => {
        fetch("http://localhost:4000/SignIn", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: e, password: n }),
        })
          .then(async (u) => u.json())
          .then(async (u) => {
            i("/notes/" + u._id);
          }),
          a.preventDefault();
      };
    return g.jsxs("div", {
      className: "flex justify-center items-center h-[100vh]",
      children: [
        g.jsxs("form", {
          action: "",
          method: "post",
          className:
            "grid grid-flow-row bg-purple-600 w-96 rounded-md xl:scale-125 2xl:scale-150",
          children: [
            g.jsxs("h1", {
              className: "text-2xl text-center font-medium mt-6  mb-4",
              children: ["Sign In", " "],
            }),
            g.jsxs("div", {
              className: "flex justify-center  mb-4",
              children: [
                g.jsx("h3", { children: "Don't have an Account?" }),
                g.jsx(Kf, {
                  to: "/SignUp",
                  className: "text-purple-950 ml-2 underline",
                  children: "Sign Up",
                }),
              ],
            }),
            g.jsx("input", {
              type: "email",
              placeholder: "Email",
              className: " mx-4 my-2.5 p-3 rounded-sm",
              onChange: o,
            }),
            g.jsx("input", {
              type: "password",
              placeholder: "Password",
              className: "mx-4 my-2.5 p-3 rounded-sm",
              onChange: s,
            }),
            g.jsx("a", {
              href: "#",
              className:
                "flex justify-end mr-5 text-lg text-purple-950 mb-3 underline",
              children: "Need help?",
            }),
            g.jsx("div", {
              className: "flex justify-center mb-2",
              children: g.jsx("button", {
                className:
                  " rounded bg-purple-500 p-2 hover:bg-purple-400 duration-500 text-xl w-72 ",
                onClick: l,
                children: "Sign In",
              }),
            }),
            g.jsx("div", {
              className: "flex justify-center mb-2",
              children: g.jsx("h3", { children: "OR" }),
            }),
            g.jsx("div", {
              className: "flex justify-center mb-5",
              children: g.jsx(zh, {}),
            }),
          ],
        }),
        g.jsx(iv, {}),
      ],
    });
  },
  cw = () => {
    const [e, t] = S.useState({
        userName: "",
        email: "",
        password: "",
        confirmPassword: "",
      }),
      [n, r] = S.useState({});
    S.useState(!1), S.useState(!1);
    const i = Hr(),
      o = (l) => {
        const { name: a, value: u } = l.target;
        console.log(a), t({ ...e, [a]: u }), console.log(e);
      };
    S.useEffect(() => {
      n.username === "valid" &&
        n.password === "valid" &&
        n.email === "valid" &&
        n.confirmPassword === "valid" &&
        fetch("http://localhost:4000/SignUps", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: e.userName,
            email: e.email,
            password: e.password,
          }),
        })
          .then(async (l) => l.json())
          .then(async (l) => {
            console.log(l.id), i("/notes/" + l.id);
          });
    }, [n]);
    const s = async (l) => {
      l.preventDefault();
      const a = {},
        u =
          /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
      e.userName
        ? (a.username = "valid")
        : (a.username = "Username is required!"),
        e.email
          ? u.test(e.email)
            ? (a.email = "valid")
            : (a.email = "This is not a valid email format!")
          : (a.email = "Email is required!"),
        e.password
          ? e.password < 4
            ? (a.password = "Password must be more than 4 characters")
            : e.password > 16
            ? (a.password = "Password cannot be more than 16 characters")
            : (a.password = "valid")
          : (a.password = "Password is required!"),
        e.confirmPassword
          ? e.password !== e.confirmPassword
            ? (a.confirmPassword = "Passwords doesn't match! ")
            : (a.confirmPassword = "valid")
          : (a.confirmPassword = "Password is required!"),
        r(a);
    };
    return g.jsx("div", {
      className: "flex justify-center items-center h-[100vh]",
      children: g.jsxs("form", {
        action: "",
        method: "post",
        className:
          "grid grid-flow-row bg-purple-600 w-96 rounded-md xl:scale-110 2xl:scale-125  ",
        children: [
          g.jsxs("h1", {
            className: "text-2xl text-center font-medium mt-6  mb-4",
            children: ["Create new Account", " "],
          }),
          g.jsxs("div", {
            className: "flex justify-center mb-4",
            children: [
              g.jsx("h3", { children: "Already have an Account?" }),
              g.jsx(Kf, {
                to: "/",
                className:
                  "text-purple-950 ml-2 underline hover:text-purple-900",
                children: "Sign In",
              }),
            ],
          }),
          g.jsx("input", {
            type: "text",
            name: "userName",
            placeholder: "Username",
            value: e.userName,
            className: " mx-4 my-2.5 p-3 rounded-sm",
            onChange: o,
          }),
          g.jsx("div", {
            className: "flex justify-start pl-5 ",
            children: g.jsx("span", { children: n.username }),
          }),
          g.jsx("input", {
            type: "email",
            name: "email",
            placeholder: "Email",
            value: e.email,
            className: " mx-4 my-2.5 p-3 rounded-sm",
            onChange: o,
          }),
          g.jsx("div", {
            className: "flex justify-start pl-5 ",
            children: g.jsx("span", { children: n.email }),
          }),
          g.jsx("input", {
            type: "password",
            name: "password",
            placeholder: "Password",
            value: e.password,
            className: "mx-4 my-2.5 p-3 rounded-sm",
            onChange: o,
          }),
          g.jsx("div", {
            className: "flex justify-start pl-5",
            children: g.jsx("span", { children: n.password }),
          }),
          g.jsx("input", {
            type: "password",
            name: "confirmPassword",
            placeholder: "Confirm password",
            value: e.confirmPassword,
            className: "mx-4 p-3 my-2.5 rounded-sm",
            onChange: o,
          }),
          g.jsx("div", {
            className: "flex justify-start pl-5",
            children: g.jsx("span", { children: n.confirmPassword }),
          }),
          g.jsx("a", {
            href: "#",
            className:
              "flex justify-end mr-5 text-lg text-purple-950 mb-3 underline hover:text-purple-900",
            children: "Need help?",
          }),
          g.jsx("div", {
            className: "flex justify-center mb-2",
            children: g.jsx("button", {
              className:
                " rounded bg-purple-500 p-2 hover:bg-purple-400 duration-500 text-xl w-72 ",
              onClick: s,
              children: "Create Account",
            }),
          }),
          g.jsx("div", {
            className: "flex justify-center mb-2",
            children: g.jsx("h3", { children: "OR" }),
          }),
          g.jsx("div", {
            className: "flex justify-center mb-5",
            children: g.jsx(zh, {}),
          }),
        ],
      }),
    });
  };
function dw() {
  return g.jsx(g.Fragment, {
    children: g.jsx("div", {
      className: "w-full ",
      children: g.jsx(fv, {
        children: g.jsxs(sv, {
          children: [
            g.jsx(Pi, { path: "/", element: g.jsx(uw, {}) }),
            g.jsx(Pi, { path: "/SignUp", element: g.jsx(cw, {}) }),
            g.jsx(Pi, { path: "/notes/:id", element: g.jsx(Pv, {}) }),
          ],
        }),
      }),
    }),
  });
}
Ss.createRoot(document.getElementById("root")).render(
  g.jsx(et.StrictMode, { children: g.jsx(dw, {}) })
);
