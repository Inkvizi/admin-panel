import React from 'react'
import styles from './FilterHeaderPanel.module.css'
import { SearchBox } from '../SearchBox/SearchBox'
import { FilterShowButton } from '../FilterShowButton/FilterShowButton'

export function FilterHeaderPanel(props) {
  return (
    <div className={styles._}>
      <SearchBox></SearchBox>
      <FilterShowButton></FilterShowButton>
      <div></div>
    </div>
  )
}
