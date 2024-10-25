import { Component } from "solid-js";
import { Router, Routes, Route } from "@solidjs/router";
import { Home } from "./routes";
import { ButtonDemo } from "./routes/components/button";
import { ThemeProvider } from "@solid-ui/theme";

export const App: Component = () => {
  return (
    <ThemeProvider>
      <Router>
        <div class="app">
          <header>
            <h1>Solid UI</h1>
          </header>
          <main>
            <Routes>
              <Route path="/" component={Home} />
              <Route path="/components/button" component={ButtonDemo} />
            </Routes>
          </main>
        </div>
      </Router>
    </ThemeProvider>
  );
};
