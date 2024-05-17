import { z } from 'zod';
// import { fromError } from 'zod-validation-error';
import { createEnv } from '@t3-oss/env-nextjs';

export const env = createEnv({
  server: {
    METADATA_BASE_URL: z.string().url(),
  },

  client: {
    NEXT_PUBLIC_ASSETS_PATH: z.union([z.string().url(), z.literal('/')]),
    NEXT_PUBLIC_LOCAL_ASSETS_PATH: z.union([z.string().url(), z.literal('/')]),
    NEXT_PUBLIC_REMOTE_ASSETS_PATH: z.string().url(),
  },

  runtimeEnv: {
    METADATA_BASE_URL: process.env.METADATA_BASE_URL,
    NEXT_PUBLIC_ASSETS_PATH: process.env.NEXT_PUBLIC_ASSETS_PATH,
    NEXT_PUBLIC_LOCAL_ASSETS_PATH: process.env.NEXT_PUBLIC_LOCAL_ASSETS_PATH,
    NEXT_PUBLIC_REMOTE_ASSETS_PATH: process.env.NEXT_PUBLIC_REMOTE_ASSETS_PATH,
  },

  // clientPrefix: 'NEXT_PUBLIC_',
  // runtimeEnv: process.env,
  emptyStringAsUndefined: true,
});
//   const EnvSchema = z.object({
//     NEXT_PUBLIC_ASSETS_PATH: z.union([z.string().url(), z.literal('/')]),
//     NEXT_PUBLIC_LOCAL_ASSETS_PATH: z.union([z.string().url(), z.literal('/')]),
//     NEXT_PUBLIC_REMOTE_ASSETS_PATH: z.string().url(),
//   });
//   let envPublic: z.infer<typeof EnvSchema>;
//   try {
//     envPublic = EnvSchema.parse({
//       NEXT_PUBLIC_ASSETS_PATH: process.env.NEXT_PUBLIC_ASSETS_PATH,
//       NEXT_PUBLIC_LOCAL_ASSETS_PATH: process.env.NEXT_PUBLIC_LOCAL_ASSETS_PATH,
//       NEXT_PUBLIC_REMOTE_ASSETS_PATH:
//         process.env.NEXT_PUBLIC_REMOTE_ASSETS_PATH,
//     });
//   } catch (err) {
//     const validationError = fromError(err);
//     throw validationError;
//   }
// }

export default env;
