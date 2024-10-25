import { Component } from "solid-js";
import { Button } from "@solid-ui/components";

export const ButtonDemo: Component = () => {
  return (
    <div class="demo-container">
      <h2>Button Component</h2>

      <section>
        <h3>Basic Usage</h3>
        <div class="demo-block">
          <Button>Default Button</Button>
        </div>
      </section>

      <section>
        <h3>Variants</h3>
        <div class="demo-block">
          <Button variant="primary">Primary Button</Button>
          <Button variant="secondary">Secondary Button</Button>
        </div>
      </section>

      <section>
        <h3>Sizes</h3>
        <div class="demo-block">
          <Button size="small">Small Button</Button>
          <Button size="medium">Medium Button</Button>
          <Button size="large">Large Button</Button>
        </div>
      </section>
    </div>
  );
};
