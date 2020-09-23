import { GET_USERS_SUCCESS, GET_USERS_START, GET_USERS_FAILED } from "./constants";

const initialState = {
  usersData:[],
  isUserFetched: false,
  isError: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS_START: 
      return {
        ...state,
        isUserFetched: false,
        isError: false,
      };
    case GET_USERS_SUCCESS:
    console.log(action.payload);
    return {
      ...state,
      usersData: action.payload,
      isUserFetched: true,
    };
    case GET_USERS_FAILED:
      return {
        ...state,
        isUserFetched: true,
        isError: true,
      };
    default:
      return state
  }
}