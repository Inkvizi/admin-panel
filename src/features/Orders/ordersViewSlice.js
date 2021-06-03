import { createSlice } from '@reduxjs/toolkit'

export const ordersrViewSlice = createSlice({
  name: 'ordersView',
  initialState: {
    isFilterPanelOpen: false,
  },
  reducers: {
    toggleFilterPanelVisible: (state) => {
      state.isFilterPanelOpen = !state.isFilterPanelOpen
    },
  },
})

export const { toggleFilterPanelVisible } = ordersrViewSlice.actions

export default ordersrViewSlice.reducer
