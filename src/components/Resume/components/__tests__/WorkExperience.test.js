import React from 'react';
import { shallow } from 'enzyme';
import WorkExperience from '../WorkExperience';

const defaultProps = {
  title: 'some title',
  company: 'some company',
  companyDetails: 'some details',
  img: 'some img',
  start: 1999,
  end: 2000,
  details: [
    'some detail',
    'another detail',
    'more details',
  ],
  projects: [
    'some project',
  ],
  tech: [
    'buzzword',
    'buzzword2',
    'buzzword3',
  ],
};

const setup = (props) => shallow(<WorkExperience {...defaultProps} {...props} />);

describe('WorkExperience', () => {
  it('should render', () => {
    const wrapper = setup();
    expect(wrapper).toBeTruthy();
  });
});
