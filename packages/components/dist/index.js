import { createComponent as s, mergeProps as l, use as m, insert as c, memo as d, delegateEvents as p, template as a } from "solid-js/web";
import { useTheme as f } from "@solid-ui/theme";
import { styled as u } from "@solid-ui/utils";
import { createSignal as g } from "solid-js";
import { useClickOutside as h } from "@solid-ui/hooks";
const z = (e) => {
  const {
    theme: t
  } = f();
  return s($, l(e, {
    get theme() {
      return t();
    },
    get class() {
      return `btn ${e.variant || "primary"} ${e.size || "medium"}`;
    },
    get children() {
      return e.children;
    }
  }));
}, $ = u("button")`
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;

  &.primary {
    background-color: ${(e) => e.theme.colors.primary};
    color: #ffffff;

    &:hover {
      opacity: 0.9;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
  }

  &.secondary {
    background-color: ${(e) => e.theme.colors.secondary};
    color: #ffffff;

    &:hover {
      opacity: 0.9;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
  }

  &.small {
    padding: ${(e) => e.theme.spacing.small};
    font-size: 12px;
  }

  &.medium {
    padding: ${(e) => e.theme.spacing.medium};
    font-size: 14px;
  }

  &.large {
    padding: ${(e) => e.theme.spacing.large};
    font-size: 16px;
  }
`;
var b = /* @__PURE__ */ a("<div><button>Toggle"), x = /* @__PURE__ */ a("<div class=dropdown-content><p>Dropdown content");
const C = () => {
  const [e, t] = g(!1);
  let n;
  return h(() => n, () => {
    t(!1);
  }), (() => {
    var o = b(), i = o.firstChild;
    return m((r) => n = r, o), i.$$click = () => t((r) => !r), c(o, (() => {
      var r = d(() => !!e());
      return () => r() && x();
    })(), null), o;
  })();
};
p(["click"]);
export {
  z as Button,
  C as Dropdown
};
