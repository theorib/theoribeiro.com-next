const paths = {
  homePage(id?: string) {
    return `/${id ? `#${id}` : ''}`;
  },
  aboutPage() {
    return `/about-theo-ribeiro`;
  },
  showReelItemPage(slug: string, id?: string) {
    return `/cinematography-show-reel/${slug}${id ? `/#${id}` : ''}`;
  },
};
export default paths;
