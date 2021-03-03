import React from 'react';
import OutfitCard from './OutfitCard';
import AddOutfitCard from './AddOutfitCard';

class OutfitList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      outfitIds: [],
      outfits: []
    };
    this.handleAddClick = this.handleAddClick.bind(this);
  }

  handleAddClick () {
    if (!this.state.outfitIds.includes(this.props.currentItemId)) {
      this.setState((prevState) => {
        prevState.outfitIds.push(this.props.currentItemId);
        prevState.outfits.push(this.props.currentItemInfo);
        return {
          outfitIds: prevState.outfitIds,
          outfits: prevState.outfits
        }
      });
    }

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
                  <OutfitCard outfitItem={outfitItem} key={outfitItem.id}/>
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