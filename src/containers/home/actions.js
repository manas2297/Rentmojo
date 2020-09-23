import { GET_USERS_START } from "./constants";

export function getCases(params){
  console.log("here");
  return {
    type: 'GET_CASES_START',
    payload: params,
  }
};

export function getUsers(params) {
  return {
    type: GET_USERS_START,
    payload: params,
  }
}