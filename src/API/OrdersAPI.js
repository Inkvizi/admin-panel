import {
  orders,
  ordersHeaders,
  ordersByFilter,
  deleteOrders,
} from '../const/ordersData'

export const OrdersAPI = {
  getAllOrders: function () {
    return orders
  },
  getOrdersHeaders: function () {
    return ordersHeaders
  },
  getOrdersByFilters: function (filters, customerNameOrIdValue) {
    const filteredOrders = ordersByFilter(filters, customerNameOrIdValue)
    return filteredOrders
  },
  deleteOrders: function (ordersIds) {
    deleteOrders(ordersIds)
  },
}
