/* eslint-disable jsx-a11y/mouse-events-have-key-events */
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
      fullfull: false,
      thumbnailIndex: 0,
      tx: 0,
      ty: 0,
      fadeIn: false,
    };
    this.handleFullScreen = this.handleFullScreen.bind(this);
    this.handleImageClick = this.handleImageClick.bind(this);
    this.handleImageSelect = this.handleImageSelect.bind(this);
    this.handleArrowClick = this.handleArrowClick.bind(this);
    this.hoverFullFull = this.hoverFullFull.bind(this);
    this.unFadeIn = this.unFadeIn.bind(this);
  }

  handleFullScreen() {
    const { fullScreen } = this.state;
    this.setState({
      fullScreen: !fullScreen,
    });
  }

  handleImageClick() {
    const { fullScreen, fullfull } = this.state;
    this.setState({
      fullScreen: true,
      fullfull: fullfull ? false : !!fullScreen,
    });
  }

  handleImageSelect(e) {
    const index = e.target.id;
    this.setState({
      selectedImageIndex: index,
      fadeIn: true,
    }, () => {
      setTimeout(this.unFadeIn, 500);
    });
  }

  handleArrowClick(e) {
    const { thumbnailIndex, selectedImageIndex } = this.state;
    const { currentItemStyles, selectedStyleIndex } = this.props;

    const dir = e.target.attributes.dir.value;
    const totalImages = currentItemStyles[selectedStyleIndex].photos.length;

    switch (dir) {
      case 'up':
        if (thumbnailIndex > 0) {
          this.setState({
            selectedImageIndex: thumbnailIndex - 7 >= 0 ? thumbnailIndex - 1 : 6,
            thumbnailIndex: thumbnailIndex - 7 >= 0 ? thumbnailIndex - 7 : 0,
            fadeIn: true,
          });
        }
        break;
      case 'down':
        this.setState({
          thumbnailIndex: thumbnailIndex + 14 >= totalImages ? totalImages - 7 : thumbnailIndex + 7,
          selectedImageIndex: thumbnailIndex + 14 >= totalImages
            ? totalImages - 7
            : thumbnailIndex + 7,
          fadeIn: true,
        });
        break;
      case 'left':
        if (selectedImageIndex > 0) {
          this.setState({
            selectedImageIndex: Number(selectedImageIndex) - 1,
            thumbnailIndex: Number(selectedImageIndex - thumbnailIndex) % 7 === 0
              ? thumbnailIndex - 1
              : thumbnailIndex,
            fadeIn: true,
          });
        }
        break;
      case 'right':
        if (selectedImageIndex < totalImages) {
          this.setState({
            selectedImageIndex: Number(selectedImageIndex) + 1,
            thumbnailIndex: Number(selectedImageIndex - thumbnailIndex) % 7 === 6
              ? thumbnailIndex + 1
              : thumbnailIndex,
            fadeIn: true,
          });
        }
        break;
      default:
        break;
    }
    setTimeout(this.unFadeIn, 500);
  }

  unFadeIn() {
    this.setState({
      fadeIn: false,
    });
  }

  hoverFullFull(e) {
    const { fullfull } = this.state;
    if (fullfull) {
      const { offsetTop, offsetLeft } = e.target;

      const imageHeight = e.target.height;
      const imageWidth = e.target.width;

      const mouseWidth = e.pageX;
      const mouseHeight = e.pageY;

      const relativeHeight = mouseHeight - offsetTop;
      const relativeWidth = mouseWidth - offsetLeft;

      const tx = 1.25 * (relativeWidth - imageWidth / 2);
      const ty = 1.25 * (relativeHeight - imageHeight / 2);

      this.setState({
        tx: -tx,
        ty: -ty,
      });
    }
  }

  render() {
    const { selectedStyleIndex, currentItemStyles } = this.props;
    const {
      fullScreen, selectedImageIndex, thumbnailIndex, fullfull, tx, ty, fadeIn,
    } = this.state;
    const totalImages = currentItemStyles[selectedStyleIndex].photos.length;
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
            fullScreen={fullScreen}
          />
        );
      }
      return null;
    });

    return currentItemStyles[selectedStyleIndex].photos[selectedImageIndex].url ? (
      <div
        id="overviewImageGallery"
        // eslint-disable-next-line no-nested-ternary
        className={fullScreen ? fullfull ? 'full fullfull' : 'full' : null}
      >
        <img
          onClick={this.handleImageClick}
          id="overviewBigImage"
          alt=""
          // eslint-disable-next-line no-nested-ternary
          className={fullScreen ? (fullfull ? 'full fullfull' : (fadeIn ? 'fade-in full' : 'full')) : (fadeIn ? 'fade-in' : null)}
          onMouseMove={this.hoverFullFull}
          src={currentItemStyles[selectedStyleIndex].photos[selectedImageIndex].url}
          style={fullfull ? {
            transform: `translate(${tx}px, ${ty}px) scale(2.5)`,
          } : null}
        />
        {fullfull ? null : <BiFullscreen id="fullScreenButton" onClick={this.handleFullScreen} />}
        {thumbnailIndex > 0 && !fullfull ? (
          <button
            type="submit"
            onClick={this.handleArrowClick}
            className={fullScreen ? 'overviewArrow full' : 'overviewArrow'}
            id="overviewArrowUp"
            dir="up"
          >
            <IoIosArrowUp
              id="overviewArrowUpIcon"
              dir="up"
              onClick={this.handleArrowClick}
            />
          </button>
        ) : null}
        {thumbnailIndex + 7 < totalImages && !fullfull ? (
          <button
            type="submit"
            onClick={this.handleArrowClick}
            className={fullScreen ? 'overviewArrow full' : 'overviewArrow'}
            id="overviewArrowDown"
            dir="down"
          >
            <IoIosArrowDown
              id="overviewArrowDownIcon"
              dir="down"
              onClick={this.handleArrowClick}
            />
          </button>
        ) : null}
        {selectedImageIndex > 0 && !fullfull ? (
          <button
            type="submit"
            onClick={this.handleArrowClick}
            className="overviewArrow"
            id="overviewArrowLeft"
            dir="left"
          >
            <IoIosArrowBack
              id="overviewArrowLeftIcon"
              dir="left"
              onClick={this.handleArrowClick}
            />
          </button>
        ) : null}
        {selectedImageIndex < totalImages - 1 && !fullfull ? (
          <button
            type="submit"
            onClick={this.handleArrowClick}
            className="overviewArrow"
            id="overviewArrowRight"
            dir="right"
          >
            <IoIosArrowForward
              id="overviewArrowRightIcon"
              dir="right"
              onClick={this.handleArrowClick}
            />
          </button>
        ) : null}
        {fullfull ? null : thumbnails}
      </div>
    ) : (
      <div id="overviewImageGallery" className="errorr">
        <div id="errrrror">
          There are no images of this item, sorry
        </div>
      </div>
    );
  }
}

export default ImageGallery;
