import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import { reducer as ui } from 'redux-ui/transpiled';
import { reducer as form }  from 'redux-form';
export default combineReducers({
  routing,
  ui,
  form
});