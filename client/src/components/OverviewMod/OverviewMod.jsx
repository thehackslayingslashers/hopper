import React from 'react';
import AddToCart from './AddToCart';
import ImageGallery from './ImageGallery';
import ProductInformation from './ProductInformation';
import StyleSelector from './StyleSelector';
import BasicInfo from './BasicInfo';

class OverviewMod extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div id="overview">
        <ImageGallery />
        <BasicInfo />
        <StyleSelector />
        <AddToCart />
        <ProductInformation />
      </div>
    );
  }
}

export default OverviewMod;
