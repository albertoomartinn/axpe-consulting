import usePlacesAutocomplete, { getGeocode, getLatLng } from 'use-places-autocomplete';
import { Combobox, ComboboxInput, ComboboxPopover, ComboboxList, ComboboxOption } from '@reach/combobox'
import '@reach/combobox/styles.css'

const Search = () => {
    
    const {ready, value, suggestions: { status, data }, setValue } = usePlacesAutocomplete();
    return (
        <div>
            <Combobox
                onSelect={async (address) => {
                    try {
                        const results = await getGeocode({ address })
                        //coords
                        const { lat, lng }  = await getLatLng(results[0])
                        console.log(lat, lng)
                    } catch (error) {
                        console.log('error')
                    } 
                }}
            >
                <ComboboxInput
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    style={{ width: 300, maxWidth: "90%" }}
                    disabled={!ready}
                    placeholder="Introduce una dirección" 
                />
                <ComboboxPopover>
                    <ComboboxList>
                        {status === 'OK' &&
                            data.map(({ description, place_id }: any) => (
                                <ComboboxOption value={description} key={place_id}/>
                            ))
                        }
                    </ComboboxList>
                </ComboboxPopover>
            </Combobox>
        </div>
    )
}

export default Search