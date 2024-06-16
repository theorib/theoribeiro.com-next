const aboutPage = `/about-theo-ribeiro`;
const homePage = `/`;
const stillsPhotographyPage = `/still-photography`;

const redirects = [
  {
    source: '/about-theo-ribeiro-cinematographer',
    destination: aboutPage,
    permanent: true,
  },
  {
    source: '/about',
    destination: aboutPage,
    permanent: true,
  },
  {
    source: '/cinematography-demo-reel',
    destination: homePage,
    permanent: false,
  },
  {
    source: '/portfolio/aerial-photography',
    destination: stillsPhotographyPage,
    permanent: true,
  },
  {
    source: '/portfolio/landscapes-and-places-photography',
    destination: stillsPhotographyPage,
    permanent: true,
  },
  {
    source: '/portfolio/natural-light-photography',
    destination: stillsPhotographyPage,
    permanent: true,
  },
  {
    source: '/portfolio/lifestyle-photography',
    destination: stillsPhotographyPage,
    permanent: true,
  },
  {
    source: '/portfolio/landscapes-and-places-photography',
    destination: stillsPhotographyPage,
    permanent: true,
  },
  {
    source: '/portfolio/black-and-white-photography',
    destination: stillsPhotographyPage,
    permanent: true,
  },
  {
    source: '/red-bull-bc-one-all-stars-2012',
    destination: stillsPhotographyPage,
    permanent: true,
  },
  {
    source: '/photography',
    destination: stillsPhotographyPage,
    permanent: true,
  },
  {
    source: '/privacy-tools',
    destination: homePage,
    permanent: true,
  },
  {
    source: '/privacy-policy',
    destination: homePage,
    permanent: true,
  },
];

export default redirects;
