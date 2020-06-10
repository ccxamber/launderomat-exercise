import React from 'react'
import ReactDOM from 'react-dom'

import Day from './Day'

const weekdays = [
  { weekday: 'Måndag', open: true },
  { weekday: 'Tisdag', open: true },
  { weekday: 'Onsdag', open: true },
  { weekday: 'Torsdag', open: true },
  { weekday: 'Fredag', open: true },
  { weekday: 'Lördag', open: false },
  { weekday: 'Söndag', open: false },
]

class Root extends React.Component {
  render() {
    return (
      <ul>
        {weekdays.map((weekday) => {
          return (
            <li>
              <Day weekday={weekday.weekday} />
            </li>
          )
        })}
      </ul>
    )
  }
}

ReactDOM.render(<Root />, document.getElementById('root'))