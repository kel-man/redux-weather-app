import React, { Component } from 'react';

export default class History extends React.Component{

    render(){
        return(
            <div>
                <table>
                    <thead>Previously searched:</thead>
                    {searchHistory.map(searchTerm => (
                        <tr>{searchTerm}</tr>
                    ))}
                </table>
            </div>
        )
    }
}