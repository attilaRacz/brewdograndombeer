import React, { Component } from 'react';

export class List extends Component {
    render(props) {
        const foodPairing = this.props.foodList;
        if (foodPairing) {
            const listItemFood = foodPairing.map((food) =>
                <li>{food}</li>);
            return listItemFood;
        }
        return null;
    }
}