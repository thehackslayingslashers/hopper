import React from 'react';
import { shallow, mount, render } from '../../enzyme';

import LMod from './LMod.jsx';
import RatingsMod from './RatingsMod.jsx';
import ReviewsMod from './ReviewsMod.jsx';
import ReviewEntry from './ReviewEntry.jsx';

describe('<LMod/>', () => {
  it('LMod should render Ratings and Reviews Modules', () => {
    const data = {
      currentItemId: 17762,
      currentItemRatingInfo: {
        product_id: '17762',
        ratings: {
          1: '14',
          2: '3',
          3: '7',
          4: '8',
          5: '4',
        },
        recommended: {
          false: '14',
          true: '22',
        },
        characteristics: {
          Size: {
            id: 59528,
            value: '3.2500000000000000',
          },
          Width: {
            id: 59529,
            value: '3.2580645161290323',
          },
          Comfort: {
            id: 59530,
            value: '3.1666666666666667',
          },
          Quality: {
            id: 59531,
            value: '3.0000000000000000',
          },
        },
      },
      currentItemAverageRating: 2,
    };
    const wrapper = mount(<LMod currentItemRatingInfo={data.currentItemRatingInfo} currentItemAverageRating={data.currentItemAverageRating} />);

    expect(wrapper.find(RatingsMod)).toHaveLength(1);
    expect(wrapper.find(ReviewsMod)).toHaveLength(1);
  });
});
