import React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Home from '../index';

jest.mock('../action');
jest.mock('../component');
jest.mock('../styles');

describe('Home', () => {
  it('has connected redux props', () => {
    const mockStore = configureMockStore([thunk]);
    const initialState = {
      home: {}
    };
    const assert = {
      actions: {},
      isLoading: false,
      data: []
    };
    initialState.home = {
      isLoading: false,
      data: []
    };
    const store = mockStore(initialState);
    const wrapper = shallow(<Home store={store} />);
    expect(wrapper.props()).toMatchObject(assert);
  });
});
