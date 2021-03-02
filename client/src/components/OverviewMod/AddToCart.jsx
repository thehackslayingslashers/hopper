import React from 'react';
import SizeSelector from './SizeSelector';
import QuantitySelector from './QuantitySelector';

class AddToCart extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedSize: '',
      selectedSizeIndex: null,
      selectedQuantity: '',
    };
    this.selectSize = this.selectSize.bind(this);
    this.selectQuantity = this.selectQuantity.bind(this);
  }

  selectSize(e) {
    if (e.currentTarget.value === 'Select Size') {
      this.setState({
        selectedSizeIndex: null,
      });
    } else {
      this.setState({
        selectedSizeIndex: e.currentTarget.value,
      });
    }
  }

  selectQuantity(e) {
    let quant = e.target.value;
    this.setState({
      selectedQuantity: quant,
    });
  }

  render() {
    let { currentItemStyles, selectedStyleIndex } = this.props;
    if (currentItemStyles[0]) {
      let skus = currentItemStyles[selectedStyleIndex].skus;

      let sizeSelector = skus.map;
      return (
        <div id="overviewAddToCart">
          <SizeSelector skus={skus} selectSize={this.selectSize} />
          <QuantitySelector
            skus={skus}
            selectedSizeIndex={this.state.selectedSizeIndex}
            selectQuantity={this.selectQuantity}
          />
          <button id="overviewAddToCartButton">Add To Cart</button>
        </div>
      );
    }
    return null;
  }
}

export default AddToCart;
