import React, { useEffect, useState } from 'react'
import { Route, useHistory, useLocation } from 'react-router-dom'
import './react-router-modal.css'
import { useSelector, useDispatch } from 'react-redux'
import styles from './Orders.module.css'
import { unwrapResult } from '@reduxjs/toolkit'
import cx from 'classnames'
import { Table } from '../../components/Table/Table'
import { OrderForm } from '../OrderForm/OrderForm'
import { Header } from '../../components/Header/Header'
import { FilterHeaderPanel } from '../../components/FilterHeaderPanel/FilterHeaderPanel'
import { Filters } from './Filters/Filters'
import { OrdersAPI } from '../../API/OrdersAPI'
import {
  fetchOrdersAll,
  fetchOrdersByFilters,
  deleteOrders,
  changeStatusOrders,
} from './ordersSlice'
import { darkTheme } from '../../const/themes'

export function Orders() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchOrdersAll())
  }, [])

  const history = useHistory()
  const location = useLocation()
  useEffect(() => {
    if (location.state && location.state.needRefresh === true) {
      dispatch(
        fetchOrdersByFilters({
          filters: orderFilters,
          compositecolumnValue: headerFilter,
          sortField: sortField,
        })
      )
        .then(unwrapResult)
        .then(() => {
          setIsNeedRefreshData(true)
          setIsAllSelected(false)
          setIsNeedRefreshData(false)
        })
        .catch((rejectedValueOrSerializedError) =>
          console.log('inner catch', rejectedValueOrSerializedError)
        )
    }
  }, [location])
  const orders = useSelector((state) => state.orders.entities)
  const theme = useSelector((state) => state.ordersView.theme)

  const [headerFilter, setHeaderFilter] = useState('')
  const [orderFilters, setOrderFilters] = useState([])
  const [selectedOrders, setSelectedOrders] = useState([])
  const [isAllSelected, setIsAllSelected] = useState(false)
  const [isNeedRefreshData, setIsNeedRefreshData] = useState(false)
  const [sortField, setSortField] = useState({})

  const applyFilterAndSort = (compositeFIlter, filters, sortField) => {
    return dispatch(
      fetchOrdersByFilters({
        filters: filters,
        compositecolumnValue: compositeFIlter,
        sortField: sortField,
      })
    )
  }

  const onCompositeFilterChange = ({ target: { value } }) => {
    setHeaderFilter(value)
    applyFilterAndSort(value, orderFilters, sortField)
    setSelectedOrders([])
    setIsAllSelected(false)
  }

  const onFiltersChange = (filters) => {
    setOrderFilters(filters)
    applyFilterAndSort(headerFilter, filters, sortField)
    setSelectedOrders([])
    setIsAllSelected(false)
  }

  const onHeaderClick = (header) => {
    setSortField(header)
    applyFilterAndSort(headerFilter, orderFilters, header)
      .then(unwrapResult)
      .then(() => {
        setIsNeedRefreshData(true)
        setIsNeedRefreshData(false)
      })
      .catch((rejectedValueOrSerializedError) =>
        console.log('inner catch', rejectedValueOrSerializedError)
      )
  }

  const onDeleteOrders = () => {
    dispatch(deleteOrders({ ordersIds: selectedOrders }))
      .then(unwrapResult)
      .then(() =>
        dispatch(
          fetchOrdersByFilters({
            filters: orderFilters,
            compositecolumnValue: headerFilter,
            sortField: sortField,
          })
        )
      )
      .then(setSelectedOrders([]))
  }

  const onChangeStatusOrders = (status) => {
    dispatch(
      changeStatusOrders({
        ordersIds: selectedOrders,
        status: status,
      })
    )
      .then(unwrapResult)
      .then(() => {
        dispatch(
          fetchOrdersByFilters({
            filters: orderFilters,
            compositecolumnValue: headerFilter,
            sortField: sortField,
          })
        )
          .then(unwrapResult)
          .then(() => {
            setIsNeedRefreshData(true)
            setIsNeedRefreshData(false)
          })
          .catch((rejectedValueOrSerializedError) =>
            console.log('inner catch', rejectedValueOrSerializedError)
          )
      })
      .catch((rejectedValueOrSerializedError) =>
        console.log('inner catch', rejectedValueOrSerializedError)
      )
  }

  const onSelectOrder = (order) => {
    setSelectedOrders(
      selectedOrders.includes(order.ID)
        ? selectedOrders.filter((id) => id !== order.ID)
        : [...selectedOrders, order.ID]
    )
  }

  const handleSelectAllOrders = ({ target: { checked } }) => {
    setIsAllSelected(checked)
    if (checked) {
      for (const order of orders) {
        if (!selectedOrders.includes(order.ID)) {
          selectedOrders.push(order.ID)
        }
      }
      setSelectedOrders([...selectedOrders])
    } else {
      setSelectedOrders([])
    }
  }
  const openOrderInfo = (order) => {
    history.push(`/orders/order/${order.ID}`)
  }

  const headers = OrdersAPI.getOrdersHeaders()
  return (
    <div className={cx(styles._, { [styles.dark]: theme === darkTheme })} id="">
      <Header caption="Cписок заказов" />
      <FilterHeaderPanel
        onFilter={onCompositeFilterChange}
        value={headerFilter}
      />
      <Filters onFiltersChange={onFiltersChange} />
      <Route
        path="/orders"
        render={(properties) => (
          <Table
            {...properties}
            headerData={headers}
            data={orders}
            selectedData={selectedOrders}
            isAllSelected={isAllSelected}
            isNeedRefreshData={isNeedRefreshData}
            onDoubleClick={openOrderInfo}
            onSelect={onSelectOrder}
            onDelete={onDeleteOrders}
            onChangeStatus={onChangeStatusOrders}
            onHeaderClick={onHeaderClick}
            onHeaderSelectClick={handleSelectAllOrders}
          />
        )}
      />
      <Route
        path="/orders/order/:number"
        parentPath="/orders"
        render={(properties) => <OrderForm {...properties} isModal={true} />}
      />
    </div>
  )
}
