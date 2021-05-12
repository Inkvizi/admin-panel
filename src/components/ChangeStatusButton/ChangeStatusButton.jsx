import styles from './ChangeStatusButton.module.css'
import React from 'react'

export function ChangeStatusButton(properties) {
  return (
    <div className={styles._}>
      <button className={styles.button} type="button">
        Изменить статус
      </button>
    </div>
  )
}
