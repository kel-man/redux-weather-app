
const defaultState = {
    searchHistory: [],
    historyLength: '',
    newItem: ''
}

export default function historyReducer(state = defaultState, action) {
    const { type, payload } = action;
    switch (type) {
        case 'ADD_NEW_ITEM' : {
            return {
                newItem: '',
                ...state,
                searchHistory: [
                    ...state.searchHistory, payload
                ]
            }
        }
        case 'CHANGE_HISTORY_LENGTH' : {
            return {
                ...state,
                historyLength: payload
            }
        }
        default: {return state;}
    }
}