import React from 'react';
import LoginFormStore from '../redux/LoginFormStore';

const SuccessReduxLogin = () => {
    const data = LoginFormStore.getState();
    return(
        <div>
            {(data.email === '' || data.password === '') && <h1>Access denied</h1>}
            {data.email !== '' && <h1>Email: {data.email}</h1>}
            {data.password !== '' && <h1>Password: {data.password}</h1>}
        </div>
    );
}

export default SuccessReduxLogin;