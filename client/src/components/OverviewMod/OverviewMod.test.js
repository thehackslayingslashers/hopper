import React from 'react';
import { shallow, mount, render } from '../../enzyme';
import App from '../App';
import AddToCart from './AddToCart';
import BasicInfo from './BasicInfo';
import FeatureList from './FeatureList';
import OverviewMod from './OverviewMod';
import ProductInformation from './ProductInformation';
import SizeSelector from './SizeSelector.jsx';
import StyleSelector from './StyleSelector.jsx';

describe('<OverviewMod/>', () => {
  it('OverviewMod should have AddToCart component', () => {
    const wrapper = mount(<App />);
    expect(wrapper.find(AddToCart)).toHaveLength(1);
  });
  it('OverviewMod should have BasicInfo component', () => {
    const wrapper = mount(<App />);
    expect(wrapper.find(BasicInfo)).toHaveLength(1);
  });
  it('OverviewMod should have FeatureList component', () => {
    const wrapper = mount(<App />);
    expect(wrapper.find(FeatureList)).toHaveLength(1);
  });
  it('OverviewMod should have OverviewMod component', () => {
    const wrapper = mount(<App />);
    expect(wrapper.find(OverviewMod)).toHaveLength(1);
  });
  it('OverviewMod should have ProductInformation component', () => {
    const wrapper = mount(<App />);
    expect(wrapper.find(ProductInformation)).toHaveLength(1);
  });
  it('OverviewMod should have StyleSelector component', () => {
    const wrapper = mount(<App />);
    expect(wrapper.find(StyleSelector)).toHaveLength(1);
  });
  it('OverviewMod should NOT have SizeSelector component', () => {
    const wrapper = mount(<App />);
    expect(wrapper.find(SizeSelector)).toHaveLength(0);
  });
});
