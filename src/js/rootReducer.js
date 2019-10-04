import { combineReducers } from 'redux';
import selectReducer from './components/CitySelect/selectReducer';
import searchReducer from './components/SearchBar/searchReducer';

const rootReducer = combineReducers({
    search: searchReducer,
    select: selectReducer
// add reducers
});

export default rootReducer;
