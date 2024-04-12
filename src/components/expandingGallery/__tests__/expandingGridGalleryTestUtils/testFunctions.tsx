import userEvent from '@testing-library/user-event';
import TestGalleryTree from './TestGalleryTree';
import { galleryGridItemRole } from '../ExpandingGridGalleryGeneral.test';
import { render, screen, within } from './customRenderGallery';
import { gridAriaLabel } from '../../components/Grid';
import { expandingGalleryTestContent } from './testData';

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
