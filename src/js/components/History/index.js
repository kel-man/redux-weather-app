import { connect } from 'react-redux';
import History from './History';

function mapStoreToProps(store){
    return {
        history: store.history
    }
}

export default connect(mapStoreToProps)(History);