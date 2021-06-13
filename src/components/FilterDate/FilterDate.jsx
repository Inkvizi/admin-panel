import React from 'react'
import styles from './FilterDate.module.css'
import { Input } from '../Input/Input'

export function FilterDate({
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
        placeholder="dd.mm.yyyy"
        captionInside="c"
        onChange={onChange}
        value={valueLess}
        className={styles.input_left}
      />
      <Input
        id={nameAbove}
        placeholder="dd.mm.yyyy"
        captionInside="по"
        onChange={onChange}
        value={valueAbove}
      />
    </div>
  )
}
