import { connect } from 'react-redux';
import CityInformation from './CityInformation';

function mapStoreToProps(store){
    return {
        city: store.city
    }
}

export default connect(mapStoreToProps)(CityInformation);

