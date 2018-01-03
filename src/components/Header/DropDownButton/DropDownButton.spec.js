import React from 'react';
import { shallow  } from 'enzyme';
import jestConfiguration from '../../../../test/setupTests'
import DropDownButton from './DropDownButton';

describe('DropDownButton', () => {
  const props = {
    title: 'titleTest',
    children: 0,
  };

  it('DropDownButton renders 3 div', () => {
    const wrapper = shallow(<DropDownButton {...props} />);
    expect(wrapper.find('div').length).toBe(3);
  })

  it('DropDownButton content should be hidden by default', () => {
    const wrapper = shallow(<DropDownButton {...props} />);
    expect(wrapper.state('contentDisplayed')).toEqual(false);
  });

  it('DropDownButton mouseOver event', () => {
    const wrapper = shallow(<DropDownButton {...props} />);
    wrapper.simulate('mouseEnter');
    expect(wrapper.state('contentDisplayed')).toEqual(true);
  });

  it('DropDownButton mouseLeave event', () => {
    const wrapper = shallow(<DropDownButton {...props} />);
    wrapper.simulate('mouseLeave');
    expect(wrapper.state('contentDisplayed')).toEqual(false);
  });

  it('DropDownButton title should be titleTest', () => {
    const wrapper = shallow(<DropDownButton {...props} />);
    expect(wrapper.find('.DropDownButton-title').first().text()).toEqual('titleTest');
  });
})
