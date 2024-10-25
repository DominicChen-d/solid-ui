import { render, screen } from '@solidjs/testing-library';
import { Button } from '../Button';

describe('Button', () => {
  it('renders children correctly', () => {
    render(() => <Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('applies variant class', () => {
    render(() => <Button variant="secondary">Button</Button>);
    const button = screen.getByText('Button');
    expect(button).toHaveClass('secondary');
  });
});
