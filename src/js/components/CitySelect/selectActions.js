export function selectCity(city){
    return {
        type: 'SELECT_CITY',
        payload: { city }
    }
}
