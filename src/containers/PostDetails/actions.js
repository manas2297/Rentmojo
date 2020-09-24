import {
  GET_POST_DETAILS_START,
  GET_COMMENTS_START, 
  DELETE_POST_START,
} from './constants';

export function resetList() {
  return {
    type: 'RESET',
  };
}
export function getPostDetails(params){
  return {
    type: GET_POST_DETAILS_START,
    payload: params,
  };
}
export function getComments(params){
  return {
    type: GET_COMMENTS_START,
    payload: params,
  };
};

export function deletePost(params) {
  return {
    type: DELETE_POST_START,
    payload: params,
  };
};