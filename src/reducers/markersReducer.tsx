import { types } from '../types/types'

const initialState = {
    markersList: [],
    currentMarker: {}
}

export const markersReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case types.addMarkerList:
            return {
                ...state,
                markersList: [
                    ...state.markersList,
                    action.payload
                ]
            }
        case types.saveCurrentSearch:
            return {
                ...state,
                currentMarker: action.payload
            }
        default:
            return state
    }
}