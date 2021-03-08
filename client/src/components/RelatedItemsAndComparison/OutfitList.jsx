import React from 'react';
import OutfitCard from './OutfitCard';
import AddOutfitCard from './AddOutfitCard';

class OutfitList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      outfitIds: [],
      outfits: [],
    };
    this.handleAddClick = this.handleAddClick.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
  }

  componentDidMount() {
    const storedOutfitIds = JSON.parse(window.localStorage.getItem('outfitIds'));
    const storedOutfits = JSON.parse(window.localStorage.getItem('outfits'));
    if (storedOutfits !== null) {
      storedOutfits.map((product) => {
        const currentPhoto = product.styles[0].photos[0];
        if (currentPhoto.url === null) {
          currentPhoto.url = 'https://www.luvbat.com/uploads/happy_frog__9265232477.jpg';
        } else if (currentPhoto.url[0] !== 'h') {
          currentPhoto.url = currentPhoto.url.substr(1);
        }
        return null;
      });
      this.setState({
        outfitIds: storedOutfitIds,
        outfits: storedOutfits,
      });
    }
  }

  handleAddClick() {
    const { outfitIds, outfits } = this.state;
    const { currentItem } = this.props;
    if (!outfitIds.includes(currentItem.id)) {
      this.setState((prevState) => {
        prevState.outfitIds.push(currentItem.id);
        prevState.outfits.push(currentItem);
        return {
          outfitIds: prevState.outfitIds,
          outfits: prevState.outfits,
        };
      }, () => {
        window.localStorage.setItem('outfitIds', JSON.stringify(outfitIds));
        window.localStorage.setItem('outfits', JSON.stringify(outfits));
      });
    }
  }

  handleDeleteClick(item, { outfitIds, outfits } = this.state) {
    if (outfitIds.includes(item.id)) {
      this.setState((prevState) => {
        const indexToDelete = prevState.outfitIds.indexOf(item.id);
        prevState.outfitIds.splice(indexToDelete, 1);
        prevState.outfits.splice(indexToDelete, 1);
        return {
          outfitIds: prevState.outfitIds,
          outfits: prevState.outfits,
        };
      }, () => {
        window.localStorage.setItem('outfitIds', JSON.stringify(outfitIds));
        window.localStorage.setItem('outfits', JSON.stringify(outfits));
      });
    }
  }

  render({ outfits } = this.state, { handleCardClick } = this.props) {
    return (
      <div>
        <h2>Your Outfit</h2>
        <div className="carousel-wrapper">
          <div className="carousel-slider">
          <button>L</button>
            <AddOutfitCard
              handleAddClick={this.handleAddClick}
            />
            {
              outfits.map((outfitItem) => (
                <OutfitCard
                  outfitItem={outfitItem}
                  handleDeleteClick={this.handleDeleteClick}
                  handleCardClick={handleCardClick}
                  key={'outfit' + outfitItem.id}
                />
              ))
            }
            <button>R</button>
          </div>
        </div>
      </div>
    );
  }
}

export default OutfitList;
