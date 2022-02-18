import { getLatLng } from 'use-places-autocomplete';

export const getLatAndLng = async (props: any) => {
    const { lat, lng } = await getLatLng(props)
    return { lat, lng }
}