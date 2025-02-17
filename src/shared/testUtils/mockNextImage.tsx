/**
 * Mocks the `next/image` component by providing a custom `MockNextImage` component that can be used in tests.
 * This allows testing components that use the `next/image` component without the need for a real image asset.
 *
 * The `MockNextImage` component maps the `src` prop to a string representation of the image source, and renders a standard `img` element with the provided props.
 *
 * The `mockNextImage` function is used to set up the mock by calling `vi.mock('next/image', ...)` with the `MockNextImage` component.
 */

/* eslint-disable @next/next/no-img-element */

import { vi } from 'vitest';
import type { ImageProps, StaticImageData } from 'next/image';
import type { ComponentType, ReactElement } from 'react';

// Exellent suggestion to mock next/image from:
// https://github.com/vercel/next.js/discussions/32325#discussioncomment-6040668

/**
 * Represents an ES module default export, which contains a `default` property that holds the actual exported value.
 */
interface ESModuleDefault<T> {
  readonly __esModule: true;
  readonly default: T;
}

/**
 * Represents the type of the `src` prop in the `ImageProps` type from the `next/image` module.
 * The type is inferred to be either the inferred type `T`, `StaticImageData`, or a string.
 * This type is used to ensure that the `src` prop in the `ImageProps` type is correctly typed.
 */
type StaticRequire = ImageProps['src'] extends
  | infer T
  | StaticImageData
  | string
  ? T
  : never;

/**
 * Maps a static image import to its source string.
 *
 * If the `staticImport` is an ES module default export, it extracts the `src` property from the default export. Otherwise, it returns the `src` property directly.
 *
 * @param staticImport - The static image import to map to a source string.
 * @returns The source string for the static image.
 */
const mapStaticImportToSrc = (
  staticImport: StaticImageData | StaticRequire,
): string => {
  if ('default' in staticImport) {
    return staticImport.default.src;
  }
  return staticImport.src;
};

/**
 * Maps a static image import or string to a source string.
 *
 * If the `src` parameter is a string, it is returned as-is. Otherwise, if the `src` parameter is a static image import, the `src` property is extracted from the import and returned.
 *
 * @param src - The static image import or string to map to a source string.
 * @returns The source string for the static image or the input string.
 */
const mapNextImageSrcToString = (
  src: StaticImageData | StaticRequire | string,
): string => {
  if (typeof src === 'string') {
    return src;
  }
  return mapStaticImportToSrc(src);
};

/**
 * Renders a mock `next/image` component with the provided props.
 *
 * This function is used in test environments to mock the behavior of the `next/image` component.
 * It takes the same props as the `next/image` component and returns a standard `img` element with the appropriate attributes.
 *
 * @param alt - The `alt` attribute of the `img` element.
 * @param height - The `height` attribute of the `img` element.
 * @param src - The `src` attribute of the `img` element. This can be a static image import, a `StaticImageData` object, or a string.
 * @param width - The `width` attribute of the `img` element.
 * @returns A React element representing the mocked `next/image` component.
 */
function MockNextImage({
  alt,
  height,
  src: nextImageSrc,
  width,
}: Readonly<ImageProps>): ReactElement {
  const imgSrc: string = mapNextImageSrcToString(nextImageSrc);
  return <img alt={alt} height={height} src={imgSrc} width={width} />;
}

/**
 * Mocks the behavior of Next.js `next/image` component for testing purposes.
 * Used for testing with React Testing Library and Vitest.
 *
 * Usage: vi.mock(`next/image`, () => mockNextImage);
 *
 * IMPORTANT: when using mockNextImage don't call it but pass it as the return value of the vi.mock function.
 * IMPORTANT: this module needs to be imported BEFORE the module that uses the next/image component.
 *
 * @returns A function that can be returned from a vi.mock() call to set up a mock for the `next/image` component.
 */
const mockNextImage = vi.hoisted(
  (): ESModuleDefault<ComponentType<ImageProps>> => {
    return {
      __esModule: true,
      default: MockNextImage,
    };
  },
);
export default mockNextImage;
