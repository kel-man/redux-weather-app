export function updateSearchInput(city){
    return {
        type: 'UPDATE_SEARCH_INPUT',
        payload: { city } 
    };
}

export function searchCities(city){
    return {
        type: 'SEARCH_CITIES',
        payload: { city }
    }
}

export function selectCity(city){
    return {
        type: 'SELECT_CITY',
        payload: { city }
    }
}

export function getWeather(city){
    return {
        type: 'GET_WEATHER',
        payload: axios.get(api.openweathermap.org/data/2.5/weather?q={city})
    }
}