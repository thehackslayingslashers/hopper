import React from 'react';

const FeatureList = ({ features }) => {
  if (features) {
    let listItems = features.map((feat) => {
      if (feat.value) {
        return <li key={feat.feature}>{feat.feature + ': ' + feat.value}</li>;
      } else {
        return <li key={feat.feature}>{feat.feature}</li>;
      }
    });
    return <ul id="overviewFeatureList">{listItems}</ul>;
  } else {
    return <div id="overviewFeatureList">Loading</div>;
  }
};

export default FeatureList;
