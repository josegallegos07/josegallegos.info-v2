import React from 'react';
import { shallow } from 'enzyme';
import School from '../School';

const defaultProps = {
  school: 'some school',
  degree: 'some degree',
  major: 'some major',
  start: 2001,
  end: 2020,
};
const setup = (props) => shallow(<School {...defaultProps} {...props} />);

describe('School', () => {
  it('should render', () => {
    const wrapper = setup();
    expect(wrapper).toBeTruthy();
  });
});
