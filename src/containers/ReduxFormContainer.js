import React from 'react';
import ReduxForm from '../views/ReduxForm/ReduxForm';
import LoginFormStore from '../redux/LoginFormStore';
import { updateState } from '../redux/actions';
import { validateEmail, validatePassword } from '../Validators';

const ReduxFormContainer = () => {
    const handleSubmit = (values) => {
        console.log(values);
        if (!validateEmail(values.email) || !validatePassword(values.password)){
            return;
        }

        LoginFormStore.dispatch(updateState('email', values.email));
        LoginFormStore.dispatch(updateState('password', values.password));

        window.location.href += '/success';
    }

    const props = {
        handleSubmit,
    }
    
    return (
        <ReduxForm {...props} /> 
    );
}

export default ReduxFormContainer;