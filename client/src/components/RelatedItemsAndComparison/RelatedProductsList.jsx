import React from 'react';
import RelatedProductCard from './RelatedProductCard';
import ProductComparisonModal from './Modal/ProductComparisonModal';
import ProductComparisonTable from './Modal/ProductComparisonTable';

class RelatedProductsList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      comparedItem: {},
    };
    this.handleCompareClick = this.handleCompareClick.bind(this);
    this.showModal = this.showModal.bind(this);
  }

  handleCompareClick(item) {
    this.setState({
      comparedItem: item,
    }, () => {
      this.showModal();
    });
  }

  showModal() {
    this.setState({
      show: !this.state.show
    });
  }

  render() {
    // console.log(this.props.currentItem)
    // console.log(this.state.comparedItem)
    return (
      <div>
        <ProductComparisonModal
        showModal={this.showModal}
        show={this.state.show}
        key={'productComparisonModal'}
        >
        <div className="comparisonmodal">
          <ProductComparisonTable
          currentItem={this.props.currentItem}
          comparedItem={this.state.comparedItem}
          showModal={this.showModal}
          key={'ProductComparisonTable'}
          />
        </div>
        </ProductComparisonModal>
        <h2>Related Products</h2>
        <div className="productlistoutercontainer">
          <div className="productlistcontainer">
            <button>L</button>
            {
              this.props.relatedProducts.map((relatedProduct) => (
                <RelatedProductCard
                  relatedProduct={relatedProduct}
                  handleCardClick={this.props.handleCardClick}
                  handleCompareClick={this.handleCompareClick}
                  showModal={this.showModal}
                  key={relatedProduct.id}
                />
              ))
            }
            <button>R</button>
          </div>
        </div>
      </div>
    );
  }
}

export default RelatedProductsList;