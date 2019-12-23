import { ACTIONS } from '../../constants';

const initialState = {
  data: []
};

export default function reducer(state = initialState, action) {
  const { type, data } = action;
  switch (type) {
    case ACTIONS.LIST_OF_DEVELOPERS_FETCHED:
      return {
        ...state,
        isLoading: false,
        data
      };
    default:
      return state;
  }
}
