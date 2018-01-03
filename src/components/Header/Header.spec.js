import React from 'react';
import { shallow  } from 'enzyme';
import jestConfiguration from '../../../test/setupTests'
import Header from './Header';

describe('Header', () => {
  it('Header renders divs', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('div').length).toBe(1);
  })
})
