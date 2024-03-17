function ExpandingGalleryImage({
  imageUrl,
  alt,
  onClick,
  className = 'aspect-[2.35/1]',
  imgClassName,
  children,
}) {
  return (
    <div className={`relative ${className}`} onClick={onClick}>
      {children}
      <img
        src={imageUrl}
        alt={alt}
        className={`h-full w-full overflow-hidden object-cover object-center  ${imgClassName}`}
      />
    </div>
  );
}

export default ExpandingGalleryImage;
