import React from 'react'

class Day extends React.Component {
  constructor() {
    super()
    this.state = {
      occation1: { time: '06:00-09:00', reserved: false },
      occation2: { time: '09:00-12:00', reserved: false },
      occation3: { time: '12:00-15:00', reserved: false },
      occation4: { time: '15:00-18:00', reserved: false },
    }
  }
  render() {
    return (
      <div>
        <h1>{this.props.weekday}</h1>
        {Object.keys(this.state).map((key) => {
          return (
            <div>
              <p>{this.state[key].time}</p>
              <button
                disabled={this.state[key].reserved
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