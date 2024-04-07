'use client';

import portfolioActions, {
  type PortfolioItem,
} from '@/actions/portfolioActions';
import { AspectRatio } from '../ui/aspect-ratio';

import { useEffect, useState } from 'react';
import { useExpandingGallery } from './contexts/ExpandingGalleryContext';
import RenderedVideoPlayer from './RenderedVideoPlayer';

// interface RenderedGalleryExpanderProps {
//   expanderData: PortfolioItem;
// }

export default function RenderedGalleryExpander() {
  const [expanderData, setExpanderData] = useState<PortfolioItem | null>(null);
  const { currentUniqueSlug } = useExpandingGallery();

  useEffect(() => {
    async function getExpanderData() {
      if (currentUniqueSlug === null) return;
      const data =
        await portfolioActions.getPortfolioItemBySlug(currentUniqueSlug);
      if (data) {
        setExpanderData(data);
      }
    }
    getExpanderData();
  }, [currentUniqueSlug]);

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
    videoUrl,
  } = expanderData;

  return (
    <section
      key={`${id}-expanded`}
      className="col-span-full flex flex-auto flex-col gap-6  px-16 py-6 sm:flex-row sm:gap-16 sm:py-10"
      id={`${slug}-expanded`}
    >
      <div className="min-h-0 basis-6/12">
        <AspectRatio ratio={16 / 9} className="flex">
          <RenderedVideoPlayer imageUrl={imageUrl} videoUrl={videoUrl} />
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
