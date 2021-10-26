import React from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useHistory } from "react-router-dom";
import { updateState } from '../redux/actions';
import Form from '../views/Form/Form';

const ReduxContainer = (props) => {
    const history = useHistory();

    const handleSubmit = () => history.push('/login-redux/success');

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

ReduxContainer.propTypes = {
    formattedData: PropTypes.string,
    handleChange: PropTypes.func,
}

export default connect(mapStateToProps, mapDispatchToProps)(ReduxContainer);