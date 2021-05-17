import { createSelector } from 'reselect'

export const getIsFilterPanelVisibleState = createSelector(
  (state) => state.isFilterPanelOpen
)
