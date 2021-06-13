import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import ordersReducer from './features/Orders/ordersSlice'
import ordersViewReduser from './features/Orders/ordersViewSlice'
import orderReducer from './features/OrderForm/orderSlice'

export const store = configureStore({
  reducer: {
    orders: ordersReducer,
    ordersView: ordersViewReduser,
    order: orderReducer,
  },
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), logger],
  devTools: process.env.NODE_ENV !== 'production',
})
