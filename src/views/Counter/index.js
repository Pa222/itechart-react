import React from 'react';
import PropTypes from 'prop-types';
import useStyles from './styles';

const Counter = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.counter}>
            <input className={classes.counter__button} type="button" value="increment" onClick={props.increment}></input>
            <input className={classes.counter__button} type="button" value="decrement" onClick={props.decrement}></input>
            <input className={classes.counter__button} type="button" value="reset" onClick={props.reset}></input>
            <p className={classes.counter__text}>{props.value}</p>
        </div>
    );
}

Counter.propTypes = {
    value: PropTypes.number.isRequired,
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired,
}

export default Counter;