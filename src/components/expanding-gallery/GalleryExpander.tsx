import { PortfolioItem } from '@/portfolio';
import { AspectRatio } from '../ui/aspect-ratio';
import Image from 'next/image';

interface GalleryExpanderProps {
  expanderData: PortfolioItem;
}

export default function GalleryExpander({
  expanderData,
}: GalleryExpanderProps) {
  const {
    title,
    projectType,
    role,
    description,
    director,
    producer,
    productionCompany,
    imageUrl,
  } = expanderData;

  return (
    <li className="col-span-full flex flex-auto flex-col gap-6  px-16 py-6 sm:flex-row sm:gap-16 sm:py-10">
      <div className="min-h-0 basis-5/12">
        <AspectRatio ratio={16 / 9}>
          <div className="absolute top-0 bottom-0 left-0 right-0 z-10 flex justify-center items-center bg-neutral-950/50 transition-all duration-200">
            <p className="text-4xl font-extralight">{title}</p>
          </div>
          <Image src={imageUrl} alt={title} fill className="object-cover" />
        </AspectRatio>
      </div>
      <div className="flex w-auto flex-1 flex-col gap-6 font-light sm:gap-10 sm:text-xl">
        <div>
          <h1 className="font-raleway text-3xl sm:text-4xl">{title}</h1>
          <p className="italic text-neutral-300">
            <span>{projectType}</span>
            <span> | </span>
            <span>{role}</span>
          </p>
        </div>

        <p className="text-neutral-400">{description}</p>
        <div>
          <p>
            <span className="text-neutral-400">Director: </span>
            <span className="font-semibold">{director}</span>
          </p>
          <p>
            <span className="text-neutral-400">Producer: </span>
            <span className="font-semibold">{producer}</span>
          </p>
          <p>
            <span className="text-neutral-400">Production Company: </span>
            <span className="font-semibold">{productionCompany}</span>
          </p>
        </div>
      </div>
    </li>
  );
}
