import React from 'react'
import styles from './Input.module.css'
import cx from 'classnames'

export function Input({
  caption,
  placeholder,
  captionInside,
  id,
  onChange,
  value,
  className,
}) {
  const onClear = () => {
    onChange({ target: { value: '' } })
  }
  return (
    <div className={cx(styles._, className)}>
      <label className={styles.label} htmlFor={id}>
        {caption}
      </label>
      <input
        type="text"
        className={styles.input}
        id={id}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
      <label className={styles.labelInside} htmlFor={id}>
        {captionInside}
      </label>
      <button
        className={cx(styles.button_reset, {
          [styles.button_reset_hide]: value === '',
        })}
        type="button"
        onClick={onClear}></button>
    </div>
  )
}
