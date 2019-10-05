const defaultState = {
    searchTerm: '',
    city: '',
    searchHistory: []
}

export default function SearchReducer(state = defaultState, action){
    const { type, payload } = action;

    switch (type) {
        case 'UPDATE_SEARCH_INPUT' : {
            return { 
                ...state,
                searchTerm: payload
            }
        }
        case 'SEARCH_CITIES' : {
            return { 
                searchTerm: '',
                searchHistory: [
                    ...state.searchHistory,
                    {searchTerm}
                ]
            }
        }
        case 'SELECT_CITY' : {
            return {
                ...state,
                searchTerm: payload
            }
        }
        default: {
            return state;
        }
    }
}
