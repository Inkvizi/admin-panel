// import { createSelector } from 'reselect'

export const getFilterHeader = (state) => state.ordersView

export const getIsFilterPanelVisibleState = (state) =>
  getFilterHeader(state).isFilterPanelOpen

export const getfilterHeaderValue = (state) =>
  getFilterHeader(state).filterHeaderValue
