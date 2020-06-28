import React from 'react';
import { shallow } from 'enzyme';
import SocialMedia from '../SocialMedia';
import SocialMediaLink from '../SocialMediaLink';

const defaultProps = {
  items: [
    {
      icon: 'github',
      desc: 'github',
      url: 'some url',
    },
    {
      icon: 'linkedin',
      desc: 'linkedin',
      url: 'some url',
    },
  ],
};

const setup = (props) => shallow(<SocialMedia {...defaultProps} {...props} />);

describe('SocialMedia', () => {
  it('should render', () => {
    const wrapper = setup();
    expect(wrapper).toBeTruthy();
  });
  it('should render items', () => {
    const wrapper = setup();
    expect(wrapper.find(SocialMediaLink).length).toBe(2);
  });
});
