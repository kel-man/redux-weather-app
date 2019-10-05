import { combineReducers } from 'redux';
import searchReducer from './components/SearchBar/searchReducer';

const rootReducer = combineReducers({
    search: searchReducer,
// add reducers
});

export default rootReducer;
