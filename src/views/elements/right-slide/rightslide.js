import React, { Component } from 'react';

class Rightslide extends Component {
    render() {
        return (
            <div>
                <img alt={this.props.name} src={this.props.image} /><br />
            </div>
        );
    }
}

export default Rightslide;