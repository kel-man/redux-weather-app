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
        const { dispatch, searchInput } = this.props;
        dispatch(searchCities(searchInput));
        dispatch(getWeather(city));
    }

    handleCitySelect(city){
        const { dispatch } = this.props;
        console.log('handleCitySelect');
        dispatch(searchCities(city));
    }

    render(){
        const cities = ['San Diego', 'New York', 'Washington D.C.', 'London', 'Tokyo']
        const title = 'Title of the table!';
        const { city } = this.props;
        return(
            <div>
                <table>
                    <thead><tr><th>{title}</th><th>This is a second one!</th></tr></thead>
                    <tbody>
                        <tr>
                            {
                                cities.map(name => (
                                    <td>
                                        <button onClick={() => this.handleCitySelect(name)}>{name}</button>
                                    </td>
                                ))
                            }
                        </tr>
                    </tbody>
                </table>
                <textarea onChange={this.handleSearchInput} className='search text-input'/>
                <p>{city}</p>
                <button onClick={this.handleSearchButton} className='button btn-success'>Search!</button>
            </div>
        )
    }
}