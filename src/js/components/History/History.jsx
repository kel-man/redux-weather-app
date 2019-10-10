import React, { Component } from 'react';

export default class History extends React.Component{

    render(){
        const { history } = this.props;
        return(
            <div>
                <div>
                    <h2>Previously searched: </h2>
                    { history.map((city, index) => (
                        <div>
                            <h3 key={index}>{ city.cityName }</h3>
                            <p>{ city.date } at { city.time }</p>
                        </div>
                    )) }
                </div>
            </div>
        )
    }
}