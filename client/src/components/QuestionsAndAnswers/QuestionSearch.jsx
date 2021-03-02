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
    console.log(this.state.questionSearchFieldValue);
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
          class="fas fa-search fa-3x"
          id="question-search-submit-button"
          onClick={this.handleSubmitQuestionSearch}
        ></i>
      </div>
    );
  }
}

export default QuestionSearch;
