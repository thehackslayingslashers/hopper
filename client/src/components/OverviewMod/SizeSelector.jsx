import React from 'react';

const sizeSelector = ({ skus, selectSize }) => {
  const skuKeys = Object.keys(skus);

  let index = 0;
  const sizesSelector = skuKeys.map((sku) => {
    if (skus[sku] && skus[sku].quantity > 0) {
      return (
        <option key={index} value={index++}>
          {skus[sku].size}
        </option>
      );
    }
    index++;
    return null;
  });
  return sizesSelector.length > 1 ? (
    <select id="overviewSizeSelector" onChange={selectSize}>
      <option value={null}>SELECT SIZE</option>
      {sizesSelector}
    </select>
  ) : (
    <select id="overviewSizeSelector" disabled>
      <option value={null}>OUT OF STOCK</option>
    </select>
  );
};

export default sizeSelector;
