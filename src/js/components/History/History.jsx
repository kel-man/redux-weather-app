import React, { Component } from 'react';

export default class History extends React.Component{

    render(){
        const { history } = this.props;
        return(
            <div>
                <div>
                    <h2>Previously searched: </h2>
                    { history.map((cityName, index) => (
                        <p key={index}>{ cityName.cityName }</p>
                    )) }
                </div>
            </div>
        )
    }
}