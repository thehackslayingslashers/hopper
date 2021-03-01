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
        <div class="productlistcontainer">
          <button>L</button>
          <OutfitCard />
          <OutfitCard />
          <OutfitCard />
          <OutfitCard />
          <button>R</button>
        </div>
      </div>
    )
  }
}

export default OutfitList;