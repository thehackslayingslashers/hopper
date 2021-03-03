import React from 'react';
import RelatedProductsList from './RelatedProductsList';
import OutfitList from './OutfitList';
import axios from 'axios';

class RelatedItemsAndComparison extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      relatedProducts: []
    };

    this.handleCardClick = this.handleCardClick.bind(this);
    this.getRelatedProductsToCurrent = this.getRelatedProductsToCurrent.bind(this);
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
        console.log(error);
      })
  }

  componentDidMount() {
    this.getRelatedProductsToCurrent();
  }

  render () {
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