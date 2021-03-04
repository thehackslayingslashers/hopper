/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

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
          onClick={this.handleFullScreen}
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
