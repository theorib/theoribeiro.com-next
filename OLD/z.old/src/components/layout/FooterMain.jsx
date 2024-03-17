function FooterMain() {
  return (
    <footer className="mx-auto w-full max-w-5xl max-w-layout pb-4 font-extralight">
      <p className="my-12 text-lg">
        Theo Ribeiro is an award winning cinematographer based in London, UK.
      </p>
      <div className="mb-12 flex flex-col text-lg">
        {/* html field for phone  */}
        <a href="mailto:theo@theoribeiro.com" className="app-links">
          theo@theoribeiro.com
        </a>
        <span>
          Mobile (UK):{' '}
          <a href="tel:+44 7415 303-847" className="app-links">
            +44 7415 303847
          </a>
        </span>
      </div>
      <p className="text-md">©2021 Theo Ribeiro, all rights reserved. </p>
    </footer>
  );
}

export default FooterMain;
