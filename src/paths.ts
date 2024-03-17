const paths = {
  homePage() {
    return `/`;
  },
  aboutPage() {
    return `/about-theo-ribeiro`;
  },
  showReelItemPage(slug: string) {
    return `/cinematography-show-reel/${slug}`;
  },
};
export default paths;
