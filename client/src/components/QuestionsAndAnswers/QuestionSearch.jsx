import React from 'react';

class QuestionSearch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      questionSearchFieldValue: '',
    };

    this.handleGetQuestionSearchFieldValue = this.handleGetQuestionSearchFieldValue.bind(this);
    this.handleSubmitQuestionSearch = this.handleSubmitQuestionSearch.bind(this);
  }

  handleGetQuestionSearchFieldValue(e) {
    this.setState({ questionSearchFieldValue: e.target.value });
  }

  handleSubmitQuestionSearch() {
    const currentProductQuestions = this.props.currentProductQuestions;
    if (this.state.questionSearchFieldValue.length < 4) {
      console.log('Please type at least 3 characters');
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
        this.props.setCurrentQuestionsToMatchSearch(matchingQueries);
        console.log(matchingQueries);
      } else {
        console.log('No results matched your query');
      }
    }
  }

  render() {
    return (
      <div id="question-search-field">
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
    );
  }
}

export default QuestionSearch;
