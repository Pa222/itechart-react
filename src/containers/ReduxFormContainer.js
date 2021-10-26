import React from 'react';
import { useHistory } from 'react-router-dom';
import ReduxForm from '../views/ReduxForm/ReduxForm';
import LoginFormStore from '../redux/LoginFormStore';
import { updateState } from '../redux/actions';
import { validateEmail, validatePassword} from '../Validators';

const ReduxFormContainer = () => {
    const history = useHistory();

    const handleSubmit = (values) => {
        //Не получилось валидировать с помощью yup
        if (!validateEmail(values.email) || !validatePassword(values.password)){
            return;
        }

        LoginFormStore.dispatch(updateState('email', values.email));
        LoginFormStore.dispatch(updateState('password', values.password));

        history.push('/login-redux-form/success');
    }

    const props = {
        handleSubmit,
    }
    
    return (
        <ReduxForm {...props} /> 
    );
}

export default ReduxFormContainer;