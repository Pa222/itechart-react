import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import LoginFormStore from './redux/LoginFormStore';
import App from './App';
import { HashRouter } from 'react-router-dom';

ReactDOM.render(
    <Provider store={LoginFormStore}>
        <HashRouter>
            <App/>  
        </HashRouter>
    </Provider>,
    document.getElementById('root')
);