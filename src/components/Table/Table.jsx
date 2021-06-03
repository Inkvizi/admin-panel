import React, { useEffect, useState } from 'react'
import styles from './Table.module.css'
import { TableHeader } from './TableHeader/TableHeader'
import { TableBody } from './TableBody/TableBody'
import { TableFooter } from './TableFooter/TableFooter'

export function Table({
  headerData,
  data,
  selectedData,
  needRefreshData,
  onDoubleClick,
  onSelect,
  onDelete,
  onChangeStatus,
}) {
  const [currentOrders, setCurrentOrders] = useState([])
  useEffect(() => {
    setCurrentOrders([...data])
  }, [])
  console.log(selectedData)

  const onPageChanged = ({ currentPage, pageLimit }) => {
    const offset = (currentPage - 1) * pageLimit
    setCurrentOrders(data.slice(offset, offset + pageLimit))
  }

  return (
    <div className={styles._}>
      <table className={styles.table}>
        <TableFooter
          onPageChanged={onPageChanged}
          totalRecords={data.length}
          selectedRecords={selectedData.length}
          needRefreshPage={needRefreshData}
          onDelete={onDelete}
          onChangeStatus={onChangeStatus}
        />
        <TableHeader headerData={headerData} />
        <TableBody
          data={currentOrders}
          onDoubleClick={onDoubleClick}
          onSelect={onSelect}
          selectedData={selectedData}
        />
      </table>
    </div>
  )
}
