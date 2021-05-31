import React from 'react'
import styles from './FilterHeaderPanel.module.css'
import { SearchBox } from '../SearchBox/SearchBox'
import { FilterShowButton } from '../FilterShowButton/FilterShowButton'

export function FilterHeaderPanel({ handleFilter, value }) {
  const handleClear = () => {
    handleFilter('')
  }

  return (
    <div className={styles._}>
      <SearchBox onChange={handleFilter} onClear={handleClear} value={value} />
      <FilterShowButton />
    </div>
  )
}
