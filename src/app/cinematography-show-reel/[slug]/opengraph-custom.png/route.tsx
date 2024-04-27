/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { ImageResponse } from 'next/og';
import portfolioActions from '@/actions/portfolioActions';
// https://github.com/vercel/next.js/issues/51147

export async function GET(
  req: Request,
  { params }: { params: { slug: string } },
) {
  const { slug } = params;
  // const origin = process.env.METADATA_BASE_URL;

  if (!origin)
    throw new Error('No METADATA_BASE_URL environment variable found');

  const item = portfolioActions.getPortfolioItemBySlug(slug);

  return new ImageResponse(
    (
      <div
        className="bg-white"
        style={{
          width: 1200,
          height: 630,
          display: 'flex',
          position: 'relative',
        }}
      >
        <img
          style={{
            display: 'block',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
          }}
          // src={origin + item?.imageUrl}
          src={item?.originalImageUrl}
          alt={item?.thumbAlt}
        />
      </div>
    ),
  );
}

export async function generateStaticParams() {
  const slugs = portfolioActions.getPortfolioSlugs();
  return slugs.map(slug => ({ slug }));
}
