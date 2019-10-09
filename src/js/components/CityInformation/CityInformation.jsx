import React, { Component } from 'react';

export default class CityInformation extends React.Component{
    
    render(){
        const { cityData, cityName, humidity, temperature, tempLow, tempHigh, wind, pressure, lat, lon } = this.props;
        return(
            <div className='container'>
                <div className='info-card-title'>
                    <h1 className='title'>City: { cityName }</h1>
                </div>
                <div className='info-card'>
                    <div className='info'>Location: { lat } latitude, { lon } longitude.</div>
                </div>
                <div className='info-card'>
                    <div className='info'>Humidity: { humidity }</div>
                </div>
                <div className='info-card'>
                    <div className='info'>Average temperature: { temperature }</div>
                </div>
                <div className='info-card'>
                    <div className='info'>Low temperature: { tempLow }</div>
                </div>
                <div className='info-card'>
                    <div className='info'>High temperature: { tempHigh }</div>
                </div>
                <div className='info-card'>
                    <div className='info'>Wind speed: { wind }</div>
                </div>
                <div className='info-card'>
                    <div className='info'>Air pressure: { pressure }</div>
                </div>
            </div>
        )
    }
}