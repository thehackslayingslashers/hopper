/* eslint-disable no-nested-ternary */
import React from 'react';
import { GoPrimitiveDot } from 'react-icons/go';
import { FaDotCircle } from 'react-icons/fa';

const ImageGalleryThumbnail = ({
  image, index, chosen, handleImageSelect, trueIndex, fullScreen,
}) => (fullScreen ? (
  chosen ? (
    <FaDotCircle
      onClick={handleImageSelect}
      onKeyDown={handleImageSelect}
      className="imageGalleryIcon chosen"
      id={trueIndex}
      alt="thumbnail"
      style={{ gridRow: index + 1 }}
    />
  ) : (
    <GoPrimitiveDot
      onClick={handleImageSelect}
      onKeyDown={handleImageSelect}
      className="imageGalleryIcon"
      id={trueIndex}
      alt="thumbnail"
      style={{ gridRow: index + 1 }}
    />
  )) : (
    <button
      type="submit"
      onClick={handleImageSelect}
      onKeyDown={handleImageSelect}
      className={chosen ? 'thumbnail chosen' : 'thumbnail'}
      id={trueIndex}
      alt="thumbnail"
      style={{
        gridRow: index + 1,
        background: `url(${image.thumbnail_url[0] === 'h' ? image.thumbnail_url : image.thumbnail_url.substr(1)})`,
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
      }}
    />
));

export default ImageGalleryThumbnail;
