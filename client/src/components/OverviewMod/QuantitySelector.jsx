import React from 'react';

const QuantitySelector = ({ skus, selectedSizeIndex, selectQuantity }) => {
  let quantitySelec = [];
  if (selectedSizeIndex !== null) {
    let skuKeys = Object.keys(skus);
    // debugger;
    let quanty = skus[skuKeys[selectedSizeIndex]].quantity;
    let available = quanty > 15 ? 15 : quanty;
    let count = 1;
    for (let i = 1; i <= available; i++) {
      quantitySelec.push(<option value={count}>{count}</option>);
      count++;
    }
    return (
      <select id="overviewQuantitySelector" onChange={selectQuantity}>
        {quantitySelec}
      </select>
    );
  } else {
    return (
      <select id="overviewQuantitySelector" onChange={selectQuantity} disabled>
        <option value="">-</option>
        {quantitySelec}
      </select>
    );
  }
};

export default QuantitySelector;
