import React from 'react';
import { shallow } from 'enzyme';
import Home from '../Home';

const setup = () => shallow(<Home />);

describe('Home', () => {
  it('should render', () => {
    const wrapper = setup();
    expect(wrapper).toBeTruthy();
  });
});
