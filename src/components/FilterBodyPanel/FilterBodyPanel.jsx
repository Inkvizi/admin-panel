import React from 'react'
import { useSelector } from 'react-redux'
import classNames from 'classnames/bind'
import styles from './FilterBodyPanel.module.css'
import { FilterDate } from '../FilterDate/FilterDate'
import { FilterSum } from '../FilterSum/FilterSum'
import { FilterApplyButton } from '../FilterApplyButton/FilterApplyButton'
import { FilterSelect } from '../FilterSelect/FilterSelect'
import { getIsFilterPanelVisibleState } from '../../store/selectors'

export const FilterBodyPanel = () => {
  const isVisible = useSelector(getIsFilterPanelVisibleState)
  const selectValues = [
    'Новый',
    'Рассчет',
    'Подтвержден',
    'Отложен',
    'Выполнен',
    'Отменен',
  ]
  return (
    <div
      className={classNames(styles._, {
        [styles._Hide]: !isVisible,
      })}>
      <FilterDate caption="Дата оформления">{isVisible}</FilterDate>
      <FilterSelect
        caption="Статус заказа"
        defaultValue="Любой"
        values={selectValues}></FilterSelect>
      <FilterSum caption="Сумма заказа"></FilterSum>
      <FilterApplyButton />
    </div>
  )
}
