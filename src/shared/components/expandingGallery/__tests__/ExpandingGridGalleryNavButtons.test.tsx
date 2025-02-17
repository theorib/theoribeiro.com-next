import {
  screen,
  waitFor,
  within,
} from '@/shared/components/expandingGallery/__tests__/expandingGridGalleryTestUtils/customRenderGallery';

import { navAriaLabel } from '@/shared/components/expandingGallery/components/Nav';
import {
  checkContentOfGalleryExpanderElement,
  renderExpandingGalleryTest,
} from '@/shared/components/expandingGallery/__tests__/expandingGridGalleryTestUtils/testFunctions';
import {
  navButtonCloseAriaLabel,
  navButtonNextAriaLabel,
  navButtonPrevAriaLabel,
  testContent,
} from '@/shared/components/expandingGallery/__tests__/ExpandingGridGalleryGeneral.test';

describe('ExpandingGridGallery Nav Button Interactions', () => {
  test.each(testContent)(
    'Test Next Button for test item #%#',
    async content => {
      const { user, galleryList, galleryItems } =
        await renderExpandingGalleryTest();
      expect(galleryList).toBeInTheDocument();
      expect(galleryItems).toHaveLength(testContent.length);

      const indexOfCurrentTest = testContent.indexOf(content);

      // Click on every gallery item
      await waitFor(async () => {
        await user.click(galleryItems[indexOfCurrentTest]);
      });

      // Check that the nav element is present
      const nav = await screen.findByRole('navigation', { name: navAriaLabel });
      expect(nav).toBeInTheDocument();

      // Check that the next button is present and enabled when it should be
      const navButtonNext = within(nav).getByRole('button', {
        name: navButtonNextAriaLabel,
      });
      expect(navButtonNext).toBeInTheDocument();
      if (indexOfCurrentTest > 0 && indexOfCurrentTest < testContent.length - 1)
        expect(navButtonNext).toBeEnabled();
      if (indexOfCurrentTest === testContent.length - 1)
        expect(navButtonNext).toBeDisabled();

      await checkContentOfGalleryExpanderElement(
        indexOfCurrentTest,
        testContent,
      );

      // How many items are there left to click until the last gallery item?
      const numberOfItemsLeftToClick =
        testContent.length - (indexOfCurrentTest + 1);

      // Click on the next button until the last gallery item
      for (let j = 0; j < numberOfItemsLeftToClick; j++) {
        const nextExpanderIndex = indexOfCurrentTest + j + 1;

        await waitFor(async () => {
          await user.click(navButtonNext);
        });

        await checkContentOfGalleryExpanderElement(
          nextExpanderIndex,
          testContent,
        );

        if (j + 1 === numberOfItemsLeftToClick)
          expect(navButtonNext).toBeDisabled();
        if (j + 1 < numberOfItemsLeftToClick)
          expect(navButtonNext).toBeEnabled();
        // Check the content of the next gallery item
        await checkContentOfGalleryExpanderElement(
          nextExpanderIndex,
          testContent,
        );
      }
    },
  );

  test.each(testContent)(
    'Test Prev Button for test item #%#',
    async content => {
      const { user, galleryList, galleryItems } =
        await renderExpandingGalleryTest();
      expect(galleryList).toBeInTheDocument();
      expect(galleryItems).toHaveLength(testContent.length);

      const indexOfCurrentTest = testContent.indexOf(content);

      // Click on every gallery item
      await waitFor(async () => {
        await user.click(galleryItems[indexOfCurrentTest]);
      });

      // Check that the nav element is present
      const nav = await screen.findByRole('navigation', { name: navAriaLabel });
      expect(nav).toBeInTheDocument();

      // Check that the prev button is present and enabled when it should be
      const navButtonPrev = within(nav).getByRole('button', {
        name: navButtonPrevAriaLabel,
      });
      expect(navButtonPrev).toBeInTheDocument();
      if (indexOfCurrentTest === 0) expect(navButtonPrev).toBeDisabled();
      if (indexOfCurrentTest > 0 && indexOfCurrentTest < testContent.length)
        expect(navButtonPrev).toBeEnabled();

      await checkContentOfGalleryExpanderElement(
        indexOfCurrentTest,
        testContent,
      );

      // How many items are there left to click until the last gallery item?
      const numberOfItemsLeftToClick = indexOfCurrentTest;

      // Click on the next button until the first gallery item
      for (let j = 0; j < numberOfItemsLeftToClick; j++) {
        // const nextExpanderIndex = indexOfCurrentTest + j + 1;
        const prevExpanderIndex = indexOfCurrentTest - j - 1;
        console.log(
          'j:',
          j,
          'i',
          indexOfCurrentTest,
          'numberOfItemsLeftToClick',
          numberOfItemsLeftToClick,
          'prevExpanderIndex',
          prevExpanderIndex,
        );

        await waitFor(async () => {
          await user.click(navButtonPrev);
        });

        await checkContentOfGalleryExpanderElement(
          prevExpanderIndex,
          testContent,
        );
        console.log(testContent[prevExpanderIndex].title);

        if (prevExpanderIndex < 1) expect(navButtonPrev).toBeDisabled();
        if (prevExpanderIndex > 0) expect(navButtonPrev).toBeEnabled();
      }
    },
  );

  test.each(testContent)(
    'Test Close Button for test item #%# ',
    async content => {
      const { user, galleryList, galleryItems } =
        await renderExpandingGalleryTest();
      expect(galleryList).toBeInTheDocument();
      expect(galleryItems).toHaveLength(testContent.length);

      const indexOfCurrentTest = testContent.indexOf(content);

      await waitFor(async () => {
        await user.click(galleryItems[indexOfCurrentTest]);
      });

      const expanderTitle = await screen.findByRole('heading', {
        name: testContent[indexOfCurrentTest].title,
      });
      const expanderTextContent = screen.getByText(
        testContent[indexOfCurrentTest].content,
      );
      const expanderImage = screen.getByRole('img', {
        name: testContent[indexOfCurrentTest].expandedAlt,
      });

      expect(expanderTitle).toBeInTheDocument();
      expect(expanderTextContent).toBeInTheDocument();
      expect(expanderImage).toBeInTheDocument();

      const nav = await within(galleryList).findByRole('navigation', {
        name: navAriaLabel,
      });
      expect(nav).toBeInTheDocument();

      const navButtonClose = within(nav).getByRole('button', {
        name: navButtonCloseAriaLabel,
      });
      expect(navButtonClose).toBeInTheDocument();
      expect(navButtonClose).toBeEnabled();

      await waitFor(async () => {
        await user.click(navButtonClose);
      });
      expect(nav).not.toBeInTheDocument();
      expect(navButtonClose).not.toBeInTheDocument();
      expect(expanderTitle).not.toBeInTheDocument();
      expect(expanderTextContent).not.toBeInTheDocument();
      expect(expanderImage).not.toBeInTheDocument();
    },
  );
});
