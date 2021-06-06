import React from 'react'
import styles from './CloseButtonMenu.module.css'
import cx from 'classnames'

export function CloseButtonMenu({ recordsCount, isShow, onMenuItemSelect }) {
  const handleDiscardChanges = (event) => {
    onMenuItemSelect(event, true)
  }
  const handleCancel = (event) => {
    onMenuItemSelect(event, false)
  }
  return (
    <div className={cx(styles._, { [styles._hide]: !isShow })}>
      Есть несохраненные изменения
      <button className={styles.button} onClick={handleDiscardChanges}>
        Сбросить
      </button>
      <button className={styles.button} onClick={handleCancel}>
        Остаться
      </button>
    </div>
  )
}
