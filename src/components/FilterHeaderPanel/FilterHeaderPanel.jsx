import React, { useState } from 'react'
import styles from './FilterHeaderPanel.module.css'
import { SearchBox } from '../SearchBox/SearchBox'
import { FilterShowButton } from '../FilterShowButton/FilterShowButton'

export function FilterHeaderPanel(properties) {
  const [filterValue, setFilterValue] = useState('')
  const updateFilter = (value) => {
    setFilterValue(value)
  }
  const clearFilter = () => {
    setFilterValue('')
  }
  return (
    <div className={styles._}>
      <SearchBox
        onChange={(event) => updateFilter(event.target.value)}
        onClear={() => clearFilter()}
        value={filterValue}></SearchBox>
      <FilterShowButton></FilterShowButton>
      <div></div>
    </div>
  )
}
