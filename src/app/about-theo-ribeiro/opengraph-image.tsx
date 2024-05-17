/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { ImageResponse } from 'next/og';
import envPublic from '@/lib/env';

export const alt = 'Portrait of Theo Ribeiro';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
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
          width={2500}
          height={1667}
          src={
            envPublic.NEXT_PUBLIC_REMOTE_ASSETS_PATH +
            'img/TR_2019_008_000504_LeicaQ_Web.jpg'
          }
          alt="Portrait of Theo Ribeiro"
        />
      </div>
    ),
  );
}
