import React, { Component } from 'react';

export default class CityInformation extends React.Component{
    
    render(){
        const { city, temperature, tempLow, tempHigh, humidity, pressure, wind } = this.props;
        return(
            <div>
                <table>
                    <thead>{ city }</thead>
                    <tr>{ temperature }</tr>
                </table>
            </div>
        )
    }
}