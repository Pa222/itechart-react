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

    componentDidMount(){
        console.log(`Component #${this.props.id + 1}: Did mount`);
    }

    shouldComponentUpdate(nextProps) {
        if (this.props.value !== nextProps.value) {
            console.log(`Component #${this.props.id + 1} should updated`);
            return true;
        } else {
            console.log(`Component #${this.props.id + 1} shouldn't updated`);
            return false;
        }
    };

    UNSAFE_componentWillReceiveProps(){
        console.log(`Component #${this.props.id + 1}: Will receive props`);
    }

    componentDidUpdate(){
        console.log(`Component #${this.props.id + 1}: Did update`);
    }

    componentWillUnmount(){
        console.log(`Component #${this.props.id + 1}: Will unmount`);
    }

    // Нельзя использовать совместно с UNSAFE методами
    // В консоли выдает предупреждение
    // static getDerivedStateFromProps(props, state) {  
    //     console.log(props);
    //     console.log(state);
    // }

    // Нельзя использовать совместно с UNSAFE методами
    // В консоли выдает предупреждение
    // getSnapshotBeforeUpdate(prevProps, prevState){
    //     console.log(`Component #${this.props.id + 1}: Snapshot before update`);
    //     return null;
    // }
   
    render() {
        console.log(`Component #${this.props.id + 1}: Rendered`);

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