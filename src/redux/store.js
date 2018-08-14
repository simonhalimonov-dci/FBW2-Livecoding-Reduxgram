// import redux
import { createStore } from 'redux'
// import data
import posts from './data/posts'
import comments from './data/comments'
// import rootReducers
import rootReducer from './reducers/rootReducer'

// load the posts and comments as defaultData
const defaultData = {posts:posts, comments: comments}  

const store = createStore(rootReducer, defaultData)

export default store