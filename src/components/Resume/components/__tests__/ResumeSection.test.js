import React from 'react';
import { shallow } from 'enzyme';
import { RocketOutlined } from '@ant-design/icons';
import ResumeSection from '../ResumeSection';

const defaultProps = {
  title: 'some title',
  icon: <RocketOutlined />,
  children: (
    <div>stuff</div>
  ),
};
const setup = (props) => shallow(<ResumeSection {...defaultProps} {...props} />);

describe('ResumeSection', () => {
  it('should render', () => {
    const wrapper = setup();
    expect(wrapper).toBeTruthy();
  });
});
