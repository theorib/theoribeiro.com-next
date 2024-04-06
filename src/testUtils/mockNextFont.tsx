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
 * Creates a mock `next/font/google` module for testing purposes.
 *
 * This function returns a function that takes a font name or an array of font names, and returns a mocked `FontModule` object. The mocked `FontModule` object has key-value pairs where the key is the font name and the value is a function that returns an object with the following properties:
 * - `style`: an object containing the mocked font styles, including the `fontFamily` and `fontStyle`.
 * - `className`: a string representing the mocked class name for the font.
 * - `variable`: a string representing the mocked CSS variable for the font.
 *
 * The returned function also mocks the `next/font/google` module using the `vi.doMock` function from the `vitest` library.
 *
 * Usage: mockNextFont('Raleway') or mockNextFont(['Raleway', 'Nunito_Sans']
 *
 * @param fontName - The name of the font to be mocked, or an array of font names.
 * @returns A function that returns a mocked `FontModule` object.
 */
const mockNextFont = vi.hoisted(() => {
  return function (fontName: string | string[]) {
    if (!Array.isArray(fontName)) return createFontModule(fontName);

    const fontModules = fontName.reduce((fontModules, fontName) => {
      return { ...fontModules, ...createFontModule(fontName) };
    }, {} as FontModule);

    vi.doMock(`next/font/google`, () => fontModules);
  };
});

export default mockNextFont;
