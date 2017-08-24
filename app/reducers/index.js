import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import feeds from '../modules/feeds/reducer';

const rootReducer = combineReducers({
  feeds,
  routing,
});

export default rootReducer;
