import { useRef } from 'react';
import { useParams } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import {
  getCurrentGalleryItemBySlug,
  isGalleryItemSlugValid,
} from './expandingGalleryHelpers';
import ExpandingGalleryExpanderContent from './ExpandingGalleryExpanderContent';
import { portfolio } from '../../data/portfolio';

function ExpandingGalleryExpander() {
  const { expandingGalleryUrlParam } = useParams();

  const isExpanded = isGalleryItemSlugValid(
    portfolio,
    expandingGalleryUrlParam,
  );

  const currentPortfolioItem = getCurrentGalleryItemBySlug(
    portfolio,
    expandingGalleryUrlParam,
  );

  const portfolioItemsCount = portfolio.length;

  const nodeRef = useRef(null);

  return (
    <CSSTransition
      nodeRef={nodeRef}
      in={isExpanded}
      timeout={1000}
      classNames={'expander'}
      // appear={true}
      unmountOnExit={true}
    >
      <ExpandingGalleryExpanderContent
        nodeRef={nodeRef}
        currentPortfolioItem={currentPortfolioItem}
        portfolioItemsCount={portfolioItemsCount}
      />
    </CSSTransition>
  );
}

export default ExpandingGalleryExpander;
