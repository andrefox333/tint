import React from 'react';
import expect from 'expect';
import sinon from 'sinon';
import { shallow } from 'enzyme';
import UserInputField from '../components/UserInputField';

describe('feeds/components/UserInputField.jsx', () => {
  it('should shallow render the component', () => {
    const wrapper = shallow(<UserInputField />);
    const buttons = wrapper.find('button');
    expect(buttons.length).toBe(5);
  });
  
  it('should simulate click events', () => {
    const props = {
      onBtnClick: sinon.spy()
    };
    const wrapper = shallow(<UserInputField onBtnClick={props.onBtnClick} />);
    
    wrapper.find('button#btn-facebook').simulate('click');
    expect(props.onBtnClick.calledOnce).toBe(true);
  });
});
