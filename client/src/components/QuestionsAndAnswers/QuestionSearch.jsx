import React from 'react';

class QuestionSearch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      questionSearchFieldValue: '',
      errorMessage: { display: 'none' },
      errorMessageText: 'We could not find any questions matching your query',
    };

    this.handleGetQuestionSearchFieldValue = this.handleGetQuestionSearchFieldValue.bind(this);
    this.handleSubmitQuestionSearch = this.handleSubmitQuestionSearch.bind(this);
  }

  handleGetQuestionSearchFieldValue(e) {
    this.setState({ questionSearchFieldValue: e.target.value });
  }

  handleSubmitQuestionSearch() {
    const {
      currentProductQuestions,
      setCurrentQuestionsToMatchSearch,
      getCurrentProductQuestionsAndAnswers,
    } = this.props;
    const { questionSearchFieldValue } = this.state;
    this.setState({ questionSearchFieldValue: '' });
    if (questionSearchFieldValue.length < 1) {
      this.setState({ errorMessage: { display: 'none' } });
      getCurrentProductQuestionsAndAnswers();
    } else {
      const matchingQueries = [];
      for (let i = 0; i < currentProductQuestions.length; i++) {
        if (currentProductQuestions[i].question_body.includes(questionSearchFieldValue)) {
          matchingQueries.push(currentProductQuestions[i]);
        }
      }
      if (matchingQueries.length > 0) {
        this.setState({ errorMessage: { display: 'none' } });
        setCurrentQuestionsToMatchSearch(matchingQueries);
      } else {
        this.setState({
          errorMessage: { display: 'flex' },
        });
      }
    }
  }

  render() {
    const { errorMessage, errorMessageText } = this.state;
    return (
      <div id="question-search-field">
        <div>
          <input
            id="question-search-field-input"
            type="text"
            onChange={this.handleGetQuestionSearchFieldValue}
            placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..."
          />
          <i
            className="fas fa-search fa-2x"
            id="question-search-submit-button"
            onClick={this.handleSubmitQuestionSearch}
          ></i>
        </div>
        <div id="no-matching-queries-message" style={errorMessage}>
          {errorMessageText}
        </div>
      </div>
    );
  }
}

export default QuestionSearch;
