import React from 'react';
import AddToCart from './AddToCart';
import ImageGallery from './ImageGallery';
import ProductInformation from './ProductInformation';
import StyleSelector from './StyleSelector';
import BasicInfo from './BasicInfo';

class OverviewMod extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { currentItemInfo, currentItemRatingInfo, currentItemAverageRating } = this.props;

    return (
      <div id="overview">
        <ImageGallery />
        <BasicInfo
          currentItemInfo={currentItemInfo}
          currentItemRatingInfo={currentItemRatingInfo}
          currentItemAverageRating={currentItemAverageRating}
        />
        <StyleSelector />
        <AddToCart />
        <ProductInformation />
      </div>
    );
  }
}

export default OverviewMod;
