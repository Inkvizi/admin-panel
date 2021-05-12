import React from 'react'
import styles from './Input.module.css'

export function Input ({ caption, placeholder, captionInside }) {
  return (
        <div className={styles._}>
            <label className={styles.label} htmlFor="inputValue">{caption}</label>
            <input type="text" className={styles.input} id="inputValue" placeholder={placeholder}/>
            <label className={styles.labelInside} htmlFor="inputValue">{captionInside}</label>
        </div>
  )
}
