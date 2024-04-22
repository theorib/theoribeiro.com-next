import RenderedExpandingGalleryNextStatic from '@/components/expandingGallery/rendered-server/RenderedExpandingGalleryNextStatic';

export default async function ShowReelItemPageInterceptedDefault() {
  return (
    <>
      <h1>intercepted default @expander</h1>
      <RenderedExpandingGalleryNextStatic withUrlParamSlug={true} />;
    </>
  );
}
