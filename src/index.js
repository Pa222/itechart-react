import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import LoginFormStore from './redux/LoginFormStore';
import App from './App';

ReactDOM.render(
    <Provider store={LoginFormStore}>
        <App/>  
    </Provider>,
    document.getElementById('root')
);