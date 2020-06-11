import React from 'react'
import ReactDOM from 'react-dom'

import Day from './Day'
import Modal from './Modal'

const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

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
      emailInput: { regex: emailRegex, value: '', valid: null },
      nameInput: { regex: /^[a-zåäö]+$/i, value: '', valid: null },
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
    const keyArray = ['nameInput', 'emailInput']
    Promise.all(keyArray.map((key) => this.validateField(key))).then(() => {
      if (this.validateForm()) {
        this.setState((prev) => ({
          bookedOccasions: [...prev.bookedOccasions, {
            weekNumber: weekNumber,
            weekday: weekday,
            occasionIndex: occasionIndex
          }]
        }))
        this.setState(() => ({ stagedOccasion: null }))
      } else {
        console.log('no')
      }
    })
  }
  onBookingCancel() {
    this.setState({ stagedOccasion: null })
  }
  onInputChange(key, value) {
    this.setState(
      (prev) => ({ [key]: { ...prev[key], value: value } })
    )
    console.log(value)
  }
  onStage(weekday, occasionIndex) {
    this.setState({ stagedOccasion: { weekday: weekday, occasionIndex: occasionIndex } })
  }
  validateField(key) {
    return new Promise((resolve) => {
      this.setState((prev) => {
        return {
          [key]: {
            ...prev[key],
            valid: prev[key].regex.test(this.state[key].value)
          }
        }
      }, resolve)
    })
  }
  validateForm() {
    const { emailInput, nameInput } = this.state
    const inputArray = [emailInput, nameInput,]
    return inputArray.every((input) => {
      return input.valid
    })
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
            onInputChange={(key, value) => this.onInputChange(key, value)}
            onCancel={() => this.onBookingCancel()}
            onBookingett={() => this.onBooking(this.state.weekNumber, this.state.stagedOccasion.weekday, this.state.stagedOccasion.occasionIndex)}
          />
        )}
      </div>
    )
  }
}

ReactDOM.render(<Root />, document.getElementById('root'))