import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import exchange from './exchangeReducer';

export default combineReducers({
  routing: routerReducer,
  exchange,
});
