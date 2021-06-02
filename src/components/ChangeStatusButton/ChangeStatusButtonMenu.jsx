import React from 'react'
import styles from './ChangeStatusButtonMenu.module.css'
import cx from 'classnames'
import { statuses } from '../../const/FilterStatusValues'

export function ChangeStatusButtonMenu({ isShow, onMenuItemSelect }) {
  const statusForSelect = statuses.map((status) => {
    const onClick = () => onMenuItemSelect(status)
    return (
      <div className={styles.button} key={status} onClick={onClick}>
        {status}
      </div>
    )
  })
  return (
    <div className={cx(styles._, { [styles._hide]: !isShow })}>
      {statusForSelect}
    </div>
  )
}
