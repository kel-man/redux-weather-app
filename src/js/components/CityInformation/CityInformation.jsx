import React, { Component } from 'react';

export default class CityInformation extends React.Component{
    
    render(){
        const { humidity } = this.props;
            //  temperature, tempLow, tempHigh, humidity, pressure, wind } = this.props;
        return(
            <div>
                <table>
                    <thead>{ humidity }</thead>
                </table>
            </div>
        )
    }
}