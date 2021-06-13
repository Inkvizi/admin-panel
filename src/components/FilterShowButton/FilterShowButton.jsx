import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleFilterPanelVisible } from 'features/Orders/ordersViewSlice'
import styles from './FilterShowButton.module.css'

export function FilterShowButton() {
  const dispatch = useDispatch()
  const changePanelVisible = () => {
    dispatch(toggleFilterPanelVisible())
  }
  return (
    <button className={styles._} type="button" onClick={changePanelVisible}>
      Фильтры
    </button>
  )
}
