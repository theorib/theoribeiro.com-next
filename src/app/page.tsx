import RenderedExpandingGallery from '@/components/expandingGallery/RenderedExpandingGallery';

export default async function HomePage() {
  return (
    <>
      <h1 className="sr-only">
        Theo Ribeiro Cinematography Portfolio Home Page
      </h1>
      <RenderedExpandingGallery />
    </>
  );
}
