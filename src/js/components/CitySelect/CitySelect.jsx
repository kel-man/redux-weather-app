import React, { Component } from 'react';

import {
    citySelect,
    selectedDetails
} from './selectActions';

export default class CitySelect extends React.Component {
    constructor(props){
        super(props);
        this.handleSelect=this.handleSelect.bind(this);
    }

    render(){
        return(
            <div>
                <table>
                    <thead>Find your city: </thead>
                    <tr>
                        {
                            cities.map(city => (
                                <td>
                                    <button>{city.name}</button>
                                </td>
                            ))
                        }
                    </tr>
                </table>
            </div>
        )
    }
}