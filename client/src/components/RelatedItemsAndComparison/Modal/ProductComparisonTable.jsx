import React from 'react';

class ProductComparisonTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      featuresList: this.getFeaturesList(),
    };
  }

  getFeaturesList({ currentItem, comparedItem } = this.props) {
    const featuresList = [];
    const combinedFeatures = currentItem.iteminfo.features.concat(comparedItem.iteminfo.features);
    for (let i = 0; i < combinedFeatures.length; i++) {
      featuresList.push(combinedFeatures[i].feature);
    }
    return [...new Set(featuresList)];
  }

  getItemFeatures(itemFeaturesArr) {
    const itemFeatures = {};
    for (let i = 0; i < itemFeaturesArr.length; i++) {
      let feature = itemFeaturesArr[i];
      itemFeatures[feature.feature] = feature.value;
    }
    return itemFeatures;
  }

  renderTableData(feature, currentFeature, comparedFeature) {
    return (
      <tr>
        <td>{currentFeature}</td>
        <td>{feature}</td>
        <td>{comparedFeature}</td>
      </tr>
    )
  }

  render() {
    const { currentItem, comparedItem, showModal } = this.props;
    const { featuresList } = this.state;
    if (comparedItem !== {}) {
      const currentItemFeatures = this.getItemFeatures(currentItem.iteminfo.features);
      const comparedItemFeatures = this.getItemFeatures(comparedItem.iteminfo.features);
      return (
        <div>
          Let&apos;s compare these two products!
          <table>
            <tbody>
              <tr>
                <th>{currentItem.iteminfo.name}</th>
                <th>Feature</th>
                <th>{comparedItem.iteminfo.name}</th>
              </tr>
              {
                featuresList.map((feat) => (
                  this.renderTableData(feat, currentItemFeatures[feat], comparedItemFeatures[feat])
                ))

              }
            </tbody>
          </table>

          <div>
          <button onClick={showModal}>close</button>
          </div>
        </div>
      );
    }
    return null;
  }
};
export default ProductComparisonTable;
