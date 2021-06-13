import React from 'react'
import styles from './CloseButtonMenu.module.css'
import cx from 'classnames'

export function CloseButtonMenu({
  recordsCount,
  isShow,
  onDiscardChangesClick,
  onCancelClick,
}) {
  return (
    <div className={cx(styles._, { [styles._hide]: !isShow })}>
      Есть несохраненные изменения
      <button className={styles.button} onClick={onDiscardChangesClick}>
        Сбросить
      </button>
      <button className={styles.button} onClick={onCancelClick}>
        Остаться
      </button>
    </div>
  )
}
