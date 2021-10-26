import React from 'react';
import PropTypes from 'prop-types';
import { Form, Field } from 'react-final-form';
import useStyles from './styles';

const ReduxForm = (props) => {
    const classes = useStyles();

    return (
        <Form
            onSubmit={props.handleSubmit}
            render={({ handleSubmit, values }) => (
            <form onSubmit={handleSubmit}>
                <div className={classes.form}>
                    <Field 
                        className={classes.form__input} 
                        name="email"
                        component="input" 
                        type="email"
                        placeholder="E-mail"
                    />
                    <Field 
                        className={classes.form__input} 
                        name="password" 
                        component="input" 
                        type="password"
                        placeholder="Password"
                    />
                    <input className={classes.form__input} type="submit" value="Log In"></input>
                </div>
                <h2>Entered data: {JSON.stringify({email: values.email, password: values.password})}</h2>
            </form>
            )}
        />  
    );
}

ReduxForm.propTypes = {
    handleSubmit: PropTypes.func,
}

export default ReduxForm;