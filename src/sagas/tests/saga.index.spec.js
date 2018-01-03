import 'regenerator-runtime/runtime';
import { put, call, fork } from 'redux-saga/effects';
import React from 'react';
import { cloneableGenerator } from 'redux-saga/utils';
import { shallow  } from 'enzyme';
import jestConfiguration from '../../../test/setupTests'
import rootSaga from '../index';

describe('Saga Index', () => {

  const action = {
    data: 'test',
    isFilled: true,
  }

  it('root saga tests', () => {
    const generator = rootSaga();
    let result = generator.next();
    expect(result.value.ALL[0].FORK.fn.name).toEqual('searchRequest');
    expect(result.value.ALL[1].FORK.fn.name).toEqual('fetchRequest');
  })
})
