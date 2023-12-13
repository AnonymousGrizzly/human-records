import React from 'react'
import propTypes from 'prop-types'
import StatisticsRow from './StatisticsRow';

Statistics.propTypes = {
  data: propTypes.array.isRequired,
}

// Description: This component is used to handle statistics calculations
export default function Statistics({ data }) {
  const totalLength = data.length;

  // average statistics
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
      <table>
        <thead>
          <tr>
            <th>Statistic</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <StatisticsRow text='Total People' value={totalLength} />
          <StatisticsRow text='Average Age' value={averageAge.toFixed(2)} />
          <StatisticsRow text='Average Weight' value={averageWeight.toFixed(1)} />
          <StatisticsRow text='Average Height' value={averageHeight.toFixed(1)} />
          <StatisticsRow text='Red Team Size' value={redTeamSize} />
          <StatisticsRow text='Blue Team Size' value={blueTeamSize} />
          <StatisticsRow text='Neutral Team Size' value={neutralTeamSize} />
          <StatisticsRow text='Average Red Team Age' value={averageRedTeamAge.toFixed(2)} />
          <StatisticsRow text='Average Blue Team Age' value={averageBlueTeamAge.toFixed(2)} />
          <StatisticsRow text='Average Healthy Red Team Age' value={averageHealthyRedTeamAge.toFixed(2)} />
          <StatisticsRow text='Average Healthy Blue Team Age' value={averageHealthyBlueTeamAge.toFixed(2)} />
        </tbody>
      </table>
    </div>
  )
}
