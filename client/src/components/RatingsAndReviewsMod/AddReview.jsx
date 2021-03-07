import React from 'react';
import Stars from '../Stars';

class AddReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      starWidth: 0,
    };
  }

  calculateStarWidth(newWidth) {
    newWidth = Math.ceil(newWidth / 20);
    this.setState({
      starWidth: newWidth,
    });
  }

  render() {
    const { starWidth } = this.state;
    const { submitHandler } = this.props;
    return (
      <div className="addReview">
        form stuff goes here
        <div onClick={(event) => {
          const mouseX = event.clientX;
          this.calculateStarWidth(mouseX - event.target.getBoundingClientRect().left + 5);
        }}
        >
          <Stars rating={starWidth} />
        </div>
        <div className="modalButton" onClick={submitHandler}>submit</div>
      </div>
    );
  }
}

export default AddReview;
