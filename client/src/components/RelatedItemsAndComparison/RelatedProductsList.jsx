import React from 'react';
import RelatedProductCard from './RelatedProductCard';
import ProductComparison from './Modal/ProductComparison';

class RelatedProductsList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false
    };
    this.handleCompareClick = this.handleCompareClick.bind(this);
    this.showModal = this.showModal.bind(this);
  }

  handleCompareClick(item) {
    console.log('clicked')
    console.log(item)
    this.showModal()
  }

  showModal() {
    this.setState({
      show: !this.state.show
    });
  }

  render() {
    return (
      <div>
        <ProductComparison onClose={this.showModal} show={this.state.show}>
          Modal message!!!!
        </ProductComparison>
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
                    handleCompareClick={this.handleCompareClick}
                    showModal={this.showModal}
                    key={relatedProduct.id}
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