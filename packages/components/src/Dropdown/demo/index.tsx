import { Dropdown } from "../Dropdown";
import { createComponentDoc } from "@solid-ui/docs-utils";

export default createComponentDoc({
  name: "Dropdown",
  description: "下拉菜单组件，点击外部自动关闭。",
  props: [],
  examples: [
    {
      title: "基础用法",
      description: "点击按钮显示下拉内容，点击外部区域关闭。",
      code: "<Dropdown />",
      component: () => <Dropdown />,
    },
  ],
});
