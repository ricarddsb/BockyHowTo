import React from 'react';
import { shallow  } from 'enzyme';
import jestConfiguration from '../../../../test/setupTests'
import DropDownAbout from './DropDownAbout';

describe('DropDownAbout', () => {
  it('renders div stuff', () => {
    const wrapper = shallow(<DropDownAbout />);
    expect(wrapper.find('div').length).toBe(1);
  })
})
