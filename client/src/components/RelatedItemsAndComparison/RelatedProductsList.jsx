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
      slidePosition: 0,
    };
    this.handleCompareClick = this.handleCompareClick.bind(this);
    this.showModal = this.showModal.bind(this);
    this.handleLeftClick = this.handleLeftClick.bind(this);
    this.handleRightClick = this.handleRightClick.bind(this);
    this.handleResetCarousel = this.handleResetCarousel.bind(this);
  }

  handleResetCarousel() {
    const { slidePosition } = this.state;
    if (slidePosition >= 0) {
      const track = document.querySelector('.related-slide');
      track.style.transform = 'translateX(-' + 0 + 'px' + ')';
      this.setState({
        slidePosition: 0,
      });
    }
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

  handleLeftClick(e) {
    const { slidePosition } = this.state;
    const track = document.querySelector('.related-slide');
    if (slidePosition - 264 >= 0) {
      const newPosition = slidePosition - 264;
      track.style.transform = 'translateX(-' + newPosition + 'px' + ')';
      this.setState({
        slidePosition: newPosition,
      });
    }
  }

  handleRightClick() {
    const { slidePosition } = this.state;
    const { relatedProducts } = this.props;
    const track = document.querySelector('.related-slide');
    console.log(track)
    const numberOfCards = relatedProducts.length;
    console.log(numberOfCards)
    if (slidePosition + 264 <= (numberOfCards - 4) * 264) {
      const newPosition = slidePosition + 264;
      track.style.transform = 'translateX(-' + newPosition + 'px' + ')';
      this.setState({
        slidePosition: newPosition,
      });
    }
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
              <p className="carousel-left-button" onClick={this.handleLeftClick}><BiLeftArrow /></p>
            <div className="carousel-track">
              <div className="carousel-slide related-slide">
                {
                  relatedProducts.map((relatedProduct) => (
                    <RelatedProductCard
                      relatedProduct={relatedProduct}
                      handleCardClick={handleCardClick}
                      handleCompareClick={this.handleCompareClick}
                      handleResetCarousel={this.handleResetCarousel}
                      showModal={this.showModal}
                      key={relatedProduct.id}
                    />
                  ))
                }
              </div>
            </div>
            <p className="carousel-right-button" onClick={this.handleRightClick}><BiRightArrow /></p>
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
              <div className="carousel-slide related-slide">
                <RelatedProductCard />
                <RelatedProductCard />
                <RelatedProductCard />
              </div>
            </div>
            <p className="carousel-right-button" ><BiRightArrow /></p>
        </div>
      </div>
    );
  }
}

export default RelatedProductsList;
