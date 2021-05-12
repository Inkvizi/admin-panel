import React from 'react'
import { Header } from '../Header/Header'
import { FilterHeaderPanel } from '../FilterHeaderPanel/FilterHeaderPanel'
import { FilterBodyPanel } from '../FilterBodyPanel/FilterBodyPanel'
import { Table } from '../Table/Table'
import { tableData } from '../../const/tableData'
import { tableHeaderData } from '../../const/tableHeader'

export function Page (props) {
  return (
        <div className="page">
            <Header/>
            <FilterHeaderPanel/>
            <FilterBodyPanel/>
            <Table headerData={tableHeaderData} data={tableData}></Table>
        </div>
  )
}
