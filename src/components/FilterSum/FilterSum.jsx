import React from 'react'
import styles from './FilterSum.module.css'
import { Input } from '../Input/Input'

export function FilterSum({
  caption,
  onChangeFilterLess,
  onChangeFilterAbove,
  valueLess,
  valueAbove,
}) {
  return (
    <div className={styles._}>
      <Input
        id="filterSumFrom"
        caption={caption}
        placeholder="₽"
        captionInside="от"
        onChange={onChangeFilterAbove}
        value={valueAbove}
        className={styles.input_left}
      />
      <Input
        id="filterSumTo"
        placeholder="₽"
        captionInside="до"
        onChange={onChangeFilterLess}
        value={valueLess}
      />
    </div>
  )
}
