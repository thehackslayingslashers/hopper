import React from 'react';

class OutfitCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render () {
    return (
      <div class="productcard">
        <div class="cardimage"></div>
          CATEGORY
            <p>Expanded Product Name With Extra Text</p>
            Price
            <p>***** (stars)</p>
      </div>
    )
  }
}

export default OutfitCard;