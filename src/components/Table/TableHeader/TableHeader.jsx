import React from 'react'
import styles from './TableHeader.module.css'
import { CheckBox } from '../../CheckBox/CheckBox'

export function TableHeader({ headerData }) {
  return (
    <thead className={styles._}>
      <tr>
        <th key="Выбор" className={styles.th}>
          <CheckBox />
        </th>
        {headerData.map((header) => (
          <th key={header} className={styles.th}>
            {header}
          </th>
        ))}
      </tr>
    </thead>
  )
}
