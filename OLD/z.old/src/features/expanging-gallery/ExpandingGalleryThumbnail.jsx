import { memo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ExpandingGalleryImage from './ExpandingGalleryImage';
import ExpandingGalleryImageOverlay from './ExpandingGalleryImageOverlay';

const ExpandingGalleryThumbnail = memo(function ExpandingGalleryThumbnail({
  item,
  isActive,
}) {
  const navigate = useNavigate();
  const { expandingGalleryUrlParam: urlParam } = useParams();
  const { title, imageUrl, projectType, slug } = item;

  const handleClick = () => {
    if (urlParam === slug) {
      navigate(`/`);
      return;
    }
    navigate(`/${slug}`);
  };

  return (
    <li className="p-2" onClick={handleClick}>
      <ExpandingGalleryImage
        imageUrl={imageUrl}
        alt={title}
        className={`aspect-[2.35/1] `}
      >
        <ExpandingGalleryImageOverlay
          className={`z-10 flex cursor-pointer flex-col items-center justify-center gap-1 font-light opacity-0 transition-all duration-500 ${isActive ? 'opacity-100' : 'hover:opacity-100'}`}
        >
          <h2 className="text-raleway text-4xl tracking-wide">{title}</h2>
          <p className="text-xl">{projectType}</p>
        </ExpandingGalleryImageOverlay>
      </ExpandingGalleryImage>
    </li>
  );
});

export default ExpandingGalleryThumbnail;
