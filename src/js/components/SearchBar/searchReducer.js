const defaultState = {
    searchTerm: '',
    city: {},
    history: [],
    humidity: '',
    temperature: '',
    tempLow: '',
    tempHigh: '',
    wind: '',
    pressure: '',
    lat: null,
    lon: null
}

export default function SearchReducer(state = defaultState, action) {
    const { type, payload } = action;

    switch (type) {
        case 'UPDATE_SEARCH_INPUT' : {
            return { 
                ...state,
                searchTerm: payload
            }
        }
        case 'SELECT_CITIES' : {
            return { 
                ...state,
                searchTerm: payload,
            }
        }
        case 'SEARCH_CITIES' : {
            return {
                ...state,
                searchTerm: payload
            }
        }
        case 'SEARCH_CITIES_FULFILLED' : {
            return {
                ...state,
                cityData: payload.data,
                cityName: payload.data.name,
                temperature: payload.data.main.temp,
                humidity: payload.data.main.humidity,
                tempLow: payload.data.main.temp_min,
                tempHigh: payload.data.main.temp_max,
                wind: payload.data.wind.speed,
                pressure: payload.data.main.pressure,
                lat: payload.data.coord.lat,
                lon: payload.data.coord.lon,
                error: false,
                history: [
                    ...state.history,
                    { cityName: payload.data.name,
                        
                    }
                ]
            }
        }
        default: {
            return state;
        }
    }
}
