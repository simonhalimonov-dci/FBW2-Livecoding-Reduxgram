import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class PhotoGrid extends React.Component {
  render () {
    return (
      <section className="App-section">
        
        {this.props.posts.map(post => {
          return (
            <div key={post.id}>
              <Link to={"/s/" + post.code}>
                <img src={post.display_src} alt=""/>
              </Link>
              <p>{post.caption}</p>
              <div>
                <div 
                  className="likes" 
                  onClick={() => 
                    this.props.dispatch(
                      {type: "LIKE_POST", postCode: post.code}
                    )}
                >
                  {post.likes}
                </div>

                <div className="comments">
                  {this.props.comments[post.code] == undefined ? "0" : this.props.comments[post.code].length}
                </div>
              </div>
            </div>
          )
        })}

      </section>
    )
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts,
    comments: state.comments
  }
}

export default connect(mapStateToProps)(PhotoGrid)