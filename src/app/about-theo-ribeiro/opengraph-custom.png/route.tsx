/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { ImageResponse } from 'next/og';
import env from '@/shared/lib/env';
// https://github.com/vercel/next.js/issues/51147

export const dynamic = 'force-static';

export async function GET() {
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
          src={
            env.NEXT_PUBLIC_REMOTE_ASSETS_PATH +
            'img/TR_2019_008_000504_LeicaQ_Web.jpg'
          }
          alt={'Portrait of Theo Ribeiro'}
        />
      </div>
    ),
  );
}
