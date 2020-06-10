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
  constructor() {
    super()
    this.state = { weekNumber: 1 }
  }
  render() {
    return (
      <div>
        <div>
          <button>&lt;</button>
          <h1>{this.state.weekNumber}</h1>
          <button>&gt;</button>
        </div>
        <ul>
          {weekdays.map((weekday) => {
            return (
              <li>
                <Day
                  weekNumber={this.state.weekNumber}
                  weekday={weekday.name}
                  open={weekday.open}
                />
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

ReactDOM.render(<Root />, document.getElementById('root'))