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
    const { show } = this.state;
    this.setState({
      show: !show,
    });
  }

  render() {
    const { relatedProducts, currentItem, handleCardClick } = this.props;
    const { show, comparedItem } = this.state;

    if (relatedProducts.length > 0) {
      return (
        <div>
          <ProductComparisonModal
            showModal={this.showModal}
            show={show}
            key="productComparisonModal"
          >
            <div className="comparisonmodal">
              <ProductComparisonTable
                currentItem={currentItem}
                comparedItem={comparedItem}
                showModal={this.showModal}
                key="ProductComparisonTable"
              />
            </div>
          </ProductComparisonModal>
          <h2>Related Products</h2>
          <div className="productlistoutercontainer">
            <div className="productlistcontainer">
              <button>L</button>
              {
                relatedProducts.map((relatedProduct) => (
                  <RelatedProductCard
                    relatedProduct={relatedProduct}
                    handleCardClick={handleCardClick}
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
    return (
      <div>
        <h2>Related Products</h2>
        <div className="productlistoutercontainer">
          <div className="productlistcontainer">
            <button>L</button>
            <RelatedProductCard />
            <RelatedProductCard />
            <RelatedProductCard />
            <button>R</button>
          </div>
        </div>
      </div>
    );
  }
}

export default RelatedProductsList;
