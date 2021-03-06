import React from 'react';
import helpers from '../helpers';
import Stars from '../Stars';

class RelatedProductCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentItemAverageRating: 0,
    };
    this.calculateAverageCurrentItemRating = this.calculateAverageCurrentItemRating.bind(this);
  }

  calculateAverageCurrentItemRating() {
    const { currentItemRatingInfo } = this.state;
    helpers.calculateAverageRating(currentItemRatingInfo.ratings, (avg) => {
      this.setState({
        currentItemAverageRating: avg,
      });
    });
  }

  render() {
    const { relatedProduct, handleCompareClick, handleCardClick } = this.props;
    if (relatedProduct) {
      let price = null;
      if (relatedProduct.styles[0]) {
        if (relatedProduct.styles[0].sale_price) {
          price = (
            <div>
              <span className="salePrice">
                {`$${relatedProduct.styles[0].sale_price}`}
              </span>
              <span className="strikethrough">
                {`  $${relatedProduct.styles[0].original_price}`}
              </span>
            </div>
          );
        } else {
          price = <div>{`$${relatedProduct.styles[0].original_price}`}</div>;
        }
      }
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
            onClick={() => handleCardClick(relatedProduct.id)}
          />
          <div className="cardinfo"  onClick={() => handleCardClick(relatedProduct.id)}>
            {relatedProduct.iteminfo.category.toUpperCase()}
            <p>{relatedProduct.iteminfo.name}</p>
            {/* {relatedProduct.styles[0].original_price} */}
            {price}
            <p>***** (stars)</p>
          </div>
        </div>
      );
    }
    return (
      <div className="card productcard">
        <div className="cardimage" />
        <div className="cardinfo">
          <h1> Now Loading </h1>
          <h3> Please wait patiently, like this frog.</h3>
        </div>
      </div>
    );
  }
}

export default RelatedProductCard;
