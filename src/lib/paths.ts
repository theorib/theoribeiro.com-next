import envPublic from '@/lib/env';

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
    return envPublic.NEXT_PUBLIC_LOCAL_ASSETS_PATH;
  },
  remoteAssetsPath() {
    return envPublic.NEXT_PUBLIC_REMOTE_ASSETS_PATH;
  },
};
export default paths;
