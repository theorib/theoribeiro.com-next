import portfolioActions from '@/services/portfolio/actions';
import { useExpandingGridGallery } from '@/shared/components/expandingGallery/contexts/ExpandingGridGalleryContext';
import { PortfolioItem } from '@/services/portfolio/data/portfolio';
import { useEffect, useState } from 'react';

function usePortfolioItemData() {
  const { currentUniqueSlug } = useExpandingGridGallery();
  const [portfolioData, setPortfolioData] = useState<PortfolioItem | null>(
    null,
  );

  useEffect(() => {
    void (async function () {
      if (currentUniqueSlug === null) return;
      try {
        const data = portfolioActions.getPortfolioItemBySlug(currentUniqueSlug);
        if (data) {
          setPortfolioData(data);
        }
      } catch (err) {
        console.error(err);
        throw err;
      }
    })();
  });

  return portfolioData;
}
export default usePortfolioItemData;
