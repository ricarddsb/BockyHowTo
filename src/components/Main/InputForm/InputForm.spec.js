import React from 'react';
import { shallow  } from 'enzyme';
import jestConfiguration from '../../../../test/setupTests'
import InputForm from './InputForm';

describe('InputForm', () => {
  const props = {
    name: 'nameTest',
    onChange: function(){},
  };

  it('InputForm renders divs', () => {
    const wrapper = shallow(<InputForm {...props}/>);
    expect(wrapper.find('div').length).toBe(1);
  })

  /*it('InputForm onChange event', () => {
    const wrapper = shallow(<InputForm {...props} />);
    wrapper.simulate('change');
    console.log('test aviam', wrapper.props('name').placeHolder);
    // expect(wrapper.state('contentDisplayed')).toEqual(true);
    //expect(wrapper.find('input').prop('placeHolder').text()).toBe('');
    expect(wrapper.props('name')).toBe({});
  }); */

})
