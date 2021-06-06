import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import date from 'date-and-time'
import { OrdersAPI } from '../../API/OrdersAPI'
import { dateFormat } from '../../const/dateFormat'

export const fetchOrderByID = createAsyncThunk(
  'order/fetchByID',
  async (ID, { getState, requestId }) => {
    const { currentRequestId, loading } = getState().order
    if (loading !== 'pending' || requestId !== currentRequestId) {
      return
    }
    const order = await OrdersAPI.getOrderByID(ID)
    order.date = date.format(order.date, dateFormat)
    return order
  }
)

export const updateOrder = createAsyncThunk(
  'order/updateOrder',
  async (order, { getState, requestId }) => {
    const { currentRequestId, loading } = getState().order
    if (loading !== 'pending' || requestId !== currentRequestId) {
      return
    }
    return await OrdersAPI.updateOrder(order)
  }
)

export const orderSlice = createSlice({
  name: 'order',
  initialState: {
    entity: {},
    loading: 'idle',
    currentRequestId: undefined,
    error: undefined,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchOrderByID.pending, (state, action) => {
      if (state.loading.localeCompare('idle') === 0) {
        state.loading = 'pending'
        state.currentRequestId = action.meta.requestId
      }
    })
    builder.addCase(fetchOrderByID.fulfilled, (state, action) => {
      const { requestId } = action.meta
      if (state.loading === 'pending' && state.currentRequestId === requestId) {
        state.loading = 'idle'
        state.entity = action.payload
        state.currentRequestId = undefined
      }
    })
    builder.addCase(fetchOrderByID.rejected, (state, action) => {
      const { requestId } = action.meta
      if (state.loading === 'pending' && state.currentRequestId === requestId) {
        state.loading = 'idle'
        state.error = action.error
        state.currentRequestId = undefined
      }
    })
    builder.addCase(updateOrder.pending, (state, action) => {
      if (state.loading.localeCompare('idle') === 0) {
        state.loading = 'pending'
        state.currentRequestId = action.meta.requestId
      }
    })
    builder.addCase(updateOrder.fulfilled, (state, action) => {
      const { requestId } = action.meta
      if (state.loading === 'pending' && state.currentRequestId === requestId) {
        state.loading = 'idle'
        state.currentRequestId = undefined
      }
    })
    builder.addCase(updateOrder.rejected, (state, action) => {
      const { requestId } = action.meta
      if (state.loading === 'pending' && state.currentRequestId === requestId) {
        state.loading = 'idle'
        state.error = action.error
        state.currentRequestId = undefined
      }
    })
  },
})

export default orderSlice.reducer
