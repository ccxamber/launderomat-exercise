import React from 'react'

class Modal extends React.Component {
  render() {
    return (
      <div>
        <input type="text" />
        <input type="email" />
        <button onClick={() => this.props.onBookingett()}
        >Boka</button>
      </div>
    )
  }
}

export default Modal