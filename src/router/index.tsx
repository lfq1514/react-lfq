import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import App from '../App';
import HooksPage from '../pages/hooksPage/index';


const BasicRoute = () => (
    <HashRouter>
        <Switch>
            <Route exact path="/" component={App}/>
            <Route exact path="/hooksPage" component={HooksPage}/>
        </Switch>
    </HashRouter>
);


export default BasicRoute;