import React from 'react'
import styles from './Theme.module.css'

export function Theme(properties) {
  return (
    <div className={styles._}>
      <div className={styles.icon}></div>
      <div className={styles.label}>Светлая тема</div>
    </div>
  )
}
