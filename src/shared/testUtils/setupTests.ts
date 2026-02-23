import '@testing-library/jest-dom';
import { vi } from 'vitest';

import mockNextImage from './mockNextImage';
import mockNextFontGoogle from './mockNextFontGoogle';

vi.mock(`next-export-optimize-images/image`, () => mockNextImage);
vi.mock(`next/font/google`, () => ({
  __esModule: true,
  default: () => mockNextFontGoogle(['Lato', 'Jost']),
}));

beforeAll(() => {
  window.HTMLElement.prototype.scrollIntoView = vi.fn();
});

beforeEach(() => {
  // All your beforeEach code here
});

afterEach(() => {
  // All your afterEach code here
});

afterAll(() => {
  // All your afterAll code here
});
