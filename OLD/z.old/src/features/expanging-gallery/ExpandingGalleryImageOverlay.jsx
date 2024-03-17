function ExpandingGalleryImageOverlay({ children, className }) {
  return (
    <div
      className={`absolute bottom-0 left-0 right-0 top-0 bg-neutral-950/50 ${className} `}
    >
      {children}
    </div>
  );
}

export default ExpandingGalleryImageOverlay;
