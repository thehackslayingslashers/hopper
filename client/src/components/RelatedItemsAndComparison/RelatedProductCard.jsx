import React from 'react';

class RelatedProductCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
    this.onCardClick = this.onCardClick.bind(this);
  }

  onCardClick(e) {
    this.props.handleCardClick(this.props.relatedProduct.id);
  }

  render () {

    let product = this.props.relatedProduct;
    return (
      <div className="productcard" onClick={this.onCardClick}>
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