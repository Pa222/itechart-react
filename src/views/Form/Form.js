import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import useStyles from './styles';
import TextInput from './TextInput';

const validationSchema = Yup.object({
    email: Yup.string()
        .min(6, 'Too short')
        .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Doesn't look like real emal")
        .required('Required'),
    password: Yup.string()
    .min(6, 'Too short')
    .required('Required'),
})


const Form = (props) => {
    const classes = useStyles();

    return(
        <Formik 
            validationSchema={validationSchema}
            initialValues={{
                email: '',
                password: '',
            }}
            onSubmit={props.handleSubmit}
            >
            {({handleChange, handleSubmit}) => (
                <form onSubmit={handleSubmit}>
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
    email: PropTypes.string,
    password: PropTypes.string,
    formattedData: PropTypes.string,
    handleChange: PropTypes.func,
    handleSubmit: PropTypes.func,
}

export default Form;