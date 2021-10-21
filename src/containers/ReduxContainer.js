import React, { useState } from "react";
import { updateState } from '../redux/actions';
import { validateEmail, validatePassword } from '../Validators';
import LoginFormStore from '../redux/LoginFormStore';
import Form from '../views/Form/Form';

const ReduxContainer = () => {
    const store = LoginFormStore;
    const [data, setData] = useState(store.getState());

    const handleChange = (e) => {
        store.dispatch(updateState(e.target.name, e.target.value));
        setData({...store.getState()});
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateEmail(data.email) || !validatePassword(data.password)){
            return;
        }
        
        window.location.href += '/success'
    }

    const props ={
        data,
        handleChange,
        handleSubmit,
    }

    return (
        <Form {...props} />
    );
}

export default ReduxContainer;