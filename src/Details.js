import React, { Component } from 'react';
import {List} from './List';

export class Details extends Component {
    render(props) {
        return (
            <div className="details col-md-8">
                <p><strong>first brewed: </strong>{this.props.firstBrewed}</p>
                <p><strong>alcohol: </strong>{this.props.abv}%</p>
                <p><strong>description: </strong></p>
                <p>{this.props.description}</p>
                <p><strong>food pairing: </strong></p>
                <ul>
                    <List foodList={this.props.foodPairing} />
                </ul>
            </div>
        );
    }
}