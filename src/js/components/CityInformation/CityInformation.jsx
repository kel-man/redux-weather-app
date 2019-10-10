import React, { Component } from 'react';

export default class CityInformation extends React.Component{
    
    render(){
        const { cityData, display, cityName, humidity, temperature, tempLow, tempHigh, wind, pressure, lat, lon } = this.props;
        if(display === true){
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
        } else {
            return(
                <div className='no-city'>
                    <h1>No city loaded!</h1>
                </div>
            )
        }
    }
}