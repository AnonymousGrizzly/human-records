import React, { useState, createContext } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import StatisticsPage from './pages/StatisticsPage'
import HomePage from './pages/HomePage'
import './App.scss'
import './AppStyle.scss'

export const AppContext = createContext();

export default function App() {
  const [dataList, setDataList] = useState([]);

  const handleDelete = (index) => {
    setDataList((prevData) => {
      const updatedData = [...prevData];
      updatedData.splice(index, 1);
      return updatedData;
    });
  }

  const contextValue = {
    dataList,
    setDataList,
    handleDelete,
  }

  return (
    <Router>
      <AppContext.Provider value={ contextValue } >
        <Routes>
          <Route exact path='/' Component={HomePage} />
          <Route path='/statistics' Component={StatisticsPage} />
        </Routes>
      </AppContext.Provider>
    </Router>
  )
}

