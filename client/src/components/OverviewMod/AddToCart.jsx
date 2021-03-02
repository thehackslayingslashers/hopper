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
    if (Number(e.currentTarget.value) >= 0) {
      this.setState({
        selectedSizeIndex: e.currentTarget.value,
        selectedQuantity: this.state.selectedQuantity || '1',
      });
    } else {
      this.setState({
        selectedSize: '',
        selectedSizeIndex: null,
        selectedQuantity: '',
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
    let button = null;

    if (Number(this.state.selectedQuantity)) {
      button = (
        <button id="overviewAddToCartButton">
          <span>ADD TO BAG</span>
          <span id="addToCartPlus">+</span>
        </button>
      );
    }

    if (currentItemStyles[0]) {
      let skus = currentItemStyles[selectedStyleIndex].skus;

      return (
        <div id="overviewAddToCart">
          <SizeSelector skus={skus} selectSize={this.selectSize} />
          <QuantitySelector
            skus={skus}
            selectedSizeIndex={this.state.selectedSizeIndex}
            selectQuantity={this.selectQuantity}
          />
          {button}
        </div>
      );
    }
    return <div id="overviewAddToCart">Loading</div>;
  }
}

export default AddToCart;
