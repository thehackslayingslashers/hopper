import React from 'react';

const sizeSelector = ({ skus, selectSize, forceDropDown }) => {
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
    <select
      id="overviewSizeSelector"
      onChange={selectSize}
      style={forceDropDown ? {
        height: `${1.25 + 1.25 * sizesSelector.length}em`,
        zIndex: 50,
        color: '#f8f6f5',
        backgroundColor: '#0083a8',
        overflow: 'hidden',
      } : null}
      size={forceDropDown ? '10' : null}
    >
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
