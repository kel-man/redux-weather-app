import React, { Component } from 'react';

export default class CityInformation extends React.Component{
    
    render(){
        const { city } = this.props;
            //  temperature, tempLow, tempHigh, humidity, pressure, wind } = this.props;
        return(
            <div>
                <table>
                    <thead>{ city }</thead>
                </table>
            </div>
        )
    }
}