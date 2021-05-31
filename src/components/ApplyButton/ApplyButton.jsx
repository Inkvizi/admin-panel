import styles from './ApplyButton.module.css'
import React from 'react'

export function ApplyButton(properties) {
  return (
    <div className={styles._}>
      <button className={styles.button} type="button">
        Сохранить
      </button>
    </div>
  )
}
