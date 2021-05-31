import React from 'react'
import styles from './ArrowLink.module.css'

export function ArrowLink({ caption, onCLick }) {
  return (
    <div className={styles._} onClick={onCLick}>
      {caption}
    </div>
  )
}
