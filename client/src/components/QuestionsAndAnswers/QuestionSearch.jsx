import React from 'react';
import { BiSearchAlt2 } from 'react-icons/bi';

class QuestionSearch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      questionSearchFieldValue: '',
      displayErrorMessage: false,
      errorMessageText: 'We could not find any questions matching your query',
    };

    this.handleGetQuestionSearchFieldValue = this.handleGetQuestionSearchFieldValue.bind(this);
  }

  handleGetQuestionSearchFieldValue(e) {
    const {
      currentProductQuestions,
      setCurrentQuestionsToMatchSearch,
      getCurrentProductQuestionsAndAnswers,
    } = this.props;
    const { questionSearchFieldValue } = this.state;
    this.setState({ questionSearchFieldValue: e.target.value });
    if (questionSearchFieldValue.length > 3) {
      for (let i = 0; i < currentProductQuestions.length; i++) {}
      const matchingQueries = [];
      for (let i = 0; i < currentProductQuestions.length; i++) {
        if (currentProductQuestions[i].question_body.includes(questionSearchFieldValue)) {
          matchingQueries.push(currentProductQuestions[i]);
        }
        setCurrentQuestionsToMatchSearch(matchingQueries);
      }
    } else {
      getCurrentProductQuestionsAndAnswers();
    }
  }

  render() {
    const { displayErrorMessage, errorMessageText } = this.state;
    return (
      <div id="question-search-field">
        <input
          id="question-search-field-input"
          type="text"
          onChange={this.handleGetQuestionSearchFieldValue}
          placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..."
        />
        {/* <i className="fas fa-search fa-2x" id="question-search-submit-button"></i> */}
        <BiSearchAlt2 size="80px" />
        {displayErrorMessage && <div id="no-matching-queries-message">{errorMessageText}</div>}
      </div>
    );
  }
}

export default QuestionSearch;
