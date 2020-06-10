import React from 'react'

const occasions = [
  { time: '06:00-09:00', reserved: false },
  { time: '09:00-12:00', reserved: false },
  { time: '12:00-15:00', reserved: false },
  { time: '15:00-18:00', reserved: false },
]

class Day extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.weekday}</h1>
        {occasions.map((occasion) => {
          return (
            <div>
              <p>{occasion.time}</p>
              <button
                disabled={occasion.reserved
                }>
                boka</button>
            </div>
          )
        })}
      </div>

    )
  }
}

export default Day