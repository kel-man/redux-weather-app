import { connect } from 'react-redux';
import CityInformation from './CityInformation';

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
        pressure: store.search.pressure
    }
}

export default connect(mapStoreToProps)(CityInformation);

