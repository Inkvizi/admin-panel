import faker from 'faker'
import { statuses } from './FilterStatusValues'
import { dateFormat } from './dateFormat'
import dateFormatter from 'date-and-time'

const ORDERD_COUNT = 200

faker.locale = 'ru'

function generateOrder() {
  const order = {
    ID: faker.datatype.number({
      min: 10_000,
      max: 500_000,
    }),
    date: faker.date.past(),
    status: faker.random.arrayElement(statuses),
    loyalty: faker.random.arrayElement([
      'новичек',
      'средний',
      'продвинутый',
      'эксперт',
    ]),
    acceptCode: faker.datatype.number({ min: 1000, max: 9999 }),
    itemsCount: faker.datatype.number({
      min: 1,
      max: 30,
    }),
    sum: faker.datatype.number({ min: 1, max: 20_000, precision: 0.01 }),
    customerName: `${faker.name.lastName()} ${faker.name.firstName()} ${faker.name.middleName()}`,
  }
  generateOrderData(order)
  return order
}

function generateOrderData(order) {
  const minPrice = Math.round(order.sum / order.itemsCount / 3)
  const maxPrice = Math.round((order.sum / order.itemsCount) * 2)
  let itemsSum = 0
  for (let counter = 0; counter < order.itemsCount; counter++) {
    const orderItem = {
      ID: faker.datatype.number({
        min: 500_001,
        max: 10_000_000,
      }),
      orderID: order.ID,
      vendorCode: faker.random.alphaNumeric(8),
      name: faker.commerce.productName(),
      price: faker.datatype.number({
        min: minPrice,
        max: maxPrice,
        precision: 0.01,
      }),
    }
    if (counter === order.itemsCount - 1) {
      orderItem.price = order.sum - itemsSum
    }
    itemsSum += itemsSum + orderItem.price
    orderDataList.push(orderItem)
  }
}

let orderList = []
const orderDataList = []

function cloneOrderArray(sourceArray) {
  return sourceArray.map((data) => ({ ...data }))
}

function generateOrderList() {
  if (orderList.length > 0) {
    return cloneOrderArray(orderList)
  }
  for (let counter = 0; counter < ORDERD_COUNT; counter++) {
    orderList.push(generateOrder())
  }
  return cloneOrderArray(orderList)
}

function getHeaders() {
  return ['#', 'Дата', 'Статус', 'Позиций', 'Сумма', 'ФИО покупателя']
}

function getSortFieldName(fieldCaption) {
  switch (fieldCaption) {
    case '#':
      return 'ID'
    case 'Дата':
      return 'date'
    case 'Статус':
      return 'status'
    case 'Позиций':
      return 'itemsCount'
    case 'Сумма':
      return 'sum'
    case 'ФИО покупателя':
      return 'customerName'
  }
}

function isEmpty(object) {
  return JSON.stringify(object) === JSON.stringify({})
}

export const orders = () => generateOrderList()
export const ordersHeaders = getHeaders()
export function ordersByFilter(filters, customerNameOrIdValue, sortField) {
  const orders = generateOrderList()
  if (filters.length === 0 && customerNameOrIdValue.isEmpty) {
    return orders
  }
  let filteredOrders = orders.filter((order) => {
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
  if (!isEmpty(sortField)) {
    const orderDirection = sortField.isSortDirectionDown ? 1 : -1
    const sortFieldName = getSortFieldName(sortField.caption)
    filteredOrders = filteredOrders.sort((orderLeft, orderRight) => {
      if (orderLeft[sortFieldName] > orderRight[sortFieldName]) {
        return 1 * orderDirection
      }
      if (orderLeft[sortFieldName] < orderRight[sortFieldName]) {
        return -1 * orderDirection
      }
      return 0
    })
  }
  return filteredOrders
}

export function orderByID(ID) {
  const result = orderList.filter((order) => {
    return order.ID === ID
  })
  if (result.length === 1) {
    const order = { ...result[0] }
    order.items = orderDataList
      .filter((item) => {
        return item.orderID === ID
      })
      .map((item) => ({ ...item }))
    return order
  } else {
    return {}
  }
}

export function deleteOrders(ordersIds) {
  orderList = orderList.filter((order) => {
    return !ordersIds.includes(order.ID)
  })
}
export function changeStatusOrders(ordersIds, status) {
  orderList = orderList.map((order) => {
    if (ordersIds.includes(order.ID)) {
      order.status = status
    }
    return order
  })
}
export function updateOrder(order) {
  order.date = dateFormatter.parse(order.date, dateFormat)
  orderList = orderList.map((orderSource) => {
    return orderSource.ID !== order.ID ? orderSource : { ...order }
  })
}
