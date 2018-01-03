import React from 'react';
import { shallow  } from 'enzyme';
import { jestConfiguration, sinonSpy } from '../../../../test/setupTests'
import User from './User';

describe('User', () => {
  const props = {
    items: [
      {
        name: 'nameTest',
        surName: 'surnameTest',
        index: 0,
      }
    ],
    onClick: function(){},
  };

  it('User renders divs but no tr', () => {
    const wrapper = shallow(<User {...props}/>);
    expect(wrapper.find('div').length).toBe(9);
    expect(wrapper.find('tr').length).toBe(0);
  })

  it('User onclick event', () => {
    const onClick = sinonSpy.spy();
    const wrapper = shallow(<User {...props} onClick={onClick} />);
    wrapper.find('button.text').simulate('click');
    expect(onClick.calledOnce).toBe(true);
  });
})
