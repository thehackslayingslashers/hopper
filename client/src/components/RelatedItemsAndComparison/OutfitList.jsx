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
        This is a fancy carousel of outfits.
        <OutfitCard />
        <OutfitCard />
      </div>
    )
  }
}

export default OutfitList;