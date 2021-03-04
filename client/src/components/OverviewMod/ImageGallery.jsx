import React from 'react';

class ImageGallery extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    let { selectedStyleIndex, currentItemStyles } = this.props;
    // debugger;
    return selectedStyleIndex >= 0 && currentItemStyles[selectedStyleIndex] ? (
      <div id="overviewImageGallery">
        <img id="overviewBigImage" src={currentItemStyles[selectedStyleIndex].photos[0].url} />
      </div>
    ) : (
      <div id="overviewImageGallery">Loading</div>
    );
  }
}

export default ImageGallery;
