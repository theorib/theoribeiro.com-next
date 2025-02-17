import env from '@/shared/lib/env';

const paths = {
  homePage(id?: string) {
    return `/${id ? `#${id}` : ''}`;
  },
  aboutPage() {
    return `/about-theo-ribeiro`;
  },
  showReelItemPage(slug: string) {
    return `/cinematography-show-reel/${slug}`;
  },
  stillsPhotographyPage() {
    return `/still-photography`;
  },
  localAssetsPath() {
    return env.NEXT_PUBLIC_LOCAL_ASSETS_PATH;
  },
  remoteAssetsPath() {
    return env.NEXT_PUBLIC_REMOTE_ASSETS_PATH;
  },
} as const;
export default paths;

export type Paths = typeof paths;
