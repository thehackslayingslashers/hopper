import React from 'react';
import axios from 'axios';
import withClickTracker from '../withClickTracker';
import RelatedProductsList from './RelatedProductsList';
import OutfitList from './OutfitList';

class RelatedItemsAndComparison extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      relatedProducts: [],
      relatedSlidePosition: 0,
      outfitSlidePosition: 0,
    };

    this.handleCardClick = this.handleCardClick.bind(this);
    this.getRelatedProductsToCurrent = this.getRelatedProductsToCurrent.bind(this);
    this.handleResetCarousels = this.handleResetCarousels.bind(this);
    this.handleRelatedSlideState = this.handleRelatedSlideState.bind(this);
    this.handleOutfitSlideState = this.handleOutfitSlideState.bind(this);
  }

  componentDidMount() {
    this.getRelatedProductsToCurrent();
  }

  componentDidUpdate(prevProps) {
    const { currentItemId } = this.props;
    if (prevProps.currentItemId !== currentItemId) {
      this.getRelatedProductsToCurrent();
    }
  }

  handleCardClick(newId) {
    const { handleCardClickIdChange } = this.props;
    window.scrollTo({ top: 0, behavior: 'smooth' });
    handleCardClickIdChange(newId, this.getRelatedProductsToCurrent);
    this.handleResetCarousels();
  }

  handleResetCarousels() {
    const track1 = document.querySelector('.related-slide');
    track1.style.transform = 'translateX(-' + 0 + 'px' + ')';

    const track2 = document.querySelector('.outfit-slide');
    track2.style.transform = 'translateX(-' + 0 + 'px' + ')';

    this.setState({
      relatedSlidePosition: 0,
      outfitSlidePosition: 0,
    });
  }

  handleRelatedSlideState(newPosition) {
    this.setState({
      relatedSlidePosition: newPosition,
    });
  }

  handleOutfitSlideState(newPosition) {
    this.setState({
      outfitSlidePosition: newPosition,
    });
  }

  getRelatedProductsToCurrent() {
    const { currentItemId } = this.props;
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

  render() {
    const {
      currentItemId,
      currentItemInfo,
      currentItemRatingInfo,
      currentItemStyles,
      onClickAnywhere,
    } = this.props;
    const {
      relatedProducts,
      relatedSlidePosition,
      outfitSlidePosition,
    } = this.state;
    const currentItem = {
      id: currentItemId,
      iteminfo: currentItemInfo,
      metaReview: currentItemRatingInfo,
      styles: currentItemStyles,
    };
    return (
      <div onClick={onClickAnywhere}>
        <RelatedProductsList
          relatedProducts={relatedProducts}
          currentItem={currentItem}
          handleCardClick={this.handleCardClick}
          relatedSlidePosition={relatedSlidePosition}
          handleRelatedSlideState={this.handleRelatedSlideState}
        />
        <OutfitList
          currentItem={currentItem}
          handleCardClick={this.handleCardClick}
          outfitSlidePosition={outfitSlidePosition}
          handleOutfitSlideState={this.handleOutfitSlideState}
        />
      </div>
    );
  }
}

export default withClickTracker(RelatedItemsAndComparison);
