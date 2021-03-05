import React from 'react';

const ImageGalleryThumbnail = ({ image, index }) => (
  <img
    className={`thumbnail thumbnail${index}`}
    alt="thumbnail"
    src={image.url}
    style={{ gridRow: index + 1 }}
  />
);

export default ImageGalleryThumbnail;
