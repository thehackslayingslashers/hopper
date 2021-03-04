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
  componentDidMount() {
    let storedOutfitIds = JSON.parse(window.localStorage.getItem('outfitIds'));
    let storedOutfits = JSON.parse(window.localStorage.getItem('outfits'));
    if (storedOutfits !== null) {
      this.setState({
        outfitIds: storedOutfitIds,
        outfits: storedOutfits
      });
    }
  }

  handleAddClick() {
    if (!this.state.outfitIds.includes(this.props.currentItem.id)) {
      this.setState((prevState) => {
        prevState.outfitIds.push(this.props.currentItem.id);
        prevState.outfits.push(this.props.currentItem);
        console.log(prevState)
        return {
          outfitIds: prevState.outfitIds,
          outfits: prevState.outfits,
        };
      }, () => {
        console.log(this.state)
        window.localStorage.setItem('outfitIds', JSON.stringify(this.state.outfitIds));
        window.localStorage.setItem('outfits', JSON.stringify(this.state.outfits));
      });
    }
  }

  handleDeleteClick(item) {
    if (this.state.outfitIds.includes(item.id)) {
      this.setState((prevState) => {
        const indexToDelete = prevState.outfitIds.indexOf(item.id);
        prevState.outfitIds.splice(indexToDelete, 1);
        prevState.outfits.splice(indexToDelete, 1);
        return {
          outfitIds: prevState.outfitIds,
          outfits: prevState.outfits,
        };
      }, () => {
        window.localStorage.setItem('outfitIds', JSON.stringify(this.state.outfitIds));
        window.localStorage.setItem('outfits', JSON.stringify(this.state.outfits));
      });
    }
  }

  render() {
    let outfits = this.state.outfits;
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
              outfits.map((outfitItem) => {
                return (
                  <OutfitCard
                  outfitItem={outfitItem}
                  handleDeleteClick={this.handleDeleteClick}
                  handleCardClick={this.props.handleCardClick}
                  key={'outfit' + outfitItem.id}
                  />
                )
              })
            }
            <button>R</button>
          </div>
        </div>
      </div>
    );
  }
}

export default OutfitList;