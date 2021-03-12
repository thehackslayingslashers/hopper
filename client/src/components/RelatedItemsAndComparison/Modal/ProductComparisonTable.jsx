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
      const feature = itemFeaturesArr[i];
      itemFeatures[feature.feature] = feature.value;
    }
    return itemFeatures;
  }

  renderTableData(feature, currentFeature, comparedFeature) {
    if(currentFeature === null) {
      currentFeature = '✓';
    }
    if(comparedFeature === null) {
      comparedFeature = '✓';
    }
    return (
      <tr>
        <td>{currentFeature}</td>
        <td><u><b>{feature}</b></u></td>
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
        <div className="comparisonmodal-inner">

          <i className="fas fa-window-close fa-2x cardIcon" onClick={showModal}/>

          <h2>
            Let&apos;s compare these two products!
          </h2>
          <table>
            <tbody>
              <tr>
                <th><u><b>{currentItem.iteminfo.name}</b></u></th>
                <th>                        </th>
                <th><u><b>{comparedItem.iteminfo.name}</b></u></th>
              </tr>
              {
                featuresList.map((feat) => (
                  this.renderTableData(feat, currentItemFeatures[feat], comparedItemFeatures[feat])
                ))

              }
            </tbody>
          </table>
          <br />
        </div>
      );
    }
    return null;
  }
}
export default ProductComparisonTable;
