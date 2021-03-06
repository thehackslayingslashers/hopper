import React from 'react';

class RelatedProductCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    const { relatedProduct, handleCompareClick, handleCardClick } = this.props;
    return (
      <div className="card productcard">
        <button
        className="icon"
        onClick={() => handleCompareClick(relatedProduct)}
        >*
        </button>
        <div
          className="cardimage"
          style={
            { backgroundImage: `url(${relatedProduct.styles[0].photos[0].url})`}
          }
          onClick={() => handleCardClick(relatedProduct.id)}>
        </div>
        <div className="cardinfo"  onClick={() => handleCardClick(relatedProduct.id)}>
          {relatedProduct.iteminfo.category.toUpperCase()}
          <p>{relatedProduct.iteminfo.name}</p>
          {relatedProduct.styles[0].original_price}
          <p>***** (stars)</p>
        </div>
      </div>
    );
  }
}

export default RelatedProductCard;