import React from 'react';
import { IoMdCloseCircle } from 'react-icons/io';
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
      helpers.calculateAverageRating(outfitItem.metaReview.ratings, (avg) => {
        this.setState({
          currentItemAverageRating: avg,
        });
      });
    }
  }

  render() {
    const {
      outfitItem,
      handleDeleteClick,
      handleCardClick,
      handleResetCarousel,
    } = this.props;
    const { currentItemAverageRating } = this.state;
    if (outfitItem) {
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
      if (currentItemAverageRating >= 0) {
        rating = (
          <div>
            <Stars rating={currentItemAverageRating} />
          </div>
        );
      }

      return (
        <div className="card productcard">
          <i className="cardIcon deleteIcon" onClick={()=> (handleDeleteClick(outfitItem))}>
            <IoMdCloseCircle size={36}/>
          </i>
          <div
            className="cardimage"
            style={{ backgroundImage: `url(${outfitItem.styles[0].photos[0].url})`}}
            onClick={() => {
              handleCardClick(outfitItem.id);
            }}
          />
          <div className="cardinfo" onClick={() => {
              handleCardClick(outfitItem.id);
            }}>
            {outfitItem.iteminfo.category.toUpperCase()}
            <p>{outfitItem.iteminfo.name}</p>
            {price}
            {rating}
          </div>
        </div>
      );
    }
    return null;
  }
}

export default OutfitCard;
