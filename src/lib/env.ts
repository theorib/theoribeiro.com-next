import { z } from 'zod';

import { createEnv } from '@t3-oss/env-nextjs';

export const env = createEnv({
  server: {
    METADATA_BASE_URL: z.string().url(),
  },

  client: {
    NEXT_PUBLIC_SITE_URL: z.string().url(),
    NEXT_PUBLIC_ASSETS_PATH: z.union([z.string().url(), z.literal('/')]),
    NEXT_PUBLIC_LOCAL_ASSETS_PATH: z.union([z.string().url(), z.literal('/')]),
    NEXT_PUBLIC_REMOTE_ASSETS_PATH: z.string().url(),
  },

  runtimeEnv: {
    METADATA_BASE_URL: process.env.METADATA_BASE_URL,
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
    NEXT_PUBLIC_ASSETS_PATH: process.env.NEXT_PUBLIC_ASSETS_PATH,
    NEXT_PUBLIC_LOCAL_ASSETS_PATH: process.env.NEXT_PUBLIC_LOCAL_ASSETS_PATH,
    NEXT_PUBLIC_REMOTE_ASSETS_PATH: process.env.NEXT_PUBLIC_REMOTE_ASSETS_PATH,
  },

  emptyStringAsUndefined: true,
});

export default env;
