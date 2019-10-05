
const defaultState = {
    newSearch: '',
    city: '',
    history: []
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
        case 'SEARCH_CITIES' : {
            return { 
                ...state,
                newSearch: payload,
                history: [
                    ...state.history,
                    payload
                ]
            }
        }
        case 'SELECT_CITY' : {
            return {
                ...state,
                newSearch: payload,
                history: [
                    ...state.history,
                    payload
                ]
            }
        }
        default: {
            return state;
        }
    }
}
