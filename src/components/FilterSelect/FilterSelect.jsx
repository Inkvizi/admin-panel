import React, { useState } from 'react'
import classNames from 'classnames/bind'
import styles from './FilterSelect.module.css'
import { CheckBox } from '../CheckBox/CheckBox'

export function FilterSelect({
  values,
  caption,
  defaultValue,
  onChangeFilter,
  selectedValue,
}) {
  const [isExpanded, setIsExpanded] = useState(false)

  const showCheckboxes = () => {
    setIsExpanded(!isExpanded)
  }

  const optionsForSelect = values.map((value) => {
    return (
      <CheckBox
        key={value}
        name={value}
        value={value}
        checked={selectedValue.localeCompare(value) === 0}
        onChange={onChangeFilter}
      />
    )
  })

  return (
    <div className={styles._}>
      <label className={styles.caption} htmlFor="selectBoxFilter">
        {caption}
      </label>
      <div className={styles.selectBox} onClick={showCheckboxes}>
        <select className={styles.select} id="selectBoxFilter">
          <option>{selectedValue || defaultValue}</option>
        </select>
        <div className={styles.overSelect} />
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
