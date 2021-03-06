import React from 'react';
import { BsImageFill, BsImage } from 'react-icons/bs';

const ImageGalleryThumbnail = ({ image, index, chosen, handleImageSelect, trueIndex, fullScreen }) => {
  return fullScreen ? (
    chosen ? (<BsImage
      onClick={handleImageSelect}
      onKeyDown={handleImageSelect}
      className={'imageGalleryIcon chosen'}
      id={trueIndex}
      alt="thumbnail"
      src={image.url}
      style={{ gridRow: index + 1 }}
      />) : (<BsImageFill
        onClick={handleImageSelect}
        onKeyDown={handleImageSelect}
        className={'imageGalleryIcon'}
        id={trueIndex}
        alt="thumbnail"
        src={image.url}
        style={{ gridRow: index + 1 }}
        />
  )) : (
  <img
    onClick={handleImageSelect}
    onKeyDown={handleImageSelect}
    className={chosen ? 'thumbnail chosen' : 'thumbnail'}
    id={trueIndex}
    alt="thumbnail"
    src={image.url}
    style={{ gridRow: index + 1 }}
  />
  )
};

export default ImageGalleryThumbnail;
