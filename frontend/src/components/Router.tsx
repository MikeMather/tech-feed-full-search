import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Search from './Search/Search';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/">
                <Search />
            </Route>
        </Switch>
    </BrowserRouter>
);

export default Router;