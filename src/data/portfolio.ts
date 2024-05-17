export type PortfolioSlug = string;

export type PortfolioProjectType =
  | 'Drama Short'
  | 'Promo'
  | 'Documentary Short'
  | 'Music Video'
  | 'Mini Doc';

export type PortfolioItem = {
  id: number;
  uniqueId: string;
  slug: PortfolioSlug;
  title: string;
  videoSource: string;
  videoUrl: string;
  projectType: PortfolioProjectType;
  role: string;
  description: string;
  director: string;
  producer: string;
  productionCompany: string;
  imageUrl: string;
  originalImageUrl: string;
  thumbAlt: string;
  thumbTitle: string;
};
export type PortfolioThumbnail = Pick<
  PortfolioItem,
  | 'id'
  | 'slug'
  | 'title'
  | 'projectType'
  | 'imageUrl'
  | 'thumbAlt'
  | 'thumbTitle'
>;

// export type PortfolioItemSchema = {
//   sameAs?: string[];
//   actor?: string[];
//   author?: string[];
//   countryOfOrigin?: string[];
//   subtitleLanguage?: string[];
//   musicBy?: string[];
//   dateCreated?: string;
//   duration?: string;
// };

export const portfolio: PortfolioItem[] = [
  {
    id: 0,
    uniqueId: 'a8e61a0a-f268-4b30-9ebc-640c614ad074',
    slug: 'talk-radio',
    title: 'Talk Radio',
    videoSource: 'vimeo',
    videoUrl: 'https://vimeo.com/418058845',
    projectType: 'Drama Short',
    role: 'Cinematographer',
    description: `Pauline and Barry are a seemingly happily married middled aged couple. That is until Pauline tunes into relationship hour on Talk Radio. She thinks she recognises the nameless voice that's relaying a lifetime of regrets one live radio.`,
    director: 'Ben S. Hyland',
    producer: 'Adam Smith',
    productionCompany: 'Hidden Art Films',
    imageUrl: 'img/showreel/talk-radio.jpg',
    originalImageUrl:
      'https://theoribeiro.com/wp-content/uploads/2021/06/Screenshot-2021-06-18-at-10.53.17.jpg',
    thumbAlt:
      'Talk Radio Drama Short Cinematography: Pauline, a seemingly happily married middle-aged woman is cooking in her kitchen.',
    thumbTitle: `Watch 'Talk Radio': A Drama Short | Cinematography by Theo Ribeiro`,
  },
  {
    id: 1,
    uniqueId: '718815ce-5b41-4d17-963c-bd598b503bf9',
    slug: 'land-of-the-wind',
    title: 'Land of The Wind',
    videoSource: 'vimeo',
    videoUrl: 'https://vimeo.com/190578468',
    projectType: 'Documentary Short',
    role: 'Cinematographer',
    description:
      "Patagonia; further South than most people ever dare to venture there's a land of endless distance and beauty. Fine-art photographer Eliseo Miciu explores this mythical place whilst he learns more about himself.",
    director: 'Laura Belinky',
    producer: 'Theo Ribeiro and Laura Belinky',
    productionCompany: 'Wild River Films',
    imageUrl: 'img/showreel/land-of-the-wind.jpg',
    originalImageUrl:
      'https://theoribeiro.com/wp-content/uploads/2021/05/tdv-stills-16x9_1.7.1-edit-1-scaled.jpg',
    thumbAlt:
      'Land of The Wind Documentary Short Cinematography: Vast Patagonian landscape with a distant road and a vehicle driving in the distance.',
    thumbTitle: `Watch 'Land of The Wind': A Documentary Short | Cinematography by Theo Ribeiro`,
  },
  {
    id: 2,
    uniqueId: 'e6da8ddb-1eca-4b23-974e-44f8e2dca3a4',
    slug: 'i-am',
    title: 'I Am',
    videoSource: 'vimeo',
    videoUrl: 'https://vimeo.com/81389004',
    projectType: 'Music Video',
    role: 'Cinematographer',
    description:
      "Following the release of Sick Individuals & Axwell's collaborative smash 'I Am', Dimitri Vegas and Like Mike joined forces to provide a special 'versus' remix alongside fellow stellar talents Wolfpack and Boostedkids.",
    director: 'Charles Joslain',
    producer: 'Rubin Moyo',
    productionCompany: 'Groundwork Pictures',
    imageUrl: 'img/showreel/i-am.jpg',
    originalImageUrl:
      'https://theoribeiro.com/wp-content/uploads/2021/06/Screenshot-2021-06-20-at-20.33.13.jpg',
    thumbAlt:
      'I Am Music Video Cinematography: Dynamic collaboration between Sick Individuals, Axwell, Dimitri Vegas, Like Mike, Wolfpack, and Boostedkids.',
    thumbTitle: `Watch 'I Am': A Music Video | Cinematography by Theo Ribeiro`,
  },
  {
    id: 3,
    uniqueId: '621a6449-0990-462e-a350-ebcaf978a0be',
    slug: 'safe-space',
    title: 'Safe Space',
    videoSource: 'vimeo',
    videoUrl: 'https://vimeo.com/569886583',
    projectType: 'Drama Short',
    role: 'Cinematographer',
    description:
      "Safe Space chronicles the relationship between Sarah and Amne. Sarah is a key workers in a women's safe house. Amne is a new resident and Sarah's new client. The story begins when the two first meet and ends when they say goodbye. ",
    director: 'Ben S. Hyland',
    producer: 'Adam Gregory Smith and Rebecca Grant',
    productionCompany: 'Hidden Art Films',
    imageUrl: 'img/showreel/safe-space.jpg',
    originalImageUrl:
      'https://theoribeiro.com/wp-content/uploads/2021/06/Screenshot-2021-06-20-at-20.40.42.jpg',
    thumbAlt:
      'Safe Space Drama Short Cinematography: Sarah, a social worker in an intimate indoor setting during the christmas season.',
    thumbTitle: `Watch 'Safe Space': A Drama Short | Cinematography by Theo Ribeiro`,
  },
  {
    id: 4,
    uniqueId: '1105a3d0-f188-4a39-a6ca-43787e780ee0',
    slug: 'kto',
    title: 'KTO',
    videoSource: 'vimeo',
    videoUrl: 'https://vimeo.com/569886372',
    projectType: 'Mini Doc',
    role: 'Cinematographer',
    description:
      'Know The Origin is a style-led ethical store that reconnects people with the hands that have made their clothing. They partner with producers who are passionate about the environment and about eradicating poverty through their businesses.\n\n    Filming with farmers and factories across India, we shot the whole production process from seed, ginning, spinning, and weaving the where they sew and stitch the garments together.',
    director: 'Andrew Carver',
    producer: 'Andrew Carver',
    productionCompany: 'Raindown',
    imageUrl: 'img/showreel/kto.jpg',
    originalImageUrl:
      'https://theoribeiro.com/wp-content/uploads/2021/06/Screenshot-2021-06-20-at-20.45.04.jpg',
    thumbAlt:
      'KTO Mini Doc Cinematography: Filming the entire production process from seed to garment creation in India.',
    thumbTitle: `Watch 'KTO': A Mini Doc | Cinematography by Theo Ribeiro`,
  },
  {
    id: 5,
    uniqueId: 'c48a3f27-270e-47f3-a8a3-0269723fe5a7',
    slug: 'the-package',
    title: 'The Package',
    videoSource: 'vimeo',
    videoUrl: 'https://vimeo.com/471745051',
    projectType: 'Promo',
    role: 'Cinematographer',
    description:
      'Official trailer for the heart-stopping new book thriller from bestselling author Sebastian Fitzek. ',
    director: 'Simon Harris',
    producer: 'Simon Harris',
    productionCompany: 'On Tour Films',
    imageUrl: 'img/showreel/the-package.jpg',
    originalImageUrl:
      'https://theoribeiro.com/wp-content/uploads/2021/06/Screenshot-2021-06-20-at-20.57.17.jpg',
    thumbAlt: `The Package Book Promo Cinematography: Tense and mysterious scene of a girl opening a misterious package from the official trailer of Sebastian Fitzek's heart-stopping new book thriller.`,
    thumbTitle: `Watch 'The Package': A Promo | Cinematography by Theo Ribeiro`,
  },
  {
    id: 6,
    uniqueId: '33d98625-87fd-4ad4-bc08-d2a9c15e6bf6',
    slug: 'we-play-war',
    title: 'We Play War',
    videoSource: 'vimeo',
    videoUrl: 'https://vimeo.com/77927570',
    projectType: 'Drama Short',
    role: 'Cinematographer',
    description:
      "1945 Germany. Following a mischievous prank, young Peter recovers a dangerous item from the cemetery caretaker's workshop. Neither Peter nor his friends are aware of the grave repercussions that follow.",
    director: 'George Murphy',
    producer: 'Joshua Poulsen',
    productionCompany: '',
    imageUrl: 'img/showreel/we-play-war.jpg',
    originalImageUrl:
      'https://theoribeiro.com/wp-content/uploads/2021/05/551607826_1280-e1543862703589.jpg',
    thumbAlt: `We Play War Drama Short Cinematography: A boy sits dejected in a field. Scene from the official trailer of 'We Play War'.`,
    thumbTitle: `Watch 'We Play War': A Drama Short | Cinematography by Theo Ribeiro`,
  },
  {
    id: 7,
    uniqueId: '82f8314c-8d7e-41f9-b1f7-06d119e5b003',
    slug: 'el-tiempo',
    title: 'El Tiempo',
    videoSource: 'vimeo',
    videoUrl: 'https://vimeo.com/414486325',
    projectType: 'Documentary Short',
    role: 'Cinematographer',
    description:
      'A short documentary about remote life in the Patagonian sheep outposts of Southern Argentina.',
    director: 'Laura Belinky',
    producer: 'Laura Belinky and Theo Ribeiro',
    productionCompany: 'Wild River Films',
    imageUrl: 'img/showreel/el-tiempo.jpg',
    originalImageUrl:
      'https://theoribeiro.com/wp-content/uploads/2021/06/Screenshot-2021-06-20-at-20.50.36.jpg',
    thumbAlt:
      'El Tiempo Documentary Short Cinematography: Remote life in the Patagonian sheep outposts of Southern Argentina.',
    thumbTitle: `Watch 'El Tiempo': A Documentary Short | Cinematography by Theo Ribeiro`,
  },
];
