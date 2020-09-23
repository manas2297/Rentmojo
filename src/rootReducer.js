import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import usersReducer from './containers/home/reducer';
import postReducer from './containers/Posts/reducer';
export default (history) => combineReducers({
  router: connectRouter(history),
  userState: usersReducer,
  postState: postReducer,
});