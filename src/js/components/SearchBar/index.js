import { connect } from 'react-redux';
import SearchBar from './SearchBar';

function mapStoreToProps(store){
    return {
        city: store.city,
        history: store.history,
        searchTerm: store.searchTerm
    }
}

export default connect(mapStoreToProps)(SearchBar);