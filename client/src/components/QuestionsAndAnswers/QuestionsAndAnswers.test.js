import React from 'react';
import { shallow, mount, render } from '../../enzyme';
import QuestionsAndAnswers from './QuestionsAndAnswers';
import QuestionSearch from './QuestionSearch';
import PostQuestion from './PostQuestion';
import QuestionView from './QuestionView';
import PostAnswer from './PostAnswer';
import Question from './Question.jsx';
import {
  RiTwitterLine,
  RiFacebookCircleLine,
  RiPinterestLine,
  RiDiscordLine,
  RiRedditLine,
  RiLinkedinLine,
} from 'react-icons/ri';

describe('<QuestionsAndAnswers/>', () => {
  it('should have a questionView component', () => {
    const wrapper = shallow(<QuestionsAndAnswers />);
    expect(wrapper.find(QuestionView).toHaveLength(1));
  });
  it('should have a PostQuestion component', () => {
    const wrapper = shallow(<QuestionsAndAnswers />);
    expect(wrapper.find(PostQuestion).toHaveLength(1));
  });
});