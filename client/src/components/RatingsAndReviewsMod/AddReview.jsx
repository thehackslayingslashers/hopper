import React from 'react';
import Stars from '../Stars';
import Characteristics from './Characteristics';

class AddReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      starWidth: 0,
      starDescription: 'Please Rate',
      recommend: '',
      summary: '',
      body: '',
      nickname: '',
      email: '',
      photos: [],
      characteristicsObj: {},
    };
    this.updateSummary = this.updateSummary.bind(this);
    this.updateBody = this.updateBody.bind(this);
    this.characteristicUpdater = this.characteristicUpdater.bind(this);
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
      characteristicsArr.push(<Characteristics characteristic={keys} description={characteristicsRatingsDescription[keys]} key={keys} characteristicUpdater={this.characteristicUpdater} />);
    }
    return characteristicsArr;
  }

  updateSummary(event) {
    let { summary } = this.state;
    if (event.nativeEvent.inputType === 'deleteContentBackward') {
      this.setState({
        summary: summary.slice(0, summary.length - 1),
      });
    } else {
      this.setState({
        summary: summary += event.nativeEvent.data,
      });
    }
  }

  updateBody(event) {
    let { body } = this.state;
    if (event.nativeEvent.inputType === 'deleteContentBackward') {
      this.setState({
        body: body.slice(0, body.length - 1),
      });
    } else {
      this.setState({
        body: body += event.nativeEvent.data,
      });
    }
  }

  updateNickname(event) {
    let { nickname } = this.state;
    if (event.nativeEvent.inputType === 'deleteContentBackward') {
      this.setState({
        nickname: nickname.slice(0, nickname.length - 1),
      });
    } else {
      this.setState({
        nickname: nickname += event.nativeEvent.data,
      });
    }
  }

  updateEmail(event) {
    let { email } = this.state;
    if (event.nativeEvent.inputType === 'deleteContentBackward') {
      this.setState({
        email: email.slice(0, email.length - 1),
      });
    } else {
      this.setState({
        email: email += event.nativeEvent.data,
      });
    }
  }

  characteristicUpdater(characteristic, number) {
    const { characteristicsObj } = this.state;
    const newObj = { ...characteristicsObj };
    newObj[characteristic] = number;
    this.setState({
      characteristicsObj: newObj,
    });
  }

  submitChecker(stateObj) {
    const { submitHandler, characteristics } = this.props;
    const emailRegex = /^[a-z0-9]+@+[a-z]+\.[a-z]/i.test(stateObj.email);
    if (stateObj.starWidth === 0) {
      alert('Please Give Overall Rating');
      return;
    } if (stateObj.recommend === '') {
      alert('Please Choose Recomendation');
      return;
    } if (Object.keys(stateObj.characteristicsObj).length !== Object.keys(characteristics).length) {
      alert('Please Rate Characteristics');
      return;
    } if (stateObj.body.length < 50) {
      alert('Must Reach Minimum Review Body Length');
      return;
    } if (stateObj.nickname === '') {
      alert('Please Input A Nickname');
      return;
    } if (!emailRegex) {
      alert('Please Input Valid Email');
    } else {
      submitHandler(stateObj);
    }
  }

  render() {
    const {
      starWidth, starDescription, recommend, body,
    } = this.state;
    const { itemName } = this.props;
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
          <pre style={{ margin: '0px' }}>
            <strong style={{ fontSize: '20px' }}>Overall Rating*</strong>
            <Stars rating={starWidth} />
            {starDescription}
          </pre>
        </div>
        <div
          className="question2"
          onClick={(event) => {
            this.recommendHandler(event.target.innerText);
          }}
          style={{ fontSize: '20px' }}
        >
          Do you recommend this product?* &nbsp;
          <button type="button" style={yesStyle}>yes</button>
          &emsp;
          <button type="button" style={noStyle}>no</button>
        </div>
        <div className="question3">
          <pre>
            <strong style={{ fontSize: '20px' }}>Characteristics*</strong>
            {this.characteristicsHandler()}
          </pre>
        </div>
        <div className="question4" style={{ fontSize: '20px' }}>
          Review Summary: &nbsp;
          <input
            type="text"
            placeholder="Ex. Best purchase ever!"
            maxLength="60"
            onChange={(event) => {
              this.updateSummary(event);
            }}
          />
        </div>
        <div className="question4" style={{ fontSize: '20px' }}>
          Review Body: &nbsp;
          <input
            type="text"
            placeholder="Why did you like the product or not?"
            maxLength="1000"
            minLength="50"
            onChange={(event) => {
              this.updateBody(event);
            }}
          />
        </div>
        {(body.length < 50) && (`Minimum required characters left: ${50 - body.length}`)}
        <div className="question4" style={{ fontSize: '20px' }}>
          Your Nickname*: &nbsp;
          <input
            type="text"
            placeholder="Ex. jackson11!"
            maxLength="60"
            onChange={(event) => {
              this.updateNickname(event);
            }}
          />
        </div>
        For privacy reasons, do not use your full name or email address
        <div className="question4" style={{ fontSize: '20px' }}>
          Your Email*: &nbsp;
          <input
            type="text"
            placeholder="Ex. jackson11@email.com"
            maxLength="60"
            onChange={(event) => {
              this.updateEmail(event);
            }}
          />
        </div>
        For authentication reasons, you will not be emailed
        <div className="modalButton" onClick={() => { this.submitChecker(this.state); }} role="button">submit</div>
      </div>
    );
  }
}

export default AddReview;
