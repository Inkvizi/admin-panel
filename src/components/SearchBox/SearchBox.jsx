import React from 'react'
import styles from './SearchBox.module.css'

export function SearchBox (props) {
  return (
        <div className={styles._}>
            <button className={styles.button_search} type="button"></button>
            <input type="text" className={styles.searchbar} placeholder="Номер заказа или ФИО"/>
        </div>
  )
}
