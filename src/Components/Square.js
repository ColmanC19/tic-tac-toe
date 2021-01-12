import React, { Component } from 'react';
import '../../src/App.css';

class Square extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null,
        }
    }
    render() {
        return (
            <button className="square" onCLick={() => this.setState({value: 'X'})}>
                {this.props.value}
            </button>
        )
    }
};

export default Square;