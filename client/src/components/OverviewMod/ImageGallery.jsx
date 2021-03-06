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
      // thumbnailIndex: index % 7
    });
  }

  handleArrowClick(e) {
    const { thumbnailIndex, selectedImageIndex } = this.state;
    const { currentItemStyles, selectedStyleIndex } = this.props;

    const dir = e.target.attributes.dir.value;
    const page = Math.floor(Number(selectedImageIndex) / 7);
    const totalImages = currentItemStyles[selectedStyleIndex].photos.length;

    switch (dir) {
      case 'up':
        if (thumbnailIndex > 0) {
          this.setState({
            selectedImageIndex: thumbnailIndex - 7 >= 0 ? thumbnailIndex - 1 : 6,
            thumbnailIndex: thumbnailIndex - 7 >= 0 ? thumbnailIndex - 7 : 0,
          });
        }
        break;
      case 'down':
        this.setState({
          thumbnailIndex: thumbnailIndex + 14 >= totalImages ? totalImages - 7 : thumbnailIndex + 7,
          selectedImageIndex: thumbnailIndex + 14 >= totalImages ? totalImages - 7 : thumbnailIndex + 7,
        });

        break;
      case 'left':
        if (selectedImageIndex > 0) {
          this.setState({
            selectedImageIndex: Number(selectedImageIndex) - 1,
            thumbnailIndex: Number(selectedImageIndex - thumbnailIndex) % 7 === 0 ? thumbnailIndex - 1 : thumbnailIndex,
          });
        }
        break;
      case 'right':
        if (selectedImageIndex < totalImages) {
          this.setState({
            selectedImageIndex: Number(selectedImageIndex) + 1,
            thumbnailIndex: Number(selectedImageIndex - thumbnailIndex) % 7 === 6 ? thumbnailIndex + 1 : thumbnailIndex,
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

    const page = Math.floor(selectedImageIndex / 7);
    const totalImages = currentItemStyles[selectedStyleIndex].photos.length;
    const pageCount = Math.floor(totalImages / 7);

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
      <div id="overviewImageGallery">
        <img
          onClick={fullScreen ? null : this.handleFullScreen}
          id="overviewBigImage"
          alt=""
          className={fullScreen ? 'full' : null}
          src={currentItemStyles[selectedStyleIndex].photos[selectedImageIndex].url}
        />
        <BiFullscreen id="fullScreenButton" onClick={this.handleFullScreen} />
        {thumbnailIndex > 0 ? (
          <button
            type="submit"
            onClick={this.handleArrowClick}
            className={fullScreen ? "overviewArrow full" : "overviewArrow"}
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
        {thumbnailIndex + 7 < totalImages ? (
          <button
            type="submit"
            onClick={this.handleArrowClick}
            className={fullScreen ? "overviewArrow full" : "overviewArrow"}
            id="overviewArrowDown"
            dir="down"
          >
            <IoIosArrowDown id="overviewArrowDownIcon" dir="down"
            onClick={this.handleArrowClick} />
          </button>
        ) : null}
        {selectedImageIndex > 0 ? (
          <button
            type="submit"
            onClick={this.handleArrowClick}
            className="overviewArrow"
            id="overviewArrowLeft"
            dir="left"
          >
            <IoIosArrowBack id="overviewArrowLeftIcon" dir="left"
            onClick={this.handleArrowClick} />
          </button>
        ) : null}
        {selectedImageIndex < totalImages - 1 ? (
          <button
            type="submit"
            onClick={this.handleArrowClick}
            className="overviewArrow"
            id="overviewArrowRight"
            dir="right"
          >
            <IoIosArrowForward id="overviewArrowRightIcon" dir="right"
            onClick={this.handleArrowClick} />
          </button>
        ) : null}
        {thumbnails}
      </div>
    ) : (
      <div id="overviewImageGallery" className={'errorr'}>
        <div id="errrrror">
          There are no images of this item, sorry
        </div>
      </div>
    )
  }
}

export default ImageGallery;
