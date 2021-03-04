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
      <div className="card productcard">
        <div className="icon"><i>star</i>
        </div>
        <div className="cardimage"  onClick={() => this.props.handleCardClick(product.id)}></div>
        <div className="cardinfo"  onClick={() => this.props.handleCardClick(product.id)}>
          {product.category.toUpperCase()}
          <p>{product.name}</p>
          {product.default_price}
          <p>***** (stars)</p>
        </div>
      </div>
    )
  }
}

export default RelatedProductCard;