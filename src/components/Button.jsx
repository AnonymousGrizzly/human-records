import React from 'react'
import propTypes from 'prop-types'

Button.propTypes = {
  onClick: propTypes.func.isRequired,
  text: propTypes.string,
  className: propTypes.string,
  children: propTypes.node
}

export default function Button({ onClick, text, className, children }) {
  return (
    <button onClick={onClick} className={className}>
      {text || children}
    </button>
  )
}
