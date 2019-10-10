import moment from 'moment';

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
    lon: null,
    display: false
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
                tempLow: payload.data.main.temp_min.toFixed(2),
                tempHigh: payload.data.main.temp_max.toFixed(2),
                wind: payload.data.wind.speed,
                pressure: payload.data.main.pressure,
                lat: payload.data.coord.lat,
                lon: payload.data.coord.lon,
                error: false,
                display: true,
                history: [
                    { cityName: payload.data.name,
                        date: moment().format('l'),
                        time: moment().format('h:mm:ss a') },
                    ...state.history
                ]
            }
        }
        default: {
            return state;
        }
    }
}
