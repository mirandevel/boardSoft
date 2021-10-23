import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import HomePage from "../pages/HomePage";
import PrivateRouter from "./PrivateRouter";
import HolaC from "../pages/HolaC";
import AdiosC from "../pages/AdiosC";

function AppRouter(props) {
    return (
        <Router>
            <Switch>
                <Route exact path={'/'} component={HomePage}/>
                <Route path={'/test'}>
                    <h1>test</h1>
                </Route>

                <PrivateRouter path={'/hola'} component={HolaC}/>
                <PrivateRouter path={'adios'} component={AdiosC}/>
            </Switch>
        </Router>
    );
}

export default AppRouter;