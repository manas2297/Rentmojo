import { GET_POST_DETAILS_START, GET_POST_DETAILS_SUCCESS, GET_POST_DETAILS_FAILED } from "./constants"

const initState = {
  postDetails: '',
  isPostDetailsFetched: true,
  comments: [],
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
      }
    default: 
      return state
  };
}