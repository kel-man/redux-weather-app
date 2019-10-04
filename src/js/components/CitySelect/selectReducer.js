const defaultState = {
    selected: '',
    states: [],
    cities: []
}

export default function SelectReducer (state = defaultState, action) {
    const { payload } = action;

    return {
        ...state,
        currentCity: payload
    };
}