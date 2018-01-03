import React from 'react';
import { shallow  } from 'enzyme';
import jestConfiguration from '../../../test/setupTests'
import Footer from './Footer';

describe('Footer', () => {
  it('renders div stuff', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.find('div').length).toBe(1);
  })
})
