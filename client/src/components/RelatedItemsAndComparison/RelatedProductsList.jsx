import React from 'react';
import RelatedProductCard from './RelatedProductCard';

class RelatedProductsList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render () {
    return (
      <div class="productlistcontainer">
        <button>L</button>
        <RelatedProductCard />
        <RelatedProductCard />
        <RelatedProductCard />
        <RelatedProductCard />
        <button>R</button>
      </div>
    )
  }
}

export default RelatedProductsList;