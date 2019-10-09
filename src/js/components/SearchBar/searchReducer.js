
const defaultState = {
    newSearch: '',
    city: {},
    history: [],
    humidity: '',
    temperature: '',
    tempLow: '',
    tempHigh: '',
    wind: '',
    pressure: ''
}

export default function SearchReducer(state = defaultState, action) {
    const { type, payload } = action;

    switch (type) {
        case 'UPDATE_SEARCH_INPUT' : {
            return { 
                ...state,
                newSearch: payload
            }
        }
        case 'SELECT_CITIES' : {
            return { 
                ...state,
                newSearch: '',
                history: [
                    ...history,
                    payload
                ]
            }
        }
        case 'SEARCH_CITIES' : {
            return {
                ...state,
                newSearch: '',
                city: payload,
            }
        }
        case 'SEARCH_CITIES_FULFILLED' : {
            return {
                ...state,
                city: payload.data,
                temperature: payload.data.main.temp,
                humidity: payload.data.main.humidity,
                tempLow: payload.data.main.temp_min,
                tempHigh: payload.data.main.temp_max,
                wind: payload.data.wind.speed,
                pressure: payload.data.main.pressure
            }
        }
        default: {
            return state;
        }
    }
}
