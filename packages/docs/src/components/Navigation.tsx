import { Component, Show } from "solid-js";
import { A } from "@solidjs/router";
import { useTheme } from "@solid-ui/theme";
import { Button } from "@solid-ui/components";

export const Navigation: Component = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav
      style={{
        "border-color": theme().colors.border,
        "background-color": theme().colors.background,
        transition: "all 0.3s ease",
      }}
    >
      <div class="theme-switch">
        <Button onClick={toggleTheme} variant="primary" size="small">
          <Show when={theme().name === "light"} fallback="☀️">
            🌙
          </Show>
        </Button>
      </div>
      <ul>
        <li>
          <A href="/">Home</A>
        </li>
        <li>
          <A href="/components/button">Button</A>
        </li>
        <li>
          <A href="/components/dropdown">Dropdown</A>
        </li>
      </ul>
    </nav>
  );
};
