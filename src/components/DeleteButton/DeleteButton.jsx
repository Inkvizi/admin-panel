import styles from './DeleteButton.module.css'
import React from 'react'

export function DeleteButton (props) {
  return (
    <div className={styles._}>
      <button className={styles.button} type="button">Удалить</button>
    </div>
  )
}