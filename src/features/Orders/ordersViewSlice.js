import { createSlice } from '@reduxjs/toolkit'
import { lightTheme } from '../../const/themes'

export const ordersrViewSlice = createSlice({
  name: 'ordersView',
  initialState: {
    isFilterPanelOpen: false,
    theme: lightTheme,
  },
  reducers: {
    toggleFilterPanelVisible: (state) => {
      state.isFilterPanelOpen = !state.isFilterPanelOpen
    },
    changeTheme: (state, action) => {
      if (action.payload.isEmpty) return state
      state.theme = action.payload
    },
  },
})

export const { toggleFilterPanelVisible, changeTheme } =
  ordersrViewSlice.actions

export default ordersrViewSlice.reducer
