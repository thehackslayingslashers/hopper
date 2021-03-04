import React from 'react';
import { BiFullscreen } from 'react-icons/bi';
// import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

class ImageGallery extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedImageIndex: 0,
      fullScreen: false,
    };
    this.handleFullScreen = this.handleFullScreen.bind(this);
  }

  handleFullScreen() {
    const { fullScreen } = this.state;
    this.setState({
      fullScreen: !fullScreen,
    });
  }

  render() {
    const { selectedStyleIndex, currentItemStyles } = this.props;
    const { fullScreen, selectedImageIndex } = this.state;

    return selectedStyleIndex >= 0 && currentItemStyles[selectedStyleIndex] ? (
      <div id="overviewImageGallery">
        <img
          id="overviewBigImage"
          alt=""
          className={fullScreen ? 'full' : null}
          src={currentItemStyles[selectedStyleIndex].photos[selectedImageIndex].url}
        />
        <BiFullscreen id="fullScreenButton" onClick={this.handleFullScreen} />
      </div>
    ) : (
      <div id="overviewImageGallery">Loading</div>
    );
  }
}

export default ImageGallery;
