export function selectCity(city){
    return {
        type: 'SELECT_CITY',
        payload: { city }
    }
}

export function selectedDetails(city, details){
    return {
        type: 'SELECTED_DETAILS',
        payload: {
            city,
            info: details
        }
    }
}