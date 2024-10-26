import { Component, For, Show } from 'solid-js';
import { A } from '@solidjs/router';
import { useTheme } from '@solid-ui/theme';
import { Button } from '@solid-ui/components';
import { routes } from '../routes/components';
import { useCapitalizeFirst } from '@solid-ui/hooks';

console.log(routes);

export const Navigation: Component = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav
      style={{
        'border-color': theme().colors.border,
        'background-color': theme().colors.background,
        transition: 'all 0.3s ease',
        'box-sizing': 'border-box',
      }}
    >
      <div class="theme-switch">
        <Button onClick={toggleTheme} variant="primary" size="small">
          <Show when={theme().name === 'light'} fallback="☀️">
            🌙
          </Show>
        </Button>
      </div>
      <ul>
        <li>
          <A href="/">Home</A>
        </li>
        <For each={routes}>
          {(item) => {
            let elementRef: HTMLAnchorElement | undefined;
            const lastIndex = item.path.lastIndexOf('/');
            const name = item.path.substring(lastIndex + 1);
            useCapitalizeFirst(() => elementRef);
            return (
              <li>
                <A href={item.path} ref={(el) => (elementRef = el)}>
                  {name}
                </A>
              </li>
            );
          }}
        </For>
      </ul>
    </nav>
  );
};
