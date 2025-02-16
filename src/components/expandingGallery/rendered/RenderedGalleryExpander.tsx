'use client';

import { cn } from '../utils/utils';

import ExpandingGridGallery from '../ExpandingGridGallery';
import { PiCaretLeftThin, PiCaretRightThin, PiXThin } from 'react-icons/pi';
import Nav from '../components/Nav';

import RenderedVideoPlayer from './RenderedVideoPlayer';
import useRenderedGalleryActions from './useRenderedGalleryActionsHome';
import usePortfolioItemData from '@/components/expandingGallery/rendered/usePortfolioItemData';
import paths from '@/lib/paths';
import {
  Project,
  ProjectCreditList,
  ProjectCreditListItem,
  ProjectCreditName,
  ProjectCreditTitle,
  ProjectDescription,
  ProjectMetaContainer,
  ProjectRole,
  ProjectSubTitle,
  ProjectSubTitleSeparator,
  ProjectTitle,
  ProjectTitleContainer,
  ProjectType,
  ProjectVideoAspectRatio,
  ProjectVideoContainer,
} from '@/components/expandingGallery/rendered/project';

export default function RenderedGalleryExpander() {
  const expanderData = usePortfolioItemData();
  const { btnCloseAfterHandleClick, btnNextPrevAfterHandleClick } =
    useRenderedGalleryActions();

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
    imageUrl: paths.localAssetsPath() + imageUrl,
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
      <Nav className="bottom-0 left-0 right-0 top-0 order-last flex items-center justify-between p-4 pb-10 sm:absolute sm:p-3 sm:px-0 md:py-2">
        <ExpandingGridGallery.NavButtonPrev
          className="overflow-clip sm:rounded-s-none"
          afterHandleClick={btnNextPrevAfterHandleClick}
        >
          <PiCaretLeftThin className={cn([iconClassName], 'h-10 w-10')} />
        </ExpandingGridGallery.NavButtonPrev>
        <ExpandingGridGallery.NavButtonNext
          className="order-last overflow-clip sm:rounded-e-none"
          afterHandleClick={btnNextPrevAfterHandleClick}
        >
          <PiCaretRightThin className={cn([iconClassName], 'h-10 w-10')} />
        </ExpandingGridGallery.NavButtonNext>
        <ExpandingGridGallery.NavButtonClose
          className="sm:absolute sm:right-3 sm:top-6 sm:mx-0 sm:h-12 sm:w-12 md:right-2"
          afterHandleClick={btnCloseAfterHandleClick}
        >
          <PiXThin
            className={cn([
              iconClassName,
              'sm:w-18 sm:h-18 h-10 w-10 sm:mx-0 sm:p-0',
            ])}
          />
        </ExpandingGridGallery.NavButtonClose>
      </Nav>
      <Project>
        <ProjectVideoContainer>
          <ProjectVideoAspectRatio>
            <RenderedVideoPlayer image={image} videoUrl={videoUrl} />
          </ProjectVideoAspectRatio>
        </ProjectVideoContainer>
        <ProjectMetaContainer>
          <ProjectTitleContainer>
            <ProjectTitle>{title}</ProjectTitle>
            <ProjectSubTitle>
              <ProjectType>{projectType}</ProjectType>
              <ProjectSubTitleSeparator />
              <ProjectRole>{role}</ProjectRole>
            </ProjectSubTitle>
          </ProjectTitleContainer>

          <ProjectDescription>{description}</ProjectDescription>
          <ProjectCreditList>
            <ProjectCreditListItem>
              <ProjectCreditTitle>Director: </ProjectCreditTitle>
              <ProjectCreditName>{director}</ProjectCreditName>
            </ProjectCreditListItem>
            <ProjectCreditListItem>
              <ProjectCreditTitle>Producer: </ProjectCreditTitle>
              <ProjectCreditName>{producer}</ProjectCreditName>
            </ProjectCreditListItem>
            <ProjectCreditListItem>
              <ProjectCreditTitle>Production Company: </ProjectCreditTitle>
              <ProjectCreditName>{productionCompany}</ProjectCreditName>
            </ProjectCreditListItem>
          </ProjectCreditList>
        </ProjectMetaContainer>
      </Project>
    </div>
  );
}
