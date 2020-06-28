import React from 'react';
import { shallow } from 'enzyme';
import EducationSection from '../EducationSection';
import School from '../School';

const defaultProps = {
  items: [
    {
      school: 'some school',
      degree: 'some degree',
      major: 'some major',
      start: 2001,
      end: 2020,
    },
    {
      school: 'some other school',
      degree: 'some other degree',
      major: 'some other major',
      start: 2001,
      end: 2020,
    },
  ],
};
const setup = (props) => shallow(<EducationSection {...defaultProps} {...props} />);

describe('EducationSection', () => {
  it('should render', () => {
    const wrapper = setup();
    expect(wrapper).toBeTruthy();
  });

  it('should render school items', () => {
    const wrapper = setup();
    expect(wrapper.find(School).length).toBe(defaultProps.items.length);
  });
});
