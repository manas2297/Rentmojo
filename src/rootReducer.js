import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import usersReducer from './containers/home/reducer';
import postReducer from './containers/Posts/reducer';
import postDetailsReducer from './containers/PostDetails/reducer';
export default (history) => combineReducers({
  router: connectRouter(history),
  userState: usersReducer,
  postState: postReducer,
  postDetailsState: postDetailsReducer,
});