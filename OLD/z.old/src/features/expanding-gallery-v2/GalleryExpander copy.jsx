// import { useSelector } from 'react-redux';
// import { isPortfolioSlugValid } from './portfolioSlice';

import { useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import PorfolioExpandedContent from '../expanging-gallery/GalleryExpanderContent';
import { useParams } from 'react-router-dom';
import { portfolio } from '../../data/portfolio';
import {
  getCurrentPortfolioItem,
  isPortfolioSlugValid,
} from '../expanging-gallery/portfolioHelpers';

function GalleryExpander() {
  const { expandingGalleryUrlParam } = useParams();

  const isExpanded = isPortfolioSlugValid(portfolio, expandingGalleryUrlParam);

  const currentPortfolioItem = getCurrentPortfolioItem(
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
      <PorfolioExpandedContent
        nodeRef={nodeRef}
        currentPortfolioItem={currentPortfolioItem}
        portfolioItemsCount={portfolioItemsCount}
      />
    </CSSTransition>
  );
}

export default GalleryExpander;
