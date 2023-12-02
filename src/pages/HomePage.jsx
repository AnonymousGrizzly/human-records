import React, { useContext } from 'react'
import Table from '../components/Table'
import Form from '../components/Form'
import { AppContext } from '../App'
import { Link } from 'react-router-dom';

export default function HomePage() {
    const { dataList, setDataList, handleDelete } = useContext(AppContext);

    const handleFormSubmit = (data) => {
      setDataList([...dataList, data]);
    }

  return (
    <div id='home'>
      <div id='form'>
        <h2>Human Records ◄</h2>
          <Form onFormSubmit={handleFormSubmit} />
      </div>
      <div id='table'>
        <Table data={dataList} onDelete={handleDelete} />
        <Link to='/statistics'>Statistics ►</Link> 
      </div>
    </div>
  )
}
