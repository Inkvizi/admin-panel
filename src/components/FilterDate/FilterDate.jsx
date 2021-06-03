import React from 'react'
import styles from './FilterDate.module.css'
import { Input } from '../Input/Input'

export function FilterDate({
  caption,
  onChangeFilterLess,
  onChangeFilterAbove,
  valueLess,
  valueAbove,
}) {
  return (
    <div className={styles._}>
      <Input
        id="filterDateFrom"
        caption={caption}
        placeholder="dd.mm.yyyy"
        captionInside="c"
        onChange={onChangeFilterAbove}
        value={valueAbove}
        className={styles.input_left}
      />
      <Input
        id="filterDateTo"
        placeholder="dd.mm.yyyy"
        captionInside="по"
        onChange={onChangeFilterLess}
        value={valueLess}
      />
    </div>
  )
}
