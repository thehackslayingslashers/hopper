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
      <div className="productlistoutercontainer">
        <button>L</button>
        <div className="productlistcontainer">
          <OutfitCard />
          <OutfitCard />
          <OutfitCard />
          <OutfitCard />
        </div>
        <button>R</button>
      </div>
    )
  }
}

export default OutfitList;