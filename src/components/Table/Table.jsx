import React, { useEffect, useState } from 'react'
import styles from './Table.module.css'
import { TableHeader } from './TableHeader/TableHeader'
import { TableBody } from './TableBody/TableBody'
import { TableFooter } from './TableFooter/TableFooter'

export function Table({
  headerData,
  data,
  selectedData,
  onDoubleClick,
  onSelect,
  onDelete,
}) {
  const [currentOrders, setCurrentOrders] = useState([])
  useEffect(() => {
    setCurrentOrders([...data])
  }, [])

  const onPageChanged = (paginationData) => {
    const { currentPage, pageLimit } = paginationData
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
          onDelete={onDelete}
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
