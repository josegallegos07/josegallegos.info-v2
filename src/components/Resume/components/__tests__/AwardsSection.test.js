import React from 'react';
import { shallow } from 'enzyme';
import AwardsSection from '../AwardsSection';
import Award from '../Award';

const defaultProps = {
  items: [
    {
      label: 'some award',
      start: 2001,
      end: 2020,
    },
    {
      label: 'some other award',
      start: 2001,
    },
  ],
};
const setup = (props) => shallow(<AwardsSection {...defaultProps} {...props} />);

describe('AwardsSection', () => {
  it('should render', () => {
    const wrapper = setup();
    expect(wrapper).toBeTruthy();
  });

  it('should render award items', () => {
    const wrapper = setup();
    expect(wrapper.find(Award).length).toBe(defaultProps.items.length);
  });
});
