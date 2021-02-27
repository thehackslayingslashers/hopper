import React from 'react';
import RelatedProductsList from './RelatedProductsList';
import OutfitList from './OutfitList';

class RelatedItemsAndComparison extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

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