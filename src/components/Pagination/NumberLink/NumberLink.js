import React from 'react'
import styles from './NumberLink.module.css'
import cx from 'classnames'

export function NumberLink({ page, isActive }) {
  return (
    <div className={cx(styles._, { [styles._Active]: isActive })}>{page}</div>
  )
}
