var I = Object.defineProperty;
var f = (n, e, t) => e in n ? I(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var c = (n, e, t) => (f(n, typeof e != "symbol" ? e + "" : e, t), t);
import { createComponent as C, Dynamic as b, mergeProps as w } from "solid-js/web";
import { createMemo as l, createEffect as y, onCleanup as $ } from "solid-js";
function M(n) {
  return (e, ...t) => (o) => {
    let r = null;
    const i = `styled-${Math.random().toString(36).substring(7)}`, m = l(() => e.reduce((p, g, h) => {
      const d = t[h];
      return p + g + (d ? d(o) : "");
    }, ""));
    y(() => {
      r || (r = document.createElement("style"), document.head.appendChild(r)), r.textContent = `.${i} { ${m()} }`;
    }), $(() => {
      r && document.head.removeChild(r);
    });
    const x = l(() => `${i} ${o.class || ""}`);
    return C(b, w({
      component: n
    }, o, {
      get class() {
        return x();
      }
    }));
  };
}
const s = class s {
  constructor() {
    c(this, "baseIndex", 1e3);
    c(this, "indexes", /* @__PURE__ */ new Map());
  }
  static getInstance() {
    return s.instance || (s.instance = new s()), s.instance;
  }
  // 为不同类型组件设置基础 zIndex
  getBaseZIndex(e) {
    return {
      dialog: 1e3,
      drawer: 900,
      popup: 800,
      tooltip: 700,
      dropdown: 600
    }[e] || this.baseIndex;
  }
  // 获取新的 zIndex
  generate(e) {
    const t = this.getBaseZIndex(e), o = (this.indexes.get(e) || t) + 1;
    return this.indexes.set(e, o), o;
  }
  // 释放 zIndex
  release(e) {
    const t = this.indexes.get(e);
    t && this.indexes.set(e, t - 1);
  }
};
c(s, "instance");
let a = s;
const v = a.getInstance();
export {
  M as styled,
  v as zIndexManager
};
