import React from "react";
import { connect } from 'react-redux';
import { updateState } from '../redux/actions';
import { validateEmail, validatePassword } from '../Validators';
import Form from '../views/Form/Form';

const ReduxContainer = (props) => {
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateEmail(props.email) || !validatePassword(props.password)){
            return;
        }
        
        window.location.href += '/success'
    }

    const formProps ={
        formattedData: props.formattedData,
        handleChange: props.handleChange,
        handleSubmit,
    }

    return (
        <Form {...formProps} />
    );
}

const mapStateToProps = (state) => {
    return{
        formattedData: state.formattedData,
        email: state.email,
        password: state.password,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleChange: (e) => dispatch(updateState(e.target.name, e.target.value)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReduxContainer);