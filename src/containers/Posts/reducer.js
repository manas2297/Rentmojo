import { GET_USER_POST_START, GET_USER_POST_SUCCESS, GET_USER_POST_FAILED } from "./constant";

const initialState = {
  posts: [],
  isPostsFetched: false,
  isError: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_POST_START:
      return {
        ...state,
        isPostsFetched: false,
        isError: false,
      };
    case GET_USER_POST_SUCCESS:
      return {
        ...state,
        posts: action.payload,
        isPostsFetched: true,
      };
    case GET_USER_POST_FAILED:
      return {
        ...state,
        isPostsFetched: true,
        isError: true,
      };
    default:
      return {
        ...state,
      };
  };
};