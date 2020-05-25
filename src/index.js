import React from 'react'
import ReactDOM from 'react-dom'

class Root extends React.Component {
  render() {
    return (
      <h1>Neon</h1>
    )
  }
}

ReactDOM.render(<Root />, document.getElementById('root'))