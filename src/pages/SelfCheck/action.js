import { ACTIONS } from '../../constants';

export function getData() {
  return (dispatch) => {
    return setTimeout(() => {
      dispatch({
        type: ACTIONS.SELF_CHECK_DATA,
        data: {
          hello: ''
        }
      });
    }, 100);
  };
}
