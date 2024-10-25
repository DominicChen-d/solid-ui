import { Component, For } from "solid-js";
import { Router, Routes, Route } from "@solidjs/router";
import { ThemeProvider } from "@solid-ui/theme";
import { Navigation } from "./components/Navigation";
import { routes } from "./routes/components";
import { Home } from "./routes";

export const App: Component = () => {
  return (
    <ThemeProvider>
      <Router>
        <div class="app">
          <Navigation />
          <main>
            <Routes>
              <Route path="/" component={Home} />
              <For each={routes}>{(route) => (
                <Route path={route.path} component={route.component} />
              )}</For>
            </Routes>
          </main>
        </div>
      </Router>
    </ThemeProvider>
  );
};
