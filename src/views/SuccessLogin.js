import React from 'react';
import LoginFormStore from '../redux/LoginFormStore';

const SuccessReduxLogin = () => {
    const data = LoginFormStore.getState();
    return(
        <div>
            <h1>Email: {data.email}</h1>
            <h1>Password: {data.password}</h1>
        </div>
    );
}

export default SuccessReduxLogin;