import React from 'react'
import propTypes from 'prop-types'

StatisticsRow.propTypes = {
  text: propTypes.string.isRequired,
  value: propTypes.any.isRequired,
}

export default function StatisticsRow({ text, value}) {
  return (
    <tr>
      <th>{text}</th>
      <td>{value}</td>
    </tr>
  )
}