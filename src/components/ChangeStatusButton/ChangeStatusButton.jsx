import styles from './ChangeStatusButton.module.css'
import React from 'react'

export function ChangeStatusButton({ disabled, onClick }) {
  return (
    <div className={styles._}>
      <button
        className={styles.button}
        type="button"
        disabled={disabled}
        onClick={onClick}>
        Изменить статус
      </button>
    </div>
  )
}
