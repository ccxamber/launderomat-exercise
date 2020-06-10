import React from 'react'

const defaultOccasions = [
  { time: '06:00-09:00', reserved: false },
  { time: '09:00-12:00', reserved: false },
  { time: '12:00-15:00', reserved: false },
  { time: '15:00-18:00', reserved: false },
]

class Day extends React.Component {
  buildDay(bookedOccasions) {
    if (bookedOccasions.length === 0) {
      return defaultOccasions
    } else {
      return defaultOccasions.map((occasion, index) => {
        if (bookedOccasions.includes(index)) {
          return { ...occasion, reserved: true }
        } else { return occasion }
      })
      //return bookedOccasions.map((bookedOccasion) => ({ ...defaultOccasions, [bookedOccasion]: {reserved: true }))
    }
  }
  render() {
    const day = this.buildDay(this.props.bookedOccasions)
    return (
      <div>
        <h1>{this.props.weekday}</h1>
        {this.props.open ? day.map((occasion, index) => {
          return (
            <div>
              <p>{occasion.time}</p>
              <button
                onClick={() => this.props.onBooking(index)}
                disabled={occasion.reserved
                }>
                boka</button>
            </div>
          )
        }) :
          <div>
            <p>Stängt</p>
          </div>
        }
      </div>

    )
  }
}

export default Day