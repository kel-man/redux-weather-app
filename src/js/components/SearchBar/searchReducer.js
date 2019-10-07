
const defaultState = {
    newSearch: '',
    city: '',
    history: [],
    humidity: '',
    temperature: '',
    tempLow: '',
    tempHigh: '',
    wind: '',
    pressure: ''
}

export default function SearchReducer(state = defaultState, action){
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
                    ...state.history,
                    payload
                ]
            }
        }
        case 'SEARCH_CITIES' : {
            console.log('reducer');
            return {
                ...state,
                newSearch: '',
                city: payload,
                history: [
                    ...state.history,
                    payload
                ]
            }
        }
        case 'GET_WEATHER' : {
            return {
                ...state,
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
