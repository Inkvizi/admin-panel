import React from 'react'
import styles from './FilterApplyButton.module.css'

export function FilterApplyButton(properties) {
  return (
    <div className={styles._}>
      <button className={styles.buttonApply} type="button">
        Применить
      </button>
    </div>
  )
}
