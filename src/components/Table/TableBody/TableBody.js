import React from 'react'
import { TableRow } from '../TableRow/TableRow'

export function TableBody({ data, onDoubleClick, onSelect, selectedData }) {
  const tableData = data.map((order) => {
    const onClick = () => onSelect(order)
    const onDblClick = () => onDoubleClick(order)
    return (
      <TableRow
        key={order.ID}
        order={order}
        onDblClick={onDblClick}
        onClick={onClick}
        checked={selectedData.includes(order.ID)}
      />
    )
  })
  return <tbody>{tableData}</tbody>
}
