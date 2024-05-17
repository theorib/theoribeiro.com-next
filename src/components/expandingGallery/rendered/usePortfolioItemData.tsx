import portfolioActions from '@/actions/portfolioActions';
import { useExpandingGridGallery } from '@/components/expandingGallery/contexts/ExpandingGridGalleryContext';
import { PortfolioItem } from '@/data/portfolio';
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
