import React from 'react';

class OutfitCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render () {
    let product = this.props.outfitItem;
    return (
      <div className="card productcard" onClick={this.props.onCardClick}>
        <button className="icon" onClick={()=> (this.props.handleDeleteClick(this.props.outfitItem))}>X</button>
        <div className="cardimage"></div>
        <div className="cardinfo">
          {product.category.toUpperCase()}
          <p>{product.name}</p>
          {product.default_price}
          <p>***** (stars)</p>
        </div>
      </div>
    )
  }
}

export default OutfitCard;