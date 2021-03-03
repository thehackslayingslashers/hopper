import React from 'react';
import OutfitCard from './OutfitCard';
import AddOutfitCard from './AddOutfitCard';

class OutfitList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      outfits: [1]
    };
    this.handleAddClick = this.handleAddClick.bind(this);
  }

  handleAddClick (e) {
    console.log('clicked add card!')
  }

  render () {
    return (
      <div>
        <h2>Your Outfit</h2>
        <div className="productlistoutercontainer">
          <div className="productlistcontainer">
            <button>L</button>
            <AddOutfitCard
            handleAddClick={this.handleAddClick}
            />
            {
              this.state.outfits.map((outfitItem) => {
                return (
                  <OutfitCard />
                );
              })
            }
            <button>R</button>
          </div>
        </div>
      </div>
    )
  }
}

export default OutfitList;