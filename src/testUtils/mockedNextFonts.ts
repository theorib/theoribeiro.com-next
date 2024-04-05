import { vi } from 'vitest';
// If you are using next-fonts in your project you will need to mock your font file functions like this
// You will also need to run this function either in your setupTests.ts file or in your test file using beforeEach or beforeAll:
// Make sure to import this function in your test file before importing the element you want to test
//  beforeAll(() => {
//   mockedNextFonts();
// });
const mockedNextFonts = () => {
  vi.mock('next/font/google', () => ({
    Raleway: () => ({
      style: {
        fontFamily: 'mocked-railway-font-family',
        fontStyle: 'normal',
      },
      className: 'mocked-raleway-class-name',
      variable: '--font-raleway',
    }),
    Nunito_Sans: () => ({
      style: {
        fontFamily: 'mocked-nunito-sans-font-family',
        fontStyle: 'normal',
      },
      className: 'mocked-nunito-sans-class-name',
      variable: '--font-nunito-sans',
    }),
  }));
};

export default mockedNextFonts;
