import React from 'react';
import { shallow } from 'enzyme';
import { DollarOutlined, SmileOutlined } from '@ant-design/icons';
import Profile from '../Profile';
import ProfileItem from '../ProfileItem';

const defaultProps = {
  name: 'some name',
  img: 'your best picture',
  items: [
    {
      icon: <DollarOutlined />,
      content: (<div>sup</div>),
    },
    {
      icon: <SmileOutlined />,
      content: (<div>sup again</div>),
    },
  ],
};
const setup = (props) => shallow(<Profile {...defaultProps} {...props} />);

describe('Profile', () => {
  it('should render', () => {
    const wrapper = setup();
    expect(wrapper).toBeTruthy();
  });
  it('should render profile items', () => {
    const wrapper = setup();
    expect(wrapper.find(ProfileItem).length).toBe(2);
  });
});
