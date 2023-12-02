import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../App'
import XMLReader from '../components/XMLReader'
import Statistics from '../components/Statistics'

export default function StatisticsPage() {
  const { dataList, setDataList } = useContext(AppContext);

  const handleXmlSubmit = (data) => {
    setDataList([...dataList, ...data]);
  }

  return (
    <div id='statisticsPage'>
      <div id='statistics'>
        {dataList.length === 0 
        ? <h2>No Human Data ◄</h2> 
        : <>
            <h2>Statistics ►</h2>
            <Statistics data={dataList}/>
          </>
        }
      </div>
      <div id='xmlReader'>
        <XMLReader onXMLSubmit={handleXmlSubmit}/>
        <Link to='/'>◄ Back</Link>
      </div>
    </div>
  )
}
