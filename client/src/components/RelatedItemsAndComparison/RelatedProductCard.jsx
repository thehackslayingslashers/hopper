import React from 'react';

class RelatedProductCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render () {
    let product = this.props.relatedProduct;
    return (
      <div className="productcard">
        <div className="cardimage"></div>
        {product.category}
          <p>{product.name}</p>
          {product.default_price}
          <p>***** (stars)</p>
      </div>
    )
  }
}

export default RelatedProductCard;