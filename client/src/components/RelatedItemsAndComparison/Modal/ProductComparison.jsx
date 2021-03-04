import React from 'react';

class ProductComparison extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
    this.onClose = this.onClose.bind(this);
  }

  onClose() {
    this.props.onClose();
  }

  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <div>
        <div>{this.props.children}</div>
        <div>
          <button onClick={this.onClose}>
            Close
          </button>
        </div>
      </div>
    )
  }

}

export default ProductComparison;
