/* eslint-disable @next/next/no-img-element */
import portfolioActions from '@/actions/portfolioActions';
import envPublic from '@/lib/env';
import { ImageResponse } from 'next/og';
// https://github.com/vercel/next.js/issues/51147

export async function GET() {
  const item = portfolioActions.getPortfolioItemBySlug('land-of-the-wind');

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
          // src={`${origin}${item?.imageUrl}`}
          src={envPublic.NEXT_PUBLIC_REMOTE_ASSETS_PATH + item?.imageUrl}
          alt={item?.thumbAlt}
        />
      </div>
    ),
  );
}
