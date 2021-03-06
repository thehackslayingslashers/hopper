import React from 'react';

class ProductComparisonModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <div>
        <div>{this.props.children}</div>
      </div>
    )
  }
}

export default ProductComparisonModal;
