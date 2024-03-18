import React from 'react';
import Image from 'next/image';
import { AspectRatio } from '../ui/aspect-ratio';
import type { PortfolioThumbnail } from '@/portfolio';
import Link from 'next/link';
import paths from '@/paths';

interface RenderedGalleryThumbnailProps {
  item: PortfolioThumbnail;
  expanderIndex: number | undefined;
}

export default function RenderedGalleryThumbnail({
  item,
  expanderIndex,
}: RenderedGalleryThumbnailProps) {
  const isExpanded = expanderIndex === item.id;

  const href = isExpanded
    ? paths.homePage(`expanging-gallery-${item.slug}`)
    : paths.showReelItemPage(
        item.slug,
        `expanging-gallery-expander-${item.slug}`,
      );

  return (
    <li id={`expanging-gallery-${item.slug}`}>
      <AspectRatio ratio={2.4 / 1} asChild={true}>
        <Link href={href}>
          <div className="absolute top-0 bottom-0 left-0 right-0 z-10 flex justify-center items-center bg-neutral-950/50 opacity-0 hover:opacity-90 transition-all duration-200">
            <p className="text-4xl font-extralight">{item.title}</p>
          </div>
          <Image
            src={item.imageUrl}
            alt={item.title}
            fill
            className="object-cover"
          />
        </Link>
      </AspectRatio>
    </li>
  );
}
