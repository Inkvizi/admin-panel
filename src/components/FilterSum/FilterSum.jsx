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
        placeholder="&#8381;"
        captionInside="от"
        onChange={onChangeFilterAbove}
        value={valueAbove}
      />
      <div className="delimiter">&nbsp;</div>
      <Input
        id="filterSumTo"
        placeholder="&#8381;"
        captionInside="до"
        onChange={onChangeFilterLess}
        value={valueLess}
      />
    </div>
  )
}
