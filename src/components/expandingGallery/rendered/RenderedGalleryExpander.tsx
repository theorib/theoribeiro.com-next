'use client';

import ExpandingGridGallery from '../ExpandingGridGallery';
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

import {
  CloseIcon,
  NextIcon,
  PrevIcon,
} from '@/components/expandingGallery/rendered/navIcons';

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

  return (
    <div
      key={`${id}-expanded`}
      id={`${slug}-expanded`}
      className="relative flex flex-col"
    >
      <Nav className="top-0 right-0 bottom-0 left-0 order-last flex items-center justify-between p-4 pb-10 sm:absolute sm:p-3 sm:px-0 md:py-2">
        <ExpandingGridGallery.NavButtonPrev
          className="overflow-clip p-0 sm:rounded-s-none"
          afterHandleClick={btnNextPrevAfterHandleClick}
        >
          <PrevIcon />
        </ExpandingGridGallery.NavButtonPrev>
        <ExpandingGridGallery.NavButtonNext
          className="order-last overflow-clip sm:rounded-e-none"
          afterHandleClick={btnNextPrevAfterHandleClick}
        >
          <NextIcon />
        </ExpandingGridGallery.NavButtonNext>
        <ExpandingGridGallery.NavButtonClose
          className="sm:absolute sm:top-6 sm:right-3 sm:mx-0 md:right-2"
          afterHandleClick={btnCloseAfterHandleClick}
        >
          <CloseIcon />
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
