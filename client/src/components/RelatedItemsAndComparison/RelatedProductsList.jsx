import React from 'react';
import { BiRightArrow, BiLeftArrow } from 'react-icons/bi';
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
              <p className="carousel-left-button"><BiLeftArrow /></p>
            <div className="carousel-track">
              <div className="carousel-slide">
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
            </div>
            <p className="carousel-right-button"><BiRightArrow /></p>
          </div>
        </div>
      );
    }
    return (
      <div>
        <h2>Related Products</h2>
        <div className="carousel-wrapper">
            <p className="carousel-left-button"><BiLeftArrow /></p>
            <div className="carousel-track">
              <div className="carousel-slide">
                <RelatedProductCard />
                <RelatedProductCard />
                <RelatedProductCard />
              </div>
            </div>
            <p className="carousel-right-button"><BiRightArrow /></p>
        </div>
      </div>
    );
  }
}

export default RelatedProductsList;
