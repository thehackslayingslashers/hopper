import React from 'react';
import SizeSelector from './SizeSelector';
import QuantitySelector from './QuantitySelector';

class AddToCart extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedSizeIndex: null,
      selectedQuantity: '',
      addedToCart: false,
      wronglyclicked: false,
    };
    this.selectSize = this.selectSize.bind(this);
    this.selectQuantity = this.selectQuantity.bind(this);
    this.handleAddToCart = this.handleAddToCart.bind(this);
    this.revertAddToCart = this.revertAddToCart.bind(this);
  }

  handleAddToCart() {
    const { selectedSizeIndex } = this.state;
    if (selectedSizeIndex) {
      // add to cart???????
      this.setState(
        {
          addedToCart: true,
        },
        () => {
          setTimeout(this.revertAddToCart, 1000);
        },
      );
    } else {
      // open select size drop down??????
      this.setState(
        {
          wronglyclicked: true,
        },
        () => {
          setTimeout(this.revertAddToCart, 1000);
        },
      );
    }
  }

  selectQuantity(e) {
    const quant = e.target.value;
    this.setState({
      selectedQuantity: quant,
    });
  }

  selectSize(e) {
    const { selectedQuantity } = this.state;
    if (Number(e.currentTarget.value) >= 0) {
      this.setState({
        selectedSizeIndex: e.currentTarget.value,
        selectedQuantity: selectedQuantity || '1',
      });
    } else {
      this.setState({
        selectedSizeIndex: null,
        selectedQuantity: '',
      });
    }
  }

  revertAddToCart() {
    this.setState({
      wronglyclicked: false,
      addedToCart: false,
    });
  }

  render() {
    const { currentItemStyles, selectedStyleIndex } = this.props;
    const { wronglyclicked, selectedSizeIndex } = this.state;

    if (currentItemStyles[0]) {
      const { skus } = currentItemStyles[selectedStyleIndex];
      const skuKeys = Object.keys(skus);
      let button = null;

      let available = false;
      for (let i = 0; i < skuKeys.length && !available; i++) {
        if (skus[skuKeys[i]].quantity > 0) {
          available = true;
        }
      }

      if (available) {
        if (wronglyclicked) {
          button = (
            <button type="submit" id="overviewAddToCartButton">
              <span>PLEASE SELECT SIZE</span>
              <span id="addToCartPlus">+</span>
            </button>
          );
        } else if (this.state.addedToCart) {
          button = (
            <button type="submit" id="overviewAddToCartButton">
              <span>ADDED TO BAG</span>
              <span id="addToCartPlus">+</span>
            </button>
          );
        } else {
          button = (
            <button type="submit" id="overviewAddToCartButton" onClick={this.handleAddToCart}>
              <span>ADD TO BAG</span>
              <span id="addToCartPlus">+</span>
            </button>
          );
        }
      }

      return (
        <div id="overviewAddToCart">
          <SizeSelector skus={skus} selectSize={this.selectSize} />
          <QuantitySelector
            skus={skus}
            selectedSizeIndex={selectedSizeIndex}
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
