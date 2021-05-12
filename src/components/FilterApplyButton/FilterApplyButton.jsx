import styles from './FilterApplyButton.module.css'
import React from 'react'

export function FilterApplyButton(props) {
  return (
    <div className={styles._}>
      <button className={styles.buttonApply} type="button">
        Применить
      </button>
    </div>
  )
}
