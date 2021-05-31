import { orders, ordersHeaders, ordersByFilter } from '../const/ordersData'

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
}
