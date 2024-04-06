import {
  type queries,
  type RenderOptions,
  type RenderResult,
  render as renderTestingLibrary,
} from '@testing-library/react';
import {
  type ReactNode,
  type FunctionComponent,
  type ReactElement,
} from 'react';

type Options = Omit<
  RenderOptions<typeof queries, HTMLElement, HTMLElement>,
  'queries'
>;

async function renderServerComponents(
  element: ReactElement,
  options?: Options,
): Promise<RenderResult> {
  try {
    const result = await resolveElement(element);

    return renderTestingLibrary(result, options);
  } catch (err) {
    console.error(err);
    throw err;
  }
}

async function resolveElement(ui: ReactNode) {
  try {
    if (isAsyncComponent(ui)) {
      const Component = ui.type as FunctionComponent;
      const props = ui.props;
      return await Component(props);
    }
    return ui;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

export function isAsyncComponent(ui: unknown): ui is ReactElement {
  if (isReactElement(ui)) {
    // Check if the component type has an async signature
    const isAsyncFunction =
      Object.prototype?.toString?.call(ui?.type) === '[object AsyncFunction]';
    return isAsyncFunction;
  }
  return false;
}

export const isReactElement = (element: unknown): element is ReactElement => {
  return (
    typeof element === 'object' &&
    element !== null &&
    (element as ReactElement).type !== undefined
  );
};

export const isFunctionComponent = (
  element: unknown,
): element is FunctionComponent => {
  return (
    typeof (element as FunctionComponent) === 'function' &&
    (element as FunctionComponent).prototype === undefined &&
    (element as FunctionComponent).defaultProps === 'undefined'
  );
};

export default renderServerComponents;
