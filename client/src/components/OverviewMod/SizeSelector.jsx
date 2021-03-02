import React from 'react';

const sizeSelector = ({ skus, selectSize }) => {
  let skuKeys = Object.keys(skus);

  let index = 0;
  let sizeSelector = skuKeys.map((sku) => {
    // debugger;
    if (skus[sku].quantity > 0) {
      return (
        <option key={index} value={index++}>
          {skus[sku].size}
        </option>
      );
    } else {
      index++;
      return null;
    }
  });
  return sizeSelector.length >= 1 ? (
    <select id="overviewSizeSelector" onChange={selectSize}>
      <option value={null}>SELECT SIZE</option>
      {sizeSelector}
    </select>
  ) : (
    <select id="overviewSizeSelector" disabled>
      <option value={null}>OUT OF STOCK</option>
    </select>
  );
};

export default sizeSelector;
