import React from 'react';

class ProductInformation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { currentItemInfo } = this.props;
    if (currentItemInfo.slogan) {
      return (
        <div id="overviewProductInformation">
          <h3>{currentItemInfo.slogan}</h3>
          <p>{currentItemInfo.description}</p>
        </div>
      );
    } else {
      return <div id="overviewProductInformation">Loading</div>;
    }
  }
}

export default ProductInformation;
