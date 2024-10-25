// 首先定义主题接口和默认主题
export interface Theme {
  name: "light" | "dark";
  colors: {
    primary: string;
    secondary: string;
    background: string;
    text: string;
    border: string;
  };
  spacing: {
    small: string;
    medium: string;
    large: string;
  };
}

export const lightTheme: Theme = {
  name: "light",
  colors: {
    primary: "#1890ff",
    secondary: "#f5222d",
    background: "#ffffff",
    text: "#000000",
    border: "#e8e8e8",
  },
  spacing: {
    small: "8px",
    medium: "16px",
    large: "24px",
  },
};

export const darkTheme: Theme = {
  name: "dark",
  colors: {
    primary: "#177ddc",
    secondary: "#dc4446",
    background: "#141414",
    text: "#ffffff",
    border: "#434343",
  },
  spacing: {
    small: "8px",
    medium: "16px",
    large: "24px",
  },
};
