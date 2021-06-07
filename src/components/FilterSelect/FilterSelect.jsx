import React, { useState } from 'react'
import cx from 'classnames'
import styles from './FilterSelect.module.css'
import { CheckBox } from '../CheckBox/CheckBox'

// eslint-disable-next-line react/display-name
export const FilterSelect = React.forwardRef(
  (
    { values, caption, defaultValue, className, onChangeFilter, selectedValue },
    reference
  ) => {
    const [isExpanded, setIsExpanded] = useState(false)

    const showCheckboxes = () => {
      setIsExpanded(!isExpanded)
    }

    const handleChange = (event) => {
      onChangeFilter(event)
      setIsExpanded(!isExpanded)
    }

    const optionsForSelect = values.map((value) => {
      return (
        <CheckBox
          key={value}
          name={value}
          value={value}
          checked={selectedValue.localeCompare(value) === 0}
          onChange={handleChange}
        />
      )
    })

    return (
      <div className={cx(className, styles._)} ref={reference}>
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
          className={cx(styles.checkboxes, {
            [styles.checkboxesShow]: isExpanded,
          })}>
          {optionsForSelect}
        </div>
      </div>
    )
  }
)
