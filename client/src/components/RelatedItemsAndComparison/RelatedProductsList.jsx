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
      <div className="productlistoutercontainer">
        <button>L</button>
        <div className="productlistcontainer">
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