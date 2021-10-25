import React from 'react';
import { Formik } from 'formik';
import PropTypes from 'prop-types';
import useStyles from './styles';
import TextInput from './TextInput';

const Form = (props) => {
    const classes = useStyles();

    return(
        <Formik 
            validationSchema={props.loginValidationSchema}
            initialValues={{
                email: '',
                password: '',
            }}
            >
            {({handleChange}) => (
                <form onSubmit={props.handleSubmit}>
                    <div className={classes.form}>
                        <TextInput 
                            className={classes.form__input} 
                            type="email" 
                            name="email" 
                            value={props.email}
                            placeholder="E-mail"
                            onChange={(e) => {
                                handleChange(e);
                                props.handleChange(e);
                            }}
                        />
                        <TextInput 
                            className={classes.form__input} 
                            type="password" 
                            name="password" 
                            value={props.password}
                            placeholder="Password"
                            onChange={(e) => {
                                handleChange(e);
                                props.handleChange(e);
                            }}
                        />
                        <input 
                            className={classes.form__input} 
                            type="submit" 
                            value="Log in"
                        />
                    </div>
                    <h2>Entered data: {props.formattedData}</h2>
                </form>
            )}
        </Formik>
    );
}

Form.propTypes = {
    data: PropTypes.object,
    handleChange: PropTypes.func,
    handleSubmit: PropTypes.func,
}

export default Form;