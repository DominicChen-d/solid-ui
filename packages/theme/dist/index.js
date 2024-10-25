import { createRenderEffect as r, sharedConfig as A, untrack as N, createContext as P, createSignal as a, createComponent as b, useContext as B } from "solid-js";
const p = {
  name: "light",
  colors: {
    primary: "#1890ff",
    secondary: "#f5222d",
    background: "#ffffff",
    text: "#000000",
    border: "#e8e8e8"
  },
  spacing: {
    small: "8px",
    medium: "16px",
    large: "24px"
  }
}, E = {
  name: "dark",
  colors: {
    primary: "#177ddc",
    secondary: "#dc4446",
    background: "#141414",
    text: "#ffffff",
    border: "#434343"
  },
  spacing: {
    small: "8px",
    medium: "16px",
    large: "24px"
  }
};
function H(t, i, e) {
  let d = e.length, l = i.length, f = d, s = 0, o = 0, n = i[l - 1].nextSibling, g = null;
  for (; s < l || o < f; ) {
    if (i[s] === e[o]) {
      s++, o++;
      continue;
    }
    for (; i[l - 1] === e[f - 1]; )
      l--, f--;
    if (l === s) {
      const h = f < d ? o ? e[o - 1].nextSibling : e[f - o] : n;
      for (; o < f; )
        t.insertBefore(e[o++], h);
    } else if (f === o)
      for (; s < l; )
        (!g || !g.has(i[s])) && i[s].remove(), s++;
    else if (i[s] === e[f - 1] && e[o] === i[l - 1]) {
      const h = i[--l].nextSibling;
      t.insertBefore(e[o++], i[s++].nextSibling), t.insertBefore(e[--f], h), i[l] = e[f];
    } else {
      if (!g) {
        g = /* @__PURE__ */ new Map();
        let y = o;
        for (; y < f; )
          g.set(e[y], y++);
      }
      const h = g.get(i[s]);
      if (h != null)
        if (o < h && h < f) {
          let y = s, x = 1, T;
          for (; ++y < l && y < f && !((T = g.get(i[y])) == null || T !== h + x); )
            x++;
          if (x > h - o) {
            const S = i[s];
            for (; o < h; )
              t.insertBefore(e[o++], S);
          } else
            t.replaceChild(e[o++], i[s++]);
        } else
          s++;
      else
        i[s++].remove();
    }
  }
}
function L(t, i, e) {
  let d;
  const l = () => {
    const s = document.createElement("template");
    return s.innerHTML = t, e ? s.content.firstChild.firstChild : s.content.firstChild;
  }, f = i ? () => N(() => document.importNode(d || (d = l()), !0)) : () => (d || (d = l())).cloneNode(!0);
  return f.cloneNode = f, f;
}
function M(t, i, e, d) {
  if (e !== void 0 && !d && (d = []), typeof i != "function")
    return m(t, i, d, e);
  r((l) => m(t, i(), l, e), d);
}
function j(t) {
  return !!A.context && !A.done && (!t || t.isConnected);
}
function m(t, i, e, d, l) {
  const f = j(t);
  if (f) {
    !e && (e = [...t.childNodes]);
    let n = [];
    for (let g = 0; g < e.length; g++) {
      const h = e[g];
      h.nodeType === 8 && h.data.slice(0, 2) === "!$" ? h.remove() : n.push(h);
    }
    e = n;
  }
  for (; typeof e == "function"; )
    e = e();
  if (i === e)
    return e;
  const s = typeof i, o = d !== void 0;
  if (t = o && e[0] && e[0].parentNode || t, s === "string" || s === "number") {
    if (f || s === "number" && (i = i.toString(), i === e))
      return e;
    if (o) {
      let n = e[0];
      n && n.nodeType === 3 ? n.data !== i && (n.data = i) : n = document.createTextNode(i), e = c(t, e, d, n);
    } else
      e !== "" && typeof e == "string" ? e = t.firstChild.data = i : e = t.textContent = i;
  } else if (i == null || s === "boolean") {
    if (f)
      return e;
    e = c(t, e, d);
  } else {
    if (s === "function")
      return r(() => {
        let n = i();
        for (; typeof n == "function"; )
          n = n();
        e = m(t, n, e, d);
      }), () => e;
    if (Array.isArray(i)) {
      const n = [], g = e && Array.isArray(e);
      if (C(n, i, e, l))
        return r(() => e = m(t, n, e, d, !0)), () => e;
      if (f) {
        if (!n.length)
          return e;
        if (d === void 0)
          return e = [...t.childNodes];
        let h = n[0];
        if (h.parentNode !== t)
          return e;
        const y = [h];
        for (; (h = h.nextSibling) !== d; )
          y.push(h);
        return e = y;
      }
      if (n.length === 0) {
        if (e = c(t, e, d), o)
          return e;
      } else
        g ? e.length === 0 ? w(t, n, d) : H(t, e, n) : (e && c(t), w(t, n));
      e = n;
    } else if (i.nodeType) {
      if (f && i.parentNode)
        return e = o ? [i] : i;
      if (Array.isArray(e)) {
        if (o)
          return e = c(t, e, d, i);
        c(t, e, null, i);
      } else
        e == null || e === "" || !t.firstChild ? t.appendChild(i) : t.replaceChild(i, t.firstChild);
      e = i;
    }
  }
  return e;
}
function C(t, i, e, d) {
  let l = !1;
  for (let f = 0, s = i.length; f < s; f++) {
    let o = i[f], n = e && e[t.length], g;
    if (!(o == null || o === !0 || o === !1))
      if ((g = typeof o) == "object" && o.nodeType)
        t.push(o);
      else if (Array.isArray(o))
        l = C(t, o, n) || l;
      else if (g === "function")
        if (d) {
          for (; typeof o == "function"; )
            o = o();
          l = C(
            t,
            Array.isArray(o) ? o : [o],
            Array.isArray(n) ? n : [n]
          ) || l;
        } else
          t.push(o), l = !0;
      else {
        const h = String(o);
        n && n.nodeType === 3 && n.data === h ? t.push(n) : t.push(document.createTextNode(h));
      }
  }
  return l;
}
function w(t, i, e = null) {
  for (let d = 0, l = i.length; d < l; d++)
    t.insertBefore(i[d], e);
}
function c(t, i, e, d) {
  if (e === void 0)
    return t.textContent = "";
  const l = d || document.createTextNode("");
  if (i.length) {
    let f = !1;
    for (let s = i.length - 1; s >= 0; s--) {
      const o = i[s];
      if (l !== o) {
        const n = o.parentNode === t;
        !f && !s ? n ? t.replaceChild(l, o) : t.insertBefore(l, e) : n && o.remove();
      } else
        f = !0;
    }
  } else
    t.insertBefore(l, e);
  return [l];
}
var q = /* @__PURE__ */ L("<div>");
const u = P({
  theme: () => p,
  toggleTheme: () => {
  }
}), R = (t) => {
  const [i, e] = a(p), d = () => {
    e((l) => l.name === "light" ? E : p);
  };
  return b(u.Provider, {
    value: {
      theme: i,
      toggleTheme: d
    },
    get children() {
      var l = q();
      return l.style.setProperty("min-height", "100vh"), l.style.setProperty("transition", "all 0.3s ease"), M(l, () => t.children), r((f) => {
        var s = i().colors.background, o = i().colors.text;
        return s !== f.e && ((f.e = s) != null ? l.style.setProperty("background-color", s) : l.style.removeProperty("background-color")), o !== f.t && ((f.t = o) != null ? l.style.setProperty("color", o) : l.style.removeProperty("color")), f;
      }, {
        e: void 0,
        t: void 0
      }), l;
    }
  });
}, $ = () => B(u), D = {
  colors: {
    primary: "#1890ff",
    secondary: "#f5222d"
  },
  spacing: {
    small: "8px",
    medium: "16px",
    large: "24px"
  }
};
export {
  R as ThemeProvider,
  E as darkTheme,
  D as defaultTheme,
  p as lightTheme,
  $ as useTheme
};
