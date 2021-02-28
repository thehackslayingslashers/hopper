import React from 'react';
import QuestionView from './QuestionView';
import QuestionSearch from './QuestionSearch';
import PostQuestion from './PostQuestion';
import AnswerQuestion from './AnswerQuestion';
import App from '../App.jsx';
import axios from 'axios';

class QuestionsAndAnswers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product_id: 17762,
      page: 1,
      count: 4,
    };
    this.getCurrentProductQuestionsAndAnswers = this.getCurrentProductQuestionsAndAnswers.bind(
      this
    );
  }

  getCurrentProductQuestionsAndAnswers() {
    const access_token = '394d1d97d4051f63bda9e6f604171a5e4e4081c5';
    let productId = this.state.product_id;
    let pageNum = this.state.page;
    let countNum = this.state.count;
    debugger;
    axios
      .get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions', {
        params: {
          product_id: productId,
          page: pageNum,
          count: countNum,
        },
        // {
        //   headers: {
        //     'Authorization': `token ${access_token}`
        //   }
        // }
      })
      .then((response) => {
        console.log(response.results);
      });
  }

  componentDidMount() {
    this.getCurrentProductQuestionsAndAnswers;
    //get product with axios <this.props.currentProduct>
    //request will take product_id, page, and count as parameters <page=1, count= 4>
    //render questions about product (4 by default)
    //render answers with questions (2 by default)
  }

  render() {
    return (
      <div style={{ backgroundColor: 'lightblue' }}>
        <QuestionView />
        <QuestionSearch />
        <PostQuestion />
        <AnswerQuestion />
      </div>
    );
  }
}

export default QuestionsAndAnswers;
