import React, { Component } from 'react'
import CounterButton from './CounterButton'
import './Counter.css'


class Counter extends Component {

    constructor() {
        super(); 
        this.state = {
            counter: 0, 
            appName : "counter"
        };
        
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.reset = this.reset.bind(this);
    }

    render() {
        return (
            <div className="Counter">
                <p>It's working as expected</p>
                <CounterButton incrementParent= {this.increment} decrementParent = {this.decrement}></CounterButton>
                <CounterButton valueIncrement={1} incrementParent= {this.increment} decrementParent = {this.decrement}></CounterButton>
                <CounterButton valueIncrement={5} incrementParent= {this.increment} decrementParent = {this.decrement}></CounterButton>
                <CounterButton valueIncrement={10} incrementParent= {this.increment} decrementParent = {this.decrement}></CounterButton>
                <span>{this.state.counter}</span>
                <button class="reset" onClick={this.reset}>Reset</button>
            </div>
        );
    }

    increment(value){
        console.log(`Increment calling by parent ${value}`);
        console.log(`${ JSON.stringify(this.state)}`)
        this.setState(
            (prevState) => {
                return {counter: prevState.counter + value}
            }
        );
    }



    decrement(value){
        console.log(`decrement calling by parent ${value}`);
        console.log(`${ JSON.stringify(this.state)}`)
        this.setState(
            (prevState) => {
                return {counter: prevState.counter - value}
            }
        );
    }


    reset(){
        this.setState(
            (prevState) => {
                return {counter: 0}
            }
            
        )

    }
}
export default Counter;