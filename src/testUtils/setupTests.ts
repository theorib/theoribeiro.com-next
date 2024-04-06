import '@testing-library/jest-dom';
import mockedNextFonts from './mockedNextFonts';
import mockNextImage from './mockNextImage';
import mockNextFont from './mockNextFont';
import { vi } from 'vitest';

console.log(mockNextFont(['Raleway', 'Nunito_Sans']));

beforeAll(() => {
  vi.mock('next/image', () => mockNextImage);
  vi.mock(`next/font/google`, () => mockNextFont(['Raleway', 'Nunito_Sans']));
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
