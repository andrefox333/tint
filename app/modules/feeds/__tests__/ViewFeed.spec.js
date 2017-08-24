import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import { ViewFeed } from '../components/ViewFeed';

describe('feeds/components/ViewFeed.jsx', () => {
  it('should shallow render the component', () => {
    const wrapper = shallow(<ViewFeed />);
    expect(wrapper.find('.container').length).toBe(1);
  });
});
