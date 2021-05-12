import styles from './FilterShowButton.module.css'
import React from 'react'

export function FilterShowButton(properties) {
  return (
    <div className={styles._}>
      <button className={styles.button} type="button">
        Фильтры
      </button>
    </div>
  )
}
