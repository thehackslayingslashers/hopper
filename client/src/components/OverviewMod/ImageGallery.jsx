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
    this.handleArrowClick = this.handleArrowClick.bind(this);
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

  handleArrowClick(e) {
    const { thumbnailIndex, selectedImageIndex } = this.state;
    const { currentItemStyles, selectedStyleIndex} = this.props;

    const dir = e.target.attributes.dir.value;
    const page = Math.floor(selectedImageIndex / 7);
    const totalImages = currentItemStyles[selectedStyleIndex].photos.length;
    // debugger;
    switch (dir) {
      case 'up':
        if (thumbnailIndex > 0) {
          this.setState({
            thumbnailIndex: thumbnailIndex - 7,
            selectedImageIndex: page * 7 - 1,
          });
        }
        break;
      case 'down':
        if ((page + 1) * 7 <= totalImages) {
          this.setState({
            thumbnailIndex: thumbnailIndex + 7,
            selectedImageIndex: (page + 1) * 7,
          });
        }
        break;
      case 'left':
        if (selectedImageIndex > 0) {
          this.setState({
            selectedImageIndex: selectedImageIndex - 1,
            thumbnailIndex: selectedImageIndex % 7 === 0 ? (page - 1) * 7 : thumbnailIndex,
          });
        }
        break;
      case 'right':
        if (selectedImageIndex < totalImages) {
          this.setState({
            selectedImageIndex: selectedImageIndex + 1,
            thumbnailIndex: selectedImageIndex % 7 === 6 ? (page + 1) * 7 : thumbnailIndex,
          });
        }
        break;
      default:
        break;
    }
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
          onClick={this.handleArrowClick}
          className="overviewArrow"
          id="overviewArrowUp"
          dir="up"
        >
          <IoIosArrowUp
            id="overviewArrowUpIcon" dir="up" />
        </button>
        <button
          type="submit"
          onClick={this.handleArrowClick}
          className="overviewArrow"
          id="overviewArrowDown"
          dir="down"
        >
          <IoIosArrowDown id="overviewArrowDownIcon" dir="down" />
        </button>
        <button
          type="submit"
          onClick={this.handleArrowClick}
          className="overviewArrow"
          id="overviewArrowLeft"
          dir="left"
        >
          <IoIosArrowBack id="overviewArrowLeftIcon" dir="left" />
        </button>
        <button
          type="submit"
          onClick={this.handleArrowClick}
          className="overviewArrow"
          id="overviewArrowRight"
          dir="right"
        >
          <IoIosArrowForward id="overviewArrowRightIcon" dir="right" />
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
