import styles from './FilterApplyButton.module.css'
import React from 'react'

export function FilterApplyButton(properties) {
  return (
    <div className={styles._}>
      <button className={styles.buttonApply} type="button">
        Применить
      </button>
    </div>
  )
}
