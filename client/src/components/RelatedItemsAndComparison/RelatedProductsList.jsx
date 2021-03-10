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
    this.handleLeftClick = this.handleLeftClick.bind(this);
    this.handleRightClick = this.handleRightClick.bind(this);
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

  handleLeftClick() {
    const {
      relatedSlidePosition,
      handleRelatedSlideState,
    } = this.props;
    const track = document.querySelector('.related-slide');
    if (relatedSlidePosition - 264 >= 0) {
      const newPosition = relatedSlidePosition - 264;
      track.style.transform = 'translateX(-' + newPosition + 'px' + ')';
      handleRelatedSlideState(newPosition);
    }
  }

  handleRightClick() {
    const {
      relatedProducts,
      relatedSlidePosition,
      handleRelatedSlideState,
    } = this.props;
    const track = document.querySelector('.related-slide');
    const numberOfCards = relatedProducts.length;
    if (relatedSlidePosition + 264 <= (numberOfCards - 4) * 264) {
      const newPosition = relatedSlidePosition + 264;
      track.style.transform = 'translateX(-' + newPosition + 'px' + ')';
      handleRelatedSlideState(newPosition);
    }
  }

  render() {
    const { relatedProducts, currentItem, handleCardClick, relatedSlidePosition } = this.props;
    const { show, comparedItem } = this.state;

    let leftArrow = null;
    if (relatedSlidePosition !== 0) {
      leftArrow = <i className="carousel-left-button" onClick={this.handleLeftClick}><BiLeftArrow /></i>;
    }

    let rightArrow = null;
    const numberOfCards = relatedProducts.length;
    if (relatedSlidePosition + (4 * 264) < numberOfCards * 264) {
      rightArrow = <i className="carousel-right-button" onClick={this.handleRightClick}><BiRightArrow /></i>;
    }

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
              {leftArrow}
            <div className="carousel-track">
              <div className="carousel-slide related-slide">
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
            {rightArrow}
          </div>
        </div>
      );
    }
    return (
      <div>
        <h2>Related Products</h2>
        <div className="carousel-wrapper">
            {leftArrow}
            <div className="carousel-track">
              <div className="carousel-slide related-slide">
                <RelatedProductCard />
                <RelatedProductCard />
                <RelatedProductCard />
              </div>
            </div>
            {rightArrow}
        </div>
      </div>
    );
  }
}

export default RelatedProductsList;
