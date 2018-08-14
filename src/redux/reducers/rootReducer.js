// import the combineReducer helper function from redux
import { combineReducers } from "redux";

// import OUR reducers
import postsReducer from "./posts";
import commentsReducer from "./comments";

const rootReducer = combineReducers({
  posts: postsReducer,
  comments: commentsReducer
});

export default rootReducer;
