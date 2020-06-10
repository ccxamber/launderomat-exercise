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
    this.state = { weekNumber: 24 }
  }
  changeWeekNumber(direction) {
    const newNumber = this.state.weekNumber + direction
    if (newNumber < 1) {
    } else if (newNumber > 52) {

    } else {
      this.setState((prev) => ({ weekNumber: newNumber }))
    }
  }
  render() {
    return (
      <div>
        <div>
          <button
            onClick={() => this.changeWeekNumber(-1)}
          >&lt;</button>
          <h1>{this.state.weekNumber}</h1>
          <button
            onClick={() => this.changeWeekNumber(+1)}
          >&gt;</button>
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