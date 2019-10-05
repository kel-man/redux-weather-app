import React from 'react';
import SearchBar from './components/SearchBar';
import CityInformation from './components/CityInformation';
import History from './components/History';

export default class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className='jumbotron'>
          <h1 className='display-3 text-center'>Weather Application</h1>
        </div>
        <div className='row'>
          <SearchBar />
        </div>
        <div className='col-12 md-6 mb-4'>
          <CityInformation />
        </div>
        <div className='col-12 md-6 mb-4'>
          {/* <History /> */}
        </div>
      </div>
    );
  }
}
