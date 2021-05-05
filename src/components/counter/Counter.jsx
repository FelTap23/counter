import React, { Component } from 'react'
import CounterButton from './CounterButton'



class Counter extends Component {

    constructor() {
        super(); 
        this.state = {
            counter: 0
        };
        
        this.increment = this.increment.bind(this);
    }

    render() {
        return (
            <div className="Counter">
                <p>It's working as expected</p>
                <CounterButton incrementParent= {this.increment}></CounterButton>
                <CounterButton valueIncrement={1} incrementParent= {this.increment}></CounterButton>
                <CounterButton valueIncrement={5} incrementParent= {this.increment}></CounterButton>
                <CounterButton valueIncrement={10} incrementParent= {this.increment}></CounterButton>
                <span>{this.state.counter}</span>
            </div>
        );
    }

    increment(value){
        console.log(`Increment calling by parent ${value}`);
        this.setState({
            counter: this.state.counter + value
        });
    }
}
export default Counter;