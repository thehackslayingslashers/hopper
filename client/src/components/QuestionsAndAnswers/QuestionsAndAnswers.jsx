import React from 'react';
import QuestionView from './QuestionView';
import QuestionSearch from './QuestionSearch';
import PostQuestion from './PostQuestion';
import AnswerQuestion from './AnswerQuestion';

class QuestionsAndAnswers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (<div style={{backgroundColor: 'lightblue'}}>
      <QuestionView/>
      <QuestionSearch/>
      <PostQuestion/>
      <AnswerQuestion/>
    </div>
    )
  }
}

export default QuestionsAndAnswers;
