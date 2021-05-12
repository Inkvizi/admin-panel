import React from 'react'
import styles from './Header.module.css'
import { Theme } from '../Theme/Theme'

export function Header (props) {
  return (
        <div className={styles._}>
            <div className={styles.name}>Cписок заказов</div>
            <Theme></Theme>
        </div>
  )
}
