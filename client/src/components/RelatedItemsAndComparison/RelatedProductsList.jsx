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
      <div class="productlistoutercontainer">
        <button>L</button>
        <div class="productlistcontainer">
          <RelatedProductCard />
          <RelatedProductCard />
          <RelatedProductCard />
          <RelatedProductCard />
        </div>
        <button>R</button>
      </div>
    )
  }
}

export default RelatedProductsList;