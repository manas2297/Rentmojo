import { GET_USER_POST_START } from "./constant"

export const getPostsList = (params) => {
  return {
    type: GET_USER_POST_START,
    payload: params,
  };
};
export function resetList() {
  return {
    type: 'RESET',
  };
}