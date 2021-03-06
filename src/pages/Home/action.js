import { ACTIONS } from '../../constants';

export function getListOfDevelopers() {
  return (dispatch) => {
    dispatch({ type: ACTIONS.LOADING });

    return setTimeout(() => {
      dispatch({
        type: ACTIONS.LIST_OF_DEVELOPERS_FETCHED,
        data: ['Abdul', 'Rauf', 'Jauhari', 'Mazzidan']
      });
    }, 200);
  };
}
