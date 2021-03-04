import React from 'react';
import { shallow, mount, render } from '../../enzyme';
import App from '../App';
import RelatedItemsAndComparison from './RelatedItemsAndComparison';
import AddOutfitCard from './AddOutfitCard';
import OutfitCard from './OutfitCard';
import OutfitList from './OutfitList';
import RelatedProductCard from './RelatedProductCard';
import RelatedProductList from './RelatedProductsList';


describe('<RelatedItemsAndComparison/>', () => {
  it('RelatedItemsAndComparison should have OutfitList component', () => {
    const wrapper = mount(<App />);
    expect(wrapper.find(OutfitList)).toHaveLength(1);
  });
  it('RelatedItemsAndComparison should have RelatedProductList component', () => {
    const wrapper = mount(<App />);
    expect(wrapper.find(RelatedProductList)).toHaveLength(1);
  });
  it('OutfitList should have AddOutfitCard component', () => {
    const wrapper = mount(<App />);
    expect(wrapper.find(AddOutfitCard)).toHaveLength(1);
  });
});
