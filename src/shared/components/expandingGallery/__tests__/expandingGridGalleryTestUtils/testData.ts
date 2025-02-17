export type ExpandingGalleryTestContentItem = {
  title: string;
  slug: string;
  content: string;
  expandedAlt: string;
  thumbAlt: string;
  image: string;
};

export const expandingGalleryTestContent: ExpandingGalleryTestContentItem[] = [
  {
    title: 'Land of the Wind',
    slug: 'land-of-the-wind',
    content: 'Land of the Wind Content',
    expandedAlt: 'Land of the Wind Expanded Alt',
    thumbAlt: 'Land of the Wind Thumb Alt',
    image: 'https://placehold.co/720x405?text=Land+of+the+Wind+Image',
  },
  {
    title: 'Land of the Water',
    slug: 'land-of-the-water',
    content: 'Land of the Water Content',
    expandedAlt: 'Land of the Water Expanded Alt',
    thumbAlt: 'Land of the Water Thumb Alt',
    image: 'https://placehold.co/720x405?text=Land+of+the+Water+Image',
  },
  {
    title: 'Land of the Fire',
    slug: 'land-of-the-fire',
    content: 'Land of the Fire Content',
    expandedAlt: 'Land of the Fire Expanded Alt',
    thumbAlt: 'Land of the Fire Thumb Alt',
    image: 'https://placehold.co/720x405?text=Land+of+the+Fire+Image',
  },
  {
    title: 'Land of the Earth',
    slug: 'land-of-the-earth',
    content: 'Land of the Earth Content',
    expandedAlt: 'Land of the Earth Expanded Alt',
    thumbAlt: 'Land of the Earth Thumb Alt',
    image: 'https://placehold.co/720x405?text=Land+of+the+Earth+Image',
  },
  {
    title: 'Land of the Void',
    slug: 'land-of-the-void',
    content: 'Land of the Void Content',
    expandedAlt: 'Land of the Void Expanded Alt',
    thumbAlt: 'Land of the Void Thumb Alt',
    image: 'https://placehold.co/720x405?text=Land+of+the+Void+Image',
  },
  {
    title: 'Land of the Sun',
    slug: 'land-of-the-sun',
    content: 'Land of the Sun Content',
    expandedAlt: 'Land of the Sun Expanded Alt',
    thumbAlt: 'Land of the Sun Thumb Alt',
    image: 'https://placehold.co/720x405?text=Land+of+the+Sun+Image',
  },
  {
    title: 'Land of the Stars',
    slug: 'land-of-the-stars',
    content: 'Land of the Stars Content',
    expandedAlt: 'Land of the Stars Expanded Alt',
    thumbAlt: 'Land of the Stars Thumb Alt',
    image: 'https://placehold.co/720x405?text=Land+of+the+Stars+Image',
  },
  {
    title: 'Land of the Moon',
    slug: 'land-of-the-moon',
    content: 'Land of the Moon Content',
    expandedAlt: 'Land of the Moon Expanded Alt',
    thumbAlt: 'Land of the Moon Thumb Alt',
    image: 'https://placehold.co/720x405?text=Land+of+the+Moon+Image',
  },
];

export const getExpandingGalleryTestContentFromSlug = (slug: string) => {
  return expandingGalleryTestContent.find(item => item.slug === slug);
};
