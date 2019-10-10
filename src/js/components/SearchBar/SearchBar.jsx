import React, { Component } from 'react';

import {
    updateSearchInput,
    searchCities
} from './searchActions';

export default class SearchBar extends React.Component {
    constructor(props){
        super(props);
        this.handleSearchInput=this.handleSearchInput.bind(this);
        this.handleSearchButton=this.handleSearchButton.bind(this);
        this.handleCitySelect=this.handleCitySelect.bind(this);
    }
    
    handleSearchInput(e){
        const { dispatch } = this.props;
        const { value } = e.target;
        dispatch(updateSearchInput(value));
    }

    handleSearchButton(){
        const { dispatch, searchTerm } = this.props;
        dispatch(searchCities(searchTerm));
    }

    handleCitySelect(cityName){
        const { dispatch } = this.props;
        dispatch(searchCities(cityName));
    }

    render(){
        const cities = [
                            { id: 5391811, displayName: 'San Diego', name: 'San Diego' },
                            { id: 5128581, displayName: 'New York', name: 'New York' }, 
                            { id: 4366164, displayName: 'Washington D.C.', name: "Prince George's County" }, 
                            { id: 2643743, displayName: 'London', name: 'London' }, 
                            { id: 1850147, displayName: 'Tokyo', name: 'Tokyo' }
                       ]
        return(
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Select a city, or search for one below!</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            {
                                cities.map(city => (
                                    <td key={city.id}>
                                        <button onClick={() => this.handleCitySelect(city.name)}>{city.displayName}</button>
                                    </td>
                                ))
                            }
                        </tr>
                    </tbody>
                </table>
                <textarea onChange={this.handleSearchInput} className='search text-input'/>
                <button onClick={this.handleSearchButton} className='button btn-success'>Search!</button>
            </div>
        )
    }
}