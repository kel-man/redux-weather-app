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
