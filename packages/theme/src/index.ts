export interface Theme {
  colors: {
    primary: string;
    secondary: string;
  };
  spacing: {
    small: string;
    medium: string;
    large: string;
  };
}

export const defaultTheme: Theme = {
  colors: {
    primary: "#1890ff",
    secondary: "#f5222d",
  },
  spacing: {
    small: "8px",
    medium: "16px",
    large: "24px",
  },
};

// 导出所有内容
export * from "./theme";
export * from "./context";
