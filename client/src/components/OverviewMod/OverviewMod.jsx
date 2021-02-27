import React from 'react';
import AddToCart from './AddToCart';
import ImageGallery from './ImageGallery';
import ProductInformation from './ProductInformation';
import StyleSelector from './StyleSelector';

class OverviewMod extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div id="overview">
        <p>OverviewMod is loading</p>
        <AddToCart />
        <ImageGallery />
        <ProductInformation />
        <StyleSelector />
      </div>
    );
  }
}

export default OverviewMod;
