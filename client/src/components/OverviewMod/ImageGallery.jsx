/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

import React from 'react';
import { BiFullscreen } from 'react-icons/bi';
import {
  IoIosArrowForward, IoIosArrowBack, IoIosArrowDown, IoIosArrowUp,
} from 'react-icons/io';
import ImageGalleryThumbnail from './ImageGalleryThumbnail';

class ImageGallery extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedImageIndex: 0,
      fullScreen: false,
      thumbnailIndex: 0,
    };
    this.handleFullScreen = this.handleFullScreen.bind(this);
    this.handleImageSelect = this.handleImageSelect.bind(this);
  }

  handleFullScreen() {
    const { fullScreen } = this.state;
    this.setState({
      fullScreen: !fullScreen,
    });
  }

  handleImageSelect(e) {
    const index = e.target.id;
    this.setState({
      selectedImageIndex: index,
    });
  }

  render() {
    const { selectedStyleIndex, currentItemStyles } = this.props;
    const { fullScreen, selectedImageIndex, thumbnailIndex } = this.state;
    let low = 0;
    let index = thumbnailIndex;
    const thumbnails = currentItemStyles[selectedStyleIndex].photos.map((image) => {
      if (index - thumbnailIndex < 7 && low++ >= thumbnailIndex) {
        index++;
        return (
          <ImageGalleryThumbnail
            handleImageSelect={this.handleImageSelect}
            image={image}
            trueIndex={low - 1}
            chosen={index - 1 === Number(selectedImageIndex)}
            index={index - thumbnailIndex}
            key={image.url}
          />
        );
      }
      return null;
    });

    return (
      <div id="overviewImageGallery">
        <img
          onClick={this.handleFullScreen}
          id="overviewBigImage"
          alt=""
          className={fullScreen ? 'full' : null}
          src={currentItemStyles[selectedStyleIndex].photos[selectedImageIndex].url}
        />
        <BiFullscreen id="fullScreenButton" onClick={this.handleFullScreen} />
        <button
          type="submit"
          className="overviewArrow"
          id="overviewArrowUp"
        >
          <IoIosArrowUp />
        </button>
        <button
          type="submit"
          className="overviewArrow"
          id="overviewArrowDown"
        >
          <IoIosArrowDown />
        </button>
        <button
          type="submit"
          className="overviewArrow"
          id="overviewArrowLeft"
        >
          <IoIosArrowBack />
        </button>
        <button
          type="submit"
          className="overviewArrow"
          id="overviewArrowRight"
        >
          <IoIosArrowForward />
        </button>
        {thumbnails}
      </div>
    );
  }
}

export default ImageGallery;

// render() {
//   const { selectedStyleIndex, currentItemStyles } = this.props;
//   const { fullScreen, selectedImageIndex } = this.state;

//   return selectedStyleIndex >= 0 && currentItemStyles[selectedStyleIndex] ? (
//     <div id="overviewImageGallery">
//       {fullScreen
//         ? (
//           <ImageGalleryExpanded
//             currentItemStyles={currentItemStyles}
//             selectedStyleIndex={selectedStyleIndex}
//             selectedImageIndex={selectedImageIndex}
//           />
//         )
//         : (
//           <ImageGalleryNonExpanded
//             currentItemStyles={currentItemStyles}
//             selectedStyleIndex={selectedStyleIndex}
//             selectedImageIndex={selectedImageIndex}
//           />
//         )}
//       <BiFullscreen id="fullScreenButton" onClick={this.handleFullScreen} />
//     </div>
//   ) : (
//     <div id="overviewImageGallery">Loading</div>
//   );
// }
