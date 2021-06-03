import styles from './DeleteButton.module.css'
import React from 'react'

export function DeleteButton({ disabled, onClick }) {
  return (
    <div className={styles._}>
      <button
        className={styles.button}
        type="button"
        disabled={disabled}
        onClick={onClick}>
        Удалить
      </button>
    </div>
  )
}
