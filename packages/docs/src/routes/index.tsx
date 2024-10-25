import { Component } from "solid-js";
import { Link } from "@solidjs/router";

export const Home: Component = () => {
  return (
    <div>
      <h1>Solid UI Components</h1>
      <nav>
        <ul>
          <li>
            <Link href="/components/button">Button</Link>
          </li>
          <li>
            <Link href="/components/new-component">NewComponent</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
