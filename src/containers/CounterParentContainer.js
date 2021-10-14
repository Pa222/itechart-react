import React from 'react'
import CounterParent from '../views/Counter/Parent/CounterParent';
import CounterContainer from './CounterContainer';

class CounterParentContainer extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            counters: [{id: 0, value: 0}],
        };
    };

    increment = (id) => {
        const newState = this.state.counters.map(counter => {
            if (id === counter.id) {
                let value = counter.value + 1;
                return {id, value};
            }
            return counter;
        });
        this.setState({
            counters: newState
        })
    };

    decrement = (id) => {
        const newState = this.state.counters.map(counter => {
            if (id === counter.id) {
                let value = counter.value - 1;
                return {id, value}
            }
            return counter;
        });
        this.setState({
            counters: newState
        })
    };

    reset = (id) => {
        const newState = this.state.counters.map(counter => {
            let value = counter.value;
            if (id === counter.id) {
                value = 0;
                return {id, value};
            }
            return counter;
        });
        this.setState({
            counters: newState
        })
    };

    addCounter = () => {
        const newState = this.state.counters.map(counter => {
            if (counter.value % 2 === 0 && counter.value !== 0) {
                return {id: counter.id, value: counter.value + 1};
            };
            return counter;
        });
        const id = this.state.counters.length;
        newState.push({id, value: 0});
        this.setState({
            counters: newState
        });
    };
    
    removeFirstCounter = () => {
        const newState = this.state.counters.map(counter => {
            if (counter.value % 2 !== 0 && counter.value !== 0) {
                return {id: counter.id, value: counter.value - 1};
            }
            return counter;
        });
        if (newState.length > 1)
            newState.pop();
        this.setState({
            counters: newState
        })
    };

    generalRemove = () => {
        this.setState({
            counters: [{id: 0, value: 0}]
        });
    }

    render(){
        const parentProps = {
            add: this.addCounter,
            remove: this.removeFirstCounter,
            reset: this.generalRemove,
        };

        return (
            <div>
                <CounterParent {...parentProps}/>
                {
                    this.state.counters.map((counter) => {
                    return <CounterContainer 
                                key={counter.id} 
                                id={counter.id} 
                                value={counter.value}
                                increment={this.increment}
                                decrement={this.decrement}
                                reset={this.reset}
                            />
                    })
                }
            </div>
        );
    }
}

export default CounterParentContainer;