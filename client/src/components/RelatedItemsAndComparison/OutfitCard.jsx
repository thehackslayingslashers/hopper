import React from 'react';

class OutfitCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    const product = this.props.outfitItem;
    return (
      <div className="card productcard">
        <button className="icon" onClick={()=> (this.props.handleDeleteClick(this.props.outfitItem))}>X</button>
        <div
          className="cardimage"
          style={{ backgroundImage: `url(${product.styles[0].photos[0].url})`}}
          onClick={() => this.props.handleCardClick(product.id)}>
          </div>
        <div className="cardinfo"  onClick={() => this.props.handleCardClick(product.id)}>
          {product.iteminfo.category.toUpperCase()}
          <p>{product.iteminfo.name}</p>
          {product.styles[0].original_price}
          <p>***** (stars)</p>
        </div>
      </div>
    );
  }
}

export default OutfitCard;
