import { lazy } from "solid-js";
import { ComponentDocs } from "../../components/ComponentDocs";
import { ComponentDoc } from "@solid-ui/docs-utils";

// 定义模块类型
type DocModule = {
  default: ComponentDoc;
};

// 使用 Vite 的 glob 导入所有组件文档
const componentDocs = import.meta.glob<DocModule>(
  "../../../node_modules/@solid-ui/components/src/*/demo/index.tsx"
);

// 创建路由配置
export const routes = Object.entries(componentDocs).map(([path, importFn]) => {
  const componentName = path.split("/").slice(-3)[0].toLowerCase();

  return {
    path: `/components/${componentName}`,
    component: lazy(async () => {
      const mod = await importFn();
      return {
        default: () => <ComponentDocs doc={mod.default} />,
      };
    }),
  };
});
