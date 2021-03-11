import React from 'react';
import Answer from './Answer.jsx';

class AnswerList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      answersDisplayed: 2,
      showLessAnswersButtonDisplay: { display: 'none' },
      answerDisplay: { display: 'flex' },
      totalAnswers: 0,
    };

    this.handleShowMoreAnswers = this.handleShowMoreAnswers.bind(this);
    this.handleShowLessAnswers = this.handleShowLessAnswers.bind(this);
  }

  handleShowMoreAnswers(e) {
    const { answersDisplayed, totalAnswers } = this.state;
    e.preventDefault();
    if (answersDisplayed < 50 && totalAnswers > 2) {
      // const plusTwoAnswerLength = answersDisplayed + 2;
      this.setState({ answersDisplayed: 50 });
      this.setState({ showLessAnswersButtonDisplay: { display: 'flex' } });
    }
  }

  handleShowLessAnswers() {
    const { answersDisplayed } = this.state;
    if (answersDisplayed > 2) {
      // const minusTwoAnswerLength = answersDisplayed - 2;
      this.setState({ answersDisplayed: 2, showLessAnswersButtonDisplay: { display: 'none' } });
    }
  }

  componentDidMount() {
    const { answers } = this.props;
    const keyArray = Object.keys(answers);
    this.setState({ totalAnswers: keyArray.length });
  }

  render() {
    const { answers, currentQuestion } = this.props;
    const { answersDisplayed, showLessAnswersButtonDisplay, totalAnswers } = this.state;
    const keyArray = Object.keys(answers);
    const slicedKeyArray = keyArray.slice(0, answersDisplayed);
    return (
      <div id="answers-container">
        {slicedKeyArray.map((answerId, index) => (
          <div key={index}>
            <Answer
              answerId={answerId}
              answers={answers}
              answersDisplayed={answersDisplayed}
              currentQuestion={currentQuestion}
            />
          </div>
        ))}
        <div className="show-more-less-answers">
          <div className="show-more-less-answers-button" onClick={this.handleShowMoreAnswers}>
            <u>SHOW MORE ANSWERS</u>
          </div>
          <div
            className="show-more-less-answers-button"
            onClick={this.handleShowLessAnswers}
            style={showLessAnswersButtonDisplay}
          >
            <u>SHOW LESS ANSWERS</u>
          </div>
        </div>
      </div>
    );
  }
}

export default AnswerList;
