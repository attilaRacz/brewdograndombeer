import React, { Component } from 'react';

export class Header extends Component {
    render(props) {
        return (
            <div className="header col-md-6">
                <h5>Brewdog random beer catalog</h5>
                <h1>{this.props.name}</h1>
            </div>
        );
    }
}