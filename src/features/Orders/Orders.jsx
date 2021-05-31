import React, { useEffect, useState } from 'react'
import { Route, useHistory } from 'react-router-dom'
import { ModalRoute } from 'react-router-modal'
import './react-router-modal.css'
import { useSelector, useDispatch } from 'react-redux'
import styles from './Orders.module.css'
import { Table } from '../../components/Table/Table'
import { OrderForm } from '../OrderForm/OrderForm'
import { Header } from '../../components/Header/Header'
import { FilterHeaderPanel } from '../../components/FilterHeaderPanel/FilterHeaderPanel'
import { Filters } from './Filters/Filters'
import { OrdersAPI } from '../../API/OrdersAPI'
import { fetchOrdersAll, fetchOrdersByFilters } from './ordersSlice'

export function Orders() {
  const dispatcher = useDispatch()
  useEffect(() => {
    dispatcher(fetchOrdersAll())
  }, [])
  const [headerFilter, setHeaderFilter] = useState('')
  const [orderFilters, setOrderFilters] = useState([])

  const handleCompositeFilter = ({ target: { value } }) => {
    setHeaderFilter(value)
    dispatcher(
      fetchOrdersByFilters({
        filters: orderFilters,
        compositecolumnValue: value,
      })
    )
  }

  const handleFiltersChange = (filters) => {
    setOrderFilters(filters)
    dispatcher(
      fetchOrdersByFilters({
        filters: filters,
        compositecolumnValue: headerFilter,
      })
    )
  }

  const orders = useSelector((state) => state.orders.entities)
  const history = useHistory()
  const selectOrder = (order) => {
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
            onSelect={selectOrder}
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
