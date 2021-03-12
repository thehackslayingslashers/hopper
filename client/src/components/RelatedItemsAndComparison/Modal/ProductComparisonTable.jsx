import React from 'react';
import { IoMdCloseCircle } from 'react-icons/io';

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

  renderTableData(feature, currentFeature, comparedFeature, counter) {
    if(currentFeature === null) {
      currentFeature = '✓';
    }
    if(comparedFeature === null) {
      comparedFeature = '✓';
    }
    return (
      <tr key={counter++}>
        <td key={currentFeature + counter++}>{currentFeature}</td>
        <td key={feature + counter++}><u><b>{feature}</b></u></td>
        <td key={comparedFeature + counter++}>{comparedFeature}</td>
      </tr>
    )
  }

  render() {
    const { currentItem, comparedItem, showModal, darkMode } = this.props;
    const { featuresList } = this.state;
    if (comparedItem !== {}) {
      const currentItemFeatures = this.getItemFeatures(currentItem.iteminfo.features);
      const comparedItemFeatures = this.getItemFeatures(comparedItem.iteminfo.features);
      let counter = 50;
      return (
        <div className={darkMode ? "comparisonmodal-inner darkMode" : "comparisonmodal-inner"}>
          <i className="cardIcon" onClick={showModal} >
            <IoMdCloseCircle size={36} />
          </i>

          <h2>
            Let&apos;s compare these two products!
          </h2>
          <table>
            <tbody>
              <tr>
                <th key={currentItem.iteminfo.name}><u><b>{currentItem.iteminfo.name}</b></u></th>
                <th key="comparedFeatures">                        </th>
                <th key={comparedItem.iteminfo.name}><u><b>{comparedItem.iteminfo.name}</b></u></th>
              </tr>
              {
                featuresList.map((feat) => {
                  counter += 5;
                  return (
                    this.renderTableData(feat, currentItemFeatures[feat], comparedItemFeatures[feat], counter)
                  );
                })

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
