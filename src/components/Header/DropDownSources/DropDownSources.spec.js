import React from 'react';
import { shallow  } from 'enzyme';
import jestConfiguration from '../../../../test/setupTests'
import DropDownSources from './DropDownSources';

describe('DropDownSources', () => {
  it('DropDownSources renders divs', () => {
    const wrapper = shallow(<DropDownSources />);
    expect(wrapper.find('div').length).toBe(7);
  })

  it('DropDownSources title should have react in first row', () => {
    const wrapper = shallow(<DropDownSources />);
    expect(wrapper.find('.Url').first().text()).toEqual('React');
  });
})
