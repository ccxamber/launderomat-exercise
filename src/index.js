import React from 'react'
import ReactDOM from 'react-dom'

import Day from './Day'
import Modal from './Modal'


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
    this.state = {
      stagedOccasion: null,
      weekNumber: 24,
      bookedOccasions: [{ weekNumber: 24, weekday: 'Måndag', occasionIndex: 2 }]
    }
  }
  changeWeekNumber(direction) {
    const newNumber = this.state.weekNumber + direction
    if (newNumber < 1) {
    } else if (newNumber > 52) {

    } else {
      this.setState((prev) => ({ weekNumber: newNumber }))
    }
  }
  sortBookedOccasions(weekNumber, weekday) {
    const bookings = this.state.bookedOccasions
      .filter((bookedOccasion) => bookedOccasion.weekNumber === weekNumber)
      .filter((bookedOccasion) => bookedOccasion.weekday === weekday)
    return bookings.map((booking) => booking.occasionIndex)
  }
  onBooking(weekNumber, weekday, occasionIndex) {
    this.setState((prev) => ({
      bookedOccasions: [...prev.bookedOccasions, {
        weekNumber: weekNumber,
        weekday: weekday,
        occasionIndex: occasionIndex
      }]
    }))
    this.setState(() => ({ stagedOccasion: null }))
  }
  onStage(weekday, occasionIndex) {
    this.setState({ stagedOccasion: { weekday: weekday, occasionIndex: occasionIndex } })
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
                  onStage={(occasionIndex) => this.onStage(weekday.name, occasionIndex)}
                  bookedOccasions={this.sortBookedOccasions(this.state.weekNumber, weekday.name)}
                  weekNumber={this.state.weekNumber}
                  weekday={weekday.name}
                  open={weekday.open}
                />
              </li>
            )
          })}
        </ul>
        {!(this.state.stagedOccasion === null) && (
          <Modal
            onBookingett={() => this.onBooking(this.state.weekNumber, this.state.stagedOccasion.weekday, this.state.stagedOccasion.occasionIndex)}
          />
        )}
      </div>
    )
  }
}

ReactDOM.render(<Root />, document.getElementById('root'))