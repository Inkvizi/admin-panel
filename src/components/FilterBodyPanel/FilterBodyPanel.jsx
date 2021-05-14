import React from 'react'
import styles from './FilterBodyPanel.module.css'
import { FilterDate } from '../FilterDate/FilterDate'
import { FilterSum } from '../FilterSum/FilterSum'
import { FilterApplyButton } from '../FilterApplyButton/FilterApplyButton'
import { FilterSelect } from '../FilterSelect/FilterSelect'

export function FilterBodyPanel(properties) {
  const selectValues = [
    'Новый',
    'Рассчет',
    'Подтвержден',
    'Отложен',
    'Выполнен',
    'Отменен',
  ]
  return (
    <div className={styles._}>
      <FilterDate caption="Дата оформления"></FilterDate>
      <FilterSelect
        caption="Статус заказа"
        defaultValue="Любой"
        values={selectValues}></FilterSelect>
      <FilterSum caption="Сумма заказа"></FilterSum>
      <FilterApplyButton />
    </div>
  )
}
