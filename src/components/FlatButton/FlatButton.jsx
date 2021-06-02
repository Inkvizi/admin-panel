import React from 'react'
import styles from './FlatButton.module.css'

export function FlatButton({ caption, onClick }) {
  return (
    <div className={styles._}>
      <div className={styles.label} />
      <button className={styles.buttonApply} type="button" onClick={onClick}>
        {caption}
      </button>
    </div>
  )
}
