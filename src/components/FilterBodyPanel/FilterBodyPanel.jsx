import React from 'react'
import { useSelector } from 'react-redux'
import cx from 'classnames'
import styles from './FilterBodyPanel.module.css'
import { FilterDate } from '../FilterDate/FilterDate'
import { FilterSum } from '../FilterSum/FilterSum'
import { FilterApplyButton } from '../FilterApplyButton/FilterApplyButton'
import { FilterSelect } from '../FilterSelect/FilterSelect'
import { getIsFilterPanelVisibleState } from '../../selectors'
import { selectValues } from '../../const/FilterStatusValues.js'

export const FilterBodyPanel = () => {
  const isVisible = useSelector(getIsFilterPanelVisibleState)
  return (
    <div
      className={cx(styles._, {
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
