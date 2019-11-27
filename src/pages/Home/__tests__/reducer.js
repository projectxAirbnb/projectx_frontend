import reducer from '../reducer';
import { ACTIONS } from '../../../constants';

describe('Home reducer', () => {
  it('returns desired state when given LOADING action', () => {
    const action = { type: ACTIONS.LOADING };
    expect(reducer(undefined, action)).toHaveProperty('isLoading', true);
  });
  it('returns desired state when given LIST_OF_DEVELOPERS_FETCHED action', () => {
    const action = {
      type: ACTIONS.LIST_OF_DEVELOPERS_FETCHED,
      data: [1, 2, 3]
    };
    const assert = {
      isLoading: false,
      data: [1, 2, 3]
    };
    expect(reducer(undefined, action)).toMatchObject(assert);
  });
  it('returns initial state when given other actions', () => {
    const action = { type: 'x' };
    const assert = {
      isLoading: false,
      data: []
    };
    expect(reducer(undefined, action)).toMatchObject(assert);
  });
});
