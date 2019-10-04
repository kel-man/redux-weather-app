import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    search: searchReducer,
    select: selectReducer
// add reducers
});

export default rootReducer;
