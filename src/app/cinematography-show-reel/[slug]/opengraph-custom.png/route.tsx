import React from 'react';
import { ImageResponse } from 'next/og';
import portfolioActions from '@/services/portfolio/actions';
import envPublic from '@/shared/lib/env';
// https://github.com/vercel/next.js/issues/51147

export async function GET(
  req: Request,
  { params }: { params: { slug: string } },
) {
  const { slug } = params;

  const item = portfolioActions.getPortfolioItemBySlug(slug);

  if (!item) return new Response(null, { status: 404 });

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
          src={envPublic.NEXT_PUBLIC_REMOTE_ASSETS_PATH + item?.imageUrl}
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
