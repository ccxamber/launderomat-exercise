import React from 'react'
import { css } from 'emotion'

import Button from './Button'

const styles = {
  modalContainer: css`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(200, 200, 200, 0.8);
  `,
  modalContent: css`
    margin: 0px;
    padding: 20px;
    display: block;
    width: 400px;
    background-color: white;
    text-align: center;
  `,
  input: css`
    width: 100%;
    box-sizing: border-box;
    display: block;
    margin: 10px 0px;
    padding: 12px;
    border-radius: 4px;
    border: 1px solid #828282;
    font-size: 16px;
  `,
  inputContainer: css`
    margin: 0px;
    display: block;
    width: 100%;
    text-align: left;
  `
}

class Modal extends React.Component {
  render() {
    return (
      <div className={styles.modalContainer}>
        <div className={styles.modalContent}>
          <div className={styles.inputContainer}>
            <label>Namn</label>
            <input onChange={(event) => this.props.onInputChange('nameInput', event.target.value)}
              className={styles.input} type="text" />
          </div>
          <div className={styles.inputContainer}>
            <label>E-post</label>
            <input onChange={(event) => this.props.onInputChange('emailInput', event.target.value)}
              className={styles.input} type="email" />
          </div>
          <Button
            onClick={() => this.props.onCancel()}
            type='cancel'
          >Avbryt</Button>
          <Button onClick={() => this.props.onBookingett()}
          >Boka</Button>
        </div>
      </div>
    )
  }
}

export default Modal