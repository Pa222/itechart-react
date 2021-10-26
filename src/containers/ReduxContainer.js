import React from "react";
import { connect } from 'react-redux';
import { useHistory } from "react-router-dom";
import { updateState } from '../redux/actions';
import { loginValidationSchema } from '../Validators';
import Form from '../views/Form/Form';

const ReduxContainer = (props) => {
    const history = useHistory();

    const handleSubmit = () => history.push('/login-redux/success');

    const formProps ={
        formattedData: props.formattedData,
        handleChange: props.handleChange,
        loginValidationSchema,
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