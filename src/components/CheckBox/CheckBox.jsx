import React from 'react'
import styles from './CheckBox.module.css'

export function CheckBox ({ id, value }) {
  return (
    <div className={styles._}>
      <label className={styles.checkboxLabel}>
        <input type="checkbox" className={styles.checkBox} id={id} />
        {value}
      </label>
    </div>
  )
}
