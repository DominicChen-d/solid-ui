import '@testing-library/jest-dom';
import { afterEach } from 'vitest';
import { cleanup } from '@solidjs/testing-library';

// 每个测试后自动清理
afterEach(() => {
  cleanup();
});
