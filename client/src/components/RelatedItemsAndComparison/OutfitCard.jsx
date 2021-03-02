import React from 'react';

class OutfitCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render () {
    return (
      <div className="card productcard">
        <div className="cardimage"></div>
        <div className="cardinfo">
            CATEGORY
            <p>Expanded Product Name With Extra Text</p>
            Price
            <p>***** (stars)</p>
        </div>
      </div>
    )
  }
}

export default OutfitCard;