import React from 'react'
import styles from './DeleteButtonMenu.module.css'
import cx from 'classnames'

export function DeleteButtonMenu({
  recordsCount,
  isShow,
  onDeleteClick,
  onCancelClick,
}) {
  return (
    <div className={cx(styles._, { [styles._hide]: !isShow })}>
      Удалить {recordsCount} записей?
      <button className={styles.button} onClick={onDeleteClick}>
        Удалить
      </button>
      <button className={styles.button} onClick={onCancelClick}>
        Отмена
      </button>
    </div>
  )
}
