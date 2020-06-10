import React from 'react'
import ReactDOM from 'react-dom'

import Day from './Day'

class Root extends React.Component {
  render() {
    return (
      <ul>
        <li>
          <div>
            <Day weekday="måndag" />
          </div>
        </li>
      </ul>
    )
  }
}

ReactDOM.render(<Root />, document.getElementById('root'))