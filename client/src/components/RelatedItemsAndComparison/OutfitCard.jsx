import React from 'react';
import helpers from '../helpers';
import Stars from '../Stars';

class OutfitCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentItemAverageRating: 0,
    };
    this.calculateAverageCurrentItemRating = this.calculateAverageCurrentItemRating.bind(this);
  }

  componentDidMount() {
    this.calculateAverageCurrentItemRating();
  }

  calculateAverageCurrentItemRating() {
    const { outfitItem } = this.props;
    if (outfitItem.metaReview.ratings) {
      // console.log(outfitItem.metaReview.ratings);
      helpers.calculateAverageRating(outfitItem.metaReview.ratings, (avg) => {
        console.log(avg)
        // return avg;
        this.setState({
          currentItemAverageRating: avg,
        }, () => {
          console.log(this.state)
        })
      }
      );
    }
  }



  render() {
    const {
      outfitItem, handleDeleteClick, handleCardClick,
    } = this.props;
    const { currentItemAverageRating } = this.state;
    if (outfitItem) {
      // this.calculateAverageCurrentItemRating();

      let price = null;
      if (outfitItem.styles[0]) {
        if (outfitItem.styles[0].sale_price) {
          price = (
            <div>
              <span className="salePrice">
                {`$${outfitItem.styles[0].sale_price}`}
              </span>
              <span className="strikethrough">
                {`  $${outfitItem.styles[0].original_price}`}
              </span>
            </div>
          );
        } else {
          price = <div>{`$${outfitItem.styles[0].original_price}`}</div>;
        }
      }

      let rating = null;
      rating = (
        <div>
          <Stars rating={currentItemAverageRating} />
        </div>
      );

      return (
        <div className="card productcard">
          <button className="icon" onClick={()=> (handleDeleteClick(outfitItem))}>X</button>
          <div
            className="cardimage"
            style={{ backgroundImage: `url(${outfitItem.styles[0].photos[0].url})`}}
            onClick={() => handleCardClick(outfitItem.id)}
          />
          <div className="cardinfo" onClick={() => handleCardClick(outfitItem.id)}>
            {outfitItem.iteminfo.category.toUpperCase()}
            <p>{outfitItem.iteminfo.name}</p>
            {price}
            {rating}
            {/* <p>***** (stars)</p> */}
          </div>
        </div>
      );
    }
  }
}

export default OutfitCard;
