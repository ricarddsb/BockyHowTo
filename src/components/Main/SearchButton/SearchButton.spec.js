import React from 'react';
import { shallow  } from 'enzyme';
import { estConfiguration, sinonSpy } from '../../../../test/setupTests'
import SearchButton from './SearchButton';

describe('SearchButton', () => {
  const props = {
    name: 'titleTest',
    onClick: function(){},
  };

  it('InputForm renders divs', () => {
    const wrapper = shallow(<SearchButton {...props}/>);
    expect(wrapper.find('div').length).toBe(1);
  })

  it('SearchButton onclick event', () => {
    const onClick = sinonSpy.spy();
    const wrapper = shallow(<SearchButton {...props} onClick={onClick} />);
    wrapper.find('button.SearchButton').simulate('click');
    expect(onClick.calledOnce).toBe(true);
  });
})
