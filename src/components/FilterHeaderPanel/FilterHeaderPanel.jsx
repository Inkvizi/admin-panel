import React, { useState } from 'react'
import styles from './FilterHeaderPanel.module.css'
import { SearchBox } from '../SearchBox/SearchBox'
import { FilterShowButton } from '../FilterShowButton/FilterShowButton'

export function FilterHeaderPanel(properties) {
  const [filterValue, setFilterValue] = useState('')
  const handleClear = () => {
    setFilterValue('')
  }
  const handleChange = ({ target: { value } }) => {
    setFilterValue(value)
  }
  return (
    <div className={styles._}>
      <SearchBox
        onChange={handleChange}
        onClear={handleClear}
        value={filterValue}></SearchBox>
      <FilterShowButton></FilterShowButton>
      <div></div>
    </div>
  )
}
