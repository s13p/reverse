(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
    new MutationObserver(i => {
        for (const s of i)
            if (s.type === "childList")
                for (const o of s.addedNodes) o.tagName === "LINK" && o.rel === "modulepreload" && r(o)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function n(i) {
        const s = {};
        return i.integrity && (s.integrity = i.integrity), i.referrerPolicy && (s.referrerPolicy = i.referrerPolicy), i.crossOrigin === "use-credentials" ? s.credentials = "include" : i.crossOrigin === "anonymous" ? s.credentials = "omit" : s.credentials = "same-origin", s
    }

    function r(i) {
        if (i.ep) return;
        i.ep = !0;
        const s = n(i);
        fetch(i.href, s)
    }
})();

function zf(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var Bf = {
        exports: {}
    },
    Vs = {},
    Uf = {
        exports: {}
    },
    R = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var si = Symbol.for("react.element"),
    Vm = Symbol.for("react.portal"),
    Mm = Symbol.for("react.fragment"),
    Dm = Symbol.for("react.strict_mode"),
    Om = Symbol.for("react.profiler"),
    Rm = Symbol.for("react.provider"),
    Im = Symbol.for("react.context"),
    Fm = Symbol.for("react.forward_ref"),
    zm = Symbol.for("react.suspense"),
    Bm = Symbol.for("react.memo"),
    Um = Symbol.for("react.lazy"),
    mu = Symbol.iterator;

function $m(e) {
    return e === null || typeof e != "object" ? null : (e = mu && e[mu] || e["@@iterator"], typeof e == "function" ? e : null)
}
var $f = {
        isMounted: function() {
            return !1
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
    },
    Wf = Object.assign,
    Hf = {};

function ir(e, t, n) {
    this.props = e, this.context = t, this.refs = Hf, this.updater = n || $f
}
ir.prototype.isReactComponent = {};
ir.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
};
ir.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
};

function Yf() {}
Yf.prototype = ir.prototype;

function Jl(e, t, n) {
    this.props = e, this.context = t, this.refs = Hf, this.updater = n || $f
}
var ql = Jl.prototype = new Yf;
ql.constructor = Jl;
Wf(ql, ir.prototype);
ql.isPureReactComponent = !0;
var gu = Array.isArray,
    Xf = Object.prototype.hasOwnProperty,
    ea = {
        current: null
    },
    Qf = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };

function Kf(e, t, n) {
    var r, i = {},
        s = null,
        o = null;
    if (t != null)
        for (r in t.ref !== void 0 && (o = t.ref), t.key !== void 0 && (s = "" + t.key), t) Xf.call(t, r) && !Qf.hasOwnProperty(r) && (i[r] = t[r]);
    var l = arguments.length - 2;
    if (l === 1) i.children = n;
    else if (1 < l) {
        for (var a = Array(l), u = 0; u < l; u++) a[u] = arguments[u + 2];
        i.children = a
    }
    if (e && e.defaultProps)
        for (r in l = e.defaultProps, l) i[r] === void 0 && (i[r] = l[r]);
    return {
        $$typeof: si,
        type: e,
        key: s,
        ref: o,
        props: i,
        _owner: ea.current
    }
}

function Wm(e, t) {
    return {
        $$typeof: si,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}

function ta(e) {
    return typeof e == "object" && e !== null && e.$$typeof === si
}

function Hm(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(n) {
        return t[n]
    })
}
var vu = /\/+/g;

function ro(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? Hm("" + e.key) : t.toString(36)
}

function Ii(e, t, n, r, i) {
    var s = typeof e;
    (s === "undefined" || s === "boolean") && (e = null);
    var o = !1;
    if (e === null) o = !0;
    else switch (s) {
        case "string":
        case "number":
            o = !0;
            break;
        case "object":
            switch (e.$$typeof) {
                case si:
                case Vm:
                    o = !0
            }
    }
    if (o) return o = e, i = i(o), e = r === "" ? "." + ro(o, 0) : r, gu(i) ? (n = "", e != null && (n = e.replace(vu, "$&/") + "/"), Ii(i, t, n, "", function(u) {
        return u
    })) : i != null && (ta(i) && (i = Wm(i, n + (!i.key || o && o.key === i.key ? "" : ("" + i.key).replace(vu, "$&/") + "/") + e)), t.push(i)), 1;
    if (o = 0, r = r === "" ? "." : r + ":", gu(e))
        for (var l = 0; l < e.length; l++) {
            s = e[l];
            var a = r + ro(s, l);
            o += Ii(s, t, n, a, i)
        } else if (a = $m(e), typeof a == "function")
            for (e = a.call(e), l = 0; !(s = e.next()).done;) s = s.value, a = r + ro(s, l++), o += Ii(s, t, n, a, i);
        else if (s === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return o
}

function mi(e, t, n) {
    if (e == null) return e;
    var r = [],
        i = 0;
    return Ii(e, r, "", "", function(s) {
        return t.call(n, s, i++)
    }), r
}

function Ym(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(), t.then(function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n)
        }, function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n)
        }), e._status === -1 && (e._status = 0, e._result = t)
    }
    if (e._status === 1) return e._result.default;
    throw e._result
}
var Se = {
        current: null
    },
    Fi = {
        transition: null
    },
    Xm = {
        ReactCurrentDispatcher: Se,
        ReactCurrentBatchConfig: Fi,
        ReactCurrentOwner: ea
    };
R.Children = {
    map: mi,
    forEach: function(e, t, n) {
        mi(e, function() {
            t.apply(this, arguments)
        }, n)
    },
    count: function(e) {
        var t = 0;
        return mi(e, function() {
            t++
        }), t
    },
    toArray: function(e) {
        return mi(e, function(t) {
            return t
        }) || []
    },
    only: function(e) {
        if (!ta(e)) throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
R.Component = ir;
R.Fragment = Mm;
R.Profiler = Om;
R.PureComponent = Jl;
R.StrictMode = Dm;
R.Suspense = zm;
R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Xm;
R.cloneElement = function(e, t, n) {
    if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = Wf({}, e.props),
        i = e.key,
        s = e.ref,
        o = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (s = t.ref, o = ea.current), t.key !== void 0 && (i = "" + t.key), e.type && e.type.defaultProps) var l = e.type.defaultProps;
        for (a in t) Xf.call(t, a) && !Qf.hasOwnProperty(a) && (r[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a])
    }
    var a = arguments.length - 2;
    if (a === 1) r.children = n;
    else if (1 < a) {
        l = Array(a);
        for (var u = 0; u < a; u++) l[u] = arguments[u + 2];
        r.children = l
    }
    return {
        $$typeof: si,
        type: e.type,
        key: i,
        ref: s,
        props: r,
        _owner: o
    }
};
R.createContext = function(e) {
    return e = {
        $$typeof: Im,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    }, e.Provider = {
        $$typeof: Rm,
        _context: e
    }, e.Consumer = e
};
R.createElement = Kf;
R.createFactory = function(e) {
    var t = Kf.bind(null, e);
    return t.type = e, t
};
R.createRef = function() {
    return {
        current: null
    }
};
R.forwardRef = function(e) {
    return {
        $$typeof: Fm,
        render: e
    }
};
R.isValidElement = ta;
R.lazy = function(e) {
    return {
        $$typeof: Um,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: Ym
    }
};
R.memo = function(e, t) {
    return {
        $$typeof: Bm,
        type: e,
        compare: t === void 0 ? null : t
    }
};
R.startTransition = function(e) {
    var t = Fi.transition;
    Fi.transition = {};
    try {
        e()
    } finally {
        Fi.transition = t
    }
};
R.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.")
};
R.useCallback = function(e, t) {
    return Se.current.useCallback(e, t)
};
R.useContext = function(e) {
    return Se.current.useContext(e)
};
R.useDebugValue = function() {};
R.useDeferredValue = function(e) {
    return Se.current.useDeferredValue(e)
};
R.useEffect = function(e, t) {
    return Se.current.useEffect(e, t)
};
R.useId = function() {
    return Se.current.useId()
};
R.useImperativeHandle = function(e, t, n) {
    return Se.current.useImperativeHandle(e, t, n)
};
R.useInsertionEffect = function(e, t) {
    return Se.current.useInsertionEffect(e, t)
};
R.useLayoutEffect = function(e, t) {
    return Se.current.useLayoutEffect(e, t)
};
R.useMemo = function(e, t) {
    return Se.current.useMemo(e, t)
};
R.useReducer = function(e, t, n) {
    return Se.current.useReducer(e, t, n)
};
R.useRef = function(e) {
    return Se.current.useRef(e)
};
R.useState = function(e) {
    return Se.current.useState(e)
};
R.useSyncExternalStore = function(e, t, n) {
    return Se.current.useSyncExternalStore(e, t, n)
};
R.useTransition = function() {
    return Se.current.useTransition()
};
R.version = "18.2.0";
Uf.exports = R;
var N = Uf.exports;
const Ve = zf(N);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qm = N,
    Km = Symbol.for("react.element"),
    Gm = Symbol.for("react.fragment"),
    bm = Object.prototype.hasOwnProperty,
    Zm = Qm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    Jm = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };

function Gf(e, t, n) {
    var r, i = {},
        s = null,
        o = null;
    n !== void 0 && (s = "" + n), t.key !== void 0 && (s = "" + t.key), t.ref !== void 0 && (o = t.ref);
    for (r in t) bm.call(t, r) && !Jm.hasOwnProperty(r) && (i[r] = t[r]);
    if (e && e.defaultProps)
        for (r in t = e.defaultProps, t) i[r] === void 0 && (i[r] = t[r]);
    return {
        $$typeof: Km,
        type: e,
        key: s,
        ref: o,
        props: i,
        _owner: Zm.current
    }
}
Vs.Fragment = Gm;
Vs.jsx = Gf;
Vs.jsxs = Gf;
Bf.exports = Vs;
var y = Bf.exports,
    $o = {},
    bf = {
        exports: {}
    },
    Re = {},
    Zf = {
        exports: {}
    },
    Jf = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
    function t(_, D) {
        var O = _.length;
        _.push(D);
        e: for (; 0 < O;) {
            var M = O - 1 >>> 1,
                $ = _[M];
            if (0 < i($, D)) _[M] = D, _[O] = $, O = M;
            else break e
        }
    }

    function n(_) {
        return _.length === 0 ? null : _[0]
    }

    function r(_) {
        if (_.length === 0) return null;
        var D = _[0],
            O = _.pop();
        if (O !== D) {
            _[0] = O;
            e: for (var M = 0, $ = _.length, Jt = $ >>> 1; M < Jt;) {
                var tt = 2 * (M + 1) - 1,
                    Cn = _[tt],
                    Ne = tt + 1,
                    qt = _[Ne];
                if (0 > i(Cn, O)) Ne < $ && 0 > i(qt, Cn) ? (_[M] = qt, _[Ne] = O, M = Ne) : (_[M] = Cn, _[tt] = O, M = tt);
                else if (Ne < $ && 0 > i(qt, O)) _[M] = qt, _[Ne] = O, M = Ne;
                else break e
            }
        }
        return D
    }

    function i(_, D) {
        var O = _.sortIndex - D.sortIndex;
        return O !== 0 ? O : _.id - D.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var s = performance;
        e.unstable_now = function() {
            return s.now()
        }
    } else {
        var o = Date,
            l = o.now();
        e.unstable_now = function() {
            return o.now() - l
        }
    }
    var a = [],
        u = [],
        c = 1,
        f = null,
        d = 3,
        g = !1,
        v = !1,
        x = !1,
        E = typeof setTimeout == "function" ? setTimeout : null,
        p = typeof clearTimeout == "function" ? clearTimeout : null,
        h = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);

    function m(_) {
        for (var D = n(u); D !== null;) {
            if (D.callback === null) r(u);
            else if (D.startTime <= _) r(u), D.sortIndex = D.expirationTime, t(a, D);
            else break;
            D = n(u)
        }
    }

    function w(_) {
        if (x = !1, m(_), !v)
            if (n(a) !== null) v = !0, Fe(S);
            else {
                var D = n(u);
                D !== null && et(w, D.startTime - _)
            }
    }

    function S(_, D) {
        v = !1, x && (x = !1, p(P), P = -1), g = !0;
        var O = d;
        try {
            for (m(D), f = n(a); f !== null && (!(f.expirationTime > D) || _ && !H());) {
                var M = f.callback;
                if (typeof M == "function") {
                    f.callback = null, d = f.priorityLevel;
                    var $ = M(f.expirationTime <= D);
                    D = e.unstable_now(), typeof $ == "function" ? f.callback = $ : f === n(a) && r(a), m(D)
                } else r(a);
                f = n(a)
            }
            if (f !== null) var Jt = !0;
            else {
                var tt = n(u);
                tt !== null && et(w, tt.startTime - D), Jt = !1
            }
            return Jt
        } finally {
            f = null, d = O, g = !1
        }
    }
    var T = !1,
        k = null,
        P = -1,
        L = 5,
        A = -1;

    function H() {
        return !(e.unstable_now() - A < L)
    }

    function de() {
        if (k !== null) {
            var _ = e.unstable_now();
            A = _;
            var D = !0;
            try {
                D = k(!0, _)
            } finally {
                D ? he() : (T = !1, k = null)
            }
        } else T = !1
    }
    var he;
    if (typeof h == "function") he = function() {
        h(de)
    };
    else if (typeof MessageChannel < "u") {
        var Y = new MessageChannel,
            ee = Y.port2;
        Y.port1.onmessage = de, he = function() {
            ee.postMessage(null)
        }
    } else he = function() {
        E(de, 0)
    };

    function Fe(_) {
        k = _, T || (T = !0, he())
    }

    function et(_, D) {
        P = E(function() {
            _(e.unstable_now())
        }, D)
    }
    e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(_) {
        _.callback = null
    }, e.unstable_continueExecution = function() {
        v || g || (v = !0, Fe(S))
    }, e.unstable_forceFrameRate = function(_) {
        0 > _ || 125 < _ ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : L = 0 < _ ? Math.floor(1e3 / _) : 5
    }, e.unstable_getCurrentPriorityLevel = function() {
        return d
    }, e.unstable_getFirstCallbackNode = function() {
        return n(a)
    }, e.unstable_next = function(_) {
        switch (d) {
            case 1:
            case 2:
            case 3:
                var D = 3;
                break;
            default:
                D = d
        }
        var O = d;
        d = D;
        try {
            return _()
        } finally {
            d = O
        }
    }, e.unstable_pauseExecution = function() {}, e.unstable_requestPaint = function() {}, e.unstable_runWithPriority = function(_, D) {
        switch (_) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                _ = 3
        }
        var O = d;
        d = _;
        try {
            return D()
        } finally {
            d = O
        }
    }, e.unstable_scheduleCallback = function(_, D, O) {
        var M = e.unstable_now();
        switch (typeof O == "object" && O !== null ? (O = O.delay, O = typeof O == "number" && 0 < O ? M + O : M) : O = M, _) {
            case 1:
                var $ = -1;
                break;
            case 2:
                $ = 250;
                break;
            case 5:
                $ = 1073741823;
                break;
            case 4:
                $ = 1e4;
                break;
            default:
                $ = 5e3
        }
        return $ = O + $, _ = {
            id: c++,
            callback: D,
            priorityLevel: _,
            startTime: O,
            expirationTime: $,
            sortIndex: -1
        }, O > M ? (_.sortIndex = O, t(u, _), n(a) === null && _ === n(u) && (x ? (p(P), P = -1) : x = !0, et(w, O - M))) : (_.sortIndex = $, t(a, _), v || g || (v = !0, Fe(S))), _
    }, e.unstable_shouldYield = H, e.unstable_wrapCallback = function(_) {
        var D = d;
        return function() {
            var O = d;
            d = D;
            try {
                return _.apply(this, arguments)
            } finally {
                d = O
            }
        }
    }
})(Jf);
Zf.exports = Jf;
var qm = Zf.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qf = N,
    De = qm;

function C(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var ed = new Set,
    Fr = {};

function xn(e, t) {
    Gn(e, t), Gn(e + "Capture", t)
}

function Gn(e, t) {
    for (Fr[e] = t, e = 0; e < t.length; e++) ed.add(t[e])
}
var vt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
    Wo = Object.prototype.hasOwnProperty,
    eg = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    yu = {},
    xu = {};

function tg(e) {
    return Wo.call(xu, e) ? !0 : Wo.call(yu, e) ? !1 : eg.test(e) ? xu[e] = !0 : (yu[e] = !0, !1)
}

function ng(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
        case "function":
        case "symbol":
            return !0;
        case "boolean":
            return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
        default:
            return !1
    }
}

function rg(e, t, n, r) {
    if (t === null || typeof t > "u" || ng(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null) switch (n.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
    }
    return !1
}

function Pe(e, t, n, r, i, s, o) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = i, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = o
}
var fe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    fe[e] = new Pe(e, 0, !1, e, null, !1, !1)
});
[
    ["acceptCharset", "accept-charset"],
    ["className", "class"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"]
].forEach(function(e) {
    var t = e[0];
    fe[t] = new Pe(t, 1, !1, e[1], null, !1, !1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    fe[e] = new Pe(e, 2, !1, e.toLowerCase(), null, !1, !1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    fe[e] = new Pe(e, 2, !1, e, null, !1, !1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    fe[e] = new Pe(e, 3, !1, e.toLowerCase(), null, !1, !1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    fe[e] = new Pe(e, 3, !0, e, null, !1, !1)
});
["capture", "download"].forEach(function(e) {
    fe[e] = new Pe(e, 4, !1, e, null, !1, !1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
    fe[e] = new Pe(e, 6, !1, e, null, !1, !1)
});
["rowSpan", "start"].forEach(function(e) {
    fe[e] = new Pe(e, 5, !1, e.toLowerCase(), null, !1, !1)
});
var na = /[\-:]([a-z])/g;

function ra(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(na, ra);
    fe[t] = new Pe(t, 1, !1, e, null, !1, !1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(na, ra);
    fe[t] = new Pe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(na, ra);
    fe[t] = new Pe(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    fe[e] = new Pe(e, 1, !1, e.toLowerCase(), null, !1, !1)
});
fe.xlinkHref = new Pe("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
    fe[e] = new Pe(e, 1, !1, e.toLowerCase(), null, !0, !0)
});

function ia(e, t, n, r) {
    var i = fe.hasOwnProperty(t) ? fe[t] : null;
    (i !== null ? i.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (rg(t, n, i, r) && (n = null), r || i === null ? tg(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = n === null ? i.type === 3 ? !1 : "" : n : (t = i.attributeName, r = i.attributeNamespace, n === null ? e.removeAttribute(t) : (i = i.type, n = i === 3 || i === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var Pt = qf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    gi = Symbol.for("react.element"),
    Tn = Symbol.for("react.portal"),
    _n = Symbol.for("react.fragment"),
    sa = Symbol.for("react.strict_mode"),
    Ho = Symbol.for("react.profiler"),
    td = Symbol.for("react.provider"),
    nd = Symbol.for("react.context"),
    oa = Symbol.for("react.forward_ref"),
    Yo = Symbol.for("react.suspense"),
    Xo = Symbol.for("react.suspense_list"),
    la = Symbol.for("react.memo"),
    Et = Symbol.for("react.lazy"),
    rd = Symbol.for("react.offscreen"),
    wu = Symbol.iterator;

function lr(e) {
    return e === null || typeof e != "object" ? null : (e = wu && e[wu] || e["@@iterator"], typeof e == "function" ? e : null)
}
var Z = Object.assign,
    io;

function vr(e) {
    if (io === void 0) try {
        throw Error()
    } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        io = t && t[1] || ""
    }
    return `
` + io + e
}
var so = !1;

function oo(e, t) {
    if (!e || so) return "";
    so = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function() {
                    throw Error()
                }, Object.defineProperty(t.prototype, "props", {
                    set: function() {
                        throw Error()
                    }
                }), typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (u) {
                    var r = u
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (u) {
                    r = u
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (u) {
                r = u
            }
            e()
        }
    } catch (u) {
        if (u && r && typeof u.stack == "string") {
            for (var i = u.stack.split(`
`), s = r.stack.split(`
`), o = i.length - 1, l = s.length - 1; 1 <= o && 0 <= l && i[o] !== s[l];) l--;
            for (; 1 <= o && 0 <= l; o--, l--)
                if (i[o] !== s[l]) {
                    if (o !== 1 || l !== 1)
                        do
                            if (o--, l--, 0 > l || i[o] !== s[l]) {
                                var a = `
` + i[o].replace(" at new ", " at ");
                                return e.displayName && a.includes("<anonymous>") && (a = a.replace("<anonymous>", e.displayName)), a
                            }
                    while (1 <= o && 0 <= l);
                    break
                }
        }
    } finally {
        so = !1, Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? vr(e) : ""
}

function ig(e) {
    switch (e.tag) {
        case 5:
            return vr(e.type);
        case 16:
            return vr("Lazy");
        case 13:
            return vr("Suspense");
        case 19:
            return vr("SuspenseList");
        case 0:
        case 2:
        case 15:
            return e = oo(e.type, !1), e;
        case 11:
            return e = oo(e.type.render, !1), e;
        case 1:
            return e = oo(e.type, !0), e;
        default:
            return ""
    }
}

function Qo(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
        case _n:
            return "Fragment";
        case Tn:
            return "Portal";
        case Ho:
            return "Profiler";
        case sa:
            return "StrictMode";
        case Yo:
            return "Suspense";
        case Xo:
            return "SuspenseList"
    }
    if (typeof e == "object") switch (e.$$typeof) {
        case nd:
            return (e.displayName || "Context") + ".Consumer";
        case td:
            return (e._context.displayName || "Context") + ".Provider";
        case oa:
            var t = e.render;
            return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case la:
            return t = e.displayName || null, t !== null ? t : Qo(e.type) || "Memo";
        case Et:
            t = e._payload, e = e._init;
            try {
                return Qo(e(t))
            } catch {}
    }
    return null
}

function sg(e) {
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
            return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
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
            return Qo(t);
        case 8:
            return t === sa ? "StrictMode" : "Mode";
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
            if (typeof t == "string") return t
    }
    return null
}

function Ht(e) {
    switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return e;
        case "object":
            return e;
        default:
            return ""
    }
}

function id(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}

function og(e) {
    var t = id(e) ? "checked" : "value",
        n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
        r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var i = n.get,
            s = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function() {
                return i.call(this)
            },
            set: function(o) {
                r = "" + o, s.call(this, o)
            }
        }), Object.defineProperty(e, t, {
            enumerable: n.enumerable
        }), {
            getValue: function() {
                return r
            },
            setValue: function(o) {
                r = "" + o
            },
            stopTracking: function() {
                e._valueTracker = null, delete e[t]
            }
        }
    }
}

function vi(e) {
    e._valueTracker || (e._valueTracker = og(e))
}

function sd(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
        r = "";
    return e && (r = id(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1
}

function Ji(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}

function Ko(e, t) {
    var n = t.checked;
    return Z({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ? ? e._wrapperState.initialChecked
    })
}

function Su(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
        r = t.checked != null ? t.checked : t.defaultChecked;
    n = Ht(t.value != null ? t.value : n), e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}

function od(e, t) {
    t = t.checked, t != null && ia(e, "checked", t, !1)
}

function Go(e, t) {
    od(e, t);
    var n = Ht(t.value),
        r = t.type;
    if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? bo(e, t.type, n) : t.hasOwnProperty("defaultValue") && bo(e, t.type, Ht(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}

function Pu(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
        t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n)
}

function bo(e, t, n) {
    (t !== "number" || Ji(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var yr = Array.isArray;

function $n(e, t, n, r) {
    if (e = e.options, t) {
        t = {};
        for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
        for (n = 0; n < e.length; n++) i = t.hasOwnProperty("$" + e[n].value), e[n].selected !== i && (e[n].selected = i), i && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + Ht(n), t = null, i = 0; i < e.length; i++) {
            if (e[i].value === n) {
                e[i].selected = !0, r && (e[i].defaultSelected = !0);
                return
            }
            t !== null || e[i].disabled || (t = e[i])
        }
        t !== null && (t.selected = !0)
    }
}

function Zo(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(C(91));
    return Z({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}

function Cu(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children, t = t.defaultValue, n != null) {
            if (t != null) throw Error(C(92));
            if (yr(n)) {
                if (1 < n.length) throw Error(C(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""), n = t
    }
    e._wrapperState = {
        initialValue: Ht(n)
    }
}

function ld(e, t) {
    var n = Ht(t.value),
        r = Ht(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r)
}

function ku(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}

function ad(e) {
    switch (e) {
        case "svg":
            return "http://www.w3.org/2000/svg";
        case "math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml"
    }
}

function Jo(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? ad(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var yi, ud = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, i) {
        MSApp.execUnsafeLocalFunction(function() {
            return e(t, n, r, i)
        })
    } : e
}(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
        for (yi = yi || document.createElement("div"), yi.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = yi.firstChild; e.firstChild;) e.removeChild(e.firstChild);
        for (; t.firstChild;) e.appendChild(t.firstChild)
    }
});

function zr(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var Cr = {
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
        strokeWidth: !0
    },
    lg = ["Webkit", "ms", "Moz", "O"];
Object.keys(Cr).forEach(function(e) {
    lg.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1), Cr[t] = Cr[e]
    })
});

function cd(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Cr.hasOwnProperty(e) && Cr[e] ? ("" + t).trim() : t + "px"
}

function fd(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0,
                i = cd(n, t[n], r);
            n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : e[n] = i
        }
}
var ag = Z({
    menuitem: !0
}, {
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
    wbr: !0
});

function qo(e, t) {
    if (t) {
        if (ag[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(C(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null) throw Error(C(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(C(61))
        }
        if (t.style != null && typeof t.style != "object") throw Error(C(62))
    }
}

function el(e, t) {
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
            return !0
    }
}
var tl = null;

function aa(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e
}
var nl = null,
    Wn = null,
    Hn = null;

function Eu(e) {
    if (e = ai(e)) {
        if (typeof nl != "function") throw Error(C(280));
        var t = e.stateNode;
        t && (t = Is(t), nl(e.stateNode, e.type, t))
    }
}

function dd(e) {
    Wn ? Hn ? Hn.push(e) : Hn = [e] : Wn = e
}

function hd() {
    if (Wn) {
        var e = Wn,
            t = Hn;
        if (Hn = Wn = null, Eu(e), t)
            for (e = 0; e < t.length; e++) Eu(t[e])
    }
}

function pd(e, t) {
    return e(t)
}

function md() {}
var lo = !1;

function gd(e, t, n) {
    if (lo) return e(t, n);
    lo = !0;
    try {
        return pd(e, t, n)
    } finally {
        lo = !1, (Wn !== null || Hn !== null) && (md(), hd())
    }
}

function Br(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = Is(n);
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
            (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
            break e;
        default:
            e = !1
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(C(231, t, typeof n));
    return n
}
var rl = !1;
if (vt) try {
    var ar = {};
    Object.defineProperty(ar, "passive", {
        get: function() {
            rl = !0
        }
    }), window.addEventListener("test", ar, ar), window.removeEventListener("test", ar, ar)
} catch {
    rl = !1
}

function ug(e, t, n, r, i, s, o, l, a) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, u)
    } catch (c) {
        this.onError(c)
    }
}
var kr = !1,
    qi = null,
    es = !1,
    il = null,
    cg = {
        onError: function(e) {
            kr = !0, qi = e
        }
    };

function fg(e, t, n, r, i, s, o, l, a) {
    kr = !1, qi = null, ug.apply(cg, arguments)
}

function dg(e, t, n, r, i, s, o, l, a) {
    if (fg.apply(this, arguments), kr) {
        if (kr) {
            var u = qi;
            kr = !1, qi = null
        } else throw Error(C(198));
        es || (es = !0, il = u)
    }
}

function wn(e) {
    var t = e,
        n = e;
    if (e.alternate)
        for (; t.return;) t = t.return;
    else {
        e = t;
        do t = e, t.flags & 4098 && (n = t.return), e = t.return; while (e)
    }
    return t.tag === 3 ? n : null
}

function vd(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated
    }
    return null
}

function Tu(e) {
    if (wn(e) !== e) throw Error(C(188))
}

function hg(e) {
    var t = e.alternate;
    if (!t) {
        if (t = wn(e), t === null) throw Error(C(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t;;) {
        var i = n.return;
        if (i === null) break;
        var s = i.alternate;
        if (s === null) {
            if (r = i.return, r !== null) {
                n = r;
                continue
            }
            break
        }
        if (i.child === s.child) {
            for (s = i.child; s;) {
                if (s === n) return Tu(i), e;
                if (s === r) return Tu(i), t;
                s = s.sibling
            }
            throw Error(C(188))
        }
        if (n.return !== r.return) n = i, r = s;
        else {
            for (var o = !1, l = i.child; l;) {
                if (l === n) {
                    o = !0, n = i, r = s;
                    break
                }
                if (l === r) {
                    o = !0, r = i, n = s;
                    break
                }
                l = l.sibling
            }
            if (!o) {
                for (l = s.child; l;) {
                    if (l === n) {
                        o = !0, n = s, r = i;
                        break
                    }
                    if (l === r) {
                        o = !0, r = s, n = i;
                        break
                    }
                    l = l.sibling
                }
                if (!o) throw Error(C(189))
            }
        }
        if (n.alternate !== r) throw Error(C(190))
    }
    if (n.tag !== 3) throw Error(C(188));
    return n.stateNode.current === n ? e : t
}

function yd(e) {
    return e = hg(e), e !== null ? xd(e) : null
}

function xd(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null;) {
        var t = xd(e);
        if (t !== null) return t;
        e = e.sibling
    }
    return null
}
var wd = De.unstable_scheduleCallback,
    _u = De.unstable_cancelCallback,
    pg = De.unstable_shouldYield,
    mg = De.unstable_requestPaint,
    te = De.unstable_now,
    gg = De.unstable_getCurrentPriorityLevel,
    ua = De.unstable_ImmediatePriority,
    Sd = De.unstable_UserBlockingPriority,
    ts = De.unstable_NormalPriority,
    vg = De.unstable_LowPriority,
    Pd = De.unstable_IdlePriority,
    Ms = null,
    ot = null;

function yg(e) {
    if (ot && typeof ot.onCommitFiberRoot == "function") try {
        ot.onCommitFiberRoot(Ms, e, void 0, (e.current.flags & 128) === 128)
    } catch {}
}
var be = Math.clz32 ? Math.clz32 : Sg,
    xg = Math.log,
    wg = Math.LN2;

function Sg(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (xg(e) / wg | 0) | 0
}
var xi = 64,
    wi = 4194304;

function xr(e) {
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
            return e
    }
}

function ns(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
        i = e.suspendedLanes,
        s = e.pingedLanes,
        o = n & 268435455;
    if (o !== 0) {
        var l = o & ~i;
        l !== 0 ? r = xr(l) : (s &= o, s !== 0 && (r = xr(s)))
    } else o = n & ~i, o !== 0 ? r = xr(o) : s !== 0 && (r = xr(s));
    if (r === 0) return 0;
    if (t !== 0 && t !== r && !(t & i) && (i = r & -r, s = t & -t, i >= s || i === 16 && (s & 4194240) !== 0)) return t;
    if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0)
        for (e = e.entanglements, t &= r; 0 < t;) n = 31 - be(t), i = 1 << n, r |= e[n], t &= ~i;
    return r
}

function Pg(e, t) {
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
            return -1
    }
}

function Cg(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, s = e.pendingLanes; 0 < s;) {
        var o = 31 - be(s),
            l = 1 << o,
            a = i[o];
        a === -1 ? (!(l & n) || l & r) && (i[o] = Pg(l, t)) : a <= t && (e.expiredLanes |= l), s &= ~l
    }
}

function sl(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}

function Cd() {
    var e = xi;
    return xi <<= 1, !(xi & 4194240) && (xi = 64), e
}

function ao(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t
}

function oi(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - be(t), e[t] = n
}

function kg(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n;) {
        var i = 31 - be(n),
            s = 1 << i;
        t[i] = 0, r[i] = -1, e[i] = -1, n &= ~s
    }
}

function ca(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n;) {
        var r = 31 - be(n),
            i = 1 << r;
        i & t | e[r] & t && (e[r] |= t), n &= ~i
    }
}
var F = 0;

function kd(e) {
    return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var Ed, fa, Td, _d, jd, ol = !1,
    Si = [],
    Vt = null,
    Mt = null,
    Dt = null,
    Ur = new Map,
    $r = new Map,
    jt = [],
    Eg = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

function ju(e, t) {
    switch (e) {
        case "focusin":
        case "focusout":
            Vt = null;
            break;
        case "dragenter":
        case "dragleave":
            Mt = null;
            break;
        case "mouseover":
        case "mouseout":
            Dt = null;
            break;
        case "pointerover":
        case "pointerout":
            Ur.delete(t.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            $r.delete(t.pointerId)
    }
}

function ur(e, t, n, r, i, s) {
    return e === null || e.nativeEvent !== s ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: s,
        targetContainers: [i]
    }, t !== null && (t = ai(t), t !== null && fa(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e)
}

function Tg(e, t, n, r, i) {
    switch (t) {
        case "focusin":
            return Vt = ur(Vt, e, t, n, r, i), !0;
        case "dragenter":
            return Mt = ur(Mt, e, t, n, r, i), !0;
        case "mouseover":
            return Dt = ur(Dt, e, t, n, r, i), !0;
        case "pointerover":
            var s = i.pointerId;
            return Ur.set(s, ur(Ur.get(s) || null, e, t, n, r, i)), !0;
        case "gotpointercapture":
            return s = i.pointerId, $r.set(s, ur($r.get(s) || null, e, t, n, r, i)), !0
    }
    return !1
}

function Nd(e) {
    var t = ln(e.target);
    if (t !== null) {
        var n = wn(t);
        if (n !== null) {
            if (t = n.tag, t === 13) {
                if (t = vd(n), t !== null) {
                    e.blockedOn = t, jd(e.priority, function() {
                        Td(n)
                    });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}

function zi(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length;) {
        var n = ll(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type, n);
            tl = r, n.target.dispatchEvent(r), tl = null
        } else return t = ai(n), t !== null && fa(t), e.blockedOn = n, !1;
        t.shift()
    }
    return !0
}

function Nu(e, t, n) {
    zi(e) && n.delete(t)
}

function _g() {
    ol = !1, Vt !== null && zi(Vt) && (Vt = null), Mt !== null && zi(Mt) && (Mt = null), Dt !== null && zi(Dt) && (Dt = null), Ur.forEach(Nu), $r.forEach(Nu)
}

function cr(e, t) {
    e.blockedOn === t && (e.blockedOn = null, ol || (ol = !0, De.unstable_scheduleCallback(De.unstable_NormalPriority, _g)))
}

function Wr(e) {
    function t(i) {
        return cr(i, e)
    }
    if (0 < Si.length) {
        cr(Si[0], e);
        for (var n = 1; n < Si.length; n++) {
            var r = Si[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (Vt !== null && cr(Vt, e), Mt !== null && cr(Mt, e), Dt !== null && cr(Dt, e), Ur.forEach(t), $r.forEach(t), n = 0; n < jt.length; n++) r = jt[n], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < jt.length && (n = jt[0], n.blockedOn === null);) Nd(n), n.blockedOn === null && jt.shift()
}
var Yn = Pt.ReactCurrentBatchConfig,
    rs = !0;

function jg(e, t, n, r) {
    var i = F,
        s = Yn.transition;
    Yn.transition = null;
    try {
        F = 1, da(e, t, n, r)
    } finally {
        F = i, Yn.transition = s
    }
}

function Ng(e, t, n, r) {
    var i = F,
        s = Yn.transition;
    Yn.transition = null;
    try {
        F = 4, da(e, t, n, r)
    } finally {
        F = i, Yn.transition = s
    }
}

function da(e, t, n, r) {
    if (rs) {
        var i = ll(e, t, n, r);
        if (i === null) xo(e, t, r, is, n), ju(e, r);
        else if (Tg(i, e, t, n, r)) r.stopPropagation();
        else if (ju(e, r), t & 4 && -1 < Eg.indexOf(e)) {
            for (; i !== null;) {
                var s = ai(i);
                if (s !== null && Ed(s), s = ll(e, t, n, r), s === null && xo(e, t, r, is, n), s === i) break;
                i = s
            }
            i !== null && r.stopPropagation()
        } else xo(e, t, r, null, n)
    }
}
var is = null;

function ll(e, t, n, r) {
    if (is = null, e = aa(r), e = ln(e), e !== null)
        if (t = wn(e), t === null) e = null;
        else if (n = t.tag, n === 13) {
        if (e = vd(t), e !== null) return e;
        e = null
    } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null
    } else t !== e && (e = null);
    return is = e, null
}

function Ld(e) {
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
            switch (gg()) {
                case ua:
                    return 1;
                case Sd:
                    return 4;
                case ts:
                case vg:
                    return 16;
                case Pd:
                    return 536870912;
                default:
                    return 16
            }
        default:
            return 16
    }
}
var Lt = null,
    ha = null,
    Bi = null;

function Ad() {
    if (Bi) return Bi;
    var e, t = ha,
        n = t.length,
        r, i = "value" in Lt ? Lt.value : Lt.textContent,
        s = i.length;
    for (e = 0; e < n && t[e] === i[e]; e++);
    var o = n - e;
    for (r = 1; r <= o && t[n - r] === i[s - r]; r++);
    return Bi = i.slice(e, 1 < r ? 1 - r : void 0)
}

function Ui(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0
}

function Pi() {
    return !0
}

function Lu() {
    return !1
}

function Ie(e) {
    function t(n, r, i, s, o) {
        this._reactName = n, this._targetInst = i, this.type = r, this.nativeEvent = s, this.target = o, this.currentTarget = null;
        for (var l in e) e.hasOwnProperty(l) && (n = e[l], this[l] = n ? n(s) : s[l]);
        return this.isDefaultPrevented = (s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1) ? Pi : Lu, this.isPropagationStopped = Lu, this
    }
    return Z(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Pi)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Pi)
        },
        persist: function() {},
        isPersistent: Pi
    }), t
}
var sr = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function(e) {
            return e.timeStamp || Date.now()
        },
        defaultPrevented: 0,
        isTrusted: 0
    },
    pa = Ie(sr),
    li = Z({}, sr, {
        view: 0,
        detail: 0
    }),
    Lg = Ie(li),
    uo, co, fr, Ds = Z({}, li, {
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
        getModifierState: ma,
        button: 0,
        buttons: 0,
        relatedTarget: function(e) {
            return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
        },
        movementX: function(e) {
            return "movementX" in e ? e.movementX : (e !== fr && (fr && e.type === "mousemove" ? (uo = e.screenX - fr.screenX, co = e.screenY - fr.screenY) : co = uo = 0, fr = e), uo)
        },
        movementY: function(e) {
            return "movementY" in e ? e.movementY : co
        }
    }),
    Au = Ie(Ds),
    Ag = Z({}, Ds, {
        dataTransfer: 0
    }),
    Vg = Ie(Ag),
    Mg = Z({}, li, {
        relatedTarget: 0
    }),
    fo = Ie(Mg),
    Dg = Z({}, sr, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }),
    Og = Ie(Dg),
    Rg = Z({}, sr, {
        clipboardData: function(e) {
            return "clipboardData" in e ? e.clipboardData : window.clipboardData
        }
    }),
    Ig = Ie(Rg),
    Fg = Z({}, sr, {
        data: 0
    }),
    Vu = Ie(Fg),
    zg = {
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
        MozPrintableKey: "Unidentified"
    },
    Bg = {
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
        224: "Meta"
    },
    Ug = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };

function $g(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Ug[e]) ? !!t[e] : !1
}

function ma() {
    return $g
}
var Wg = Z({}, li, {
        key: function(e) {
            if (e.key) {
                var t = zg[e.key] || e.key;
                if (t !== "Unidentified") return t
            }
            return e.type === "keypress" ? (e = Ui(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Bg[e.keyCode] || "Unidentified" : ""
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: ma,
        charCode: function(e) {
            return e.type === "keypress" ? Ui(e) : 0
        },
        keyCode: function(e) {
            return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        },
        which: function(e) {
            return e.type === "keypress" ? Ui(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        }
    }),
    Hg = Ie(Wg),
    Yg = Z({}, Ds, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0
    }),
    Mu = Ie(Yg),
    Xg = Z({}, li, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: ma
    }),
    Qg = Ie(Xg),
    Kg = Z({}, sr, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }),
    Gg = Ie(Kg),
    bg = Z({}, Ds, {
        deltaX: function(e) {
            return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        },
        deltaY: function(e) {
            return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
        },
        deltaZ: 0,
        deltaMode: 0
    }),
    Zg = Ie(bg),
    Jg = [9, 13, 27, 32],
    ga = vt && "CompositionEvent" in window,
    Er = null;
vt && "documentMode" in document && (Er = document.documentMode);
var qg = vt && "TextEvent" in window && !Er,
    Vd = vt && (!ga || Er && 8 < Er && 11 >= Er),
    Du = String.fromCharCode(32),
    Ou = !1;

function Md(e, t) {
    switch (e) {
        case "keyup":
            return Jg.indexOf(t.keyCode) !== -1;
        case "keydown":
            return t.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1
    }
}

function Dd(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null
}
var jn = !1;

function ev(e, t) {
    switch (e) {
        case "compositionend":
            return Dd(t);
        case "keypress":
            return t.which !== 32 ? null : (Ou = !0, Du);
        case "textInput":
            return e = t.data, e === Du && Ou ? null : e;
        default:
            return null
    }
}

function tv(e, t) {
    if (jn) return e === "compositionend" || !ga && Md(e, t) ? (e = Ad(), Bi = ha = Lt = null, jn = !1, e) : null;
    switch (e) {
        case "paste":
            return null;
        case "keypress":
            if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                if (t.char && 1 < t.char.length) return t.char;
                if (t.which) return String.fromCharCode(t.which)
            }
            return null;
        case "compositionend":
            return Vd && t.locale !== "ko" ? null : t.data;
        default:
            return null
    }
}
var nv = {
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
    week: !0
};

function Ru(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!nv[e.type] : t === "textarea"
}

function Od(e, t, n, r) {
    dd(r), t = ss(t, "onChange"), 0 < t.length && (n = new pa("onChange", "change", null, n, r), e.push({
        event: n,
        listeners: t
    }))
}
var Tr = null,
    Hr = null;

function rv(e) {
    Xd(e, 0)
}

function Os(e) {
    var t = An(e);
    if (sd(t)) return e
}

function iv(e, t) {
    if (e === "change") return t
}
var Rd = !1;
if (vt) {
    var ho;
    if (vt) {
        var po = "oninput" in document;
        if (!po) {
            var Iu = document.createElement("div");
            Iu.setAttribute("oninput", "return;"), po = typeof Iu.oninput == "function"
        }
        ho = po
    } else ho = !1;
    Rd = ho && (!document.documentMode || 9 < document.documentMode)
}

function Fu() {
    Tr && (Tr.detachEvent("onpropertychange", Id), Hr = Tr = null)
}

function Id(e) {
    if (e.propertyName === "value" && Os(Hr)) {
        var t = [];
        Od(t, Hr, e, aa(e)), gd(rv, t)
    }
}

function sv(e, t, n) {
    e === "focusin" ? (Fu(), Tr = t, Hr = n, Tr.attachEvent("onpropertychange", Id)) : e === "focusout" && Fu()
}

function ov(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return Os(Hr)
}

function lv(e, t) {
    if (e === "click") return Os(t)
}

function av(e, t) {
    if (e === "input" || e === "change") return Os(t)
}

function uv(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var Je = typeof Object.is == "function" ? Object.is : uv;

function Yr(e, t) {
    if (Je(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e),
        r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
        var i = n[r];
        if (!Wo.call(t, i) || !Je(e[i], t[i])) return !1
    }
    return !0
}

function zu(e) {
    for (; e && e.firstChild;) e = e.firstChild;
    return e
}

function Bu(e, t) {
    var n = zu(e);
    e = 0;
    for (var r; n;) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length, e <= t && r >= t) return {
                node: n,
                offset: t - e
            };
            e = r
        }
        e: {
            for (; n;) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = zu(n)
    }
}

function Fd(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Fd(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}

function zd() {
    for (var e = window, t = Ji(); t instanceof e.HTMLIFrameElement;) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n) e = t.contentWindow;
        else break;
        t = Ji(e.document)
    }
    return t
}

function va(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}

function cv(e) {
    var t = zd(),
        n = e.focusedElem,
        r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Fd(n.ownerDocument.documentElement, n)) {
        if (r !== null && va(n)) {
            if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
                e = e.getSelection();
                var i = n.textContent.length,
                    s = Math.min(r.start, i);
                r = r.end === void 0 ? s : Math.min(r.end, i), !e.extend && s > r && (i = r, r = s, s = i), i = Bu(n, s);
                var o = Bu(n, r);
                i && o && (e.rangeCount !== 1 || e.anchorNode !== i.node || e.anchorOffset !== i.offset || e.focusNode !== o.node || e.focusOffset !== o.offset) && (t = t.createRange(), t.setStart(i.node, i.offset), e.removeAllRanges(), s > r ? (e.addRange(t), e.extend(o.node, o.offset)) : (t.setEnd(o.node, o.offset), e.addRange(t)))
            }
        }
        for (t = [], e = n; e = e.parentNode;) e.nodeType === 1 && t.push({
            element: e,
            left: e.scrollLeft,
            top: e.scrollTop
        });
        for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top
    }
}
var fv = vt && "documentMode" in document && 11 >= document.documentMode,
    Nn = null,
    al = null,
    _r = null,
    ul = !1;

function Uu(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    ul || Nn == null || Nn !== Ji(r) || (r = Nn, "selectionStart" in r && va(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }), _r && Yr(_r, r) || (_r = r, r = ss(al, "onSelect"), 0 < r.length && (t = new pa("onSelect", "select", null, t, n), e.push({
        event: t,
        listeners: r
    }), t.target = Nn)))
}

function Ci(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n
}
var Ln = {
        animationend: Ci("Animation", "AnimationEnd"),
        animationiteration: Ci("Animation", "AnimationIteration"),
        animationstart: Ci("Animation", "AnimationStart"),
        transitionend: Ci("Transition", "TransitionEnd")
    },
    mo = {},
    Bd = {};
vt && (Bd = document.createElement("div").style, "AnimationEvent" in window || (delete Ln.animationend.animation, delete Ln.animationiteration.animation, delete Ln.animationstart.animation), "TransitionEvent" in window || delete Ln.transitionend.transition);

function Rs(e) {
    if (mo[e]) return mo[e];
    if (!Ln[e]) return e;
    var t = Ln[e],
        n;
    for (n in t)
        if (t.hasOwnProperty(n) && n in Bd) return mo[e] = t[n];
    return e
}
var Ud = Rs("animationend"),
    $d = Rs("animationiteration"),
    Wd = Rs("animationstart"),
    Hd = Rs("transitionend"),
    Yd = new Map,
    $u = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

function Kt(e, t) {
    Yd.set(e, t), xn(t, [e])
}
for (var go = 0; go < $u.length; go++) {
    var vo = $u[go],
        dv = vo.toLowerCase(),
        hv = vo[0].toUpperCase() + vo.slice(1);
    Kt(dv, "on" + hv)
}
Kt(Ud, "onAnimationEnd");
Kt($d, "onAnimationIteration");
Kt(Wd, "onAnimationStart");
Kt("dblclick", "onDoubleClick");
Kt("focusin", "onFocus");
Kt("focusout", "onBlur");
Kt(Hd, "onTransitionEnd");
Gn("onMouseEnter", ["mouseout", "mouseover"]);
Gn("onMouseLeave", ["mouseout", "mouseover"]);
Gn("onPointerEnter", ["pointerout", "pointerover"]);
Gn("onPointerLeave", ["pointerout", "pointerover"]);
xn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
xn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
xn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
xn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
xn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
xn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var wr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
    pv = new Set("cancel close invalid load scroll toggle".split(" ").concat(wr));

function Wu(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, dg(r, t, void 0, e), e.currentTarget = null
}

function Xd(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n],
            i = r.event;
        r = r.listeners;
        e: {
            var s = void 0;
            if (t)
                for (var o = r.length - 1; 0 <= o; o--) {
                    var l = r[o],
                        a = l.instance,
                        u = l.currentTarget;
                    if (l = l.listener, a !== s && i.isPropagationStopped()) break e;
                    Wu(i, l, u), s = a
                } else
                    for (o = 0; o < r.length; o++) {
                        if (l = r[o], a = l.instance, u = l.currentTarget, l = l.listener, a !== s && i.isPropagationStopped()) break e;
                        Wu(i, l, u), s = a
                    }
        }
    }
    if (es) throw e = il, es = !1, il = null, e
}

function B(e, t) {
    var n = t[pl];
    n === void 0 && (n = t[pl] = new Set);
    var r = e + "__bubble";
    n.has(r) || (Qd(t, e, 2, !1), n.add(r))
}

function yo(e, t, n) {
    var r = 0;
    t && (r |= 4), Qd(n, e, r, t)
}
var ki = "_reactListening" + Math.random().toString(36).slice(2);

function Xr(e) {
    if (!e[ki]) {
        e[ki] = !0, ed.forEach(function(n) {
            n !== "selectionchange" && (pv.has(n) || yo(n, !1, e), yo(n, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[ki] || (t[ki] = !0, yo("selectionchange", !1, t))
    }
}

function Qd(e, t, n, r) {
    switch (Ld(t)) {
        case 1:
            var i = jg;
            break;
        case 4:
            i = Ng;
            break;
        default:
            i = da
    }
    n = i.bind(null, t, n, e), i = void 0, !rl || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0), r ? i !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: i
    }) : e.addEventListener(t, n, !0) : i !== void 0 ? e.addEventListener(t, n, {
        passive: i
    }) : e.addEventListener(t, n, !1)
}

function xo(e, t, n, r, i) {
    var s = r;
    if (!(t & 1) && !(t & 2) && r !== null) e: for (;;) {
        if (r === null) return;
        var o = r.tag;
        if (o === 3 || o === 4) {
            var l = r.stateNode.containerInfo;
            if (l === i || l.nodeType === 8 && l.parentNode === i) break;
            if (o === 4)
                for (o = r.return; o !== null;) {
                    var a = o.tag;
                    if ((a === 3 || a === 4) && (a = o.stateNode.containerInfo, a === i || a.nodeType === 8 && a.parentNode === i)) return;
                    o = o.return
                }
            for (; l !== null;) {
                if (o = ln(l), o === null) return;
                if (a = o.tag, a === 5 || a === 6) {
                    r = s = o;
                    continue e
                }
                l = l.parentNode
            }
        }
        r = r.return
    }
    gd(function() {
        var u = s,
            c = aa(n),
            f = [];
        e: {
            var d = Yd.get(e);
            if (d !== void 0) {
                var g = pa,
                    v = e;
                switch (e) {
                    case "keypress":
                        if (Ui(n) === 0) break e;
                    case "keydown":
                    case "keyup":
                        g = Hg;
                        break;
                    case "focusin":
                        v = "focus", g = fo;
                        break;
                    case "focusout":
                        v = "blur", g = fo;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        g = fo;
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
                        g = Au;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        g = Vg;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        g = Qg;
                        break;
                    case Ud:
                    case $d:
                    case Wd:
                        g = Og;
                        break;
                    case Hd:
                        g = Gg;
                        break;
                    case "scroll":
                        g = Lg;
                        break;
                    case "wheel":
                        g = Zg;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        g = Ig;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        g = Mu
                }
                var x = (t & 4) !== 0,
                    E = !x && e === "scroll",
                    p = x ? d !== null ? d + "Capture" : null : d;
                x = [];
                for (var h = u, m; h !== null;) {
                    m = h;
                    var w = m.stateNode;
                    if (m.tag === 5 && w !== null && (m = w, p !== null && (w = Br(h, p), w != null && x.push(Qr(h, w, m)))), E) break;
                    h = h.return
                }
                0 < x.length && (d = new g(d, v, null, n, c), f.push({
                    event: d,
                    listeners: x
                }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (d = e === "mouseover" || e === "pointerover", g = e === "mouseout" || e === "pointerout", d && n !== tl && (v = n.relatedTarget || n.fromElement) && (ln(v) || v[yt])) break e;
                if ((g || d) && (d = c.window === c ? c : (d = c.ownerDocument) ? d.defaultView || d.parentWindow : window, g ? (v = n.relatedTarget || n.toElement, g = u, v = v ? ln(v) : null, v !== null && (E = wn(v), v !== E || v.tag !== 5 && v.tag !== 6) && (v = null)) : (g = null, v = u), g !== v)) {
                    if (x = Au, w = "onMouseLeave", p = "onMouseEnter", h = "mouse", (e === "pointerout" || e === "pointerover") && (x = Mu, w = "onPointerLeave", p = "onPointerEnter", h = "pointer"), E = g == null ? d : An(g), m = v == null ? d : An(v), d = new x(w, h + "leave", g, n, c), d.target = E, d.relatedTarget = m, w = null, ln(c) === u && (x = new x(p, h + "enter", v, n, c), x.target = m, x.relatedTarget = E, w = x), E = w, g && v) t: {
                        for (x = g, p = v, h = 0, m = x; m; m = kn(m)) h++;
                        for (m = 0, w = p; w; w = kn(w)) m++;
                        for (; 0 < h - m;) x = kn(x),
                        h--;
                        for (; 0 < m - h;) p = kn(p),
                        m--;
                        for (; h--;) {
                            if (x === p || p !== null && x === p.alternate) break t;
                            x = kn(x), p = kn(p)
                        }
                        x = null
                    }
                    else x = null;
                    g !== null && Hu(f, d, g, x, !1), v !== null && E !== null && Hu(f, E, v, x, !0)
                }
            }
            e: {
                if (d = u ? An(u) : window, g = d.nodeName && d.nodeName.toLowerCase(), g === "select" || g === "input" && d.type === "file") var S = iv;
                else if (Ru(d))
                    if (Rd) S = av;
                    else {
                        S = ov;
                        var T = sv
                    }
                else(g = d.nodeName) && g.toLowerCase() === "input" && (d.type === "checkbox" || d.type === "radio") && (S = lv);
                if (S && (S = S(e, u))) {
                    Od(f, S, n, c);
                    break e
                }
                T && T(e, d, u),
                e === "focusout" && (T = d._wrapperState) && T.controlled && d.type === "number" && bo(d, "number", d.value)
            }
            switch (T = u ? An(u) : window, e) {
                case "focusin":
                    (Ru(T) || T.contentEditable === "true") && (Nn = T, al = u, _r = null);
                    break;
                case "focusout":
                    _r = al = Nn = null;
                    break;
                case "mousedown":
                    ul = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    ul = !1, Uu(f, n, c);
                    break;
                case "selectionchange":
                    if (fv) break;
                case "keydown":
                case "keyup":
                    Uu(f, n, c)
            }
            var k;
            if (ga) e: {
                switch (e) {
                    case "compositionstart":
                        var P = "onCompositionStart";
                        break e;
                    case "compositionend":
                        P = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        P = "onCompositionUpdate";
                        break e
                }
                P = void 0
            }
            else jn ? Md(e, n) && (P = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (P = "onCompositionStart");P && (Vd && n.locale !== "ko" && (jn || P !== "onCompositionStart" ? P === "onCompositionEnd" && jn && (k = Ad()) : (Lt = c, ha = "value" in Lt ? Lt.value : Lt.textContent, jn = !0)), T = ss(u, P), 0 < T.length && (P = new Vu(P, e, null, n, c), f.push({
                event: P,
                listeners: T
            }), k ? P.data = k : (k = Dd(n), k !== null && (P.data = k)))),
            (k = qg ? ev(e, n) : tv(e, n)) && (u = ss(u, "onBeforeInput"), 0 < u.length && (c = new Vu("onBeforeInput", "beforeinput", null, n, c), f.push({
                event: c,
                listeners: u
            }), c.data = k))
        }
        Xd(f, t)
    })
}

function Qr(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}

function ss(e, t) {
    for (var n = t + "Capture", r = []; e !== null;) {
        var i = e,
            s = i.stateNode;
        i.tag === 5 && s !== null && (i = s, s = Br(e, n), s != null && r.unshift(Qr(e, s, i)), s = Br(e, t), s != null && r.push(Qr(e, s, i))), e = e.return
    }
    return r
}

function kn(e) {
    if (e === null) return null;
    do e = e.return; while (e && e.tag !== 5);
    return e || null
}

function Hu(e, t, n, r, i) {
    for (var s = t._reactName, o = []; n !== null && n !== r;) {
        var l = n,
            a = l.alternate,
            u = l.stateNode;
        if (a !== null && a === r) break;
        l.tag === 5 && u !== null && (l = u, i ? (a = Br(n, s), a != null && o.unshift(Qr(n, a, l))) : i || (a = Br(n, s), a != null && o.push(Qr(n, a, l)))), n = n.return
    }
    o.length !== 0 && e.push({
        event: t,
        listeners: o
    })
}
var mv = /\r\n?/g,
    gv = /\u0000|\uFFFD/g;

function Yu(e) {
    return (typeof e == "string" ? e : "" + e).replace(mv, `
`).replace(gv, "")
}

function Ei(e, t, n) {
    if (t = Yu(t), Yu(e) !== t && n) throw Error(C(425))
}

function os() {}
var cl = null,
    fl = null;

function dl(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var hl = typeof setTimeout == "function" ? setTimeout : void 0,
    vv = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Xu = typeof Promise == "function" ? Promise : void 0,
    yv = typeof queueMicrotask == "function" ? queueMicrotask : typeof Xu < "u" ? function(e) {
        return Xu.resolve(null).then(e).catch(xv)
    } : hl;

function xv(e) {
    setTimeout(function() {
        throw e
    })
}

function wo(e, t) {
    var n = t,
        r = 0;
    do {
        var i = n.nextSibling;
        if (e.removeChild(n), i && i.nodeType === 8)
            if (n = i.data, n === "/$") {
                if (r === 0) {
                    e.removeChild(i), Wr(t);
                    return
                }
                r--
            } else n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = i
    } while (n);
    Wr(t)
}

function Ot(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
            if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
            if (t === "/$") return null
        }
    }
    return e
}

function Qu(e) {
    e = e.previousSibling;
    for (var t = 0; e;) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0) return e;
                t--
            } else n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var or = Math.random().toString(36).slice(2),
    st = "__reactFiber$" + or,
    Kr = "__reactProps$" + or,
    yt = "__reactContainer$" + or,
    pl = "__reactEvents$" + or,
    wv = "__reactListeners$" + or,
    Sv = "__reactHandles$" + or;

function ln(e) {
    var t = e[st];
    if (t) return t;
    for (var n = e.parentNode; n;) {
        if (t = n[yt] || n[st]) {
            if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
                for (e = Qu(e); e !== null;) {
                    if (n = e[st]) return n;
                    e = Qu(e)
                }
            return t
        }
        e = n, n = e.parentNode
    }
    return null
}

function ai(e) {
    return e = e[st] || e[yt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}

function An(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(C(33))
}

function Is(e) {
    return e[Kr] || null
}
var ml = [],
    Vn = -1;

function Gt(e) {
    return {
        current: e
    }
}

function U(e) {
    0 > Vn || (e.current = ml[Vn], ml[Vn] = null, Vn--)
}

function z(e, t) {
    Vn++, ml[Vn] = e.current, e.current = t
}
var Yt = {},
    ve = Gt(Yt),
    Ee = Gt(!1),
    pn = Yt;

function bn(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Yt;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var i = {},
        s;
    for (s in n) i[s] = t[s];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = i), i
}

function Te(e) {
    return e = e.childContextTypes, e != null
}

function ls() {
    U(Ee), U(ve)
}

function Ku(e, t, n) {
    if (ve.current !== Yt) throw Error(C(168));
    z(ve, t), z(Ee, n)
}

function Kd(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
    r = r.getChildContext();
    for (var i in r)
        if (!(i in t)) throw Error(C(108, sg(e) || "Unknown", i));
    return Z({}, n, r)
}

function as(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Yt, pn = ve.current, z(ve, e), z(Ee, Ee.current), !0
}

function Gu(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(C(169));
    n ? (e = Kd(e, t, pn), r.__reactInternalMemoizedMergedChildContext = e, U(Ee), U(ve), z(ve, e)) : U(Ee), z(Ee, n)
}
var ct = null,
    Fs = !1,
    So = !1;

function Gd(e) {
    ct === null ? ct = [e] : ct.push(e)
}

function Pv(e) {
    Fs = !0, Gd(e)
}

function bt() {
    if (!So && ct !== null) {
        So = !0;
        var e = 0,
            t = F;
        try {
            var n = ct;
            for (F = 1; e < n.length; e++) {
                var r = n[e];
                do r = r(!0); while (r !== null)
            }
            ct = null, Fs = !1
        } catch (i) {
            throw ct !== null && (ct = ct.slice(e + 1)), wd(ua, bt), i
        } finally {
            F = t, So = !1
        }
    }
    return null
}
var Mn = [],
    Dn = 0,
    us = null,
    cs = 0,
    Be = [],
    Ue = 0,
    mn = null,
    ft = 1,
    dt = "";

function nn(e, t) {
    Mn[Dn++] = cs, Mn[Dn++] = us, us = e, cs = t
}

function bd(e, t, n) {
    Be[Ue++] = ft, Be[Ue++] = dt, Be[Ue++] = mn, mn = e;
    var r = ft;
    e = dt;
    var i = 32 - be(r) - 1;
    r &= ~(1 << i), n += 1;
    var s = 32 - be(t) + i;
    if (30 < s) {
        var o = i - i % 5;
        s = (r & (1 << o) - 1).toString(32), r >>= o, i -= o, ft = 1 << 32 - be(t) + i | n << i | r, dt = s + e
    } else ft = 1 << s | n << i | r, dt = e
}

function ya(e) {
    e.return !== null && (nn(e, 1), bd(e, 1, 0))
}

function xa(e) {
    for (; e === us;) us = Mn[--Dn], Mn[Dn] = null, cs = Mn[--Dn], Mn[Dn] = null;
    for (; e === mn;) mn = Be[--Ue], Be[Ue] = null, dt = Be[--Ue], Be[Ue] = null, ft = Be[--Ue], Be[Ue] = null
}
var Me = null,
    Ae = null,
    W = !1,
    Ge = null;

function Zd(e, t) {
    var n = $e(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n)
}

function bu(e, t) {
    switch (e.tag) {
        case 5:
            var n = e.type;
            return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Me = e, Ae = Ot(t.firstChild), !0) : !1;
        case 6:
            return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Me = e, Ae = null, !0) : !1;
        case 13:
            return t = t.nodeType !== 8 ? null : t, t !== null ? (n = mn !== null ? {
                id: ft,
                overflow: dt
            } : null, e.memoizedState = {
                dehydrated: t,
                treeContext: n,
                retryLane: 1073741824
            }, n = $e(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Me = e, Ae = null, !0) : !1;
        default:
            return !1
    }
}

function gl(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}

function vl(e) {
    if (W) {
        var t = Ae;
        if (t) {
            var n = t;
            if (!bu(e, t)) {
                if (gl(e)) throw Error(C(418));
                t = Ot(n.nextSibling);
                var r = Me;
                t && bu(e, t) ? Zd(r, n) : (e.flags = e.flags & -4097 | 2, W = !1, Me = e)
            }
        } else {
            if (gl(e)) throw Error(C(418));
            e.flags = e.flags & -4097 | 2, W = !1, Me = e
        }
    }
}

function Zu(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;) e = e.return;
    Me = e
}

function Ti(e) {
    if (e !== Me) return !1;
    if (!W) return Zu(e), W = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !dl(e.type, e.memoizedProps)), t && (t = Ae)) {
        if (gl(e)) throw Jd(), Error(C(418));
        for (; t;) Zd(e, t), t = Ot(t.nextSibling)
    }
    if (Zu(e), e.tag === 13) {
        if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(C(317));
        e: {
            for (e = e.nextSibling, t = 0; e;) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            Ae = Ot(e.nextSibling);
                            break e
                        }
                        t--
                    } else n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            Ae = null
        }
    } else Ae = Me ? Ot(e.stateNode.nextSibling) : null;
    return !0
}

function Jd() {
    for (var e = Ae; e;) e = Ot(e.nextSibling)
}

function Zn() {
    Ae = Me = null, W = !1
}

function wa(e) {
    Ge === null ? Ge = [e] : Ge.push(e)
}
var Cv = Pt.ReactCurrentBatchConfig;

function Qe(e, t) {
    if (e && e.defaultProps) {
        t = Z({}, t), e = e.defaultProps;
        for (var n in e) t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}
var fs = Gt(null),
    ds = null,
    On = null,
    Sa = null;

function Pa() {
    Sa = On = ds = null
}

function Ca(e) {
    var t = fs.current;
    U(fs), e._currentValue = t
}

function yl(e, t, n) {
    for (; e !== null;) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
        e = e.return
    }
}

function Xn(e, t) {
    ds = e, Sa = On = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (ke = !0), e.firstContext = null)
}

function He(e) {
    var t = e._currentValue;
    if (Sa !== e)
        if (e = {
                context: e,
                memoizedValue: t,
                next: null
            }, On === null) {
            if (ds === null) throw Error(C(308));
            On = e, ds.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else On = On.next = e;
    return t
}
var an = null;

function ka(e) {
    an === null ? an = [e] : an.push(e)
}

function qd(e, t, n, r) {
    var i = t.interleaved;
    return i === null ? (n.next = n, ka(t)) : (n.next = i.next, i.next = n), t.interleaved = n, xt(e, r)
}

function xt(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null;) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null
}
var Tt = !1;

function Ea(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}

function eh(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}

function pt(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}

function Rt(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (r = r.shared, I & 2) {
        var i = r.pending;
        return i === null ? t.next = t : (t.next = i.next, i.next = t), r.pending = t, xt(e, n)
    }
    return i = r.interleaved, i === null ? (t.next = t, ka(r)) : (t.next = i.next, i.next = t), r.interleaved = t, xt(e, n)
}

function $i(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes, n |= r, t.lanes = n, ca(e, n)
    }
}

function Ju(e, t) {
    var n = e.updateQueue,
        r = e.alternate;
    if (r !== null && (r = r.updateQueue, n === r)) {
        var i = null,
            s = null;
        if (n = n.firstBaseUpdate, n !== null) {
            do {
                var o = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                s === null ? i = s = o : s = s.next = o, n = n.next
            } while (n !== null);
            s === null ? i = s = t : s = s.next = t
        } else i = s = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: i,
            lastBaseUpdate: s,
            shared: r.shared,
            effects: r.effects
        }, e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t
}

function hs(e, t, n, r) {
    var i = e.updateQueue;
    Tt = !1;
    var s = i.firstBaseUpdate,
        o = i.lastBaseUpdate,
        l = i.shared.pending;
    if (l !== null) {
        i.shared.pending = null;
        var a = l,
            u = a.next;
        a.next = null, o === null ? s = u : o.next = u, o = a;
        var c = e.alternate;
        c !== null && (c = c.updateQueue, l = c.lastBaseUpdate, l !== o && (l === null ? c.firstBaseUpdate = u : l.next = u, c.lastBaseUpdate = a))
    }
    if (s !== null) {
        var f = i.baseState;
        o = 0, c = u = a = null, l = s;
        do {
            var d = l.lane,
                g = l.eventTime;
            if ((r & d) === d) {
                c !== null && (c = c.next = {
                    eventTime: g,
                    lane: 0,
                    tag: l.tag,
                    payload: l.payload,
                    callback: l.callback,
                    next: null
                });
                e: {
                    var v = e,
                        x = l;
                    switch (d = t, g = n, x.tag) {
                        case 1:
                            if (v = x.payload, typeof v == "function") {
                                f = v.call(g, f, d);
                                break e
                            }
                            f = v;
                            break e;
                        case 3:
                            v.flags = v.flags & -65537 | 128;
                        case 0:
                            if (v = x.payload, d = typeof v == "function" ? v.call(g, f, d) : v, d == null) break e;
                            f = Z({}, f, d);
                            break e;
                        case 2:
                            Tt = !0
                    }
                }
                l.callback !== null && l.lane !== 0 && (e.flags |= 64, d = i.effects, d === null ? i.effects = [l] : d.push(l))
            } else g = {
                eventTime: g,
                lane: d,
                tag: l.tag,
                payload: l.payload,
                callback: l.callback,
                next: null
            }, c === null ? (u = c = g, a = f) : c = c.next = g, o |= d;
            if (l = l.next, l === null) {
                if (l = i.shared.pending, l === null) break;
                d = l, l = d.next, d.next = null, i.lastBaseUpdate = d, i.shared.pending = null
            }
        } while (1);
        if (c === null && (a = f), i.baseState = a, i.firstBaseUpdate = u, i.lastBaseUpdate = c, t = i.shared.interleaved, t !== null) {
            i = t;
            do o |= i.lane, i = i.next; while (i !== t)
        } else s === null && (i.shared.lanes = 0);
        vn |= o, e.lanes = o, e.memoizedState = f
    }
}

function qu(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null)
        for (t = 0; t < e.length; t++) {
            var r = e[t],
                i = r.callback;
            if (i !== null) {
                if (r.callback = null, r = n, typeof i != "function") throw Error(C(191, i));
                i.call(r)
            }
        }
}
var th = new qf.Component().refs;

function xl(e, t, n, r) {
    t = e.memoizedState, n = n(r, t), n = n == null ? t : Z({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n)
}
var zs = {
    isMounted: function(e) {
        return (e = e._reactInternals) ? wn(e) === e : !1
    },
    enqueueSetState: function(e, t, n) {
        e = e._reactInternals;
        var r = we(),
            i = Ft(e),
            s = pt(r, i);
        s.payload = t, n != null && (s.callback = n), t = Rt(e, s, i), t !== null && (Ze(t, e, i, r), $i(t, e, i))
    },
    enqueueReplaceState: function(e, t, n) {
        e = e._reactInternals;
        var r = we(),
            i = Ft(e),
            s = pt(r, i);
        s.tag = 1, s.payload = t, n != null && (s.callback = n), t = Rt(e, s, i), t !== null && (Ze(t, e, i, r), $i(t, e, i))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var n = we(),
            r = Ft(e),
            i = pt(n, r);
        i.tag = 2, t != null && (i.callback = t), t = Rt(e, i, r), t !== null && (Ze(t, e, r, n), $i(t, e, r))
    }
};

function ec(e, t, n, r, i, s, o) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, s, o) : t.prototype && t.prototype.isPureReactComponent ? !Yr(n, r) || !Yr(i, s) : !0
}

function nh(e, t, n) {
    var r = !1,
        i = Yt,
        s = t.contextType;
    return typeof s == "object" && s !== null ? s = He(s) : (i = Te(t) ? pn : ve.current, r = t.contextTypes, s = (r = r != null) ? bn(e, i) : Yt), t = new t(n, s), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = zs, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = i, e.__reactInternalMemoizedMaskedChildContext = s), t
}

function tc(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && zs.enqueueReplaceState(t, t.state, null)
}

function wl(e, t, n, r) {
    var i = e.stateNode;
    i.props = n, i.state = e.memoizedState, i.refs = th, Ea(e);
    var s = t.contextType;
    typeof s == "object" && s !== null ? i.context = He(s) : (s = Te(t) ? pn : ve.current, i.context = bn(e, s)), i.state = e.memoizedState, s = t.getDerivedStateFromProps, typeof s == "function" && (xl(e, t, s, n), i.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), t !== i.state && zs.enqueueReplaceState(i, i.state, null), hs(e, n, i, r), i.state = e.memoizedState), typeof i.componentDidMount == "function" && (e.flags |= 4194308)
}

function dr(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner, n) {
                if (n.tag !== 1) throw Error(C(309));
                var r = n.stateNode
            }
            if (!r) throw Error(C(147, e));
            var i = r,
                s = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === s ? t.ref : (t = function(o) {
                var l = i.refs;
                l === th && (l = i.refs = {}), o === null ? delete l[s] : l[s] = o
            }, t._stringRef = s, t)
        }
        if (typeof e != "string") throw Error(C(284));
        if (!n._owner) throw Error(C(290, e))
    }
    return e
}

function _i(e, t) {
    throw e = Object.prototype.toString.call(t), Error(C(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}

function nc(e) {
    var t = e._init;
    return t(e._payload)
}

function rh(e) {
    function t(p, h) {
        if (e) {
            var m = p.deletions;
            m === null ? (p.deletions = [h], p.flags |= 16) : m.push(h)
        }
    }

    function n(p, h) {
        if (!e) return null;
        for (; h !== null;) t(p, h), h = h.sibling;
        return null
    }

    function r(p, h) {
        for (p = new Map; h !== null;) h.key !== null ? p.set(h.key, h) : p.set(h.index, h), h = h.sibling;
        return p
    }

    function i(p, h) {
        return p = zt(p, h), p.index = 0, p.sibling = null, p
    }

    function s(p, h, m) {
        return p.index = m, e ? (m = p.alternate, m !== null ? (m = m.index, m < h ? (p.flags |= 2, h) : m) : (p.flags |= 2, h)) : (p.flags |= 1048576, h)
    }

    function o(p) {
        return e && p.alternate === null && (p.flags |= 2), p
    }

    function l(p, h, m, w) {
        return h === null || h.tag !== 6 ? (h = jo(m, p.mode, w), h.return = p, h) : (h = i(h, m), h.return = p, h)
    }

    function a(p, h, m, w) {
        var S = m.type;
        return S === _n ? c(p, h, m.props.children, w, m.key) : h !== null && (h.elementType === S || typeof S == "object" && S !== null && S.$$typeof === Et && nc(S) === h.type) ? (w = i(h, m.props), w.ref = dr(p, h, m), w.return = p, w) : (w = Ki(m.type, m.key, m.props, null, p.mode, w), w.ref = dr(p, h, m), w.return = p, w)
    }

    function u(p, h, m, w) {
        return h === null || h.tag !== 4 || h.stateNode.containerInfo !== m.containerInfo || h.stateNode.implementation !== m.implementation ? (h = No(m, p.mode, w), h.return = p, h) : (h = i(h, m.children || []), h.return = p, h)
    }

    function c(p, h, m, w, S) {
        return h === null || h.tag !== 7 ? (h = hn(m, p.mode, w, S), h.return = p, h) : (h = i(h, m), h.return = p, h)
    }

    function f(p, h, m) {
        if (typeof h == "string" && h !== "" || typeof h == "number") return h = jo("" + h, p.mode, m), h.return = p, h;
        if (typeof h == "object" && h !== null) {
            switch (h.$$typeof) {
                case gi:
                    return m = Ki(h.type, h.key, h.props, null, p.mode, m), m.ref = dr(p, null, h), m.return = p, m;
                case Tn:
                    return h = No(h, p.mode, m), h.return = p, h;
                case Et:
                    var w = h._init;
                    return f(p, w(h._payload), m)
            }
            if (yr(h) || lr(h)) return h = hn(h, p.mode, m, null), h.return = p, h;
            _i(p, h)
        }
        return null
    }

    function d(p, h, m, w) {
        var S = h !== null ? h.key : null;
        if (typeof m == "string" && m !== "" || typeof m == "number") return S !== null ? null : l(p, h, "" + m, w);
        if (typeof m == "object" && m !== null) {
            switch (m.$$typeof) {
                case gi:
                    return m.key === S ? a(p, h, m, w) : null;
                case Tn:
                    return m.key === S ? u(p, h, m, w) : null;
                case Et:
                    return S = m._init, d(p, h, S(m._payload), w)
            }
            if (yr(m) || lr(m)) return S !== null ? null : c(p, h, m, w, null);
            _i(p, m)
        }
        return null
    }

    function g(p, h, m, w, S) {
        if (typeof w == "string" && w !== "" || typeof w == "number") return p = p.get(m) || null, l(h, p, "" + w, S);
        if (typeof w == "object" && w !== null) {
            switch (w.$$typeof) {
                case gi:
                    return p = p.get(w.key === null ? m : w.key) || null, a(h, p, w, S);
                case Tn:
                    return p = p.get(w.key === null ? m : w.key) || null, u(h, p, w, S);
                case Et:
                    var T = w._init;
                    return g(p, h, m, T(w._payload), S)
            }
            if (yr(w) || lr(w)) return p = p.get(m) || null, c(h, p, w, S, null);
            _i(h, w)
        }
        return null
    }

    function v(p, h, m, w) {
        for (var S = null, T = null, k = h, P = h = 0, L = null; k !== null && P < m.length; P++) {
            k.index > P ? (L = k, k = null) : L = k.sibling;
            var A = d(p, k, m[P], w);
            if (A === null) {
                k === null && (k = L);
                break
            }
            e && k && A.alternate === null && t(p, k), h = s(A, h, P), T === null ? S = A : T.sibling = A, T = A, k = L
        }
        if (P === m.length) return n(p, k), W && nn(p, P), S;
        if (k === null) {
            for (; P < m.length; P++) k = f(p, m[P], w), k !== null && (h = s(k, h, P), T === null ? S = k : T.sibling = k, T = k);
            return W && nn(p, P), S
        }
        for (k = r(p, k); P < m.length; P++) L = g(k, p, P, m[P], w), L !== null && (e && L.alternate !== null && k.delete(L.key === null ? P : L.key), h = s(L, h, P), T === null ? S = L : T.sibling = L, T = L);
        return e && k.forEach(function(H) {
            return t(p, H)
        }), W && nn(p, P), S
    }

    function x(p, h, m, w) {
        var S = lr(m);
        if (typeof S != "function") throw Error(C(150));
        if (m = S.call(m), m == null) throw Error(C(151));
        for (var T = S = null, k = h, P = h = 0, L = null, A = m.next(); k !== null && !A.done; P++, A = m.next()) {
            k.index > P ? (L = k, k = null) : L = k.sibling;
            var H = d(p, k, A.value, w);
            if (H === null) {
                k === null && (k = L);
                break
            }
            e && k && H.alternate === null && t(p, k), h = s(H, h, P), T === null ? S = H : T.sibling = H, T = H, k = L
        }
        if (A.done) return n(p, k), W && nn(p, P), S;
        if (k === null) {
            for (; !A.done; P++, A = m.next()) A = f(p, A.value, w), A !== null && (h = s(A, h, P), T === null ? S = A : T.sibling = A, T = A);
            return W && nn(p, P), S
        }
        for (k = r(p, k); !A.done; P++, A = m.next()) A = g(k, p, P, A.value, w), A !== null && (e && A.alternate !== null && k.delete(A.key === null ? P : A.key), h = s(A, h, P), T === null ? S = A : T.sibling = A, T = A);
        return e && k.forEach(function(de) {
            return t(p, de)
        }), W && nn(p, P), S
    }

    function E(p, h, m, w) {
        if (typeof m == "object" && m !== null && m.type === _n && m.key === null && (m = m.props.children), typeof m == "object" && m !== null) {
            switch (m.$$typeof) {
                case gi:
                    e: {
                        for (var S = m.key, T = h; T !== null;) {
                            if (T.key === S) {
                                if (S = m.type, S === _n) {
                                    if (T.tag === 7) {
                                        n(p, T.sibling), h = i(T, m.props.children), h.return = p, p = h;
                                        break e
                                    }
                                } else if (T.elementType === S || typeof S == "object" && S !== null && S.$$typeof === Et && nc(S) === T.type) {
                                    n(p, T.sibling), h = i(T, m.props), h.ref = dr(p, T, m), h.return = p, p = h;
                                    break e
                                }
                                n(p, T);
                                break
                            } else t(p, T);
                            T = T.sibling
                        }
                        m.type === _n ? (h = hn(m.props.children, p.mode, w, m.key), h.return = p, p = h) : (w = Ki(m.type, m.key, m.props, null, p.mode, w), w.ref = dr(p, h, m), w.return = p, p = w)
                    }
                    return o(p);
                case Tn:
                    e: {
                        for (T = m.key; h !== null;) {
                            if (h.key === T)
                                if (h.tag === 4 && h.stateNode.containerInfo === m.containerInfo && h.stateNode.implementation === m.implementation) {
                                    n(p, h.sibling), h = i(h, m.children || []), h.return = p, p = h;
                                    break e
                                } else {
                                    n(p, h);
                                    break
                                }
                            else t(p, h);
                            h = h.sibling
                        }
                        h = No(m, p.mode, w),
                        h.return = p,
                        p = h
                    }
                    return o(p);
                case Et:
                    return T = m._init, E(p, h, T(m._payload), w)
            }
            if (yr(m)) return v(p, h, m, w);
            if (lr(m)) return x(p, h, m, w);
            _i(p, m)
        }
        return typeof m == "string" && m !== "" || typeof m == "number" ? (m = "" + m, h !== null && h.tag === 6 ? (n(p, h.sibling), h = i(h, m), h.return = p, p = h) : (n(p, h), h = jo(m, p.mode, w), h.return = p, p = h), o(p)) : n(p, h)
    }
    return E
}
var Jn = rh(!0),
    ih = rh(!1),
    ui = {},
    lt = Gt(ui),
    Gr = Gt(ui),
    br = Gt(ui);

function un(e) {
    if (e === ui) throw Error(C(174));
    return e
}

function Ta(e, t) {
    switch (z(br, t), z(Gr, e), z(lt, ui), e = t.nodeType, e) {
        case 9:
        case 11:
            t = (t = t.documentElement) ? t.namespaceURI : Jo(null, "");
            break;
        default:
            e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Jo(t, e)
    }
    U(lt), z(lt, t)
}

function qn() {
    U(lt), U(Gr), U(br)
}

function sh(e) {
    un(br.current);
    var t = un(lt.current),
        n = Jo(t, e.type);
    t !== n && (z(Gr, e), z(lt, n))
}

function _a(e) {
    Gr.current === e && (U(lt), U(Gr))
}
var Q = Gt(0);

function ps(e) {
    for (var t = e; t !== null;) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128) return t
        } else if (t.child !== null) {
            t.child.return = t, t = t.child;
            continue
        }
        if (t === e) break;
        for (; t.sibling === null;) {
            if (t.return === null || t.return === e) return null;
            t = t.return
        }
        t.sibling.return = t.return, t = t.sibling
    }
    return null
}
var Po = [];

function ja() {
    for (var e = 0; e < Po.length; e++) Po[e]._workInProgressVersionPrimary = null;
    Po.length = 0
}
var Wi = Pt.ReactCurrentDispatcher,
    Co = Pt.ReactCurrentBatchConfig,
    gn = 0,
    b = null,
    ie = null,
    le = null,
    ms = !1,
    jr = !1,
    Zr = 0,
    kv = 0;

function pe() {
    throw Error(C(321))
}

function Na(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!Je(e[n], t[n])) return !1;
    return !0
}

function La(e, t, n, r, i, s) {
    if (gn = s, b = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Wi.current = e === null || e.memoizedState === null ? jv : Nv, e = n(r, i), jr) {
        s = 0;
        do {
            if (jr = !1, Zr = 0, 25 <= s) throw Error(C(301));
            s += 1, le = ie = null, t.updateQueue = null, Wi.current = Lv, e = n(r, i)
        } while (jr)
    }
    if (Wi.current = gs, t = ie !== null && ie.next !== null, gn = 0, le = ie = b = null, ms = !1, t) throw Error(C(300));
    return e
}

function Aa() {
    var e = Zr !== 0;
    return Zr = 0, e
}

function rt() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return le === null ? b.memoizedState = le = e : le = le.next = e, le
}

function Ye() {
    if (ie === null) {
        var e = b.alternate;
        e = e !== null ? e.memoizedState : null
    } else e = ie.next;
    var t = le === null ? b.memoizedState : le.next;
    if (t !== null) le = t, ie = e;
    else {
        if (e === null) throw Error(C(310));
        ie = e, e = {
            memoizedState: ie.memoizedState,
            baseState: ie.baseState,
            baseQueue: ie.baseQueue,
            queue: ie.queue,
            next: null
        }, le === null ? b.memoizedState = le = e : le = le.next = e
    }
    return le
}

function Jr(e, t) {
    return typeof t == "function" ? t(e) : t
}

function ko(e) {
    var t = Ye(),
        n = t.queue;
    if (n === null) throw Error(C(311));
    n.lastRenderedReducer = e;
    var r = ie,
        i = r.baseQueue,
        s = n.pending;
    if (s !== null) {
        if (i !== null) {
            var o = i.next;
            i.next = s.next, s.next = o
        }
        r.baseQueue = i = s, n.pending = null
    }
    if (i !== null) {
        s = i.next, r = r.baseState;
        var l = o = null,
            a = null,
            u = s;
        do {
            var c = u.lane;
            if ((gn & c) === c) a !== null && (a = a.next = {
                lane: 0,
                action: u.action,
                hasEagerState: u.hasEagerState,
                eagerState: u.eagerState,
                next: null
            }), r = u.hasEagerState ? u.eagerState : e(r, u.action);
            else {
                var f = {
                    lane: c,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                };
                a === null ? (l = a = f, o = r) : a = a.next = f, b.lanes |= c, vn |= c
            }
            u = u.next
        } while (u !== null && u !== s);
        a === null ? o = r : a.next = l, Je(r, t.memoizedState) || (ke = !0), t.memoizedState = r, t.baseState = o, t.baseQueue = a, n.lastRenderedState = r
    }
    if (e = n.interleaved, e !== null) {
        i = e;
        do s = i.lane, b.lanes |= s, vn |= s, i = i.next; while (i !== e)
    } else i === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}

function Eo(e) {
    var t = Ye(),
        n = t.queue;
    if (n === null) throw Error(C(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
        i = n.pending,
        s = t.memoizedState;
    if (i !== null) {
        n.pending = null;
        var o = i = i.next;
        do s = e(s, o.action), o = o.next; while (o !== i);
        Je(s, t.memoizedState) || (ke = !0), t.memoizedState = s, t.baseQueue === null && (t.baseState = s), n.lastRenderedState = s
    }
    return [s, r]
}

function oh() {}

function lh(e, t) {
    var n = b,
        r = Ye(),
        i = t(),
        s = !Je(r.memoizedState, i);
    if (s && (r.memoizedState = i, ke = !0), r = r.queue, Va(ch.bind(null, n, r, e), [e]), r.getSnapshot !== t || s || le !== null && le.memoizedState.tag & 1) {
        if (n.flags |= 2048, qr(9, uh.bind(null, n, r, i, t), void 0, null), ae === null) throw Error(C(349));
        gn & 30 || ah(n, t, i)
    }
    return i
}

function ah(e, t, n) {
    e.flags |= 16384, e = {
        getSnapshot: t,
        value: n
    }, t = b.updateQueue, t === null ? (t = {
        lastEffect: null,
        stores: null
    }, b.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e))
}

function uh(e, t, n, r) {
    t.value = n, t.getSnapshot = r, fh(t) && dh(e)
}

function ch(e, t, n) {
    return n(function() {
        fh(t) && dh(e)
    })
}

function fh(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !Je(e, n)
    } catch {
        return !0
    }
}

function dh(e) {
    var t = xt(e, 1);
    t !== null && Ze(t, e, 1, -1)
}

function rc(e) {
    var t = rt();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Jr,
        lastRenderedState: e
    }, t.queue = e, e = e.dispatch = _v.bind(null, b, e), [t.memoizedState, e]
}

function qr(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    }, t = b.updateQueue, t === null ? (t = {
        lastEffect: null,
        stores: null
    }, b.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e
}

function hh() {
    return Ye().memoizedState
}

function Hi(e, t, n, r) {
    var i = rt();
    b.flags |= e, i.memoizedState = qr(1 | t, n, void 0, r === void 0 ? null : r)
}

function Bs(e, t, n, r) {
    var i = Ye();
    r = r === void 0 ? null : r;
    var s = void 0;
    if (ie !== null) {
        var o = ie.memoizedState;
        if (s = o.destroy, r !== null && Na(r, o.deps)) {
            i.memoizedState = qr(t, n, s, r);
            return
        }
    }
    b.flags |= e, i.memoizedState = qr(1 | t, n, s, r)
}

function ic(e, t) {
    return Hi(8390656, 8, e, t)
}

function Va(e, t) {
    return Bs(2048, 8, e, t)
}

function ph(e, t) {
    return Bs(4, 2, e, t)
}

function mh(e, t) {
    return Bs(4, 4, e, t)
}

function gh(e, t) {
    if (typeof t == "function") return e = e(), t(e),
        function() {
            t(null)
        };
    if (t != null) return e = e(), t.current = e,
        function() {
            t.current = null
        }
}

function vh(e, t, n) {
    return n = n != null ? n.concat([e]) : null, Bs(4, 4, gh.bind(null, t, e), n)
}

function Ma() {}

function yh(e, t) {
    var n = Ye();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Na(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e)
}

function xh(e, t) {
    var n = Ye();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Na(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e)
}

function wh(e, t, n) {
    return gn & 21 ? (Je(n, t) || (n = Cd(), b.lanes |= n, vn |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, ke = !0), e.memoizedState = n)
}

function Ev(e, t) {
    var n = F;
    F = n !== 0 && 4 > n ? n : 4, e(!0);
    var r = Co.transition;
    Co.transition = {};
    try {
        e(!1), t()
    } finally {
        F = n, Co.transition = r
    }
}

function Sh() {
    return Ye().memoizedState
}

function Tv(e, t, n) {
    var r = Ft(e);
    if (n = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        }, Ph(e)) Ch(t, n);
    else if (n = qd(e, t, n, r), n !== null) {
        var i = we();
        Ze(n, e, r, i), kh(n, t, r)
    }
}

function _v(e, t, n) {
    var r = Ft(e),
        i = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
    if (Ph(e)) Ch(t, i);
    else {
        var s = e.alternate;
        if (e.lanes === 0 && (s === null || s.lanes === 0) && (s = t.lastRenderedReducer, s !== null)) try {
            var o = t.lastRenderedState,
                l = s(o, n);
            if (i.hasEagerState = !0, i.eagerState = l, Je(l, o)) {
                var a = t.interleaved;
                a === null ? (i.next = i, ka(t)) : (i.next = a.next, a.next = i), t.interleaved = i;
                return
            }
        } catch {} finally {}
        n = qd(e, t, i, r), n !== null && (i = we(), Ze(n, e, r, i), kh(n, t, r))
    }
}

function Ph(e) {
    var t = e.alternate;
    return e === b || t !== null && t === b
}

function Ch(e, t) {
    jr = ms = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t
}

function kh(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        r &= e.pendingLanes, n |= r, t.lanes = n, ca(e, n)
    }
}
var gs = {
        readContext: He,
        useCallback: pe,
        useContext: pe,
        useEffect: pe,
        useImperativeHandle: pe,
        useInsertionEffect: pe,
        useLayoutEffect: pe,
        useMemo: pe,
        useReducer: pe,
        useRef: pe,
        useState: pe,
        useDebugValue: pe,
        useDeferredValue: pe,
        useTransition: pe,
        useMutableSource: pe,
        useSyncExternalStore: pe,
        useId: pe,
        unstable_isNewReconciler: !1
    },
    jv = {
        readContext: He,
        useCallback: function(e, t) {
            return rt().memoizedState = [e, t === void 0 ? null : t], e
        },
        useContext: He,
        useEffect: ic,
        useImperativeHandle: function(e, t, n) {
            return n = n != null ? n.concat([e]) : null, Hi(4194308, 4, gh.bind(null, t, e), n)
        },
        useLayoutEffect: function(e, t) {
            return Hi(4194308, 4, e, t)
        },
        useInsertionEffect: function(e, t) {
            return Hi(4, 2, e, t)
        },
        useMemo: function(e, t) {
            var n = rt();
            return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e
        },
        useReducer: function(e, t, n) {
            var r = rt();
            return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = {
                pending: null,
                interleaved: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: e,
                lastRenderedState: t
            }, r.queue = e, e = e.dispatch = Tv.bind(null, b, e), [r.memoizedState, e]
        },
        useRef: function(e) {
            var t = rt();
            return e = {
                current: e
            }, t.memoizedState = e
        },
        useState: rc,
        useDebugValue: Ma,
        useDeferredValue: function(e) {
            return rt().memoizedState = e
        },
        useTransition: function() {
            var e = rc(!1),
                t = e[0];
            return e = Ev.bind(null, e[1]), rt().memoizedState = e, [t, e]
        },
        useMutableSource: function() {},
        useSyncExternalStore: function(e, t, n) {
            var r = b,
                i = rt();
            if (W) {
                if (n === void 0) throw Error(C(407));
                n = n()
            } else {
                if (n = t(), ae === null) throw Error(C(349));
                gn & 30 || ah(r, t, n)
            }
            i.memoizedState = n;
            var s = {
                value: n,
                getSnapshot: t
            };
            return i.queue = s, ic(ch.bind(null, r, s, e), [e]), r.flags |= 2048, qr(9, uh.bind(null, r, s, n, t), void 0, null), n
        },
        useId: function() {
            var e = rt(),
                t = ae.identifierPrefix;
            if (W) {
                var n = dt,
                    r = ft;
                n = (r & ~(1 << 32 - be(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Zr++, 0 < n && (t += "H" + n.toString(32)), t += ":"
            } else n = kv++, t = ":" + t + "r" + n.toString(32) + ":";
            return e.memoizedState = t
        },
        unstable_isNewReconciler: !1
    },
    Nv = {
        readContext: He,
        useCallback: yh,
        useContext: He,
        useEffect: Va,
        useImperativeHandle: vh,
        useInsertionEffect: ph,
        useLayoutEffect: mh,
        useMemo: xh,
        useReducer: ko,
        useRef: hh,
        useState: function() {
            return ko(Jr)
        },
        useDebugValue: Ma,
        useDeferredValue: function(e) {
            var t = Ye();
            return wh(t, ie.memoizedState, e)
        },
        useTransition: function() {
            var e = ko(Jr)[0],
                t = Ye().memoizedState;
            return [e, t]
        },
        useMutableSource: oh,
        useSyncExternalStore: lh,
        useId: Sh,
        unstable_isNewReconciler: !1
    },
    Lv = {
        readContext: He,
        useCallback: yh,
        useContext: He,
        useEffect: Va,
        useImperativeHandle: vh,
        useInsertionEffect: ph,
        useLayoutEffect: mh,
        useMemo: xh,
        useReducer: Eo,
        useRef: hh,
        useState: function() {
            return Eo(Jr)
        },
        useDebugValue: Ma,
        useDeferredValue: function(e) {
            var t = Ye();
            return ie === null ? t.memoizedState = e : wh(t, ie.memoizedState, e)
        },
        useTransition: function() {
            var e = Eo(Jr)[0],
                t = Ye().memoizedState;
            return [e, t]
        },
        useMutableSource: oh,
        useSyncExternalStore: lh,
        useId: Sh,
        unstable_isNewReconciler: !1
    };

function er(e, t) {
    try {
        var n = "",
            r = t;
        do n += ig(r), r = r.return; while (r);
        var i = n
    } catch (s) {
        i = `
Error generating stack: ` + s.message + `
` + s.stack
    }
    return {
        value: e,
        source: t,
        stack: i,
        digest: null
    }
}

function To(e, t, n) {
    return {
        value: e,
        source: null,
        stack: n ? ? null,
        digest: t ? ? null
    }
}

function Sl(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function() {
            throw n
        })
    }
}
var Av = typeof WeakMap == "function" ? WeakMap : Map;

function Eh(e, t, n) {
    n = pt(-1, n), n.tag = 3, n.payload = {
        element: null
    };
    var r = t.value;
    return n.callback = function() {
        ys || (ys = !0, Al = r), Sl(e, t)
    }, n
}

function Th(e, t, n) {
    n = pt(-1, n), n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var i = t.value;
        n.payload = function() {
            return r(i)
        }, n.callback = function() {
            Sl(e, t)
        }
    }
    var s = e.stateNode;
    return s !== null && typeof s.componentDidCatch == "function" && (n.callback = function() {
        Sl(e, t), typeof r != "function" && (It === null ? It = new Set([this]) : It.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: o !== null ? o : ""
        })
    }), n
}

function sc(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new Av;
        var i = new Set;
        r.set(t, i)
    } else i = r.get(t), i === void 0 && (i = new Set, r.set(t, i));
    i.has(n) || (i.add(n), e = Yv.bind(null, e, t, n), t.then(e, e))
}

function oc(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
        e = e.return
    } while (e !== null);
    return null
}

function lc(e, t, n, r, i) {
    return e.mode & 1 ? (e.flags |= 65536, e.lanes = i, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = pt(-1, 1), t.tag = 2, Rt(n, t, 1))), n.lanes |= 1), e)
}
var Vv = Pt.ReactCurrentOwner,
    ke = !1;

function xe(e, t, n, r) {
    t.child = e === null ? ih(t, null, n, r) : Jn(t, e.child, n, r)
}

function ac(e, t, n, r, i) {
    n = n.render;
    var s = t.ref;
    return Xn(t, i), r = La(e, t, n, r, s, i), n = Aa(), e !== null && !ke ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, wt(e, t, i)) : (W && n && ya(t), t.flags |= 1, xe(e, t, r, i), t.child)
}

function uc(e, t, n, r, i) {
    if (e === null) {
        var s = n.type;
        return typeof s == "function" && !Ua(s) && s.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = s, _h(e, t, s, r, i)) : (e = Ki(n.type, null, r, t, t.mode, i), e.ref = t.ref, e.return = t, t.child = e)
    }
    if (s = e.child, !(e.lanes & i)) {
        var o = s.memoizedProps;
        if (n = n.compare, n = n !== null ? n : Yr, n(o, r) && e.ref === t.ref) return wt(e, t, i)
    }
    return t.flags |= 1, e = zt(s, r), e.ref = t.ref, e.return = t, t.child = e
}

function _h(e, t, n, r, i) {
    if (e !== null) {
        var s = e.memoizedProps;
        if (Yr(s, r) && e.ref === t.ref)
            if (ke = !1, t.pendingProps = r = s, (e.lanes & i) !== 0) e.flags & 131072 && (ke = !0);
            else return t.lanes = e.lanes, wt(e, t, i)
    }
    return Pl(e, t, n, r, i)
}

function jh(e, t, n) {
    var r = t.pendingProps,
        i = r.children,
        s = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1)) t.memoizedState = {
            baseLanes: 0,
            cachePool: null,
            transitions: null
        }, z(In, Le), Le |= n;
        else {
            if (!(n & 1073741824)) return e = s !== null ? s.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
                baseLanes: e,
                cachePool: null,
                transitions: null
            }, t.updateQueue = null, z(In, Le), Le |= e, null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            }, r = s !== null ? s.baseLanes : n, z(In, Le), Le |= r
        }
    else s !== null ? (r = s.baseLanes | n, t.memoizedState = null) : r = n, z(In, Le), Le |= r;
    return xe(e, t, i, n), t.child
}

function Nh(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152)
}

function Pl(e, t, n, r, i) {
    var s = Te(n) ? pn : ve.current;
    return s = bn(t, s), Xn(t, i), n = La(e, t, n, r, s, i), r = Aa(), e !== null && !ke ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, wt(e, t, i)) : (W && r && ya(t), t.flags |= 1, xe(e, t, n, i), t.child)
}

function cc(e, t, n, r, i) {
    if (Te(n)) {
        var s = !0;
        as(t)
    } else s = !1;
    if (Xn(t, i), t.stateNode === null) Yi(e, t), nh(t, n, r), wl(t, n, r, i), r = !0;
    else if (e === null) {
        var o = t.stateNode,
            l = t.memoizedProps;
        o.props = l;
        var a = o.context,
            u = n.contextType;
        typeof u == "object" && u !== null ? u = He(u) : (u = Te(n) ? pn : ve.current, u = bn(t, u));
        var c = n.getDerivedStateFromProps,
            f = typeof c == "function" || typeof o.getSnapshotBeforeUpdate == "function";
        f || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (l !== r || a !== u) && tc(t, o, r, u), Tt = !1;
        var d = t.memoizedState;
        o.state = d, hs(t, r, o, i), a = t.memoizedState, l !== r || d !== a || Ee.current || Tt ? (typeof c == "function" && (xl(t, n, c, r), a = t.memoizedState), (l = Tt || ec(t, n, l, r, d, a, u)) ? (f || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = a), o.props = r, o.state = a, o.context = u, r = l) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), r = !1)
    } else {
        o = t.stateNode, eh(e, t), l = t.memoizedProps, u = t.type === t.elementType ? l : Qe(t.type, l), o.props = u, f = t.pendingProps, d = o.context, a = n.contextType, typeof a == "object" && a !== null ? a = He(a) : (a = Te(n) ? pn : ve.current, a = bn(t, a));
        var g = n.getDerivedStateFromProps;
        (c = typeof g == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (l !== f || d !== a) && tc(t, o, r, a), Tt = !1, d = t.memoizedState, o.state = d, hs(t, r, o, i);
        var v = t.memoizedState;
        l !== f || d !== v || Ee.current || Tt ? (typeof g == "function" && (xl(t, n, g, r), v = t.memoizedState), (u = Tt || ec(t, n, u, r, d, v, a) || !1) ? (c || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, v, a), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, v, a)), typeof o.componentDidUpdate == "function" && (t.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || l === e.memoizedProps && d === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = v), o.props = r, o.state = v, o.context = a, r = u) : (typeof o.componentDidUpdate != "function" || l === e.memoizedProps && d === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024), r = !1)
    }
    return Cl(e, t, n, r, s, i)
}

function Cl(e, t, n, r, i, s) {
    Nh(e, t);
    var o = (t.flags & 128) !== 0;
    if (!r && !o) return i && Gu(t, n, !1), wt(e, t, s);
    r = t.stateNode, Vv.current = t;
    var l = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && o ? (t.child = Jn(t, e.child, null, s), t.child = Jn(t, null, l, s)) : xe(e, t, l, s), t.memoizedState = r.state, i && Gu(t, n, !0), t.child
}

function Lh(e) {
    var t = e.stateNode;
    t.pendingContext ? Ku(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Ku(e, t.context, !1), Ta(e, t.containerInfo)
}

function fc(e, t, n, r, i) {
    return Zn(), wa(i), t.flags |= 256, xe(e, t, n, r), t.child
}
var kl = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};

function El(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}

function Ah(e, t, n) {
    var r = t.pendingProps,
        i = Q.current,
        s = !1,
        o = (t.flags & 128) !== 0,
        l;
    if ((l = o) || (l = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0), l ? (s = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1), z(Q, i & 1), e === null) return vl(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (o = r.children, e = r.fallback, s ? (r = t.mode, s = t.child, o = {
        mode: "hidden",
        children: o
    }, !(r & 1) && s !== null ? (s.childLanes = 0, s.pendingProps = o) : s = Ws(o, r, 0, null), e = hn(e, r, n, null), s.return = t, e.return = t, s.sibling = e, t.child = s, t.child.memoizedState = El(n), t.memoizedState = kl, e) : Da(t, o));
    if (i = e.memoizedState, i !== null && (l = i.dehydrated, l !== null)) return Mv(e, t, o, r, l, i, n);
    if (s) {
        s = r.fallback, o = t.mode, i = e.child, l = i.sibling;
        var a = {
            mode: "hidden",
            children: r.children
        };
        return !(o & 1) && t.child !== i ? (r = t.child, r.childLanes = 0, r.pendingProps = a, t.deletions = null) : (r = zt(i, a), r.subtreeFlags = i.subtreeFlags & 14680064), l !== null ? s = zt(l, s) : (s = hn(s, o, n, null), s.flags |= 2), s.return = t, r.return = t, r.sibling = s, t.child = r, r = s, s = t.child, o = e.child.memoizedState, o = o === null ? El(n) : {
            baseLanes: o.baseLanes | n,
            cachePool: null,
            transitions: o.transitions
        }, s.memoizedState = o, s.childLanes = e.childLanes & ~n, t.memoizedState = kl, r
    }
    return s = e.child, e = s.sibling, r = zt(s, {
        mode: "visible",
        children: r.children
    }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r
}

function Da(e, t) {
    return t = Ws({
        mode: "visible",
        children: t
    }, e.mode, 0, null), t.return = e, e.child = t
}

function ji(e, t, n, r) {
    return r !== null && wa(r), Jn(t, e.child, null, n), e = Da(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e
}

function Mv(e, t, n, r, i, s, o) {
    if (n) return t.flags & 256 ? (t.flags &= -257, r = To(Error(C(422))), ji(e, t, o, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (s = r.fallback, i = t.mode, r = Ws({
        mode: "visible",
        children: r.children
    }, i, 0, null), s = hn(s, i, o, null), s.flags |= 2, r.return = t, s.return = t, r.sibling = s, t.child = r, t.mode & 1 && Jn(t, e.child, null, o), t.child.memoizedState = El(o), t.memoizedState = kl, s);
    if (!(t.mode & 1)) return ji(e, t, o, null);
    if (i.data === "$!") {
        if (r = i.nextSibling && i.nextSibling.dataset, r) var l = r.dgst;
        return r = l, s = Error(C(419)), r = To(s, r, void 0), ji(e, t, o, r)
    }
    if (l = (o & e.childLanes) !== 0, ke || l) {
        if (r = ae, r !== null) {
            switch (o & -o) {
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
                    i = 0
            }
            i = i & (r.suspendedLanes | o) ? 0 : i, i !== 0 && i !== s.retryLane && (s.retryLane = i, xt(e, i), Ze(r, e, i, -1))
        }
        return Ba(), r = To(Error(C(421))), ji(e, t, o, r)
    }
    return i.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Xv.bind(null, e), i._reactRetry = t, null) : (e = s.treeContext, Ae = Ot(i.nextSibling), Me = t, W = !0, Ge = null, e !== null && (Be[Ue++] = ft, Be[Ue++] = dt, Be[Ue++] = mn, ft = e.id, dt = e.overflow, mn = t), t = Da(t, r.children), t.flags |= 4096, t)
}

function dc(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), yl(e.return, t, n)
}

function _o(e, t, n, r, i) {
    var s = e.memoizedState;
    s === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i
    } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = r, s.tail = n, s.tailMode = i)
}

function Vh(e, t, n) {
    var r = t.pendingProps,
        i = r.revealOrder,
        s = r.tail;
    if (xe(e, t, r.children, n), r = Q.current, r & 2) r = r & 1 | 2, t.flags |= 128;
    else {
        if (e !== null && e.flags & 128) e: for (e = t.child; e !== null;) {
            if (e.tag === 13) e.memoizedState !== null && dc(e, n, t);
            else if (e.tag === 19) dc(e, n, t);
            else if (e.child !== null) {
                e.child.return = e, e = e.child;
                continue
            }
            if (e === t) break e;
            for (; e.sibling === null;) {
                if (e.return === null || e.return === t) break e;
                e = e.return
            }
            e.sibling.return = e.return, e = e.sibling
        }
        r &= 1
    }
    if (z(Q, r), !(t.mode & 1)) t.memoizedState = null;
    else switch (i) {
        case "forwards":
            for (n = t.child, i = null; n !== null;) e = n.alternate, e !== null && ps(e) === null && (i = n), n = n.sibling;
            n = i, n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), _o(t, !1, i, n, s);
            break;
        case "backwards":
            for (n = null, i = t.child, t.child = null; i !== null;) {
                if (e = i.alternate, e !== null && ps(e) === null) {
                    t.child = i;
                    break
                }
                e = i.sibling, i.sibling = n, n = i, i = e
            }
            _o(t, !0, n, null, s);
            break;
        case "together":
            _o(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
    }
    return t.child
}

function Yi(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2)
}

function wt(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), vn |= t.lanes, !(n & t.childLanes)) return null;
    if (e !== null && t.child !== e.child) throw Error(C(153));
    if (t.child !== null) {
        for (e = t.child, n = zt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;) e = e.sibling, n = n.sibling = zt(e, e.pendingProps), n.return = t;
        n.sibling = null
    }
    return t.child
}

function Dv(e, t, n) {
    switch (t.tag) {
        case 3:
            Lh(t), Zn();
            break;
        case 5:
            sh(t);
            break;
        case 1:
            Te(t.type) && as(t);
            break;
        case 4:
            Ta(t, t.stateNode.containerInfo);
            break;
        case 10:
            var r = t.type._context,
                i = t.memoizedProps.value;
            z(fs, r._currentValue), r._currentValue = i;
            break;
        case 13:
            if (r = t.memoizedState, r !== null) return r.dehydrated !== null ? (z(Q, Q.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Ah(e, t, n) : (z(Q, Q.current & 1), e = wt(e, t, n), e !== null ? e.sibling : null);
            z(Q, Q.current & 1);
            break;
        case 19:
            if (r = (n & t.childLanes) !== 0, e.flags & 128) {
                if (r) return Vh(e, t, n);
                t.flags |= 128
            }
            if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), z(Q, Q.current), r) break;
            return null;
        case 22:
        case 23:
            return t.lanes = 0, jh(e, t, n)
    }
    return wt(e, t, n)
}
var Mh, Tl, Dh, Oh;
Mh = function(e, t) {
    for (var n = t.child; n !== null;) {
        if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n, n = n.child;
            continue
        }
        if (n === t) break;
        for (; n.sibling === null;) {
            if (n.return === null || n.return === t) return;
            n = n.return
        }
        n.sibling.return = n.return, n = n.sibling
    }
};
Tl = function() {};
Dh = function(e, t, n, r) {
    var i = e.memoizedProps;
    if (i !== r) {
        e = t.stateNode, un(lt.current);
        var s = null;
        switch (n) {
            case "input":
                i = Ko(e, i), r = Ko(e, r), s = [];
                break;
            case "select":
                i = Z({}, i, {
                    value: void 0
                }), r = Z({}, r, {
                    value: void 0
                }), s = [];
                break;
            case "textarea":
                i = Zo(e, i), r = Zo(e, r), s = [];
                break;
            default:
                typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = os)
        }
        qo(n, r);
        var o;
        n = null;
        for (u in i)
            if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
                if (u === "style") {
                    var l = i[u];
                    for (o in l) l.hasOwnProperty(o) && (n || (n = {}), n[o] = "")
                } else u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (Fr.hasOwnProperty(u) ? s || (s = []) : (s = s || []).push(u, null));
        for (u in r) {
            var a = r[u];
            if (l = i != null ? i[u] : void 0, r.hasOwnProperty(u) && a !== l && (a != null || l != null))
                if (u === "style")
                    if (l) {
                        for (o in l) !l.hasOwnProperty(o) || a && a.hasOwnProperty(o) || (n || (n = {}), n[o] = "");
                        for (o in a) a.hasOwnProperty(o) && l[o] !== a[o] && (n || (n = {}), n[o] = a[o])
                    } else n || (s || (s = []), s.push(u, n)), n = a;
            else u === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, l = l ? l.__html : void 0, a != null && l !== a && (s = s || []).push(u, a)) : u === "children" ? typeof a != "string" && typeof a != "number" || (s = s || []).push(u, "" + a) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (Fr.hasOwnProperty(u) ? (a != null && u === "onScroll" && B("scroll", e), s || l === a || (s = [])) : (s = s || []).push(u, a))
        }
        n && (s = s || []).push("style", n);
        var u = s;
        (t.updateQueue = u) && (t.flags |= 4)
    }
};
Oh = function(e, t, n, r) {
    n !== r && (t.flags |= 4)
};

function hr(e, t) {
    if (!W) switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var n = null; t !== null;) t.alternate !== null && (n = t), t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = e.tail;
            for (var r = null; n !== null;) n.alternate !== null && (r = n), n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
    }
}

function me(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
        n = 0,
        r = 0;
    if (t)
        for (var i = e.child; i !== null;) n |= i.lanes | i.childLanes, r |= i.subtreeFlags & 14680064, r |= i.flags & 14680064, i.return = e, i = i.sibling;
    else
        for (i = e.child; i !== null;) n |= i.lanes | i.childLanes, r |= i.subtreeFlags, r |= i.flags, i.return = e, i = i.sibling;
    return e.subtreeFlags |= r, e.childLanes = n, t
}

function Ov(e, t, n) {
    var r = t.pendingProps;
    switch (xa(t), t.tag) {
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
            return me(t), null;
        case 1:
            return Te(t.type) && ls(), me(t), null;
        case 3:
            return r = t.stateNode, qn(), U(Ee), U(ve), ja(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Ti(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Ge !== null && (Dl(Ge), Ge = null))), Tl(e, t), me(t), null;
        case 5:
            _a(t);
            var i = un(br.current);
            if (n = t.type, e !== null && t.stateNode != null) Dh(e, t, n, r, i), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
            else {
                if (!r) {
                    if (t.stateNode === null) throw Error(C(166));
                    return me(t), null
                }
                if (e = un(lt.current), Ti(t)) {
                    r = t.stateNode, n = t.type;
                    var s = t.memoizedProps;
                    switch (r[st] = t, r[Kr] = s, e = (t.mode & 1) !== 0, n) {
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
                            for (i = 0; i < wr.length; i++) B(wr[i], r);
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
                            Su(r, s), B("invalid", r);
                            break;
                        case "select":
                            r._wrapperState = {
                                wasMultiple: !!s.multiple
                            }, B("invalid", r);
                            break;
                        case "textarea":
                            Cu(r, s), B("invalid", r)
                    }
                    qo(n, s), i = null;
                    for (var o in s)
                        if (s.hasOwnProperty(o)) {
                            var l = s[o];
                            o === "children" ? typeof l == "string" ? r.textContent !== l && (s.suppressHydrationWarning !== !0 && Ei(r.textContent, l, e), i = ["children", l]) : typeof l == "number" && r.textContent !== "" + l && (s.suppressHydrationWarning !== !0 && Ei(r.textContent, l, e), i = ["children", "" + l]) : Fr.hasOwnProperty(o) && l != null && o === "onScroll" && B("scroll", r)
                        }
                    switch (n) {
                        case "input":
                            vi(r), Pu(r, s, !0);
                            break;
                        case "textarea":
                            vi(r), ku(r);
                            break;
                        case "select":
                        case "option":
                            break;
                        default:
                            typeof s.onClick == "function" && (r.onclick = os)
                    }
                    r = i, t.updateQueue = r, r !== null && (t.flags |= 4)
                } else {
                    o = i.nodeType === 9 ? i : i.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = ad(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = o.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = o.createElement(n, {
                        is: r.is
                    }) : (e = o.createElement(n), n === "select" && (o = e, r.multiple ? o.multiple = !0 : r.size && (o.size = r.size))) : e = o.createElementNS(e, n), e[st] = t, e[Kr] = r, Mh(e, t, !1, !1), t.stateNode = e;
                    e: {
                        switch (o = el(n, r), n) {
                            case "dialog":
                                B("cancel", e), B("close", e), i = r;
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                B("load", e), i = r;
                                break;
                            case "video":
                            case "audio":
                                for (i = 0; i < wr.length; i++) B(wr[i], e);
                                i = r;
                                break;
                            case "source":
                                B("error", e), i = r;
                                break;
                            case "img":
                            case "image":
                            case "link":
                                B("error", e), B("load", e), i = r;
                                break;
                            case "details":
                                B("toggle", e), i = r;
                                break;
                            case "input":
                                Su(e, r), i = Ko(e, r), B("invalid", e);
                                break;
                            case "option":
                                i = r;
                                break;
                            case "select":
                                e._wrapperState = {
                                    wasMultiple: !!r.multiple
                                }, i = Z({}, r, {
                                    value: void 0
                                }), B("invalid", e);
                                break;
                            case "textarea":
                                Cu(e, r), i = Zo(e, r), B("invalid", e);
                                break;
                            default:
                                i = r
                        }
                        qo(n, i),
                        l = i;
                        for (s in l)
                            if (l.hasOwnProperty(s)) {
                                var a = l[s];
                                s === "style" ? fd(e, a) : s === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, a != null && ud(e, a)) : s === "children" ? typeof a == "string" ? (n !== "textarea" || a !== "") && zr(e, a) : typeof a == "number" && zr(e, "" + a) : s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && s !== "autoFocus" && (Fr.hasOwnProperty(s) ? a != null && s === "onScroll" && B("scroll", e) : a != null && ia(e, s, a, o))
                            }
                        switch (n) {
                            case "input":
                                vi(e), Pu(e, r, !1);
                                break;
                            case "textarea":
                                vi(e), ku(e);
                                break;
                            case "option":
                                r.value != null && e.setAttribute("value", "" + Ht(r.value));
                                break;
                            case "select":
                                e.multiple = !!r.multiple, s = r.value, s != null ? $n(e, !!r.multiple, s, !1) : r.defaultValue != null && $n(e, !!r.multiple, r.defaultValue, !0);
                                break;
                            default:
                                typeof i.onClick == "function" && (e.onclick = os)
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
                                r = !1
                        }
                    }
                    r && (t.flags |= 4)
                }
                t.ref !== null && (t.flags |= 512, t.flags |= 2097152)
            }
            return me(t), null;
        case 6:
            if (e && t.stateNode != null) Oh(e, t, e.memoizedProps, r);
            else {
                if (typeof r != "string" && t.stateNode === null) throw Error(C(166));
                if (n = un(br.current), un(lt.current), Ti(t)) {
                    if (r = t.stateNode, n = t.memoizedProps, r[st] = t, (s = r.nodeValue !== n) && (e = Me, e !== null)) switch (e.tag) {
                        case 3:
                            Ei(r.nodeValue, n, (e.mode & 1) !== 0);
                            break;
                        case 5:
                            e.memoizedProps.suppressHydrationWarning !== !0 && Ei(r.nodeValue, n, (e.mode & 1) !== 0)
                    }
                    s && (t.flags |= 4)
                } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[st] = t, t.stateNode = r
            }
            return me(t), null;
        case 13:
            if (U(Q), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                if (W && Ae !== null && t.mode & 1 && !(t.flags & 128)) Jd(), Zn(), t.flags |= 98560, s = !1;
                else if (s = Ti(t), r !== null && r.dehydrated !== null) {
                    if (e === null) {
                        if (!s) throw Error(C(318));
                        if (s = t.memoizedState, s = s !== null ? s.dehydrated : null, !s) throw Error(C(317));
                        s[st] = t
                    } else Zn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
                    me(t), s = !1
                } else Ge !== null && (Dl(Ge), Ge = null), s = !0;
                if (!s) return t.flags & 65536 ? t : null
            }
            return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || Q.current & 1 ? oe === 0 && (oe = 3) : Ba())), t.updateQueue !== null && (t.flags |= 4), me(t), null);
        case 4:
            return qn(), Tl(e, t), e === null && Xr(t.stateNode.containerInfo), me(t), null;
        case 10:
            return Ca(t.type._context), me(t), null;
        case 17:
            return Te(t.type) && ls(), me(t), null;
        case 19:
            if (U(Q), s = t.memoizedState, s === null) return me(t), null;
            if (r = (t.flags & 128) !== 0, o = s.rendering, o === null)
                if (r) hr(s, !1);
                else {
                    if (oe !== 0 || e !== null && e.flags & 128)
                        for (e = t.child; e !== null;) {
                            if (o = ps(e), o !== null) {
                                for (t.flags |= 128, hr(s, !1), r = o.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null;) s = n, e = r, s.flags &= 14680066, o = s.alternate, o === null ? (s.childLanes = 0, s.lanes = e, s.child = null, s.subtreeFlags = 0, s.memoizedProps = null, s.memoizedState = null, s.updateQueue = null, s.dependencies = null, s.stateNode = null) : (s.childLanes = o.childLanes, s.lanes = o.lanes, s.child = o.child, s.subtreeFlags = 0, s.deletions = null, s.memoizedProps = o.memoizedProps, s.memoizedState = o.memoizedState, s.updateQueue = o.updateQueue, s.type = o.type, e = o.dependencies, s.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }), n = n.sibling;
                                return z(Q, Q.current & 1 | 2), t.child
                            }
                            e = e.sibling
                        }
                    s.tail !== null && te() > tr && (t.flags |= 128, r = !0, hr(s, !1), t.lanes = 4194304)
                }
            else {
                if (!r)
                    if (e = ps(o), e !== null) {
                        if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), hr(s, !0), s.tail === null && s.tailMode === "hidden" && !o.alternate && !W) return me(t), null
                    } else 2 * te() - s.renderingStartTime > tr && n !== 1073741824 && (t.flags |= 128, r = !0, hr(s, !1), t.lanes = 4194304);
                s.isBackwards ? (o.sibling = t.child, t.child = o) : (n = s.last, n !== null ? n.sibling = o : t.child = o, s.last = o)
            }
            return s.tail !== null ? (t = s.tail, s.rendering = t, s.tail = t.sibling, s.renderingStartTime = te(), t.sibling = null, n = Q.current, z(Q, r ? n & 1 | 2 : n & 1), t) : (me(t), null);
        case 22:
        case 23:
            return za(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Le & 1073741824 && (me(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : me(t), null;
        case 24:
            return null;
        case 25:
            return null
    }
    throw Error(C(156, t.tag))
}

function Rv(e, t) {
    switch (xa(t), t.tag) {
        case 1:
            return Te(t.type) && ls(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 3:
            return qn(), U(Ee), U(ve), ja(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
        case 5:
            return _a(t), null;
        case 13:
            if (U(Q), e = t.memoizedState, e !== null && e.dehydrated !== null) {
                if (t.alternate === null) throw Error(C(340));
                Zn()
            }
            return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 19:
            return U(Q), null;
        case 4:
            return qn(), null;
        case 10:
            return Ca(t.type._context), null;
        case 22:
        case 23:
            return za(), null;
        case 24:
            return null;
        default:
            return null
    }
}
var Ni = !1,
    ge = !1,
    Iv = typeof WeakSet == "function" ? WeakSet : Set,
    j = null;

function Rn(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function") try {
            n(null)
        } catch (r) {
            J(e, t, r)
        } else n.current = null
}

function _l(e, t, n) {
    try {
        n()
    } catch (r) {
        J(e, t, r)
    }
}
var hc = !1;

function Fv(e, t) {
    if (cl = rs, e = zd(), va(e)) {
        if ("selectionStart" in e) var n = {
            start: e.selectionStart,
            end: e.selectionEnd
        };
        else e: {
            n = (n = e.ownerDocument) && n.defaultView || window;
            var r = n.getSelection && n.getSelection();
            if (r && r.rangeCount !== 0) {
                n = r.anchorNode;
                var i = r.anchorOffset,
                    s = r.focusNode;
                r = r.focusOffset;
                try {
                    n.nodeType, s.nodeType
                } catch {
                    n = null;
                    break e
                }
                var o = 0,
                    l = -1,
                    a = -1,
                    u = 0,
                    c = 0,
                    f = e,
                    d = null;
                t: for (;;) {
                    for (var g; f !== n || i !== 0 && f.nodeType !== 3 || (l = o + i), f !== s || r !== 0 && f.nodeType !== 3 || (a = o + r), f.nodeType === 3 && (o += f.nodeValue.length), (g = f.firstChild) !== null;) d = f, f = g;
                    for (;;) {
                        if (f === e) break t;
                        if (d === n && ++u === i && (l = o), d === s && ++c === r && (a = o), (g = f.nextSibling) !== null) break;
                        f = d, d = f.parentNode
                    }
                    f = g
                }
                n = l === -1 || a === -1 ? null : {
                    start: l,
                    end: a
                }
            } else n = null
        }
        n = n || {
            start: 0,
            end: 0
        }
    } else n = null;
    for (fl = {
            focusedElem: e,
            selectionRange: n
        }, rs = !1, j = t; j !== null;)
        if (t = j, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, j = e;
        else
            for (; j !== null;) {
                t = j;
                try {
                    var v = t.alternate;
                    if (t.flags & 1024) switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (v !== null) {
                                var x = v.memoizedProps,
                                    E = v.memoizedState,
                                    p = t.stateNode,
                                    h = p.getSnapshotBeforeUpdate(t.elementType === t.type ? x : Qe(t.type, x), E);
                                p.__reactInternalSnapshotBeforeUpdate = h
                            }
                            break;
                        case 3:
                            var m = t.stateNode.containerInfo;
                            m.nodeType === 1 ? m.textContent = "" : m.nodeType === 9 && m.documentElement && m.removeChild(m.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(C(163))
                    }
                } catch (w) {
                    J(t, t.return, w)
                }
                if (e = t.sibling, e !== null) {
                    e.return = t.return, j = e;
                    break
                }
                j = t.return
            }
    return v = hc, hc = !1, v
}

function Nr(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
        var i = r = r.next;
        do {
            if ((i.tag & e) === e) {
                var s = i.destroy;
                i.destroy = void 0, s !== void 0 && _l(t, n, s)
            }
            i = i.next
        } while (i !== r)
    }
}

function Us(e, t) {
    if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}

function jl(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
            case 5:
                e = n;
                break;
            default:
                e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}

function Rh(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Rh(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[st], delete t[Kr], delete t[pl], delete t[wv], delete t[Sv])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
}

function Ih(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}

function pc(e) {
    e: for (;;) {
        for (; e.sibling === null;) {
            if (e.return === null || Ih(e.return)) return null;
            e = e.return
        }
        for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
            if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
            e.child.return = e, e = e.child
        }
        if (!(e.flags & 2)) return e.stateNode
    }
}

function Nl(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = os));
    else if (r !== 4 && (e = e.child, e !== null))
        for (Nl(e, t, n), e = e.sibling; e !== null;) Nl(e, t, n), e = e.sibling
}

function Ll(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null))
        for (Ll(e, t, n), e = e.sibling; e !== null;) Ll(e, t, n), e = e.sibling
}
var ue = null,
    Ke = !1;

function Ct(e, t, n) {
    for (n = n.child; n !== null;) Fh(e, t, n), n = n.sibling
}

function Fh(e, t, n) {
    if (ot && typeof ot.onCommitFiberUnmount == "function") try {
        ot.onCommitFiberUnmount(Ms, n)
    } catch {}
    switch (n.tag) {
        case 5:
            ge || Rn(n, t);
        case 6:
            var r = ue,
                i = Ke;
            ue = null, Ct(e, t, n), ue = r, Ke = i, ue !== null && (Ke ? (e = ue, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : ue.removeChild(n.stateNode));
            break;
        case 18:
            ue !== null && (Ke ? (e = ue, n = n.stateNode, e.nodeType === 8 ? wo(e.parentNode, n) : e.nodeType === 1 && wo(e, n), Wr(e)) : wo(ue, n.stateNode));
            break;
        case 4:
            r = ue, i = Ke, ue = n.stateNode.containerInfo, Ke = !0, Ct(e, t, n), ue = r, Ke = i;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (!ge && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
                i = r = r.next;
                do {
                    var s = i,
                        o = s.destroy;
                    s = s.tag, o !== void 0 && (s & 2 || s & 4) && _l(n, t, o), i = i.next
                } while (i !== r)
            }
            Ct(e, t, n);
            break;
        case 1:
            if (!ge && (Rn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
                r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount()
            } catch (l) {
                J(n, t, l)
            }
            Ct(e, t, n);
            break;
        case 21:
            Ct(e, t, n);
            break;
        case 22:
            n.mode & 1 ? (ge = (r = ge) || n.memoizedState !== null, Ct(e, t, n), ge = r) : Ct(e, t, n);
            break;
        default:
            Ct(e, t, n)
    }
}

function mc(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new Iv), t.forEach(function(r) {
            var i = Qv.bind(null, e, r);
            n.has(r) || (n.add(r), r.then(i, i))
        })
    }
}

function Xe(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var i = n[r];
            try {
                var s = e,
                    o = t,
                    l = o;
                e: for (; l !== null;) {
                    switch (l.tag) {
                        case 5:
                            ue = l.stateNode, Ke = !1;
                            break e;
                        case 3:
                            ue = l.stateNode.containerInfo, Ke = !0;
                            break e;
                        case 4:
                            ue = l.stateNode.containerInfo, Ke = !0;
                            break e
                    }
                    l = l.return
                }
                if (ue === null) throw Error(C(160));
                Fh(s, o, i), ue = null, Ke = !1;
                var a = i.alternate;
                a !== null && (a.return = null), i.return = null
            } catch (u) {
                J(i, t, u)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null;) zh(t, e), t = t.sibling
}

function zh(e, t) {
    var n = e.alternate,
        r = e.flags;
    switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if (Xe(t, e), nt(e), r & 4) {
                try {
                    Nr(3, e, e.return), Us(3, e)
                } catch (x) {
                    J(e, e.return, x)
                }
                try {
                    Nr(5, e, e.return)
                } catch (x) {
                    J(e, e.return, x)
                }
            }
            break;
        case 1:
            Xe(t, e), nt(e), r & 512 && n !== null && Rn(n, n.return);
            break;
        case 5:
            if (Xe(t, e), nt(e), r & 512 && n !== null && Rn(n, n.return), e.flags & 32) {
                var i = e.stateNode;
                try {
                    zr(i, "")
                } catch (x) {
                    J(e, e.return, x)
                }
            }
            if (r & 4 && (i = e.stateNode, i != null)) {
                var s = e.memoizedProps,
                    o = n !== null ? n.memoizedProps : s,
                    l = e.type,
                    a = e.updateQueue;
                if (e.updateQueue = null, a !== null) try {
                    l === "input" && s.type === "radio" && s.name != null && od(i, s), el(l, o);
                    var u = el(l, s);
                    for (o = 0; o < a.length; o += 2) {
                        var c = a[o],
                            f = a[o + 1];
                        c === "style" ? fd(i, f) : c === "dangerouslySetInnerHTML" ? ud(i, f) : c === "children" ? zr(i, f) : ia(i, c, f, u)
                    }
                    switch (l) {
                        case "input":
                            Go(i, s);
                            break;
                        case "textarea":
                            ld(i, s);
                            break;
                        case "select":
                            var d = i._wrapperState.wasMultiple;
                            i._wrapperState.wasMultiple = !!s.multiple;
                            var g = s.value;
                            g != null ? $n(i, !!s.multiple, g, !1) : d !== !!s.multiple && (s.defaultValue != null ? $n(i, !!s.multiple, s.defaultValue, !0) : $n(i, !!s.multiple, s.multiple ? [] : "", !1))
                    }
                    i[Kr] = s
                } catch (x) {
                    J(e, e.return, x)
                }
            }
            break;
        case 6:
            if (Xe(t, e), nt(e), r & 4) {
                if (e.stateNode === null) throw Error(C(162));
                i = e.stateNode, s = e.memoizedProps;
                try {
                    i.nodeValue = s
                } catch (x) {
                    J(e, e.return, x)
                }
            }
            break;
        case 3:
            if (Xe(t, e), nt(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
                Wr(t.containerInfo)
            } catch (x) {
                J(e, e.return, x)
            }
            break;
        case 4:
            Xe(t, e), nt(e);
            break;
        case 13:
            Xe(t, e), nt(e), i = e.child, i.flags & 8192 && (s = i.memoizedState !== null, i.stateNode.isHidden = s, !s || i.alternate !== null && i.alternate.memoizedState !== null || (Ia = te())), r & 4 && mc(e);
            break;
        case 22:
            if (c = n !== null && n.memoizedState !== null, e.mode & 1 ? (ge = (u = ge) || c, Xe(t, e), ge = u) : Xe(t, e), nt(e), r & 8192) {
                if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !c && e.mode & 1)
                    for (j = e, c = e.child; c !== null;) {
                        for (f = j = c; j !== null;) {
                            switch (d = j, g = d.child, d.tag) {
                                case 0:
                                case 11:
                                case 14:
                                case 15:
                                    Nr(4, d, d.return);
                                    break;
                                case 1:
                                    Rn(d, d.return);
                                    var v = d.stateNode;
                                    if (typeof v.componentWillUnmount == "function") {
                                        r = d, n = d.return;
                                        try {
                                            t = r, v.props = t.memoizedProps, v.state = t.memoizedState, v.componentWillUnmount()
                                        } catch (x) {
                                            J(r, n, x)
                                        }
                                    }
                                    break;
                                case 5:
                                    Rn(d, d.return);
                                    break;
                                case 22:
                                    if (d.memoizedState !== null) {
                                        vc(f);
                                        continue
                                    }
                            }
                            g !== null ? (g.return = d, j = g) : vc(f)
                        }
                        c = c.sibling
                    }
                e: for (c = null, f = e;;) {
                    if (f.tag === 5) {
                        if (c === null) {
                            c = f;
                            try {
                                i = f.stateNode, u ? (s = i.style, typeof s.setProperty == "function" ? s.setProperty("display", "none", "important") : s.display = "none") : (l = f.stateNode, a = f.memoizedProps.style, o = a != null && a.hasOwnProperty("display") ? a.display : null, l.style.display = cd("display", o))
                            } catch (x) {
                                J(e, e.return, x)
                            }
                        }
                    } else if (f.tag === 6) {
                        if (c === null) try {
                            f.stateNode.nodeValue = u ? "" : f.memoizedProps
                        } catch (x) {
                            J(e, e.return, x)
                        }
                    } else if ((f.tag !== 22 && f.tag !== 23 || f.memoizedState === null || f === e) && f.child !== null) {
                        f.child.return = f, f = f.child;
                        continue
                    }
                    if (f === e) break e;
                    for (; f.sibling === null;) {
                        if (f.return === null || f.return === e) break e;
                        c === f && (c = null), f = f.return
                    }
                    c === f && (c = null), f.sibling.return = f.return, f = f.sibling
                }
            }
            break;
        case 19:
            Xe(t, e), nt(e), r & 4 && mc(e);
            break;
        case 21:
            break;
        default:
            Xe(t, e), nt(e)
    }
}

function nt(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null;) {
                    if (Ih(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(C(160))
            }
            switch (r.tag) {
                case 5:
                    var i = r.stateNode;
                    r.flags & 32 && (zr(i, ""), r.flags &= -33);
                    var s = pc(e);
                    Ll(e, s, i);
                    break;
                case 3:
                case 4:
                    var o = r.stateNode.containerInfo,
                        l = pc(e);
                    Nl(e, l, o);
                    break;
                default:
                    throw Error(C(161))
            }
        }
        catch (a) {
            J(e, e.return, a)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}

function zv(e, t, n) {
    j = e, Bh(e)
}

function Bh(e, t, n) {
    for (var r = (e.mode & 1) !== 0; j !== null;) {
        var i = j,
            s = i.child;
        if (i.tag === 22 && r) {
            var o = i.memoizedState !== null || Ni;
            if (!o) {
                var l = i.alternate,
                    a = l !== null && l.memoizedState !== null || ge;
                l = Ni;
                var u = ge;
                if (Ni = o, (ge = a) && !u)
                    for (j = i; j !== null;) o = j, a = o.child, o.tag === 22 && o.memoizedState !== null ? yc(i) : a !== null ? (a.return = o, j = a) : yc(i);
                for (; s !== null;) j = s, Bh(s), s = s.sibling;
                j = i, Ni = l, ge = u
            }
            gc(e)
        } else i.subtreeFlags & 8772 && s !== null ? (s.return = i, j = s) : gc(e)
    }
}

function gc(e) {
    for (; j !== null;) {
        var t = j;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772) switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        ge || Us(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (t.flags & 4 && !ge)
                            if (n === null) r.componentDidMount();
                            else {
                                var i = t.elementType === t.type ? n.memoizedProps : Qe(t.type, n.memoizedProps);
                                r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            }
                        var s = t.updateQueue;
                        s !== null && qu(t, s, r);
                        break;
                    case 3:
                        var o = t.updateQueue;
                        if (o !== null) {
                            if (n = null, t.child !== null) switch (t.child.tag) {
                                case 5:
                                    n = t.child.stateNode;
                                    break;
                                case 1:
                                    n = t.child.stateNode
                            }
                            qu(t, o, n)
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
                                    a.src && (n.src = a.src)
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
                                var c = u.memoizedState;
                                if (c !== null) {
                                    var f = c.dehydrated;
                                    f !== null && Wr(f)
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
                        throw Error(C(163))
                }
                ge || t.flags & 512 && jl(t)
            } catch (d) {
                J(t, t.return, d)
            }
        }
        if (t === e) {
            j = null;
            break
        }
        if (n = t.sibling, n !== null) {
            n.return = t.return, j = n;
            break
        }
        j = t.return
    }
}

function vc(e) {
    for (; j !== null;) {
        var t = j;
        if (t === e) {
            j = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return, j = n;
            break
        }
        j = t.return
    }
}

function yc(e) {
    for (; j !== null;) {
        var t = j;
        try {
            switch (t.tag) {
                case 0:
                case 11:
                case 15:
                    var n = t.return;
                    try {
                        Us(4, t)
                    } catch (a) {
                        J(t, n, a)
                    }
                    break;
                case 1:
                    var r = t.stateNode;
                    if (typeof r.componentDidMount == "function") {
                        var i = t.return;
                        try {
                            r.componentDidMount()
                        } catch (a) {
                            J(t, i, a)
                        }
                    }
                    var s = t.return;
                    try {
                        jl(t)
                    } catch (a) {
                        J(t, s, a)
                    }
                    break;
                case 5:
                    var o = t.return;
                    try {
                        jl(t)
                    } catch (a) {
                        J(t, o, a)
                    }
            }
        } catch (a) {
            J(t, t.return, a)
        }
        if (t === e) {
            j = null;
            break
        }
        var l = t.sibling;
        if (l !== null) {
            l.return = t.return, j = l;
            break
        }
        j = t.return
    }
}
var Bv = Math.ceil,
    vs = Pt.ReactCurrentDispatcher,
    Oa = Pt.ReactCurrentOwner,
    We = Pt.ReactCurrentBatchConfig,
    I = 0,
    ae = null,
    re = null,
    ce = 0,
    Le = 0,
    In = Gt(0),
    oe = 0,
    ei = null,
    vn = 0,
    $s = 0,
    Ra = 0,
    Lr = null,
    Ce = null,
    Ia = 0,
    tr = 1 / 0,
    ut = null,
    ys = !1,
    Al = null,
    It = null,
    Li = !1,
    At = null,
    xs = 0,
    Ar = 0,
    Vl = null,
    Xi = -1,
    Qi = 0;

function we() {
    return I & 6 ? te() : Xi !== -1 ? Xi : Xi = te()
}

function Ft(e) {
    return e.mode & 1 ? I & 2 && ce !== 0 ? ce & -ce : Cv.transition !== null ? (Qi === 0 && (Qi = Cd()), Qi) : (e = F, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Ld(e.type)), e) : 1
}

function Ze(e, t, n, r) {
    if (50 < Ar) throw Ar = 0, Vl = null, Error(C(185));
    oi(e, n, r), (!(I & 2) || e !== ae) && (e === ae && (!(I & 2) && ($s |= n), oe === 4 && Nt(e, ce)), _e(e, r), n === 1 && I === 0 && !(t.mode & 1) && (tr = te() + 500, Fs && bt()))
}

function _e(e, t) {
    var n = e.callbackNode;
    Cg(e, t);
    var r = ns(e, e === ae ? ce : 0);
    if (r === 0) n !== null && _u(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = r & -r, e.callbackPriority !== t) {
        if (n != null && _u(n), t === 1) e.tag === 0 ? Pv(xc.bind(null, e)) : Gd(xc.bind(null, e)), yv(function() {
            !(I & 6) && bt()
        }), n = null;
        else {
            switch (kd(r)) {
                case 1:
                    n = ua;
                    break;
                case 4:
                    n = Sd;
                    break;
                case 16:
                    n = ts;
                    break;
                case 536870912:
                    n = Pd;
                    break;
                default:
                    n = ts
            }
            n = Kh(n, Uh.bind(null, e))
        }
        e.callbackPriority = t, e.callbackNode = n
    }
}

function Uh(e, t) {
    if (Xi = -1, Qi = 0, I & 6) throw Error(C(327));
    var n = e.callbackNode;
    if (Qn() && e.callbackNode !== n) return null;
    var r = ns(e, e === ae ? ce : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || t) t = ws(e, r);
    else {
        t = r;
        var i = I;
        I |= 2;
        var s = Wh();
        (ae !== e || ce !== t) && (ut = null, tr = te() + 500, dn(e, t));
        do try {
            Wv();
            break
        } catch (l) {
            $h(e, l)
        }
        while (1);
        Pa(), vs.current = s, I = i, re !== null ? t = 0 : (ae = null, ce = 0, t = oe)
    }
    if (t !== 0) {
        if (t === 2 && (i = sl(e), i !== 0 && (r = i, t = Ml(e, i))), t === 1) throw n = ei, dn(e, 0), Nt(e, r), _e(e, te()), n;
        if (t === 6) Nt(e, r);
        else {
            if (i = e.current.alternate, !(r & 30) && !Uv(i) && (t = ws(e, r), t === 2 && (s = sl(e), s !== 0 && (r = s, t = Ml(e, s))), t === 1)) throw n = ei, dn(e, 0), Nt(e, r), _e(e, te()), n;
            switch (e.finishedWork = i, e.finishedLanes = r, t) {
                case 0:
                case 1:
                    throw Error(C(345));
                case 2:
                    rn(e, Ce, ut);
                    break;
                case 3:
                    if (Nt(e, r), (r & 130023424) === r && (t = Ia + 500 - te(), 10 < t)) {
                        if (ns(e, 0) !== 0) break;
                        if (i = e.suspendedLanes, (i & r) !== r) {
                            we(), e.pingedLanes |= e.suspendedLanes & i;
                            break
                        }
                        e.timeoutHandle = hl(rn.bind(null, e, Ce, ut), t);
                        break
                    }
                    rn(e, Ce, ut);
                    break;
                case 4:
                    if (Nt(e, r), (r & 4194240) === r) break;
                    for (t = e.eventTimes, i = -1; 0 < r;) {
                        var o = 31 - be(r);
                        s = 1 << o, o = t[o], o > i && (i = o), r &= ~s
                    }
                    if (r = i, r = te() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Bv(r / 1960)) - r, 10 < r) {
                        e.timeoutHandle = hl(rn.bind(null, e, Ce, ut), r);
                        break
                    }
                    rn(e, Ce, ut);
                    break;
                case 5:
                    rn(e, Ce, ut);
                    break;
                default:
                    throw Error(C(329))
            }
        }
    }
    return _e(e, te()), e.callbackNode === n ? Uh.bind(null, e) : null
}

function Ml(e, t) {
    var n = Lr;
    return e.current.memoizedState.isDehydrated && (dn(e, t).flags |= 256), e = ws(e, t), e !== 2 && (t = Ce, Ce = n, t !== null && Dl(t)), e
}

function Dl(e) {
    Ce === null ? Ce = e : Ce.push.apply(Ce, e)
}

function Uv(e) {
    for (var t = e;;) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores, n !== null))
                for (var r = 0; r < n.length; r++) {
                    var i = n[r],
                        s = i.getSnapshot;
                    i = i.value;
                    try {
                        if (!Je(s(), i)) return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
        else {
            if (t === e) break;
            for (; t.sibling === null;) {
                if (t.return === null || t.return === e) return !0;
                t = t.return
            }
            t.sibling.return = t.return, t = t.sibling
        }
    }
    return !0
}

function Nt(e, t) {
    for (t &= ~Ra, t &= ~$s, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
        var n = 31 - be(t),
            r = 1 << n;
        e[n] = -1, t &= ~r
    }
}

function xc(e) {
    if (I & 6) throw Error(C(327));
    Qn();
    var t = ns(e, 0);
    if (!(t & 1)) return _e(e, te()), null;
    var n = ws(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = sl(e);
        r !== 0 && (t = r, n = Ml(e, r))
    }
    if (n === 1) throw n = ei, dn(e, 0), Nt(e, t), _e(e, te()), n;
    if (n === 6) throw Error(C(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, rn(e, Ce, ut), _e(e, te()), null
}

function Fa(e, t) {
    var n = I;
    I |= 1;
    try {
        return e(t)
    } finally {
        I = n, I === 0 && (tr = te() + 500, Fs && bt())
    }
}

function yn(e) {
    At !== null && At.tag === 0 && !(I & 6) && Qn();
    var t = I;
    I |= 1;
    var n = We.transition,
        r = F;
    try {
        if (We.transition = null, F = 1, e) return e()
    } finally {
        F = r, We.transition = n, I = t, !(I & 6) && bt()
    }
}

function za() {
    Le = In.current, U(In)
}

function dn(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, vv(n)), re !== null)
        for (n = re.return; n !== null;) {
            var r = n;
            switch (xa(r), r.tag) {
                case 1:
                    r = r.type.childContextTypes, r != null && ls();
                    break;
                case 3:
                    qn(), U(Ee), U(ve), ja();
                    break;
                case 5:
                    _a(r);
                    break;
                case 4:
                    qn();
                    break;
                case 13:
                    U(Q);
                    break;
                case 19:
                    U(Q);
                    break;
                case 10:
                    Ca(r.type._context);
                    break;
                case 22:
                case 23:
                    za()
            }
            n = n.return
        }
    if (ae = e, re = e = zt(e.current, null), ce = Le = t, oe = 0, ei = null, Ra = $s = vn = 0, Ce = Lr = null, an !== null) {
        for (t = 0; t < an.length; t++)
            if (n = an[t], r = n.interleaved, r !== null) {
                n.interleaved = null;
                var i = r.next,
                    s = n.pending;
                if (s !== null) {
                    var o = s.next;
                    s.next = i, r.next = o
                }
                n.pending = r
            }
        an = null
    }
    return e
}

function $h(e, t) {
    do {
        var n = re;
        try {
            if (Pa(), Wi.current = gs, ms) {
                for (var r = b.memoizedState; r !== null;) {
                    var i = r.queue;
                    i !== null && (i.pending = null), r = r.next
                }
                ms = !1
            }
            if (gn = 0, le = ie = b = null, jr = !1, Zr = 0, Oa.current = null, n === null || n.return === null) {
                oe = 1, ei = t, re = null;
                break
            }
            e: {
                var s = e,
                    o = n.return,
                    l = n,
                    a = t;
                if (t = ce, l.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
                    var u = a,
                        c = l,
                        f = c.tag;
                    if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
                        var d = c.alternate;
                        d ? (c.updateQueue = d.updateQueue, c.memoizedState = d.memoizedState, c.lanes = d.lanes) : (c.updateQueue = null, c.memoizedState = null)
                    }
                    var g = oc(o);
                    if (g !== null) {
                        g.flags &= -257, lc(g, o, l, s, t), g.mode & 1 && sc(s, u, t), t = g, a = u;
                        var v = t.updateQueue;
                        if (v === null) {
                            var x = new Set;
                            x.add(a), t.updateQueue = x
                        } else v.add(a);
                        break e
                    } else {
                        if (!(t & 1)) {
                            sc(s, u, t), Ba();
                            break e
                        }
                        a = Error(C(426))
                    }
                } else if (W && l.mode & 1) {
                    var E = oc(o);
                    if (E !== null) {
                        !(E.flags & 65536) && (E.flags |= 256), lc(E, o, l, s, t), wa(er(a, l));
                        break e
                    }
                }
                s = a = er(a, l),
                oe !== 4 && (oe = 2),
                Lr === null ? Lr = [s] : Lr.push(s),
                s = o;do {
                    switch (s.tag) {
                        case 3:
                            s.flags |= 65536, t &= -t, s.lanes |= t;
                            var p = Eh(s, a, t);
                            Ju(s, p);
                            break e;
                        case 1:
                            l = a;
                            var h = s.type,
                                m = s.stateNode;
                            if (!(s.flags & 128) && (typeof h.getDerivedStateFromError == "function" || m !== null && typeof m.componentDidCatch == "function" && (It === null || !It.has(m)))) {
                                s.flags |= 65536, t &= -t, s.lanes |= t;
                                var w = Th(s, l, t);
                                Ju(s, w);
                                break e
                            }
                    }
                    s = s.return
                } while (s !== null)
            }
            Yh(n)
        } catch (S) {
            t = S, re === n && n !== null && (re = n = n.return);
            continue
        }
        break
    } while (1)
}

function Wh() {
    var e = vs.current;
    return vs.current = gs, e === null ? gs : e
}

function Ba() {
    (oe === 0 || oe === 3 || oe === 2) && (oe = 4), ae === null || !(vn & 268435455) && !($s & 268435455) || Nt(ae, ce)
}

function ws(e, t) {
    var n = I;
    I |= 2;
    var r = Wh();
    (ae !== e || ce !== t) && (ut = null, dn(e, t));
    do try {
        $v();
        break
    } catch (i) {
        $h(e, i)
    }
    while (1);
    if (Pa(), I = n, vs.current = r, re !== null) throw Error(C(261));
    return ae = null, ce = 0, oe
}

function $v() {
    for (; re !== null;) Hh(re)
}

function Wv() {
    for (; re !== null && !pg();) Hh(re)
}

function Hh(e) {
    var t = Qh(e.alternate, e, Le);
    e.memoizedProps = e.pendingProps, t === null ? Yh(e) : re = t, Oa.current = null
}

function Yh(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return, t.flags & 32768) {
            if (n = Rv(n, t), n !== null) {
                n.flags &= 32767, re = n;
                return
            }
            if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
            else {
                oe = 6, re = null;
                return
            }
        } else if (n = Ov(n, t, Le), n !== null) {
            re = n;
            return
        }
        if (t = t.sibling, t !== null) {
            re = t;
            return
        }
        re = t = e
    } while (t !== null);
    oe === 0 && (oe = 5)
}

function rn(e, t, n) {
    var r = F,
        i = We.transition;
    try {
        We.transition = null, F = 1, Hv(e, t, n, r)
    } finally {
        We.transition = i, F = r
    }
    return null
}

function Hv(e, t, n, r) {
    do Qn(); while (At !== null);
    if (I & 6) throw Error(C(327));
    n = e.finishedWork;
    var i = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(C(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var s = n.lanes | n.childLanes;
    if (kg(e, s), e === ae && (re = ae = null, ce = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Li || (Li = !0, Kh(ts, function() {
            return Qn(), null
        })), s = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || s) {
        s = We.transition, We.transition = null;
        var o = F;
        F = 1;
        var l = I;
        I |= 4, Oa.current = null, Fv(e, n), zh(n, e), cv(fl), rs = !!cl, fl = cl = null, e.current = n, zv(n), mg(), I = l, F = o, We.transition = s
    } else e.current = n;
    if (Li && (Li = !1, At = e, xs = i), s = e.pendingLanes, s === 0 && (It = null), yg(n.stateNode), _e(e, te()), t !== null)
        for (r = e.onRecoverableError, n = 0; n < t.length; n++) i = t[n], r(i.value, {
            componentStack: i.stack,
            digest: i.digest
        });
    if (ys) throw ys = !1, e = Al, Al = null, e;
    return xs & 1 && e.tag !== 0 && Qn(), s = e.pendingLanes, s & 1 ? e === Vl ? Ar++ : (Ar = 0, Vl = e) : Ar = 0, bt(), null
}

function Qn() {
    if (At !== null) {
        var e = kd(xs),
            t = We.transition,
            n = F;
        try {
            if (We.transition = null, F = 16 > e ? 16 : e, At === null) var r = !1;
            else {
                if (e = At, At = null, xs = 0, I & 6) throw Error(C(331));
                var i = I;
                for (I |= 4, j = e.current; j !== null;) {
                    var s = j,
                        o = s.child;
                    if (j.flags & 16) {
                        var l = s.deletions;
                        if (l !== null) {
                            for (var a = 0; a < l.length; a++) {
                                var u = l[a];
                                for (j = u; j !== null;) {
                                    var c = j;
                                    switch (c.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            Nr(8, c, s)
                                    }
                                    var f = c.child;
                                    if (f !== null) f.return = c, j = f;
                                    else
                                        for (; j !== null;) {
                                            c = j;
                                            var d = c.sibling,
                                                g = c.return;
                                            if (Rh(c), c === u) {
                                                j = null;
                                                break
                                            }
                                            if (d !== null) {
                                                d.return = g, j = d;
                                                break
                                            }
                                            j = g
                                        }
                                }
                            }
                            var v = s.alternate;
                            if (v !== null) {
                                var x = v.child;
                                if (x !== null) {
                                    v.child = null;
                                    do {
                                        var E = x.sibling;
                                        x.sibling = null, x = E
                                    } while (x !== null)
                                }
                            }
                            j = s
                        }
                    }
                    if (s.subtreeFlags & 2064 && o !== null) o.return = s, j = o;
                    else e: for (; j !== null;) {
                        if (s = j, s.flags & 2048) switch (s.tag) {
                            case 0:
                            case 11:
                            case 15:
                                Nr(9, s, s.return)
                        }
                        var p = s.sibling;
                        if (p !== null) {
                            p.return = s.return, j = p;
                            break e
                        }
                        j = s.return
                    }
                }
                var h = e.current;
                for (j = h; j !== null;) {
                    o = j;
                    var m = o.child;
                    if (o.subtreeFlags & 2064 && m !== null) m.return = o, j = m;
                    else e: for (o = h; j !== null;) {
                        if (l = j, l.flags & 2048) try {
                            switch (l.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    Us(9, l)
                            }
                        } catch (S) {
                            J(l, l.return, S)
                        }
                        if (l === o) {
                            j = null;
                            break e
                        }
                        var w = l.sibling;
                        if (w !== null) {
                            w.return = l.return, j = w;
                            break e
                        }
                        j = l.return
                    }
                }
                if (I = i, bt(), ot && typeof ot.onPostCommitFiberRoot == "function") try {
                    ot.onPostCommitFiberRoot(Ms, e)
                } catch {}
                r = !0
            }
            return r
        } finally {
            F = n, We.transition = t
        }
    }
    return !1
}

function wc(e, t, n) {
    t = er(n, t), t = Eh(e, t, 1), e = Rt(e, t, 1), t = we(), e !== null && (oi(e, 1, t), _e(e, t))
}

function J(e, t, n) {
    if (e.tag === 3) wc(e, e, n);
    else
        for (; t !== null;) {
            if (t.tag === 3) {
                wc(t, e, n);
                break
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (It === null || !It.has(r))) {
                    e = er(n, e), e = Th(t, e, 1), t = Rt(t, e, 1), e = we(), t !== null && (oi(t, 1, e), _e(t, e));
                    break
                }
            }
            t = t.return
        }
}

function Yv(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = we(), e.pingedLanes |= e.suspendedLanes & n, ae === e && (ce & n) === n && (oe === 4 || oe === 3 && (ce & 130023424) === ce && 500 > te() - Ia ? dn(e, 0) : Ra |= n), _e(e, t)
}

function Xh(e, t) {
    t === 0 && (e.mode & 1 ? (t = wi, wi <<= 1, !(wi & 130023424) && (wi = 4194304)) : t = 1);
    var n = we();
    e = xt(e, t), e !== null && (oi(e, t, n), _e(e, n))
}

function Xv(e) {
    var t = e.memoizedState,
        n = 0;
    t !== null && (n = t.retryLane), Xh(e, n)
}

function Qv(e, t) {
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
            throw Error(C(314))
    }
    r !== null && r.delete(t), Xh(e, n)
}
var Qh;
Qh = function(e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || Ee.current) ke = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128)) return ke = !1, Dv(e, t, n);
            ke = !!(e.flags & 131072)
        }
    else ke = !1, W && t.flags & 1048576 && bd(t, cs, t.index);
    switch (t.lanes = 0, t.tag) {
        case 2:
            var r = t.type;
            Yi(e, t), e = t.pendingProps;
            var i = bn(t, ve.current);
            Xn(t, n), i = La(null, t, r, e, i, n);
            var s = Aa();
            return t.flags |= 1, typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Te(r) ? (s = !0, as(t)) : s = !1, t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, Ea(t), i.updater = zs, t.stateNode = i, i._reactInternals = t, wl(t, r, e, n), t = Cl(null, t, r, !0, s, n)) : (t.tag = 0, W && s && ya(t), xe(null, t, i, n), t = t.child), t;
        case 16:
            r = t.elementType;
            e: {
                switch (Yi(e, t), e = t.pendingProps, i = r._init, r = i(r._payload), t.type = r, i = t.tag = Gv(r), e = Qe(r, e), i) {
                    case 0:
                        t = Pl(null, t, r, e, n);
                        break e;
                    case 1:
                        t = cc(null, t, r, e, n);
                        break e;
                    case 11:
                        t = ac(null, t, r, e, n);
                        break e;
                    case 14:
                        t = uc(null, t, r, Qe(r.type, e), n);
                        break e
                }
                throw Error(C(306, r, ""))
            }
            return t;
        case 0:
            return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Qe(r, i), Pl(e, t, r, i, n);
        case 1:
            return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Qe(r, i), cc(e, t, r, i, n);
        case 3:
            e: {
                if (Lh(t), e === null) throw Error(C(387));r = t.pendingProps,
                s = t.memoizedState,
                i = s.element,
                eh(e, t),
                hs(t, r, null, n);
                var o = t.memoizedState;
                if (r = o.element, s.isDehydrated)
                    if (s = {
                            element: r,
                            isDehydrated: !1,
                            cache: o.cache,
                            pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
                            transitions: o.transitions
                        }, t.updateQueue.baseState = s, t.memoizedState = s, t.flags & 256) {
                        i = er(Error(C(423)), t), t = fc(e, t, r, n, i);
                        break e
                    } else if (r !== i) {
                    i = er(Error(C(424)), t), t = fc(e, t, r, n, i);
                    break e
                } else
                    for (Ae = Ot(t.stateNode.containerInfo.firstChild), Me = t, W = !0, Ge = null, n = ih(t, null, r, n), t.child = n; n;) n.flags = n.flags & -3 | 4096, n = n.sibling;
                else {
                    if (Zn(), r === i) {
                        t = wt(e, t, n);
                        break e
                    }
                    xe(e, t, r, n)
                }
                t = t.child
            }
            return t;
        case 5:
            return sh(t), e === null && vl(t), r = t.type, i = t.pendingProps, s = e !== null ? e.memoizedProps : null, o = i.children, dl(r, i) ? o = null : s !== null && dl(r, s) && (t.flags |= 32), Nh(e, t), xe(e, t, o, n), t.child;
        case 6:
            return e === null && vl(t), null;
        case 13:
            return Ah(e, t, n);
        case 4:
            return Ta(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Jn(t, null, r, n) : xe(e, t, r, n), t.child;
        case 11:
            return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Qe(r, i), ac(e, t, r, i, n);
        case 7:
            return xe(e, t, t.pendingProps, n), t.child;
        case 8:
            return xe(e, t, t.pendingProps.children, n), t.child;
        case 12:
            return xe(e, t, t.pendingProps.children, n), t.child;
        case 10:
            e: {
                if (r = t.type._context, i = t.pendingProps, s = t.memoizedProps, o = i.value, z(fs, r._currentValue), r._currentValue = o, s !== null)
                    if (Je(s.value, o)) {
                        if (s.children === i.children && !Ee.current) {
                            t = wt(e, t, n);
                            break e
                        }
                    } else
                        for (s = t.child, s !== null && (s.return = t); s !== null;) {
                            var l = s.dependencies;
                            if (l !== null) {
                                o = s.child;
                                for (var a = l.firstContext; a !== null;) {
                                    if (a.context === r) {
                                        if (s.tag === 1) {
                                            a = pt(-1, n & -n), a.tag = 2;
                                            var u = s.updateQueue;
                                            if (u !== null) {
                                                u = u.shared;
                                                var c = u.pending;
                                                c === null ? a.next = a : (a.next = c.next, c.next = a), u.pending = a
                                            }
                                        }
                                        s.lanes |= n, a = s.alternate, a !== null && (a.lanes |= n), yl(s.return, n, t), l.lanes |= n;
                                        break
                                    }
                                    a = a.next
                                }
                            } else if (s.tag === 10) o = s.type === t.type ? null : s.child;
                            else if (s.tag === 18) {
                                if (o = s.return, o === null) throw Error(C(341));
                                o.lanes |= n, l = o.alternate, l !== null && (l.lanes |= n), yl(o, n, t), o = s.sibling
                            } else o = s.child;
                            if (o !== null) o.return = s;
                            else
                                for (o = s; o !== null;) {
                                    if (o === t) {
                                        o = null;
                                        break
                                    }
                                    if (s = o.sibling, s !== null) {
                                        s.return = o.return, o = s;
                                        break
                                    }
                                    o = o.return
                                }
                            s = o
                        }
                xe(e, t, i.children, n),
                t = t.child
            }
            return t;
        case 9:
            return i = t.type, r = t.pendingProps.children, Xn(t, n), i = He(i), r = r(i), t.flags |= 1, xe(e, t, r, n), t.child;
        case 14:
            return r = t.type, i = Qe(r, t.pendingProps), i = Qe(r.type, i), uc(e, t, r, i, n);
        case 15:
            return _h(e, t, t.type, t.pendingProps, n);
        case 17:
            return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Qe(r, i), Yi(e, t), t.tag = 1, Te(r) ? (e = !0, as(t)) : e = !1, Xn(t, n), nh(t, r, i), wl(t, r, i, n), Cl(null, t, r, !0, e, n);
        case 19:
            return Vh(e, t, n);
        case 22:
            return jh(e, t, n)
    }
    throw Error(C(156, t.tag))
};

function Kh(e, t) {
    return wd(e, t)
}

function Kv(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
}

function $e(e, t, n, r) {
    return new Kv(e, t, n, r)
}

function Ua(e) {
    return e = e.prototype, !(!e || !e.isReactComponent)
}

function Gv(e) {
    if (typeof e == "function") return Ua(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof, e === oa) return 11;
        if (e === la) return 14
    }
    return 2
}

function zt(e, t) {
    var n = e.alternate;
    return n === null ? (n = $e(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n
}

function Ki(e, t, n, r, i, s) {
    var o = 2;
    if (r = e, typeof e == "function") Ua(e) && (o = 1);
    else if (typeof e == "string") o = 5;
    else e: switch (e) {
        case _n:
            return hn(n.children, i, s, t);
        case sa:
            o = 8, i |= 8;
            break;
        case Ho:
            return e = $e(12, n, t, i | 2), e.elementType = Ho, e.lanes = s, e;
        case Yo:
            return e = $e(13, n, t, i), e.elementType = Yo, e.lanes = s, e;
        case Xo:
            return e = $e(19, n, t, i), e.elementType = Xo, e.lanes = s, e;
        case rd:
            return Ws(n, i, s, t);
        default:
            if (typeof e == "object" && e !== null) switch (e.$$typeof) {
                case td:
                    o = 10;
                    break e;
                case nd:
                    o = 9;
                    break e;
                case oa:
                    o = 11;
                    break e;
                case la:
                    o = 14;
                    break e;
                case Et:
                    o = 16, r = null;
                    break e
            }
            throw Error(C(130, e == null ? e : typeof e, ""))
    }
    return t = $e(o, n, t, i), t.elementType = e, t.type = r, t.lanes = s, t
}

function hn(e, t, n, r) {
    return e = $e(7, e, r, t), e.lanes = n, e
}

function Ws(e, t, n, r) {
    return e = $e(22, e, r, t), e.elementType = rd, e.lanes = n, e.stateNode = {
        isHidden: !1
    }, e
}

function jo(e, t, n) {
    return e = $e(6, e, null, t), e.lanes = n, e
}

function No(e, t, n) {
    return t = $e(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    }, t
}

function bv(e, t, n, r, i) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = ao(0), this.expirationTimes = ao(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ao(0), this.identifierPrefix = r, this.onRecoverableError = i, this.mutableSourceEagerHydrationData = null
}

function $a(e, t, n, r, i, s, o, l, a) {
    return e = new bv(e, t, n, l, a), t === 1 ? (t = 1, s === !0 && (t |= 8)) : t = 0, s = $e(3, null, null, t), e.current = s, s.stateNode = e, s.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    }, Ea(s), e
}

function Zv(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: Tn,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n
    }
}

function Gh(e) {
    if (!e) return Yt;
    e = e._reactInternals;
    e: {
        if (wn(e) !== e || e.tag !== 1) throw Error(C(170));
        var t = e;do {
            switch (t.tag) {
                case 3:
                    t = t.stateNode.context;
                    break e;
                case 1:
                    if (Te(t.type)) {
                        t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                        break e
                    }
            }
            t = t.return
        } while (t !== null);
        throw Error(C(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (Te(n)) return Kd(e, n, t)
    }
    return t
}

function bh(e, t, n, r, i, s, o, l, a) {
    return e = $a(n, r, !0, e, i, s, o, l, a), e.context = Gh(null), n = e.current, r = we(), i = Ft(n), s = pt(r, i), s.callback = t ? ? null, Rt(n, s, i), e.current.lanes = i, oi(e, i, r), _e(e, r), e
}

function Hs(e, t, n, r) {
    var i = t.current,
        s = we(),
        o = Ft(i);
    return n = Gh(n), t.context === null ? t.context = n : t.pendingContext = n, t = pt(s, o), t.payload = {
        element: e
    }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Rt(i, t, o), e !== null && (Ze(e, i, o, s), $i(e, i, o)), o
}

function Ss(e) {
    if (e = e.current, !e.child) return null;
    switch (e.child.tag) {
        case 5:
            return e.child.stateNode;
        default:
            return e.child.stateNode
    }
}

function Sc(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}

function Wa(e, t) {
    Sc(e, t), (e = e.alternate) && Sc(e, t)
}

function Jv() {
    return null
}
var Zh = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
};

function Ha(e) {
    this._internalRoot = e
}
Ys.prototype.render = Ha.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(C(409));
    Hs(e, t, null, null)
};
Ys.prototype.unmount = Ha.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        yn(function() {
            Hs(null, e, null, null)
        }), t[yt] = null
    }
};

function Ys(e) {
    this._internalRoot = e
}
Ys.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = _d();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < jt.length && t !== 0 && t < jt[n].priority; n++);
        jt.splice(n, 0, e), n === 0 && Nd(e)
    }
};

function Ya(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}

function Xs(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}

function Pc() {}

function qv(e, t, n, r, i) {
    if (i) {
        if (typeof r == "function") {
            var s = r;
            r = function() {
                var u = Ss(o);
                s.call(u)
            }
        }
        var o = bh(t, r, e, 0, null, !1, !1, "", Pc);
        return e._reactRootContainer = o, e[yt] = o.current, Xr(e.nodeType === 8 ? e.parentNode : e), yn(), o
    }
    for (; i = e.lastChild;) e.removeChild(i);
    if (typeof r == "function") {
        var l = r;
        r = function() {
            var u = Ss(a);
            l.call(u)
        }
    }
    var a = $a(e, 0, !1, null, null, !1, !1, "", Pc);
    return e._reactRootContainer = a, e[yt] = a.current, Xr(e.nodeType === 8 ? e.parentNode : e), yn(function() {
        Hs(t, a, n, r)
    }), a
}

function Qs(e, t, n, r, i) {
    var s = n._reactRootContainer;
    if (s) {
        var o = s;
        if (typeof i == "function") {
            var l = i;
            i = function() {
                var a = Ss(o);
                l.call(a)
            }
        }
        Hs(t, o, e, i)
    } else o = qv(n, t, e, i, r);
    return Ss(o)
}
Ed = function(e) {
    switch (e.tag) {
        case 3:
            var t = e.stateNode;
            if (t.current.memoizedState.isDehydrated) {
                var n = xr(t.pendingLanes);
                n !== 0 && (ca(t, n | 1), _e(t, te()), !(I & 6) && (tr = te() + 500, bt()))
            }
            break;
        case 13:
            yn(function() {
                var r = xt(e, 1);
                if (r !== null) {
                    var i = we();
                    Ze(r, e, 1, i)
                }
            }), Wa(e, 1)
    }
};
fa = function(e) {
    if (e.tag === 13) {
        var t = xt(e, 134217728);
        if (t !== null) {
            var n = we();
            Ze(t, e, 134217728, n)
        }
        Wa(e, 134217728)
    }
};
Td = function(e) {
    if (e.tag === 13) {
        var t = Ft(e),
            n = xt(e, t);
        if (n !== null) {
            var r = we();
            Ze(n, e, t, r)
        }
        Wa(e, t)
    }
};
_d = function() {
    return F
};
jd = function(e, t) {
    var n = F;
    try {
        return F = e, t()
    } finally {
        F = n
    }
};
nl = function(e, t, n) {
    switch (t) {
        case "input":
            if (Go(e, n), t = n.name, n.type === "radio" && t != null) {
                for (n = e; n.parentNode;) n = n.parentNode;
                for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                        var i = Is(r);
                        if (!i) throw Error(C(90));
                        sd(r), Go(r, i)
                    }
                }
            }
            break;
        case "textarea":
            ld(e, n);
            break;
        case "select":
            t = n.value, t != null && $n(e, !!n.multiple, t, !1)
    }
};
pd = Fa;
md = yn;
var ey = {
        usingClientEntryPoint: !1,
        Events: [ai, An, Is, dd, hd, Fa]
    },
    pr = {
        findFiberByHostInstance: ln,
        bundleType: 0,
        version: "18.2.0",
        rendererPackageName: "react-dom"
    },
    ty = {
        bundleType: pr.bundleType,
        version: pr.version,
        rendererPackageName: pr.rendererPackageName,
        rendererConfig: pr.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: Pt.ReactCurrentDispatcher,
        findHostInstanceByFiber: function(e) {
            return e = yd(e), e === null ? null : e.stateNode
        },
        findFiberByHostInstance: pr.findFiberByHostInstance || Jv,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.2.0-next-9e3b772b8-20220608"
    };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ai = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ai.isDisabled && Ai.supportsFiber) try {
        Ms = Ai.inject(ty), ot = Ai
    } catch {}
}
Re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ey;
Re.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Ya(t)) throw Error(C(200));
    return Zv(e, t, null, n)
};
Re.createRoot = function(e, t) {
    if (!Ya(e)) throw Error(C(299));
    var n = !1,
        r = "",
        i = Zh;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), t = $a(e, 1, !1, null, null, n, !1, r, i), e[yt] = t.current, Xr(e.nodeType === 8 ? e.parentNode : e), new Ha(t)
};
Re.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0) throw typeof e.render == "function" ? Error(C(188)) : (e = Object.keys(e).join(","), Error(C(268, e)));
    return e = yd(t), e = e === null ? null : e.stateNode, e
};
Re.flushSync = function(e) {
    return yn(e)
};
Re.hydrate = function(e, t, n) {
    if (!Xs(t)) throw Error(C(200));
    return Qs(null, e, t, !0, n)
};
Re.hydrateRoot = function(e, t, n) {
    if (!Ya(e)) throw Error(C(405));
    var r = n != null && n.hydratedSources || null,
        i = !1,
        s = "",
        o = Zh;
    if (n != null && (n.unstable_strictMode === !0 && (i = !0), n.identifierPrefix !== void 0 && (s = n.identifierPrefix), n.onRecoverableError !== void 0 && (o = n.onRecoverableError)), t = bh(t, null, e, 1, n ? ? null, i, !1, s, o), e[yt] = t.current, Xr(e), r)
        for (e = 0; e < r.length; e++) n = r[e], i = n._getVersion, i = i(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, i] : t.mutableSourceEagerHydrationData.push(n, i);
    return new Ys(t)
};
Re.render = function(e, t, n) {
    if (!Xs(t)) throw Error(C(200));
    return Qs(null, e, t, !1, n)
};
Re.unmountComponentAtNode = function(e) {
    if (!Xs(e)) throw Error(C(40));
    return e._reactRootContainer ? (yn(function() {
        Qs(null, null, e, !1, function() {
            e._reactRootContainer = null, e[yt] = null
        })
    }), !0) : !1
};
Re.unstable_batchedUpdates = Fa;
Re.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!Xs(n)) throw Error(C(200));
    if (e == null || e._reactInternals === void 0) throw Error(C(38));
    return Qs(e, t, n, !1, r)
};
Re.version = "18.2.0-next-9e3b772b8-20220608";

function Jh() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Jh)
    } catch (e) {
        console.error(e)
    }
}
Jh(), bf.exports = Re;
var ny = bf.exports,
    Cc = ny;
$o.createRoot = Cc.createRoot, $o.hydrateRoot = Cc.hydrateRoot;
const ry = [{
        link: "#history",
        name: "History"
    }, {
        link: "#tokenomics",
        name: "Tokenomics"
    }, {
        link: "#roadmap",
        name: "Roadmap"
    }],
    iy = () => {
        const [e, t] = N.useState(!1), [n, r] = N.useState(0);
        N.useState(!1), N.useEffect(() => {
            if (typeof window < "u") return window.addEventListener("scroll", i), () => {
                window.removeEventListener("scroll", i)
            }
        }, [n]);
        const i = () => {
            scrollY > 150 ? t(!0) : t(!1)
        };
        return y.jsx(y.Fragment, {
            children: y.jsxs("nav", {
                className: `p-4 pr-8 flex justify-between items-center max-w-screen-xl mx-auto rounded-full transition-all ease-in-out duration-300 ${e?"bg-white/50 backdrop-blur-lg m-4 mx-4 lg:mx-auto border-solid border-[1px] border-white/80":"bg-transparent m-0 border-solid border-[1px] border-transparent"}`,
                children: [y.jsx("div", {
                    className: "h-16 w-16",
                    children: y.jsx("img", {
                        src: "/dodologo.webp",
                        alt: "",
                        className: ""
                    })
                }), y.jsx("div", {
                    className: "gap-x-1 md:gap-x-4 lg:gap-x-12 hidden md:flex",
                    children: ry.map((s, o) => y.jsx("a", {
                        href: s.link,
                        children: y.jsx("p", {
                            className: "font-caprasimo text-drkblu hover:text-white hover:-translate-y-[2px] hover:drop-shadow-sm transition-all ease-in-out duration-300",
                            children: s.name
                        })
                    }, o))
                })]
            })
        })
    },
    qh = N.createContext({
        transformPagePoint: e => e,
        isStatic: !1,
        reducedMotion: "never"
    }),
    Ks = N.createContext({}),
    Xa = N.createContext(null),
    Gs = typeof document < "u",
    kc = Gs ? N.useLayoutEffect : N.useEffect,
    ep = N.createContext({
        strict: !1
    });

function sy(e, t, n, r) {
    const {
        visualElement: i
    } = N.useContext(Ks), s = N.useContext(ep), o = N.useContext(Xa), l = N.useContext(qh).reducedMotion, a = N.useRef();
    r = r || s.renderer, !a.current && r && (a.current = r(e, {
        visualState: t,
        parent: i,
        props: n,
        presenceContext: o,
        blockInitialAnimation: o ? o.initial === !1 : !1,
        reducedMotionConfig: l
    }));
    const u = a.current;
    return N.useInsertionEffect(() => {
        u && u.update(n, o)
    }), kc(() => {
        u && u.render()
    }), N.useEffect(() => {
        u && u.updateFeatures()
    }), (window.HandoffAppearAnimations ? kc : N.useEffect)(() => {
        u && u.animationState && u.animationState.animateChanges()
    }), u
}

function Fn(e) {
    return typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current")
}

function oy(e, t, n) {
    return N.useCallback(r => {
        r && e.mount && e.mount(r), t && (r ? t.mount(r) : t.unmount()), n && (typeof n == "function" ? n(r) : Fn(n) && (n.current = r))
    }, [t])
}

function ti(e) {
    return typeof e == "string" || Array.isArray(e)
}

function bs(e) {
    return typeof e == "object" && typeof e.start == "function"
}
const Qa = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"],
    Ka = ["initial", ...Qa];

function Zs(e) {
    return bs(e.animate) || Ka.some(t => ti(e[t]))
}

function tp(e) {
    return !!(Zs(e) || e.variants)
}

function ly(e, t) {
    if (Zs(e)) {
        const {
            initial: n,
            animate: r
        } = e;
        return {
            initial: n === !1 || ti(n) ? n : void 0,
            animate: ti(r) ? r : void 0
        }
    }
    return e.inherit !== !1 ? t : {}
}

function ay(e) {
    const {
        initial: t,
        animate: n
    } = ly(e, N.useContext(Ks));
    return N.useMemo(() => ({
        initial: t,
        animate: n
    }), [Ec(t), Ec(n)])
}

function Ec(e) {
    return Array.isArray(e) ? e.join(" ") : e
}
const Tc = {
        animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
        exit: ["exit"],
        drag: ["drag", "dragControls"],
        focus: ["whileFocus"],
        hover: ["whileHover", "onHoverStart", "onHoverEnd"],
        tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
        pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
        inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
        layout: ["layout", "layoutId"]
    },
    ni = {};
for (const e in Tc) ni[e] = {
    isEnabled: t => Tc[e].some(n => !!t[n])
};

function uy(e) {
    for (const t in e) ni[t] = { ...ni[t],
        ...e[t]
    }
}
const np = N.createContext({}),
    rp = N.createContext({}),
    cy = Symbol.for("motionComponentSymbol");

function fy({
    preloadedFeatures: e,
    createVisualElement: t,
    useRender: n,
    useVisualState: r,
    Component: i
}) {
    e && uy(e);

    function s(l, a) {
        let u;
        const c = { ...N.useContext(qh),
                ...l,
                layoutId: dy(l)
            },
            {
                isStatic: f
            } = c,
            d = ay(l),
            g = r(l, f);
        if (!f && Gs) {
            d.visualElement = sy(i, g, c, t);
            const v = N.useContext(rp),
                x = N.useContext(ep).strict;
            d.visualElement && (u = d.visualElement.loadFeatures(c, x, e, v))
        }
        return N.createElement(Ks.Provider, {
            value: d
        }, u && d.visualElement ? N.createElement(u, {
            visualElement: d.visualElement,
            ...c
        }) : null, n(i, l, oy(g, d.visualElement, a), g, f, d.visualElement))
    }
    const o = N.forwardRef(s);
    return o[cy] = i, o
}

function dy({
    layoutId: e
}) {
    const t = N.useContext(np).id;
    return t && e !== void 0 ? t + "-" + e : e
}

function hy(e) {
    function t(r, i = {}) {
        return fy(e(r, i))
    }
    if (typeof Proxy > "u") return t;
    const n = new Map;
    return new Proxy(t, {
        get: (r, i) => (n.has(i) || n.set(i, t(i)), n.get(i))
    })
}
const py = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];

function Ga(e) {
    return typeof e != "string" || e.includes("-") ? !1 : !!(py.indexOf(e) > -1 || /[A-Z]/.test(e))
}
const Ps = {};

function my(e) {
    Object.assign(Ps, e)
}
const ci = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"],
    Sn = new Set(ci);

function ip(e, {
    layout: t,
    layoutId: n
}) {
    return Sn.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!Ps[e] || e === "opacity")
}
const je = e => !!(e && e.getVelocity),
    gy = {
        x: "translateX",
        y: "translateY",
        z: "translateZ",
        transformPerspective: "perspective"
    },
    vy = ci.length;

function yy(e, {
    enableHardwareAcceleration: t = !0,
    allowTransformNone: n = !0
}, r, i) {
    let s = "";
    for (let o = 0; o < vy; o++) {
        const l = ci[o];
        if (e[l] !== void 0) {
            const a = gy[l] || l;
            s += `${a}(${e[l]}) `
        }
    }
    return t && !e.z && (s += "translateZ(0)"), s = s.trim(), i ? s = i(e, r ? "" : s) : n && r && (s = "none"), s
}
const sp = e => t => typeof t == "string" && t.startsWith(e),
    op = sp("--"),
    Ol = sp("var(--"),
    xy = /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,
    wy = (e, t) => t && typeof e == "number" ? t.transform(e) : e,
    Xt = (e, t, n) => Math.min(Math.max(n, e), t),
    Pn = {
        test: e => typeof e == "number",
        parse: parseFloat,
        transform: e => e
    },
    Vr = { ...Pn,
        transform: e => Xt(0, 1, e)
    },
    Vi = { ...Pn,
        default: 1
    },
    Mr = e => Math.round(e * 1e5) / 1e5,
    Js = /(-)?([\d]*\.?[\d])+/g,
    lp = /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
    Sy = /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;

function fi(e) {
    return typeof e == "string"
}
const di = e => ({
        test: t => fi(t) && t.endsWith(e) && t.split(" ").length === 1,
        parse: parseFloat,
        transform: t => `${t}${e}`
    }),
    kt = di("deg"),
    at = di("%"),
    V = di("px"),
    Py = di("vh"),
    Cy = di("vw"),
    _c = { ...at,
        parse: e => at.parse(e) / 100,
        transform: e => at.transform(e * 100)
    },
    jc = { ...Pn,
        transform: Math.round
    },
    ap = {
        borderWidth: V,
        borderTopWidth: V,
        borderRightWidth: V,
        borderBottomWidth: V,
        borderLeftWidth: V,
        borderRadius: V,
        radius: V,
        borderTopLeftRadius: V,
        borderTopRightRadius: V,
        borderBottomRightRadius: V,
        borderBottomLeftRadius: V,
        width: V,
        maxWidth: V,
        height: V,
        maxHeight: V,
        size: V,
        top: V,
        right: V,
        bottom: V,
        left: V,
        padding: V,
        paddingTop: V,
        paddingRight: V,
        paddingBottom: V,
        paddingLeft: V,
        margin: V,
        marginTop: V,
        marginRight: V,
        marginBottom: V,
        marginLeft: V,
        rotate: kt,
        rotateX: kt,
        rotateY: kt,
        rotateZ: kt,
        scale: Vi,
        scaleX: Vi,
        scaleY: Vi,
        scaleZ: Vi,
        skew: kt,
        skewX: kt,
        skewY: kt,
        distance: V,
        translateX: V,
        translateY: V,
        translateZ: V,
        x: V,
        y: V,
        z: V,
        perspective: V,
        transformPerspective: V,
        opacity: Vr,
        originX: _c,
        originY: _c,
        originZ: V,
        zIndex: jc,
        fillOpacity: Vr,
        strokeOpacity: Vr,
        numOctaves: jc
    };

function ba(e, t, n, r) {
    const {
        style: i,
        vars: s,
        transform: o,
        transformOrigin: l
    } = e;
    let a = !1,
        u = !1,
        c = !0;
    for (const f in t) {
        const d = t[f];
        if (op(f)) {
            s[f] = d;
            continue
        }
        const g = ap[f],
            v = wy(d, g);
        if (Sn.has(f)) {
            if (a = !0, o[f] = v, !c) continue;
            d !== (g.default || 0) && (c = !1)
        } else f.startsWith("origin") ? (u = !0, l[f] = v) : i[f] = v
    }
    if (t.transform || (a || r ? i.transform = yy(e.transform, n, c, r) : i.transform && (i.transform = "none")), u) {
        const {
            originX: f = "50%",
            originY: d = "50%",
            originZ: g = 0
        } = l;
        i.transformOrigin = `${f} ${d} ${g}`
    }
}
const Za = () => ({
    style: {},
    transform: {},
    transformOrigin: {},
    vars: {}
});

function up(e, t, n) {
    for (const r in t) !je(t[r]) && !ip(r, n) && (e[r] = t[r])
}

function ky({
    transformTemplate: e
}, t, n) {
    return N.useMemo(() => {
        const r = Za();
        return ba(r, t, {
            enableHardwareAcceleration: !n
        }, e), Object.assign({}, r.vars, r.style)
    }, [t])
}

function Ey(e, t, n) {
    const r = e.style || {},
        i = {};
    return up(i, r, e), Object.assign(i, ky(e, t, n)), e.transformValues ? e.transformValues(i) : i
}

function Ty(e, t, n) {
    const r = {},
        i = Ey(e, t, n);
    return e.drag && e.dragListener !== !1 && (r.draggable = !1, i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none", i.touchAction = e.drag === !0 ? "none" : `pan-${e.drag==="x"?"y":"x"}`), e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (r.tabIndex = 0), r.style = i, r
}
const _y = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "transformValues", "custom", "inherit", "onLayoutAnimationStart", "onLayoutAnimationComplete", "onLayoutMeasure", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "ignoreStrict", "viewport"]);

function Cs(e) {
    return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || _y.has(e)
}
let cp = e => !Cs(e);

function jy(e) {
    e && (cp = t => t.startsWith("on") ? !Cs(t) : e(t))
}
try {
    jy(require("@emotion/is-prop-valid").default)
} catch {}

function Ny(e, t, n) {
    const r = {};
    for (const i in e) i === "values" && typeof e.values == "object" || (cp(i) || n === !0 && Cs(i) || !t && !Cs(i) || e.draggable && i.startsWith("onDrag")) && (r[i] = e[i]);
    return r
}

function Nc(e, t, n) {
    return typeof e == "string" ? e : V.transform(t + n * e)
}

function Ly(e, t, n) {
    const r = Nc(t, e.x, e.width),
        i = Nc(n, e.y, e.height);
    return `${r} ${i}`
}
const Ay = {
        offset: "stroke-dashoffset",
        array: "stroke-dasharray"
    },
    Vy = {
        offset: "strokeDashoffset",
        array: "strokeDasharray"
    };

function My(e, t, n = 1, r = 0, i = !0) {
    e.pathLength = 1;
    const s = i ? Ay : Vy;
    e[s.offset] = V.transform(-r);
    const o = V.transform(t),
        l = V.transform(n);
    e[s.array] = `${o} ${l}`
}

function Ja(e, {
    attrX: t,
    attrY: n,
    attrScale: r,
    originX: i,
    originY: s,
    pathLength: o,
    pathSpacing: l = 1,
    pathOffset: a = 0,
    ...u
}, c, f, d) {
    if (ba(e, u, c, d), f) {
        e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
        return
    }
    e.attrs = e.style, e.style = {};
    const {
        attrs: g,
        style: v,
        dimensions: x
    } = e;
    g.transform && (x && (v.transform = g.transform), delete g.transform), x && (i !== void 0 || s !== void 0 || v.transform) && (v.transformOrigin = Ly(x, i !== void 0 ? i : .5, s !== void 0 ? s : .5)), t !== void 0 && (g.x = t), n !== void 0 && (g.y = n), r !== void 0 && (g.scale = r), o !== void 0 && My(g, o, l, a, !1)
}
const fp = () => ({ ...Za(),
        attrs: {}
    }),
    qa = e => typeof e == "string" && e.toLowerCase() === "svg";

function Dy(e, t, n, r) {
    const i = N.useMemo(() => {
        const s = fp();
        return Ja(s, t, {
            enableHardwareAcceleration: !1
        }, qa(r), e.transformTemplate), { ...s.attrs,
            style: { ...s.style
            }
        }
    }, [t]);
    if (e.style) {
        const s = {};
        up(s, e.style, e), i.style = { ...s,
            ...i.style
        }
    }
    return i
}

function Oy(e = !1) {
    return (n, r, i, {
        latestValues: s
    }, o) => {
        const a = (Ga(n) ? Dy : Ty)(r, s, o, n),
            c = { ...Ny(r, typeof n == "string", e),
                ...a,
                ref: i
            },
            {
                children: f
            } = r,
            d = N.useMemo(() => je(f) ? f.get() : f, [f]);
        return N.createElement(n, { ...c,
            children: d
        })
    }
}
const eu = e => e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();

function dp(e, {
    style: t,
    vars: n
}, r, i) {
    Object.assign(e.style, t, i && i.getProjectionStyles(r));
    for (const s in n) e.style.setProperty(s, n[s])
}
const hp = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);

function pp(e, t, n, r) {
    dp(e, t, void 0, r);
    for (const i in t.attrs) e.setAttribute(hp.has(i) ? i : eu(i), t.attrs[i])
}

function tu(e, t) {
    const {
        style: n
    } = e, r = {};
    for (const i in n)(je(n[i]) || t.style && je(t.style[i]) || ip(i, e)) && (r[i] = n[i]);
    return r
}

function mp(e, t) {
    const n = tu(e, t);
    for (const r in e)
        if (je(e[r]) || je(t[r])) {
            const i = ci.indexOf(r) !== -1 ? "attr" + r.charAt(0).toUpperCase() + r.substring(1) : r;
            n[i] = e[r]
        }
    return n
}

function nu(e, t, n, r = {}, i = {}) {
    return typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, i)), typeof t == "string" && (t = e.variants && e.variants[t]), typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, i)), t
}

function Ry(e) {
    const t = N.useRef(null);
    return t.current === null && (t.current = e()), t.current
}
const ks = e => Array.isArray(e),
    Iy = e => !!(e && typeof e == "object" && e.mix && e.toValue),
    Fy = e => ks(e) ? e[e.length - 1] || 0 : e;

function Gi(e) {
    const t = je(e) ? e.get() : e;
    return Iy(t) ? t.toValue() : t
}

function zy({
    scrapeMotionValuesFromProps: e,
    createRenderState: t,
    onMount: n
}, r, i, s) {
    const o = {
        latestValues: By(r, i, s, e),
        renderState: t()
    };
    return n && (o.mount = l => n(r, l, o)), o
}
const gp = e => (t, n) => {
    const r = N.useContext(Ks),
        i = N.useContext(Xa),
        s = () => zy(e, t, r, i);
    return n ? s() : Ry(s)
};

function By(e, t, n, r) {
    const i = {},
        s = r(e, {});
    for (const d in s) i[d] = Gi(s[d]);
    let {
        initial: o,
        animate: l
    } = e;
    const a = Zs(e),
        u = tp(e);
    t && u && !a && e.inherit !== !1 && (o === void 0 && (o = t.initial), l === void 0 && (l = t.animate));
    let c = n ? n.initial === !1 : !1;
    c = c || o === !1;
    const f = c ? l : o;
    return f && typeof f != "boolean" && !bs(f) && (Array.isArray(f) ? f : [f]).forEach(g => {
        const v = nu(e, g);
        if (!v) return;
        const {
            transitionEnd: x,
            transition: E,
            ...p
        } = v;
        for (const h in p) {
            let m = p[h];
            if (Array.isArray(m)) {
                const w = c ? m.length - 1 : 0;
                m = m[w]
            }
            m !== null && (i[h] = m)
        }
        for (const h in x) i[h] = x[h]
    }), i
}
const Uy = {
        useVisualState: gp({
            scrapeMotionValuesFromProps: mp,
            createRenderState: fp,
            onMount: (e, t, {
                renderState: n,
                latestValues: r
            }) => {
                try {
                    n.dimensions = typeof t.getBBox == "function" ? t.getBBox() : t.getBoundingClientRect()
                } catch {
                    n.dimensions = {
                        x: 0,
                        y: 0,
                        width: 0,
                        height: 0
                    }
                }
                Ja(n, r, {
                    enableHardwareAcceleration: !1
                }, qa(t.tagName), e.transformTemplate), pp(t, n)
            }
        })
    },
    $y = {
        useVisualState: gp({
            scrapeMotionValuesFromProps: tu,
            createRenderState: Za
        })
    };

function Wy(e, {
    forwardMotionProps: t = !1
}, n, r) {
    return { ...Ga(e) ? Uy : $y,
        preloadedFeatures: n,
        useRender: Oy(t),
        createVisualElement: r,
        Component: e
    }
}

function ht(e, t, n, r = {
    passive: !0
}) {
    return e.addEventListener(t, n, r), () => e.removeEventListener(t, n)
}
const vp = e => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1;

function qs(e, t = "page") {
    return {
        point: {
            x: e[t + "X"],
            y: e[t + "Y"]
        }
    }
}
const Hy = e => t => vp(t) && e(t, qs(t));

function mt(e, t, n, r) {
    return ht(e, t, Hy(n), r)
}
const Yy = (e, t) => n => t(e(n)),
    Bt = (...e) => e.reduce(Yy);

function yp(e) {
    let t = null;
    return () => {
        const n = () => {
            t = null
        };
        return t === null ? (t = e, n) : !1
    }
}
const Lc = yp("dragHorizontal"),
    Ac = yp("dragVertical");

function xp(e) {
    let t = !1;
    if (e === "y") t = Ac();
    else if (e === "x") t = Lc();
    else {
        const n = Lc(),
            r = Ac();
        n && r ? t = () => {
            n(), r()
        } : (n && n(), r && r())
    }
    return t
}

function wp() {
    const e = xp(!0);
    return e ? (e(), !1) : !0
}
class Zt {
    constructor(t) {
        this.isMounted = !1, this.node = t
    }
    update() {}
}

function Xy(e) {
    let t = [],
        n = [],
        r = 0,
        i = !1,
        s = !1;
    const o = new WeakSet,
        l = {
            schedule: (a, u = !1, c = !1) => {
                const f = c && i,
                    d = f ? t : n;
                return u && o.add(a), d.indexOf(a) === -1 && (d.push(a), f && i && (r = t.length)), a
            },
            cancel: a => {
                const u = n.indexOf(a);
                u !== -1 && n.splice(u, 1), o.delete(a)
            },
            process: a => {
                if (i) {
                    s = !0;
                    return
                }
                if (i = !0, [t, n] = [n, t], n.length = 0, r = t.length, r)
                    for (let u = 0; u < r; u++) {
                        const c = t[u];
                        c(a), o.has(c) && (l.schedule(c), e())
                    }
                i = !1, s && (s = !1, l.process(a))
            }
        };
    return l
}
const X = {
        delta: 0,
        timestamp: 0,
        isProcessing: !1
    },
    Qy = 40;
let Rl = !0,
    ri = !1;
const eo = ["read", "update", "preRender", "render", "postRender"],
    Kn = eo.reduce((e, t) => (e[t] = Xy(() => ri = !0), e), {}),
    Ky = e => Kn[e].process(X),
    Sp = e => {
        ri = !1, X.delta = Rl ? 1e3 / 60 : Math.max(Math.min(e - X.timestamp, Qy), 1), X.timestamp = e, X.isProcessing = !0, eo.forEach(Ky), X.isProcessing = !1, ri && (Rl = !1, requestAnimationFrame(Sp))
    },
    Gy = () => {
        ri = !0, Rl = !0, X.isProcessing || requestAnimationFrame(Sp)
    },
    G = eo.reduce((e, t) => {
        const n = Kn[t];
        return e[t] = (r, i = !1, s = !1) => (ri || Gy(), n.schedule(r, i, s)), e
    }, {});

function St(e) {
    eo.forEach(t => Kn[t].cancel(e))
}

function Vc(e, t) {
    const n = "pointer" + (t ? "enter" : "leave"),
        r = "onHover" + (t ? "Start" : "End"),
        i = (s, o) => {
            if (s.type === "touch" || wp()) return;
            const l = e.getProps();
            e.animationState && l.whileHover && e.animationState.setActive("whileHover", t), l[r] && G.update(() => l[r](s, o))
        };
    return mt(e.current, n, i, {
        passive: !e.getProps()[r]
    })
}
class by extends Zt {
    mount() {
        this.unmount = Bt(Vc(this.node, !0), Vc(this.node, !1))
    }
    unmount() {}
}
class Zy extends Zt {
    constructor() {
        super(...arguments), this.isActive = !1
    }
    onFocus() {
        let t = !1;
        try {
            t = this.node.current.matches(":focus-visible")
        } catch {
            t = !0
        }!t || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0)
    }
    onBlur() {
        !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1)
    }
    mount() {
        this.unmount = Bt(ht(this.node.current, "focus", () => this.onFocus()), ht(this.node.current, "blur", () => this.onBlur()))
    }
    unmount() {}
}
const Pp = (e, t) => t ? e === t ? !0 : Pp(e, t.parentElement) : !1,
    se = e => e;

function Lo(e, t) {
    if (!t) return;
    const n = new PointerEvent("pointer" + e);
    t(n, qs(n))
}
class Jy extends Zt {
    constructor() {
        super(...arguments), this.removeStartListeners = se, this.removeEndListeners = se, this.removeAccessibleListeners = se, this.startPointerPress = (t, n) => {
            if (this.removeEndListeners(), this.isPressing) return;
            const r = this.node.getProps(),
                s = mt(window, "pointerup", (l, a) => {
                    if (!this.checkPressEnd()) return;
                    const {
                        onTap: u,
                        onTapCancel: c
                    } = this.node.getProps();
                    G.update(() => {
                        Pp(this.node.current, l.target) ? u && u(l, a) : c && c(l, a)
                    })
                }, {
                    passive: !(r.onTap || r.onPointerUp)
                }),
                o = mt(window, "pointercancel", (l, a) => this.cancelPress(l, a), {
                    passive: !(r.onTapCancel || r.onPointerCancel)
                });
            this.removeEndListeners = Bt(s, o), this.startPress(t, n)
        }, this.startAccessiblePress = () => {
            const t = s => {
                    if (s.key !== "Enter" || this.isPressing) return;
                    const o = l => {
                        l.key !== "Enter" || !this.checkPressEnd() || Lo("up", (a, u) => {
                            const {
                                onTap: c
                            } = this.node.getProps();
                            c && G.update(() => c(a, u))
                        })
                    };
                    this.removeEndListeners(), this.removeEndListeners = ht(this.node.current, "keyup", o), Lo("down", (l, a) => {
                        this.startPress(l, a)
                    })
                },
                n = ht(this.node.current, "keydown", t),
                r = () => {
                    this.isPressing && Lo("cancel", (s, o) => this.cancelPress(s, o))
                },
                i = ht(this.node.current, "blur", r);
            this.removeAccessibleListeners = Bt(n, i)
        }
    }
    startPress(t, n) {
        this.isPressing = !0;
        const {
            onTapStart: r,
            whileTap: i
        } = this.node.getProps();
        i && this.node.animationState && this.node.animationState.setActive("whileTap", !0), r && G.update(() => r(t, n))
    }
    checkPressEnd() {
        return this.removeEndListeners(), this.isPressing = !1, this.node.getProps().whileTap && this.node.animationState && this.node.animationState.setActive("whileTap", !1), !wp()
    }
    cancelPress(t, n) {
        if (!this.checkPressEnd()) return;
        const {
            onTapCancel: r
        } = this.node.getProps();
        r && G.update(() => r(t, n))
    }
    mount() {
        const t = this.node.getProps(),
            n = mt(this.node.current, "pointerdown", this.startPointerPress, {
                passive: !(t.onTapStart || t.onPointerStart)
            }),
            r = ht(this.node.current, "focus", this.startAccessiblePress);
        this.removeStartListeners = Bt(n, r)
    }
    unmount() {
        this.removeStartListeners(), this.removeEndListeners(), this.removeAccessibleListeners()
    }
}
const Il = new WeakMap,
    Ao = new WeakMap,
    qy = e => {
        const t = Il.get(e.target);
        t && t(e)
    },
    e0 = e => {
        e.forEach(qy)
    };

function t0({
    root: e,
    ...t
}) {
    const n = e || document;
    Ao.has(n) || Ao.set(n, {});
    const r = Ao.get(n),
        i = JSON.stringify(t);
    return r[i] || (r[i] = new IntersectionObserver(e0, {
        root: e,
        ...t
    })), r[i]
}

function n0(e, t, n) {
    const r = t0(t);
    return Il.set(e, n), r.observe(e), () => {
        Il.delete(e), r.unobserve(e)
    }
}
const r0 = {
    some: 0,
    all: 1
};
class i0 extends Zt {
    constructor() {
        super(...arguments), this.hasEnteredView = !1, this.isInView = !1
    }
    startObserver() {
        this.unmount();
        const {
            viewport: t = {}
        } = this.node.getProps(), {
            root: n,
            margin: r,
            amount: i = "some",
            once: s
        } = t, o = {
            root: n ? n.current : void 0,
            rootMargin: r,
            threshold: typeof i == "number" ? i : r0[i]
        }, l = a => {
            const {
                isIntersecting: u
            } = a;
            if (this.isInView === u || (this.isInView = u, s && !u && this.hasEnteredView)) return;
            u && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", u);
            const {
                onViewportEnter: c,
                onViewportLeave: f
            } = this.node.getProps(), d = u ? c : f;
            d && d(a)
        };
        return n0(this.node.current, o, l)
    }
    mount() {
        this.startObserver()
    }
    update() {
        if (typeof IntersectionObserver > "u") return;
        const {
            props: t,
            prevProps: n
        } = this.node;
        ["amount", "margin", "root"].some(s0(t, n)) && this.startObserver()
    }
    unmount() {}
}

function s0({
    viewport: e = {}
}, {
    viewport: t = {}
} = {}) {
    return n => e[n] !== t[n]
}
const o0 = {
    inView: {
        Feature: i0
    },
    tap: {
        Feature: Jy
    },
    focus: {
        Feature: Zy
    },
    hover: {
        Feature: by
    }
};

function Cp(e, t) {
    if (!Array.isArray(t)) return !1;
    const n = t.length;
    if (n !== e.length) return !1;
    for (let r = 0; r < n; r++)
        if (t[r] !== e[r]) return !1;
    return !0
}

function l0(e) {
    const t = {};
    return e.values.forEach((n, r) => t[r] = n.get()), t
}

function a0(e) {
    const t = {};
    return e.values.forEach((n, r) => t[r] = n.getVelocity()), t
}

function to(e, t, n) {
    const r = e.getProps();
    return nu(r, t, n !== void 0 ? n : r.custom, l0(e), a0(e))
}
const u0 = "framerAppearId",
    c0 = "data-" + eu(u0);
let f0 = se,
    ru = se;
const Ut = e => e * 1e3,
    gt = e => e / 1e3,
    d0 = {
        current: !1
    },
    kp = e => Array.isArray(e) && typeof e[0] == "number";

function Ep(e) {
    return !!(!e || typeof e == "string" && Tp[e] || kp(e) || Array.isArray(e) && e.every(Ep))
}
const Sr = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
    Tp = {
        linear: "linear",
        ease: "ease",
        easeIn: "ease-in",
        easeOut: "ease-out",
        easeInOut: "ease-in-out",
        circIn: Sr([0, .65, .55, 1]),
        circOut: Sr([.55, 0, 1, .45]),
        backIn: Sr([.31, .01, .66, -.59]),
        backOut: Sr([.33, 1.53, .69, .99])
    };

function _p(e) {
    if (e) return kp(e) ? Sr(e) : Array.isArray(e) ? e.map(_p) : Tp[e]
}

function h0(e, t, n, {
    delay: r = 0,
    duration: i,
    repeat: s = 0,
    repeatType: o = "loop",
    ease: l,
    times: a
} = {}) {
    const u = {
        [t]: n
    };
    a && (u.offset = a);
    const c = _p(l);
    return Array.isArray(c) && (u.easing = c), e.animate(u, {
        delay: r,
        duration: i,
        easing: Array.isArray(c) ? "linear" : c,
        fill: "both",
        iterations: s + 1,
        direction: o === "reverse" ? "alternate" : "normal"
    })
}
const Mc = {
        waapi: () => Object.hasOwnProperty.call(Element.prototype, "animate")
    },
    Vo = {},
    jp = {};
for (const e in Mc) jp[e] = () => (Vo[e] === void 0 && (Vo[e] = Mc[e]()), Vo[e]);

function p0(e, {
    repeat: t,
    repeatType: n = "loop"
}) {
    const r = t && n !== "loop" && t % 2 === 1 ? 0 : e.length - 1;
    return e[r]
}
const Np = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
    m0 = 1e-7,
    g0 = 12;

function v0(e, t, n, r, i) {
    let s, o, l = 0;
    do o = t + (n - t) / 2, s = Np(o, r, i) - e, s > 0 ? n = o : t = o; while (Math.abs(s) > m0 && ++l < g0);
    return o
}

function hi(e, t, n, r) {
    if (e === t && n === r) return se;
    const i = s => v0(s, 0, 1, e, n);
    return s => s === 0 || s === 1 ? s : Np(i(s), t, r)
}
const y0 = hi(.42, 0, 1, 1),
    x0 = hi(0, 0, .58, 1),
    Lp = hi(.42, 0, .58, 1),
    w0 = e => Array.isArray(e) && typeof e[0] != "number",
    Ap = e => t => t <= .5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
    Vp = e => t => 1 - e(1 - t),
    Mp = e => 1 - Math.sin(Math.acos(e)),
    iu = Vp(Mp),
    S0 = Ap(iu),
    Dp = hi(.33, 1.53, .69, .99),
    su = Vp(Dp),
    P0 = Ap(su),
    C0 = e => (e *= 2) < 1 ? .5 * su(e) : .5 * (2 - Math.pow(2, -10 * (e - 1))),
    k0 = {
        linear: se,
        easeIn: y0,
        easeInOut: Lp,
        easeOut: x0,
        circIn: Mp,
        circInOut: S0,
        circOut: iu,
        backIn: su,
        backInOut: P0,
        backOut: Dp,
        anticipate: C0
    },
    Dc = e => {
        if (Array.isArray(e)) {
            ru(e.length === 4);
            const [t, n, r, i] = e;
            return hi(t, n, r, i)
        } else if (typeof e == "string") return k0[e];
        return e
    },
    ou = (e, t) => n => !!(fi(n) && Sy.test(n) && n.startsWith(e) || t && Object.prototype.hasOwnProperty.call(n, t)),
    Op = (e, t, n) => r => {
        if (!fi(r)) return r;
        const [i, s, o, l] = r.match(Js);
        return {
            [e]: parseFloat(i),
            [t]: parseFloat(s),
            [n]: parseFloat(o),
            alpha: l !== void 0 ? parseFloat(l) : 1
        }
    },
    E0 = e => Xt(0, 255, e),
    Mo = { ...Pn,
        transform: e => Math.round(E0(e))
    },
    cn = {
        test: ou("rgb", "red"),
        parse: Op("red", "green", "blue"),
        transform: ({
            red: e,
            green: t,
            blue: n,
            alpha: r = 1
        }) => "rgba(" + Mo.transform(e) + ", " + Mo.transform(t) + ", " + Mo.transform(n) + ", " + Mr(Vr.transform(r)) + ")"
    };

function T0(e) {
    let t = "",
        n = "",
        r = "",
        i = "";
    return e.length > 5 ? (t = e.substring(1, 3), n = e.substring(3, 5), r = e.substring(5, 7), i = e.substring(7, 9)) : (t = e.substring(1, 2), n = e.substring(2, 3), r = e.substring(3, 4), i = e.substring(4, 5), t += t, n += n, r += r, i += i), {
        red: parseInt(t, 16),
        green: parseInt(n, 16),
        blue: parseInt(r, 16),
        alpha: i ? parseInt(i, 16) / 255 : 1
    }
}
const Fl = {
        test: ou("#"),
        parse: T0,
        transform: cn.transform
    },
    zn = {
        test: ou("hsl", "hue"),
        parse: Op("hue", "saturation", "lightness"),
        transform: ({
            hue: e,
            saturation: t,
            lightness: n,
            alpha: r = 1
        }) => "hsla(" + Math.round(e) + ", " + at.transform(Mr(t)) + ", " + at.transform(Mr(n)) + ", " + Mr(Vr.transform(r)) + ")"
    },
    ye = {
        test: e => cn.test(e) || Fl.test(e) || zn.test(e),
        parse: e => cn.test(e) ? cn.parse(e) : zn.test(e) ? zn.parse(e) : Fl.parse(e),
        transform: e => fi(e) ? e : e.hasOwnProperty("red") ? cn.transform(e) : zn.transform(e)
    },
    K = (e, t, n) => -n * e + n * t + e;

function Do(e, t, n) {
    return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
}

function _0({
    hue: e,
    saturation: t,
    lightness: n,
    alpha: r
}) {
    e /= 360, t /= 100, n /= 100;
    let i = 0,
        s = 0,
        o = 0;
    if (!t) i = s = o = n;
    else {
        const l = n < .5 ? n * (1 + t) : n + t - n * t,
            a = 2 * n - l;
        i = Do(a, l, e + 1 / 3), s = Do(a, l, e), o = Do(a, l, e - 1 / 3)
    }
    return {
        red: Math.round(i * 255),
        green: Math.round(s * 255),
        blue: Math.round(o * 255),
        alpha: r
    }
}
const Oo = (e, t, n) => {
        const r = e * e;
        return Math.sqrt(Math.max(0, n * (t * t - r) + r))
    },
    j0 = [Fl, cn, zn],
    N0 = e => j0.find(t => t.test(e));

function Oc(e) {
    const t = N0(e);
    let n = t.parse(e);
    return t === zn && (n = _0(n)), n
}
const Rp = (e, t) => {
    const n = Oc(e),
        r = Oc(t),
        i = { ...n
        };
    return s => (i.red = Oo(n.red, r.red, s), i.green = Oo(n.green, r.green, s), i.blue = Oo(n.blue, r.blue, s), i.alpha = K(n.alpha, r.alpha, s), cn.transform(i))
};

function L0(e) {
    var t, n;
    return isNaN(e) && fi(e) && (((t = e.match(Js)) === null || t === void 0 ? void 0 : t.length) || 0) + (((n = e.match(lp)) === null || n === void 0 ? void 0 : n.length) || 0) > 0
}
const Ip = {
        regex: xy,
        countKey: "Vars",
        token: "${v}",
        parse: se
    },
    Fp = {
        regex: lp,
        countKey: "Colors",
        token: "${c}",
        parse: ye.parse
    },
    zp = {
        regex: Js,
        countKey: "Numbers",
        token: "${n}",
        parse: Pn.parse
    };

function Ro(e, {
    regex: t,
    countKey: n,
    token: r,
    parse: i
}) {
    const s = e.tokenised.match(t);
    s && (e["num" + n] = s.length, e.tokenised = e.tokenised.replace(t, r), e.values.push(...s.map(i)))
}

function Es(e) {
    const t = e.toString(),
        n = {
            value: t,
            tokenised: t,
            values: [],
            numVars: 0,
            numColors: 0,
            numNumbers: 0
        };
    return n.value.includes("var(--") && Ro(n, Ip), Ro(n, Fp), Ro(n, zp), n
}

function Bp(e) {
    return Es(e).values
}

function Up(e) {
    const {
        values: t,
        numColors: n,
        numVars: r,
        tokenised: i
    } = Es(e), s = t.length;
    return o => {
        let l = i;
        for (let a = 0; a < s; a++) a < r ? l = l.replace(Ip.token, o[a]) : a < r + n ? l = l.replace(Fp.token, ye.transform(o[a])) : l = l.replace(zp.token, Mr(o[a]));
        return l
    }
}
const A0 = e => typeof e == "number" ? 0 : e;

function V0(e) {
    const t = Bp(e);
    return Up(e)(t.map(A0))
}
const Qt = {
        test: L0,
        parse: Bp,
        createTransformer: Up,
        getAnimatableNone: V0
    },
    $p = (e, t) => n => `${n>0?t:e}`;

function Wp(e, t) {
    return typeof e == "number" ? n => K(e, t, n) : ye.test(e) ? Rp(e, t) : e.startsWith("var(") ? $p(e, t) : Yp(e, t)
}
const Hp = (e, t) => {
        const n = [...e],
            r = n.length,
            i = e.map((s, o) => Wp(s, t[o]));
        return s => {
            for (let o = 0; o < r; o++) n[o] = i[o](s);
            return n
        }
    },
    M0 = (e, t) => {
        const n = { ...e,
                ...t
            },
            r = {};
        for (const i in n) e[i] !== void 0 && t[i] !== void 0 && (r[i] = Wp(e[i], t[i]));
        return i => {
            for (const s in r) n[s] = r[s](i);
            return n
        }
    },
    Yp = (e, t) => {
        const n = Qt.createTransformer(t),
            r = Es(e),
            i = Es(t);
        return r.numVars === i.numVars && r.numColors === i.numColors && r.numNumbers >= i.numNumbers ? Bt(Hp(r.values, i.values), n) : $p(e, t)
    },
    ii = (e, t, n) => {
        const r = t - e;
        return r === 0 ? 1 : (n - e) / r
    },
    Rc = (e, t) => n => K(e, t, n);

function D0(e) {
    return typeof e == "number" ? Rc : typeof e == "string" ? ye.test(e) ? Rp : Yp : Array.isArray(e) ? Hp : typeof e == "object" ? M0 : Rc
}

function O0(e, t, n) {
    const r = [],
        i = n || D0(e[0]),
        s = e.length - 1;
    for (let o = 0; o < s; o++) {
        let l = i(e[o], e[o + 1]);
        if (t) {
            const a = Array.isArray(t) ? t[o] || se : t;
            l = Bt(a, l)
        }
        r.push(l)
    }
    return r
}

function Xp(e, t, {
    clamp: n = !0,
    ease: r,
    mixer: i
} = {}) {
    const s = e.length;
    if (ru(s === t.length), s === 1) return () => t[0];
    e[0] > e[s - 1] && (e = [...e].reverse(), t = [...t].reverse());
    const o = O0(t, r, i),
        l = o.length,
        a = u => {
            let c = 0;
            if (l > 1)
                for (; c < e.length - 2 && !(u < e[c + 1]); c++);
            const f = ii(e[c], e[c + 1], u);
            return o[c](f)
        };
    return n ? u => a(Xt(e[0], e[s - 1], u)) : a
}

function R0(e, t) {
    const n = e[e.length - 1];
    for (let r = 1; r <= t; r++) {
        const i = ii(0, t, r);
        e.push(K(n, 1, i))
    }
}

function I0(e) {
    const t = [0];
    return R0(t, e.length - 1), t
}

function F0(e, t) {
    return e.map(n => n * t)
}

function z0(e, t) {
    return e.map(() => t || Lp).splice(0, e.length - 1)
}

function Ts({
    duration: e = 300,
    keyframes: t,
    times: n,
    ease: r = "easeInOut"
}) {
    const i = w0(r) ? r.map(Dc) : Dc(r),
        s = {
            done: !1,
            value: t[0]
        },
        o = F0(n && n.length === t.length ? n : I0(t), e),
        l = Xp(o, t, {
            ease: Array.isArray(i) ? i : z0(t, i)
        });
    return {
        calculatedDuration: e,
        next: a => (s.value = l(a), s.done = a >= e, s)
    }
}

function Qp(e, t) {
    return t ? e * (1e3 / t) : 0
}
const B0 = 5;

function Kp(e, t, n) {
    const r = Math.max(t - B0, 0);
    return Qp(n - e(r), t - r)
}
const Io = .001,
    U0 = .01,
    Ic = 10,
    $0 = .05,
    W0 = 1;

function H0({
    duration: e = 800,
    bounce: t = .25,
    velocity: n = 0,
    mass: r = 1
}) {
    let i, s;
    f0(e <= Ut(Ic));
    let o = 1 - t;
    o = Xt($0, W0, o), e = Xt(U0, Ic, gt(e)), o < 1 ? (i = u => {
        const c = u * o,
            f = c * e,
            d = c - n,
            g = zl(u, o),
            v = Math.exp(-f);
        return Io - d / g * v
    }, s = u => {
        const f = u * o * e,
            d = f * n + n,
            g = Math.pow(o, 2) * Math.pow(u, 2) * e,
            v = Math.exp(-f),
            x = zl(Math.pow(u, 2), o);
        return (-i(u) + Io > 0 ? -1 : 1) * ((d - g) * v) / x
    }) : (i = u => {
        const c = Math.exp(-u * e),
            f = (u - n) * e + 1;
        return -Io + c * f
    }, s = u => {
        const c = Math.exp(-u * e),
            f = (n - u) * (e * e);
        return c * f
    });
    const l = 5 / e,
        a = X0(i, s, l);
    if (e = Ut(e), isNaN(a)) return {
        stiffness: 100,
        damping: 10,
        duration: e
    }; {
        const u = Math.pow(a, 2) * r;
        return {
            stiffness: u,
            damping: o * 2 * Math.sqrt(r * u),
            duration: e
        }
    }
}
const Y0 = 12;

function X0(e, t, n) {
    let r = n;
    for (let i = 1; i < Y0; i++) r = r - e(r) / t(r);
    return r
}

function zl(e, t) {
    return e * Math.sqrt(1 - t * t)
}
const Q0 = ["duration", "bounce"],
    K0 = ["stiffness", "damping", "mass"];

function Fc(e, t) {
    return t.some(n => e[n] !== void 0)
}

function G0(e) {
    let t = {
        velocity: 0,
        stiffness: 100,
        damping: 10,
        mass: 1,
        isResolvedFromDuration: !1,
        ...e
    };
    if (!Fc(e, K0) && Fc(e, Q0)) {
        const n = H0(e);
        t = { ...t,
            ...n,
            velocity: 0,
            mass: 1
        }, t.isResolvedFromDuration = !0
    }
    return t
}

function Gp({
    keyframes: e,
    restDelta: t,
    restSpeed: n,
    ...r
}) {
    const i = e[0],
        s = e[e.length - 1],
        o = {
            done: !1,
            value: i
        },
        {
            stiffness: l,
            damping: a,
            mass: u,
            velocity: c,
            duration: f,
            isResolvedFromDuration: d
        } = G0(r),
        g = c ? -gt(c) : 0,
        v = a / (2 * Math.sqrt(l * u)),
        x = s - i,
        E = gt(Math.sqrt(l / u)),
        p = Math.abs(x) < 5;
    n || (n = p ? .01 : 2), t || (t = p ? .005 : .5);
    let h;
    if (v < 1) {
        const m = zl(E, v);
        h = w => {
            const S = Math.exp(-v * E * w);
            return s - S * ((g + v * E * x) / m * Math.sin(m * w) + x * Math.cos(m * w))
        }
    } else if (v === 1) h = m => s - Math.exp(-E * m) * (x + (g + E * x) * m);
    else {
        const m = E * Math.sqrt(v * v - 1);
        h = w => {
            const S = Math.exp(-v * E * w),
                T = Math.min(m * w, 300);
            return s - S * ((g + v * E * x) * Math.sinh(T) + m * x * Math.cosh(T)) / m
        }
    }
    return {
        calculatedDuration: d && f || null,
        next: m => {
            const w = h(m);
            if (d) o.done = m >= f;
            else {
                let S = g;
                m !== 0 && (v < 1 ? S = Kp(h, m, w) : S = 0);
                const T = Math.abs(S) <= n,
                    k = Math.abs(s - w) <= t;
                o.done = T && k
            }
            return o.value = o.done ? s : w, o
        }
    }
}

function zc({
    keyframes: e,
    velocity: t = 0,
    power: n = .8,
    timeConstant: r = 325,
    bounceDamping: i = 10,
    bounceStiffness: s = 500,
    modifyTarget: o,
    min: l,
    max: a,
    restDelta: u = .5,
    restSpeed: c
}) {
    const f = e[0],
        d = {
            done: !1,
            value: f
        },
        g = P => l !== void 0 && P < l || a !== void 0 && P > a,
        v = P => l === void 0 ? a : a === void 0 || Math.abs(l - P) < Math.abs(a - P) ? l : a;
    let x = n * t;
    const E = f + x,
        p = o === void 0 ? E : o(E);
    p !== E && (x = p - f);
    const h = P => -x * Math.exp(-P / r),
        m = P => p + h(P),
        w = P => {
            const L = h(P),
                A = m(P);
            d.done = Math.abs(L) <= u, d.value = d.done ? p : A
        };
    let S, T;
    const k = P => {
        g(d.value) && (S = P, T = Gp({
            keyframes: [d.value, v(d.value)],
            velocity: Kp(m, P, d.value),
            damping: i,
            stiffness: s,
            restDelta: u,
            restSpeed: c
        }))
    };
    return k(0), {
        calculatedDuration: null,
        next: P => {
            let L = !1;
            return !T && S === void 0 && (L = !0, w(P), k(P)), S !== void 0 && P > S ? T.next(P - S) : (!L && w(P), d)
        }
    }
}
const b0 = e => {
        const t = ({
            timestamp: n
        }) => e(n);
        return {
            start: () => G.update(t, !0),
            stop: () => St(t),
            now: () => X.isProcessing ? X.timestamp : performance.now()
        }
    },
    Bc = 2e4;

function Uc(e) {
    let t = 0;
    const n = 50;
    let r = e.next(t);
    for (; !r.done && t < Bc;) t += n, r = e.next(t);
    return t >= Bc ? 1 / 0 : t
}
const Z0 = {
    decay: zc,
    inertia: zc,
    tween: Ts,
    keyframes: Ts,
    spring: Gp
};

function _s({
    autoplay: e = !0,
    delay: t = 0,
    driver: n = b0,
    keyframes: r,
    type: i = "keyframes",
    repeat: s = 0,
    repeatDelay: o = 0,
    repeatType: l = "loop",
    onPlay: a,
    onStop: u,
    onComplete: c,
    onUpdate: f,
    ...d
}) {
    let g = 1,
        v = !1,
        x, E;
    const p = () => {
        E = new Promise(M => {
            x = M
        })
    };
    p();
    let h;
    const m = Z0[i] || Ts;
    let w;
    m !== Ts && typeof r[0] != "number" && (w = Xp([0, 100], r, {
        clamp: !1
    }), r = [0, 100]);
    const S = m({ ...d,
        keyframes: r
    });
    let T;
    l === "mirror" && (T = m({ ...d,
        keyframes: [...r].reverse(),
        velocity: -(d.velocity || 0)
    }));
    let k = "idle",
        P = null,
        L = null,
        A = null;
    S.calculatedDuration === null && s && (S.calculatedDuration = Uc(S));
    const {
        calculatedDuration: H
    } = S;
    let de = 1 / 0,
        he = 1 / 0;
    H !== null && (de = H + o, he = de * (s + 1) - o);
    let Y = 0;
    const ee = M => {
            if (L === null) return;
            g > 0 && (L = Math.min(L, M)), g < 0 && (L = Math.min(M - he / g, L)), P !== null ? Y = P : Y = Math.round(M - L) * g;
            const $ = Y - t * (g >= 0 ? 1 : -1),
                Jt = g >= 0 ? $ < 0 : $ > he;
            Y = Math.max($, 0), k === "finished" && P === null && (Y = he);
            let tt = Y,
                Cn = S;
            if (s) {
                const no = Y / de;
                let pi = Math.floor(no),
                    en = no % 1;
                !en && no >= 1 && (en = 1), en === 1 && pi--, pi = Math.min(pi, s + 1);
                const hu = !!(pi % 2);
                hu && (l === "reverse" ? (en = 1 - en, o && (en -= o / de)) : l === "mirror" && (Cn = T));
                let pu = Xt(0, 1, en);
                Y > he && (pu = l === "reverse" && hu ? 1 : 0), tt = pu * de
            }
            const Ne = Jt ? {
                done: !1,
                value: r[0]
            } : Cn.next(tt);
            w && (Ne.value = w(Ne.value));
            let {
                done: qt
            } = Ne;
            !Jt && H !== null && (qt = g >= 0 ? Y >= he : Y <= 0);
            const Am = P === null && (k === "finished" || k === "running" && qt);
            return f && f(Ne.value), Am && _(), Ne
        },
        Fe = () => {
            h && h.stop(), h = void 0
        },
        et = () => {
            k = "idle", Fe(), x(), p(), L = A = null
        },
        _ = () => {
            k = "finished", c && c(), Fe(), x()
        },
        D = () => {
            if (v) return;
            h || (h = n(ee));
            const M = h.now();
            a && a(), P !== null ? L = M - P : (!L || k === "finished") && (L = M), k === "finished" && p(), A = L, P = null, k = "running", h.start()
        };
    e && D();
    const O = {
        then(M, $) {
            return E.then(M, $)
        },
        get time() {
            return gt(Y)
        },
        set time(M) {
            M = Ut(M), Y = M, P !== null || !h || g === 0 ? P = M : L = h.now() - M / g
        },
        get duration() {
            const M = S.calculatedDuration === null ? Uc(S) : S.calculatedDuration;
            return gt(M)
        },
        get speed() {
            return g
        },
        set speed(M) {
            M === g || !h || (g = M, O.time = gt(Y))
        },
        get state() {
            return k
        },
        play: D,
        pause: () => {
            k = "paused", P = Y
        },
        stop: () => {
            v = !0, k !== "idle" && (k = "idle", u && u(), et())
        },
        cancel: () => {
            A !== null && ee(A), et()
        },
        complete: () => {
            k = "finished"
        },
        sample: M => (L = 0, ee(M))
    };
    return O
}
const J0 = new Set(["opacity", "clipPath", "filter", "transform", "backgroundColor"]),
    Mi = 10,
    q0 = 2e4,
    e1 = (e, t) => t.type === "spring" || e === "backgroundColor" || !Ep(t.ease);

function t1(e, t, {
    onUpdate: n,
    onComplete: r,
    ...i
}) {
    if (!(jp.waapi() && J0.has(t) && !i.repeatDelay && i.repeatType !== "mirror" && i.damping !== 0 && i.type !== "inertia")) return !1;
    let o = !1,
        l, a;
    const u = () => {
        a = new Promise(p => {
            l = p
        })
    };
    u();
    let {
        keyframes: c,
        duration: f = 300,
        ease: d,
        times: g
    } = i;
    if (e1(t, i)) {
        const p = _s({ ...i,
            repeat: 0,
            delay: 0
        });
        let h = {
            done: !1,
            value: c[0]
        };
        const m = [];
        let w = 0;
        for (; !h.done && w < q0;) h = p.sample(w), m.push(h.value), w += Mi;
        g = void 0, c = m, f = w - Mi, d = "linear"
    }
    const v = h0(e.owner.current, t, c, { ...i,
            duration: f,
            ease: d,
            times: g
        }),
        x = () => v.cancel(),
        E = () => {
            G.update(x), l(), u()
        };
    return v.onfinish = () => {
        e.set(p0(c, i)), r && r(), E()
    }, {
        then(p, h) {
            return a.then(p, h)
        },
        get time() {
            return gt(v.currentTime || 0)
        },
        set time(p) {
            v.currentTime = Ut(p)
        },
        get speed() {
            return v.playbackRate
        },
        set speed(p) {
            v.playbackRate = p
        },
        get duration() {
            return gt(f)
        },
        play: () => {
            o || (v.play(), St(x))
        },
        pause: () => v.pause(),
        stop: () => {
            if (o = !0, v.playState === "idle") return;
            const {
                currentTime: p
            } = v;
            if (p) {
                const h = _s({ ...i,
                    autoplay: !1
                });
                e.setWithVelocity(h.sample(p - Mi).value, h.sample(p).value, Mi)
            }
            E()
        },
        complete: () => v.finish(),
        cancel: E
    }
}

function n1({
    keyframes: e,
    delay: t,
    onUpdate: n,
    onComplete: r
}) {
    const i = () => (n && n(e[e.length - 1]), r && r(), {
        time: 0,
        speed: 1,
        duration: 0,
        play: se,
        pause: se,
        stop: se,
        then: s => (s(), Promise.resolve()),
        cancel: se,
        complete: se
    });
    return t ? _s({
        keyframes: [0, 1],
        duration: 0,
        delay: t,
        onComplete: i
    }) : i()
}
const r1 = {
        type: "spring",
        stiffness: 500,
        damping: 25,
        restSpeed: 10
    },
    i1 = e => ({
        type: "spring",
        stiffness: 550,
        damping: e === 0 ? 2 * Math.sqrt(550) : 30,
        restSpeed: 10
    }),
    s1 = {
        type: "keyframes",
        duration: .8
    },
    o1 = {
        type: "keyframes",
        ease: [.25, .1, .35, 1],
        duration: .3
    },
    l1 = (e, {
        keyframes: t
    }) => t.length > 2 ? s1 : Sn.has(e) ? e.startsWith("scale") ? i1(t[1]) : r1 : o1,
    Bl = (e, t) => e === "zIndex" ? !1 : !!(typeof t == "number" || Array.isArray(t) || typeof t == "string" && (Qt.test(t) || t === "0") && !t.startsWith("url(")),
    a1 = new Set(["brightness", "contrast", "saturate", "opacity"]);

function u1(e) {
    const [t, n] = e.slice(0, -1).split("(");
    if (t === "drop-shadow") return e;
    const [r] = n.match(Js) || [];
    if (!r) return e;
    const i = n.replace(r, "");
    let s = a1.has(t) ? 1 : 0;
    return r !== n && (s *= 100), t + "(" + s + i + ")"
}
const c1 = /([a-z-]*)\(.*?\)/g,
    Ul = { ...Qt,
        getAnimatableNone: e => {
            const t = e.match(c1);
            return t ? t.map(u1).join(" ") : e
        }
    },
    f1 = { ...ap,
        color: ye,
        backgroundColor: ye,
        outlineColor: ye,
        fill: ye,
        stroke: ye,
        borderColor: ye,
        borderTopColor: ye,
        borderRightColor: ye,
        borderBottomColor: ye,
        borderLeftColor: ye,
        filter: Ul,
        WebkitFilter: Ul
    },
    lu = e => f1[e];

function bp(e, t) {
    let n = lu(e);
    return n !== Ul && (n = Qt), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
}
const Zp = e => /^0[^.\s]+$/.test(e);

function d1(e) {
    if (typeof e == "number") return e === 0;
    if (e !== null) return e === "none" || e === "0" || Zp(e)
}

function h1(e, t, n, r) {
    const i = Bl(t, n);
    let s;
    Array.isArray(n) ? s = [...n] : s = [null, n];
    const o = r.from !== void 0 ? r.from : e.get();
    let l;
    const a = [];
    for (let u = 0; u < s.length; u++) s[u] === null && (s[u] = u === 0 ? o : s[u - 1]), d1(s[u]) && a.push(u), typeof s[u] == "string" && s[u] !== "none" && s[u] !== "0" && (l = s[u]);
    if (i && a.length && l)
        for (let u = 0; u < a.length; u++) {
            const c = a[u];
            s[c] = bp(t, l)
        }
    return s
}

function p1({
    when: e,
    delay: t,
    delayChildren: n,
    staggerChildren: r,
    staggerDirection: i,
    repeat: s,
    repeatType: o,
    repeatDelay: l,
    from: a,
    elapsed: u,
    ...c
}) {
    return !!Object.keys(c).length
}

function Jp(e, t) {
    return e[t] || e.default || e
}
const au = (e, t, n, r = {}) => i => {
    const s = Jp(r, e) || {},
        o = s.delay || r.delay || 0;
    let {
        elapsed: l = 0
    } = r;
    l = l - Ut(o);
    const a = h1(t, e, n, s),
        u = a[0],
        c = a[a.length - 1],
        f = Bl(e, u),
        d = Bl(e, c);
    let g = {
        keyframes: a,
        velocity: t.getVelocity(),
        ease: "easeOut",
        ...s,
        delay: -l,
        onUpdate: v => {
            t.set(v), s.onUpdate && s.onUpdate(v)
        },
        onComplete: () => {
            i(), s.onComplete && s.onComplete()
        }
    };
    if (p1(s) || (g = { ...g,
            ...l1(e, g)
        }), g.duration && (g.duration = Ut(g.duration)), g.repeatDelay && (g.repeatDelay = Ut(g.repeatDelay)), !f || !d || d0.current || s.type === !1) return n1(g);
    if (t.owner && t.owner.current instanceof HTMLElement && !t.owner.getProps().onUpdate) {
        const v = t1(t, e, g);
        if (v) return v
    }
    return _s(g)
};

function js(e) {
    return !!(je(e) && e.add)
}
const m1 = e => /^\-?\d*\.?\d+$/.test(e);

function uu(e, t) {
    e.indexOf(t) === -1 && e.push(t)
}

function cu(e, t) {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1)
}
class fu {
    constructor() {
        this.subscriptions = []
    }
    add(t) {
        return uu(this.subscriptions, t), () => cu(this.subscriptions, t)
    }
    notify(t, n, r) {
        const i = this.subscriptions.length;
        if (i)
            if (i === 1) this.subscriptions[0](t, n, r);
            else
                for (let s = 0; s < i; s++) {
                    const o = this.subscriptions[s];
                    o && o(t, n, r)
                }
    }
    getSize() {
        return this.subscriptions.length
    }
    clear() {
        this.subscriptions.length = 0
    }
}
const g1 = e => !isNaN(parseFloat(e));
class v1 {
    constructor(t, n = {}) {
        this.version = "10.12.21", this.timeDelta = 0, this.lastUpdated = 0, this.canTrackVelocity = !1, this.events = {}, this.updateAndNotify = (r, i = !0) => {
            this.prev = this.current, this.current = r;
            const {
                delta: s,
                timestamp: o
            } = X;
            this.lastUpdated !== o && (this.timeDelta = s, this.lastUpdated = o, G.postRender(this.scheduleVelocityCheck)), this.prev !== this.current && this.events.change && this.events.change.notify(this.current), this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()), i && this.events.renderRequest && this.events.renderRequest.notify(this.current)
        }, this.scheduleVelocityCheck = () => G.postRender(this.velocityCheck), this.velocityCheck = ({
            timestamp: r
        }) => {
            r !== this.lastUpdated && (this.prev = this.current, this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()))
        }, this.hasAnimated = !1, this.prev = this.current = t, this.canTrackVelocity = g1(this.current), this.owner = n.owner
    }
    onChange(t) {
        return this.on("change", t)
    }
    on(t, n) {
        this.events[t] || (this.events[t] = new fu);
        const r = this.events[t].add(n);
        return t === "change" ? () => {
            r(), G.read(() => {
                this.events.change.getSize() || this.stop()
            })
        } : r
    }
    clearListeners() {
        for (const t in this.events) this.events[t].clear()
    }
    attach(t, n) {
        this.passiveEffect = t, this.stopPassiveEffect = n
    }
    set(t, n = !0) {
        !n || !this.passiveEffect ? this.updateAndNotify(t, n) : this.passiveEffect(t, this.updateAndNotify)
    }
    setWithVelocity(t, n, r) {
        this.set(n), this.prev = t, this.timeDelta = r
    }
    jump(t) {
        this.updateAndNotify(t), this.prev = t, this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
    }
    get() {
        return this.current
    }
    getPrevious() {
        return this.prev
    }
    getVelocity() {
        return this.canTrackVelocity ? Qp(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta) : 0
    }
    start(t) {
        return this.stop(), new Promise(n => {
            this.hasAnimated = !0, this.animation = t(n), this.events.animationStart && this.events.animationStart.notify()
        }).then(() => {
            this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation()
        })
    }
    stop() {
        this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation()
    }
    isAnimating() {
        return !!this.animation
    }
    clearAnimation() {
        delete this.animation
    }
    destroy() {
        this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
    }
}

function nr(e, t) {
    return new v1(e, t)
}
const qp = e => t => t.test(e),
    y1 = {
        test: e => e === "auto",
        parse: e => e
    },
    em = [Pn, V, at, kt, Cy, Py, y1],
    mr = e => em.find(qp(e)),
    x1 = [...em, ye, Qt],
    w1 = e => x1.find(qp(e));

function S1(e, t, n) {
    e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, nr(n))
}

function P1(e, t) {
    const n = to(e, t);
    let {
        transitionEnd: r = {},
        transition: i = {},
        ...s
    } = n ? e.makeTargetAnimatable(n, !1) : {};
    s = { ...s,
        ...r
    };
    for (const o in s) {
        const l = Fy(s[o]);
        S1(e, o, l)
    }
}

function C1(e, t, n) {
    var r, i;
    const s = Object.keys(t).filter(l => !e.hasValue(l)),
        o = s.length;
    if (!o) return !1;
    for (let l = 0; l < o; l++) {
        const a = s[l],
            u = t[a];
        let c = null;
        Array.isArray(u) && (c = u[0]), c === null && (c = (i = (r = n[a]) !== null && r !== void 0 ? r : e.readValue(a)) !== null && i !== void 0 ? i : t[a]), c != null && (typeof c == "string" && (m1(c) || Zp(c)) ? c = parseFloat(c) : !w1(c) && Qt.test(u) && (c = bp(a, u)), e.addValue(a, nr(c, {
            owner: e
        })), n[a] === void 0 && (n[a] = c), c !== null && e.setBaseTarget(a, c))
    }
    return !0
}

function k1(e, t) {
    return t ? (t[e] || t.default || t).from : void 0
}

function E1(e, t, n) {
    const r = {};
    for (const i in e) {
        const s = k1(i, t);
        if (s !== void 0) r[i] = s;
        else {
            const o = n.getValue(i);
            o && (r[i] = o.get())
        }
    }
    return r
}

function T1({
    protectedKeys: e,
    needsAnimating: t
}, n) {
    const r = e.hasOwnProperty(n) && t[n] !== !0;
    return t[n] = !1, r
}

function tm(e, t, {
    delay: n = 0,
    transitionOverride: r,
    type: i
} = {}) {
    let {
        transition: s = e.getDefaultTransition(),
        transitionEnd: o,
        ...l
    } = e.makeTargetAnimatable(t);
    const a = e.getValue("willChange");
    r && (s = r);
    const u = [],
        c = i && e.animationState && e.animationState.getState()[i];
    for (const f in l) {
        const d = e.getValue(f),
            g = l[f];
        if (!d || g === void 0 || c && T1(c, f)) continue;
        const v = {
            delay: n,
            elapsed: 0,
            ...s
        };
        if (window.HandoffAppearAnimations && !d.hasAnimated) {
            const E = e.getProps()[c0];
            E && (v.elapsed = window.HandoffAppearAnimations(E, f, d, G))
        }
        d.start(au(f, d, g, e.shouldReduceMotion && Sn.has(f) ? {
            type: !1
        } : v));
        const x = d.animation;
        js(a) && (a.add(f), x.then(() => a.remove(f))), u.push(x)
    }
    return o && Promise.all(u).then(() => {
        o && P1(e, o)
    }), u
}

function $l(e, t, n = {}) {
    const r = to(e, t, n.custom);
    let {
        transition: i = e.getDefaultTransition() || {}
    } = r || {};
    n.transitionOverride && (i = n.transitionOverride);
    const s = r ? () => Promise.all(tm(e, r, n)) : () => Promise.resolve(),
        o = e.variantChildren && e.variantChildren.size ? (a = 0) => {
            const {
                delayChildren: u = 0,
                staggerChildren: c,
                staggerDirection: f
            } = i;
            return _1(e, t, u + a, c, f, n)
        } : () => Promise.resolve(),
        {
            when: l
        } = i;
    if (l) {
        const [a, u] = l === "beforeChildren" ? [s, o] : [o, s];
        return a().then(() => u())
    } else return Promise.all([s(), o(n.delay)])
}

function _1(e, t, n = 0, r = 0, i = 1, s) {
    const o = [],
        l = (e.variantChildren.size - 1) * r,
        a = i === 1 ? (u = 0) => u * r : (u = 0) => l - u * r;
    return Array.from(e.variantChildren).sort(j1).forEach((u, c) => {
        u.notify("AnimationStart", t), o.push($l(u, t, { ...s,
            delay: n + a(c)
        }).then(() => u.notify("AnimationComplete", t)))
    }), Promise.all(o)
}

function j1(e, t) {
    return e.sortNodePosition(t)
}

function N1(e, t, n = {}) {
    e.notify("AnimationStart", t);
    let r;
    if (Array.isArray(t)) {
        const i = t.map(s => $l(e, s, n));
        r = Promise.all(i)
    } else if (typeof t == "string") r = $l(e, t, n);
    else {
        const i = typeof t == "function" ? to(e, t, n.custom) : t;
        r = Promise.all(tm(e, i, n))
    }
    return r.then(() => e.notify("AnimationComplete", t))
}
const L1 = [...Qa].reverse(),
    A1 = Qa.length;

function V1(e) {
    return t => Promise.all(t.map(({
        animation: n,
        options: r
    }) => N1(e, n, r)))
}

function M1(e) {
    let t = V1(e);
    const n = O1();
    let r = !0;
    const i = (a, u) => {
        const c = to(e, u);
        if (c) {
            const {
                transition: f,
                transitionEnd: d,
                ...g
            } = c;
            a = { ...a,
                ...g,
                ...d
            }
        }
        return a
    };

    function s(a) {
        t = a(e)
    }

    function o(a, u) {
        const c = e.getProps(),
            f = e.getVariantContext(!0) || {},
            d = [],
            g = new Set;
        let v = {},
            x = 1 / 0;
        for (let p = 0; p < A1; p++) {
            const h = L1[p],
                m = n[h],
                w = c[h] !== void 0 ? c[h] : f[h],
                S = ti(w),
                T = h === u ? m.isActive : null;
            T === !1 && (x = p);
            let k = w === f[h] && w !== c[h] && S;
            if (k && r && e.manuallyAnimateOnMount && (k = !1), m.protectedKeys = { ...v
                }, !m.isActive && T === null || !w && !m.prevProp || bs(w) || typeof w == "boolean") continue;
            const P = D1(m.prevProp, w);
            let L = P || h === u && m.isActive && !k && S || p > x && S;
            const A = Array.isArray(w) ? w : [w];
            let H = A.reduce(i, {});
            T === !1 && (H = {});
            const {
                prevResolvedValues: de = {}
            } = m, he = { ...de,
                ...H
            }, Y = ee => {
                L = !0, g.delete(ee), m.needsAnimating[ee] = !0
            };
            for (const ee in he) {
                const Fe = H[ee],
                    et = de[ee];
                v.hasOwnProperty(ee) || (Fe !== et ? ks(Fe) && ks(et) ? !Cp(Fe, et) || P ? Y(ee) : m.protectedKeys[ee] = !0 : Fe !== void 0 ? Y(ee) : g.add(ee) : Fe !== void 0 && g.has(ee) ? Y(ee) : m.protectedKeys[ee] = !0)
            }
            m.prevProp = w, m.prevResolvedValues = H, m.isActive && (v = { ...v,
                ...H
            }), r && e.blockInitialAnimation && (L = !1), L && !k && d.push(...A.map(ee => ({
                animation: ee,
                options: {
                    type: h,
                    ...a
                }
            })))
        }
        if (g.size) {
            const p = {};
            g.forEach(h => {
                const m = e.getBaseTarget(h);
                m !== void 0 && (p[h] = m)
            }), d.push({
                animation: p
            })
        }
        let E = !!d.length;
        return r && c.initial === !1 && !e.manuallyAnimateOnMount && (E = !1), r = !1, E ? t(d) : Promise.resolve()
    }

    function l(a, u, c) {
        var f;
        if (n[a].isActive === u) return Promise.resolve();
        (f = e.variantChildren) === null || f === void 0 || f.forEach(g => {
            var v;
            return (v = g.animationState) === null || v === void 0 ? void 0 : v.setActive(a, u)
        }), n[a].isActive = u;
        const d = o(c, a);
        for (const g in n) n[g].protectedKeys = {};
        return d
    }
    return {
        animateChanges: o,
        setActive: l,
        setAnimateFunction: s,
        getState: () => n
    }
}

function D1(e, t) {
    return typeof t == "string" ? t !== e : Array.isArray(t) ? !Cp(t, e) : !1
}

function tn(e = !1) {
    return {
        isActive: e,
        protectedKeys: {},
        needsAnimating: {},
        prevResolvedValues: {}
    }
}

function O1() {
    return {
        animate: tn(!0),
        whileInView: tn(),
        whileHover: tn(),
        whileTap: tn(),
        whileDrag: tn(),
        whileFocus: tn(),
        exit: tn()
    }
}
class R1 extends Zt {
    constructor(t) {
        super(t), t.animationState || (t.animationState = M1(t))
    }
    updateAnimationControlsSubscription() {
        const {
            animate: t
        } = this.node.getProps();
        this.unmount(), bs(t) && (this.unmount = t.subscribe(this.node))
    }
    mount() {
        this.updateAnimationControlsSubscription()
    }
    update() {
        const {
            animate: t
        } = this.node.getProps(), {
            animate: n
        } = this.node.prevProps || {};
        t !== n && this.updateAnimationControlsSubscription()
    }
    unmount() {}
}
let I1 = 0;
class F1 extends Zt {
    constructor() {
        super(...arguments), this.id = I1++
    }
    update() {
        if (!this.node.presenceContext) return;
        const {
            isPresent: t,
            onExitComplete: n,
            custom: r
        } = this.node.presenceContext, {
            isPresent: i
        } = this.node.prevPresenceContext || {};
        if (!this.node.animationState || t === i) return;
        const s = this.node.animationState.setActive("exit", !t, {
            custom: r ? ? this.node.getProps().custom
        });
        n && !t && s.then(() => n(this.id))
    }
    mount() {
        const {
            register: t
        } = this.node.presenceContext || {};
        t && (this.unmount = t(this.id))
    }
    unmount() {}
}
const z1 = {
        animation: {
            Feature: R1
        },
        exit: {
            Feature: F1
        }
    },
    $c = (e, t) => Math.abs(e - t);

function B1(e, t) {
    const n = $c(e.x, t.x),
        r = $c(e.y, t.y);
    return Math.sqrt(n ** 2 + r ** 2)
}
class nm {
    constructor(t, n, {
        transformPagePoint: r
    } = {}) {
        if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.updatePoint = () => {
                if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                const u = zo(this.lastMoveEventInfo, this.history),
                    c = this.startEvent !== null,
                    f = B1(u.offset, {
                        x: 0,
                        y: 0
                    }) >= 3;
                if (!c && !f) return;
                const {
                    point: d
                } = u, {
                    timestamp: g
                } = X;
                this.history.push({ ...d,
                    timestamp: g
                });
                const {
                    onStart: v,
                    onMove: x
                } = this.handlers;
                c || (v && v(this.lastMoveEvent, u), this.startEvent = this.lastMoveEvent), x && x(this.lastMoveEvent, u)
            }, this.handlePointerMove = (u, c) => {
                this.lastMoveEvent = u, this.lastMoveEventInfo = Fo(c, this.transformPagePoint), G.update(this.updatePoint, !0)
            }, this.handlePointerUp = (u, c) => {
                if (this.end(), !(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                const {
                    onEnd: f,
                    onSessionEnd: d
                } = this.handlers, g = zo(u.type === "pointercancel" ? this.lastMoveEventInfo : Fo(c, this.transformPagePoint), this.history);
                this.startEvent && f && f(u, g), d && d(u, g)
            }, !vp(t)) return;
        this.handlers = n, this.transformPagePoint = r;
        const i = qs(t),
            s = Fo(i, this.transformPagePoint),
            {
                point: o
            } = s,
            {
                timestamp: l
            } = X;
        this.history = [{ ...o,
            timestamp: l
        }];
        const {
            onSessionStart: a
        } = n;
        a && a(t, zo(s, this.history)), this.removeListeners = Bt(mt(window, "pointermove", this.handlePointerMove), mt(window, "pointerup", this.handlePointerUp), mt(window, "pointercancel", this.handlePointerUp))
    }
    updateHandlers(t) {
        this.handlers = t
    }
    end() {
        this.removeListeners && this.removeListeners(), St(this.updatePoint)
    }
}

function Fo(e, t) {
    return t ? {
        point: t(e.point)
    } : e
}

function Wc(e, t) {
    return {
        x: e.x - t.x,
        y: e.y - t.y
    }
}

function zo({
    point: e
}, t) {
    return {
        point: e,
        delta: Wc(e, rm(t)),
        offset: Wc(e, U1(t)),
        velocity: $1(t, .1)
    }
}

function U1(e) {
    return e[0]
}

function rm(e) {
    return e[e.length - 1]
}

function $1(e, t) {
    if (e.length < 2) return {
        x: 0,
        y: 0
    };
    let n = e.length - 1,
        r = null;
    const i = rm(e);
    for (; n >= 0 && (r = e[n], !(i.timestamp - r.timestamp > Ut(t)));) n--;
    if (!r) return {
        x: 0,
        y: 0
    };
    const s = gt(i.timestamp - r.timestamp);
    if (s === 0) return {
        x: 0,
        y: 0
    };
    const o = {
        x: (i.x - r.x) / s,
        y: (i.y - r.y) / s
    };
    return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o
}

function Oe(e) {
    return e.max - e.min
}

function Wl(e, t = 0, n = .01) {
    return Math.abs(e - t) <= n
}

function Hc(e, t, n, r = .5) {
    e.origin = r, e.originPoint = K(t.min, t.max, e.origin), e.scale = Oe(n) / Oe(t), (Wl(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1), e.translate = K(n.min, n.max, e.origin) - e.originPoint, (Wl(e.translate) || isNaN(e.translate)) && (e.translate = 0)
}

function Dr(e, t, n, r) {
    Hc(e.x, t.x, n.x, r ? r.originX : void 0), Hc(e.y, t.y, n.y, r ? r.originY : void 0)
}

function Yc(e, t, n) {
    e.min = n.min + t.min, e.max = e.min + Oe(t)
}

function W1(e, t, n) {
    Yc(e.x, t.x, n.x), Yc(e.y, t.y, n.y)
}

function Xc(e, t, n) {
    e.min = t.min - n.min, e.max = e.min + Oe(t)
}

function Or(e, t, n) {
    Xc(e.x, t.x, n.x), Xc(e.y, t.y, n.y)
}

function H1(e, {
    min: t,
    max: n
}, r) {
    return t !== void 0 && e < t ? e = r ? K(t, e, r.min) : Math.max(e, t) : n !== void 0 && e > n && (e = r ? K(n, e, r.max) : Math.min(e, n)), e
}

function Qc(e, t, n) {
    return {
        min: t !== void 0 ? e.min + t : void 0,
        max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0
    }
}

function Y1(e, {
    top: t,
    left: n,
    bottom: r,
    right: i
}) {
    return {
        x: Qc(e.x, n, i),
        y: Qc(e.y, t, r)
    }
}

function Kc(e, t) {
    let n = t.min - e.min,
        r = t.max - e.max;
    return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), {
        min: n,
        max: r
    }
}

function X1(e, t) {
    return {
        x: Kc(e.x, t.x),
        y: Kc(e.y, t.y)
    }
}

function Q1(e, t) {
    let n = .5;
    const r = Oe(e),
        i = Oe(t);
    return i > r ? n = ii(t.min, t.max - r, e.min) : r > i && (n = ii(e.min, e.max - i, t.min)), Xt(0, 1, n)
}

function K1(e, t) {
    const n = {};
    return t.min !== void 0 && (n.min = t.min - e.min), t.max !== void 0 && (n.max = t.max - e.min), n
}
const Hl = .35;

function G1(e = Hl) {
    return e === !1 ? e = 0 : e === !0 && (e = Hl), {
        x: Gc(e, "left", "right"),
        y: Gc(e, "top", "bottom")
    }
}

function Gc(e, t, n) {
    return {
        min: bc(e, t),
        max: bc(e, n)
    }
}

function bc(e, t) {
    return typeof e == "number" ? e : e[t] || 0
}
const Zc = () => ({
        translate: 0,
        scale: 1,
        origin: 0,
        originPoint: 0
    }),
    Bn = () => ({
        x: Zc(),
        y: Zc()
    }),
    Jc = () => ({
        min: 0,
        max: 0
    }),
    ne = () => ({
        x: Jc(),
        y: Jc()
    });

function it(e) {
    return [e("x"), e("y")]
}

function im({
    top: e,
    left: t,
    right: n,
    bottom: r
}) {
    return {
        x: {
            min: t,
            max: n
        },
        y: {
            min: e,
            max: r
        }
    }
}

function b1({
    x: e,
    y: t
}) {
    return {
        top: t.min,
        right: e.max,
        bottom: t.max,
        left: e.min
    }
}

function Z1(e, t) {
    if (!t) return e;
    const n = t({
            x: e.left,
            y: e.top
        }),
        r = t({
            x: e.right,
            y: e.bottom
        });
    return {
        top: n.y,
        left: n.x,
        bottom: r.y,
        right: r.x
    }
}

function Bo(e) {
    return e === void 0 || e === 1
}

function Yl({
    scale: e,
    scaleX: t,
    scaleY: n
}) {
    return !Bo(e) || !Bo(t) || !Bo(n)
}

function sn(e) {
    return Yl(e) || sm(e) || e.z || e.rotate || e.rotateX || e.rotateY
}

function sm(e) {
    return qc(e.x) || qc(e.y)
}

function qc(e) {
    return e && e !== "0%"
}

function Ns(e, t, n) {
    const r = e - n,
        i = t * r;
    return n + i
}

function ef(e, t, n, r, i) {
    return i !== void 0 && (e = Ns(e, i, r)), Ns(e, n, r) + t
}

function Xl(e, t = 0, n = 1, r, i) {
    e.min = ef(e.min, t, n, r, i), e.max = ef(e.max, t, n, r, i)
}

function om(e, {
    x: t,
    y: n
}) {
    Xl(e.x, t.translate, t.scale, t.originPoint), Xl(e.y, n.translate, n.scale, n.originPoint)
}

function J1(e, t, n, r = !1) {
    const i = n.length;
    if (!i) return;
    t.x = t.y = 1;
    let s, o;
    for (let l = 0; l < i; l++) {
        s = n[l], o = s.projectionDelta;
        const a = s.instance;
        a && a.style && a.style.display === "contents" || (r && s.options.layoutScroll && s.scroll && s !== s.root && Un(e, {
            x: -s.scroll.offset.x,
            y: -s.scroll.offset.y
        }), o && (t.x *= o.x.scale, t.y *= o.y.scale, om(e, o)), r && sn(s.latestValues) && Un(e, s.latestValues))
    }
    t.x = tf(t.x), t.y = tf(t.y)
}

function tf(e) {
    return Number.isInteger(e) || e > 1.0000000000001 || e < .999999999999 ? e : 1
}

function _t(e, t) {
    e.min = e.min + t, e.max = e.max + t
}

function nf(e, t, [n, r, i]) {
    const s = t[i] !== void 0 ? t[i] : .5,
        o = K(e.min, e.max, s);
    Xl(e, t[n], t[r], o, t.scale)
}
const q1 = ["x", "scaleX", "originX"],
    ex = ["y", "scaleY", "originY"];

function Un(e, t) {
    nf(e.x, t, q1), nf(e.y, t, ex)
}

function lm(e, t) {
    return im(Z1(e.getBoundingClientRect(), t))
}

function tx(e, t, n) {
    const r = lm(e, n),
        {
            scroll: i
        } = t;
    return i && (_t(r.x, i.offset.x), _t(r.y, i.offset.y)), r
}
const nx = new WeakMap;
class rx {
    constructor(t) {
        this.openGlobalLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
            x: 0,
            y: 0
        }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = ne(), this.visualElement = t
    }
    start(t, {
        snapToCursor: n = !1
    } = {}) {
        const {
            presenceContext: r
        } = this.visualElement;
        if (r && r.isPresent === !1) return;
        const i = a => {
                this.stopAnimation(), n && this.snapToCursor(qs(a, "page").point)
            },
            s = (a, u) => {
                const {
                    drag: c,
                    dragPropagation: f,
                    onDragStart: d
                } = this.getProps();
                if (c && !f && (this.openGlobalLock && this.openGlobalLock(), this.openGlobalLock = xp(c), !this.openGlobalLock)) return;
                this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), it(v => {
                    let x = this.getAxisMotionValue(v).get() || 0;
                    if (at.test(x)) {
                        const {
                            projection: E
                        } = this.visualElement;
                        if (E && E.layout) {
                            const p = E.layout.layoutBox[v];
                            p && (x = Oe(p) * (parseFloat(x) / 100))
                        }
                    }
                    this.originPoint[v] = x
                }), d && G.update(() => d(a, u), !1, !0);
                const {
                    animationState: g
                } = this.visualElement;
                g && g.setActive("whileDrag", !0)
            },
            o = (a, u) => {
                const {
                    dragPropagation: c,
                    dragDirectionLock: f,
                    onDirectionLock: d,
                    onDrag: g
                } = this.getProps();
                if (!c && !this.openGlobalLock) return;
                const {
                    offset: v
                } = u;
                if (f && this.currentDirection === null) {
                    this.currentDirection = ix(v), this.currentDirection !== null && d && d(this.currentDirection);
                    return
                }
                this.updateAxis("x", u.point, v), this.updateAxis("y", u.point, v), this.visualElement.render(), g && g(a, u)
            },
            l = (a, u) => this.stop(a, u);
        this.panSession = new nm(t, {
            onSessionStart: i,
            onStart: s,
            onMove: o,
            onSessionEnd: l
        }, {
            transformPagePoint: this.visualElement.getTransformPagePoint()
        })
    }
    stop(t, n) {
        const r = this.isDragging;
        if (this.cancel(), !r) return;
        const {
            velocity: i
        } = n;
        this.startAnimation(i);
        const {
            onDragEnd: s
        } = this.getProps();
        s && G.update(() => s(t, n))
    }
    cancel() {
        this.isDragging = !1;
        const {
            projection: t,
            animationState: n
        } = this.visualElement;
        t && (t.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
        const {
            dragPropagation: r
        } = this.getProps();
        !r && this.openGlobalLock && (this.openGlobalLock(), this.openGlobalLock = null), n && n.setActive("whileDrag", !1)
    }
    updateAxis(t, n, r) {
        const {
            drag: i
        } = this.getProps();
        if (!r || !Di(t, i, this.currentDirection)) return;
        const s = this.getAxisMotionValue(t);
        let o = this.originPoint[t] + r[t];
        this.constraints && this.constraints[t] && (o = H1(o, this.constraints[t], this.elastic[t])), s.set(o)
    }
    resolveConstraints() {
        const {
            dragConstraints: t,
            dragElastic: n
        } = this.getProps(), {
            layout: r
        } = this.visualElement.projection || {}, i = this.constraints;
        t && Fn(t) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : t && r ? this.constraints = Y1(r.layoutBox, t) : this.constraints = !1, this.elastic = G1(n), i !== this.constraints && r && this.constraints && !this.hasMutatedConstraints && it(s => {
            this.getAxisMotionValue(s) && (this.constraints[s] = K1(r.layoutBox[s], this.constraints[s]))
        })
    }
    resolveRefConstraints() {
        const {
            dragConstraints: t,
            onMeasureDragConstraints: n
        } = this.getProps();
        if (!t || !Fn(t)) return !1;
        const r = t.current,
            {
                projection: i
            } = this.visualElement;
        if (!i || !i.layout) return !1;
        const s = tx(r, i.root, this.visualElement.getTransformPagePoint());
        let o = X1(i.layout.layoutBox, s);
        if (n) {
            const l = n(b1(o));
            this.hasMutatedConstraints = !!l, l && (o = im(l))
        }
        return o
    }
    startAnimation(t) {
        const {
            drag: n,
            dragMomentum: r,
            dragElastic: i,
            dragTransition: s,
            dragSnapToOrigin: o,
            onDragTransitionEnd: l
        } = this.getProps(), a = this.constraints || {}, u = it(c => {
            if (!Di(c, n, this.currentDirection)) return;
            let f = a && a[c] || {};
            o && (f = {
                min: 0,
                max: 0
            });
            const d = i ? 200 : 1e6,
                g = i ? 40 : 1e7,
                v = {
                    type: "inertia",
                    velocity: r ? t[c] : 0,
                    bounceStiffness: d,
                    bounceDamping: g,
                    timeConstant: 750,
                    restDelta: 1,
                    restSpeed: 10,
                    ...s,
                    ...f
                };
            return this.startAxisValueAnimation(c, v)
        });
        return Promise.all(u).then(l)
    }
    startAxisValueAnimation(t, n) {
        const r = this.getAxisMotionValue(t);
        return r.start(au(t, r, 0, n))
    }
    stopAnimation() {
        it(t => this.getAxisMotionValue(t).stop())
    }
    getAxisMotionValue(t) {
        const n = "_drag" + t.toUpperCase(),
            r = this.visualElement.getProps(),
            i = r[n];
        return i || this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
    }
    snapToCursor(t) {
        it(n => {
            const {
                drag: r
            } = this.getProps();
            if (!Di(n, r, this.currentDirection)) return;
            const {
                projection: i
            } = this.visualElement, s = this.getAxisMotionValue(n);
            if (i && i.layout) {
                const {
                    min: o,
                    max: l
                } = i.layout.layoutBox[n];
                s.set(t[n] - K(o, l, .5))
            }
        })
    }
    scalePositionWithinConstraints() {
        if (!this.visualElement.current) return;
        const {
            drag: t,
            dragConstraints: n
        } = this.getProps(), {
            projection: r
        } = this.visualElement;
        if (!Fn(n) || !r || !this.constraints) return;
        this.stopAnimation();
        const i = {
            x: 0,
            y: 0
        };
        it(o => {
            const l = this.getAxisMotionValue(o);
            if (l) {
                const a = l.get();
                i[o] = Q1({
                    min: a,
                    max: a
                }, this.constraints[o])
            }
        });
        const {
            transformTemplate: s
        } = this.visualElement.getProps();
        this.visualElement.current.style.transform = s ? s({}, "") : "none", r.root && r.root.updateScroll(), r.updateLayout(), this.resolveConstraints(), it(o => {
            if (!Di(o, t, null)) return;
            const l = this.getAxisMotionValue(o),
                {
                    min: a,
                    max: u
                } = this.constraints[o];
            l.set(K(a, u, i[o]))
        })
    }
    addListeners() {
        if (!this.visualElement.current) return;
        nx.set(this.visualElement, this);
        const t = this.visualElement.current,
            n = mt(t, "pointerdown", a => {
                const {
                    drag: u,
                    dragListener: c = !0
                } = this.getProps();
                u && c && this.start(a)
            }),
            r = () => {
                const {
                    dragConstraints: a
                } = this.getProps();
                Fn(a) && (this.constraints = this.resolveRefConstraints())
            },
            {
                projection: i
            } = this.visualElement,
            s = i.addEventListener("measure", r);
        i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()), r();
        const o = ht(window, "resize", () => this.scalePositionWithinConstraints()),
            l = i.addEventListener("didUpdate", ({
                delta: a,
                hasLayoutChanged: u
            }) => {
                this.isDragging && u && (it(c => {
                    const f = this.getAxisMotionValue(c);
                    f && (this.originPoint[c] += a[c].translate, f.set(f.get() + a[c].translate))
                }), this.visualElement.render())
            });
        return () => {
            o(), n(), s(), l && l()
        }
    }
    getProps() {
        const t = this.visualElement.getProps(),
            {
                drag: n = !1,
                dragDirectionLock: r = !1,
                dragPropagation: i = !1,
                dragConstraints: s = !1,
                dragElastic: o = Hl,
                dragMomentum: l = !0
            } = t;
        return { ...t,
            drag: n,
            dragDirectionLock: r,
            dragPropagation: i,
            dragConstraints: s,
            dragElastic: o,
            dragMomentum: l
        }
    }
}

function Di(e, t, n) {
    return (t === !0 || t === e) && (n === null || n === e)
}

function ix(e, t = 10) {
    let n = null;
    return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"), n
}
class sx extends Zt {
    constructor(t) {
        super(t), this.removeGroupControls = se, this.removeListeners = se, this.controls = new rx(t)
    }
    mount() {
        const {
            dragControls: t
        } = this.node.getProps();
        t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || se
    }
    unmount() {
        this.removeGroupControls(), this.removeListeners()
    }
}
const rf = e => (t, n) => {
    e && G.update(() => e(t, n))
};
class ox extends Zt {
    constructor() {
        super(...arguments), this.removePointerDownListener = se
    }
    onPointerDown(t) {
        this.session = new nm(t, this.createPanHandlers(), {
            transformPagePoint: this.node.getTransformPagePoint()
        })
    }
    createPanHandlers() {
        const {
            onPanSessionStart: t,
            onPanStart: n,
            onPan: r,
            onPanEnd: i
        } = this.node.getProps();
        return {
            onSessionStart: rf(t),
            onStart: rf(n),
            onMove: r,
            onEnd: (s, o) => {
                delete this.session, i && G.update(() => i(s, o))
            }
        }
    }
    mount() {
        this.removePointerDownListener = mt(this.node.current, "pointerdown", t => this.onPointerDown(t))
    }
    update() {
        this.session && this.session.updateHandlers(this.createPanHandlers())
    }
    unmount() {
        this.removePointerDownListener(), this.session && this.session.end()
    }
}

function lx() {
    const e = N.useContext(Xa);
    if (e === null) return [!0, null];
    const {
        isPresent: t,
        onExitComplete: n,
        register: r
    } = e, i = N.useId();
    return N.useEffect(() => r(i), []), !t && n ? [!1, () => n && n(i)] : [!0]
}
const bi = {
    hasAnimatedSinceResize: !0,
    hasEverUpdated: !1
};

function sf(e, t) {
    return t.max === t.min ? 0 : e / (t.max - t.min) * 100
}
const gr = {
        correct: (e, t) => {
            if (!t.target) return e;
            if (typeof e == "string")
                if (V.test(e)) e = parseFloat(e);
                else return e;
            const n = sf(e, t.target.x),
                r = sf(e, t.target.y);
            return `${n}% ${r}%`
        }
    },
    ax = {
        correct: (e, {
            treeScale: t,
            projectionDelta: n
        }) => {
            const r = e,
                i = Qt.parse(e);
            if (i.length > 5) return r;
            const s = Qt.createTransformer(e),
                o = typeof i[0] != "number" ? 1 : 0,
                l = n.x.scale * t.x,
                a = n.y.scale * t.y;
            i[0 + o] /= l, i[1 + o] /= a;
            const u = K(l, a, .5);
            return typeof i[2 + o] == "number" && (i[2 + o] /= u), typeof i[3 + o] == "number" && (i[3 + o] /= u), s(i)
        }
    };
class ux extends Ve.Component {
    componentDidMount() {
        const {
            visualElement: t,
            layoutGroup: n,
            switchLayoutGroup: r,
            layoutId: i
        } = this.props, {
            projection: s
        } = t;
        my(cx), s && (n.group && n.group.add(s), r && r.register && i && r.register(s), s.root.didUpdate(), s.addEventListener("animationComplete", () => {
            this.safeToRemove()
        }), s.setOptions({ ...s.options,
            onExitComplete: () => this.safeToRemove()
        })), bi.hasEverUpdated = !0
    }
    getSnapshotBeforeUpdate(t) {
        const {
            layoutDependency: n,
            visualElement: r,
            drag: i,
            isPresent: s
        } = this.props, o = r.projection;
        return o && (o.isPresent = s, i || t.layoutDependency !== n || n === void 0 ? o.willUpdate() : this.safeToRemove(), t.isPresent !== s && (s ? o.promote() : o.relegate() || G.postRender(() => {
            const l = o.getStack();
            (!l || !l.members.length) && this.safeToRemove()
        }))), null
    }
    componentDidUpdate() {
        const {
            projection: t
        } = this.props.visualElement;
        t && (t.root.didUpdate(), queueMicrotask(() => {
            !t.currentAnimation && t.isLead() && this.safeToRemove()
        }))
    }
    componentWillUnmount() {
        const {
            visualElement: t,
            layoutGroup: n,
            switchLayoutGroup: r
        } = this.props, {
            projection: i
        } = t;
        i && (i.scheduleCheckAfterUnmount(), n && n.group && n.group.remove(i), r && r.deregister && r.deregister(i))
    }
    safeToRemove() {
        const {
            safeToRemove: t
        } = this.props;
        t && t()
    }
    render() {
        return null
    }
}

function am(e) {
    const [t, n] = lx(), r = N.useContext(np);
    return Ve.createElement(ux, { ...e,
        layoutGroup: r,
        switchLayoutGroup: N.useContext(rp),
        isPresent: t,
        safeToRemove: n
    })
}
const cx = {
        borderRadius: { ...gr,
            applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
        },
        borderTopLeftRadius: gr,
        borderTopRightRadius: gr,
        borderBottomLeftRadius: gr,
        borderBottomRightRadius: gr,
        boxShadow: ax
    },
    um = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
    fx = um.length,
    of = e => typeof e == "string" ? parseFloat(e) : e,
    lf = e => typeof e == "number" || V.test(e);

function dx(e, t, n, r, i, s) {
    i ? (e.opacity = K(0, n.opacity !== void 0 ? n.opacity : 1, hx(r)), e.opacityExit = K(t.opacity !== void 0 ? t.opacity : 1, 0, px(r))) : s && (e.opacity = K(t.opacity !== void 0 ? t.opacity : 1, n.opacity !== void 0 ? n.opacity : 1, r));
    for (let o = 0; o < fx; o++) {
        const l = `border${um[o]}Radius`;
        let a = af(t, l),
            u = af(n, l);
        if (a === void 0 && u === void 0) continue;
        a || (a = 0), u || (u = 0), a === 0 || u === 0 || lf(a) === lf(u) ? (e[l] = Math.max(K( of (a), of (u), r), 0), (at.test(u) || at.test(a)) && (e[l] += "%")) : e[l] = u
    }(t.rotate || n.rotate) && (e.rotate = K(t.rotate || 0, n.rotate || 0, r))
}

function af(e, t) {
    return e[t] !== void 0 ? e[t] : e.borderRadius
}
const hx = cm(0, .5, iu),
    px = cm(.5, .95, se);

function cm(e, t, n) {
    return r => r < e ? 0 : r > t ? 1 : n(ii(e, t, r))
}

function uf(e, t) {
    e.min = t.min, e.max = t.max
}

function ze(e, t) {
    uf(e.x, t.x), uf(e.y, t.y)
}

function cf(e, t, n, r, i) {
    return e -= t, e = Ns(e, 1 / n, r), i !== void 0 && (e = Ns(e, 1 / i, r)), e
}

function mx(e, t = 0, n = 1, r = .5, i, s = e, o = e) {
    if (at.test(t) && (t = parseFloat(t), t = K(o.min, o.max, t / 100) - o.min), typeof t != "number") return;
    let l = K(s.min, s.max, r);
    e === s && (l -= t), e.min = cf(e.min, t, n, l, i), e.max = cf(e.max, t, n, l, i)
}

function ff(e, t, [n, r, i], s, o) {
    mx(e, t[n], t[r], t[i], t.scale, s, o)
}
const gx = ["x", "scaleX", "originX"],
    vx = ["y", "scaleY", "originY"];

function df(e, t, n, r) {
    ff(e.x, t, gx, n ? n.x : void 0, r ? r.x : void 0), ff(e.y, t, vx, n ? n.y : void 0, r ? r.y : void 0)
}

function hf(e) {
    return e.translate === 0 && e.scale === 1
}

function fm(e) {
    return hf(e.x) && hf(e.y)
}

function Ql(e, t) {
    return e.x.min === t.x.min && e.x.max === t.x.max && e.y.min === t.y.min && e.y.max === t.y.max
}

function pf(e) {
    return Oe(e.x) / Oe(e.y)
}
class yx {
    constructor() {
        this.members = []
    }
    add(t) {
        uu(this.members, t), t.scheduleRender()
    }
    remove(t) {
        if (cu(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
            const n = this.members[this.members.length - 1];
            n && this.promote(n)
        }
    }
    relegate(t) {
        const n = this.members.findIndex(i => t === i);
        if (n === 0) return !1;
        let r;
        for (let i = n; i >= 0; i--) {
            const s = this.members[i];
            if (s.isPresent !== !1) {
                r = s;
                break
            }
        }
        return r ? (this.promote(r), !0) : !1
    }
    promote(t, n) {
        const r = this.lead;
        if (t !== r && (this.prevLead = r, this.lead = t, t.show(), r)) {
            r.instance && r.scheduleRender(), t.scheduleRender(), t.resumeFrom = r, n && (t.resumeFrom.preserveOpacity = !0), r.snapshot && (t.snapshot = r.snapshot, t.snapshot.latestValues = r.animationValues || r.latestValues), t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
            const {
                crossfade: i
            } = t.options;
            i === !1 && r.hide()
        }
    }
    exitAnimationComplete() {
        this.members.forEach(t => {
            const {
                options: n,
                resumingFrom: r
            } = t;
            n.onExitComplete && n.onExitComplete(), r && r.options.onExitComplete && r.options.onExitComplete()
        })
    }
    scheduleRender() {
        this.members.forEach(t => {
            t.instance && t.scheduleRender(!1)
        })
    }
    removeLeadSnapshot() {
        this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
    }
}

function mf(e, t, n) {
    let r = "";
    const i = e.x.translate / t.x,
        s = e.y.translate / t.y;
    if ((i || s) && (r = `translate3d(${i}px, ${s}px, 0) `), (t.x !== 1 || t.y !== 1) && (r += `scale(${1/t.x}, ${1/t.y}) `), n) {
        const {
            rotate: a,
            rotateX: u,
            rotateY: c
        } = n;
        a && (r += `rotate(${a}deg) `), u && (r += `rotateX(${u}deg) `), c && (r += `rotateY(${c}deg) `)
    }
    const o = e.x.scale * t.x,
        l = e.y.scale * t.y;
    return (o !== 1 || l !== 1) && (r += `scale(${o}, ${l})`), r || "none"
}
const xx = (e, t) => e.depth - t.depth;
class wx {
    constructor() {
        this.children = [], this.isDirty = !1
    }
    add(t) {
        uu(this.children, t), this.isDirty = !0
    }
    remove(t) {
        cu(this.children, t), this.isDirty = !0
    }
    forEach(t) {
        this.isDirty && this.children.sort(xx), this.isDirty = !1, this.children.forEach(t)
    }
}

function Sx(e, t) {
    const n = performance.now(),
        r = ({
            timestamp: i
        }) => {
            const s = i - n;
            s >= t && (St(r), e(s - t))
        };
    return G.read(r, !0), () => St(r)
}

function Px(e) {
    window.MotionDebug && window.MotionDebug.record(e)
}

function Cx(e) {
    return e instanceof SVGElement && e.tagName !== "svg"
}

function kx(e, t, n) {
    const r = je(e) ? e : nr(e);
    return r.start(au("", r, t, n)), r.animation
}
const gf = ["", "X", "Y", "Z"],
    vf = 1e3;
let Ex = 0;
const on = {
    type: "projectionFrame",
    totalNodes: 0,
    resolvedTargetDeltas: 0,
    recalculatedProjection: 0
};

function dm({
    attachResizeListener: e,
    defaultParent: t,
    measureScroll: n,
    checkIsScrollRoot: r,
    resetTransform: i
}) {
    return class {
        constructor(o = {}, l = t == null ? void 0 : t()) {
            this.id = Ex++, this.animationId = 0, this.children = new Set, this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.treeScale = {
                x: 1,
                y: 1
            }, this.eventHandlers = new Map, this.hasTreeAnimated = !1, this.updateScheduled = !1, this.checkUpdateFailed = () => {
                this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots())
            }, this.updateProjection = () => {
                on.totalNodes = on.resolvedTargetDeltas = on.recalculatedProjection = 0, this.nodes.forEach(jx), this.nodes.forEach(Mx), this.nodes.forEach(Dx), this.nodes.forEach(Nx), Px(on)
            }, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = new Map, this.latestValues = o, this.root = l ? l.root || l : this, this.path = l ? [...l.path, l] : [], this.parent = l, this.depth = l ? l.depth + 1 : 0;
            for (let a = 0; a < this.path.length; a++) this.path[a].shouldResetTransform = !0;
            this.root === this && (this.nodes = new wx)
        }
        addEventListener(o, l) {
            return this.eventHandlers.has(o) || this.eventHandlers.set(o, new fu), this.eventHandlers.get(o).add(l)
        }
        notifyListeners(o, ...l) {
            const a = this.eventHandlers.get(o);
            a && a.notify(...l)
        }
        hasListeners(o) {
            return this.eventHandlers.has(o)
        }
        mount(o, l = this.root.hasTreeAnimated) {
            if (this.instance) return;
            this.isSVG = Cx(o), this.instance = o;
            const {
                layoutId: a,
                layout: u,
                visualElement: c
            } = this.options;
            if (c && !c.current && c.mount(o), this.root.nodes.add(this), this.parent && this.parent.children.add(this), l && (u || a) && (this.isLayoutDirty = !0), e) {
                let f;
                const d = () => this.root.updateBlockedByResize = !1;
                e(o, () => {
                    this.root.updateBlockedByResize = !0, f && f(), f = Sx(d, 250), bi.hasAnimatedSinceResize && (bi.hasAnimatedSinceResize = !1, this.nodes.forEach(xf))
                })
            }
            a && this.root.registerSharedNode(a, this), this.options.animate !== !1 && c && (a || u) && this.addEventListener("didUpdate", ({
                delta: f,
                hasLayoutChanged: d,
                hasRelativeTargetChanged: g,
                layout: v
            }) => {
                if (this.isTreeAnimationBlocked()) {
                    this.target = void 0, this.relativeTarget = void 0;
                    return
                }
                const x = this.options.transition || c.getDefaultTransition() || zx,
                    {
                        onLayoutAnimationStart: E,
                        onLayoutAnimationComplete: p
                    } = c.getProps(),
                    h = !this.targetLayout || !Ql(this.targetLayout, v) || g,
                    m = !d && g;
                if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || m || d && (h || !this.currentAnimation)) {
                    this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(f, m);
                    const w = { ...Jp(x, "layout"),
                        onPlay: E,
                        onComplete: p
                    };
                    (c.shouldReduceMotion || this.options.layoutRoot) && (w.delay = 0, w.type = !1), this.startAnimation(w)
                } else d || xf(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                this.targetLayout = v
            })
        }
        unmount() {
            this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
            const o = this.getStack();
            o && o.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, St(this.updateProjection)
        }
        blockUpdate() {
            this.updateManuallyBlocked = !0
        }
        unblockUpdate() {
            this.updateManuallyBlocked = !1
        }
        isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize
        }
        isTreeAnimationBlocked() {
            return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
        }
        startUpdate() {
            this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(Ox), this.animationId++)
        }
        getTransformTemplate() {
            const {
                visualElement: o
            } = this.options;
            return o && o.getProps().transformTemplate
        }
        willUpdate(o = !0) {
            if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
                this.options.onExitComplete && this.options.onExitComplete();
                return
            }
            if (!this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty) return;
            this.isLayoutDirty = !0;
            for (let c = 0; c < this.path.length; c++) {
                const f = this.path[c];
                f.shouldResetTransform = !0, f.updateScroll("snapshot"), f.options.layoutRoot && f.willUpdate(!1)
            }
            const {
                layoutId: l,
                layout: a
            } = this.options;
            if (l === void 0 && !a) return;
            const u = this.getTransformTemplate();
            this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0, this.updateSnapshot(), o && this.notifyListeners("willUpdate")
        }
        update() {
            if (this.updateScheduled = !1, this.isUpdateBlocked()) {
                this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(yf);
                return
            }
            this.isUpdating || this.nodes.forEach(Ax), this.isUpdating = !1, this.nodes.forEach(Vx), this.nodes.forEach(Tx), this.nodes.forEach(_x), this.clearAllSnapshots();
            const l = performance.now();
            X.delta = Xt(0, 1e3 / 60, l - X.timestamp), X.timestamp = l, X.isProcessing = !0, Kn.update.process(X), Kn.preRender.process(X), Kn.render.process(X), X.isProcessing = !1
        }
        didUpdate() {
            this.updateScheduled || (this.updateScheduled = !0, queueMicrotask(() => this.update()))
        }
        clearAllSnapshots() {
            this.nodes.forEach(Lx), this.sharedNodes.forEach(Rx)
        }
        scheduleUpdateProjection() {
            G.preRender(this.updateProjection, !1, !0)
        }
        scheduleCheckAfterUnmount() {
            G.postRender(() => {
                this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
            })
        }
        updateSnapshot() {
            this.snapshot || !this.instance || (this.snapshot = this.measure())
        }
        updateLayout() {
            if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)) return;
            if (this.resumeFrom && !this.resumeFrom.instance)
                for (let a = 0; a < this.path.length; a++) this.path[a].updateScroll();
            const o = this.layout;
            this.layout = this.measure(!1), this.layoutCorrected = ne(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
            const {
                visualElement: l
            } = this.options;
            l && l.notify("LayoutMeasure", this.layout.layoutBox, o ? o.layoutBox : void 0)
        }
        updateScroll(o = "measure") {
            let l = !!(this.options.layoutScroll && this.instance);
            this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === o && (l = !1), l && (this.scroll = {
                animationId: this.root.animationId,
                phase: o,
                isRoot: r(this.instance),
                offset: n(this.instance)
            })
        }
        resetTransform() {
            if (!i) return;
            const o = this.isLayoutDirty || this.shouldResetTransform,
                l = this.projectionDelta && !fm(this.projectionDelta),
                a = this.getTransformTemplate(),
                u = a ? a(this.latestValues, "") : void 0,
                c = u !== this.prevTransformTemplateValue;
            o && (l || sn(this.latestValues) || c) && (i(this.instance, u), this.shouldResetTransform = !1, this.scheduleRender())
        }
        measure(o = !0) {
            const l = this.measurePageBox();
            let a = this.removeElementScroll(l);
            return o && (a = this.removeTransform(a)), Bx(a), {
                animationId: this.root.animationId,
                measuredBox: l,
                layoutBox: a,
                latestValues: {},
                source: this.id
            }
        }
        measurePageBox() {
            const {
                visualElement: o
            } = this.options;
            if (!o) return ne();
            const l = o.measureViewportBox(),
                {
                    scroll: a
                } = this.root;
            return a && (_t(l.x, a.offset.x), _t(l.y, a.offset.y)), l
        }
        removeElementScroll(o) {
            const l = ne();
            ze(l, o);
            for (let a = 0; a < this.path.length; a++) {
                const u = this.path[a],
                    {
                        scroll: c,
                        options: f
                    } = u;
                if (u !== this.root && c && f.layoutScroll) {
                    if (c.isRoot) {
                        ze(l, o);
                        const {
                            scroll: d
                        } = this.root;
                        d && (_t(l.x, -d.offset.x), _t(l.y, -d.offset.y))
                    }
                    _t(l.x, c.offset.x), _t(l.y, c.offset.y)
                }
            }
            return l
        }
        applyTransform(o, l = !1) {
            const a = ne();
            ze(a, o);
            for (let u = 0; u < this.path.length; u++) {
                const c = this.path[u];
                !l && c.options.layoutScroll && c.scroll && c !== c.root && Un(a, {
                    x: -c.scroll.offset.x,
                    y: -c.scroll.offset.y
                }), sn(c.latestValues) && Un(a, c.latestValues)
            }
            return sn(this.latestValues) && Un(a, this.latestValues), a
        }
        removeTransform(o) {
            const l = ne();
            ze(l, o);
            for (let a = 0; a < this.path.length; a++) {
                const u = this.path[a];
                if (!u.instance || !sn(u.latestValues)) continue;
                Yl(u.latestValues) && u.updateSnapshot();
                const c = ne(),
                    f = u.measurePageBox();
                ze(c, f), df(l, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c)
            }
            return sn(this.latestValues) && df(l, this.latestValues), l
        }
        setTargetDelta(o) {
            this.targetDelta = o, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0
        }
        setOptions(o) {
            this.options = { ...this.options,
                ...o,
                crossfade: o.crossfade !== void 0 ? o.crossfade : !0
            }
        }
        clearMeasurements() {
            this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1
        }
        forceRelativeParentToResolveTarget() {
            this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== X.timestamp && this.relativeParent.resolveTargetDelta(!0)
        }
        resolveTargetDelta(o = !1) {
            var l;
            const a = this.getLead();
            this.isProjectionDirty || (this.isProjectionDirty = a.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = a.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = a.isSharedProjectionDirty);
            const u = !!this.resumingFrom || this !== a;
            if (!(o || u && this.isSharedProjectionDirty || this.isProjectionDirty || !((l = this.parent) === null || l === void 0) && l.isProjectionDirty || this.attemptToResolveRelativeTarget)) return;
            const {
                layout: f,
                layoutId: d
            } = this.options;
            if (!(!this.layout || !(f || d))) {
                if (this.resolvedRelativeTargetAt = X.timestamp, !this.targetDelta && !this.relativeTarget) {
                    const g = this.getClosestProjectingParent();
                    g && g.layout && this.animationProgress !== 1 ? (this.relativeParent = g, this.forceRelativeParentToResolveTarget(), this.relativeTarget = ne(), this.relativeTargetOrigin = ne(), Or(this.relativeTargetOrigin, this.layout.layoutBox, g.layout.layoutBox), ze(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                }
                if (!(!this.relativeTarget && !this.targetDelta)) {
                    if (this.target || (this.target = ne(), this.targetWithTransforms = ne()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), W1(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : ze(this.target, this.layout.layoutBox), om(this.target, this.targetDelta)) : ze(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
                        this.attemptToResolveRelativeTarget = !1;
                        const g = this.getClosestProjectingParent();
                        g && !!g.resumingFrom == !!this.resumingFrom && !g.options.layoutScroll && g.target && this.animationProgress !== 1 ? (this.relativeParent = g, this.forceRelativeParentToResolveTarget(), this.relativeTarget = ne(), this.relativeTargetOrigin = ne(), Or(this.relativeTargetOrigin, this.target, g.target), ze(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                    }
                    on.resolvedTargetDeltas++
                }
            }
        }
        getClosestProjectingParent() {
            if (!(!this.parent || Yl(this.parent.latestValues) || sm(this.parent.latestValues))) return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
        }
        isProjecting() {
            return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
        }
        calcProjection() {
            var o;
            const l = this.getLead(),
                a = !!this.resumingFrom || this !== l;
            let u = !0;
            if ((this.isProjectionDirty || !((o = this.parent) === null || o === void 0) && o.isProjectionDirty) && (u = !1), a && (this.isSharedProjectionDirty || this.isTransformDirty) && (u = !1), this.resolvedRelativeTargetAt === X.timestamp && (u = !1), u) return;
            const {
                layout: c,
                layoutId: f
            } = this.options;
            if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(c || f)) return;
            ze(this.layoutCorrected, this.layout.layoutBox);
            const d = this.treeScale.x,
                g = this.treeScale.y;
            J1(this.layoutCorrected, this.treeScale, this.path, a), l.layout && !l.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (l.target = l.layout.layoutBox);
            const {
                target: v
            } = l;
            if (!v) {
                this.projectionTransform && (this.projectionDelta = Bn(), this.projectionTransform = "none", this.scheduleRender());
                return
            }
            this.projectionDelta || (this.projectionDelta = Bn(), this.projectionDeltaWithTransform = Bn());
            const x = this.projectionTransform;
            Dr(this.projectionDelta, this.layoutCorrected, v, this.latestValues), this.projectionTransform = mf(this.projectionDelta, this.treeScale), (this.projectionTransform !== x || this.treeScale.x !== d || this.treeScale.y !== g) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", v)), on.recalculatedProjection++
        }
        hide() {
            this.isVisible = !1
        }
        show() {
            this.isVisible = !0
        }
        scheduleRender(o = !0) {
            if (this.options.scheduleRender && this.options.scheduleRender(), o) {
                const l = this.getStack();
                l && l.scheduleRender()
            }
            this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
        }
        setAnimationOrigin(o, l = !1) {
            const a = this.snapshot,
                u = a ? a.latestValues : {},
                c = { ...this.latestValues
                },
                f = Bn();
            (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !l;
            const d = ne(),
                g = a ? a.source : void 0,
                v = this.layout ? this.layout.source : void 0,
                x = g !== v,
                E = this.getStack(),
                p = !E || E.members.length <= 1,
                h = !!(x && !p && this.options.crossfade === !0 && !this.path.some(Fx));
            this.animationProgress = 0;
            let m;
            this.mixTargetDelta = w => {
                const S = w / 1e3;
                wf(f.x, o.x, S), wf(f.y, o.y, S), this.setTargetDelta(f), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Or(d, this.layout.layoutBox, this.relativeParent.layout.layoutBox), Ix(this.relativeTarget, this.relativeTargetOrigin, d, S), m && Ql(this.relativeTarget, m) && (this.isProjectionDirty = !1), m || (m = ne()), ze(m, this.relativeTarget)), x && (this.animationValues = c, dx(c, u, this.latestValues, S, h, p)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = S
            }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
        }
        startAnimation(o) {
            this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && (St(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = G.update(() => {
                bi.hasAnimatedSinceResize = !0, this.currentAnimation = kx(0, vf, { ...o,
                    onUpdate: l => {
                        this.mixTargetDelta(l), o.onUpdate && o.onUpdate(l)
                    },
                    onComplete: () => {
                        o.onComplete && o.onComplete(), this.completeAnimation()
                    }
                }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0
            })
        }
        completeAnimation() {
            this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
            const o = this.getStack();
            o && o.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete")
        }
        finishAnimation() {
            this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(vf), this.currentAnimation.stop()), this.completeAnimation()
        }
        applyTransformsToTarget() {
            const o = this.getLead();
            let {
                targetWithTransforms: l,
                target: a,
                layout: u,
                latestValues: c
            } = o;
            if (!(!l || !a || !u)) {
                if (this !== o && this.layout && u && hm(this.options.animationType, this.layout.layoutBox, u.layoutBox)) {
                    a = this.target || ne();
                    const f = Oe(this.layout.layoutBox.x);
                    a.x.min = o.target.x.min, a.x.max = a.x.min + f;
                    const d = Oe(this.layout.layoutBox.y);
                    a.y.min = o.target.y.min, a.y.max = a.y.min + d
                }
                ze(l, a), Un(l, c), Dr(this.projectionDeltaWithTransform, this.layoutCorrected, l, c)
            }
        }
        registerSharedNode(o, l) {
            this.sharedNodes.has(o) || this.sharedNodes.set(o, new yx), this.sharedNodes.get(o).add(l);
            const u = l.options.initialPromotionConfig;
            l.promote({
                transition: u ? u.transition : void 0,
                preserveFollowOpacity: u && u.shouldPreserveFollowOpacity ? u.shouldPreserveFollowOpacity(l) : void 0
            })
        }
        isLead() {
            const o = this.getStack();
            return o ? o.lead === this : !0
        }
        getLead() {
            var o;
            const {
                layoutId: l
            } = this.options;
            return l ? ((o = this.getStack()) === null || o === void 0 ? void 0 : o.lead) || this : this
        }
        getPrevLead() {
            var o;
            const {
                layoutId: l
            } = this.options;
            return l ? (o = this.getStack()) === null || o === void 0 ? void 0 : o.prevLead : void 0
        }
        getStack() {
            const {
                layoutId: o
            } = this.options;
            if (o) return this.root.sharedNodes.get(o)
        }
        promote({
            needsReset: o,
            transition: l,
            preserveFollowOpacity: a
        } = {}) {
            const u = this.getStack();
            u && u.promote(this, a), o && (this.projectionDelta = void 0, this.needsReset = !0), l && this.setOptions({
                transition: l
            })
        }
        relegate() {
            const o = this.getStack();
            return o ? o.relegate(this) : !1
        }
        resetRotation() {
            const {
                visualElement: o
            } = this.options;
            if (!o) return;
            let l = !1;
            const {
                latestValues: a
            } = o;
            if ((a.rotate || a.rotateX || a.rotateY || a.rotateZ) && (l = !0), !l) return;
            const u = {};
            for (let c = 0; c < gf.length; c++) {
                const f = "rotate" + gf[c];
                a[f] && (u[f] = a[f], o.setStaticValue(f, 0))
            }
            o.render();
            for (const c in u) o.setStaticValue(c, u[c]);
            o.scheduleRender()
        }
        getProjectionStyles(o = {}) {
            var l, a;
            const u = {};
            if (!this.instance || this.isSVG) return u;
            if (this.isVisible) u.visibility = "";
            else return {
                visibility: "hidden"
            };
            const c = this.getTransformTemplate();
            if (this.needsReset) return this.needsReset = !1, u.opacity = "", u.pointerEvents = Gi(o.pointerEvents) || "", u.transform = c ? c(this.latestValues, "") : "none", u;
            const f = this.getLead();
            if (!this.projectionDelta || !this.layout || !f.target) {
                const x = {};
                return this.options.layoutId && (x.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, x.pointerEvents = Gi(o.pointerEvents) || ""), this.hasProjected && !sn(this.latestValues) && (x.transform = c ? c({}, "") : "none", this.hasProjected = !1), x
            }
            const d = f.animationValues || f.latestValues;
            this.applyTransformsToTarget(), u.transform = mf(this.projectionDeltaWithTransform, this.treeScale, d), c && (u.transform = c(d, u.transform));
            const {
                x: g,
                y: v
            } = this.projectionDelta;
            u.transformOrigin = `${g.origin*100}% ${v.origin*100}% 0`, f.animationValues ? u.opacity = f === this ? (a = (l = d.opacity) !== null && l !== void 0 ? l : this.latestValues.opacity) !== null && a !== void 0 ? a : 1 : this.preserveOpacity ? this.latestValues.opacity : d.opacityExit : u.opacity = f === this ? d.opacity !== void 0 ? d.opacity : "" : d.opacityExit !== void 0 ? d.opacityExit : 0;
            for (const x in Ps) {
                if (d[x] === void 0) continue;
                const {
                    correct: E,
                    applyTo: p
                } = Ps[x], h = u.transform === "none" ? d[x] : E(d[x], f);
                if (p) {
                    const m = p.length;
                    for (let w = 0; w < m; w++) u[p[w]] = h
                } else u[x] = h
            }
            return this.options.layoutId && (u.pointerEvents = f === this ? Gi(o.pointerEvents) || "" : "none"), u
        }
        clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0
        }
        resetTree() {
            this.root.nodes.forEach(o => {
                var l;
                return (l = o.currentAnimation) === null || l === void 0 ? void 0 : l.stop()
            }), this.root.nodes.forEach(yf), this.root.sharedNodes.clear()
        }
    }
}

function Tx(e) {
    e.updateLayout()
}

function _x(e) {
    var t;
    const n = ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) || e.snapshot;
    if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
        const {
            layoutBox: r,
            measuredBox: i
        } = e.layout, {
            animationType: s
        } = e.options, o = n.source !== e.layout.source;
        s === "size" ? it(f => {
            const d = o ? n.measuredBox[f] : n.layoutBox[f],
                g = Oe(d);
            d.min = r[f].min, d.max = d.min + g
        }) : hm(s, n.layoutBox, r) && it(f => {
            const d = o ? n.measuredBox[f] : n.layoutBox[f],
                g = Oe(r[f]);
            d.max = d.min + g, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[f].max = e.relativeTarget[f].min + g)
        });
        const l = Bn();
        Dr(l, r, n.layoutBox);
        const a = Bn();
        o ? Dr(a, e.applyTransform(i, !0), n.measuredBox) : Dr(a, r, n.layoutBox);
        const u = !fm(l);
        let c = !1;
        if (!e.resumeFrom) {
            const f = e.getClosestProjectingParent();
            if (f && !f.resumeFrom) {
                const {
                    snapshot: d,
                    layout: g
                } = f;
                if (d && g) {
                    const v = ne();
                    Or(v, n.layoutBox, d.layoutBox);
                    const x = ne();
                    Or(x, r, g.layoutBox), Ql(v, x) || (c = !0), f.options.layoutRoot && (e.relativeTarget = x, e.relativeTargetOrigin = v, e.relativeParent = f)
                }
            }
        }
        e.notifyListeners("didUpdate", {
            layout: r,
            snapshot: n,
            delta: a,
            layoutDelta: l,
            hasLayoutChanged: u,
            hasRelativeTargetChanged: c
        })
    } else if (e.isLead()) {
        const {
            onExitComplete: r
        } = e.options;
        r && r()
    }
    e.options.transition = void 0
}

function jx(e) {
    on.totalNodes++, e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty))
}

function Nx(e) {
    e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1
}

function Lx(e) {
    e.clearSnapshot()
}

function yf(e) {
    e.clearMeasurements()
}

function Ax(e) {
    e.isLayoutDirty = !1
}

function Vx(e) {
    const {
        visualElement: t
    } = e.options;
    t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform()
}

function xf(e) {
    e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0
}

function Mx(e) {
    e.resolveTargetDelta()
}

function Dx(e) {
    e.calcProjection()
}

function Ox(e) {
    e.resetRotation()
}

function Rx(e) {
    e.removeLeadSnapshot()
}

function wf(e, t, n) {
    e.translate = K(t.translate, 0, n), e.scale = K(t.scale, 1, n), e.origin = t.origin, e.originPoint = t.originPoint
}

function Sf(e, t, n, r) {
    e.min = K(t.min, n.min, r), e.max = K(t.max, n.max, r)
}

function Ix(e, t, n, r) {
    Sf(e.x, t.x, n.x, r), Sf(e.y, t.y, n.y, r)
}

function Fx(e) {
    return e.animationValues && e.animationValues.opacityExit !== void 0
}
const zx = {
    duration: .45,
    ease: [.4, 0, .1, 1]
};

function Pf(e) {
    e.min = Math.round(e.min), e.max = Math.round(e.max)
}

function Bx(e) {
    Pf(e.x), Pf(e.y)
}

function hm(e, t, n) {
    return e === "position" || e === "preserve-aspect" && !Wl(pf(t), pf(n), .2)
}
const Ux = dm({
        attachResizeListener: (e, t) => ht(e, "resize", t),
        measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body.scrollLeft,
            y: document.documentElement.scrollTop || document.body.scrollTop
        }),
        checkIsScrollRoot: () => !0
    }),
    Uo = {
        current: void 0
    },
    pm = dm({
        measureScroll: e => ({
            x: e.scrollLeft,
            y: e.scrollTop
        }),
        defaultParent: () => {
            if (!Uo.current) {
                const e = new Ux({});
                e.mount(window), e.setOptions({
                    layoutScroll: !0
                }), Uo.current = e
            }
            return Uo.current
        },
        resetTransform: (e, t) => {
            e.style.transform = t !== void 0 ? t : "none"
        },
        checkIsScrollRoot: e => window.getComputedStyle(e).position === "fixed"
    }),
    $x = {
        pan: {
            Feature: ox
        },
        drag: {
            Feature: sx,
            ProjectionNode: pm,
            MeasureLayout: am
        }
    },
    Wx = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;

function Hx(e) {
    const t = Wx.exec(e);
    if (!t) return [, ];
    const [, n, r] = t;
    return [n, r]
}

function Kl(e, t, n = 1) {
    const [r, i] = Hx(e);
    if (!r) return;
    const s = window.getComputedStyle(t).getPropertyValue(r);
    return s ? s.trim() : Ol(i) ? Kl(i, t, n + 1) : i
}

function Yx(e, { ...t
}, n) {
    const r = e.current;
    if (!(r instanceof Element)) return {
        target: t,
        transitionEnd: n
    };
    n && (n = { ...n
    }), e.values.forEach(i => {
        const s = i.get();
        if (!Ol(s)) return;
        const o = Kl(s, r);
        o && i.set(o)
    });
    for (const i in t) {
        const s = t[i];
        if (!Ol(s)) continue;
        const o = Kl(s, r);
        o && (t[i] = o, n || (n = {}), n[i] === void 0 && (n[i] = s))
    }
    return {
        target: t,
        transitionEnd: n
    }
}
const Xx = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y", "translateX", "translateY"]),
    mm = e => Xx.has(e),
    Qx = e => Object.keys(e).some(mm),
    Cf = e => e === Pn || e === V,
    kf = (e, t) => parseFloat(e.split(", ")[t]),
    Ef = (e, t) => (n, {
        transform: r
    }) => {
        if (r === "none" || !r) return 0;
        const i = r.match(/^matrix3d\((.+)\)$/);
        if (i) return kf(i[1], t); {
            const s = r.match(/^matrix\((.+)\)$/);
            return s ? kf(s[1], e) : 0
        }
    },
    Kx = new Set(["x", "y", "z"]),
    Gx = ci.filter(e => !Kx.has(e));

function bx(e) {
    const t = [];
    return Gx.forEach(n => {
        const r = e.getValue(n);
        r !== void 0 && (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0))
    }), t.length && e.render(), t
}
const rr = {
    width: ({
        x: e
    }, {
        paddingLeft: t = "0",
        paddingRight: n = "0"
    }) => e.max - e.min - parseFloat(t) - parseFloat(n),
    height: ({
        y: e
    }, {
        paddingTop: t = "0",
        paddingBottom: n = "0"
    }) => e.max - e.min - parseFloat(t) - parseFloat(n),
    top: (e, {
        top: t
    }) => parseFloat(t),
    left: (e, {
        left: t
    }) => parseFloat(t),
    bottom: ({
        y: e
    }, {
        top: t
    }) => parseFloat(t) + (e.max - e.min),
    right: ({
        x: e
    }, {
        left: t
    }) => parseFloat(t) + (e.max - e.min),
    x: Ef(4, 13),
    y: Ef(5, 14)
};
rr.translateX = rr.x;
rr.translateY = rr.y;
const Zx = (e, t, n) => {
        const r = t.measureViewportBox(),
            i = t.current,
            s = getComputedStyle(i),
            {
                display: o
            } = s,
            l = {};
        o === "none" && t.setStaticValue("display", e.display || "block"), n.forEach(u => {
            l[u] = rr[u](r, s)
        }), t.render();
        const a = t.measureViewportBox();
        return n.forEach(u => {
            const c = t.getValue(u);
            c && c.jump(l[u]), e[u] = rr[u](a, s)
        }), e
    },
    Jx = (e, t, n = {}, r = {}) => {
        t = { ...t
        }, r = { ...r
        };
        const i = Object.keys(t).filter(mm);
        let s = [],
            o = !1;
        const l = [];
        if (i.forEach(a => {
                const u = e.getValue(a);
                if (!e.hasValue(a)) return;
                let c = n[a],
                    f = mr(c);
                const d = t[a];
                let g;
                if (ks(d)) {
                    const v = d.length,
                        x = d[0] === null ? 1 : 0;
                    c = d[x], f = mr(c);
                    for (let E = x; E < v && d[E] !== null; E++) g ? ru(mr(d[E]) === g) : g = mr(d[E])
                } else g = mr(d);
                if (f !== g)
                    if (Cf(f) && Cf(g)) {
                        const v = u.get();
                        typeof v == "string" && u.set(parseFloat(v)), typeof d == "string" ? t[a] = parseFloat(d) : Array.isArray(d) && g === V && (t[a] = d.map(parseFloat))
                    } else f != null && f.transform && (g != null && g.transform) && (c === 0 || d === 0) ? c === 0 ? u.set(g.transform(c)) : t[a] = f.transform(d) : (o || (s = bx(e), o = !0), l.push(a), r[a] = r[a] !== void 0 ? r[a] : t[a], u.jump(d))
            }), l.length) {
            const a = l.indexOf("height") >= 0 ? window.pageYOffset : null,
                u = Zx(t, e, l);
            return s.length && s.forEach(([c, f]) => {
                e.getValue(c).set(f)
            }), e.render(), Gs && a !== null && window.scrollTo({
                top: a
            }), {
                target: u,
                transitionEnd: r
            }
        } else return {
            target: t,
            transitionEnd: r
        }
    };

function qx(e, t, n, r) {
    return Qx(t) ? Jx(e, t, n, r) : {
        target: t,
        transitionEnd: r
    }
}
const ew = (e, t, n, r) => {
        const i = Yx(e, t, r);
        return t = i.target, r = i.transitionEnd, qx(e, t, n, r)
    },
    Gl = {
        current: null
    },
    gm = {
        current: !1
    };

function tw() {
    if (gm.current = !0, !!Gs)
        if (window.matchMedia) {
            const e = window.matchMedia("(prefers-reduced-motion)"),
                t = () => Gl.current = e.matches;
            e.addListener(t), t()
        } else Gl.current = !1
}

function nw(e, t, n) {
    const {
        willChange: r
    } = t;
    for (const i in t) {
        const s = t[i],
            o = n[i];
        if (je(s)) e.addValue(i, s), js(r) && r.add(i);
        else if (je(o)) e.addValue(i, nr(s, {
            owner: e
        })), js(r) && r.remove(i);
        else if (o !== s)
            if (e.hasValue(i)) {
                const l = e.getValue(i);
                !l.hasAnimated && l.set(s)
            } else {
                const l = e.getStaticValue(i);
                e.addValue(i, nr(l !== void 0 ? l : s, {
                    owner: e
                }))
            }
    }
    for (const i in n) t[i] === void 0 && e.removeValue(i);
    return t
}
const Tf = new WeakMap,
    vm = Object.keys(ni),
    rw = vm.length,
    _f = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"],
    iw = Ka.length;
class sw {
    constructor({
        parent: t,
        props: n,
        presenceContext: r,
        reducedMotionConfig: i,
        visualState: s
    }, o = {}) {
        this.current = null, this.children = new Set, this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = new Map, this.features = {}, this.valueSubscriptions = new Map, this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
            this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
        }, this.scheduleRender = () => G.render(this.render, !1, !0);
        const {
            latestValues: l,
            renderState: a
        } = s;
        this.latestValues = l, this.baseTarget = { ...l
        }, this.initialValues = n.initial ? { ...l
        } : {}, this.renderState = a, this.parent = t, this.props = n, this.presenceContext = r, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = i, this.options = o, this.isControllingVariants = Zs(n), this.isVariantNode = tp(n), this.isVariantNode && (this.variantChildren = new Set), this.manuallyAnimateOnMount = !!(t && t.current);
        const {
            willChange: u,
            ...c
        } = this.scrapeMotionValuesFromProps(n, {});
        for (const f in c) {
            const d = c[f];
            l[f] !== void 0 && je(d) && (d.set(l[f], !1), js(u) && u.add(f))
        }
    }
    scrapeMotionValuesFromProps(t, n) {
        return {}
    }
    mount(t) {
        this.current = t, Tf.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((n, r) => this.bindToMotionValue(r, n)), gm.current || tw(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : Gl.current, this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext)
    }
    unmount() {
        Tf.delete(this.current), this.projection && this.projection.unmount(), St(this.notifyUpdate), St(this.render), this.valueSubscriptions.forEach(t => t()), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
        for (const t in this.events) this.events[t].clear();
        for (const t in this.features) this.features[t].unmount();
        this.current = null
    }
    bindToMotionValue(t, n) {
        const r = Sn.has(t),
            i = n.on("change", o => {
                this.latestValues[t] = o, this.props.onUpdate && G.update(this.notifyUpdate, !1, !0), r && this.projection && (this.projection.isTransformDirty = !0)
            }),
            s = n.on("renderRequest", this.scheduleRender);
        this.valueSubscriptions.set(t, () => {
            i(), s()
        })
    }
    sortNodePosition(t) {
        return !this.current || !this.sortInstanceNodePosition || this.type !== t.type ? 0 : this.sortInstanceNodePosition(this.current, t.current)
    }
    loadFeatures({
        children: t,
        ...n
    }, r, i, s) {
        let o, l;
        for (let a = 0; a < rw; a++) {
            const u = vm[a],
                {
                    isEnabled: c,
                    Feature: f,
                    ProjectionNode: d,
                    MeasureLayout: g
                } = ni[u];
            d && (o = d), c(n) && (!this.features[u] && f && (this.features[u] = new f(this)), g && (l = g))
        }
        if (!this.projection && o) {
            this.projection = new o(this.latestValues, this.parent && this.parent.projection);
            const {
                layoutId: a,
                layout: u,
                drag: c,
                dragConstraints: f,
                layoutScroll: d,
                layoutRoot: g
            } = n;
            this.projection.setOptions({
                layoutId: a,
                layout: u,
                alwaysMeasureLayout: !!c || f && Fn(f),
                visualElement: this,
                scheduleRender: () => this.scheduleRender(),
                animationType: typeof u == "string" ? u : "both",
                initialPromotionConfig: s,
                layoutScroll: d,
                layoutRoot: g
            })
        }
        return l
    }
    updateFeatures() {
        for (const t in this.features) {
            const n = this.features[t];
            n.isMounted ? n.update() : (n.mount(), n.isMounted = !0)
        }
    }
    triggerBuild() {
        this.build(this.renderState, this.latestValues, this.options, this.props)
    }
    measureViewportBox() {
        return this.current ? this.measureInstanceViewportBox(this.current, this.props) : ne()
    }
    getStaticValue(t) {
        return this.latestValues[t]
    }
    setStaticValue(t, n) {
        this.latestValues[t] = n
    }
    makeTargetAnimatable(t, n = !0) {
        return this.makeTargetAnimatableFromInstance(t, this.props, n)
    }
    update(t, n) {
        (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = t, this.prevPresenceContext = this.presenceContext, this.presenceContext = n;
        for (let r = 0; r < _f.length; r++) {
            const i = _f[r];
            this.propEventSubscriptions[i] && (this.propEventSubscriptions[i](), delete this.propEventSubscriptions[i]);
            const s = t["on" + i];
            s && (this.propEventSubscriptions[i] = this.on(i, s))
        }
        this.prevMotionValues = nw(this, this.scrapeMotionValuesFromProps(t, this.prevProps), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue()
    }
    getProps() {
        return this.props
    }
    getVariant(t) {
        return this.props.variants ? this.props.variants[t] : void 0
    }
    getDefaultTransition() {
        return this.props.transition
    }
    getTransformPagePoint() {
        return this.props.transformPagePoint
    }
    getClosestVariantNode() {
        return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
    }
    getVariantContext(t = !1) {
        if (t) return this.parent ? this.parent.getVariantContext() : void 0;
        if (!this.isControllingVariants) {
            const r = this.parent ? this.parent.getVariantContext() || {} : {};
            return this.props.initial !== void 0 && (r.initial = this.props.initial), r
        }
        const n = {};
        for (let r = 0; r < iw; r++) {
            const i = Ka[r],
                s = this.props[i];
            (ti(s) || s === !1) && (n[i] = s)
        }
        return n
    }
    addVariantChild(t) {
        const n = this.getClosestVariantNode();
        if (n) return n.variantChildren && n.variantChildren.add(t), () => n.variantChildren.delete(t)
    }
    addValue(t, n) {
        n !== this.values.get(t) && (this.removeValue(t), this.bindToMotionValue(t, n)), this.values.set(t, n), this.latestValues[t] = n.get()
    }
    removeValue(t) {
        this.values.delete(t);
        const n = this.valueSubscriptions.get(t);
        n && (n(), this.valueSubscriptions.delete(t)), delete this.latestValues[t], this.removeValueFromRenderState(t, this.renderState)
    }
    hasValue(t) {
        return this.values.has(t)
    }
    getValue(t, n) {
        if (this.props.values && this.props.values[t]) return this.props.values[t];
        let r = this.values.get(t);
        return r === void 0 && n !== void 0 && (r = nr(n, {
            owner: this
        }), this.addValue(t, r)), r
    }
    readValue(t) {
        var n;
        return this.latestValues[t] !== void 0 || !this.current ? this.latestValues[t] : (n = this.getBaseTargetFromProps(this.props, t)) !== null && n !== void 0 ? n : this.readValueFromInstance(this.current, t, this.options)
    }
    setBaseTarget(t, n) {
        this.baseTarget[t] = n
    }
    getBaseTarget(t) {
        var n;
        const {
            initial: r
        } = this.props, i = typeof r == "string" || typeof r == "object" ? (n = nu(this.props, r)) === null || n === void 0 ? void 0 : n[t] : void 0;
        if (r && i !== void 0) return i;
        const s = this.getBaseTargetFromProps(this.props, t);
        return s !== void 0 && !je(s) ? s : this.initialValues[t] !== void 0 && i === void 0 ? void 0 : this.baseTarget[t]
    }
    on(t, n) {
        return this.events[t] || (this.events[t] = new fu), this.events[t].add(n)
    }
    notify(t, ...n) {
        this.events[t] && this.events[t].notify(...n)
    }
}
class ym extends sw {
    sortInstanceNodePosition(t, n) {
        return t.compareDocumentPosition(n) & 2 ? 1 : -1
    }
    getBaseTargetFromProps(t, n) {
        return t.style ? t.style[n] : void 0
    }
    removeValueFromRenderState(t, {
        vars: n,
        style: r
    }) {
        delete n[t], delete r[t]
    }
    makeTargetAnimatableFromInstance({
        transition: t,
        transitionEnd: n,
        ...r
    }, {
        transformValues: i
    }, s) {
        let o = E1(r, t || {}, this);
        if (i && (n && (n = i(n)), r && (r = i(r)), o && (o = i(o))), s) {
            const l = C1(this, r, o);
            i && l && (o = i(o));
            const a = ew(this, r, o, n);
            n = a.transitionEnd, r = a.target
        }
        return {
            transition: t,
            transitionEnd: n,
            ...r
        }
    }
}

function ow(e) {
    return window.getComputedStyle(e)
}
class lw extends ym {
    readValueFromInstance(t, n) {
        if (Sn.has(n)) {
            const r = lu(n);
            return r && r.default || 0
        } else {
            const r = ow(t),
                i = (op(n) ? r.getPropertyValue(n) : r[n]) || 0;
            return typeof i == "string" ? i.trim() : i
        }
    }
    measureInstanceViewportBox(t, {
        transformPagePoint: n
    }) {
        return lm(t, n)
    }
    build(t, n, r, i) {
        ba(t, n, r, i.transformTemplate)
    }
    scrapeMotionValuesFromProps(t, n) {
        return tu(t, n)
    }
    handleChildMotionValue() {
        this.childSubscription && (this.childSubscription(), delete this.childSubscription);
        const {
            children: t
        } = this.props;
        je(t) && (this.childSubscription = t.on("change", n => {
            this.current && (this.current.textContent = `${n}`)
        }))
    }
    renderInstance(t, n, r, i) {
        dp(t, n, r, i)
    }
}
class aw extends ym {
    constructor() {
        super(...arguments), this.isSVGTag = !1
    }
    getBaseTargetFromProps(t, n) {
        return t[n]
    }
    readValueFromInstance(t, n) {
        if (Sn.has(n)) {
            const r = lu(n);
            return r && r.default || 0
        }
        return n = hp.has(n) ? n : eu(n), t.getAttribute(n)
    }
    measureInstanceViewportBox() {
        return ne()
    }
    scrapeMotionValuesFromProps(t, n) {
        return mp(t, n)
    }
    build(t, n, r, i) {
        Ja(t, n, r, this.isSVGTag, i.transformTemplate)
    }
    renderInstance(t, n, r, i) {
        pp(t, n, r, i)
    }
    mount(t) {
        this.isSVGTag = qa(t.tagName), super.mount(t)
    }
}
const uw = (e, t) => Ga(e) ? new aw(t, {
        enableHardwareAcceleration: !1
    }) : new lw(t, {
        enableHardwareAcceleration: !0
    }),
    cw = {
        layout: {
            ProjectionNode: pm,
            MeasureLayout: am
        }
    },
    fw = { ...z1,
        ...o0,
        ...$x,
        ...cw
    },
    Rr = hy((e, t) => Wy(e, t, fw, uw));
var dw = 4,
    hw = .001,
    pw = 1e-7,
    mw = 10,
    Pr = 11,
    Oi = 1 / (Pr - 1),
    gw = typeof Float32Array == "function";

function xm(e, t) {
    return 1 - 3 * t + 3 * e
}

function wm(e, t) {
    return 3 * t - 6 * e
}

function Sm(e) {
    return 3 * e
}

function Ls(e, t, n) {
    return ((xm(t, n) * e + wm(t, n)) * e + Sm(t)) * e
}

function Pm(e, t, n) {
    return 3 * xm(t, n) * e * e + 2 * wm(t, n) * e + Sm(t)
}

function vw(e, t, n, r, i) {
    var s, o, l = 0;
    do o = t + (n - t) / 2, s = Ls(o, r, i) - e, s > 0 ? n = o : t = o; while (Math.abs(s) > pw && ++l < mw);
    return o
}

function yw(e, t, n, r) {
    for (var i = 0; i < dw; ++i) {
        var s = Pm(t, n, r);
        if (s === 0) return t;
        var o = Ls(t, n, r) - e;
        t -= o / s
    }
    return t
}

function xw(e) {
    return e
}
var ww = function(t, n, r, i) {
    if (!(0 <= t && t <= 1 && 0 <= r && r <= 1)) throw new Error("bezier x values must be in [0, 1] range");
    if (t === n && r === i) return xw;
    for (var s = gw ? new Float32Array(Pr) : new Array(Pr), o = 0; o < Pr; ++o) s[o] = Ls(o * Oi, t, r);

    function l(a) {
        for (var u = 0, c = 1, f = Pr - 1; c !== f && s[c] <= a; ++c) u += Oi;
        --c;
        var d = (a - s[c]) / (s[c + 1] - s[c]),
            g = u + d * Oi,
            v = Pm(g, t, r);
        return v >= hw ? yw(a, g, t, r) : v === 0 ? g : vw(a, u, u + Oi, t, r)
    }
    return function(u) {
        return u === 0 ? 0 : u === 1 ? 1 : Ls(l(u), n, i)
    }
};
const jf = zf(ww);
var du = function(t) {
    this.startX = t.startX, this.startY = t.startY, this.endX = t.endX, this.endY = t.endY, this.totalX = this.endX - this.startX, this.totalY = this.endY - this.startY, this.startMultiplierX = t.startMultiplierX || 1, this.endMultiplierX = t.endMultiplierX || 1, this.startMultiplierY = t.startMultiplierY || 1, this.endMultiplierY = t.endMultiplierY || 1
};

function $t() {
    return $t = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }, $t.apply(this, arguments)
}
var As;
(function(e) {
    e.speed = "speed", e.translateX = "translateX", e.translateY = "translateY", e.rotate = "rotate", e.rotateX = "rotateX", e.rotateY = "rotateY", e.rotateZ = "rotateZ", e.scale = "scale", e.scaleX = "scaleX", e.scaleY = "scaleY", e.scaleZ = "scaleZ", e.opacity = "opacity"
})(As || (As = {}));
var fn;
(function(e) {
    e.px = "px", e["%"] = "%", e.vh = "vh", e.vw = "vw"
})(fn || (fn = {}));
var Ir;
(function(e) {
    e.deg = "deg", e.turn = "turn", e.rad = "rad"
})(Ir || (Ir = {}));
var bl;
(function(e) {
    e[""] = ""
})(bl || (bl = {}));
var qe;
(function(e) {
    e.vertical = "vertical", e.horizontal = "horizontal"
})(qe || (qe = {}));
var Nf;
(function(e) {
    e.ease = "ease", e.easeIn = "easeIn", e.easeOut = "easeOut", e.easeInOut = "easeInOut", e.easeInQuad = "easeInQuad", e.easeInCubic = "easeInCubic", e.easeInQuart = "easeInQuart", e.easeInQuint = "easeInQuint", e.easeInSine = "easeInSine", e.easeInExpo = "easeInExpo", e.easeInCirc = "easeInCirc", e.easeOutQuad = "easeOutQuad", e.easeOutCubic = "easeOutCubic", e.easeOutQuart = "easeOutQuart", e.easeOutQuint = "easeOutQuint", e.easeOutSine = "easeOutSine", e.easeOutExpo = "easeOutExpo", e.easeOutCirc = "easeOutCirc", e.easeInOutQuad = "easeInOutQuad", e.easeInOutCubic = "easeInOutCubic", e.easeInOutQuart = "easeInOutQuart", e.easeInOutQuint = "easeInOutQuint", e.easeInOutSine = "easeInOutSine", e.easeInOutExpo = "easeInOutExpo", e.easeInOutCirc = "easeInOutCirc", e.easeInBack = "easeInBack", e.easeOutBack = "easeOutBack", e.easeInOutBack = "easeInOutBack"
})(Nf || (Nf = {}));
var Lf = 0;

function Sw() {
    return ++Lf, Lf
}
var Pw = function() {
        function e(n) {
            var r = n.el.getBoundingClientRect();
            if (n.view.scrollContainer) {
                var i = n.view.scrollContainer.getBoundingClientRect();
                r = $t({}, r, {
                    top: r.top - i.top,
                    right: r.right - i.left,
                    bottom: r.bottom - i.top,
                    left: r.left - i.left
                })
            }
            this.height = n.el.offsetHeight, this.width = n.el.offsetWidth, this.left = r.left, this.right = r.right, this.top = r.top, this.bottom = r.bottom, n.rootMargin && this._setRectWithRootMargin(n.rootMargin)
        }
        var t = e.prototype;
        return t._setRectWithRootMargin = function(r) {
            var i = r.top + r.bottom,
                s = r.left + r.right;
            this.top -= r.top, this.right += r.right, this.bottom += r.bottom, this.left -= r.left, this.height += i, this.width += s
        }, e
    }(),
    Cw = [bl[""], fn.px, fn["%"], fn.vh, fn.vw, Ir.deg, Ir.turn, Ir.rad];

function Ri(e, t) {
    t === void 0 && (t = fn["%"]);
    var n = {
        value: 0,
        unit: t
    };
    if (typeof e > "u") return n;
    var r = typeof e == "number" || typeof e == "string";
    if (!r) throw new Error("Invalid value provided. Must provide a value as a string or number");
    e = String(e), n.value = parseFloat(e), n.unit = e.match(/[\d.\-+]*\s*(.*)/)[1] || t;
    var i = Cw.includes(n.unit);
    if (!i) throw new Error("Invalid unit provided.");
    return n
}
var Af = {
    ease: [.25, .1, .25, 1],
    easeIn: [.42, 0, 1, 1],
    easeOut: [0, 0, .58, 1],
    easeInOut: [.42, 0, .58, 1],
    easeInQuad: [.55, .085, .68, .53],
    easeInCubic: [.55, .055, .675, .19],
    easeInQuart: [.895, .03, .685, .22],
    easeInQuint: [.755, .05, .855, .06],
    easeInSine: [.47, 0, .745, .715],
    easeInExpo: [.95, .05, .795, .035],
    easeInCirc: [.6, .04, .98, .335],
    easeOutQuad: [.25, .46, .45, .94],
    easeOutCubic: [.215, .61, .355, 1],
    easeOutQuart: [.165, .84, .44, 1],
    easeOutQuint: [.23, 1, .32, 1],
    easeOutSine: [.39, .575, .565, 1],
    easeOutExpo: [.19, 1, .22, 1],
    easeOutCirc: [.075, .82, .165, 1],
    easeInOutQuad: [.455, .03, .515, .955],
    easeInOutCubic: [.645, .045, .355, 1],
    easeInOutQuart: [.77, 0, .175, 1],
    easeInOutQuint: [.86, 0, .07, 1],
    easeInOutSine: [.445, .05, .55, .95],
    easeInOutExpo: [1, 0, 0, 1],
    easeInOutCirc: [.785, .135, .15, .86],
    easeInBack: [.6, -.28, .735, .045],
    easeOutBack: [.175, .885, .32, 1.275],
    easeInOutBack: [.68, -.55, .265, 1.55]
};

function Cm(e) {
    if (Array.isArray(e)) return jf(e[0], e[1], e[2], e[3]);
    if (typeof e == "string" && typeof Af[e] < "u") {
        var t = Af[e];
        return jf(t[0], t[1], t[2], t[3])
    }
}
var kw = Object.values(As),
    Ew = {
        speed: "px",
        translateX: "%",
        translateY: "%",
        rotate: "deg",
        rotateX: "deg",
        rotateY: "deg",
        rotateZ: "deg",
        scale: "",
        scaleX: "",
        scaleY: "",
        scaleZ: "",
        opacity: ""
    };

function Vf(e, t) {
    var n = {};
    return kw.forEach(function(r) {
        var i = Ew[r];
        if (typeof(e == null ? void 0 : e[r]) == "number") {
            var s = e == null ? void 0 : e[r],
                o = (s || 0) * 10 + "px",
                l = (s || 0) * -10 + "px",
                a = Ri(o),
                u = Ri(l),
                c = {
                    start: a.value,
                    end: u.value,
                    unit: a.unit
                };
            t === qe.vertical && (n.translateY = c), t === qe.horizontal && (n.translateX = c)
        }
        if (Array.isArray(e == null ? void 0 : e[r])) {
            var f = e == null ? void 0 : e[r];
            if (typeof f[0] < "u" && typeof f[1] < "u") {
                var d = Ri(f == null ? void 0 : f[0], i),
                    g = Ri(f == null ? void 0 : f[1], i),
                    v = Cm(f == null ? void 0 : f[2]);
                if (n[r] = {
                        start: d.value,
                        end: g.value,
                        unit: d.unit,
                        easing: v
                    }, d.unit !== g.unit) throw new Error("Must provide matching units for the min and max offset values of each axis.")
            }
        }
    }), n
}

function Mf(e, t, n, r) {
    var i = n - e,
        s = i / t;
    return r && (s = r(s)), s
}

function Tw(e, t, n) {
    var r = n >= e && n <= t;
    return r
}

function _w(e, t, n, r, i) {
    return (n - t) * (e - r) / (i - r) + t
}

function km(e, t) {
    var n = _w(typeof e.easing == "function" ? e.easing(t) : t, (e == null ? void 0 : e.start) || 0, (e == null ? void 0 : e.end) || 0, 0, 1);
    return {
        value: n,
        unit: e == null ? void 0 : e.unit
    }
}
var jw = Object.values(As).filter(function(e) {
    return e !== "opacity"
});

function Nw(e, t) {
    var n = Object.keys(t),
        r = n.includes("opacity"),
        i = "transform" + (r ? ",opacity" : "");
    e.style.willChange = i
}

function Lw(e, t, n) {
    if (n) {
        var r = Vw(e, t),
            i = Aw(e, t);
        n.style.transform = r, n.style.opacity = i
    }
}

function Aw(e, t) {
    var n = e.opacity && km(e.opacity, t);
    if (typeof n > "u" || typeof n.value > "u" || typeof n.unit > "u") return "";
    var r = "" + n.value;
    return r
}

function Vw(e, t) {
    var n = jw.reduce(function(r, i) {
        var s = e[i] && km(e[i], t);
        if (typeof s > "u" || typeof s.value > "u" || typeof s.unit > "u") return r;
        var o = i + "(" + s.value + s.unit + ")";
        return r + o
    }, "");
    return n
}

function Zi(e) {
    var t = e.el;
    t && (t.style.transform = "", t.style.opacity = "")
}

function Mw(e, t, n, r) {
    var i = e.top - t.height,
        s = e.left - t.width,
        o = e.bottom,
        l = e.right;
    s += n.x, l += n.x, i += n.y, o += n.y, r && (n.y + e.top < t.height && (i = 0), n.x + e.left < t.width && (s = 0), o > t.scrollHeight - t.height && (o = t.scrollHeight - t.height), l > t.scrollWidth - t.width && (l = t.scrollWidth - t.width));
    var a = new du({
        startX: s,
        startY: i,
        endX: l,
        endY: o
    });
    return a
}

function En(e, t, n) {
    var r = t > e,
        i = (Math.abs(e) + Math.abs(t)) * (r ? -1 : 1),
        s = n + i,
        o = Math.max(n / s, 1);
    return o
}

function Df(e, t) {
    var n = e.start,
        r = e.end,
        i = e.unit;
    if (i === "%") {
        var s = t / 100;
        n = n * s, r = r * s
    }
    if (i === "vw") {
        var o = n / 100,
            l = r / 100;
        n = window.innerWidth * o, r = window.innerWidth * l
    }
    if (i === "vh") {
        var a = n / 100,
            u = r / 100;
        n = window.innerHeight * a, r = window.innerHeight * u
    }
    return {
        start: n,
        end: r
    }
}
var Of = {
    start: 0,
    end: 0,
    unit: ""
};

function Dw(e, t, n, r, i, s) {
    var o = n.translateX || Of,
        l = n.translateY || Of,
        a = Df(o, e.width),
        u = a.start,
        c = a.end,
        f = Df(l, e.height),
        d = f.start,
        g = f.end,
        v = e.top - t.height,
        x = e.left - t.width,
        E = e.bottom,
        p = e.right,
        h = 1,
        m = 1;
    i === qe.vertical && (h = En(d, g, t.height + e.height), m = h);
    var w = 1,
        S = 1;
    if (i === qe.horizontal && (w = En(u, c, t.width + e.width), S = w), d < 0 && (v = v + d * h), g > 0 && (E = E + g * m), u < 0 && (x = x + u * w), c > 0 && (p = p + c * S), x += r.x, p += r.x, v += r.y, E += r.y, s) {
        var T = r.y + e.top < t.height,
            k = r.x + e.left < t.width,
            P = r.y + e.bottom > t.scrollHeight - t.height,
            L = r.x + e.right > t.scrollWidth - t.height;
        if (T && P && (h = 1, m = 1, v = 0, E = t.scrollHeight - t.height), k && L && (w = 1, S = 1, x = 0, p = t.scrollWidth - t.width), !T && P) {
            v = e.top - t.height + r.y, E = t.scrollHeight - t.height;
            var A = E - v;
            h = En(d, g, A), m = 1, d < 0 && (v = v + d * h)
        }
        if (!k && L) {
            x = e.left - t.width + r.x, p = t.scrollWidth - t.width;
            var H = p - x;
            w = En(u, c, H), S = 1, u < 0 && (x = x + u * w)
        }
        if (T && !P) {
            v = 0, E = e.bottom + r.y;
            var de = E - v;
            h = 1, m = En(d, g, de), g > 0 && (E = E + g * m)
        }
        if (k && !L) {
            x = 0, p = e.right + r.x;
            var he = p - x;
            w = 1, S = En(u, c, he), c > 0 && (p = p + c * S)
        }
    }
    var Y = new du({
        startX: x,
        startY: v,
        endX: p,
        endY: E,
        startMultiplierX: w,
        endMultiplierX: S,
        startMultiplierY: h,
        endMultiplierY: m
    });
    return Y
}

function Ow(e, t) {
    var n = $t({}, e);
    return n.translateX && (n.translateX = $t({}, e.translateX, {
        start: n.translateX.start * t.startMultiplierX,
        end: n.translateX.end * t.endMultiplierX
    })), n.translateY && (n.translateY = $t({}, e.translateY, {
        start: n.translateY.start * t.startMultiplierY,
        end: n.translateY.end * t.endMultiplierY
    })), n
}

function Rw(e, t, n) {
    return e.rootMargin || e.targetElement || e.shouldDisableScalingTranslations ? !1 : !!(t.translateX && n === qe.horizontal || t.translateY && n === qe.vertical)
}
var Rf = function(t, n, r) {
        return Math.min(Math.max(t, n), r)
    },
    Iw = function() {
        function e(n) {
            this.el = n.el, this.props = n.props, this.scrollAxis = n.scrollAxis, this.disabledParallaxController = n.disabledParallaxController || !1, this.id = Sw(), this.effects = Vf(this.props, this.scrollAxis), this.isInView = null, this.progress = 0, this._setElementEasing(n.props.easing), Nw(n.el, this.effects)
        }
        var t = e.prototype;
        return t.updateProps = function(r) {
            return this.props = $t({}, this.props, r), this.effects = Vf(r, this.scrollAxis), this._setElementEasing(r.easing), this
        }, t.setCachedAttributes = function(r, i) {
            Zi(this), this.rect = new Pw({
                el: this.props.targetElement || this.el,
                rootMargin: this.props.rootMargin,
                view: r
            });
            var s = Rw(this.props, this.effects, this.scrollAxis);
            return typeof this.props.startScroll == "number" && typeof this.props.endScroll == "number" ? (this.limits = new du({
                startX: this.props.startScroll,
                startY: this.props.startScroll,
                endX: this.props.endScroll,
                endY: this.props.endScroll
            }), this._setElementStyles(), this) : (s ? (this.limits = Dw(this.rect, r, this.effects, i, this.scrollAxis, this.props.shouldAlwaysCompleteAnimation), this.scaledEffects = Ow(this.effects, this.limits)) : this.limits = Mw(this.rect, r, i, this.props.shouldAlwaysCompleteAnimation), this._setElementStyles(), this)
        }, t._updateElementIsInView = function(r) {
            var i = this.isInView === null;
            r !== this.isInView && (r ? this.props.onEnter && this.props.onEnter(this) : i || (this._setFinalProgress(), this._setElementStyles(), this.props.onExit && this.props.onExit(this))), this.isInView = r
        }, t._setFinalProgress = function() {
            var r = Rf(Math.round(this.progress), 0, 1);
            this._updateElementProgress(r)
        }, t._setElementStyles = function() {
            if (!(this.props.disabled || this.disabledParallaxController)) {
                var r = this.scaledEffects || this.effects;
                Lw(r, this.progress, this.el)
            }
        }, t._updateElementProgress = function(r) {
            this.progress = r, this.props.onProgressChange && this.props.onProgressChange(this.progress), this.props.onChange && this.props.onChange(this)
        }, t._setElementEasing = function(r) {
            this.easing = Cm(r)
        }, t.updateElementOptions = function(r) {
            this.scrollAxis = r.scrollAxis, this.disabledParallaxController = r.disabledParallaxController || !1
        }, t.updatePosition = function(r) {
            if (!this.limits) return this;
            var i = this.scrollAxis === qe.vertical,
                s = this.isInView === null,
                o = i ? this.limits.startY : this.limits.startX,
                l = i ? this.limits.endY : this.limits.endX,
                a = i ? this.limits.totalY : this.limits.totalX,
                u = i ? r.y : r.x,
                c = Tw(o, l, u);
            if (this._updateElementIsInView(c), c) {
                var f = Mf(o, a, u, this.easing);
                this._updateElementProgress(f), this._setElementStyles()
            } else s && (this.progress = Rf(Math.round(Mf(o, a, u, this.easing)), 0, 1), this._setElementStyles());
            return this
        }, e
    }(),
    If = function() {
        function e(n) {
            this.scrollContainer = n.scrollContainer, this.width = n.width, this.height = n.height, this.scrollHeight = n.scrollHeight, this.scrollWidth = n.scrollWidth
        }
        var t = e.prototype;
        return t.hasChanged = function(r) {
            return r.width !== this.width || r.height !== this.height || r.scrollWidth !== this.scrollWidth || r.scrollHeight !== this.scrollHeight
        }, t.setSize = function(r) {
            return this.width = r.width, this.height = r.height, this.scrollHeight = r.scrollHeight, this.scrollWidth = r.scrollWidth, this
        }, e
    }(),
    Fw = function() {
        function e(n, r) {
            this.x = n, this.y = r, this.dx = 0, this.dy = 0
        }
        var t = e.prototype;
        return t.setScroll = function(r, i) {
            return this.dx = r - this.x, this.dy = i - this.y, this.x = r, this.y = i, this
        }, e
    }();

function zw() {
    var e = !1;
    try {
        var t = Object.defineProperty({}, "passive", {
            get: function() {
                return e = !0, !0
            }
        });
        window.addEventListener("test", null, t), window.removeEventListener("test", null, t)
    } catch {}
    return e
}
var Em = function() {
    function e(n) {
        var r = n.scrollAxis,
            i = r === void 0 ? qe.vertical : r,
            s = n.scrollContainer,
            o = n.disabled,
            l = o === void 0 ? !1 : o;
        this.disabled = l, this.scrollAxis = i, this.elements = [], this._hasScrollContainer = !!s, this.viewEl = s ? ? window;
        var a = this._getScrollPosition(),
            u = a[0],
            c = a[1];
        this.scroll = new Fw(u, c), this.view = new If({
            width: 0,
            height: 0,
            scrollWidth: 0,
            scrollHeight: 0,
            scrollContainer: this._hasScrollContainer ? s : void 0
        }), this._ticking = !1, this._supportsPassive = zw(), this._bindAllMethods(), !this.disabled && (this._addListeners(this.viewEl), this._addResizeObserver(), this._setViewSize())
    }
    e.init = function(r) {
        var i = typeof window < "u";
        if (!i) throw new Error("Looks like ParallaxController.init() was called on the server. This method must be called on the client.");
        return new e(r)
    };
    var t = e.prototype;
    return t._bindAllMethods = function() {
        var r = this;
        ["_addListeners", "_removeListeners", "_getScrollPosition", "_handleScroll", "_handleUpdateCache", "_updateAllElements", "_updateElementPosition", "_setViewSize", "_addResizeObserver", "_checkIfViewHasChanged", "_getViewParams", "getElements", "createElement", "removeElementById", "resetElementStyles", "updateElementPropsById", "update", "updateScrollContainer", "destroy"].forEach(function(i) {
            r[i] = r[i].bind(r)
        })
    }, t._addListeners = function(r) {
        r.addEventListener("scroll", this._handleScroll, this._supportsPassive ? {
            passive: !0
        } : !1), window.addEventListener("resize", this._handleUpdateCache, !1), window.addEventListener("blur", this._handleUpdateCache, !1), window.addEventListener("focus", this._handleUpdateCache, !1), window.addEventListener("load", this._handleUpdateCache, !1)
    }, t._removeListeners = function(r) {
        var i;
        r.removeEventListener("scroll", this._handleScroll, !1), window.removeEventListener("resize", this._handleUpdateCache, !1), window.removeEventListener("blur", this._handleUpdateCache, !1), window.removeEventListener("focus", this._handleUpdateCache, !1), window.removeEventListener("load", this._handleUpdateCache, !1), (i = this._resizeObserver) == null || i.disconnect()
    }, t._addResizeObserver = function() {
        var r = this;
        try {
            var i = this._hasScrollContainer ? this.viewEl : document.documentElement;
            this._resizeObserver = new ResizeObserver(function() {
                return r.update()
            }), this._resizeObserver.observe(i)
        } catch {
            console.warn("Failed to create the resize observer in the ParallaxContoller")
        }
    }, t._getScrollPosition = function() {
        var r = this._hasScrollContainer ? this.viewEl.scrollLeft : window.pageXOffset,
            i = this._hasScrollContainer ? this.viewEl.scrollTop : window.pageYOffset;
        return [r, i]
    }, t._handleScroll = function() {
        var r = this._getScrollPosition(),
            i = r[0],
            s = r[1];
        this.scroll.setScroll(i, s), !this._ticking && this.elements.length > 0 && (this._ticking = !0, window.requestAnimationFrame(this._updateAllElements))
    }, t._handleUpdateCache = function() {
        this._setViewSize(), this._updateAllElements({
            updateCache: !0
        })
    }, t._updateAllElements = function(r) {
        var i = this,
            s = r === void 0 ? {} : r,
            o = s.updateCache;
        this.elements && this.elements.forEach(function(l) {
            o && l.setCachedAttributes(i.view, i.scroll), i._updateElementPosition(l)
        }), this._ticking = !1
    }, t._updateElementPosition = function(r) {
        r.props.disabled || this.disabled || r.updatePosition(this.scroll)
    }, t._getViewParams = function() {
        if (this._hasScrollContainer) {
            var r = this.viewEl.offsetWidth,
                i = this.viewEl.offsetHeight,
                s = this.viewEl.scrollHeight,
                o = this.viewEl.scrollWidth;
            return this.view.setSize({
                width: r,
                height: i,
                scrollHeight: s,
                scrollWidth: o
            })
        }
        var l = document.documentElement,
            a = window.innerWidth || l.clientWidth,
            u = window.innerHeight || l.clientHeight,
            c = l.scrollHeight,
            f = l.scrollWidth;
        return {
            width: a,
            height: u,
            scrollHeight: c,
            scrollWidth: f
        }
    }, t._setViewSize = function() {
        return this.view.setSize(this._getViewParams())
    }, t._checkIfViewHasChanged = function() {
        return this.view.hasChanged(this._getViewParams())
    }, t.getElements = function() {
        return this.elements
    }, t.createElement = function(r) {
        var i = new Iw($t({}, r, {
            scrollAxis: this.scrollAxis,
            disabledParallaxController: this.disabled
        }));
        return i.setCachedAttributes(this.view, this.scroll), this.elements = this.elements ? [].concat(this.elements, [i]) : [i], this._updateElementPosition(i), this._checkIfViewHasChanged() && this.update(), i
    }, t.removeElementById = function(r) {
        this.elements && (this.elements = this.elements.filter(function(i) {
            return i.id !== r
        }))
    }, t.updateElementPropsById = function(r, i) {
        this.elements && (this.elements = this.elements.map(function(s) {
            return s.id === r ? s.updateProps(i) : s
        })), this.update()
    }, t.resetElementStyles = function(r) {
        Zi(r)
    }, t.update = function() {
        var r = this._getScrollPosition(),
            i = r[0],
            s = r[1];
        this.scroll.setScroll(i, s), this._setViewSize(), this._updateAllElements({
            updateCache: !0
        })
    }, t.updateScrollContainer = function(r) {
        this._removeListeners(this.viewEl), this.viewEl = r, this._hasScrollContainer = !!r, this.view = new If({
            width: 0,
            height: 0,
            scrollWidth: 0,
            scrollHeight: 0,
            scrollContainer: r
        }), this._setViewSize(), this._addListeners(this.viewEl), this._updateAllElements({
            updateCache: !0
        })
    }, t.disableParallaxController = function() {
        this.disabled = !0, this._removeListeners(this.viewEl), this.elements && this.elements.forEach(function(r) {
            return Zi(r)
        })
    }, t.enableParallaxController = function() {
        var r = this;
        this.disabled = !1, this.elements && this.elements.forEach(function(i) {
            return i.updateElementOptions({
                disabledParallaxController: !1,
                scrollAxis: r.scrollAxis
            })
        }), this._addListeners(this.viewEl), this._addResizeObserver(), this._setViewSize()
    }, t.disableAllElements = function() {
        console.warn("deprecated: use disableParallaxController() instead"), this.elements && (this.elements = this.elements.map(function(r) {
            return r.updateProps({
                disabled: !0
            })
        })), this.update()
    }, t.enableAllElements = function() {
        console.warn("deprecated: use enableParallaxController() instead"), this.elements && (this.elements = this.elements.map(function(r) {
            return r.updateProps({
                disabled: !1
            })
        })), this.update()
    }, t.destroy = function() {
        this._removeListeners(this.viewEl), this.elements && this.elements.forEach(function(r) {
            return Zi(r)
        }), this.elements = void 0
    }, e
}();

function Bw(e, t) {
    e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Zl(e, t)
}

function Zl(e, t) {
    return Zl = Object.setPrototypeOf || function(r, i) {
        return r.__proto__ = i, r
    }, Zl(e, t)
}

function Uw(e, t) {
    if (e == null) return {};
    var n = {},
        r = Object.keys(e),
        i, s;
    for (s = 0; s < r.length; s++) i = r[s], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
    return n
}

function $w(e) {
    return Object.keys(e).forEach(function(t) {
        return e[t] === void 0 && delete e[t]
    }), e
}
var Ww = ["disabled", "easing", "endScroll", "onChange", "onEnter", "onExit", "onProgressChange", "opacity", "rootMargin", "rotate", "rotateX", "rotateY", "rotateZ", "scale", "scaleX", "scaleY", "scaleZ", "shouldAlwaysCompleteAnimation", "shouldDisableScalingTranslations", "speed", "startScroll", "targetElement", "translateX", "translateY"];

function Tm(e) {
    var t = e.disabled,
        n = e.easing,
        r = e.endScroll,
        i = e.onChange,
        s = e.onEnter,
        o = e.onExit,
        l = e.onProgressChange,
        a = e.opacity,
        u = e.rootMargin,
        c = e.rotate,
        f = e.rotateX,
        d = e.rotateY,
        g = e.rotateZ,
        v = e.scale,
        x = e.scaleX,
        E = e.scaleY,
        p = e.scaleZ,
        h = e.shouldAlwaysCompleteAnimation,
        m = e.shouldDisableScalingTranslations,
        w = e.speed,
        S = e.startScroll,
        T = e.targetElement,
        k = e.translateX,
        P = e.translateY,
        L = Uw(e, Ww),
        A = $w({
            disabled: t,
            easing: n,
            endScroll: r,
            onChange: i,
            onEnter: s,
            onExit: o,
            onProgressChange: l,
            opacity: a,
            rootMargin: u,
            rotate: c,
            rotateX: f,
            rotateY: d,
            rotateZ: g,
            scale: v,
            scaleX: x,
            scaleY: E,
            scaleZ: p,
            shouldAlwaysCompleteAnimation: h,
            shouldDisableScalingTranslations: m,
            speed: w,
            startScroll: S,
            targetElement: T,
            translateX: k,
            translateY: P
        });
    return {
        parallaxProps: A,
        rest: L
    }
}

function Hw(e) {
    N.useEffect(function() {
        var t = typeof window > "u",
            n = e instanceof Em;
        if (!t && !e && !n) throw new Error("Must wrap your application's <Parallax /> components in a <ParallaxProvider />.")
    }, [e])
}
var _m = Ve.createContext(null);

function Yw() {
    var e = N.useContext(_m),
        t = typeof window > "u";
    if (t) return null;
    if (!e) throw new Error("Could not find `react-scroll-parallax` context value. Please ensure the component is wrapped in a <ParallaxProvider>");
    return e
}

function Xw(e) {
    var t = Yw(),
        n = N.useRef(null),
        r = Tm(e),
        i = r.parallaxProps;
    Hw(t);
    var s = N.useState(),
        o = s[0],
        l = s[1];
    return N.useEffect(function() {
        var a;
        if (n.current instanceof HTMLElement) {
            var u = {
                el: n.current,
                props: i
            };
            a = t == null ? void 0 : t.createElement(u), l(a)
        } else throw new Error("You must assign the ref returned by the useParallax() hook to an HTML Element.");
        return function() {
            a && (t == null || t.removeElementById(a.id))
        }
    }, []), N.useEffect(function() {
        o && (e.disabled && (t == null || t.resetElementStyles(o)), t == null || t.updateElementPropsById(o.id, i))
    }, [e.disabled, e.easing, e.endScroll, e.onChange, e.onEnter, e.onExit, e.onProgressChange, e.opacity, e.rootMargin, e.rotate, e.rotateX, e.rotateY, e.rotateZ, e.scale, e.scaleX, e.scaleY, e.scaleZ, e.shouldAlwaysCompleteAnimation, e.shouldDisableScalingTranslations, e.speed, e.startScroll, e.targetElement, e.translateX, e.translateY]), {
        ref: n,
        controller: t,
        element: o
    }
}

function q(e) {
    var t = Tm(e),
        n = t.parallaxProps,
        r = t.rest,
        i = Xw(n),
        s = i.ref;
    return Ve.createElement("div", Object.assign({
        ref: s
    }, r), e.children)
}
var Qw = function(t) {
        var n = typeof window > "u";
        return n ? null : Em.init(t)
    },
    jm = function(e) {
        Bw(t, e);

        function t(r) {
            var i;
            return i = e.call(this, r) || this, i.controller = Qw({
                scrollAxis: r.scrollAxis,
                scrollContainer: r.scrollContainer,
                disabled: r.isDisabled
            }), i
        }
        var n = t.prototype;
        return n.componentDidUpdate = function(i) {
            if (i.scrollContainer !== this.props.scrollContainer && this.props.scrollContainer) {
                var s;
                (s = this.controller) == null || s.updateScrollContainer(this.props.scrollContainer)
            }
            if (i.isDisabled !== this.props.isDisabled) {
                if (this.props.isDisabled) {
                    var o;
                    (o = this.controller) == null || o.disableParallaxController()
                }
                if (!this.props.isDisabled) {
                    var l;
                    (l = this.controller) == null || l.enableParallaxController()
                }
            }
        }, n.componentWillUnmount = function() {
            this.controller = this.controller.destroy()
        }, n.render = function() {
            var i = this.props.children;
            return Ve.createElement(_m.Provider, {
                value: this.controller
            }, i)
        }, t
    }(N.Component);
jm.defaultProps = {
    scrollAxis: qe.vertical
};
const Kw = () => y.jsx(y.Fragment, {
        children: y.jsxs("div", {
            className: "bg-lblu min-h-screen w-full flex items-center justify-center relative",
            id: "hero",
            children: [y.jsxs(q, {
                translateY: [40, -70],
                className: "max-w-screen-xl h-full p-8 pt-32 md:pt-8 mx-auto flex flex-col items-center justify-center gap-y-8 z-40",
                children: [y.jsx("p", {
                    className: "font-caprasimo text-yllw text-8xl lg:text-9xl text-center hero-stroke",
                    children: "DODO"
                }), y.jsx("p", {
                    className: "text-drkblu text-xl md:text-2xl text-center font-bold max-w-lg",
                    children: "When you're so friendly that you become extinct... Dodos, the original social butterflies!"
                }), y.jsxs("div", {
                    className: "flex gap-x-4",
                    children: [y.jsx("a", {
                        href: "https://twitter.com/coin_dodo",
                        children: y.jsx("button", {
                            className: "px-8 py-4 bg-white border-solid border-2 border-drkblu rounded-full font-bold text-lg hover:-translate-y-1 hover:drop-shadow-[0px_5px_0px_rgba(0,0,0,0.25)] transition-all ease-in-out duration-200",
                            children: "TWITTER"
                        })
                    }), y.jsx("a", {
                        href: "https://t.me/dodo_erc",
                        children: y.jsx("button", {
                            className: "px-8 py-4 bg-lblu border-solid border-2 border-drkblu rounded-full font-bold text-lg hover:-translate-y-1 hover:drop-shadow-[0px_5px_0px_rgba(0,0,0,0.25)] transition-all ease-in-out duration-200",
                            children: "TELEGRAM         "
                        })
                    })]
                })]
            }), y.jsx(q, {
                translateY: [20, -30],
                className: "w-full h-auto absolute bottom-0 lg:-bottom-[30%] left-0 right-0 z-30",
                children: y.jsx(Rr.img, {
                    initial: {
                        y: 0
                    },
                    animate: {
                        y: [1, 15, 1]
                    },
                    transition: {
                        duration: 3,
                        repeat: 1 / 0
                    },
                    src: "/trees.svg",
                    alt: "trees-svg",
                    className: "w-full"
                })
            }), y.jsx(q, {
                translateX: [70, -70],
                scale: [2, 1],
                className: "w-[100%] lg:w-auto absolute left-64 top-4",
                children: y.jsx(Rr.img, {
                    initial: {
                        scale: 1
                    },
                    animate: {
                        scale: [1, 1.05, 1]
                    },
                    transition: {
                        duration: 3,
                        repeat: 1 / 0
                    },
                    src: "/sun.svg",
                    alt: "sun-svg",
                    className: "w-auto"
                })
            }), y.jsx(q, {
                translateY: [10, -10],
                className: "w-[150%] lg:w-full absolute z-0 top-8",
                children: y.jsx(Rr.img, {
                    initial: {
                        y: 0
                    },
                    animate: {
                        y: [1, 1, 10, 1]
                    },
                    transition: {
                        duration: 5,
                        repeat: 1 / 0
                    },
                    src: "/clouds.svg",
                    alt: "clouds-svg",
                    className: "w-full"
                })
            })]
        })
    }),
    Gw = () => y.jsxs(y.Fragment, {
        children: [y.jsxs("div", {
            className: "bg-lblu w-full flex flex-col items-center justify-center relative",
            id: "history",
            children: [y.jsx(q, {
                translateX: [-15, 0],
                className: "absolute -bottom-4 left-0 z-30",
                children: y.jsx(Rr.img, {
                    initial: {
                        scale: 1,
                        rotateX: 0
                    },
                    animate: {
                        scale: [1, 1.04, 1],
                        rotateX: [0, 15, 0]
                    },
                    transition: {
                        duration: 5,
                        repeat: 1 / 0
                    },
                    src: "/dodo.svg",
                    alt: "",
                    className: "h-64 lg:h-auto"
                })
            }), y.jsx(Rr.img, {
                initial: {
                    y: 0
                },
                animate: {
                    y: [1, 1, 10, 1]
                },
                transition: {
                    duration: 5,
                    repeat: 1 / 0
                },
                src: "/clouds.svg",
                alt: "clouds-svg",
                className: "w-full absolute z-0 top-8"
            }), y.jsxs("div", {
                className: "max-w-screen-xl h-full p-8 lg:pt-80 pb-80 lg:pb-32 mx-auto flex flex-col items-center justify-center gap-y-8 z-20",
                children: [y.jsxs("div", {
                    className: "flex flex-col gap-y-2 items-center justify-center",
                    children: [y.jsx("p", {
                        className: "font-caprasimo text-white text-5xl lg:text-7xl leading-[2.5rem] hero-stroke",
                        children: "HISTORY OF"
                    }), y.jsx("p", {
                        className: "font-caprasimo text-yllw text-8xl lg:text-9xl text-center leading-[6rem] hero-stroke",
                        children: "DODO BIRDS"
                    })]
                }), y.jsx("div", {
                    className: "p-4 lg:p-12 bg-llbrwn border-solid border-[7px] border-ddbrwn",
                    children: y.jsx("div", {
                        className: "flex flex-col gap-y-4 text-base lg:text-4xl",
                        children: y.jsx("p", {
                            className: "",
                            children: "The dodo bird, native to the island of Mauritius, became famous for its trusting nature and was easily hunted by humans. Unfortunately, due to this vulnerability and the introduction of invasive species, the dodo bird went extinct just a century after its discovery. However, we are now celebrating the dodo's legacy through our meme project, infusing humor and creativity into its history. Join us as we bring the dodo bird back to life in the funniest way possible!"
                        })
                    })
                }), y.jsx("img", {
                    src: "/his-grass-l.svg",
                    className: "absolute bottom-0 left-0"
                }), y.jsx("img", {
                    src: "/his-grass-r.svg",
                    className: "absolute bottom-0 right-0"
                })]
            })]
        }), y.jsx("div", {
            className: "bg-grn w-full h-20"
        })]
    }),
    bw = () => y.jsx(y.Fragment, {
        children: y.jsxs("div", {
            className: "bg-lbrwn w-full flex flex-col items-center justify-center relative",
            children: [y.jsx("img", {
                src: "/random-grass.svg",
                alt: "",
                className: "w-full"
            }), y.jsx("div", {
                className: "max-w-screen-xl h-full p-8 mx-auto flex flex-col items-center justify-center gap-y-8 z-20",
                children: y.jsxs("div", {
                    className: "font-caprasimo text-white token-stroke flex flex-col lg:flex-row gap-y-8 relative w-full h-full",
                    children: [y.jsx(q, {
                        translateX: [-25, 35],
                        className: "w-full",
                        children: y.jsx("p", {
                            className: "text-7xl w-full",
                            children: "The dodo bird's pranks were so legendary"
                        })
                    }), y.jsxs("div", {
                        className: "flex flex-col w-full",
                        children: [y.jsx(q, {
                            translateX: [35, 15],
                            children: y.jsx("img", {
                                src: "/random-stone.svg",
                                alt: "",
                                className: ""
                            })
                        }), y.jsx(q, {
                            translateX: [15, -15],
                            children: y.jsx("p", {
                                className: "text-6xl text-right",
                                children: "they pranked themselves into extinction!"
                            })
                        })]
                    })]
                })
            }), y.jsx("img", {
                src: "/random-rocks.svg",
                alt: "",
                className: "w-full"
            })]
        })
    }),
    Zw = () => y.jsx(y.Fragment, {
        children: y.jsxs("div", {
            className: "bg-dbrwn w-full flex flex-col items-center justify-center relative",
            id: "roadmap",
            children: [y.jsx("img", {
                src: "/roadmap-trans.svg",
                alt: "",
                className: "w-full"
            }), y.jsx(q, {
                translateX: [-75, 15],
                className: "absolute top-0 left-0",
                children: y.jsx("img", {
                    src: "/rm-bone1.svg",
                    alt: "",
                    className: "h-40 lg:h-auto"
                })
            }), y.jsx(q, {
                translateX: [35, 15],
                className: "absolute top-0 right-0",
                children: y.jsx("img", {
                    src: "/rm-bone2.svg",
                    alt: "",
                    className: "h-40 lg:h-auto"
                })
            }), y.jsx(q, {
                translateX: [-35, 15],
                className: "absolute bottom-0 left-0",
                children: y.jsx("img", {
                    src: "/rm-bone3.svg",
                    alt: "",
                    className: "h-40 lg:h-auto"
                })
            }), y.jsx(q, {
                translateX: [35, 15],
                className: "absolute bottom-0 right-0",
                children: y.jsx("img", {
                    src: "/rm-bone4.svg",
                    alt: "",
                    className: "h-40 lg:h-auto"
                })
            }), y.jsxs("div", {
                className: "max-w-screen-xl h-full p-8 py-32 mx-auto flex flex-col items-center justify-center gap-y-8 z-20",
                children: [y.jsx("div", {
                    className: "flex flex-col items-center justify-center gap-y-8",
                    children: y.jsx("p", {
                        className: "font-caprasimo text-yllw text-4xl md:text-8xl lg:text-9xl text-center leading-[1rem] md:leading-[4rem] lg:leading-[6rem] token-stroke",
                        children: "ROADMAP"
                    })
                }), y.jsxs("div", {
                    className: "flex flex-col w-full h-auto items-center justify-center relative",
                    children: [y.jsxs(q, {
                        translateX: [35, 15],
                        className: "w-full h-auto flex flex-row-reverse items-center justify-center relative justify-self-end",
                        children: [y.jsxs("div", {
                            className: "w-full text-ddbrwn flex flex-col items-center justify-center absolute gap-y-4",
                            children: [y.jsx("p", {
                                className: "font-caprasimo text-2xl md:text-4xl",
                                children: "ROADMAP 1"
                            }), y.jsxs("div", {
                                className: "font-bold text-base md:text-xl",
                                children: [y.jsx("p", {
                                    className: "",
                                    children: "• Dodo Launch."
                                }), y.jsx("p", {
                                    className: "",
                                    children: "• Community Building."
                                }), y.jsx("p", {
                                    className: "",
                                    children: "• Dextools socials update."
                                }), y.jsx("p", {
                                    className: "",
                                    children: "• Ads on various crypto websites."
                                })]
                            })]
                        }), y.jsx("img", {
                            src: "/rm-rock1.svg",
                            alt: "",
                            className: ""
                        })]
                    }), y.jsxs(q, {
                        translateX: [-35, 15],
                        className: "w-full flex items-center justify-center relative justify-self-start",
                        children: [y.jsxs("div", {
                            className: "w-full text-ddbrwn flex flex-col items-center justify-center absolute gap-y-4",
                            children: [y.jsx("p", {
                                className: "font-caprasimo text-2xl md:text-4xl",
                                children: "ROADMAP 2"
                            }), y.jsxs("div", {
                                className: "font-bold text-base md:text-xl",
                                children: [y.jsx("p", {
                                    className: "",
                                    children: "• Twitter trending."
                                }), y.jsx("p", {
                                    className: "",
                                    children: "• Collaborations and Partnerships."
                                }), y.jsx("p", {
                                    className: "",
                                    children: "• Viral marketing campaigns."
                                }), y.jsx("p", {
                                    className: "",
                                    children: "• CMC and CG listing."
                                }), y.jsx("p", {
                                    className: "",
                                    children: "• Listing on exchanges."
                                })]
                            })]
                        }), y.jsx("img", {
                            src: "/rm-rock2.svg",
                            alt: "",
                            className: ""
                        })]
                    }), y.jsxs(q, {
                        translateX: [35, 15],
                        div: !0,
                        className: "w-full h-auto flex flex-row-reverse items-center justify-center relative justify-self-end",
                        children: [y.jsxs("div", {
                            className: "w-full text-ddbrwn flex flex-col items-center justify-center absolute gap-y-4",
                            children: [y.jsx("p", {
                                className: "font-caprasimo text-2xl md:text-4xl",
                                children: "ROADMAP 3"
                            }), y.jsx("div", {
                                className: "font-bold text-base md:text-xl",
                                children: y.jsx("p", {
                                    className: "",
                                    children: "Coming Soon."
                                })
                            })]
                        }), y.jsx("img", {
                            src: "/rm-rock3.svg",
                            alt: "",
                            className: ""
                        })]
                    }), y.jsxs(q, {
                        translateX: [-35, 15],
                        className: "w-full flex items-center justify-center relative justify-self-start",
                        children: [y.jsxs("div", {
                            className: "w-full text-ddbrwn flex flex-col items-center justify-center absolute gap-y-4",
                            children: [y.jsx("p", {
                                className: "font-caprasimo text-2xl md:text-4xl",
                                children: "ROADMAP 4"
                            }), y.jsx("div", {
                                className: "font-bold text-base md:text-xl",
                                children: y.jsx("p", {
                                    className: "",
                                    children: "Coming Soon."
                                })
                            })]
                        }), y.jsx("img", {
                            src: "/rm-rock4.svg",
                            alt: "",
                            className: ""
                        })]
                    })]
                })]
            })]
        })
    });
var Nm = {
        color: void 0,
        size: void 0,
        className: void 0,
        style: void 0,
        attr: void 0
    },
    Ff = Ve.createContext && Ve.createContext(Nm),
    Wt = globalThis && globalThis.__assign || function() {
        return Wt = Object.assign || function(e) {
            for (var t, n = 1, r = arguments.length; n < r; n++) {
                t = arguments[n];
                for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
            }
            return e
        }, Wt.apply(this, arguments)
    },
    Jw = globalThis && globalThis.__rest || function(e, t) {
        var n = {};
        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
        if (e != null && typeof Object.getOwnPropertySymbols == "function")
            for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
        return n
    };

function Lm(e) {
    return e && e.map(function(t, n) {
        return Ve.createElement(t.tag, Wt({
            key: n
        }, t.attr), Lm(t.child))
    })
}

function qw(e) {
    return function(t) {
        return Ve.createElement(eS, Wt({
            attr: Wt({}, e.attr)
        }, t), Lm(e.child))
    }
}

function eS(e) {
    var t = function(n) {
        var r = e.attr,
            i = e.size,
            s = e.title,
            o = Jw(e, ["attr", "size", "title"]),
            l = i || n.size || "1em",
            a;
        return n.className && (a = n.className), e.className && (a = (a ? a + " " : "") + e.className), Ve.createElement("svg", Wt({
            stroke: "currentColor",
            fill: "currentColor",
            strokeWidth: "0"
        }, n.attr, r, o, {
            className: a,
            style: Wt(Wt({
                color: e.color || n.color
            }, n.style), e.style),
            height: l,
            width: l,
            xmlns: "http://www.w3.org/2000/svg"
        }), s && Ve.createElement("title", null, s), e.children)
    };
    return Ff !== void 0 ? Ve.createElement(Ff.Consumer, null, function(n) {
        return t(n)
    }) : t(Nm)
}

function tS(e) {
    return qw({
        tag: "svg",
        attr: {
            viewBox: "0 0 24 24",
            strokeWidth: "2",
            stroke: "currentColor",
            fill: "none",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        },
        child: [{
            tag: "path",
            attr: {
                stroke: "none",
                d: "M0 0h24v24H0z",
                fill: "none"
            }
        }, {
            tag: "path",
            attr: {
                d: "M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2"
            }
        }, {
            tag: "path",
            attr: {
                d: "M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z"
            }
        }]
    })(e)
}
const nS = () => y.jsx(y.Fragment, {
        children: y.jsxs("div", {
            className: "bg-brwn w-full flex flex-col items-center justify-center relative",
            id: "tokenomics",
            children: [y.jsx("img", {
                src: "/token-trans.svg",
                alt: "",
                className: "w-full"
            }), y.jsx(q, {
                translateX: [-35, 15],
                className: "absolute top-0 left-0",
                children: y.jsx("img", {
                    src: "/token-bone1.svg",
                    alt: "",
                    className: "h-40 lg:h-auto"
                })
            }), y.jsx(q, {
                translateX: [35, 15],
                className: "absolute bottom-64 right-0",
                children: y.jsx("img", {
                    src: "/token-bone2.svg",
                    alt: "",
                    className: "h-40 lg:h-auto"
                })
            }), y.jsxs("div", {
                className: "max-w-screen-xl h-full p-8 pt-32 mx-auto flex flex-col items-center justify-center gap-y-8 z-20",
                children: [y.jsx("div", {
                    className: "flex flex-col items-center justify-center gap-y-8",
                    children: y.jsx("p", {
                        className: "font-caprasimo text-yllw text-4xl md:text-8xl lg:text-9xl text-center leading-[1rem] md:leading-[4rem] lg:leading-[6rem] token-stroke",
                        children: "TOKENOMICS"
                    })
                }), y.jsxs(q, {
                    translateX: [0, 0],
                    className: "text-center font-caprasimo token-stroke",
                    children: [y.jsx("p", {
                        className: "text-white text-4xl md:text-[5rem] md:leading-[8rem]",
                        children: "10,000,000"
                    }), y.jsx("p", {
                        className: "text-llbrwn text-3xl lg:text-4xl",
                        children: "Total Supply"
                    })]
                }), y.jsxs("div", {
                    className: "flex flex-col lg:flex-row gap-y-4 justify-between w-full",
                    children: [y.jsxs(q, {
                        translateX: [-25, 0],
                        className: "text-center font-caprasimo token-stroke",
                        children: [y.jsx("p", {
                            className: "text-white text-9xl md:text-[18rem] md:leading-[16rem]",
                            children: "2%"
                        }), y.jsx("p", {
                            className: "text-llbrwn text-6xl lg:text-8xl",
                            children: "buy tax"
                        })]
                    }), y.jsxs(q, {
                        translateX: [25, 0],
                        className: "text-center font-caprasimo token-stroke",
                        children: [y.jsx("p", {
                            className: "text-white text-9xl md:text-[18rem] md:leading-[16rem]",
                            children: "2%"
                        }), y.jsx("p", {
                            className: "text-llbrwn text-6xl lg:text-8xl",
                            children: "sell tax"
                        })]
                    })]
                }), y.jsxs("div", {
                    className: "flex gap-x-2 items-center justify-center py-4 text-ddbrwn",
                    children: [y.jsx(tS, {
                        className: "text-2xl cursor-pointer hover:scale-[1.06] transition-all ease-in-out duration-300"
                    }), y.jsx("p", {
                        className: "font-caprasimo text-sm lg:text-2xl",
                        children: "0xf51f3B3C45cc8b96F646f0427Cecd179344F8171"
                    })]
                }), y.jsxs("div", {
                    className: "text-ddbrwn flex flex-col lg:flex-row gap-y-4 gap-x-8",
                    children: [y.jsxs("div", {
                        className: "relative flex items-center justify-center cursor-pointer hover:scale-[1.08] transition-all ease-in-out duration-300 w-60 lg:w-auto",
                        children: [y.jsx("img", {
                            src: "/button.svg",
                            alt: "",
                            className: ""
                        }), y.jsxs("p", {
                            className: "text-2xl lg:text-4xl text-center font-caprasimo absolute",
                            children: [y.jsx("a", {
                                href: "https://www.dextools.io/app/en/ether/pair-explorer/0x6be419b8126f2c0736444c6800f67a242a377f2c",
                                children: "CHARTS"
                            }), " "]
                        })]
                    }), y.jsxs("div", {
                        className: "relative flex items-center justify-center cursor-pointer hover:scale-[1.08] transition-all ease-in-out duration-300 w-60 lg:w-auto",
                        children: [y.jsx("img", {
                            src: "/button.svg",
                            alt: "",
                            className: ""
                        }), y.jsx("p", {
                            className: "text-2xl lg:text-4xl text-center font-caprasimo absolute",
                            children: y.jsx("a", {
                                href: "https://app.uniswap.org/#/swap?outputCurrency=0xf51f3b3c45cc8b96f646f0427cecd179344f8171",
                                children: "BUY TOKEN"
                            })
                        })]
                    })]
                })]
            }), y.jsx("img", {
                src: "/token-rocks.svg",
                alt: "",
                className: "w-full"
            })]
        })
    }),
    rS = () => y.jsx(y.Fragment, {
        children: y.jsxs("div", {
            className: "bg-dbrwn w-full flex flex-col items-center justify-center relative overflow-y-hidden",
            id: "fossil",
            children: [y.jsx("div", {
                className: "max-w-screen-xl h-full p-8 mx-auto flex flex-col items-center justify-center gap-y-8 z-20",
                children: y.jsx(q, {
                    rotate: [45, -45],
                    scale: [.9, 1],
                    className: "w-full",
                    children: y.jsx("img", {
                        src: "/fossil.svg",
                        alt: ""
                    })
                })
            }), y.jsx("img", {
                src: "/fossil-rocks.svg",
                alt: "",
                className: "w-full absolute bottom-0"
            })]
        })
    }),
    iS = () => y.jsx("footer", {
        className: "w-full h-auto bg-ddbrwn",
        children: y.jsxs("div", {
            className: "max-w-screen-xl h-full p-8 mx-auto flex items-center justify-between font-bold text-lbrwn text-lg",
            children: [y.jsx("p", {
                className: "",
                children: "Dodo Bird 2023"
            }), y.jsx("a", {
                href: "#hero",
                children: y.jsx("p", {
                    className: "hover:underline",
                    children: "Go to Top"
                })
            })]
        })
    });

function sS() {
    return y.jsxs(y.Fragment, {
        children: [y.jsx("div", {
            className: "fixed w-full z-50",
            children: y.jsx(iy, {})
        }), y.jsxs("div", {
            className: "font-flamenco overflow-x-hidden",
            children: [y.jsx(Kw, {}), y.jsx(Gw, {}), y.jsx(bw, {}), y.jsx(nS, {}), y.jsx(Zw, {}), y.jsx(rS, {}), y.jsx(iS, {})]
        })]
    })
}
$o.createRoot(document.getElementById("root")).render(y.jsx(Ve.StrictMode, {
    children: y.jsx(jm, {
        children: y.jsx(sS, {})
    })
}));