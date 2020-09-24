import { GET_POST_DETAILS_START, GET_POST_DETAILS_SUCCESS, GET_POST_DETAILS_FAILED, GET_COMMENTS_START, GET_COMMENTS_SUCCESS, GET_COMMENTS_FAILED, DELETE_POST_START, DELETE_POST_SUCCESS, DELETE_POST_FAILED } from "./constants"

const initState = {
  postDetails: '',
  isPostDetailsFetched: false,
  comments: [],
  isError: false,
  isCommentsFetched: false,
}

export default (state = initState, action) => {
  switch (action.type) {
    case GET_POST_DETAILS_START:
      return {
        ...state,
        isPostDetailsFetched: false,
        postDetails: '',
      };
    case GET_POST_DETAILS_SUCCESS:
      return {
        ...state,
        postDetails: action.payload,
        isPostDetailsFetched: true,
      };
    case GET_POST_DETAILS_FAILED:
      return {
        ...state,
        postDetails: '',
        isPostDetailsFetched: true,
        isError: true,
      };
    case GET_COMMENTS_START:
      return {
        ...state,
        comments: [],
        isCommentsFetched: false,
      };
    case GET_COMMENTS_SUCCESS:
      return {
        ...state,
        comments: action.payload,
        isCommentsFetched: true,
      };
    case GET_COMMENTS_FAILED:
      return {
        ...state,
        comments: [],
        isCommentsFetched: true,
        isError: true,
      }
    case DELETE_POST_START:
      return {
        ...state,
        isError: false,
        isPostDeleted: false,
      };
    case DELETE_POST_SUCCESS:
      return {
        ...state,
        isError: false,
        isPostDeleted: true,
      };
    case DELETE_POST_FAILED:
      return {
        ...state,
        isError: true,
        isPostDeleted: false,
      }
    default:
      return state
  };
}