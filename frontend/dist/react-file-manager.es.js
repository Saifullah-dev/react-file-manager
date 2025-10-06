import { jsxDEV as l, Fragment as fe } from "react/jsx-dev-runtime";
import * as Te from "react";
import be, { useState as L, useRef as oe, useEffect as X, createContext as Pe, useContext as Me, useLayoutEffect as Vt, useCallback as ct, useMemo as Ye } from "react";
var dt = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, Nn = be.createContext && /* @__PURE__ */ be.createContext(dt), Wt = ["attr", "size", "title"];
function _t(n, e) {
  if (n == null) return {};
  var t = Yt(n, e), i, r;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(n);
    for (r = 0; r < o.length; r++)
      i = o[r], !(e.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(n, i) && (t[i] = n[i]);
  }
  return t;
}
function Yt(n, e) {
  if (n == null) return {};
  var t = {};
  for (var i in n)
    if (Object.prototype.hasOwnProperty.call(n, i)) {
      if (e.indexOf(i) >= 0) continue;
      t[i] = n[i];
    }
  return t;
}
function ke() {
  return ke = Object.assign ? Object.assign.bind() : function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var i in t)
        Object.prototype.hasOwnProperty.call(t, i) && (n[i] = t[i]);
    }
    return n;
  }, ke.apply(this, arguments);
}
function $n(n, e) {
  var t = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(n);
    e && (i = i.filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    })), t.push.apply(t, i);
  }
  return t;
}
function Re(n) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? $n(Object(t), !0).forEach(function(i) {
      Kt(n, i, t[i]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : $n(Object(t)).forEach(function(i) {
      Object.defineProperty(n, i, Object.getOwnPropertyDescriptor(t, i));
    });
  }
  return n;
}
function Kt(n, e, t) {
  return e = qt(e), e in n ? Object.defineProperty(n, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : n[e] = t, n;
}
function qt(n) {
  var e = Jt(n, "string");
  return typeof e == "symbol" ? e : e + "";
}
function Jt(n, e) {
  if (typeof n != "object" || !n) return n;
  var t = n[Symbol.toPrimitive];
  if (t !== void 0) {
    var i = t.call(n, e);
    if (typeof i != "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(n);
}
function ut(n) {
  return n && n.map((e, t) => /* @__PURE__ */ be.createElement(e.tag, Re({
    key: t
  }, e.attr), ut(e.child)));
}
function G(n) {
  return (e) => /* @__PURE__ */ be.createElement(Zt, ke({
    attr: Re({}, n.attr)
  }, e), ut(n.child));
}
function Zt(n) {
  var e = (t) => {
    var {
      attr: i,
      size: r,
      title: o
    } = n, a = _t(n, Wt), s = r || t.size || "1em", c;
    return t.className && (c = t.className), n.className && (c = (c ? c + " " : "") + n.className), /* @__PURE__ */ be.createElement("svg", ke({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, t.attr, i, a, {
      className: c,
      style: Re(Re({
        color: n.color || t.color
      }, t.style), n.style),
      height: s,
      width: s,
      xmlns: "http://www.w3.org/2000/svg"
    }), o && /* @__PURE__ */ be.createElement("title", null, o), n.children);
  };
  return Nn !== void 0 ? /* @__PURE__ */ be.createElement(Nn.Consumer, null, (t) => e(t)) : e(dt);
}
function Xt(n) {
  return G({ attr: { version: "1.1", viewBox: "0 0 16 16" }, child: [{ tag: "path", attr: { d: "M16 8c-0.020-1.045-0.247-2.086-0.665-3.038-0.417-0.953-1.023-1.817-1.766-2.53s-1.624-1.278-2.578-1.651c-0.953-0.374-1.978-0.552-2.991-0.531-1.013 0.020-2.021 0.24-2.943 0.646-0.923 0.405-1.758 0.992-2.449 1.712s-1.237 1.574-1.597 2.497c-0.361 0.923-0.533 1.914-0.512 2.895 0.020 0.981 0.234 1.955 0.627 2.847 0.392 0.892 0.961 1.7 1.658 2.368s1.523 1.195 2.416 1.543c0.892 0.348 1.851 0.514 2.799 0.493 0.949-0.020 1.89-0.227 2.751-0.608 0.862-0.379 1.642-0.929 2.287-1.604s1.154-1.472 1.488-2.335c0.204-0.523 0.342-1.069 0.415-1.622 0.019 0.001 0.039 0.002 0.059 0.002 0.552 0 1-0.448 1-1 0-0.028-0.001-0.056-0.004-0.083h0.004zM14.411 10.655c-0.367 0.831-0.898 1.584-1.55 2.206s-1.422 1.112-2.254 1.434c-0.832 0.323-1.723 0.476-2.608 0.454-0.884-0.020-1.759-0.215-2.56-0.57-0.801-0.354-1.526-0.867-2.125-1.495s-1.071-1.371-1.38-2.173c-0.31-0.801-0.457-1.66-0.435-2.512s0.208-1.694 0.551-2.464c0.342-0.77 0.836-1.468 1.441-2.044s1.321-1.029 2.092-1.326c0.771-0.298 1.596-0.438 2.416-0.416s1.629 0.202 2.368 0.532c0.74 0.329 1.41 0.805 1.963 1.387s0.988 1.27 1.272 2.011c0.285 0.74 0.418 1.532 0.397 2.32h0.004c-0.002 0.027-0.004 0.055-0.004 0.083 0 0.516 0.39 0.94 0.892 0.994-0.097 0.544-0.258 1.075-0.481 1.578z" }, child: [] }] })(n);
}
const mn = ({ loading: n = !1, className: e }) => n ? /* @__PURE__ */ l("div", { className: `loader-container ${e}`, children: /* @__PURE__ */ l(Xt, { className: "spinner" }, void 0, !1, {
  fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/components/Loader/Loader.jsx",
  lineNumber: 9,
  columnNumber: 7
}, void 0) }, void 0, !1, {
  fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/components/Loader/Loader.jsx",
  lineNumber: 8,
  columnNumber: 5
}, void 0) : null;
function ft(n) {
  return G({ attr: { fill: "currentColor", viewBox: "0 0 16 16" }, child: [{ tag: "path", attr: { fillRule: "evenodd", d: "M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z" }, child: [] }] })(n);
}
function mt(n) {
  return G({ attr: { fill: "currentColor", viewBox: "0 0 16 16" }, child: [{ tag: "path", attr: { d: "m.5 3 .04.87a2 2 0 0 0-.342 1.311l.637 7A2 2 0 0 0 2.826 14H9v-1H2.826a1 1 0 0 1-.995-.91l-.637-7A1 1 0 0 1 2.19 4h11.62a1 1 0 0 1 .996 1.09L14.54 8h1.005l.256-2.819A2 2 0 0 0 13.81 3H9.828a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 6.172 1H2.5a2 2 0 0 0-2 2m5.672-1a1 1 0 0 1 .707.293L7.586 3H2.19q-.362.002-.683.12L1.5 2.98a1 1 0 0 1 1-.98z" }, child: [] }, { tag: "path", attr: { d: "M13.5 9a.5.5 0 0 1 .5.5V11h1.5a.5.5 0 1 1 0 1H14v1.5a.5.5 0 1 1-1 0V12h-1.5a.5.5 0 0 1 0-1H13V9.5a.5.5 0 0 1 .5-.5" }, child: [] }] })(n);
}
function pt(n) {
  return G({ attr: { fill: "currentColor", viewBox: "0 0 16 16" }, child: [{ tag: "path", attr: { d: "M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5z" }, child: [] }] })(n);
}
function yn(n) {
  return G({ attr: { fill: "currentColor", viewBox: "0 0 16 16" }, child: [{ tag: "path", attr: { d: "M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5zM2.5 2a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5zm6.5.5A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5zM1 10.5A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5zm6.5.5A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5z" }, child: [] }] })(n);
}
function ht(n) {
  return G({ attr: { fill: "currentColor", viewBox: "0 0 16 16" }, child: [{ tag: "path", attr: { d: "M3.5 3.5c-.614-.884-.074-1.962.858-2.5L8 7.226 11.642 1c.932.538 1.472 1.616.858 2.5L8.81 8.61l1.556 2.661a2.5 2.5 0 1 1-.794.637L8 9.73l-1.572 2.177a2.5 2.5 0 1 1-.794-.637L7.19 8.61zm2.5 10a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0m7 0a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0" }, child: [] }] })(n);
}
function gt(n) {
  return G({ attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "polyline", attr: { points: "23 4 23 10 17 10" }, child: [] }, { tag: "polyline", attr: { points: "1 20 1 14 7 14" }, child: [] }, { tag: "path", attr: { d: "M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" }, child: [] }] })(n);
}
function Qt(n) {
  return G({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] }, { tag: "path", attr: { d: "M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" }, child: [] }] })(n);
}
function ei(n) {
  return G({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] }, { tag: "path", attr: { d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" }, child: [] }] })(n);
}
function ni(n) {
  return G({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0V0z" }, child: [] }, { tag: "path", attr: { d: "M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" }, child: [] }] })(n);
}
function ti(n) {
  return G({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] }, { tag: "path", attr: { d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" }, child: [] }] })(n);
}
function ii(n) {
  return G({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] }, { tag: "path", attr: { d: "M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" }, child: [] }] })(n);
}
function bt(n) {
  return G({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0V0z" }, child: [] }, { tag: "path", attr: { d: "M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z" }, child: [] }] })(n);
}
function pn(n) {
  return G({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] }, { tag: "path", attr: { d: "M18 15v3H6v-3H4v3c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-3h-2zm-1-4-1.41-1.41L13 12.17V4h-2v8.17L8.41 9.59 7 11l5 5 5-5z" }, child: [] }] })(n);
}
function vt(n) {
  return G({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] }, { tag: "path", attr: { d: "M18 15v3H6v-3H4v3c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-3h-2zM7 9l1.41 1.41L11 7.83V16h2V7.83l2.59 2.58L17 9l-5-5-5 5z" }, child: [] }] })(n);
}
function ri(n) {
  return G({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0V0z" }, child: [] }, { tag: "path", attr: { d: "M10.02 6 8.61 7.41 13.19 12l-4.58 4.59L10.02 18l6-6-6-6z" }, child: [] }] })(n);
}
function Nt(n) {
  return G({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { d: "M20.005 5.995h-1v2h1v8h-1v2h1c1.103 0 2-.897 2-2v-8c0-1.102-.898-2-2-2zm-14 4H15v4H6.005z" }, child: [] }, { tag: "path", attr: { d: "M17.005 17.995V4H20V2h-8v2h3.005v1.995h-11c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2h11V20H12v2h8v-2h-2.995v-2.005zm-13-2v-8h11v8h-11z" }, child: [] }] })(n);
}
function oi(n) {
  return G({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { d: "M20 2H8c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zM8 16V4h12l.002 12H8z" }, child: [] }, { tag: "path", attr: { d: "M4 8H2v12c0 1.103.897 2 2 2h12v-2H4V8zm8.933 3.519-1.726-1.726-1.414 1.414 3.274 3.274 5.702-6.84-1.538-1.282z" }, child: [] }] })(n);
}
function $t(n) {
  return G({ attr: { viewBox: "0 0 448 512" }, child: [{ tag: "path", attr: { d: "M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" }, child: [] }] })(n);
}
function ai(n) {
  return G({ attr: { viewBox: "0 0 320 512" }, child: [{ tag: "path", attr: { d: "M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" }, child: [] }] })(n);
}
function si(n) {
  return G({ attr: { viewBox: "0 0 640 512" }, child: [{ tag: "path", attr: { d: "M128 0C92.7 0 64 28.7 64 64l0 224-44.8 0C8.6 288 0 296.6 0 307.2C0 349.6 34.4 384 76.8 384L320 384l0-96-192 0 0-224 320 0 0 32 64 0 0-32c0-35.3-28.7-64-64-64L128 0zM512 128l-112 0c-26.5 0-48 21.5-48 48l0 288c0 26.5 21.5 48 48 48l192 0c26.5 0 48-21.5 48-48l0-208-96 0c-17.7 0-32-14.3-32-32l0-96zm32 0l0 96 96 0-96-96z" }, child: [] }] })(n);
}
function Ie(n) {
  return G({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M64 144a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L192 64zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-288 0zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-288 0zM64 464a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm48-208a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z" }, child: [] }] })(n);
}
function Fn(n) {
  return G({ attr: { viewBox: "0 0 384 512" }, child: [{ tag: "path", attr: { d: "M64 464l256 0c8.8 0 16-7.2 16-16l0-288-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16zM0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zM192 272l0 128c0 6.5-3.9 12.3-9.9 14.8s-12.9 1.1-17.4-3.5L129.4 376 112 376c-8.8 0-16-7.2-16-16l0-48c0-8.8 7.2-16 16-16l17.4 0 35.3-35.3c4.6-4.6 11.5-5.9 17.4-3.5s9.9 8.3 9.9 14.8zm85.8-4c11.6 20 18.2 43.3 18.2 68s-6.6 48-18.2 68c-6.6 11.5-21.3 15.4-32.8 8.8s-15.4-21.3-8.8-32.8c7.5-12.9 11.8-27.9 11.8-44s-4.3-31.1-11.8-44c-6.6-11.5-2.7-26.2 8.8-32.8s26.2-2.7 32.8 8.8z" }, child: [] }] })(n);
}
function ae(n) {
  return G({ attr: { viewBox: "0 0 384 512" }, child: [{ tag: "path", attr: { d: "M64 464c-8.8 0-16-7.2-16-16L48 64c0-8.8 7.2-16 16-16l160 0 0 80c0 17.7 14.3 32 32 32l80 0 0 288c0 8.8-7.2 16-16 16L64 464zM64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-293.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0L64 0zm97 289c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0L79 303c-9.4 9.4-9.4 24.6 0 33.9l48 48c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-31-31 31-31zM257 255c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l31 31-31 31c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l48-48c9.4-9.4 9.4-24.6 0-33.9l-48-48z" }, child: [] }] })(n);
}
function xn(n) {
  return G({ attr: { viewBox: "0 0 384 512" }, child: [{ tag: "path", attr: { d: "M48 448L48 64c0-8.8 7.2-16 16-16l160 0 0 80c0 17.7 14.3 32 32 32l80 0 0 288c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16zM64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-293.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0L64 0zm90.9 233.3c-8.1-10.5-23.2-12.3-33.7-4.2s-12.3 23.2-4.2 33.7L161.6 320l-44.5 57.3c-8.1 10.5-6.3 25.5 4.2 33.7s25.5 6.3 33.7-4.2L192 359.1l37.1 47.6c8.1 10.5 23.2 12.3 33.7 4.2s12.3-23.2 4.2-33.7L222.4 320l44.5-57.3c8.1-10.5 6.3-25.5-4.2-33.7s-25.5-6.3-33.7 4.2L192 280.9l-37.1-47.6z" }, child: [] }] })(n);
}
function Xe(n) {
  return G({ attr: { viewBox: "0 0 384 512" }, child: [{ tag: "path", attr: { d: "M64 464c-8.8 0-16-7.2-16-16L48 64c0-8.8 7.2-16 16-16l160 0 0 80c0 17.7 14.3 32 32 32l80 0 0 288c0 8.8-7.2 16-16 16L64 464zM64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-293.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0L64 0zm96 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm69.2 46.9c-3-4.3-7.9-6.9-13.2-6.9s-10.2 2.6-13.2 6.9l-41.3 59.7-11.9-19.1c-2.9-4.7-8.1-7.5-13.6-7.5s-10.6 2.8-13.6 7.5l-40 64c-3.1 4.9-3.2 11.1-.4 16.2s8.2 8.2 14 8.2l48 0 32 0 40 0 72 0c6 0 11.4-3.3 14.2-8.6s2.4-11.6-1-16.5l-72-104z" }, child: [] }] })(n);
}
function li(n) {
  return G({ attr: { viewBox: "0 0 384 512" }, child: [{ tag: "path", attr: { d: "M64 464c-8.8 0-16-7.2-16-16L48 64c0-8.8 7.2-16 16-16l160 0 0 80c0 17.7 14.3 32 32 32l80 0 0 288c0 8.8-7.2 16-16 16L64 464zM64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-293.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0L64 0zm56 256c-13.3 0-24 10.7-24 24s10.7 24 24 24l144 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-144 0zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24l144 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-144 0z" }, child: [] }] })(n);
}
function ci(n) {
  return G({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M64 464l48 0 0 48-48 0c-35.3 0-64-28.7-64-64L0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 304l-48 0 0-144-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16zM176 352l32 0c30.9 0 56 25.1 56 56s-25.1 56-56 56l-16 0 0 32c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-48 0-80c0-8.8 7.2-16 16-16zm32 80c13.3 0 24-10.7 24-24s-10.7-24-24-24l-16 0 0 48 16 0zm96-80l32 0c26.5 0 48 21.5 48 48l0 64c0 26.5-21.5 48-48 48l-32 0c-8.8 0-16-7.2-16-16l0-128c0-8.8 7.2-16 16-16zm32 128c8.8 0 16-7.2 16-16l0-64c0-8.8-7.2-16-16-16l-16 0 0 96 16 0zm80-112c0-8.8 7.2-16 16-16l48 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0 0 32 32 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0 0 48c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-64 0-64z" }, child: [] }] })(n);
}
function Cn(n) {
  return G({ attr: { viewBox: "0 0 384 512" }, child: [{ tag: "path", attr: { d: "M64 464c-8.8 0-16-7.2-16-16L48 64c0-8.8 7.2-16 16-16l160 0 0 80c0 17.7 14.3 32 32 32l80 0 0 288c0 8.8-7.2 16-16 16L64 464zM64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-293.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0L64 0zm72 208c-13.3 0-24 10.7-24 24l0 104 0 56c0 13.3 10.7 24 24 24s24-10.7 24-24l0-32 44 0c42 0 76-34 76-76s-34-76-76-76l-68 0zm68 104l-44 0 0-56 44 0c15.5 0 28 12.5 28 28s-12.5 28-28 28z" }, child: [] }] })(n);
}
function wn(n) {
  return G({ attr: { viewBox: "0 0 384 512" }, child: [{ tag: "path", attr: { d: "M320 464c8.8 0 16-7.2 16-16l0-288-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0zM0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zM80 288c0-17.7 14.3-32 32-32l96 0c17.7 0 32 14.3 32 32l0 16 44.9-29.9c2-1.3 4.4-2.1 6.8-2.1c6.8 0 12.3 5.5 12.3 12.3l0 103.4c0 6.8-5.5 12.3-12.3 12.3c-2.4 0-4.8-.7-6.8-2.1L240 368l0 16c0 17.7-14.3 32-32 32l-96 0c-17.7 0-32-14.3-32-32l0-96z" }, child: [] }] })(n);
}
function Pn(n) {
  return G({ attr: { viewBox: "0 0 384 512" }, child: [{ tag: "path", attr: { d: "M48 448L48 64c0-8.8 7.2-16 16-16l160 0 0 80c0 17.7 14.3 32 32 32l80 0 0 288c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16zM64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-293.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0L64 0zm55 241.1c-3.8-12.7-17.2-19.9-29.9-16.1s-19.9 17.2-16.1 29.9l48 160c3 10.2 12.4 17.1 23 17.1s19.9-7 23-17.1l25-83.4 25 83.4c3 10.2 12.4 17.1 23 17.1s19.9-7 23-17.1l48-160c3.8-12.7-3.4-26.1-16.1-29.9s-26.1 3.4-29.9 16.1l-25 83.4-25-83.4c-3-10.2-12.4-17.1-23-17.1s-19.9 7-23 17.1l-25 83.4-25-83.4z" }, child: [] }] })(n);
}
function di(n) {
  return G({ attr: { viewBox: "0 0 384 512" }, child: [{ tag: "path", attr: { d: "M64 464c-8.8 0-16-7.2-16-16L48 64c0-8.8 7.2-16 16-16l48 0c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l48 0 0 80c0 17.7 14.3 32 32 32l80 0 0 288c0 8.8-7.2 16-16 16L64 464zM64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-293.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0L64 0zm48 112c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm0 64c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm-6.3 71.8L82.1 335.9c-1.4 5.4-2.1 10.9-2.1 16.4c0 35.2 28.8 63.7 64 63.7s64-28.5 64-63.7c0-5.5-.7-11.1-2.1-16.4l-23.5-88.2c-3.7-14-16.4-23.8-30.9-23.8l-14.8 0c-14.5 0-27.2 9.7-30.9 23.8zM128 336l32 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z" }, child: [] }] })(n);
}
function Oe(n) {
  return G({ attr: { viewBox: "0 0 384 512" }, child: [{ tag: "path", attr: { d: "M320 464c8.8 0 16-7.2 16-16l0-288-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0zM0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64z" }, child: [] }] })(n);
}
function Mn(n) {
  return G({ attr: { viewBox: "0 0 576 512" }, child: [{ tag: "path", attr: { d: "M384 480l48 0c11.4 0 21.9-6 27.6-15.9l112-192c5.8-9.9 5.8-22.1 .1-32.1S555.5 224 544 224l-400 0c-11.4 0-21.9 6-27.6 15.9L48 357.1 48 96c0-8.8 7.2-16 16-16l117.5 0c4.2 0 8.3 1.7 11.3 4.7l26.5 26.5c21 21 49.5 32.8 79.2 32.8L416 144c8.8 0 16 7.2 16 16l0 32 48 0 0-32c0-35.3-28.7-64-64-64L298.5 96c-17 0-33.3-6.7-45.3-18.7L226.7 50.7c-12-12-28.3-18.7-45.3-18.7L64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l23.7 0L384 480z" }, child: [] }] })(n);
}
function dn(n) {
  return G({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M104.6 48L64 48C28.7 48 0 76.7 0 112L0 384c0 35.3 28.7 64 64 64l96 0 0-48-96 0c-8.8 0-16-7.2-16-16l0-272c0-8.8 7.2-16 16-16l16 0c0 17.7 14.3 32 32 32l72.4 0C202 108.4 227.6 96 256 96l62 0c-7.1-27.6-32.2-48-62-48l-40.6 0C211.6 20.9 188.2 0 160 0s-51.6 20.9-55.4 48zM144 56a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zM448 464l-192 0c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l140.1 0L464 243.9 464 448c0 8.8-7.2 16-16 16zM256 512l192 0c35.3 0 64-28.7 64-64l0-204.1c0-12.7-5.1-24.9-14.1-33.9l-67.9-67.9c-9-9-21.2-14.1-33.9-14.1L256 128c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64z" }, child: [] }] })(n);
}
const He = (n = () => {
}) => {
  const [e, t] = L(!1), i = oe(null), r = (o) => {
    var a;
    (a = i.current) != null && a.contains(o.target) ? t(!1) : (t(!0), n(o, i));
  };
  return X(() => (document.addEventListener("click", r, !0), document.addEventListener("mousedown", r, !0), () => {
    document.removeEventListener("click", r, !0), document.removeEventListener("mousedown", r, !0);
  }), []), { ref: i, isClicked: e, setIsClicked: t };
}, yt = Pe(), ui = ({ children: n, layout: e }) => {
  const [t, i] = L(() => r(e));
  function r(o) {
    return ["list", "grid"].includes(o) ? o : "grid";
  }
  return /* @__PURE__ */ l(yt.Provider, { value: { activeLayout: t, setActiveLayout: i }, children: n }, void 0, !1, {
    fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/contexts/LayoutContext.jsx",
    lineNumber: 14,
    columnNumber: 5
  }, void 0);
}, ve = () => Me(yt), O = (n) => typeof n == "string", Se = () => {
  let n, e;
  const t = new Promise((i, r) => {
    n = i, e = r;
  });
  return t.resolve = n, t.reject = e, t;
}, Un = (n) => n == null ? "" : "" + n, fi = (n, e, t) => {
  n.forEach((i) => {
    e[i] && (t[i] = e[i]);
  });
}, mi = /###/g, Sn = (n) => n && n.indexOf("###") > -1 ? n.replace(mi, ".") : n, Dn = (n) => !n || O(n), De = (n, e, t) => {
  const i = O(e) ? e.split(".") : e;
  let r = 0;
  for (; r < i.length - 1; ) {
    if (Dn(n)) return {};
    const o = Sn(i[r]);
    !n[o] && t && (n[o] = new t()), Object.prototype.hasOwnProperty.call(n, o) ? n = n[o] : n = {}, ++r;
  }
  return Dn(n) ? {} : {
    obj: n,
    k: Sn(i[r])
  };
}, Tn = (n, e, t) => {
  const {
    obj: i,
    k: r
  } = De(n, e, Object);
  if (i !== void 0 || e.length === 1) {
    i[r] = t;
    return;
  }
  let o = e[e.length - 1], a = e.slice(0, e.length - 1), s = De(n, a, Object);
  for (; s.obj === void 0 && a.length; )
    o = `${a[a.length - 1]}.${o}`, a = a.slice(0, a.length - 1), s = De(n, a, Object), s != null && s.obj && typeof s.obj[`${s.k}.${o}`] < "u" && (s.obj = void 0);
  s.obj[`${s.k}.${o}`] = t;
}, pi = (n, e, t, i) => {
  const {
    obj: r,
    k: o
  } = De(n, e, Object);
  r[o] = r[o] || [], r[o].push(t);
}, Ge = (n, e) => {
  const {
    obj: t,
    k: i
  } = De(n, e);
  if (t && Object.prototype.hasOwnProperty.call(t, i))
    return t[i];
}, hi = (n, e, t) => {
  const i = Ge(n, t);
  return i !== void 0 ? i : Ge(e, t);
}, Ft = (n, e, t) => {
  for (const i in e)
    i !== "__proto__" && i !== "constructor" && (i in n ? O(n[i]) || n[i] instanceof String || O(e[i]) || e[i] instanceof String ? t && (n[i] = e[i]) : Ft(n[i], e[i], t) : n[i] = e[i]);
  return n;
}, xe = (n) => n.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
var gi = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;"
};
const bi = (n) => O(n) ? n.replace(/[&<>"'\/]/g, (e) => gi[e]) : n;
class vi {
  constructor(e) {
    this.capacity = e, this.regExpMap = /* @__PURE__ */ new Map(), this.regExpQueue = [];
  }
  getRegExp(e) {
    const t = this.regExpMap.get(e);
    if (t !== void 0)
      return t;
    const i = new RegExp(e);
    return this.regExpQueue.length === this.capacity && this.regExpMap.delete(this.regExpQueue.shift()), this.regExpMap.set(e, i), this.regExpQueue.push(e), i;
  }
}
const Ni = [" ", ",", "?", "!", ";"], $i = new vi(20), yi = (n, e, t) => {
  e = e || "", t = t || "";
  const i = Ni.filter((a) => e.indexOf(a) < 0 && t.indexOf(a) < 0);
  if (i.length === 0) return !0;
  const r = $i.getRegExp(`(${i.map((a) => a === "?" ? "\\?" : a).join("|")})`);
  let o = !r.test(n);
  if (!o) {
    const a = n.indexOf(t);
    a > 0 && !r.test(n.substring(0, a)) && (o = !0);
  }
  return o;
}, un = (n, e, t = ".") => {
  if (!n) return;
  if (n[e])
    return Object.prototype.hasOwnProperty.call(n, e) ? n[e] : void 0;
  const i = e.split(t);
  let r = n;
  for (let o = 0; o < i.length; ) {
    if (!r || typeof r != "object")
      return;
    let a, s = "";
    for (let c = o; c < i.length; ++c)
      if (c !== o && (s += t), s += i[c], a = r[s], a !== void 0) {
        if (["string", "number", "boolean"].indexOf(typeof a) > -1 && c < i.length - 1)
          continue;
        o += c - o + 1;
        break;
      }
    r = a;
  }
  return r;
}, je = (n) => n == null ? void 0 : n.replace("_", "-"), Fi = {
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
    var t, i;
    (i = (t = console == null ? void 0 : console[n]) == null ? void 0 : t.apply) == null || i.call(t, console, e);
  }
};
class Be {
  constructor(e, t = {}) {
    this.init(e, t);
  }
  init(e, t = {}) {
    this.prefix = t.prefix || "i18next:", this.logger = e || Fi, this.options = t, this.debug = t.debug;
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
  forward(e, t, i, r) {
    return r && !this.debug ? null : (O(e[0]) && (e[0] = `${i}${this.prefix} ${e[0]}`), this.logger[t](e));
  }
  create(e) {
    return new Be(this.logger, {
      prefix: `${this.prefix}:${e}:`,
      ...this.options
    });
  }
  clone(e) {
    return e = e || this.options, e.prefix = e.prefix || this.prefix, new Be(this.logger, e);
  }
}
var pe = new Be();
class Ke {
  constructor() {
    this.observers = {};
  }
  on(e, t) {
    return e.split(" ").forEach((i) => {
      this.observers[i] || (this.observers[i] = /* @__PURE__ */ new Map());
      const r = this.observers[i].get(t) || 0;
      this.observers[i].set(t, r + 1);
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
    this.observers[e] && Array.from(this.observers[e].entries()).forEach(([r, o]) => {
      for (let a = 0; a < o; a++)
        r(...t);
    }), this.observers["*"] && Array.from(this.observers["*"].entries()).forEach(([r, o]) => {
      for (let a = 0; a < o; a++)
        r.apply(r, [e, ...t]);
    });
  }
}
class jn extends Ke {
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
  getResource(e, t, i, r = {}) {
    var d, u;
    const o = r.keySeparator !== void 0 ? r.keySeparator : this.options.keySeparator, a = r.ignoreJSONStructure !== void 0 ? r.ignoreJSONStructure : this.options.ignoreJSONStructure;
    let s;
    e.indexOf(".") > -1 ? s = e.split(".") : (s = [e, t], i && (Array.isArray(i) ? s.push(...i) : O(i) && o ? s.push(...i.split(o)) : s.push(i)));
    const c = Ge(this.data, s);
    return !c && !t && !i && e.indexOf(".") > -1 && (e = s[0], t = s[1], i = s.slice(2).join(".")), c || !a || !O(i) ? c : un((u = (d = this.data) == null ? void 0 : d[e]) == null ? void 0 : u[t], i, o);
  }
  addResource(e, t, i, r, o = {
    silent: !1
  }) {
    const a = o.keySeparator !== void 0 ? o.keySeparator : this.options.keySeparator;
    let s = [e, t];
    i && (s = s.concat(a ? i.split(a) : i)), e.indexOf(".") > -1 && (s = e.split("."), r = t, t = s[1]), this.addNamespaces(t), Tn(this.data, s, r), o.silent || this.emit("added", e, t, i, r);
  }
  addResources(e, t, i, r = {
    silent: !1
  }) {
    for (const o in i)
      (O(i[o]) || Array.isArray(i[o])) && this.addResource(e, t, o, i[o], {
        silent: !0
      });
    r.silent || this.emit("added", e, t, i);
  }
  addResourceBundle(e, t, i, r, o, a = {
    silent: !1,
    skipCopy: !1
  }) {
    let s = [e, t];
    e.indexOf(".") > -1 && (s = e.split("."), r = i, i = t, t = s[1]), this.addNamespaces(t);
    let c = Ge(this.data, s) || {};
    a.skipCopy || (i = JSON.parse(JSON.stringify(i))), r ? Ft(c, i, o) : c = {
      ...c,
      ...i
    }, Tn(this.data, s, c), a.silent || this.emit("added", e, t, i);
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
    return !!(t && Object.keys(t) || []).find((r) => t[r] && Object.keys(t[r]).length > 0);
  }
  toJSON() {
    return this.data;
  }
}
var xt = {
  processors: {},
  addPostProcessor(n) {
    this.processors[n.name] = n;
  },
  handle(n, e, t, i, r) {
    return n.forEach((o) => {
      var a;
      e = ((a = this.processors[o]) == null ? void 0 : a.process(e, t, i, r)) ?? e;
    }), e;
  }
};
const Ct = Symbol("i18next/PATH_KEY");
function xi() {
  const n = [], e = /* @__PURE__ */ Object.create(null);
  let t;
  return e.get = (i, r) => {
    var o;
    return (o = t == null ? void 0 : t.revoke) == null || o.call(t), r === Ct ? n : (n.push(r), t = Proxy.revocable(i, e), t.proxy);
  }, Proxy.revocable(/* @__PURE__ */ Object.create(null), e).proxy;
}
function fn(n, e) {
  const {
    [Ct]: t
  } = n(xi());
  return t.join((e == null ? void 0 : e.keySeparator) ?? ".");
}
const Ln = {}, Hn = (n) => !O(n) && typeof n != "boolean" && typeof n != "number";
class Ve extends Ke {
  constructor(e, t = {}) {
    super(), fi(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], e, this), this.options = t, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.logger = pe.create("translator");
  }
  changeLanguage(e) {
    e && (this.language = e);
  }
  exists(e, t = {
    interpolation: {}
  }) {
    const i = {
      ...t
    };
    if (e == null) return !1;
    const r = this.resolve(e, i);
    return (r == null ? void 0 : r.res) !== void 0;
  }
  extractFromKey(e, t) {
    let i = t.nsSeparator !== void 0 ? t.nsSeparator : this.options.nsSeparator;
    i === void 0 && (i = ":");
    const r = t.keySeparator !== void 0 ? t.keySeparator : this.options.keySeparator;
    let o = t.ns || this.options.defaultNS || [];
    const a = i && e.indexOf(i) > -1, s = !this.options.userDefinedKeySeparator && !t.keySeparator && !this.options.userDefinedNsSeparator && !t.nsSeparator && !yi(e, i, r);
    if (a && !s) {
      const c = e.match(this.interpolator.nestingRegexp);
      if (c && c.length > 0)
        return {
          key: e,
          namespaces: O(o) ? [o] : o
        };
      const d = e.split(i);
      (i !== r || i === r && this.options.ns.indexOf(d[0]) > -1) && (o = d.shift()), e = d.join(r);
    }
    return {
      key: e,
      namespaces: O(o) ? [o] : o
    };
  }
  translate(e, t, i) {
    let r = typeof t == "object" ? {
      ...t
    } : t;
    if (typeof r != "object" && this.options.overloadTranslationOptionHandler && (r = this.options.overloadTranslationOptionHandler(arguments)), typeof r == "object" && (r = {
      ...r
    }), r || (r = {}), e == null) return "";
    typeof e == "function" && (e = fn(e, {
      ...this.options,
      ...r
    })), Array.isArray(e) || (e = [String(e)]);
    const o = r.returnDetails !== void 0 ? r.returnDetails : this.options.returnDetails, a = r.keySeparator !== void 0 ? r.keySeparator : this.options.keySeparator, {
      key: s,
      namespaces: c
    } = this.extractFromKey(e[e.length - 1], r), d = c[c.length - 1];
    let u = r.nsSeparator !== void 0 ? r.nsSeparator : this.options.nsSeparator;
    u === void 0 && (u = ":");
    const f = r.lng || this.language, h = r.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
    if ((f == null ? void 0 : f.toLowerCase()) === "cimode")
      return h ? o ? {
        res: `${d}${u}${s}`,
        usedKey: s,
        exactUsedKey: s,
        usedLng: f,
        usedNS: d,
        usedParams: this.getUsedParamsDetails(r)
      } : `${d}${u}${s}` : o ? {
        res: s,
        usedKey: s,
        exactUsedKey: s,
        usedLng: f,
        usedNS: d,
        usedParams: this.getUsedParamsDetails(r)
      } : s;
    const m = this.resolve(e, r);
    let p = m == null ? void 0 : m.res;
    const v = (m == null ? void 0 : m.usedKey) || s, j = (m == null ? void 0 : m.exactUsedKey) || s, w = ["[object Number]", "[object Function]", "[object RegExp]"], H = r.joinArrays !== void 0 ? r.joinArrays : this.options.joinArrays, C = !this.i18nFormat || this.i18nFormat.handleAsObject, P = r.count !== void 0 && !O(r.count), g = Ve.hasDefaultValue(r), S = P ? this.pluralResolver.getSuffix(f, r.count, r) : "", F = r.ordinal && P ? this.pluralResolver.getSuffix(f, r.count, {
      ordinal: !1
    }) : "", y = P && !r.ordinal && r.count === 0, b = y && r[`defaultValue${this.options.pluralSeparator}zero`] || r[`defaultValue${S}`] || r[`defaultValue${F}`] || r.defaultValue;
    let N = p;
    C && !p && g && (N = b);
    const M = Hn(N), T = Object.prototype.toString.apply(N);
    if (C && N && M && w.indexOf(T) < 0 && !(O(H) && Array.isArray(N))) {
      if (!r.returnObjects && !this.options.returnObjects) {
        this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
        const D = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(v, N, {
          ...r,
          ns: c
        }) : `key '${s} (${this.language})' returned an object instead of string.`;
        return o ? (m.res = D, m.usedParams = this.getUsedParamsDetails(r), m) : D;
      }
      if (a) {
        const D = Array.isArray(N), E = D ? [] : {}, Z = D ? j : v;
        for (const _ in N)
          if (Object.prototype.hasOwnProperty.call(N, _)) {
            const J = `${Z}${a}${_}`;
            g && !p ? E[_] = this.translate(J, {
              ...r,
              defaultValue: Hn(b) ? b[_] : void 0,
              joinArrays: !1,
              ns: c
            }) : E[_] = this.translate(J, {
              ...r,
              joinArrays: !1,
              ns: c
            }), E[_] === J && (E[_] = N[_]);
          }
        p = E;
      }
    } else if (C && O(H) && Array.isArray(p))
      p = p.join(H), p && (p = this.extendTranslation(p, e, r, i));
    else {
      let D = !1, E = !1;
      !this.isValidLookup(p) && g && (D = !0, p = b), this.isValidLookup(p) || (E = !0, p = s);
      const _ = (r.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && E ? void 0 : p, J = g && b !== p && this.options.updateMissing;
      if (E || D || J) {
        if (this.logger.log(J ? "updateKey" : "missingKey", f, d, s, J ? b : p), a) {
          const x = this.resolve(s, {
            ...r,
            keySeparator: !1
          });
          x && x.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.");
        }
        let ie = [];
        const Q = this.languageUtils.getFallbackCodes(this.options.fallbackLng, r.lng || this.language);
        if (this.options.saveMissingTo === "fallback" && Q && Q[0])
          for (let x = 0; x < Q.length; x++)
            ie.push(Q[x]);
        else this.options.saveMissingTo === "all" ? ie = this.languageUtils.toResolveHierarchy(r.lng || this.language) : ie.push(r.lng || this.language);
        const $ = (x, k, I) => {
          var W;
          const R = g && I !== p ? I : _;
          this.options.missingKeyHandler ? this.options.missingKeyHandler(x, d, k, R, J, r) : (W = this.backendConnector) != null && W.saveMissing && this.backendConnector.saveMissing(x, d, k, R, J, r), this.emit("missingKey", x, d, k, p);
        };
        this.options.saveMissing && (this.options.saveMissingPlurals && P ? ie.forEach((x) => {
          const k = this.pluralResolver.getSuffixes(x, r);
          y && r[`defaultValue${this.options.pluralSeparator}zero`] && k.indexOf(`${this.options.pluralSeparator}zero`) < 0 && k.push(`${this.options.pluralSeparator}zero`), k.forEach((I) => {
            $([x], s + I, r[`defaultValue${I}`] || b);
          });
        }) : $(ie, s, b));
      }
      p = this.extendTranslation(p, e, r, m, i), E && p === s && this.options.appendNamespaceToMissingKey && (p = `${d}${u}${s}`), (E || D) && this.options.parseMissingKeyHandler && (p = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${d}${u}${s}` : s, D ? p : void 0, r));
    }
    return o ? (m.res = p, m.usedParams = this.getUsedParamsDetails(r), m) : p;
  }
  extendTranslation(e, t, i, r, o) {
    var c, d;
    if ((c = this.i18nFormat) != null && c.parse)
      e = this.i18nFormat.parse(e, {
        ...this.options.interpolation.defaultVariables,
        ...i
      }, i.lng || this.language || r.usedLng, r.usedNS, r.usedKey, {
        resolved: r
      });
    else if (!i.skipInterpolation) {
      i.interpolation && this.interpolator.init({
        ...i,
        interpolation: {
          ...this.options.interpolation,
          ...i.interpolation
        }
      });
      const u = O(e) && (((d = i == null ? void 0 : i.interpolation) == null ? void 0 : d.skipOnVariables) !== void 0 ? i.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
      let f;
      if (u) {
        const m = e.match(this.interpolator.nestingRegexp);
        f = m && m.length;
      }
      let h = i.replace && !O(i.replace) ? i.replace : i;
      if (this.options.interpolation.defaultVariables && (h = {
        ...this.options.interpolation.defaultVariables,
        ...h
      }), e = this.interpolator.interpolate(e, h, i.lng || this.language || r.usedLng, i), u) {
        const m = e.match(this.interpolator.nestingRegexp), p = m && m.length;
        f < p && (i.nest = !1);
      }
      !i.lng && r && r.res && (i.lng = this.language || r.usedLng), i.nest !== !1 && (e = this.interpolator.nest(e, (...m) => (o == null ? void 0 : o[0]) === m[0] && !i.context ? (this.logger.warn(`It seems you are nesting recursively key: ${m[0]} in key: ${t[0]}`), null) : this.translate(...m, t), i)), i.interpolation && this.interpolator.reset();
    }
    const a = i.postProcess || this.options.postProcess, s = O(a) ? [a] : a;
    return e != null && (s != null && s.length) && i.applyPostProcessor !== !1 && (e = xt.handle(s, e, t, this.options && this.options.postProcessPassResolved ? {
      i18nResolved: {
        ...r,
        usedParams: this.getUsedParamsDetails(i)
      },
      ...i
    } : i, this)), e;
  }
  resolve(e, t = {}) {
    let i, r, o, a, s;
    return O(e) && (e = [e]), e.forEach((c) => {
      if (this.isValidLookup(i)) return;
      const d = this.extractFromKey(c, t), u = d.key;
      r = u;
      let f = d.namespaces;
      this.options.fallbackNS && (f = f.concat(this.options.fallbackNS));
      const h = t.count !== void 0 && !O(t.count), m = h && !t.ordinal && t.count === 0, p = t.context !== void 0 && (O(t.context) || typeof t.context == "number") && t.context !== "", v = t.lngs ? t.lngs : this.languageUtils.toResolveHierarchy(t.lng || this.language, t.fallbackLng);
      f.forEach((j) => {
        var w, H;
        this.isValidLookup(i) || (s = j, !Ln[`${v[0]}-${j}`] && ((w = this.utils) != null && w.hasLoadedNamespace) && !((H = this.utils) != null && H.hasLoadedNamespace(s)) && (Ln[`${v[0]}-${j}`] = !0, this.logger.warn(`key "${r}" for languages "${v.join(", ")}" won't get resolved as namespace "${s}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), v.forEach((C) => {
          var S;
          if (this.isValidLookup(i)) return;
          a = C;
          const P = [u];
          if ((S = this.i18nFormat) != null && S.addLookupKeys)
            this.i18nFormat.addLookupKeys(P, u, C, j, t);
          else {
            let F;
            h && (F = this.pluralResolver.getSuffix(C, t.count, t));
            const y = `${this.options.pluralSeparator}zero`, b = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
            if (h && (t.ordinal && F.indexOf(b) === 0 && P.push(u + F.replace(b, this.options.pluralSeparator)), P.push(u + F), m && P.push(u + y)), p) {
              const N = `${u}${this.options.contextSeparator || "_"}${t.context}`;
              P.push(N), h && (t.ordinal && F.indexOf(b) === 0 && P.push(N + F.replace(b, this.options.pluralSeparator)), P.push(N + F), m && P.push(N + y));
            }
          }
          let g;
          for (; g = P.pop(); )
            this.isValidLookup(i) || (o = g, i = this.getResource(C, j, g, t));
        }));
      });
    }), {
      res: i,
      usedKey: r,
      exactUsedKey: o,
      usedLng: a,
      usedNS: s
    };
  }
  isValidLookup(e) {
    return e !== void 0 && !(!this.options.returnNull && e === null) && !(!this.options.returnEmptyString && e === "");
  }
  getResource(e, t, i, r = {}) {
    var o;
    return (o = this.i18nFormat) != null && o.getResource ? this.i18nFormat.getResource(e, t, i, r) : this.resourceStore.getResource(e, t, i, r);
  }
  getUsedParamsDetails(e = {}) {
    const t = ["defaultValue", "ordinal", "context", "replace", "lng", "lngs", "fallbackLng", "ns", "keySeparator", "nsSeparator", "returnObjects", "returnDetails", "joinArrays", "postProcess", "interpolation"], i = e.replace && !O(e.replace);
    let r = i ? e.replace : e;
    if (i && typeof e.count < "u" && (r.count = e.count), this.options.interpolation.defaultVariables && (r = {
      ...this.options.interpolation.defaultVariables,
      ...r
    }), !i) {
      r = {
        ...r
      };
      for (const o of t)
        delete r[o];
    }
    return r;
  }
  static hasDefaultValue(e) {
    const t = "defaultValue";
    for (const i in e)
      if (Object.prototype.hasOwnProperty.call(e, i) && t === i.substring(0, t.length) && e[i] !== void 0)
        return !0;
    return !1;
  }
}
class En {
  constructor(e) {
    this.options = e, this.supportedLngs = this.options.supportedLngs || !1, this.logger = pe.create("languageUtils");
  }
  getScriptPartFromCode(e) {
    if (e = je(e), !e || e.indexOf("-") < 0) return null;
    const t = e.split("-");
    return t.length === 2 || (t.pop(), t[t.length - 1].toLowerCase() === "x") ? null : this.formatLanguageCode(t.join("-"));
  }
  getLanguagePartFromCode(e) {
    if (e = je(e), !e || e.indexOf("-") < 0) return e;
    const t = e.split("-");
    return this.formatLanguageCode(t[0]);
  }
  formatLanguageCode(e) {
    if (O(e) && e.indexOf("-") > -1) {
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
    return e.forEach((i) => {
      if (t) return;
      const r = this.formatLanguageCode(i);
      (!this.options.supportedLngs || this.isSupportedCode(r)) && (t = r);
    }), !t && this.options.supportedLngs && e.forEach((i) => {
      if (t) return;
      const r = this.getScriptPartFromCode(i);
      if (this.isSupportedCode(r)) return t = r;
      const o = this.getLanguagePartFromCode(i);
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
    if (typeof e == "function" && (e = e(t)), O(e) && (e = [e]), Array.isArray(e)) return e;
    if (!t) return e.default || [];
    let i = e[t];
    return i || (i = e[this.getScriptPartFromCode(t)]), i || (i = e[this.formatLanguageCode(t)]), i || (i = e[this.getLanguagePartFromCode(t)]), i || (i = e.default), i || [];
  }
  toResolveHierarchy(e, t) {
    const i = this.getFallbackCodes((t === !1 ? [] : t) || this.options.fallbackLng || [], e), r = [], o = (a) => {
      a && (this.isSupportedCode(a) ? r.push(a) : this.logger.warn(`rejecting language code not found in supportedLngs: ${a}`));
    };
    return O(e) && (e.indexOf("-") > -1 || e.indexOf("_") > -1) ? (this.options.load !== "languageOnly" && o(this.formatLanguageCode(e)), this.options.load !== "languageOnly" && this.options.load !== "currentOnly" && o(this.getScriptPartFromCode(e)), this.options.load !== "currentOnly" && o(this.getLanguagePartFromCode(e))) : O(e) && o(this.formatLanguageCode(e)), i.forEach((a) => {
      r.indexOf(a) < 0 && o(this.formatLanguageCode(a));
    }), r;
  }
}
const An = {
  zero: 0,
  one: 1,
  two: 2,
  few: 3,
  many: 4,
  other: 5
}, zn = {
  select: (n) => n === 1 ? "one" : "other",
  resolvedOptions: () => ({
    pluralCategories: ["one", "other"]
  })
};
class Ci {
  constructor(e, t = {}) {
    this.languageUtils = e, this.options = t, this.logger = pe.create("pluralResolver"), this.pluralRulesCache = {};
  }
  addRule(e, t) {
    this.rules[e] = t;
  }
  clearCache() {
    this.pluralRulesCache = {};
  }
  getRule(e, t = {}) {
    const i = je(e === "dev" ? "en" : e), r = t.ordinal ? "ordinal" : "cardinal", o = JSON.stringify({
      cleanedCode: i,
      type: r
    });
    if (o in this.pluralRulesCache)
      return this.pluralRulesCache[o];
    let a;
    try {
      a = new Intl.PluralRules(i, {
        type: r
      });
    } catch {
      if (!Intl)
        return this.logger.error("No Intl support, please use an Intl polyfill!"), zn;
      if (!e.match(/-|_/)) return zn;
      const c = this.languageUtils.getLanguagePartFromCode(e);
      a = this.getRule(c, t);
    }
    return this.pluralRulesCache[o] = a, a;
  }
  needsPlural(e, t = {}) {
    let i = this.getRule(e, t);
    return i || (i = this.getRule("dev", t)), (i == null ? void 0 : i.resolvedOptions().pluralCategories.length) > 1;
  }
  getPluralFormsOfKey(e, t, i = {}) {
    return this.getSuffixes(e, i).map((r) => `${t}${r}`);
  }
  getSuffixes(e, t = {}) {
    let i = this.getRule(e, t);
    return i || (i = this.getRule("dev", t)), i ? i.resolvedOptions().pluralCategories.sort((r, o) => An[r] - An[o]).map((r) => `${this.options.prepend}${t.ordinal ? `ordinal${this.options.prepend}` : ""}${r}`) : [];
  }
  getSuffix(e, t, i = {}) {
    const r = this.getRule(e, i);
    return r ? `${this.options.prepend}${i.ordinal ? `ordinal${this.options.prepend}` : ""}${r.select(t)}` : (this.logger.warn(`no plural rule found for: ${e}`), this.getSuffix("dev", t, i));
  }
}
const kn = (n, e, t, i = ".", r = !0) => {
  let o = hi(n, e, t);
  return !o && r && O(t) && (o = un(n, t, i), o === void 0 && (o = un(e, t, i))), o;
}, Qe = (n) => n.replace(/\$/g, "$$$$");
class wi {
  constructor(e = {}) {
    var t;
    this.logger = pe.create("interpolator"), this.options = e, this.format = ((t = e == null ? void 0 : e.interpolation) == null ? void 0 : t.format) || ((i) => i), this.init(e);
  }
  init(e = {}) {
    e.interpolation || (e.interpolation = {
      escapeValue: !0
    });
    const {
      escape: t,
      escapeValue: i,
      useRawValueToEscape: r,
      prefix: o,
      prefixEscaped: a,
      suffix: s,
      suffixEscaped: c,
      formatSeparator: d,
      unescapeSuffix: u,
      unescapePrefix: f,
      nestingPrefix: h,
      nestingPrefixEscaped: m,
      nestingSuffix: p,
      nestingSuffixEscaped: v,
      nestingOptionsSeparator: j,
      maxReplaces: w,
      alwaysFormat: H
    } = e.interpolation;
    this.escape = t !== void 0 ? t : bi, this.escapeValue = i !== void 0 ? i : !0, this.useRawValueToEscape = r !== void 0 ? r : !1, this.prefix = o ? xe(o) : a || "{{", this.suffix = s ? xe(s) : c || "}}", this.formatSeparator = d || ",", this.unescapePrefix = u ? "" : f || "-", this.unescapeSuffix = this.unescapePrefix ? "" : u || "", this.nestingPrefix = h ? xe(h) : m || xe("$t("), this.nestingSuffix = p ? xe(p) : v || xe(")"), this.nestingOptionsSeparator = j || ",", this.maxReplaces = w || 1e3, this.alwaysFormat = H !== void 0 ? H : !1, this.resetRegExp();
  }
  reset() {
    this.options && this.init(this.options);
  }
  resetRegExp() {
    const e = (t, i) => (t == null ? void 0 : t.source) === i ? (t.lastIndex = 0, t) : new RegExp(i, "g");
    this.regexp = e(this.regexp, `${this.prefix}(.+?)${this.suffix}`), this.regexpUnescape = e(this.regexpUnescape, `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`), this.nestingRegexp = e(this.nestingRegexp, `${this.nestingPrefix}((?:[^()"']+|"[^"]*"|'[^']*'|\\((?:[^()]|"[^"]*"|'[^']*')*\\))*?)${this.nestingSuffix}`);
  }
  interpolate(e, t, i, r) {
    var m;
    let o, a, s;
    const c = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {}, d = (p) => {
      if (p.indexOf(this.formatSeparator) < 0) {
        const H = kn(t, c, p, this.options.keySeparator, this.options.ignoreJSONStructure);
        return this.alwaysFormat ? this.format(H, void 0, i, {
          ...r,
          ...t,
          interpolationkey: p
        }) : H;
      }
      const v = p.split(this.formatSeparator), j = v.shift().trim(), w = v.join(this.formatSeparator).trim();
      return this.format(kn(t, c, j, this.options.keySeparator, this.options.ignoreJSONStructure), w, i, {
        ...r,
        ...t,
        interpolationkey: j
      });
    };
    this.resetRegExp();
    const u = (r == null ? void 0 : r.missingInterpolationHandler) || this.options.missingInterpolationHandler, f = ((m = r == null ? void 0 : r.interpolation) == null ? void 0 : m.skipOnVariables) !== void 0 ? r.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
    return [{
      regex: this.regexpUnescape,
      safeValue: (p) => Qe(p)
    }, {
      regex: this.regexp,
      safeValue: (p) => this.escapeValue ? Qe(this.escape(p)) : Qe(p)
    }].forEach((p) => {
      for (s = 0; o = p.regex.exec(e); ) {
        const v = o[1].trim();
        if (a = d(v), a === void 0)
          if (typeof u == "function") {
            const w = u(e, o, r);
            a = O(w) ? w : "";
          } else if (r && Object.prototype.hasOwnProperty.call(r, v))
            a = "";
          else if (f) {
            a = o[0];
            continue;
          } else
            this.logger.warn(`missed to pass in variable ${v} for interpolating ${e}`), a = "";
        else !O(a) && !this.useRawValueToEscape && (a = Un(a));
        const j = p.safeValue(a);
        if (e = e.replace(o[0], j), f ? (p.regex.lastIndex += a.length, p.regex.lastIndex -= o[0].length) : p.regex.lastIndex = 0, s++, s >= this.maxReplaces)
          break;
      }
    }), e;
  }
  nest(e, t, i = {}) {
    let r, o, a;
    const s = (c, d) => {
      const u = this.nestingOptionsSeparator;
      if (c.indexOf(u) < 0) return c;
      const f = c.split(new RegExp(`${u}[ ]*{`));
      let h = `{${f[1]}`;
      c = f[0], h = this.interpolate(h, a);
      const m = h.match(/'/g), p = h.match(/"/g);
      (((m == null ? void 0 : m.length) ?? 0) % 2 === 0 && !p || p.length % 2 !== 0) && (h = h.replace(/'/g, '"'));
      try {
        a = JSON.parse(h), d && (a = {
          ...d,
          ...a
        });
      } catch (v) {
        return this.logger.warn(`failed parsing options string in nesting for key ${c}`, v), `${c}${u}${h}`;
      }
      return a.defaultValue && a.defaultValue.indexOf(this.prefix) > -1 && delete a.defaultValue, c;
    };
    for (; r = this.nestingRegexp.exec(e); ) {
      let c = [];
      a = {
        ...i
      }, a = a.replace && !O(a.replace) ? a.replace : a, a.applyPostProcessor = !1, delete a.defaultValue;
      const d = /{.*}/.test(r[1]) ? r[1].lastIndexOf("}") + 1 : r[1].indexOf(this.formatSeparator);
      if (d !== -1 && (c = r[1].slice(d).split(this.formatSeparator).map((u) => u.trim()).filter(Boolean), r[1] = r[1].slice(0, d)), o = t(s.call(this, r[1].trim(), a), a), o && r[0] === e && !O(o)) return o;
      O(o) || (o = Un(o)), o || (this.logger.warn(`missed to resolve ${r[1]} for nesting ${e}`), o = ""), c.length && (o = c.reduce((u, f) => this.format(u, f, i.lng, {
        ...i,
        interpolationkey: r[1].trim()
      }), o.trim())), e = e.replace(r[0], o), this.regexp.lastIndex = 0;
    }
    return e;
  }
}
const Pi = (n) => {
  let e = n.toLowerCase().trim();
  const t = {};
  if (n.indexOf("(") > -1) {
    const i = n.split("(");
    e = i[0].toLowerCase().trim();
    const r = i[1].substring(0, i[1].length - 1);
    e === "currency" && r.indexOf(":") < 0 ? t.currency || (t.currency = r.trim()) : e === "relativetime" && r.indexOf(":") < 0 ? t.range || (t.range = r.trim()) : r.split(";").forEach((a) => {
      if (a) {
        const [s, ...c] = a.split(":"), d = c.join(":").trim().replace(/^'+|'+$/g, ""), u = s.trim();
        t[u] || (t[u] = d), d === "false" && (t[u] = !1), d === "true" && (t[u] = !0), isNaN(d) || (t[u] = parseInt(d, 10));
      }
    });
  }
  return {
    formatName: e,
    formatOptions: t
  };
}, Rn = (n) => {
  const e = {};
  return (t, i, r) => {
    let o = r;
    r && r.interpolationkey && r.formatParams && r.formatParams[r.interpolationkey] && r[r.interpolationkey] && (o = {
      ...o,
      [r.interpolationkey]: void 0
    });
    const a = i + JSON.stringify(o);
    let s = e[a];
    return s || (s = n(je(i), r), e[a] = s), s(t);
  };
}, Mi = (n) => (e, t, i) => n(je(t), i)(e);
class Ui {
  constructor(e = {}) {
    this.logger = pe.create("formatter"), this.options = e, this.init(e);
  }
  init(e, t = {
    interpolation: {}
  }) {
    this.formatSeparator = t.interpolation.formatSeparator || ",";
    const i = t.cacheInBuiltFormats ? Rn : Mi;
    this.formats = {
      number: i((r, o) => {
        const a = new Intl.NumberFormat(r, {
          ...o
        });
        return (s) => a.format(s);
      }),
      currency: i((r, o) => {
        const a = new Intl.NumberFormat(r, {
          ...o,
          style: "currency"
        });
        return (s) => a.format(s);
      }),
      datetime: i((r, o) => {
        const a = new Intl.DateTimeFormat(r, {
          ...o
        });
        return (s) => a.format(s);
      }),
      relativetime: i((r, o) => {
        const a = new Intl.RelativeTimeFormat(r, {
          ...o
        });
        return (s) => a.format(s, o.range || "day");
      }),
      list: i((r, o) => {
        const a = new Intl.ListFormat(r, {
          ...o
        });
        return (s) => a.format(s);
      })
    };
  }
  add(e, t) {
    this.formats[e.toLowerCase().trim()] = t;
  }
  addCached(e, t) {
    this.formats[e.toLowerCase().trim()] = Rn(t);
  }
  format(e, t, i, r = {}) {
    const o = t.split(this.formatSeparator);
    if (o.length > 1 && o[0].indexOf("(") > 1 && o[0].indexOf(")") < 0 && o.find((s) => s.indexOf(")") > -1)) {
      const s = o.findIndex((c) => c.indexOf(")") > -1);
      o[0] = [o[0], ...o.splice(1, s)].join(this.formatSeparator);
    }
    return o.reduce((s, c) => {
      var f;
      const {
        formatName: d,
        formatOptions: u
      } = Pi(c);
      if (this.formats[d]) {
        let h = s;
        try {
          const m = ((f = r == null ? void 0 : r.formatParams) == null ? void 0 : f[r.interpolationkey]) || {}, p = m.locale || m.lng || r.locale || r.lng || i;
          h = this.formats[d](s, p, {
            ...u,
            ...r,
            ...m
          });
        } catch (m) {
          this.logger.warn(m);
        }
        return h;
      } else
        this.logger.warn(`there was no format function for ${d}`);
      return s;
    }, e);
  }
}
const Si = (n, e) => {
  n.pending[e] !== void 0 && (delete n.pending[e], n.pendingCount--);
};
class Di extends Ke {
  constructor(e, t, i, r = {}) {
    var o, a;
    super(), this.backend = e, this.store = t, this.services = i, this.languageUtils = i.languageUtils, this.options = r, this.logger = pe.create("backendConnector"), this.waitingReads = [], this.maxParallelReads = r.maxParallelReads || 10, this.readingCalls = 0, this.maxRetries = r.maxRetries >= 0 ? r.maxRetries : 5, this.retryTimeout = r.retryTimeout >= 1 ? r.retryTimeout : 350, this.state = {}, this.queue = [], (a = (o = this.backend) == null ? void 0 : o.init) == null || a.call(o, i, r.backend, r);
  }
  queueLoad(e, t, i, r) {
    const o = {}, a = {}, s = {}, c = {};
    return e.forEach((d) => {
      let u = !0;
      t.forEach((f) => {
        const h = `${d}|${f}`;
        !i.reload && this.store.hasResourceBundle(d, f) ? this.state[h] = 2 : this.state[h] < 0 || (this.state[h] === 1 ? a[h] === void 0 && (a[h] = !0) : (this.state[h] = 1, u = !1, a[h] === void 0 && (a[h] = !0), o[h] === void 0 && (o[h] = !0), c[f] === void 0 && (c[f] = !0)));
      }), u || (s[d] = !0);
    }), (Object.keys(o).length || Object.keys(a).length) && this.queue.push({
      pending: a,
      pendingCount: Object.keys(a).length,
      loaded: {},
      errors: [],
      callback: r
    }), {
      toLoad: Object.keys(o),
      pending: Object.keys(a),
      toLoadLanguages: Object.keys(s),
      toLoadNamespaces: Object.keys(c)
    };
  }
  loaded(e, t, i) {
    const r = e.split("|"), o = r[0], a = r[1];
    t && this.emit("failedLoading", o, a, t), !t && i && this.store.addResourceBundle(o, a, i, void 0, void 0, {
      skipCopy: !0
    }), this.state[e] = t ? -1 : 2, t && i && (this.state[e] = 0);
    const s = {};
    this.queue.forEach((c) => {
      pi(c.loaded, [o], a), Si(c, e), t && c.errors.push(t), c.pendingCount === 0 && !c.done && (Object.keys(c.loaded).forEach((d) => {
        s[d] || (s[d] = {});
        const u = c.loaded[d];
        u.length && u.forEach((f) => {
          s[d][f] === void 0 && (s[d][f] = !0);
        });
      }), c.done = !0, c.errors.length ? c.callback(c.errors) : c.callback());
    }), this.emit("loaded", s), this.queue = this.queue.filter((c) => !c.done);
  }
  read(e, t, i, r = 0, o = this.retryTimeout, a) {
    if (!e.length) return a(null, {});
    if (this.readingCalls >= this.maxParallelReads) {
      this.waitingReads.push({
        lng: e,
        ns: t,
        fcName: i,
        tried: r,
        wait: o,
        callback: a
      });
      return;
    }
    this.readingCalls++;
    const s = (d, u) => {
      if (this.readingCalls--, this.waitingReads.length > 0) {
        const f = this.waitingReads.shift();
        this.read(f.lng, f.ns, f.fcName, f.tried, f.wait, f.callback);
      }
      if (d && u && r < this.maxRetries) {
        setTimeout(() => {
          this.read.call(this, e, t, i, r + 1, o * 2, a);
        }, o);
        return;
      }
      a(d, u);
    }, c = this.backend[i].bind(this.backend);
    if (c.length === 2) {
      try {
        const d = c(e, t);
        d && typeof d.then == "function" ? d.then((u) => s(null, u)).catch(s) : s(null, d);
      } catch (d) {
        s(d);
      }
      return;
    }
    return c(e, t, s);
  }
  prepareLoading(e, t, i = {}, r) {
    if (!this.backend)
      return this.logger.warn("No backend was added via i18next.use. Will not load resources."), r && r();
    O(e) && (e = this.languageUtils.toResolveHierarchy(e)), O(t) && (t = [t]);
    const o = this.queueLoad(e, t, i, r);
    if (!o.toLoad.length)
      return o.pending.length || r(), null;
    o.toLoad.forEach((a) => {
      this.loadOne(a);
    });
  }
  load(e, t, i) {
    this.prepareLoading(e, t, {}, i);
  }
  reload(e, t, i) {
    this.prepareLoading(e, t, {
      reload: !0
    }, i);
  }
  loadOne(e, t = "") {
    const i = e.split("|"), r = i[0], o = i[1];
    this.read(r, o, "read", void 0, void 0, (a, s) => {
      a && this.logger.warn(`${t}loading namespace ${o} for language ${r} failed`, a), !a && s && this.logger.log(`${t}loaded namespace ${o} for language ${r}`, s), this.loaded(e, a, s);
    });
  }
  saveMissing(e, t, i, r, o, a = {}, s = () => {
  }) {
    var c, d, u, f, h;
    if ((d = (c = this.services) == null ? void 0 : c.utils) != null && d.hasLoadedNamespace && !((f = (u = this.services) == null ? void 0 : u.utils) != null && f.hasLoadedNamespace(t))) {
      this.logger.warn(`did not save key "${i}" as the namespace "${t}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
      return;
    }
    if (!(i == null || i === "")) {
      if ((h = this.backend) != null && h.create) {
        const m = {
          ...a,
          isUpdate: o
        }, p = this.backend.create.bind(this.backend);
        if (p.length < 6)
          try {
            let v;
            p.length === 5 ? v = p(e, t, i, r, m) : v = p(e, t, i, r), v && typeof v.then == "function" ? v.then((j) => s(null, j)).catch(s) : s(null, v);
          } catch (v) {
            s(v);
          }
        else
          p(e, t, i, r, s, m);
      }
      !e || !e[0] || this.store.addResource(e[0], t, i, r);
    }
  }
}
const In = () => ({
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
    if (typeof n[1] == "object" && (e = n[1]), O(n[1]) && (e.defaultValue = n[1]), O(n[2]) && (e.tDescription = n[2]), typeof n[2] == "object" || typeof n[3] == "object") {
      const t = n[3] || n[2];
      Object.keys(t).forEach((i) => {
        e[i] = t[i];
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
}), On = (n) => {
  var e, t;
  return O(n.ns) && (n.ns = [n.ns]), O(n.fallbackLng) && (n.fallbackLng = [n.fallbackLng]), O(n.fallbackNS) && (n.fallbackNS = [n.fallbackNS]), ((t = (e = n.supportedLngs) == null ? void 0 : e.indexOf) == null ? void 0 : t.call(e, "cimode")) < 0 && (n.supportedLngs = n.supportedLngs.concat(["cimode"])), typeof n.initImmediate == "boolean" && (n.initAsync = n.initImmediate), n;
}, Ee = () => {
}, Ti = (n) => {
  Object.getOwnPropertyNames(Object.getPrototypeOf(n)).forEach((t) => {
    typeof n[t] == "function" && (n[t] = n[t].bind(n));
  });
};
class Le extends Ke {
  constructor(e = {}, t) {
    if (super(), this.options = On(e), this.services = {}, this.logger = pe, this.modules = {
      external: []
    }, Ti(this), t && !this.isInitialized && !e.isClone) {
      if (!this.options.initAsync)
        return this.init(e, t), this;
      setTimeout(() => {
        this.init(e, t);
      }, 0);
    }
  }
  init(e = {}, t) {
    this.isInitializing = !0, typeof e == "function" && (t = e, e = {}), e.defaultNS == null && e.ns && (O(e.ns) ? e.defaultNS = e.ns : e.ns.indexOf("translation") < 0 && (e.defaultNS = e.ns[0]));
    const i = In();
    this.options = {
      ...i,
      ...this.options,
      ...On(e)
    }, this.options.interpolation = {
      ...i.interpolation,
      ...this.options.interpolation
    }, e.keySeparator !== void 0 && (this.options.userDefinedKeySeparator = e.keySeparator), e.nsSeparator !== void 0 && (this.options.userDefinedNsSeparator = e.nsSeparator);
    const r = (d) => d ? typeof d == "function" ? new d() : d : null;
    if (!this.options.isClone) {
      this.modules.logger ? pe.init(r(this.modules.logger), this.options) : pe.init(null, this.options);
      let d;
      this.modules.formatter ? d = this.modules.formatter : d = Ui;
      const u = new En(this.options);
      this.store = new jn(this.options.resources, this.options);
      const f = this.services;
      f.logger = pe, f.resourceStore = this.store, f.languageUtils = u, f.pluralResolver = new Ci(u, {
        prepend: this.options.pluralSeparator,
        simplifyPluralSuffix: this.options.simplifyPluralSuffix
      }), this.options.interpolation.format && this.options.interpolation.format !== i.interpolation.format && this.logger.deprecate("init: you are still using the legacy format function, please use the new approach: https://www.i18next.com/translation-function/formatting"), d && (!this.options.interpolation.format || this.options.interpolation.format === i.interpolation.format) && (f.formatter = r(d), f.formatter.init && f.formatter.init(f, this.options), this.options.interpolation.format = f.formatter.format.bind(f.formatter)), f.interpolator = new wi(this.options), f.utils = {
        hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
      }, f.backendConnector = new Di(r(this.modules.backend), f.resourceStore, f, this.options), f.backendConnector.on("*", (m, ...p) => {
        this.emit(m, ...p);
      }), this.modules.languageDetector && (f.languageDetector = r(this.modules.languageDetector), f.languageDetector.init && f.languageDetector.init(f, this.options.detection, this.options)), this.modules.i18nFormat && (f.i18nFormat = r(this.modules.i18nFormat), f.i18nFormat.init && f.i18nFormat.init(this)), this.translator = new Ve(this.services, this.options), this.translator.on("*", (m, ...p) => {
        this.emit(m, ...p);
      }), this.modules.external.forEach((m) => {
        m.init && m.init(this);
      });
    }
    if (this.format = this.options.interpolation.format, t || (t = Ee), this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
      const d = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
      d.length > 0 && d[0] !== "dev" && (this.options.lng = d[0]);
    }
    !this.services.languageDetector && !this.options.lng && this.logger.warn("init: no languageDetector is used and no lng is defined"), ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"].forEach((d) => {
      this[d] = (...u) => this.store[d](...u);
    }), ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"].forEach((d) => {
      this[d] = (...u) => (this.store[d](...u), this);
    });
    const s = Se(), c = () => {
      const d = (u, f) => {
        this.isInitializing = !1, this.isInitialized && !this.initializedStoreOnce && this.logger.warn("init: i18next is already initialized. You should call init just once!"), this.isInitialized = !0, this.options.isClone || this.logger.log("initialized", this.options), this.emit("initialized", this.options), s.resolve(f), t(u, f);
      };
      if (this.languages && !this.isInitialized) return d(null, this.t.bind(this));
      this.changeLanguage(this.options.lng, d);
    };
    return this.options.resources || !this.options.initAsync ? c() : setTimeout(c, 0), s;
  }
  loadResources(e, t = Ee) {
    var o, a;
    let i = t;
    const r = O(e) ? e : this.language;
    if (typeof e == "function" && (i = e), !this.options.resources || this.options.partialBundledLanguages) {
      if ((r == null ? void 0 : r.toLowerCase()) === "cimode" && (!this.options.preload || this.options.preload.length === 0)) return i();
      const s = [], c = (d) => {
        if (!d || d === "cimode") return;
        this.services.languageUtils.toResolveHierarchy(d).forEach((f) => {
          f !== "cimode" && s.indexOf(f) < 0 && s.push(f);
        });
      };
      r ? c(r) : this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach((u) => c(u)), (a = (o = this.options.preload) == null ? void 0 : o.forEach) == null || a.call(o, (d) => c(d)), this.services.backendConnector.load(s, this.options.ns, (d) => {
        !d && !this.resolvedLanguage && this.language && this.setResolvedLanguage(this.language), i(d);
      });
    } else
      i(null);
  }
  reloadResources(e, t, i) {
    const r = Se();
    return typeof e == "function" && (i = e, e = void 0), typeof t == "function" && (i = t, t = void 0), e || (e = this.languages), t || (t = this.options.ns), i || (i = Ee), this.services.backendConnector.reload(e, t, (o) => {
      r.resolve(), i(o);
    }), r;
  }
  use(e) {
    if (!e) throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
    if (!e.type) throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
    return e.type === "backend" && (this.modules.backend = e), (e.type === "logger" || e.log && e.warn && e.error) && (this.modules.logger = e), e.type === "languageDetector" && (this.modules.languageDetector = e), e.type === "i18nFormat" && (this.modules.i18nFormat = e), e.type === "postProcessor" && xt.addPostProcessor(e), e.type === "formatter" && (this.modules.formatter = e), e.type === "3rdParty" && this.modules.external.push(e), this;
  }
  setResolvedLanguage(e) {
    if (!(!e || !this.languages) && !(["cimode", "dev"].indexOf(e) > -1)) {
      for (let t = 0; t < this.languages.length; t++) {
        const i = this.languages[t];
        if (!(["cimode", "dev"].indexOf(i) > -1) && this.store.hasLanguageSomeTranslations(i)) {
          this.resolvedLanguage = i;
          break;
        }
      }
      !this.resolvedLanguage && this.languages.indexOf(e) < 0 && this.store.hasLanguageSomeTranslations(e) && (this.resolvedLanguage = e, this.languages.unshift(e));
    }
  }
  changeLanguage(e, t) {
    this.isLanguageChangingTo = e;
    const i = Se();
    this.emit("languageChanging", e);
    const r = (s) => {
      this.language = s, this.languages = this.services.languageUtils.toResolveHierarchy(s), this.resolvedLanguage = void 0, this.setResolvedLanguage(s);
    }, o = (s, c) => {
      c ? this.isLanguageChangingTo === e && (r(c), this.translator.changeLanguage(c), this.isLanguageChangingTo = void 0, this.emit("languageChanged", c), this.logger.log("languageChanged", c)) : this.isLanguageChangingTo = void 0, i.resolve((...d) => this.t(...d)), t && t(s, (...d) => this.t(...d));
    }, a = (s) => {
      var u, f;
      !e && !s && this.services.languageDetector && (s = []);
      const c = O(s) ? s : s && s[0], d = this.store.hasLanguageSomeTranslations(c) ? c : this.services.languageUtils.getBestMatchFromCodes(O(s) ? [s] : s);
      d && (this.language || r(d), this.translator.language || this.translator.changeLanguage(d), (f = (u = this.services.languageDetector) == null ? void 0 : u.cacheUserLanguage) == null || f.call(u, d)), this.loadResources(d, (h) => {
        o(h, d);
      });
    };
    return !e && this.services.languageDetector && !this.services.languageDetector.async ? a(this.services.languageDetector.detect()) : !e && this.services.languageDetector && this.services.languageDetector.async ? this.services.languageDetector.detect.length === 0 ? this.services.languageDetector.detect().then(a) : this.services.languageDetector.detect(a) : a(e), i;
  }
  getFixedT(e, t, i) {
    const r = (o, a, ...s) => {
      let c;
      typeof a != "object" ? c = this.options.overloadTranslationOptionHandler([o, a].concat(s)) : c = {
        ...a
      }, c.lng = c.lng || r.lng, c.lngs = c.lngs || r.lngs, c.ns = c.ns || r.ns, c.keyPrefix !== "" && (c.keyPrefix = c.keyPrefix || i || r.keyPrefix);
      const d = this.options.keySeparator || ".";
      let u;
      return c.keyPrefix && Array.isArray(o) ? u = o.map((f) => (typeof f == "function" && (f = fn(f, {
        ...this.options,
        ...a
      })), `${c.keyPrefix}${d}${f}`)) : (typeof o == "function" && (o = fn(o, {
        ...this.options,
        ...a
      })), u = c.keyPrefix ? `${c.keyPrefix}${d}${o}` : o), this.t(u, c);
    };
    return O(e) ? r.lng = e : r.lngs = e, r.ns = t, r.keyPrefix = i, r;
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
    const i = t.lng || this.resolvedLanguage || this.languages[0], r = this.options ? this.options.fallbackLng : !1, o = this.languages[this.languages.length - 1];
    if (i.toLowerCase() === "cimode") return !0;
    const a = (s, c) => {
      const d = this.services.backendConnector.state[`${s}|${c}`];
      return d === -1 || d === 0 || d === 2;
    };
    if (t.precheck) {
      const s = t.precheck(this, a);
      if (s !== void 0) return s;
    }
    return !!(this.hasResourceBundle(i, e) || !this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages || a(i, e) && (!r || a(o, e)));
  }
  loadNamespaces(e, t) {
    const i = Se();
    return this.options.ns ? (O(e) && (e = [e]), e.forEach((r) => {
      this.options.ns.indexOf(r) < 0 && this.options.ns.push(r);
    }), this.loadResources((r) => {
      i.resolve(), t && t(r);
    }), i) : (t && t(), Promise.resolve());
  }
  loadLanguages(e, t) {
    const i = Se();
    O(e) && (e = [e]);
    const r = this.options.preload || [], o = e.filter((a) => r.indexOf(a) < 0 && this.services.languageUtils.isSupportedCode(a));
    return o.length ? (this.options.preload = r.concat(o), this.loadResources((a) => {
      i.resolve(), t && t(a);
    }), i) : (t && t(), Promise.resolve());
  }
  dir(e) {
    var r, o;
    if (e || (e = this.resolvedLanguage || (((r = this.languages) == null ? void 0 : r.length) > 0 ? this.languages[0] : this.language)), !e) return "rtl";
    try {
      const a = new Intl.Locale(e);
      if (a && a.getTextInfo) {
        const s = a.getTextInfo();
        if (s && s.direction) return s.direction;
      }
    } catch {
    }
    const t = ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"], i = ((o = this.services) == null ? void 0 : o.languageUtils) || new En(In());
    return e.toLowerCase().indexOf("-latn") > 1 ? "ltr" : t.indexOf(i.getLanguagePartFromCode(e)) > -1 || e.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr";
  }
  static createInstance(e = {}, t) {
    return new Le(e, t);
  }
  cloneInstance(e = {}, t = Ee) {
    const i = e.forkResourceStore;
    i && delete e.forkResourceStore;
    const r = {
      ...this.options,
      ...e,
      isClone: !0
    }, o = new Le(r);
    if ((e.debug !== void 0 || e.prefix !== void 0) && (o.logger = o.logger.clone(e)), ["store", "services", "language"].forEach((s) => {
      o[s] = this[s];
    }), o.services = {
      ...this.services
    }, o.services.utils = {
      hasLoadedNamespace: o.hasLoadedNamespace.bind(o)
    }, i) {
      const s = Object.keys(this.store.data).reduce((c, d) => (c[d] = {
        ...this.store.data[d]
      }, c[d] = Object.keys(c[d]).reduce((u, f) => (u[f] = {
        ...c[d][f]
      }, u), c[d]), c), {});
      o.store = new jn(s, r), o.services.resourceStore = o.store;
    }
    return o.translator = new Ve(o.services, r), o.translator.on("*", (s, ...c) => {
      o.emit(s, ...c);
    }), o.init(r, t), o.translator.options = r, o.translator.backendConnector.services.utils = {
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
const re = Le.createInstance();
re.createInstance = Le.createInstance;
re.createInstance;
re.dir;
re.init;
re.loadResources;
re.reloadResources;
re.use;
re.changeLanguage;
re.getFixedT;
re.t;
re.exists;
re.setDefaultNamespace;
re.hasLoadedNamespace;
re.loadNamespaces;
re.loadLanguages;
const ji = "مجلد جديد", Li = "رفع", Hi = "لصق", Ei = "تغيير العرض", Ai = "تحديث", zi = "قص", ki = "نسخ", Ri = "إعادة تسمية", Ii = "تنزيل", Oi = "تم تحديد العنصر", Gi = "تم تحديد {{count}} عناصر", Bi = "إلغاء", Vi = "مسح التحديد", Wi = "تم", _i = "إذا قمت بتغيير امتداد الملف، قد يصبح الملف غير قابل للاستخدام. هل أنت متأكد من أنك تريد تغييره؟", Yi = "لا", Ki = "نعم", qi = "إغلاق", Ji = "نوع الملف غير مسموح به.", Zi = "الملف موجود بالفعل.", Xi = "أقصى حجم رفع هو", Qi = "اسحب الملفات للرفع", er = "اختيار ملف", nr = "فشل الرفع.", tr = "جاري الرفع", ir = "تم الرفع", rr = "إزالة", or = "إلغاء الرفع", ar = "معاينة", sr = "آسف! المعاينة غير متاحة لهذا الملف.", lr = "الصفحة الرئيسية", cr = "عرض المزيد من المجلدات", dr = "نقل إلى", ur = "هذا المجلد فارغ.", fr = "تحديد الكل", mr = "عرض", pr = "شبكة", hr = "قائمة", gr = "فتح", br = "لا شيء هنا بعد", vr = "الاسم", Nr = "تاريخ التعديل", $r = "الحجم", yr = 'هل أنت متأكد أنك تريد حذف "{{fileName}}"؟', Fr = "هل أنت متأكد أنك تريد حذف هذه العناصر {{count}}؟", xr = "{{percent}}% تم", Cr = "تم الإلغاء", wr = 'لا يمكن أن يحتوي اسم الملف على أي من الحروف التالية: \\ / : * ? " < > |', Pr = 'هذا الموقع يحتوي بالفعل على مجلد باسم "{{renameFile}}".', Mr = "طي لوحة التنقل", Ur = "توسيع لوحة التنقل", Sr = {
  newFolder: ji,
  upload: Li,
  paste: Hi,
  changeView: Ei,
  refresh: Ai,
  cut: zi,
  copy: ki,
  rename: Ri,
  download: Ii,
  delete: "حذف",
  itemSelected: Oi,
  itemsSelected: Gi,
  cancel: Bi,
  clearSelection: Vi,
  completed: Wi,
  fileNameChangeWarning: _i,
  no: Yi,
  yes: Ki,
  close: qi,
  fileTypeNotAllowed: Ji,
  fileAlreadyExist: Zi,
  maxUploadSize: Xi,
  dragFileToUpload: Qi,
  chooseFile: er,
  uploadFail: nr,
  uploading: tr,
  uploaded: ir,
  remove: rr,
  abortUpload: or,
  preview: ar,
  previewUnavailable: sr,
  home: lr,
  showMoreFolder: cr,
  moveTo: dr,
  folderEmpty: ur,
  selectAll: fr,
  view: mr,
  grid: pr,
  list: hr,
  open: gr,
  nothingHereYet: br,
  name: vr,
  modified: Nr,
  size: $r,
  deleteItemConfirm: yr,
  deleteItemsConfirm: Fr,
  percentDone: xr,
  canceled: Cr,
  invalidFileName: wr,
  folderExists: Pr,
  collapseNavigationPane: Mr,
  expandNavigationPane: Ur
}, Dr = "Neuer Ordner", Tr = "Hochladen", jr = "Einfügen", Lr = "Ansicht ändern", Hr = "Aktualisieren", Er = "Ausschneiden", Ar = "Kopieren", zr = "Umbenennen", kr = "Herunterladen", Rr = "Element ausgewählt", Ir = "Elemente ausgewählt", Or = "Abbrechen", Gr = "Auswahl aufheben", Br = "Abgeschlossen", Vr = "Wenn Sie die Dateierweiterung ändern, kann die Datei unbrauchbar werden. Möchten Sie das wirklich tun?", Wr = "Nein", _r = "Ja", Yr = "Schließen", Kr = "Dateityp nicht erlaubt.", qr = "Datei existiert bereits.", Jr = "Maximale Uploadgröße ist", Zr = "Dateien zum Hochladen ziehen", Xr = "Datei auswählen", Qr = "Hochladen fehlgeschlagen.", eo = "Wird hochgeladen", no = "Hochgeladen", to = "Entfernen", io = "Upload abbrechen", ro = "Vorschau", oo = "Leider ist keine Vorschau für diese Datei verfügbar.", ao = "Startseite", so = "Mehr Ordner anzeigen", lo = "Verschieben nach", co = "Dieser Ordner ist leer.", uo = "Alle auswählen", fo = "Ansicht", mo = "Raster", po = "Liste", ho = "Öffnen", go = "Hier ist noch nichts", bo = "Name", vo = "Geändert", No = "Größe", $o = 'Möchten Sie "{{fileName}}" wirklich löschen?', yo = "Möchten Sie diese {{count}} Elemente wirklich löschen?", Fo = "{{percent}}% erledigt", xo = "Abgebrochen", Co = 'Ein Dateiname darf keines der folgenden Zeichen enthalten: \\ / : * ? " < > |', wo = 'In diesem Zielordner gibt es bereits einen Ordner namens "{{renameFile}}".', Po = "Navigationsbereich einklappen", Mo = "Navigationsbereich erweitern", Uo = {
  newFolder: Dr,
  upload: Tr,
  paste: jr,
  changeView: Lr,
  refresh: Hr,
  cut: Er,
  copy: Ar,
  rename: zr,
  download: kr,
  delete: "Löschen",
  itemSelected: Rr,
  itemsSelected: Ir,
  cancel: Or,
  clearSelection: Gr,
  completed: Br,
  fileNameChangeWarning: Vr,
  no: Wr,
  yes: _r,
  close: Yr,
  fileTypeNotAllowed: Kr,
  fileAlreadyExist: qr,
  maxUploadSize: Jr,
  dragFileToUpload: Zr,
  chooseFile: Xr,
  uploadFail: Qr,
  uploading: eo,
  uploaded: no,
  remove: to,
  abortUpload: io,
  preview: ro,
  previewUnavailable: oo,
  home: ao,
  showMoreFolder: so,
  moveTo: lo,
  folderEmpty: co,
  selectAll: uo,
  view: fo,
  grid: mo,
  list: po,
  open: ho,
  nothingHereYet: go,
  name: bo,
  modified: vo,
  size: No,
  deleteItemConfirm: $o,
  deleteItemsConfirm: yo,
  percentDone: Fo,
  canceled: xo,
  invalidFileName: Co,
  folderExists: wo,
  collapseNavigationPane: Po,
  expandNavigationPane: Mo
}, So = "New Folder", Do = "Upload", To = "Paste", jo = "Change View", Lo = "Refresh", Ho = "Cut", Eo = "Copy", Ao = "Rename", zo = "Download", ko = "item selected", Ro = "items selected", Io = "Cancel", Oo = "Clear Selection", Go = "Completed", Bo = "If you change a file name extension, the file might become unusable. Are you sure you want to change it?", Vo = "No", Wo = "Yes", _o = "Close", Yo = "File type is not allowed.", Ko = "File already exists.", qo = "Maximum upload size is", Jo = "Drag files to upload", Zo = "Choose File", Xo = "Upload failed.", Qo = "Uploading", ea = "Uploaded", na = "Remove", ta = "Abort Upload", ia = "Preview", ra = "Sorry! Preview is not available for this file.", oa = "Home", aa = "Show more folders", sa = "Move to", la = "This folder is empty.", ca = "Select all", da = "View", ua = "Grid", fa = "List", ma = "Open", pa = "Nothing here yet", ha = "Name", ga = "Modified", ba = "Size", va = 'Are you sure you want to delete "{{fileName}}"?', Na = "Are you sure you want to delete these {{count}} items?", $a = "{{percent}}% done", ya = "Canceled", Fa = `A file name can't contain any of the following characters: \\ / : * ? " < > |`, xa = 'This destination already contains a folder named "{{renameFile}}".', Ca = "Collapse Navigation Pane", wa = "Expand Navigation Pane", Pa = {
  newFolder: So,
  upload: Do,
  paste: To,
  changeView: jo,
  refresh: Lo,
  cut: Ho,
  copy: Eo,
  rename: Ao,
  download: zo,
  delete: "Delete",
  itemSelected: ko,
  itemsSelected: Ro,
  cancel: Io,
  clearSelection: Oo,
  completed: Go,
  fileNameChangeWarning: Bo,
  no: Vo,
  yes: Wo,
  close: _o,
  fileTypeNotAllowed: Yo,
  fileAlreadyExist: Ko,
  maxUploadSize: qo,
  dragFileToUpload: Jo,
  chooseFile: Zo,
  uploadFail: Xo,
  uploading: Qo,
  uploaded: ea,
  remove: na,
  abortUpload: ta,
  preview: ia,
  previewUnavailable: ra,
  home: oa,
  showMoreFolder: aa,
  moveTo: sa,
  folderEmpty: la,
  selectAll: ca,
  view: da,
  grid: ua,
  list: fa,
  open: ma,
  nothingHereYet: pa,
  name: ha,
  modified: ga,
  size: ba,
  deleteItemConfirm: va,
  deleteItemsConfirm: Na,
  percentDone: $a,
  canceled: ya,
  invalidFileName: Fa,
  folderExists: xa,
  collapseNavigationPane: Ca,
  expandNavigationPane: wa
}, Ma = "Nueva carpeta", Ua = "Subir", Sa = "Pegar", Da = "Cambiar vista", Ta = "Actualizar", ja = "Cortar", La = "Copiar", Ha = "Renombrar", Ea = "Descargar", Aa = "elemento seleccionado", za = "elementos seleccionados", ka = "Cancelar", Ra = "Borrar selección", Ia = "Completado", Oa = "Si cambia la extensión del archivo, es posible que no funcione. ¿Está seguro de que desea cambiarla?", Ga = "No", Ba = "Sí", Va = "Cerrar", Wa = "Tipo de archivo no permitido.", _a = "El archivo ya existe.", Ya = "El tamaño máximo de subida es", Ka = "Arrastre archivos para subir", qa = "Elegir archivo", Ja = "Error al subir.", Za = "Subiendo", Xa = "Subido", Qa = "Eliminar", es = "Cancelar subida", ns = "Vista previa", ts = "¡Lo sentimos! No hay vista previa disponible para este archivo.", is = "Inicio", rs = "Mostrar más carpetas", os = "Mover a", as = "Esta carpeta está vacía.", ss = "Seleccionar todo", ls = "Vista", cs = "Cuadrícula", ds = "Lista", us = "Abrir", fs = "Nada por aquí aún", ms = "Nombre", ps = "Modificado", hs = "Tamaño", gs = '¿Está seguro de que desea eliminar "{{fileName}}"?', bs = "¿Está seguro de que desea eliminar estos {{count}} elementos?", vs = "{{percent}}% completado", Ns = "Cancelado", $s = 'Un nombre de archivo no puede contener ninguno de los siguientes caracteres: \\ / : * ? " < > |', ys = 'Ya existe una carpeta llamada "{{renameFile}}" en este destino.', Fs = "Contraer panel de navegación", xs = "Expandir panel de navegación", Cs = {
  newFolder: Ma,
  upload: Ua,
  paste: Sa,
  changeView: Da,
  refresh: Ta,
  cut: ja,
  copy: La,
  rename: Ha,
  download: Ea,
  delete: "Eliminar",
  itemSelected: Aa,
  itemsSelected: za,
  cancel: ka,
  clearSelection: Ra,
  completed: Ia,
  fileNameChangeWarning: Oa,
  no: Ga,
  yes: Ba,
  close: Va,
  fileTypeNotAllowed: Wa,
  fileAlreadyExist: _a,
  maxUploadSize: Ya,
  dragFileToUpload: Ka,
  chooseFile: qa,
  uploadFail: Ja,
  uploading: Za,
  uploaded: Xa,
  remove: Qa,
  abortUpload: es,
  preview: ns,
  previewUnavailable: ts,
  home: is,
  showMoreFolder: rs,
  moveTo: os,
  folderEmpty: as,
  selectAll: ss,
  view: ls,
  grid: cs,
  list: ds,
  open: us,
  nothingHereYet: fs,
  name: ms,
  modified: ps,
  size: hs,
  deleteItemConfirm: gs,
  deleteItemsConfirm: bs,
  percentDone: vs,
  canceled: Ns,
  invalidFileName: $s,
  folderExists: ys,
  collapseNavigationPane: Fs,
  expandNavigationPane: xs
}, ws = "Nouveau dossier", Ps = "Téléverser", Ms = "Coller", Us = "Changer la vue", Ss = "Rafraîchir", Ds = "Couper", Ts = "Copier", js = "Renommer", Ls = "Télécharger", Hs = "élément sélectionné", Es = "éléments sélectionnés", As = "Annuler", zs = "Effacer la sélection", ks = "Terminé", Rs = "Si vous modifiez l'extension d'un fichier, celui-ci pourrait devenir inutilisable. Êtes-vous sûr de vouloir le modifier ?", Is = "Non", Os = "Oui", Gs = "Fermer", Bs = "Type de fichier non autorisé.", Vs = "Le fichier existe déjà.", Ws = "La taille maximale de téléversement est", _s = "Glissez les fichiers à téléverser", Ys = "Choisir un fichier", Ks = "Échec du téléversement.", qs = "Téléversement en cours", Js = "Téléversé", Zs = "Supprimer", Xs = "Annuler le téléversement", Qs = "Aperçu", el = "Désolé ! L'aperçu n'est pas disponible pour ce fichier.", nl = "Accueil", tl = "Afficher plus de dossiers", il = "Déplacer vers", rl = "Ce dossier est vide.", ol = "Tout sélectionner", al = "Vue", sl = "Grille", ll = "Liste", cl = "Ouvrir", dl = "Rien ici pour le moment", ul = "Nom", fl = "Modifié", ml = "Taille", pl = 'Êtes-vous sûr de vouloir supprimer "{{fileName}}" ?', hl = "Êtes-vous sûr de vouloir supprimer ces {{count}} éléments ?", gl = "{{percent}}% terminé", bl = "Annulé", vl = 'Un nom de fichier ne peut pas contenir les caractères suivants : \\ / : * ? " < > |', Nl = 'Cette destination contient déjà un dossier nommé "{{renameFile}}".', $l = "Réduire le panneau de navigation", yl = "Développer le panneau de navigation", Fl = {
  newFolder: ws,
  upload: Ps,
  paste: Ms,
  changeView: Us,
  refresh: Ss,
  cut: Ds,
  copy: Ts,
  rename: js,
  download: Ls,
  delete: "Supprimer",
  itemSelected: Hs,
  itemsSelected: Es,
  cancel: As,
  clearSelection: zs,
  completed: ks,
  fileNameChangeWarning: Rs,
  no: Is,
  yes: Os,
  close: Gs,
  fileTypeNotAllowed: Bs,
  fileAlreadyExist: Vs,
  maxUploadSize: Ws,
  dragFileToUpload: _s,
  chooseFile: Ys,
  uploadFail: Ks,
  uploading: qs,
  uploaded: Js,
  remove: Zs,
  abortUpload: Xs,
  preview: Qs,
  previewUnavailable: el,
  home: nl,
  showMoreFolder: tl,
  moveTo: il,
  folderEmpty: rl,
  selectAll: ol,
  view: al,
  grid: sl,
  list: ll,
  open: cl,
  nothingHereYet: dl,
  name: ul,
  modified: fl,
  size: ml,
  deleteItemConfirm: pl,
  deleteItemsConfirm: hl,
  percentDone: gl,
  canceled: bl,
  invalidFileName: vl,
  folderExists: Nl,
  collapseNavigationPane: $l,
  expandNavigationPane: yl
}, xl = "תיקייה חדשה", Cl = "העלה", wl = "הדבק", Pl = "שנה תצוגה", Ml = "רענן", Ul = "גזור", Sl = "העתק", Dl = "שנה שם", Tl = "הורד", jl = "פריט נבחר", Ll = "פריטים נבחרו", Hl = "בטל", El = "נקה בחירה", Al = "הושלם", zl = "אם תשנה את סיומת הקובץ, הקובץ עלול להפוך לבלתי שמיש. האם אתה בטוח שברצונך לשנות זאת?", kl = "לא", Rl = "כן", Il = "סגור", Ol = "סוג הקובץ אינו מורשה.", Gl = "הקובץ כבר קיים.", Bl = "גודל העלאה מקסימלי הוא", Vl = "גרור קבצים להעלאה", Wl = "בחר קובץ", _l = "ההעלאה נכשלה.", Yl = "מעלה...", Kl = "הועלה", ql = "הסר", Jl = "בטל העלאה", Zl = "תצוגה מקדימה", Xl = "מצטערים! אין תצוגה מקדימה זמינה לקובץ זה.", Ql = "דף הבית", ec = "הצג תיקיות נוספות", nc = "העבר ל", tc = "התיקייה ריקה.", ic = "בחר הכל", rc = "תצוגה", oc = "רשת", ac = "רשימה", sc = "פתח", lc = "אין כאן כלום עדיין", cc = "שם", dc = "שונה", uc = "גודל", fc = 'האם אתה בטוח שברצונך למחוק את "{{fileName}}"?', mc = "האם אתה בטוח שברצונך למחוק את {{count}} הפריטים האלו?", pc = "{{percent}}% הושלמו", hc = "בוטל", gc = 'שם קובץ לא יכול להכיל את התווים הבאים: \\ / : * ? " < > |', bc = 'כבר קיימת תיקייה בשם "{{renameFile}}" במיקום זה.', vc = "כווץ את לוח הניווט", Nc = "הרחב את לוח הניווט", $c = {
  newFolder: xl,
  upload: Cl,
  paste: wl,
  changeView: Pl,
  refresh: Ml,
  cut: Ul,
  copy: Sl,
  rename: Dl,
  download: Tl,
  delete: "מחק",
  itemSelected: jl,
  itemsSelected: Ll,
  cancel: Hl,
  clearSelection: El,
  completed: Al,
  fileNameChangeWarning: zl,
  no: kl,
  yes: Rl,
  close: Il,
  fileTypeNotAllowed: Ol,
  fileAlreadyExist: Gl,
  maxUploadSize: Bl,
  dragFileToUpload: Vl,
  chooseFile: Wl,
  uploadFail: _l,
  uploading: Yl,
  uploaded: Kl,
  remove: ql,
  abortUpload: Jl,
  preview: Zl,
  previewUnavailable: Xl,
  home: Ql,
  showMoreFolder: ec,
  moveTo: nc,
  folderEmpty: tc,
  selectAll: ic,
  view: rc,
  grid: oc,
  list: ac,
  open: sc,
  nothingHereYet: lc,
  name: cc,
  modified: dc,
  size: uc,
  deleteItemConfirm: fc,
  deleteItemsConfirm: mc,
  percentDone: pc,
  canceled: hc,
  invalidFileName: gc,
  folderExists: bc,
  collapseNavigationPane: vc,
  expandNavigationPane: Nc
}, yc = "नया फ़ोल्डर", Fc = "अपलोड करें", xc = "पेस्ट करें", Cc = "दृश्य बदलें", wc = "रिफ्रेश करें", Pc = "काटें", Mc = "कॉपी करें", Uc = "नाम बदलें", Sc = "डाउनलोड करें", Dc = "आइटम चुना गया", Tc = "आइटम्स चुने गए", jc = "रद्द करें", Lc = "चयन साफ़ करें", Hc = "पूर्ण हुआ", Ec = "यदि आप फ़ाइल नाम एक्सटेंशन बदलते हैं, तो फ़ाइल अनुपयोगी हो सकती है। क्या आप वाकई इसे बदलना चाहते हैं?", Ac = "नहीं", zc = "हाँ", kc = "बंद करें", Rc = "फ़ाइल प्रकार की अनुमति नहीं है।", Ic = "फ़ाइल पहले से मौजूद है।", Oc = "अधिकतम अपलोड आकार है", Gc = "अपलोड करने के लिए फ़ाइलें खींचें", Bc = "फ़ाइल चुनें", Vc = "अपलोड विफल रहा।", Wc = "अपलोड हो रहा है", _c = "अपलोड हो गया", Yc = "हटाएं", Kc = "अपलोड रोकें", qc = "पूर्वावलोकन", Jc = "माफ़ कीजिए! इस फ़ाइल के लिए पूर्वावलोकन उपलब्ध नहीं है।", Zc = "होम", Xc = "और फ़ोल्डर दिखाएँ", Qc = "इसमें ले जाएँ", ed = "यह फ़ोल्डर खाली है।", nd = "सभी का चयन करें", td = "दृश्य", id = "ग्रिड", rd = "सूची", od = "खोलें", ad = "यहाँ अभी कुछ नहीं है", sd = "नाम", ld = "परिवर्तित", cd = "आकार", dd = 'क्या आप वाकई "{{fileName}}" को हटाना चाहते हैं?', ud = "क्या आप वाकई इन {{count}} आइटम्स को हटाना चाहते हैं?", fd = "{{percent}}% पूर्ण", md = "रद्द किया गया", pd = 'फ़ाइल नाम में निम्नलिखित वर्ण नहीं हो सकते: \\ / : * ? " < > |', hd = 'इस स्थान पर "{{renameFile}}" नाम का एक फ़ोल्डर पहले से मौजूद है।', gd = "नेविगेशन पैन को संकुचित करें", bd = "नेविगेशन पैन को विस्तारित करें", vd = {
  newFolder: yc,
  upload: Fc,
  paste: xc,
  changeView: Cc,
  refresh: wc,
  cut: Pc,
  copy: Mc,
  rename: Uc,
  download: Sc,
  delete: "हटाएं",
  itemSelected: Dc,
  itemsSelected: Tc,
  cancel: jc,
  clearSelection: Lc,
  completed: Hc,
  fileNameChangeWarning: Ec,
  no: Ac,
  yes: zc,
  close: kc,
  fileTypeNotAllowed: Rc,
  fileAlreadyExist: Ic,
  maxUploadSize: Oc,
  dragFileToUpload: Gc,
  chooseFile: Bc,
  uploadFail: Vc,
  uploading: Wc,
  uploaded: _c,
  remove: Yc,
  abortUpload: Kc,
  preview: qc,
  previewUnavailable: Jc,
  home: Zc,
  showMoreFolder: Xc,
  moveTo: Qc,
  folderEmpty: ed,
  selectAll: nd,
  view: td,
  grid: id,
  list: rd,
  open: od,
  nothingHereYet: ad,
  name: sd,
  modified: ld,
  size: cd,
  deleteItemConfirm: dd,
  deleteItemsConfirm: ud,
  percentDone: fd,
  canceled: md,
  invalidFileName: pd,
  folderExists: hd,
  collapseNavigationPane: gd,
  expandNavigationPane: bd
}, Nd = "Nuova cartella", $d = "Carica", yd = "Incolla", Fd = "Cambia vista", xd = "Ricarica", Cd = "Taglia", wd = "Copia", Pd = "Rinomina", Md = "Scarica", Ud = "elemento selezionato", Sd = "elementi selezionati", Dd = "Annulla", Td = "Pulisci selezione", jd = "Completato", Ld = "Se cambi l'estensione del file, potrebbe diventare inutilizzabile. Sei sicuro di volerlo fare?", Hd = "No", Ed = "Sì", Ad = "Chiudi", zd = "Tipo di file non consentito.", kd = "Il file esiste già.", Rd = "La dimensione massima di caricamento è", Id = "Trascina i file per caricarli", Od = "Scegli file", Gd = "Caricamento fallito.", Bd = "Caricamento in corso", Vd = "Caricato", Wd = "Rimuovi", _d = "Annulla caricamento", Yd = "Anteprima", Kd = "Spiacenti! L'anteprima non è disponibile per questo file.", qd = "Home", Jd = "Mostra altre cartelle", Zd = "Sposta in", Xd = "Questa cartella è vuota.", Qd = "Seleziona tutto", eu = "Vista", nu = "Griglia", tu = "Lista", iu = "Apri", ru = "Niente qui per ora", ou = "Nome", au = "Modificato", su = "Dimensione", lu = 'Sei sicuro di voler eliminare "{{fileName}}"?', cu = "Sei sicuro di voler eliminare questi {{count}} elementi?", du = "{{percent}}% completato", uu = "Annullato", fu = 'Un nome di file non può contenere nessuno dei seguenti caratteri: \\ / : * ? " < > |', mu = 'Questa destinazione contiene già una cartella chiamata "{{renameFile}}".', pu = "Comprimi pannello di navigazione", hu = "Espandi pannello di navigazione", gu = {
  newFolder: Nd,
  upload: $d,
  paste: yd,
  changeView: Fd,
  refresh: xd,
  cut: Cd,
  copy: wd,
  rename: Pd,
  download: Md,
  delete: "Elimina",
  itemSelected: Ud,
  itemsSelected: Sd,
  cancel: Dd,
  clearSelection: Td,
  completed: jd,
  fileNameChangeWarning: Ld,
  no: Hd,
  yes: Ed,
  close: Ad,
  fileTypeNotAllowed: zd,
  fileAlreadyExist: kd,
  maxUploadSize: Rd,
  dragFileToUpload: Id,
  chooseFile: Od,
  uploadFail: Gd,
  uploading: Bd,
  uploaded: Vd,
  remove: Wd,
  abortUpload: _d,
  preview: Yd,
  previewUnavailable: Kd,
  home: qd,
  showMoreFolder: Jd,
  moveTo: Zd,
  folderEmpty: Xd,
  selectAll: Qd,
  view: eu,
  grid: nu,
  list: tu,
  open: iu,
  nothingHereYet: ru,
  name: ou,
  modified: au,
  size: su,
  deleteItemConfirm: lu,
  deleteItemsConfirm: cu,
  percentDone: du,
  canceled: uu,
  invalidFileName: fu,
  folderExists: mu,
  collapseNavigationPane: pu,
  expandNavigationPane: hu
}, bu = "新しいフォルダー", vu = "アップロード", Nu = "貼り付け", $u = "ビューを変更", yu = "更新", Fu = "切り取り", xu = "コピー", Cu = "名前変更", wu = "ダウンロード", Pu = "アイテムが選択されました", Mu = "{{count}} アイテムが選択されました", Uu = "キャンセル", Su = "選択をクリア", Du = "完了", Tu = "ファイル拡張子を変更すると、ファイルが使えなくなる場合があります。本当に変更しますか？", ju = "いいえ", Lu = "はい", Hu = "閉じる", Eu = "ファイルタイプは許可されていません。", Au = "ファイルはすでに存在します。", zu = "最大アップロードサイズは", ku = "ファイルをドラッグしてアップロード", Ru = "ファイルを選択", Iu = "アップロード失敗。", Ou = "アップロード中", Gu = "アップロード済み", Bu = "削除", Vu = "アップロード中止", Wu = "プレビュー", _u = "申し訳ありません！このファイルのプレビューは利用できません。", Yu = "ホーム", Ku = "さらにフォルダーを表示", qu = "移動先", Ju = "このフォルダーは空です。", Zu = "すべて選択", Xu = "ビュー", Qu = "グリッド", ef = "リスト", nf = "開く", tf = "まだ何もありません", rf = "名前", of = "修正日", af = "サイズ", sf = '"{{fileName}}" を削除してもよろしいですか？', lf = "{{count}} 件のアイテムを削除してもよろしいですか？", cf = "{{percent}}% 完了", df = "キャンセルしました", uf = 'ファイル名には以下の文字を含めることはできません：\\ / : * ? " < > |', ff = 'この宛先には "{{renameFile}}" という名前のフォルダーがすでに存在します。', mf = "ナビゲーションペインを折りたたむ", pf = "ナビゲーションペインを展開", hf = {
  newFolder: bu,
  upload: vu,
  paste: Nu,
  changeView: $u,
  refresh: yu,
  cut: Fu,
  copy: xu,
  rename: Cu,
  download: wu,
  delete: "削除",
  itemSelected: Pu,
  itemsSelected: Mu,
  cancel: Uu,
  clearSelection: Su,
  completed: Du,
  fileNameChangeWarning: Tu,
  no: ju,
  yes: Lu,
  close: Hu,
  fileTypeNotAllowed: Eu,
  fileAlreadyExist: Au,
  maxUploadSize: zu,
  dragFileToUpload: ku,
  chooseFile: Ru,
  uploadFail: Iu,
  uploading: Ou,
  uploaded: Gu,
  remove: Bu,
  abortUpload: Vu,
  preview: Wu,
  previewUnavailable: _u,
  home: Yu,
  showMoreFolder: Ku,
  moveTo: qu,
  folderEmpty: Ju,
  selectAll: Zu,
  view: Xu,
  grid: Qu,
  list: ef,
  open: nf,
  nothingHereYet: tf,
  name: rf,
  modified: of,
  size: af,
  deleteItemConfirm: sf,
  deleteItemsConfirm: lf,
  percentDone: cf,
  canceled: df,
  invalidFileName: uf,
  folderExists: ff,
  collapseNavigationPane: mf,
  expandNavigationPane: pf
}, gf = "새 폴더", bf = "업로드", vf = "붙여넣기", Nf = "보기 변경", $f = "새로 고침", yf = "잘라내기", Ff = "복사", xf = "이름 바꾸기", Cf = "다운로드", wf = "항목 선택됨", Pf = "개 항목 선택됨", Mf = "취소", Uf = "선택 지우기", Sf = "완료됨", Df = "파일 확장자를 변경하면 사용할 수 없게 될 수 있습니다. 정말로 변경하시겠습니까?", Tf = "아니오", jf = "예", Lf = "닫기", Hf = "허용되지 않는 파일 형식입니다.", Ef = "파일이 이미 존재합니다.", Af = "최대 업로드 크기", zf = "업로드하려면 파일을 끌어오세요", kf = "파일 선택", Rf = "업로드 실패", If = "업로드 중", Of = "업로드 완료", Gf = "제거", Bf = "업로드 중단", Vf = "미리보기", Wf = "죄송합니다! 이 파일은 미리보기를 제공하지 않습니다.", _f = "홈", Yf = "더 많은 폴더 보기", Kf = "이동", qf = "이 폴더는 비어 있습니다.", Jf = "전체 선택", Zf = "보기", Xf = "그리드", Qf = "목록", em = "열기", nm = "아직 아무것도 없습니다", tm = "이름", im = "수정됨", rm = "크기", om = '"{{fileName}}" 파일을 삭제하시겠습니까?', am = "{{count}}개의 항목을 삭제하시겠습니까?", sm = "{{percent}}% 완료", lm = "취소됨", cm = '파일 이름에는 다음 문자를 사용할 수 없습니다: \\ / : * ? " < > |', dm = '해당 위치에 "{{renameFile}}" 폴더가 이미 있습니다.', um = "탐색 창 축소", fm = "탐색 창 확장", mm = {
  newFolder: gf,
  upload: bf,
  paste: vf,
  changeView: Nf,
  refresh: $f,
  cut: yf,
  copy: Ff,
  rename: xf,
  download: Cf,
  delete: "삭제",
  itemSelected: wf,
  itemsSelected: Pf,
  cancel: Mf,
  clearSelection: Uf,
  completed: Sf,
  fileNameChangeWarning: Df,
  no: Tf,
  yes: jf,
  close: Lf,
  fileTypeNotAllowed: Hf,
  fileAlreadyExist: Ef,
  maxUploadSize: Af,
  dragFileToUpload: zf,
  chooseFile: kf,
  uploadFail: Rf,
  uploading: If,
  uploaded: Of,
  remove: Gf,
  abortUpload: Bf,
  preview: Vf,
  previewUnavailable: Wf,
  home: _f,
  showMoreFolder: Yf,
  moveTo: Kf,
  folderEmpty: qf,
  selectAll: Jf,
  view: Zf,
  grid: Xf,
  list: Qf,
  open: em,
  nothingHereYet: nm,
  name: tm,
  modified: im,
  size: rm,
  deleteItemConfirm: om,
  deleteItemsConfirm: am,
  percentDone: sm,
  canceled: lm,
  invalidFileName: cm,
  folderExists: dm,
  collapseNavigationPane: um,
  expandNavigationPane: fm
}, pm = "Nova pasta", hm = "Carregar", gm = "Colar", bm = "Alterar visualização", vm = "Atualizar", Nm = "Cortar", $m = "Copiar", ym = "Renomear", Fm = "Baixar", xm = "item selecionado", Cm = "itens selecionados", wm = "Cancelar", Pm = "Limpar seleção", Mm = "Concluído", Um = "Se você alterar a extensão do arquivo, ele pode se tornar inutilizável. Tem certeza de que deseja fazer isso?", Sm = "Não", Dm = "Sim", Tm = "Fechar", jm = "Tipo de arquivo não permitido.", Lm = "Arquivo já existe.", Hm = "Tamanho máximo de upload é", Em = "Arraste os arquivos para carregar", Am = "Escolher arquivo", zm = "Falha no upload.", km = "Carregando", Rm = "Carregado", Im = "Remover", Om = "Abortar upload", Gm = "Visualizar", Bm = "Desculpe! Não há visualização disponível para este arquivo.", Vm = "Início", Wm = "Mostrar mais pastas", _m = "Mover para", Ym = "Esta pasta está vazia.", Km = "Selecionar tudo", qm = "Visualização", Jm = "Grade", Zm = "Lista", Xm = "Abrir", Qm = "Nada aqui ainda", ep = "Nome", np = "Modificado", tp = "Tamanho", ip = 'Tem certeza de que deseja excluir "{{fileName}}"?', rp = "Tem certeza de que deseja excluir esses {{count}} itens?", op = "{{percent}}% concluído", ap = "Cancelado", sp = 'Um nome de arquivo não pode conter nenhum dos seguintes caracteres: \\ / : * ? " < > |', lp = 'Já existe uma pasta com o nome "{{renameFile}}" neste local.', cp = "Recolher painel de navegação", dp = "Expandir painel de navegação", up = {
  newFolder: pm,
  upload: hm,
  paste: gm,
  changeView: bm,
  refresh: vm,
  cut: Nm,
  copy: $m,
  rename: ym,
  download: Fm,
  delete: "Excluir",
  itemSelected: xm,
  itemsSelected: Cm,
  cancel: wm,
  clearSelection: Pm,
  completed: Mm,
  fileNameChangeWarning: Um,
  no: Sm,
  yes: Dm,
  close: Tm,
  fileTypeNotAllowed: jm,
  fileAlreadyExist: Lm,
  maxUploadSize: Hm,
  dragFileToUpload: Em,
  chooseFile: Am,
  uploadFail: zm,
  uploading: km,
  uploaded: Rm,
  remove: Im,
  abortUpload: Om,
  preview: Gm,
  previewUnavailable: Bm,
  home: Vm,
  showMoreFolder: Wm,
  moveTo: _m,
  folderEmpty: Ym,
  selectAll: Km,
  view: qm,
  grid: Jm,
  list: Zm,
  open: Xm,
  nothingHereYet: Qm,
  name: ep,
  modified: np,
  size: tp,
  deleteItemConfirm: ip,
  deleteItemsConfirm: rp,
  percentDone: op,
  canceled: ap,
  invalidFileName: sp,
  folderExists: lp,
  collapseNavigationPane: cp,
  expandNavigationPane: dp
}, fp = "Nova pasta", mp = "Carregar", pp = "Colar", hp = "Mudar vista", gp = "Atualizar", bp = "Cortar", vp = "Copiar", Np = "Renomear", $p = "Transferir", yp = "item selecionado", Fp = "itens selecionados", xp = "Cancelar", Cp = "Limpar seleção", wp = "Concluído", Pp = "Se alterar a extensão de um ficheiro, este pode deixar de funcionar corretamente. Tem a certeza de que deseja alterá-la?", Mp = "Não", Up = "Sim", Sp = "Fechar", Dp = "Tipo de ficheiro não permitido.", Tp = "O ficheiro já existe.", jp = "O tamanho máximo de carregamento é", Lp = "Arraste os ficheiros para carregar", Hp = "Escolher ficheiro", Ep = "Falha no carregamento.", Ap = "A carregar", zp = "Carregado", kp = "Remover", Rp = "Cancelar carregamento", Ip = "Pré-visualizar", Op = "Lamentamos! A pré-visualização não está disponível para este ficheiro.", Gp = "Início", Bp = "Mostrar mais pastas", Vp = "Mover para", Wp = "Esta pasta está vazia.", _p = "Selecionar tudo", Yp = "Vista", Kp = "Grelha", qp = "Lista", Jp = "Abrir", Zp = "Ainda não há nada aqui", Xp = "Nome", Qp = "Modificado", eh = "Tamanho", nh = 'Tem a certeza de que deseja eliminar "{{fileName}}"?', th = "Tem a certeza de que deseja eliminar estes {{count}} itens?", ih = "{{percent}}% concluído", rh = "Cancelado", oh = 'O nome do ficheiro não pode conter nenhum dos seguintes caracteres: \\ / : * ? " < > |', ah = 'O destino já contém uma pasta chamada "{{renameFile}}".', sh = "Recolher painel de navegação", lh = "Expandir painel de navegação", ch = {
  newFolder: fp,
  upload: mp,
  paste: pp,
  changeView: hp,
  refresh: gp,
  cut: bp,
  copy: vp,
  rename: Np,
  download: $p,
  delete: "Eliminar",
  itemSelected: yp,
  itemsSelected: Fp,
  cancel: xp,
  clearSelection: Cp,
  completed: wp,
  fileNameChangeWarning: Pp,
  no: Mp,
  yes: Up,
  close: Sp,
  fileTypeNotAllowed: Dp,
  fileAlreadyExist: Tp,
  maxUploadSize: jp,
  dragFileToUpload: Lp,
  chooseFile: Hp,
  uploadFail: Ep,
  uploading: Ap,
  uploaded: zp,
  remove: kp,
  abortUpload: Rp,
  preview: Ip,
  previewUnavailable: Op,
  home: Gp,
  showMoreFolder: Bp,
  moveTo: Vp,
  folderEmpty: Wp,
  selectAll: _p,
  view: Yp,
  grid: Kp,
  list: qp,
  open: Jp,
  nothingHereYet: Zp,
  name: Xp,
  modified: Qp,
  size: eh,
  deleteItemConfirm: nh,
  deleteItemsConfirm: th,
  percentDone: ih,
  canceled: rh,
  invalidFileName: oh,
  folderExists: ah,
  collapseNavigationPane: sh,
  expandNavigationPane: lh
}, dh = "Новая папка", uh = "Загрузить", fh = "Вставить", mh = "Изменить вид", ph = "Обновить", hh = "Вырезать", gh = "Копировать", bh = "Переименовать", vh = "Скачать", Nh = "выбран элемент", $h = "выбрано {{count}} элементов", yh = "Отменить", Fh = "Очистить выбор", xh = "Завершено", Ch = "Если вы измените расширение файла, файл может стать неисправным. Вы уверены, что хотите изменить его?", wh = "Нет", Ph = "Да", Mh = "Закрыть", Uh = "Тип файла не разрешен.", Sh = "Файл уже существует.", Dh = "Максимальный размер загрузки:", Th = "Перетащите файлы для загрузки", jh = "Выбрать файл", Lh = "Загрузка не удалась.", Hh = "Загрузка", Eh = "Загружено", Ah = "Удалить", zh = "Прервать загрузку", kh = "Предпросмотр", Rh = "Извините! Предпросмотр для этого файла недоступен.", Ih = "Главная", Oh = "Показать больше папок", Gh = "Переместить в", Bh = "Эта папка пуста.", Vh = "Выбрать все", Wh = "Вид", _h = "Сетка", Yh = "Список", Kh = "Открыть", qh = "Здесь еще ничего нет", Jh = "Имя", Zh = "Изменено", Xh = "Размер", Qh = 'Вы уверены, что хотите удалить "{{fileName}}"?', e1 = "Вы уверены, что хотите удалить эти {{count}} элементы?", n1 = "{{percent}}% завершено", t1 = "Отменено", i1 = 'Имя файла не может содержать следующие символы: \\ / : * ? " < > |', r1 = 'В этом местоположении уже существует папка с именем "{{renameFile}}".', o1 = "Свернуть панель навигации", a1 = "Развернуть панель навигации", s1 = {
  newFolder: dh,
  upload: uh,
  paste: fh,
  changeView: mh,
  refresh: ph,
  cut: hh,
  copy: gh,
  rename: bh,
  download: vh,
  delete: "Удалить",
  itemSelected: Nh,
  itemsSelected: $h,
  cancel: yh,
  clearSelection: Fh,
  completed: xh,
  fileNameChangeWarning: Ch,
  no: wh,
  yes: Ph,
  close: Mh,
  fileTypeNotAllowed: Uh,
  fileAlreadyExist: Sh,
  maxUploadSize: Dh,
  dragFileToUpload: Th,
  chooseFile: jh,
  uploadFail: Lh,
  uploading: Hh,
  uploaded: Eh,
  remove: Ah,
  abortUpload: zh,
  preview: kh,
  previewUnavailable: Rh,
  home: Ih,
  showMoreFolder: Oh,
  moveTo: Gh,
  folderEmpty: Bh,
  selectAll: Vh,
  view: Wh,
  grid: _h,
  list: Yh,
  open: Kh,
  nothingHereYet: qh,
  name: Jh,
  modified: Zh,
  size: Xh,
  deleteItemConfirm: Qh,
  deleteItemsConfirm: e1,
  percentDone: n1,
  canceled: t1,
  invalidFileName: i1,
  folderExists: r1,
  collapseNavigationPane: o1,
  expandNavigationPane: a1
}, l1 = "Yeni Klasör", c1 = "Dosya Yükle", d1 = "Yapıştır", u1 = "Görünümü Değiştir", f1 = "Yenile", m1 = "Kes", p1 = "Kopyala", h1 = "Yeniden İsimlendir", g1 = "İndir", b1 = "öğe seçildi", v1 = "seçilen öğeler", N1 = "İptal", $1 = "Seçimi Temizle", y1 = "Tamamlandı", F1 = "Dosya adı aşağıdaki karakterlerden hiçbirini içeremez:", x1 = "Bir dosya adı uzantısını değiştirirseniz, dosya kullanılamaz hale gelebilir. Bunu değiştirmek istediğinizden emin misiniz?", C1 = "Hayır", w1 = "Evet", P1 = "Kapalı", M1 = "Dosya türüne izin verilmiyor.", U1 = "Dosya zaten mevcut.", S1 = "Maksimum yükleme boyutu", D1 = "Yüklemek için dosyaları sürükleyin", T1 = "Dosya Seç", j1 = "Yükleme hatası.", L1 = "Yükleniyor", H1 = "Yüklendi", E1 = "Kaldır", A1 = "Yüklemeyi İptal Et", z1 = "Görünüm", k1 = "Üzgünüz! Bu dosya için önizleme mevcut değil.", R1 = "Ana Sayfa", I1 = "Daha fazla klasör göster", O1 = "Burya Taşı", G1 = "Bu klasör boş.", B1 = "Hepsini Seç", V1 = "Görünüm", W1 = "Izgara", _1 = "Liste", Y1 = "Aç", K1 = "Henüz hiçbir şey yok", q1 = "Ad", J1 = "Değiştirilme Tarihi", Z1 = "Boyut", X1 = '"{{fileName}}" dosyasını silmek istediğinizden emin misiniz?', Q1 = "{{count}} öğeyi silmek istediğinizden emin misiniz?", eg = "%{{percent}} tamamlandı", ng = "İptal edildi", tg = 'Bir dosya adı aşağıdaki karakterlerden hiçbirini içeremez: \\ / : * ? " < > |', ig = 'Bu konumda "{{renameFile}}" adında bir klasör zaten var.', rg = "Gezinti Panelini Daralt", og = "Gezinti Panelini Genişlet", ag = {
  newFolder: l1,
  upload: c1,
  paste: d1,
  changeView: u1,
  refresh: f1,
  cut: m1,
  copy: p1,
  rename: h1,
  download: g1,
  delete: "Sil",
  itemSelected: b1,
  itemsSelected: v1,
  cancel: N1,
  clearSelection: $1,
  completed: y1,
  folderErrorMessage: F1,
  fileNameChangeWarning: x1,
  no: C1,
  yes: w1,
  close: P1,
  fileTypeNotAllowed: M1,
  fileAlreadyExist: U1,
  maxUploadSize: S1,
  dragFileToUpload: D1,
  chooseFile: T1,
  uploadFail: j1,
  uploading: L1,
  uploaded: H1,
  remove: E1,
  abortUpload: A1,
  preview: z1,
  previewUnavailable: k1,
  home: R1,
  showMoreFolder: I1,
  moveTo: O1,
  folderEmpty: G1,
  selectAll: B1,
  view: V1,
  grid: W1,
  list: _1,
  open: Y1,
  nothingHereYet: K1,
  name: q1,
  modified: J1,
  size: Z1,
  deleteItemConfirm: X1,
  deleteItemsConfirm: Q1,
  percentDone: eg,
  canceled: ng,
  invalidFileName: tg,
  folderExists: ig,
  collapseNavigationPane: rg,
  expandNavigationPane: og
}, sg = "Нова папка", lg = "Завантажити", cg = "Вставити", dg = "Змінити вигляд", ug = "Оновити", fg = "Вирізати", mg = "Копіювати", pg = "Перейменувати", hg = "Завантажити", gg = "вибраний елемент", bg = "вибрані елементи", vg = "Скасувати", Ng = "Очистити вибір", $g = "Завершено", yg = "Якщо ви зміните розширення файлу, він може стати непридатним для використання. Ви впевнені, що хочете змінити його?", Fg = "Ні", xg = "Так", Cg = "Закрити", wg = "Тип файлу не дозволено.", Pg = "Файл уже існує.", Mg = "Максимальний розмір завантаження —", Ug = "Перетягніть файли для завантаження", Sg = "Вибрати файл", Dg = "Помилка завантаження.", Tg = "Завантаження", jg = "Завантажено", Lg = "Видалити", Hg = "Скасувати завантаження", Eg = "Попередній перегляд", Ag = "На жаль! Попередній перегляд для цього файлу недоступний.", zg = "Головна", kg = "Показати більше папок", Rg = "Перемістити до", Ig = "Ця папка порожня.", Og = "Вибрати все", Gg = "Вигляд", Bg = "Сітка", Vg = "Список", Wg = "Відкрити", _g = "Тут ще нічого немає", Yg = "Назва", Kg = "Змінено", qg = "Розмір", Jg = 'Ви впевнені, що хочете видалити "{{fileName}}"?', Zg = "Ви впевнені, що хочете видалити ці {{count}} елементи?", Xg = "{{percent}}% завершено", Qg = "Скасовано", e0 = `Ім'я файлу не може містити такі символи: \\ / : * ? " < > |`, n0 = 'У цьому місці вже існує папка з назвою "{{renameFile}}".', t0 = "Згорнути панель навігації", i0 = "Розгорнути панель навігації", r0 = {
  newFolder: sg,
  upload: lg,
  paste: cg,
  changeView: dg,
  refresh: ug,
  cut: fg,
  copy: mg,
  rename: pg,
  download: hg,
  delete: "Видалити",
  itemSelected: gg,
  itemsSelected: bg,
  cancel: vg,
  clearSelection: Ng,
  completed: $g,
  fileNameChangeWarning: yg,
  no: Fg,
  yes: xg,
  close: Cg,
  fileTypeNotAllowed: wg,
  fileAlreadyExist: Pg,
  maxUploadSize: Mg,
  dragFileToUpload: Ug,
  chooseFile: Sg,
  uploadFail: Dg,
  uploading: Tg,
  uploaded: jg,
  remove: Lg,
  abortUpload: Hg,
  preview: Eg,
  previewUnavailable: Ag,
  home: zg,
  showMoreFolder: kg,
  moveTo: Rg,
  folderEmpty: Ig,
  selectAll: Og,
  view: Gg,
  grid: Bg,
  list: Vg,
  open: Wg,
  nothingHereYet: _g,
  name: Yg,
  modified: Kg,
  size: qg,
  deleteItemConfirm: Jg,
  deleteItemsConfirm: Zg,
  percentDone: Xg,
  canceled: Qg,
  invalidFileName: e0,
  folderExists: n0,
  collapseNavigationPane: t0,
  expandNavigationPane: i0
}, o0 = "نیا فولڈر", a0 = "اپ لوڈ کریں", s0 = "چسپاں کریں", l0 = "دیکھنے کا طریقہ تبدیل کریں", c0 = "تازہ کریں", d0 = "کٹ کریں", u0 = "کاپی کریں", f0 = "نام تبدیل کریں", m0 = "ڈاؤن لوڈ کریں", p0 = "آئٹم منتخب کیا گیا", h0 = "{{count}} آئٹمز منتخب کی گئیں", g0 = "منسوخ کریں", b0 = "انتخاب صاف کریں", v0 = "مکمل ہوا", N0 = "اگر آپ فائل کا ایکسٹینشن تبدیل کرتے ہیں، تو فائل ناقابل استعمال ہو سکتی ہے۔ کیا آپ واقعی اسے تبدیل کرنا چاہتے ہیں؟", $0 = "نہیں", y0 = "ہاں", F0 = "بند کریں", x0 = "فائل کی قسم کی اجازت نہیں ہے۔", C0 = "فائل پہلے سے موجود ہے۔", w0 = "زیادہ سے زیادہ اپ لوڈ سائز ہے", P0 = "اپ لوڈ کرنے کے لیے فائلز گھسیٹیں", M0 = "فائل منتخب کریں", U0 = "اپ لوڈ میں ناکامی۔", S0 = "اپ لوڈ ہو رہا ہے", D0 = "اپ لوڈ ہو گیا", T0 = "ہٹائیں", j0 = "اپ لوڈ منسوخ کریں", L0 = "پریویو", H0 = "معذرت! اس فائل کا پریویو دستیاب نہیں ہے۔", E0 = "ہوم", A0 = "مزید فولڈرز دکھائیں", z0 = "منتقل کریں", k0 = "یہ فولڈر خالی ہے۔", R0 = "سبھی منتخب کریں", I0 = "دیکھیں", O0 = "گِریڈ", G0 = "فہرست", B0 = "کھولیں", V0 = "ابھی کچھ بھی نہیں ہے", W0 = "نام", _0 = "ترمیم شدہ", Y0 = "سائز", K0 = 'کیا آپ واقعی "{{fileName}}" کو حذف کرنا چاہتے ہیں؟', q0 = "کیا آپ واقعی ان {{count}} آئٹمز کو حذف کرنا چاہتے ہیں؟", J0 = "{{percent}}% مکمل ہوا", Z0 = "منسوخ کیا گیا", X0 = 'فائل کا نام درج ذیل میں سے کوئی بھی حرف نہیں رکھ سکتا: \\ / : * ? " < > |', Q0 = 'اس منزل پر پہلے ہی "{{renameFile}}" کے نام کا فولڈر موجود ہے۔', eb = "نیویگیشن پین کو بند کریں", nb = "نیویگیشن پین کو کھولیں", tb = {
  newFolder: o0,
  upload: a0,
  paste: s0,
  changeView: l0,
  refresh: c0,
  cut: d0,
  copy: u0,
  rename: f0,
  download: m0,
  delete: "حذف کریں",
  itemSelected: p0,
  itemsSelected: h0,
  cancel: g0,
  clearSelection: b0,
  completed: v0,
  fileNameChangeWarning: N0,
  no: $0,
  yes: y0,
  close: F0,
  fileTypeNotAllowed: x0,
  fileAlreadyExist: C0,
  maxUploadSize: w0,
  dragFileToUpload: P0,
  chooseFile: M0,
  uploadFail: U0,
  uploading: S0,
  uploaded: D0,
  remove: T0,
  abortUpload: j0,
  preview: L0,
  previewUnavailable: H0,
  home: E0,
  showMoreFolder: A0,
  moveTo: z0,
  folderEmpty: k0,
  selectAll: R0,
  view: I0,
  grid: O0,
  list: G0,
  open: B0,
  nothingHereYet: V0,
  name: W0,
  modified: _0,
  size: Y0,
  deleteItemConfirm: K0,
  deleteItemsConfirm: q0,
  percentDone: J0,
  canceled: Z0,
  invalidFileName: X0,
  folderExists: Q0,
  collapseNavigationPane: eb,
  expandNavigationPane: nb
}, ib = "Thư mục mới", rb = "Tải lên", ob = "Dán", ab = "Thay đổi chế độ xem", sb = "Làm mới", lb = "Cắt", cb = "Sao chép", db = "Đổi tên", ub = "Tải xuống", fb = "mục đã chọn", mb = "mục được chọn", pb = "Hủy", hb = "Xóa lựa chọn", gb = "Hoàn thành", bb = "Nếu bạn thay đổi phần mở rộng tên tệp, tệp có thể không sử dụng được. Bạn có chắc chắn muốn thay đổi không?", vb = "Không", Nb = "Có", $b = "Đóng", yb = "Loại tệp không được phép.", Fb = "Tệp đã tồn tại.", xb = "Kích thước tải lên tối đa là", Cb = "Kéo tệp vào để tải lên", wb = "Chọn tệp", Pb = "Tải lên thất bại.", Mb = "Đang tải lên", Ub = "Đã tải lên", Sb = "Gỡ bỏ", Db = "Hủy tải lên", Tb = "Xem trước", jb = "Rất tiếc! Không thể xem trước tệp này.", Lb = "Trang chủ", Hb = "Hiển thị thêm thư mục", Eb = "Chuyển đến", Ab = "Thư mục này trống.", zb = "Chọn tất cả", kb = "Chế độ xem", Rb = "Lưới", Ib = "Danh sách", Ob = "Mở", Gb = "Chưa có gì ở đây", Bb = "Tên", Vb = "Đã chỉnh sửa", Wb = "Kích thước", _b = 'Bạn có chắc muốn xóa "{{fileName}}"?', Yb = "Bạn có chắc muốn xóa {{count}} mục này không?", Kb = "Hoàn thành {{percent}}%", qb = "Đã hủy", Jb = 'Tên tệp không được chứa các ký tự sau: \\ / : * ? " < > |', Zb = 'Đã có thư mục tên "{{renameFile}}" tại vị trí này.', Xb = "Thu gọn ngăn điều hướng", Qb = "Mở rộng ngăn điều hướng", e2 = {
  newFolder: ib,
  upload: rb,
  paste: ob,
  changeView: ab,
  refresh: sb,
  cut: lb,
  copy: cb,
  rename: db,
  download: ub,
  delete: "Xóa",
  itemSelected: fb,
  itemsSelected: mb,
  cancel: pb,
  clearSelection: hb,
  completed: gb,
  fileNameChangeWarning: bb,
  no: vb,
  yes: Nb,
  close: $b,
  fileTypeNotAllowed: yb,
  fileAlreadyExist: Fb,
  maxUploadSize: xb,
  dragFileToUpload: Cb,
  chooseFile: wb,
  uploadFail: Pb,
  uploading: Mb,
  uploaded: Ub,
  remove: Sb,
  abortUpload: Db,
  preview: Tb,
  previewUnavailable: jb,
  home: Lb,
  showMoreFolder: Hb,
  moveTo: Eb,
  folderEmpty: Ab,
  selectAll: zb,
  view: kb,
  grid: Rb,
  list: Ib,
  open: Ob,
  nothingHereYet: Gb,
  name: Bb,
  modified: Vb,
  size: Wb,
  deleteItemConfirm: _b,
  deleteItemsConfirm: Yb,
  percentDone: Kb,
  canceled: qb,
  invalidFileName: Jb,
  folderExists: Zb,
  collapseNavigationPane: Xb,
  expandNavigationPane: Qb
}, n2 = "新建文件夹", t2 = "上传", i2 = "粘贴", r2 = "更改视图", o2 = "刷新", a2 = "剪切", s2 = "复制", l2 = "重命名", c2 = "下载", d2 = "已选择项", u2 = "已选择{{count}}项", f2 = "取消", m2 = "清除选择", p2 = "完成", h2 = "如果更改文件扩展名，文件可能会变得无法使用。您确定要更改吗？", g2 = "否", b2 = "是", v2 = "关闭", N2 = "不允许的文件类型。", $2 = "文件已存在。", y2 = "最大上传大小为", F2 = "拖动文件上传", x2 = "选择文件", C2 = "上传失败。", w2 = "上传中", P2 = "已上传", M2 = "移除", U2 = "取消上传", S2 = "预览", D2 = "抱歉！该文件无法预览。", T2 = "首页", j2 = "显示更多文件夹", L2 = "移动到", H2 = "该文件夹为空。", E2 = "全选", A2 = "视图", z2 = "网格", k2 = "列表", R2 = "打开", I2 = "这里暂时没有内容", O2 = "名称", G2 = "修改时间", B2 = "大小", V2 = '您确定要删除 "{{fileName}}" 吗？', W2 = "您确定要删除这些 {{count}} 项吗？", _2 = "{{percent}}% 完成", Y2 = "已取消", K2 = '文件名不能包含以下字符：\\ / : * ? " < > |', q2 = '目标文件夹中已存在名为 "{{renameFile}}" 的文件夹。', J2 = "折叠导航窗格", Z2 = "展开导航窗格", X2 = {
  newFolder: n2,
  upload: t2,
  paste: i2,
  changeView: r2,
  refresh: o2,
  cut: a2,
  copy: s2,
  rename: l2,
  download: c2,
  delete: "删除",
  itemSelected: d2,
  itemsSelected: u2,
  cancel: f2,
  clearSelection: m2,
  completed: p2,
  fileNameChangeWarning: h2,
  no: g2,
  yes: b2,
  close: v2,
  fileTypeNotAllowed: N2,
  fileAlreadyExist: $2,
  maxUploadSize: y2,
  dragFileToUpload: F2,
  chooseFile: x2,
  uploadFail: C2,
  uploading: w2,
  uploaded: P2,
  remove: M2,
  abortUpload: U2,
  preview: S2,
  previewUnavailable: D2,
  home: T2,
  showMoreFolder: j2,
  moveTo: L2,
  folderEmpty: H2,
  selectAll: E2,
  view: A2,
  grid: z2,
  list: k2,
  open: R2,
  nothingHereYet: I2,
  name: O2,
  modified: G2,
  size: B2,
  deleteItemConfirm: V2,
  deleteItemsConfirm: W2,
  percentDone: _2,
  canceled: Y2,
  invalidFileName: K2,
  folderExists: q2,
  collapseNavigationPane: J2,
  expandNavigationPane: Z2
}, Q2 = "Nowy folder", ev = "Prześlij", nv = "Wklej", tv = "Zmień widok", iv = "Odśwież", rv = "Wytnij", ov = "Kopiuj", av = "Zmień nazwę", sv = "Pobierz", lv = "element zaznaczony", cv = "elementy zaznaczone", dv = "Anuluj", uv = "Wyczyść zaznaczenie", fv = "Zakończono", mv = "Jeśli zmienisz rozszerzenie pliku, może on stać się nieużyteczny. Czy na pewno chcesz to zrobić?", pv = "Nie", hv = "Tak", gv = "Zamknij", bv = "Typ pliku nie jest dozwolony.", vv = "Plik już istnieje.", Nv = "Maksymalny rozmiar przesyłanego pliku to", $v = "Przeciągnij pliki, aby je przesłać", yv = "Wybierz plik", Fv = "Przesyłanie nie powiodło się.", xv = "Przesyłanie", Cv = "Przesłano", wv = "Usuń", Pv = "Przerwij przesyłanie", Mv = "Podgląd", Uv = "Przepraszamy! Podgląd tego pliku nie jest dostępny.", Sv = "Strona główna", Dv = "Pokaż więcej folderów", Tv = "Przenieś do", jv = "Ten folder jest pusty.", Lv = "Zaznacz wszystko", Hv = "Widok", Ev = "Siatka", Av = "Lista", zv = "Otwórz", kv = "Nic tu jeszcze nie ma", Rv = "Nazwa", Iv = "Zmodyfikowano", Ov = "Rozmiar", Gv = 'Czy na pewno chcesz usunąć "{{fileName}}"?', Bv = "Czy na pewno chcesz usunąć te {{count}} elementy?", Vv = "{{percent}}% ukończono", Wv = "Anulowano", _v = 'Nazwa pliku nie może zawierać żadnego z następujących znaków: \\ / : * ? " < > |', Yv = 'To miejsce docelowe zawiera już folder o nazwie "{{renameFile}}".', Kv = "Zwiń panel nawigacyjny", qv = "Rozwiń panel nawigacyjny", Jv = {
  newFolder: Q2,
  upload: ev,
  paste: nv,
  changeView: tv,
  refresh: iv,
  cut: rv,
  copy: ov,
  rename: av,
  download: sv,
  delete: "Usuń",
  itemSelected: lv,
  itemsSelected: cv,
  cancel: dv,
  clearSelection: uv,
  completed: fv,
  fileNameChangeWarning: mv,
  no: pv,
  yes: hv,
  close: gv,
  fileTypeNotAllowed: bv,
  fileAlreadyExist: vv,
  maxUploadSize: Nv,
  dragFileToUpload: $v,
  chooseFile: yv,
  uploadFail: Fv,
  uploading: xv,
  uploaded: Cv,
  remove: wv,
  abortUpload: Pv,
  preview: Mv,
  previewUnavailable: Uv,
  home: Sv,
  showMoreFolder: Dv,
  moveTo: Tv,
  folderEmpty: jv,
  selectAll: Lv,
  view: Hv,
  grid: Ev,
  list: Av,
  open: zv,
  nothingHereYet: kv,
  name: Rv,
  modified: Iv,
  size: Ov,
  deleteItemConfirm: Gv,
  deleteItemsConfirm: Bv,
  percentDone: Vv,
  canceled: Wv,
  invalidFileName: _v,
  folderExists: Yv,
  collapseNavigationPane: Kv,
  expandNavigationPane: qv
}, Zv = {
  ar: { translation: Sr },
  de: { translation: Uo },
  en: { translation: Pa },
  es: { translation: Cs },
  fr: { translation: Fl },
  he: { translation: $c },
  hi: { translation: vd },
  it: { translation: gu },
  ja: { translation: hf },
  ko: { translation: mm },
  pt: { translation: up },
  ptpt: { translation: ch },
  ru: { translation: s1 },
  tr: { translation: ag },
  uk: { translation: r0 },
  ur: { translation: tb },
  vi: { translation: e2 },
  zh: { translation: X2 },
  pl: { translation: Jv }
}, Xv = (n = "en") => {
  re.isInitialized ? re.changeLanguage(n) : re.init({
    resources: Zv,
    lng: n,
    fallbackLng: "en",
    interpolation: {
      escapeValue: !1
    }
  });
}, wt = Pe(() => (n) => n), Qv = ({ children: n, language: e }) => {
  const [t, i] = L(() => re.t.bind(re));
  return X(() => {
    Xv(e), i(() => re.t.bind(re));
  }, [e]), /* @__PURE__ */ l(wt.Provider, { value: t, children: n }, void 0, !1, {
    fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/contexts/TranslationProvider.jsx",
    lineNumber: 14,
    columnNumber: 10
  }, void 0);
}, se = () => Me(wt), eN = ({ setShowToggleViewMenu: n, onLayoutChange: e }) => {
  const t = He(() => {
    n(!1);
  }), { activeLayout: i, setActiveLayout: r } = ve(), o = se(), a = [
    {
      key: "grid",
      name: o("grid"),
      icon: /* @__PURE__ */ l(pt, { size: 18 }, void 0, !1, {
        fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/Toolbar/LayoutToggler.jsx",
        lineNumber: 18,
        columnNumber: 13
      }, void 0)
    },
    {
      key: "list",
      name: o("list"),
      icon: /* @__PURE__ */ l(Ie, { size: 18 }, void 0, !1, {
        fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/Toolbar/LayoutToggler.jsx",
        lineNumber: 23,
        columnNumber: 13
      }, void 0)
    }
  ], s = (c) => {
    r(c), e(c), n(!1);
  };
  return /* @__PURE__ */ l("div", { ref: t.ref, className: "toggle-view", role: "dropdown", children: /* @__PURE__ */ l("ul", { role: "menu", "aria-orientation": "vertical", children: a.map((c) => /* @__PURE__ */ l(
    "li",
    {
      role: "menuitem",
      onClick: () => s(c.key),
      onKeyDown: () => s(c.key),
      children: [
        /* @__PURE__ */ l("span", { children: c.key === i && /* @__PURE__ */ l($t, { size: 13 }, void 0, !1, {
          fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/Toolbar/LayoutToggler.jsx",
          lineNumber: 43,
          columnNumber: 51
        }, void 0) }, void 0, !1, {
          fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/Toolbar/LayoutToggler.jsx",
          lineNumber: 43,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ l("span", { children: c.icon }, void 0, !1, {
          fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/Toolbar/LayoutToggler.jsx",
          lineNumber: 44,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ l("span", { children: c.name }, void 0, !1, {
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
}, Pt = Pe(), nN = ({ children: n, filesData: e, onError: t }) => {
  const [i, r] = L([]);
  X(() => {
    r(e);
  }, [e]);
  const o = (a) => a.isDirectory ? i.filter((s) => s.path === `${a.path}/${s.name}`) : [];
  return /* @__PURE__ */ l(Pt.Provider, { value: { files: i, setFiles: r, getChildren: o, onError: t }, children: n }, void 0, !1, {
    fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/contexts/FilesContext.jsx",
    lineNumber: 19,
    columnNumber: 5
  }, void 0);
}, qe = () => Me(Pt), tN = (n, e = "name", t = "asc") => {
  const i = n.filter((c) => c.isDirectory), r = n.filter((c) => !c.isDirectory), o = (c, d) => {
    let u = 0;
    switch (e) {
      case "name":
        u = c.name.localeCompare(d.name);
        break;
      case "size":
        const f = c.size || 0, h = d.size || 0;
        u = f - h;
        break;
      case "modified":
        const m = c.updatedAt ? new Date(c.updatedAt).getTime() : 0, p = d.updatedAt ? new Date(d.updatedAt).getTime() : 0;
        u = m - p;
        break;
      default:
        u = c.name.localeCompare(d.name);
    }
    return t === "asc" ? u : -u;
  }, a = [...i].sort(o), s = [...r].sort(o);
  return [...a, ...s];
}, Mt = Pe(), iN = ({ children: n, initialPath: e, onFolderChange: t }) => {
  const { files: i } = qe(), r = oe(!1), [o, a] = L(""), [s, c] = L(null), [d, u] = L([]), [f, h] = L({ key: "name", direction: "asc" });
  return X(() => {
    Array.isArray(i) && i.length > 0 ? (u(() => {
      const m = i.filter((p) => p.path === `${o}/${p.name}`);
      return tN(m, f.key, f.direction);
    }), c(() => i.find((m) => m.path === o) ?? null)) : (u([]), c(null));
  }, [i, o, f]), X(() => {
    if (!r.current && Array.isArray(i) && i.length > 0) {
      const m = i.some((p) => p.isDirectory && p.path === e) ? e : "";
      a(m), r.current = !0;
    }
  }, [i]), /* @__PURE__ */ l(
    Mt.Provider,
    {
      value: {
        currentPath: o,
        setCurrentPath: a,
        currentFolder: s,
        setCurrentFolder: c,
        currentPathFiles: d,
        setCurrentPathFiles: u,
        sortConfig: f,
        setSortConfig: h,
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
}, me = () => Me(Mt), ye = (n, e, ...t) => {
  try {
    if (typeof n == "function")
      n(...t);
    else
      throw new Error(
        `<FileManager /> Missing prop: Callback function "${e}" is required.`
      );
  } catch (i) {
    console.error(i.message);
  }
}, Ut = Pe(), rN = ({ children: n, onDownload: e, onSelect: t, onSelectionChange: i }) => {
  const [r, o] = L([]);
  X(() => {
    t == null || t(r), i == null || i(r);
  }, [r]);
  const a = () => {
    ye(e, "onDownload", r);
  };
  return /* @__PURE__ */ l(Ut.Provider, { value: { selectedFiles: r, setSelectedFiles: o, handleDownload: a }, children: n }, void 0, !1, {
    fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/contexts/SelectionContext.jsx",
    lineNumber: 19,
    columnNumber: 5
  }, void 0);
}, ge = () => Me(Ut), St = Pe(), oN = ({ children: n, onPaste: e, onCut: t, onCopy: i }) => {
  const [r, o] = L(null), { selectedFiles: a, setSelectedFiles: s } = ge(), c = (u) => {
    o({
      files: a,
      isMoving: u
    }), u ? t && t(a) : i && i(a);
  }, d = (u) => {
    if (u && !u.isDirectory) return;
    const f = r.files, h = r.isMoving ? "move" : "copy";
    ye(e, "onPaste", f, u, h), r.isMoving && o(null), s([]);
  };
  return /* @__PURE__ */ l(St.Provider, { value: { clipBoard: r, setClipBoard: o, handleCutCopy: c, handlePasting: d }, children: n }, void 0, !1, {
    fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/contexts/ClipboardContext.jsx",
    lineNumber: 38,
    columnNumber: 5
  }, void 0);
}, Je = () => Me(St), Dt = ({ onLayoutChange: n, onRefresh: e, triggerAction: t, permissions: i }) => {
  var P;
  const [r, o] = L(!1), { currentFolder: a } = me(), { selectedFiles: s, setSelectedFiles: c, handleDownload: d } = ge(), { clipBoard: u, setClipBoard: f, handleCutCopy: h, handlePasting: m } = Je(), { activeLayout: p } = ve(), v = se(), j = [
    {
      icon: /* @__PURE__ */ l(mt, { size: 17, strokeWidth: 0.3 }, void 0, !1, {
        fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/Toolbar/Toolbar.jsx",
        lineNumber: 32,
        columnNumber: 13
      }, void 0),
      text: v("newFolder"),
      permission: i.create,
      onClick: () => t.show("createFolder")
    },
    {
      icon: /* @__PURE__ */ l(vt, { size: 18 }, void 0, !1, {
        fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/Toolbar/Toolbar.jsx",
        lineNumber: 38,
        columnNumber: 13
      }, void 0),
      text: v("upload"),
      permission: i.upload,
      onClick: () => t.show("uploadFile")
    },
    {
      icon: /* @__PURE__ */ l(dn, { size: 18 }, void 0, !1, {
        fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/Toolbar/Toolbar.jsx",
        lineNumber: 44,
        columnNumber: 13
      }, void 0),
      text: v("paste"),
      permission: !!u,
      onClick: H
    }
  ], w = [
    {
      icon: p === "grid" ? /* @__PURE__ */ l(pt, { size: 16 }, void 0, !1, {
        fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/Toolbar/Toolbar.jsx",
        lineNumber: 53,
        columnNumber: 39
      }, void 0) : /* @__PURE__ */ l(Ie, { size: 16 }, void 0, !1, {
        fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/Toolbar/Toolbar.jsx",
        lineNumber: 53,
        columnNumber: 66
      }, void 0),
      title: v("changeView"),
      onClick: () => o((g) => !g)
    },
    {
      icon: /* @__PURE__ */ l(gt, { size: 16 }, void 0, !1, {
        fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/Toolbar/Toolbar.jsx",
        lineNumber: 58,
        columnNumber: 13
      }, void 0),
      title: v("refresh"),
      onClick: () => {
        ye(e, "onRefresh"), f(null);
      }
    }
  ];
  function H() {
    m(a);
  }
  const C = () => {
    d(), c([]);
  };
  return s.length > 0 ? /* @__PURE__ */ l("div", { className: "toolbar file-selected", children: /* @__PURE__ */ l("div", { className: "file-action-container", children: [
    /* @__PURE__ */ l("div", { children: [
      i.move && /* @__PURE__ */ l("button", { className: "item-action file-action", onClick: () => h(!0), children: [
        /* @__PURE__ */ l(ht, { size: 18 }, void 0, !1, {
          fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/Toolbar/Toolbar.jsx",
          lineNumber: 84,
          columnNumber: 17
        }, void 0),
        /* @__PURE__ */ l("span", { children: v("cut") }, void 0, !1, {
          fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/Toolbar/Toolbar.jsx",
          lineNumber: 85,
          columnNumber: 17
        }, void 0)
      ] }, void 0, !0, {
        fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/Toolbar/Toolbar.jsx",
        lineNumber: 83,
        columnNumber: 15
      }, void 0),
      i.copy && /* @__PURE__ */ l("button", { className: "item-action file-action", onClick: () => h(!1), children: [
        /* @__PURE__ */ l(ft, { strokeWidth: 0.1, size: 17 }, void 0, !1, {
          fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/Toolbar/Toolbar.jsx",
          lineNumber: 90,
          columnNumber: 17
        }, void 0),
        /* @__PURE__ */ l("span", { children: v("copy") }, void 0, !1, {
          fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/Toolbar/Toolbar.jsx",
          lineNumber: 91,
          columnNumber: 17
        }, void 0)
      ] }, void 0, !0, {
        fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/Toolbar/Toolbar.jsx",
        lineNumber: 89,
        columnNumber: 15
      }, void 0),
      ((P = u == null ? void 0 : u.files) == null ? void 0 : P.length) > 0 && /* @__PURE__ */ l(
        "button",
        {
          className: "item-action file-action",
          onClick: H,
          children: [
            /* @__PURE__ */ l(dn, { size: 18 }, void 0, !1, {
              fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/Toolbar/Toolbar.jsx",
              lineNumber: 100,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ l("span", { children: v("paste") }, void 0, !1, {
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
      s.length === 1 && i.rename && /* @__PURE__ */ l(
        "button",
        {
          className: "item-action file-action",
          onClick: () => t.show("rename"),
          children: [
            /* @__PURE__ */ l(Nt, { size: 19 }, void 0, !1, {
              fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/Toolbar/Toolbar.jsx",
              lineNumber: 109,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ l("span", { children: v("rename") }, void 0, !1, {
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
      i.download && /* @__PURE__ */ l("button", { className: "item-action file-action", onClick: C, children: [
        /* @__PURE__ */ l(pn, { size: 19 }, void 0, !1, {
          fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/Toolbar/Toolbar.jsx",
          lineNumber: 115,
          columnNumber: 17
        }, void 0),
        /* @__PURE__ */ l("span", { children: v("download") }, void 0, !1, {
          fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/Toolbar/Toolbar.jsx",
          lineNumber: 116,
          columnNumber: 17
        }, void 0)
      ] }, void 0, !0, {
        fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/Toolbar/Toolbar.jsx",
        lineNumber: 114,
        columnNumber: 15
      }, void 0),
      i.delete && /* @__PURE__ */ l(
        "button",
        {
          className: "item-action file-action",
          onClick: () => t.show("delete"),
          children: [
            /* @__PURE__ */ l(bt, { size: 19 }, void 0, !1, {
              fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/Toolbar/Toolbar.jsx",
              lineNumber: 124,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ l("span", { children: v("delete") }, void 0, !1, {
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
    /* @__PURE__ */ l(
      "button",
      {
        className: "item-action file-action",
        title: v("clearSelection"),
        onClick: () => c([]),
        children: [
          /* @__PURE__ */ l("span", { children: [
            s.length,
            " ",
            v(s.length > 1 ? "itemsSelected" : "itemSelected")
          ] }, void 0, !0, {
            fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/Toolbar/Toolbar.jsx",
            lineNumber: 134,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ l(ei, { size: 18 }, void 0, !1, {
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
  }, void 0) : /* @__PURE__ */ l("div", { className: "toolbar", children: /* @__PURE__ */ l("div", { className: "fm-toolbar", children: [
    /* @__PURE__ */ l("div", { children: j.filter((g) => g.permission).map((g, S) => /* @__PURE__ */ l("button", { className: "item-action", onClick: g.onClick, children: [
      g.icon,
      /* @__PURE__ */ l("span", { children: g.text }, void 0, !1, {
        fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/Toolbar/Toolbar.jsx",
        lineNumber: 155,
        columnNumber: 17
      }, void 0)
    ] }, S, !0, {
      fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/Toolbar/Toolbar.jsx",
      lineNumber: 153,
      columnNumber: 15
    }, void 0)) }, void 0, !1, {
      fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/Toolbar/Toolbar.jsx",
      lineNumber: 149,
      columnNumber: 9
    }, void 0),
    /* @__PURE__ */ l("div", { children: [
      w.map((g, S) => /* @__PURE__ */ l("div", { className: "toolbar-left-items", children: [
        /* @__PURE__ */ l("button", { className: "item-action icon-only", title: g.title, onClick: g.onClick, children: g.icon }, void 0, !1, {
          fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/Toolbar/Toolbar.jsx",
          lineNumber: 162,
          columnNumber: 15
        }, void 0),
        S !== w.length - 1 && /* @__PURE__ */ l("div", { className: "item-separator" }, void 0, !1, {
          fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/Toolbar/Toolbar.jsx",
          lineNumber: 165,
          columnNumber: 58
        }, void 0)
      ] }, S, !0, {
        fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/Toolbar/Toolbar.jsx",
        lineNumber: 161,
        columnNumber: 13
      }, void 0)),
      r && /* @__PURE__ */ l(
        eN,
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
Dt.displayName = "Toolbar";
var aN = process.env.NODE_ENV === "production";
function sN(n, e) {
  if (!aN) {
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
var lN = class extends Error {
  constructor(n) {
    super(`react-collapsed: ${n}`);
  }
}, We = (...n) => sN(n[0], `[react-collapsed] -- ${n[1]}`);
function Tt(n) {
  const e = oe(n);
  return X(() => {
    e.current = n;
  }), ct((...t) => {
    var i;
    return (i = e.current) == null ? void 0 : i.call(e, ...t);
  }, []);
}
function cN(n, e, t) {
  const [i, r] = L(e), o = oe(typeof n < "u"), a = o.current ? n : i, s = Tt(t), c = ct(
    (d) => {
      const f = typeof d == "function" ? d(a) : d;
      o.current || r(f), s == null || s(f);
    },
    [s, a]
  );
  return X(() => {
    We(
      !(o.current && n == null),
      "`isExpanded` state is changing from controlled to uncontrolled. useCollapse should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled collapse for the lifetime of the component. Check the `isExpanded` prop."
    ), We(
      !(!o.current && n != null),
      "`isExpanded` state is changing from uncontrolled to controlled. useCollapse should not switch from uncontrolled to controlled (or vice versa). Decide between using a controlled or uncontrolled collapse for the lifetime of the component. Check the `isExpanded` prop."
    );
  }, [n]), [a, c];
}
var dN = "(prefers-reduced-motion: reduce)";
function uN() {
  const [n, e] = L(!1);
  return X(() => {
    if (typeof window > "u" || typeof window.matchMedia != "function")
      return;
    const t = window.matchMedia(dN);
    e(t.matches);
    const i = (r) => {
      e(r.matches);
    };
    if (t.addEventListener)
      return t.addEventListener("change", i), () => {
        t.removeEventListener("change", i);
      };
    if (t.addListener)
      return t.addListener(i), () => {
        t.removeListener(i);
      };
  }, []), n;
}
var fN = Te.useId || (() => {
});
function mN() {
  return fN() ?? "";
}
var pN = typeof window < "u" ? Te.useLayoutEffect : Te.useEffect, en = !1, hN = 0, Gn = () => ++hN;
function gN(n) {
  const e = n || (en ? Gn() : null), [t, i] = Te.useState(e);
  return pN(() => {
    t === null && i(Gn());
  }, []), Te.useEffect(() => {
    en === !1 && (en = !0);
  }, []), t != null ? String(t) : void 0;
}
function bN(n) {
  const e = mN(), t = gN(n);
  return typeof n == "string" ? n : typeof e == "string" ? e : t;
}
function vN(n, e) {
  const t = performance.now(), i = {};
  function r() {
    i.id = requestAnimationFrame((o) => {
      o - t > e ? n() : r();
    });
  }
  return r(), i;
}
function Bn(n) {
  n.id && cancelAnimationFrame(n.id);
}
function Vn(n) {
  return n != null && n.current ? n.current.scrollHeight : (We(
    !0,
    "Was not able to find a ref to the collapse element via `getCollapseProps`. Ensure that the element exposes its `ref` prop. If it exposes the ref prop under a different name (like `innerRef`), use the `refKey` property to change it. Example:\n\nconst collapseProps = getCollapseProps({refKey: 'innerRef'})"
  ), 0);
}
function NN(n) {
  if (!n || typeof n == "string")
    return 0;
  const e = n / 36;
  return Math.round((4 + 15 * e ** 0.25 + e / 5) * 10);
}
function $N(n, e) {
  if (n != null)
    if (typeof n == "function")
      n(e);
    else
      try {
        n.current = e;
      } catch {
        throw new lN(`Cannot assign value "${e}" to ref "${n}"`);
      }
}
function Wn(...n) {
  return n.every((e) => e == null) ? null : (e) => {
    n.forEach((t) => {
      $N(t, e);
    });
  };
}
function yN(n) {
  let e = (t) => {
  };
  e = (t) => {
    if (!(t != null && t.current))
      return;
    const { paddingTop: i, paddingBottom: r } = window.getComputedStyle(t.current);
    We(
      !(i && i !== "0px" || r && r !== "0px"),
      `Padding applied to the collapse element will cause the animation to break and not perform as expected. To fix, apply equivalent padding to the direct descendent of the collapse element. Example:

Before:   <div {...getCollapseProps({style: {padding: 10}})}>{children}</div>

After:   <div {...getCollapseProps()}>
             <div style={{padding: 10}}>
                 {children}
             </div>
          </div>`
    );
  }, X(() => {
    e(n);
  }, [n]);
}
var FN = typeof window > "u" ? X : Vt;
function xN({
  duration: n,
  easing: e = "cubic-bezier(0.4, 0, 0.2, 1)",
  onTransitionStateChange: t = () => {
  },
  isExpanded: i,
  defaultExpanded: r = !1,
  hasDisabledAnimation: o,
  id: a,
  ...s
} = {}) {
  const c = Tt(t), d = bN(a ? `${a}` : void 0), [u, f] = cN(
    i,
    r
  ), h = oe(u), [m, p] = L(!1), v = uN(), j = o ?? v, w = oe(), H = oe(), C = oe(null), [P, g] = L(null);
  yN(C);
  const S = `${s.collapsedHeight || 0}px`;
  function F(y) {
    if (!C.current)
      return;
    const b = C.current;
    for (const N in y) {
      const M = y[N];
      M ? b.style[N] = M : b.style.removeProperty(N);
    }
  }
  return FN(() => {
    if (!C.current || u === h.current)
      return;
    h.current = u;
    function b(T) {
      return j ? 0 : n ?? NN(T);
    }
    const N = (T) => `height ${b(T)}ms ${e}`, M = (T) => {
      function D() {
        u ? (F({
          height: "",
          overflow: "",
          transition: "",
          display: ""
        }), c("expandEnd")) : (F({ transition: "" }), c("collapseEnd")), p(!1);
      }
      H.current && Bn(H.current), H.current = vN(D, T);
    };
    return p(!0), u ? w.current = requestAnimationFrame(() => {
      c("expandStart"), F({
        display: "block",
        overflow: "hidden",
        height: S
      }), w.current = requestAnimationFrame(() => {
        c("expanding");
        const T = Vn(C);
        M(b(T)), C.current && (C.current.style.transition = N(T), C.current.style.height = `${T}px`);
      });
    }) : w.current = requestAnimationFrame(() => {
      c("collapseStart");
      const T = Vn(C);
      M(b(T)), F({
        transition: N(T),
        height: `${T}px`
      }), w.current = requestAnimationFrame(() => {
        c("collapsing"), F({
          height: S,
          overflow: "hidden"
        });
      });
    }), () => {
      w.current && cancelAnimationFrame(w.current), H.current && Bn(H.current);
    };
  }, [
    u,
    S,
    j,
    n,
    e,
    c
  ]), {
    isExpanded: u,
    setExpanded: f,
    getToggleProps(y) {
      const { disabled: b, onClick: N, refKey: M, ...T } = {
        refKey: "ref",
        onClick() {
        },
        disabled: !1,
        ...y
      }, D = P ? P.tagName === "BUTTON" : void 0, E = y == null ? void 0 : y[M || "ref"], Z = {
        id: `react-collapsed-toggle-${d}`,
        "aria-controls": `react-collapsed-panel-${d}`,
        "aria-expanded": u,
        onClick(ie) {
          b || (N == null || N(ie), f((Q) => !Q));
        },
        [M || "ref"]: Wn(E, g)
      }, _ = {
        type: "button",
        disabled: b ? !0 : void 0
      }, J = {
        "aria-disabled": b ? !0 : void 0,
        role: "button",
        tabIndex: b ? -1 : 0
      };
      return D === !1 ? { ...Z, ...J, ...T } : D === !0 ? { ...Z, ..._, ...T } : {
        ...Z,
        ..._,
        ...J,
        ...T
      };
    },
    getCollapseProps(y) {
      const { style: b, refKey: N } = { refKey: "ref", style: {}, ...y }, M = y == null ? void 0 : y[N || "ref"];
      return {
        id: `react-collapsed-panel-${d}`,
        "aria-hidden": !u,
        "aria-labelledby": `react-collapsed-toggle-${d}`,
        role: "region",
        ...y,
        [N || "ref"]: Wn(C, M),
        style: {
          boxSizing: "border-box",
          ...!m && !u ? {
            // collapsed and not animating
            display: S === "0px" ? "none" : "block",
            height: S,
            overflow: "hidden"
          } : {},
          // additional styles passed, e.g. getCollapseProps({style: {}})
          ...b
        }
      };
    }
  };
}
const CN = ({ open: n, children: e }) => {
  const [t, i] = L(n), { getCollapseProps: r } = xN({
    isExpanded: t,
    duration: 500
  });
  return X(() => {
    i(n);
  }, [n, i]), /* @__PURE__ */ l(fe, { children: /* @__PURE__ */ l("div", { ...r(), children: e }, void 0, !1, {
    fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/components/Collapse/Collapse.jsx",
    lineNumber: 17,
    columnNumber: 7
  }, void 0) }, void 0, !1, {
    fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/components/Collapse/Collapse.jsx",
    lineNumber: 16,
    columnNumber: 5
  }, void 0);
};
function wN(n) {
  return G({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z" }, child: [] }] })(n);
}
function PN(n) {
  return G({ attr: { viewBox: "0 0 384 512" }, child: [{ tag: "path", attr: { d: "M288 248v28c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-28c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12zm-12 72H108c-6.6 0-12 5.4-12 12v28c0 6.6 5.4 12 12 12h168c6.6 0 12-5.4 12-12v-28c0-6.6-5.4-12-12-12zm108-188.1V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V48C0 21.5 21.5 0 48 0h204.1C264.8 0 277 5.1 286 14.1L369.9 98c9 8.9 14.1 21.2 14.1 33.9zm-128-80V128h76.1L256 51.9zM336 464V176H232c-13.3 0-24-10.7-24-24V48H48v416h288z" }, child: [] }] })(n);
}
function _n(n) {
  return G({ attr: { viewBox: "0 0 576 512" }, child: [{ tag: "path", attr: { d: "M527.9 224H480v-48c0-26.5-21.5-48-48-48H272l-64-64H48C21.5 64 0 85.5 0 112v288c0 26.5 21.5 48 48 48h400c16.5 0 31.9-8.5 40.7-22.6l79.9-128c20-31.9-3-73.4-40.7-73.4zM48 118c0-3.3 2.7-6 6-6h134.1l64 64H426c3.3 0 6 2.7 6 6v42H152c-16.8 0-32.4 8.8-41.1 23.2L48 351.4zm400 282H72l77.2-128H528z" }, child: [] }] })(n);
}
function Yn(n) {
  return G({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M464 128H272l-54.63-54.63c-6-6-14.14-9.37-22.63-9.37H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V176c0-26.51-21.49-48-48-48zm0 272H48V112h140.12l54.63 54.63c6 6 14.14 9.37 22.63 9.37H464v224z" }, child: [] }] })(n);
}
const jt = ({ folder: n, onFileOpen: e }) => {
  const [t, i] = L(!1), [r, o] = L(!1), { currentPath: a, setCurrentPath: s, onFolderChange: c } = me(), d = () => {
    o(!0), e(n), s(n.path), c == null || c(n.path);
  }, u = (f) => {
    f.stopPropagation(), i((h) => !h);
  };
  return X(() => {
    o(a === n.path);
    const f = a.split("/");
    f.pop(), f.join("/") === n.path && i(!0);
  }, [a]), n.subDirectories.length > 0 ? /* @__PURE__ */ l(fe, { children: [
    /* @__PURE__ */ l(
      "div",
      {
        className: `sb-folders-list-item ${r ? "active-list-item" : ""}`,
        onClick: d,
        children: [
          /* @__PURE__ */ l("span", { onClick: u, children: /* @__PURE__ */ l(
            ni,
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
          /* @__PURE__ */ l("div", { className: "sb-folder-details", children: [
            t || r ? /* @__PURE__ */ l(_n, { size: 20, className: "folder-open-icon" }, void 0, !1, {
              fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/NavigationPane/FolderTree.jsx",
              lineNumber: 54,
              columnNumber: 15
            }, void 0) : /* @__PURE__ */ l(Yn, { size: 17, className: "folder-close-icon" }, void 0, !1, {
              fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/NavigationPane/FolderTree.jsx",
              lineNumber: 56,
              columnNumber: 15
            }, void 0),
            /* @__PURE__ */ l("span", { className: "sb-folder-name", title: n.name, children: n.name }, void 0, !1, {
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
    /* @__PURE__ */ l(CN, { open: t, children: /* @__PURE__ */ l("div", { className: "folder-collapsible", children: n.subDirectories.map((f, h) => /* @__PURE__ */ l(jt, { folder: f, onFileOpen: e }, h, !1, {
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
  }, void 0) : /* @__PURE__ */ l(
    "div",
    {
      className: `sb-folders-list-item ${r ? "active-list-item" : ""}`,
      onClick: d,
      children: [
        /* @__PURE__ */ l("span", { className: "non-expanable" }, void 0, !1, {
          fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/NavigationPane/FolderTree.jsx",
          lineNumber: 78,
          columnNumber: 9
        }, void 0),
        /* @__PURE__ */ l("div", { className: "sb-folder-details", children: [
          r ? /* @__PURE__ */ l(_n, { size: 20, className: "folder-open-icon" }, void 0, !1, {
            fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/NavigationPane/FolderTree.jsx",
            lineNumber: 81,
            columnNumber: 13
          }, void 0) : /* @__PURE__ */ l(Yn, { size: 17, className: "folder-close-icon" }, void 0, !1, {
            fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/NavigationPane/FolderTree.jsx",
            lineNumber: 83,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ l("span", { className: "sb-folder-name", title: n.name, children: n.name }, void 0, !1, {
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
}, MN = (n) => n == null ? void 0 : n.split("/").slice(0, -1).join("/"), Lt = ({ onFileOpen: n }) => {
  const [e, t] = L([]), { files: i } = qe(), r = se(), o = (a, s) => {
    var c;
    return s[a] ? (c = s[a]) == null ? void 0 : c.map((d) => ({
      ...d,
      subDirectories: o(d.path, s)
    })) : [];
  };
  return X(() => {
    if (Array.isArray(i)) {
      const a = i.filter((c) => c.isDirectory), s = Object.groupBy(a, ({ path: c }) => MN(c));
      t(() => o("", s));
    }
  }, [i]), /* @__PURE__ */ l("div", { className: "sb-folders-list", children: (e == null ? void 0 : e.length) > 0 ? /* @__PURE__ */ l(fe, { children: e == null ? void 0 : e.map((a, s) => /* @__PURE__ */ l(jt, { folder: a, onFileOpen: n }, s, !1, {
    fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/NavigationPane/NavigationPane.jsx",
    lineNumber: 41,
    columnNumber: 20
  }, void 0)) }, void 0, !1, {
    fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/NavigationPane/NavigationPane.jsx",
    lineNumber: 39,
    columnNumber: 9
  }, void 0) : /* @__PURE__ */ l("div", { className: "empty-nav-pane", children: r("nothingHereYet") }, void 0, !1, {
    fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/NavigationPane/NavigationPane.jsx",
    lineNumber: 45,
    columnNumber: 9
  }, void 0) }, void 0, !1, {
    fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/NavigationPane/NavigationPane.jsx",
    lineNumber: 37,
    columnNumber: 5
  }, void 0);
};
Lt.displayName = "NavigationPane";
function UN(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var Ae = { exports: {} }, ze = { exports: {} }, ee = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Kn;
function SN() {
  if (Kn) return ee;
  Kn = 1;
  var n = typeof Symbol == "function" && Symbol.for, e = n ? Symbol.for("react.element") : 60103, t = n ? Symbol.for("react.portal") : 60106, i = n ? Symbol.for("react.fragment") : 60107, r = n ? Symbol.for("react.strict_mode") : 60108, o = n ? Symbol.for("react.profiler") : 60114, a = n ? Symbol.for("react.provider") : 60109, s = n ? Symbol.for("react.context") : 60110, c = n ? Symbol.for("react.async_mode") : 60111, d = n ? Symbol.for("react.concurrent_mode") : 60111, u = n ? Symbol.for("react.forward_ref") : 60112, f = n ? Symbol.for("react.suspense") : 60113, h = n ? Symbol.for("react.suspense_list") : 60120, m = n ? Symbol.for("react.memo") : 60115, p = n ? Symbol.for("react.lazy") : 60116, v = n ? Symbol.for("react.block") : 60121, j = n ? Symbol.for("react.fundamental") : 60117, w = n ? Symbol.for("react.responder") : 60118, H = n ? Symbol.for("react.scope") : 60119;
  function C(g) {
    if (typeof g == "object" && g !== null) {
      var S = g.$$typeof;
      switch (S) {
        case e:
          switch (g = g.type, g) {
            case c:
            case d:
            case i:
            case o:
            case r:
            case f:
              return g;
            default:
              switch (g = g && g.$$typeof, g) {
                case s:
                case u:
                case p:
                case m:
                case a:
                  return g;
                default:
                  return S;
              }
          }
        case t:
          return S;
      }
    }
  }
  function P(g) {
    return C(g) === d;
  }
  return ee.AsyncMode = c, ee.ConcurrentMode = d, ee.ContextConsumer = s, ee.ContextProvider = a, ee.Element = e, ee.ForwardRef = u, ee.Fragment = i, ee.Lazy = p, ee.Memo = m, ee.Portal = t, ee.Profiler = o, ee.StrictMode = r, ee.Suspense = f, ee.isAsyncMode = function(g) {
    return P(g) || C(g) === c;
  }, ee.isConcurrentMode = P, ee.isContextConsumer = function(g) {
    return C(g) === s;
  }, ee.isContextProvider = function(g) {
    return C(g) === a;
  }, ee.isElement = function(g) {
    return typeof g == "object" && g !== null && g.$$typeof === e;
  }, ee.isForwardRef = function(g) {
    return C(g) === u;
  }, ee.isFragment = function(g) {
    return C(g) === i;
  }, ee.isLazy = function(g) {
    return C(g) === p;
  }, ee.isMemo = function(g) {
    return C(g) === m;
  }, ee.isPortal = function(g) {
    return C(g) === t;
  }, ee.isProfiler = function(g) {
    return C(g) === o;
  }, ee.isStrictMode = function(g) {
    return C(g) === r;
  }, ee.isSuspense = function(g) {
    return C(g) === f;
  }, ee.isValidElementType = function(g) {
    return typeof g == "string" || typeof g == "function" || g === i || g === d || g === o || g === r || g === f || g === h || typeof g == "object" && g !== null && (g.$$typeof === p || g.$$typeof === m || g.$$typeof === a || g.$$typeof === s || g.$$typeof === u || g.$$typeof === j || g.$$typeof === w || g.$$typeof === H || g.$$typeof === v);
  }, ee.typeOf = C, ee;
}
var ne = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qn;
function DN() {
  return qn || (qn = 1, process.env.NODE_ENV !== "production" && (function() {
    var n = typeof Symbol == "function" && Symbol.for, e = n ? Symbol.for("react.element") : 60103, t = n ? Symbol.for("react.portal") : 60106, i = n ? Symbol.for("react.fragment") : 60107, r = n ? Symbol.for("react.strict_mode") : 60108, o = n ? Symbol.for("react.profiler") : 60114, a = n ? Symbol.for("react.provider") : 60109, s = n ? Symbol.for("react.context") : 60110, c = n ? Symbol.for("react.async_mode") : 60111, d = n ? Symbol.for("react.concurrent_mode") : 60111, u = n ? Symbol.for("react.forward_ref") : 60112, f = n ? Symbol.for("react.suspense") : 60113, h = n ? Symbol.for("react.suspense_list") : 60120, m = n ? Symbol.for("react.memo") : 60115, p = n ? Symbol.for("react.lazy") : 60116, v = n ? Symbol.for("react.block") : 60121, j = n ? Symbol.for("react.fundamental") : 60117, w = n ? Symbol.for("react.responder") : 60118, H = n ? Symbol.for("react.scope") : 60119;
    function C(U) {
      return typeof U == "string" || typeof U == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      U === i || U === d || U === o || U === r || U === f || U === h || typeof U == "object" && U !== null && (U.$$typeof === p || U.$$typeof === m || U.$$typeof === a || U.$$typeof === s || U.$$typeof === u || U.$$typeof === j || U.$$typeof === w || U.$$typeof === H || U.$$typeof === v);
    }
    function P(U) {
      if (typeof U == "object" && U !== null) {
        var le = U.$$typeof;
        switch (le) {
          case e:
            var Ne = U.type;
            switch (Ne) {
              case c:
              case d:
              case i:
              case o:
              case r:
              case f:
                return Ne;
              default:
                var Ue = Ne && Ne.$$typeof;
                switch (Ue) {
                  case s:
                  case u:
                  case p:
                  case m:
                  case a:
                    return Ue;
                  default:
                    return le;
                }
            }
          case t:
            return le;
        }
      }
    }
    var g = c, S = d, F = s, y = a, b = e, N = u, M = i, T = p, D = m, E = t, Z = o, _ = r, J = f, ie = !1;
    function Q(U) {
      return ie || (ie = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), $(U) || P(U) === c;
    }
    function $(U) {
      return P(U) === d;
    }
    function x(U) {
      return P(U) === s;
    }
    function k(U) {
      return P(U) === a;
    }
    function I(U) {
      return typeof U == "object" && U !== null && U.$$typeof === e;
    }
    function R(U) {
      return P(U) === u;
    }
    function W(U) {
      return P(U) === i;
    }
    function B(U) {
      return P(U) === p;
    }
    function V(U) {
      return P(U) === m;
    }
    function Y(U) {
      return P(U) === t;
    }
    function K(U) {
      return P(U) === o;
    }
    function A(U) {
      return P(U) === r;
    }
    function te(U) {
      return P(U) === f;
    }
    ne.AsyncMode = g, ne.ConcurrentMode = S, ne.ContextConsumer = F, ne.ContextProvider = y, ne.Element = b, ne.ForwardRef = N, ne.Fragment = M, ne.Lazy = T, ne.Memo = D, ne.Portal = E, ne.Profiler = Z, ne.StrictMode = _, ne.Suspense = J, ne.isAsyncMode = Q, ne.isConcurrentMode = $, ne.isContextConsumer = x, ne.isContextProvider = k, ne.isElement = I, ne.isForwardRef = R, ne.isFragment = W, ne.isLazy = B, ne.isMemo = V, ne.isPortal = Y, ne.isProfiler = K, ne.isStrictMode = A, ne.isSuspense = te, ne.isValidElementType = C, ne.typeOf = P;
  })()), ne;
}
var Jn;
function Ht() {
  return Jn || (Jn = 1, process.env.NODE_ENV === "production" ? ze.exports = SN() : ze.exports = DN()), ze.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var nn, Zn;
function TN() {
  if (Zn) return nn;
  Zn = 1;
  var n = Object.getOwnPropertySymbols, e = Object.prototype.hasOwnProperty, t = Object.prototype.propertyIsEnumerable;
  function i(o) {
    if (o == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(o);
  }
  function r() {
    try {
      if (!Object.assign)
        return !1;
      var o = new String("abc");
      if (o[5] = "de", Object.getOwnPropertyNames(o)[0] === "5")
        return !1;
      for (var a = {}, s = 0; s < 10; s++)
        a["_" + String.fromCharCode(s)] = s;
      var c = Object.getOwnPropertyNames(a).map(function(u) {
        return a[u];
      });
      if (c.join("") !== "0123456789")
        return !1;
      var d = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(u) {
        d[u] = u;
      }), Object.keys(Object.assign({}, d)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return nn = r() ? Object.assign : function(o, a) {
    for (var s, c = i(o), d, u = 1; u < arguments.length; u++) {
      s = Object(arguments[u]);
      for (var f in s)
        e.call(s, f) && (c[f] = s[f]);
      if (n) {
        d = n(s);
        for (var h = 0; h < d.length; h++)
          t.call(s, d[h]) && (c[d[h]] = s[d[h]]);
      }
    }
    return c;
  }, nn;
}
var tn, Xn;
function hn() {
  if (Xn) return tn;
  Xn = 1;
  var n = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return tn = n, tn;
}
var rn, Qn;
function Et() {
  return Qn || (Qn = 1, rn = Function.call.bind(Object.prototype.hasOwnProperty)), rn;
}
var on, et;
function jN() {
  if (et) return on;
  et = 1;
  var n = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var e = /* @__PURE__ */ hn(), t = {}, i = /* @__PURE__ */ Et();
    n = function(o) {
      var a = "Warning: " + o;
      typeof console < "u" && console.error(a);
      try {
        throw new Error(a);
      } catch {
      }
    };
  }
  function r(o, a, s, c, d) {
    if (process.env.NODE_ENV !== "production") {
      for (var u in o)
        if (i(o, u)) {
          var f;
          try {
            if (typeof o[u] != "function") {
              var h = Error(
                (c || "React class") + ": " + s + " type `" + u + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof o[u] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw h.name = "Invariant Violation", h;
            }
            f = o[u](a, u, c, s, null, e);
          } catch (p) {
            f = p;
          }
          if (f && !(f instanceof Error) && n(
            (c || "React class") + ": type specification of " + s + " `" + u + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof f + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), f instanceof Error && !(f.message in t)) {
            t[f.message] = !0;
            var m = d ? d() : "";
            n(
              "Failed " + s + " type: " + f.message + (m ?? "")
            );
          }
        }
    }
  }
  return r.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (t = {});
  }, on = r, on;
}
var an, nt;
function LN() {
  if (nt) return an;
  nt = 1;
  var n = Ht(), e = TN(), t = /* @__PURE__ */ hn(), i = /* @__PURE__ */ Et(), r = /* @__PURE__ */ jN(), o = function() {
  };
  process.env.NODE_ENV !== "production" && (o = function(s) {
    var c = "Warning: " + s;
    typeof console < "u" && console.error(c);
    try {
      throw new Error(c);
    } catch {
    }
  });
  function a() {
    return null;
  }
  return an = function(s, c) {
    var d = typeof Symbol == "function" && Symbol.iterator, u = "@@iterator";
    function f($) {
      var x = $ && (d && $[d] || $[u]);
      if (typeof x == "function")
        return x;
    }
    var h = "<<anonymous>>", m = {
      array: w("array"),
      bigint: w("bigint"),
      bool: w("boolean"),
      func: w("function"),
      number: w("number"),
      object: w("object"),
      string: w("string"),
      symbol: w("symbol"),
      any: H(),
      arrayOf: C,
      element: P(),
      elementType: g(),
      instanceOf: S,
      node: N(),
      objectOf: y,
      oneOf: F,
      oneOfType: b,
      shape: T,
      exact: D
    };
    function p($, x) {
      return $ === x ? $ !== 0 || 1 / $ === 1 / x : $ !== $ && x !== x;
    }
    function v($, x) {
      this.message = $, this.data = x && typeof x == "object" ? x : {}, this.stack = "";
    }
    v.prototype = Error.prototype;
    function j($) {
      if (process.env.NODE_ENV !== "production")
        var x = {}, k = 0;
      function I(W, B, V, Y, K, A, te) {
        if (Y = Y || h, A = A || V, te !== t) {
          if (c) {
            var U = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw U.name = "Invariant Violation", U;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var le = Y + ":" + V;
            !x[le] && // Avoid spamming the console because they are often not actionable except for lib authors
            k < 3 && (o(
              "You are manually calling a React.PropTypes validation function for the `" + A + "` prop on `" + Y + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), x[le] = !0, k++);
          }
        }
        return B[V] == null ? W ? B[V] === null ? new v("The " + K + " `" + A + "` is marked as required " + ("in `" + Y + "`, but its value is `null`.")) : new v("The " + K + " `" + A + "` is marked as required in " + ("`" + Y + "`, but its value is `undefined`.")) : null : $(B, V, Y, K, A);
      }
      var R = I.bind(null, !1);
      return R.isRequired = I.bind(null, !0), R;
    }
    function w($) {
      function x(k, I, R, W, B, V) {
        var Y = k[I], K = _(Y);
        if (K !== $) {
          var A = J(Y);
          return new v(
            "Invalid " + W + " `" + B + "` of type " + ("`" + A + "` supplied to `" + R + "`, expected ") + ("`" + $ + "`."),
            { expectedType: $ }
          );
        }
        return null;
      }
      return j(x);
    }
    function H() {
      return j(a);
    }
    function C($) {
      function x(k, I, R, W, B) {
        if (typeof $ != "function")
          return new v("Property `" + B + "` of component `" + R + "` has invalid PropType notation inside arrayOf.");
        var V = k[I];
        if (!Array.isArray(V)) {
          var Y = _(V);
          return new v("Invalid " + W + " `" + B + "` of type " + ("`" + Y + "` supplied to `" + R + "`, expected an array."));
        }
        for (var K = 0; K < V.length; K++) {
          var A = $(V, K, R, W, B + "[" + K + "]", t);
          if (A instanceof Error)
            return A;
        }
        return null;
      }
      return j(x);
    }
    function P() {
      function $(x, k, I, R, W) {
        var B = x[k];
        if (!s(B)) {
          var V = _(B);
          return new v("Invalid " + R + " `" + W + "` of type " + ("`" + V + "` supplied to `" + I + "`, expected a single ReactElement."));
        }
        return null;
      }
      return j($);
    }
    function g() {
      function $(x, k, I, R, W) {
        var B = x[k];
        if (!n.isValidElementType(B)) {
          var V = _(B);
          return new v("Invalid " + R + " `" + W + "` of type " + ("`" + V + "` supplied to `" + I + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return j($);
    }
    function S($) {
      function x(k, I, R, W, B) {
        if (!(k[I] instanceof $)) {
          var V = $.name || h, Y = Q(k[I]);
          return new v("Invalid " + W + " `" + B + "` of type " + ("`" + Y + "` supplied to `" + R + "`, expected ") + ("instance of `" + V + "`."));
        }
        return null;
      }
      return j(x);
    }
    function F($) {
      if (!Array.isArray($))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? o(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : o("Invalid argument supplied to oneOf, expected an array.")), a;
      function x(k, I, R, W, B) {
        for (var V = k[I], Y = 0; Y < $.length; Y++)
          if (p(V, $[Y]))
            return null;
        var K = JSON.stringify($, function(te, U) {
          var le = J(U);
          return le === "symbol" ? String(U) : U;
        });
        return new v("Invalid " + W + " `" + B + "` of value `" + String(V) + "` " + ("supplied to `" + R + "`, expected one of " + K + "."));
      }
      return j(x);
    }
    function y($) {
      function x(k, I, R, W, B) {
        if (typeof $ != "function")
          return new v("Property `" + B + "` of component `" + R + "` has invalid PropType notation inside objectOf.");
        var V = k[I], Y = _(V);
        if (Y !== "object")
          return new v("Invalid " + W + " `" + B + "` of type " + ("`" + Y + "` supplied to `" + R + "`, expected an object."));
        for (var K in V)
          if (i(V, K)) {
            var A = $(V, K, R, W, B + "." + K, t);
            if (A instanceof Error)
              return A;
          }
        return null;
      }
      return j(x);
    }
    function b($) {
      if (!Array.isArray($))
        return process.env.NODE_ENV !== "production" && o("Invalid argument supplied to oneOfType, expected an instance of array."), a;
      for (var x = 0; x < $.length; x++) {
        var k = $[x];
        if (typeof k != "function")
          return o(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + ie(k) + " at index " + x + "."
          ), a;
      }
      function I(R, W, B, V, Y) {
        for (var K = [], A = 0; A < $.length; A++) {
          var te = $[A], U = te(R, W, B, V, Y, t);
          if (U == null)
            return null;
          U.data && i(U.data, "expectedType") && K.push(U.data.expectedType);
        }
        var le = K.length > 0 ? ", expected one of type [" + K.join(", ") + "]" : "";
        return new v("Invalid " + V + " `" + Y + "` supplied to " + ("`" + B + "`" + le + "."));
      }
      return j(I);
    }
    function N() {
      function $(x, k, I, R, W) {
        return E(x[k]) ? null : new v("Invalid " + R + " `" + W + "` supplied to " + ("`" + I + "`, expected a ReactNode."));
      }
      return j($);
    }
    function M($, x, k, I, R) {
      return new v(
        ($ || "React class") + ": " + x + " type `" + k + "." + I + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + R + "`."
      );
    }
    function T($) {
      function x(k, I, R, W, B) {
        var V = k[I], Y = _(V);
        if (Y !== "object")
          return new v("Invalid " + W + " `" + B + "` of type `" + Y + "` " + ("supplied to `" + R + "`, expected `object`."));
        for (var K in $) {
          var A = $[K];
          if (typeof A != "function")
            return M(R, W, B, K, J(A));
          var te = A(V, K, R, W, B + "." + K, t);
          if (te)
            return te;
        }
        return null;
      }
      return j(x);
    }
    function D($) {
      function x(k, I, R, W, B) {
        var V = k[I], Y = _(V);
        if (Y !== "object")
          return new v("Invalid " + W + " `" + B + "` of type `" + Y + "` " + ("supplied to `" + R + "`, expected `object`."));
        var K = e({}, k[I], $);
        for (var A in K) {
          var te = $[A];
          if (i($, A) && typeof te != "function")
            return M(R, W, B, A, J(te));
          if (!te)
            return new v(
              "Invalid " + W + " `" + B + "` key `" + A + "` supplied to `" + R + "`.\nBad object: " + JSON.stringify(k[I], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys($), null, "  ")
            );
          var U = te(V, A, R, W, B + "." + A, t);
          if (U)
            return U;
        }
        return null;
      }
      return j(x);
    }
    function E($) {
      switch (typeof $) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !$;
        case "object":
          if (Array.isArray($))
            return $.every(E);
          if ($ === null || s($))
            return !0;
          var x = f($);
          if (x) {
            var k = x.call($), I;
            if (x !== $.entries) {
              for (; !(I = k.next()).done; )
                if (!E(I.value))
                  return !1;
            } else
              for (; !(I = k.next()).done; ) {
                var R = I.value;
                if (R && !E(R[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function Z($, x) {
      return $ === "symbol" ? !0 : x ? x["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && x instanceof Symbol : !1;
    }
    function _($) {
      var x = typeof $;
      return Array.isArray($) ? "array" : $ instanceof RegExp ? "object" : Z(x, $) ? "symbol" : x;
    }
    function J($) {
      if (typeof $ > "u" || $ === null)
        return "" + $;
      var x = _($);
      if (x === "object") {
        if ($ instanceof Date)
          return "date";
        if ($ instanceof RegExp)
          return "regexp";
      }
      return x;
    }
    function ie($) {
      var x = J($);
      switch (x) {
        case "array":
        case "object":
          return "an " + x;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + x;
        default:
          return x;
      }
    }
    function Q($) {
      return !$.constructor || !$.constructor.name ? h : $.constructor.name;
    }
    return m.checkPropTypes = r, m.resetWarningCache = r.resetWarningCache, m.PropTypes = m, m;
  }, an;
}
var sn, tt;
function HN() {
  if (tt) return sn;
  tt = 1;
  var n = /* @__PURE__ */ hn();
  function e() {
  }
  function t() {
  }
  return t.resetWarningCache = e, sn = function() {
    function i(a, s, c, d, u, f) {
      if (f !== n) {
        var h = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw h.name = "Invariant Violation", h;
      }
    }
    i.isRequired = i;
    function r() {
      return i;
    }
    var o = {
      array: i,
      bigint: i,
      bool: i,
      func: i,
      number: i,
      object: i,
      string: i,
      symbol: i,
      any: i,
      arrayOf: r,
      element: i,
      elementType: i,
      instanceOf: r,
      node: i,
      objectOf: r,
      oneOf: r,
      oneOfType: r,
      shape: r,
      exact: r,
      checkPropTypes: t,
      resetWarningCache: e
    };
    return o.PropTypes = o, o;
  }, sn;
}
var it;
function EN() {
  if (it) return Ae.exports;
  if (it = 1, process.env.NODE_ENV !== "production") {
    var n = Ht(), e = !0;
    Ae.exports = /* @__PURE__ */ LN()(n.isElement, e);
  } else
    Ae.exports = /* @__PURE__ */ HN()();
  return Ae.exports;
}
var AN = /* @__PURE__ */ EN();
const z = /* @__PURE__ */ UN(AN);
function zN(n) {
  return G({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M18 3a3 3 0 0 1 2.995 2.824l.005 .176v12a3 3 0 0 1 -2.824 2.995l-.176 .005h-12a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-12a3 3 0 0 1 2.824 -2.995l.176 -.005h12zm0 2h-9v14h9a1 1 0 0 0 .993 -.883l.007 -.117v-12a1 1 0 0 0 -.883 -.993l-.117 -.007zm-2.293 4.293a1 1 0 0 1 .083 1.32l-.083 .094l-1.292 1.293l1.292 1.293a1 1 0 0 1 .083 1.32l-.083 .094a1 1 0 0 1 -1.32 .083l-.094 -.083l-2 -2a1 1 0 0 1 -.083 -1.32l.083 -.094l2 -2a1 1 0 0 1 1.414 0z" }, child: [] }] })(n);
}
function kN(n) {
  return G({ attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "path", attr: { d: "M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" }, child: [] }, { tag: "path", attr: { d: "M9 4v16" }, child: [] }, { tag: "path", attr: { d: "M14 10l2 2l-2 2" }, child: [] }] })(n);
}
const gn = ({ collapsibleNav: n, isNavigationPaneOpen: e, setNavigationPaneOpen: t }) => {
  const [i, r] = L([]), [o, a] = L([]), [s, c] = L([]), [d, u] = L(!1), { currentPath: f, setCurrentPath: h, onFolderChange: m } = me(), p = oe(null), v = oe([]), j = oe(null), w = He(() => {
    u(!1);
  }), H = se(), C = oe(null);
  X(() => {
    r(() => {
      let y = "";
      return f == null ? void 0 : f.split("/").map((b) => ({
        name: b || H("home"),
        path: b === "" ? b : y += `/${b}`
      }));
    }), a([]), c([]);
  }, [f, H]);
  const P = (y) => {
    h(y), m == null || m(y);
  }, g = () => {
    var _;
    const y = p.current.clientWidth, b = getComputedStyle(p.current), N = parseFloat(b.paddingLeft), M = n ? 2 : 0, D = n ? ((_ = C.current) == null ? void 0 : _.clientWidth) + 1 : 0, E = o.length > 0 ? 1 : 0, Z = parseFloat(b.gap) * (i.length + E + M);
    return y - (N + Z + D);
  }, S = () => {
    var M;
    const y = g(), b = v.current.reduce((T, D) => D ? T + D.clientWidth : T, 0), N = ((M = j.current) == null ? void 0 : M.clientWidth) || 0;
    return y - (b + N);
  }, F = () => p.current.scrollWidth > p.current.clientWidth;
  return X(() => {
    var y;
    if (F()) {
      const b = i[1], N = (y = v.current[1]) == null ? void 0 : y.clientWidth;
      c((M) => [...M, N]), a((M) => [...M, b]), r((M) => M.filter((T, D) => D !== 1));
    } else if (o.length > 0 && S() > s.at(-1)) {
      const b = [i[0], o.at(-1), ...i.slice(1)];
      r(b), a((N) => N.slice(0, -1)), c((N) => N.slice(0, -1));
    }
  }, [F]), /* @__PURE__ */ l("div", { className: "bread-crumb-container", children: [
    /* @__PURE__ */ l("div", { className: "breadcrumb", ref: p, children: [
      n && /* @__PURE__ */ l(fe, { children: [
        /* @__PURE__ */ l(
          "div",
          {
            ref: C,
            className: "nav-toggler",
            title: `${H(e ? "collapseNavigationPane" : "expandNavigationPane")}`,
            children: /* @__PURE__ */ l(
              "span",
              {
                className: "folder-name folder-name-btn",
                onClick: () => t((y) => !y),
                children: e ? /* @__PURE__ */ l(zN, {}, void 0, !1, {
                  fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/BreadCrumb/BreadCrumb.jsx",
                  lineNumber: 105,
                  columnNumber: 19
                }, void 0) : /* @__PURE__ */ l(kN, {}, void 0, !1, {
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
        /* @__PURE__ */ l("div", { className: "divider" }, void 0, !1, {
          fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/BreadCrumb/BreadCrumb.jsx",
          lineNumber: 111,
          columnNumber: 13
        }, void 0)
      ] }, void 0, !0, {
        fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/BreadCrumb/BreadCrumb.jsx",
        lineNumber: 92,
        columnNumber: 11
      }, void 0),
      i.map((y, b) => /* @__PURE__ */ l("div", { style: { display: "contents" }, children: [
        /* @__PURE__ */ l(
          "span",
          {
            className: "folder-name",
            onClick: () => P(y.path),
            ref: (N) => v.current[b] = N,
            children: [
              b === 0 ? /* @__PURE__ */ l(Qt, {}, void 0, !1, {
                fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/BreadCrumb/BreadCrumb.jsx",
                lineNumber: 121,
                columnNumber: 30
              }, void 0) : /* @__PURE__ */ l(ri, {}, void 0, !1, {
                fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/BreadCrumb/BreadCrumb.jsx",
                lineNumber: 121,
                columnNumber: 43
              }, void 0),
              y.name
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
        (o == null ? void 0 : o.length) > 0 && b === 0 && /* @__PURE__ */ l(
          "button",
          {
            className: "folder-name folder-name-btn",
            onClick: () => u(!0),
            ref: j,
            title: H("showMoreFolder"),
            children: /* @__PURE__ */ l(ii, { size: 22, className: "hidden-folders" }, void 0, !1, {
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
    d && /* @__PURE__ */ l("ul", { ref: w.ref, className: "hidden-folders-container", children: o.map((y, b) => /* @__PURE__ */ l(
      "li",
      {
        onClick: () => {
          P(y.path), u(!1);
        },
        children: y.name
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
gn.displayName = "BreadCrumb";
gn.propTypes = {
  isNavigationPaneOpen: z.bool.isRequired,
  setNavigationPaneOpen: z.func.isRequired
};
const _e = (n) => ({
  pdf: /* @__PURE__ */ l(ci, { size: n }, void 0, !1, {
    fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/hooks/useFileIcons.jsx",
    lineNumber: 17,
    columnNumber: 10
  }, void 0),
  jpg: /* @__PURE__ */ l(Xe, { size: n }, void 0, !1, {
    fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/hooks/useFileIcons.jsx",
    lineNumber: 18,
    columnNumber: 10
  }, void 0),
  jpeg: /* @__PURE__ */ l(Xe, { size: n }, void 0, !1, {
    fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/hooks/useFileIcons.jsx",
    lineNumber: 19,
    columnNumber: 11
  }, void 0),
  png: /* @__PURE__ */ l(Xe, { size: n }, void 0, !1, {
    fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/hooks/useFileIcons.jsx",
    lineNumber: 20,
    columnNumber: 10
  }, void 0),
  txt: /* @__PURE__ */ l(li, { size: n }, void 0, !1, {
    fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/hooks/useFileIcons.jsx",
    lineNumber: 21,
    columnNumber: 10
  }, void 0),
  doc: /* @__PURE__ */ l(Pn, { size: n }, void 0, !1, {
    fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/hooks/useFileIcons.jsx",
    lineNumber: 22,
    columnNumber: 10
  }, void 0),
  docx: /* @__PURE__ */ l(Pn, { size: n }, void 0, !1, {
    fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/hooks/useFileIcons.jsx",
    lineNumber: 23,
    columnNumber: 11
  }, void 0),
  mp4: /* @__PURE__ */ l(wn, { size: n }, void 0, !1, {
    fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/hooks/useFileIcons.jsx",
    lineNumber: 24,
    columnNumber: 10
  }, void 0),
  webm: /* @__PURE__ */ l(wn, { size: n }, void 0, !1, {
    fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/hooks/useFileIcons.jsx",
    lineNumber: 25,
    columnNumber: 11
  }, void 0),
  mp3: /* @__PURE__ */ l(Fn, { size: n }, void 0, !1, {
    fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/hooks/useFileIcons.jsx",
    lineNumber: 26,
    columnNumber: 10
  }, void 0),
  m4a: /* @__PURE__ */ l(Fn, { size: n }, void 0, !1, {
    fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/hooks/useFileIcons.jsx",
    lineNumber: 27,
    columnNumber: 10
  }, void 0),
  zip: /* @__PURE__ */ l(di, { size: n }, void 0, !1, {
    fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/hooks/useFileIcons.jsx",
    lineNumber: 28,
    columnNumber: 10
  }, void 0),
  ppt: /* @__PURE__ */ l(Cn, { size: n }, void 0, !1, {
    fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/hooks/useFileIcons.jsx",
    lineNumber: 29,
    columnNumber: 10
  }, void 0),
  pptx: /* @__PURE__ */ l(Cn, { size: n }, void 0, !1, {
    fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/hooks/useFileIcons.jsx",
    lineNumber: 30,
    columnNumber: 11
  }, void 0),
  xls: /* @__PURE__ */ l(xn, { size: n }, void 0, !1, {
    fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/hooks/useFileIcons.jsx",
    lineNumber: 31,
    columnNumber: 10
  }, void 0),
  xlsx: /* @__PURE__ */ l(xn, { size: n }, void 0, !1, {
    fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/hooks/useFileIcons.jsx",
    lineNumber: 32,
    columnNumber: 11
  }, void 0),
  exe: /* @__PURE__ */ l(si, { size: n }, void 0, !1, {
    fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/hooks/useFileIcons.jsx",
    lineNumber: 33,
    columnNumber: 10
  }, void 0),
  html: /* @__PURE__ */ l(ae, { size: n }, void 0, !1, {
    fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/hooks/useFileIcons.jsx",
    lineNumber: 34,
    columnNumber: 11
  }, void 0),
  css: /* @__PURE__ */ l(ae, { size: n }, void 0, !1, {
    fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/hooks/useFileIcons.jsx",
    lineNumber: 35,
    columnNumber: 10
  }, void 0),
  js: /* @__PURE__ */ l(ae, { size: n }, void 0, !1, {
    fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/hooks/useFileIcons.jsx",
    lineNumber: 36,
    columnNumber: 9
  }, void 0),
  php: /* @__PURE__ */ l(ae, { size: n }, void 0, !1, {
    fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/hooks/useFileIcons.jsx",
    lineNumber: 37,
    columnNumber: 10
  }, void 0),
  py: /* @__PURE__ */ l(ae, { size: n }, void 0, !1, {
    fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/hooks/useFileIcons.jsx",
    lineNumber: 38,
    columnNumber: 9
  }, void 0),
  java: /* @__PURE__ */ l(ae, { size: n }, void 0, !1, {
    fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/hooks/useFileIcons.jsx",
    lineNumber: 39,
    columnNumber: 11
  }, void 0),
  cpp: /* @__PURE__ */ l(ae, { size: n }, void 0, !1, {
    fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/hooks/useFileIcons.jsx",
    lineNumber: 40,
    columnNumber: 10
  }, void 0),
  c: /* @__PURE__ */ l(ae, { size: n }, void 0, !1, {
    fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/hooks/useFileIcons.jsx",
    lineNumber: 41,
    columnNumber: 8
  }, void 0),
  ts: /* @__PURE__ */ l(ae, { size: n }, void 0, !1, {
    fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/hooks/useFileIcons.jsx",
    lineNumber: 42,
    columnNumber: 9
  }, void 0),
  jsx: /* @__PURE__ */ l(ae, { size: n }, void 0, !1, {
    fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/hooks/useFileIcons.jsx",
    lineNumber: 43,
    columnNumber: 10
  }, void 0),
  tsx: /* @__PURE__ */ l(ae, { size: n }, void 0, !1, {
    fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/hooks/useFileIcons.jsx",
    lineNumber: 44,
    columnNumber: 10
  }, void 0),
  json: /* @__PURE__ */ l(ae, { size: n }, void 0, !1, {
    fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/hooks/useFileIcons.jsx",
    lineNumber: 45,
    columnNumber: 11
  }, void 0),
  xml: /* @__PURE__ */ l(ae, { size: n }, void 0, !1, {
    fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/hooks/useFileIcons.jsx",
    lineNumber: 46,
    columnNumber: 10
  }, void 0),
  sql: /* @__PURE__ */ l(ae, { size: n }, void 0, !1, {
    fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/hooks/useFileIcons.jsx",
    lineNumber: 47,
    columnNumber: 10
  }, void 0),
  csv: /* @__PURE__ */ l(ae, { size: n }, void 0, !1, {
    fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/hooks/useFileIcons.jsx",
    lineNumber: 48,
    columnNumber: 10
  }, void 0),
  md: /* @__PURE__ */ l(ae, { size: n }, void 0, !1, {
    fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/hooks/useFileIcons.jsx",
    lineNumber: 49,
    columnNumber: 9
  }, void 0),
  svg: /* @__PURE__ */ l(ae, { size: n }, void 0, !1, {
    fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/hooks/useFileIcons.jsx",
    lineNumber: 50,
    columnNumber: 10
  }, void 0)
}), At = (n, e, t) => {
  if (t.find((i) => i.name === n)) {
    const r = n;
    let o = 0;
    const a = new RegExp(`${r} \\(\\d+\\)`);
    t.forEach((d) => {
      const u = d.isDirectory ? d.name : d.name.split(".").slice(0, -1).join(".");
      if (a.test(u)) {
        const f = u.split(`${r} (`).pop().slice(0, -1), h = parseInt(f);
        !isNaN(h) && h > o && (o = h);
      }
    });
    const s = ` (${++o})`;
    return r + s + "";
  } else
    return n;
}, zt = ({ nameInputRef: n, id: e, maxLength: t, value: i, onChange: r, onKeyDown: o, onClick: a, rows: s }) => /* @__PURE__ */ l(
  "textarea",
  {
    ref: n,
    id: e,
    className: "rename-file",
    maxLength: t,
    value: i,
    onChange: r,
    onKeyDown: o,
    onClick: a,
    rows: s
  },
  void 0,
  !1,
  {
    fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/components/NameInput/NameInput.jsx",
    lineNumber: 5,
    columnNumber: 5
  },
  void 0
), kt = ({ message: n, xPlacement: e, yPlacement: t }) => /* @__PURE__ */ l("p", { className: `error-tooltip ${e} ${t}`, children: n }, void 0, !1, {
  fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/components/ErrorTooltip/ErrorTooltip.jsx",
  lineNumber: 4,
  columnNumber: 10
}, void 0), RN = 220, IN = ({ filesViewRef: n, file: e, onCreateFolder: t, triggerAction: i }) => {
  const [r, o] = L(e.name), [a, s] = L(!1), [c, d] = L(""), [u, f] = L("right"), [h, m] = L("bottom"), p = He((F) => {
    F.preventDefault(), F.stopPropagation();
  }), { currentFolder: v, currentPathFiles: j, setCurrentPathFiles: w } = me(), { activeLayout: H } = ve(), C = se(), P = (F) => {
    o(F.target.value), s(!1);
  }, g = (F) => {
    if (F.stopPropagation(), F.key === "Enter") {
      F.preventDefault(), S();
      return;
    }
    if (F.key === "Escape") {
      F.preventDefault(), i.close(), w((b) => b.filter((N) => N.key !== e.key));
      return;
    }
    /[\\/:*?"<>|]/.test(F.key) ? (F.preventDefault(), d(C("invalidFileName")), s(!0)) : (s(!1), d(""));
  };
  X(() => {
    if (a) {
      const F = setTimeout(() => {
        s(!1), d("");
      }, 7e3);
      return () => clearTimeout(F);
    }
  }, [a]);
  function S() {
    var N, M;
    let F = r.trim();
    const y = j.filter((T) => !(T.key && T.key === e.key));
    if (y.find((T) => T.name.toLowerCase() === F.toLowerCase())) {
      d(C("folderExists", { renameFile: F })), s(!0), (N = p.ref.current) == null || N.focus(), (M = p.ref.current) == null || M.select(), p.setIsClicked(!1);
      return;
    }
    F === "" && (F = At("New Folder", !0, y)), ye(t, "onCreateFolder", F, v), w((T) => T.filter((D) => D.key !== e.key)), i.close();
  }
  return X(() => {
    var F, y, b;
    if ((F = p.ref.current) == null || F.focus(), (y = p.ref.current) == null || y.select(), (b = p.ref) != null && b.current) {
      const D = n.current.getBoundingClientRect(), E = p.ref.current, Z = E.getBoundingClientRect();
      D.right - Z.left > 313 ? f("right") : f("left"), D.bottom - (Z.top + E.clientHeight) > 88 ? m("bottom") : m("top");
    }
  }, []), X(() => {
    p.isClicked && S();
  }, [p.isClicked]), /* @__PURE__ */ l(fe, { children: [
    /* @__PURE__ */ l(
      zt,
      {
        id: "newFolder",
        nameInputRef: p.ref,
        maxLength: RN,
        value: r,
        onChange: P,
        onKeyDown: g,
        onClick: (F) => F.stopPropagation(),
        ...H === "list" && { rows: 1 }
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
    a && /* @__PURE__ */ l(
      kt,
      {
        message: c,
        xPlacement: u,
        yPlacement: h
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
}, we = ({ onClick: n, onKeyDown: e, type: t = "primary", padding: i = "0.4rem 0.8rem", children: r }) => /* @__PURE__ */ l(
  "button",
  {
    onClick: n,
    onKeyDown: e,
    className: `fm-button fm-button-${t}`,
    style: { padding: i },
    children: r
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
function ON(n) {
  return G({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { fill: "none", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "32", d: "M85.57 446.25h340.86a32 32 0 0 0 28.17-47.17L284.18 82.58c-12.09-22.44-44.27-22.44-56.36 0L57.4 399.08a32 32 0 0 0 28.17 47.17z" }, child: [] }, { tag: "path", attr: { fill: "none", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "32", d: "m250.26 195.39 5.74 122 5.73-121.95a5.74 5.74 0 0 0-5.79-6h0a5.74 5.74 0 0 0-5.68 5.95z" }, child: [] }, { tag: "path", attr: { d: "M256 397.25a20 20 0 1 1 20-20 20 20 0 0 1-20 20z" }, child: [] }] })(n);
}
const Rt = ({
  children: n,
  show: e,
  setShow: t,
  heading: i,
  dialogWidth: r = "25%",
  contentClassName: o = "",
  closeButton: a = !0
}) => {
  const s = oe(null), c = se(), d = (u) => {
    u.key === "Escape" && t(!1);
  };
  return X(() => {
    e ? s.current.showModal() : s.current.close();
  }, [e]), /* @__PURE__ */ l(
    "dialog",
    {
      ref: s,
      className: "fm-modal dialog",
      style: { width: r },
      onKeyDown: d,
      children: [
        /* @__PURE__ */ l("div", { className: "fm-modal-header", children: [
          /* @__PURE__ */ l("span", { className: "fm-modal-heading", children: i }, void 0, !1, {
            fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/components/Modal/Modal.jsx",
            lineNumber: 40,
            columnNumber: 9
          }, void 0),
          a && /* @__PURE__ */ l(
            ti,
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
}, Ce = (n) => n.split(".").pop(), GN = 220, BN = ({ filesViewRef: n, file: e, onRename: t, triggerAction: i }) => {
  const [r, o] = L(e == null ? void 0 : e.name), [a, s] = L(!1), [c, d] = L(!1), [u, f] = L(""), [h, m] = L("right"), [p, v] = L("bottom"), { currentPathFiles: j, setCurrentPathFiles: w } = me(), { activeLayout: H } = ve(), C = se(), P = oe(null), g = He((b) => {
    var N;
    (N = P.current) != null && N.contains(b.target) || (b.preventDefault(), b.stopPropagation());
  }), S = (b) => {
    if (b.stopPropagation(), b.key === "Enter") {
      b.preventDefault(), g.setIsClicked(!0);
      return;
    }
    if (b.key === "Escape") {
      b.preventDefault(), w(
        (M) => M.map((T) => (T.key === e.key && (T.isEditing = !1), T))
      ), i.close();
      return;
    }
    /[\\/:*?"<>|]/.test(b.key) ? (b.preventDefault(), f(C("invalidFileName")), d(!0)) : d(!1);
  };
  X(() => {
    if (c) {
      const b = setTimeout(() => {
        d(!1), f("");
      }, 7e3);
      return () => clearTimeout(b);
    }
  }, [c]);
  function F(b) {
    if (r === "" || r === e.name) {
      w(
        (N) => N.map((M) => (M.key === e.key && (M.isEditing = !1), M))
      ), i.close();
      return;
    } else if (j.some((N) => N.name === r)) {
      d(!0), f(C("folderExists", { renameFile: r })), g.setIsClicked(!1);
      return;
    } else if (!e.isDirectory && !b) {
      const N = Ce(e.name), M = Ce(r);
      if (N !== M) {
        s(!0);
        return;
      }
    }
    d(!1), ye(t, "onRename", e, r), w((N) => N.filter((M) => M.key !== e.key)), i.close();
  }
  const y = () => {
    var b, N, M, T, D, E;
    if ((N = (b = g.ref) == null ? void 0 : b.current) == null || N.focus(), e.isDirectory)
      (T = (M = g.ref) == null ? void 0 : M.current) == null || T.select();
    else {
      const Z = Ce(e.name), _ = e.name.length - Z.length - 1;
      (E = (D = g.ref) == null ? void 0 : D.current) == null || E.setSelectionRange(0, _);
    }
  };
  return X(() => {
    var b;
    if (y(), (b = g.ref) != null && b.current) {
      const D = n.current.getBoundingClientRect(), E = g.ref.current, Z = E.getBoundingClientRect();
      D.right - Z.left > 313 ? m("right") : m("left"), D.bottom - (Z.top + E.clientHeight) > 88 ? v("bottom") : v("top");
    }
  }, []), X(() => {
    g.isClicked && F(!1), y();
  }, [g.isClicked]), /* @__PURE__ */ l(fe, { children: [
    /* @__PURE__ */ l(
      zt,
      {
        id: e.name,
        nameInputRef: g.ref,
        maxLength: GN,
        value: r,
        onChange: (b) => {
          o(b.target.value), d(!1);
        },
        onKeyDown: S,
        onClick: (b) => b.stopPropagation(),
        ...H === "list" && { rows: 1 }
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
    c && /* @__PURE__ */ l(
      kt,
      {
        message: u,
        xPlacement: h,
        yPlacement: p
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
    /* @__PURE__ */ l(
      Rt,
      {
        heading: C("rename"),
        show: a,
        setShow: s,
        dialogWidth: "25vw",
        closeButton: !1,
        children: /* @__PURE__ */ l("div", { className: "fm-rename-folder-container", ref: P, children: [
          /* @__PURE__ */ l("div", { className: "fm-rename-folder-input", children: /* @__PURE__ */ l("div", { className: "fm-rename-warning", children: [
            /* @__PURE__ */ l(ON, { size: 70, color: "orange" }, void 0, !1, {
              fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/Actions/Rename/Rename.action.jsx",
              lineNumber: 189,
              columnNumber: 15
            }, void 0),
            /* @__PURE__ */ l("div", { children: C("fileNameChangeWarning") }, void 0, !1, {
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
          /* @__PURE__ */ l("div", { className: "fm-rename-folder-action", children: [
            /* @__PURE__ */ l(
              we,
              {
                type: "secondary",
                onClick: () => {
                  w(
                    (b) => b.map((N) => (N.key === e.key && (N.isEditing = !1), N))
                  ), s(!1), i.close();
                },
                children: C("no")
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
            /* @__PURE__ */ l(
              we,
              {
                type: "danger",
                onClick: () => {
                  s(!1), F(!0);
                },
                children: C("yes")
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
}, Ze = (n, e = 2) => {
  if (isNaN(n)) return "";
  const t = n / 1024, i = t / 1024, r = i / 1024;
  if (t < 1024)
    return `${t.toFixed(e)} KB`;
  if (i < 1024)
    return `${i.toFixed(e)} MB`;
  if (i >= 1024)
    return `${r.toFixed(e)} GB`;
}, VN = (n) => {
  if (!n || isNaN(Date.parse(n))) return "";
  n = new Date(n);
  let e = n.getHours();
  const t = n.getMinutes(), i = e >= 12 ? "PM" : "AM";
  e = e % 12, e = e || 12;
  const r = n.getMonth() + 1, o = n.getDate(), a = n.getFullYear();
  return `${r}/${o}/${a} ${e}:${t < 10 ? "0" + t : t} ${i}`;
}, It = ({ name: n, id: e, checked: t, onClick: i, onChange: r, className: o = "", title: a, disabled: s = !1 }) => /* @__PURE__ */ l(
  "input",
  {
    className: `fm-checkbox ${o}`,
    type: "checkbox",
    name: n,
    id: e,
    checked: t,
    onClick: i,
    onChange: r,
    title: a,
    disabled: s
  },
  void 0,
  !1,
  {
    fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/components/Checkbox/Checkbox.jsx",
    lineNumber: 5,
    columnNumber: 5
  },
  void 0
), ln = 50, WN = ({
  index: n,
  file: e,
  onCreateFolder: t,
  onRename: i,
  enableFilePreview: r,
  onFileOpen: o,
  filesViewRef: a,
  selectedFileIndexes: s,
  triggerAction: c,
  handleContextMenu: d,
  setLastSelectedFile: u,
  draggable: f
}) => {
  var le, Ne, Ue, bn;
  const [h, m] = L(!1), [p, v] = L(0), [j, w] = L("hidden"), [H, C] = L(""), [P, g] = L(null), { activeLayout: S } = ve(), F = S === "grid" ? 48 : 20, y = _e(F), { setCurrentPath: b, currentPathFiles: N, onFolderChange: M } = me(), { setSelectedFiles: T } = ge(), { clipBoard: D, handleCutCopy: E, setClipBoard: Z, handlePasting: _ } = Je(), J = oe(null), ie = _e(ln), Q = (D == null ? void 0 : D.isMoving) && D.files.find((q) => q.name === e.name && q.path === e.path), $ = () => {
    o(e), e.isDirectory ? (b(e.path), M == null || M(e.path), T([])) : r && c.show("previewFile");
  }, x = (q, ue) => {
    if (s.length > 0 && q) {
      let he = !1, $e = s[0], Fe = n;
      if ($e >= Fe) {
        const Bt = $e;
        $e = Fe, Fe = Bt, he = !0;
      }
      const vn = N.slice($e, Fe + 1);
      T(he ? vn.reverse() : vn);
    } else s.length > 0 && ue ? T((he) => {
      const $e = he.filter((Fe) => Fe.path !== e.path);
      return he.length === $e.length ? [...he, e] : $e;
    }) : T([e]);
  }, k = (q) => {
    if (q.stopPropagation(), e.isEditing) return;
    x(q.shiftKey, q.ctrlKey);
    const ue = (/* @__PURE__ */ new Date()).getTime();
    if (ue - p < 300) {
      $();
      return;
    }
    v(ue);
  }, I = (q) => {
    q.key === "Enter" && (q.stopPropagation(), T([e]), $());
  }, R = (q) => {
    q.stopPropagation(), q.preventDefault(), !e.isEditing && (h || T([e]), u(e), d(q, !0));
  }, W = () => {
    w("visible");
  }, B = () => {
    !h && w("hidden");
  }, V = (q) => {
    q.target.checked ? T((ue) => [...ue, e]) : T((ue) => ue.filter((he) => he.name !== e.name && he.path !== e.path)), m(q.target.checked);
  }, Y = (q) => {
    q.dataTransfer.setDragImage(J.current, 30, 50), q.dataTransfer.effectAllowed = "copy", E(!0);
  }, K = () => Z(null), A = (q) => {
    q.preventDefault(), h || !e.isDirectory ? q.dataTransfer.dropEffect = "none" : (g({ x: q.clientX, y: q.clientY + 12 }), q.dataTransfer.dropEffect = "copy", C("file-drop-zone"));
  }, te = (q) => {
    q.currentTarget.contains(q.relatedTarget) || (C((ue) => ue && ""), g(null));
  }, U = (q) => {
    q.preventDefault(), !(h || !e.isDirectory) && (_(e), C((ue) => ue && ""), g(null));
  };
  return X(() => {
    m(s.includes(n)), w(s.includes(n) ? "visible" : "hidden");
  }, [s]), /* @__PURE__ */ l(
    "div",
    {
      className: `file-item-container ${H} ${h || e.isEditing ? "file-selected" : ""} ${Q ? "file-moving" : ""}`,
      tabIndex: 0,
      title: e.name,
      onClick: k,
      onKeyDown: I,
      onContextMenu: R,
      onMouseOver: W,
      onMouseLeave: B,
      draggable: h && f,
      onDragStart: Y,
      onDragEnd: K,
      onDragEnter: A,
      onDragOver: A,
      onDragLeave: te,
      onDrop: U,
      children: [
        /* @__PURE__ */ l("div", { className: "file-item", children: [
          !e.isEditing && /* @__PURE__ */ l(
            It,
            {
              name: e.name,
              id: e.name,
              checked: h,
              className: `selection-checkbox ${j}`,
              onChange: V,
              onClick: (q) => q.stopPropagation()
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
          e.isDirectory ? /* @__PURE__ */ l(Mn, { size: F }, void 0, !1, {
            fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/FileList/FileItem.jsx",
            lineNumber: 219,
            columnNumber: 11
          }, void 0) : /* @__PURE__ */ l(fe, { children: y[(Ne = (le = e.name) == null ? void 0 : le.split(".").pop()) == null ? void 0 : Ne.toLowerCase()] ?? /* @__PURE__ */ l(Oe, { size: F }, void 0, !1, {
            fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/FileList/FileItem.jsx",
            lineNumber: 222,
            columnNumber: 71
          }, void 0) }, void 0, !1, {
            fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/FileList/FileItem.jsx",
            lineNumber: 221,
            columnNumber: 11
          }, void 0),
          e.isEditing ? /* @__PURE__ */ l("div", { className: `rename-file-container ${S}`, children: c.actionType === "createFolder" ? /* @__PURE__ */ l(
            IN,
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
          ) : /* @__PURE__ */ l(
            BN,
            {
              filesViewRef: a,
              file: e,
              onRename: i,
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
          }, void 0) : /* @__PURE__ */ l("span", { className: "text-truncate file-name", children: e.name }, void 0, !1, {
            fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/FileList/FileItem.jsx",
            lineNumber: 245,
            columnNumber: 11
          }, void 0)
        ] }, void 0, !0, {
          fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/FileList/FileItem.jsx",
          lineNumber: 207,
          columnNumber: 7
        }, void 0),
        S === "list" && /* @__PURE__ */ l(fe, { children: [
          /* @__PURE__ */ l("div", { className: "modified-date", children: VN(e.updatedAt) }, void 0, !1, {
            fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/FileList/FileItem.jsx",
            lineNumber: 251,
            columnNumber: 11
          }, void 0),
          /* @__PURE__ */ l("div", { className: "size", children: (e == null ? void 0 : e.size) > 0 ? Ze(e == null ? void 0 : e.size) : "" }, void 0, !1, {
            fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/FileList/FileItem.jsx",
            lineNumber: 252,
            columnNumber: 11
          }, void 0)
        ] }, void 0, !0, {
          fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/FileList/FileItem.jsx",
          lineNumber: 250,
          columnNumber: 9
        }, void 0),
        P && /* @__PURE__ */ l(
          "div",
          {
            style: {
              top: `${P.y}px`,
              left: `${P.x}px`
            },
            className: "drag-move-tooltip",
            children: [
              "Move to ",
              /* @__PURE__ */ l("span", { className: "drop-zone-file-name", children: e.name }, void 0, !1, {
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
        /* @__PURE__ */ l("div", { ref: J, className: "drag-icon", children: e.isDirectory ? /* @__PURE__ */ l(Mn, { size: ln }, void 0, !1, {
          fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/FileList/FileItem.jsx",
          lineNumber: 271,
          columnNumber: 11
        }, void 0) : /* @__PURE__ */ l(fe, { children: ie[(bn = (Ue = e.name) == null ? void 0 : Ue.split(".").pop()) == null ? void 0 : bn.toLowerCase()] ?? /* @__PURE__ */ l(Oe, { size: ln }, void 0, !1, {
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
}, _N = ({ subMenuRef: n, list: e, position: t = "right" }) => /* @__PURE__ */ l("ul", { ref: n, className: `sub-menu ${t}`, children: e == null ? void 0 : e.map((i) => /* @__PURE__ */ l("li", { onClick: i.onClick, children: [
  /* @__PURE__ */ l("span", { className: "item-selected", children: i.selected && /* @__PURE__ */ l($t, { size: 13 }, void 0, !1, {
    fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/components/ContextMenu/SubMenu.jsx",
    lineNumber: 8,
    columnNumber: 61
  }, void 0) }, void 0, !1, {
    fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/components/ContextMenu/SubMenu.jsx",
    lineNumber: 8,
    columnNumber: 11
  }, void 0),
  i.icon,
  /* @__PURE__ */ l("span", { children: i.title }, void 0, !1, {
    fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/components/ContextMenu/SubMenu.jsx",
    lineNumber: 10,
    columnNumber: 11
  }, void 0)
] }, i.title, !0, {
  fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/components/ContextMenu/SubMenu.jsx",
  lineNumber: 7,
  columnNumber: 9
}, void 0)) }, void 0, !1, {
  fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/components/ContextMenu/SubMenu.jsx",
  lineNumber: 5,
  columnNumber: 5
}, void 0), YN = ({ filesViewRef: n, contextMenuRef: e, menuItems: t, visible: i, clickPosition: r }) => {
  const [o, a] = L(0), [s, c] = L(0), [d, u] = L(null), [f, h] = L("right"), m = oe(null), p = () => {
    const { clickX: w, clickY: H } = r, C = n.current, P = C.getBoundingClientRect(), g = C.offsetWidth - C.clientWidth, S = e.current.getBoundingClientRect(), F = S.width, y = S.height, b = w - P.left, N = P.width - (b + g) > F, M = !N, T = H - P.top, D = P.height - T > y, E = !D;
    N ? (a(`${b}px`), h("right")) : M && (a(`${b - F}px`), h("left")), D ? c(`${T + C.scrollTop}px`) : E && c(`${T + C.scrollTop - y}px`);
  }, v = (w) => {
    w.preventDefault(), w.stopPropagation();
  }, j = (w) => {
    u(w);
  };
  if (X(() => {
    i && e.current ? p() : (c(0), a(0), u(null));
  }, [i]), i)
    return /* @__PURE__ */ l(
      "div",
      {
        ref: e,
        onContextMenu: v,
        onClick: (w) => w.stopPropagation(),
        className: `fm-context-menu ${s ? "visible" : "hidden"}`,
        style: {
          top: s,
          left: o
        },
        children: /* @__PURE__ */ l("div", { className: "file-context-menu-list", children: /* @__PURE__ */ l("ul", { children: t.filter((w) => !w.hidden).map((w, H) => {
          const C = w.hasOwnProperty("children"), P = d === H && C;
          return /* @__PURE__ */ l("div", { children: [
            /* @__PURE__ */ l(
              "li",
              {
                onClick: w.onClick,
                className: `${w.className ?? ""} ${P ? "active" : ""}`,
                onMouseOver: () => j(H),
                children: [
                  w.icon,
                  /* @__PURE__ */ l("span", { children: w.title }, void 0, !1, {
                    fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/components/ContextMenu/ContextMenu.jsx",
                    lineNumber: 97,
                    columnNumber: 23
                  }, void 0),
                  C && /* @__PURE__ */ l(fe, { children: [
                    /* @__PURE__ */ l(ai, { size: 14, className: "list-expand-icon" }, void 0, !1, {
                      fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/components/ContextMenu/ContextMenu.jsx",
                      lineNumber: 100,
                      columnNumber: 27
                    }, void 0),
                    P && /* @__PURE__ */ l(
                      _N,
                      {
                        subMenuRef: m,
                        list: w.children,
                        position: f
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
            w.divider && H !== t.filter((g) => !g.hidden).length - 1 && /* @__PURE__ */ l("div", { className: "divider" }, void 0, !1, {
              fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/components/ContextMenu/ContextMenu.jsx",
              lineNumber: 113,
              columnNumber: 25
            }, void 0)
          ] }, w.title, !0, {
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
function KN(n) {
  return G({ attr: { viewBox: "0 0 256 256", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M245,110.64A16,16,0,0,0,232,104H216V88a16,16,0,0,0-16-16H130.67L102.94,51.2a16.14,16.14,0,0,0-9.6-3.2H40A16,16,0,0,0,24,64V208h0a8,8,0,0,0,8,8H211.1a8,8,0,0,0,7.59-5.47l28.49-85.47A16.05,16.05,0,0,0,245,110.64ZM93.34,64,123.2,86.4A8,8,0,0,0,128,88h72v16H69.77a16,16,0,0,0-15.18,10.94L40,158.7V64Zm112,136H43.1l26.67-80H232Z" }, child: [] }] })(n);
}
const qN = (n, e, t, i, r) => {
  const [o, a] = L([]), [s, c] = L(!1), [d, u] = L(!1), [f, h] = L({ clickX: 0, clickY: 0 }), [m, p] = L(null), { clipBoard: v, setClipBoard: j, handleCutCopy: w, handlePasting: H } = Je(), { selectedFiles: C, setSelectedFiles: P, handleDownload: g } = ge(), { currentPath: S, setCurrentPath: F, currentPathFiles: y, setCurrentPathFiles: b, onFolderChange: N } = me(), { activeLayout: M, setActiveLayout: T } = ve(), D = se(), E = () => {
    r(m), m.isDirectory ? (F(m.path), N == null || N(m.path), a([]), P([])) : e && t.show("previewFile"), c(!1);
  }, Z = (A) => {
    w(A), c(!1);
  }, _ = () => {
    H(m), c(!1);
  }, J = () => {
    c(!1), t.show("rename");
  }, ie = () => {
    g(), c(!1);
  }, Q = () => {
    c(!1), t.show("delete");
  }, $ = () => {
    c(!1), ye(n, "onRefresh"), j(null);
  }, x = () => {
    t.show("createFolder"), c(!1);
  }, k = () => {
    c(!1), t.show("uploadFile");
  }, I = () => {
    P(y), c(!1);
  }, R = [
    {
      title: D("view"),
      icon: M === "grid" ? /* @__PURE__ */ l(yn, { size: 18 }, void 0, !1, {
        fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/FileList/useFileList.jsx",
        lineNumber: 93,
        columnNumber: 39
      }, void 0) : /* @__PURE__ */ l(Ie, { size: 18 }, void 0, !1, {
        fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/FileList/useFileList.jsx",
        lineNumber: 93,
        columnNumber: 62
      }, void 0),
      onClick: () => {
      },
      children: [
        {
          title: D("grid"),
          icon: /* @__PURE__ */ l(yn, { size: 18 }, void 0, !1, {
            fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/FileList/useFileList.jsx",
            lineNumber: 98,
            columnNumber: 17
          }, void 0),
          selected: M === "grid",
          onClick: () => {
            T("grid"), c(!1);
          }
        },
        {
          title: D("list"),
          icon: /* @__PURE__ */ l(Ie, { size: 18 }, void 0, !1, {
            fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/FileList/useFileList.jsx",
            lineNumber: 107,
            columnNumber: 17
          }, void 0),
          selected: M === "list",
          onClick: () => {
            T("list"), c(!1);
          }
        }
      ]
    },
    {
      title: D("refresh"),
      icon: /* @__PURE__ */ l(gt, { size: 18 }, void 0, !1, {
        fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/FileList/useFileList.jsx",
        lineNumber: 118,
        columnNumber: 13
      }, void 0),
      onClick: $,
      divider: !0
    },
    {
      title: D("newFolder"),
      icon: /* @__PURE__ */ l(mt, { size: 18 }, void 0, !1, {
        fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/FileList/useFileList.jsx",
        lineNumber: 124,
        columnNumber: 13
      }, void 0),
      onClick: x,
      hidden: !i.create,
      divider: !i.upload
    },
    {
      title: D("upload"),
      icon: /* @__PURE__ */ l(vt, { size: 18 }, void 0, !1, {
        fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/FileList/useFileList.jsx",
        lineNumber: 131,
        columnNumber: 13
      }, void 0),
      onClick: k,
      divider: !0,
      hidden: !i.upload
    },
    {
      title: D("selectAll"),
      icon: /* @__PURE__ */ l(oi, { size: 18 }, void 0, !1, {
        fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/FileList/useFileList.jsx",
        lineNumber: 138,
        columnNumber: 13
      }, void 0),
      onClick: I
    }
  ], W = [
    {
      title: D("open"),
      icon: m != null && m.isDirectory ? /* @__PURE__ */ l(KN, { size: 20 }, void 0, !1, {
        fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/FileList/useFileList.jsx",
        lineNumber: 146,
        columnNumber: 45
      }, void 0) : /* @__PURE__ */ l(Oe, { size: 16 }, void 0, !1, {
        fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/FileList/useFileList.jsx",
        lineNumber: 146,
        columnNumber: 74
      }, void 0),
      onClick: E,
      divider: !0
    },
    {
      title: D("cut"),
      icon: /* @__PURE__ */ l(ht, { size: 19 }, void 0, !1, {
        fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/FileList/useFileList.jsx",
        lineNumber: 152,
        columnNumber: 13
      }, void 0),
      onClick: () => Z(!0),
      divider: !(m != null && m.isDirectory) && !i.copy,
      hidden: !i.move
    },
    {
      title: D("copy"),
      icon: /* @__PURE__ */ l(ft, { strokeWidth: 0.1, size: 17 }, void 0, !1, {
        fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/FileList/useFileList.jsx",
        lineNumber: 159,
        columnNumber: 13
      }, void 0),
      onClick: () => Z(!1),
      divider: !(m != null && m.isDirectory),
      hidden: !i.copy
    },
    {
      title: D("paste"),
      icon: /* @__PURE__ */ l(dn, { size: 18 }, void 0, !1, {
        fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/FileList/useFileList.jsx",
        lineNumber: 166,
        columnNumber: 13
      }, void 0),
      onClick: _,
      className: `${v ? "" : "disable-paste"}`,
      hidden: !(m != null && m.isDirectory) || !i.move && !i.copy,
      divider: !0
    },
    {
      title: D("rename"),
      icon: /* @__PURE__ */ l(Nt, { size: 19 }, void 0, !1, {
        fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/FileList/useFileList.jsx",
        lineNumber: 174,
        columnNumber: 13
      }, void 0),
      onClick: J,
      hidden: C.length > 1,
      hidden: !i.rename
    },
    {
      title: D("download"),
      icon: /* @__PURE__ */ l(pn, { size: 18 }, void 0, !1, {
        fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/FileList/useFileList.jsx",
        lineNumber: 181,
        columnNumber: 13
      }, void 0),
      onClick: ie,
      hidden: !i.download
    },
    {
      title: D("delete"),
      icon: /* @__PURE__ */ l(bt, { size: 19 }, void 0, !1, {
        fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/FileList/useFileList.jsx",
        lineNumber: 187,
        columnNumber: 13
      }, void 0),
      onClick: Q,
      hidden: !i.delete
    }
  ], B = () => {
    b((A) => [
      ...A,
      {
        name: At("New Folder", !0, A),
        isDirectory: !0,
        path: S,
        isEditing: !0,
        key: (/* @__PURE__ */ new Date()).valueOf()
      }
    ]);
  }, V = () => {
    b((A) => {
      const te = o.at(-1);
      return A[te] ? A.map((U, le) => le === te ? {
        ...U,
        isEditing: !0
      } : U) : (t.close(), A);
    }), a([]), P([]);
  }, Y = () => {
    a([]), P((A) => A.length > 0 ? [] : A);
  }, K = (A, te = !1) => {
    A.preventDefault(), h({ clickX: A.clientX, clickY: A.clientY }), u(te), !te && Y(), c(!0);
  };
  return X(() => {
    if (t.isActive)
      switch (t.actionType) {
        case "createFolder":
          B();
          break;
        case "rename":
          V();
          break;
      }
  }, [t.isActive]), X(() => {
    a([]), P([]);
  }, [S]), X(() => {
    C.length > 0 ? a(() => C.map((A) => y.findIndex((te) => te.path === A.path))) : a([]);
  }, [C, y]), {
    emptySelecCtxItems: R,
    selecCtxItems: W,
    handleContextMenu: K,
    unselectFiles: Y,
    visible: s,
    setVisible: c,
    setLastSelectedFile: p,
    selectedFileIndexes: o,
    clickPosition: f,
    isSelectionCtx: d
  };
}, JN = ({ unselectFiles: n, onSort: e, sortConfig: t }) => {
  const i = se(), [r, o] = L(!1), { selectedFiles: a, setSelectedFiles: s } = ge(), { currentPathFiles: c } = me(), d = Ye(() => c.length > 0 && a.length === c.length, [a, c]), u = (h) => {
    h.target.checked ? (s(c), o(!0)) : n();
  }, f = (h) => {
    e && e(h);
  };
  return /* @__PURE__ */ l(
    "div",
    {
      className: "files-header",
      onMouseOver: () => o(!0),
      onMouseLeave: () => o(!1),
      children: [
        /* @__PURE__ */ l("div", { className: "file-select-all", children: (r || d) && /* @__PURE__ */ l(
          It,
          {
            id: "selectAll",
            checked: d,
            onChange: u,
            title: "Select all",
            disabled: c.length === 0
          },
          void 0,
          !1,
          {
            fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/FileList/FilesHeader.jsx",
            lineNumber: 42,
            columnNumber: 11
          },
          void 0
        ) }, void 0, !1, {
          fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/FileList/FilesHeader.jsx",
          lineNumber: 40,
          columnNumber: 7
        }, void 0),
        /* @__PURE__ */ l(
          "div",
          {
            className: `file-name ${(t == null ? void 0 : t.key) === "name" ? "active" : ""}`,
            onClick: () => f("name"),
            children: [
              i("name"),
              (t == null ? void 0 : t.key) === "name" && /* @__PURE__ */ l("span", { className: "sort-indicator", children: t.direction === "asc" ? " ▲" : " ▼" }, void 0, !1, {
                fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/FileList/FilesHeader.jsx",
                lineNumber: 57,
                columnNumber: 11
              }, void 0)
            ]
          },
          void 0,
          !0,
          {
            fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/FileList/FilesHeader.jsx",
            lineNumber: 51,
            columnNumber: 7
          },
          void 0
        ),
        /* @__PURE__ */ l(
          "div",
          {
            className: `file-date ${(t == null ? void 0 : t.key) === "modified" ? "active" : ""}`,
            onClick: () => f("modified"),
            children: [
              i("modified"),
              (t == null ? void 0 : t.key) === "modified" && /* @__PURE__ */ l("span", { className: "sort-indicator", children: t.direction === "asc" ? " ▲" : " ▼" }, void 0, !1, {
                fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/FileList/FilesHeader.jsx",
                lineNumber: 66,
                columnNumber: 11
              }, void 0)
            ]
          },
          void 0,
          !0,
          {
            fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/FileList/FilesHeader.jsx",
            lineNumber: 60,
            columnNumber: 7
          },
          void 0
        ),
        /* @__PURE__ */ l(
          "div",
          {
            className: `file-size ${(t == null ? void 0 : t.key) === "size" ? "active" : ""}`,
            onClick: () => f("size"),
            children: [
              i("size"),
              (t == null ? void 0 : t.key) === "size" && /* @__PURE__ */ l("span", { className: "sort-indicator", children: t.direction === "asc" ? " ▲" : " ▼" }, void 0, !1, {
                fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/FileList/FilesHeader.jsx",
                lineNumber: 75,
                columnNumber: 11
              }, void 0)
            ]
          },
          void 0,
          !0,
          {
            fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/FileList/FilesHeader.jsx",
            lineNumber: 69,
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
      lineNumber: 35,
      columnNumber: 5
    },
    void 0
  );
}, Ot = ({
  onCreateFolder: n,
  onRename: e,
  onFileOpen: t,
  onRefresh: i,
  enableFilePreview: r,
  triggerAction: o,
  permissions: a
}) => {
  const { currentPathFiles: s, sortConfig: c, setSortConfig: d } = me(), u = oe(null), { activeLayout: f } = ve(), h = se(), {
    emptySelecCtxItems: m,
    selecCtxItems: p,
    handleContextMenu: v,
    unselectFiles: j,
    visible: w,
    setVisible: H,
    setLastSelectedFile: C,
    selectedFileIndexes: P,
    clickPosition: g,
    isSelectionCtx: S
  } = qN(i, r, o, a, t), F = He(() => H(!1)), y = (b) => {
    let N = "asc";
    c.key === b && c.direction === "asc" && (N = "desc"), d({ key: b, direction: N });
  };
  return /* @__PURE__ */ l(
    "div",
    {
      ref: u,
      className: `files ${f}`,
      onContextMenu: v,
      onClick: j,
      children: [
        f === "list" && /* @__PURE__ */ l(JN, { unselectFiles: j, onSort: y, sortConfig: c }, void 0, !1, {
          fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/FileList/FileList.jsx",
          lineNumber: 57,
          columnNumber: 9
        }, void 0),
        (s == null ? void 0 : s.length) > 0 ? /* @__PURE__ */ l(fe, { children: s.map((b, N) => /* @__PURE__ */ l(
          WN,
          {
            index: N,
            file: b,
            onCreateFolder: n,
            onRename: e,
            onFileOpen: t,
            enableFilePreview: r,
            triggerAction: o,
            filesViewRef: u,
            selectedFileIndexes: P,
            handleContextMenu: v,
            setVisible: H,
            setLastSelectedFile: C,
            draggable: a.move
          },
          N,
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
        }, void 0) : /* @__PURE__ */ l("div", { className: "empty-folder", children: h("folderEmpty") }, void 0, !1, {
          fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/FileList/FileList.jsx",
          lineNumber: 82,
          columnNumber: 9
        }, void 0),
        /* @__PURE__ */ l(
          YN,
          {
            filesViewRef: u,
            contextMenuRef: F.ref,
            menuItems: S ? p : m,
            visible: w,
            setVisible: H,
            clickPosition: g
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
Ot.displayName = "FileList";
const ZN = ({ triggerAction: n, onDelete: e }) => {
  const [t, i] = L(""), { selectedFiles: r, setSelectedFiles: o } = ge(), a = se();
  X(() => {
    i(() => {
      if (r.length === 1)
        return a("deleteItemConfirm", { fileName: r[0].name });
      if (r.length > 1)
        return a("deleteItemsConfirm", { count: r.length });
    });
  }, [a]);
  const s = () => {
    e(r), o([]), n.close();
  };
  return /* @__PURE__ */ l("div", { className: "file-delete-confirm", children: [
    /* @__PURE__ */ l("p", { className: "file-delete-confirm-text", children: t }, void 0, !1, {
      fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/Actions/Delete/Delete.action.jsx",
      lineNumber: 30,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ l("div", { className: "file-delete-confirm-actions", children: [
      /* @__PURE__ */ l(we, { type: "secondary", onClick: () => n.close(), children: a("cancel") }, void 0, !1, {
        fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/Actions/Delete/Delete.action.jsx",
        lineNumber: 32,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ l(we, { type: "danger", onClick: s, children: a("delete") }, void 0, !1, {
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
function XN(n) {
  return G({ attr: { viewBox: "0 0 1024 1024", fill: "currentColor", fillRule: "evenodd" }, child: [{ tag: "path", attr: { d: "M799.855 166.312c.023.007.043.018.084.059l57.69 57.69c.041.041.052.06.059.084a.118.118 0 0 1 0 .069c-.007.023-.018.042-.059.083L569.926 512l287.703 287.703c.041.04.052.06.059.083a.118.118 0 0 1 0 .07c-.007.022-.018.042-.059.083l-57.69 57.69c-.041.041-.06.052-.084.059a.118.118 0 0 1-.069 0c-.023-.007-.042-.018-.083-.059L512 569.926 224.297 857.629c-.04.041-.06.052-.083.059a.118.118 0 0 1-.07 0c-.022-.007-.042-.018-.083-.059l-57.69-57.69c-.041-.041-.052-.06-.059-.084a.118.118 0 0 1 0-.069c.007-.023.018-.042.059-.083L454.073 512 166.371 224.297c-.041-.04-.052-.06-.059-.083a.118.118 0 0 1 0-.07c.007-.022.018-.042.059-.083l57.69-57.69c.041-.041.06-.052.084-.059a.118.118 0 0 1 .069 0c.023.007.042.018.083.059L512 454.073l287.703-287.702c.04-.041.06-.052.083-.059a.118.118 0 0 1 .07 0Z" }, child: [] }] })(n);
}
function QN(n) {
  return G({ attr: { viewBox: "0 0 1024 1024" }, child: [{ tag: "path", attr: { d: "M518.3 459a8 8 0 0 0-12.6 0l-112 141.7a7.98 7.98 0 0 0 6.3 12.9h73.9V856c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V613.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 459z" }, child: [] }, { tag: "path", attr: { d: "M811.4 366.7C765.6 245.9 648.9 160 512.2 160S258.8 245.8 213 366.6C127.3 389.1 64 467.2 64 560c0 110.5 89.5 200 199.9 200H304c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8h-40.1c-33.7 0-65.4-13.4-89-37.7-23.5-24.2-36-56.8-34.9-90.6.9-26.4 9.9-51.2 26.2-72.1 16.7-21.3 40.1-36.8 66.1-43.7l37.9-9.9 13.9-36.6c8.6-22.8 20.6-44.1 35.7-63.4a245.6 245.6 0 0 1 52.4-49.9c41.1-28.9 89.5-44.2 140-44.2s98.9 15.3 140 44.2c19.9 14 37.5 30.8 52.4 49.9 15.1 19.3 27.1 40.7 35.7 63.4l13.8 36.5 37.8 10C846.1 454.5 884 503.8 884 560c0 33.1-12.9 64.3-36.3 87.7a123.07 123.07 0 0 1-87.6 36.3H720c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h40.1C870.5 760 960 670.5 960 560c0-92.7-63.1-170.7-148.6-193.3z" }, child: [] }] })(n);
}
const e4 = ({ percent: n = 0, isCanceled: e = !1, isCompleted: t = !1, error: i }) => {
  const r = se();
  return /* @__PURE__ */ l("div", { role: "progressbar", className: "fm-progress", children: [
    !i && /* @__PURE__ */ l("div", { className: "fm-progress-bar", children: /* @__PURE__ */ l("div", { className: "fm-progress-bar-fill", style: { width: `${n}%` } }, void 0, !1, {
      fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/components/Progress/Progress.jsx",
      lineNumber: 11,
      columnNumber: 11
    }, void 0) }, void 0, !1, {
      fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/components/Progress/Progress.jsx",
      lineNumber: 10,
      columnNumber: 9
    }, void 0),
    e ? /* @__PURE__ */ l("span", { className: "fm-upload-canceled", children: r("canceled") }, void 0, !1, {
      fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/components/Progress/Progress.jsx",
      lineNumber: 15,
      columnNumber: 9
    }, void 0) : i ? /* @__PURE__ */ l("span", { className: "fm-upload-canceled", children: i }, void 0, !1, {
      fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/components/Progress/Progress.jsx",
      lineNumber: 17,
      columnNumber: 9
    }, void 0) : /* @__PURE__ */ l("div", { className: "fm-progress-status", children: /* @__PURE__ */ l("span", { children: t ? r("completed") : r("percentDone", { percent: n }) }, void 0, !1, {
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
function n4(n) {
  return G({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M256 388c-72.597 0-132-59.405-132-132 0-72.601 59.403-132 132-132 36.3 0 69.299 15.4 92.406 39.601L278 234h154V80l-51.698 51.702C348.406 99.798 304.406 80 256 80c-96.797 0-176 79.203-176 176s78.094 176 176 176c81.045 0 148.287-54.134 169.401-128H378.85c-18.745 49.561-67.138 84-122.85 84z" }, child: [] }] })(n);
}
const t4 = ({
  index: n,
  fileData: e,
  setFiles: t,
  setIsUploading: i,
  fileUploadConfig: r,
  onFileUploaded: o,
  handleFileRemove: a
}) => {
  var F, y, b, N;
  const [s, c] = L(0), [d, u] = L(!1), [f, h] = L(!1), [m, p] = L(!1), v = _e(33), j = oe(), { onError: w } = qe(), H = se(), C = (M) => {
    c(0), i((D) => ({
      ...D,
      [n]: !1
    }));
    const T = {
      type: "upload",
      message: H("uploadFail"),
      response: {
        status: M.status,
        statusText: M.statusText,
        data: M.response
      }
    };
    t(
      (D) => D.map((E, Z) => n === Z ? {
        ...E,
        error: T.message
      } : E)
    ), p(!0), w(T, e.file);
  }, P = (M) => {
    if (!M.error)
      return new Promise((T, D) => {
        const E = new XMLHttpRequest();
        j.current = E, i((Q) => ({
          ...Q,
          [n]: !0
        })), E.upload.onprogress = (Q) => {
          if (Q.lengthComputable) {
            const $ = Math.round(Q.loaded / Q.total * 100);
            c($);
          }
        }, E.onload = () => {
          i((Q) => ({
            ...Q,
            [n]: !1
          })), E.status === 200 || E.status === 201 ? (u(!0), o(E.response), T(E.response)) : (D(E.statusText), C(E));
        }, E.onerror = () => {
          D(E.statusText), C(E);
        };
        const Z = (r == null ? void 0 : r.method) || "POST";
        E.open(Z, r == null ? void 0 : r.url, !0);
        const _ = r == null ? void 0 : r.headers;
        for (let Q in _)
          E.setRequestHeader(Q, _[Q]);
        const J = new FormData(), ie = M == null ? void 0 : M.appendData;
        for (let Q in ie)
          ie[Q] && J.append(Q, ie[Q]);
        J.append("file", M.file), E.send(J);
      });
  };
  X(() => {
    j.current || P(e);
  }, []);
  const g = () => {
    j.current && (j.current.abort(), i((M) => ({
      ...M,
      [n]: !1
    })), h(!0), c(0));
  }, S = () => {
    e != null && e.file && (t(
      (M) => M.map((T, D) => n === D ? {
        ...T,
        error: !1
      } : T)
    ), P({ ...e, error: !1 }), h(!1), p(!1));
  };
  return e.removed ? null : /* @__PURE__ */ l("li", { children: [
    /* @__PURE__ */ l("div", { className: "file-icon", children: v[Ce((F = e.file) == null ? void 0 : F.name)] ?? /* @__PURE__ */ l(Oe, { size: 33 }, void 0, !1, {
      fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/Actions/UploadFile/UploadItem.jsx",
      lineNumber: 167,
      columnNumber: 62
    }, void 0) }, void 0, !1, {
      fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/Actions/UploadFile/UploadItem.jsx",
      lineNumber: 166,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ l("div", { className: "file", children: [
      /* @__PURE__ */ l("div", { className: "file-details", children: [
        /* @__PURE__ */ l("div", { className: "file-info", children: [
          /* @__PURE__ */ l("span", { className: "file-name text-truncate", title: (y = e.file) == null ? void 0 : y.name, children: (b = e.file) == null ? void 0 : b.name }, void 0, !1, {
            fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/Actions/UploadFile/UploadItem.jsx",
            lineNumber: 172,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ l("span", { className: "file-size", children: Ze((N = e.file) == null ? void 0 : N.size) }, void 0, !1, {
            fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/Actions/UploadFile/UploadItem.jsx",
            lineNumber: 175,
            columnNumber: 13
          }, void 0)
        ] }, void 0, !0, {
          fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/Actions/UploadFile/UploadItem.jsx",
          lineNumber: 171,
          columnNumber: 11
        }, void 0),
        d ? /* @__PURE__ */ l(wN, { title: H("uploaded"), className: "upload-success" }, void 0, !1, {
          fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/Actions/UploadFile/UploadItem.jsx",
          lineNumber: 178,
          columnNumber: 13
        }, void 0) : f || m ? /* @__PURE__ */ l(n4, { className: "retry-upload", title: "Retry", onClick: S }, void 0, !1, {
          fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/Actions/UploadFile/UploadItem.jsx",
          lineNumber: 180,
          columnNumber: 13
        }, void 0) : /* @__PURE__ */ l(
          "div",
          {
            className: "rm-file",
            title: `${e.error ? H("Remove") : H("abortUpload")}`,
            onClick: e.error ? () => a(n) : g,
            children: /* @__PURE__ */ l(XN, {}, void 0, !1, {
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
      /* @__PURE__ */ l(
        e4,
        {
          percent: s,
          isCanceled: f,
          isCompleted: d,
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
}, i4 = ({
  fileUploadConfig: n,
  maxFileSize: e,
  acceptedFileTypes: t,
  onFileUploading: i,
  onFileUploaded: r
}) => {
  const [o, a] = L([]), [s, c] = L(!1), [d, u] = L({}), { currentFolder: f, currentPathFiles: h } = me(), { onError: m } = qe(), p = oe(null), v = se(), j = (S) => {
    S.key === "Enter" && p.current.click();
  }, w = (S) => {
    if (t && !t.includes(Ce(S.name)))
      return v("fileTypeNotAllowed");
    if (h.some(
      (b) => b.name.toLowerCase() === S.name.toLowerCase() && !b.isDirectory
    )) return v("fileAlreadyExist");
    if (e && S.size > e) return `${v("maxUploadSize")} ${Ze(e, 0)}.`;
  }, H = (S) => {
    if (S = S.filter(
      (F) => !o.some((y) => y.file.name.toLowerCase() === F.name.toLowerCase())
    ), S.length > 0) {
      const F = S.map((y) => {
        const b = i(y, f), N = w(y);
        return N && m({ type: "upload", message: N }, y), {
          file: y,
          appendData: b,
          ...N && { error: N }
        };
      });
      a((y) => [...y, ...F]);
    }
  }, C = (S) => {
    S.preventDefault(), c(!1);
    const F = Array.from(S.dataTransfer.files);
    H(F);
  }, P = (S) => {
    const F = Array.from(S.target.files);
    H(F);
  }, g = (S) => {
    a((F) => {
      const y = F.map((b, N) => S === N ? {
        ...b,
        removed: !0
      } : b);
      return y.every((b) => !!b.removed) ? [] : y;
    });
  };
  return /* @__PURE__ */ l("div", { className: `fm-upload-file ${o.length > 0 ? "file-selcted" : ""}`, children: [
    /* @__PURE__ */ l("div", { className: "select-files", children: [
      /* @__PURE__ */ l(
        "div",
        {
          className: `draggable-file-input ${s ? "dragging" : ""}`,
          onDrop: C,
          onDragOver: (S) => S.preventDefault(),
          onDragEnter: () => c(!0),
          onDragLeave: () => c(!1),
          children: /* @__PURE__ */ l("div", { className: "input-text", children: [
            /* @__PURE__ */ l(QN, { size: 30 }, void 0, !1, {
              fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/Actions/UploadFile/UploadFile.action.jsx",
              lineNumber: 114,
              columnNumber: 13
            }, void 0),
            /* @__PURE__ */ l("span", { children: v("dragFileToUpload") }, void 0, !1, {
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
      /* @__PURE__ */ l("div", { className: "btn-choose-file", children: /* @__PURE__ */ l(we, { padding: "0", onKeyDown: j, children: [
        /* @__PURE__ */ l("label", { htmlFor: "chooseFile", children: v("chooseFile") }, void 0, !1, {
          fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/Actions/UploadFile/UploadFile.action.jsx",
          lineNumber: 120,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ l(
          "input",
          {
            ref: p,
            type: "file",
            id: "chooseFile",
            className: "choose-file-input",
            onChange: P,
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
    o.length > 0 && /* @__PURE__ */ l("div", { className: "files-progress", children: [
      /* @__PURE__ */ l("div", { className: "heading", children: Object.values(d).some((S) => S) ? /* @__PURE__ */ l(fe, { children: [
        /* @__PURE__ */ l("h2", { children: v("uploading") }, void 0, !1, {
          fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/Actions/UploadFile/UploadFile.action.jsx",
          lineNumber: 138,
          columnNumber: 17
        }, void 0),
        /* @__PURE__ */ l(mn, { loading: !0, className: "upload-loading" }, void 0, !1, {
          fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/Actions/UploadFile/UploadFile.action.jsx",
          lineNumber: 139,
          columnNumber: 17
        }, void 0)
      ] }, void 0, !0, {
        fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/Actions/UploadFile/UploadFile.action.jsx",
        lineNumber: 137,
        columnNumber: 15
      }, void 0) : /* @__PURE__ */ l("h2", { children: v("completed") }, void 0, !1, {
        fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/Actions/UploadFile/UploadFile.action.jsx",
        lineNumber: 142,
        columnNumber: 15
      }, void 0) }, void 0, !1, {
        fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/Actions/UploadFile/UploadFile.action.jsx",
        lineNumber: 135,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ l("ul", { children: o.map((S, F) => /* @__PURE__ */ l(
        t4,
        {
          index: F,
          fileData: S,
          setFiles: a,
          fileUploadConfig: n,
          setIsUploading: u,
          onFileUploaded: r,
          handleFileRemove: g
        },
        F,
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
}, rt = ["jpg", "jpeg", "png"], ot = ["mp4", "mov", "avi"], at = ["mp3", "wav", "m4a"], st = ["txt", "pdf"], r4 = ({ filePreviewPath: n, filePreviewComponent: e }) => {
  var v;
  const [t, i] = L(!0), [r, o] = L(!1), { selectedFiles: a } = ge(), s = _e(73), c = (v = Ce(a[0].name)) == null ? void 0 : v.toLowerCase(), d = `${n}${a[0].path}`, u = se(), f = Ye(
    () => e == null ? void 0 : e(a[0]),
    [e]
  ), h = () => {
    i(!1), o(!1);
  }, m = () => {
    i(!1), o(!0);
  }, p = () => {
    window.location.href = d;
  };
  return be.isValidElement(f) ? f : /* @__PURE__ */ l("section", { className: `file-previewer ${c === "pdf" ? "pdf-previewer" : ""}`, children: [
    r || ![
      ...rt,
      ...ot,
      ...at,
      ...st
    ].includes(c) && /* @__PURE__ */ l("div", { className: "preview-error", children: [
      /* @__PURE__ */ l("span", { className: "error-icon", children: s[c] ?? /* @__PURE__ */ l(PN, { size: 73 }, void 0, !1, {
        fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/Actions/PreviewFile/PreviewFile.action.jsx",
        lineNumber: 61,
        columnNumber: 67
      }, void 0) }, void 0, !1, {
        fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/Actions/PreviewFile/PreviewFile.action.jsx",
        lineNumber: 61,
        columnNumber: 13
      }, void 0),
      /* @__PURE__ */ l("span", { className: "error-msg", children: u("previewUnavailable") }, void 0, !1, {
        fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/Actions/PreviewFile/PreviewFile.action.jsx",
        lineNumber: 62,
        columnNumber: 13
      }, void 0),
      /* @__PURE__ */ l("div", { className: "file-info", children: [
        /* @__PURE__ */ l("span", { className: "file-name", children: a[0].name }, void 0, !1, {
          fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/Actions/PreviewFile/PreviewFile.action.jsx",
          lineNumber: 64,
          columnNumber: 15
        }, void 0),
        a[0].size && /* @__PURE__ */ l("span", { children: "-" }, void 0, !1, {
          fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/Actions/PreviewFile/PreviewFile.action.jsx",
          lineNumber: 65,
          columnNumber: 41
        }, void 0),
        /* @__PURE__ */ l("span", { className: "file-size", children: Ze(a[0].size) }, void 0, !1, {
          fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/Actions/PreviewFile/PreviewFile.action.jsx",
          lineNumber: 66,
          columnNumber: 15
        }, void 0)
      ] }, void 0, !0, {
        fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/Actions/PreviewFile/PreviewFile.action.jsx",
        lineNumber: 63,
        columnNumber: 13
      }, void 0),
      /* @__PURE__ */ l(we, { onClick: p, padding: "0.45rem .9rem", children: /* @__PURE__ */ l("div", { className: "download-btn", children: [
        /* @__PURE__ */ l(pn, { size: 18 }, void 0, !1, {
          fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/Actions/PreviewFile/PreviewFile.action.jsx",
          lineNumber: 70,
          columnNumber: 17
        }, void 0),
        /* @__PURE__ */ l("span", { children: u("download") }, void 0, !1, {
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
    rt.includes(c) && /* @__PURE__ */ l(fe, { children: [
      /* @__PURE__ */ l(mn, { isLoading: t }, void 0, !1, {
        fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/Actions/PreviewFile/PreviewFile.action.jsx",
        lineNumber: 78,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ l(
        "img",
        {
          src: d,
          alt: "Preview Unavailable",
          className: `photo-popup-image ${t ? "img-loading" : ""}`,
          onLoad: h,
          onError: m,
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
    ot.includes(c) && /* @__PURE__ */ l("video", { src: d, className: "video-preview", controls: !0, autoPlay: !0 }, void 0, !1, {
      fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/Actions/PreviewFile/PreviewFile.action.jsx",
      lineNumber: 90,
      columnNumber: 9
    }, void 0),
    at.includes(c) && /* @__PURE__ */ l("audio", { src: d, controls: !0, autoPlay: !0, className: "audio-preview" }, void 0, !1, {
      fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/Actions/PreviewFile/PreviewFile.action.jsx",
      lineNumber: 93,
      columnNumber: 9
    }, void 0),
    st.includes(c) && /* @__PURE__ */ l(fe, { children: /* @__PURE__ */ l(
      "iframe",
      {
        src: d,
        onLoad: h,
        onError: m,
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
}, cn = (n) => n.toLowerCase(), ce = (n, e, t = !1) => {
  const i = oe(/* @__PURE__ */ new Set([])), r = Ye(() => new Set(n.map((c) => cn(c))), [n]), o = (c) => {
    if (!c.repeat && (i.current.add(cn(c.key)), r.isSubsetOf(i.current) && !t)) {
      c.preventDefault(), e(c);
      return;
    }
  }, a = (c) => {
    i.current.delete(cn(c.key));
  }, s = () => {
    i.current.clear();
  };
  X(() => (window.addEventListener("keydown", o), window.addEventListener("keyup", a), window.addEventListener("blur", s), () => {
    window.removeEventListener("keydown", o), window.removeEventListener("keyup", a), window.removeEventListener("blur", s);
  }), [r, e, t]);
}, de = {
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
}, o4 = (n, e, t) => {
  const { setClipBoard: i, handleCutCopy: r, handlePasting: o } = Je(), { currentFolder: a, currentPathFiles: s } = me(), { selectedFiles: c, setSelectedFiles: d, handleDownload: u } = ge(), { setActiveLayout: f } = ve(), h = () => {
    t.create && n.show("createFolder");
  }, m = () => {
    t.upload && n.show("uploadFile");
  }, p = () => {
    t.move && r(!0);
  }, v = () => {
    t.copy && r(!1);
  }, j = () => {
    o(a);
  }, w = () => {
    t.rename && n.show("rename");
  }, H = () => {
    t.download && u();
  }, C = () => {
    t.delete && c.length && n.show("delete");
  }, P = () => {
    s.length > 0 && d([s[0]]);
  }, g = () => {
    s.length > 0 && d([s.at(-1)]);
  }, S = () => {
    d(s);
  }, F = () => {
    d((M) => M.length > 0 ? [] : M);
  }, y = () => {
    ye(e, "onRefresh"), i(null);
  }, b = () => {
    f("grid");
  }, N = () => {
    f("list");
  };
  ce(de.createFolder, h, n.isActive), ce(de.uploadFiles, m, n.isActive), ce(de.cut, p, n.isActive), ce(de.copy, v, n.isActive), ce(de.paste, j, n.isActive), ce(de.rename, w, n.isActive), ce(de.download, H, n.isActive), ce(de.delete, C, n.isActive), ce(de.jumpToFirst, P, n.isActive), ce(de.jumpToLast, g, n.isActive), ce(de.selectAll, S, n.isActive), ce(de.clearSelection, F, n.isActive), ce(de.refresh, y, n.isActive), ce(de.gridLayout, b, n.isActive), ce(de.listLayout, N, n.isActive);
}, a4 = ({
  fileUploadConfig: n,
  onFileUploading: e,
  onFileUploaded: t,
  onDelete: i,
  onRefresh: r,
  maxFileSize: o,
  filePreviewPath: a,
  filePreviewComponent: s,
  acceptedFileTypes: c,
  triggerAction: d,
  permissions: u
}) => {
  const [f, h] = L(null), { selectedFiles: m } = ge(), p = se();
  o4(d, r, u);
  const v = {
    uploadFile: {
      title: p("upload"),
      component: /* @__PURE__ */ l(
        i4,
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
      title: p("delete"),
      component: /* @__PURE__ */ l(ZN, { triggerAction: d, onDelete: i }, void 0, !1, {
        fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/Actions/Actions.jsx",
        lineNumber: 46,
        columnNumber: 18
      }, void 0),
      width: "25%"
    },
    previewFile: {
      title: p("preview"),
      component: /* @__PURE__ */ l(
        r4,
        {
          filePreviewPath: a,
          filePreviewComponent: s
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
  if (X(() => {
    if (d.isActive) {
      const j = d.actionType;
      j === "previewFile" && (v[j].title = (m == null ? void 0 : m.name) ?? p("preview")), h(v[j]);
    } else
      h(null);
  }, [d.isActive]), f)
    return /* @__PURE__ */ l(
      Rt,
      {
        heading: f.title,
        show: d.isActive,
        setShow: d.close,
        dialogWidth: f.width,
        children: f == null ? void 0 : f.component
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
}, s4 = () => {
  const [n, e] = L(!1), [t, i] = L(null);
  return {
    isActive: n,
    actionType: t,
    show: (a) => {
      e(!0), i(a);
    },
    close: () => {
      e(!1), i(null);
    }
  };
}, l4 = (n, e) => {
  const [t, i] = L({ col1: n, col2: e }), [r, o] = L(!1), a = oe(null);
  return {
    containerRef: a,
    colSizes: t,
    setColSizes: i,
    isDragging: r,
    handleMouseDown: () => {
      o(!0);
    },
    handleMouseUp: () => {
      o(!1);
    },
    handleMouseMove: (u) => {
      if (!r) return;
      u.preventDefault();
      const h = a.current.getBoundingClientRect(), m = (u.clientX - h.left) / h.width * 100;
      m >= 15 && m <= 60 && i({ col1: m, col2: 100 - m });
    }
  };
}, c4 = (n, e, t) => {
  const i = n[e];
  if (i && isNaN(Date.parse(i)))
    return new Error(
      `Invalid prop \`${e}\` supplied to \`${t}\`. Expected a valid date string (ISO 8601) but received \`${i}\`.`
    );
}, lt = (n, e, t) => {
  const i = n[e];
  try {
    new URL(i);
    return;
  } catch {
    return new Error(
      `Invalid prop \`${e}\` supplied to \`${t}\`. Expected a valid URL but received \`${i}\`.`
    );
  }
}, d4 = {
  create: !0,
  upload: !0,
  move: !0,
  copy: !0,
  rename: !0,
  download: !0,
  delete: !0
}, Gt = ({
  files: n,
  fileUploadConfig: e,
  isLoading: t,
  onCreateFolder: i,
  onFileUploading: r = () => {
  },
  onFileUploaded: o = () => {
  },
  onCut: a,
  onCopy: s,
  onPaste: c,
  onRename: d,
  onDownload: u,
  onDelete: f = () => null,
  onLayoutChange: h = () => {
  },
  onRefresh: m,
  onFileOpen: p = () => {
  },
  onFolderChange: v = () => {
  },
  onSelect: j,
  onSelectionChange: w,
  onError: H = () => {
  },
  layout: C = "grid",
  enableFilePreview: P = !0,
  maxFileSize: g,
  filePreviewPath: S,
  acceptedFileTypes: F,
  height: y = "600px",
  width: b = "100%",
  initialPath: N = "",
  filePreviewComponent: M,
  primaryColor: T = "#6155b4",
  fontFamily: D = "Nunito Sans, sans-serif",
  language: E = "en",
  permissions: Z = {},
  collapsibleNav: _ = !1,
  defaultNavExpanded: J = !0,
  className: ie = "",
  style: Q = {}
}) => {
  const [$, x] = L(J), k = s4(), { containerRef: I, colSizes: R, isDragging: W, handleMouseMove: B, handleMouseUp: V, handleMouseDown: Y } = l4(20, 80), K = {
    "--file-manager-font-family": D,
    "--file-manager-primary-color": T,
    height: y,
    width: b
  }, A = Ye(
    () => ({ ...d4, ...Z }),
    [Z]
  );
  return /* @__PURE__ */ l(
    "main",
    {
      className: `file-explorer ${ie}`,
      onContextMenu: (te) => te.preventDefault(),
      style: { ...K, ...Q },
      children: [
        /* @__PURE__ */ l(mn, { loading: t }, void 0, !1, {
          fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/FileManager.jsx",
          lineNumber: 81,
          columnNumber: 7
        }, void 0),
        /* @__PURE__ */ l(Qv, { language: E, children: /* @__PURE__ */ l(nN, { filesData: n, onError: H, children: /* @__PURE__ */ l(iN, { initialPath: N, onFolderChange: v, children: /* @__PURE__ */ l(
          rN,
          {
            onDownload: u,
            onSelect: j,
            onSelectionChange: w,
            children: /* @__PURE__ */ l(oN, { onPaste: c, onCut: a, onCopy: s, children: /* @__PURE__ */ l(ui, { layout: C, children: [
              /* @__PURE__ */ l(
                Dt,
                {
                  onLayoutChange: h,
                  onRefresh: m,
                  triggerAction: k,
                  permissions: A
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
              /* @__PURE__ */ l(
                "section",
                {
                  ref: I,
                  onMouseMove: B,
                  onMouseUp: V,
                  className: "files-container",
                  children: [
                    /* @__PURE__ */ l(
                      "div",
                      {
                        className: `navigation-pane ${$ ? "open" : "closed"}`,
                        style: {
                          width: R.col1 + "%"
                        },
                        children: [
                          /* @__PURE__ */ l(Lt, { onFileOpen: p }, void 0, !1, {
                            fileName: "C:/Users/P/Documents/GitHub/react-file-manager/frontend/src/FileManager/FileManager.jsx",
                            lineNumber: 110,
                            columnNumber: 23
                          }, void 0),
                          /* @__PURE__ */ l(
                            "div",
                            {
                              className: `sidebar-resize ${W ? "sidebar-dragging" : ""}`,
                              onMouseDown: Y
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
                    /* @__PURE__ */ l(
                      "div",
                      {
                        className: "folders-preview",
                        style: { width: ($ ? R.col2 : 100) + "%" },
                        children: [
                          /* @__PURE__ */ l(
                            gn,
                            {
                              collapsibleNav: _,
                              isNavigationPaneOpen: $,
                              setNavigationPaneOpen: x
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
                          /* @__PURE__ */ l(
                            Ot,
                            {
                              onCreateFolder: i,
                              onRename: d,
                              onFileOpen: p,
                              onRefresh: m,
                              enableFilePreview: P,
                              triggerAction: k,
                              permissions: A
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
              /* @__PURE__ */ l(
                a4,
                {
                  fileUploadConfig: e,
                  onFileUploading: r,
                  onFileUploaded: o,
                  onDelete: f,
                  onRefresh: m,
                  maxFileSize: g,
                  filePreviewPath: S,
                  filePreviewComponent: M,
                  acceptedFileTypes: F,
                  triggerAction: k,
                  permissions: A
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
Gt.displayName = "FileManager";
Gt.propTypes = {
  files: z.arrayOf(
    z.shape({
      name: z.string.isRequired,
      isDirectory: z.bool.isRequired,
      path: z.string.isRequired,
      updatedAt: c4,
      size: z.number
    })
  ).isRequired,
  fileUploadConfig: z.shape({
    url: lt,
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
  filePreviewPath: lt,
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
  Gt as FileManager
};
