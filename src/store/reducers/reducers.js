import { combineReducers } from 'redux'
import { isFilterPanelOpen } from './isFilterPanelOpen'

export const rootReducer = combineReducers({
  isFilterPanelOpen,
})
