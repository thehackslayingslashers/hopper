import React from 'react';
import Answer from './Answer.jsx';

class AnswerList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      answersDisplayed: 2,
      showLessAnswersButtonDisplay: { display: 'none' },
    };

    this.handleShowMoreAnswers = this.handleShowMoreAnswers.bind(this);
    this.handleShowLessAnswers = this.handleShowLessAnswers.bind(this);
  }

  handleShowMoreAnswers(e) {
    e.preventDefault();
    if (this.state.answersDisplayed < 50) {
      const plusTwoAnswerLength = this.state.answersDisplayed + 2;
      this.setState({ answersDisplayed: plusTwoAnswerLength });
      this.setState({ showLessAnswersButtonDisplay: { display: 'flex' } });
    }
  }

  handleShowLessAnswers() {
    if (this.state.answersDisplayed > 2) {
      const minusTwoAnswerLength = this.state.answersDisplayed - 2;
      this.setState({ answersDisplayed: minusTwoAnswerLength });
      if (minusTwoAnswerLength < 3) {
        this.setState({ showLessAnswersButtonDisplay: { display: 'none' } });
      }
    }
  }

  render() {
    const keyArray = Object.keys(this.props.answers);
    var slicedKeyArray = keyArray.slice(0, this.state.answersDisplayed);
    return (
      <div id="answers-container">
        {slicedKeyArray.map((answerId, index) => (
          <div key={index}>
            <Answer
              answerId={answerId}
              answers={this.props.answers}
              answersDisplayed={this.state.answersDisplayed}
              currentQuestion={this.props.currentQuestion}
            />
          </div>
        ))}
        <button onClick={this.handleShowMoreAnswers}>SHOW MORE ANSWERS</button>
        <button
          onClick={this.handleShowLessAnswers}
          style={this.state.showLessAnswersButtonDisplay}
        >
          SHOW LESS ANSWERS
        </button>
      </div>
    );
  }
}

export default AnswerList;
