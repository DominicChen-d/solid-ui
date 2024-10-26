import { createComponent as p, Dynamic as y, mergeProps as C } from "solid-js/web";
import { createMemo as r, createEffect as f, onCleanup as h } from "solid-js";
function E(c) {
  return (m, ...l) => (t) => {
    let e = null;
    const n = `styled-${Math.random().toString(36).substring(7)}`, s = r(() => m.reduce((d, u, i) => {
      const o = l[i];
      return d + u + (o ? o(t) : "");
    }, ""));
    f(() => {
      e || (e = document.createElement("style"), document.head.appendChild(e)), e.textContent = `.${n} { ${s()} }`;
    }), h(() => {
      e && document.head.removeChild(e);
    });
    const a = r(() => `${n} ${t.class || ""}`);
    return p(y, C({
      component: c
    }, t, {
      get class() {
        return a();
      }
    }));
  };
}
export {
  E as styled
};
