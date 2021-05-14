import styles from './DeleteButton.module.css'
import React from 'react'

export function DeleteButton(properties) {
  return (
    <div className={styles._}>
      <button className={styles.button} type="button">
        Удалить
      </button>
    </div>
  )
}
