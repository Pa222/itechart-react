import React from 'react';
import PropTypes from 'prop-types';
import useStyles from './styles';

const CounterParent = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.counterParent}>
            <input className={classes.counterParent__button} type="button" value="Add" onClick={props.add}></input>
            <input className={classes.counterParent__button} type="button" value="Remove first" onClick={props.remove}></input>
            <input className={classes.counterParent__button} type="button" value="Reset all" onClick={props.reset}></input>
        </div>
    );
}

CounterParent.propTypes = {
    add: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired,
}

export default CounterParent;