import React from 'react';
import axios from 'axios';
import AnswerPhotos from './AnswerPhotos.jsx';

class Answer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reported: false,
      helpful: false,
      reportButtonText: 'Report',
      helpfulButtonText: `Yes(${this.props.answers[this.props.answerId].helpfulness})`,
    };
    this.handleAnswerUpvote = this.handleAnswerUpvote.bind(this);
    this.handleReportAnswer = this.handleReportAnswer.bind(this);
  }

  handleAnswerUpvote() {
    const { answerId, answers } = this.props;
    const { helpful, helpfulButtonText } = this.state;
    axios
      .put(`/qa/answers/${answerId}/helpful`)
      .then(() => {
        this.setState({
          helpful: true,
          helpfulButtonText: `Yes(${this.props.answers[this.props.answerId].helpfulness + 1})`,
        });
      })
      .catch((error) => {
        throw error;
      });
  }

  handleReportAnswer() {
    const { answerId } = this.props;
    const { reported, reportButtonText } = this.state;
    if (reported === false) {
      axios
        .put(`/qa/answers/${answerId}/report`)
        .then(() => {
          this.setState({ reported: true, reportButtonText: 'Reported!' });
        })
        .catch((error) => {
          throw error;
        });
    }
  }
  render() {
    const { answerId, answers } = this.props;
    const { report, reportButtonText, helpful, helpfulButtonText } = this.state;
    const parsedAnswerId = parseInt(answerId);
    const currentAnswer = answers[parsedAnswerId];
    const formattedDate = new Date(currentAnswer.date).toLocaleDateString('en-US', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    });
    return (
      <div className="answer-item">
        <div className="a-for-answer-and-answer-text">
          <div>A: </div>
          <div className="answer-text">{currentAnswer.body}</div>
          <div className="upvote-answer-button" onClick={this.handleAnswerUpvote}>
            Helpful? {helpfulButtonText}
          </div>
          <div className="small-divider-answer">|</div>
          <div className="report-answer-button" onClick={this.handleReportAnswer}>
            {reportButtonText}
          </div>
        </div>
        <div className="lower-answer-container">
          <div id="user-info-and-date">
            by {currentAnswer.answerer_name}, {formattedDate}
          </div>
          <AnswerPhotos currentAnswerPhotos={currentAnswer.photos} />
        </div>
      </div>
    );
  }
}

export default Answer;
