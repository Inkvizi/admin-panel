// import { createSelector } from 'reselect'

export const getFilterHeader = (state) => state.FilterHeader

export const getIsFilterPanelVisibleState = (state) =>
  getFilterHeader(state).isFilterPanelOpen

export const getfilterHeaderValue = (state) =>
  getFilterHeader(state).filterHeaderValue
