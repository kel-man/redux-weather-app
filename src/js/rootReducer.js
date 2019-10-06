import { combineReducers } from 'redux';
import searchReducer from './components/SearchBar/searchReducer';
import historyReducer from './components/History/historyReducer';

const rootReducer = combineReducers({
    search: searchReducer,
    history: historyReducer
// add reducers
});

export default rootReducer;
