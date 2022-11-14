import {
    FETCH_POST_DATA,
    FETCH_POST_DETAILS,
    DELETE_POST
  } from "../types";
  const initialState = {
    posts: [],
    post: {},
    loading: true,
  };

  
  const postReducer = (state = initialState, action) => {
    const { type, payload } = action;
  
    switch (type) {
      case FETCH_POST_DATA:
        return {
          ...state,
          posts: payload,
          loading: false,
        };
      case FETCH_POST_DETAILS:
        return {
          ...state,
          categories: payload,
          loading: false,
        };
      case DELETE_POST:
        return {
          ...state,
          posts: payload,
          loading: false,
        };
  
      default:
        return state;
      //break;
    }
  };
  export default postReducer;
  