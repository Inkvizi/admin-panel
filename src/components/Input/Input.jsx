import React from 'react'
import styles from './Input.module.css'
import cx from 'classnames'

// eslint-disable-next-line react/display-name
export const Input = React.forwardRef(
  (
    {
      caption,
      placeholder,
      captionInside,
      id,
      onChange,
      value,
      className,
      isLocked,
      hasError,
    },
    reference
  ) => {
    const onClear = (event) => {
      event.target.value = ''
      event.target.name = id
      onChange(event)
    }
    return (
      <div className={cx(styles._, className)}>
        <label className={styles.label} htmlFor={id}>
          {caption}
        </label>
        <input
          type="text"
          className={cx(styles.input, { [styles.input_incorrect]: hasError })}
          id={id}
          name={id}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          disabled={isLocked}
          ref={reference}
        />
        <label className={styles.labelInside} htmlFor={id}>
          {captionInside}
        </label>
        <button
          className={cx(styles.button_reset, {
            [styles.button_reset_hide]: value === '' || isLocked,
          })}
          type="button"
          onClick={onClear}
        />
        <button
          className={cx(styles.button_lock, {
            [styles.button_reset_hide]: !isLocked,
          })}
          type="button"
        />
      </div>
    )
  }
)
