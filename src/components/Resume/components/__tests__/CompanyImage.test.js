import React from 'react';
import { shallow } from 'enzyme';
import { Tooltip } from 'antd';
import CompanyImage from '../CompanyImage';

const defaultProps = {
  alt: 'some text',
  img: 'some img',
};
const setup = (props) => shallow(<CompanyImage {...defaultProps} {...props} />);

describe('CompanyImage', () => {
  it('should render', () => {
    const wrapper = setup();
    expect(wrapper).toBeTruthy();
  });

  it('should render tooltip if url is provided', () => {
    const wrapper = setup({ url: 'some url' });
    expect(wrapper.find(Tooltip).length).toBeTruthy();
  });
});
