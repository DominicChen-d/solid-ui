import { createComponentDoc } from '@solid-ui/docs-utils';

export default createComponentDoc({
  name: 'Dropdown',
  description: 'Button component for triggering an action.',
  props: [
    {
      name: 'sdsdsd',
      type: '"sdsd" | "sdsd"',
      required: false,
      default: 'sdsds',
      description: 'Stylvvvv',
    },
    {
      name: 'size',
      type: '"small" | "medium" | "large"',
      required: false,
      default: 'medium',
      description: 'Button size',
    },
  ],
  examples: [
    {
      title: 'basic usage',
      description: 'The most basic button usage.',
      code: '<Button>Default Button</Button>',
      component: () => <div>Default Button</div>,
    },
  ],
});
