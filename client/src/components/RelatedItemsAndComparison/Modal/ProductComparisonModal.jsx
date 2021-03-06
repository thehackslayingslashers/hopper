import React from 'react';

class ProductComparisonModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    const { show, children } = this.props;
    if (!show) {
      return null;
    }
    return (
      <div>
        <div>{children}</div>
      </div>
    )
  }
}

export default ProductComparisonModal;
