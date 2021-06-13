import React from 'react'
import styles from './OrderFooter.module.css'
import { ApplyButton } from 'components/ApplyButton/ApplyButton'

export function OrderFooter() {
  return (
    <div className={styles._}>
      <ApplyButton />
    </div>
  )
}
