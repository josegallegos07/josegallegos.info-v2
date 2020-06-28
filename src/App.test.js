import React from 'react';
import { shallow } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

const setup = () => shallow(<App />);

describe('App', () => {
  it('should render', () => {
    const wrapper = setup();
    expect(wrapper).toBeTruthy();
  });

  it('should contain router', () => {
    const wrapper = setup();
    expect(wrapper.find(Router).exists()).toBe(true);
  });
});
