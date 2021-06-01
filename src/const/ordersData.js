import faker from 'faker'
import { statuses } from './FilterStatusValues'
// import { dateFormat } from './dateFormat'
// import dateFormatter from 'date-and-time'

const ordersCount = 200

faker.locale = 'ru'

function generateOrder() {
  return {
    ID: faker.datatype.number({
      min: 10_000,
      max: 500_000,
    }),
    date: faker.date.past(),
    status: faker.random.arrayElement(statuses),
    itemsCount: faker.datatype.number({
      min: 1,
      max: 30,
    }),
    sum: faker.datatype.number({ min: 1, max: 20_000, precision: 0.01 }),
    customerName:
      faker.name.lastName() +
      ' ' +
      faker.name.firstName() +
      ' ' +
      faker.name.middleName(),
  }
}

let orderList = []

function cloneOrderArray(sourceArray) {
  const result = []
  for (const element of sourceArray) {
    result.push({
      ID: element.ID,
      date: element.date,
      status: element.status,
      itemsCount: element.itemsCount,
      sum: element.sum,
      customerName: element.customerName,
    })
  }
  return result
}

function generateOrderList() {
  if (orderList.length > 0) {
    return cloneOrderArray(orderList)
  }
  for (let counter = 0; counter < ordersCount; counter++) {
    orderList.push(generateOrder())
  }
  return cloneOrderArray(orderList)
}

function getHeaders() {
  return ['#', 'Дата', 'Статус', 'Позиций', 'Сумма', 'ФИО покупателя']
}

export const orders = generateOrderList()
export const ordersHeaders = getHeaders()
export function ordersByFilter(filters, customerNameOrIdValue) {
  const orders = generateOrderList()
  if (filters.length === 0 && customerNameOrIdValue.isEmpty) {
    return orders
  }
  return orders.filter((order) => {
    let result = true
    for (const filter of filters) {
      if (filter.isOperationAbove()) {
        result = order[filter.getKey()] >= filter.getValue()
      }
      if (filter.isOperationLess()) {
        result = order[filter.getKey()] <= filter.getValue()
      }
      if (filter.isOperationEquals()) {
        result = order[filter.getKey()] === filter.getValue()
      }
      if (!result) break
    }
    if (result && !customerNameOrIdValue.isEmpty) {
      result =
        order.ID.toString().startsWith(customerNameOrIdValue) ||
        order.customerName
          .toLocaleLowerCase()
          .includes(customerNameOrIdValue.toLocaleLowerCase())
    }
    return result
  })
}
export function deleteOrders(ordersIds) {
  orderList = orderList.filter((order) => {
    return !ordersIds.includes(order.ID)
  })
}
