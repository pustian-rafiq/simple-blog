import {
    FETCH_COMMENT_DATA,
    FETCH_COMMENT_DETAILS
  } from "../types";
  const initialState = {
    comments: [],
    comment: {},
    loading: true,
  };

  
  const commentReducer = (state = initialState, action) => {
    const { type, payload } = action;
  
    switch (type) {
      case FETCH_COMMENT_DATA:
        return {
          ...state,
          comments: payload,
          loading: false,
        };
      case FETCH_COMMENT_DETAILS:
        return {
          ...state,
          comment: payload,
          loading: false,
        };
  
      default:
        return state;
      //break;
    }
  };
  export default commentReducer;
  