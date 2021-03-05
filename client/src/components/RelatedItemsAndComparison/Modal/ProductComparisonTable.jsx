import React from 'react';

class ProductComparisonTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      featuresList: [],
      currentItemFeatures: [],
      comparedItemFeatures: [],
    };
    //here?
  }

  // getFeaturesList(features) {
  //   let featuresList =
  //   for(let i = 0; i < features.length; i++) {
  //     for(let j = 0; j < features[i].length; j++) {
  //       //grab keys
  //     }
  //   }
  // }

  renderTableData() {

  }

  render() {
    // this.getFeaturesList([this.props.currentFeatures, this.props.comparedItem.Features]);
    return (
      <div>
        Let's compare these two products!
        <div>
        <button onClick={this.props.showModal}>close</button>
        </div>
      </div>
    )
  }
};
export default ProductComparisonTable;
