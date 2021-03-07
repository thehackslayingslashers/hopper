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
    if (newWidth > 100) {
      newWidth = 100;
    }
    newWidth = Math.ceil(newWidth / 20);
    this.setState({
      starWidth: newWidth,
    });
  }

  render() {
    const { starWidth } = this.state;
    const { submitHandler, itemName } = this.props;
    return (
      <div className="addReview">
        <h1>Write Your Review</h1>
        <h2>
          About the
          <br />
          {itemName}
        </h2>
        <div
          className="question1"
          onClick={(event) => {
            const mouseX = event.clientX;
            this.calculateStarWidth(mouseX - event.target.getBoundingClientRect().left + 5);
          }}

        >
          <pre>
            Overall Rating*
            <Stars rating={starWidth} />
          </pre>
        </div>
        <div className="modalButton" onClick={submitHandler}>submit</div>
      </div>
    );
  }
}

export default AddReview;
