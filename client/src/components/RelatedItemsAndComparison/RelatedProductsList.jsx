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
          <div className="carousel-wrapper">
              <button className="carousel-left-button">L</button>
            <div className="carousel-slider">
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
            </div>
              <button className="carousel-right-button">R</button>
          </div>
        </div>
      );
    }
    return (
      <div>
        <h2>Related Products</h2>
        <div className="carousel-wrapper">
            <button className="carousel-left-button">L</button>
          <div className="carousel-slider">
            <RelatedProductCard />
            <RelatedProductCard />
            <RelatedProductCard />
          </div>
            <button className="carousel-right-button">R</button>
        </div>
      </div>
    );
  }
}

export default RelatedProductsList;
