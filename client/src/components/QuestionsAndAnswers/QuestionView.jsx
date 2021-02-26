import React from 'react';

class QuestionView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayedQuestions : []
    }
  }

  render () {
    return(<div>Questions Go Here: Question?</div>);
  }
}

export default QuestionView;