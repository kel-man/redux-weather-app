import { connect } from 'react-redux';
import CitySelect from './CitySelect';

function mapStoreToProps(store){
    return {
        city: store.city.name,
        details: store.city.details
    }
}

export default connect(mapStoreToProps)(CitySelect);