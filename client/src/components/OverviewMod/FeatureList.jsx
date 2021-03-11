import React from 'react';

const FeatureList = ({ features }) => {
  let index = 0;
  if (features) {
    const listItems = features.map((feat) => {
      if (feat.value) {
        return <li key={feat.feature + index++}>{`${feat.feature}: ${feat.value}`}</li>;
      }
      return <li key={feat.feature + index++}>{feat.feature}</li>;
    });
    return <ul id="overviewFeatureList">{listItems}</ul>;
  }
  return <div id="overviewFeatureList"></div>;
};

export default FeatureList;
