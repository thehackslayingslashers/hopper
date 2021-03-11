/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import withClickTracker from '../withClickTracker';
import AddToCart from './AddToCart';
import ImageGallery from './ImageGallery';
import ProductInformation from './ProductInformation';
import StyleSelector from './StyleSelector';
import BasicInfo from './BasicInfo';
import FeatureList from './FeatureList';

class OverviewMod extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      currentItemInfo,
      currentItemRatingInfo,
      currentItemAverageRating,
      currentItemStyles,
      selectedStyleIndex,
      handleStyleSelection,
      numberOfReviews,
      onClickAnywhere,
    } = this.props;

    return (
      <div id="overview" onClick={onClickAnywhere}>
        {currentItemStyles && currentItemStyles[selectedStyleIndex] ? (
          <ImageGallery
            currentItemStyles={currentItemStyles}
            selectedStyleIndex={selectedStyleIndex}
            key={currentItemStyles[selectedStyleIndex].style_id}
          />
        ) : (
          <div
            id="overviewImageGallery"
          >
            <div id="loadingVideo">
              <video autoPlay muted loop>
                <source src="/hoprjump.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        )}
        <BasicInfo
          currentItemInfo={currentItemInfo}
          currentItemRatingInfo={currentItemRatingInfo}
          currentItemAverageRating={currentItemAverageRating}
          currentItemStyles={currentItemStyles}
          selectedStyleIndex={selectedStyleIndex}
          numberOfReviews={numberOfReviews}
        />
        <StyleSelector
          currentItemStyles={currentItemStyles}
          selectedStyleIndex={selectedStyleIndex}
          handleStyleSelection={handleStyleSelection}
        />
        {currentItemStyles && currentItemStyles[selectedStyleIndex] ? (
          <AddToCart
            currentItemStyles={currentItemStyles}
            key={`${currentItemStyles[selectedStyleIndex].style_id}1`}
            selectedStyleIndex={selectedStyleIndex}
          />
        ) : <div id="overviewAddToCart"></div>}
        <ProductInformation currentItemInfo={currentItemInfo} />
        <FeatureList features={currentItemInfo.features} />
      </div>
    );
  }
}

export default withClickTracker(OverviewMod);
