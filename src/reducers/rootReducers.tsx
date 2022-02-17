import { combineReducers } from 'redux'
import { markersReducer } from './markersReducer'

export const rootReducer = combineReducers({
    markers: markersReducer
})