import React from 'react';
import OutfitCard from './OutfitCard';

class OutfitList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render () {
    return (
      <div>
        <h2>Your Outfit</h2>
        <div className="productlistoutercontainer">
          <div className="productlistcontainer">
            <button>L</button>
            <OutfitCard />
            <OutfitCard />
            <OutfitCard />
            <OutfitCard />
            <button>R</button>
          </div>
        </div>
      </div>
    )
  }
}

export default OutfitList;