import { connect } from 'react-redux';
import SearchBar from './SearchBar';

function mapStoreToProps(store){
    return {
        cityData: store.search.cityData,
        cityName: store.search.cityName,
        temperature: store.search.temperature,
        lat: store.search.lat,
        lon: store.search.lon,
        tempHigh: store.search.tempHigh,
        tempLow: store.search.tempLow,
        wind: store.search.wind,
        searchTerm: store.searchTerm,
        history: store.history
    }
}

export default connect(mapStoreToProps)(SearchBar);