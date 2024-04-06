'use client';

import portfolioActions, {
  type PortfolioItem,
} from '@/actions/portfolioActions';
import { AspectRatio } from '../ui/aspect-ratio';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useExpandingGallery } from './contexts/ExpandingGalleryContext';

// interface RenderedGalleryExpanderProps {
//   expanderData: PortfolioItem;
// }

export default function RenderedGalleryExpander() {
  const [expanderData, setExpanderData] = useState<PortfolioItem | null>(null);
  const { currentExpandedSlug } = useExpandingGallery();

  console.log('currentExpandedSlug', currentExpandedSlug);

  useEffect(() => {
    console.log('running effect');

    async function getExpanderData() {
      if (currentExpandedSlug === null) return;
      const data =
        await portfolioActions.getPortfolioItemBySlug(currentExpandedSlug);
      if (data) {
        setExpanderData(data);
      }
      console.log('data', data);
    }
    getExpanderData();
  }, [currentExpandedSlug]);

  console.log('expanderData', expanderData);

  if (!expanderData) return null;

  const {
    id,
    title,
    projectType,
    role,
    description,
    director,
    producer,
    productionCompany,
    imageUrl,
    slug,
  } = expanderData;

  return (
    <section
      key={`${id}-expanded`}
      className="col-span-full flex flex-auto flex-col gap-6  px-16 py-6 sm:flex-row sm:gap-16 sm:py-10"
      id={`${slug}-expanded`}
    >
      <div className="min-h-0 basis-6/12">
        <AspectRatio ratio={16 / 9}>
          <div className="absolute top-0 bottom-0 left-0 right-0 z-10 flex justify-center items-center bg-neutral-950/50 transition-all duration-200">
            <p className="text-4xl font-extralight">{title}</p>
          </div>
          <Image src={imageUrl} alt={title} fill className="object-cover" />
        </AspectRatio>
      </div>
      <article className="flex w-auto flex-1 flex-col gap-6 font-light sm:gap-10 sm:text-xl">
        <div>
          <h1 className="font-raleway text-3xl sm:text-4xl">{title}</h1>
          <p className="italic text-neutral-300">
            <span aria-label="Project type">{projectType}</span>
            <span role="separator"> | </span>
            <span aria-label="Role on this project">{role}</span>
          </p>
        </div>

        <p aria-label="Video description" className="text-neutral-400">
          {description}
        </p>
        <dl>
          <div>
            <dt className="text-neutral-400 inline">Director: </dt>
            <dd className="font-semibold inline">{director}</dd>
          </div>
          <div>
            <dt className="text-neutral-400 inline">Producer: </dt>
            <dd className="font-semibold inline">{producer}</dd>
          </div>
          <div>
            <dt className="text-neutral-400 inline">Production Company: </dt>
            <dd className="font-semibold inline">{productionCompany}</dd>
          </div>
        </dl>
      </article>
    </section>
  );
}
