import React from 'react';

class OutfitCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    const {
      outfitItem, handleDeleteClick, handleCardClick,
    } = this.props;
    return (
      <div className="card productcard">
        <button className="icon" onClick={()=> (handleDeleteClick(outfitItem))}>X</button>
        <div
          className="cardimage"
          style={{ backgroundImage: `url(${outfitItem.styles[0].photos[0].url})`}}
          onClick={() => handleCardClick(outfitItem.id)}
        />
        <div className="cardinfo" onClick={() => handleCardClick(outfitItem.id)}>
          {outfitItem.iteminfo.category.toUpperCase()}
          <p>{outfitItem.iteminfo.name}</p>
          {outfitItem.styles[0].original_price}
          <p>***** (stars)</p>
        </div>
      </div>
    );
  }
}

export default OutfitCard;
