import { JSX, Component } from "solid-js";
import { Dynamic } from "solid-js/web";
import { Theme } from "@solid-ui/theme";

type StyledProps = {
  theme: Theme;
  [key: string]: any;
};

export function styled(tag: keyof JSX.IntrinsicElements) {
  return (
    styles: TemplateStringsArray,
    ...interpolations: ((props: StyledProps) => string)[]
  ) => {
    const StyledComponent: Component<any> = (props) => {
      const computedStyles = styles.reduce((acc, style, i) => {
        const interpolation = interpolations[i];
        return acc + style + (interpolation ? interpolation(props) : "");
      }, "");

      const className = `styled-${Math.random().toString(36).substring(7)}`;
      const styleElement = document.createElement("style");
      styleElement.textContent = `.${className} { ${computedStyles} }`;
      document.head.appendChild(styleElement);

      const combinedClass = `${className} ${props.class || ""}`;

      return <Dynamic component={tag} {...props} class={combinedClass} />;
    };

    return StyledComponent;
  };
}
