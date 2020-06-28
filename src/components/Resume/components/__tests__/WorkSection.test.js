import React from 'react';
import { shallow } from 'enzyme';
import WorkSection from '../WorkSection';
import WorkExperience from '../WorkExperience';

const defaultProps = {
  items: [
    {
      title: 'some title',
      company: 'some company',
      companyDetails: 'some details',
      img: 'some img',
      start: 1999,
      end: 2000,
      details: [
        'some detail',
        'another detail',
      ],
      projects: [
        'some project',
        'another project',
        'wow. so many project',
      ],
      tech: [
        'some tech',
        'more tech',
        'wow you use so much tech',
      ],
    },
  ],
};
const setup = (props) => shallow(<WorkSection {...defaultProps} {...props} />);

describe('WorkSection', () => {
  it('should render', () => {
    const wrapper = setup();
    expect(wrapper).toBeTruthy();
  });

  it('should render award items', () => {
    const wrapper = setup();
    expect(wrapper.find(WorkExperience).length).toBe(defaultProps.items.length);
  });
});
