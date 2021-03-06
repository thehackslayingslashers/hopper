import React from 'react';
import axios from 'axios';
import RelatedProductsList from './RelatedProductsList';
import OutfitList from './OutfitList';

class RelatedItemsAndComparison extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      relatedProducts: []
    };

    this.handleCardClick = this.handleCardClick.bind(this);
    this.getRelatedProductsToCurrent = this.getRelatedProductsToCurrent.bind(this);
  }

  componentDidMount() {
    this.getRelatedProductsToCurrent();
  }

  handleCardClick(newId, { handleCardClickIdChange } = this.props) {
    handleCardClickIdChange(newId, this.getRelatedProductsToCurrent);
  }

  getRelatedProductsToCurrent({ currentItemId } = this.props) {
    axios
      .get(`/products/${currentItemId}/related`)
      .then((data) => {
        const receivedProducts = data.data;
        receivedProducts.map((product) => {
          const currentPhoto = product.styles[0].photos[0];
          if (currentPhoto.url === null) {
            currentPhoto.url = 'https://www.luvbat.com/uploads/happy_frog__9265232477.jpg';
          } else if (currentPhoto.url[0] !== 'h') {
            currentPhoto.url = currentPhoto.url.substr(1);
          }
          return null;
        });
        this.setState({
          relatedProducts: receivedProducts,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render({
    currentItemId, currentItemInfo, currentItemRatingInfo, currentItemStyles,
  } = this.props,
  {
    relatedProducts,
  } = this.state) {
    const currentItem = {
      id: currentItemId,
      iteminfo: currentItemInfo,
      metaReview: currentItemRatingInfo,
      styles: currentItemStyles,
    };
    return (
      <div>
        <RelatedProductsList
          relatedProducts={relatedProducts}
          currentItem={currentItem}
          handleCardClick={this.handleCardClick}
        />
        <OutfitList
          currentItem={currentItem}
          handleCardClick={this.handleCardClick}
        />
      </div>
    );
  }
}

export default RelatedItemsAndComparison;
