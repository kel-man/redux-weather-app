import axios from 'axios';

export function updateSearchInput(searchTerm){
    return {
        type: 'UPDATE_SEARCH_INPUT',
        payload: { searchTerm } 
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

