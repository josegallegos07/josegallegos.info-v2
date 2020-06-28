import React from 'react';
import { shallow } from 'enzyme';
import NavBar from '../NavBar';

const defaultProps = {};
const setup = (props) => shallow(<NavBar {...defaultProps} {...props} />);

describe('NavBar', () => {
  it('should render', () => {
    const wrapper = setup();
    expect(wrapper).toBeTruthy();
  });
});
