import React from 'react';
import { shallow } from 'enzyme';
import Award from '../Award';

const defaultProps = {
  label: 'some award',
  year: 2001,
};
const setup = (props) => shallow(<Award {...defaultProps} {...props} />);

describe('Award', () => {
  it('should render', () => {
    const wrapper = setup();
    expect(wrapper).toBeTruthy();
  });
});
