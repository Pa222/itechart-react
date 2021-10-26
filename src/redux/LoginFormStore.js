import { createStore } from 'redux';
import Reducer from './reducer';

const defaultState = { 
    email: '',
    password: '',
    isAuthorized: false,
    formattedData: JSON.stringify({email: '', password: ''}) 
}

const LoginFormStore = createStore(Reducer, defaultState);

export default LoginFormStore;