import { combineReducers } from 'redux';
import home from '../pages/Home/reducer';
import selfCheck from '../pages/SelfCheck/reducer';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  home,
  selfCheck,
  form: formReducer
});

export default rootReducer;
