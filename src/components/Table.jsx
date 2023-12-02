import React, { useMemo } from 'react'
import { useTable, useGlobalFilter, useSortBy } from 'react-table' // i know 😔
import Button from './Button'
import Input from './Input'
import propTypes from 'prop-types'

Table.propTypes = {
  data: propTypes.array.isRequired,
  onDelete: propTypes.func.isRequired,
}


export default function Table({ data, onDelete }) {
  const columns = useMemo(
    () => [
      { Header: 'Name', accessor: 'name' },
      { Header: 'Surname', accessor: 'surname' },
      { Header: 'Age', accessor: 'age' },
      { Header: 'Address', accessor: 'address' },
      { Header: 'Gender', accessor: 'gender' },
      { Header: 'Weight', accessor: 'weight' },
      { Header: 'Height', accessor: 'height' },
      { Header: 'BMI', accessor: 'bmi' },
      { Header: 'Team', accessor: 'team' },
    ],
    []
  )

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter,
  } = useTable({ columns, data }, useGlobalFilter, useSortBy)

  const { globalFilter } = state

  return (
    <div>
      <div>
        <Input 
          value={globalFilter || ''}
          onChange={e => setGlobalFilter(e.target.value)}
          placeholder='Search...'
          id='search'
          pretext='Search:'
        />
      </div>
      <table {...getTableProps()} >
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render('Header')}
                  {column.isSorted ? (column.isSortedDesc ? ' ▼' : ' ▲') : ' '}
                </th>
              ))}
              <th>⬇</th>
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => (
                  <td {...cell.getCellProps()}>
                    {cell.render('Cell')}
                  </td>
                ))}
                <td>
                  <Button onClick={() => onDelete(row.index)} text='╳' className={'deleteButton'}/>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
