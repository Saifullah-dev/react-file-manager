import * as qe from "react";
import Me, { useState as R, useRef as pe, useEffect as oe, createContext as _e, useContext as Be, useLayoutEffect as _r, useCallback as Yt, useMemo as hn } from "react";
function Br(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var Qe = { exports: {} }, en = {};
/**
 * @license React
 * react-jsx-dev-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var et;
function Wr() {
  if (et) return en;
  et = 1;
  var n = Symbol.for("react.fragment");
  return en.Fragment = n, en.jsxDEV = void 0, en;
}
var nn = {};
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var nt;
function Yr() {
  return nt || (nt = 1, process.env.NODE_ENV !== "production" && (function() {
    var n = Me, e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), l = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), h = Symbol.iterator, N = "@@iterator";
    function H(d) {
      if (d === null || typeof d != "object")
        return null;
      var y = h && d[h] || d[N];
      return typeof y == "function" ? y : null;
    }
    var F = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function j(d) {
      {
        for (var y = arguments.length, V = new Array(y > 1 ? y - 1 : 0), W = 1; W < y; W++)
          V[W - 1] = arguments[W];
        P("error", d, V);
      }
    }
    function P(d, y, V) {
      {
        var W = F.ReactDebugCurrentFrame, ae = W.getStackAddendum();
        ae !== "" && (y += "%s", V = V.concat([ae]));
        var ue = V.map(function(ie) {
          return String(ie);
        });
        ue.unshift("Warning: " + y), Function.prototype.apply.call(console[d], console, ue);
      }
    }
    var S = !1, v = !1, U = !1, D = !1, C = !1, b;
    b = Symbol.for("react.module.reference");
    function $(d) {
      return !!(typeof d == "string" || typeof d == "function" || d === r || d === o || C || d === i || d === u || d === f || D || d === p || S || v || U || typeof d == "object" && d !== null && (d.$$typeof === g || d.$$typeof === m || d.$$typeof === a || d.$$typeof === l || d.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      d.$$typeof === b || d.getModuleId !== void 0));
    }
    function M(d, y, V) {
      var W = d.displayName;
      if (W)
        return W;
      var ae = y.displayName || y.name || "";
      return ae !== "" ? V + "(" + ae + ")" : V;
    }
    function L(d) {
      return d.displayName || "Context";
    }
    function E(d) {
      if (d == null)
        return null;
      if (typeof d.tag == "number" && j("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof d == "function")
        return d.displayName || d.name || null;
      if (typeof d == "string")
        return d;
      switch (d) {
        case r:
          return "Fragment";
        case t:
          return "Portal";
        case o:
          return "Profiler";
        case i:
          return "StrictMode";
        case u:
          return "Suspense";
        case f:
          return "SuspenseList";
      }
      if (typeof d == "object")
        switch (d.$$typeof) {
          case l:
            var y = d;
            return L(y) + ".Consumer";
          case a:
            var V = d;
            return L(V._context) + ".Provider";
          case c:
            return M(d, d.render, "ForwardRef");
          case m:
            var W = d.displayName || null;
            return W !== null ? W : E(d.type) || "Memo";
          case g: {
            var ae = d, ue = ae._payload, ie = ae._init;
            try {
              return E(ie(ue));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var A = Object.assign, Q = 0, J, ne, de, re, x, w, O;
    function G() {
    }
    G.__reactDisabledLog = !0;
    function I() {
      {
        if (Q === 0) {
          J = console.log, ne = console.info, de = console.warn, re = console.error, x = console.group, w = console.groupCollapsed, O = console.groupEnd;
          var d = {
            configurable: !0,
            enumerable: !0,
            value: G,
            writable: !0
          };
          Object.defineProperties(console, {
            info: d,
            log: d,
            warn: d,
            error: d,
            group: d,
            groupCollapsed: d,
            groupEnd: d
          });
        }
        Q++;
      }
    }
    function X() {
      {
        if (Q--, Q === 0) {
          var d = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: A({}, d, {
              value: J
            }),
            info: A({}, d, {
              value: ne
            }),
            warn: A({}, d, {
              value: de
            }),
            error: A({}, d, {
              value: re
            }),
            group: A({}, d, {
              value: x
            }),
            groupCollapsed: A({}, d, {
              value: w
            }),
            groupEnd: A({}, d, {
              value: O
            })
          });
        }
        Q < 0 && j("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var _ = F.ReactCurrentDispatcher, B;
    function q(d, y, V) {
      {
        if (B === void 0)
          try {
            throw Error();
          } catch (ae) {
            var W = ae.stack.trim().match(/\n( *(at )?)/);
            B = W && W[1] || "";
          }
        return `
` + B + d;
      }
    }
    var Z = !1, k;
    {
      var ce = typeof WeakMap == "function" ? WeakMap : Map;
      k = new ce();
    }
    function T(d, y) {
      if (!d || Z)
        return "";
      {
        var V = k.get(d);
        if (V !== void 0)
          return V;
      }
      var W;
      Z = !0;
      var ae = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var ue;
      ue = _.current, _.current = null, I();
      try {
        if (y) {
          var ie = function() {
            throw Error();
          };
          if (Object.defineProperty(ie.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(ie, []);
            } catch (Ce) {
              W = Ce;
            }
            Reflect.construct(d, [], ie);
          } else {
            try {
              ie.call();
            } catch (Ce) {
              W = Ce;
            }
            d.call(ie.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Ce) {
            W = Ce;
          }
          d();
        }
      } catch (Ce) {
        if (Ce && W && typeof Ce.stack == "string") {
          for (var te = Ce.stack.split(`
`), Ne = W.stack.split(`
`), me = te.length - 1, he = Ne.length - 1; me >= 1 && he >= 0 && te[me] !== Ne[he]; )
            he--;
          for (; me >= 1 && he >= 0; me--, he--)
            if (te[me] !== Ne[he]) {
              if (me !== 1 || he !== 1)
                do
                  if (me--, he--, he < 0 || te[me] !== Ne[he]) {
                    var De = `
` + te[me].replace(" at new ", " at ");
                    return d.displayName && De.includes("<anonymous>") && (De = De.replace("<anonymous>", d.displayName)), typeof d == "function" && k.set(d, De), De;
                  }
                while (me >= 1 && he >= 0);
              break;
            }
        }
      } finally {
        Z = !1, _.current = ue, X(), Error.prepareStackTrace = ae;
      }
      var ze = d ? d.displayName || d.name : "", Ve = ze ? q(ze) : "";
      return typeof d == "function" && k.set(d, Ve), Ve;
    }
    function ge(d, y, V) {
      return T(d, !1);
    }
    function je(d) {
      var y = d.prototype;
      return !!(y && y.isReactComponent);
    }
    function Pe(d, y, V) {
      if (d == null)
        return "";
      if (typeof d == "function")
        return T(d, je(d));
      if (typeof d == "string")
        return q(d);
      switch (d) {
        case u:
          return q("Suspense");
        case f:
          return q("SuspenseList");
      }
      if (typeof d == "object")
        switch (d.$$typeof) {
          case c:
            return ge(d.render);
          case m:
            return Pe(d.type, y, V);
          case g: {
            var W = d, ae = W._payload, ue = W._init;
            try {
              return Pe(ue(ae), y, V);
            } catch {
            }
          }
        }
      return "";
    }
    var Ue = Object.prototype.hasOwnProperty, ee = {}, ve = F.ReactDebugCurrentFrame;
    function Fe(d) {
      if (d) {
        var y = d._owner, V = Pe(d.type, d._source, y ? y.type : null);
        ve.setExtraStackFrame(V);
      } else
        ve.setExtraStackFrame(null);
    }
    function Se(d, y, V, W, ae) {
      {
        var ue = Function.call.bind(Ue);
        for (var ie in d)
          if (ue(d, ie)) {
            var te = void 0;
            try {
              if (typeof d[ie] != "function") {
                var Ne = Error((W || "React class") + ": " + V + " type `" + ie + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof d[ie] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Ne.name = "Invariant Violation", Ne;
              }
              te = d[ie](y, ie, W, V, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (me) {
              te = me;
            }
            te && !(te instanceof Error) && (Fe(ae), j("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", W || "React class", V, ie, typeof te), Fe(null)), te instanceof Error && !(te.message in ee) && (ee[te.message] = !0, Fe(ae), j("Failed %s type: %s", V, te.message), Fe(null));
          }
      }
    }
    var Le = Array.isArray;
    function Re(d) {
      return Le(d);
    }
    function xn(d) {
      {
        var y = typeof Symbol == "function" && Symbol.toStringTag, V = y && d[Symbol.toStringTag] || d.constructor.name || "Object";
        return V;
      }
    }
    function Pr(d) {
      try {
        return _n(d), !1;
      } catch {
        return !0;
      }
    }
    function _n(d) {
      return "" + d;
    }
    function Bn(d) {
      if (Pr(d))
        return j("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", xn(d)), _n(d);
    }
    var We = F.ReactCurrentOwner, Er = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Wn, Yn, $n;
    $n = {};
    function jr(d) {
      if (Ue.call(d, "ref")) {
        var y = Object.getOwnPropertyDescriptor(d, "ref").get;
        if (y && y.isReactWarning)
          return !1;
      }
      return d.ref !== void 0;
    }
    function Sr(d) {
      if (Ue.call(d, "key")) {
        var y = Object.getOwnPropertyDescriptor(d, "key").get;
        if (y && y.isReactWarning)
          return !1;
      }
      return d.key !== void 0;
    }
    function Mr(d, y) {
      if (typeof d.ref == "string" && We.current && y && We.current.stateNode !== y) {
        var V = E(We.current.type);
        $n[V] || (j('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', E(We.current.type), d.ref), $n[V] = !0);
      }
    }
    function Tr(d, y) {
      {
        var V = function() {
          Wn || (Wn = !0, j("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", y));
        };
        V.isReactWarning = !0, Object.defineProperty(d, "key", {
          get: V,
          configurable: !0
        });
      }
    }
    function Ur(d, y) {
      {
        var V = function() {
          Yn || (Yn = !0, j("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", y));
        };
        V.isReactWarning = !0, Object.defineProperty(d, "ref", {
          get: V,
          configurable: !0
        });
      }
    }
    var Lr = function(d, y, V, W, ae, ue, ie) {
      var te = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: e,
        // Built-in properties that belong on the element
        type: d,
        key: y,
        ref: V,
        props: ie,
        // Record the component responsible for creating this element.
        _owner: ue
      };
      return te._store = {}, Object.defineProperty(te._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(te, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: W
      }), Object.defineProperty(te, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ae
      }), Object.freeze && (Object.freeze(te.props), Object.freeze(te)), te;
    };
    function Hr(d, y, V, W, ae) {
      {
        var ue, ie = {}, te = null, Ne = null;
        V !== void 0 && (Bn(V), te = "" + V), Sr(y) && (Bn(y.key), te = "" + y.key), jr(y) && (Ne = y.ref, Mr(y, ae));
        for (ue in y)
          Ue.call(y, ue) && !Er.hasOwnProperty(ue) && (ie[ue] = y[ue]);
        if (d && d.defaultProps) {
          var me = d.defaultProps;
          for (ue in me)
            ie[ue] === void 0 && (ie[ue] = me[ue]);
        }
        if (te || Ne) {
          var he = typeof d == "function" ? d.displayName || d.name || "Unknown" : d;
          te && Tr(ie, he), Ne && Ur(ie, he);
        }
        return Lr(d, te, Ne, ae, W, We.current, ie);
      }
    }
    var yn = F.ReactCurrentOwner, Kn = F.ReactDebugCurrentFrame;
    function ke(d) {
      if (d) {
        var y = d._owner, V = Pe(d.type, d._source, y ? y.type : null);
        Kn.setExtraStackFrame(V);
      } else
        Kn.setExtraStackFrame(null);
    }
    var Fn;
    Fn = !1;
    function Cn(d) {
      return typeof d == "object" && d !== null && d.$$typeof === e;
    }
    function qn() {
      {
        if (yn.current) {
          var d = E(yn.current.type);
          if (d)
            return `

Check the render method of \`` + d + "`.";
        }
        return "";
      }
    }
    function Vr(d) {
      {
        if (d !== void 0) {
          var y = d.fileName.replace(/^.*[\\\/]/, ""), V = d.lineNumber;
          return `

Check your code at ` + y + ":" + V + ".";
        }
        return "";
      }
    }
    var Jn = {};
    function Ar(d) {
      {
        var y = qn();
        if (!y) {
          var V = typeof d == "string" ? d : d.displayName || d.name;
          V && (y = `

Check the top-level render call using <` + V + ">.");
        }
        return y;
      }
    }
    function Xn(d, y) {
      {
        if (!d._store || d._store.validated || d.key != null)
          return;
        d._store.validated = !0;
        var V = Ar(y);
        if (Jn[V])
          return;
        Jn[V] = !0;
        var W = "";
        d && d._owner && d._owner !== yn.current && (W = " It was passed a child from " + E(d._owner.type) + "."), ke(d), j('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', V, W), ke(null);
      }
    }
    function Zn(d, y) {
      {
        if (typeof d != "object")
          return;
        if (Re(d))
          for (var V = 0; V < d.length; V++) {
            var W = d[V];
            Cn(W) && Xn(W, y);
          }
        else if (Cn(d))
          d._store && (d._store.validated = !0);
        else if (d) {
          var ae = H(d);
          if (typeof ae == "function" && ae !== d.entries)
            for (var ue = ae.call(d), ie; !(ie = ue.next()).done; )
              Cn(ie.value) && Xn(ie.value, y);
        }
      }
    }
    function Rr(d) {
      {
        var y = d.type;
        if (y == null || typeof y == "string")
          return;
        var V;
        if (typeof y == "function")
          V = y.propTypes;
        else if (typeof y == "object" && (y.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        y.$$typeof === m))
          V = y.propTypes;
        else
          return;
        if (V) {
          var W = E(y);
          Se(V, d.props, "prop", W, d);
        } else if (y.PropTypes !== void 0 && !Fn) {
          Fn = !0;
          var ae = E(y);
          j("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ae || "Unknown");
        }
        typeof y.getDefaultProps == "function" && !y.getDefaultProps.isReactClassApproved && j("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function kr(d) {
      {
        for (var y = Object.keys(d.props), V = 0; V < y.length; V++) {
          var W = y[V];
          if (W !== "children" && W !== "key") {
            ke(d), j("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", W), ke(null);
            break;
          }
        }
        d.ref !== null && (ke(d), j("Invalid attribute `ref` supplied to `React.Fragment`."), ke(null));
      }
    }
    var Qn = {};
    function zr(d, y, V, W, ae, ue) {
      {
        var ie = $(d);
        if (!ie) {
          var te = "";
          (d === void 0 || typeof d == "object" && d !== null && Object.keys(d).length === 0) && (te += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Ne = Vr(ae);
          Ne ? te += Ne : te += qn();
          var me;
          d === null ? me = "null" : Re(d) ? me = "array" : d !== void 0 && d.$$typeof === e ? (me = "<" + (E(d.type) || "Unknown") + " />", te = " Did you accidentally export a JSX literal instead of a component?") : me = typeof d, j("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", me, te);
        }
        var he = Hr(d, y, V, ae, ue);
        if (he == null)
          return he;
        if (ie) {
          var De = y.children;
          if (De !== void 0)
            if (W)
              if (Re(De)) {
                for (var ze = 0; ze < De.length; ze++)
                  Zn(De[ze], d);
                Object.freeze && Object.freeze(De);
              } else
                j("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Zn(De, d);
        }
        if (Ue.call(y, "key")) {
          var Ve = E(d), Ce = Object.keys(y).filter(function(Gr) {
            return Gr !== "key";
          }), Dn = Ce.length > 0 ? "{key: someKey, " + Ce.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Qn[Ve + Dn]) {
            var Ir = Ce.length > 0 ? "{" + Ce.join(": ..., ") + ": ...}" : "{}";
            j(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Dn, Ve, Ir, Ve), Qn[Ve + Dn] = !0;
          }
        }
        return d === r ? kr(he) : Rr(he), he;
      }
    }
    var Or = zr;
    nn.Fragment = r, nn.jsxDEV = Or;
  })()), nn;
}
var tt;
function Kr() {
  return tt || (tt = 1, process.env.NODE_ENV === "production" ? Qe.exports = Wr() : Qe.exports = Yr()), Qe.exports;
}
var s = Kr(), Kt = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, rt = Me.createContext && /* @__PURE__ */ Me.createContext(Kt), qr = ["attr", "size", "title"];
function Jr(n, e) {
  if (n == null) return {};
  var t = Xr(n, e), r, i;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(n);
    for (i = 0; i < o.length; i++)
      r = o[i], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(n, r) && (t[r] = n[r]);
  }
  return t;
}
function Xr(n, e) {
  if (n == null) return {};
  var t = {};
  for (var r in n)
    if (Object.prototype.hasOwnProperty.call(n, r)) {
      if (e.indexOf(r) >= 0) continue;
      t[r] = n[r];
    }
  return t;
}
function an() {
  return an = Object.assign ? Object.assign.bind() : function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t)
        Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, an.apply(this, arguments);
}
function it(n, e) {
  var t = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(n);
    e && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(n, i).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function sn(n) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? it(Object(t), !0).forEach(function(r) {
      Zr(n, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : it(Object(t)).forEach(function(r) {
      Object.defineProperty(n, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return n;
}
function Zr(n, e, t) {
  return e = Qr(e), e in n ? Object.defineProperty(n, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : n[e] = t, n;
}
function Qr(n) {
  var e = ei(n, "string");
  return typeof e == "symbol" ? e : e + "";
}
function ei(n, e) {
  if (typeof n != "object" || !n) return n;
  var t = n[Symbol.toPrimitive];
  if (t !== void 0) {
    var r = t.call(n, e);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(n);
}
function qt(n) {
  return n && n.map((e, t) => /* @__PURE__ */ Me.createElement(e.tag, sn({
    key: t
  }, e.attr), qt(e.child)));
}
function K(n) {
  return (e) => /* @__PURE__ */ Me.createElement(ni, an({
    attr: sn({}, n.attr)
  }, e), qt(n.child));
}
function ni(n) {
  var e = (t) => {
    var {
      attr: r,
      size: i,
      title: o
    } = n, a = Jr(n, qr), l = i || t.size || "1em", c;
    return t.className && (c = t.className), n.className && (c = (c ? c + " " : "") + n.className), /* @__PURE__ */ Me.createElement("svg", an({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, t.attr, r, a, {
      className: c,
      style: sn(sn({
        color: n.color || t.color
      }, t.style), n.style),
      height: l,
      width: l,
      xmlns: "http://www.w3.org/2000/svg"
    }), o && /* @__PURE__ */ Me.createElement("title", null, o), n.children);
  };
  return rt !== void 0 ? /* @__PURE__ */ Me.createElement(rt.Consumer, null, (t) => e(t)) : e(Kt);
}
function ti(n) {
  return K({ attr: { version: "1.1", viewBox: "0 0 16 16" }, child: [{ tag: "path", attr: { d: "M16 8c-0.020-1.045-0.247-2.086-0.665-3.038-0.417-0.953-1.023-1.817-1.766-2.53s-1.624-1.278-2.578-1.651c-0.953-0.374-1.978-0.552-2.991-0.531-1.013 0.020-2.021 0.24-2.943 0.646-0.923 0.405-1.758 0.992-2.449 1.712s-1.237 1.574-1.597 2.497c-0.361 0.923-0.533 1.914-0.512 2.895 0.020 0.981 0.234 1.955 0.627 2.847 0.392 0.892 0.961 1.7 1.658 2.368s1.523 1.195 2.416 1.543c0.892 0.348 1.851 0.514 2.799 0.493 0.949-0.020 1.89-0.227 2.751-0.608 0.862-0.379 1.642-0.929 2.287-1.604s1.154-1.472 1.488-2.335c0.204-0.523 0.342-1.069 0.415-1.622 0.019 0.001 0.039 0.002 0.059 0.002 0.552 0 1-0.448 1-1 0-0.028-0.001-0.056-0.004-0.083h0.004zM14.411 10.655c-0.367 0.831-0.898 1.584-1.55 2.206s-1.422 1.112-2.254 1.434c-0.832 0.323-1.723 0.476-2.608 0.454-0.884-0.020-1.759-0.215-2.56-0.57-0.801-0.354-1.526-0.867-2.125-1.495s-1.071-1.371-1.38-2.173c-0.31-0.801-0.457-1.66-0.435-2.512s0.208-1.694 0.551-2.464c0.342-0.77 0.836-1.468 1.441-2.044s1.321-1.029 2.092-1.326c0.771-0.298 1.596-0.438 2.416-0.416s1.629 0.202 2.368 0.532c0.74 0.329 1.41 0.805 1.963 1.387s0.988 1.27 1.272 2.011c0.285 0.74 0.418 1.532 0.397 2.32h0.004c-0.002 0.027-0.004 0.055-0.004 0.083 0 0.516 0.39 0.94 0.892 0.994-0.097 0.544-0.258 1.075-0.481 1.578z" }, child: [] }] })(n);
}
const zn = ({ loading: n = !1, className: e }) => n ? /* @__PURE__ */ s.jsxDEV("div", { className: `loader-container ${e}`, children: /* @__PURE__ */ s.jsxDEV(ti, { className: "spinner" }, void 0, !1, {
  fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/components/Loader/Loader.jsx",
  lineNumber: 9,
  columnNumber: 7
}, void 0) }, void 0, !1, {
  fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/components/Loader/Loader.jsx",
  lineNumber: 8,
  columnNumber: 5
}, void 0) : null;
function Jt(n) {
  return K({ attr: { fill: "currentColor", viewBox: "0 0 16 16" }, child: [{ tag: "path", attr: { fillRule: "evenodd", d: "M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z" }, child: [] }] })(n);
}
function Xt(n) {
  return K({ attr: { fill: "currentColor", viewBox: "0 0 16 16" }, child: [{ tag: "path", attr: { d: "m.5 3 .04.87a2 2 0 0 0-.342 1.311l.637 7A2 2 0 0 0 2.826 14H9v-1H2.826a1 1 0 0 1-.995-.91l-.637-7A1 1 0 0 1 2.19 4h11.62a1 1 0 0 1 .996 1.09L14.54 8h1.005l.256-2.819A2 2 0 0 0 13.81 3H9.828a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 6.172 1H2.5a2 2 0 0 0-2 2m5.672-1a1 1 0 0 1 .707.293L7.586 3H2.19q-.362.002-.683.12L1.5 2.98a1 1 0 0 1 1-.98z" }, child: [] }, { tag: "path", attr: { d: "M13.5 9a.5.5 0 0 1 .5.5V11h1.5a.5.5 0 1 1 0 1H14v1.5a.5.5 0 1 1-1 0V12h-1.5a.5.5 0 0 1 0-1H13V9.5a.5.5 0 0 1 .5-.5" }, child: [] }] })(n);
}
function Zt(n) {
  return K({ attr: { fill: "currentColor", viewBox: "0 0 16 16" }, child: [{ tag: "path", attr: { d: "M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5z" }, child: [] }] })(n);
}
function ot(n) {
  return K({ attr: { fill: "currentColor", viewBox: "0 0 16 16" }, child: [{ tag: "path", attr: { d: "M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5zM2.5 2a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5zm6.5.5A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5zM1 10.5A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5zm6.5.5A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5z" }, child: [] }] })(n);
}
function Qt(n) {
  return K({ attr: { fill: "currentColor", viewBox: "0 0 16 16" }, child: [{ tag: "path", attr: { d: "M3.5 3.5c-.614-.884-.074-1.962.858-2.5L8 7.226 11.642 1c.932.538 1.472 1.616.858 2.5L8.81 8.61l1.556 2.661a2.5 2.5 0 1 1-.794.637L8 9.73l-1.572 2.177a2.5 2.5 0 1 1-.794-.637L7.19 8.61zm2.5 10a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0m7 0a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0" }, child: [] }] })(n);
}
function er(n) {
  return K({ attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "polyline", attr: { points: "23 4 23 10 17 10" }, child: [] }, { tag: "polyline", attr: { points: "1 20 1 14 7 14" }, child: [] }, { tag: "path", attr: { d: "M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" }, child: [] }] })(n);
}
function ri(n) {
  return K({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] }, { tag: "path", attr: { d: "M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" }, child: [] }] })(n);
}
function ii(n) {
  return K({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] }, { tag: "path", attr: { d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" }, child: [] }] })(n);
}
function oi(n) {
  return K({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0V0z" }, child: [] }, { tag: "path", attr: { d: "M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" }, child: [] }] })(n);
}
function ai(n) {
  return K({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] }, { tag: "path", attr: { d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" }, child: [] }] })(n);
}
function si(n) {
  return K({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] }, { tag: "path", attr: { d: "M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" }, child: [] }] })(n);
}
function nr(n) {
  return K({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0V0z" }, child: [] }, { tag: "path", attr: { d: "M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z" }, child: [] }] })(n);
}
function On(n) {
  return K({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] }, { tag: "path", attr: { d: "M18 15v3H6v-3H4v3c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-3h-2zm-1-4-1.41-1.41L13 12.17V4h-2v8.17L8.41 9.59 7 11l5 5 5-5z" }, child: [] }] })(n);
}
function tr(n) {
  return K({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] }, { tag: "path", attr: { d: "M18 15v3H6v-3H4v3c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-3h-2zM7 9l1.41 1.41L11 7.83V16h2V7.83l2.59 2.58L17 9l-5-5-5 5z" }, child: [] }] })(n);
}
function li(n) {
  return K({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0V0z" }, child: [] }, { tag: "path", attr: { d: "M10.02 6 8.61 7.41 13.19 12l-4.58 4.59L10.02 18l6-6-6-6z" }, child: [] }] })(n);
}
function rr(n) {
  return K({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { d: "M20.005 5.995h-1v2h1v8h-1v2h1c1.103 0 2-.897 2-2v-8c0-1.102-.898-2-2-2zm-14 4H15v4H6.005z" }, child: [] }, { tag: "path", attr: { d: "M17.005 17.995V4H20V2h-8v2h3.005v1.995h-11c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2h11V20H12v2h8v-2h-2.995v-2.005zm-13-2v-8h11v8h-11z" }, child: [] }] })(n);
}
function ci(n) {
  return K({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { d: "M20 2H8c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zM8 16V4h12l.002 12H8z" }, child: [] }, { tag: "path", attr: { d: "M4 8H2v12c0 1.103.897 2 2 2h12v-2H4V8zm8.933 3.519-1.726-1.726-1.414 1.414 3.274 3.274 5.702-6.84-1.538-1.282z" }, child: [] }] })(n);
}
function ir(n) {
  return K({ attr: { viewBox: "0 0 448 512" }, child: [{ tag: "path", attr: { d: "M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" }, child: [] }] })(n);
}
function ui(n) {
  return K({ attr: { viewBox: "0 0 320 512" }, child: [{ tag: "path", attr: { d: "M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" }, child: [] }] })(n);
}
function di(n) {
  return K({ attr: { viewBox: "0 0 640 512" }, child: [{ tag: "path", attr: { d: "M128 0C92.7 0 64 28.7 64 64l0 224-44.8 0C8.6 288 0 296.6 0 307.2C0 349.6 34.4 384 76.8 384L320 384l0-96-192 0 0-224 320 0 0 32 64 0 0-32c0-35.3-28.7-64-64-64L128 0zM512 128l-112 0c-26.5 0-48 21.5-48 48l0 288c0 26.5 21.5 48 48 48l192 0c26.5 0 48-21.5 48-48l0-208-96 0c-17.7 0-32-14.3-32-32l0-96zm32 0l0 96 96 0-96-96z" }, child: [] }] })(n);
}
function ln(n) {
  return K({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M64 144a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L192 64zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-288 0zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-288 0zM64 464a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm48-208a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z" }, child: [] }] })(n);
}
function at(n) {
  return K({ attr: { viewBox: "0 0 384 512" }, child: [{ tag: "path", attr: { d: "M64 464l256 0c8.8 0 16-7.2 16-16l0-288-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16zM0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zM192 272l0 128c0 6.5-3.9 12.3-9.9 14.8s-12.9 1.1-17.4-3.5L129.4 376 112 376c-8.8 0-16-7.2-16-16l0-48c0-8.8 7.2-16 16-16l17.4 0 35.3-35.3c4.6-4.6 11.5-5.9 17.4-3.5s9.9 8.3 9.9 14.8zm85.8-4c11.6 20 18.2 43.3 18.2 68s-6.6 48-18.2 68c-6.6 11.5-21.3 15.4-32.8 8.8s-15.4-21.3-8.8-32.8c7.5-12.9 11.8-27.9 11.8-44s-4.3-31.1-11.8-44c-6.6-11.5-2.7-26.2 8.8-32.8s26.2-2.7 32.8 8.8z" }, child: [] }] })(n);
}
function be(n) {
  return K({ attr: { viewBox: "0 0 384 512" }, child: [{ tag: "path", attr: { d: "M64 464c-8.8 0-16-7.2-16-16L48 64c0-8.8 7.2-16 16-16l160 0 0 80c0 17.7 14.3 32 32 32l80 0 0 288c0 8.8-7.2 16-16 16L64 464zM64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-293.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0L64 0zm97 289c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0L79 303c-9.4 9.4-9.4 24.6 0 33.9l48 48c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-31-31 31-31zM257 255c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l31 31-31 31c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l48-48c9.4-9.4 9.4-24.6 0-33.9l-48-48z" }, child: [] }] })(n);
}
function st(n) {
  return K({ attr: { viewBox: "0 0 384 512" }, child: [{ tag: "path", attr: { d: "M48 448L48 64c0-8.8 7.2-16 16-16l160 0 0 80c0 17.7 14.3 32 32 32l80 0 0 288c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16zM64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-293.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0L64 0zm90.9 233.3c-8.1-10.5-23.2-12.3-33.7-4.2s-12.3 23.2-4.2 33.7L161.6 320l-44.5 57.3c-8.1 10.5-6.3 25.5 4.2 33.7s25.5 6.3 33.7-4.2L192 359.1l37.1 47.6c8.1 10.5 23.2 12.3 33.7 4.2s12.3-23.2 4.2-33.7L222.4 320l44.5-57.3c8.1-10.5 6.3-25.5-4.2-33.7s-25.5-6.3-33.7 4.2L192 280.9l-37.1-47.6z" }, child: [] }] })(n);
}
function wn(n) {
  return K({ attr: { viewBox: "0 0 384 512" }, child: [{ tag: "path", attr: { d: "M64 464c-8.8 0-16-7.2-16-16L48 64c0-8.8 7.2-16 16-16l160 0 0 80c0 17.7 14.3 32 32 32l80 0 0 288c0 8.8-7.2 16-16 16L64 464zM64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-293.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0L64 0zm96 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm69.2 46.9c-3-4.3-7.9-6.9-13.2-6.9s-10.2 2.6-13.2 6.9l-41.3 59.7-11.9-19.1c-2.9-4.7-8.1-7.5-13.6-7.5s-10.6 2.8-13.6 7.5l-40 64c-3.1 4.9-3.2 11.1-.4 16.2s8.2 8.2 14 8.2l48 0 32 0 40 0 72 0c6 0 11.4-3.3 14.2-8.6s2.4-11.6-1-16.5l-72-104z" }, child: [] }] })(n);
}
function fi(n) {
  return K({ attr: { viewBox: "0 0 384 512" }, child: [{ tag: "path", attr: { d: "M64 464c-8.8 0-16-7.2-16-16L48 64c0-8.8 7.2-16 16-16l160 0 0 80c0 17.7 14.3 32 32 32l80 0 0 288c0 8.8-7.2 16-16 16L64 464zM64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-293.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0L64 0zm56 256c-13.3 0-24 10.7-24 24s10.7 24 24 24l144 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-144 0zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24l144 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-144 0z" }, child: [] }] })(n);
}
function mi(n) {
  return K({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M64 464l48 0 0 48-48 0c-35.3 0-64-28.7-64-64L0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 304l-48 0 0-144-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16zM176 352l32 0c30.9 0 56 25.1 56 56s-25.1 56-56 56l-16 0 0 32c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-48 0-80c0-8.8 7.2-16 16-16zm32 80c13.3 0 24-10.7 24-24s-10.7-24-24-24l-16 0 0 48 16 0zm96-80l32 0c26.5 0 48 21.5 48 48l0 64c0 26.5-21.5 48-48 48l-32 0c-8.8 0-16-7.2-16-16l0-128c0-8.8 7.2-16 16-16zm32 128c8.8 0 16-7.2 16-16l0-64c0-8.8-7.2-16-16-16l-16 0 0 96 16 0zm80-112c0-8.8 7.2-16 16-16l48 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0 0 32 32 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0 0 48c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-64 0-64z" }, child: [] }] })(n);
}
function lt(n) {
  return K({ attr: { viewBox: "0 0 384 512" }, child: [{ tag: "path", attr: { d: "M64 464c-8.8 0-16-7.2-16-16L48 64c0-8.8 7.2-16 16-16l160 0 0 80c0 17.7 14.3 32 32 32l80 0 0 288c0 8.8-7.2 16-16 16L64 464zM64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-293.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0L64 0zm72 208c-13.3 0-24 10.7-24 24l0 104 0 56c0 13.3 10.7 24 24 24s24-10.7 24-24l0-32 44 0c42 0 76-34 76-76s-34-76-76-76l-68 0zm68 104l-44 0 0-56 44 0c15.5 0 28 12.5 28 28s-12.5 28-28 28z" }, child: [] }] })(n);
}
function ct(n) {
  return K({ attr: { viewBox: "0 0 384 512" }, child: [{ tag: "path", attr: { d: "M320 464c8.8 0 16-7.2 16-16l0-288-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0zM0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zM80 288c0-17.7 14.3-32 32-32l96 0c17.7 0 32 14.3 32 32l0 16 44.9-29.9c2-1.3 4.4-2.1 6.8-2.1c6.8 0 12.3 5.5 12.3 12.3l0 103.4c0 6.8-5.5 12.3-12.3 12.3c-2.4 0-4.8-.7-6.8-2.1L240 368l0 16c0 17.7-14.3 32-32 32l-96 0c-17.7 0-32-14.3-32-32l0-96z" }, child: [] }] })(n);
}
function ut(n) {
  return K({ attr: { viewBox: "0 0 384 512" }, child: [{ tag: "path", attr: { d: "M48 448L48 64c0-8.8 7.2-16 16-16l160 0 0 80c0 17.7 14.3 32 32 32l80 0 0 288c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16zM64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-293.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0L64 0zm55 241.1c-3.8-12.7-17.2-19.9-29.9-16.1s-19.9 17.2-16.1 29.9l48 160c3 10.2 12.4 17.1 23 17.1s19.9-7 23-17.1l25-83.4 25 83.4c3 10.2 12.4 17.1 23 17.1s19.9-7 23-17.1l48-160c3.8-12.7-3.4-26.1-16.1-29.9s-26.1 3.4-29.9 16.1l-25 83.4-25-83.4c-3-10.2-12.4-17.1-23-17.1s-19.9 7-23 17.1l-25 83.4-25-83.4z" }, child: [] }] })(n);
}
function pi(n) {
  return K({ attr: { viewBox: "0 0 384 512" }, child: [{ tag: "path", attr: { d: "M64 464c-8.8 0-16-7.2-16-16L48 64c0-8.8 7.2-16 16-16l48 0c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l48 0 0 80c0 17.7 14.3 32 32 32l80 0 0 288c0 8.8-7.2 16-16 16L64 464zM64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-293.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0L64 0zm48 112c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm0 64c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm-6.3 71.8L82.1 335.9c-1.4 5.4-2.1 10.9-2.1 16.4c0 35.2 28.8 63.7 64 63.7s64-28.5 64-63.7c0-5.5-.7-11.1-2.1-16.4l-23.5-88.2c-3.7-14-16.4-23.8-30.9-23.8l-14.8 0c-14.5 0-27.2 9.7-30.9 23.8zM128 336l32 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z" }, child: [] }] })(n);
}
function cn(n) {
  return K({ attr: { viewBox: "0 0 384 512" }, child: [{ tag: "path", attr: { d: "M320 464c8.8 0 16-7.2 16-16l0-288-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0zM0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64z" }, child: [] }] })(n);
}
function dt(n) {
  return K({ attr: { viewBox: "0 0 576 512" }, child: [{ tag: "path", attr: { d: "M384 480l48 0c11.4 0 21.9-6 27.6-15.9l112-192c5.8-9.9 5.8-22.1 .1-32.1S555.5 224 544 224l-400 0c-11.4 0-21.9 6-27.6 15.9L48 357.1 48 96c0-8.8 7.2-16 16-16l117.5 0c4.2 0 8.3 1.7 11.3 4.7l26.5 26.5c21 21 49.5 32.8 79.2 32.8L416 144c8.8 0 16 7.2 16 16l0 32 48 0 0-32c0-35.3-28.7-64-64-64L298.5 96c-17 0-33.3-6.7-45.3-18.7L226.7 50.7c-12-12-28.3-18.7-45.3-18.7L64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l23.7 0L384 480z" }, child: [] }] })(n);
}
function An(n) {
  return K({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M104.6 48L64 48C28.7 48 0 76.7 0 112L0 384c0 35.3 28.7 64 64 64l96 0 0-48-96 0c-8.8 0-16-7.2-16-16l0-272c0-8.8 7.2-16 16-16l16 0c0 17.7 14.3 32 32 32l72.4 0C202 108.4 227.6 96 256 96l62 0c-7.1-27.6-32.2-48-62-48l-40.6 0C211.6 20.9 188.2 0 160 0s-51.6 20.9-55.4 48zM144 56a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zM448 464l-192 0c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l140.1 0L464 243.9 464 448c0 8.8-7.2 16-16 16zM256 512l192 0c35.3 0 64-28.7 64-64l0-204.1c0-12.7-5.1-24.9-14.1-33.9l-67.9-67.9c-9-9-21.2-14.1-33.9-14.1L256 128c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64z" }, child: [] }] })(n);
}
const Ze = (n = () => {
}) => {
  const [e, t] = R(!1), r = pe(null), i = (o) => {
    var a;
    (a = r.current) != null && a.contains(o.target) ? t(!1) : (t(!0), n(o, r));
  };
  return oe(() => (document.addEventListener("click", i, !0), document.addEventListener("mousedown", i, !0), () => {
    document.removeEventListener("click", i, !0), document.removeEventListener("mousedown", i, !0);
  }), []), { ref: r, isClicked: e, setIsClicked: t };
}, or = _e(), hi = ({ children: n, layout: e }) => {
  const [t, r] = R(() => i(e));
  function i(o) {
    return ["list", "grid"].includes(o) ? o : "grid";
  }
  return /* @__PURE__ */ s.jsxDEV(or.Provider, { value: { activeLayout: t, setActiveLayout: r }, children: n }, void 0, !1, {
    fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/contexts/LayoutContext.jsx",
    lineNumber: 14,
    columnNumber: 5
  }, void 0);
}, He = () => Be(or), Y = (n) => typeof n == "string", Ye = () => {
  let n, e;
  const t = new Promise((r, i) => {
    n = r, e = i;
  });
  return t.resolve = n, t.reject = e, t;
}, ft = (n) => n == null ? "" : "" + n, gi = (n, e, t) => {
  n.forEach((r) => {
    e[r] && (t[r] = e[r]);
  });
}, vi = /###/g, mt = (n) => n && n.indexOf("###") > -1 ? n.replace(vi, ".") : n, pt = (n) => !n || Y(n), Ke = (n, e, t) => {
  const r = Y(e) ? e.split(".") : e;
  let i = 0;
  for (; i < r.length - 1; ) {
    if (pt(n)) return {};
    const o = mt(r[i]);
    !n[o] && t && (n[o] = new t()), Object.prototype.hasOwnProperty.call(n, o) ? n = n[o] : n = {}, ++i;
  }
  return pt(n) ? {} : {
    obj: n,
    k: mt(r[i])
  };
}, ht = (n, e, t) => {
  const {
    obj: r,
    k: i
  } = Ke(n, e, Object);
  if (r !== void 0 || e.length === 1) {
    r[i] = t;
    return;
  }
  let o = e[e.length - 1], a = e.slice(0, e.length - 1), l = Ke(n, a, Object);
  for (; l.obj === void 0 && a.length; )
    o = `${a[a.length - 1]}.${o}`, a = a.slice(0, a.length - 1), l = Ke(n, a, Object), l != null && l.obj && typeof l.obj[`${l.k}.${o}`] < "u" && (l.obj = void 0);
  l.obj[`${l.k}.${o}`] = t;
}, bi = (n, e, t, r) => {
  const {
    obj: i,
    k: o
  } = Ke(n, e, Object);
  i[o] = i[o] || [], i[o].push(t);
}, un = (n, e) => {
  const {
    obj: t,
    k: r
  } = Ke(n, e);
  if (t && Object.prototype.hasOwnProperty.call(t, r))
    return t[r];
}, Ni = (n, e, t) => {
  const r = un(n, t);
  return r !== void 0 ? r : un(e, t);
}, ar = (n, e, t) => {
  for (const r in e)
    r !== "__proto__" && r !== "constructor" && (r in n ? Y(n[r]) || n[r] instanceof String || Y(e[r]) || e[r] instanceof String ? t && (n[r] = e[r]) : ar(n[r], e[r], t) : n[r] = e[r]);
  return n;
}, Oe = (n) => n.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
var xi = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;"
};
const $i = (n) => Y(n) ? n.replace(/[&<>"'\/]/g, (e) => xi[e]) : n;
class yi {
  constructor(e) {
    this.capacity = e, this.regExpMap = /* @__PURE__ */ new Map(), this.regExpQueue = [];
  }
  getRegExp(e) {
    const t = this.regExpMap.get(e);
    if (t !== void 0)
      return t;
    const r = new RegExp(e);
    return this.regExpQueue.length === this.capacity && this.regExpMap.delete(this.regExpQueue.shift()), this.regExpMap.set(e, r), this.regExpQueue.push(e), r;
  }
}
const Fi = [" ", ",", "?", "!", ";"], Ci = new yi(20), Di = (n, e, t) => {
  e = e || "", t = t || "";
  const r = Fi.filter((a) => e.indexOf(a) < 0 && t.indexOf(a) < 0);
  if (r.length === 0) return !0;
  const i = Ci.getRegExp(`(${r.map((a) => a === "?" ? "\\?" : a).join("|")})`);
  let o = !i.test(n);
  if (!o) {
    const a = n.indexOf(t);
    a > 0 && !i.test(n.substring(0, a)) && (o = !0);
  }
  return o;
}, Rn = (n, e, t = ".") => {
  if (!n) return;
  if (n[e])
    return Object.prototype.hasOwnProperty.call(n, e) ? n[e] : void 0;
  const r = e.split(t);
  let i = n;
  for (let o = 0; o < r.length; ) {
    if (!i || typeof i != "object")
      return;
    let a, l = "";
    for (let c = o; c < r.length; ++c)
      if (c !== o && (l += t), l += r[c], a = i[l], a !== void 0) {
        if (["string", "number", "boolean"].indexOf(typeof a) > -1 && c < r.length - 1)
          continue;
        o += c - o + 1;
        break;
      }
    i = a;
  }
  return i;
}, Je = (n) => n == null ? void 0 : n.replace("_", "-"), wi = {
  type: "logger",
  log(n) {
    this.output("log", n);
  },
  warn(n) {
    this.output("warn", n);
  },
  error(n) {
    this.output("error", n);
  },
  output(n, e) {
    var t, r;
    (r = (t = console == null ? void 0 : console[n]) == null ? void 0 : t.apply) == null || r.call(t, console, e);
  }
};
class dn {
  constructor(e, t = {}) {
    this.init(e, t);
  }
  init(e, t = {}) {
    this.prefix = t.prefix || "i18next:", this.logger = e || wi, this.options = t, this.debug = t.debug;
  }
  log(...e) {
    return this.forward(e, "log", "", !0);
  }
  warn(...e) {
    return this.forward(e, "warn", "", !0);
  }
  error(...e) {
    return this.forward(e, "error", "");
  }
  deprecate(...e) {
    return this.forward(e, "warn", "WARNING DEPRECATED: ", !0);
  }
  forward(e, t, r, i) {
    return i && !this.debug ? null : (Y(e[0]) && (e[0] = `${r}${this.prefix} ${e[0]}`), this.logger[t](e));
  }
  create(e) {
    return new dn(this.logger, {
      prefix: `${this.prefix}:${e}:`,
      ...this.options
    });
  }
  clone(e) {
    return e = e || this.options, e.prefix = e.prefix || this.prefix, new dn(this.logger, e);
  }
}
var Ee = new dn();
class gn {
  constructor() {
    this.observers = {};
  }
  on(e, t) {
    return e.split(" ").forEach((r) => {
      this.observers[r] || (this.observers[r] = /* @__PURE__ */ new Map());
      const i = this.observers[r].get(t) || 0;
      this.observers[r].set(t, i + 1);
    }), this;
  }
  off(e, t) {
    if (this.observers[e]) {
      if (!t) {
        delete this.observers[e];
        return;
      }
      this.observers[e].delete(t);
    }
  }
  emit(e, ...t) {
    this.observers[e] && Array.from(this.observers[e].entries()).forEach(([i, o]) => {
      for (let a = 0; a < o; a++)
        i(...t);
    }), this.observers["*"] && Array.from(this.observers["*"].entries()).forEach(([i, o]) => {
      for (let a = 0; a < o; a++)
        i.apply(i, [e, ...t]);
    });
  }
}
class gt extends gn {
  constructor(e, t = {
    ns: ["translation"],
    defaultNS: "translation"
  }) {
    super(), this.data = e || {}, this.options = t, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.options.ignoreJSONStructure === void 0 && (this.options.ignoreJSONStructure = !0);
  }
  addNamespaces(e) {
    this.options.ns.indexOf(e) < 0 && this.options.ns.push(e);
  }
  removeNamespaces(e) {
    const t = this.options.ns.indexOf(e);
    t > -1 && this.options.ns.splice(t, 1);
  }
  getResource(e, t, r, i = {}) {
    var u, f;
    const o = i.keySeparator !== void 0 ? i.keySeparator : this.options.keySeparator, a = i.ignoreJSONStructure !== void 0 ? i.ignoreJSONStructure : this.options.ignoreJSONStructure;
    let l;
    e.indexOf(".") > -1 ? l = e.split(".") : (l = [e, t], r && (Array.isArray(r) ? l.push(...r) : Y(r) && o ? l.push(...r.split(o)) : l.push(r)));
    const c = un(this.data, l);
    return !c && !t && !r && e.indexOf(".") > -1 && (e = l[0], t = l[1], r = l.slice(2).join(".")), c || !a || !Y(r) ? c : Rn((f = (u = this.data) == null ? void 0 : u[e]) == null ? void 0 : f[t], r, o);
  }
  addResource(e, t, r, i, o = {
    silent: !1
  }) {
    const a = o.keySeparator !== void 0 ? o.keySeparator : this.options.keySeparator;
    let l = [e, t];
    r && (l = l.concat(a ? r.split(a) : r)), e.indexOf(".") > -1 && (l = e.split("."), i = t, t = l[1]), this.addNamespaces(t), ht(this.data, l, i), o.silent || this.emit("added", e, t, r, i);
  }
  addResources(e, t, r, i = {
    silent: !1
  }) {
    for (const o in r)
      (Y(r[o]) || Array.isArray(r[o])) && this.addResource(e, t, o, r[o], {
        silent: !0
      });
    i.silent || this.emit("added", e, t, r);
  }
  addResourceBundle(e, t, r, i, o, a = {
    silent: !1,
    skipCopy: !1
  }) {
    let l = [e, t];
    e.indexOf(".") > -1 && (l = e.split("."), i = r, r = t, t = l[1]), this.addNamespaces(t);
    let c = un(this.data, l) || {};
    a.skipCopy || (r = JSON.parse(JSON.stringify(r))), i ? ar(c, r, o) : c = {
      ...c,
      ...r
    }, ht(this.data, l, c), a.silent || this.emit("added", e, t, r);
  }
  removeResourceBundle(e, t) {
    this.hasResourceBundle(e, t) && delete this.data[e][t], this.removeNamespaces(t), this.emit("removed", e, t);
  }
  hasResourceBundle(e, t) {
    return this.getResource(e, t) !== void 0;
  }
  getResourceBundle(e, t) {
    return t || (t = this.options.defaultNS), this.getResource(e, t);
  }
  getDataByLanguage(e) {
    return this.data[e];
  }
  hasLanguageSomeTranslations(e) {
    const t = this.getDataByLanguage(e);
    return !!(t && Object.keys(t) || []).find((i) => t[i] && Object.keys(t[i]).length > 0);
  }
  toJSON() {
    return this.data;
  }
}
var sr = {
  processors: {},
  addPostProcessor(n) {
    this.processors[n.name] = n;
  },
  handle(n, e, t, r, i) {
    return n.forEach((o) => {
      var a;
      e = ((a = this.processors[o]) == null ? void 0 : a.process(e, t, r, i)) ?? e;
    }), e;
  }
};
const lr = Symbol("i18next/PATH_KEY");
function Pi() {
  const n = [], e = /* @__PURE__ */ Object.create(null);
  let t;
  return e.get = (r, i) => {
    var o;
    return (o = t == null ? void 0 : t.revoke) == null || o.call(t), i === lr ? n : (n.push(i), t = Proxy.revocable(r, e), t.proxy);
  }, Proxy.revocable(/* @__PURE__ */ Object.create(null), e).proxy;
}
function kn(n, e) {
  const {
    [lr]: t
  } = n(Pi());
  return t.join((e == null ? void 0 : e.keySeparator) ?? ".");
}
const vt = {}, bt = (n) => !Y(n) && typeof n != "boolean" && typeof n != "number";
class fn extends gn {
  constructor(e, t = {}) {
    super(), gi(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], e, this), this.options = t, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.logger = Ee.create("translator");
  }
  changeLanguage(e) {
    e && (this.language = e);
  }
  exists(e, t = {
    interpolation: {}
  }) {
    const r = {
      ...t
    };
    if (e == null) return !1;
    const i = this.resolve(e, r);
    return (i == null ? void 0 : i.res) !== void 0;
  }
  extractFromKey(e, t) {
    let r = t.nsSeparator !== void 0 ? t.nsSeparator : this.options.nsSeparator;
    r === void 0 && (r = ":");
    const i = t.keySeparator !== void 0 ? t.keySeparator : this.options.keySeparator;
    let o = t.ns || this.options.defaultNS || [];
    const a = r && e.indexOf(r) > -1, l = !this.options.userDefinedKeySeparator && !t.keySeparator && !this.options.userDefinedNsSeparator && !t.nsSeparator && !Di(e, r, i);
    if (a && !l) {
      const c = e.match(this.interpolator.nestingRegexp);
      if (c && c.length > 0)
        return {
          key: e,
          namespaces: Y(o) ? [o] : o
        };
      const u = e.split(r);
      (r !== i || r === i && this.options.ns.indexOf(u[0]) > -1) && (o = u.shift()), e = u.join(i);
    }
    return {
      key: e,
      namespaces: Y(o) ? [o] : o
    };
  }
  translate(e, t, r) {
    let i = typeof t == "object" ? {
      ...t
    } : t;
    if (typeof i != "object" && this.options.overloadTranslationOptionHandler && (i = this.options.overloadTranslationOptionHandler(arguments)), typeof i == "object" && (i = {
      ...i
    }), i || (i = {}), e == null) return "";
    typeof e == "function" && (e = kn(e, {
      ...this.options,
      ...i
    })), Array.isArray(e) || (e = [String(e)]);
    const o = i.returnDetails !== void 0 ? i.returnDetails : this.options.returnDetails, a = i.keySeparator !== void 0 ? i.keySeparator : this.options.keySeparator, {
      key: l,
      namespaces: c
    } = this.extractFromKey(e[e.length - 1], i), u = c[c.length - 1];
    let f = i.nsSeparator !== void 0 ? i.nsSeparator : this.options.nsSeparator;
    f === void 0 && (f = ":");
    const m = i.lng || this.language, g = i.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
    if ((m == null ? void 0 : m.toLowerCase()) === "cimode")
      return g ? o ? {
        res: `${u}${f}${l}`,
        usedKey: l,
        exactUsedKey: l,
        usedLng: m,
        usedNS: u,
        usedParams: this.getUsedParamsDetails(i)
      } : `${u}${f}${l}` : o ? {
        res: l,
        usedKey: l,
        exactUsedKey: l,
        usedLng: m,
        usedNS: u,
        usedParams: this.getUsedParamsDetails(i)
      } : l;
    const p = this.resolve(e, i);
    let h = p == null ? void 0 : p.res;
    const N = (p == null ? void 0 : p.usedKey) || l, H = (p == null ? void 0 : p.exactUsedKey) || l, F = ["[object Number]", "[object Function]", "[object RegExp]"], j = i.joinArrays !== void 0 ? i.joinArrays : this.options.joinArrays, P = !this.i18nFormat || this.i18nFormat.handleAsObject, S = i.count !== void 0 && !Y(i.count), v = fn.hasDefaultValue(i), U = S ? this.pluralResolver.getSuffix(m, i.count, i) : "", D = i.ordinal && S ? this.pluralResolver.getSuffix(m, i.count, {
      ordinal: !1
    }) : "", C = S && !i.ordinal && i.count === 0, b = C && i[`defaultValue${this.options.pluralSeparator}zero`] || i[`defaultValue${U}`] || i[`defaultValue${D}`] || i.defaultValue;
    let $ = h;
    P && !h && v && ($ = b);
    const M = bt($), L = Object.prototype.toString.apply($);
    if (P && $ && M && F.indexOf(L) < 0 && !(Y(j) && Array.isArray($))) {
      if (!i.returnObjects && !this.options.returnObjects) {
        this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
        const E = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(N, $, {
          ...i,
          ns: c
        }) : `key '${l} (${this.language})' returned an object instead of string.`;
        return o ? (p.res = E, p.usedParams = this.getUsedParamsDetails(i), p) : E;
      }
      if (a) {
        const E = Array.isArray($), A = E ? [] : {}, Q = E ? H : N;
        for (const J in $)
          if (Object.prototype.hasOwnProperty.call($, J)) {
            const ne = `${Q}${a}${J}`;
            v && !h ? A[J] = this.translate(ne, {
              ...i,
              defaultValue: bt(b) ? b[J] : void 0,
              joinArrays: !1,
              ns: c
            }) : A[J] = this.translate(ne, {
              ...i,
              joinArrays: !1,
              ns: c
            }), A[J] === ne && (A[J] = $[J]);
          }
        h = A;
      }
    } else if (P && Y(j) && Array.isArray(h))
      h = h.join(j), h && (h = this.extendTranslation(h, e, i, r));
    else {
      let E = !1, A = !1;
      !this.isValidLookup(h) && v && (E = !0, h = b), this.isValidLookup(h) || (A = !0, h = l);
      const J = (i.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && A ? void 0 : h, ne = v && b !== h && this.options.updateMissing;
      if (A || E || ne) {
        if (this.logger.log(ne ? "updateKey" : "missingKey", m, u, l, ne ? b : h), a) {
          const w = this.resolve(l, {
            ...i,
            keySeparator: !1
          });
          w && w.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.");
        }
        let de = [];
        const re = this.languageUtils.getFallbackCodes(this.options.fallbackLng, i.lng || this.language);
        if (this.options.saveMissingTo === "fallback" && re && re[0])
          for (let w = 0; w < re.length; w++)
            de.push(re[w]);
        else this.options.saveMissingTo === "all" ? de = this.languageUtils.toResolveHierarchy(i.lng || this.language) : de.push(i.lng || this.language);
        const x = (w, O, G) => {
          var X;
          const I = v && G !== h ? G : J;
          this.options.missingKeyHandler ? this.options.missingKeyHandler(w, u, O, I, ne, i) : (X = this.backendConnector) != null && X.saveMissing && this.backendConnector.saveMissing(w, u, O, I, ne, i), this.emit("missingKey", w, u, O, h);
        };
        this.options.saveMissing && (this.options.saveMissingPlurals && S ? de.forEach((w) => {
          const O = this.pluralResolver.getSuffixes(w, i);
          C && i[`defaultValue${this.options.pluralSeparator}zero`] && O.indexOf(`${this.options.pluralSeparator}zero`) < 0 && O.push(`${this.options.pluralSeparator}zero`), O.forEach((G) => {
            x([w], l + G, i[`defaultValue${G}`] || b);
          });
        }) : x(de, l, b));
      }
      h = this.extendTranslation(h, e, i, p, r), A && h === l && this.options.appendNamespaceToMissingKey && (h = `${u}${f}${l}`), (A || E) && this.options.parseMissingKeyHandler && (h = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${u}${f}${l}` : l, E ? h : void 0, i));
    }
    return o ? (p.res = h, p.usedParams = this.getUsedParamsDetails(i), p) : h;
  }
  extendTranslation(e, t, r, i, o) {
    var c, u;
    if ((c = this.i18nFormat) != null && c.parse)
      e = this.i18nFormat.parse(e, {
        ...this.options.interpolation.defaultVariables,
        ...r
      }, r.lng || this.language || i.usedLng, i.usedNS, i.usedKey, {
        resolved: i
      });
    else if (!r.skipInterpolation) {
      r.interpolation && this.interpolator.init({
        ...r,
        interpolation: {
          ...this.options.interpolation,
          ...r.interpolation
        }
      });
      const f = Y(e) && (((u = r == null ? void 0 : r.interpolation) == null ? void 0 : u.skipOnVariables) !== void 0 ? r.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
      let m;
      if (f) {
        const p = e.match(this.interpolator.nestingRegexp);
        m = p && p.length;
      }
      let g = r.replace && !Y(r.replace) ? r.replace : r;
      if (this.options.interpolation.defaultVariables && (g = {
        ...this.options.interpolation.defaultVariables,
        ...g
      }), e = this.interpolator.interpolate(e, g, r.lng || this.language || i.usedLng, r), f) {
        const p = e.match(this.interpolator.nestingRegexp), h = p && p.length;
        m < h && (r.nest = !1);
      }
      !r.lng && i && i.res && (r.lng = this.language || i.usedLng), r.nest !== !1 && (e = this.interpolator.nest(e, (...p) => (o == null ? void 0 : o[0]) === p[0] && !r.context ? (this.logger.warn(`It seems you are nesting recursively key: ${p[0]} in key: ${t[0]}`), null) : this.translate(...p, t), r)), r.interpolation && this.interpolator.reset();
    }
    const a = r.postProcess || this.options.postProcess, l = Y(a) ? [a] : a;
    return e != null && (l != null && l.length) && r.applyPostProcessor !== !1 && (e = sr.handle(l, e, t, this.options && this.options.postProcessPassResolved ? {
      i18nResolved: {
        ...i,
        usedParams: this.getUsedParamsDetails(r)
      },
      ...r
    } : r, this)), e;
  }
  resolve(e, t = {}) {
    let r, i, o, a, l;
    return Y(e) && (e = [e]), e.forEach((c) => {
      if (this.isValidLookup(r)) return;
      const u = this.extractFromKey(c, t), f = u.key;
      i = f;
      let m = u.namespaces;
      this.options.fallbackNS && (m = m.concat(this.options.fallbackNS));
      const g = t.count !== void 0 && !Y(t.count), p = g && !t.ordinal && t.count === 0, h = t.context !== void 0 && (Y(t.context) || typeof t.context == "number") && t.context !== "", N = t.lngs ? t.lngs : this.languageUtils.toResolveHierarchy(t.lng || this.language, t.fallbackLng);
      m.forEach((H) => {
        var F, j;
        this.isValidLookup(r) || (l = H, !vt[`${N[0]}-${H}`] && ((F = this.utils) != null && F.hasLoadedNamespace) && !((j = this.utils) != null && j.hasLoadedNamespace(l)) && (vt[`${N[0]}-${H}`] = !0, this.logger.warn(`key "${i}" for languages "${N.join(", ")}" won't get resolved as namespace "${l}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), N.forEach((P) => {
          var U;
          if (this.isValidLookup(r)) return;
          a = P;
          const S = [f];
          if ((U = this.i18nFormat) != null && U.addLookupKeys)
            this.i18nFormat.addLookupKeys(S, f, P, H, t);
          else {
            let D;
            g && (D = this.pluralResolver.getSuffix(P, t.count, t));
            const C = `${this.options.pluralSeparator}zero`, b = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
            if (g && (t.ordinal && D.indexOf(b) === 0 && S.push(f + D.replace(b, this.options.pluralSeparator)), S.push(f + D), p && S.push(f + C)), h) {
              const $ = `${f}${this.options.contextSeparator || "_"}${t.context}`;
              S.push($), g && (t.ordinal && D.indexOf(b) === 0 && S.push($ + D.replace(b, this.options.pluralSeparator)), S.push($ + D), p && S.push($ + C));
            }
          }
          let v;
          for (; v = S.pop(); )
            this.isValidLookup(r) || (o = v, r = this.getResource(P, H, v, t));
        }));
      });
    }), {
      res: r,
      usedKey: i,
      exactUsedKey: o,
      usedLng: a,
      usedNS: l
    };
  }
  isValidLookup(e) {
    return e !== void 0 && !(!this.options.returnNull && e === null) && !(!this.options.returnEmptyString && e === "");
  }
  getResource(e, t, r, i = {}) {
    var o;
    return (o = this.i18nFormat) != null && o.getResource ? this.i18nFormat.getResource(e, t, r, i) : this.resourceStore.getResource(e, t, r, i);
  }
  getUsedParamsDetails(e = {}) {
    const t = ["defaultValue", "ordinal", "context", "replace", "lng", "lngs", "fallbackLng", "ns", "keySeparator", "nsSeparator", "returnObjects", "returnDetails", "joinArrays", "postProcess", "interpolation"], r = e.replace && !Y(e.replace);
    let i = r ? e.replace : e;
    if (r && typeof e.count < "u" && (i.count = e.count), this.options.interpolation.defaultVariables && (i = {
      ...this.options.interpolation.defaultVariables,
      ...i
    }), !r) {
      i = {
        ...i
      };
      for (const o of t)
        delete i[o];
    }
    return i;
  }
  static hasDefaultValue(e) {
    const t = "defaultValue";
    for (const r in e)
      if (Object.prototype.hasOwnProperty.call(e, r) && t === r.substring(0, t.length) && e[r] !== void 0)
        return !0;
    return !1;
  }
}
class Nt {
  constructor(e) {
    this.options = e, this.supportedLngs = this.options.supportedLngs || !1, this.logger = Ee.create("languageUtils");
  }
  getScriptPartFromCode(e) {
    if (e = Je(e), !e || e.indexOf("-") < 0) return null;
    const t = e.split("-");
    return t.length === 2 || (t.pop(), t[t.length - 1].toLowerCase() === "x") ? null : this.formatLanguageCode(t.join("-"));
  }
  getLanguagePartFromCode(e) {
    if (e = Je(e), !e || e.indexOf("-") < 0) return e;
    const t = e.split("-");
    return this.formatLanguageCode(t[0]);
  }
  formatLanguageCode(e) {
    if (Y(e) && e.indexOf("-") > -1) {
      let t;
      try {
        t = Intl.getCanonicalLocales(e)[0];
      } catch {
      }
      return t && this.options.lowerCaseLng && (t = t.toLowerCase()), t || (this.options.lowerCaseLng ? e.toLowerCase() : e);
    }
    return this.options.cleanCode || this.options.lowerCaseLng ? e.toLowerCase() : e;
  }
  isSupportedCode(e) {
    return (this.options.load === "languageOnly" || this.options.nonExplicitSupportedLngs) && (e = this.getLanguagePartFromCode(e)), !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(e) > -1;
  }
  getBestMatchFromCodes(e) {
    if (!e) return null;
    let t;
    return e.forEach((r) => {
      if (t) return;
      const i = this.formatLanguageCode(r);
      (!this.options.supportedLngs || this.isSupportedCode(i)) && (t = i);
    }), !t && this.options.supportedLngs && e.forEach((r) => {
      if (t) return;
      const i = this.getScriptPartFromCode(r);
      if (this.isSupportedCode(i)) return t = i;
      const o = this.getLanguagePartFromCode(r);
      if (this.isSupportedCode(o)) return t = o;
      t = this.options.supportedLngs.find((a) => {
        if (a === o) return a;
        if (!(a.indexOf("-") < 0 && o.indexOf("-") < 0) && (a.indexOf("-") > 0 && o.indexOf("-") < 0 && a.substring(0, a.indexOf("-")) === o || a.indexOf(o) === 0 && o.length > 1))
          return a;
      });
    }), t || (t = this.getFallbackCodes(this.options.fallbackLng)[0]), t;
  }
  getFallbackCodes(e, t) {
    if (!e) return [];
    if (typeof e == "function" && (e = e(t)), Y(e) && (e = [e]), Array.isArray(e)) return e;
    if (!t) return e.default || [];
    let r = e[t];
    return r || (r = e[this.getScriptPartFromCode(t)]), r || (r = e[this.formatLanguageCode(t)]), r || (r = e[this.getLanguagePartFromCode(t)]), r || (r = e.default), r || [];
  }
  toResolveHierarchy(e, t) {
    const r = this.getFallbackCodes((t === !1 ? [] : t) || this.options.fallbackLng || [], e), i = [], o = (a) => {
      a && (this.isSupportedCode(a) ? i.push(a) : this.logger.warn(`rejecting language code not found in supportedLngs: ${a}`));
    };
    return Y(e) && (e.indexOf("-") > -1 || e.indexOf("_") > -1) ? (this.options.load !== "languageOnly" && o(this.formatLanguageCode(e)), this.options.load !== "languageOnly" && this.options.load !== "currentOnly" && o(this.getScriptPartFromCode(e)), this.options.load !== "currentOnly" && o(this.getLanguagePartFromCode(e))) : Y(e) && o(this.formatLanguageCode(e)), r.forEach((a) => {
      i.indexOf(a) < 0 && o(this.formatLanguageCode(a));
    }), i;
  }
}
const xt = {
  zero: 0,
  one: 1,
  two: 2,
  few: 3,
  many: 4,
  other: 5
}, $t = {
  select: (n) => n === 1 ? "one" : "other",
  resolvedOptions: () => ({
    pluralCategories: ["one", "other"]
  })
};
class Ei {
  constructor(e, t = {}) {
    this.languageUtils = e, this.options = t, this.logger = Ee.create("pluralResolver"), this.pluralRulesCache = {};
  }
  addRule(e, t) {
    this.rules[e] = t;
  }
  clearCache() {
    this.pluralRulesCache = {};
  }
  getRule(e, t = {}) {
    const r = Je(e === "dev" ? "en" : e), i = t.ordinal ? "ordinal" : "cardinal", o = JSON.stringify({
      cleanedCode: r,
      type: i
    });
    if (o in this.pluralRulesCache)
      return this.pluralRulesCache[o];
    let a;
    try {
      a = new Intl.PluralRules(r, {
        type: i
      });
    } catch {
      if (!Intl)
        return this.logger.error("No Intl support, please use an Intl polyfill!"), $t;
      if (!e.match(/-|_/)) return $t;
      const c = this.languageUtils.getLanguagePartFromCode(e);
      a = this.getRule(c, t);
    }
    return this.pluralRulesCache[o] = a, a;
  }
  needsPlural(e, t = {}) {
    let r = this.getRule(e, t);
    return r || (r = this.getRule("dev", t)), (r == null ? void 0 : r.resolvedOptions().pluralCategories.length) > 1;
  }
  getPluralFormsOfKey(e, t, r = {}) {
    return this.getSuffixes(e, r).map((i) => `${t}${i}`);
  }
  getSuffixes(e, t = {}) {
    let r = this.getRule(e, t);
    return r || (r = this.getRule("dev", t)), r ? r.resolvedOptions().pluralCategories.sort((i, o) => xt[i] - xt[o]).map((i) => `${this.options.prepend}${t.ordinal ? `ordinal${this.options.prepend}` : ""}${i}`) : [];
  }
  getSuffix(e, t, r = {}) {
    const i = this.getRule(e, r);
    return i ? `${this.options.prepend}${r.ordinal ? `ordinal${this.options.prepend}` : ""}${i.select(t)}` : (this.logger.warn(`no plural rule found for: ${e}`), this.getSuffix("dev", t, r));
  }
}
const yt = (n, e, t, r = ".", i = !0) => {
  let o = Ni(n, e, t);
  return !o && i && Y(t) && (o = Rn(n, t, r), o === void 0 && (o = Rn(e, t, r))), o;
}, Pn = (n) => n.replace(/\$/g, "$$$$");
class ji {
  constructor(e = {}) {
    var t;
    this.logger = Ee.create("interpolator"), this.options = e, this.format = ((t = e == null ? void 0 : e.interpolation) == null ? void 0 : t.format) || ((r) => r), this.init(e);
  }
  init(e = {}) {
    e.interpolation || (e.interpolation = {
      escapeValue: !0
    });
    const {
      escape: t,
      escapeValue: r,
      useRawValueToEscape: i,
      prefix: o,
      prefixEscaped: a,
      suffix: l,
      suffixEscaped: c,
      formatSeparator: u,
      unescapeSuffix: f,
      unescapePrefix: m,
      nestingPrefix: g,
      nestingPrefixEscaped: p,
      nestingSuffix: h,
      nestingSuffixEscaped: N,
      nestingOptionsSeparator: H,
      maxReplaces: F,
      alwaysFormat: j
    } = e.interpolation;
    this.escape = t !== void 0 ? t : $i, this.escapeValue = r !== void 0 ? r : !0, this.useRawValueToEscape = i !== void 0 ? i : !1, this.prefix = o ? Oe(o) : a || "{{", this.suffix = l ? Oe(l) : c || "}}", this.formatSeparator = u || ",", this.unescapePrefix = f ? "" : m || "-", this.unescapeSuffix = this.unescapePrefix ? "" : f || "", this.nestingPrefix = g ? Oe(g) : p || Oe("$t("), this.nestingSuffix = h ? Oe(h) : N || Oe(")"), this.nestingOptionsSeparator = H || ",", this.maxReplaces = F || 1e3, this.alwaysFormat = j !== void 0 ? j : !1, this.resetRegExp();
  }
  reset() {
    this.options && this.init(this.options);
  }
  resetRegExp() {
    const e = (t, r) => (t == null ? void 0 : t.source) === r ? (t.lastIndex = 0, t) : new RegExp(r, "g");
    this.regexp = e(this.regexp, `${this.prefix}(.+?)${this.suffix}`), this.regexpUnescape = e(this.regexpUnescape, `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`), this.nestingRegexp = e(this.nestingRegexp, `${this.nestingPrefix}((?:[^()"']+|"[^"]*"|'[^']*'|\\((?:[^()]|"[^"]*"|'[^']*')*\\))*?)${this.nestingSuffix}`);
  }
  interpolate(e, t, r, i) {
    var p;
    let o, a, l;
    const c = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {}, u = (h) => {
      if (h.indexOf(this.formatSeparator) < 0) {
        const j = yt(t, c, h, this.options.keySeparator, this.options.ignoreJSONStructure);
        return this.alwaysFormat ? this.format(j, void 0, r, {
          ...i,
          ...t,
          interpolationkey: h
        }) : j;
      }
      const N = h.split(this.formatSeparator), H = N.shift().trim(), F = N.join(this.formatSeparator).trim();
      return this.format(yt(t, c, H, this.options.keySeparator, this.options.ignoreJSONStructure), F, r, {
        ...i,
        ...t,
        interpolationkey: H
      });
    };
    this.resetRegExp();
    const f = (i == null ? void 0 : i.missingInterpolationHandler) || this.options.missingInterpolationHandler, m = ((p = i == null ? void 0 : i.interpolation) == null ? void 0 : p.skipOnVariables) !== void 0 ? i.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
    return [{
      regex: this.regexpUnescape,
      safeValue: (h) => Pn(h)
    }, {
      regex: this.regexp,
      safeValue: (h) => this.escapeValue ? Pn(this.escape(h)) : Pn(h)
    }].forEach((h) => {
      for (l = 0; o = h.regex.exec(e); ) {
        const N = o[1].trim();
        if (a = u(N), a === void 0)
          if (typeof f == "function") {
            const F = f(e, o, i);
            a = Y(F) ? F : "";
          } else if (i && Object.prototype.hasOwnProperty.call(i, N))
            a = "";
          else if (m) {
            a = o[0];
            continue;
          } else
            this.logger.warn(`missed to pass in variable ${N} for interpolating ${e}`), a = "";
        else !Y(a) && !this.useRawValueToEscape && (a = ft(a));
        const H = h.safeValue(a);
        if (e = e.replace(o[0], H), m ? (h.regex.lastIndex += a.length, h.regex.lastIndex -= o[0].length) : h.regex.lastIndex = 0, l++, l >= this.maxReplaces)
          break;
      }
    }), e;
  }
  nest(e, t, r = {}) {
    let i, o, a;
    const l = (c, u) => {
      const f = this.nestingOptionsSeparator;
      if (c.indexOf(f) < 0) return c;
      const m = c.split(new RegExp(`${f}[ ]*{`));
      let g = `{${m[1]}`;
      c = m[0], g = this.interpolate(g, a);
      const p = g.match(/'/g), h = g.match(/"/g);
      (((p == null ? void 0 : p.length) ?? 0) % 2 === 0 && !h || h.length % 2 !== 0) && (g = g.replace(/'/g, '"'));
      try {
        a = JSON.parse(g), u && (a = {
          ...u,
          ...a
        });
      } catch (N) {
        return this.logger.warn(`failed parsing options string in nesting for key ${c}`, N), `${c}${f}${g}`;
      }
      return a.defaultValue && a.defaultValue.indexOf(this.prefix) > -1 && delete a.defaultValue, c;
    };
    for (; i = this.nestingRegexp.exec(e); ) {
      let c = [];
      a = {
        ...r
      }, a = a.replace && !Y(a.replace) ? a.replace : a, a.applyPostProcessor = !1, delete a.defaultValue;
      const u = /{.*}/.test(i[1]) ? i[1].lastIndexOf("}") + 1 : i[1].indexOf(this.formatSeparator);
      if (u !== -1 && (c = i[1].slice(u).split(this.formatSeparator).map((f) => f.trim()).filter(Boolean), i[1] = i[1].slice(0, u)), o = t(l.call(this, i[1].trim(), a), a), o && i[0] === e && !Y(o)) return o;
      Y(o) || (o = ft(o)), o || (this.logger.warn(`missed to resolve ${i[1]} for nesting ${e}`), o = ""), c.length && (o = c.reduce((f, m) => this.format(f, m, r.lng, {
        ...r,
        interpolationkey: i[1].trim()
      }), o.trim())), e = e.replace(i[0], o), this.regexp.lastIndex = 0;
    }
    return e;
  }
}
const Si = (n) => {
  let e = n.toLowerCase().trim();
  const t = {};
  if (n.indexOf("(") > -1) {
    const r = n.split("(");
    e = r[0].toLowerCase().trim();
    const i = r[1].substring(0, r[1].length - 1);
    e === "currency" && i.indexOf(":") < 0 ? t.currency || (t.currency = i.trim()) : e === "relativetime" && i.indexOf(":") < 0 ? t.range || (t.range = i.trim()) : i.split(";").forEach((a) => {
      if (a) {
        const [l, ...c] = a.split(":"), u = c.join(":").trim().replace(/^'+|'+$/g, ""), f = l.trim();
        t[f] || (t[f] = u), u === "false" && (t[f] = !1), u === "true" && (t[f] = !0), isNaN(u) || (t[f] = parseInt(u, 10));
      }
    });
  }
  return {
    formatName: e,
    formatOptions: t
  };
}, Ft = (n) => {
  const e = {};
  return (t, r, i) => {
    let o = i;
    i && i.interpolationkey && i.formatParams && i.formatParams[i.interpolationkey] && i[i.interpolationkey] && (o = {
      ...o,
      [i.interpolationkey]: void 0
    });
    const a = r + JSON.stringify(o);
    let l = e[a];
    return l || (l = n(Je(r), i), e[a] = l), l(t);
  };
}, Mi = (n) => (e, t, r) => n(Je(t), r)(e);
class Ti {
  constructor(e = {}) {
    this.logger = Ee.create("formatter"), this.options = e, this.init(e);
  }
  init(e, t = {
    interpolation: {}
  }) {
    this.formatSeparator = t.interpolation.formatSeparator || ",";
    const r = t.cacheInBuiltFormats ? Ft : Mi;
    this.formats = {
      number: r((i, o) => {
        const a = new Intl.NumberFormat(i, {
          ...o
        });
        return (l) => a.format(l);
      }),
      currency: r((i, o) => {
        const a = new Intl.NumberFormat(i, {
          ...o,
          style: "currency"
        });
        return (l) => a.format(l);
      }),
      datetime: r((i, o) => {
        const a = new Intl.DateTimeFormat(i, {
          ...o
        });
        return (l) => a.format(l);
      }),
      relativetime: r((i, o) => {
        const a = new Intl.RelativeTimeFormat(i, {
          ...o
        });
        return (l) => a.format(l, o.range || "day");
      }),
      list: r((i, o) => {
        const a = new Intl.ListFormat(i, {
          ...o
        });
        return (l) => a.format(l);
      })
    };
  }
  add(e, t) {
    this.formats[e.toLowerCase().trim()] = t;
  }
  addCached(e, t) {
    this.formats[e.toLowerCase().trim()] = Ft(t);
  }
  format(e, t, r, i = {}) {
    const o = t.split(this.formatSeparator);
    if (o.length > 1 && o[0].indexOf("(") > 1 && o[0].indexOf(")") < 0 && o.find((l) => l.indexOf(")") > -1)) {
      const l = o.findIndex((c) => c.indexOf(")") > -1);
      o[0] = [o[0], ...o.splice(1, l)].join(this.formatSeparator);
    }
    return o.reduce((l, c) => {
      var m;
      const {
        formatName: u,
        formatOptions: f
      } = Si(c);
      if (this.formats[u]) {
        let g = l;
        try {
          const p = ((m = i == null ? void 0 : i.formatParams) == null ? void 0 : m[i.interpolationkey]) || {}, h = p.locale || p.lng || i.locale || i.lng || r;
          g = this.formats[u](l, h, {
            ...f,
            ...i,
            ...p
          });
        } catch (p) {
          this.logger.warn(p);
        }
        return g;
      } else
        this.logger.warn(`there was no format function for ${u}`);
      return l;
    }, e);
  }
}
const Ui = (n, e) => {
  n.pending[e] !== void 0 && (delete n.pending[e], n.pendingCount--);
};
class Li extends gn {
  constructor(e, t, r, i = {}) {
    var o, a;
    super(), this.backend = e, this.store = t, this.services = r, this.languageUtils = r.languageUtils, this.options = i, this.logger = Ee.create("backendConnector"), this.waitingReads = [], this.maxParallelReads = i.maxParallelReads || 10, this.readingCalls = 0, this.maxRetries = i.maxRetries >= 0 ? i.maxRetries : 5, this.retryTimeout = i.retryTimeout >= 1 ? i.retryTimeout : 350, this.state = {}, this.queue = [], (a = (o = this.backend) == null ? void 0 : o.init) == null || a.call(o, r, i.backend, i);
  }
  queueLoad(e, t, r, i) {
    const o = {}, a = {}, l = {}, c = {};
    return e.forEach((u) => {
      let f = !0;
      t.forEach((m) => {
        const g = `${u}|${m}`;
        !r.reload && this.store.hasResourceBundle(u, m) ? this.state[g] = 2 : this.state[g] < 0 || (this.state[g] === 1 ? a[g] === void 0 && (a[g] = !0) : (this.state[g] = 1, f = !1, a[g] === void 0 && (a[g] = !0), o[g] === void 0 && (o[g] = !0), c[m] === void 0 && (c[m] = !0)));
      }), f || (l[u] = !0);
    }), (Object.keys(o).length || Object.keys(a).length) && this.queue.push({
      pending: a,
      pendingCount: Object.keys(a).length,
      loaded: {},
      errors: [],
      callback: i
    }), {
      toLoad: Object.keys(o),
      pending: Object.keys(a),
      toLoadLanguages: Object.keys(l),
      toLoadNamespaces: Object.keys(c)
    };
  }
  loaded(e, t, r) {
    const i = e.split("|"), o = i[0], a = i[1];
    t && this.emit("failedLoading", o, a, t), !t && r && this.store.addResourceBundle(o, a, r, void 0, void 0, {
      skipCopy: !0
    }), this.state[e] = t ? -1 : 2, t && r && (this.state[e] = 0);
    const l = {};
    this.queue.forEach((c) => {
      bi(c.loaded, [o], a), Ui(c, e), t && c.errors.push(t), c.pendingCount === 0 && !c.done && (Object.keys(c.loaded).forEach((u) => {
        l[u] || (l[u] = {});
        const f = c.loaded[u];
        f.length && f.forEach((m) => {
          l[u][m] === void 0 && (l[u][m] = !0);
        });
      }), c.done = !0, c.errors.length ? c.callback(c.errors) : c.callback());
    }), this.emit("loaded", l), this.queue = this.queue.filter((c) => !c.done);
  }
  read(e, t, r, i = 0, o = this.retryTimeout, a) {
    if (!e.length) return a(null, {});
    if (this.readingCalls >= this.maxParallelReads) {
      this.waitingReads.push({
        lng: e,
        ns: t,
        fcName: r,
        tried: i,
        wait: o,
        callback: a
      });
      return;
    }
    this.readingCalls++;
    const l = (u, f) => {
      if (this.readingCalls--, this.waitingReads.length > 0) {
        const m = this.waitingReads.shift();
        this.read(m.lng, m.ns, m.fcName, m.tried, m.wait, m.callback);
      }
      if (u && f && i < this.maxRetries) {
        setTimeout(() => {
          this.read.call(this, e, t, r, i + 1, o * 2, a);
        }, o);
        return;
      }
      a(u, f);
    }, c = this.backend[r].bind(this.backend);
    if (c.length === 2) {
      try {
        const u = c(e, t);
        u && typeof u.then == "function" ? u.then((f) => l(null, f)).catch(l) : l(null, u);
      } catch (u) {
        l(u);
      }
      return;
    }
    return c(e, t, l);
  }
  prepareLoading(e, t, r = {}, i) {
    if (!this.backend)
      return this.logger.warn("No backend was added via i18next.use. Will not load resources."), i && i();
    Y(e) && (e = this.languageUtils.toResolveHierarchy(e)), Y(t) && (t = [t]);
    const o = this.queueLoad(e, t, r, i);
    if (!o.toLoad.length)
      return o.pending.length || i(), null;
    o.toLoad.forEach((a) => {
      this.loadOne(a);
    });
  }
  load(e, t, r) {
    this.prepareLoading(e, t, {}, r);
  }
  reload(e, t, r) {
    this.prepareLoading(e, t, {
      reload: !0
    }, r);
  }
  loadOne(e, t = "") {
    const r = e.split("|"), i = r[0], o = r[1];
    this.read(i, o, "read", void 0, void 0, (a, l) => {
      a && this.logger.warn(`${t}loading namespace ${o} for language ${i} failed`, a), !a && l && this.logger.log(`${t}loaded namespace ${o} for language ${i}`, l), this.loaded(e, a, l);
    });
  }
  saveMissing(e, t, r, i, o, a = {}, l = () => {
  }) {
    var c, u, f, m, g;
    if ((u = (c = this.services) == null ? void 0 : c.utils) != null && u.hasLoadedNamespace && !((m = (f = this.services) == null ? void 0 : f.utils) != null && m.hasLoadedNamespace(t))) {
      this.logger.warn(`did not save key "${r}" as the namespace "${t}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
      return;
    }
    if (!(r == null || r === "")) {
      if ((g = this.backend) != null && g.create) {
        const p = {
          ...a,
          isUpdate: o
        }, h = this.backend.create.bind(this.backend);
        if (h.length < 6)
          try {
            let N;
            h.length === 5 ? N = h(e, t, r, i, p) : N = h(e, t, r, i), N && typeof N.then == "function" ? N.then((H) => l(null, H)).catch(l) : l(null, N);
          } catch (N) {
            l(N);
          }
        else
          h(e, t, r, i, l, p);
      }
      !e || !e[0] || this.store.addResource(e[0], t, r, i);
    }
  }
}
const Ct = () => ({
  debug: !1,
  initAsync: !0,
  ns: ["translation"],
  defaultNS: ["translation"],
  fallbackLng: ["dev"],
  fallbackNS: !1,
  supportedLngs: !1,
  nonExplicitSupportedLngs: !1,
  load: "all",
  preload: !1,
  simplifyPluralSuffix: !0,
  keySeparator: ".",
  nsSeparator: ":",
  pluralSeparator: "_",
  contextSeparator: "_",
  partialBundledLanguages: !1,
  saveMissing: !1,
  updateMissing: !1,
  saveMissingTo: "fallback",
  saveMissingPlurals: !0,
  missingKeyHandler: !1,
  missingInterpolationHandler: !1,
  postProcess: !1,
  postProcessPassResolved: !1,
  returnNull: !1,
  returnEmptyString: !0,
  returnObjects: !1,
  joinArrays: !1,
  returnedObjectHandler: !1,
  parseMissingKeyHandler: !1,
  appendNamespaceToMissingKey: !1,
  appendNamespaceToCIMode: !1,
  overloadTranslationOptionHandler: (n) => {
    let e = {};
    if (typeof n[1] == "object" && (e = n[1]), Y(n[1]) && (e.defaultValue = n[1]), Y(n[2]) && (e.tDescription = n[2]), typeof n[2] == "object" || typeof n[3] == "object") {
      const t = n[3] || n[2];
      Object.keys(t).forEach((r) => {
        e[r] = t[r];
      });
    }
    return e;
  },
  interpolation: {
    escapeValue: !0,
    format: (n) => n,
    prefix: "{{",
    suffix: "}}",
    formatSeparator: ",",
    unescapePrefix: "-",
    nestingPrefix: "$t(",
    nestingSuffix: ")",
    nestingOptionsSeparator: ",",
    maxReplaces: 1e3,
    skipOnVariables: !0
  },
  cacheInBuiltFormats: !0
}), Dt = (n) => {
  var e, t;
  return Y(n.ns) && (n.ns = [n.ns]), Y(n.fallbackLng) && (n.fallbackLng = [n.fallbackLng]), Y(n.fallbackNS) && (n.fallbackNS = [n.fallbackNS]), ((t = (e = n.supportedLngs) == null ? void 0 : e.indexOf) == null ? void 0 : t.call(e, "cimode")) < 0 && (n.supportedLngs = n.supportedLngs.concat(["cimode"])), typeof n.initImmediate == "boolean" && (n.initAsync = n.initImmediate), n;
}, tn = () => {
}, Hi = (n) => {
  Object.getOwnPropertyNames(Object.getPrototypeOf(n)).forEach((t) => {
    typeof n[t] == "function" && (n[t] = n[t].bind(n));
  });
};
class Xe extends gn {
  constructor(e = {}, t) {
    if (super(), this.options = Dt(e), this.services = {}, this.logger = Ee, this.modules = {
      external: []
    }, Hi(this), t && !this.isInitialized && !e.isClone) {
      if (!this.options.initAsync)
        return this.init(e, t), this;
      setTimeout(() => {
        this.init(e, t);
      }, 0);
    }
  }
  init(e = {}, t) {
    this.isInitializing = !0, typeof e == "function" && (t = e, e = {}), e.defaultNS == null && e.ns && (Y(e.ns) ? e.defaultNS = e.ns : e.ns.indexOf("translation") < 0 && (e.defaultNS = e.ns[0]));
    const r = Ct();
    this.options = {
      ...r,
      ...this.options,
      ...Dt(e)
    }, this.options.interpolation = {
      ...r.interpolation,
      ...this.options.interpolation
    }, e.keySeparator !== void 0 && (this.options.userDefinedKeySeparator = e.keySeparator), e.nsSeparator !== void 0 && (this.options.userDefinedNsSeparator = e.nsSeparator);
    const i = (u) => u ? typeof u == "function" ? new u() : u : null;
    if (!this.options.isClone) {
      this.modules.logger ? Ee.init(i(this.modules.logger), this.options) : Ee.init(null, this.options);
      let u;
      this.modules.formatter ? u = this.modules.formatter : u = Ti;
      const f = new Nt(this.options);
      this.store = new gt(this.options.resources, this.options);
      const m = this.services;
      m.logger = Ee, m.resourceStore = this.store, m.languageUtils = f, m.pluralResolver = new Ei(f, {
        prepend: this.options.pluralSeparator,
        simplifyPluralSuffix: this.options.simplifyPluralSuffix
      }), this.options.interpolation.format && this.options.interpolation.format !== r.interpolation.format && this.logger.deprecate("init: you are still using the legacy format function, please use the new approach: https://www.i18next.com/translation-function/formatting"), u && (!this.options.interpolation.format || this.options.interpolation.format === r.interpolation.format) && (m.formatter = i(u), m.formatter.init && m.formatter.init(m, this.options), this.options.interpolation.format = m.formatter.format.bind(m.formatter)), m.interpolator = new ji(this.options), m.utils = {
        hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
      }, m.backendConnector = new Li(i(this.modules.backend), m.resourceStore, m, this.options), m.backendConnector.on("*", (p, ...h) => {
        this.emit(p, ...h);
      }), this.modules.languageDetector && (m.languageDetector = i(this.modules.languageDetector), m.languageDetector.init && m.languageDetector.init(m, this.options.detection, this.options)), this.modules.i18nFormat && (m.i18nFormat = i(this.modules.i18nFormat), m.i18nFormat.init && m.i18nFormat.init(this)), this.translator = new fn(this.services, this.options), this.translator.on("*", (p, ...h) => {
        this.emit(p, ...h);
      }), this.modules.external.forEach((p) => {
        p.init && p.init(this);
      });
    }
    if (this.format = this.options.interpolation.format, t || (t = tn), this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
      const u = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
      u.length > 0 && u[0] !== "dev" && (this.options.lng = u[0]);
    }
    !this.services.languageDetector && !this.options.lng && this.logger.warn("init: no languageDetector is used and no lng is defined"), ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"].forEach((u) => {
      this[u] = (...f) => this.store[u](...f);
    }), ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"].forEach((u) => {
      this[u] = (...f) => (this.store[u](...f), this);
    });
    const l = Ye(), c = () => {
      const u = (f, m) => {
        this.isInitializing = !1, this.isInitialized && !this.initializedStoreOnce && this.logger.warn("init: i18next is already initialized. You should call init just once!"), this.isInitialized = !0, this.options.isClone || this.logger.log("initialized", this.options), this.emit("initialized", this.options), l.resolve(m), t(f, m);
      };
      if (this.languages && !this.isInitialized) return u(null, this.t.bind(this));
      this.changeLanguage(this.options.lng, u);
    };
    return this.options.resources || !this.options.initAsync ? c() : setTimeout(c, 0), l;
  }
  loadResources(e, t = tn) {
    var o, a;
    let r = t;
    const i = Y(e) ? e : this.language;
    if (typeof e == "function" && (r = e), !this.options.resources || this.options.partialBundledLanguages) {
      if ((i == null ? void 0 : i.toLowerCase()) === "cimode" && (!this.options.preload || this.options.preload.length === 0)) return r();
      const l = [], c = (u) => {
        if (!u || u === "cimode") return;
        this.services.languageUtils.toResolveHierarchy(u).forEach((m) => {
          m !== "cimode" && l.indexOf(m) < 0 && l.push(m);
        });
      };
      i ? c(i) : this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach((f) => c(f)), (a = (o = this.options.preload) == null ? void 0 : o.forEach) == null || a.call(o, (u) => c(u)), this.services.backendConnector.load(l, this.options.ns, (u) => {
        !u && !this.resolvedLanguage && this.language && this.setResolvedLanguage(this.language), r(u);
      });
    } else
      r(null);
  }
  reloadResources(e, t, r) {
    const i = Ye();
    return typeof e == "function" && (r = e, e = void 0), typeof t == "function" && (r = t, t = void 0), e || (e = this.languages), t || (t = this.options.ns), r || (r = tn), this.services.backendConnector.reload(e, t, (o) => {
      i.resolve(), r(o);
    }), i;
  }
  use(e) {
    if (!e) throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
    if (!e.type) throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
    return e.type === "backend" && (this.modules.backend = e), (e.type === "logger" || e.log && e.warn && e.error) && (this.modules.logger = e), e.type === "languageDetector" && (this.modules.languageDetector = e), e.type === "i18nFormat" && (this.modules.i18nFormat = e), e.type === "postProcessor" && sr.addPostProcessor(e), e.type === "formatter" && (this.modules.formatter = e), e.type === "3rdParty" && this.modules.external.push(e), this;
  }
  setResolvedLanguage(e) {
    if (!(!e || !this.languages) && !(["cimode", "dev"].indexOf(e) > -1)) {
      for (let t = 0; t < this.languages.length; t++) {
        const r = this.languages[t];
        if (!(["cimode", "dev"].indexOf(r) > -1) && this.store.hasLanguageSomeTranslations(r)) {
          this.resolvedLanguage = r;
          break;
        }
      }
      !this.resolvedLanguage && this.languages.indexOf(e) < 0 && this.store.hasLanguageSomeTranslations(e) && (this.resolvedLanguage = e, this.languages.unshift(e));
    }
  }
  changeLanguage(e, t) {
    this.isLanguageChangingTo = e;
    const r = Ye();
    this.emit("languageChanging", e);
    const i = (l) => {
      this.language = l, this.languages = this.services.languageUtils.toResolveHierarchy(l), this.resolvedLanguage = void 0, this.setResolvedLanguage(l);
    }, o = (l, c) => {
      c ? this.isLanguageChangingTo === e && (i(c), this.translator.changeLanguage(c), this.isLanguageChangingTo = void 0, this.emit("languageChanged", c), this.logger.log("languageChanged", c)) : this.isLanguageChangingTo = void 0, r.resolve((...u) => this.t(...u)), t && t(l, (...u) => this.t(...u));
    }, a = (l) => {
      var f, m;
      !e && !l && this.services.languageDetector && (l = []);
      const c = Y(l) ? l : l && l[0], u = this.store.hasLanguageSomeTranslations(c) ? c : this.services.languageUtils.getBestMatchFromCodes(Y(l) ? [l] : l);
      u && (this.language || i(u), this.translator.language || this.translator.changeLanguage(u), (m = (f = this.services.languageDetector) == null ? void 0 : f.cacheUserLanguage) == null || m.call(f, u)), this.loadResources(u, (g) => {
        o(g, u);
      });
    };
    return !e && this.services.languageDetector && !this.services.languageDetector.async ? a(this.services.languageDetector.detect()) : !e && this.services.languageDetector && this.services.languageDetector.async ? this.services.languageDetector.detect.length === 0 ? this.services.languageDetector.detect().then(a) : this.services.languageDetector.detect(a) : a(e), r;
  }
  getFixedT(e, t, r) {
    const i = (o, a, ...l) => {
      let c;
      typeof a != "object" ? c = this.options.overloadTranslationOptionHandler([o, a].concat(l)) : c = {
        ...a
      }, c.lng = c.lng || i.lng, c.lngs = c.lngs || i.lngs, c.ns = c.ns || i.ns, c.keyPrefix !== "" && (c.keyPrefix = c.keyPrefix || r || i.keyPrefix);
      const u = this.options.keySeparator || ".";
      let f;
      return c.keyPrefix && Array.isArray(o) ? f = o.map((m) => (typeof m == "function" && (m = kn(m, {
        ...this.options,
        ...a
      })), `${c.keyPrefix}${u}${m}`)) : (typeof o == "function" && (o = kn(o, {
        ...this.options,
        ...a
      })), f = c.keyPrefix ? `${c.keyPrefix}${u}${o}` : o), this.t(f, c);
    };
    return Y(e) ? i.lng = e : i.lngs = e, i.ns = t, i.keyPrefix = r, i;
  }
  t(...e) {
    var t;
    return (t = this.translator) == null ? void 0 : t.translate(...e);
  }
  exists(...e) {
    var t;
    return (t = this.translator) == null ? void 0 : t.exists(...e);
  }
  setDefaultNamespace(e) {
    this.options.defaultNS = e;
  }
  hasLoadedNamespace(e, t = {}) {
    if (!this.isInitialized)
      return this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages), !1;
    if (!this.languages || !this.languages.length)
      return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages), !1;
    const r = t.lng || this.resolvedLanguage || this.languages[0], i = this.options ? this.options.fallbackLng : !1, o = this.languages[this.languages.length - 1];
    if (r.toLowerCase() === "cimode") return !0;
    const a = (l, c) => {
      const u = this.services.backendConnector.state[`${l}|${c}`];
      return u === -1 || u === 0 || u === 2;
    };
    if (t.precheck) {
      const l = t.precheck(this, a);
      if (l !== void 0) return l;
    }
    return !!(this.hasResourceBundle(r, e) || !this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages || a(r, e) && (!i || a(o, e)));
  }
  loadNamespaces(e, t) {
    const r = Ye();
    return this.options.ns ? (Y(e) && (e = [e]), e.forEach((i) => {
      this.options.ns.indexOf(i) < 0 && this.options.ns.push(i);
    }), this.loadResources((i) => {
      r.resolve(), t && t(i);
    }), r) : (t && t(), Promise.resolve());
  }
  loadLanguages(e, t) {
    const r = Ye();
    Y(e) && (e = [e]);
    const i = this.options.preload || [], o = e.filter((a) => i.indexOf(a) < 0 && this.services.languageUtils.isSupportedCode(a));
    return o.length ? (this.options.preload = i.concat(o), this.loadResources((a) => {
      r.resolve(), t && t(a);
    }), r) : (t && t(), Promise.resolve());
  }
  dir(e) {
    var i, o;
    if (e || (e = this.resolvedLanguage || (((i = this.languages) == null ? void 0 : i.length) > 0 ? this.languages[0] : this.language)), !e) return "rtl";
    try {
      const a = new Intl.Locale(e);
      if (a && a.getTextInfo) {
        const l = a.getTextInfo();
        if (l && l.direction) return l.direction;
      }
    } catch {
    }
    const t = ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"], r = ((o = this.services) == null ? void 0 : o.languageUtils) || new Nt(Ct());
    return e.toLowerCase().indexOf("-latn") > 1 ? "ltr" : t.indexOf(r.getLanguagePartFromCode(e)) > -1 || e.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr";
  }
  static createInstance(e = {}, t) {
    return new Xe(e, t);
  }
  cloneInstance(e = {}, t = tn) {
    const r = e.forkResourceStore;
    r && delete e.forkResourceStore;
    const i = {
      ...this.options,
      ...e,
      isClone: !0
    }, o = new Xe(i);
    if ((e.debug !== void 0 || e.prefix !== void 0) && (o.logger = o.logger.clone(e)), ["store", "services", "language"].forEach((l) => {
      o[l] = this[l];
    }), o.services = {
      ...this.services
    }, o.services.utils = {
      hasLoadedNamespace: o.hasLoadedNamespace.bind(o)
    }, r) {
      const l = Object.keys(this.store.data).reduce((c, u) => (c[u] = {
        ...this.store.data[u]
      }, c[u] = Object.keys(c[u]).reduce((f, m) => (f[m] = {
        ...c[u][m]
      }, f), c[u]), c), {});
      o.store = new gt(l, i), o.services.resourceStore = o.store;
    }
    return o.translator = new fn(o.services, i), o.translator.on("*", (l, ...c) => {
      o.emit(l, ...c);
    }), o.init(i, t), o.translator.options = i, o.translator.backendConnector.services.utils = {
      hasLoadedNamespace: o.hasLoadedNamespace.bind(o)
    }, o;
  }
  toJSON() {
    return {
      options: this.options,
      store: this.store,
      language: this.language,
      languages: this.languages,
      resolvedLanguage: this.resolvedLanguage
    };
  }
}
const fe = Xe.createInstance();
fe.createInstance = Xe.createInstance;
fe.createInstance;
fe.dir;
fe.init;
fe.loadResources;
fe.reloadResources;
fe.use;
fe.changeLanguage;
fe.getFixedT;
fe.t;
fe.exists;
fe.setDefaultNamespace;
fe.hasLoadedNamespace;
fe.loadNamespaces;
fe.loadLanguages;
const Vi = "مجلد جديد", Ai = "رفع", Ri = "لصق", ki = "تغيير العرض", zi = "تحديث", Oi = "قص", Ii = "نسخ", Gi = "إعادة تسمية", _i = "تنزيل", Bi = "تم تحديد العنصر", Wi = "تم تحديد {{count}} عناصر", Yi = "إلغاء", Ki = "مسح التحديد", qi = "تم", Ji = "إذا قمت بتغيير امتداد الملف، قد يصبح الملف غير قابل للاستخدام. هل أنت متأكد من أنك تريد تغييره؟", Xi = "لا", Zi = "نعم", Qi = "إغلاق", eo = "نوع الملف غير مسموح به.", no = "الملف موجود بالفعل.", to = "أقصى حجم رفع هو", ro = "اسحب الملفات للرفع", io = "اختيار ملف", oo = "فشل الرفع.", ao = "جاري الرفع", so = "تم الرفع", lo = "إزالة", co = "إلغاء الرفع", uo = "معاينة", fo = "آسف! المعاينة غير متاحة لهذا الملف.", mo = "الصفحة الرئيسية", po = "عرض المزيد من المجلدات", ho = "نقل إلى", go = "هذا المجلد فارغ.", vo = "تحديد الكل", bo = "عرض", No = "شبكة", xo = "قائمة", $o = "فتح", yo = "لا شيء هنا بعد", Fo = "الاسم", Co = "تاريخ التعديل", Do = "الحجم", wo = 'هل أنت متأكد أنك تريد حذف "{{fileName}}"؟', Po = "هل أنت متأكد أنك تريد حذف هذه العناصر {{count}}؟", Eo = "{{percent}}% تم", jo = "تم الإلغاء", So = 'لا يمكن أن يحتوي اسم الملف على أي من الحروف التالية: \\ / : * ? " < > |', Mo = 'هذا الموقع يحتوي بالفعل على مجلد باسم "{{renameFile}}".', To = "طي لوحة التنقل", Uo = "توسيع لوحة التنقل", Lo = {
  newFolder: Vi,
  upload: Ai,
  paste: Ri,
  changeView: ki,
  refresh: zi,
  cut: Oi,
  copy: Ii,
  rename: Gi,
  download: _i,
  delete: "حذف",
  itemSelected: Bi,
  itemsSelected: Wi,
  cancel: Yi,
  clearSelection: Ki,
  completed: qi,
  fileNameChangeWarning: Ji,
  no: Xi,
  yes: Zi,
  close: Qi,
  fileTypeNotAllowed: eo,
  fileAlreadyExist: no,
  maxUploadSize: to,
  dragFileToUpload: ro,
  chooseFile: io,
  uploadFail: oo,
  uploading: ao,
  uploaded: so,
  remove: lo,
  abortUpload: co,
  preview: uo,
  previewUnavailable: fo,
  home: mo,
  showMoreFolder: po,
  moveTo: ho,
  folderEmpty: go,
  selectAll: vo,
  view: bo,
  grid: No,
  list: xo,
  open: $o,
  nothingHereYet: yo,
  name: Fo,
  modified: Co,
  size: Do,
  deleteItemConfirm: wo,
  deleteItemsConfirm: Po,
  percentDone: Eo,
  canceled: jo,
  invalidFileName: So,
  folderExists: Mo,
  collapseNavigationPane: To,
  expandNavigationPane: Uo
}, Ho = "Neuer Ordner", Vo = "Hochladen", Ao = "Einfügen", Ro = "Ansicht ändern", ko = "Aktualisieren", zo = "Ausschneiden", Oo = "Kopieren", Io = "Umbenennen", Go = "Herunterladen", _o = "Element ausgewählt", Bo = "Elemente ausgewählt", Wo = "Abbrechen", Yo = "Auswahl aufheben", Ko = "Abgeschlossen", qo = "Wenn Sie die Dateierweiterung ändern, kann die Datei unbrauchbar werden. Möchten Sie das wirklich tun?", Jo = "Nein", Xo = "Ja", Zo = "Schließen", Qo = "Dateityp nicht erlaubt.", ea = "Datei existiert bereits.", na = "Maximale Uploadgröße ist", ta = "Dateien zum Hochladen ziehen", ra = "Datei auswählen", ia = "Hochladen fehlgeschlagen.", oa = "Wird hochgeladen", aa = "Hochgeladen", sa = "Entfernen", la = "Upload abbrechen", ca = "Vorschau", ua = "Leider ist keine Vorschau für diese Datei verfügbar.", da = "Startseite", fa = "Mehr Ordner anzeigen", ma = "Verschieben nach", pa = "Dieser Ordner ist leer.", ha = "Alle auswählen", ga = "Ansicht", va = "Raster", ba = "Liste", Na = "Öffnen", xa = "Hier ist noch nichts", $a = "Name", ya = "Geändert", Fa = "Größe", Ca = 'Möchten Sie "{{fileName}}" wirklich löschen?', Da = "Möchten Sie diese {{count}} Elemente wirklich löschen?", wa = "{{percent}}% erledigt", Pa = "Abgebrochen", Ea = 'Ein Dateiname darf keines der folgenden Zeichen enthalten: \\ / : * ? " < > |', ja = 'In diesem Zielordner gibt es bereits einen Ordner namens "{{renameFile}}".', Sa = "Navigationsbereich einklappen", Ma = "Navigationsbereich erweitern", Ta = {
  newFolder: Ho,
  upload: Vo,
  paste: Ao,
  changeView: Ro,
  refresh: ko,
  cut: zo,
  copy: Oo,
  rename: Io,
  download: Go,
  delete: "Löschen",
  itemSelected: _o,
  itemsSelected: Bo,
  cancel: Wo,
  clearSelection: Yo,
  completed: Ko,
  fileNameChangeWarning: qo,
  no: Jo,
  yes: Xo,
  close: Zo,
  fileTypeNotAllowed: Qo,
  fileAlreadyExist: ea,
  maxUploadSize: na,
  dragFileToUpload: ta,
  chooseFile: ra,
  uploadFail: ia,
  uploading: oa,
  uploaded: aa,
  remove: sa,
  abortUpload: la,
  preview: ca,
  previewUnavailable: ua,
  home: da,
  showMoreFolder: fa,
  moveTo: ma,
  folderEmpty: pa,
  selectAll: ha,
  view: ga,
  grid: va,
  list: ba,
  open: Na,
  nothingHereYet: xa,
  name: $a,
  modified: ya,
  size: Fa,
  deleteItemConfirm: Ca,
  deleteItemsConfirm: Da,
  percentDone: wa,
  canceled: Pa,
  invalidFileName: Ea,
  folderExists: ja,
  collapseNavigationPane: Sa,
  expandNavigationPane: Ma
}, Ua = "New Folder", La = "Upload", Ha = "Paste", Va = "Change View", Aa = "Refresh", Ra = "Cut", ka = "Copy", za = "Rename", Oa = "Download", Ia = "item selected", Ga = "items selected", _a = "Cancel", Ba = "Clear Selection", Wa = "Completed", Ya = "If you change a file name extension, the file might become unusable. Are you sure you want to change it?", Ka = "No", qa = "Yes", Ja = "Close", Xa = "File type is not allowed.", Za = "File already exists.", Qa = "Maximum upload size is", es = "Drag files to upload", ns = "Choose File", ts = "Upload failed.", rs = "Uploading", is = "Uploaded", os = "Remove", as = "Abort Upload", ss = "Preview", ls = "Sorry! Preview is not available for this file.", cs = "Home", us = "Show more folders", ds = "Move to", fs = "This folder is empty.", ms = "Select all", ps = "View", hs = "Grid", gs = "List", vs = "Open", bs = "Nothing here yet", Ns = "Name", xs = "Modified", $s = "Size", ys = 'Are you sure you want to delete "{{fileName}}"?', Fs = "Are you sure you want to delete these {{count}} items?", Cs = "{{percent}}% done", Ds = "Canceled", ws = `A file name can't contain any of the following characters: \\ / : * ? " < > |`, Ps = 'This destination already contains a folder named "{{renameFile}}".', Es = "Collapse Navigation Pane", js = "Expand Navigation Pane", Ss = {
  newFolder: Ua,
  upload: La,
  paste: Ha,
  changeView: Va,
  refresh: Aa,
  cut: Ra,
  copy: ka,
  rename: za,
  download: Oa,
  delete: "Delete",
  itemSelected: Ia,
  itemsSelected: Ga,
  cancel: _a,
  clearSelection: Ba,
  completed: Wa,
  fileNameChangeWarning: Ya,
  no: Ka,
  yes: qa,
  close: Ja,
  fileTypeNotAllowed: Xa,
  fileAlreadyExist: Za,
  maxUploadSize: Qa,
  dragFileToUpload: es,
  chooseFile: ns,
  uploadFail: ts,
  uploading: rs,
  uploaded: is,
  remove: os,
  abortUpload: as,
  preview: ss,
  previewUnavailable: ls,
  home: cs,
  showMoreFolder: us,
  moveTo: ds,
  folderEmpty: fs,
  selectAll: ms,
  view: ps,
  grid: hs,
  list: gs,
  open: vs,
  nothingHereYet: bs,
  name: Ns,
  modified: xs,
  size: $s,
  deleteItemConfirm: ys,
  deleteItemsConfirm: Fs,
  percentDone: Cs,
  canceled: Ds,
  invalidFileName: ws,
  folderExists: Ps,
  collapseNavigationPane: Es,
  expandNavigationPane: js
}, Ms = "Nueva carpeta", Ts = "Subir", Us = "Pegar", Ls = "Cambiar vista", Hs = "Actualizar", Vs = "Cortar", As = "Copiar", Rs = "Renombrar", ks = "Descargar", zs = "elemento seleccionado", Os = "elementos seleccionados", Is = "Cancelar", Gs = "Borrar selección", _s = "Completado", Bs = "Si cambia la extensión del archivo, es posible que no funcione. ¿Está seguro de que desea cambiarla?", Ws = "No", Ys = "Sí", Ks = "Cerrar", qs = "Tipo de archivo no permitido.", Js = "El archivo ya existe.", Xs = "El tamaño máximo de subida es", Zs = "Arrastre archivos para subir", Qs = "Elegir archivo", el = "Error al subir.", nl = "Subiendo", tl = "Subido", rl = "Eliminar", il = "Cancelar subida", ol = "Vista previa", al = "¡Lo sentimos! No hay vista previa disponible para este archivo.", sl = "Inicio", ll = "Mostrar más carpetas", cl = "Mover a", ul = "Esta carpeta está vacía.", dl = "Seleccionar todo", fl = "Vista", ml = "Cuadrícula", pl = "Lista", hl = "Abrir", gl = "Nada por aquí aún", vl = "Nombre", bl = "Modificado", Nl = "Tamaño", xl = '¿Está seguro de que desea eliminar "{{fileName}}"?', $l = "¿Está seguro de que desea eliminar estos {{count}} elementos?", yl = "{{percent}}% completado", Fl = "Cancelado", Cl = 'Un nombre de archivo no puede contener ninguno de los siguientes caracteres: \\ / : * ? " < > |', Dl = 'Ya existe una carpeta llamada "{{renameFile}}" en este destino.', wl = "Contraer panel de navegación", Pl = "Expandir panel de navegación", El = {
  newFolder: Ms,
  upload: Ts,
  paste: Us,
  changeView: Ls,
  refresh: Hs,
  cut: Vs,
  copy: As,
  rename: Rs,
  download: ks,
  delete: "Eliminar",
  itemSelected: zs,
  itemsSelected: Os,
  cancel: Is,
  clearSelection: Gs,
  completed: _s,
  fileNameChangeWarning: Bs,
  no: Ws,
  yes: Ys,
  close: Ks,
  fileTypeNotAllowed: qs,
  fileAlreadyExist: Js,
  maxUploadSize: Xs,
  dragFileToUpload: Zs,
  chooseFile: Qs,
  uploadFail: el,
  uploading: nl,
  uploaded: tl,
  remove: rl,
  abortUpload: il,
  preview: ol,
  previewUnavailable: al,
  home: sl,
  showMoreFolder: ll,
  moveTo: cl,
  folderEmpty: ul,
  selectAll: dl,
  view: fl,
  grid: ml,
  list: pl,
  open: hl,
  nothingHereYet: gl,
  name: vl,
  modified: bl,
  size: Nl,
  deleteItemConfirm: xl,
  deleteItemsConfirm: $l,
  percentDone: yl,
  canceled: Fl,
  invalidFileName: Cl,
  folderExists: Dl,
  collapseNavigationPane: wl,
  expandNavigationPane: Pl
}, jl = "Nouveau dossier", Sl = "Téléverser", Ml = "Coller", Tl = "Changer la vue", Ul = "Rafraîchir", Ll = "Couper", Hl = "Copier", Vl = "Renommer", Al = "Télécharger", Rl = "élément sélectionné", kl = "éléments sélectionnés", zl = "Annuler", Ol = "Effacer la sélection", Il = "Terminé", Gl = "Si vous modifiez l'extension d'un fichier, celui-ci pourrait devenir inutilisable. Êtes-vous sûr de vouloir le modifier ?", _l = "Non", Bl = "Oui", Wl = "Fermer", Yl = "Type de fichier non autorisé.", Kl = "Le fichier existe déjà.", ql = "La taille maximale de téléversement est", Jl = "Glissez les fichiers à téléverser", Xl = "Choisir un fichier", Zl = "Échec du téléversement.", Ql = "Téléversement en cours", ec = "Téléversé", nc = "Supprimer", tc = "Annuler le téléversement", rc = "Aperçu", ic = "Désolé ! L'aperçu n'est pas disponible pour ce fichier.", oc = "Accueil", ac = "Afficher plus de dossiers", sc = "Déplacer vers", lc = "Ce dossier est vide.", cc = "Tout sélectionner", uc = "Vue", dc = "Grille", fc = "Liste", mc = "Ouvrir", pc = "Rien ici pour le moment", hc = "Nom", gc = "Modifié", vc = "Taille", bc = 'Êtes-vous sûr de vouloir supprimer "{{fileName}}" ?', Nc = "Êtes-vous sûr de vouloir supprimer ces {{count}} éléments ?", xc = "{{percent}}% terminé", $c = "Annulé", yc = 'Un nom de fichier ne peut pas contenir les caractères suivants : \\ / : * ? " < > |', Fc = 'Cette destination contient déjà un dossier nommé "{{renameFile}}".', Cc = "Réduire le panneau de navigation", Dc = "Développer le panneau de navigation", wc = {
  newFolder: jl,
  upload: Sl,
  paste: Ml,
  changeView: Tl,
  refresh: Ul,
  cut: Ll,
  copy: Hl,
  rename: Vl,
  download: Al,
  delete: "Supprimer",
  itemSelected: Rl,
  itemsSelected: kl,
  cancel: zl,
  clearSelection: Ol,
  completed: Il,
  fileNameChangeWarning: Gl,
  no: _l,
  yes: Bl,
  close: Wl,
  fileTypeNotAllowed: Yl,
  fileAlreadyExist: Kl,
  maxUploadSize: ql,
  dragFileToUpload: Jl,
  chooseFile: Xl,
  uploadFail: Zl,
  uploading: Ql,
  uploaded: ec,
  remove: nc,
  abortUpload: tc,
  preview: rc,
  previewUnavailable: ic,
  home: oc,
  showMoreFolder: ac,
  moveTo: sc,
  folderEmpty: lc,
  selectAll: cc,
  view: uc,
  grid: dc,
  list: fc,
  open: mc,
  nothingHereYet: pc,
  name: hc,
  modified: gc,
  size: vc,
  deleteItemConfirm: bc,
  deleteItemsConfirm: Nc,
  percentDone: xc,
  canceled: $c,
  invalidFileName: yc,
  folderExists: Fc,
  collapseNavigationPane: Cc,
  expandNavigationPane: Dc
}, Pc = "תיקייה חדשה", Ec = "העלה", jc = "הדבק", Sc = "שנה תצוגה", Mc = "רענן", Tc = "גזור", Uc = "העתק", Lc = "שנה שם", Hc = "הורד", Vc = "פריט נבחר", Ac = "פריטים נבחרו", Rc = "בטל", kc = "נקה בחירה", zc = "הושלם", Oc = "אם תשנה את סיומת הקובץ, הקובץ עלול להפוך לבלתי שמיש. האם אתה בטוח שברצונך לשנות זאת?", Ic = "לא", Gc = "כן", _c = "סגור", Bc = "סוג הקובץ אינו מורשה.", Wc = "הקובץ כבר קיים.", Yc = "גודל העלאה מקסימלי הוא", Kc = "גרור קבצים להעלאה", qc = "בחר קובץ", Jc = "ההעלאה נכשלה.", Xc = "מעלה...", Zc = "הועלה", Qc = "הסר", eu = "בטל העלאה", nu = "תצוגה מקדימה", tu = "מצטערים! אין תצוגה מקדימה זמינה לקובץ זה.", ru = "דף הבית", iu = "הצג תיקיות נוספות", ou = "העבר ל", au = "התיקייה ריקה.", su = "בחר הכל", lu = "תצוגה", cu = "רשת", uu = "רשימה", du = "פתח", fu = "אין כאן כלום עדיין", mu = "שם", pu = "שונה", hu = "גודל", gu = 'האם אתה בטוח שברצונך למחוק את "{{fileName}}"?', vu = "האם אתה בטוח שברצונך למחוק את {{count}} הפריטים האלו?", bu = "{{percent}}% הושלמו", Nu = "בוטל", xu = 'שם קובץ לא יכול להכיל את התווים הבאים: \\ / : * ? " < > |', $u = 'כבר קיימת תיקייה בשם "{{renameFile}}" במיקום זה.', yu = "כווץ את לוח הניווט", Fu = "הרחב את לוח הניווט", Cu = {
  newFolder: Pc,
  upload: Ec,
  paste: jc,
  changeView: Sc,
  refresh: Mc,
  cut: Tc,
  copy: Uc,
  rename: Lc,
  download: Hc,
  delete: "מחק",
  itemSelected: Vc,
  itemsSelected: Ac,
  cancel: Rc,
  clearSelection: kc,
  completed: zc,
  fileNameChangeWarning: Oc,
  no: Ic,
  yes: Gc,
  close: _c,
  fileTypeNotAllowed: Bc,
  fileAlreadyExist: Wc,
  maxUploadSize: Yc,
  dragFileToUpload: Kc,
  chooseFile: qc,
  uploadFail: Jc,
  uploading: Xc,
  uploaded: Zc,
  remove: Qc,
  abortUpload: eu,
  preview: nu,
  previewUnavailable: tu,
  home: ru,
  showMoreFolder: iu,
  moveTo: ou,
  folderEmpty: au,
  selectAll: su,
  view: lu,
  grid: cu,
  list: uu,
  open: du,
  nothingHereYet: fu,
  name: mu,
  modified: pu,
  size: hu,
  deleteItemConfirm: gu,
  deleteItemsConfirm: vu,
  percentDone: bu,
  canceled: Nu,
  invalidFileName: xu,
  folderExists: $u,
  collapseNavigationPane: yu,
  expandNavigationPane: Fu
}, Du = "नया फ़ोल्डर", wu = "अपलोड करें", Pu = "पेस्ट करें", Eu = "दृश्य बदलें", ju = "रिफ्रेश करें", Su = "काटें", Mu = "कॉपी करें", Tu = "नाम बदलें", Uu = "डाउनलोड करें", Lu = "आइटम चुना गया", Hu = "आइटम्स चुने गए", Vu = "रद्द करें", Au = "चयन साफ़ करें", Ru = "पूर्ण हुआ", ku = "यदि आप फ़ाइल नाम एक्सटेंशन बदलते हैं, तो फ़ाइल अनुपयोगी हो सकती है। क्या आप वाकई इसे बदलना चाहते हैं?", zu = "नहीं", Ou = "हाँ", Iu = "बंद करें", Gu = "फ़ाइल प्रकार की अनुमति नहीं है।", _u = "फ़ाइल पहले से मौजूद है।", Bu = "अधिकतम अपलोड आकार है", Wu = "अपलोड करने के लिए फ़ाइलें खींचें", Yu = "फ़ाइल चुनें", Ku = "अपलोड विफल रहा।", qu = "अपलोड हो रहा है", Ju = "अपलोड हो गया", Xu = "हटाएं", Zu = "अपलोड रोकें", Qu = "पूर्वावलोकन", ed = "माफ़ कीजिए! इस फ़ाइल के लिए पूर्वावलोकन उपलब्ध नहीं है।", nd = "होम", td = "और फ़ोल्डर दिखाएँ", rd = "इसमें ले जाएँ", id = "यह फ़ोल्डर खाली है।", od = "सभी का चयन करें", ad = "दृश्य", sd = "ग्रिड", ld = "सूची", cd = "खोलें", ud = "यहाँ अभी कुछ नहीं है", dd = "नाम", fd = "परिवर्तित", md = "आकार", pd = 'क्या आप वाकई "{{fileName}}" को हटाना चाहते हैं?', hd = "क्या आप वाकई इन {{count}} आइटम्स को हटाना चाहते हैं?", gd = "{{percent}}% पूर्ण", vd = "रद्द किया गया", bd = 'फ़ाइल नाम में निम्नलिखित वर्ण नहीं हो सकते: \\ / : * ? " < > |', Nd = 'इस स्थान पर "{{renameFile}}" नाम का एक फ़ोल्डर पहले से मौजूद है।', xd = "नेविगेशन पैन को संकुचित करें", $d = "नेविगेशन पैन को विस्तारित करें", yd = {
  newFolder: Du,
  upload: wu,
  paste: Pu,
  changeView: Eu,
  refresh: ju,
  cut: Su,
  copy: Mu,
  rename: Tu,
  download: Uu,
  delete: "हटाएं",
  itemSelected: Lu,
  itemsSelected: Hu,
  cancel: Vu,
  clearSelection: Au,
  completed: Ru,
  fileNameChangeWarning: ku,
  no: zu,
  yes: Ou,
  close: Iu,
  fileTypeNotAllowed: Gu,
  fileAlreadyExist: _u,
  maxUploadSize: Bu,
  dragFileToUpload: Wu,
  chooseFile: Yu,
  uploadFail: Ku,
  uploading: qu,
  uploaded: Ju,
  remove: Xu,
  abortUpload: Zu,
  preview: Qu,
  previewUnavailable: ed,
  home: nd,
  showMoreFolder: td,
  moveTo: rd,
  folderEmpty: id,
  selectAll: od,
  view: ad,
  grid: sd,
  list: ld,
  open: cd,
  nothingHereYet: ud,
  name: dd,
  modified: fd,
  size: md,
  deleteItemConfirm: pd,
  deleteItemsConfirm: hd,
  percentDone: gd,
  canceled: vd,
  invalidFileName: bd,
  folderExists: Nd,
  collapseNavigationPane: xd,
  expandNavigationPane: $d
}, Fd = "Nuova cartella", Cd = "Carica", Dd = "Incolla", wd = "Cambia vista", Pd = "Ricarica", Ed = "Taglia", jd = "Copia", Sd = "Rinomina", Md = "Scarica", Td = "elemento selezionato", Ud = "elementi selezionati", Ld = "Annulla", Hd = "Pulisci selezione", Vd = "Completato", Ad = "Se cambi l'estensione del file, potrebbe diventare inutilizzabile. Sei sicuro di volerlo fare?", Rd = "No", kd = "Sì", zd = "Chiudi", Od = "Tipo di file non consentito.", Id = "Il file esiste già.", Gd = "La dimensione massima di caricamento è", _d = "Trascina i file per caricarli", Bd = "Scegli file", Wd = "Caricamento fallito.", Yd = "Caricamento in corso", Kd = "Caricato", qd = "Rimuovi", Jd = "Annulla caricamento", Xd = "Anteprima", Zd = "Spiacenti! L'anteprima non è disponibile per questo file.", Qd = "Home", ef = "Mostra altre cartelle", nf = "Sposta in", tf = "Questa cartella è vuota.", rf = "Seleziona tutto", of = "Vista", af = "Griglia", sf = "Lista", lf = "Apri", cf = "Niente qui per ora", uf = "Nome", df = "Modificato", ff = "Dimensione", mf = 'Sei sicuro di voler eliminare "{{fileName}}"?', pf = "Sei sicuro di voler eliminare questi {{count}} elementi?", hf = "{{percent}}% completato", gf = "Annullato", vf = 'Un nome di file non può contenere nessuno dei seguenti caratteri: \\ / : * ? " < > |', bf = 'Questa destinazione contiene già una cartella chiamata "{{renameFile}}".', Nf = "Comprimi pannello di navigazione", xf = "Espandi pannello di navigazione", $f = {
  newFolder: Fd,
  upload: Cd,
  paste: Dd,
  changeView: wd,
  refresh: Pd,
  cut: Ed,
  copy: jd,
  rename: Sd,
  download: Md,
  delete: "Elimina",
  itemSelected: Td,
  itemsSelected: Ud,
  cancel: Ld,
  clearSelection: Hd,
  completed: Vd,
  fileNameChangeWarning: Ad,
  no: Rd,
  yes: kd,
  close: zd,
  fileTypeNotAllowed: Od,
  fileAlreadyExist: Id,
  maxUploadSize: Gd,
  dragFileToUpload: _d,
  chooseFile: Bd,
  uploadFail: Wd,
  uploading: Yd,
  uploaded: Kd,
  remove: qd,
  abortUpload: Jd,
  preview: Xd,
  previewUnavailable: Zd,
  home: Qd,
  showMoreFolder: ef,
  moveTo: nf,
  folderEmpty: tf,
  selectAll: rf,
  view: of,
  grid: af,
  list: sf,
  open: lf,
  nothingHereYet: cf,
  name: uf,
  modified: df,
  size: ff,
  deleteItemConfirm: mf,
  deleteItemsConfirm: pf,
  percentDone: hf,
  canceled: gf,
  invalidFileName: vf,
  folderExists: bf,
  collapseNavigationPane: Nf,
  expandNavigationPane: xf
}, yf = "新しいフォルダー", Ff = "アップロード", Cf = "貼り付け", Df = "ビューを変更", wf = "更新", Pf = "切り取り", Ef = "コピー", jf = "名前変更", Sf = "ダウンロード", Mf = "アイテムが選択されました", Tf = "{{count}} アイテムが選択されました", Uf = "キャンセル", Lf = "選択をクリア", Hf = "完了", Vf = "ファイル拡張子を変更すると、ファイルが使えなくなる場合があります。本当に変更しますか？", Af = "いいえ", Rf = "はい", kf = "閉じる", zf = "ファイルタイプは許可されていません。", Of = "ファイルはすでに存在します。", If = "最大アップロードサイズは", Gf = "ファイルをドラッグしてアップロード", _f = "ファイルを選択", Bf = "アップロード失敗。", Wf = "アップロード中", Yf = "アップロード済み", Kf = "削除", qf = "アップロード中止", Jf = "プレビュー", Xf = "申し訳ありません！このファイルのプレビューは利用できません。", Zf = "ホーム", Qf = "さらにフォルダーを表示", em = "移動先", nm = "このフォルダーは空です。", tm = "すべて選択", rm = "ビュー", im = "グリッド", om = "リスト", am = "開く", sm = "まだ何もありません", lm = "名前", cm = "修正日", um = "サイズ", dm = '"{{fileName}}" を削除してもよろしいですか？', fm = "{{count}} 件のアイテムを削除してもよろしいですか？", mm = "{{percent}}% 完了", pm = "キャンセルしました", hm = 'ファイル名には以下の文字を含めることはできません：\\ / : * ? " < > |', gm = 'この宛先には "{{renameFile}}" という名前のフォルダーがすでに存在します。', vm = "ナビゲーションペインを折りたたむ", bm = "ナビゲーションペインを展開", Nm = {
  newFolder: yf,
  upload: Ff,
  paste: Cf,
  changeView: Df,
  refresh: wf,
  cut: Pf,
  copy: Ef,
  rename: jf,
  download: Sf,
  delete: "削除",
  itemSelected: Mf,
  itemsSelected: Tf,
  cancel: Uf,
  clearSelection: Lf,
  completed: Hf,
  fileNameChangeWarning: Vf,
  no: Af,
  yes: Rf,
  close: kf,
  fileTypeNotAllowed: zf,
  fileAlreadyExist: Of,
  maxUploadSize: If,
  dragFileToUpload: Gf,
  chooseFile: _f,
  uploadFail: Bf,
  uploading: Wf,
  uploaded: Yf,
  remove: Kf,
  abortUpload: qf,
  preview: Jf,
  previewUnavailable: Xf,
  home: Zf,
  showMoreFolder: Qf,
  moveTo: em,
  folderEmpty: nm,
  selectAll: tm,
  view: rm,
  grid: im,
  list: om,
  open: am,
  nothingHereYet: sm,
  name: lm,
  modified: cm,
  size: um,
  deleteItemConfirm: dm,
  deleteItemsConfirm: fm,
  percentDone: mm,
  canceled: pm,
  invalidFileName: hm,
  folderExists: gm,
  collapseNavigationPane: vm,
  expandNavigationPane: bm
}, xm = "새 폴더", $m = "업로드", ym = "붙여넣기", Fm = "보기 변경", Cm = "새로 고침", Dm = "잘라내기", wm = "복사", Pm = "이름 바꾸기", Em = "다운로드", jm = "항목 선택됨", Sm = "개 항목 선택됨", Mm = "취소", Tm = "선택 지우기", Um = "완료됨", Lm = "파일 확장자를 변경하면 사용할 수 없게 될 수 있습니다. 정말로 변경하시겠습니까?", Hm = "아니오", Vm = "예", Am = "닫기", Rm = "허용되지 않는 파일 형식입니다.", km = "파일이 이미 존재합니다.", zm = "최대 업로드 크기", Om = "업로드하려면 파일을 끌어오세요", Im = "파일 선택", Gm = "업로드 실패", _m = "업로드 중", Bm = "업로드 완료", Wm = "제거", Ym = "업로드 중단", Km = "미리보기", qm = "죄송합니다! 이 파일은 미리보기를 제공하지 않습니다.", Jm = "홈", Xm = "더 많은 폴더 보기", Zm = "이동", Qm = "이 폴더는 비어 있습니다.", ep = "전체 선택", np = "보기", tp = "그리드", rp = "목록", ip = "열기", op = "아직 아무것도 없습니다", ap = "이름", sp = "수정됨", lp = "크기", cp = '"{{fileName}}" 파일을 삭제하시겠습니까?', up = "{{count}}개의 항목을 삭제하시겠습니까?", dp = "{{percent}}% 완료", fp = "취소됨", mp = '파일 이름에는 다음 문자를 사용할 수 없습니다: \\ / : * ? " < > |', pp = '해당 위치에 "{{renameFile}}" 폴더가 이미 있습니다.', hp = "탐색 창 축소", gp = "탐색 창 확장", vp = {
  newFolder: xm,
  upload: $m,
  paste: ym,
  changeView: Fm,
  refresh: Cm,
  cut: Dm,
  copy: wm,
  rename: Pm,
  download: Em,
  delete: "삭제",
  itemSelected: jm,
  itemsSelected: Sm,
  cancel: Mm,
  clearSelection: Tm,
  completed: Um,
  fileNameChangeWarning: Lm,
  no: Hm,
  yes: Vm,
  close: Am,
  fileTypeNotAllowed: Rm,
  fileAlreadyExist: km,
  maxUploadSize: zm,
  dragFileToUpload: Om,
  chooseFile: Im,
  uploadFail: Gm,
  uploading: _m,
  uploaded: Bm,
  remove: Wm,
  abortUpload: Ym,
  preview: Km,
  previewUnavailable: qm,
  home: Jm,
  showMoreFolder: Xm,
  moveTo: Zm,
  folderEmpty: Qm,
  selectAll: ep,
  view: np,
  grid: tp,
  list: rp,
  open: ip,
  nothingHereYet: op,
  name: ap,
  modified: sp,
  size: lp,
  deleteItemConfirm: cp,
  deleteItemsConfirm: up,
  percentDone: dp,
  canceled: fp,
  invalidFileName: mp,
  folderExists: pp,
  collapseNavigationPane: hp,
  expandNavigationPane: gp
}, bp = "Nova pasta", Np = "Carregar", xp = "Colar", $p = "Alterar visualização", yp = "Atualizar", Fp = "Cortar", Cp = "Copiar", Dp = "Renomear", wp = "Baixar", Pp = "item selecionado", Ep = "itens selecionados", jp = "Cancelar", Sp = "Limpar seleção", Mp = "Concluído", Tp = "Se você alterar a extensão do arquivo, ele pode se tornar inutilizável. Tem certeza de que deseja fazer isso?", Up = "Não", Lp = "Sim", Hp = "Fechar", Vp = "Tipo de arquivo não permitido.", Ap = "Arquivo já existe.", Rp = "Tamanho máximo de upload é", kp = "Arraste os arquivos para carregar", zp = "Escolher arquivo", Op = "Falha no upload.", Ip = "Carregando", Gp = "Carregado", _p = "Remover", Bp = "Abortar upload", Wp = "Visualizar", Yp = "Desculpe! Não há visualização disponível para este arquivo.", Kp = "Início", qp = "Mostrar mais pastas", Jp = "Mover para", Xp = "Esta pasta está vazia.", Zp = "Selecionar tudo", Qp = "Visualização", eh = "Grade", nh = "Lista", th = "Abrir", rh = "Nada aqui ainda", ih = "Nome", oh = "Modificado", ah = "Tamanho", sh = 'Tem certeza de que deseja excluir "{{fileName}}"?', lh = "Tem certeza de que deseja excluir esses {{count}} itens?", ch = "{{percent}}% concluído", uh = "Cancelado", dh = 'Um nome de arquivo não pode conter nenhum dos seguintes caracteres: \\ / : * ? " < > |', fh = 'Já existe uma pasta com o nome "{{renameFile}}" neste local.', mh = "Recolher painel de navegação", ph = "Expandir painel de navegação", hh = {
  newFolder: bp,
  upload: Np,
  paste: xp,
  changeView: $p,
  refresh: yp,
  cut: Fp,
  copy: Cp,
  rename: Dp,
  download: wp,
  delete: "Excluir",
  itemSelected: Pp,
  itemsSelected: Ep,
  cancel: jp,
  clearSelection: Sp,
  completed: Mp,
  fileNameChangeWarning: Tp,
  no: Up,
  yes: Lp,
  close: Hp,
  fileTypeNotAllowed: Vp,
  fileAlreadyExist: Ap,
  maxUploadSize: Rp,
  dragFileToUpload: kp,
  chooseFile: zp,
  uploadFail: Op,
  uploading: Ip,
  uploaded: Gp,
  remove: _p,
  abortUpload: Bp,
  preview: Wp,
  previewUnavailable: Yp,
  home: Kp,
  showMoreFolder: qp,
  moveTo: Jp,
  folderEmpty: Xp,
  selectAll: Zp,
  view: Qp,
  grid: eh,
  list: nh,
  open: th,
  nothingHereYet: rh,
  name: ih,
  modified: oh,
  size: ah,
  deleteItemConfirm: sh,
  deleteItemsConfirm: lh,
  percentDone: ch,
  canceled: uh,
  invalidFileName: dh,
  folderExists: fh,
  collapseNavigationPane: mh,
  expandNavigationPane: ph
}, gh = "Nova pasta", vh = "Carregar", bh = "Colar", Nh = "Mudar vista", xh = "Atualizar", $h = "Cortar", yh = "Copiar", Fh = "Renomear", Ch = "Transferir", Dh = "item selecionado", wh = "itens selecionados", Ph = "Cancelar", Eh = "Limpar seleção", jh = "Concluído", Sh = "Se alterar a extensão de um ficheiro, este pode deixar de funcionar corretamente. Tem a certeza de que deseja alterá-la?", Mh = "Não", Th = "Sim", Uh = "Fechar", Lh = "Tipo de ficheiro não permitido.", Hh = "O ficheiro já existe.", Vh = "O tamanho máximo de carregamento é", Ah = "Arraste os ficheiros para carregar", Rh = "Escolher ficheiro", kh = "Falha no carregamento.", zh = "A carregar", Oh = "Carregado", Ih = "Remover", Gh = "Cancelar carregamento", _h = "Pré-visualizar", Bh = "Lamentamos! A pré-visualização não está disponível para este ficheiro.", Wh = "Início", Yh = "Mostrar mais pastas", Kh = "Mover para", qh = "Esta pasta está vazia.", Jh = "Selecionar tudo", Xh = "Vista", Zh = "Grelha", Qh = "Lista", eg = "Abrir", ng = "Ainda não há nada aqui", tg = "Nome", rg = "Modificado", ig = "Tamanho", og = 'Tem a certeza de que deseja eliminar "{{fileName}}"?', ag = "Tem a certeza de que deseja eliminar estes {{count}} itens?", sg = "{{percent}}% concluído", lg = "Cancelado", cg = 'O nome do ficheiro não pode conter nenhum dos seguintes caracteres: \\ / : * ? " < > |', ug = 'O destino já contém uma pasta chamada "{{renameFile}}".', dg = "Recolher painel de navegação", fg = "Expandir painel de navegação", mg = {
  newFolder: gh,
  upload: vh,
  paste: bh,
  changeView: Nh,
  refresh: xh,
  cut: $h,
  copy: yh,
  rename: Fh,
  download: Ch,
  delete: "Eliminar",
  itemSelected: Dh,
  itemsSelected: wh,
  cancel: Ph,
  clearSelection: Eh,
  completed: jh,
  fileNameChangeWarning: Sh,
  no: Mh,
  yes: Th,
  close: Uh,
  fileTypeNotAllowed: Lh,
  fileAlreadyExist: Hh,
  maxUploadSize: Vh,
  dragFileToUpload: Ah,
  chooseFile: Rh,
  uploadFail: kh,
  uploading: zh,
  uploaded: Oh,
  remove: Ih,
  abortUpload: Gh,
  preview: _h,
  previewUnavailable: Bh,
  home: Wh,
  showMoreFolder: Yh,
  moveTo: Kh,
  folderEmpty: qh,
  selectAll: Jh,
  view: Xh,
  grid: Zh,
  list: Qh,
  open: eg,
  nothingHereYet: ng,
  name: tg,
  modified: rg,
  size: ig,
  deleteItemConfirm: og,
  deleteItemsConfirm: ag,
  percentDone: sg,
  canceled: lg,
  invalidFileName: cg,
  folderExists: ug,
  collapseNavigationPane: dg,
  expandNavigationPane: fg
}, pg = "Новая папка", hg = "Загрузить", gg = "Вставить", vg = "Изменить вид", bg = "Обновить", Ng = "Вырезать", xg = "Копировать", $g = "Переименовать", yg = "Скачать", Fg = "выбран элемент", Cg = "выбрано {{count}} элементов", Dg = "Отменить", wg = "Очистить выбор", Pg = "Завершено", Eg = "Если вы измените расширение файла, файл может стать неисправным. Вы уверены, что хотите изменить его?", jg = "Нет", Sg = "Да", Mg = "Закрыть", Tg = "Тип файла не разрешен.", Ug = "Файл уже существует.", Lg = "Максимальный размер загрузки:", Hg = "Перетащите файлы для загрузки", Vg = "Выбрать файл", Ag = "Загрузка не удалась.", Rg = "Загрузка", kg = "Загружено", zg = "Удалить", Og = "Прервать загрузку", Ig = "Предпросмотр", Gg = "Извините! Предпросмотр для этого файла недоступен.", _g = "Главная", Bg = "Показать больше папок", Wg = "Переместить в", Yg = "Эта папка пуста.", Kg = "Выбрать все", qg = "Вид", Jg = "Сетка", Xg = "Список", Zg = "Открыть", Qg = "Здесь еще ничего нет", e1 = "Имя", n1 = "Изменено", t1 = "Размер", r1 = 'Вы уверены, что хотите удалить "{{fileName}}"?', i1 = "Вы уверены, что хотите удалить эти {{count}} элементы?", o1 = "{{percent}}% завершено", a1 = "Отменено", s1 = 'Имя файла не может содержать следующие символы: \\ / : * ? " < > |', l1 = 'В этом местоположении уже существует папка с именем "{{renameFile}}".', c1 = "Свернуть панель навигации", u1 = "Развернуть панель навигации", d1 = {
  newFolder: pg,
  upload: hg,
  paste: gg,
  changeView: vg,
  refresh: bg,
  cut: Ng,
  copy: xg,
  rename: $g,
  download: yg,
  delete: "Удалить",
  itemSelected: Fg,
  itemsSelected: Cg,
  cancel: Dg,
  clearSelection: wg,
  completed: Pg,
  fileNameChangeWarning: Eg,
  no: jg,
  yes: Sg,
  close: Mg,
  fileTypeNotAllowed: Tg,
  fileAlreadyExist: Ug,
  maxUploadSize: Lg,
  dragFileToUpload: Hg,
  chooseFile: Vg,
  uploadFail: Ag,
  uploading: Rg,
  uploaded: kg,
  remove: zg,
  abortUpload: Og,
  preview: Ig,
  previewUnavailable: Gg,
  home: _g,
  showMoreFolder: Bg,
  moveTo: Wg,
  folderEmpty: Yg,
  selectAll: Kg,
  view: qg,
  grid: Jg,
  list: Xg,
  open: Zg,
  nothingHereYet: Qg,
  name: e1,
  modified: n1,
  size: t1,
  deleteItemConfirm: r1,
  deleteItemsConfirm: i1,
  percentDone: o1,
  canceled: a1,
  invalidFileName: s1,
  folderExists: l1,
  collapseNavigationPane: c1,
  expandNavigationPane: u1
}, f1 = "Yeni Klasör", m1 = "Dosya Yükle", p1 = "Yapıştır", h1 = "Görünümü Değiştir", g1 = "Yenile", v1 = "Kes", b1 = "Kopyala", N1 = "Yeniden İsimlendir", x1 = "İndir", $1 = "öğe seçildi", y1 = "seçilen öğeler", F1 = "İptal", C1 = "Seçimi Temizle", D1 = "Tamamlandı", w1 = "Dosya adı aşağıdaki karakterlerden hiçbirini içeremez:", P1 = "Bir dosya adı uzantısını değiştirirseniz, dosya kullanılamaz hale gelebilir. Bunu değiştirmek istediğinizden emin misiniz?", E1 = "Hayır", j1 = "Evet", S1 = "Kapalı", M1 = "Dosya türüne izin verilmiyor.", T1 = "Dosya zaten mevcut.", U1 = "Maksimum yükleme boyutu", L1 = "Yüklemek için dosyaları sürükleyin", H1 = "Dosya Seç", V1 = "Yükleme hatası.", A1 = "Yükleniyor", R1 = "Yüklendi", k1 = "Kaldır", z1 = "Yüklemeyi İptal Et", O1 = "Görünüm", I1 = "Üzgünüz! Bu dosya için önizleme mevcut değil.", G1 = "Ana Sayfa", _1 = "Daha fazla klasör göster", B1 = "Burya Taşı", W1 = "Bu klasör boş.", Y1 = "Hepsini Seç", K1 = "Görünüm", q1 = "Izgara", J1 = "Liste", X1 = "Aç", Z1 = "Henüz hiçbir şey yok", Q1 = "Ad", e0 = "Değiştirilme Tarihi", n0 = "Boyut", t0 = '"{{fileName}}" dosyasını silmek istediğinizden emin misiniz?', r0 = "{{count}} öğeyi silmek istediğinizden emin misiniz?", i0 = "%{{percent}} tamamlandı", o0 = "İptal edildi", a0 = 'Bir dosya adı aşağıdaki karakterlerden hiçbirini içeremez: \\ / : * ? " < > |', s0 = 'Bu konumda "{{renameFile}}" adında bir klasör zaten var.', l0 = "Gezinti Panelini Daralt", c0 = "Gezinti Panelini Genişlet", u0 = {
  newFolder: f1,
  upload: m1,
  paste: p1,
  changeView: h1,
  refresh: g1,
  cut: v1,
  copy: b1,
  rename: N1,
  download: x1,
  delete: "Sil",
  itemSelected: $1,
  itemsSelected: y1,
  cancel: F1,
  clearSelection: C1,
  completed: D1,
  folderErrorMessage: w1,
  fileNameChangeWarning: P1,
  no: E1,
  yes: j1,
  close: S1,
  fileTypeNotAllowed: M1,
  fileAlreadyExist: T1,
  maxUploadSize: U1,
  dragFileToUpload: L1,
  chooseFile: H1,
  uploadFail: V1,
  uploading: A1,
  uploaded: R1,
  remove: k1,
  abortUpload: z1,
  preview: O1,
  previewUnavailable: I1,
  home: G1,
  showMoreFolder: _1,
  moveTo: B1,
  folderEmpty: W1,
  selectAll: Y1,
  view: K1,
  grid: q1,
  list: J1,
  open: X1,
  nothingHereYet: Z1,
  name: Q1,
  modified: e0,
  size: n0,
  deleteItemConfirm: t0,
  deleteItemsConfirm: r0,
  percentDone: i0,
  canceled: o0,
  invalidFileName: a0,
  folderExists: s0,
  collapseNavigationPane: l0,
  expandNavigationPane: c0
}, d0 = "Нова папка", f0 = "Завантажити", m0 = "Вставити", p0 = "Змінити вигляд", h0 = "Оновити", g0 = "Вирізати", v0 = "Копіювати", b0 = "Перейменувати", N0 = "Завантажити", x0 = "вибраний елемент", $0 = "вибрані елементи", y0 = "Скасувати", F0 = "Очистити вибір", C0 = "Завершено", D0 = "Якщо ви зміните розширення файлу, він може стати непридатним для використання. Ви впевнені, що хочете змінити його?", w0 = "Ні", P0 = "Так", E0 = "Закрити", j0 = "Тип файлу не дозволено.", S0 = "Файл уже існує.", M0 = "Максимальний розмір завантаження —", T0 = "Перетягніть файли для завантаження", U0 = "Вибрати файл", L0 = "Помилка завантаження.", H0 = "Завантаження", V0 = "Завантажено", A0 = "Видалити", R0 = "Скасувати завантаження", k0 = "Попередній перегляд", z0 = "На жаль! Попередній перегляд для цього файлу недоступний.", O0 = "Головна", I0 = "Показати більше папок", G0 = "Перемістити до", _0 = "Ця папка порожня.", B0 = "Вибрати все", W0 = "Вигляд", Y0 = "Сітка", K0 = "Список", q0 = "Відкрити", J0 = "Тут ще нічого немає", X0 = "Назва", Z0 = "Змінено", Q0 = "Розмір", ev = 'Ви впевнені, що хочете видалити "{{fileName}}"?', nv = "Ви впевнені, що хочете видалити ці {{count}} елементи?", tv = "{{percent}}% завершено", rv = "Скасовано", iv = `Ім'я файлу не може містити такі символи: \\ / : * ? " < > |`, ov = 'У цьому місці вже існує папка з назвою "{{renameFile}}".', av = "Згорнути панель навігації", sv = "Розгорнути панель навігації", lv = {
  newFolder: d0,
  upload: f0,
  paste: m0,
  changeView: p0,
  refresh: h0,
  cut: g0,
  copy: v0,
  rename: b0,
  download: N0,
  delete: "Видалити",
  itemSelected: x0,
  itemsSelected: $0,
  cancel: y0,
  clearSelection: F0,
  completed: C0,
  fileNameChangeWarning: D0,
  no: w0,
  yes: P0,
  close: E0,
  fileTypeNotAllowed: j0,
  fileAlreadyExist: S0,
  maxUploadSize: M0,
  dragFileToUpload: T0,
  chooseFile: U0,
  uploadFail: L0,
  uploading: H0,
  uploaded: V0,
  remove: A0,
  abortUpload: R0,
  preview: k0,
  previewUnavailable: z0,
  home: O0,
  showMoreFolder: I0,
  moveTo: G0,
  folderEmpty: _0,
  selectAll: B0,
  view: W0,
  grid: Y0,
  list: K0,
  open: q0,
  nothingHereYet: J0,
  name: X0,
  modified: Z0,
  size: Q0,
  deleteItemConfirm: ev,
  deleteItemsConfirm: nv,
  percentDone: tv,
  canceled: rv,
  invalidFileName: iv,
  folderExists: ov,
  collapseNavigationPane: av,
  expandNavigationPane: sv
}, cv = "نیا فولڈر", uv = "اپ لوڈ کریں", dv = "چسپاں کریں", fv = "دیکھنے کا طریقہ تبدیل کریں", mv = "تازہ کریں", pv = "کٹ کریں", hv = "کاپی کریں", gv = "نام تبدیل کریں", vv = "ڈاؤن لوڈ کریں", bv = "آئٹم منتخب کیا گیا", Nv = "{{count}} آئٹمز منتخب کی گئیں", xv = "منسوخ کریں", $v = "انتخاب صاف کریں", yv = "مکمل ہوا", Fv = "اگر آپ فائل کا ایکسٹینشن تبدیل کرتے ہیں، تو فائل ناقابل استعمال ہو سکتی ہے۔ کیا آپ واقعی اسے تبدیل کرنا چاہتے ہیں؟", Cv = "نہیں", Dv = "ہاں", wv = "بند کریں", Pv = "فائل کی قسم کی اجازت نہیں ہے۔", Ev = "فائل پہلے سے موجود ہے۔", jv = "زیادہ سے زیادہ اپ لوڈ سائز ہے", Sv = "اپ لوڈ کرنے کے لیے فائلز گھسیٹیں", Mv = "فائل منتخب کریں", Tv = "اپ لوڈ میں ناکامی۔", Uv = "اپ لوڈ ہو رہا ہے", Lv = "اپ لوڈ ہو گیا", Hv = "ہٹائیں", Vv = "اپ لوڈ منسوخ کریں", Av = "پریویو", Rv = "معذرت! اس فائل کا پریویو دستیاب نہیں ہے۔", kv = "ہوم", zv = "مزید فولڈرز دکھائیں", Ov = "منتقل کریں", Iv = "یہ فولڈر خالی ہے۔", Gv = "سبھی منتخب کریں", _v = "دیکھیں", Bv = "گِریڈ", Wv = "فہرست", Yv = "کھولیں", Kv = "ابھی کچھ بھی نہیں ہے", qv = "نام", Jv = "ترمیم شدہ", Xv = "سائز", Zv = 'کیا آپ واقعی "{{fileName}}" کو حذف کرنا چاہتے ہیں؟', Qv = "کیا آپ واقعی ان {{count}} آئٹمز کو حذف کرنا چاہتے ہیں؟", eb = "{{percent}}% مکمل ہوا", nb = "منسوخ کیا گیا", tb = 'فائل کا نام درج ذیل میں سے کوئی بھی حرف نہیں رکھ سکتا: \\ / : * ? " < > |', rb = 'اس منزل پر پہلے ہی "{{renameFile}}" کے نام کا فولڈر موجود ہے۔', ib = "نیویگیشن پین کو بند کریں", ob = "نیویگیشن پین کو کھولیں", ab = {
  newFolder: cv,
  upload: uv,
  paste: dv,
  changeView: fv,
  refresh: mv,
  cut: pv,
  copy: hv,
  rename: gv,
  download: vv,
  delete: "حذف کریں",
  itemSelected: bv,
  itemsSelected: Nv,
  cancel: xv,
  clearSelection: $v,
  completed: yv,
  fileNameChangeWarning: Fv,
  no: Cv,
  yes: Dv,
  close: wv,
  fileTypeNotAllowed: Pv,
  fileAlreadyExist: Ev,
  maxUploadSize: jv,
  dragFileToUpload: Sv,
  chooseFile: Mv,
  uploadFail: Tv,
  uploading: Uv,
  uploaded: Lv,
  remove: Hv,
  abortUpload: Vv,
  preview: Av,
  previewUnavailable: Rv,
  home: kv,
  showMoreFolder: zv,
  moveTo: Ov,
  folderEmpty: Iv,
  selectAll: Gv,
  view: _v,
  grid: Bv,
  list: Wv,
  open: Yv,
  nothingHereYet: Kv,
  name: qv,
  modified: Jv,
  size: Xv,
  deleteItemConfirm: Zv,
  deleteItemsConfirm: Qv,
  percentDone: eb,
  canceled: nb,
  invalidFileName: tb,
  folderExists: rb,
  collapseNavigationPane: ib,
  expandNavigationPane: ob
}, sb = "Thư mục mới", lb = "Tải lên", cb = "Dán", ub = "Thay đổi chế độ xem", db = "Làm mới", fb = "Cắt", mb = "Sao chép", pb = "Đổi tên", hb = "Tải xuống", gb = "mục đã chọn", vb = "mục được chọn", bb = "Hủy", Nb = "Xóa lựa chọn", xb = "Hoàn thành", $b = "Nếu bạn thay đổi phần mở rộng tên tệp, tệp có thể không sử dụng được. Bạn có chắc chắn muốn thay đổi không?", yb = "Không", Fb = "Có", Cb = "Đóng", Db = "Loại tệp không được phép.", wb = "Tệp đã tồn tại.", Pb = "Kích thước tải lên tối đa là", Eb = "Kéo tệp vào để tải lên", jb = "Chọn tệp", Sb = "Tải lên thất bại.", Mb = "Đang tải lên", Tb = "Đã tải lên", Ub = "Gỡ bỏ", Lb = "Hủy tải lên", Hb = "Xem trước", Vb = "Rất tiếc! Không thể xem trước tệp này.", Ab = "Trang chủ", Rb = "Hiển thị thêm thư mục", kb = "Chuyển đến", zb = "Thư mục này trống.", Ob = "Chọn tất cả", Ib = "Chế độ xem", Gb = "Lưới", _b = "Danh sách", Bb = "Mở", Wb = "Chưa có gì ở đây", Yb = "Tên", Kb = "Đã chỉnh sửa", qb = "Kích thước", Jb = 'Bạn có chắc muốn xóa "{{fileName}}"?', Xb = "Bạn có chắc muốn xóa {{count}} mục này không?", Zb = "Hoàn thành {{percent}}%", Qb = "Đã hủy", e2 = 'Tên tệp không được chứa các ký tự sau: \\ / : * ? " < > |', n2 = 'Đã có thư mục tên "{{renameFile}}" tại vị trí này.', t2 = "Thu gọn ngăn điều hướng", r2 = "Mở rộng ngăn điều hướng", i2 = {
  newFolder: sb,
  upload: lb,
  paste: cb,
  changeView: ub,
  refresh: db,
  cut: fb,
  copy: mb,
  rename: pb,
  download: hb,
  delete: "Xóa",
  itemSelected: gb,
  itemsSelected: vb,
  cancel: bb,
  clearSelection: Nb,
  completed: xb,
  fileNameChangeWarning: $b,
  no: yb,
  yes: Fb,
  close: Cb,
  fileTypeNotAllowed: Db,
  fileAlreadyExist: wb,
  maxUploadSize: Pb,
  dragFileToUpload: Eb,
  chooseFile: jb,
  uploadFail: Sb,
  uploading: Mb,
  uploaded: Tb,
  remove: Ub,
  abortUpload: Lb,
  preview: Hb,
  previewUnavailable: Vb,
  home: Ab,
  showMoreFolder: Rb,
  moveTo: kb,
  folderEmpty: zb,
  selectAll: Ob,
  view: Ib,
  grid: Gb,
  list: _b,
  open: Bb,
  nothingHereYet: Wb,
  name: Yb,
  modified: Kb,
  size: qb,
  deleteItemConfirm: Jb,
  deleteItemsConfirm: Xb,
  percentDone: Zb,
  canceled: Qb,
  invalidFileName: e2,
  folderExists: n2,
  collapseNavigationPane: t2,
  expandNavigationPane: r2
}, o2 = "新建文件夹", a2 = "上传", s2 = "粘贴", l2 = "更改视图", c2 = "刷新", u2 = "剪切", d2 = "复制", f2 = "重命名", m2 = "下载", p2 = "已选择项", h2 = "已选择{{count}}项", g2 = "取消", v2 = "清除选择", b2 = "完成", N2 = "如果更改文件扩展名，文件可能会变得无法使用。您确定要更改吗？", x2 = "否", $2 = "是", y2 = "关闭", F2 = "不允许的文件类型。", C2 = "文件已存在。", D2 = "最大上传大小为", w2 = "拖动文件上传", P2 = "选择文件", E2 = "上传失败。", j2 = "上传中", S2 = "已上传", M2 = "移除", T2 = "取消上传", U2 = "预览", L2 = "抱歉！该文件无法预览。", H2 = "首页", V2 = "显示更多文件夹", A2 = "移动到", R2 = "该文件夹为空。", k2 = "全选", z2 = "视图", O2 = "网格", I2 = "列表", G2 = "打开", _2 = "这里暂时没有内容", B2 = "名称", W2 = "修改时间", Y2 = "大小", K2 = '您确定要删除 "{{fileName}}" 吗？', q2 = "您确定要删除这些 {{count}} 项吗？", J2 = "{{percent}}% 完成", X2 = "已取消", Z2 = '文件名不能包含以下字符：\\ / : * ? " < > |', Q2 = '目标文件夹中已存在名为 "{{renameFile}}" 的文件夹。', eN = "折叠导航窗格", nN = "展开导航窗格", tN = {
  newFolder: o2,
  upload: a2,
  paste: s2,
  changeView: l2,
  refresh: c2,
  cut: u2,
  copy: d2,
  rename: f2,
  download: m2,
  delete: "删除",
  itemSelected: p2,
  itemsSelected: h2,
  cancel: g2,
  clearSelection: v2,
  completed: b2,
  fileNameChangeWarning: N2,
  no: x2,
  yes: $2,
  close: y2,
  fileTypeNotAllowed: F2,
  fileAlreadyExist: C2,
  maxUploadSize: D2,
  dragFileToUpload: w2,
  chooseFile: P2,
  uploadFail: E2,
  uploading: j2,
  uploaded: S2,
  remove: M2,
  abortUpload: T2,
  preview: U2,
  previewUnavailable: L2,
  home: H2,
  showMoreFolder: V2,
  moveTo: A2,
  folderEmpty: R2,
  selectAll: k2,
  view: z2,
  grid: O2,
  list: I2,
  open: G2,
  nothingHereYet: _2,
  name: B2,
  modified: W2,
  size: Y2,
  deleteItemConfirm: K2,
  deleteItemsConfirm: q2,
  percentDone: J2,
  canceled: X2,
  invalidFileName: Z2,
  folderExists: Q2,
  collapseNavigationPane: eN,
  expandNavigationPane: nN
}, rN = "Nowy folder", iN = "Prześlij", oN = "Wklej", aN = "Zmień widok", sN = "Odśwież", lN = "Wytnij", cN = "Kopiuj", uN = "Zmień nazwę", dN = "Pobierz", fN = "element zaznaczony", mN = "elementy zaznaczone", pN = "Anuluj", hN = "Wyczyść zaznaczenie", gN = "Zakończono", vN = "Jeśli zmienisz rozszerzenie pliku, może on stać się nieużyteczny. Czy na pewno chcesz to zrobić?", bN = "Nie", NN = "Tak", xN = "Zamknij", $N = "Typ pliku nie jest dozwolony.", yN = "Plik już istnieje.", FN = "Maksymalny rozmiar przesyłanego pliku to", CN = "Przeciągnij pliki, aby je przesłać", DN = "Wybierz plik", wN = "Przesyłanie nie powiodło się.", PN = "Przesyłanie", EN = "Przesłano", jN = "Usuń", SN = "Przerwij przesyłanie", MN = "Podgląd", TN = "Przepraszamy! Podgląd tego pliku nie jest dostępny.", UN = "Strona główna", LN = "Pokaż więcej folderów", HN = "Przenieś do", VN = "Ten folder jest pusty.", AN = "Zaznacz wszystko", RN = "Widok", kN = "Siatka", zN = "Lista", ON = "Otwórz", IN = "Nic tu jeszcze nie ma", GN = "Nazwa", _N = "Zmodyfikowano", BN = "Rozmiar", WN = 'Czy na pewno chcesz usunąć "{{fileName}}"?', YN = "Czy na pewno chcesz usunąć te {{count}} elementy?", KN = "{{percent}}% ukończono", qN = "Anulowano", JN = 'Nazwa pliku nie może zawierać żadnego z następujących znaków: \\ / : * ? " < > |', XN = 'To miejsce docelowe zawiera już folder o nazwie "{{renameFile}}".', ZN = "Zwiń panel nawigacyjny", QN = "Rozwiń panel nawigacyjny", ex = {
  newFolder: rN,
  upload: iN,
  paste: oN,
  changeView: aN,
  refresh: sN,
  cut: lN,
  copy: cN,
  rename: uN,
  download: dN,
  delete: "Usuń",
  itemSelected: fN,
  itemsSelected: mN,
  cancel: pN,
  clearSelection: hN,
  completed: gN,
  fileNameChangeWarning: vN,
  no: bN,
  yes: NN,
  close: xN,
  fileTypeNotAllowed: $N,
  fileAlreadyExist: yN,
  maxUploadSize: FN,
  dragFileToUpload: CN,
  chooseFile: DN,
  uploadFail: wN,
  uploading: PN,
  uploaded: EN,
  remove: jN,
  abortUpload: SN,
  preview: MN,
  previewUnavailable: TN,
  home: UN,
  showMoreFolder: LN,
  moveTo: HN,
  folderEmpty: VN,
  selectAll: AN,
  view: RN,
  grid: kN,
  list: zN,
  open: ON,
  nothingHereYet: IN,
  name: GN,
  modified: _N,
  size: BN,
  deleteItemConfirm: WN,
  deleteItemsConfirm: YN,
  percentDone: KN,
  canceled: qN,
  invalidFileName: JN,
  folderExists: XN,
  collapseNavigationPane: ZN,
  expandNavigationPane: QN
}, nx = {
  ar: { translation: Lo },
  de: { translation: Ta },
  en: { translation: Ss },
  es: { translation: El },
  fr: { translation: wc },
  he: { translation: Cu },
  hi: { translation: yd },
  it: { translation: $f },
  ja: { translation: Nm },
  ko: { translation: vp },
  pt: { translation: hh },
  ptpt: { translation: mg },
  ru: { translation: d1 },
  tr: { translation: u0 },
  uk: { translation: lv },
  ur: { translation: ab },
  vi: { translation: i2 },
  zh: { translation: tN },
  pl: { translation: ex }
}, tx = (n = "en") => {
  fe.isInitialized ? fe.changeLanguage(n) : fe.init({
    resources: nx,
    lng: n,
    fallbackLng: "en",
    interpolation: {
      escapeValue: !1
    }
  });
}, cr = _e(() => (n) => n), rx = ({ children: n, language: e }) => {
  const [t, r] = R(() => fe.t.bind(fe));
  return oe(() => {
    tx(e), r(() => fe.t.bind(fe));
  }, [e]), /* @__PURE__ */ s.jsxDEV(cr.Provider, { value: t, children: n }, void 0, !1, {
    fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/contexts/TranslationProvider.jsx",
    lineNumber: 14,
    columnNumber: 10
  }, void 0);
}, ye = () => Be(cr), ix = ({ setShowToggleViewMenu: n, onLayoutChange: e }) => {
  const t = Ze(() => {
    n(!1);
  }), { activeLayout: r, setActiveLayout: i } = He(), o = ye(), a = [
    {
      key: "grid",
      name: o("grid"),
      icon: /* @__PURE__ */ s.jsxDEV(Zt, { size: 18 }, void 0, !1, {
        fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/Toolbar/LayoutToggler.jsx",
        lineNumber: 18,
        columnNumber: 13
      }, void 0)
    },
    {
      key: "list",
      name: o("list"),
      icon: /* @__PURE__ */ s.jsxDEV(ln, { size: 18 }, void 0, !1, {
        fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/Toolbar/LayoutToggler.jsx",
        lineNumber: 23,
        columnNumber: 13
      }, void 0)
    }
  ], l = (c) => {
    i(c), e(c), n(!1);
  };
  return /* @__PURE__ */ s.jsxDEV("div", { ref: t.ref, className: "toggle-view", role: "dropdown", children: /* @__PURE__ */ s.jsxDEV("ul", { role: "menu", "aria-orientation": "vertical", children: a.map((c) => /* @__PURE__ */ s.jsxDEV(
    "li",
    {
      role: "menuitem",
      onClick: () => l(c.key),
      onKeyDown: () => l(c.key),
      children: [
        /* @__PURE__ */ s.jsxDEV("span", { children: c.key === r && /* @__PURE__ */ s.jsxDEV(ir, { size: 13 }, void 0, !1, {
          fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/Toolbar/LayoutToggler.jsx",
          lineNumber: 43,
          columnNumber: 51
        }, void 0) }, void 0, !1, {
          fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/Toolbar/LayoutToggler.jsx",
          lineNumber: 43,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ s.jsxDEV("span", { children: c.icon }, void 0, !1, {
          fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/Toolbar/LayoutToggler.jsx",
          lineNumber: 44,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ s.jsxDEV("span", { children: c.name }, void 0, !1, {
          fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/Toolbar/LayoutToggler.jsx",
          lineNumber: 45,
          columnNumber: 13
        }, void 0)
      ]
    },
    c.key,
    !0,
    {
      fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/Toolbar/LayoutToggler.jsx",
      lineNumber: 37,
      columnNumber: 11
    },
    void 0
  )) }, void 0, !1, {
    fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/Toolbar/LayoutToggler.jsx",
    lineNumber: 35,
    columnNumber: 7
  }, void 0) }, void 0, !1, {
    fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/Toolbar/LayoutToggler.jsx",
    lineNumber: 34,
    columnNumber: 5
  }, void 0);
}, ur = _e(), ox = ({ children: n, filesData: e, onError: t }) => {
  const [r, i] = R([]);
  oe(() => {
    i(e);
  }, [e]);
  const o = (a) => a.isDirectory ? r.filter((l) => l.path === `${a.path}/${l.name}`) : [];
  return /* @__PURE__ */ s.jsxDEV(ur.Provider, { value: { files: r, setFiles: i, getChildren: o, onError: t }, children: n }, void 0, !1, {
    fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/contexts/FilesContext.jsx",
    lineNumber: 19,
    columnNumber: 5
  }, void 0);
}, vn = () => Be(ur), ax = (n, e = "name", t = "asc") => {
  const r = n.filter((c) => c.isDirectory), i = n.filter((c) => !c.isDirectory), o = (c, u) => {
    let f = 0;
    switch (e) {
      case "name":
        f = c.name.localeCompare(u.name);
        break;
      case "size":
        const m = c.size || 0, g = u.size || 0;
        f = m - g;
        break;
      case "modified":
        const p = c.updatedAt ? new Date(c.updatedAt).getTime() : 0, h = u.updatedAt ? new Date(u.updatedAt).getTime() : 0;
        f = p - h;
        break;
      default:
        f = c.name.localeCompare(u.name);
    }
    return t === "asc" ? f : -f;
  }, a = [...r].sort(o), l = [...i].sort(o);
  return [...a, ...l];
}, dr = _e(), sx = ({ children: n, initialPath: e, onFolderChange: t }) => {
  const { files: r } = vn(), i = pe(!1), [o, a] = R(""), [l, c] = R(null), [u, f] = R([]), [m, g] = R({ key: "name", direction: "asc" });
  return oe(() => {
    Array.isArray(r) && r.length > 0 ? (f(() => {
      const p = r.filter((h) => h.path === `${o}/${h.name}`);
      return ax(p, m.key, m.direction);
    }), c(() => r.find((p) => p.path === o) ?? null)) : (f([]), c(null));
  }, [r, o, m]), oe(() => {
    if (!i.current && Array.isArray(r) && r.length > 0) {
      const p = r.some((h) => h.isDirectory && h.path === e) ? e : "";
      a(p), i.current = !0;
    }
  }, [r]), /* @__PURE__ */ s.jsxDEV(
    dr.Provider,
    {
      value: {
        currentPath: o,
        setCurrentPath: a,
        currentFolder: l,
        setCurrentFolder: c,
        currentPathFiles: u,
        setCurrentPathFiles: f,
        sortConfig: m,
        setSortConfig: g,
        onFolderChange: t
      },
      children: n
    },
    void 0,
    !1,
    {
      fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/contexts/FileNavigationContext.jsx",
      lineNumber: 42,
      columnNumber: 5
    },
    void 0
  );
}, we = () => Be(dr), Ae = (n, e, ...t) => {
  try {
    if (typeof n == "function")
      n(...t);
    else
      throw new Error(
        `<FileManager /> Missing prop: Callback function "${e}" is required.`
      );
  } catch (r) {
    console.error(r.message);
  }
}, fr = _e(), lx = ({ children: n, onDownload: e, onSelect: t, onSelectionChange: r }) => {
  const [i, o] = R([]);
  oe(() => {
    t == null || t(i), r == null || r(i);
  }, [i]);
  const a = () => {
    Ae(e, "onDownload", i);
  };
  return /* @__PURE__ */ s.jsxDEV(fr.Provider, { value: { selectedFiles: i, setSelectedFiles: o, handleDownload: a }, children: n }, void 0, !1, {
    fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/contexts/SelectionContext.jsx",
    lineNumber: 19,
    columnNumber: 5
  }, void 0);
}, Te = () => Be(fr), mr = _e(), cx = ({ children: n, onPaste: e, onCut: t, onCopy: r }) => {
  const [i, o] = R(null), { selectedFiles: a, setSelectedFiles: l } = Te(), c = (f) => {
    o({
      files: a,
      isMoving: f
    }), f ? t && t(a) : r && r(a);
  }, u = (f) => {
    if (f && !f.isDirectory) return;
    const m = i.files, g = i.isMoving ? "move" : "copy";
    Ae(e, "onPaste", m, f, g), i.isMoving && o(null), l([]);
  };
  return /* @__PURE__ */ s.jsxDEV(mr.Provider, { value: { clipBoard: i, setClipBoard: o, handleCutCopy: c, handlePasting: u }, children: n }, void 0, !1, {
    fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/contexts/ClipboardContext.jsx",
    lineNumber: 38,
    columnNumber: 5
  }, void 0);
}, bn = () => Be(mr), pr = ({ onLayoutChange: n, onRefresh: e, triggerAction: t, permissions: r }) => {
  var S;
  const [i, o] = R(!1), { currentFolder: a } = we(), { selectedFiles: l, setSelectedFiles: c, handleDownload: u } = Te(), { clipBoard: f, setClipBoard: m, handleCutCopy: g, handlePasting: p } = bn(), { activeLayout: h } = He(), N = ye(), H = [
    {
      icon: /* @__PURE__ */ s.jsxDEV(Xt, { size: 17, strokeWidth: 0.3 }, void 0, !1, {
        fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/Toolbar/Toolbar.jsx",
        lineNumber: 32,
        columnNumber: 13
      }, void 0),
      text: N("newFolder"),
      permission: r.create,
      onClick: () => t.show("createFolder")
    },
    {
      icon: /* @__PURE__ */ s.jsxDEV(tr, { size: 18 }, void 0, !1, {
        fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/Toolbar/Toolbar.jsx",
        lineNumber: 38,
        columnNumber: 13
      }, void 0),
      text: N("upload"),
      permission: r.upload,
      onClick: () => t.show("uploadFile")
    },
    {
      icon: /* @__PURE__ */ s.jsxDEV(An, { size: 18 }, void 0, !1, {
        fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/Toolbar/Toolbar.jsx",
        lineNumber: 44,
        columnNumber: 13
      }, void 0),
      text: N("paste"),
      permission: !!f,
      onClick: j
    }
  ], F = [
    {
      icon: h === "grid" ? /* @__PURE__ */ s.jsxDEV(Zt, { size: 16 }, void 0, !1, {
        fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/Toolbar/Toolbar.jsx",
        lineNumber: 53,
        columnNumber: 39
      }, void 0) : /* @__PURE__ */ s.jsxDEV(ln, { size: 16 }, void 0, !1, {
        fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/Toolbar/Toolbar.jsx",
        lineNumber: 53,
        columnNumber: 66
      }, void 0),
      title: N("changeView"),
      onClick: () => o((v) => !v)
    },
    {
      icon: /* @__PURE__ */ s.jsxDEV(er, { size: 16 }, void 0, !1, {
        fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/Toolbar/Toolbar.jsx",
        lineNumber: 58,
        columnNumber: 13
      }, void 0),
      title: N("refresh"),
      onClick: () => {
        Ae(e, "onRefresh"), m(null);
      }
    }
  ];
  function j() {
    p(a);
  }
  const P = () => {
    u(), c([]);
  };
  return l.length > 0 ? /* @__PURE__ */ s.jsxDEV("div", { className: "toolbar file-selected", children: /* @__PURE__ */ s.jsxDEV("div", { className: "file-action-container", children: [
    /* @__PURE__ */ s.jsxDEV("div", { children: [
      r.move && /* @__PURE__ */ s.jsxDEV("button", { className: "item-action file-action", onClick: () => g(!0), children: [
        /* @__PURE__ */ s.jsxDEV(Qt, { size: 18 }, void 0, !1, {
          fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/Toolbar/Toolbar.jsx",
          lineNumber: 84,
          columnNumber: 17
        }, void 0),
        /* @__PURE__ */ s.jsxDEV("span", { children: N("cut") }, void 0, !1, {
          fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/Toolbar/Toolbar.jsx",
          lineNumber: 85,
          columnNumber: 17
        }, void 0)
      ] }, void 0, !0, {
        fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/Toolbar/Toolbar.jsx",
        lineNumber: 83,
        columnNumber: 15
      }, void 0),
      r.copy && /* @__PURE__ */ s.jsxDEV("button", { className: "item-action file-action", onClick: () => g(!1), children: [
        /* @__PURE__ */ s.jsxDEV(Jt, { strokeWidth: 0.1, size: 17 }, void 0, !1, {
          fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/Toolbar/Toolbar.jsx",
          lineNumber: 90,
          columnNumber: 17
        }, void 0),
        /* @__PURE__ */ s.jsxDEV("span", { children: N("copy") }, void 0, !1, {
          fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/Toolbar/Toolbar.jsx",
          lineNumber: 91,
          columnNumber: 17
        }, void 0)
      ] }, void 0, !0, {
        fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/Toolbar/Toolbar.jsx",
        lineNumber: 89,
        columnNumber: 15
      }, void 0),
      ((S = f == null ? void 0 : f.files) == null ? void 0 : S.length) > 0 && /* @__PURE__ */ s.jsxDEV(
        "button",
        {
          className: "item-action file-action",
          onClick: j,
          children: [
            /* @__PURE__ */ s.jsxDEV(An, { size: 18 }, void 0, !1, {
              fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/Toolbar/Toolbar.jsx",
              lineNumber: 100,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ s.jsxDEV("span", { children: N("paste") }, void 0, !1, {
              fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/Toolbar/Toolbar.jsx",
              lineNumber: 101,
              columnNumber: 17
            }, void 0)
          ]
        },
        void 0,
        !0,
        {
          fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/Toolbar/Toolbar.jsx",
          lineNumber: 95,
          columnNumber: 15
        },
        void 0
      ),
      l.length === 1 && r.rename && /* @__PURE__ */ s.jsxDEV(
        "button",
        {
          className: "item-action file-action",
          onClick: () => t.show("rename"),
          children: [
            /* @__PURE__ */ s.jsxDEV(rr, { size: 19 }, void 0, !1, {
              fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/Toolbar/Toolbar.jsx",
              lineNumber: 109,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ s.jsxDEV("span", { children: N("rename") }, void 0, !1, {
              fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/Toolbar/Toolbar.jsx",
              lineNumber: 110,
              columnNumber: 17
            }, void 0)
          ]
        },
        void 0,
        !0,
        {
          fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/Toolbar/Toolbar.jsx",
          lineNumber: 105,
          columnNumber: 15
        },
        void 0
      ),
      r.download && /* @__PURE__ */ s.jsxDEV("button", { className: "item-action file-action", onClick: P, children: [
        /* @__PURE__ */ s.jsxDEV(On, { size: 19 }, void 0, !1, {
          fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/Toolbar/Toolbar.jsx",
          lineNumber: 115,
          columnNumber: 17
        }, void 0),
        /* @__PURE__ */ s.jsxDEV("span", { children: N("download") }, void 0, !1, {
          fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/Toolbar/Toolbar.jsx",
          lineNumber: 116,
          columnNumber: 17
        }, void 0)
      ] }, void 0, !0, {
        fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/Toolbar/Toolbar.jsx",
        lineNumber: 114,
        columnNumber: 15
      }, void 0),
      r.delete && /* @__PURE__ */ s.jsxDEV(
        "button",
        {
          className: "item-action file-action",
          onClick: () => t.show("delete"),
          children: [
            /* @__PURE__ */ s.jsxDEV(nr, { size: 19 }, void 0, !1, {
              fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/Toolbar/Toolbar.jsx",
              lineNumber: 124,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ s.jsxDEV("span", { children: N("delete") }, void 0, !1, {
              fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/Toolbar/Toolbar.jsx",
              lineNumber: 125,
              columnNumber: 17
            }, void 0)
          ]
        },
        void 0,
        !0,
        {
          fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/Toolbar/Toolbar.jsx",
          lineNumber: 120,
          columnNumber: 15
        },
        void 0
      )
    ] }, void 0, !0, {
      fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/Toolbar/Toolbar.jsx",
      lineNumber: 81,
      columnNumber: 11
    }, void 0),
    /* @__PURE__ */ s.jsxDEV(
      "button",
      {
        className: "item-action file-action",
        title: N("clearSelection"),
        onClick: () => c([]),
        children: [
          /* @__PURE__ */ s.jsxDEV("span", { children: [
            l.length,
            " ",
            N(l.length > 1 ? "itemsSelected" : "itemSelected")
          ] }, void 0, !0, {
            fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/Toolbar/Toolbar.jsx",
            lineNumber: 134,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ s.jsxDEV(ii, { size: 18 }, void 0, !1, {
            fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/Toolbar/Toolbar.jsx",
            lineNumber: 138,
            columnNumber: 13
          }, void 0)
        ]
      },
      void 0,
      !0,
      {
        fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/Toolbar/Toolbar.jsx",
        lineNumber: 129,
        columnNumber: 11
      },
      void 0
    )
  ] }, void 0, !0, {
    fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/Toolbar/Toolbar.jsx",
    lineNumber: 80,
    columnNumber: 9
  }, void 0) }, void 0, !1, {
    fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/Toolbar/Toolbar.jsx",
    lineNumber: 79,
    columnNumber: 7
  }, void 0) : /* @__PURE__ */ s.jsxDEV("div", { className: "toolbar", children: /* @__PURE__ */ s.jsxDEV("div", { className: "fm-toolbar", children: [
    /* @__PURE__ */ s.jsxDEV("div", { children: H.filter((v) => v.permission).map((v, U) => /* @__PURE__ */ s.jsxDEV("button", { className: "item-action", onClick: v.onClick, children: [
      v.icon,
      /* @__PURE__ */ s.jsxDEV("span", { children: v.text }, void 0, !1, {
        fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/Toolbar/Toolbar.jsx",
        lineNumber: 155,
        columnNumber: 17
      }, void 0)
    ] }, U, !0, {
      fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/Toolbar/Toolbar.jsx",
      lineNumber: 153,
      columnNumber: 15
    }, void 0)) }, void 0, !1, {
      fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/Toolbar/Toolbar.jsx",
      lineNumber: 149,
      columnNumber: 9
    }, void 0),
    /* @__PURE__ */ s.jsxDEV("div", { children: [
      F.map((v, U) => /* @__PURE__ */ s.jsxDEV("div", { className: "toolbar-left-items", children: [
        /* @__PURE__ */ s.jsxDEV("button", { className: "item-action icon-only", title: v.title, onClick: v.onClick, children: v.icon }, void 0, !1, {
          fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/Toolbar/Toolbar.jsx",
          lineNumber: 162,
          columnNumber: 15
        }, void 0),
        U !== F.length - 1 && /* @__PURE__ */ s.jsxDEV("div", { className: "item-separator" }, void 0, !1, {
          fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/Toolbar/Toolbar.jsx",
          lineNumber: 165,
          columnNumber: 58
        }, void 0)
      ] }, U, !0, {
        fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/Toolbar/Toolbar.jsx",
        lineNumber: 161,
        columnNumber: 13
      }, void 0)),
      i && /* @__PURE__ */ s.jsxDEV(
        ix,
        {
          setShowToggleViewMenu: o,
          onLayoutChange: n
        },
        void 0,
        !1,
        {
          fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/Toolbar/Toolbar.jsx",
          lineNumber: 170,
          columnNumber: 13
        },
        void 0
      )
    ] }, void 0, !0, {
      fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/Toolbar/Toolbar.jsx",
      lineNumber: 159,
      columnNumber: 9
    }, void 0)
  ] }, void 0, !0, {
    fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/Toolbar/Toolbar.jsx",
    lineNumber: 148,
    columnNumber: 7
  }, void 0) }, void 0, !1, {
    fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/Toolbar/Toolbar.jsx",
    lineNumber: 147,
    columnNumber: 5
  }, void 0);
};
pr.displayName = "Toolbar";
var ux = process.env.NODE_ENV === "production";
function dx(n, e) {
  if (!ux) {
    if (n)
      return;
    var t = "Warning: " + e;
    typeof console < "u" && console.warn(t);
    try {
      throw Error(t);
    } catch {
    }
  }
}
/**
  * react-collapsed v4.2.0
  *
  * Copyright (c) 2019-2024, Rogin Farrer
  *
  * This source code is licensed under the MIT license found in the
  * LICENSE.md file in the root directory of this source tree.
  *
  * @license MIT
  */
var fx = class extends Error {
  constructor(n) {
    super(`react-collapsed: ${n}`);
  }
}, mn = (...n) => dx(n[0], `[react-collapsed] -- ${n[1]}`);
function hr(n) {
  const e = pe(n);
  return oe(() => {
    e.current = n;
  }), Yt((...t) => {
    var r;
    return (r = e.current) == null ? void 0 : r.call(e, ...t);
  }, []);
}
function mx(n, e, t) {
  const [r, i] = R(e), o = pe(typeof n < "u"), a = o.current ? n : r, l = hr(t), c = Yt(
    (u) => {
      const m = typeof u == "function" ? u(a) : u;
      o.current || i(m), l == null || l(m);
    },
    [l, a]
  );
  return oe(() => {
    mn(
      !(o.current && n == null),
      "`isExpanded` state is changing from controlled to uncontrolled. useCollapse should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled collapse for the lifetime of the component. Check the `isExpanded` prop."
    ), mn(
      !(!o.current && n != null),
      "`isExpanded` state is changing from uncontrolled to controlled. useCollapse should not switch from uncontrolled to controlled (or vice versa). Decide between using a controlled or uncontrolled collapse for the lifetime of the component. Check the `isExpanded` prop."
    );
  }, [n]), [a, c];
}
var px = "(prefers-reduced-motion: reduce)";
function hx() {
  const [n, e] = R(!1);
  return oe(() => {
    if (typeof window > "u" || typeof window.matchMedia != "function")
      return;
    const t = window.matchMedia(px);
    e(t.matches);
    const r = (i) => {
      e(i.matches);
    };
    if (t.addEventListener)
      return t.addEventListener("change", r), () => {
        t.removeEventListener("change", r);
      };
    if (t.addListener)
      return t.addListener(r), () => {
        t.removeListener(r);
      };
  }, []), n;
}
var gx = qe.useId || (() => {
});
function vx() {
  return gx() ?? "";
}
var bx = typeof window < "u" ? qe.useLayoutEffect : qe.useEffect, En = !1, Nx = 0, wt = () => ++Nx;
function xx(n) {
  const e = n || (En ? wt() : null), [t, r] = qe.useState(e);
  return bx(() => {
    t === null && r(wt());
  }, []), qe.useEffect(() => {
    En === !1 && (En = !0);
  }, []), t != null ? String(t) : void 0;
}
function $x(n) {
  const e = vx(), t = xx(n);
  return typeof n == "string" ? n : typeof e == "string" ? e : t;
}
function yx(n, e) {
  const t = performance.now(), r = {};
  function i() {
    r.id = requestAnimationFrame((o) => {
      o - t > e ? n() : i();
    });
  }
  return i(), r;
}
function Pt(n) {
  n.id && cancelAnimationFrame(n.id);
}
function Et(n) {
  return n != null && n.current ? n.current.scrollHeight : (mn(
    !0,
    "Was not able to find a ref to the collapse element via `getCollapseProps`. Ensure that the element exposes its `ref` prop. If it exposes the ref prop under a different name (like `innerRef`), use the `refKey` property to change it. Example:\n\nconst collapseProps = getCollapseProps({refKey: 'innerRef'})"
  ), 0);
}
function Fx(n) {
  if (!n || typeof n == "string")
    return 0;
  const e = n / 36;
  return Math.round((4 + 15 * e ** 0.25 + e / 5) * 10);
}
function Cx(n, e) {
  if (n != null)
    if (typeof n == "function")
      n(e);
    else
      try {
        n.current = e;
      } catch {
        throw new fx(`Cannot assign value "${e}" to ref "${n}"`);
      }
}
function jt(...n) {
  return n.every((e) => e == null) ? null : (e) => {
    n.forEach((t) => {
      Cx(t, e);
    });
  };
}
function Dx(n) {
  let e = (t) => {
  };
  e = (t) => {
    if (!(t != null && t.current))
      return;
    const { paddingTop: r, paddingBottom: i } = window.getComputedStyle(t.current);
    mn(
      !(r && r !== "0px" || i && i !== "0px"),
      `Padding applied to the collapse element will cause the animation to break and not perform as expected. To fix, apply equivalent padding to the direct descendent of the collapse element. Example:

Before:   <div {...getCollapseProps({style: {padding: 10}})}>{children}</div>

After:   <div {...getCollapseProps()}>
             <div style={{padding: 10}}>
                 {children}
             </div>
          </div>`
    );
  }, oe(() => {
    e(n);
  }, [n]);
}
var wx = typeof window > "u" ? oe : _r;
function Px({
  duration: n,
  easing: e = "cubic-bezier(0.4, 0, 0.2, 1)",
  onTransitionStateChange: t = () => {
  },
  isExpanded: r,
  defaultExpanded: i = !1,
  hasDisabledAnimation: o,
  id: a,
  ...l
} = {}) {
  const c = hr(t), u = $x(a ? `${a}` : void 0), [f, m] = mx(
    r,
    i
  ), g = pe(f), [p, h] = R(!1), N = hx(), H = o ?? N, F = pe(), j = pe(), P = pe(null), [S, v] = R(null);
  Dx(P);
  const U = `${l.collapsedHeight || 0}px`;
  function D(C) {
    if (!P.current)
      return;
    const b = P.current;
    for (const $ in C) {
      const M = C[$];
      M ? b.style[$] = M : b.style.removeProperty($);
    }
  }
  return wx(() => {
    if (!P.current || f === g.current)
      return;
    g.current = f;
    function b(L) {
      return H ? 0 : n ?? Fx(L);
    }
    const $ = (L) => `height ${b(L)}ms ${e}`, M = (L) => {
      function E() {
        f ? (D({
          height: "",
          overflow: "",
          transition: "",
          display: ""
        }), c("expandEnd")) : (D({ transition: "" }), c("collapseEnd")), h(!1);
      }
      j.current && Pt(j.current), j.current = yx(E, L);
    };
    return h(!0), f ? F.current = requestAnimationFrame(() => {
      c("expandStart"), D({
        display: "block",
        overflow: "hidden",
        height: U
      }), F.current = requestAnimationFrame(() => {
        c("expanding");
        const L = Et(P);
        M(b(L)), P.current && (P.current.style.transition = $(L), P.current.style.height = `${L}px`);
      });
    }) : F.current = requestAnimationFrame(() => {
      c("collapseStart");
      const L = Et(P);
      M(b(L)), D({
        transition: $(L),
        height: `${L}px`
      }), F.current = requestAnimationFrame(() => {
        c("collapsing"), D({
          height: U,
          overflow: "hidden"
        });
      });
    }), () => {
      F.current && cancelAnimationFrame(F.current), j.current && Pt(j.current);
    };
  }, [
    f,
    U,
    H,
    n,
    e,
    c
  ]), {
    isExpanded: f,
    setExpanded: m,
    getToggleProps(C) {
      const { disabled: b, onClick: $, refKey: M, ...L } = {
        refKey: "ref",
        onClick() {
        },
        disabled: !1,
        ...C
      }, E = S ? S.tagName === "BUTTON" : void 0, A = C == null ? void 0 : C[M || "ref"], Q = {
        id: `react-collapsed-toggle-${u}`,
        "aria-controls": `react-collapsed-panel-${u}`,
        "aria-expanded": f,
        onClick(de) {
          b || ($ == null || $(de), m((re) => !re));
        },
        [M || "ref"]: jt(A, v)
      }, J = {
        type: "button",
        disabled: b ? !0 : void 0
      }, ne = {
        "aria-disabled": b ? !0 : void 0,
        role: "button",
        tabIndex: b ? -1 : 0
      };
      return E === !1 ? { ...Q, ...ne, ...L } : E === !0 ? { ...Q, ...J, ...L } : {
        ...Q,
        ...J,
        ...ne,
        ...L
      };
    },
    getCollapseProps(C) {
      const { style: b, refKey: $ } = { refKey: "ref", style: {}, ...C }, M = C == null ? void 0 : C[$ || "ref"];
      return {
        id: `react-collapsed-panel-${u}`,
        "aria-hidden": !f,
        "aria-labelledby": `react-collapsed-toggle-${u}`,
        role: "region",
        ...C,
        [$ || "ref"]: jt(P, M),
        style: {
          boxSizing: "border-box",
          ...!p && !f ? {
            // collapsed and not animating
            display: U === "0px" ? "none" : "block",
            height: U,
            overflow: "hidden"
          } : {},
          // additional styles passed, e.g. getCollapseProps({style: {}})
          ...b
        }
      };
    }
  };
}
const Ex = ({ open: n, children: e }) => {
  const [t, r] = R(n), { getCollapseProps: i } = Px({
    isExpanded: t,
    duration: 500
  });
  return oe(() => {
    r(n);
  }, [n, r]), /* @__PURE__ */ s.jsxDEV(s.Fragment, { children: /* @__PURE__ */ s.jsxDEV("div", { ...i(), children: e }, void 0, !1, {
    fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/components/Collapse/Collapse.jsx",
    lineNumber: 17,
    columnNumber: 7
  }, void 0) }, void 0, !1, {
    fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/components/Collapse/Collapse.jsx",
    lineNumber: 16,
    columnNumber: 5
  }, void 0);
};
function jx(n) {
  return K({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z" }, child: [] }] })(n);
}
function Sx(n) {
  return K({ attr: { viewBox: "0 0 384 512" }, child: [{ tag: "path", attr: { d: "M288 248v28c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-28c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12zm-12 72H108c-6.6 0-12 5.4-12 12v28c0 6.6 5.4 12 12 12h168c6.6 0 12-5.4 12-12v-28c0-6.6-5.4-12-12-12zm108-188.1V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V48C0 21.5 21.5 0 48 0h204.1C264.8 0 277 5.1 286 14.1L369.9 98c9 8.9 14.1 21.2 14.1 33.9zm-128-80V128h76.1L256 51.9zM336 464V176H232c-13.3 0-24-10.7-24-24V48H48v416h288z" }, child: [] }] })(n);
}
function St(n) {
  return K({ attr: { viewBox: "0 0 576 512" }, child: [{ tag: "path", attr: { d: "M527.9 224H480v-48c0-26.5-21.5-48-48-48H272l-64-64H48C21.5 64 0 85.5 0 112v288c0 26.5 21.5 48 48 48h400c16.5 0 31.9-8.5 40.7-22.6l79.9-128c20-31.9-3-73.4-40.7-73.4zM48 118c0-3.3 2.7-6 6-6h134.1l64 64H426c3.3 0 6 2.7 6 6v42H152c-16.8 0-32.4 8.8-41.1 23.2L48 351.4zm400 282H72l77.2-128H528z" }, child: [] }] })(n);
}
function Mt(n) {
  return K({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M464 128H272l-54.63-54.63c-6-6-14.14-9.37-22.63-9.37H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V176c0-26.51-21.49-48-48-48zm0 272H48V112h140.12l54.63 54.63c6 6 14.14 9.37 22.63 9.37H464v224z" }, child: [] }] })(n);
}
const gr = ({ folder: n, onFileOpen: e }) => {
  const [t, r] = R(!1), [i, o] = R(!1), { currentPath: a, setCurrentPath: l, onFolderChange: c } = we(), u = () => {
    o(!0), e(n), l(n.path), c == null || c(n.path);
  }, f = (m) => {
    m.stopPropagation(), r((g) => !g);
  };
  return oe(() => {
    o(a === n.path);
    const m = a.split("/");
    m.pop(), m.join("/") === n.path && r(!0);
  }, [a]), n.subDirectories.length > 0 ? /* @__PURE__ */ s.jsxDEV(s.Fragment, { children: [
    /* @__PURE__ */ s.jsxDEV(
      "div",
      {
        className: `sb-folders-list-item ${i ? "active-list-item" : ""}`,
        onClick: u,
        children: [
          /* @__PURE__ */ s.jsxDEV("span", { onClick: f, children: /* @__PURE__ */ s.jsxDEV(
            oi,
            {
              size: 20,
              className: `folder-icon-default ${t ? "folder-rotate-down" : ""}`
            },
            void 0,
            !1,
            {
              fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/NavigationPane/FolderTree.jsx",
              lineNumber: 47,
              columnNumber: 13
            },
            void 0
          ) }, void 0, !1, {
            fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/NavigationPane/FolderTree.jsx",
            lineNumber: 46,
            columnNumber: 11
          }, void 0),
          /* @__PURE__ */ s.jsxDEV("div", { className: "sb-folder-details", children: [
            t || i ? /* @__PURE__ */ s.jsxDEV(St, { size: 20, className: "folder-open-icon" }, void 0, !1, {
              fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/NavigationPane/FolderTree.jsx",
              lineNumber: 54,
              columnNumber: 15
            }, void 0) : /* @__PURE__ */ s.jsxDEV(Mt, { size: 17, className: "folder-close-icon" }, void 0, !1, {
              fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/NavigationPane/FolderTree.jsx",
              lineNumber: 56,
              columnNumber: 15
            }, void 0),
            /* @__PURE__ */ s.jsxDEV("span", { className: "sb-folder-name", title: n.name, children: n.name }, void 0, !1, {
              fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/NavigationPane/FolderTree.jsx",
              lineNumber: 58,
              columnNumber: 13
            }, void 0)
          ] }, void 0, !0, {
            fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/NavigationPane/FolderTree.jsx",
            lineNumber: 52,
            columnNumber: 11
          }, void 0)
        ]
      },
      void 0,
      !0,
      {
        fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/NavigationPane/FolderTree.jsx",
        lineNumber: 42,
        columnNumber: 9
      },
      void 0
    ),
    /* @__PURE__ */ s.jsxDEV(Ex, { open: t, children: /* @__PURE__ */ s.jsxDEV("div", { className: "folder-collapsible", children: n.subDirectories.map((m, g) => /* @__PURE__ */ s.jsxDEV(gr, { folder: m, onFileOpen: e }, g, !1, {
      fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/NavigationPane/FolderTree.jsx",
      lineNumber: 66,
      columnNumber: 15
    }, void 0)) }, void 0, !1, {
      fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/NavigationPane/FolderTree.jsx",
      lineNumber: 64,
      columnNumber: 11
    }, void 0) }, void 0, !1, {
      fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/NavigationPane/FolderTree.jsx",
      lineNumber: 63,
      columnNumber: 9
    }, void 0)
  ] }, void 0, !0, {
    fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/NavigationPane/FolderTree.jsx",
    lineNumber: 41,
    columnNumber: 7
  }, void 0) : /* @__PURE__ */ s.jsxDEV(
    "div",
    {
      className: `sb-folders-list-item ${i ? "active-list-item" : ""}`,
      onClick: u,
      children: [
        /* @__PURE__ */ s.jsxDEV("span", { className: "non-expanable" }, void 0, !1, {
          fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/NavigationPane/FolderTree.jsx",
          lineNumber: 78,
          columnNumber: 9
        }, void 0),
        /* @__PURE__ */ s.jsxDEV("div", { className: "sb-folder-details", children: [
          i ? /* @__PURE__ */ s.jsxDEV(St, { size: 20, className: "folder-open-icon" }, void 0, !1, {
            fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/NavigationPane/FolderTree.jsx",
            lineNumber: 81,
            columnNumber: 13
          }, void 0) : /* @__PURE__ */ s.jsxDEV(Mt, { size: 17, className: "folder-close-icon" }, void 0, !1, {
            fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/NavigationPane/FolderTree.jsx",
            lineNumber: 83,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ s.jsxDEV("span", { className: "sb-folder-name", title: n.name, children: n.name }, void 0, !1, {
            fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/NavigationPane/FolderTree.jsx",
            lineNumber: 85,
            columnNumber: 11
          }, void 0)
        ] }, void 0, !0, {
          fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/NavigationPane/FolderTree.jsx",
          lineNumber: 79,
          columnNumber: 9
        }, void 0)
      ]
    },
    void 0,
    !0,
    {
      fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/NavigationPane/FolderTree.jsx",
      lineNumber: 74,
      columnNumber: 7
    },
    void 0
  );
}, Mx = (n) => n == null ? void 0 : n.split("/").slice(0, -1).join("/"), vr = ({ onFileOpen: n }) => {
  const [e, t] = R([]), { files: r } = vn(), i = ye(), o = (a, l) => {
    var c;
    return l[a] ? (c = l[a]) == null ? void 0 : c.map((u) => ({
      ...u,
      subDirectories: o(u.path, l)
    })) : [];
  };
  return oe(() => {
    if (Array.isArray(r)) {
      const a = r.filter((c) => c.isDirectory), l = Object.groupBy(a, ({ path: c }) => Mx(c));
      t(() => o("", l));
    }
  }, [r]), /* @__PURE__ */ s.jsxDEV("div", { className: "sb-folders-list", children: (e == null ? void 0 : e.length) > 0 ? /* @__PURE__ */ s.jsxDEV(s.Fragment, { children: e == null ? void 0 : e.map((a, l) => /* @__PURE__ */ s.jsxDEV(gr, { folder: a, onFileOpen: n }, l, !1, {
    fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/NavigationPane/NavigationPane.jsx",
    lineNumber: 41,
    columnNumber: 20
  }, void 0)) }, void 0, !1, {
    fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/NavigationPane/NavigationPane.jsx",
    lineNumber: 39,
    columnNumber: 9
  }, void 0) : /* @__PURE__ */ s.jsxDEV("div", { className: "empty-nav-pane", children: i("nothingHereYet") }, void 0, !1, {
    fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/NavigationPane/NavigationPane.jsx",
    lineNumber: 45,
    columnNumber: 9
  }, void 0) }, void 0, !1, {
    fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/NavigationPane/NavigationPane.jsx",
    lineNumber: 37,
    columnNumber: 5
  }, void 0);
};
vr.displayName = "NavigationPane";
var rn = { exports: {} }, on = { exports: {} }, se = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Tt;
function Tx() {
  if (Tt) return se;
  Tt = 1;
  var n = typeof Symbol == "function" && Symbol.for, e = n ? Symbol.for("react.element") : 60103, t = n ? Symbol.for("react.portal") : 60106, r = n ? Symbol.for("react.fragment") : 60107, i = n ? Symbol.for("react.strict_mode") : 60108, o = n ? Symbol.for("react.profiler") : 60114, a = n ? Symbol.for("react.provider") : 60109, l = n ? Symbol.for("react.context") : 60110, c = n ? Symbol.for("react.async_mode") : 60111, u = n ? Symbol.for("react.concurrent_mode") : 60111, f = n ? Symbol.for("react.forward_ref") : 60112, m = n ? Symbol.for("react.suspense") : 60113, g = n ? Symbol.for("react.suspense_list") : 60120, p = n ? Symbol.for("react.memo") : 60115, h = n ? Symbol.for("react.lazy") : 60116, N = n ? Symbol.for("react.block") : 60121, H = n ? Symbol.for("react.fundamental") : 60117, F = n ? Symbol.for("react.responder") : 60118, j = n ? Symbol.for("react.scope") : 60119;
  function P(v) {
    if (typeof v == "object" && v !== null) {
      var U = v.$$typeof;
      switch (U) {
        case e:
          switch (v = v.type, v) {
            case c:
            case u:
            case r:
            case o:
            case i:
            case m:
              return v;
            default:
              switch (v = v && v.$$typeof, v) {
                case l:
                case f:
                case h:
                case p:
                case a:
                  return v;
                default:
                  return U;
              }
          }
        case t:
          return U;
      }
    }
  }
  function S(v) {
    return P(v) === u;
  }
  return se.AsyncMode = c, se.ConcurrentMode = u, se.ContextConsumer = l, se.ContextProvider = a, se.Element = e, se.ForwardRef = f, se.Fragment = r, se.Lazy = h, se.Memo = p, se.Portal = t, se.Profiler = o, se.StrictMode = i, se.Suspense = m, se.isAsyncMode = function(v) {
    return S(v) || P(v) === c;
  }, se.isConcurrentMode = S, se.isContextConsumer = function(v) {
    return P(v) === l;
  }, se.isContextProvider = function(v) {
    return P(v) === a;
  }, se.isElement = function(v) {
    return typeof v == "object" && v !== null && v.$$typeof === e;
  }, se.isForwardRef = function(v) {
    return P(v) === f;
  }, se.isFragment = function(v) {
    return P(v) === r;
  }, se.isLazy = function(v) {
    return P(v) === h;
  }, se.isMemo = function(v) {
    return P(v) === p;
  }, se.isPortal = function(v) {
    return P(v) === t;
  }, se.isProfiler = function(v) {
    return P(v) === o;
  }, se.isStrictMode = function(v) {
    return P(v) === i;
  }, se.isSuspense = function(v) {
    return P(v) === m;
  }, se.isValidElementType = function(v) {
    return typeof v == "string" || typeof v == "function" || v === r || v === u || v === o || v === i || v === m || v === g || typeof v == "object" && v !== null && (v.$$typeof === h || v.$$typeof === p || v.$$typeof === a || v.$$typeof === l || v.$$typeof === f || v.$$typeof === H || v.$$typeof === F || v.$$typeof === j || v.$$typeof === N);
  }, se.typeOf = P, se;
}
var le = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ut;
function Ux() {
  return Ut || (Ut = 1, process.env.NODE_ENV !== "production" && (function() {
    var n = typeof Symbol == "function" && Symbol.for, e = n ? Symbol.for("react.element") : 60103, t = n ? Symbol.for("react.portal") : 60106, r = n ? Symbol.for("react.fragment") : 60107, i = n ? Symbol.for("react.strict_mode") : 60108, o = n ? Symbol.for("react.profiler") : 60114, a = n ? Symbol.for("react.provider") : 60109, l = n ? Symbol.for("react.context") : 60110, c = n ? Symbol.for("react.async_mode") : 60111, u = n ? Symbol.for("react.concurrent_mode") : 60111, f = n ? Symbol.for("react.forward_ref") : 60112, m = n ? Symbol.for("react.suspense") : 60113, g = n ? Symbol.for("react.suspense_list") : 60120, p = n ? Symbol.for("react.memo") : 60115, h = n ? Symbol.for("react.lazy") : 60116, N = n ? Symbol.for("react.block") : 60121, H = n ? Symbol.for("react.fundamental") : 60117, F = n ? Symbol.for("react.responder") : 60118, j = n ? Symbol.for("react.scope") : 60119;
    function P(T) {
      return typeof T == "string" || typeof T == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      T === r || T === u || T === o || T === i || T === m || T === g || typeof T == "object" && T !== null && (T.$$typeof === h || T.$$typeof === p || T.$$typeof === a || T.$$typeof === l || T.$$typeof === f || T.$$typeof === H || T.$$typeof === F || T.$$typeof === j || T.$$typeof === N);
    }
    function S(T) {
      if (typeof T == "object" && T !== null) {
        var ge = T.$$typeof;
        switch (ge) {
          case e:
            var je = T.type;
            switch (je) {
              case c:
              case u:
              case r:
              case o:
              case i:
              case m:
                return je;
              default:
                var Pe = je && je.$$typeof;
                switch (Pe) {
                  case l:
                  case f:
                  case h:
                  case p:
                  case a:
                    return Pe;
                  default:
                    return ge;
                }
            }
          case t:
            return ge;
        }
      }
    }
    var v = c, U = u, D = l, C = a, b = e, $ = f, M = r, L = h, E = p, A = t, Q = o, J = i, ne = m, de = !1;
    function re(T) {
      return de || (de = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), x(T) || S(T) === c;
    }
    function x(T) {
      return S(T) === u;
    }
    function w(T) {
      return S(T) === l;
    }
    function O(T) {
      return S(T) === a;
    }
    function G(T) {
      return typeof T == "object" && T !== null && T.$$typeof === e;
    }
    function I(T) {
      return S(T) === f;
    }
    function X(T) {
      return S(T) === r;
    }
    function _(T) {
      return S(T) === h;
    }
    function B(T) {
      return S(T) === p;
    }
    function q(T) {
      return S(T) === t;
    }
    function Z(T) {
      return S(T) === o;
    }
    function k(T) {
      return S(T) === i;
    }
    function ce(T) {
      return S(T) === m;
    }
    le.AsyncMode = v, le.ConcurrentMode = U, le.ContextConsumer = D, le.ContextProvider = C, le.Element = b, le.ForwardRef = $, le.Fragment = M, le.Lazy = L, le.Memo = E, le.Portal = A, le.Profiler = Q, le.StrictMode = J, le.Suspense = ne, le.isAsyncMode = re, le.isConcurrentMode = x, le.isContextConsumer = w, le.isContextProvider = O, le.isElement = G, le.isForwardRef = I, le.isFragment = X, le.isLazy = _, le.isMemo = B, le.isPortal = q, le.isProfiler = Z, le.isStrictMode = k, le.isSuspense = ce, le.isValidElementType = P, le.typeOf = S;
  })()), le;
}
var Lt;
function br() {
  return Lt || (Lt = 1, process.env.NODE_ENV === "production" ? on.exports = Tx() : on.exports = Ux()), on.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var jn, Ht;
function Lx() {
  if (Ht) return jn;
  Ht = 1;
  var n = Object.getOwnPropertySymbols, e = Object.prototype.hasOwnProperty, t = Object.prototype.propertyIsEnumerable;
  function r(o) {
    if (o == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(o);
  }
  function i() {
    try {
      if (!Object.assign)
        return !1;
      var o = new String("abc");
      if (o[5] = "de", Object.getOwnPropertyNames(o)[0] === "5")
        return !1;
      for (var a = {}, l = 0; l < 10; l++)
        a["_" + String.fromCharCode(l)] = l;
      var c = Object.getOwnPropertyNames(a).map(function(f) {
        return a[f];
      });
      if (c.join("") !== "0123456789")
        return !1;
      var u = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(f) {
        u[f] = f;
      }), Object.keys(Object.assign({}, u)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return jn = i() ? Object.assign : function(o, a) {
    for (var l, c = r(o), u, f = 1; f < arguments.length; f++) {
      l = Object(arguments[f]);
      for (var m in l)
        e.call(l, m) && (c[m] = l[m]);
      if (n) {
        u = n(l);
        for (var g = 0; g < u.length; g++)
          t.call(l, u[g]) && (c[u[g]] = l[u[g]]);
      }
    }
    return c;
  }, jn;
}
var Sn, Vt;
function In() {
  if (Vt) return Sn;
  Vt = 1;
  var n = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Sn = n, Sn;
}
var Mn, At;
function Nr() {
  return At || (At = 1, Mn = Function.call.bind(Object.prototype.hasOwnProperty)), Mn;
}
var Tn, Rt;
function Hx() {
  if (Rt) return Tn;
  Rt = 1;
  var n = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var e = /* @__PURE__ */ In(), t = {}, r = /* @__PURE__ */ Nr();
    n = function(o) {
      var a = "Warning: " + o;
      typeof console < "u" && console.error(a);
      try {
        throw new Error(a);
      } catch {
      }
    };
  }
  function i(o, a, l, c, u) {
    if (process.env.NODE_ENV !== "production") {
      for (var f in o)
        if (r(o, f)) {
          var m;
          try {
            if (typeof o[f] != "function") {
              var g = Error(
                (c || "React class") + ": " + l + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof o[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw g.name = "Invariant Violation", g;
            }
            m = o[f](a, f, c, l, null, e);
          } catch (h) {
            m = h;
          }
          if (m && !(m instanceof Error) && n(
            (c || "React class") + ": type specification of " + l + " `" + f + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof m + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), m instanceof Error && !(m.message in t)) {
            t[m.message] = !0;
            var p = u ? u() : "";
            n(
              "Failed " + l + " type: " + m.message + (p ?? "")
            );
          }
        }
    }
  }
  return i.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (t = {});
  }, Tn = i, Tn;
}
var Un, kt;
function Vx() {
  if (kt) return Un;
  kt = 1;
  var n = br(), e = Lx(), t = /* @__PURE__ */ In(), r = /* @__PURE__ */ Nr(), i = /* @__PURE__ */ Hx(), o = function() {
  };
  process.env.NODE_ENV !== "production" && (o = function(l) {
    var c = "Warning: " + l;
    typeof console < "u" && console.error(c);
    try {
      throw new Error(c);
    } catch {
    }
  });
  function a() {
    return null;
  }
  return Un = function(l, c) {
    var u = typeof Symbol == "function" && Symbol.iterator, f = "@@iterator";
    function m(x) {
      var w = x && (u && x[u] || x[f]);
      if (typeof w == "function")
        return w;
    }
    var g = "<<anonymous>>", p = {
      array: F("array"),
      bigint: F("bigint"),
      bool: F("boolean"),
      func: F("function"),
      number: F("number"),
      object: F("object"),
      string: F("string"),
      symbol: F("symbol"),
      any: j(),
      arrayOf: P,
      element: S(),
      elementType: v(),
      instanceOf: U,
      node: $(),
      objectOf: C,
      oneOf: D,
      oneOfType: b,
      shape: L,
      exact: E
    };
    function h(x, w) {
      return x === w ? x !== 0 || 1 / x === 1 / w : x !== x && w !== w;
    }
    function N(x, w) {
      this.message = x, this.data = w && typeof w == "object" ? w : {}, this.stack = "";
    }
    N.prototype = Error.prototype;
    function H(x) {
      if (process.env.NODE_ENV !== "production")
        var w = {}, O = 0;
      function G(X, _, B, q, Z, k, ce) {
        if (q = q || g, k = k || B, ce !== t) {
          if (c) {
            var T = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw T.name = "Invariant Violation", T;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var ge = q + ":" + B;
            !w[ge] && // Avoid spamming the console because they are often not actionable except for lib authors
            O < 3 && (o(
              "You are manually calling a React.PropTypes validation function for the `" + k + "` prop on `" + q + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), w[ge] = !0, O++);
          }
        }
        return _[B] == null ? X ? _[B] === null ? new N("The " + Z + " `" + k + "` is marked as required " + ("in `" + q + "`, but its value is `null`.")) : new N("The " + Z + " `" + k + "` is marked as required in " + ("`" + q + "`, but its value is `undefined`.")) : null : x(_, B, q, Z, k);
      }
      var I = G.bind(null, !1);
      return I.isRequired = G.bind(null, !0), I;
    }
    function F(x) {
      function w(O, G, I, X, _, B) {
        var q = O[G], Z = J(q);
        if (Z !== x) {
          var k = ne(q);
          return new N(
            "Invalid " + X + " `" + _ + "` of type " + ("`" + k + "` supplied to `" + I + "`, expected ") + ("`" + x + "`."),
            { expectedType: x }
          );
        }
        return null;
      }
      return H(w);
    }
    function j() {
      return H(a);
    }
    function P(x) {
      function w(O, G, I, X, _) {
        if (typeof x != "function")
          return new N("Property `" + _ + "` of component `" + I + "` has invalid PropType notation inside arrayOf.");
        var B = O[G];
        if (!Array.isArray(B)) {
          var q = J(B);
          return new N("Invalid " + X + " `" + _ + "` of type " + ("`" + q + "` supplied to `" + I + "`, expected an array."));
        }
        for (var Z = 0; Z < B.length; Z++) {
          var k = x(B, Z, I, X, _ + "[" + Z + "]", t);
          if (k instanceof Error)
            return k;
        }
        return null;
      }
      return H(w);
    }
    function S() {
      function x(w, O, G, I, X) {
        var _ = w[O];
        if (!l(_)) {
          var B = J(_);
          return new N("Invalid " + I + " `" + X + "` of type " + ("`" + B + "` supplied to `" + G + "`, expected a single ReactElement."));
        }
        return null;
      }
      return H(x);
    }
    function v() {
      function x(w, O, G, I, X) {
        var _ = w[O];
        if (!n.isValidElementType(_)) {
          var B = J(_);
          return new N("Invalid " + I + " `" + X + "` of type " + ("`" + B + "` supplied to `" + G + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return H(x);
    }
    function U(x) {
      function w(O, G, I, X, _) {
        if (!(O[G] instanceof x)) {
          var B = x.name || g, q = re(O[G]);
          return new N("Invalid " + X + " `" + _ + "` of type " + ("`" + q + "` supplied to `" + I + "`, expected ") + ("instance of `" + B + "`."));
        }
        return null;
      }
      return H(w);
    }
    function D(x) {
      if (!Array.isArray(x))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? o(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : o("Invalid argument supplied to oneOf, expected an array.")), a;
      function w(O, G, I, X, _) {
        for (var B = O[G], q = 0; q < x.length; q++)
          if (h(B, x[q]))
            return null;
        var Z = JSON.stringify(x, function(ce, T) {
          var ge = ne(T);
          return ge === "symbol" ? String(T) : T;
        });
        return new N("Invalid " + X + " `" + _ + "` of value `" + String(B) + "` " + ("supplied to `" + I + "`, expected one of " + Z + "."));
      }
      return H(w);
    }
    function C(x) {
      function w(O, G, I, X, _) {
        if (typeof x != "function")
          return new N("Property `" + _ + "` of component `" + I + "` has invalid PropType notation inside objectOf.");
        var B = O[G], q = J(B);
        if (q !== "object")
          return new N("Invalid " + X + " `" + _ + "` of type " + ("`" + q + "` supplied to `" + I + "`, expected an object."));
        for (var Z in B)
          if (r(B, Z)) {
            var k = x(B, Z, I, X, _ + "." + Z, t);
            if (k instanceof Error)
              return k;
          }
        return null;
      }
      return H(w);
    }
    function b(x) {
      if (!Array.isArray(x))
        return process.env.NODE_ENV !== "production" && o("Invalid argument supplied to oneOfType, expected an instance of array."), a;
      for (var w = 0; w < x.length; w++) {
        var O = x[w];
        if (typeof O != "function")
          return o(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + de(O) + " at index " + w + "."
          ), a;
      }
      function G(I, X, _, B, q) {
        for (var Z = [], k = 0; k < x.length; k++) {
          var ce = x[k], T = ce(I, X, _, B, q, t);
          if (T == null)
            return null;
          T.data && r(T.data, "expectedType") && Z.push(T.data.expectedType);
        }
        var ge = Z.length > 0 ? ", expected one of type [" + Z.join(", ") + "]" : "";
        return new N("Invalid " + B + " `" + q + "` supplied to " + ("`" + _ + "`" + ge + "."));
      }
      return H(G);
    }
    function $() {
      function x(w, O, G, I, X) {
        return A(w[O]) ? null : new N("Invalid " + I + " `" + X + "` supplied to " + ("`" + G + "`, expected a ReactNode."));
      }
      return H(x);
    }
    function M(x, w, O, G, I) {
      return new N(
        (x || "React class") + ": " + w + " type `" + O + "." + G + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + I + "`."
      );
    }
    function L(x) {
      function w(O, G, I, X, _) {
        var B = O[G], q = J(B);
        if (q !== "object")
          return new N("Invalid " + X + " `" + _ + "` of type `" + q + "` " + ("supplied to `" + I + "`, expected `object`."));
        for (var Z in x) {
          var k = x[Z];
          if (typeof k != "function")
            return M(I, X, _, Z, ne(k));
          var ce = k(B, Z, I, X, _ + "." + Z, t);
          if (ce)
            return ce;
        }
        return null;
      }
      return H(w);
    }
    function E(x) {
      function w(O, G, I, X, _) {
        var B = O[G], q = J(B);
        if (q !== "object")
          return new N("Invalid " + X + " `" + _ + "` of type `" + q + "` " + ("supplied to `" + I + "`, expected `object`."));
        var Z = e({}, O[G], x);
        for (var k in Z) {
          var ce = x[k];
          if (r(x, k) && typeof ce != "function")
            return M(I, X, _, k, ne(ce));
          if (!ce)
            return new N(
              "Invalid " + X + " `" + _ + "` key `" + k + "` supplied to `" + I + "`.\nBad object: " + JSON.stringify(O[G], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(x), null, "  ")
            );
          var T = ce(B, k, I, X, _ + "." + k, t);
          if (T)
            return T;
        }
        return null;
      }
      return H(w);
    }
    function A(x) {
      switch (typeof x) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !x;
        case "object":
          if (Array.isArray(x))
            return x.every(A);
          if (x === null || l(x))
            return !0;
          var w = m(x);
          if (w) {
            var O = w.call(x), G;
            if (w !== x.entries) {
              for (; !(G = O.next()).done; )
                if (!A(G.value))
                  return !1;
            } else
              for (; !(G = O.next()).done; ) {
                var I = G.value;
                if (I && !A(I[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function Q(x, w) {
      return x === "symbol" ? !0 : w ? w["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && w instanceof Symbol : !1;
    }
    function J(x) {
      var w = typeof x;
      return Array.isArray(x) ? "array" : x instanceof RegExp ? "object" : Q(w, x) ? "symbol" : w;
    }
    function ne(x) {
      if (typeof x > "u" || x === null)
        return "" + x;
      var w = J(x);
      if (w === "object") {
        if (x instanceof Date)
          return "date";
        if (x instanceof RegExp)
          return "regexp";
      }
      return w;
    }
    function de(x) {
      var w = ne(x);
      switch (w) {
        case "array":
        case "object":
          return "an " + w;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + w;
        default:
          return w;
      }
    }
    function re(x) {
      return !x.constructor || !x.constructor.name ? g : x.constructor.name;
    }
    return p.checkPropTypes = i, p.resetWarningCache = i.resetWarningCache, p.PropTypes = p, p;
  }, Un;
}
var Ln, zt;
function Ax() {
  if (zt) return Ln;
  zt = 1;
  var n = /* @__PURE__ */ In();
  function e() {
  }
  function t() {
  }
  return t.resetWarningCache = e, Ln = function() {
    function r(a, l, c, u, f, m) {
      if (m !== n) {
        var g = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw g.name = "Invariant Violation", g;
      }
    }
    r.isRequired = r;
    function i() {
      return r;
    }
    var o = {
      array: r,
      bigint: r,
      bool: r,
      func: r,
      number: r,
      object: r,
      string: r,
      symbol: r,
      any: r,
      arrayOf: i,
      element: r,
      elementType: r,
      instanceOf: i,
      node: r,
      objectOf: i,
      oneOf: i,
      oneOfType: i,
      shape: i,
      exact: i,
      checkPropTypes: t,
      resetWarningCache: e
    };
    return o.PropTypes = o, o;
  }, Ln;
}
var Ot;
function Rx() {
  if (Ot) return rn.exports;
  if (Ot = 1, process.env.NODE_ENV !== "production") {
    var n = br(), e = !0;
    rn.exports = /* @__PURE__ */ Vx()(n.isElement, e);
  } else
    rn.exports = /* @__PURE__ */ Ax()();
  return rn.exports;
}
var kx = /* @__PURE__ */ Rx();
const z = /* @__PURE__ */ Br(kx);
function zx(n) {
  return K({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M18 3a3 3 0 0 1 2.995 2.824l.005 .176v12a3 3 0 0 1 -2.824 2.995l-.176 .005h-12a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-12a3 3 0 0 1 2.824 -2.995l.176 -.005h12zm0 2h-9v14h9a1 1 0 0 0 .993 -.883l.007 -.117v-12a1 1 0 0 0 -.883 -.993l-.117 -.007zm-2.293 4.293a1 1 0 0 1 .083 1.32l-.083 .094l-1.292 1.293l1.292 1.293a1 1 0 0 1 .083 1.32l-.083 .094a1 1 0 0 1 -1.32 .083l-.094 -.083l-2 -2a1 1 0 0 1 -.083 -1.32l.083 -.094l2 -2a1 1 0 0 1 1.414 0z" }, child: [] }] })(n);
}
function Ox(n) {
  return K({ attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "path", attr: { d: "M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" }, child: [] }, { tag: "path", attr: { d: "M9 4v16" }, child: [] }, { tag: "path", attr: { d: "M14 10l2 2l-2 2" }, child: [] }] })(n);
}
const Gn = ({ collapsibleNav: n, isNavigationPaneOpen: e, setNavigationPaneOpen: t }) => {
  const [r, i] = R([]), [o, a] = R([]), [l, c] = R([]), [u, f] = R(!1), { currentPath: m, setCurrentPath: g, onFolderChange: p } = we(), h = pe(null), N = pe([]), H = pe(null), F = Ze(() => {
    f(!1);
  }), j = ye(), P = pe(null);
  oe(() => {
    i(() => {
      let C = "";
      return m == null ? void 0 : m.split("/").map((b) => ({
        name: b || j("home"),
        path: b === "" ? b : C += `/${b}`
      }));
    }), a([]), c([]);
  }, [m, j]);
  const S = (C) => {
    g(C), p == null || p(C);
  }, v = () => {
    var J;
    const C = h.current.clientWidth, b = getComputedStyle(h.current), $ = parseFloat(b.paddingLeft), M = n ? 2 : 0, E = n ? ((J = P.current) == null ? void 0 : J.clientWidth) + 1 : 0, A = o.length > 0 ? 1 : 0, Q = parseFloat(b.gap) * (r.length + A + M);
    return C - ($ + Q + E);
  }, U = () => {
    var M;
    const C = v(), b = N.current.reduce((L, E) => E ? L + E.clientWidth : L, 0), $ = ((M = H.current) == null ? void 0 : M.clientWidth) || 0;
    return C - (b + $);
  }, D = () => h.current.scrollWidth > h.current.clientWidth;
  return oe(() => {
    var C;
    if (D()) {
      const b = r[1], $ = (C = N.current[1]) == null ? void 0 : C.clientWidth;
      c((M) => [...M, $]), a((M) => [...M, b]), i((M) => M.filter((L, E) => E !== 1));
    } else if (o.length > 0 && U() > l.at(-1)) {
      const b = [r[0], o.at(-1), ...r.slice(1)];
      i(b), a(($) => $.slice(0, -1)), c(($) => $.slice(0, -1));
    }
  }, [D]), /* @__PURE__ */ s.jsxDEV("div", { className: "bread-crumb-container", children: [
    /* @__PURE__ */ s.jsxDEV("div", { className: "breadcrumb", ref: h, children: [
      n && /* @__PURE__ */ s.jsxDEV(s.Fragment, { children: [
        /* @__PURE__ */ s.jsxDEV(
          "div",
          {
            ref: P,
            className: "nav-toggler",
            title: `${j(e ? "collapseNavigationPane" : "expandNavigationPane")}`,
            children: /* @__PURE__ */ s.jsxDEV(
              "span",
              {
                className: "folder-name folder-name-btn",
                onClick: () => t((C) => !C),
                children: e ? /* @__PURE__ */ s.jsxDEV(zx, {}, void 0, !1, {
                  fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/BreadCrumb/BreadCrumb.jsx",
                  lineNumber: 105,
                  columnNumber: 19
                }, void 0) : /* @__PURE__ */ s.jsxDEV(Ox, {}, void 0, !1, {
                  fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/BreadCrumb/BreadCrumb.jsx",
                  lineNumber: 107,
                  columnNumber: 19
                }, void 0)
              },
              void 0,
              !1,
              {
                fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/BreadCrumb/BreadCrumb.jsx",
                lineNumber: 100,
                columnNumber: 15
              },
              void 0
            )
          },
          void 0,
          !1,
          {
            fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/BreadCrumb/BreadCrumb.jsx",
            lineNumber: 93,
            columnNumber: 13
          },
          void 0
        ),
        /* @__PURE__ */ s.jsxDEV("div", { className: "divider" }, void 0, !1, {
          fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/BreadCrumb/BreadCrumb.jsx",
          lineNumber: 111,
          columnNumber: 13
        }, void 0)
      ] }, void 0, !0, {
        fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/BreadCrumb/BreadCrumb.jsx",
        lineNumber: 92,
        columnNumber: 11
      }, void 0),
      r.map((C, b) => /* @__PURE__ */ s.jsxDEV("div", { style: { display: "contents" }, children: [
        /* @__PURE__ */ s.jsxDEV(
          "span",
          {
            className: "folder-name",
            onClick: () => S(C.path),
            ref: ($) => N.current[b] = $,
            children: [
              b === 0 ? /* @__PURE__ */ s.jsxDEV(ri, {}, void 0, !1, {
                fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/BreadCrumb/BreadCrumb.jsx",
                lineNumber: 121,
                columnNumber: 30
              }, void 0) : /* @__PURE__ */ s.jsxDEV(li, {}, void 0, !1, {
                fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/BreadCrumb/BreadCrumb.jsx",
                lineNumber: 121,
                columnNumber: 43
              }, void 0),
              C.name
            ]
          },
          void 0,
          !0,
          {
            fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/BreadCrumb/BreadCrumb.jsx",
            lineNumber: 116,
            columnNumber: 13
          },
          void 0
        ),
        (o == null ? void 0 : o.length) > 0 && b === 0 && /* @__PURE__ */ s.jsxDEV(
          "button",
          {
            className: "folder-name folder-name-btn",
            onClick: () => f(!0),
            ref: H,
            title: j("showMoreFolder"),
            children: /* @__PURE__ */ s.jsxDEV(si, { size: 22, className: "hidden-folders" }, void 0, !1, {
              fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/BreadCrumb/BreadCrumb.jsx",
              lineNumber: 131,
              columnNumber: 17
            }, void 0)
          },
          void 0,
          !1,
          {
            fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/BreadCrumb/BreadCrumb.jsx",
            lineNumber: 125,
            columnNumber: 15
          },
          void 0
        )
      ] }, b, !0, {
        fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/BreadCrumb/BreadCrumb.jsx",
        lineNumber: 115,
        columnNumber: 11
      }, void 0))
    ] }, void 0, !0, {
      fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/BreadCrumb/BreadCrumb.jsx",
      lineNumber: 90,
      columnNumber: 7
    }, void 0),
    u && /* @__PURE__ */ s.jsxDEV("ul", { ref: F.ref, className: "hidden-folders-container", children: o.map((C, b) => /* @__PURE__ */ s.jsxDEV(
      "li",
      {
        onClick: () => {
          S(C.path), f(!1);
        },
        children: C.name
      },
      b,
      !1,
      {
        fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/BreadCrumb/BreadCrumb.jsx",
        lineNumber: 141,
        columnNumber: 13
      },
      void 0
    )) }, void 0, !1, {
      fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/BreadCrumb/BreadCrumb.jsx",
      lineNumber: 139,
      columnNumber: 9
    }, void 0)
  ] }, void 0, !0, {
    fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/BreadCrumb/BreadCrumb.jsx",
    lineNumber: 89,
    columnNumber: 5
  }, void 0);
};
Gn.displayName = "BreadCrumb";
Gn.propTypes = {
  isNavigationPaneOpen: z.bool.isRequired,
  setNavigationPaneOpen: z.func.isRequired
};
const pn = (n) => ({
  pdf: /* @__PURE__ */ s.jsxDEV(mi, { size: n }, void 0, !1, {
    fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/hooks/useFileIcons.jsx",
    lineNumber: 17,
    columnNumber: 10
  }, void 0),
  jpg: /* @__PURE__ */ s.jsxDEV(wn, { size: n }, void 0, !1, {
    fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/hooks/useFileIcons.jsx",
    lineNumber: 18,
    columnNumber: 10
  }, void 0),
  jpeg: /* @__PURE__ */ s.jsxDEV(wn, { size: n }, void 0, !1, {
    fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/hooks/useFileIcons.jsx",
    lineNumber: 19,
    columnNumber: 11
  }, void 0),
  png: /* @__PURE__ */ s.jsxDEV(wn, { size: n }, void 0, !1, {
    fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/hooks/useFileIcons.jsx",
    lineNumber: 20,
    columnNumber: 10
  }, void 0),
  txt: /* @__PURE__ */ s.jsxDEV(fi, { size: n }, void 0, !1, {
    fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/hooks/useFileIcons.jsx",
    lineNumber: 21,
    columnNumber: 10
  }, void 0),
  doc: /* @__PURE__ */ s.jsxDEV(ut, { size: n }, void 0, !1, {
    fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/hooks/useFileIcons.jsx",
    lineNumber: 22,
    columnNumber: 10
  }, void 0),
  docx: /* @__PURE__ */ s.jsxDEV(ut, { size: n }, void 0, !1, {
    fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/hooks/useFileIcons.jsx",
    lineNumber: 23,
    columnNumber: 11
  }, void 0),
  mp4: /* @__PURE__ */ s.jsxDEV(ct, { size: n }, void 0, !1, {
    fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/hooks/useFileIcons.jsx",
    lineNumber: 24,
    columnNumber: 10
  }, void 0),
  webm: /* @__PURE__ */ s.jsxDEV(ct, { size: n }, void 0, !1, {
    fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/hooks/useFileIcons.jsx",
    lineNumber: 25,
    columnNumber: 11
  }, void 0),
  mp3: /* @__PURE__ */ s.jsxDEV(at, { size: n }, void 0, !1, {
    fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/hooks/useFileIcons.jsx",
    lineNumber: 26,
    columnNumber: 10
  }, void 0),
  m4a: /* @__PURE__ */ s.jsxDEV(at, { size: n }, void 0, !1, {
    fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/hooks/useFileIcons.jsx",
    lineNumber: 27,
    columnNumber: 10
  }, void 0),
  zip: /* @__PURE__ */ s.jsxDEV(pi, { size: n }, void 0, !1, {
    fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/hooks/useFileIcons.jsx",
    lineNumber: 28,
    columnNumber: 10
  }, void 0),
  ppt: /* @__PURE__ */ s.jsxDEV(lt, { size: n }, void 0, !1, {
    fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/hooks/useFileIcons.jsx",
    lineNumber: 29,
    columnNumber: 10
  }, void 0),
  pptx: /* @__PURE__ */ s.jsxDEV(lt, { size: n }, void 0, !1, {
    fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/hooks/useFileIcons.jsx",
    lineNumber: 30,
    columnNumber: 11
  }, void 0),
  xls: /* @__PURE__ */ s.jsxDEV(st, { size: n }, void 0, !1, {
    fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/hooks/useFileIcons.jsx",
    lineNumber: 31,
    columnNumber: 10
  }, void 0),
  xlsx: /* @__PURE__ */ s.jsxDEV(st, { size: n }, void 0, !1, {
    fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/hooks/useFileIcons.jsx",
    lineNumber: 32,
    columnNumber: 11
  }, void 0),
  exe: /* @__PURE__ */ s.jsxDEV(di, { size: n }, void 0, !1, {
    fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/hooks/useFileIcons.jsx",
    lineNumber: 33,
    columnNumber: 10
  }, void 0),
  html: /* @__PURE__ */ s.jsxDEV(be, { size: n }, void 0, !1, {
    fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/hooks/useFileIcons.jsx",
    lineNumber: 34,
    columnNumber: 11
  }, void 0),
  css: /* @__PURE__ */ s.jsxDEV(be, { size: n }, void 0, !1, {
    fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/hooks/useFileIcons.jsx",
    lineNumber: 35,
    columnNumber: 10
  }, void 0),
  js: /* @__PURE__ */ s.jsxDEV(be, { size: n }, void 0, !1, {
    fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/hooks/useFileIcons.jsx",
    lineNumber: 36,
    columnNumber: 9
  }, void 0),
  php: /* @__PURE__ */ s.jsxDEV(be, { size: n }, void 0, !1, {
    fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/hooks/useFileIcons.jsx",
    lineNumber: 37,
    columnNumber: 10
  }, void 0),
  py: /* @__PURE__ */ s.jsxDEV(be, { size: n }, void 0, !1, {
    fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/hooks/useFileIcons.jsx",
    lineNumber: 38,
    columnNumber: 9
  }, void 0),
  java: /* @__PURE__ */ s.jsxDEV(be, { size: n }, void 0, !1, {
    fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/hooks/useFileIcons.jsx",
    lineNumber: 39,
    columnNumber: 11
  }, void 0),
  cpp: /* @__PURE__ */ s.jsxDEV(be, { size: n }, void 0, !1, {
    fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/hooks/useFileIcons.jsx",
    lineNumber: 40,
    columnNumber: 10
  }, void 0),
  c: /* @__PURE__ */ s.jsxDEV(be, { size: n }, void 0, !1, {
    fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/hooks/useFileIcons.jsx",
    lineNumber: 41,
    columnNumber: 8
  }, void 0),
  ts: /* @__PURE__ */ s.jsxDEV(be, { size: n }, void 0, !1, {
    fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/hooks/useFileIcons.jsx",
    lineNumber: 42,
    columnNumber: 9
  }, void 0),
  jsx: /* @__PURE__ */ s.jsxDEV(be, { size: n }, void 0, !1, {
    fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/hooks/useFileIcons.jsx",
    lineNumber: 43,
    columnNumber: 10
  }, void 0),
  tsx: /* @__PURE__ */ s.jsxDEV(be, { size: n }, void 0, !1, {
    fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/hooks/useFileIcons.jsx",
    lineNumber: 44,
    columnNumber: 10
  }, void 0),
  json: /* @__PURE__ */ s.jsxDEV(be, { size: n }, void 0, !1, {
    fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/hooks/useFileIcons.jsx",
    lineNumber: 45,
    columnNumber: 11
  }, void 0),
  xml: /* @__PURE__ */ s.jsxDEV(be, { size: n }, void 0, !1, {
    fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/hooks/useFileIcons.jsx",
    lineNumber: 46,
    columnNumber: 10
  }, void 0),
  sql: /* @__PURE__ */ s.jsxDEV(be, { size: n }, void 0, !1, {
    fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/hooks/useFileIcons.jsx",
    lineNumber: 47,
    columnNumber: 10
  }, void 0),
  csv: /* @__PURE__ */ s.jsxDEV(be, { size: n }, void 0, !1, {
    fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/hooks/useFileIcons.jsx",
    lineNumber: 48,
    columnNumber: 10
  }, void 0),
  md: /* @__PURE__ */ s.jsxDEV(be, { size: n }, void 0, !1, {
    fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/hooks/useFileIcons.jsx",
    lineNumber: 49,
    columnNumber: 9
  }, void 0),
  svg: /* @__PURE__ */ s.jsxDEV(be, { size: n }, void 0, !1, {
    fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/hooks/useFileIcons.jsx",
    lineNumber: 50,
    columnNumber: 10
  }, void 0)
}), xr = (n, e, t) => {
  if (t.find((r) => r.name === n)) {
    const i = n;
    let o = 0;
    const a = new RegExp(`${i} \\(\\d+\\)`);
    t.forEach((u) => {
      const f = u.isDirectory ? u.name : u.name.split(".").slice(0, -1).join(".");
      if (a.test(f)) {
        const m = f.split(`${i} (`).pop().slice(0, -1), g = parseInt(m);
        !isNaN(g) && g > o && (o = g);
      }
    });
    const l = ` (${++o})`;
    return i + l + "";
  } else
    return n;
}, $r = ({ nameInputRef: n, id: e, maxLength: t, value: r, onChange: i, onKeyDown: o, onClick: a, rows: l }) => /* @__PURE__ */ s.jsxDEV(
  "textarea",
  {
    ref: n,
    id: e,
    className: "rename-file",
    maxLength: t,
    value: r,
    onChange: i,
    onKeyDown: o,
    onClick: a,
    rows: l
  },
  void 0,
  !1,
  {
    fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/components/NameInput/NameInput.jsx",
    lineNumber: 5,
    columnNumber: 5
  },
  void 0
), yr = ({ message: n, xPlacement: e, yPlacement: t }) => /* @__PURE__ */ s.jsxDEV("p", { className: `error-tooltip ${e} ${t}`, children: n }, void 0, !1, {
  fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/components/ErrorTooltip/ErrorTooltip.jsx",
  lineNumber: 4,
  columnNumber: 10
}, void 0), Ix = 220, Gx = ({ filesViewRef: n, file: e, onCreateFolder: t, triggerAction: r }) => {
  const [i, o] = R(e.name), [a, l] = R(!1), [c, u] = R(""), [f, m] = R("right"), [g, p] = R("bottom"), h = Ze((D) => {
    D.preventDefault(), D.stopPropagation();
  }), { currentFolder: N, currentPathFiles: H, setCurrentPathFiles: F } = we(), { activeLayout: j } = He(), P = ye(), S = (D) => {
    o(D.target.value), l(!1);
  }, v = (D) => {
    if (D.stopPropagation(), D.key === "Enter") {
      D.preventDefault(), U();
      return;
    }
    if (D.key === "Escape") {
      D.preventDefault(), r.close(), F((b) => b.filter(($) => $.key !== e.key));
      return;
    }
    /[\\/:*?"<>|]/.test(D.key) ? (D.preventDefault(), u(P("invalidFileName")), l(!0)) : (l(!1), u(""));
  };
  oe(() => {
    if (a) {
      const D = setTimeout(() => {
        l(!1), u("");
      }, 7e3);
      return () => clearTimeout(D);
    }
  }, [a]);
  function U() {
    var $, M;
    let D = i.trim();
    const C = H.filter((L) => !(L.key && L.key === e.key));
    if (C.find((L) => L.name.toLowerCase() === D.toLowerCase())) {
      u(P("folderExists", { renameFile: D })), l(!0), ($ = h.ref.current) == null || $.focus(), (M = h.ref.current) == null || M.select(), h.setIsClicked(!1);
      return;
    }
    D === "" && (D = xr("New Folder", !0, C)), Ae(t, "onCreateFolder", D, N), F((L) => L.filter((E) => E.key !== e.key)), r.close();
  }
  return oe(() => {
    var D, C, b;
    if ((D = h.ref.current) == null || D.focus(), (C = h.ref.current) == null || C.select(), (b = h.ref) != null && b.current) {
      const E = n.current.getBoundingClientRect(), A = h.ref.current, Q = A.getBoundingClientRect();
      E.right - Q.left > 313 ? m("right") : m("left"), E.bottom - (Q.top + A.clientHeight) > 88 ? p("bottom") : p("top");
    }
  }, []), oe(() => {
    h.isClicked && U();
  }, [h.isClicked]), /* @__PURE__ */ s.jsxDEV(s.Fragment, { children: [
    /* @__PURE__ */ s.jsxDEV(
      $r,
      {
        id: "newFolder",
        nameInputRef: h.ref,
        maxLength: Ix,
        value: i,
        onChange: S,
        onKeyDown: v,
        onClick: (D) => D.stopPropagation(),
        ...j === "list" && { rows: 1 }
      },
      void 0,
      !1,
      {
        fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/Actions/CreateFolder/CreateFolder.action.jsx",
        lineNumber: 137,
        columnNumber: 7
      },
      void 0
    ),
    a && /* @__PURE__ */ s.jsxDEV(
      yr,
      {
        message: c,
        xPlacement: f,
        yPlacement: g
      },
      void 0,
      !1,
      {
        fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/Actions/CreateFolder/CreateFolder.action.jsx",
        lineNumber: 148,
        columnNumber: 9
      },
      void 0
    )
  ] }, void 0, !0, {
    fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/Actions/CreateFolder/CreateFolder.action.jsx",
    lineNumber: 136,
    columnNumber: 5
  }, void 0);
}, Ge = ({ onClick: n, onKeyDown: e, type: t = "primary", padding: r = "0.4rem 0.8rem", children: i }) => /* @__PURE__ */ s.jsxDEV(
  "button",
  {
    onClick: n,
    onKeyDown: e,
    className: `fm-button fm-button-${t}`,
    style: { padding: r },
    children: i
  },
  void 0,
  !1,
  {
    fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/components/Button/Button.jsx",
    lineNumber: 5,
    columnNumber: 5
  },
  void 0
);
function _x(n) {
  return K({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { fill: "none", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "32", d: "M85.57 446.25h340.86a32 32 0 0 0 28.17-47.17L284.18 82.58c-12.09-22.44-44.27-22.44-56.36 0L57.4 399.08a32 32 0 0 0 28.17 47.17z" }, child: [] }, { tag: "path", attr: { fill: "none", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "32", d: "m250.26 195.39 5.74 122 5.73-121.95a5.74 5.74 0 0 0-5.79-6h0a5.74 5.74 0 0 0-5.68 5.95z" }, child: [] }, { tag: "path", attr: { d: "M256 397.25a20 20 0 1 1 20-20 20 20 0 0 1-20 20z" }, child: [] }] })(n);
}
const Fr = ({
  children: n,
  show: e,
  setShow: t,
  heading: r,
  dialogWidth: i = "25%",
  contentClassName: o = "",
  closeButton: a = !0
}) => {
  const l = pe(null), c = ye(), u = (f) => {
    f.key === "Escape" && t(!1);
  };
  return oe(() => {
    e ? l.current.showModal() : l.current.close();
  }, [e]), /* @__PURE__ */ s.jsxDEV(
    "dialog",
    {
      ref: l,
      className: "fm-modal dialog",
      style: { width: i },
      onKeyDown: u,
      children: [
        /* @__PURE__ */ s.jsxDEV("div", { className: "fm-modal-header", children: [
          /* @__PURE__ */ s.jsxDEV("span", { className: "fm-modal-heading", children: r }, void 0, !1, {
            fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/components/Modal/Modal.jsx",
            lineNumber: 40,
            columnNumber: 9
          }, void 0),
          a && /* @__PURE__ */ s.jsxDEV(
            ai,
            {
              size: 18,
              onClick: () => t(!1),
              className: "close-icon",
              title: c("close")
            },
            void 0,
            !1,
            {
              fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/components/Modal/Modal.jsx",
              lineNumber: 42,
              columnNumber: 11
            },
            void 0
          )
        ] }, void 0, !0, {
          fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/components/Modal/Modal.jsx",
          lineNumber: 39,
          columnNumber: 7
        }, void 0),
        n
      ]
    },
    void 0,
    !0,
    {
      fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/components/Modal/Modal.jsx",
      lineNumber: 33,
      columnNumber: 5
    },
    void 0
  );
}, Ie = (n) => n.split(".").pop(), Bx = 220, Wx = ({ filesViewRef: n, file: e, onRename: t, triggerAction: r }) => {
  const [i, o] = R(e == null ? void 0 : e.name), [a, l] = R(!1), [c, u] = R(!1), [f, m] = R(""), [g, p] = R("right"), [h, N] = R("bottom"), { currentPathFiles: H, setCurrentPathFiles: F } = we(), { activeLayout: j } = He(), P = ye(), S = pe(null), v = Ze((b) => {
    var $;
    ($ = S.current) != null && $.contains(b.target) || (b.preventDefault(), b.stopPropagation());
  }), U = (b) => {
    if (b.stopPropagation(), b.key === "Enter") {
      b.preventDefault(), v.setIsClicked(!0);
      return;
    }
    if (b.key === "Escape") {
      b.preventDefault(), F(
        (M) => M.map((L) => (L.key === e.key && (L.isEditing = !1), L))
      ), r.close();
      return;
    }
    /[\\/:*?"<>|]/.test(b.key) ? (b.preventDefault(), m(P("invalidFileName")), u(!0)) : u(!1);
  };
  oe(() => {
    if (c) {
      const b = setTimeout(() => {
        u(!1), m("");
      }, 7e3);
      return () => clearTimeout(b);
    }
  }, [c]);
  function D(b) {
    if (i === "" || i === e.name) {
      F(
        ($) => $.map((M) => (M.key === e.key && (M.isEditing = !1), M))
      ), r.close();
      return;
    } else if (H.some(($) => $.name === i)) {
      u(!0), m(P("folderExists", { renameFile: i })), v.setIsClicked(!1);
      return;
    } else if (!e.isDirectory && !b) {
      const $ = Ie(e.name), M = Ie(i);
      if ($ !== M) {
        l(!0);
        return;
      }
    }
    u(!1), Ae(t, "onRename", e, i), F(($) => $.filter((M) => M.key !== e.key)), r.close();
  }
  const C = () => {
    var b, $, M, L, E, A;
    if (($ = (b = v.ref) == null ? void 0 : b.current) == null || $.focus(), e.isDirectory)
      (L = (M = v.ref) == null ? void 0 : M.current) == null || L.select();
    else {
      const Q = Ie(e.name), J = e.name.length - Q.length - 1;
      (A = (E = v.ref) == null ? void 0 : E.current) == null || A.setSelectionRange(0, J);
    }
  };
  return oe(() => {
    var b;
    if (C(), (b = v.ref) != null && b.current) {
      const E = n.current.getBoundingClientRect(), A = v.ref.current, Q = A.getBoundingClientRect();
      E.right - Q.left > 313 ? p("right") : p("left"), E.bottom - (Q.top + A.clientHeight) > 88 ? N("bottom") : N("top");
    }
  }, []), oe(() => {
    v.isClicked && D(!1), C();
  }, [v.isClicked]), /* @__PURE__ */ s.jsxDEV(s.Fragment, { children: [
    /* @__PURE__ */ s.jsxDEV(
      $r,
      {
        id: e.name,
        nameInputRef: v.ref,
        maxLength: Bx,
        value: i,
        onChange: (b) => {
          o(b.target.value), u(!1);
        },
        onKeyDown: U,
        onClick: (b) => b.stopPropagation(),
        ...j === "list" && { rows: 1 }
      },
      void 0,
      !1,
      {
        fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/Actions/Rename/Rename.action.jsx",
        lineNumber: 158,
        columnNumber: 7
      },
      void 0
    ),
    c && /* @__PURE__ */ s.jsxDEV(
      yr,
      {
        message: f,
        xPlacement: g,
        yPlacement: h
      },
      void 0,
      !1,
      {
        fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/Actions/Rename/Rename.action.jsx",
        lineNumber: 172,
        columnNumber: 9
      },
      void 0
    ),
    /* @__PURE__ */ s.jsxDEV(
      Fr,
      {
        heading: P("rename"),
        show: a,
        setShow: l,
        dialogWidth: "25vw",
        closeButton: !1,
        children: /* @__PURE__ */ s.jsxDEV("div", { className: "fm-rename-folder-container", ref: S, children: [
          /* @__PURE__ */ s.jsxDEV("div", { className: "fm-rename-folder-input", children: /* @__PURE__ */ s.jsxDEV("div", { className: "fm-rename-warning", children: [
            /* @__PURE__ */ s.jsxDEV(_x, { size: 70, color: "orange" }, void 0, !1, {
              fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/Actions/Rename/Rename.action.jsx",
              lineNumber: 189,
              columnNumber: 15
            }, void 0),
            /* @__PURE__ */ s.jsxDEV("div", { children: P("fileNameChangeWarning") }, void 0, !1, {
              fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/Actions/Rename/Rename.action.jsx",
              lineNumber: 190,
              columnNumber: 15
            }, void 0)
          ] }, void 0, !0, {
            fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/Actions/Rename/Rename.action.jsx",
            lineNumber: 188,
            columnNumber: 13
          }, void 0) }, void 0, !1, {
            fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/Actions/Rename/Rename.action.jsx",
            lineNumber: 187,
            columnNumber: 11
          }, void 0),
          /* @__PURE__ */ s.jsxDEV("div", { className: "fm-rename-folder-action", children: [
            /* @__PURE__ */ s.jsxDEV(
              Ge,
              {
                type: "secondary",
                onClick: () => {
                  F(
                    (b) => b.map(($) => ($.key === e.key && ($.isEditing = !1), $))
                  ), l(!1), r.close();
                },
                children: P("no")
              },
              void 0,
              !1,
              {
                fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/Actions/Rename/Rename.action.jsx",
                lineNumber: 194,
                columnNumber: 13
              },
              void 0
            ),
            /* @__PURE__ */ s.jsxDEV(
              Ge,
              {
                type: "danger",
                onClick: () => {
                  l(!1), D(!0);
                },
                children: P("yes")
              },
              void 0,
              !1,
              {
                fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/Actions/Rename/Rename.action.jsx",
                lineNumber: 211,
                columnNumber: 13
              },
              void 0
            )
          ] }, void 0, !0, {
            fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/Actions/Rename/Rename.action.jsx",
            lineNumber: 193,
            columnNumber: 11
          }, void 0)
        ] }, void 0, !0, {
          fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/Actions/Rename/Rename.action.jsx",
          lineNumber: 186,
          columnNumber: 9
        }, void 0)
      },
      void 0,
      !1,
      {
        fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/Actions/Rename/Rename.action.jsx",
        lineNumber: 179,
        columnNumber: 7
      },
      void 0
    )
  ] }, void 0, !0, {
    fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/Actions/Rename/Rename.action.jsx",
    lineNumber: 157,
    columnNumber: 5
  }, void 0);
}, Nn = (n, e = 2) => {
  if (isNaN(n)) return "";
  const t = n / 1024, r = t / 1024, i = r / 1024;
  if (t < 1024)
    return `${t.toFixed(e)} KB`;
  if (r < 1024)
    return `${r.toFixed(e)} MB`;
  if (r >= 1024)
    return `${i.toFixed(e)} GB`;
}, Yx = (n) => {
  if (!n || isNaN(Date.parse(n))) return "";
  n = new Date(n);
  let e = n.getHours();
  const t = n.getMinutes(), r = e >= 12 ? "PM" : "AM";
  e = e % 12, e = e || 12;
  const i = n.getMonth() + 1, o = n.getDate(), a = n.getFullYear();
  return `${i}/${o}/${a} ${e}:${t < 10 ? "0" + t : t} ${r}`;
}, Cr = ({ name: n, id: e, checked: t, onClick: r, onChange: i, className: o = "", title: a, disabled: l = !1 }) => /* @__PURE__ */ s.jsxDEV(
  "input",
  {
    className: `fm-checkbox ${o}`,
    type: "checkbox",
    name: n,
    id: e,
    checked: t,
    onClick: r,
    onChange: i,
    title: a,
    disabled: l
  },
  void 0,
  !1,
  {
    fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/components/Checkbox/Checkbox.jsx",
    lineNumber: 5,
    columnNumber: 5
  },
  void 0
), Hn = 50, Kx = ({
  index: n,
  file: e,
  onCreateFolder: t,
  onRename: r,
  enableFilePreview: i,
  onFileOpen: o,
  filesViewRef: a,
  selectedFileIndexes: l,
  triggerAction: c,
  handleContextMenu: u,
  setLastSelectedFile: f,
  draggable: m
}) => {
  var ge, je, Pe, Ue;
  const [g, p] = R(!1), [h, N] = R(0), [H, F] = R("hidden"), [j, P] = R(""), [S, v] = R(null), { activeLayout: U } = He(), D = U === "grid" ? 48 : 20, C = pn(D), { setCurrentPath: b, currentPathFiles: $, onFolderChange: M } = we(), { setSelectedFiles: L } = Te(), { clipBoard: E, handleCutCopy: A, setClipBoard: Q, handlePasting: J } = bn(), ne = pe(null), de = pn(Hn), re = (E == null ? void 0 : E.isMoving) && E.files.find((ee) => ee.name === e.name && ee.path === e.path), x = () => {
    o(e), e.isDirectory ? (b(e.path), M == null || M(e.path), L([])) : i && c.show("previewFile");
  }, w = (ee, ve) => {
    if (l.length > 0 && ee) {
      let Fe = !1, Se = l[0], Le = n;
      if (Se >= Le) {
        const xn = Se;
        Se = Le, Le = xn, Fe = !0;
      }
      const Re = $.slice(Se, Le + 1);
      L(Fe ? Re.reverse() : Re);
    } else l.length > 0 && ve ? L((Fe) => {
      const Se = Fe.filter((Le) => Le.path !== e.path);
      return Fe.length === Se.length ? [...Fe, e] : Se;
    }) : L([e]);
  }, O = (ee) => {
    if (ee.stopPropagation(), e.isEditing) return;
    w(ee.shiftKey, ee.ctrlKey);
    const ve = (/* @__PURE__ */ new Date()).getTime();
    if (ve - h < 300) {
      x();
      return;
    }
    N(ve);
  }, G = (ee) => {
    ee.key === "Enter" && (ee.stopPropagation(), L([e]), x());
  }, I = (ee) => {
    ee.stopPropagation(), ee.preventDefault(), !e.isEditing && (g || L([e]), f(e), u(ee, !0));
  }, X = () => {
    F("visible");
  }, _ = () => {
    !g && F("hidden");
  }, B = (ee) => {
    ee.target.checked ? L((ve) => [...ve, e]) : L((ve) => ve.filter((Fe) => Fe.name !== e.name && Fe.path !== e.path)), p(ee.target.checked);
  }, q = (ee) => {
    ee.dataTransfer.setDragImage(ne.current, 30, 50), ee.dataTransfer.effectAllowed = "copy", A(!0);
  }, Z = () => Q(null), k = (ee) => {
    ee.preventDefault(), g || !e.isDirectory ? ee.dataTransfer.dropEffect = "none" : (v({ x: ee.clientX, y: ee.clientY + 12 }), ee.dataTransfer.dropEffect = "copy", P("file-drop-zone"));
  }, ce = (ee) => {
    ee.currentTarget.contains(ee.relatedTarget) || (P((ve) => ve && ""), v(null));
  }, T = (ee) => {
    ee.preventDefault(), !(g || !e.isDirectory) && (J(e), P((ve) => ve && ""), v(null));
  };
  return oe(() => {
    p(l.includes(n)), F(l.includes(n) ? "visible" : "hidden");
  }, [l]), /* @__PURE__ */ s.jsxDEV(
    "div",
    {
      className: `file-item-container ${j} ${g || e.isEditing ? "file-selected" : ""} ${re ? "file-moving" : ""}`,
      tabIndex: 0,
      title: e.name,
      onClick: O,
      onKeyDown: G,
      onContextMenu: I,
      onMouseOver: X,
      onMouseLeave: _,
      draggable: g && m,
      onDragStart: q,
      onDragEnd: Z,
      onDragEnter: k,
      onDragOver: k,
      onDragLeave: ce,
      onDrop: T,
      children: [
        /* @__PURE__ */ s.jsxDEV("div", { className: "file-item", children: [
          !e.isEditing && /* @__PURE__ */ s.jsxDEV(
            Cr,
            {
              name: e.name,
              id: e.name,
              checked: g,
              className: `selection-checkbox ${H}`,
              onChange: B,
              onClick: (ee) => ee.stopPropagation()
            },
            void 0,
            !1,
            {
              fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/FileList/FileItem.jsx",
              lineNumber: 209,
              columnNumber: 11
            },
            void 0
          ),
          e.isDirectory ? /* @__PURE__ */ s.jsxDEV(dt, { size: D }, void 0, !1, {
            fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/FileList/FileItem.jsx",
            lineNumber: 219,
            columnNumber: 11
          }, void 0) : /* @__PURE__ */ s.jsxDEV(s.Fragment, { children: C[(je = (ge = e.name) == null ? void 0 : ge.split(".").pop()) == null ? void 0 : je.toLowerCase()] ?? /* @__PURE__ */ s.jsxDEV(cn, { size: D }, void 0, !1, {
            fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/FileList/FileItem.jsx",
            lineNumber: 222,
            columnNumber: 71
          }, void 0) }, void 0, !1, {
            fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/FileList/FileItem.jsx",
            lineNumber: 221,
            columnNumber: 11
          }, void 0),
          e.isEditing ? /* @__PURE__ */ s.jsxDEV("div", { className: `rename-file-container ${U}`, children: c.actionType === "createFolder" ? /* @__PURE__ */ s.jsxDEV(
            Gx,
            {
              filesViewRef: a,
              file: e,
              onCreateFolder: t,
              triggerAction: c
            },
            void 0,
            !1,
            {
              fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/FileList/FileItem.jsx",
              lineNumber: 229,
              columnNumber: 15
            },
            void 0
          ) : /* @__PURE__ */ s.jsxDEV(
            Wx,
            {
              filesViewRef: a,
              file: e,
              onRename: r,
              triggerAction: c
            },
            void 0,
            !1,
            {
              fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/FileList/FileItem.jsx",
              lineNumber: 236,
              columnNumber: 15
            },
            void 0
          ) }, void 0, !1, {
            fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/FileList/FileItem.jsx",
            lineNumber: 227,
            columnNumber: 11
          }, void 0) : /* @__PURE__ */ s.jsxDEV("span", { className: "text-truncate file-name", children: e.name }, void 0, !1, {
            fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/FileList/FileItem.jsx",
            lineNumber: 245,
            columnNumber: 11
          }, void 0)
        ] }, void 0, !0, {
          fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/FileList/FileItem.jsx",
          lineNumber: 207,
          columnNumber: 7
        }, void 0),
        U === "list" && /* @__PURE__ */ s.jsxDEV(s.Fragment, { children: [
          /* @__PURE__ */ s.jsxDEV("div", { className: "modified-date", children: Yx(e.updatedAt) }, void 0, !1, {
            fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/FileList/FileItem.jsx",
            lineNumber: 251,
            columnNumber: 11
          }, void 0),
          /* @__PURE__ */ s.jsxDEV("div", { className: "size", children: (e == null ? void 0 : e.size) > 0 ? Nn(e == null ? void 0 : e.size) : "" }, void 0, !1, {
            fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/FileList/FileItem.jsx",
            lineNumber: 252,
            columnNumber: 11
          }, void 0)
        ] }, void 0, !0, {
          fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/FileList/FileItem.jsx",
          lineNumber: 250,
          columnNumber: 9
        }, void 0),
        S && /* @__PURE__ */ s.jsxDEV(
          "div",
          {
            style: {
              top: `${S.y}px`,
              left: `${S.x}px`
            },
            className: "drag-move-tooltip",
            children: [
              "Move to ",
              /* @__PURE__ */ s.jsxDEV("span", { className: "drop-zone-file-name", children: e.name }, void 0, !1, {
                fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/FileList/FileItem.jsx",
                lineNumber: 265,
                columnNumber: 19
              }, void 0)
            ]
          },
          void 0,
          !0,
          {
            fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/FileList/FileItem.jsx",
            lineNumber: 258,
            columnNumber: 9
          },
          void 0
        ),
        /* @__PURE__ */ s.jsxDEV("div", { ref: ne, className: "drag-icon", children: e.isDirectory ? /* @__PURE__ */ s.jsxDEV(dt, { size: Hn }, void 0, !1, {
          fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/FileList/FileItem.jsx",
          lineNumber: 271,
          columnNumber: 11
        }, void 0) : /* @__PURE__ */ s.jsxDEV(s.Fragment, { children: de[(Ue = (Pe = e.name) == null ? void 0 : Pe.split(".").pop()) == null ? void 0 : Ue.toLowerCase()] ?? /* @__PURE__ */ s.jsxDEV(cn, { size: Hn }, void 0, !1, {
          fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/FileList/FileItem.jsx",
          lineNumber: 275,
          columnNumber: 15
        }, void 0) }, void 0, !1, {
          fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/FileList/FileItem.jsx",
          lineNumber: 273,
          columnNumber: 11
        }, void 0) }, void 0, !1, {
          fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/FileList/FileItem.jsx",
          lineNumber: 269,
          columnNumber: 7
        }, void 0)
      ]
    },
    void 0,
    !0,
    {
      fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/FileList/FileItem.jsx",
      lineNumber: 188,
      columnNumber: 5
    },
    void 0
  );
}, qx = ({ subMenuRef: n, list: e, position: t = "right" }) => /* @__PURE__ */ s.jsxDEV("ul", { ref: n, className: `sub-menu ${t}`, children: e == null ? void 0 : e.map((r) => /* @__PURE__ */ s.jsxDEV("li", { onClick: r.onClick, children: [
  /* @__PURE__ */ s.jsxDEV("span", { className: "item-selected", children: r.selected && /* @__PURE__ */ s.jsxDEV(ir, { size: 13 }, void 0, !1, {
    fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/components/ContextMenu/SubMenu.jsx",
    lineNumber: 8,
    columnNumber: 61
  }, void 0) }, void 0, !1, {
    fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/components/ContextMenu/SubMenu.jsx",
    lineNumber: 8,
    columnNumber: 11
  }, void 0),
  r.icon,
  /* @__PURE__ */ s.jsxDEV("span", { children: r.title }, void 0, !1, {
    fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/components/ContextMenu/SubMenu.jsx",
    lineNumber: 10,
    columnNumber: 11
  }, void 0)
] }, r.title, !0, {
  fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/components/ContextMenu/SubMenu.jsx",
  lineNumber: 7,
  columnNumber: 9
}, void 0)) }, void 0, !1, {
  fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/components/ContextMenu/SubMenu.jsx",
  lineNumber: 5,
  columnNumber: 5
}, void 0), Jx = ({ filesViewRef: n, contextMenuRef: e, menuItems: t, visible: r, clickPosition: i }) => {
  const [o, a] = R(0), [l, c] = R(0), [u, f] = R(null), [m, g] = R("right"), p = pe(null), h = () => {
    const { clickX: F, clickY: j } = i, P = n.current, S = P.getBoundingClientRect(), v = P.offsetWidth - P.clientWidth, U = e.current.getBoundingClientRect(), D = U.width, C = U.height, b = F - S.left, $ = S.width - (b + v) > D, M = !$, L = j - S.top, E = S.height - L > C, A = !E;
    $ ? (a(`${b}px`), g("right")) : M && (a(`${b - D}px`), g("left")), E ? c(`${L + P.scrollTop}px`) : A && c(`${L + P.scrollTop - C}px`);
  }, N = (F) => {
    F.preventDefault(), F.stopPropagation();
  }, H = (F) => {
    f(F);
  };
  if (oe(() => {
    r && e.current ? h() : (c(0), a(0), f(null));
  }, [r]), r)
    return /* @__PURE__ */ s.jsxDEV(
      "div",
      {
        ref: e,
        onContextMenu: N,
        onClick: (F) => F.stopPropagation(),
        className: `fm-context-menu ${l ? "visible" : "hidden"}`,
        style: {
          top: l,
          left: o
        },
        children: /* @__PURE__ */ s.jsxDEV("div", { className: "file-context-menu-list", children: /* @__PURE__ */ s.jsxDEV("ul", { children: t.filter((F) => !F.hidden).map((F, j) => {
          const P = F.hasOwnProperty("children"), S = u === j && P;
          return /* @__PURE__ */ s.jsxDEV("div", { children: [
            /* @__PURE__ */ s.jsxDEV(
              "li",
              {
                onClick: F.onClick,
                className: `${F.className ?? ""} ${S ? "active" : ""}`,
                onMouseOver: () => H(j),
                children: [
                  F.icon,
                  /* @__PURE__ */ s.jsxDEV("span", { children: F.title }, void 0, !1, {
                    fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/components/ContextMenu/ContextMenu.jsx",
                    lineNumber: 97,
                    columnNumber: 23
                  }, void 0),
                  P && /* @__PURE__ */ s.jsxDEV(s.Fragment, { children: [
                    /* @__PURE__ */ s.jsxDEV(ui, { size: 14, className: "list-expand-icon" }, void 0, !1, {
                      fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/components/ContextMenu/ContextMenu.jsx",
                      lineNumber: 100,
                      columnNumber: 27
                    }, void 0),
                    S && /* @__PURE__ */ s.jsxDEV(
                      qx,
                      {
                        subMenuRef: p,
                        list: F.children,
                        position: m
                      },
                      void 0,
                      !1,
                      {
                        fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/components/ContextMenu/ContextMenu.jsx",
                        lineNumber: 102,
                        columnNumber: 29
                      },
                      void 0
                    )
                  ] }, void 0, !0, {
                    fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/components/ContextMenu/ContextMenu.jsx",
                    lineNumber: 99,
                    columnNumber: 25
                  }, void 0)
                ]
              },
              void 0,
              !0,
              {
                fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/components/ContextMenu/ContextMenu.jsx",
                lineNumber: 91,
                columnNumber: 21
              },
              void 0
            ),
            F.divider && j !== t.filter((v) => !v.hidden).length - 1 && /* @__PURE__ */ s.jsxDEV("div", { className: "divider" }, void 0, !1, {
              fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/components/ContextMenu/ContextMenu.jsx",
              lineNumber: 113,
              columnNumber: 25
            }, void 0)
          ] }, F.title, !0, {
            fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/components/ContextMenu/ContextMenu.jsx",
            lineNumber: 90,
            columnNumber: 19
          }, void 0);
        }) }, void 0, !1, {
          fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/components/ContextMenu/ContextMenu.jsx",
          lineNumber: 83,
          columnNumber: 11
        }, void 0) }, void 0, !1, {
          fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/components/ContextMenu/ContextMenu.jsx",
          lineNumber: 82,
          columnNumber: 9
        }, void 0)
      },
      void 0,
      !1,
      {
        fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/components/ContextMenu/ContextMenu.jsx",
        lineNumber: 72,
        columnNumber: 7
      },
      void 0
    );
};
function Xx(n) {
  return K({ attr: { viewBox: "0 0 256 256", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M245,110.64A16,16,0,0,0,232,104H216V88a16,16,0,0,0-16-16H130.67L102.94,51.2a16.14,16.14,0,0,0-9.6-3.2H40A16,16,0,0,0,24,64V208h0a8,8,0,0,0,8,8H211.1a8,8,0,0,0,7.59-5.47l28.49-85.47A16.05,16.05,0,0,0,245,110.64ZM93.34,64,123.2,86.4A8,8,0,0,0,128,88h72v16H69.77a16,16,0,0,0-15.18,10.94L40,158.7V64Zm112,136H43.1l26.67-80H232Z" }, child: [] }] })(n);
}
const Zx = (n, e, t, r, i) => {
  const [o, a] = R([]), [l, c] = R(!1), [u, f] = R(!1), [m, g] = R({ clickX: 0, clickY: 0 }), [p, h] = R(null), { clipBoard: N, setClipBoard: H, handleCutCopy: F, handlePasting: j } = bn(), { selectedFiles: P, setSelectedFiles: S, handleDownload: v } = Te(), { currentPath: U, setCurrentPath: D, currentPathFiles: C, setCurrentPathFiles: b, onFolderChange: $ } = we(), { activeLayout: M, setActiveLayout: L } = He(), E = ye(), A = () => {
    i(p), p.isDirectory ? (D(p.path), $ == null || $(p.path), a([]), S([])) : e && t.show("previewFile"), c(!1);
  }, Q = (k) => {
    F(k), c(!1);
  }, J = () => {
    j(p), c(!1);
  }, ne = () => {
    c(!1), t.show("rename");
  }, de = () => {
    v(), c(!1);
  }, re = () => {
    c(!1), t.show("delete");
  }, x = () => {
    c(!1), Ae(n, "onRefresh"), H(null);
  }, w = () => {
    t.show("createFolder"), c(!1);
  }, O = () => {
    c(!1), t.show("uploadFile");
  }, G = () => {
    S(C), c(!1);
  }, I = [
    {
      title: E("view"),
      icon: M === "grid" ? /* @__PURE__ */ s.jsxDEV(ot, { size: 18 }, void 0, !1, {
        fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/FileList/useFileList.jsx",
        lineNumber: 93,
        columnNumber: 39
      }, void 0) : /* @__PURE__ */ s.jsxDEV(ln, { size: 18 }, void 0, !1, {
        fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/FileList/useFileList.jsx",
        lineNumber: 93,
        columnNumber: 62
      }, void 0),
      onClick: () => {
      },
      children: [
        {
          title: E("grid"),
          icon: /* @__PURE__ */ s.jsxDEV(ot, { size: 18 }, void 0, !1, {
            fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/FileList/useFileList.jsx",
            lineNumber: 98,
            columnNumber: 17
          }, void 0),
          selected: M === "grid",
          onClick: () => {
            L("grid"), c(!1);
          }
        },
        {
          title: E("list"),
          icon: /* @__PURE__ */ s.jsxDEV(ln, { size: 18 }, void 0, !1, {
            fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/FileList/useFileList.jsx",
            lineNumber: 107,
            columnNumber: 17
          }, void 0),
          selected: M === "list",
          onClick: () => {
            L("list"), c(!1);
          }
        }
      ]
    },
    {
      title: E("refresh"),
      icon: /* @__PURE__ */ s.jsxDEV(er, { size: 18 }, void 0, !1, {
        fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/FileList/useFileList.jsx",
        lineNumber: 118,
        columnNumber: 13
      }, void 0),
      onClick: x,
      divider: !0
    },
    {
      title: E("newFolder"),
      icon: /* @__PURE__ */ s.jsxDEV(Xt, { size: 18 }, void 0, !1, {
        fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/FileList/useFileList.jsx",
        lineNumber: 124,
        columnNumber: 13
      }, void 0),
      onClick: w,
      hidden: !r.create,
      divider: !r.upload
    },
    {
      title: E("upload"),
      icon: /* @__PURE__ */ s.jsxDEV(tr, { size: 18 }, void 0, !1, {
        fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/FileList/useFileList.jsx",
        lineNumber: 131,
        columnNumber: 13
      }, void 0),
      onClick: O,
      divider: !0,
      hidden: !r.upload
    },
    {
      title: E("selectAll"),
      icon: /* @__PURE__ */ s.jsxDEV(ci, { size: 18 }, void 0, !1, {
        fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/FileList/useFileList.jsx",
        lineNumber: 138,
        columnNumber: 13
      }, void 0),
      onClick: G
    }
  ], X = [
    {
      title: E("open"),
      icon: p != null && p.isDirectory ? /* @__PURE__ */ s.jsxDEV(Xx, { size: 20 }, void 0, !1, {
        fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/FileList/useFileList.jsx",
        lineNumber: 146,
        columnNumber: 45
      }, void 0) : /* @__PURE__ */ s.jsxDEV(cn, { size: 16 }, void 0, !1, {
        fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/FileList/useFileList.jsx",
        lineNumber: 146,
        columnNumber: 74
      }, void 0),
      onClick: A,
      divider: !0
    },
    {
      title: E("cut"),
      icon: /* @__PURE__ */ s.jsxDEV(Qt, { size: 19 }, void 0, !1, {
        fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/FileList/useFileList.jsx",
        lineNumber: 152,
        columnNumber: 13
      }, void 0),
      onClick: () => Q(!0),
      divider: !(p != null && p.isDirectory) && !r.copy,
      hidden: !r.move
    },
    {
      title: E("copy"),
      icon: /* @__PURE__ */ s.jsxDEV(Jt, { strokeWidth: 0.1, size: 17 }, void 0, !1, {
        fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/FileList/useFileList.jsx",
        lineNumber: 159,
        columnNumber: 13
      }, void 0),
      onClick: () => Q(!1),
      divider: !(p != null && p.isDirectory),
      hidden: !r.copy
    },
    {
      title: E("paste"),
      icon: /* @__PURE__ */ s.jsxDEV(An, { size: 18 }, void 0, !1, {
        fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/FileList/useFileList.jsx",
        lineNumber: 166,
        columnNumber: 13
      }, void 0),
      onClick: J,
      className: `${N ? "" : "disable-paste"}`,
      hidden: !(p != null && p.isDirectory) || !r.move && !r.copy,
      divider: !0
    },
    {
      title: E("rename"),
      icon: /* @__PURE__ */ s.jsxDEV(rr, { size: 19 }, void 0, !1, {
        fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/FileList/useFileList.jsx",
        lineNumber: 174,
        columnNumber: 13
      }, void 0),
      onClick: ne,
      hidden: P.length > 1,
      hidden: !r.rename
    },
    {
      title: E("download"),
      icon: /* @__PURE__ */ s.jsxDEV(On, { size: 18 }, void 0, !1, {
        fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/FileList/useFileList.jsx",
        lineNumber: 181,
        columnNumber: 13
      }, void 0),
      onClick: de,
      hidden: !r.download
    },
    {
      title: E("delete"),
      icon: /* @__PURE__ */ s.jsxDEV(nr, { size: 19 }, void 0, !1, {
        fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/FileList/useFileList.jsx",
        lineNumber: 187,
        columnNumber: 13
      }, void 0),
      onClick: re,
      hidden: !r.delete
    }
  ], _ = () => {
    b((k) => [
      ...k,
      {
        name: xr("New Folder", !0, k),
        isDirectory: !0,
        path: U,
        isEditing: !0,
        key: (/* @__PURE__ */ new Date()).valueOf()
      }
    ]);
  }, B = () => {
    b((k) => {
      const ce = o.at(-1);
      return k[ce] ? k.map((T, ge) => ge === ce ? {
        ...T,
        isEditing: !0
      } : T) : (t.close(), k);
    }), a([]), S([]);
  }, q = () => {
    a([]), S((k) => k.length > 0 ? [] : k);
  }, Z = (k, ce = !1) => {
    k.preventDefault(), g({ clickX: k.clientX, clickY: k.clientY }), f(ce), !ce && q(), c(!0);
  };
  return oe(() => {
    if (t.isActive)
      switch (t.actionType) {
        case "createFolder":
          _();
          break;
        case "rename":
          B();
          break;
      }
  }, [t.isActive]), oe(() => {
    a([]), S([]);
  }, [U]), oe(() => {
    P.length > 0 ? a(() => P.map((k) => C.findIndex((ce) => ce.path === k.path))) : a([]);
  }, [P, C]), {
    emptySelecCtxItems: I,
    selecCtxItems: X,
    handleContextMenu: Z,
    unselectFiles: q,
    visible: l,
    setVisible: c,
    setLastSelectedFile: h,
    selectedFileIndexes: o,
    clickPosition: m,
    isSelectionCtx: u
  };
}, Qx = ({ unselectFiles: n, onSort: e, sortConfig: t }) => {
  const [r, i] = R(!1), { selectedFiles: o, setSelectedFiles: a } = Te(), { currentPathFiles: l } = we(), c = hn(() => l.length > 0 && o.length === l.length, [o, l]), u = (m) => {
    m.target.checked ? (a(l), i(!0)) : n();
  }, f = (m) => {
    e && e(m);
  };
  return /* @__PURE__ */ s.jsxDEV(
    "div",
    {
      className: "files-header",
      onMouseOver: () => i(!0),
      onMouseLeave: () => i(!1),
      children: [
        /* @__PURE__ */ s.jsxDEV("div", { className: "file-select-all", children: (r || c) && /* @__PURE__ */ s.jsxDEV(
          Cr,
          {
            id: "selectAll",
            checked: c,
            onChange: u,
            title: "Select all",
            disabled: l.length === 0
          },
          void 0,
          !1,
          {
            fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/FileList/FilesHeader.jsx",
            lineNumber: 39,
            columnNumber: 11
          },
          void 0
        ) }, void 0, !1, {
          fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/FileList/FilesHeader.jsx",
          lineNumber: 37,
          columnNumber: 7
        }, void 0),
        /* @__PURE__ */ s.jsxDEV(
          "div",
          {
            className: `file-name ${(t == null ? void 0 : t.key) === "name" ? "active" : ""}`,
            onClick: () => f("name"),
            children: [
              "Name",
              (t == null ? void 0 : t.key) === "name" && /* @__PURE__ */ s.jsxDEV("span", { className: "sort-indicator", children: t.direction === "asc" ? " ▲" : " ▼" }, void 0, !1, {
                fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/FileList/FilesHeader.jsx",
                lineNumber: 54,
                columnNumber: 11
              }, void 0)
            ]
          },
          void 0,
          !0,
          {
            fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/FileList/FilesHeader.jsx",
            lineNumber: 48,
            columnNumber: 7
          },
          void 0
        ),
        /* @__PURE__ */ s.jsxDEV(
          "div",
          {
            className: `file-date ${(t == null ? void 0 : t.key) === "modified" ? "active" : ""}`,
            onClick: () => f("modified"),
            children: [
              "Modified",
              (t == null ? void 0 : t.key) === "modified" && /* @__PURE__ */ s.jsxDEV("span", { className: "sort-indicator", children: t.direction === "asc" ? " ▲" : " ▼" }, void 0, !1, {
                fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/FileList/FilesHeader.jsx",
                lineNumber: 63,
                columnNumber: 11
              }, void 0)
            ]
          },
          void 0,
          !0,
          {
            fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/FileList/FilesHeader.jsx",
            lineNumber: 57,
            columnNumber: 7
          },
          void 0
        ),
        /* @__PURE__ */ s.jsxDEV(
          "div",
          {
            className: `file-size ${(t == null ? void 0 : t.key) === "size" ? "active" : ""}`,
            onClick: () => f("size"),
            children: [
              "Size",
              (t == null ? void 0 : t.key) === "size" && /* @__PURE__ */ s.jsxDEV("span", { className: "sort-indicator", children: t.direction === "asc" ? " ▲" : " ▼" }, void 0, !1, {
                fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/FileList/FilesHeader.jsx",
                lineNumber: 72,
                columnNumber: 11
              }, void 0)
            ]
          },
          void 0,
          !0,
          {
            fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/FileList/FilesHeader.jsx",
            lineNumber: 66,
            columnNumber: 7
          },
          void 0
        )
      ]
    },
    void 0,
    !0,
    {
      fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/FileList/FilesHeader.jsx",
      lineNumber: 32,
      columnNumber: 5
    },
    void 0
  );
}, Dr = ({
  onCreateFolder: n,
  onRename: e,
  onFileOpen: t,
  onRefresh: r,
  enableFilePreview: i,
  triggerAction: o,
  permissions: a
}) => {
  const { currentPathFiles: l, sortConfig: c, setSortConfig: u } = we(), f = pe(null), { activeLayout: m } = He(), g = ye(), {
    emptySelecCtxItems: p,
    selecCtxItems: h,
    handleContextMenu: N,
    unselectFiles: H,
    visible: F,
    setVisible: j,
    setLastSelectedFile: P,
    selectedFileIndexes: S,
    clickPosition: v,
    isSelectionCtx: U
  } = Zx(r, i, o, a, t), D = Ze(() => j(!1)), C = (b) => {
    let $ = "asc";
    c.key === b && c.direction === "asc" && ($ = "desc"), u({ key: b, direction: $ });
  };
  return /* @__PURE__ */ s.jsxDEV(
    "div",
    {
      ref: f,
      className: `files ${m}`,
      onContextMenu: N,
      onClick: H,
      children: [
        m === "list" && /* @__PURE__ */ s.jsxDEV(Qx, { unselectFiles: H, onSort: C, sortConfig: c }, void 0, !1, {
          fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/FileList/FileList.jsx",
          lineNumber: 57,
          columnNumber: 9
        }, void 0),
        (l == null ? void 0 : l.length) > 0 ? /* @__PURE__ */ s.jsxDEV(s.Fragment, { children: l.map((b, $) => /* @__PURE__ */ s.jsxDEV(
          Kx,
          {
            index: $,
            file: b,
            onCreateFolder: n,
            onRename: e,
            onFileOpen: t,
            enableFilePreview: i,
            triggerAction: o,
            filesViewRef: f,
            selectedFileIndexes: S,
            handleContextMenu: N,
            setVisible: j,
            setLastSelectedFile: P,
            draggable: a.move
          },
          $,
          !1,
          {
            fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/FileList/FileList.jsx",
            lineNumber: 63,
            columnNumber: 13
          },
          void 0
        )) }, void 0, !1, {
          fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/FileList/FileList.jsx",
          lineNumber: 61,
          columnNumber: 9
        }, void 0) : /* @__PURE__ */ s.jsxDEV("div", { className: "empty-folder", children: g("folderEmpty") }, void 0, !1, {
          fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/FileList/FileList.jsx",
          lineNumber: 82,
          columnNumber: 9
        }, void 0),
        /* @__PURE__ */ s.jsxDEV(
          Jx,
          {
            filesViewRef: f,
            contextMenuRef: D.ref,
            menuItems: U ? h : p,
            visible: F,
            setVisible: j,
            clickPosition: v
          },
          void 0,
          !1,
          {
            fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/FileList/FileList.jsx",
            lineNumber: 85,
            columnNumber: 7
          },
          void 0
        )
      ]
    },
    void 0,
    !0,
    {
      fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/FileList/FileList.jsx",
      lineNumber: 50,
      columnNumber: 5
    },
    void 0
  );
};
Dr.displayName = "FileList";
const e4 = ({ triggerAction: n, onDelete: e }) => {
  const [t, r] = R(""), { selectedFiles: i, setSelectedFiles: o } = Te(), a = ye();
  oe(() => {
    r(() => {
      if (i.length === 1)
        return a("deleteItemConfirm", { fileName: i[0].name });
      if (i.length > 1)
        return a("deleteItemsConfirm", { count: i.length });
    });
  }, [a]);
  const l = () => {
    e(i), o([]), n.close();
  };
  return /* @__PURE__ */ s.jsxDEV("div", { className: "file-delete-confirm", children: [
    /* @__PURE__ */ s.jsxDEV("p", { className: "file-delete-confirm-text", children: t }, void 0, !1, {
      fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/Actions/Delete/Delete.action.jsx",
      lineNumber: 30,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ s.jsxDEV("div", { className: "file-delete-confirm-actions", children: [
      /* @__PURE__ */ s.jsxDEV(Ge, { type: "secondary", onClick: () => n.close(), children: a("cancel") }, void 0, !1, {
        fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/Actions/Delete/Delete.action.jsx",
        lineNumber: 32,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ s.jsxDEV(Ge, { type: "danger", onClick: l, children: a("delete") }, void 0, !1, {
        fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/Actions/Delete/Delete.action.jsx",
        lineNumber: 35,
        columnNumber: 9
      }, void 0)
    ] }, void 0, !0, {
      fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/Actions/Delete/Delete.action.jsx",
      lineNumber: 31,
      columnNumber: 7
    }, void 0)
  ] }, void 0, !0, {
    fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/Actions/Delete/Delete.action.jsx",
    lineNumber: 29,
    columnNumber: 5
  }, void 0);
};
function n4(n) {
  return K({ attr: { viewBox: "0 0 1024 1024", fill: "currentColor", fillRule: "evenodd" }, child: [{ tag: "path", attr: { d: "M799.855 166.312c.023.007.043.018.084.059l57.69 57.69c.041.041.052.06.059.084a.118.118 0 0 1 0 .069c-.007.023-.018.042-.059.083L569.926 512l287.703 287.703c.041.04.052.06.059.083a.118.118 0 0 1 0 .07c-.007.022-.018.042-.059.083l-57.69 57.69c-.041.041-.06.052-.084.059a.118.118 0 0 1-.069 0c-.023-.007-.042-.018-.083-.059L512 569.926 224.297 857.629c-.04.041-.06.052-.083.059a.118.118 0 0 1-.07 0c-.022-.007-.042-.018-.083-.059l-57.69-57.69c-.041-.041-.052-.06-.059-.084a.118.118 0 0 1 0-.069c.007-.023.018-.042.059-.083L454.073 512 166.371 224.297c-.041-.04-.052-.06-.059-.083a.118.118 0 0 1 0-.07c.007-.022.018-.042.059-.083l57.69-57.69c.041-.041.06-.052.084-.059a.118.118 0 0 1 .069 0c.023.007.042.018.083.059L512 454.073l287.703-287.702c.04-.041.06-.052.083-.059a.118.118 0 0 1 .07 0Z" }, child: [] }] })(n);
}
function t4(n) {
  return K({ attr: { viewBox: "0 0 1024 1024" }, child: [{ tag: "path", attr: { d: "M518.3 459a8 8 0 0 0-12.6 0l-112 141.7a7.98 7.98 0 0 0 6.3 12.9h73.9V856c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V613.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 459z" }, child: [] }, { tag: "path", attr: { d: "M811.4 366.7C765.6 245.9 648.9 160 512.2 160S258.8 245.8 213 366.6C127.3 389.1 64 467.2 64 560c0 110.5 89.5 200 199.9 200H304c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8h-40.1c-33.7 0-65.4-13.4-89-37.7-23.5-24.2-36-56.8-34.9-90.6.9-26.4 9.9-51.2 26.2-72.1 16.7-21.3 40.1-36.8 66.1-43.7l37.9-9.9 13.9-36.6c8.6-22.8 20.6-44.1 35.7-63.4a245.6 245.6 0 0 1 52.4-49.9c41.1-28.9 89.5-44.2 140-44.2s98.9 15.3 140 44.2c19.9 14 37.5 30.8 52.4 49.9 15.1 19.3 27.1 40.7 35.7 63.4l13.8 36.5 37.8 10C846.1 454.5 884 503.8 884 560c0 33.1-12.9 64.3-36.3 87.7a123.07 123.07 0 0 1-87.6 36.3H720c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h40.1C870.5 760 960 670.5 960 560c0-92.7-63.1-170.7-148.6-193.3z" }, child: [] }] })(n);
}
const r4 = ({ percent: n = 0, isCanceled: e = !1, isCompleted: t = !1, error: r }) => {
  const i = ye();
  return /* @__PURE__ */ s.jsxDEV("div", { role: "progressbar", className: "fm-progress", children: [
    !r && /* @__PURE__ */ s.jsxDEV("div", { className: "fm-progress-bar", children: /* @__PURE__ */ s.jsxDEV("div", { className: "fm-progress-bar-fill", style: { width: `${n}%` } }, void 0, !1, {
      fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/components/Progress/Progress.jsx",
      lineNumber: 11,
      columnNumber: 11
    }, void 0) }, void 0, !1, {
      fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/components/Progress/Progress.jsx",
      lineNumber: 10,
      columnNumber: 9
    }, void 0),
    e ? /* @__PURE__ */ s.jsxDEV("span", { className: "fm-upload-canceled", children: i("canceled") }, void 0, !1, {
      fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/components/Progress/Progress.jsx",
      lineNumber: 15,
      columnNumber: 9
    }, void 0) : r ? /* @__PURE__ */ s.jsxDEV("span", { className: "fm-upload-canceled", children: r }, void 0, !1, {
      fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/components/Progress/Progress.jsx",
      lineNumber: 17,
      columnNumber: 9
    }, void 0) : /* @__PURE__ */ s.jsxDEV("div", { className: "fm-progress-status", children: /* @__PURE__ */ s.jsxDEV("span", { children: t ? i("completed") : i("percentDone", { percent: n }) }, void 0, !1, {
      fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/components/Progress/Progress.jsx",
      lineNumber: 20,
      columnNumber: 11
    }, void 0) }, void 0, !1, {
      fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/components/Progress/Progress.jsx",
      lineNumber: 19,
      columnNumber: 9
    }, void 0)
  ] }, void 0, !0, {
    fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/components/Progress/Progress.jsx",
    lineNumber: 8,
    columnNumber: 5
  }, void 0);
};
function i4(n) {
  return K({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M256 388c-72.597 0-132-59.405-132-132 0-72.601 59.403-132 132-132 36.3 0 69.299 15.4 92.406 39.601L278 234h154V80l-51.698 51.702C348.406 99.798 304.406 80 256 80c-96.797 0-176 79.203-176 176s78.094 176 176 176c81.045 0 148.287-54.134 169.401-128H378.85c-18.745 49.561-67.138 84-122.85 84z" }, child: [] }] })(n);
}
const o4 = ({
  index: n,
  fileData: e,
  setFiles: t,
  setIsUploading: r,
  fileUploadConfig: i,
  onFileUploaded: o,
  handleFileRemove: a
}) => {
  var D, C, b, $;
  const [l, c] = R(0), [u, f] = R(!1), [m, g] = R(!1), [p, h] = R(!1), N = pn(33), H = pe(), { onError: F } = vn(), j = ye(), P = (M) => {
    c(0), r((E) => ({
      ...E,
      [n]: !1
    }));
    const L = {
      type: "upload",
      message: j("uploadFail"),
      response: {
        status: M.status,
        statusText: M.statusText,
        data: M.response
      }
    };
    t(
      (E) => E.map((A, Q) => n === Q ? {
        ...A,
        error: L.message
      } : A)
    ), h(!0), F(L, e.file);
  }, S = (M) => {
    if (!M.error)
      return new Promise((L, E) => {
        const A = new XMLHttpRequest();
        H.current = A, r((re) => ({
          ...re,
          [n]: !0
        })), A.upload.onprogress = (re) => {
          if (re.lengthComputable) {
            const x = Math.round(re.loaded / re.total * 100);
            c(x);
          }
        }, A.onload = () => {
          r((re) => ({
            ...re,
            [n]: !1
          })), A.status === 200 || A.status === 201 ? (f(!0), o(A.response), L(A.response)) : (E(A.statusText), P(A));
        }, A.onerror = () => {
          E(A.statusText), P(A);
        };
        const Q = (i == null ? void 0 : i.method) || "POST";
        A.open(Q, i == null ? void 0 : i.url, !0);
        const J = i == null ? void 0 : i.headers;
        for (let re in J)
          A.setRequestHeader(re, J[re]);
        const ne = new FormData(), de = M == null ? void 0 : M.appendData;
        for (let re in de)
          de[re] && ne.append(re, de[re]);
        ne.append("file", M.file), A.send(ne);
      });
  };
  oe(() => {
    H.current || S(e);
  }, []);
  const v = () => {
    H.current && (H.current.abort(), r((M) => ({
      ...M,
      [n]: !1
    })), g(!0), c(0));
  }, U = () => {
    e != null && e.file && (t(
      (M) => M.map((L, E) => n === E ? {
        ...L,
        error: !1
      } : L)
    ), S({ ...e, error: !1 }), g(!1), h(!1));
  };
  return e.removed ? null : /* @__PURE__ */ s.jsxDEV("li", { children: [
    /* @__PURE__ */ s.jsxDEV("div", { className: "file-icon", children: N[Ie((D = e.file) == null ? void 0 : D.name)] ?? /* @__PURE__ */ s.jsxDEV(cn, { size: 33 }, void 0, !1, {
      fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/Actions/UploadFile/UploadItem.jsx",
      lineNumber: 167,
      columnNumber: 62
    }, void 0) }, void 0, !1, {
      fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/Actions/UploadFile/UploadItem.jsx",
      lineNumber: 166,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ s.jsxDEV("div", { className: "file", children: [
      /* @__PURE__ */ s.jsxDEV("div", { className: "file-details", children: [
        /* @__PURE__ */ s.jsxDEV("div", { className: "file-info", children: [
          /* @__PURE__ */ s.jsxDEV("span", { className: "file-name text-truncate", title: (C = e.file) == null ? void 0 : C.name, children: (b = e.file) == null ? void 0 : b.name }, void 0, !1, {
            fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/Actions/UploadFile/UploadItem.jsx",
            lineNumber: 172,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ s.jsxDEV("span", { className: "file-size", children: Nn(($ = e.file) == null ? void 0 : $.size) }, void 0, !1, {
            fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/Actions/UploadFile/UploadItem.jsx",
            lineNumber: 175,
            columnNumber: 13
          }, void 0)
        ] }, void 0, !0, {
          fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/Actions/UploadFile/UploadItem.jsx",
          lineNumber: 171,
          columnNumber: 11
        }, void 0),
        u ? /* @__PURE__ */ s.jsxDEV(jx, { title: j("uploaded"), className: "upload-success" }, void 0, !1, {
          fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/Actions/UploadFile/UploadItem.jsx",
          lineNumber: 178,
          columnNumber: 13
        }, void 0) : m || p ? /* @__PURE__ */ s.jsxDEV(i4, { className: "retry-upload", title: "Retry", onClick: U }, void 0, !1, {
          fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/Actions/UploadFile/UploadItem.jsx",
          lineNumber: 180,
          columnNumber: 13
        }, void 0) : /* @__PURE__ */ s.jsxDEV(
          "div",
          {
            className: "rm-file",
            title: `${e.error ? j("Remove") : j("abortUpload")}`,
            onClick: e.error ? () => a(n) : v,
            children: /* @__PURE__ */ s.jsxDEV(n4, {}, void 0, !1, {
              fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/Actions/UploadFile/UploadItem.jsx",
              lineNumber: 187,
              columnNumber: 15
            }, void 0)
          },
          void 0,
          !1,
          {
            fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/Actions/UploadFile/UploadItem.jsx",
            lineNumber: 182,
            columnNumber: 13
          },
          void 0
        )
      ] }, void 0, !0, {
        fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/Actions/UploadFile/UploadItem.jsx",
        lineNumber: 170,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ s.jsxDEV(
        r4,
        {
          percent: l,
          isCanceled: m,
          isCompleted: u,
          error: e.error
        },
        void 0,
        !1,
        {
          fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/Actions/UploadFile/UploadItem.jsx",
          lineNumber: 191,
          columnNumber: 9
        },
        void 0
      )
    ] }, void 0, !0, {
      fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/Actions/UploadFile/UploadItem.jsx",
      lineNumber: 169,
      columnNumber: 7
    }, void 0)
  ] }, void 0, !0, {
    fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/Actions/UploadFile/UploadItem.jsx",
    lineNumber: 165,
    columnNumber: 5
  }, void 0);
}, a4 = ({
  fileUploadConfig: n,
  maxFileSize: e,
  acceptedFileTypes: t,
  onFileUploading: r,
  onFileUploaded: i
}) => {
  const [o, a] = R([]), [l, c] = R(!1), [u, f] = R({}), { currentFolder: m, currentPathFiles: g } = we(), { onError: p } = vn(), h = pe(null), N = ye(), H = (U) => {
    U.key === "Enter" && h.current.click();
  }, F = (U) => {
    if (t && !t.includes(Ie(U.name)))
      return N("fileTypeNotAllowed");
    if (g.some(
      (b) => b.name.toLowerCase() === U.name.toLowerCase() && !b.isDirectory
    )) return N("fileAlreadyExist");
    if (e && U.size > e) return `${N("maxUploadSize")} ${Nn(e, 0)}.`;
  }, j = (U) => {
    if (U = U.filter(
      (D) => !o.some((C) => C.file.name.toLowerCase() === D.name.toLowerCase())
    ), U.length > 0) {
      const D = U.map((C) => {
        const b = r(C, m), $ = F(C);
        return $ && p({ type: "upload", message: $ }, C), {
          file: C,
          appendData: b,
          ...$ && { error: $ }
        };
      });
      a((C) => [...C, ...D]);
    }
  }, P = (U) => {
    U.preventDefault(), c(!1);
    const D = Array.from(U.dataTransfer.files);
    j(D);
  }, S = (U) => {
    const D = Array.from(U.target.files);
    j(D);
  }, v = (U) => {
    a((D) => {
      const C = D.map((b, $) => U === $ ? {
        ...b,
        removed: !0
      } : b);
      return C.every((b) => !!b.removed) ? [] : C;
    });
  };
  return /* @__PURE__ */ s.jsxDEV("div", { className: `fm-upload-file ${o.length > 0 ? "file-selcted" : ""}`, children: [
    /* @__PURE__ */ s.jsxDEV("div", { className: "select-files", children: [
      /* @__PURE__ */ s.jsxDEV(
        "div",
        {
          className: `draggable-file-input ${l ? "dragging" : ""}`,
          onDrop: P,
          onDragOver: (U) => U.preventDefault(),
          onDragEnter: () => c(!0),
          onDragLeave: () => c(!1),
          children: /* @__PURE__ */ s.jsxDEV("div", { className: "input-text", children: [
            /* @__PURE__ */ s.jsxDEV(t4, { size: 30 }, void 0, !1, {
              fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/Actions/UploadFile/UploadFile.action.jsx",
              lineNumber: 114,
              columnNumber: 13
            }, void 0),
            /* @__PURE__ */ s.jsxDEV("span", { children: N("dragFileToUpload") }, void 0, !1, {
              fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/Actions/UploadFile/UploadFile.action.jsx",
              lineNumber: 115,
              columnNumber: 13
            }, void 0)
          ] }, void 0, !0, {
            fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/Actions/UploadFile/UploadFile.action.jsx",
            lineNumber: 113,
            columnNumber: 11
          }, void 0)
        },
        void 0,
        !1,
        {
          fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/Actions/UploadFile/UploadFile.action.jsx",
          lineNumber: 106,
          columnNumber: 9
        },
        void 0
      ),
      /* @__PURE__ */ s.jsxDEV("div", { className: "btn-choose-file", children: /* @__PURE__ */ s.jsxDEV(Ge, { padding: "0", onKeyDown: H, children: [
        /* @__PURE__ */ s.jsxDEV("label", { htmlFor: "chooseFile", children: N("chooseFile") }, void 0, !1, {
          fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/Actions/UploadFile/UploadFile.action.jsx",
          lineNumber: 120,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ s.jsxDEV(
          "input",
          {
            ref: h,
            type: "file",
            id: "chooseFile",
            className: "choose-file-input",
            onChange: S,
            multiple: !0,
            accept: t
          },
          void 0,
          !1,
          {
            fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/Actions/UploadFile/UploadFile.action.jsx",
            lineNumber: 121,
            columnNumber: 13
          },
          void 0
        )
      ] }, void 0, !0, {
        fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/Actions/UploadFile/UploadFile.action.jsx",
        lineNumber: 119,
        columnNumber: 11
      }, void 0) }, void 0, !1, {
        fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/Actions/UploadFile/UploadFile.action.jsx",
        lineNumber: 118,
        columnNumber: 9
      }, void 0)
    ] }, void 0, !0, {
      fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/Actions/UploadFile/UploadFile.action.jsx",
      lineNumber: 105,
      columnNumber: 7
    }, void 0),
    o.length > 0 && /* @__PURE__ */ s.jsxDEV("div", { className: "files-progress", children: [
      /* @__PURE__ */ s.jsxDEV("div", { className: "heading", children: Object.values(u).some((U) => U) ? /* @__PURE__ */ s.jsxDEV(s.Fragment, { children: [
        /* @__PURE__ */ s.jsxDEV("h2", { children: N("uploading") }, void 0, !1, {
          fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/Actions/UploadFile/UploadFile.action.jsx",
          lineNumber: 138,
          columnNumber: 17
        }, void 0),
        /* @__PURE__ */ s.jsxDEV(zn, { loading: !0, className: "upload-loading" }, void 0, !1, {
          fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/Actions/UploadFile/UploadFile.action.jsx",
          lineNumber: 139,
          columnNumber: 17
        }, void 0)
      ] }, void 0, !0, {
        fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/Actions/UploadFile/UploadFile.action.jsx",
        lineNumber: 137,
        columnNumber: 15
      }, void 0) : /* @__PURE__ */ s.jsxDEV("h2", { children: N("completed") }, void 0, !1, {
        fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/Actions/UploadFile/UploadFile.action.jsx",
        lineNumber: 142,
        columnNumber: 15
      }, void 0) }, void 0, !1, {
        fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/Actions/UploadFile/UploadFile.action.jsx",
        lineNumber: 135,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ s.jsxDEV("ul", { children: o.map((U, D) => /* @__PURE__ */ s.jsxDEV(
        o4,
        {
          index: D,
          fileData: U,
          setFiles: a,
          fileUploadConfig: n,
          setIsUploading: f,
          onFileUploaded: i,
          handleFileRemove: v
        },
        D,
        !1,
        {
          fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/Actions/UploadFile/UploadFile.action.jsx",
          lineNumber: 147,
          columnNumber: 15
        },
        void 0
      )) }, void 0, !1, {
        fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/Actions/UploadFile/UploadFile.action.jsx",
        lineNumber: 145,
        columnNumber: 11
      }, void 0)
    ] }, void 0, !0, {
      fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/Actions/UploadFile/UploadFile.action.jsx",
      lineNumber: 134,
      columnNumber: 9
    }, void 0)
  ] }, void 0, !0, {
    fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/Actions/UploadFile/UploadFile.action.jsx",
    lineNumber: 104,
    columnNumber: 5
  }, void 0);
}, It = ["jpg", "jpeg", "png"], Gt = ["mp4", "mov", "avi"], _t = ["mp3", "wav", "m4a"], Bt = ["txt", "pdf"], s4 = ({ filePreviewPath: n, filePreviewComponent: e }) => {
  var N;
  const [t, r] = R(!0), [i, o] = R(!1), { selectedFiles: a } = Te(), l = pn(73), c = (N = Ie(a[0].name)) == null ? void 0 : N.toLowerCase(), u = `${n}${a[0].path}`, f = ye(), m = hn(
    () => e == null ? void 0 : e(a[0]),
    [e]
  ), g = () => {
    r(!1), o(!1);
  }, p = () => {
    r(!1), o(!0);
  }, h = () => {
    window.location.href = u;
  };
  return Me.isValidElement(m) ? m : /* @__PURE__ */ s.jsxDEV("section", { className: `file-previewer ${c === "pdf" ? "pdf-previewer" : ""}`, children: [
    i || ![
      ...It,
      ...Gt,
      ..._t,
      ...Bt
    ].includes(c) && /* @__PURE__ */ s.jsxDEV("div", { className: "preview-error", children: [
      /* @__PURE__ */ s.jsxDEV("span", { className: "error-icon", children: l[c] ?? /* @__PURE__ */ s.jsxDEV(Sx, { size: 73 }, void 0, !1, {
        fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/Actions/PreviewFile/PreviewFile.action.jsx",
        lineNumber: 61,
        columnNumber: 67
      }, void 0) }, void 0, !1, {
        fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/Actions/PreviewFile/PreviewFile.action.jsx",
        lineNumber: 61,
        columnNumber: 13
      }, void 0),
      /* @__PURE__ */ s.jsxDEV("span", { className: "error-msg", children: f("previewUnavailable") }, void 0, !1, {
        fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/Actions/PreviewFile/PreviewFile.action.jsx",
        lineNumber: 62,
        columnNumber: 13
      }, void 0),
      /* @__PURE__ */ s.jsxDEV("div", { className: "file-info", children: [
        /* @__PURE__ */ s.jsxDEV("span", { className: "file-name", children: a[0].name }, void 0, !1, {
          fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/Actions/PreviewFile/PreviewFile.action.jsx",
          lineNumber: 64,
          columnNumber: 15
        }, void 0),
        a[0].size && /* @__PURE__ */ s.jsxDEV("span", { children: "-" }, void 0, !1, {
          fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/Actions/PreviewFile/PreviewFile.action.jsx",
          lineNumber: 65,
          columnNumber: 41
        }, void 0),
        /* @__PURE__ */ s.jsxDEV("span", { className: "file-size", children: Nn(a[0].size) }, void 0, !1, {
          fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/Actions/PreviewFile/PreviewFile.action.jsx",
          lineNumber: 66,
          columnNumber: 15
        }, void 0)
      ] }, void 0, !0, {
        fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/Actions/PreviewFile/PreviewFile.action.jsx",
        lineNumber: 63,
        columnNumber: 13
      }, void 0),
      /* @__PURE__ */ s.jsxDEV(Ge, { onClick: h, padding: "0.45rem .9rem", children: /* @__PURE__ */ s.jsxDEV("div", { className: "download-btn", children: [
        /* @__PURE__ */ s.jsxDEV(On, { size: 18 }, void 0, !1, {
          fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/Actions/PreviewFile/PreviewFile.action.jsx",
          lineNumber: 70,
          columnNumber: 17
        }, void 0),
        /* @__PURE__ */ s.jsxDEV("span", { children: f("download") }, void 0, !1, {
          fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/Actions/PreviewFile/PreviewFile.action.jsx",
          lineNumber: 71,
          columnNumber: 17
        }, void 0)
      ] }, void 0, !0, {
        fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/Actions/PreviewFile/PreviewFile.action.jsx",
        lineNumber: 69,
        columnNumber: 15
      }, void 0) }, void 0, !1, {
        fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/Actions/PreviewFile/PreviewFile.action.jsx",
        lineNumber: 68,
        columnNumber: 13
      }, void 0)
    ] }, void 0, !0, {
      fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/Actions/PreviewFile/PreviewFile.action.jsx",
      lineNumber: 60,
      columnNumber: 11
    }, void 0),
    It.includes(c) && /* @__PURE__ */ s.jsxDEV(s.Fragment, { children: [
      /* @__PURE__ */ s.jsxDEV(zn, { isLoading: t }, void 0, !1, {
        fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/Actions/PreviewFile/PreviewFile.action.jsx",
        lineNumber: 78,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ s.jsxDEV(
        "img",
        {
          src: u,
          alt: "Preview Unavailable",
          className: `photo-popup-image ${t ? "img-loading" : ""}`,
          onLoad: g,
          onError: p,
          loading: "lazy"
        },
        void 0,
        !1,
        {
          fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/Actions/PreviewFile/PreviewFile.action.jsx",
          lineNumber: 79,
          columnNumber: 11
        },
        void 0
      )
    ] }, void 0, !0, {
      fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/Actions/PreviewFile/PreviewFile.action.jsx",
      lineNumber: 77,
      columnNumber: 9
    }, void 0),
    Gt.includes(c) && /* @__PURE__ */ s.jsxDEV("video", { src: u, className: "video-preview", controls: !0, autoPlay: !0 }, void 0, !1, {
      fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/Actions/PreviewFile/PreviewFile.action.jsx",
      lineNumber: 90,
      columnNumber: 9
    }, void 0),
    _t.includes(c) && /* @__PURE__ */ s.jsxDEV("audio", { src: u, controls: !0, autoPlay: !0, className: "audio-preview" }, void 0, !1, {
      fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/Actions/PreviewFile/PreviewFile.action.jsx",
      lineNumber: 93,
      columnNumber: 9
    }, void 0),
    Bt.includes(c) && /* @__PURE__ */ s.jsxDEV(s.Fragment, { children: /* @__PURE__ */ s.jsxDEV(
      "iframe",
      {
        src: u,
        onLoad: g,
        onError: p,
        frameBorder: "0",
        className: `photo-popup-iframe ${t ? "img-loading" : ""}`
      },
      void 0,
      !1,
      {
        fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/Actions/PreviewFile/PreviewFile.action.jsx",
        lineNumber: 97,
        columnNumber: 11
      },
      void 0
    ) }, void 0, !1, {
      fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/Actions/PreviewFile/PreviewFile.action.jsx",
      lineNumber: 96,
      columnNumber: 9
    }, void 0)
  ] }, void 0, !0, {
    fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/Actions/PreviewFile/PreviewFile.action.jsx",
    lineNumber: 52,
    columnNumber: 5
  }, void 0);
}, Vn = (n) => n.toLowerCase(), xe = (n, e, t = !1) => {
  const r = pe(/* @__PURE__ */ new Set([])), i = hn(() => new Set(n.map((c) => Vn(c))), [n]), o = (c) => {
    if (!c.repeat && (r.current.add(Vn(c.key)), i.isSubsetOf(r.current) && !t)) {
      c.preventDefault(), e(c);
      return;
    }
  }, a = (c) => {
    r.current.delete(Vn(c.key));
  }, l = () => {
    r.current.clear();
  };
  oe(() => (window.addEventListener("keydown", o), window.addEventListener("keyup", a), window.addEventListener("blur", l), () => {
    window.removeEventListener("keydown", o), window.removeEventListener("keyup", a), window.removeEventListener("blur", l);
  }), [i, e, t]);
}, $e = {
  createFolder: ["Alt", "Shift", "N"],
  uploadFiles: ["Control", "U"],
  cut: ["Control", "X"],
  copy: ["Control", "C"],
  paste: ["Control", "V"],
  rename: ["F2"],
  download: ["Control", "D"],
  delete: ["Delete"],
  selectAll: ["Control", "A"],
  jumpToFirst: ["Home"],
  jumpToLast: ["End"],
  listLayout: ["Control", "Shift", "!"],
  // Act as Ctrl + Shift + 1 but could cause problems for QWERTZ or DVORAK etc. keyborad layouts.
  gridLayout: ["Control", "Shift", "@"],
  // Act as Ctrl + Shift + 2 but could cause problems for QWERTZ or DVORAK etc. keyborad layouts.
  refresh: ["F5"],
  clearSelection: ["Escape"]
}, l4 = (n, e, t) => {
  const { setClipBoard: r, handleCutCopy: i, handlePasting: o } = bn(), { currentFolder: a, currentPathFiles: l } = we(), { selectedFiles: c, setSelectedFiles: u, handleDownload: f } = Te(), { setActiveLayout: m } = He(), g = () => {
    t.create && n.show("createFolder");
  }, p = () => {
    t.upload && n.show("uploadFile");
  }, h = () => {
    t.move && i(!0);
  }, N = () => {
    t.copy && i(!1);
  }, H = () => {
    o(a);
  }, F = () => {
    t.rename && n.show("rename");
  }, j = () => {
    t.download && f();
  }, P = () => {
    t.delete && c.length && n.show("delete");
  }, S = () => {
    l.length > 0 && u([l[0]]);
  }, v = () => {
    l.length > 0 && u([l.at(-1)]);
  }, U = () => {
    u(l);
  }, D = () => {
    u((M) => M.length > 0 ? [] : M);
  }, C = () => {
    Ae(e, "onRefresh"), r(null);
  }, b = () => {
    m("grid");
  }, $ = () => {
    m("list");
  };
  xe($e.createFolder, g, n.isActive), xe($e.uploadFiles, p, n.isActive), xe($e.cut, h, n.isActive), xe($e.copy, N, n.isActive), xe($e.paste, H, n.isActive), xe($e.rename, F, n.isActive), xe($e.download, j, n.isActive), xe($e.delete, P, n.isActive), xe($e.jumpToFirst, S, n.isActive), xe($e.jumpToLast, v, n.isActive), xe($e.selectAll, U, n.isActive), xe($e.clearSelection, D, n.isActive), xe($e.refresh, C, n.isActive), xe($e.gridLayout, b, n.isActive), xe($e.listLayout, $, n.isActive);
}, c4 = ({
  fileUploadConfig: n,
  onFileUploading: e,
  onFileUploaded: t,
  onDelete: r,
  onRefresh: i,
  maxFileSize: o,
  filePreviewPath: a,
  filePreviewComponent: l,
  acceptedFileTypes: c,
  triggerAction: u,
  permissions: f
}) => {
  const [m, g] = R(null), { selectedFiles: p } = Te(), h = ye();
  l4(u, i, f);
  const N = {
    uploadFile: {
      title: h("upload"),
      component: /* @__PURE__ */ s.jsxDEV(
        a4,
        {
          fileUploadConfig: n,
          maxFileSize: o,
          acceptedFileTypes: c,
          onFileUploading: e,
          onFileUploaded: t
        },
        void 0,
        !1,
        {
          fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/Actions/Actions.jsx",
          lineNumber: 34,
          columnNumber: 9
        },
        void 0
      ),
      width: "35%"
    },
    delete: {
      title: h("delete"),
      component: /* @__PURE__ */ s.jsxDEV(e4, { triggerAction: u, onDelete: r }, void 0, !1, {
        fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/Actions/Actions.jsx",
        lineNumber: 46,
        columnNumber: 18
      }, void 0),
      width: "25%"
    },
    previewFile: {
      title: h("preview"),
      component: /* @__PURE__ */ s.jsxDEV(
        s4,
        {
          filePreviewPath: a,
          filePreviewComponent: l
        },
        void 0,
        !1,
        {
          fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/Actions/Actions.jsx",
          lineNumber: 52,
          columnNumber: 9
        },
        void 0
      ),
      width: "50%"
    }
  };
  if (oe(() => {
    if (u.isActive) {
      const H = u.actionType;
      H === "previewFile" && (N[H].title = (p == null ? void 0 : p.name) ?? h("preview")), g(N[H]);
    } else
      g(null);
  }, [u.isActive]), m)
    return /* @__PURE__ */ s.jsxDEV(
      Fr,
      {
        heading: m.title,
        show: u.isActive,
        setShow: u.close,
        dialogWidth: m.width,
        children: m == null ? void 0 : m.component
      },
      void 0,
      !1,
      {
        fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/Actions/Actions.jsx",
        lineNumber: 75,
        columnNumber: 7
      },
      void 0
    );
}, u4 = () => {
  const [n, e] = R(!1), [t, r] = R(null);
  return {
    isActive: n,
    actionType: t,
    show: (a) => {
      e(!0), r(a);
    },
    close: () => {
      e(!1), r(null);
    }
  };
}, d4 = (n, e) => {
  const [t, r] = R({ col1: n, col2: e }), [i, o] = R(!1), a = pe(null);
  return {
    containerRef: a,
    colSizes: t,
    setColSizes: r,
    isDragging: i,
    handleMouseDown: () => {
      o(!0);
    },
    handleMouseUp: () => {
      o(!1);
    },
    handleMouseMove: (f) => {
      if (!i) return;
      f.preventDefault();
      const g = a.current.getBoundingClientRect(), p = (f.clientX - g.left) / g.width * 100;
      p >= 15 && p <= 60 && r({ col1: p, col2: 100 - p });
    }
  };
}, f4 = (n, e, t) => {
  const r = n[e];
  if (r && isNaN(Date.parse(r)))
    return new Error(
      `Invalid prop \`${e}\` supplied to \`${t}\`. Expected a valid date string (ISO 8601) but received \`${r}\`.`
    );
}, Wt = (n, e, t) => {
  const r = n[e];
  try {
    new URL(r);
    return;
  } catch {
    return new Error(
      `Invalid prop \`${e}\` supplied to \`${t}\`. Expected a valid URL but received \`${r}\`.`
    );
  }
}, m4 = {
  create: !0,
  upload: !0,
  move: !0,
  copy: !0,
  rename: !0,
  download: !0,
  delete: !0
}, wr = ({
  files: n,
  fileUploadConfig: e,
  isLoading: t,
  onCreateFolder: r,
  onFileUploading: i = () => {
  },
  onFileUploaded: o = () => {
  },
  onCut: a,
  onCopy: l,
  onPaste: c,
  onRename: u,
  onDownload: f,
  onDelete: m = () => null,
  onLayoutChange: g = () => {
  },
  onRefresh: p,
  onFileOpen: h = () => {
  },
  onFolderChange: N = () => {
  },
  onSelect: H,
  onSelectionChange: F,
  onError: j = () => {
  },
  layout: P = "grid",
  enableFilePreview: S = !0,
  maxFileSize: v,
  filePreviewPath: U,
  acceptedFileTypes: D,
  height: C = "600px",
  width: b = "100%",
  initialPath: $ = "",
  filePreviewComponent: M,
  primaryColor: L = "#6155b4",
  fontFamily: E = "Nunito Sans, sans-serif",
  language: A = "en",
  permissions: Q = {},
  collapsibleNav: J = !1,
  defaultNavExpanded: ne = !0,
  className: de = "",
  style: re = {}
}) => {
  const [x, w] = R(ne), O = u4(), { containerRef: G, colSizes: I, isDragging: X, handleMouseMove: _, handleMouseUp: B, handleMouseDown: q } = d4(20, 80), Z = {
    "--file-manager-font-family": E,
    "--file-manager-primary-color": L,
    height: C,
    width: b
  }, k = hn(
    () => ({ ...m4, ...Q }),
    [Q]
  );
  return /* @__PURE__ */ s.jsxDEV(
    "main",
    {
      className: `file-explorer ${de}`,
      onContextMenu: (ce) => ce.preventDefault(),
      style: { ...Z, ...re },
      children: [
        /* @__PURE__ */ s.jsxDEV(zn, { loading: t }, void 0, !1, {
          fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/FileManager.jsx",
          lineNumber: 81,
          columnNumber: 7
        }, void 0),
        /* @__PURE__ */ s.jsxDEV(rx, { language: A, children: /* @__PURE__ */ s.jsxDEV(ox, { filesData: n, onError: j, children: /* @__PURE__ */ s.jsxDEV(sx, { initialPath: $, onFolderChange: N, children: /* @__PURE__ */ s.jsxDEV(
          lx,
          {
            onDownload: f,
            onSelect: H,
            onSelectionChange: F,
            children: /* @__PURE__ */ s.jsxDEV(cx, { onPaste: c, onCut: a, onCopy: l, children: /* @__PURE__ */ s.jsxDEV(hi, { layout: P, children: [
              /* @__PURE__ */ s.jsxDEV(
                pr,
                {
                  onLayoutChange: g,
                  onRefresh: p,
                  triggerAction: O,
                  permissions: k
                },
                void 0,
                !1,
                {
                  fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/FileManager.jsx",
                  lineNumber: 92,
                  columnNumber: 19
                },
                void 0
              ),
              /* @__PURE__ */ s.jsxDEV(
                "section",
                {
                  ref: G,
                  onMouseMove: _,
                  onMouseUp: B,
                  className: "files-container",
                  children: [
                    /* @__PURE__ */ s.jsxDEV(
                      "div",
                      {
                        className: `navigation-pane ${x ? "open" : "closed"}`,
                        style: {
                          width: I.col1 + "%"
                        },
                        children: [
                          /* @__PURE__ */ s.jsxDEV(vr, { onFileOpen: h }, void 0, !1, {
                            fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/FileManager.jsx",
                            lineNumber: 110,
                            columnNumber: 23
                          }, void 0),
                          /* @__PURE__ */ s.jsxDEV(
                            "div",
                            {
                              className: `sidebar-resize ${X ? "sidebar-dragging" : ""}`,
                              onMouseDown: q
                            },
                            void 0,
                            !1,
                            {
                              fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/FileManager.jsx",
                              lineNumber: 111,
                              columnNumber: 23
                            },
                            void 0
                          )
                        ]
                      },
                      void 0,
                      !0,
                      {
                        fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/FileManager.jsx",
                        lineNumber: 104,
                        columnNumber: 21
                      },
                      void 0
                    ),
                    /* @__PURE__ */ s.jsxDEV(
                      "div",
                      {
                        className: "folders-preview",
                        style: { width: (x ? I.col2 : 100) + "%" },
                        children: [
                          /* @__PURE__ */ s.jsxDEV(
                            Gn,
                            {
                              collapsibleNav: J,
                              isNavigationPaneOpen: x,
                              setNavigationPaneOpen: w
                            },
                            void 0,
                            !1,
                            {
                              fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/FileManager.jsx",
                              lineNumber: 121,
                              columnNumber: 23
                            },
                            void 0
                          ),
                          /* @__PURE__ */ s.jsxDEV(
                            Dr,
                            {
                              onCreateFolder: r,
                              onRename: u,
                              onFileOpen: h,
                              onRefresh: p,
                              enableFilePreview: S,
                              triggerAction: O,
                              permissions: k
                            },
                            void 0,
                            !1,
                            {
                              fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/FileManager.jsx",
                              lineNumber: 126,
                              columnNumber: 23
                            },
                            void 0
                          )
                        ]
                      },
                      void 0,
                      !0,
                      {
                        fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/FileManager.jsx",
                        lineNumber: 117,
                        columnNumber: 21
                      },
                      void 0
                    )
                  ]
                },
                void 0,
                !0,
                {
                  fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/FileManager.jsx",
                  lineNumber: 98,
                  columnNumber: 19
                },
                void 0
              ),
              /* @__PURE__ */ s.jsxDEV(
                c4,
                {
                  fileUploadConfig: e,
                  onFileUploading: i,
                  onFileUploaded: o,
                  onDelete: m,
                  onRefresh: p,
                  maxFileSize: v,
                  filePreviewPath: U,
                  filePreviewComponent: M,
                  acceptedFileTypes: D,
                  triggerAction: O,
                  permissions: k
                },
                void 0,
                !1,
                {
                  fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/FileManager.jsx",
                  lineNumber: 138,
                  columnNumber: 19
                },
                void 0
              )
            ] }, void 0, !0, {
              fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/FileManager.jsx",
              lineNumber: 91,
              columnNumber: 17
            }, void 0) }, void 0, !1, {
              fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/FileManager.jsx",
              lineNumber: 90,
              columnNumber: 15
            }, void 0)
          },
          void 0,
          !1,
          {
            fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/FileManager.jsx",
            lineNumber: 85,
            columnNumber: 13
          },
          void 0
        ) }, void 0, !1, {
          fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/FileManager.jsx",
          lineNumber: 84,
          columnNumber: 11
        }, void 0) }, void 0, !1, {
          fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/FileManager.jsx",
          lineNumber: 83,
          columnNumber: 9
        }, void 0) }, void 0, !1, {
          fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/FileManager.jsx",
          lineNumber: 82,
          columnNumber: 7
        }, void 0)
      ]
    },
    void 0,
    !0,
    {
      fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/FileManager.jsx",
      lineNumber: 76,
      columnNumber: 5
    },
    void 0
  );
};
wr.displayName = "FileManager";
wr.propTypes = {
  files: z.arrayOf(
    z.shape({
      name: z.string.isRequired,
      isDirectory: z.bool.isRequired,
      path: z.string.isRequired,
      updatedAt: f4,
      size: z.number
    })
  ).isRequired,
  fileUploadConfig: z.shape({
    url: Wt,
    headers: z.objectOf(z.string),
    method: z.oneOf(["POST", "PUT"])
  }),
  isLoading: z.bool,
  onCreateFolder: z.func,
  onFileUploading: z.func,
  onFileUploaded: z.func,
  onRename: z.func,
  onDelete: z.func,
  onCut: z.func,
  onCopy: z.func,
  onPaste: z.func,
  onDownload: z.func,
  onLayoutChange: z.func,
  onRefresh: z.func,
  onFileOpen: z.func,
  onFolderChange: z.func,
  onSelect: z.func,
  onSelectionChange: z.func,
  onError: z.func,
  layout: z.oneOf(["grid", "list"]),
  maxFileSize: z.number,
  enableFilePreview: z.bool,
  filePreviewPath: Wt,
  acceptedFileTypes: z.string,
  height: z.oneOfType([z.string, z.number]),
  width: z.oneOfType([z.string, z.number]),
  initialPath: z.string,
  filePreviewComponent: z.func,
  primaryColor: z.string,
  fontFamily: z.string,
  language: z.string,
  permissions: z.shape({
    create: z.bool,
    upload: z.bool,
    move: z.bool,
    copy: z.bool,
    rename: z.bool,
    download: z.bool,
    delete: z.bool
  }),
  collapsibleNav: z.bool,
  defaultNavExpanded: z.bool,
  className: z.string,
  style: z.object
};
export {
  wr as FileManager
};
