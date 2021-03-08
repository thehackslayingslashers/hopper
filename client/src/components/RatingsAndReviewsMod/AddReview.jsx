import React from 'react';
import Stars from '../Stars';
import Characteristics from './Characteristics';

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
    const starWidthDescription = {
      1: 'Poor',
      2: 'Fair',
      3: 'Average',
      4: 'Good',
      5: 'Great',
    };
    this.setState({
      starWidth: newWidth,
      starDescription: starWidthDescription[newWidth],
    });
  }

  recommendHandler(choice) {
    this.setState({
      recommend: choice,
    });
  }

  characteristicsHandler() {
    const { characteristics } = this.props;
    const characteristicsRatingsDescription = {
      Size: ['A size too small', '½ a size too small', 'Perfect', '½ a size too big', 'A size too wide'],
      Width: ['Too narrow', 'Slightly narrow', 'Perfect', 'Slighty Wide', 'Too Wide'],
      Comfort: ['Uncomfortable', 'Slightly uncomfortable', 'Ok', 'Comfortable', 'Perfect'],
      Quality: ['Poor', 'Below average', 'Waht I expected', 'Pretty great', 'Perfect'],
      Length: ['Runs short', 'Runs slightly short', 'Perfect', 'Runs slightly long', 'Runs long'],
      Fit: ['Runs tight', 'Runs slightly tight', 'Perfect', 'Runs slightly long', 'Runs long'],
    };
    const characteristicsArr = [];
    for (const keys in characteristics) {
      characteristicsArr.push(<Characteristics characteristic={keys} description={characteristicsRatingsDescription[keys]} key={keys} />);
    }
    return characteristicsArr;
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
          <pre style={{'margin': '0px'}}>
            <strong style={{'fontSize': '20px'}}>Overall Rating*</strong>
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
           <strong style={{'fontSize': '20px'}}>Do you recommend this product?* &nbsp;</strong>
          <button type="button" style={yesStyle}>yes</button>
          &emsp;
          <button type="button" style={noStyle}>no</button>
        </div>
        <div className="question3">
          <pre>
            <strong style={{'fontSize': '20px'}}>Characteristics*</strong>
            {this.characteristicsHandler()}
          </pre>
        </div>
        <div className="modalButton" onClick={submitHandler} role="button">submit</div>
      </div>
    );
  }
}

export default AddReview;
