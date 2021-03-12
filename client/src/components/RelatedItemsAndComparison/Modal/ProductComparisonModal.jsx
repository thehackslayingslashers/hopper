import React from 'react';
import ProductComparisonTable from './ProductComparisonTable';

class ProductComparisonModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    const {
      show,
      currentItem,
      comparedItem,
      showModal,
      darkMode
    } = this.props;
    if (!show) {
      return null;
    }
    return (
      <div className="comparisonmodal">
        <ProductComparisonTable
          currentItem={currentItem}
          comparedItem={comparedItem}
          showModal={showModal}
          key="ProductComparisonTable"
          darkMode={darkMode}
        />
      </div>
    );
  }
}

export default ProductComparisonModal;
