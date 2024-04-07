function FooterMain() {
  return (
    <footer className="mx-auto w-full max-w-layout pb-4 font-light">
      <p className="my-12 sm:text-lg">
        Theo Ribeiro is an award winning cinematographer based in London, UK.
      </p>
      <div className="mb-12 flex flex-col sm:text-lg">
        {/* html field for phone  */}
        <a href="mailto:theo@theoribeiro.com" className="link link-accent">
          theo@theoribeiro.com
        </a>
        <span>
          Mobile (UK): <a href="tel:+44 7415 303-847">+44 7415 303847</a>
        </span>
      </div>
      <p
        aria-label="Copyright Notice"
        className="text-md text-horizon-blue-200"
      >
        ©{new Date().getFullYear()} Theo Ribeiro, all rights reserved.{' '}
      </p>
    </footer>
  );
}

export default FooterMain;
