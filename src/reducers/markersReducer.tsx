import { MarkerListProps } from '../components/Search'
import { types } from '../types/types'

const initialStateMarkers = {
    markersList: [],
    currentMarker: {}
}

export const markersReducer = (state = initialStateMarkers, action: MarkerListProps | any) => {
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