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
    const currentProductQuestions = this.props.currentProductQuestions;
    this.setState({ questionSearchFieldValue: '' });
    if (this.state.questionSearchFieldValue.length < 4) {
      this.setState({ errorMessageText: 'Please provide at least 3 characters' });
      this.setState({ errorMessage: { display: 'flex' } });
    } else {
      const matchingQueries = [];
      for (let i = 0; i < currentProductQuestions.length; i++) {
        if (
          currentProductQuestions[i].question_body.includes(this.state.questionSearchFieldValue)
        ) {
          matchingQueries.push(currentProductQuestions[i]);
        }
      }
      if (matchingQueries.length > 0) {
        this.setState({ errorMessage: { display: 'none' } });
        this.props.setCurrentQuestionsToMatchSearch(matchingQueries);
        // console.log(matchingQueries);
      } else {
        this.setState({ errorMessage: { display: 'flex' } });
        this.setState({ errorMessageText: 'We could not find any questions matching your query' });
      }
    }
  }

  render() {
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
        <div id="no-matching-queries-message" style={this.state.errorMessage}>
          {this.state.errorMessageText}
        </div>
      </div>
    );
  }
}

export default QuestionSearch;
