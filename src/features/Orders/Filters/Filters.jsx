import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import cx from 'classnames'
import styles from './Filters.module.css'
import date from 'date-and-time'
import { FilterDate } from '../../../components/FilterDate/FilterDate'
import { FilterSum } from '../../../components/FilterSum/FilterSum'
import { FlatButton } from '../../../components/FlatButton/FlatButton'
import { FilterSelect } from '../../../components/FilterSelect/FilterSelect'
import { getIsFilterPanelVisibleState } from '../../../selectors'
import { statuses } from '../../../const/FilterStatusValues.js'
import { Filter } from './Filter'
import { dateFormat } from '../../../const/dateFormat'

export const Filters = ({ handleFiltersChange }) => {
  const [orderDateLessFilter, setOrderDateLessFilter] = useState('')
  const [orderDateAboveFilter, setOrderDateAboveFilter] = useState('')
  const [orderSumLessFilter, setOrderSumLessFilter] = useState('')
  const [orderSumAboveFilter, setOrderSumAboveFilter] = useState('')
  const [orderStatusFilter, setOrderStatusFilter] = useState('')
  const onFilterApplyButtonClick = () => {
    const filters = []
    if (orderDateLessFilter) {
      const dateValue = date.parse(orderDateLessFilter, dateFormat)
      if (dateValue instanceof Date && !Number.isNaN(dateValue.getTime())) {
        filters.push(new Filter('date', dateValue).setOperationLess())
      }
    }
    if (orderDateAboveFilter) {
      const dateValue = date.parse(orderDateAboveFilter, dateFormat)
      if (dateValue instanceof Date && !Number.isNaN(dateValue.getTime())) {
        filters.push(new Filter('date', dateValue).setOperationAbove())
      }
    }
    if (orderSumLessFilter) {
      filters.push(
        new Filter('sum', Number(orderSumLessFilter)).setOperationLess()
      )
    }
    if (orderSumAboveFilter) {
      filters.push(
        new Filter('sum', Number(orderSumAboveFilter)).setOperationAbove()
      )
    }
    if (orderStatusFilter) {
      filters.push(new Filter('status', orderStatusFilter).setOperationEquals())
    }
    handleFiltersChange(filters)
  }
  const onChangeFilterDateLess = ({ target: { value } }) => {
    setOrderDateLessFilter(value)
  }
  const onChangeFilterDateAbove = ({ target: { value } }) => {
    setOrderDateAboveFilter(value)
  }
  const onChangeFilterSumLess = ({ target: { value } }) => {
    setOrderSumLessFilter(value)
  }
  const onChangeFilterSumAbove = ({ target: { value } }) => {
    setOrderSumAboveFilter(value)
  }
  const onChangeFilterStatus = (key) => {
    if (orderStatusFilter.localeCompare(key) === 0) {
      setOrderStatusFilter('')
    } else {
      setOrderStatusFilter(key)
    }
  }
  const isVisible = useSelector(getIsFilterPanelVisibleState)
  return (
    <div
      className={cx(styles._, {
        [styles._Hide]: !isVisible,
      })}>
      <FilterDate
        caption="Дата оформления"
        onChangeFilterLess={onChangeFilterDateLess}
        onChangeFilterAbove={onChangeFilterDateAbove}
        valueLess={orderDateLessFilter}
        valueAbove={orderDateAboveFilter}
      />
      <FilterSelect
        caption="Статус заказа"
        defaultValue="Любой"
        values={statuses}
        onChangeFilter={onChangeFilterStatus}
        selectedValue={orderStatusFilter}
      />
      <FilterSum
        caption="Сумма заказа"
        onChangeFilterLess={onChangeFilterSumLess}
        onChangeFilterAbove={onChangeFilterSumAbove}
        valueLess={orderSumLessFilter}
        valueAbove={orderSumAboveFilter}
      />
      <FlatButton caption="Применить" onClick={onFilterApplyButtonClick} />
    </div>
  )
}
