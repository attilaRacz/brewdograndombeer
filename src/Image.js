import React, { Component } from 'react';

export class Image extends Component {
    render(props) {
        return (
            <div className="image col-md-4">
                <img alt="beer" src={this.props.imageUrl} />
            </div>
        );
    }
}