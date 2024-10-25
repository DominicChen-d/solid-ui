import { Button } from "../Button";
import { createComponentDoc } from "@solid-ui/docs-utils";

export default createComponentDoc({
  name: "Button",
  description: "按钮组件，用于触发操作。",
  props: [
    {
      name: "variant",
      type: '"primary" | "secondary"',
      required: false,
      default: "primary",
      description: "按钮的样式变体",
    },
    {
      name: "size",
      type: '"small" | "medium" | "large"',
      required: false,
      default: "medium",
      description: "按钮的大小",
    },
  ],
  examples: [
    {
      title: "基础用法",
      description: "最基本的按钮用法。",
      code: "<Button>Default Button</Button>",
      component: () => <Button>Default Button</Button>,
    },
    {
      title: "按钮变体",
      description: "不同样式的按钮。",
      code: `
<Button variant="primary">Primary Button</Button>
<Button variant="secondary">Secondary Button</Button>
      `,
      component: () => (
        <>
          <Button variant="primary">Primary Button</Button>
          <Button variant="secondary">Secondary Button</Button>
        </>
      ),
    },
    {
      title: "按钮大小",
      description: "不同尺寸的按钮。",
      code: `
<Button size="small">Small Button</Button>
<Button size="medium">Medium Button</Button>
<Button size="large">Large Button</Button>
      `,
      component: () => (
        <>
          <Button size="small">Small Button</Button>
          <Button size="medium">Medium Button</Button>
          <Button size="large">Large Button</Button>
        </>
      ),
    },
  ],
});
