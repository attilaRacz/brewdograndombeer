import React, { Component } from 'react';

export class Button extends Component {
    render(props) {
        return (
            <div className="buttoncontainer col-md-6">
                <button className="button" onClick={this.props.handleClick}>
                    next
                </button>
            </div>
        );
    }
}