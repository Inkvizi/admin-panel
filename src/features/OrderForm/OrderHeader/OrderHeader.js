import React from 'react'
import styles from './OrderHeader.module.css'

export function OrderHeader({ orderNumber }) {
  return (
    <div className={styles._}>
      <div className={styles.headerText}>Заявка #{orderNumber}</div>
    </div>
  )
}
