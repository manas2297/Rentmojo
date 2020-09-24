import { GET_POST_DETAILS_START } from './constants'
export function getPostDetails(params){
  return {
    type: GET_POST_DETAILS_START,
    payload: params,
  };
}