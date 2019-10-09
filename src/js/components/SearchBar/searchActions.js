import axios from 'axios';

export function updateSearchInput(cityName){
    return {
        type: 'UPDATE_SEARCH_INPUT',
        payload: { cityName } 
    };
}

export function searchCities(cityName){
    console.log('searchCities');
    console.log(cityName);
    return {
        type: 'SEARCH_CITIES',
        payload: axios.get(`/search/${cityName}`).catch(function(error){console.log(error)})
    }
}

export function getWeather(city){
    return {
        type: 'GET_WEATHER',
        payload: { city }
    }
}