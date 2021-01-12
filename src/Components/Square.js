import React, { Component } from 'react';
import '../../src/App.css';

class Square extends Component {
    render() {
        return (
            <button className="square">
                {this.props.value}
            </button>
        )
    }
};

export default Square;