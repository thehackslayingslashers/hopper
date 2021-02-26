import React from 'react';
import { shallow, mount, render } from '../../enzyme';
import QuestionsAndAnswers from './QuestionsAndAnswers';
import QuestionSearch from './QuestionSearch';
import PostQuestion from './PostQuestion';
import QuestionView from './QuestionView';
import AnswerQuestion from './AnswerQuestion';

describe('<QuestionsAndAnswers/>', () => {
  it('Renders QuestionSearch once', ()=> {
    const wrapper = shallow(<QuestionsAndAnswers/>);
    expect(wrapper.find(QuestionSearch)).toHaveLength(1);
  })
});
