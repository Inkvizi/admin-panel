import React from 'react'
import styles from './ThemeMenu.module.css'
import cx from 'classnames'

export function ThemeMenu({ recordsCount, isShow, onMenuItemSelect }) {
  const onDelete = () => {
    onMenuItemSelect(true)
  }
  const onCancel = () => {
    onMenuItemSelect(false)
  }
  return (
    <div className={cx(styles._, { [styles._hide]: !isShow })}>
      Выберите тему
      <button
        className={cx(styles.button, styles.button_light)}
        onClick={onDelete}>
        Светлая
      </button>
      <button
        className={cx(styles.button, styles.button_dark)}
        onClick={onCancel}>
        Темная
      </button>
    </div>
  )
}
