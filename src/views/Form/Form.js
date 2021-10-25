import React from 'react';
import PropTypes from 'prop-types';
import useStyles from './styles';

const Form = (props) => {
    const classes = useStyles();

    return(
        <form onSubmit={props.handleSubmit}>
            <div className={classes.form}>
                <input 
                    className={classes.form__input} 
                    type="email" 
                    name="email" 
                    value={props.email}
                    placeholder="E-mail"
                    onChange={props.handleChange}
                />
                <input 
                    className={classes.form__input} 
                    type="text" 
                    name="password" 
                    value={props.password}
                    placeholder="Password"
                    onChange={props.handleChange}
                />
                <input 
                    className={classes.form__input} 
                    type="submit" 
                    value="Log in"
                />
            </div>
            <h2>Entered data: {props.formattedData}</h2>
        </form>
    );
}

Form.propTypes = {
    data: PropTypes.object,
    handleChange: PropTypes.func,
    handleSubmit: PropTypes.func,
}

export default Form;