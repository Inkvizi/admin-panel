import React from 'react'
import styles from './Header.module.css'
import { Theme } from '../Theme/Theme'

export function Header({ caption }) {
  return (
    <div className={styles._}>
      <div className={styles.name}>{caption}</div>
      <Theme></Theme>
    </div>
  )
}
