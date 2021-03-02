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
        <h2>Related Products</h2>
        <div className="productlistoutercontainer">
          <div className="productlistcontainer">
            <button>L</button>
            {
              this.props.relatedProducts.map((relatedProduct) => {
                return(
                  <RelatedProductCard
                  relatedProduct={relatedProduct}
                  handleCardClick={this.props.handleCardClick}
                  />
                )
              })


            }


            <button>R</button>
          </div>
        </div>
      </div>
    )
  }
}

export default RelatedProductsList;