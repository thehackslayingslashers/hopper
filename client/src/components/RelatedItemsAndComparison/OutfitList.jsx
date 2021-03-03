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
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
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
      }, () => {
        //update local storage
        window.localStorage.setItem('outfitIds', JSON.stringify(this.state.outfitIds));
        window.localStorage.setItem('outfits', JSON.stringify(this.state.outfits));
      });
    }
  }

  handleDeleteClick (item) {
    if (this.state.outfitIds.includes(item.id)) {
      console.log(item.id)
      this.setState((prevState) => {
        prevState.outfitIds.splice(prevState.outfitIds.indexOf(item.id), 1);
        prevState.outfits.splice(prevState.outfitIds.indexOf(item), 1);
        return {
          outfitIds: prevState.outfitIds,
          outfits: prevState.outfits
        }
      }, () => {
        window.localStorage.setItem('outfitIds', JSON.stringify(this.state.outfitIds));
        window.localStorage.setItem('outfits', JSON.stringify(this.state.outfits));
      });
    }

  }

  componentDidMount () {
    //load up the local storage stuff
    let storedOutfitIds = JSON.parse(window.localStorage.getItem('outfitIds'));
    let storedOutfits = JSON.parse(window.localStorage.getItem('outfits'));
    this.setState({
      outfitIds: storedOutfitIds,
      outfits: storedOutfits
    });
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
                  <OutfitCard
                  outfitItem={outfitItem}
                  handleDeleteClick={this.handleDeleteClick}
                  handleCardClick={this.props.handleCardClick}
                  key={'outfit' + outfitItem.id}
                  />
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