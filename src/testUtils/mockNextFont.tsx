import { vi } from 'vitest';

/**
 * Defines the shape of a font module, which maps font names to objects that provide
 * CSS styles, class names, and CSS variables for that font.
 */
interface FontModule {
  [fontName: string]: () => {
    style: React.CSSProperties;
    className: string;
    variable: string;
  };
}

/**
 * Creates a mock font module for testing purposes.
 *
 * The returned object has a key-value pair where the key is the `fontName` and the value is a function that returns an object with the following properties:
 * - `style`: an object containing the mocked font styles, including the `fontFamily` and `fontStyle`.
 * - `className`: a string representing the mocked class name for the font.
 * - `variable`: a string representing the mocked CSS variable for the font.
 *
 * @param fontName - The name of the font to be mocked.
 * @returns A `FontModule` object with the mocked font information.
 */
function createFontModule(fontName: string): FontModule {
  const fontNameLowerCase = fontName.toLowerCase();
  return {
    [fontName]: () => ({
      style: {
        fontFamily: `mocked-${fontNameLowerCase}-font-family`,
        fontStyle: 'normal',
      },
      className: `mocked-${fontNameLowerCase}-class-name`,
      variable: `--font-${fontNameLowerCase}`,
    }),
  };
}

/**
 * Mocks the `next/font` component for use in test environments.
 *
 * This function creates a mock implementation of the `next/font` component that can be used in test environments. It takes a font name or an array of font names, and returns an object that provides mocked styles, class names, and CSS variables for the specified fonts.
 *
 * Usage:
 *
 * vi.mock(`next/font/google`, () => mockNextFont('Inter'));
 *
 *
 * @param fontName - A string or an array of strings representing the font names to be mocked.
 * @returns An object that provides mocked styles, class names, and CSS variables for the specified fonts.
 */
const mockNextFont = vi.hoisted(() => {
  return function (fontName: string | string[]) {
    if (!Array.isArray(fontName)) return createFontModule(fontName);

    const fontModules = fontName.reduce((fontModules, fontName) => {
      return { ...fontModules, ...createFontModule(fontName) };
    }, {} as FontModule);

    return fontModules;
  };
});

export default mockNextFont;
