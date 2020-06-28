import React from 'react';
import { shallow } from 'enzyme';
import { ExperimentOutlined } from '@ant-design/icons';
import ProfileItem from '../ProfileItem';

const defaultProps = {
  icon: <ExperimentOutlined />,
  content: (<div>some content</div>),
};
const setup = (props) => shallow(<ProfileItem {...defaultProps} {...props} />);

describe('ProfileItem', () => {
  it('should render', () => {
    const wrapper = setup();
    expect(wrapper).toBeTruthy();
  });
});
