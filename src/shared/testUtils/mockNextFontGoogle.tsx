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

/** Creates a single font module for tests that use Next.js `next/font/google`.
 * Used for testing with React Testing Library and Vitest.
 *
 * This function takes a font name and returns a `FontModule` object that maps
 * the font name to a method which in turn returns an object with mocked font styles, class name, and CSS variable.
 *
 * @param fontName - A string representing the name of the font to be mocked.
 * @returns A font module object with a method for the font.
 */
function createFontModuleSingle(fontName: string): FontModule {
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
 * Creates a set of mock font modules for testing files that use Next.js `next/font/google`.
 * Used for testing with React Testing Library and Vitest.
 *
 * This function takes an array of font names and returns a `FontModule` object that maps each font name to a method which in turn returns an object with mocked font styles, class name, and CSS variable.
 *
 * @param fontNames - An array of font names to be mocked.
 * @returns A `FontModule` object containing the mocked font information.
 */
function createFontModuleMultiple(fontNames: string[]): FontModule {
  const fontModules = fontNames.reduce((modules, name) => {
    return { ...modules, ...createFontModuleSingle(name) };
  }, {});

  return fontModules;
}

/**
 * Used to create mock font modules for testing files that uses Next.js `next/font/google` module.
 * Used for testing with React Testing Library and Vitest.
 *
 * Usage Example: vi.mock(`next/font/google`, () => mockNextFontGoogle(['Rubik_Scribble', 'Inter']));
 * IMPORTANT: this module needs to be imported BEFORE the module that uses the next/font/google component.
 *
 * @param fontNames - The font names to create the mocked font module for. Can be a single string or an array of strings.
 * @returns An object with a method for each font passed as an argument. Each method returns an object with mocked font styles, class names, and CSS variables.
 */
const mockNextFontGoogle = vi.hoisted(() => {
  const createMockedFontModules = function (fontNames: string | string[]) {
    if (typeof fontNames === 'string') return createFontModuleSingle(fontNames);
    if (Array.isArray(fontNames)) return createFontModuleMultiple(fontNames);
  };

  return createMockedFontModules;
});

export default mockNextFontGoogle;
