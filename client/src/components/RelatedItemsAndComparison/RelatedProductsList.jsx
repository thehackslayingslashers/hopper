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
      <div>
        This is a fancy Related Products Carousel.
        <RelatedProductCard />
        <RelatedProductCard />
      </div>
    )
  }
}

export default RelatedProductsList;