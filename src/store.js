import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import ordersReducer from './features/Orders/ordersSlice'
import ordersViewReduser from './features/Orders/ordersViewSlice'

export const store = configureStore({
  reducer: {
    orders: ordersReducer,
    ordersView: ordersViewReduser,
  },
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), logger],
  devTools: process.env.NODE_ENV !== 'production',
})
