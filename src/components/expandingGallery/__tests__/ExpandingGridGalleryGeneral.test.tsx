/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  render,
  screen,
  waitFor,
  within,
} from '@/components/expandingGallery/__tests__/expandingGridGalleryTestUtils/customRenderGallery';
import TestGalleryTree from '@/components/expandingGallery/__tests__/expandingGridGalleryTestUtils/TestGalleryTree';
import { gridAriaLabel } from '../components/Grid';
import userEvent from '@testing-library/user-event';
import { navAriaLabel } from '../components/Nav';
import { expandingGalleryTestContent } from './expandingGridGalleryTestUtils/testData';
import { renderExpandingGalleryTest } from './expandingGridGalleryTestUtils/testFunctions';

export const testContent = expandingGalleryTestContent;
export const galleryGridItemRole = 'button';
export const navButtonNextAriaLabel = new RegExp(/go to next gallery item/i);
export const navButtonPrevAriaLabel = new RegExp(
  /go to previous gallery item/i,
);
export const navButtonCloseAriaLabel = new RegExp(/close gallery expander/i);

// Create a render function that will render the ExpandingGridGallery component with all of it's children

describe('Expanding Gallery General Content Test', () => {
  test.each(testContent)(
    'Click on thumbnail for test item #%# and check content',
    async content => {
      const { user, galleryList, galleryItems } =
        await renderExpandingGalleryTest();
      expect(galleryList).toBeInTheDocument();
      expect(galleryItems).toHaveLength(testContent.length);

      const currentContentIndex = testContent.indexOf(content);
      if (currentContentIndex === -1) throw new Error('Content not found');

      const itemToClick = within(galleryList).getByRole('button', {
        name: `Open ${content.slug}`,
      });

      await waitFor(async () => {
        await user.click(itemToClick);
      });

      const expanderTitle = await screen.findByRole('heading', {
        name: testContent[currentContentIndex].title,
      });

      const expanderTextContent = screen.getByText(
        testContent[currentContentIndex].content,
      );
      const expanderImage = screen.getByRole('img', {
        name: testContent[currentContentIndex].expandedAlt,
      });

      expect(expanderTitle).toBeInTheDocument();
      expect(expanderTextContent).toBeInTheDocument();
      expect(expanderImage).toBeInTheDocument();

      await waitFor(async () => {
        await user.click(itemToClick);
      });
      expect(expanderTitle).not.toBeInTheDocument();
      expect(expanderTextContent).not.toBeInTheDocument();
      expect(expanderImage).not.toBeInTheDocument();
      expect(galleryList).toBeInTheDocument();
      expect(galleryItems).toHaveLength(testContent.length);
    },
  );

  test.each(testContent)(
    'Click on thumbnail for test item #%# and check the nav element and its content',
    async content => {
      const { user, galleryList } = await renderExpandingGalleryTest();
      expect(galleryList).toBeInTheDocument();

      const currentContentIndex = testContent.indexOf(content);
      if (currentContentIndex === -1) throw new Error('Content not found');

      const itemToClick = within(galleryList).getByRole('button', {
        name: `Open ${content.slug}`,
      });

      await waitFor(async () => {
        await user.click(itemToClick);
      });

      const nav = await screen.findByRole('navigation', { name: navAriaLabel });
      expect(nav).toBeInTheDocument();
      const navButtons = within(nav).getAllByRole('button');
      expect(navButtons).toHaveLength(3);

      const navButtonPrev = within(nav).getByRole('button', {
        name: navButtonPrevAriaLabel,
      });
      expect(navButtonPrev).toBeInTheDocument();
      if (currentContentIndex === 0) expect(navButtonPrev).toBeDisabled();
      if (currentContentIndex > 0) expect(navButtonPrev).toBeEnabled();

      const navButtonNext = within(nav).getByRole('button', {
        name: navButtonNextAriaLabel,
      });
      expect(navButtonNext).toBeInTheDocument();
      if (
        currentContentIndex > 0 &&
        currentContentIndex < testContent.length - 1
      )
        expect(navButtonNext).toBeEnabled();
      if (currentContentIndex === testContent.length - 1)
        expect(navButtonNext).toBeDisabled();

      const navButtonClose = within(nav).getByRole('button', {
        name: navButtonCloseAriaLabel,
      });
      expect(navButtonClose).toBeInTheDocument();
      expect(navButtonClose).toBeEnabled();
    },
  );
});
