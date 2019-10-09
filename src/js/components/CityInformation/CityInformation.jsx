import React, { Component } from 'react';

export default class CityInformation extends React.Component{
    
    render(){
        const { cityData, cityName, humidity, temperature, tempLow, tempHigh, wind, pressure, lat, lon } = this.props;
        return(
            <div className='container'>
                <div className='info-card-title'>
                    <h1 className='title'>{ cityName }</h1>
                </div>
                <div className='info-card'>
                    <div className='info'>{ lat }, { lon }</div>
                </div>
                <div className='info-card'>
                    <div className='info'>{ humidity }</div>
                </div>
                <div className='info-card'>
                    <div className='info'>{ temperature }</div>
                </div>
                <div className='info-card'>
                    <div className='info'>{ tempLow }</div>
                </div>
                <div className='info-card'>
                    <div className='info'>{ tempHigh }</div>
                </div>
                <div className='info-card'>
                    <div className='info'>{ wind }</div>
                </div>
                <div className='info-card'>
                    <div className='info'>{ pressure }</div>
                </div>
            </div>
        )
    }
}