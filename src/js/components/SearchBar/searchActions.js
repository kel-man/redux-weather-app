import axios from 'axios';

export function updateSearchInput(city){
    return {
        type: 'UPDATE_SEARCH_INPUT',
        payload: { city } 
    };
}

export function searchCities(searchInput){
    console.log('searchCities');
    return {
        type: 'SEARCH_CITIES',
        payload: axios.get(`/search/${searchInput}`).catch(function(error){(console.log(error))})
    }
}

export function getWeather(data){
    return {
        type: 'GET_WEATHER',
        payload: { data }
    }
}