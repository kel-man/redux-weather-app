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
        searchTerm: store.search.searchTerm.searchTerm,
        history: store.search.history,
        humidity: store.search.humidity,
        error: store.search.error,
        display: store.search.display
    }
}

export default connect(mapStoreToProps)(SearchBar);