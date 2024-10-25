import { splitProps as P, createMemo as N, sharedConfig as h, untrack as L, createRenderEffect as w, createComponent as M, mergeProps as O } from "solid-js";
const B = [
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
], D = /* @__PURE__ */ new Set([
  "className",
  "value",
  "readOnly",
  "formNoValidate",
  "isMap",
  "noModule",
  "playsInline",
  ...B
]), j = /* @__PURE__ */ new Set([
  "innerHTML",
  "textContent",
  "innerText",
  "children"
]), k = /* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(null), {
  className: "class",
  htmlFor: "for"
}), I = /* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(null), {
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
function G(i, e) {
  const t = I[i];
  return typeof t == "object" ? t[e] ? t.$ : void 0 : t;
}
const _ = /* @__PURE__ */ new Set([
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
]), F = /* @__PURE__ */ new Set([
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
]), V = {
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace"
};
function p(i, e, t) {
  let l = t.length, s = e.length, o = l, c = 0, n = 0, f = e[s - 1].nextSibling, r = null;
  for (; c < s || n < o; ) {
    if (e[c] === t[n]) {
      c++, n++;
      continue;
    }
    for (; e[s - 1] === t[o - 1]; )
      s--, o--;
    if (s === c) {
      const a = o < l ? n ? t[n - 1].nextSibling : t[o - n] : f;
      for (; n < o; )
        i.insertBefore(t[n++], a);
    } else if (o === n)
      for (; c < s; )
        (!r || !r.has(e[c])) && e[c].remove(), c++;
    else if (e[c] === t[o - 1] && t[n] === e[s - 1]) {
      const a = e[--s].nextSibling;
      i.insertBefore(t[n++], e[c++].nextSibling), i.insertBefore(t[--o], a), e[s] = t[o];
    } else {
      if (!r) {
        r = /* @__PURE__ */ new Map();
        let u = n;
        for (; u < o; )
          r.set(t[u], u++);
      }
      const a = r.get(e[c]);
      if (a != null)
        if (n < a && a < o) {
          let u = c, d = 1, y;
          for (; ++u < s && u < o && !((y = r.get(e[u])) == null || y !== a + d); )
            d++;
          if (d > a - n) {
            const b = e[c];
            for (; n < a; )
              i.insertBefore(t[n++], b);
          } else
            i.replaceChild(t[n++], e[c++]);
        } else
          c++;
      else
        e[c++].remove();
    }
  }
}
const $ = "_$DX_DELEGATE";
function H(i, e = window.document) {
  const t = e[$] || (e[$] = /* @__PURE__ */ new Set());
  for (let l = 0, s = i.length; l < s; l++) {
    const o = i[l];
    t.has(o) || (t.add(o), e.addEventListener(o, v));
  }
}
function C(i, e, t) {
  g(i) || (t == null ? i.removeAttribute(e) : i.setAttribute(e, t));
}
function U(i, e, t, l) {
  g(i) || (l == null ? i.removeAttributeNS(e, t) : i.setAttributeNS(e, t, l));
}
function K(i, e, t) {
  g(i) || (t ? i.setAttribute(e, "") : i.removeAttribute(e));
}
function R(i, e) {
  g(i) || (e == null ? i.removeAttribute("class") : i.className = e);
}
function X(i, e, t, l) {
  if (l)
    Array.isArray(t) ? (i[`$$${e}`] = t[0], i[`$$${e}Data`] = t[1]) : i[`$$${e}`] = t;
  else if (Array.isArray(t)) {
    const s = t[0];
    i.addEventListener(e, t[0] = (o) => s.call(i, t[1], o));
  } else
    i.addEventListener(e, t, typeof t != "function" && t);
}
function q(i, e, t = {}) {
  const l = Object.keys(e || {}), s = Object.keys(t);
  let o, c;
  for (o = 0, c = s.length; o < c; o++) {
    const n = s[o];
    !n || n === "undefined" || e[n] || (x(i, n, !1), delete t[n]);
  }
  for (o = 0, c = l.length; o < c; o++) {
    const n = l[o], f = !!e[n];
    !n || n === "undefined" || t[n] === f || !f || (x(i, n, !0), t[n] = f);
  }
  return t;
}
function Y(i, e, t) {
  if (!e)
    return t ? C(i, "style") : e;
  const l = i.style;
  if (typeof e == "string")
    return l.cssText = e;
  typeof t == "string" && (l.cssText = t = void 0), t || (t = {}), e || (e = {});
  let s, o;
  for (o in t)
    e[o] == null && l.removeProperty(o), delete t[o];
  for (o in e)
    s = e[o], s !== t[o] && (l.setProperty(o, s), t[o] = s);
  return t;
}
function J(i, e = {}, t, l) {
  const s = {};
  return l || w(
    () => s.children = A(i, e.children, s.children)
  ), w(() => typeof e.ref == "function" && Q(e.ref, i)), w(() => W(i, e, t, !0, s, !0)), s;
}
function Q(i, e, t) {
  return L(() => i(e, t));
}
function W(i, e, t, l, s = {}, o = !1) {
  e || (e = {});
  for (const c in s)
    if (!(c in e)) {
      if (c === "children")
        continue;
      s[c] = S(i, c, null, s[c], t, o, e);
    }
  for (const c in e) {
    if (c === "children") {
      l || A(i, e.children);
      continue;
    }
    const n = e[c];
    s[c] = S(i, c, n, s[c], t, o, e);
  }
}
function Z(i) {
  let e, t;
  return !g() || !(e = h.registry.get(t = ee())) ? i() : (h.completed && h.completed.add(e), h.registry.delete(t), e);
}
function g(i) {
  return !!h.context && !h.done && (!i || i.isConnected);
}
function z(i) {
  return i.toLowerCase().replace(/-([a-z])/g, (e, t) => t.toUpperCase());
}
function x(i, e, t) {
  const l = e.trim().split(/\s+/);
  for (let s = 0, o = l.length; s < o; s++)
    i.classList.toggle(l[s], t);
}
function S(i, e, t, l, s, o, c) {
  let n, f, r, a, u;
  if (e === "style")
    return Y(i, t, l);
  if (e === "classList")
    return q(i, t, l);
  if (t === l)
    return l;
  if (e === "ref")
    o || t(i);
  else if (e.slice(0, 3) === "on:") {
    const d = e.slice(3);
    l && i.removeEventListener(d, l, typeof l != "function" && l), t && i.addEventListener(d, t, typeof t != "function" && t);
  } else if (e.slice(0, 10) === "oncapture:") {
    const d = e.slice(10);
    l && i.removeEventListener(d, l, !0), t && i.addEventListener(d, t, !0);
  } else if (e.slice(0, 2) === "on") {
    const d = e.slice(2).toLowerCase(), y = _.has(d);
    if (!y && l) {
      const b = Array.isArray(l) ? l[0] : l;
      i.removeEventListener(d, b);
    }
    (y || t) && (X(i, d, t, y), y && H([d]));
  } else if (e.slice(0, 5) === "attr:")
    C(i, e.slice(5), t);
  else if (e.slice(0, 5) === "bool:")
    K(i, e.slice(5), t);
  else if ((u = e.slice(0, 5) === "prop:") || (r = j.has(e)) || !s && ((a = G(e, i.tagName)) || (f = D.has(e))) || (n = i.nodeName.includes("-") || "is" in c)) {
    if (u)
      e = e.slice(5), f = !0;
    else if (g(i))
      return t;
    e === "class" || e === "className" ? R(i, t) : n && !f && !r ? i[z(e)] = t : i[a || e] = t;
  } else {
    const d = s && e.indexOf(":") > -1 && V[e.split(":")[0]];
    d ? U(i, d, e, t) : C(i, k[e] || e, t);
  }
  return t;
}
function v(i) {
  if (h.registry && h.events && h.events.find(([f, r]) => r === i))
    return;
  let e = i.target;
  const t = `$$${i.type}`, l = i.target, s = i.currentTarget, o = (f) => Object.defineProperty(i, "target", {
    configurable: !0,
    value: f
  }), c = () => {
    const f = e[t];
    if (f && !e.disabled) {
      const r = e[`${t}Data`];
      if (r !== void 0 ? f.call(e, r, i) : f.call(e, i), i.cancelBubble)
        return;
    }
    return e.host && typeof e.host != "string" && !e.host._$host && e.contains(i.target) && o(e.host), !0;
  }, n = () => {
    for (; c() && (e = e._$host || e.parentNode || e.host); )
      ;
  };
  if (Object.defineProperty(i, "currentTarget", {
    configurable: !0,
    get() {
      return e || document;
    }
  }), h.registry && !h.done && (h.done = _$HY.done = !0), i.composedPath) {
    const f = i.composedPath();
    o(f[0]);
    for (let r = 0; r < f.length - 2 && (e = f[r], !!c()); r++) {
      if (e._$host) {
        e = e._$host, n();
        break;
      }
      if (e.parentNode === s)
        break;
    }
  } else
    n();
  o(l);
}
function A(i, e, t, l, s) {
  const o = g(i);
  if (o) {
    !t && (t = [...i.childNodes]);
    let f = [];
    for (let r = 0; r < t.length; r++) {
      const a = t[r];
      a.nodeType === 8 && a.data.slice(0, 2) === "!$" ? a.remove() : f.push(a);
    }
    t = f;
  }
  for (; typeof t == "function"; )
    t = t();
  if (e === t)
    return t;
  const c = typeof e, n = l !== void 0;
  if (i = n && t[0] && t[0].parentNode || i, c === "string" || c === "number") {
    if (o || c === "number" && (e = e.toString(), e === t))
      return t;
    if (n) {
      let f = t[0];
      f && f.nodeType === 3 ? f.data !== e && (f.data = e) : f = document.createTextNode(e), t = m(i, t, l, f);
    } else
      t !== "" && typeof t == "string" ? t = i.firstChild.data = e : t = i.textContent = e;
  } else if (e == null || c === "boolean") {
    if (o)
      return t;
    t = m(i, t, l);
  } else {
    if (c === "function")
      return w(() => {
        let f = e();
        for (; typeof f == "function"; )
          f = f();
        t = A(i, f, t, l);
      }), () => t;
    if (Array.isArray(e)) {
      const f = [], r = t && Array.isArray(t);
      if (E(f, e, t, s))
        return w(() => t = A(i, f, t, l, !0)), () => t;
      if (o) {
        if (!f.length)
          return t;
        if (l === void 0)
          return t = [...i.childNodes];
        let a = f[0];
        if (a.parentNode !== i)
          return t;
        const u = [a];
        for (; (a = a.nextSibling) !== l; )
          u.push(a);
        return t = u;
      }
      if (f.length === 0) {
        if (t = m(i, t, l), n)
          return t;
      } else
        r ? t.length === 0 ? T(i, f, l) : p(i, t, f) : (t && m(i), T(i, f));
      t = f;
    } else if (e.nodeType) {
      if (o && e.parentNode)
        return t = n ? [e] : e;
      if (Array.isArray(t)) {
        if (n)
          return t = m(i, t, l, e);
        m(i, t, null, e);
      } else
        t == null || t === "" || !i.firstChild ? i.appendChild(e) : i.replaceChild(e, i.firstChild);
      t = e;
    }
  }
  return t;
}
function E(i, e, t, l) {
  let s = !1;
  for (let o = 0, c = e.length; o < c; o++) {
    let n = e[o], f = t && t[i.length], r;
    if (!(n == null || n === !0 || n === !1))
      if ((r = typeof n) == "object" && n.nodeType)
        i.push(n);
      else if (Array.isArray(n))
        s = E(i, n, f) || s;
      else if (r === "function")
        if (l) {
          for (; typeof n == "function"; )
            n = n();
          s = E(
            i,
            Array.isArray(n) ? n : [n],
            Array.isArray(f) ? f : [f]
          ) || s;
        } else
          i.push(n), s = !0;
      else {
        const a = String(n);
        f && f.nodeType === 3 && f.data === a ? i.push(f) : i.push(document.createTextNode(a));
      }
  }
  return s;
}
function T(i, e, t = null) {
  for (let l = 0, s = e.length; l < s; l++)
    i.insertBefore(e[l], t);
}
function m(i, e, t, l) {
  if (t === void 0)
    return i.textContent = "";
  const s = l || document.createTextNode("");
  if (e.length) {
    let o = !1;
    for (let c = e.length - 1; c >= 0; c--) {
      const n = e[c];
      if (s !== n) {
        const f = n.parentNode === i;
        !o && !c ? f ? i.replaceChild(s, n) : i.insertBefore(s, t) : f && n.remove();
      } else
        o = !0;
    }
  } else
    i.insertBefore(s, t);
  return [s];
}
function ee() {
  return h.getNextContextId();
}
const te = "http://www.w3.org/2000/svg";
function ie(i, e = !1) {
  return e ? document.createElementNS(te, i) : document.createElement(i);
}
function ne(i) {
  const [e, t] = P(i, ["component"]), l = N(() => e.component);
  return N(() => {
    const s = l();
    switch (typeof s) {
      case "function":
        return L(() => s(t));
      case "string":
        const o = F.has(s), c = h.context ? Z() : ie(s, o);
        return J(c, t, o), c;
    }
  });
}
function oe(i) {
  return (e, ...t) => (s) => {
    const o = e.reduce((r, a, u) => {
      const d = t[u];
      return r + a + (d ? d(s) : "");
    }, ""), c = `styled-${Math.random().toString(36).substring(7)}`, n = document.createElement("style");
    n.textContent = `.${c} { ${o} }`, document.head.appendChild(n);
    const f = `${c} ${s.class || ""}`;
    return M(ne, O({
      component: i
    }, s, {
      class: f
    }));
  };
}
export {
  oe as styled
};
