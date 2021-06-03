import React, { useEffect, useState } from 'react'
import cx from 'classnames'
import styles from './TableHeader.module.css'
import { CheckBox } from '../../CheckBox/CheckBox'

export function TableHeader({ headerData, onClick }) {
  const [sorting, setSorting] = useState({
    caption: '',
    isSortDirectionDown: false,
  })
  const handleClick = (header) => () => {
    setSorting({
      caption: header,
      isSortDirectionDown: !sorting.isSortDirectionDown,
    })
  }
  useEffect(() => {
    if (sorting.caption !== '') {
      onClick(sorting)
    }
  }, [sorting])

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
                [styles.th_active]: sorting.caption === header,
              })}
              onClick={handleClick(header)}>
              <div className={styles.header_cell}>
                {header}
                <div
                  className={cx(styles.sort, {
                    [styles.sort_hide]: sorting.caption !== header,
                    [styles.sort_arrowdown]:
                      sorting.caption === header && sorting.isSortShowDown,
                    [styles.sort_arrowUp]:
                      sorting.caption === header && !sorting.isSortShowDown,
                  })}
                />
              </div>
            </th>
          )
        })}
      </tr>
    </thead>
  )
}
