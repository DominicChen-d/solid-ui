import { Component, createSignal } from "solid-js";
import { useClickOutside } from "@solid-ui/hooks";

export const Dropdown: Component = () => {
  const [isOpen, setIsOpen] = createSignal(false);
  let ref: HTMLDivElement | undefined;

  useClickOutside(
    () => ref,
    () => {
      setIsOpen(false);
    }
  );

  return (
    <div ref={(el) => (ref = el)}>
      <button onClick={() => setIsOpen((prev) => !prev)}>Toggle</button>
      {isOpen() && (
        <div class="dropdown-content">
          <p>Dropdown content</p>
        </div>
      )}
    </div>
  );
};
