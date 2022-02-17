import { types } from '../types/types'

export const addMarkerList = (event: any) => {
    return {
        type: types.addMarkerList,
        payload: event
    }
}

export const saveCurrentSearch = (event: any) => {
    return {
        type: types.saveCurrentSearch,
        payload: event
    }
}