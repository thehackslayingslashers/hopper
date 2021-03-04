import React from 'react';
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
    } = this.props;

    return (
      <div id="overview">
        <ImageGallery
          currentItemStyles={currentItemStyles}
          selectedStyleIndex={selectedStyleIndex}
        />
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
        <AddToCart currentItemStyles={currentItemStyles} selectedStyleIndex={selectedStyleIndex} />
        <ProductInformation currentItemInfo={currentItemInfo} />
        <FeatureList features={currentItemInfo.features} />
      </div>
    );
  }
}

export default OverviewMod;
