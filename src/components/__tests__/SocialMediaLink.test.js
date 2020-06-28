import React from 'react';
import { shallow } from 'enzyme';
import SocialMediaLink from '../SocialMediaLink';

const defaultProps = {
  icon: 'github',
  url: 'some url',
  desc: 'some desc',
};

const setup = (props) => shallow(<SocialMediaLink {...defaultProps} {...props} />);

describe('SocialMediaLink', () => {
  it('should render', () => {
    const wrapper = setup();
    expect(wrapper).toBeTruthy();
    expect(wrapper.find('img').exists()).toBe(true);
    expect(wrapper.find('a').exists()).toBe(true);
  });
});
