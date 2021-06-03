import React from 'react'
import styles from './FilterHeaderPanel.module.css'
import { SearchBox } from '../SearchBox/SearchBox'
import { FilterShowButton } from '../FilterShowButton/FilterShowButton'

export function FilterHeaderPanel({ onFilter, value }) {
  const onClear = () => {
    onFilter('')
  }

  return (
    <div className={styles._}>
      <SearchBox onChange={onFilter} onClear={onClear} value={value} />
      <FilterShowButton />
    </div>
  )
}
