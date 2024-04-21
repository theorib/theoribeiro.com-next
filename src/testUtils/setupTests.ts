import '@testing-library/jest-dom';
import { vi } from 'vitest';

import mockNextImage from './mockNextImage';
import mockNextFontGoogle from './mockNextFontGoogle';

vi.mock(`next-export-optimize-images/image`, () => mockNextImage);
vi.mock(`next/font/google`, () =>
  mockNextFontGoogle(['Raleway', 'Nunito_Sans']),
);

beforeAll(() => {
  //  All your beforeAll code here
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
