import { render, screen, fireEvent } from '@solidjs/testing-library';
import { describe, test, vi } from 'vitest';
import { Alert } from '../Alert';
import '@testing-library/jest-dom';

describe('Alert', () => {
  test('renders alert with title', () => {
    render(() => <Alert title="Test Alert" />);
    expect(screen.getByText('Test Alert')).toBeInTheDocument();
  });

  test('renders alert with description', () => {
    render(() => <Alert title="Test Alert" description="This is a test description" />);
    expect(screen.getByText('This is a test description')).toBeInTheDocument();
  });

  test('renders different types of alerts', () => {
    const { unmount } = render(() => <Alert title="Success" type="success" />);
    expect(document.querySelector('.success')).toBeInTheDocument();
    unmount();

    render(() => <Alert title="Warning" type="warning" />);
    expect(document.querySelector('.warning')).toBeInTheDocument();
  });

  test('shows icon when showIcon is true', () => {
    render(() => <Alert title="Test Alert" showIcon type="success" />);
    expect(document.querySelector('svg')).toBeInTheDocument();
  });

  test('calls onClose when close button is clicked', () => {
    const handleClose = vi.fn();
    render(() => <Alert title="Test Alert" onClose={handleClose} />);

    const closeButton = document.querySelector('svg');
    fireEvent.click(closeButton!);

    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  test('renders custom close element', () => {
    render(() => <Alert title="Test Alert" close={<button>Custom Close</button>} />);
    expect(screen.getByText('Custom Close')).toBeInTheDocument();
  });
});
