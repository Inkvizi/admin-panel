import React from 'react'
import { TableRow } from '../TableRow/TableRow'

export function TableBody({ data, onDoubleClick, onSelect, selectedData }) {
  const onClick = (order) => () => {
    onSelect(order)
  }
  const handleDoubleClick = (order) => () => {
    onDoubleClick(order)
  }
  console.log(selectedData)
  return (
    <tbody>
      {data.map((order) => {
        return (
          <TableRow
            key={order.ID}
            order={order}
            onDoubleClick={handleDoubleClick(order)}
            onClick={onClick(order)}
            checked={selectedData.includes(order.ID)}
          />
        )
      })}
    </tbody>
  )
}
