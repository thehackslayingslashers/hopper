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
      <div>
        Search Questions Here:
        <input type="text" onChange={this.handleGetQuestionSearchFieldValue} />
        <button onClick={this.handleSubmitQuestionSearch}>Submit</button>
      </div>
    );
  }
}

export default QuestionSearch;
