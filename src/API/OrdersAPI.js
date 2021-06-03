import {
  orders,
  ordersHeaders,
  ordersByFilter,
  deleteOrders,
  changeStatusOrders,
} from '../const/ordersData'

export const OrdersAPI = {
  getAllOrders: function () {
    return orders
  },
  getOrdersHeaders: function () {
    return ordersHeaders
  },
  getOrdersByFilters: function (filters, customerNameOrIdValue, sortField) {
    const filteredOrders = ordersByFilter(
      filters,
      customerNameOrIdValue,
      sortField
    )
    return filteredOrders
  },
  deleteOrders: function (ordersIds) {
    deleteOrders(ordersIds)
  },
  changeStatusOrders: function (ordersIds, status) {
    changeStatusOrders(ordersIds, status)
  },
}
