import userEvent from '@testing-library/user-event';

import {
  render,
  screen,
  within,
} from '@/shared/components/expandingGallery/__tests__/expandingGridGalleryTestUtils/customRenderGallery';

import { expandingGalleryTestContent } from '@/shared/components/expandingGallery/__tests__/expandingGridGalleryTestUtils/testData';
import { gridAriaLabel } from '@/shared/components/expandingGallery/components/Grid';
import { galleryGridItemRole } from '@/shared/components/expandingGallery/__tests__/ExpandingGridGalleryGeneral.test';
import TestGalleryTree from '@/shared/components/expandingGallery/__tests__/expandingGridGalleryTestUtils/TestGalleryTree';

export const renderExpandingGalleryTest = async function (
  itemsExpanded = false,
) {
  const user = userEvent.setup();

  render(<TestGalleryTree />);

  const galleryList = await screen.findByRole('list', {
    name: gridAriaLabel,
  });
  const galleryItems = within(galleryList).getAllByRole(galleryGridItemRole, {
    expanded: itemsExpanded,
  });

  return {
    user,
    galleryList,
    galleryItems,
  };
};

export const checkContentOfGalleryExpanderElement = async function (
  index: number,
  contentArray: typeof expandingGalleryTestContent,
) {
  const expanderTitle = await screen.findByRole('heading', {
    name: contentArray[index].title,
  });

  const expanderTextContent = screen.getByText(contentArray[index].content);
  const expanderImage = screen.getByRole('img', {
    name: contentArray[index].expandedAlt,
  });
  // console.log(expanderTitle.innerHTML);

  expect(expanderTitle).toBeInTheDocument();
  expect(expanderTextContent).toBeInTheDocument();
  expect(expanderImage).toBeInTheDocument();
};
