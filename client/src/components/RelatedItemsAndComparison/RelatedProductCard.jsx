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
      <div className="card productcard" onClick={this.onCardClick}>
        <div className="cardimage"></div>
        <div className="cardinfo">
          {product.category}
          <p>{product.name}</p>
          {product.default_price}
          <p>***** (stars)</p>
        </div>
      </div>
    )
  }
}

export default RelatedProductCard;