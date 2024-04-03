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
};
export default paths;
