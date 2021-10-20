import { createStore } from 'redux';
import Reducer from './reducer';

const defaultState = { 
    email: '',
    password: '', 
    formattedData: JSON.stringify({email: '', password: ''}) 
}

const LoginFormStore = createStore(Reducer, defaultState);

export default LoginFormStore;