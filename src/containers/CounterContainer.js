import React from 'react';
import PropTypes from 'prop-types';
import Counter from '../views/Counter/Counter';

class CounterContainer extends React.Component{
    handleIncrement = () => {
        this.props.increment(this.props.id);
    };
   
    handleDecrement = () => {
        this.props.decrement(this.props.id);
    };

    handleReset = () => {
        this.props.reset(this.props.id);
    };
   
    render() {
        return (
            <Counter 
                    value={this.props.value}
                    id={this.props.id}
                    increment={this.handleIncrement} 
                    decrement={this.handleDecrement} 
                    reset={this.handleReset}
            /> 
        );
    };
}

CounterContainer.propTypes = {
    value: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired,
}

export default CounterContainer;