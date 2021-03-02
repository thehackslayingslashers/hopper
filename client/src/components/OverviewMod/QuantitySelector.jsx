import React from 'react';

const QuantitySelector = ({ skus, selectedSizeIndex, selectQuantity }) => {
  if (selectedSizeIndex !== null) {
    let skuKeys = Object.keys(skus);
    // debugger;
    let quanty = skus[skuKeys[selectedSizeIndex]].quantity;
    let available = quanty > 15 ? 15 : quanty;
    let count = 1;
    let QuantitySelector = [];
    for (let i = 1; i <= available; i++) {
      QuantitySelector.push(<option value={count}>{count}</option>);
      count++;
    }
    return (
      <select id="overviewQuantitySelector" onChange={selectQuantity}>
        {QuantitySelector}
      </select>
    );
  } else {
    return (
      <select id="overviewQuantitySelector" onChange={selectQuantity}>
        <option value="">-</option>
        {QuantitySelector}
      </select>
    );
  }
};

export default QuantitySelector;
