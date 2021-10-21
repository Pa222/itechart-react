import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import CounterParentContainer from './containers/CounterParentContainer';
import FormContainer from './containers/FormContainer';
import ReduxContainer from './containers/ReduxContainer';
import ReduxFormContainer from './containers/ReduxFormContainer';
import AboutUs from './views/AboutUs';
import Header from './views/Header';
import SuccessLogin from './views/SuccessLogin';
import ErrorPage from './views/404';

const App = () => {
    return (
        <HashRouter>
            <div>
            <Switch>
                <Route 
                    exact
                    path='/'
                    render={() =>
                        <div>
                            <Header/>
                            <AboutUs/>
                        </div>
                    }
                />
                <Route 
                    path='/about'
                    render={() =>
                        <div>
                            <Header/>
                            <AboutUs/>
                        </div>
                    }
                />
                <Route 
                    path='/counters'
                    render={() =>
                        <div>
                            <Header/>
                            <CounterParentContainer/>
                        </div>
                    }
                />
                <Route 
                    path='/login'
                    render={() =>
                        <div>
                            <Header/>
                            <FormContainer/>
                        </div>
                    }
                />
                <Route 
                    exact
                    path='/login-redux'
                    render={() =>
                        <div>
                            <Header/>
                            <ReduxContainer/>
                        </div>
                    }
                />
                <Route 
                    path='/login-redux/success'
                    render={() =>
                        <div>
                            <SuccessLogin/>
                        </div>
                    }
                />
                <Route 
                    exact
                    path='/login-redux-form'
                    render={() =>
                        <div>
                            <Header/>
                            <ReduxFormContainer/>
                        </div>
                    }
                />
                <Route 
                    path='/login-redux-form/success'
                    render={() =>
                        <div>
                            <SuccessLogin/>
                        </div>
                    }
                />
                <Route 
                    render={() =>
                        <ErrorPage/>
                    }
                /> 
            </Switch>
            </div>
        </HashRouter>
    );
}

export default App;