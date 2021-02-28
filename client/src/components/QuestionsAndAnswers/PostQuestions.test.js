import React from 'react';
import { shallow, mount, render } from '../../enzyme';
import QuestionsAndAnswers from './QuestionsAndAnswers';
import QuestionSearch from './QuestionSearch';
import PostQuestion from './PostQuestion';
import QuestionView from './QuestionView';
import AnswerQuestion from './AnswerQuestion';
import Question from '.Question.jsx';

describe('<PostQuestion/>', () => {
  it('Post question field should be empty on load', () => {
    const wrapper = mount(<PostQuestion />);
    expect(wrapper.find('.post-question-field')).toEqual('');
  });
});
