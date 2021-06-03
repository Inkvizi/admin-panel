import React, { useState } from 'react'
import cx from 'classnames'
import styles from './TableHeader.module.css'
import { CheckBox } from '../../CheckBox/CheckBox'

export function TableHeader({ headerData }) {
  const [headerSelected, setHeaderSelected] = useState('')
  const onClick = (header) => () => {
    setHeaderSelected(header)
  }
  return (
    <thead className={styles._}>
      <tr>
        <th key="Выбор" className={styles.th}>
          <CheckBox />
        </th>
        {headerData.map((header) => {
          return (
            <th
              key={header}
              className={cx(styles.th, {
                [styles.th_active]: headerSelected === header,
              })}
              onClick={onClick(header)}>
              {header}
            </th>
          )
        })}
      </tr>
    </thead>
  )
}
