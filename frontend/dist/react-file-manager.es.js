import { jsx as e, jsxs as g, Fragment as se } from "react/jsx-runtime";
import at from "react-loading";
import { useState as b, useRef as re, useEffect as K, createContext as ve, useContext as ge, useMemo as lt } from "react";
import { BsGridFill as ct, BsScissors as dt, BsCopy as ut, BsFolderPlus as ft, BsGrid as Be } from "react-icons/bs";
import { FiRefreshCw as ht } from "react-icons/fi";
import { MdOutlineFileDownload as $e, MdOutlineDelete as pt, MdClear as Lt, MdOutlineFileUpload as mt, MdKeyboardArrowRight as It, MdHome as At, MdOutlineNavigateNext as $t, MdMoreHoriz as jt, MdClose as zt } from "react-icons/md";
import { BiRename as vt, BiSelectMultiple as Wt } from "react-icons/bi";
import { FaCheck as gt, FaListUl as we, FaRegPaste as Ie, FaRegFilePdf as Bt, FaRegFileImage as Ee, FaRegFileLines as Ut, FaRegFileWord as Ue, FaRegFileVideo as qe, FaRegFileAudio as He, FaRegFileZipper as qt, FaRegFilePowerpoint as _e, FaRegFileExcel as Ke, FaLaptopFile as Ht, FaRegFileCode as J, FaRegFolderOpen as Ye, FaRegFile as be, FaChevronRight as _t } from "react-icons/fa6";
import Kt from "react-collapsible";
import { FaRegFolderOpen as Ve, FaRegFolder as Xe, FaRegCheckCircle as Yt, FaRegFileAlt as Vt } from "react-icons/fa";
import { IoWarningOutline as Xt } from "react-icons/io5";
import { PiFolderOpen as Gt } from "react-icons/pi";
import { AiOutlineClose as Jt, AiOutlineCloudUpload as Zt } from "react-icons/ai";
import { IoMdRefresh as Qt } from "react-icons/io";
import yt from "react-is";
const Ct = ({ isLoading: t }) => {
  if (t)
    return /* @__PURE__ */ e("div", { className: "fm-loader", children: /* @__PURE__ */ e(at, { color: "black", type: "spokes", height: 50, width: 50 }) });
}, ye = (t = () => {
}) => {
  const [n, s] = b(!1), r = re(null), o = (a) => {
    var i;
    (i = r.current) != null && i.contains(a.target) ? s(!1) : (s(!0), t(a, r));
  };
  return K(() => (document.addEventListener("click", o, !0), document.addEventListener("mousedown", o, !0), () => {
    document.removeEventListener("click", o, !0), document.removeEventListener("mousedown", o, !0);
  }), []), { ref: r, isClicked: n, setIsClicked: s };
}, wt = ve(), en = ({ children: t, layout: n }) => {
  const [s, r] = b(() => o(n));
  function o(a) {
    return ["list", "grid"].includes(a) ? a : "grid";
  }
  return /* @__PURE__ */ e(wt.Provider, { value: { activeLayout: s, setActiveLayout: r }, children: t });
}, ce = () => ge(wt), tn = ({ setShowToggleViewMenu: t, onLayoutChange: n }) => {
  const s = ye(() => {
    t(!1);
  }), { activeLayout: r, setActiveLayout: o } = ce(), a = [
    {
      key: "grid",
      name: "Grid",
      icon: /* @__PURE__ */ e(ct, { size: 18 })
    },
    {
      key: "list",
      name: "List",
      icon: /* @__PURE__ */ e(we, { size: 18 })
    }
  ], i = (l) => {
    o(l), n(l), t(!1);
  };
  return /* @__PURE__ */ e("div", { ref: s.ref, className: "toggle-view", role: "dropdown", children: /* @__PURE__ */ e("ul", { role: "menu", "aria-orientation": "vertical", children: a.map((l) => /* @__PURE__ */ g(
    "li",
    {
      role: "menuitem",
      onClick: () => i(l.key),
      onKeyDown: () => i(l.key),
      children: [
        /* @__PURE__ */ e("span", { children: l.key === r && /* @__PURE__ */ e(gt, { size: 13 }) }),
        /* @__PURE__ */ e("span", { children: l.icon }),
        /* @__PURE__ */ e("span", { children: l.name })
      ]
    },
    l.key
  )) }) });
}, bt = ve(), nn = ({ children: t, filesData: n, onError: s }) => {
  const [r, o] = b([]);
  K(() => {
    o(n);
  }, [n]);
  const a = (i) => i.isDirectory ? r.filter((l) => l.path === `${i.path}/${l.name}`) : [];
  return /* @__PURE__ */ e(bt.Provider, { value: { files: r, setFiles: o, getChildren: a, onError: s }, children: t });
}, ke = () => ge(bt), Ft = ve(), rn = ({ children: t, initialPath: n }) => {
  const { files: s } = ke(), r = re(!1), [o, a] = b(""), [i, l] = b(null), [c, f] = b([]);
  return K(() => {
    Array.isArray(s) && s.length > 0 && (f(() => s.filter((p) => p.path === `${o}/${p.name}`)), l(() => s.find((p) => p.path === o) ?? null));
  }, [s, o]), K(() => {
    r.current || (a(s.some((p) => p.path === n) ? n : ""), r.current = !0);
  }, [n, s]), /* @__PURE__ */ e(
    Ft.Provider,
    {
      value: {
        currentPath: o,
        setCurrentPath: a,
        currentFolder: i,
        setCurrentFolder: l,
        currentPathFiles: c,
        setCurrentPathFiles: f
      },
      children: t
    }
  );
}, oe = () => ge(Ft), fe = (t, n, ...s) => {
  try {
    if (typeof t == "function")
      t(...s);
    else
      throw new Error(
        `<FileManager /> Missing prop: Callback function "${n}" is required.`
      );
  } catch (r) {
    console.error(r.message);
  }
}, kt = ve(), sn = ({ children: t, onDownload: n }) => {
  const [s, r] = b([]), o = () => {
    fe(n, "onDownload", s);
  };
  return /* @__PURE__ */ e(kt.Provider, { value: { selectedFiles: s, setSelectedFiles: r, handleDownload: o }, children: t });
}, le = () => ge(kt), Nt = ve(), on = ({ children: t, onPaste: n }) => {
  const [s, r] = b(null), { selectedFiles: o, setSelectedFiles: a } = le(), i = (c) => {
    r({
      files: o,
      isMoving: c
    });
  }, l = (c) => {
    if (c && !c.isDirectory) return;
    const f = s.files, p = s.isMoving ? "move" : "copy";
    fe(n, "onPaste", f, c, p), s.isMoving && r(null), a([]);
  };
  return /* @__PURE__ */ e(Nt.Provider, { value: { clipBoard: s, setClipBoard: r, handleCutCopy: i, handlePasting: l }, children: t });
}, Ne = () => ge(Nt), an = ({
  allowCreateFolder: t = !0,
  allowUploadFile: n = !0,
  onLayoutChange: s,
  onRefresh: r,
  triggerAction: o
}) => {
  var P;
  const [a, i] = b(!1), { currentFolder: l } = oe(), { selectedFiles: c, setSelectedFiles: f, handleDownload: p } = le(), { clipBoard: u, setClipBoard: w, handleCutCopy: O, handlePasting: C } = Ne(), { activeLayout: D } = ce(), R = [
    {
      icon: /* @__PURE__ */ e(ft, { size: 17, strokeWidth: 0.3 }),
      text: "New folder",
      permission: t,
      onClick: () => o.show("createFolder")
    },
    {
      icon: /* @__PURE__ */ e(mt, { size: 18 }),
      text: "Upload",
      permission: n,
      onClick: () => o.show("uploadFile")
    },
    {
      icon: /* @__PURE__ */ e(Ie, { size: 18 }),
      text: "Paste",
      permission: !!u,
      onClick: E
    }
  ], x = [
    {
      icon: D === "grid" ? /* @__PURE__ */ e(ct, { size: 16 }) : /* @__PURE__ */ e(we, { size: 16 }),
      title: "Change View",
      onClick: () => i((m) => !m)
    },
    {
      icon: /* @__PURE__ */ e(ht, { size: 16 }),
      title: "Refresh",
      onClick: () => {
        fe(r, "onRefresh"), w(null);
      }
    }
  ];
  function E() {
    C(l);
  }
  const N = () => {
    p(), f([]);
  };
  return c.length > 0 ? /* @__PURE__ */ e("div", { className: "toolbar file-selected", children: /* @__PURE__ */ g("div", { className: "file-action-container", children: [
    /* @__PURE__ */ g("div", { children: [
      /* @__PURE__ */ g("button", { className: "item-action file-action", onClick: () => O(!0), children: [
        /* @__PURE__ */ e(dt, { size: 18 }),
        /* @__PURE__ */ e("span", { children: "Cut" })
      ] }),
      /* @__PURE__ */ g("button", { className: "item-action file-action", onClick: () => O(!1), children: [
        /* @__PURE__ */ e(ut, { strokeWidth: 0.1, size: 17 }),
        /* @__PURE__ */ e("span", { children: "Copy" })
      ] }),
      ((P = u == null ? void 0 : u.files) == null ? void 0 : P.length) > 0 && /* @__PURE__ */ g(
        "button",
        {
          className: "item-action file-action",
          onClick: E,
          children: [
            /* @__PURE__ */ e(Ie, { size: 18 }),
            /* @__PURE__ */ e("span", { children: "Paste" })
          ]
        }
      ),
      c.length === 1 && /* @__PURE__ */ g(
        "button",
        {
          className: "item-action file-action",
          onClick: () => o.show("rename"),
          children: [
            /* @__PURE__ */ e(vt, { size: 19 }),
            /* @__PURE__ */ e("span", { children: "Rename" })
          ]
        }
      ),
      !c.isDirectory && /* @__PURE__ */ g("button", { className: "item-action file-action", onClick: N, children: [
        /* @__PURE__ */ e($e, { size: 19 }),
        /* @__PURE__ */ e("span", { children: "Download" })
      ] }),
      /* @__PURE__ */ g(
        "button",
        {
          className: "item-action file-action",
          onClick: () => o.show("delete"),
          children: [
            /* @__PURE__ */ e(pt, { size: 19 }),
            /* @__PURE__ */ e("span", { children: "Delete" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ g(
      "button",
      {
        className: "item-action file-action",
        title: "Clear selection",
        onClick: () => f([]),
        children: [
          /* @__PURE__ */ g("span", { children: [
            c.length,
            " item",
            c.length > 1 && "s",
            " selected"
          ] }),
          /* @__PURE__ */ e(Lt, { size: 18 })
        ]
      }
    )
  ] }) }) : /* @__PURE__ */ e("div", { className: "toolbar", children: /* @__PURE__ */ g("div", { className: "fm-toolbar", children: [
    /* @__PURE__ */ e("div", { children: R.filter((m) => m.permission).map((m, h) => /* @__PURE__ */ g("button", { className: "item-action", onClick: m.onClick, children: [
      m.icon,
      /* @__PURE__ */ e("span", { children: m.text })
    ] }, h)) }),
    /* @__PURE__ */ g("div", { children: [
      x.map((m, h) => /* @__PURE__ */ g("div", { className: "toolbar-left-items", children: [
        /* @__PURE__ */ e("button", { className: "item-action icon-only", title: m.title, onClick: m.onClick, children: m.icon }),
        h !== x.length - 1 && /* @__PURE__ */ e("div", { className: "item-separator" })
      ] }, h)),
      a && /* @__PURE__ */ e(
        tn,
        {
          setShowToggleViewMenu: i,
          onLayoutChange: s
        }
      )
    ] })
  ] }) });
}, Pt = ({ folder: t }) => {
  const [n, s] = b(!1), [r, o] = b(!1), { currentPath: a, setCurrentPath: i } = oe(), l = () => {
    o(!0), i(t.path);
  }, c = (f) => {
    f.stopPropagation(), s((p) => !p);
  };
  return K(() => {
    o(a === t.path);
    const f = a.split("/");
    f.pop(), f.join("/") === t.path && s(!0);
  }, [a]), t.subDirectories.length > 0 ? /* @__PURE__ */ g(se, { children: [
    /* @__PURE__ */ g(
      "div",
      {
        className: `sb-folders-list-item ${r ? "active-list-item" : ""}`,
        onClick: l,
        children: [
          /* @__PURE__ */ e("span", { onClick: c, children: /* @__PURE__ */ e(
            It,
            {
              size: 20,
              className: `${n ? "folder-rotate-down" : "folder-rotate-right"}`
            }
          ) }),
          /* @__PURE__ */ g("div", { className: "sb-folder-details", children: [
            n || r ? /* @__PURE__ */ e(Ve, { size: 20, className: "folder-open-icon" }) : /* @__PURE__ */ e(Xe, { size: 17, className: "folder-close-icon" }),
            /* @__PURE__ */ e("span", { className: "sb-folder-name", title: t.name, children: t.name })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ e(Kt, { open: n, children: /* @__PURE__ */ e("div", { className: "folder-collapsible", children: t.subDirectories.map((f, p) => /* @__PURE__ */ e(Pt, { folder: f }, p)) }) })
  ] }) : /* @__PURE__ */ g(
    "div",
    {
      className: `sb-folders-list-item ${r ? "active-list-item" : ""}`,
      onClick: l,
      children: [
        /* @__PURE__ */ e("span", { className: "non-expanable" }),
        /* @__PURE__ */ g("div", { className: "sb-folder-details", children: [
          r ? /* @__PURE__ */ e(Ve, { size: 20, className: "folder-open-icon" }) : /* @__PURE__ */ e(Xe, { size: 17, className: "folder-close-icon" }),
          /* @__PURE__ */ e("span", { className: "sb-folder-name", title: t.name, children: t.name })
        ] })
      ]
    }
  );
}, ln = (t) => t == null ? void 0 : t.split("/").slice(0, -1).join("/"), cn = () => {
  const [t, n] = b([]), { files: s } = ke(), r = (o, a) => {
    var i;
    return a[o] ? (i = a[o]) == null ? void 0 : i.map((l) => ({
      ...l,
      subDirectories: r(l.path, a)
    })) : [];
  };
  return K(() => {
    if (Array.isArray(s)) {
      const o = s.filter((i) => i.isDirectory), a = Object.groupBy(o, ({ path: i }) => ln(i));
      n(() => r("", a));
    }
  }, [s]), /* @__PURE__ */ e("div", { className: "sb-folders-list", children: (t == null ? void 0 : t.length) > 0 ? /* @__PURE__ */ e(se, { children: t == null ? void 0 : t.map((o, a) => /* @__PURE__ */ e(Pt, { folder: o }, a)) }) : /* @__PURE__ */ e("div", { className: "empty-nav-pane", children: "Nothing here yet" }) });
}, dn = () => {
  const [t, n] = b([]), [s, r] = b([]), [o, a] = b([]), [i, l] = b(!1), { currentPath: c, setCurrentPath: f } = oe(), p = re(null), u = re([]), w = re(null), O = ye(() => {
    l(!1);
  });
  K(() => {
    n(() => {
      let E = "";
      return c == null ? void 0 : c.split("/").map((N) => ({
        name: N || "Home",
        path: N === "" ? N : E += `/${N}`
      }));
    }), r([]), a([]);
  }, [c]);
  const C = (E) => {
    f(E);
  }, D = () => {
    const E = p.current.clientWidth, N = getComputedStyle(p.current), P = parseFloat(N.paddingLeft), m = s.length > 0 ? 1 : 0, h = parseFloat(N.gap) * (t.length + m);
    return E - (P + h);
  }, R = () => {
    var m;
    const E = D(), N = u.current.reduce((h, S) => S ? h + S.clientWidth : h, 0), P = ((m = w.current) == null ? void 0 : m.clientWidth) || 0;
    return E - (N + P);
  }, x = () => p.current.scrollWidth > p.current.clientWidth;
  return K(() => {
    var E;
    if (x()) {
      const N = t[1], P = (E = u.current[1]) == null ? void 0 : E.clientWidth;
      a((m) => [...m, P]), r((m) => [...m, N]), n((m) => m.filter((h, S) => S !== 1));
    } else if (s.length > 0 && R() > o.at(-1)) {
      const N = [t[0], s.at(-1), ...t.slice(1)];
      n(N), r((P) => P.slice(0, -1)), a((P) => P.slice(0, -1));
    }
  }, [x]), /* @__PURE__ */ g("div", { className: "bread-crumb-container", children: [
    /* @__PURE__ */ e("div", { className: "breadcrumb", ref: p, children: t.map((E, N) => /* @__PURE__ */ g("div", { style: { display: "contents" }, children: [
      /* @__PURE__ */ g(
        "span",
        {
          className: "folder-name",
          onClick: () => C(E.path),
          ref: (P) => u.current[N] = P,
          children: [
            N === 0 ? /* @__PURE__ */ e(At, {}) : /* @__PURE__ */ e($t, {}),
            E.name
          ]
        }
      ),
      (s == null ? void 0 : s.length) > 0 && N === 0 && /* @__PURE__ */ e(
        "button",
        {
          className: "folder-name folder-name-btn",
          onClick: () => l(!0),
          ref: w,
          title: "Show more folders",
          children: /* @__PURE__ */ e(jt, { size: 22, className: "hidden-folders" })
        }
      )
    ] }, N)) }),
    i && /* @__PURE__ */ e("ul", { ref: O.ref, className: "hidden-folders-container", children: s.map((E, N) => /* @__PURE__ */ e(
      "li",
      {
        onClick: () => {
          C(E.path), l(!1);
        },
        children: E.name
      },
      N
    )) })
  ] });
}, Fe = (t) => ({
  pdf: /* @__PURE__ */ e(Bt, { size: t }),
  jpg: /* @__PURE__ */ e(Ee, { size: t }),
  jpeg: /* @__PURE__ */ e(Ee, { size: t }),
  png: /* @__PURE__ */ e(Ee, { size: t }),
  txt: /* @__PURE__ */ e(Ut, { size: t }),
  doc: /* @__PURE__ */ e(Ue, { size: t }),
  docx: /* @__PURE__ */ e(Ue, { size: t }),
  mp4: /* @__PURE__ */ e(qe, { size: t }),
  webm: /* @__PURE__ */ e(qe, { size: t }),
  mp3: /* @__PURE__ */ e(He, { size: t }),
  m4a: /* @__PURE__ */ e(He, { size: t }),
  zip: /* @__PURE__ */ e(qt, { size: t }),
  ppt: /* @__PURE__ */ e(_e, { size: t }),
  pptx: /* @__PURE__ */ e(_e, { size: t }),
  xls: /* @__PURE__ */ e(Ke, { size: t }),
  xlsx: /* @__PURE__ */ e(Ke, { size: t }),
  exe: /* @__PURE__ */ e(Ht, { size: t }),
  html: /* @__PURE__ */ e(J, { size: t }),
  css: /* @__PURE__ */ e(J, { size: t }),
  js: /* @__PURE__ */ e(J, { size: t }),
  php: /* @__PURE__ */ e(J, { size: t }),
  py: /* @__PURE__ */ e(J, { size: t }),
  java: /* @__PURE__ */ e(J, { size: t }),
  cpp: /* @__PURE__ */ e(J, { size: t }),
  c: /* @__PURE__ */ e(J, { size: t }),
  ts: /* @__PURE__ */ e(J, { size: t }),
  jsx: /* @__PURE__ */ e(J, { size: t }),
  tsx: /* @__PURE__ */ e(J, { size: t }),
  json: /* @__PURE__ */ e(J, { size: t }),
  xml: /* @__PURE__ */ e(J, { size: t }),
  sql: /* @__PURE__ */ e(J, { size: t }),
  csv: /* @__PURE__ */ e(J, { size: t }),
  md: /* @__PURE__ */ e(J, { size: t }),
  svg: /* @__PURE__ */ e(J, { size: t })
}), Et = (t, n, s) => {
  if (s.find((r) => r.name === t)) {
    const r = "", o = t;
    let a = 0;
    const i = new RegExp(`${o} \\(\\d+\\)`);
    s.forEach((f) => {
      const p = f.isDirectory ? f.name : f.name.split(".").slice(0, -1).join(".");
      if (i.test(p)) {
        const u = p.split(`${o} (`).pop().slice(0, -1), w = parseInt(u);
        !isNaN(w) && w > a && (a = w);
      }
    });
    const l = ` (${++a})`;
    return o + l + r;
  } else
    return t;
}, Rt = ({ nameInputRef: t, maxLength: n, value: s, onChange: r, onKeyDown: o, onClick: a, rows: i }) => /* @__PURE__ */ e(
  "textarea",
  {
    ref: t,
    className: "rename-file",
    maxLength: n,
    value: s,
    onChange: r,
    onKeyDown: o,
    onClick: a,
    rows: i
  }
), xt = ({ message: t, xPlacement: n, yPlacement: s }) => /* @__PURE__ */ e("p", { className: `error-tooltip ${n} ${s}`, children: t }), un = 220, fn = ({ filesViewRef: t, file: n, onCreateFolder: s, triggerAction: r }) => {
  const [o, a] = b(n.name), [i, l] = b(!1), [c, f] = b(""), [p, u] = b("right"), [w, O] = b("bottom"), C = ye((h) => {
    h.preventDefault(), h.stopPropagation();
  }), { currentFolder: D, currentPathFiles: R, setCurrentPathFiles: x } = oe(), { activeLayout: E } = ce(), N = (h) => {
    a(h.target.value), l(!1);
  }, P = (h) => {
    if (h.stopPropagation(), h.key === "Enter") {
      h.preventDefault(), m();
      return;
    }
    h.key === "Escape" && (h.preventDefault(), r.close(), x((y) => y.filter((k) => k.key !== n.key))), /[\\/:*?"<>|]/.test(h.key) ? (h.preventDefault(), f(
      `A file name can't contain any of the following characters: \\ / : * ? " < > |`
    ), l(!0)) : (l(!1), f(""));
  };
  K(() => {
    if (i) {
      const h = setTimeout(() => {
        l(!1), f("");
      }, 7e3);
      return () => clearTimeout(h);
    }
  }, [i]);
  function m() {
    var k, T;
    let h = o.trim();
    const S = R.filter((j) => !(j.key && j.key === n.key));
    if (S.find((j) => j.name.toLowerCase() === h.toLowerCase())) {
      f(`This destination already contains a folder named '${h}'.`), l(!0), (k = C.ref.current) == null || k.focus(), (T = C.ref.current) == null || T.select(), C.setIsClicked(!1);
      return;
    }
    h === "" && (h = Et("New Folder", !0, S)), fe(s, "onCreateFolder", h, D), x((j) => j.filter((_) => _.key !== n.key)), r.close();
  }
  return K(() => {
    var h, S, y;
    if ((h = C.ref.current) == null || h.focus(), (S = C.ref.current) == null || S.select(), (y = C.ref) != null && y.current) {
      const _ = t.current.getBoundingClientRect(), $ = C.ref.current, V = $.getBoundingClientRect();
      _.right - V.left > 313 ? u("right") : u("left"), _.bottom - (V.top + $.clientHeight) > 88 ? O("bottom") : O("top");
    }
  }, []), K(() => {
    C.isClicked && m();
  }, [C.isClicked]), /* @__PURE__ */ g(se, { children: [
    /* @__PURE__ */ e(
      Rt,
      {
        nameInputRef: C.ref,
        maxLength: un,
        value: o,
        onChange: N,
        onKeyDown: P,
        onClick: (h) => h.stopPropagation(),
        ...E === "list" && { rows: 1 }
      }
    ),
    i && /* @__PURE__ */ e(
      xt,
      {
        message: c,
        xPlacement: p,
        yPlacement: w
      }
    )
  ] });
}, me = ({ onClick: t, onKeyDown: n, type: s = "primary", padding: r = "0.4rem 0.8rem", children: o }) => /* @__PURE__ */ e(
  "button",
  {
    onClick: t,
    onKeyDown: n,
    className: `fm-button fm-button-${s}`,
    style: { padding: r },
    children: o
  }
), Tt = ({
  children: t,
  show: n,
  setShow: s,
  heading: r,
  dialogWidth: o = "25%",
  contentClassName: a = "",
  closeButton: i = !0
}) => {
  const l = re(null), c = (f) => {
    f.key === "Escape" && s(!1);
  };
  return K(() => {
    n ? l.current.showModal() : l.current.close();
  }, [n]), /* @__PURE__ */ g(
    "dialog",
    {
      ref: l,
      className: "fm-modal dialog",
      style: { width: o },
      onKeyDown: c,
      children: [
        /* @__PURE__ */ g("div", { className: "fm-modal-header", children: [
          /* @__PURE__ */ e("span", { className: "fm-modal-heading", children: r }),
          i && /* @__PURE__ */ e(zt, { size: 18, onClick: () => s(!1), className: "close-icon", title: "Close" })
        ] }),
        t
      ]
    }
  );
}, pe = (t) => t.split(".").pop(), hn = 220, pn = ({ filesViewRef: t, file: n, onRename: s, triggerAction: r }) => {
  const [o, a] = b(n == null ? void 0 : n.name), [i, l] = b(!1), [c, f] = b(!1), [p, u] = b(""), [w, O] = b("right"), [C, D] = b("bottom"), { currentPathFiles: R, setCurrentPathFiles: x } = oe(), { activeLayout: E } = ce(), N = re(null), P = ye((y) => {
    var k;
    (k = N.current) != null && k.contains(y.target) || (y.preventDefault(), y.stopPropagation());
  }), m = (y) => {
    if (y.stopPropagation(), y.key === "Enter") {
      y.preventDefault(), P.setIsClicked(!0);
      return;
    }
    /[\\/:*?"<>|]/.test(y.key) ? (y.preventDefault(), u(
      `A file name can't contain any of the following characters: \\ / : * ? " < > |`
    ), f(!0)) : f(!1);
  };
  K(() => {
    if (c) {
      const y = setTimeout(() => {
        f(!1), u("");
      }, 7e3);
      return () => clearTimeout(y);
    }
  }, [c]);
  function h(y) {
    if (o === "" || o === n.name) {
      x(
        (k) => k.map((T) => (T.key === n.key && (T.isEditing = !1), T))
      ), r.close();
      return;
    } else if (R.some((k) => k.name === o)) {
      f(!0), u(`This destination already contains a folder named '${o}'.`), P.setIsClicked(!1);
      return;
    } else if (!n.isDirectory && !y) {
      const k = pe(n.name), T = pe(o);
      if (k !== T) {
        l(!0);
        return;
      }
    }
    f(!1), fe(s, "onRename", n, o), x((k) => k.filter((T) => T.key !== n.key)), r.close();
  }
  const S = () => {
    var y, k, T, j, _, $;
    if ((k = (y = P.ref) == null ? void 0 : y.current) == null || k.focus(), n.isDirectory)
      (j = (T = P.ref) == null ? void 0 : T.current) == null || j.select();
    else {
      const V = pe(n.name), te = n.name.length - V.length - 1;
      ($ = (_ = P.ref) == null ? void 0 : _.current) == null || $.setSelectionRange(0, te);
    }
  };
  return K(() => {
    var y;
    if (S(), (y = P.ref) != null && y.current) {
      const _ = t.current.getBoundingClientRect(), $ = P.ref.current, V = $.getBoundingClientRect();
      _.right - V.left > 313 ? O("right") : O("left"), _.bottom - (V.top + $.clientHeight) > 88 ? D("bottom") : D("top");
    }
  }, []), K(() => {
    P.isClicked && h(!1), S();
  }, [P.isClicked]), /* @__PURE__ */ g(se, { children: [
    /* @__PURE__ */ e(
      Rt,
      {
        nameInputRef: P.ref,
        maxLength: hn,
        value: o,
        onChange: (y) => {
          a(y.target.value), f(!1);
        },
        onKeyDown: m,
        onClick: (y) => y.stopPropagation(),
        ...E === "list" && { rows: 1 }
      }
    ),
    c && /* @__PURE__ */ e(
      xt,
      {
        message: p,
        xPlacement: w,
        yPlacement: C
      }
    ),
    /* @__PURE__ */ e(
      Tt,
      {
        heading: "Rename",
        show: i,
        setShow: l,
        dialogWidth: "25vw",
        closeButton: !1,
        children: /* @__PURE__ */ g("div", { className: "fm-rename-folder-container", ref: N, children: [
          /* @__PURE__ */ e("div", { className: "fm-rename-folder-input", children: /* @__PURE__ */ g("div", { className: "fm-rename-warning", children: [
            /* @__PURE__ */ e(Xt, { size: 70, color: "orange" }),
            /* @__PURE__ */ e("div", { children: "If you change a file name extension, the file might become unusable. Are you sure you want to change it?" })
          ] }) }),
          /* @__PURE__ */ g("div", { className: "fm-rename-folder-action", children: [
            /* @__PURE__ */ e(
              me,
              {
                type: "secondary",
                onClick: () => {
                  x(
                    (y) => y.map((k) => (k.key === n.key && (k.isEditing = !1), k))
                  ), l(!1), r.close();
                },
                children: "No"
              }
            ),
            /* @__PURE__ */ e(
              me,
              {
                type: "danger",
                onClick: () => {
                  l(!1), h(!0);
                },
                children: "Yes"
              }
            )
          ] })
        ] })
      }
    )
  ] });
}, Pe = (t, n = 2) => {
  if (isNaN(t)) return "";
  const s = t / 1024, r = s / 1024, o = r / 1024;
  if (s < 1024)
    return `${s.toFixed(n)} KB`;
  if (r < 1024)
    return `${r.toFixed(n)} MB`;
  if (r >= 1024)
    return `${o.toFixed(n)} GB`;
}, mn = (t) => {
  if (!t || isNaN(Date.parse(t))) return "";
  t = new Date(t);
  let n = t.getHours();
  const s = t.getMinutes(), r = n >= 12 ? "PM" : "AM";
  n = n % 12, n = n || 12;
  const o = t.getMonth() + 1, a = t.getDate(), i = t.getFullYear();
  return `${o}/${a}/${i} ${n}:${s < 10 ? "0" + s : s} ${r}`;
}, Dt = ({ name: t, id: n, checked: s, onClick: r, onChange: o, className: a = "", title: i }) => /* @__PURE__ */ e(
  "input",
  {
    className: `fm-checkbox ${a}`,
    type: "checkbox",
    name: t,
    id: n,
    checked: s,
    onClick: r,
    onChange: o,
    title: i
  }
), Re = 50, vn = ({
  index: t,
  file: n,
  onCreateFolder: s,
  onRename: r,
  enableFilePreview: o,
  onFileOpen: a,
  filesViewRef: i,
  selectedFileIndexes: l,
  triggerAction: c,
  handleContextMenu: f,
  setLastSelectedFile: p
}) => {
  var Z, G, ie, ze;
  const [u, w] = b(!1), [O, C] = b(0), [D, R] = b("hidden"), [x, E] = b(""), [N, P] = b(null), { activeLayout: m } = ce(), h = m === "grid" ? 48 : 20, S = Fe(h), { setCurrentPath: y, currentPathFiles: k } = oe(), { setSelectedFiles: T } = le(), { clipBoard: j, handleCutCopy: _, setClipBoard: $, handlePasting: V } = Ne(), te = re(null), X = Fe(Re), Y = (j == null ? void 0 : j.isMoving) && j.files.find((W) => W.name === n.name && W.path === n.path), de = () => {
    a(n), n.isDirectory ? (y(n.path), T([])) : o && c.show("previewFile");
  }, Ce = (W, ne) => {
    if (l.length > 0 && W) {
      let ae = !1, ue = l[0], he = t;
      if (ue >= he) {
        const Mt = ue;
        ue = he, he = Mt, ae = !0;
      }
      const We = k.slice(ue, he + 1);
      T(ae ? We.reverse() : We);
    } else l.length > 0 && ne ? T((ae) => {
      const ue = ae.filter((he) => he.path !== n.path);
      return ae.length === ue.length ? [...ae, n] : ue;
    }) : T([n]);
  }, d = (W) => {
    if (W.stopPropagation(), n.isEditing) return;
    Ce(W.shiftKey, W.ctrlKey);
    const ne = (/* @__PURE__ */ new Date()).getTime();
    if (ne - O < 300) {
      de();
      return;
    }
    C(ne);
  }, v = (W) => {
    W.key === "Enter" && (W.stopPropagation(), T([n]), de());
  }, A = (W) => {
    W.stopPropagation(), W.preventDefault(), !n.isEditing && (u || T([n]), p(n), f(W, !0));
  }, I = () => {
    R("visible");
  }, M = () => {
    !u && R("hidden");
  }, z = (W) => {
    W.target.checked ? T((ne) => [...ne, n]) : T((ne) => ne.filter((ae) => ae.name !== n.name && ae.path !== n.path)), w(W.target.checked);
  }, F = (W) => {
    W.dataTransfer.setDragImage(te.current, 30, 50), W.dataTransfer.effectAllowed = "copy", _(!0);
  }, L = () => $(null), B = (W) => {
    W.preventDefault(), u || !n.isDirectory ? W.dataTransfer.dropEffect = "none" : (P({ x: W.clientX, y: W.clientY + 12 }), W.dataTransfer.dropEffect = "copy", E("file-drop-zone"));
  }, H = (W) => {
    W.currentTarget.contains(W.relatedTarget) || (E((ne) => ne && ""), P(null));
  }, U = (W) => {
    W.preventDefault(), !(u || !n.isDirectory) && (V(n), E((ne) => ne && ""), P(null));
  };
  return K(() => {
    w(l.includes(t)), R(l.includes(t) ? "visible" : "hidden");
  }, [l]), /* @__PURE__ */ g(
    "div",
    {
      className: `file-item-container ${x} ${u || n.isEditing ? "file-selected" : ""} ${Y ? "file-moving" : ""}`,
      tabIndex: 0,
      title: n.name,
      onClick: d,
      onKeyDown: v,
      onContextMenu: A,
      onMouseOver: I,
      onMouseLeave: M,
      draggable: u,
      onDragStart: F,
      onDragEnd: L,
      onDragEnter: B,
      onDragOver: B,
      onDragLeave: H,
      onDrop: U,
      children: [
        /* @__PURE__ */ g("div", { className: "file-item", children: [
          !n.isEditing && /* @__PURE__ */ e(
            Dt,
            {
              name: n.name,
              id: n.name,
              checked: u,
              className: `selection-checkbox ${D}`,
              onChange: z,
              onClick: (W) => W.stopPropagation()
            }
          ),
          n.isDirectory ? /* @__PURE__ */ e(Ye, { size: h }) : /* @__PURE__ */ e(se, { children: S[(G = (Z = n.name) == null ? void 0 : Z.split(".").pop()) == null ? void 0 : G.toLowerCase()] ?? /* @__PURE__ */ e(be, { size: h }) }),
          n.isEditing ? /* @__PURE__ */ e("div", { className: `rename-file-container ${m}`, children: c.actionType === "createFolder" ? /* @__PURE__ */ e(
            fn,
            {
              filesViewRef: i,
              file: n,
              onCreateFolder: s,
              triggerAction: c
            }
          ) : /* @__PURE__ */ e(
            pn,
            {
              filesViewRef: i,
              file: n,
              onRename: r,
              triggerAction: c
            }
          ) }) : /* @__PURE__ */ e("span", { className: "text-truncate file-name", children: n.name })
        ] }),
        m === "list" && /* @__PURE__ */ g(se, { children: [
          /* @__PURE__ */ e("div", { className: "modified-date", children: mn(n.updatedAt) }),
          /* @__PURE__ */ e("div", { className: "size", children: (n == null ? void 0 : n.size) > 0 ? Pe(n == null ? void 0 : n.size) : "" })
        ] }),
        N && /* @__PURE__ */ g(
          "div",
          {
            style: {
              top: `${N.y}px`,
              left: `${N.x}px`
            },
            className: "drag-move-tooltip",
            children: [
              "Move to ",
              /* @__PURE__ */ e("span", { className: "drop-zone-file-name", children: n.name })
            ]
          }
        ),
        /* @__PURE__ */ e("div", { ref: te, className: "drag-icon", children: n.isDirectory ? /* @__PURE__ */ e(Ye, { size: Re }) : /* @__PURE__ */ e(se, { children: X[(ze = (ie = n.name) == null ? void 0 : ie.split(".").pop()) == null ? void 0 : ze.toLowerCase()] ?? /* @__PURE__ */ e(be, { size: Re }) }) })
      ]
    }
  );
}, gn = ({ list: t }) => /* @__PURE__ */ e("ul", { className: "sub-menu", children: t == null ? void 0 : t.map((n) => /* @__PURE__ */ g("li", { onClick: n.onClick, children: [
  /* @__PURE__ */ e("span", { className: "item-selected", children: n.selected && /* @__PURE__ */ e(gt, { size: 13 }) }),
  n.icon,
  /* @__PURE__ */ e("span", { children: n.title })
] }, n.title)) }), yn = ({ filesViewRef: t, contextMenuRef: n, menuItems: s, visible: r, clickPosition: o }) => {
  const [a, i] = b(0), [l, c] = b(0), [f, p] = b(null), u = () => {
    const { clickX: C, clickY: D } = o, R = t.current, x = R.getBoundingClientRect(), E = R.offsetWidth - R.clientWidth, N = n.current.getBoundingClientRect(), P = N.width, m = N.height, h = C - x.left, S = x.width - (h + E) > P, y = !S, k = D - x.top, T = x.height - k > m, j = !T;
    S ? i(`${h}px`) : y && i(`${h - P}px`), T ? c(`${k + R.scrollTop}px`) : j && c(`${k + R.scrollTop - m}px`);
  }, w = (C) => {
    C.preventDefault(), C.stopPropagation();
  }, O = (C) => {
    p(C);
  };
  if (K(() => {
    r && n.current ? u() : (c(0), i(0), p(null));
  }, [r]), r)
    return /* @__PURE__ */ e(
      "div",
      {
        ref: n,
        onContextMenu: w,
        onClick: (C) => C.stopPropagation(),
        className: `fm-context-menu ${l ? "visible" : "hidden"}`,
        style: {
          top: l,
          left: a
        },
        children: /* @__PURE__ */ e("div", { className: "file-context-menu-list", children: /* @__PURE__ */ e("ul", { children: s.filter((C) => !C.hidden).map((C, D) => {
          const R = C.hasOwnProperty("children"), x = f === D;
          return /* @__PURE__ */ g("div", { children: [
            /* @__PURE__ */ g(
              "li",
              {
                onClick: C.onClick,
                className: `${C.className ?? ""} ${x ? "active" : ""}`,
                onMouseOver: () => O(D),
                children: [
                  C.icon,
                  /* @__PURE__ */ e("span", { children: C.title }),
                  R && /* @__PURE__ */ g(se, { children: [
                    /* @__PURE__ */ e(_t, { size: 14, className: "list-expand-icon" }),
                    x && /* @__PURE__ */ e(gn, { list: C.children })
                  ] })
                ]
              }
            ),
            C.divider && /* @__PURE__ */ e("div", { className: "divider" })
          ] }, C.title);
        }) }) })
      }
    );
}, Cn = (t, n, s) => {
  const [r, o] = b([]), [a, i] = b(!1), [l, c] = b(!1), [f, p] = b({ clickX: 0, clickY: 0 }), [u, w] = b(null), { clipBoard: O, setClipBoard: C, handleCutCopy: D, handlePasting: R } = Ne(), { selectedFiles: x, setSelectedFiles: E, handleDownload: N } = le(), { currentPath: P, setCurrentPath: m, currentPathFiles: h, setCurrentPathFiles: S } = oe(), { activeLayout: y, setActiveLayout: k } = ce(), T = () => {
    u.isDirectory ? (m(u.path), o([]), E([])) : n && s.show("previewFile"), i(!1);
  }, j = (F) => {
    D(F), i(!1);
  }, _ = () => {
    R(u), i(!1);
  }, $ = () => {
    i(!1), s.show("rename");
  }, V = () => {
    N(), i(!1);
  }, te = () => {
    i(!1), s.show("delete");
  }, d = [
    {
      title: "View",
      icon: y === "grid" ? /* @__PURE__ */ e(Be, { size: 18 }) : /* @__PURE__ */ e(we, { size: 18 }),
      onClick: () => {
      },
      children: [
        {
          title: "Grid",
          icon: /* @__PURE__ */ e(Be, { size: 18 }),
          selected: y === "grid",
          onClick: () => {
            k("grid"), i(!1);
          }
        },
        {
          title: "List",
          icon: /* @__PURE__ */ e(we, { size: 18 }),
          selected: y === "list",
          onClick: () => {
            k("list"), i(!1);
          }
        }
      ]
    },
    {
      title: "Refresh",
      icon: /* @__PURE__ */ e(ht, { size: 18 }),
      onClick: () => {
        i(!1), fe(t, "onRefresh"), C(null);
      },
      divider: !0
    },
    {
      title: "New folder",
      icon: /* @__PURE__ */ e(ft, { size: 18 }),
      onClick: () => {
        s.show("createFolder"), i(!1);
      }
    },
    {
      title: "Upload",
      icon: /* @__PURE__ */ e(mt, { size: 18 }),
      onClick: () => {
        i(!1), s.show("uploadFile");
      },
      divider: !0
    },
    {
      title: "Select all",
      icon: /* @__PURE__ */ e(Wt, { size: 18 }),
      onClick: () => {
        E(h), i(!1);
      }
    }
  ], v = [
    {
      title: "Open",
      icon: u != null && u.isDirectory ? /* @__PURE__ */ e(Gt, { size: 20 }) : /* @__PURE__ */ e(be, { size: 16 }),
      onClick: T,
      divider: !0
    },
    {
      title: "Cut",
      icon: /* @__PURE__ */ e(dt, { size: 19 }),
      onClick: () => j(!0)
    },
    {
      title: "Copy",
      icon: /* @__PURE__ */ e(ut, { strokeWidth: 0.1, size: 17 }),
      onClick: () => j(!1),
      divider: !(u != null && u.isDirectory)
    },
    {
      title: "Paste",
      icon: /* @__PURE__ */ e(Ie, { size: 18 }),
      onClick: _,
      className: `${O ? "" : "disable-paste"}`,
      hidden: !(u != null && u.isDirectory),
      divider: !0
    },
    {
      title: "Rename",
      icon: /* @__PURE__ */ e(vt, { size: 19 }),
      onClick: $,
      hidden: x.length > 1
    },
    {
      title: "Download",
      icon: /* @__PURE__ */ e($e, { size: 18 }),
      onClick: V,
      hidden: u == null ? void 0 : u.isDirectory
    },
    {
      title: "Delete",
      icon: /* @__PURE__ */ e(pt, { size: 19 }),
      onClick: te
    }
  ], A = () => {
    S((F) => [
      ...F,
      {
        name: Et("New Folder", !0, F),
        isDirectory: !0,
        path: P,
        isEditing: !0,
        key: (/* @__PURE__ */ new Date()).valueOf()
      }
    ]);
  }, I = () => {
    S((F) => (F[r.at(-1)] && (F[r.at(-1)].isEditing = !0), F)), o([]), E([]);
  }, M = () => {
    o([]), E((F) => F.length > 0 ? [] : F);
  }, z = (F, L = !1) => {
    F.preventDefault(), p({ clickX: F.clientX, clickY: F.clientY }), c(L), !L && M(), i(!0);
  };
  return K(() => {
    if (s.isActive)
      switch (s.actionType) {
        case "createFolder":
          A();
          break;
        case "rename":
          I();
          break;
      }
  }, [s.isActive]), K(() => {
    o([]), E([]);
  }, [P]), K(() => {
    x.length > 0 ? o(() => x.map((F) => h.findIndex((L) => L.path === F.path))) : o([]);
  }, [x, h]), {
    emptySelecCtxItems: d,
    selecCtxItems: v,
    handleContextMenu: z,
    unselectFiles: M,
    visible: a,
    setVisible: i,
    setLastSelectedFile: w,
    selectedFileIndexes: r,
    clickPosition: f,
    isSelectionCtx: l
  };
}, wn = ({ unselectFiles: t }) => {
  const [n, s] = b(!1), { selectedFiles: r, setSelectedFiles: o } = le(), { currentPathFiles: a } = oe(), i = lt(() => r.length === a.length, [r, a]);
  return /* @__PURE__ */ g(
    "div",
    {
      className: "files-header",
      onMouseOver: () => s(!0),
      onMouseLeave: () => s(!1),
      children: [
        /* @__PURE__ */ e("div", { className: "file-select-all", children: (n || i) && /* @__PURE__ */ e(Dt, { checked: i, onChange: (c) => {
          c.target.checked ? (o(a), s(!0)) : t();
        }, title: "Select all" }) }),
        /* @__PURE__ */ e("div", { className: "file-name", children: "Name" }),
        /* @__PURE__ */ e("div", { className: "file-date", children: "Modified" }),
        /* @__PURE__ */ e("div", { className: "file-size", children: "Size" })
      ]
    }
  );
}, bn = ({
  onCreateFolder: t,
  onRename: n,
  onFileOpen: s,
  onRefresh: r,
  enableFilePreview: o,
  triggerAction: a
}) => {
  const { currentPathFiles: i } = oe(), l = re(null), { activeLayout: c } = ce(), {
    emptySelecCtxItems: f,
    selecCtxItems: p,
    handleContextMenu: u,
    unselectFiles: w,
    visible: O,
    setVisible: C,
    setLastSelectedFile: D,
    selectedFileIndexes: R,
    clickPosition: x,
    isSelectionCtx: E
  } = Cn(r, o, a), N = ye(() => C(!1));
  return /* @__PURE__ */ g(
    "div",
    {
      ref: l,
      className: `files ${c}`,
      onContextMenu: u,
      onClick: w,
      children: [
        c === "list" && /* @__PURE__ */ e(wn, { unselectFiles: w }),
        (i == null ? void 0 : i.length) > 0 ? /* @__PURE__ */ e(se, { children: i.map((P, m) => /* @__PURE__ */ e(
          vn,
          {
            index: m,
            file: P,
            onCreateFolder: t,
            onRename: n,
            onFileOpen: s,
            enableFilePreview: o,
            triggerAction: a,
            filesViewRef: l,
            selectedFileIndexes: R,
            handleContextMenu: u,
            setVisible: C,
            setLastSelectedFile: D
          },
          m
        )) }) : /* @__PURE__ */ e("div", { className: "empty-folder", children: "This folder is empty." }),
        /* @__PURE__ */ e(
          yn,
          {
            filesViewRef: l,
            contextMenuRef: N.ref,
            menuItems: E ? p : f,
            visible: O,
            setVisible: C,
            clickPosition: x
          }
        )
      ]
    }
  );
}, Fn = ({ triggerAction: t, onDelete: n }) => {
  const [s, r] = b(""), { selectedFiles: o, setSelectedFiles: a } = le();
  return K(() => {
    r(() => {
      if (o.length === 1)
        return `Are you sure you want to delete "${o[0].name}"?`;
      if (o.length > 1)
        return `Are you sure you want to delete these ${o.length} items?`;
    });
  }, []), /* @__PURE__ */ g("div", { className: "file-delete-confirm", children: [
    /* @__PURE__ */ e("p", { className: "file-delete-confirm-text", children: s }),
    /* @__PURE__ */ g("div", { className: "file-delete-confirm-actions", children: [
      /* @__PURE__ */ e(me, { type: "secondary", onClick: () => t.close(), children: "Cancel" }),
      /* @__PURE__ */ e(me, { type: "danger", onClick: () => {
        n(o), a([]), t.close();
      }, children: "Delete" })
    ] })
  ] });
}, kn = ({ percent: t = 0, isCanceled: n = !1, isCompleted: s = !1, error: r }) => /* @__PURE__ */ g("div", { role: "progressbar", className: "fm-progress", children: [
  !r && /* @__PURE__ */ e("div", { className: "fm-progress-bar", children: /* @__PURE__ */ e("div", { className: "fm-progress-bar-fill", style: { width: `${t}%` } }) }),
  n ? /* @__PURE__ */ e("span", { className: "fm-upload-canceled", children: "Canceled" }) : r ? /* @__PURE__ */ e("span", { className: "fm-upload-canceled", children: r }) : /* @__PURE__ */ e("div", { className: "fm-progress-status", children: /* @__PURE__ */ e("span", { children: s ? "Completed" : t + "% done" }) })
] }), Nn = ({
  index: t,
  fileData: n,
  setFiles: s,
  setIsUploading: r,
  fileUploadConfig: o,
  onFileUploaded: a,
  handleFileRemove: i
}) => {
  var h, S, y, k;
  const [l, c] = b(0), [f, p] = b(!1), [u, w] = b(!1), [O, C] = b(!1), D = Fe(33), R = re(), { onError: x } = ke(), E = (T) => {
    c(0), r((_) => ({
      ..._,
      [t]: !1
    }));
    const j = {
      type: "upload",
      message: "Upload failed.",
      response: {
        status: T.status,
        statusText: T.statusText,
        data: T.response
      }
    };
    s(
      (_) => _.map(($, V) => t === V ? {
        ...$,
        error: j.message
      } : $)
    ), C(!0), x(j, n.file);
  }, N = (T) => {
    if (!T.error)
      return new Promise((j, _) => {
        const $ = new XMLHttpRequest();
        R.current = $, r((Y) => ({
          ...Y,
          [t]: !0
        })), $.upload.onprogress = (Y) => {
          if (Y.lengthComputable) {
            const de = Math.round(Y.loaded / Y.total * 100);
            c(de);
          }
        }, $.onload = () => {
          r((Y) => ({
            ...Y,
            [t]: !1
          })), $.status === 200 || $.status === 201 ? (p(!0), a($.response), j($.response)) : (_($.statusText), E($));
        }, $.onerror = () => {
          _($.statusText), E($);
        }, $.open("POST", o == null ? void 0 : o.url, !0);
        const V = o == null ? void 0 : o.headers;
        for (let Y in V)
          $.setRequestHeader(Y, V[Y]);
        const te = new FormData(), X = T == null ? void 0 : T.appendData;
        for (let Y in X)
          X[Y] && te.append(Y, X[Y]);
        te.append("file", T.file), $.send(te);
      });
  };
  K(() => {
    R.current || N(n);
  }, []);
  const P = () => {
    R.current && (R.current.abort(), r((T) => ({
      ...T,
      [t]: !1
    })), w(!0), c(0));
  }, m = () => {
    n != null && n.file && (s(
      (T) => T.map((j, _) => t === _ ? {
        ...j,
        error: !1
      } : j)
    ), N({ ...n, error: !1 }), w(!1), C(!1));
  };
  return n.removed ? null : /* @__PURE__ */ g("li", { children: [
    /* @__PURE__ */ e("div", { className: "file-icon", children: D[pe((h = n.file) == null ? void 0 : h.name)] ?? /* @__PURE__ */ e(be, { size: 33 }) }),
    /* @__PURE__ */ g("div", { className: "file", children: [
      /* @__PURE__ */ g("div", { className: "file-details", children: [
        /* @__PURE__ */ g("div", { className: "file-info", children: [
          /* @__PURE__ */ e("span", { className: "file-name text-truncate", title: (S = n.file) == null ? void 0 : S.name, children: (y = n.file) == null ? void 0 : y.name }),
          /* @__PURE__ */ e("span", { className: "file-size", children: Pe((k = n.file) == null ? void 0 : k.size) })
        ] }),
        f ? /* @__PURE__ */ e(Yt, { color: "#5c5bb1", title: "Uploaded" }) : u || O ? /* @__PURE__ */ e(Qt, { className: "retry-upload", title: "Retry", onClick: m }) : /* @__PURE__ */ e(
          "div",
          {
            className: "rm-file",
            title: `${n.error ? "Remove" : "Abort Upload"}`,
            onClick: n.error ? () => i(t) : P,
            children: /* @__PURE__ */ e(Jt, {})
          }
        )
      ] }),
      /* @__PURE__ */ e(
        kn,
        {
          percent: l,
          isCanceled: u,
          isCompleted: f,
          error: n.error
        }
      )
    ] })
  ] });
}, Pn = ({
  fileUploadConfig: t,
  maxFileSize: n,
  acceptedFileTypes: s,
  onFileUploading: r,
  onFileUploaded: o
}) => {
  const [a, i] = b([]), [l, c] = b(!1), [f, p] = b({}), { currentFolder: u, currentPathFiles: w } = oe(), { onError: O } = ke(), C = re(null), D = (m) => {
    m.key === "Enter" && C.current.click();
  }, R = (m) => {
    if (s && !s.includes(pe(m.name)))
      return "File type is not allowed.";
    if (w.some(
      (y) => y.name.toLowerCase() === m.name.toLowerCase() && !y.isDirectory
    )) return "File already exists.";
    if (n && m.size > n) return `Maximum upload size is ${Pe(n, 0)}.`;
  }, x = (m) => {
    if (m = m.filter(
      (h) => !a.some((S) => S.file.name.toLowerCase() === h.name.toLowerCase())
    ), m.length > 0) {
      const h = m.map((S) => {
        const y = r(S, u), k = R(S);
        return k && O({ type: "upload", message: k }, S), {
          file: S,
          appendData: y,
          ...k && { error: k }
        };
      });
      i((S) => [...S, ...h]);
    }
  }, E = (m) => {
    m.preventDefault(), c(!1);
    const h = Array.from(m.dataTransfer.files);
    x(h);
  }, N = (m) => {
    const h = Array.from(m.target.files);
    x(h);
  }, P = (m) => {
    i((h) => {
      const S = h.map((y, k) => m === k ? {
        ...y,
        removed: !0
      } : y);
      return S.every((y) => !!y.removed) ? [] : S;
    });
  };
  return /* @__PURE__ */ g("div", { className: `fm-upload-file ${a.length > 0 ? "file-selcted" : ""}`, children: [
    /* @__PURE__ */ g("div", { className: "select-files", children: [
      /* @__PURE__ */ e(
        "div",
        {
          className: `draggable-file-input ${l ? "dragging" : ""}`,
          onDrop: E,
          onDragOver: (m) => m.preventDefault(),
          onDragEnter: () => c(!0),
          onDragLeave: () => c(!1),
          children: /* @__PURE__ */ g("div", { className: "input-text", children: [
            /* @__PURE__ */ e(Zt, { size: 30 }),
            /* @__PURE__ */ e("span", { children: "Drag files to upload" })
          ] })
        }
      ),
      /* @__PURE__ */ e("div", { className: "btn-choose-file", children: /* @__PURE__ */ g(me, { padding: "0", onKeyDown: D, children: [
        /* @__PURE__ */ e("label", { htmlFor: "chooseFile", children: "Choose File" }),
        /* @__PURE__ */ e(
          "input",
          {
            ref: C,
            type: "file",
            id: "chooseFile",
            className: "choose-file-input",
            onChange: N,
            multiple: !0,
            accept: s
          }
        )
      ] }) })
    ] }),
    a.length > 0 && /* @__PURE__ */ g("div", { className: "files-progress", children: [
      /* @__PURE__ */ e("div", { className: "heading", children: Object.values(f).some((m) => m) ? /* @__PURE__ */ g(se, { children: [
        /* @__PURE__ */ e("h2", { children: "Uploading" }),
        /* @__PURE__ */ e(at, { type: "cylon", color: "black", height: 18, width: 20 })
      ] }) : /* @__PURE__ */ e("h2", { children: "Completed" }) }),
      /* @__PURE__ */ e("ul", { children: a.map((m, h) => /* @__PURE__ */ e(
        Nn,
        {
          index: h,
          fileData: m,
          setFiles: i,
          fileUploadConfig: t,
          setIsUploading: p,
          onFileUploaded: o,
          handleFileRemove: P
        },
        h
      )) })
    ] })
  ] });
}, Ge = ["jpg", "jpeg", "png"], Je = ["mp4", "mov", "avi"], Ze = ["mp3", "wav", "m4a"], Qe = ["txt", "pdf"], En = ({ filePreviewPath: t }) => {
  var w;
  const [n, s] = b(!0), [r, o] = b(!1), { selectedFiles: a } = le(), i = Fe(73), l = (w = pe(a[0].name)) == null ? void 0 : w.toLowerCase(), c = `${t}${a[0].path}`, f = () => {
    s(!1), o(!1);
  }, p = () => {
    s(!1), o(!0);
  }, u = () => {
    window.location.href = c;
  };
  return /* @__PURE__ */ g("section", { className: `file-previewer ${l === "pdf" ? "pdf-previewer" : ""}`, children: [
    r || ![
      ...Ge,
      ...Je,
      ...Ze,
      ...Qe
    ].includes(l) && /* @__PURE__ */ g("div", { className: "preview-error", children: [
      /* @__PURE__ */ e("span", { className: "error-icon", children: i[l] ?? /* @__PURE__ */ e(Vt, { size: 73 }) }),
      /* @__PURE__ */ e("span", { className: "error-msg", children: "Sorry! Preview is not available for this file." }),
      /* @__PURE__ */ g("div", { className: "file-info", children: [
        /* @__PURE__ */ e("span", { className: "file-name", children: a[0].name }),
        a[0].size && /* @__PURE__ */ e("span", { children: "-" }),
        /* @__PURE__ */ e("span", { className: "file-size", children: Pe(a[0].size) })
      ] }),
      /* @__PURE__ */ e(me, { onClick: u, padding: "0.45rem .9rem", children: /* @__PURE__ */ g("div", { className: "download-btn", children: [
        /* @__PURE__ */ e($e, { size: 18 }),
        /* @__PURE__ */ e("span", { children: "Download" })
      ] }) })
    ] }),
    Ge.includes(l) && /* @__PURE__ */ g(se, { children: [
      /* @__PURE__ */ e(Ct, { isLoading: n }),
      /* @__PURE__ */ e(
        "img",
        {
          src: c,
          alt: "Preview Unavailable",
          className: `photo-popup-image ${n ? "img-loading" : ""}`,
          onLoad: f,
          onError: p,
          loading: "lazy"
        }
      )
    ] }),
    Je.includes(l) && /* @__PURE__ */ e("video", { src: c, className: "video-preview", controls: !0, autoPlay: !0 }),
    Ze.includes(l) && /* @__PURE__ */ e("audio", { src: c, controls: !0, autoPlay: !0, className: "audio-preview" }),
    Qe.includes(l) && /* @__PURE__ */ e(se, { children: /* @__PURE__ */ e(
      "iframe",
      {
        src: c,
        onLoad: f,
        onError: p,
        frameBorder: "0",
        className: `photo-popup-iframe ${n ? "img-loading" : ""}`
      }
    ) })
  ] });
}, xe = (t) => t.toLowerCase(), Q = (t, n, s = !1) => {
  const r = re(/* @__PURE__ */ new Set([])), o = lt(() => new Set(t.map((c) => xe(c))), [t]), a = (c) => {
    if (!c.repeat && (r.current.add(xe(c.key)), o.isSubsetOf(r.current) && !s)) {
      c.preventDefault(), n(c);
      return;
    }
  }, i = (c) => {
    r.current.delete(xe(c.key));
  }, l = () => {
    r.current.clear();
  };
  K(() => (window.addEventListener("keydown", a), window.addEventListener("keyup", i), window.addEventListener("blur", l), () => {
    window.removeEventListener("keydown", a), window.removeEventListener("keyup", i), window.removeEventListener("blur", l);
  }), [o, n, s]);
}, ee = {
  createFolder: ["Alt", "Shift", "N"],
  uploadFiles: ["Control", "U"],
  cut: ["Control", "X"],
  copy: ["Control", "C"],
  paste: ["Control", "V"],
  rename: ["F2"],
  download: ["Control", "D"],
  delete: ["Delete"],
  selectAll: ["Control", "A"],
  selectArrows: ["Shift", "Arrows"],
  // (pending)
  navigation: ["Arrows"],
  // (pending)
  jumpToFirst: ["Home"],
  jumpToLast: ["End"],
  listLayout: ["Control", "Shift", "!"],
  // Act as Ctrl + Shift + 1 but could cause problems for QWERTZ or DVORAK etc. keyborad layouts.
  gridLayout: ["Control", "Shift", "@"],
  // Act as Ctrl + Shift + 2 but could cause problems for QWERTZ or DVORAK etc. keyborad layouts.
  refresh: ["F5"],
  clearSelection: ["Escape"]
}, Rn = (t, n) => {
  const { setClipBoard: s, handleCutCopy: r, handlePasting: o } = Ne(), { currentFolder: a, currentPathFiles: i } = oe(), { setSelectedFiles: l, handleDownload: c } = le(), { setActiveLayout: f } = ce(), p = () => {
    t.show("createFolder");
  }, u = () => {
    t.show("uploadFile");
  }, w = () => {
    r(!0);
  }, O = () => {
    r(!1);
  }, C = () => {
    o(a);
  }, D = () => {
    t.show("rename");
  }, R = () => {
    c();
  }, x = () => {
    t.show("delete");
  }, E = () => {
    i.length > 0 && l([i[0]]);
  }, N = () => {
    i.length > 0 && l([i.at(-1)]);
  }, P = () => {
    l(i);
  }, m = () => {
    l((k) => k.length > 0 ? [] : k);
  }, h = () => {
    fe(n, "onRefresh"), s(null);
  }, S = () => {
    f("grid");
  }, y = () => {
    f("list");
  };
  Q(ee.createFolder, p, t.isActive), Q(ee.uploadFiles, u, t.isActive), Q(ee.cut, w, t.isActive), Q(ee.copy, O, t.isActive), Q(ee.paste, C, t.isActive), Q(ee.rename, D, t.isActive), Q(ee.download, R, t.isActive), Q(ee.delete, x, t.isActive), Q(ee.jumpToFirst, E, t.isActive), Q(ee.jumpToLast, N, t.isActive), Q(ee.selectAll, P, t.isActive), Q(ee.clearSelection, m, t.isActive), Q(ee.refresh, h, t.isActive), Q(ee.gridLayout, S, t.isActive), Q(ee.listLayout, y, t.isActive);
}, xn = ({
  fileUploadConfig: t,
  onFileUploading: n,
  onFileUploaded: s,
  onDelete: r,
  onRefresh: o,
  maxFileSize: a,
  filePreviewPath: i,
  acceptedFileTypes: l,
  triggerAction: c
}) => {
  const [f, p] = b(null), { selectedFiles: u } = le();
  Rn(c, o);
  const w = {
    uploadFile: {
      title: "Upload",
      component: /* @__PURE__ */ e(
        Pn,
        {
          fileUploadConfig: t,
          maxFileSize: a,
          acceptedFileTypes: l,
          onFileUploading: n,
          onFileUploaded: s
        }
      ),
      width: "35%"
    },
    delete: {
      title: "Delete",
      component: /* @__PURE__ */ e(Fn, { triggerAction: c, onDelete: r }),
      width: "25%"
    },
    previewFile: {
      title: "Preview",
      component: /* @__PURE__ */ e(En, { filePreviewPath: i }),
      width: "50%"
    }
  };
  if (K(() => {
    if (c.isActive) {
      const O = c.actionType;
      O === "previewFile" && (w[O].title = (u == null ? void 0 : u.name) ?? "Preview"), p(w[O]);
    } else
      p(null);
  }, [c.isActive]), f)
    return /* @__PURE__ */ e(
      Tt,
      {
        heading: f.title,
        show: c.isActive,
        setShow: c.close,
        dialogWidth: f.width,
        children: f == null ? void 0 : f.component
      }
    );
}, Tn = () => {
  const [t, n] = b(!1), [s, r] = b(null);
  return {
    isActive: t,
    actionType: s,
    show: (i) => {
      n(!0), r(i);
    },
    close: () => {
      n(!1), r(null);
    }
  };
}, Dn = (t, n) => {
  const [s, r] = b({ col1: t, col2: n }), [o, a] = b(!1), i = re(null);
  return {
    containerRef: i,
    colSizes: s,
    setColSizes: r,
    isDragging: o,
    handleMouseDown: () => {
      a(!0);
    },
    handleMouseUp: () => {
      a(!1);
    },
    handleMouseMove: (p) => {
      if (!o) return;
      p.preventDefault();
      const w = i.current.getBoundingClientRect(), O = (p.clientX - w.left) / w.width * 100;
      O >= 15 && O <= 60 && r({ col1: O, col2: 100 - O });
    }
  };
};
function On(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var Ae = { exports: {} };
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Te, et;
function Sn() {
  if (et) return Te;
  et = 1;
  var t = Object.getOwnPropertySymbols, n = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
  function r(a) {
    if (a == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(a);
  }
  function o() {
    try {
      if (!Object.assign)
        return !1;
      var a = new String("abc");
      if (a[5] = "de", Object.getOwnPropertyNames(a)[0] === "5")
        return !1;
      for (var i = {}, l = 0; l < 10; l++)
        i["_" + String.fromCharCode(l)] = l;
      var c = Object.getOwnPropertyNames(i).map(function(p) {
        return i[p];
      });
      if (c.join("") !== "0123456789")
        return !1;
      var f = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(p) {
        f[p] = p;
      }), Object.keys(Object.assign({}, f)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Te = o() ? Object.assign : function(a, i) {
    for (var l, c = r(a), f, p = 1; p < arguments.length; p++) {
      l = Object(arguments[p]);
      for (var u in l)
        n.call(l, u) && (c[u] = l[u]);
      if (t) {
        f = t(l);
        for (var w = 0; w < f.length; w++)
          s.call(l, f[w]) && (c[f[w]] = l[f[w]]);
      }
    }
    return c;
  }, Te;
}
var De, tt;
function je() {
  if (tt) return De;
  tt = 1;
  var t = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return De = t, De;
}
var Oe, nt;
function Ot() {
  return nt || (nt = 1, Oe = Function.call.bind(Object.prototype.hasOwnProperty)), Oe;
}
var Se, rt;
function Mn() {
  if (rt) return Se;
  rt = 1;
  var t = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var n = je(), s = {}, r = Ot();
    t = function(a) {
      var i = "Warning: " + a;
      typeof console < "u" && console.error(i);
      try {
        throw new Error(i);
      } catch {
      }
    };
  }
  function o(a, i, l, c, f) {
    if (process.env.NODE_ENV !== "production") {
      for (var p in a)
        if (r(a, p)) {
          var u;
          try {
            if (typeof a[p] != "function") {
              var w = Error(
                (c || "React class") + ": " + l + " type `" + p + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[p] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw w.name = "Invariant Violation", w;
            }
            u = a[p](i, p, c, l, null, n);
          } catch (C) {
            u = C;
          }
          if (u && !(u instanceof Error) && t(
            (c || "React class") + ": type specification of " + l + " `" + p + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof u + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), u instanceof Error && !(u.message in s)) {
            s[u.message] = !0;
            var O = f ? f() : "";
            t(
              "Failed " + l + " type: " + u.message + (O ?? "")
            );
          }
        }
    }
  }
  return o.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (s = {});
  }, Se = o, Se;
}
var Me, st;
function Ln() {
  if (st) return Me;
  st = 1;
  var t = yt, n = Sn(), s = je(), r = Ot(), o = Mn(), a = function() {
  };
  process.env.NODE_ENV !== "production" && (a = function(l) {
    var c = "Warning: " + l;
    typeof console < "u" && console.error(c);
    try {
      throw new Error(c);
    } catch {
    }
  });
  function i() {
    return null;
  }
  return Me = function(l, c) {
    var f = typeof Symbol == "function" && Symbol.iterator, p = "@@iterator";
    function u(d) {
      var v = d && (f && d[f] || d[p]);
      if (typeof v == "function")
        return v;
    }
    var w = "<<anonymous>>", O = {
      array: x("array"),
      bigint: x("bigint"),
      bool: x("boolean"),
      func: x("function"),
      number: x("number"),
      object: x("object"),
      string: x("string"),
      symbol: x("symbol"),
      any: E(),
      arrayOf: N,
      element: P(),
      elementType: m(),
      instanceOf: h,
      node: T(),
      objectOf: y,
      oneOf: S,
      oneOfType: k,
      shape: _,
      exact: $
    };
    function C(d, v) {
      return d === v ? d !== 0 || 1 / d === 1 / v : d !== d && v !== v;
    }
    function D(d, v) {
      this.message = d, this.data = v && typeof v == "object" ? v : {}, this.stack = "";
    }
    D.prototype = Error.prototype;
    function R(d) {
      if (process.env.NODE_ENV !== "production")
        var v = {}, A = 0;
      function I(z, F, L, B, H, U, Z) {
        if (B = B || w, U = U || L, Z !== s) {
          if (c) {
            var G = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw G.name = "Invariant Violation", G;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var ie = B + ":" + L;
            !v[ie] && // Avoid spamming the console because they are often not actionable except for lib authors
            A < 3 && (a(
              "You are manually calling a React.PropTypes validation function for the `" + U + "` prop on `" + B + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), v[ie] = !0, A++);
          }
        }
        return F[L] == null ? z ? F[L] === null ? new D("The " + H + " `" + U + "` is marked as required " + ("in `" + B + "`, but its value is `null`.")) : new D("The " + H + " `" + U + "` is marked as required in " + ("`" + B + "`, but its value is `undefined`.")) : null : d(F, L, B, H, U);
      }
      var M = I.bind(null, !1);
      return M.isRequired = I.bind(null, !0), M;
    }
    function x(d) {
      function v(A, I, M, z, F, L) {
        var B = A[I], H = X(B);
        if (H !== d) {
          var U = Y(B);
          return new D(
            "Invalid " + z + " `" + F + "` of type " + ("`" + U + "` supplied to `" + M + "`, expected ") + ("`" + d + "`."),
            { expectedType: d }
          );
        }
        return null;
      }
      return R(v);
    }
    function E() {
      return R(i);
    }
    function N(d) {
      function v(A, I, M, z, F) {
        if (typeof d != "function")
          return new D("Property `" + F + "` of component `" + M + "` has invalid PropType notation inside arrayOf.");
        var L = A[I];
        if (!Array.isArray(L)) {
          var B = X(L);
          return new D("Invalid " + z + " `" + F + "` of type " + ("`" + B + "` supplied to `" + M + "`, expected an array."));
        }
        for (var H = 0; H < L.length; H++) {
          var U = d(L, H, M, z, F + "[" + H + "]", s);
          if (U instanceof Error)
            return U;
        }
        return null;
      }
      return R(v);
    }
    function P() {
      function d(v, A, I, M, z) {
        var F = v[A];
        if (!l(F)) {
          var L = X(F);
          return new D("Invalid " + M + " `" + z + "` of type " + ("`" + L + "` supplied to `" + I + "`, expected a single ReactElement."));
        }
        return null;
      }
      return R(d);
    }
    function m() {
      function d(v, A, I, M, z) {
        var F = v[A];
        if (!t.isValidElementType(F)) {
          var L = X(F);
          return new D("Invalid " + M + " `" + z + "` of type " + ("`" + L + "` supplied to `" + I + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return R(d);
    }
    function h(d) {
      function v(A, I, M, z, F) {
        if (!(A[I] instanceof d)) {
          var L = d.name || w, B = Ce(A[I]);
          return new D("Invalid " + z + " `" + F + "` of type " + ("`" + B + "` supplied to `" + M + "`, expected ") + ("instance of `" + L + "`."));
        }
        return null;
      }
      return R(v);
    }
    function S(d) {
      if (!Array.isArray(d))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? a(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : a("Invalid argument supplied to oneOf, expected an array.")), i;
      function v(A, I, M, z, F) {
        for (var L = A[I], B = 0; B < d.length; B++)
          if (C(L, d[B]))
            return null;
        var H = JSON.stringify(d, function(Z, G) {
          var ie = Y(G);
          return ie === "symbol" ? String(G) : G;
        });
        return new D("Invalid " + z + " `" + F + "` of value `" + String(L) + "` " + ("supplied to `" + M + "`, expected one of " + H + "."));
      }
      return R(v);
    }
    function y(d) {
      function v(A, I, M, z, F) {
        if (typeof d != "function")
          return new D("Property `" + F + "` of component `" + M + "` has invalid PropType notation inside objectOf.");
        var L = A[I], B = X(L);
        if (B !== "object")
          return new D("Invalid " + z + " `" + F + "` of type " + ("`" + B + "` supplied to `" + M + "`, expected an object."));
        for (var H in L)
          if (r(L, H)) {
            var U = d(L, H, M, z, F + "." + H, s);
            if (U instanceof Error)
              return U;
          }
        return null;
      }
      return R(v);
    }
    function k(d) {
      if (!Array.isArray(d))
        return process.env.NODE_ENV !== "production" && a("Invalid argument supplied to oneOfType, expected an instance of array."), i;
      for (var v = 0; v < d.length; v++) {
        var A = d[v];
        if (typeof A != "function")
          return a(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + de(A) + " at index " + v + "."
          ), i;
      }
      function I(M, z, F, L, B) {
        for (var H = [], U = 0; U < d.length; U++) {
          var Z = d[U], G = Z(M, z, F, L, B, s);
          if (G == null)
            return null;
          G.data && r(G.data, "expectedType") && H.push(G.data.expectedType);
        }
        var ie = H.length > 0 ? ", expected one of type [" + H.join(", ") + "]" : "";
        return new D("Invalid " + L + " `" + B + "` supplied to " + ("`" + F + "`" + ie + "."));
      }
      return R(I);
    }
    function T() {
      function d(v, A, I, M, z) {
        return V(v[A]) ? null : new D("Invalid " + M + " `" + z + "` supplied to " + ("`" + I + "`, expected a ReactNode."));
      }
      return R(d);
    }
    function j(d, v, A, I, M) {
      return new D(
        (d || "React class") + ": " + v + " type `" + A + "." + I + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + M + "`."
      );
    }
    function _(d) {
      function v(A, I, M, z, F) {
        var L = A[I], B = X(L);
        if (B !== "object")
          return new D("Invalid " + z + " `" + F + "` of type `" + B + "` " + ("supplied to `" + M + "`, expected `object`."));
        for (var H in d) {
          var U = d[H];
          if (typeof U != "function")
            return j(M, z, F, H, Y(U));
          var Z = U(L, H, M, z, F + "." + H, s);
          if (Z)
            return Z;
        }
        return null;
      }
      return R(v);
    }
    function $(d) {
      function v(A, I, M, z, F) {
        var L = A[I], B = X(L);
        if (B !== "object")
          return new D("Invalid " + z + " `" + F + "` of type `" + B + "` " + ("supplied to `" + M + "`, expected `object`."));
        var H = n({}, A[I], d);
        for (var U in H) {
          var Z = d[U];
          if (r(d, U) && typeof Z != "function")
            return j(M, z, F, U, Y(Z));
          if (!Z)
            return new D(
              "Invalid " + z + " `" + F + "` key `" + U + "` supplied to `" + M + "`.\nBad object: " + JSON.stringify(A[I], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(d), null, "  ")
            );
          var G = Z(L, U, M, z, F + "." + U, s);
          if (G)
            return G;
        }
        return null;
      }
      return R(v);
    }
    function V(d) {
      switch (typeof d) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !d;
        case "object":
          if (Array.isArray(d))
            return d.every(V);
          if (d === null || l(d))
            return !0;
          var v = u(d);
          if (v) {
            var A = v.call(d), I;
            if (v !== d.entries) {
              for (; !(I = A.next()).done; )
                if (!V(I.value))
                  return !1;
            } else
              for (; !(I = A.next()).done; ) {
                var M = I.value;
                if (M && !V(M[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function te(d, v) {
      return d === "symbol" ? !0 : v ? v["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && v instanceof Symbol : !1;
    }
    function X(d) {
      var v = typeof d;
      return Array.isArray(d) ? "array" : d instanceof RegExp ? "object" : te(v, d) ? "symbol" : v;
    }
    function Y(d) {
      if (typeof d > "u" || d === null)
        return "" + d;
      var v = X(d);
      if (v === "object") {
        if (d instanceof Date)
          return "date";
        if (d instanceof RegExp)
          return "regexp";
      }
      return v;
    }
    function de(d) {
      var v = Y(d);
      switch (v) {
        case "array":
        case "object":
          return "an " + v;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + v;
        default:
          return v;
      }
    }
    function Ce(d) {
      return !d.constructor || !d.constructor.name ? w : d.constructor.name;
    }
    return O.checkPropTypes = o, O.resetWarningCache = o.resetWarningCache, O.PropTypes = O, O;
  }, Me;
}
var Le, ot;
function In() {
  if (ot) return Le;
  ot = 1;
  var t = je();
  function n() {
  }
  function s() {
  }
  return s.resetWarningCache = n, Le = function() {
    function r(i, l, c, f, p, u) {
      if (u !== t) {
        var w = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw w.name = "Invariant Violation", w;
      }
    }
    r.isRequired = r;
    function o() {
      return r;
    }
    var a = {
      array: r,
      bigint: r,
      bool: r,
      func: r,
      number: r,
      object: r,
      string: r,
      symbol: r,
      any: r,
      arrayOf: o,
      element: r,
      elementType: r,
      instanceOf: o,
      node: r,
      objectOf: o,
      oneOf: o,
      oneOfType: o,
      shape: o,
      exact: o,
      checkPropTypes: s,
      resetWarningCache: n
    };
    return a.PropTypes = a, a;
  }, Le;
}
if (process.env.NODE_ENV !== "production") {
  var An = yt, $n = !0;
  Ae.exports = Ln()(An.isElement, $n);
} else
  Ae.exports = In()();
var jn = Ae.exports;
const q = /* @__PURE__ */ On(jn), zn = (t, n, s) => {
  const r = t[n];
  if (r && isNaN(Date.parse(r)))
    return new Error(
      `Invalid prop \`${n}\` supplied to \`${s}\`. Expected a valid date string (ISO 8601) but received \`${r}\`.`
    );
}, it = (t, n, s) => {
  const r = t[n];
  try {
    new URL(r);
    return;
  } catch {
    return new Error(
      `Invalid prop \`${n}\` supplied to \`${s}\`. Expected a valid URL but received \`${r}\`.`
    );
  }
}, St = ({
  files: t,
  fileUploadConfig: n,
  isLoading: s,
  onCreateFolder: r,
  onFileUploading: o = () => {
  },
  onFileUploaded: a = () => {
  },
  onPaste: i,
  onRename: l,
  onDownload: c,
  onDelete: f = () => null,
  onLayoutChange: p = () => {
  },
  onRefresh: u,
  onFileOpen: w = () => {
  },
  onError: O = () => {
  },
  layout: C = "grid",
  enableFilePreview: D = !0,
  maxFileSize: R,
  filePreviewPath: x,
  acceptedFileTypes: E,
  height: N = "600px",
  width: P = "100%",
  initialPath: m = ""
}) => {
  const h = Tn(), { containerRef: S, colSizes: y, isDragging: k, handleMouseMove: T, handleMouseUp: j, handleMouseDown: _ } = Dn(20, 80);
  return /* @__PURE__ */ g(
    "main",
    {
      className: "file-explorer",
      onContextMenu: ($) => $.preventDefault(),
      style: { height: N, width: P },
      children: [
        /* @__PURE__ */ e(Ct, { isLoading: s }),
        /* @__PURE__ */ e(nn, { filesData: t, onError: O, children: /* @__PURE__ */ e(rn, { initialPath: m, children: /* @__PURE__ */ e(sn, { onDownload: c, children: /* @__PURE__ */ e(on, { onPaste: i, children: /* @__PURE__ */ g(en, { layout: C, children: [
          /* @__PURE__ */ e(
            an,
            {
              allowCreateFolder: !0,
              allowUploadFile: !0,
              onLayoutChange: p,
              onRefresh: u,
              triggerAction: h
            }
          ),
          /* @__PURE__ */ g(
            "section",
            {
              ref: S,
              onMouseMove: T,
              onMouseUp: j,
              className: "files-container",
              children: [
                /* @__PURE__ */ g("div", { className: "navigation-pane", style: { width: y.col1 + "%" }, children: [
                  /* @__PURE__ */ e(cn, {}),
                  /* @__PURE__ */ e(
                    "div",
                    {
                      className: `sidebar-resize ${k ? "sidebar-dragging" : ""}`,
                      onMouseDown: _
                    }
                  )
                ] }),
                /* @__PURE__ */ g("div", { className: "folders-preview", style: { width: y.col2 + "%" }, children: [
                  /* @__PURE__ */ e(dn, {}),
                  /* @__PURE__ */ e(
                    bn,
                    {
                      onCreateFolder: r,
                      onRename: l,
                      onFileOpen: w,
                      onRefresh: u,
                      enableFilePreview: D,
                      triggerAction: h
                    }
                  )
                ] })
              ]
            }
          ),
          /* @__PURE__ */ e(
            xn,
            {
              fileUploadConfig: n,
              onFileUploading: o,
              onFileUploaded: a,
              onDelete: f,
              onRefresh: u,
              maxFileSize: R,
              filePreviewPath: x,
              acceptedFileTypes: E,
              triggerAction: h
            }
          )
        ] }) }) }) }) })
      ]
    }
  );
};
St.displayName = "FileManager";
St.propTypes = {
  files: q.arrayOf(
    q.shape({
      name: q.string.isRequired,
      isDirectory: q.bool.isRequired,
      path: q.string.isRequired,
      updatedAt: zn,
      size: q.number
    })
  ).isRequired,
  fileUploadConfig: q.shape({
    url: it,
    headers: q.objectOf(q.string)
  }),
  isLoading: q.bool,
  onCreateFolder: q.func,
  onFileUploading: q.func,
  onFileUploaded: q.func,
  onRename: q.func,
  onDelete: q.func,
  onPaste: q.func,
  onDownload: q.func,
  onLayoutChange: q.func,
  onRefresh: q.func,
  onFileOpen: q.func,
  onError: q.func,
  layout: q.oneOf(["grid", "list"]),
  maxFileSize: q.number,
  enableFilePreview: q.bool,
  filePreviewPath: it,
  acceptedFileTypes: q.string,
  height: q.oneOfType([q.string, q.number]),
  width: q.oneOfType([q.string, q.number]),
  initialPath: q.string
};
export {
  St as FileManager
};
