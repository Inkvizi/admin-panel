import React, { useState } from 'react'
import styles from './FilterSelect.module.css'

import { CheckBox } from '../CheckBox/CheckBox'
import classNames from 'classnames/bind'

export function FilterSelect({ values, caption, defaultValue }) {
  const [isExpanded, setIsExpanded] = useState(false)

  const showCheckboxes = () => {
    setIsExpanded(!isExpanded)
  }

  const optionsForSelect = values.map((value) => (
    <CheckBox key={value} value={value} />
  ))

  return (
    <div className={styles._}>
      <label className={styles.caption}>{caption}</label>
      <div className={styles.selectBox} onClick={showCheckboxes}>
        <select className={styles.select}>
          <option>{defaultValue}</option>
        </select>
        <div className={styles.overSelect}></div>
      </div>
      <div
        className={classNames(styles.checkboxes, {
          [styles.checkboxesShow]: isExpanded,
        })}>
        {optionsForSelect}
      </div>
    </div>
  )
}
