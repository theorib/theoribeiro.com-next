module.exports = {
  convertFormat: [
    ['png', 'webp'],
    ['jpg', 'avif'],
  ],
  generateFormats: ['avif', 'webp'],
  // remoteImages: ['https://next-export-optimize-images.vercel.app/og.png'],
  // remoteImages: async () => {
  //   const imageUrls = await getImageUrls() // get image urls from CMS, etc.
  //   return imageUrls
  // }
};
