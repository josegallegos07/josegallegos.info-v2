import React from 'react';
import { shallow } from 'enzyme';
import WorkExperienceItem from '../WorkExperienceItem';

const defaultProps = {
  title: 'some title',
  children: (
    <div>anything</div>
  ),
};
const setup = (props) => shallow(<WorkExperienceItem {...defaultProps} {...props} />);

describe('School', () => {
  it('should render', () => {
    const wrapper = setup();
    expect(wrapper).toBeTruthy();
  });
});
