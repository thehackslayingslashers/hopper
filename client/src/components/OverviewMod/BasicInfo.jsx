import React from 'react';
import Stars from '../Stars.jsx';

class BasicInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      currentItemInfo,
      currentItemAverageRating,
      currentItemStyles,
      selectedStyleIndex,
    } = this.props;

    let price = null;

    let rating = <p className="noReviews">No reviews yet</p>;

    if (currentItemAverageRating !== 'NaN') {
      rating = (
        <div>
          <Stars rating={currentItemAverageRating} />
          <span id="readAllReviews">
            {' '}
            <a href="#reviews">Read all reviews</a>
          </span>
        </div>
      );
    }

    if (currentItemStyles[selectedStyleIndex]) {
      if (currentItemStyles[selectedStyleIndex].sale_price) {
        price = (
          <div>
            <span className="salePrice">
              {'$' + currentItemStyles[selectedStyleIndex].sale_price}
            </span>
            <span className="strikethrough">
              {'  $' + currentItemStyles[selectedStyleIndex].original_price}
            </span>
          </div>
        );
      } else {
        price = <div>{'$' + currentItemStyles[selectedStyleIndex].original_price}</div>;
      }
    }

    if (currentItemInfo.name) {
      return (
        <div id="overviewBasicInfo">
          {rating}
          <p>{currentItemInfo.category.toUpperCase()}</p>
          <h1>{currentItemInfo.name}</h1>
          {price}
        </div>
      );
    } else {
      return <div id="overviewBasicInfo">Loading</div>;
    }
  }
}

export default BasicInfo;
