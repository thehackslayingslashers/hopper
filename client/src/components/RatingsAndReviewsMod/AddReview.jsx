import React from 'react';
import Stars from '../Stars';

class AddReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      starWidth: 0,
      starDescription: 'Please Rate',
      recommend: 'maybe',
    };
  }

  calculateStarWidth(newWidth) {
    if (newWidth > 100) {
      newWidth = 100;
    }
    newWidth = Math.ceil(newWidth / 20);
    let starDescription;
    switch (newWidth) {
      case 1:
        starDescription = 'Poor';
        break;
      case 2:
        starDescription = 'Fair';
        break;
      case 3:
        starDescription = 'Average';
        break;
      case 4:
        starDescription = 'Good';
        break;
      case 5:
        starDescription = 'Great';
        break;
      default:
        break;
    }
    this.setState({
      starWidth: newWidth,
      starDescription,
    });
  }

  recommendHandler(choice) {
    this.setState({
      recommend: choice,
    });
  }

  render() {
    const { starWidth, starDescription, recommend } = this.state;
    const { submitHandler, itemName } = this.props;
    let yesStyle;
    let noStyle;
    if (recommend === 'yes') {
      yesStyle = {
        backgroundColor: 'rgb(214, 182, 255)',
      };
    } else if (recommend === 'no') {
      noStyle = {
        backgroundColor: 'rgb(214, 182, 255)',
      };
    }
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
            {starDescription}
          </pre>
        </div>
        <div
          className="question2"
          onClick={(event) => {
            this.recommendHandler(event.target.innerText);
          }}
        >
          Do you recommend this product?* &nbsp;
          <button type="button" style={yesStyle}>yes</button>
          &emsp;
          <button type="button" style={noStyle}>no</button>
        </div>
        <div className="modalButton" onClick={submitHandler}>submit</div>
      </div>
    );
  }
}

export default AddReview;
