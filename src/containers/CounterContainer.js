import React from 'react'
import Counter from '../views/Counter/index';

class CounterContainer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value: 0
        }
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.reset = this.reset.bind(this);
    }

    increment(){
        const updated = this.state.value + 1;
        this.setState({
            value: updated
        })
    }

    decrement(){
        const updated = this.state.value - 1;
        this.setState({
            value: updated
        })
    }

    reset(){
        this.setState({
            value: 0
        })
    }

    render(){
        const props = {
            value: this.state.value,
            increment: this.increment,
            decrement: this.decrement,
            reset: this.reset
        };
        return (<Counter {...props} />);
    }
}

export default CounterContainer;