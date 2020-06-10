import React from 'react'

class Day extends React.Component {
  constructor() {
    super()
    this.state = {
      occasion1: { time: '06:00-09:00', reserved: false },
      occasion2: { time: '09:00-12:00', reserved: false },
      occasion3: { time: '12:00-15:00', reserved: false },
      occasion4: { time: '15:00-18:00', reserved: false },
    }
  }
  render() {
    return (
      <div>
        <h1>{this.props.weekday}</h1>
        {this.props.open ? Object.keys(this.state).map((key) => {
          return (
            <div>
              <p>{this.state[key].time}</p>
              <button
                disabled={this.state[key].reserved
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