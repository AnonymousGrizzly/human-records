import React, { useMemo } from 'react'
import { useTable, useGlobalFilter, useSortBy } from 'react-table' // i know 😔
import Button from './Button'
import Input from './Input'
import propTypes from 'prop-types'

Table.propTypes = {
  data: propTypes.array.isRequired,
  onDelete: propTypes.func.isRequired,
}

// Description: This component is used to create a table and it's search bar
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

  // react table hook
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter,
  } = useTable({ columns, data }, useGlobalFilter, useSortBy)

  // global filter
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
              <th>&#8197;&#8197;&#8197;⬇&#8197;&#8197;&#8197;</th>
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
                  <Button onClick={() => onDelete(row.index)} text='╳'/>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
