import {
  orders,
  ordersHeaders,
  ordersByFilter,
  orderByID,
  deleteOrders,
  changeStatusOrders,
  updateOrder,
} from 'const/ordersData'

export const OrdersAPI = {
  getAllOrders: function () {
    return orders()
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
  getOrderByID: function (ID) {
    return orderByID(ID)
  },
  deleteOrders: function (ordersIds) {
    deleteOrders(ordersIds)
  },
  changeStatusOrders: function (ordersIds, status) {
    changeStatusOrders(ordersIds, status)
  },
  updateOrder: function (order) {
    updateOrder(order)
  },
}
