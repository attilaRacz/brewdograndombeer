import React, { Component } from 'react';
import './App.css';
import {Header} from './Header';
import {Image} from './Image';
import {Details} from './Details';
import {Button} from './Button';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.getBeer = this.getBeer.bind(this);
    }

    componentWillMount() {
        this.getBeer();
    }

    render() {
        return (
            <div className="App">
                <div className="row">
                    <div className="col-md-3"></div>
                    <Header name={this.state.name} />
                    <div className="col-md-3"></div>
                </div>
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="middlecontainer col-md-6">
                        <div className="middle col-md-12">
                            <Image imageUrl={this.state.imageUrl} />
                            <Details
                                firstBrewed={this.state.firstBrewed}
                                abv={this.state.abv}
                                description={this.state.description}
                                foodPairing={this.state.foodPairing}
                            />
                        </div>
                    </div>
                    <div className="col-md-3"></div>
                </div>
                <div className="row">
                    <div className="col-md-3"></div>
                    <Button handleClick={this.getBeer} />
                    <div className="col-md-3"></div>
                </div>
            </div>
        );
    }

    getBeer() {
        return fetch('https://api.punkapi.com/v2/beers/random')
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);
                this.setState({
                    id: responseJson[0].id,
                    name: responseJson[0].name,
                    tagline: responseJson[0].tagline,
                    firstBrewed: responseJson[0].first_brewed,
                    description: responseJson[0].description,
                    imageUrl: responseJson[0].image_url,
                    abv: responseJson[0].abv,
                    foodPairing: responseJson[0].food_pairing
                });
            })
            .catch((error) => {
                console.error(error);
            });
    }
}

export default App;
