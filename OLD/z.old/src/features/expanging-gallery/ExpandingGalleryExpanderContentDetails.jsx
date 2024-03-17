function ExpandingGalleryExpanderContentDetails({ portfolioItem }) {
  const {
    title,
    projectType,
    role,
    description,
    director,
    producer,
    productionCompany,
  } = portfolioItem;

  return (
    <div className="flex w-auto flex-1 flex-col gap-6 font-light sm:gap-10 sm:text-xl">
      <div>
        <h1 className="font-raleway text-3xl sm:text-4xl">{title}</h1>
        <p className="italic text-neutral-300">
          <span>{projectType}</span>
          <span> | </span>
          <span>{role}</span>
        </p>
      </div>

      <p className="text-neutral-400">{description}</p>
      <div>
        <p>
          <span className="text-neutral-400">Director: </span>
          <span className="font-semibold">{director}</span>
        </p>
        <p>
          <span className="text-neutral-400">Producer: </span>
          <span className="font-semibold">{producer}</span>
        </p>
        <p>
          <span className="text-neutral-400">Production Company: </span>
          <span className="font-semibold">{productionCompany}</span>
        </p>
      </div>
    </div>
  );
}

export default ExpandingGalleryExpanderContentDetails;
