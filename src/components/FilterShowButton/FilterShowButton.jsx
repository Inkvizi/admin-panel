import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { toggleFilterPanelVisible } from '../../store/actionCreators/toggleFilterPanelVisible'
import styles from './FilterShowButton.module.css'

export function FilterShowButton(properties) {
  const dispatch = useDispatch()
  const changePanelVisible = useCallback(
    () => dispatch(toggleFilterPanelVisible()),
    [dispatch]
  )
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
