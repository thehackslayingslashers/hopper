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
  }

  getRelatedProductsToCurrent(id) {
    axios
      .get(`/products/${id}/related`)
      .then((data) => {
        //will need to add rating for each item
        // console.log(data.data);
        this.setState({
          relatedProducts: data.data
        }, () => {
          console.log(this.state.relatedProducts);
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  componentDidMount() {
    this.getRelatedProductsToCurrent(this.props.currentItemId);
  }

  render () {
    return (
      <div>
        <RelatedProductsList relatedProducts={this.state.relatedProducts}/>
        <OutfitList />
      </div>
    );
  }
}

export default RelatedItemsAndComparison;