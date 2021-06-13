import React from 'react'
import styles from './CheckBox.module.css'

export function CheckBox({ name, value, checked, onChange }) {
  return (
    <div className={styles._}>
      <label className={styles.checkboxLabel}>
        <input
          type="checkbox"
          className={styles.checkBox}
          name={name}
          checked={checked}
          onChange={onChange}
        />
        {value}
      </label>
    </div>
  )
}
