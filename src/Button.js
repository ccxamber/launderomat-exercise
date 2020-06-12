import { css } from 'emotion'
import React from 'react'


const getStyle = (type) => {
  const style = css`
    padding: 15px 30px;
    border: none;
    margin: 0px 20px;
    border-radius: 5px;
    background-color: ${type === 'cancel' ? 'red' : 'green'};
    color: white;
    font-size: 18px;
    &:disabled {
      background-color: gray;
    }
  `
  return style
}


class Button extends React.Component {
  render() {
    const style = getStyle(this.props.type)
    return (
      <button
        className={style}
        onClick={this.props.onClick}
        disabled={this.props.disable}
      >
        {this.props.children}
      </button>
    )
  }
}

export default Button