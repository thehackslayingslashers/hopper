import React from 'react';

const sizeSelector = ({ skus, selectSize }) => {
  let skuKeys = Object.keys(skus);
  let index = 0;
  let sizeSelector = skuKeys.map((sku) => {
    return <option value={index++}>{skus[sku].size}</option>;
  });
  return (
    <select id="overviewSizeSelector" onChange={selectSize}>
      <option value={null}>Select Size</option>
      {sizeSelector}
    </select>
  );
};

export default sizeSelector;
