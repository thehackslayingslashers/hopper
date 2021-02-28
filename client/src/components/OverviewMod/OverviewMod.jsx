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
    } = this.props;

    return (
      <div id="overview">
        <ImageGallery />
        <BasicInfo
          currentItemInfo={currentItemInfo}
          currentItemRatingInfo={currentItemRatingInfo}
          currentItemAverageRating={currentItemAverageRating}
        />
        <StyleSelector currentItemStyles={currentItemStyles} />
        <AddToCart />
        <ProductInformation currentItemInfo={currentItemInfo} />
        <FeatureList features={currentItemInfo.features} />
      </div>
    );
  }
}

export default OverviewMod;
