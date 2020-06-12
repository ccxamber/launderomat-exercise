import React from 'react'
import { css } from 'emotion'

import Button from './Button'

const styles = {
  content: css`
  text-align: left;
    display: block;
    box-sizing: border-box;
    min-width: 100px;
  `,
  h1: css`
    font-size: 22px;
  `,
  body: css`
    display: block;
  `,



}

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
      <div className={styles.content}>
        <h1 className={styles.h1}>{this.props.weekday}</h1>
        {this.props.open ? day.map((occasion, index) => {
          return (
            <div className={styles.body}>
              <p className={styles.p}>{occasion.time}</p>
              <Button
                onClick={() => this.props.onStage(index)}
                disable={occasion.reserved
                }>
                boka</Button>
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