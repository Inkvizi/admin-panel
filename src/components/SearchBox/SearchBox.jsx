import React from 'react'
import styles from './SearchBox.module.css'
import classNames from 'classnames/bind'

export function SearchBox({ value, onChange, onClear }) {
  return (
    <div className={styles._}>
      <button className={styles.button_search} type="button"></button>
      <input
        type="text"
        className={styles.searchbar}
        placeholder="Номер заказа или ФИО"
        onChange={onChange}
        value={value}
      />
      <button
        className={classNames(styles.button_reset, {
          [styles.button_reset_hide]: value === '',
        })}
        type="button"
        onClick={onClear}></button>
    </div>
  )
}
