import RenderedExpandingGalleryServer from '@/components/expandingGallery/rendered-server/RenderedExpandingGalleryServer';

export default async function HomePage() {
  return (
    <>
      <h1 className="sr-only">
        Theo Ribeiro Cinematography Portfolio Home Page //{' '}
      </h1>
      <RenderedExpandingGalleryServer />
    </>
  );
}
