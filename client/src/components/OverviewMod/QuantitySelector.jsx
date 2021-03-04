import React from 'react';

const QuantitySelector = ({ skus, selectedSizeIndex, selectQuantity }) => {
  const quantitySelec = [];
  if (selectedSizeIndex !== null) {
    const skuKeys = Object.keys(skus);
    const quanty = skus[skuKeys[selectedSizeIndex]].quantity;
    const available = quanty > 15 ? 15 : quanty;
    let count = 1;

    for (let i = 1; i <= available; i++) {
      quantitySelec.push(<option key={`select${count}`} value={count}>{count}</option>);
      count++;
    }
    return (
      <select key="quantselec" id="overviewQuantitySelector" onChange={selectQuantity}>
        {quantitySelec}
      </select>
    );
  }
  return (
    <select key="quantseleccont" id="overviewQuantitySelector" onChange={selectQuantity} disabled>
      <option key="-" value="">-</option>
    </select>
  );
};

export default QuantitySelector;
