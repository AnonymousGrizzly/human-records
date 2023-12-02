import React from 'react'
import propTypes from 'prop-types'

Statistics.propTypes = {
  data: propTypes.array.isRequired,
}

export default function Statistics({ data }) {
  const totalLength = data.length;

  //average statistics
  const averageAge = data.reduce((sum, person) => sum + parseInt(person.age), 0) / totalLength;
  const averageWeight = data.reduce((sum, person) => sum + parseInt(person.weight), 0)/ totalLength;
  const averageHeight = data.reduce((sum, person) => sum + parseInt(person.height), 0)/ totalLength;
  
  // team statistics
  const redTeamSize = data.filter(person => person.team === 'Red').length;
  const blueTeamSize = data.filter(person => person.team === 'Blue').length;
  const neutralTeamSize = data.filter(person => person.team === 'Neutral').length;

  const averageBlueTeamAge = blueTeamSize > 0
    ? data.filter(person => person.team === 'Blue').reduce((sum, person) => sum + parseInt(person.age), 0) / blueTeamSize
    : 0;

  const averageRedTeamAge = redTeamSize > 0
    ? data.filter(person => person.team === 'Red').reduce((sum, person) => sum + parseInt(person.age), 0) / redTeamSize
    : 0;

  // Very specific statistics
  const averageHealthyRedTeamAge = redTeamSize > 0
    ? data.filter(
        person => person.team === 'Red' &&
        person.bmi >= 18.5 &&
        person.bmi < 25
      ).reduce((sum, person) => sum + parseInt(person.age), 0) / redTeamSize
    : 0;

  const averageHealthyBlueTeamAge = blueTeamSize > 0
    ? data.filter(
        person => person.team === 'Blue' &&
        person.bmi >= 18.5 &&
        person.bmi < 25
      ).reduce((sum, person) => sum + parseInt(person.age), 0) / blueTeamSize
    : 0;

  return (
    <div>
      <label> Average Age: {averageAge.toFixed(2)}</label>
      <label> Average Weight: {averageWeight.toFixed(2)}</label>
      <label> Average Height: {averageHeight.toFixed(2)}</label>
      <label> Red Team Size: {redTeamSize}</label>
      <label> Blue Team Size: {blueTeamSize}</label>
      <label> Neutral Team Size: {neutralTeamSize}</label>
      <label> Average Red Team Age: {averageRedTeamAge.toFixed(2)}</label>
      <label> Average Blue Team Age: {averageBlueTeamAge.toFixed(2)}</label>
      <label> Average Healthy Red Team Age: {averageHealthyRedTeamAge.toFixed(2)}</label>
      <label> Average Healthy Blue Team Age: {averageHealthyBlueTeamAge.toFixed(2)}</label>
    </div>
  )
}
