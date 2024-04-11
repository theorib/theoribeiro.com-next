/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  render,
  screen,
  testExpandingGridContent,
  waitFor,
  waitForElementToBeRemoved,
  within,
} from '@/testUtils/expandingGridGalleryUtils/customRenderExpandingGridGallery';
import ExpandingGridGalleryTestTree from '@/testUtils/expandingGridGalleryUtils/components/ExpandingGridGalleryTestTree';
import { gridAriaLabel } from '../components/Grid';
import userEvent from '@testing-library/user-event';
import { navAriaLabel } from '../components/Nav';

const testContent = testExpandingGridContent;

const getGalleryParts = async function () {
  const galleryList = await screen.findByRole('list', {
    name: gridAriaLabel,
  });
  const galleryItems = within(galleryList).getAllByRole('button');
  return {
    galleryList,
    galleryItems,
  };
};

describe.only('ExpandingGridGallery Basic Tests', () => {
  test('Check That all thumbnails loaded', async () => {
    render(<ExpandingGridGalleryTestTree />);

    const { galleryList, galleryItems } = await getGalleryParts();

    expect(galleryList).toBeInTheDocument();
    expect(galleryItems).toHaveLength(testContent.length);

    testContent.forEach(item => {
      const galleryItem = within(galleryList).getByRole('img', {
        name: `${item.thumbAlt}`,
      });
      expect(galleryItem).toBeInTheDocument();

      const galleryParagraph = within(galleryList).getByText(`${item.title}`);
      expect(galleryParagraph).toBeInTheDocument();
    });
  });

  test.only('Click on gallery item', async () => {
    const user = userEvent.setup();

    render(<ExpandingGridGalleryTestTree />);

    const { galleryList, galleryItems } = await getGalleryParts();

    expect(galleryList).toBeInTheDocument();
    expect(galleryItems).toHaveLength(testContent.length);

    await user.click(galleryItems[0]);

    // const expanderTitle = await screen.findByRole('heading', {
    //   name: testContent[0].title,
    // });
    // expect(expanderTitle).toBeInTheDocument();

    // const expanderTextContent = screen.getByText(testContent[0].content);
    // expect(expanderTextContent).toBeInTheDocument();

    // const expanderImage = screen.getByRole('img', {
    //   name: testContent[0].expandedAlt,
    // });
    // expect(expanderImage).toBeInTheDocument();

    // const nav = screen.getByRole('navigation', { name: navAriaLabel });
    // expect(nav).toBeInTheDocument();

    // const navButtons = within(nav).getAllByRole('button');
    // expect(navButtons).toHaveLength(3);

    // const navButtonPrev = within(nav).getByRole('button', {
    //   name: /go to previous gallery item/i,
    // });
    // expect(navButtonPrev).toBeInTheDocument();
    // expect(navButtonPrev).toBeDisabled();

    // const navButtonNext = within(nav).getByRole('button', {
    //   name: /go to next gallery item/i,
    // });
    // expect(navButtonNext).toBeInTheDocument();
    // expect(navButtonNext).toBeEnabled();

    // const navButtonClose = within(nav).getByRole('button', {
    //   name: /close gallery expander/i,
    // });
    // expect(navButtonClose).toBeInTheDocument();
    // expect(navButtonClose).toBeEnabled();

    // screen.logTestingPlaygroundURL();
  });
});

describe('ExpandingGridGallery Nav Button Interactions', () => {
  test('Expanded Gallery Close Button', async () => {
    const user = userEvent.setup();
    render(<ExpandingGridGalleryTestTree />);

    const { galleryList, galleryItems } = await getGalleryParts();

    expect(galleryList).toBeInTheDocument();
    expect(galleryItems).toHaveLength(testContent.length);

    await user.click(galleryItems[0]);

    const { galleryItems: galleryItemsAfterFirstClick } =
      await getGalleryParts();

    expect(galleryItemsAfterFirstClick).toHaveLength(testContent.length + 3);

    const expanderTitle = screen.getByRole('heading', {
      name: testContent[0].title,
    });
    expect(expanderTitle).toBeInTheDocument();

    const nav = screen.getByRole('navigation', { name: navAriaLabel });
    expect(nav).toBeInTheDocument();

    const navButtonClose = within(nav).getByRole('button', {
      name: /close gallery expander/i,
    });
    expect(navButtonClose).toBeInTheDocument();
    expect(navButtonClose).toBeEnabled();

    await user.click(navButtonClose);

    expect(nav).not.toBeInTheDocument();
    expect(expanderTitle).not.toBeInTheDocument();

    const { galleryItems: galleryItemsAfterSecondClick } =
      await getGalleryParts();

    expect(galleryItemsAfterSecondClick).toHaveLength(testContent.length);
  });

  test('Test Next Button', async () => {
    const user = userEvent.setup();
    render(<ExpandingGridGalleryTestTree />);

    const { galleryList, galleryItems } = await getGalleryParts();

    expect(galleryList).toBeInTheDocument();
    expect(galleryItems).toHaveLength(testContent.length);

    await user.click(galleryItems[0]);

    const nav = screen.getByRole('navigation', { name: navAriaLabel });
    expect(nav).toBeInTheDocument();

    const navButtonNext = within(nav).getByRole('button', {
      name: /go to next gallery item/i,
    });
    expect(navButtonNext).toBeInTheDocument();
    expect(navButtonNext).toBeEnabled();

    await user.click(navButtonNext);

    const expanderTitle2 = screen.getByRole('heading', {
      name: testContent[1].title,
    });
    expect(expanderTitle2).toBeInTheDocument();

    await user.click(navButtonNext);

    const expanderTitle3 = screen.getByRole('heading', {
      name: testContent[2].title,
    });
    expect(expanderTitle3).toBeInTheDocument();

    await user.click(galleryItems[galleryItems.length - 1]);
    expect(navButtonNext).toBeDisabled();

    const expanderTitle4 = screen.getByRole('heading', {
      name: testContent[galleryItems.length - 1].title,
    });
    expect(expanderTitle4).toBeInTheDocument();
  });

  test('Test Back Button', async () => {
    const user = userEvent.setup();
    render(<ExpandingGridGalleryTestTree />);

    const { galleryList, galleryItems } = await getGalleryParts();

    expect(galleryList).toBeInTheDocument();
    expect(galleryItems).toHaveLength(testContent.length);

    await user.click(galleryItems[0]);

    const nav = screen.getByRole('navigation', { name: navAriaLabel });
    expect(nav).toBeInTheDocument();

    const navButtonPrev = within(nav).getByRole('button', {
      name: /go to previous gallery item/i,
    });
    expect(navButtonPrev).toBeInTheDocument();
    expect(navButtonPrev).toBeDisabled();

    const expanderTitle1 = screen.getByRole('heading', {
      name: testContent[0].title,
    });
    expect(expanderTitle1).toBeInTheDocument();

    await user.click(galleryItems[galleryItems.length - 1]);
    expect(navButtonPrev).toBeEnabled();
    // expect(expanderTitle1).not.toBeInTheDocument();

    const expanderTitle2 = screen.getByRole('heading', {
      name: testContent[galleryItems.length - 1].title,
    });
    expect(expanderTitle2).toBeInTheDocument();

    await user.click(navButtonPrev);

    // expect(expanderTitle2).not.toBeInTheDocument();

    const expanderTitle3 = screen.getByRole('heading', {
      name: testContent[galleryItems.length - 2].title,
    });
    expect(expanderTitle3).toBeInTheDocument();

    // screen.logTestingPlaygroundURL();
  });
});
