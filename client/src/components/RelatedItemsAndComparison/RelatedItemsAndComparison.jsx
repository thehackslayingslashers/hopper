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
    return (
      <div>
        <RelatedProductsList
          relatedProducts={this.state.relatedProducts}
          handleCardClick={this.handleCardClick}
        />
        <OutfitList
          currentItemId={this.props.currentItemId}
          currentItemInfo={this.props.currentItemInfo}
          currentItemStyles={this.props.currentItemStyles}
          handleCardClick={this.handleCardClick}
        />
      </div>
    );
  }
}

export default RelatedItemsAndComparison;