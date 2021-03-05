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

  handleCardClick(newId) {
    this.props.handleCardClickIdChange(newId, this.getRelatedProductsToCurrent);
  }

  getRelatedProductsToCurrent() {
    axios
      .get(`/products/${this.props.currentItemId}/related`)
      .then((data) => {
        this.setState({
          relatedProducts: data.data
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    let currentItem = {
      id: this.props.currentItemId,
      iteminfo: this.props.currentItemInfo,
      metaReview: this.props.currentItemRatingInfo,
      styles: this.props.currentItemStyles,
    };
    return (
      <div>
        <RelatedProductsList
          relatedProducts={this.state.relatedProducts}
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
