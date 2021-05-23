import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleFilterPanelVisible } from '../../actionCreators/toggleFilterPanelVisible'
import styles from './FilterShowButton.module.css'

export function FilterShowButton() {
  const dispatch = useDispatch()
  const changePanelVisible = () => {
    dispatch(toggleFilterPanelVisible())
  }
  return (
    <div className={styles._}>
      <button
        className={styles.button}
        type="button"
        onClick={changePanelVisible}>
        Фильтры
      </button>
    </div>
  )
}
