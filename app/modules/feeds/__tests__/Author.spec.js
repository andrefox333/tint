import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import Author from '../components/Author';

describe('feeds/components/Author.jsx', () => {
  it('should shallow render the component', () => {
    const author = {
      name: 'Test',
      username: 'test333',
      followers: 694,
      picture: 'http://example.com/picture.jpg',
    };
    const authorInJson = JSON.stringify(author);
    const wrapper = shallow(<Author author={authorInJson} />);
    expect(wrapper.html()).toBe(
      '<div><div><div>Test</div><div>@test333</div><div>694 followers</div></div><div><img src="http://example.com/picture.jpg"/></div></div>',
    );
  });
});
