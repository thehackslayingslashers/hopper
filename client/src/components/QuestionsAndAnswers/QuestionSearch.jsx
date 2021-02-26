import React from 'react';

class QuestionSearch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      questionFieldValue : ''
    }
  }

  render () {
    return(<div>Search Questions Here <input type="text"></input></div>);
  }
}

export default QuestionSearch;