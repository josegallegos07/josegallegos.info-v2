import React from 'react';
import { shallow } from 'enzyme';
import TextButton from '../TextButton';

const defaultProps = {
  label: 'some label',
  onClick: jest.fn(),
};
const setup = (props) => shallow(<TextButton {...defaultProps} {...props} />);

describe('TextButton', () => {
  it('should render', () => {
    const wrapper = setup();
    expect(wrapper).toBeTruthy();
    expect(wrapper.find('.text-button')).toBeTruthy();
    expect(wrapper.find('.text-button').text()).toEqual(defaultProps.label);
  });
  it('should call onClick when clicked', () => {
    const wrapper = setup();
    wrapper.simulate('click');
    expect(defaultProps.onClick).toHaveBeenCalled();
  });
});
