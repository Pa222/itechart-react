import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import LoginFormStore from './redux/LoginFormStore';

const ProtectedRoute = ({component: Comp, ...rest}) => {
    const state = LoginFormStore.getState();
    return (
        <Route 
            {...rest}
            render={props =>{
                if (state.isAuthorized){
                    return <Comp {...props} />
                } else{
                    return <Redirect to={{
                        pathname: '/',
                    }} />
                }
            }}
        />
    );
}

export default ProtectedRoute;