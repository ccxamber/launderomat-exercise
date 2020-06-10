import React from 'react'
import ReactDOM from 'react-dom'

import Day from './Day'

const weekdays = [
  { name: 'Måndag', open: true },
  { name: 'Tisdag', open: true },
  { name: 'Onsdag', open: true },
  { name: 'Torsdag', open: true },
  { name: 'Fredag', open: true },
  { name: 'Lördag', open: false },
  { name: 'Söndag', open: false },
]

class Root extends React.Component {
  render() {
    return (
      <ul>
        {weekdays.map((weekday) => {
          return (
            <li>
              <Day
                weekday={weekday.name}
                open={weekday.open}
              />
            </li>
          )
        })}
      </ul>
    )
  }
}

ReactDOM.render(<Root />, document.getElementById('root'))