import { createComponent as i, Dynamic as p, mergeProps as y } from "solid-js/web";
import { createMemo as C, createEffect as f, onCleanup as h } from "solid-js";
function E(r) {
  return (c, ...m) => (t) => {
    let e = null;
    const n = `styled-${Math.random().toString(36).substring(7)}`, l = C(() => c.reduce((a, d, u) => {
      const o = m[u];
      return a + d + (o ? o(t) : "");
    }, ""));
    f(() => {
      e || (e = document.createElement("style"), document.head.appendChild(e)), e.textContent = `.${n} { ${l()} }`;
    }), h(() => {
      e && document.head.removeChild(e);
    });
    const s = `${n} ${t.class || ""}`;
    return i(p, y({
      component: r
    }, t, {
      class: s
    }));
  };
}
export {
  E as styled
};
