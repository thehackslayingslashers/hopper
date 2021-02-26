import React from 'react';
import { shallow, mount, render } from './enzyme';

import App from './components/App.jsx';
import LMod from './components/LModule.jsx';

describe('<App />', () => {
  it('render LMod once', () => {
    const wrapper = shallow(<App/>);
    expect(wrapper.find(LMod)).toHaveLength(1);
  });
})

