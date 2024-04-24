'use client';

import portfolioActions, {
  type PortfolioItem,
} from '@/actions/portfolioActions';
import { AspectRatio } from '../../ui/aspect-ratio';
import { cn } from '../utils/utils';
import { useEffect, useState } from 'react';
import { useExpandingGridGallery } from '../contexts/ExpandingGridGalleryContext';
import RenderedVideoPlayer from './RenderedVideoPlayer';
import { Separator } from '@radix-ui/react-separator';
import ExpandingGridGallery from '../ExpandingGridGallery';
import { PiCaretLeftThin, PiCaretRightThin, PiXThin } from 'react-icons/pi';
import Nav from '../components/Nav';

// interface RenderedGalleryExpanderProps {
//   expanderData: PortfolioItem;
// }

export default function RenderedGalleryExpander() {
  const [expanderData, setExpanderData] = useState<PortfolioItem | null>(null);
  const { currentUniqueSlug } = useExpandingGridGallery();

  useEffect(() => {
    async function getExpanderData() {
      if (currentUniqueSlug === null) return;
      const data =
        await portfolioActions.getPortfolioItemBySlug(currentUniqueSlug);
      if (data) {
        setExpanderData(data);
      }
    }
    getExpanderData().catch(err => {
      console.error(err);
      throw new Error(err);
    });
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

  const iconClassName = 'w-14 h-14 sm:h-20 sm:w-20 p-1 sm:p-2 sm:-mx-5';

  return (
    <div
      key={`${id}-expanded`}
      id={`${slug}-expanded`}
      className="flex flex-col relative transition-all"
    >
      <Nav className="sm:absolute top-0 left-0 right-0 bottom-0 flex justify-between items-center p-4 pb-10 sm:p-3  md:py-2 sm:px-0 order-last ">
        <ExpandingGridGallery.NavButtonPrev className="overflow-clip sm:rounded-s-none">
          <PiCaretLeftThin className={iconClassName} />
        </ExpandingGridGallery.NavButtonPrev>
        <ExpandingGridGallery.NavButtonNext className="overflow-clip order-last sm:rounded-e-none">
          <PiCaretRightThin className={iconClassName} />
        </ExpandingGridGallery.NavButtonNext>
        <ExpandingGridGallery.NavButtonClose className="sm:absolute sm:right-3 md:right-2 sm:top-6 sm:w-12 sm:h-12 sm:mx-0">
          <PiXThin
            className={cn([iconClassName, 'sm:w-18 sm:h-18 sm:mx-0 sm:p-0'])}
          />
        </ExpandingGridGallery.NavButtonClose>
      </Nav>
      <article className="col-span-full flex flex-auto flex-col sm:px-[4.5rem] md:px-16 sm:py-6 md:flex-row md:gap-6 lg:gap-16 md:py-10 items-center transition-all">
        <div className="basis-7/12 lg:basis-6/12 w-full transition-all">
          <AspectRatio ratio={16 / 9} className="flex">
            <RenderedVideoPlayer imageUrl={imageUrl} videoUrl={videoUrl} />
          </AspectRatio>
        </div>
        <section className="flex w-auto flex-1 flex-col gap-6 font-light sm:gap-10 sm:text-xl md:p-0 px-4 sm:px-0 pt-8 pb-6">
          <div>
            <h1 className="font-raleway text-3xl sm:text-4xl">{title}</h1>
            <div className="italic text-neutral-300 flex items-center gap-2">
              <p aria-label="Project type">{projectType}</p>
              <Separator
                orientation="vertical"
                className="h-5 w-[1px] bg-white inline-block ml-1"
              />
              <p aria-label="Role on this project">{role}</p>
            </div>
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
        </section>
      </article>
    </div>
  );
}
