import React from 'react'
import styles from './FilterSum.module.css'
import { Input } from '../Input/Input'

export function FilterSum({
  caption,
  onChange,
  nameLess,
  nameAbove,
  valueLess,
  valueAbove,
}) {
  return (
    <div className={styles._}>
      <Input
        id={nameLess}
        caption={caption}
        placeholder="₽"
        captionInside="от"
        onChange={onChange}
        value={valueLess}
        className={styles.input_left}
      />
      <Input
        id={nameAbove}
        placeholder="₽"
        captionInside="до"
        onChange={onChange}
        value={valueAbove}
      />
    </div>
  )
}
