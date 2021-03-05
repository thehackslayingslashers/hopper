import React from 'react';

class AddOutfitCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <div className="card productcard">
        <div className="addtooutfit" onClick={this.props.handleAddClick}>
          <div className="circle" />
          <h3>Add Current Product To Outfits</h3>
        </div>
      </div>
    );
  }
}

export default AddOutfitCard;
