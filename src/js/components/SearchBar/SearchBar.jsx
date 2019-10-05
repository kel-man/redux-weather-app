import React, { Component } from 'react';

import {
    updateSearchInput,
    searchCity
} from './searchActions';

export default class SearchBar extends React.Component {
    constructor(props){
        super(props);
        this.handleSearchInput=this.handleSearchInput.bind(this);
        this.handleButtonClick=this.handleButtonClick.bind(this);
        this.handleCitySelect=this.handleCitySelect.bind(this);
    }
    
    handleSearchInput(e){
        const { dispatch } = this.props;
        const { value } = e.target;
        dispatch(updateSearchInput(value));
    }

    handleButtonClick(){
        const { dispatch, city } = this.props;
        dispatch(searchCity(city));
    }

    handleCitySelect(city){
        const { dispatch } = this.props;
        dispatch(searchCity(city));
    }

    render(){
        const cities = ['San Diego', 'New York', 'Washington D.C.', 'London', 'Tokyo']
        return(
            <div>
                <table>
                    <thead>Find your city: </thead>
                    <tr>
                        {
                            cities.map(city => (
                                <td>
                                    <button onClick={() => this.handleCitySelect(city)}>{city}</button>
                                </td>
                            ))
                        }
                    </tr>
                </table>
                <textarea onChange={this.handleSearchInput} className='search text-input'/>
                <button onClick={this.handleButtonClick} className='button btn-success'>Search!</button>
            </div>
        )
    }
}