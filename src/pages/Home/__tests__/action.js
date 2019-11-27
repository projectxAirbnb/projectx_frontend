import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../action';
import { ACTIONS } from '../../../constants';

jest.mock('react-router-dom');
jest.useFakeTimers();

describe('Home actions', () => {
  const mockStore = configureMockStore([thunk]);
  const initialState = {
    isLoading: false,
    data: []
  };

  it('dispatches action LIST_OF_DEVELOPERS_FETCHED', () => {
    const store = mockStore(initialState);
    const assert = [
      {
        type: ACTIONS.LOADING
      },
      {
        type: ACTIONS.LIST_OF_DEVELOPERS_FETCHED,
        data: ['Acus', 'Alif', 'Faezal', 'Oka']
      }
    ];
    store.dispatch(actions.getListOfDevelopers());
    jest.runAllTimers();
    expect(store.getActions()).toEqual(assert);
  });
});
