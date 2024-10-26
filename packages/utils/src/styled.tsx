import { JSX, Component, createEffect, onCleanup, createMemo } from 'solid-js';
import { Dynamic } from 'solid-js/web';
import { Theme } from '@solid-ui/theme';

type StyledProps = {
  theme: Theme;
  [key: string]: any;
};

export function styled(tag: keyof JSX.IntrinsicElements) {
  return (styles: TemplateStringsArray, ...interpolations: ((props: StyledProps) => string)[]) => {
    const StyledComponent: Component<StyledProps> = (props) => {
      let styleElement: HTMLStyleElement | null = null;
      const className = `styled-${Math.random().toString(36).substring(7)}`;

      const computedStyles = createMemo(() => {
        return styles.reduce((acc, style, i) => {
          const interpolation = interpolations[i];
          return acc + style + (interpolation ? interpolation(props) : '');
        }, '');
      });

      createEffect(() => {
        if (!styleElement) {
          styleElement = document.createElement('style');
          document.head.appendChild(styleElement);
        }

        styleElement.textContent = `.${className} { ${computedStyles()} }`;
      });

      onCleanup(() => {
        if (styleElement) {
          document.head.removeChild(styleElement);
        }
      });

      const combinedClass = createMemo(() => `${className} ${props.class || ''}`);

      return <Dynamic component={tag} {...props} class={combinedClass()} />;
    };

    return StyledComponent;
  };
}
