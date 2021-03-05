import React from 'react';

const ImageGalleryThumbnail = ({ image, index, chosen, handleImageSelect, trueIndex }) => (
  <img
    onClick={handleImageSelect}
    className={chosen ? 'thumbnail chosen' : 'thumbnail'}
    id={trueIndex}
    alt="thumbnail"
    src={image.url}
    style={{ gridRow: index + 1 }}
  />
);

export default ImageGalleryThumbnail;
