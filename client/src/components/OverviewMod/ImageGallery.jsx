import React from 'react';
import { BiFullscreen } from 'react-icons/bi';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

class ImageGallery extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedImageIndex: 0,
      fullScreen: false,
    };
    this.handleFullScreen = this.handleFullScreen.bind(this);
  }

  handleFullScreen(e) {
    this.setState({
      fullScreen: !this.state.fullScreen,
    });
  }

  render() {
    let { selectedStyleIndex, currentItemStyles } = this.props;

    return selectedStyleIndex >= 0 && currentItemStyles[selectedStyleIndex] ? (
      <div id="overviewImageGallery">
        <img
          id="overviewBigImage"
          className={this.state.fullScreen ? 'full' : null}
          src={currentItemStyles[selectedStyleIndex].photos[this.state.selectedImageIndex].url}
        />
        <BiFullscreen id="fullScreenButton" onClick={this.handleFullScreen} />
      </div>
    ) : (
      <div id="overviewImageGallery">Loading</div>
    );
  }
}

export default ImageGallery;
