import { connect } from 'react-redux';
import searchCities from './SearchBar';

function mapStoreToProps(store){
    return {
        city: store.city,
    }
}

export default connect(mapStoreToProps)(searchCities);