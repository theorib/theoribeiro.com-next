'use client';

import { useEffect } from 'react';
import { useExpandingGallery } from './contexts/ExpandingGalleryContext';
import useHash from './hooks/useHash';

// type ExpandingGalleryDeepLinkingProps = {
//   type: 'react--url-hash' | 'next-url-hash' | 'next-url';
// };

export default function ExpandingGalleryUseHash() {
  const { currentExpandedSlug, setCurrentExpandedSlug } = useExpandingGallery();
  const [hash, setHash] = useHash();

  useEffect(() => {
    // console.log('running ExpandingGalleryUseHash');

    // console.log('currentExpandedSlug', currentExpandedSlug);
    // console.log('hash', hash);

    // if (currentExpandedSlug === null && hash !== null) {
    //   console.log('exeption!');

    //   // setCurrentExpandedSlug(hash);
    // }

    // if (hash && !currentExpandedSlug) {
    //   console.log('exeption!');
    // }

    if (!hash && currentExpandedSlug) {
      setHash(currentExpandedSlug);
      return;
    } else if (hash && currentExpandedSlug && currentExpandedSlug !== hash) {
      setHash(currentExpandedSlug);
      return;
    } else if (!currentExpandedSlug && hash) {
      console.log('exeption!');
    }
  }, [currentExpandedSlug, setCurrentExpandedSlug, hash, setHash]);

  return null;
}

// export default function ExpandingGalleryUseHash() {
//   const { currentExpandedSlug, setCurrentExpandedSlug } = useExpandingGallery();
//   const [hash, setHash] = useHash();

//   useEffect(() => {
//     // console.log('running ExpandingGalleryUseHash');

//     // console.log('currentExpandedSlug', currentExpandedSlug);
//     // console.log('hash', hash);

//     if (currentExpandedSlug === null && hash !== null) {
//       console.log('exeption!');

//       // setCurrentExpandedSlug(hash);
//     }

//     if (currentExpandedSlug === null) {
//       setHash(null);
//       return;
//     }
//     if (currentExpandedSlug !== hash) {
//       setHash(currentExpandedSlug);
//       return;
//     }
//   }, [currentExpandedSlug, setCurrentExpandedSlug, hash, setHash]);

//   return null;
// }
