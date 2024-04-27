'use client';

import portfolioActions, {
  type PortfolioItem,
} from '@/actions/portfolioActions';
import { AspectRatio } from '../../ui/aspect-ratio';
import { cn } from '../utils/utils';
import { useEffect, useState } from 'react';
import { useExpandingGridGallery } from '../contexts/ExpandingGridGalleryContext';

import { Separator } from '@radix-ui/react-separator';
import ExpandingGridGallery from '../ExpandingGridGallery';
import { PiCaretLeftThin, PiCaretRightThin, PiXThin } from 'react-icons/pi';
import Nav from '../components/Nav';

import RenderedVideoPlayer from '../rendered-common/RenderedVideoPlayer';
import useRenderedGalleryActions from './useRenderedGalleryActionsHome';

export default function RenderedGalleryExpanderHome() {
  const [expanderData, setExpanderData] = useState<PortfolioItem | null>(null);
  const { currentUniqueSlug } = useExpandingGridGallery();
  const { btnCloseAfterHandleClick, btnNextPrevAfterHandleClick } =
    useRenderedGalleryActions();

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
    slug,
    videoUrl,
    imageUrl,
    thumbAlt,
    thumbTitle,
  } = expanderData;

  const image = {
    imageUrl,
    thumbAlt,
    thumbTitle,
  };

  const iconClassName = 'w-14 h-14 sm:h-20 sm:w-20 p-1 sm:p-2 sm:-mx-5';

  return (
    <div
      key={`${id}-expanded`}
      id={`${slug}-expanded`}
      className="relative flex flex-col"
    >
      <Nav className="bottom-0 left-0 right-0 top-0 order-last flex items-center justify-between p-4 pb-10 sm:absolute  sm:p-3 sm:px-0 md:py-2 ">
        <ExpandingGridGallery.NavButtonPrev
          className="overflow-clip sm:rounded-s-none"
          afterHandleClick={btnNextPrevAfterHandleClick}
        >
          <PiCaretLeftThin className={iconClassName} />
        </ExpandingGridGallery.NavButtonPrev>
        <ExpandingGridGallery.NavButtonNext
          className="order-last overflow-clip sm:rounded-e-none"
          afterHandleClick={btnNextPrevAfterHandleClick}
        >
          <PiCaretRightThin className={iconClassName} />
        </ExpandingGridGallery.NavButtonNext>
        <ExpandingGridGallery.NavButtonClose
          className="sm:absolute sm:right-3 sm:top-6 sm:mx-0 sm:h-12 sm:w-12 md:right-2"
          afterHandleClick={btnCloseAfterHandleClick}
        >
          <PiXThin
            className={cn([iconClassName, 'sm:w-18 sm:h-18 sm:mx-0 sm:p-0'])}
          />
        </ExpandingGridGallery.NavButtonClose>
      </Nav>
      <article className="col-span-full flex flex-auto animate-fade-in flex-col items-center transition-all sm:px-[4.5rem] sm:py-6 md:flex-row md:gap-6 md:px-16 md:py-10 lg:gap-16">
        <div className="w-full basis-7/12 transition-all lg:basis-6/12">
          <AspectRatio ratio={16 / 9} className="flex">
            <RenderedVideoPlayer image={image} videoUrl={videoUrl} />
          </AspectRatio>
        </div>
        <section className="flex w-auto flex-1 flex-col gap-6 px-4 pb-6 pt-8 font-light sm:gap-10 sm:px-0 sm:text-xl md:p-0">
          <div>
            <h2 className="font-raleway text-3xl sm:text-4xl">{title}</h2>
            <div className="flex items-center gap-2 italic text-neutral-300">
              <p aria-label="Project type">{projectType}</p>
              <Separator
                orientation="vertical"
                className="ml-1 inline-block h-5 w-[1px] bg-white"
              />
              <p aria-label="Role on this project">{role}</p>
            </div>
          </div>

          <p aria-label="Video description" className="text-neutral-400">
            {description}
          </p>
          <dl>
            <div>
              <dt className="inline text-neutral-400">Director: </dt>
              <dd className="inline font-semibold">{director}</dd>
            </div>
            <div>
              <dt className="inline text-neutral-400">Producer: </dt>
              <dd className="inline font-semibold">{producer}</dd>
            </div>
            <div>
              <dt className="inline text-neutral-400">Production Company: </dt>
              <dd className="inline font-semibold">{productionCompany}</dd>
            </div>
          </dl>
        </section>
      </article>
    </div>
  );
}
