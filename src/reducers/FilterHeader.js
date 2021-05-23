import { TOGGLE_FILTER_PANEL_VISIBLE } from '../actions/toggleFilterPanelVisible.js'

const InitialState = {
  isFilterPanelOpen: false,
  filterHeaderValue: '',
}

export const FilterHeader = (state = InitialState, action) => {
  switch (action.type) {
    case TOGGLE_FILTER_PANEL_VISIBLE: {
      return {
        ...state,
        isFilterPanelOpen: !state.isFilterPanelOpen,
      }
    }
    default:
      return state
  }
}
