import env from '@/lib/env';

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
  localAssetsPath() {
    return env.NEXT_PUBLIC_LOCAL_ASSETS_PATH;
  },
  remoteAssetsPath() {
    return env.NEXT_PUBLIC_REMOTE_ASSETS_PATH;
  },
};
export default paths;
