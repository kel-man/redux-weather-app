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
        const cities = ['San Diego', 'New York', 'Washington D.C.', 'London', 'Tokyo']
        const title = 'Title of the table!';
        return(
            <div>
                <table>
                    <thead><tr><th>{title}</th><th>This is a second one!</th></tr></thead>
                    <tbody>
                        <tr>
                            {
                                cities.map((cityName, index) => (
                                    <td key={index}>
                                        <button onClick={() => this.handleCitySelect(cityName)}>{cityName}</button>
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