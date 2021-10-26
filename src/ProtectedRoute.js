import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import LoginFormStore from './redux/LoginFormStore';

const ProtectedRoute = ({component: Comp, ...rest}) => {
    const state = LoginFormStore.getState();
    return (
        <Route 
            {...rest}
            render={props =>{
                if (state.email !== '' && state.password !== ''){
                    return <Comp {...props} />
                } else{
                    return <Redirect to={{
                        pathname: '/',
                        state: {
                            from: props.location,
                        }
                    }} />
                }
            }}
        />
    );
}

export default ProtectedRoute;