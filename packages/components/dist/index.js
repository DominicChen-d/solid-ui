import { createContext as E, useContext as M, createComponent as S, mergeProps as L, splitProps as B, createMemo as w, sharedConfig as p, untrack as k, createRenderEffect as y } from "solid-js";
const O = {
  colors: {
    primary: "#1890ff",
    secondary: "#f5222d"
  },
  spacing: {
    small: "8px",
    medium: "16px",
    large: "24px"
  }
}, P = E(O), j = () => M(P), D = [
  "allowfullscreen",
  "async",
  "autofocus",
  "autoplay",
  "checked",
  "controls",
  "default",
  "disabled",
  "formnovalidate",
  "hidden",
  "indeterminate",
  "inert",
  "ismap",
  "loop",
  "multiple",
  "muted",
  "nomodule",
  "novalidate",
  "open",
  "playsinline",
  "readonly",
  "required",
  "reversed",
  "seamless",
  "selected"
], I = /* @__PURE__ */ new Set([
  "className",
  "value",
  "readOnly",
  "formNoValidate",
  "isMap",
  "noModule",
  "playsInline",
  ...D
]), G = /* @__PURE__ */ new Set([
  "innerHTML",
  "textContent",
  "innerText",
  "children"
]), _ = /* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(null), {
  className: "class",
  htmlFor: "for"
}), F = /* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(null), {
  class: "className",
  formnovalidate: {
    $: "formNoValidate",
    BUTTON: 1,
    INPUT: 1
  },
  ismap: {
    $: "isMap",
    IMG: 1
  },
  nomodule: {
    $: "noModule",
    SCRIPT: 1
  },
  playsinline: {
    $: "playsInline",
    VIDEO: 1
  },
  readonly: {
    $: "readOnly",
    INPUT: 1,
    TEXTAREA: 1
  }
});
function R(t, e) {
  const n = F[t];
  return typeof n == "object" ? n[e] ? n.$ : void 0 : n;
}
const U = /* @__PURE__ */ new Set([
  "beforeinput",
  "click",
  "dblclick",
  "contextmenu",
  "focusin",
  "focusout",
  "input",
  "keydown",
  "keyup",
  "mousedown",
  "mousemove",
  "mouseout",
  "mouseover",
  "mouseup",
  "pointerdown",
  "pointermove",
  "pointerout",
  "pointerover",
  "pointerup",
  "touchend",
  "touchmove",
  "touchstart"
]), V = /* @__PURE__ */ new Set([
  "altGlyph",
  "altGlyphDef",
  "altGlyphItem",
  "animate",
  "animateColor",
  "animateMotion",
  "animateTransform",
  "circle",
  "clipPath",
  "color-profile",
  "cursor",
  "defs",
  "desc",
  "ellipse",
  "feBlend",
  "feColorMatrix",
  "feComponentTransfer",
  "feComposite",
  "feConvolveMatrix",
  "feDiffuseLighting",
  "feDisplacementMap",
  "feDistantLight",
  "feDropShadow",
  "feFlood",
  "feFuncA",
  "feFuncB",
  "feFuncG",
  "feFuncR",
  "feGaussianBlur",
  "feImage",
  "feMerge",
  "feMergeNode",
  "feMorphology",
  "feOffset",
  "fePointLight",
  "feSpecularLighting",
  "feSpotLight",
  "feTile",
  "feTurbulence",
  "filter",
  "font",
  "font-face",
  "font-face-format",
  "font-face-name",
  "font-face-src",
  "font-face-uri",
  "foreignObject",
  "g",
  "glyph",
  "glyphRef",
  "hkern",
  "image",
  "line",
  "linearGradient",
  "marker",
  "mask",
  "metadata",
  "missing-glyph",
  "mpath",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "set",
  "stop",
  "svg",
  "switch",
  "symbol",
  "text",
  "textPath",
  "tref",
  "tspan",
  "use",
  "view",
  "vkern"
]), X = {
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace"
};
function z(t, e, n) {
  let r = n.length, c = e.length, o = r, f = 0, s = 0, l = e[c - 1].nextSibling, a = null;
  for (; f < c || s < o; ) {
    if (e[f] === n[s]) {
      f++, s++;
      continue;
    }
    for (; e[c - 1] === n[o - 1]; )
      c--, o--;
    if (c === f) {
      const i = o < r ? s ? n[s - 1].nextSibling : n[o - s] : l;
      for (; s < o; )
        t.insertBefore(n[s++], i);
    } else if (o === s)
      for (; f < c; )
        (!a || !a.has(e[f])) && e[f].remove(), f++;
    else if (e[f] === n[o - 1] && n[s] === e[c - 1]) {
      const i = e[--c].nextSibling;
      t.insertBefore(n[s++], e[f++].nextSibling), t.insertBefore(n[--o], i), e[c] = n[o];
    } else {
      if (!a) {
        a = /* @__PURE__ */ new Map();
        let d = s;
        for (; d < o; )
          a.set(n[d], d++);
      }
      const i = a.get(e[f]);
      if (i != null)
        if (s < i && i < o) {
          let d = f, u = 1, m;
          for (; ++d < c && d < o && !((m = a.get(e[d])) == null || m !== i + u); )
            u++;
          if (u > i - s) {
            const v = e[f];
            for (; s < i; )
              t.insertBefore(n[s++], v);
          } else
            t.replaceChild(n[s++], e[f++]);
        } else
          f++;
      else
        e[f++].remove();
    }
  }
}
const A = "_$DX_DELEGATE";
function H(t, e = window.document) {
  const n = e[A] || (e[A] = /* @__PURE__ */ new Set());
  for (let r = 0, c = t.length; r < c; r++) {
    const o = t[r];
    n.has(o) || (n.add(o), e.addEventListener(o, oe));
  }
}
function x(t, e, n) {
  h(t) || (n == null ? t.removeAttribute(e) : t.setAttribute(e, n));
}
function q(t, e, n, r) {
  h(t) || (r == null ? t.removeAttributeNS(e, n) : t.setAttributeNS(e, n, r));
}
function Y(t, e, n) {
  h(t) || (n ? t.setAttribute(e, "") : t.removeAttribute(e));
}
function J(t, e) {
  h(t) || (e == null ? t.removeAttribute("class") : t.className = e);
}
function K(t, e, n, r) {
  if (r)
    Array.isArray(n) ? (t[`$$${e}`] = n[0], t[`$$${e}Data`] = n[1]) : t[`$$${e}`] = n;
  else if (Array.isArray(n)) {
    const c = n[0];
    t.addEventListener(e, n[0] = (o) => c.call(t, n[1], o));
  } else
    t.addEventListener(e, n, typeof n != "function" && n);
}
function Q(t, e, n = {}) {
  const r = Object.keys(e || {}), c = Object.keys(n);
  let o, f;
  for (o = 0, f = c.length; o < f; o++) {
    const s = c[o];
    !s || s === "undefined" || e[s] || (C(t, s, !1), delete n[s]);
  }
  for (o = 0, f = r.length; o < f; o++) {
    const s = r[o], l = !!e[s];
    !s || s === "undefined" || n[s] === l || !l || (C(t, s, !0), n[s] = l);
  }
  return n;
}
function W(t, e, n) {
  if (!e)
    return n ? x(t, "style") : e;
  const r = t.style;
  if (typeof e == "string")
    return r.cssText = e;
  typeof n == "string" && (r.cssText = n = void 0), n || (n = {}), e || (e = {});
  let c, o;
  for (o in n)
    e[o] == null && r.removeProperty(o), delete n[o];
  for (o in e)
    c = e[o], c !== n[o] && (r.setProperty(o, c), n[o] = c);
  return n;
}
function Z(t, e = {}, n, r) {
  const c = {};
  return r || y(
    () => c.children = b(t, e.children, c.children)
  ), y(() => typeof e.ref == "function" && ee(e.ref, t)), y(() => ne(t, e, n, !0, c, !0)), c;
}
function ee(t, e, n) {
  return k(() => t(e, n));
}
function ne(t, e, n, r, c = {}, o = !1) {
  e || (e = {});
  for (const f in c)
    if (!(f in e)) {
      if (f === "children")
        continue;
      c[f] = N(t, f, null, c[f], n, o, e);
    }
  for (const f in e) {
    if (f === "children") {
      r || b(t, e.children);
      continue;
    }
    const s = e[f];
    c[f] = N(t, f, s, c[f], n, o, e);
  }
}
function te(t) {
  let e, n;
  return !h() || !(e = p.registry.get(n = se())) ? t() : (p.completed && p.completed.add(e), p.registry.delete(n), e);
}
function h(t) {
  return !!p.context && !p.done && (!t || t.isConnected);
}
function re(t) {
  return t.toLowerCase().replace(/-([a-z])/g, (e, n) => n.toUpperCase());
}
function C(t, e, n) {
  const r = e.trim().split(/\s+/);
  for (let c = 0, o = r.length; c < o; c++)
    t.classList.toggle(r[c], n);
}
function N(t, e, n, r, c, o, f) {
  let s, l, a, i, d;
  if (e === "style")
    return W(t, n, r);
  if (e === "classList")
    return Q(t, n, r);
  if (n === r)
    return r;
  if (e === "ref")
    o || n(t);
  else if (e.slice(0, 3) === "on:") {
    const u = e.slice(3);
    r && t.removeEventListener(u, r, typeof r != "function" && r), n && t.addEventListener(u, n, typeof n != "function" && n);
  } else if (e.slice(0, 10) === "oncapture:") {
    const u = e.slice(10);
    r && t.removeEventListener(u, r, !0), n && t.addEventListener(u, n, !0);
  } else if (e.slice(0, 2) === "on") {
    const u = e.slice(2).toLowerCase(), m = U.has(u);
    if (!m && r) {
      const v = Array.isArray(r) ? r[0] : r;
      t.removeEventListener(u, v);
    }
    (m || n) && (K(t, u, n, m), m && H([u]));
  } else if (e.slice(0, 5) === "attr:")
    x(t, e.slice(5), n);
  else if (e.slice(0, 5) === "bool:")
    Y(t, e.slice(5), n);
  else if ((d = e.slice(0, 5) === "prop:") || (a = G.has(e)) || !c && ((i = R(e, t.tagName)) || (l = I.has(e))) || (s = t.nodeName.includes("-") || "is" in f)) {
    if (d)
      e = e.slice(5), l = !0;
    else if (h(t))
      return n;
    e === "class" || e === "className" ? J(t, n) : s && !l && !a ? t[re(e)] = n : t[i || e] = n;
  } else {
    const u = c && e.indexOf(":") > -1 && X[e.split(":")[0]];
    u ? q(t, u, e, n) : x(t, _[e] || e, n);
  }
  return n;
}
function oe(t) {
  if (p.registry && p.events && p.events.find(([l, a]) => a === t))
    return;
  let e = t.target;
  const n = `$$${t.type}`, r = t.target, c = t.currentTarget, o = (l) => Object.defineProperty(t, "target", {
    configurable: !0,
    value: l
  }), f = () => {
    const l = e[n];
    if (l && !e.disabled) {
      const a = e[`${n}Data`];
      if (a !== void 0 ? l.call(e, a, t) : l.call(e, t), t.cancelBubble)
        return;
    }
    return e.host && typeof e.host != "string" && !e.host._$host && e.contains(t.target) && o(e.host), !0;
  }, s = () => {
    for (; f() && (e = e._$host || e.parentNode || e.host); )
      ;
  };
  if (Object.defineProperty(t, "currentTarget", {
    configurable: !0,
    get() {
      return e || document;
    }
  }), p.registry && !p.done && (p.done = _$HY.done = !0), t.composedPath) {
    const l = t.composedPath();
    o(l[0]);
    for (let a = 0; a < l.length - 2 && (e = l[a], !!f()); a++) {
      if (e._$host) {
        e = e._$host, s();
        break;
      }
      if (e.parentNode === c)
        break;
    }
  } else
    s();
  o(r);
}
function b(t, e, n, r, c) {
  const o = h(t);
  if (o) {
    !n && (n = [...t.childNodes]);
    let l = [];
    for (let a = 0; a < n.length; a++) {
      const i = n[a];
      i.nodeType === 8 && i.data.slice(0, 2) === "!$" ? i.remove() : l.push(i);
    }
    n = l;
  }
  for (; typeof n == "function"; )
    n = n();
  if (e === n)
    return n;
  const f = typeof e, s = r !== void 0;
  if (t = s && n[0] && n[0].parentNode || t, f === "string" || f === "number") {
    if (o || f === "number" && (e = e.toString(), e === n))
      return n;
    if (s) {
      let l = n[0];
      l && l.nodeType === 3 ? l.data !== e && (l.data = e) : l = document.createTextNode(e), n = g(t, n, r, l);
    } else
      n !== "" && typeof n == "string" ? n = t.firstChild.data = e : n = t.textContent = e;
  } else if (e == null || f === "boolean") {
    if (o)
      return n;
    n = g(t, n, r);
  } else {
    if (f === "function")
      return y(() => {
        let l = e();
        for (; typeof l == "function"; )
          l = l();
        n = b(t, l, n, r);
      }), () => n;
    if (Array.isArray(e)) {
      const l = [], a = n && Array.isArray(n);
      if ($(l, e, n, c))
        return y(() => n = b(t, l, n, r, !0)), () => n;
      if (o) {
        if (!l.length)
          return n;
        if (r === void 0)
          return n = [...t.childNodes];
        let i = l[0];
        if (i.parentNode !== t)
          return n;
        const d = [i];
        for (; (i = i.nextSibling) !== r; )
          d.push(i);
        return n = d;
      }
      if (l.length === 0) {
        if (n = g(t, n, r), s)
          return n;
      } else
        a ? n.length === 0 ? T(t, l, r) : z(t, n, l) : (n && g(t), T(t, l));
      n = l;
    } else if (e.nodeType) {
      if (o && e.parentNode)
        return n = s ? [e] : e;
      if (Array.isArray(n)) {
        if (s)
          return n = g(t, n, r, e);
        g(t, n, null, e);
      } else
        n == null || n === "" || !t.firstChild ? t.appendChild(e) : t.replaceChild(e, t.firstChild);
      n = e;
    }
  }
  return n;
}
function $(t, e, n, r) {
  let c = !1;
  for (let o = 0, f = e.length; o < f; o++) {
    let s = e[o], l = n && n[t.length], a;
    if (!(s == null || s === !0 || s === !1))
      if ((a = typeof s) == "object" && s.nodeType)
        t.push(s);
      else if (Array.isArray(s))
        c = $(t, s, l) || c;
      else if (a === "function")
        if (r) {
          for (; typeof s == "function"; )
            s = s();
          c = $(
            t,
            Array.isArray(s) ? s : [s],
            Array.isArray(l) ? l : [l]
          ) || c;
        } else
          t.push(s), c = !0;
      else {
        const i = String(s);
        l && l.nodeType === 3 && l.data === i ? t.push(l) : t.push(document.createTextNode(i));
      }
  }
  return c;
}
function T(t, e, n = null) {
  for (let r = 0, c = e.length; r < c; r++)
    t.insertBefore(e[r], n);
}
function g(t, e, n, r) {
  if (n === void 0)
    return t.textContent = "";
  const c = r || document.createTextNode("");
  if (e.length) {
    let o = !1;
    for (let f = e.length - 1; f >= 0; f--) {
      const s = e[f];
      if (c !== s) {
        const l = s.parentNode === t;
        !o && !f ? l ? t.replaceChild(c, s) : t.insertBefore(c, n) : l && s.remove();
      } else
        o = !0;
    }
  } else
    t.insertBefore(c, n);
  return [c];
}
function se() {
  return p.getNextContextId();
}
const ce = "http://www.w3.org/2000/svg";
function le(t, e = !1) {
  return e ? document.createElementNS(ce, t) : document.createElement(t);
}
function fe(t) {
  const [e, n] = B(t, ["component"]), r = w(() => e.component);
  return w(() => {
    const c = r();
    switch (typeof c) {
      case "function":
        return k(() => c(n));
      case "string":
        const o = V.has(c), f = p.context ? te() : le(c, o);
        return Z(f, n, o), f;
    }
  });
}
function ae(t) {
  return (e, ...n) => (r) => {
    const c = e.reduce((l, a, i) => {
      const d = n[i];
      return l + a + (d ? d(r) : "");
    }, ""), o = `styled-${Math.random().toString(36).substring(7)}`, f = document.createElement("style");
    f.textContent = `.${o} { ${c} }`, document.head.appendChild(f);
    const s = `${o} ${r.class || ""}`;
    return S(fe, L({
      component: t
    }, r, {
      class: s
    }));
  };
}
const de = (t) => (j(), S(ie, L(t, {
  get class() {
    return `btn ${t.variant || "primary"} ${t.size || "medium"}`;
  },
  get children() {
    return t.children;
  }
}))), ie = ae("button")`
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &.primary {
    background-color: ${(t) => t.theme.colors.primary};
    color: white;
  }

  &.secondary {
    background-color: ${(t) => t.theme.colors.secondary};
    color: white;
  }
`, pe = () => {
};
export {
  de as Button,
  pe as NewComponent
};
