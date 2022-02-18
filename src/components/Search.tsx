import usePlacesAutocomplete, { getGeocode } from 'use-places-autocomplete';
import { Combobox, ComboboxInput, ComboboxPopover, ComboboxList, ComboboxOption } from '@reach/combobox'
// import '@reach/combobox/styles.css'
import '../styles/combobox.sass'
import { useDispatch } from 'react-redux';
import { addMarkerList, saveCurrentSearch } from '../actions/markers';
import { getLatAndLng } from '../helpers/getLatAndLng';
import '../styles/search.sass'

interface SearchProps { }

export interface MarkerListProps {
    lat: number
    lng: number
    locationName: string
}

const Search: React.FC<SearchProps> = () => {
    const dispatch = useDispatch()
    const { ready, value, suggestions: { status, data }, setValue } = usePlacesAutocomplete();

    return (
        <div className='search'>
            <Combobox
                onSelect={async (address) => {
                    try {
                        const results = await getGeocode({ address })
                        const { lat, lng } = await getLatAndLng(results[0])
                        const marker: MarkerListProps = { lat, lng, locationName: results[0].formatted_address }
                        dispatch(saveCurrentSearch({ lat, lng }))
                        dispatch(addMarkerList(marker))
                    } catch (error) {
                        console.log(error)
                    }
                }}
            >
                <ComboboxInput
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    style={{ width: 300, maxWidth: "100%" }}
                    disabled={!ready}
                    placeholder="Introduce una dirección"
                />
                <ComboboxPopover className='combobox-popover'>
                    <ComboboxList>
                        {status === 'OK' &&
                            data.map(({ description, place_id }: any) => (
                                <ComboboxOption value={description} key={place_id} />
                            ))
                        }
                    </ComboboxList>
                </ComboboxPopover>
            </Combobox>
        </div>
    )
}

export default Search