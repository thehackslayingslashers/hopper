import React from 'react';
import RelatedProductsList from './RelatedProductsList';
import OutfitList from './OutfitList';
import axios from 'axios';

class RelatedItemsAndComparison extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  // axios
  //   .get

  render () {
    return (
      <div>
        <RelatedProductsList />
        <OutfitList />
      </div>
    );
  }
}

export default RelatedItemsAndComparison;