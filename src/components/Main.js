import React from 'react'
import { Link } from 'react-router-dom'

class Main extends React.Component {
  render () {
    return (
      <div>
        <header className="App-header">
          <Link to="/">
            Reduxgram 2018! HYPE! 🐸
          </Link>
        </header>
        {this.props.children}
      </div>
    )
  }
}
export default Main