import { Button } from '../Button';
import { createComponentDoc } from '@solid-ui/docs-utils';

export default createComponentDoc({
  name: 'Button',
  description: 'Button component for triggering an action.',
  props: [
    {
      name: 'variant',
      type: '"primary" | "secondary"',
      required: false,
      default: 'primary',
      description: 'Style variants for buttons',
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
      component: () => <Button>Default Button</Button>,
    },
    {
      title: 'Button variants',
      description: 'Different styles of buttons.',
      code: `
<Button variant="primary">Primary Button</Button>
<Button variant="secondary">Secondary Button</Button>
      `,
      component: () => (
        <>
          <Button variant="primary">Primary Button</Button>
          <Button variant="secondary">Secondary Button</Button>
        </>
      ),
    },
    {
      title: 'Button Size',
      description: 'Different sizes of buttons.',
      code: `
<Button size="small">Small Button</Button>
<Button size="medium">Medium Button</Button>
<Button size="large">Large Button</Button>
      `,
      component: () => (
        <>
          <Button size="small">Small Button</Button>
          <Button size="medium">Medium Button</Button>
          <Button size="large">Large Button</Button>
        </>
      ),
    },
  ],
});
