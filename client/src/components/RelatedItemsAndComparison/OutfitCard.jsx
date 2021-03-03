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
      <div className="card productcard" onClick={this.onCardClick}>
        <div className="cardimage"></div>
        <div className="cardinfo">
          {product.category}
          <p>{product.name}</p>
          {product.default_price}
          <p>***** (stars)</p>
        </div>
      </div>

      // <div className="card productcard">
      //   <div className="cardimage"></div>
      //   <div className="cardinfo">
      //       CATEGORY
      //       <p>Expanded Product Name With Extra Text</p>
      //       Price
      //       <p>***** (stars)</p>
      //   </div>
      // </div>
    )
  }
}

export default OutfitCard;