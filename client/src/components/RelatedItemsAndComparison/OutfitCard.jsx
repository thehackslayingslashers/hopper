import React from 'react';

class OutfitCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render () {
    return (
      <div className="productcard">
        <div className="cardimage"></div>
          CATEGORY
            <p>Expanded Product Name With Extra Text</p>
            Price
            <p>***** (stars)</p>
      </div>
    )
  }
}

export default OutfitCard;