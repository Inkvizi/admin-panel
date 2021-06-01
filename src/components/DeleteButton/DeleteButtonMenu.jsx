import React from 'react'
import styles from './DeleteButtonMenu.module.css'
import cx from 'classnames'

export function DeleteButtonMenu({ recordsCount, isShow, onMenuItemSelect }) {
  const onDelete = () => {
    onMenuItemSelect(true)
  }
  const onCancel = () => {
    onMenuItemSelect(false)
  }
  return (
    <div className={cx(styles._, { [styles._hide]: !isShow })}>
      Удалить {recordsCount} записей?
      <button className={styles.button} onClick={onDelete}>
        Удалить
      </button>
      <button className={styles.button} onClick={onCancel}>
        Отмена
      </button>
    </div>
  )
}
