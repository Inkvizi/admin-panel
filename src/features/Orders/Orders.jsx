import React, { useEffect, useState } from 'react'
import { Route, useHistory } from 'react-router-dom'
import { ModalRoute } from 'react-router-modal'
import './react-router-modal.css'
import { useSelector, useDispatch } from 'react-redux'
import styles from './Orders.module.css'
import { unwrapResult } from '@reduxjs/toolkit'
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
} from './ordersSlice'

export function Orders() {
  const dispatcher = useDispatch()
  useEffect(() => {
    dispatcher(fetchOrdersAll())
  }, [])
  const [headerFilter, setHeaderFilter] = useState('')
  const [orderFilters, setOrderFilters] = useState([])
  const [selectedOrders, setSelectedOrders] = useState([])

  const handleCompositeFilter = ({ target: { value } }) => {
    setHeaderFilter(value)
    dispatcher(
      fetchOrdersByFilters({
        filters: orderFilters,
        compositecolumnValue: value,
      })
    )
    setSelectedOrders([])
  }

  const handleFiltersChange = (filters) => {
    setOrderFilters(filters)
    dispatcher(
      fetchOrdersByFilters({
        filters: filters,
        compositecolumnValue: headerFilter,
      })
    )
    setSelectedOrders([])
  }

  const handleDeleteOrders = () => {
    console.log(orderFilters)
    dispatcher(deleteOrders({ ordersIds: selectedOrders }))
      .then(unwrapResult)
      .then(() =>
        dispatcher(
          fetchOrdersByFilters({
            filters: orderFilters,
            compositecolumnValue: headerFilter,
          })
        )
      )
      .then(setSelectedOrders([]))
  }
  // eslint-disable-next-line unicorn/consistent-function-scoping
  const onSelectOrder = (order) => {
    const index = selectedOrders.indexOf(order.ID)
    if (index > -1) {
      selectedOrders.splice(index, 1)
      setSelectedOrders([...selectedOrders])
    } else {
      selectedOrders.push(order.ID)
      setSelectedOrders([...selectedOrders])
    }
  }
  const orders = useSelector((state) => state.orders.entities)
  const history = useHistory()
  const openOrderInfo = (order) => {
    history.push(`/orders/order/${order.ID}`)
  }

  const headers = OrdersAPI.getOrdersHeaders()
  return (
    <div className={styles._}>
      <Header caption="Cписок заказов" />
      <FilterHeaderPanel
        handleFilter={handleCompositeFilter}
        value={headerFilter}
      />
      <Filters handleFiltersChange={handleFiltersChange} />
      <Route
        path="/orders"
        render={(properties) => (
          <Table
            {...properties}
            headerData={headers}
            data={orders}
            selectedData={selectedOrders}
            onDoubleClick={openOrderInfo}
            onSelect={onSelectOrder}
            onDelete={handleDeleteOrders}
          />
        )}
      />
      <ModalRoute
        path="/orders/order/:number"
        parentPath="/orders"
        component={OrderForm}
      />
    </div>
  )
}
