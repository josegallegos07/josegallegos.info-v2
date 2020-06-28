import React from 'react';
import { shallow } from 'enzyme';
import Award from '../Award';

const defaultProps = {
  label: 'some award',
  start: 2001,
  end: 2020,
};
const setup = (props) => shallow(<Award {...defaultProps} {...props} />);

describe('Award', () => {
  it('should render', () => {
    const wrapper = setup();
    expect(wrapper).toBeTruthy();
  });
});
