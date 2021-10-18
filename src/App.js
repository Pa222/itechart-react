import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CounterParentContainer from './containers/CounterParentContainer';
import AboutUs from './views/AboutUs';
import Header from './views/Header/Header';
import ErrorPage from './views/404';

const App = () => {
    return (
        <BrowserRouter>
        <div>
        <Switch>
            <Route 
                exact
                path='/'
                render={() =>
                    <div>
                        <Header/>
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
                render={() =>
                    <ErrorPage/>
                }
            /> 
        </Switch>
        </div>
        </BrowserRouter>
    );
}

export default App;