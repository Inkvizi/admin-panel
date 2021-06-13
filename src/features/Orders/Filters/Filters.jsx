import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import cx from 'classnames'
import styles from './Filters.module.css'
import date from 'date-and-time'
import { FilterDate } from 'components/FilterDate/FilterDate'
import { FilterSum } from 'components/FilterSum/FilterSum'
import { FlatButton } from 'components/FlatButton/FlatButton'
import { FilterSelect } from 'components/FilterSelect/FilterSelect'
import { getIsFilterPanelVisibleState } from '../../../selectors'
import { statuses } from 'const/FilterStatusValues.js'
import { Filter } from './Filter'
import { dateFormat } from 'const/dateFormat'

export const Filters = ({ onFiltersChange }) => {
  const [orderFilters, setOrderFilters] = useState({
    dateLess: '',
    dateAbove: '',
    sumLess: '',
    sumAbove: '',
  })
  const [orderStatusFilter, setOrderStatusFilter] = useState('')
  const onFilterApplyButtonClick = () => {
    const filters = []
    if (orderFilters.dateLess) {
      const dateValue = date.parse(orderFilters.dateLess, dateFormat)
      if (dateValue instanceof Date && !Number.isNaN(dateValue.getTime())) {
        filters.push(new Filter('date', dateValue).setOperationAbove())
      }
    }
    if (orderFilters.dateAbove) {
      const dateValue = date.parse(orderFilters.dateAbove, dateFormat)
      if (dateValue instanceof Date && !Number.isNaN(dateValue.getTime())) {
        filters.push(new Filter('date', dateValue).setOperationLess())
      }
    }
    if (orderFilters.sumLess) {
      filters.push(
        new Filter('sum', Number(orderFilters.sumLess)).setOperationAbove()
      )
    }
    if (orderFilters.sumAbove) {
      filters.push(
        new Filter('sum', Number(orderFilters.sumAbove)).setOperationLess()
      )
    }
    if (orderStatusFilter) {
      filters.push(new Filter('status', orderStatusFilter).setOperationEquals())
    }
    onFiltersChange(filters)
  }
  const handleChange = ({ target: { value, name } }) => {
    orderFilters[name] = value
    setOrderFilters({ ...orderFilters })
  }
  const onChangeFilterStatus = ({ target: { checked, name } }) => {
    if (checked) {
      setOrderStatusFilter(name)
    } else {
      setOrderStatusFilter('')
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
        onChange={handleChange}
        nameLess="dateLess"
        nameAbove="dateAbove"
        valueLess={orderFilters.dateLess}
        valueAbove={orderFilters.dateAbove}
      />
      <FilterSelect
        className={styles.select}
        caption="Статус заказа"
        defaultValue="Любой"
        values={statuses}
        onChangeFilter={onChangeFilterStatus}
        selectedValue={orderStatusFilter}
      />
      <FilterSum
        caption="Сумма заказа"
        onChange={handleChange}
        nameLess="sumLess"
        nameAbove="sumAbove"
        valueLess={orderFilters.sumLess}
        valueAbove={orderFilters.sumAbove}
      />
      <FlatButton caption="Применить" onClick={onFilterApplyButtonClick} />
    </div>
  )
}
