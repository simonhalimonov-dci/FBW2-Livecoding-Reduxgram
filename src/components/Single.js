import React from "react";
import { bindActionCreators } from 'redux'
import { connect } from "react-redux";

// import our actionCreators
import { likePost, addComment } from '../redux/actions/actionCreators'

class Single extends React.Component {
  handleSubmit = e => {
    e.preventDefault()
    // If the author or text is empty, simply do nothing
    if (
    this.refs.commentAuthor.value == "" || this.refs.commentText.value == "" ){return}
    const code = this.props.match.params.code;
    this.props.addComment(code, this.refs.commentAuthor.value, this.refs.commentText.value)
    // Reset the input after we have dispatched the action
    this.refs.commentForm.reset()
  }

  render() {
    const code = this.props.match.params.code;
    const post = this.props.posts.filter(post => post.code == code)[0];
    return (
      <section className="App-section">
        Single Component: {code}
        <div key={post.id}>
          <img src={post.display_src} alt="" />
          <p>{post.caption}</p>
          <div>
            <div
              className="likes"
              onClick={() => this.props.likePost(code)}
            >
              {post.likes}
            </div>
            <div className="comments">
              {this.props.comments[post.code] == undefined
                ? "0"
                : this.props.comments[post.code].length}
            </div>
          </div>
        </div>
        <div className="comments">
          {/* ADD OUR COMMENTS FROM THE CURRENT POST HERE */}
          {this.props.comments[code] &&
            this.props.comments[post.code].map((comment, i) => {
              return (
                <div key={i}>
                  <b>{comment.user}</b> {comment.text}
                </div>
              );
            })}  
          <form ref="commentForm" onSubmit={this.handleSubmit}>
            <input ref="commentAuthor" type="text" placeholder="author" />
            <input ref="commentText" type="text" placeholder="text" />
            <input type="submit" value="" hidden />
          </form>
        </div>
      </section>
    );
  }
}
// This inserts the data from the state into the connected component
const mapStateToProps = state => {
  return { posts: state.posts, comments: state.comments };
};
// This binds the actionCreators functions with the component and the store
const mapDispatchToProps = dispatch => bindActionCreators( {likePost, addComment}, dispatch)
// The connect is like the glue between the React application and the Redux store. It gets the state from the store and passes the data to the props of the component. And it dispatches the actions from the component to the reducer in the store.
export default connect(mapStateToProps, mapDispatchToProps)(Single);