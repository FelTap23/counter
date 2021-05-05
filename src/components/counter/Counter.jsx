import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './Counter.css'

class Counter extends Component{

    //Define the initial state in a constructor
    constructor(){
        super(); // Very common error if you don't use this super constructor
        this.state = {
            counter : 0
        };
        // This binding is necessary to make `this` work in the callback
        this.increment = this.increment.bind(this);
    }



    render(){
        const styleFromJs = { fontSize: "50px", color: "red" };
        return (
            <div className="Counter">
                <h1>Counter</h1>
                <span style={styleFromJs}>{this.state.counter}</span>
                {/* Dont use this way to define a function  onClick={this.increment() to avoid invoke in the inital load} */}
                <button onClick={this.increment}>+{this.props.valueIncrement}</button>
            </div>
        );

    };

    increment(){
        this.setState({
            counter: this.state.counter + this.props.valueIncrement
        });
    }

}

Counter.defaultProps = {
    valueIncrement: 1
}

Counter.propTypes = {
    valueIncrement: PropTypes.number
}



export default Counter;