import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './CounterButton.css'

class CounterButton extends Component {

    //Define the initial state in a constructor
    constructor() {
        super(); // Very common error if you don't use this super constructor
        this.state = {
            counter: 0
        };
        // This binding is necessary to make `this` work in the callback
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }



    render() {
        const styleFromJs = { fontSize: "50px", color: "red" };
        return (
            <div className="CounterButton">
                <span style={styleFromJs}>{this.state.counter}</span>
                {/* Dont use this way to define a function  onClick={this.increment() to avoid invoke in the inital load} */}
                <button onClick={this.increment}>+{this.props.valueIncrement}</button>
                <button onClick={this.decrement}>-{this.props.valueIncrement}</button>
            </div>
        );

    };

    increment() {
        this.props.incrementParent(this.props.valueIncrement);
        this.setState({
            counter: this.state.counter + this.props.valueIncrement
        });
    }

    decrement() {
        this.props.decrementParent(this.props.valueIncrement);
        this.setState({
            counter: this.state.counter - this.props.valueIncrement
        });
    }

}

CounterButton.defaultProps = {
    valueIncrement: 1
}

CounterButton.propTypes = {
    valueIncrement: PropTypes.number
}



export default CounterButton;