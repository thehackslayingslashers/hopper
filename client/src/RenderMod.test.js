import React from 'react';
import { shallow, mount, render } from './enzyme';

import App from './components/App.jsx';
import OverviewMod from './components/OverviewMod/OverviewMod.jsx';
import QuestionsAndAnswers from './components/QuestionsAndAnswers/QuestionsAndAnswers.jsx';
import RelatedItemsAndComparison from './components/RelatedItemsAndComparison/RelatedItemsAndComparison.jsx';
import LMod from './components/RatingsAndReviewsMod/LMod.jsx';

describe('<App />', () => {
  it('render LMod once', () => {
    const wrapper = shallow(<App/>);
    // expect(wrapper.find(OverviewMod)).toHaveLength(1);
    expect(wrapper.find(QuestionsAndAnswers)).toHaveLength(2);
    expect(wrapper.find(RelatedItemsAndComparison)).toHaveLength(1);
    expect(wrapper.find(LMod)).toHaveLength(1);
  });
})
