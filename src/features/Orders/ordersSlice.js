import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import date from 'date-and-time'
import { OrdersAPI } from '../../API/OrdersAPI'
import { dateFormat } from 'const/dateFormat'

export const fetchOrdersAll = createAsyncThunk(
  'orders/fetchAll',
  async (payload, { getState, requestId }) => {
    const { currentRequestId, loading } = getState().orders
    if (loading !== 'pending' || requestId !== currentRequestId) {
      return
    }
    const response = await OrdersAPI.getAllOrders()
    for (const order of response) {
      order.date = date.format(order.date, dateFormat)
    }
    return response
  }
)

export const fetchOrdersByFilters = createAsyncThunk(
  'orders/fetchByFilter',
  async (
    { filters, compositecolumnValue, sortField },
    { getState, requestId }
  ) => {
    const { currentRequestId, loading } = getState().orders
    if (loading !== 'pending' || requestId !== currentRequestId) {
      return
    }
    const response = await OrdersAPI.getOrdersByFilters(
      filters,
      compositecolumnValue,
      sortField
    )
    for (const order of response) {
      order.date = date.format(order.date, dateFormat)
    }
    return response
  }
)

export const deleteOrders = createAsyncThunk(
  'orders/deleteOrders',
  async ({ ordersIds }, { getState, requestId }) => {
    const { currentRequestId, loading } = getState().orders
    if (loading !== 'pending' || requestId !== currentRequestId) {
      return
    }
    return await OrdersAPI.deleteOrders(ordersIds)
  }
)

export const changeStatusOrders = createAsyncThunk(
  'orders/changeStatusOrders',
  async ({ ordersIds, status }, { getState, requestId }) => {
    const { currentRequestId, loading } = getState().orders
    if (loading !== 'pending' || requestId !== currentRequestId) {
      return
    }
    return await OrdersAPI.changeStatusOrders(ordersIds, status)
  }
)

export const ordersrSlice = createSlice({
  name: 'orders',
  initialState: {
    entities: [],
    loading: 'idle',
    currentRequestId: undefined,
    error: undefined,
  },
  reducers: {
    filterByOrderNumberOrCustomerName: (state, action) => {
      if (action.payload.isEmpty) return state
      state.orders = OrdersAPI.getAllOrders().filter((order) => {
        return (
          order.ID.toString().startsWith(action.payload) ||
          order.customerName.toLocaleLowerCase().includes(action.payload)
        )
      })
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchOrdersAll.pending, (state, action) => {
      if (state.loading.localeCompare('idle') === 0) {
        state.loading = 'pending'
        state.currentRequestId = action.meta.requestId
      }
    })
    builder.addCase(fetchOrdersAll.fulfilled, (state, action) => {
      const { requestId } = action.meta
      if (state.loading === 'pending' && state.currentRequestId === requestId) {
        state.loading = 'idle'
        state.entities = action.payload
        state.currentRequestId = undefined
      }
    })
    builder.addCase(fetchOrdersAll.rejected, (state, action) => {
      const { requestId } = action.meta
      if (state.loading === 'pending' && state.currentRequestId === requestId) {
        state.loading = 'idle'
        state.error = action.error
        state.currentRequestId = undefined
      }
    })
    builder.addCase(fetchOrdersByFilters.pending, (state, action) => {
      if (state.loading.localeCompare('idle') === 0) {
        state.loading = 'pending'
        state.currentRequestId = action.meta.requestId
      }
    })
    builder.addCase(fetchOrdersByFilters.fulfilled, (state, action) => {
      const { requestId } = action.meta
      if (state.loading === 'pending' && state.currentRequestId === requestId) {
        state.loading = 'idle'
        state.entities = action.payload
        state.currentRequestId = undefined
      }
    })
    builder.addCase(fetchOrdersByFilters.rejected, (state, action) => {
      const { requestId } = action.meta
      if (state.loading === 'pending' && state.currentRequestId === requestId) {
        state.loading = 'idle'
        state.error = action.error
        state.currentRequestId = undefined
      }
    })
    builder.addCase(deleteOrders.pending, (state, action) => {
      if (state.loading.localeCompare('idle') === 0) {
        state.loading = 'pending'
        state.currentRequestId = action.meta.requestId
      }
    })
    builder.addCase(deleteOrders.fulfilled, (state, action) => {
      const { requestId } = action.meta
      if (state.loading === 'pending' && state.currentRequestId === requestId) {
        state.loading = 'idle'
        state.currentRequestId = undefined
      }
    })
    builder.addCase(deleteOrders.rejected, (state, action) => {
      const { requestId } = action.meta
      if (state.loading === 'pending' && state.currentRequestId === requestId) {
        state.loading = 'idle'
        state.error = action.error
        state.currentRequestId = undefined
      }
    })
    builder.addCase(changeStatusOrders.pending, (state, action) => {
      if (state.loading.localeCompare('idle') === 0) {
        state.loading = 'pending'
        state.currentRequestId = action.meta.requestId
      }
    })
    builder.addCase(changeStatusOrders.fulfilled, (state, action) => {
      const { requestId } = action.meta
      if (state.loading === 'pending' && state.currentRequestId === requestId) {
        state.loading = 'idle'
        state.currentRequestId = undefined
      }
    })
    builder.addCase(changeStatusOrders.rejected, (state, action) => {
      const { requestId } = action.meta
      if (state.loading === 'pending' && state.currentRequestId === requestId) {
        state.loading = 'idle'
        state.error = action.error
        state.currentRequestId = undefined
      }
    })
  },
})

export const { filterByOrderNumberOrCustomerName } = ordersrSlice.actions

export default ordersrSlice.reducer
