import { combineReducers } from "redux"
import commentReducer from "./commentReducer";
import postReducer from "./postReducer";

const rootReducer = combineReducers({
  posts: postReducer,
  comments: commentReducer,
})

export default rootReducer;
