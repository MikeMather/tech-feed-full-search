import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from './Header/Header';
import Search from './Search/Search';

const Router = () => (
    <BrowserRouter>
        <Header />
        <Switch>
            <Route path="/">
                <Search />
            </Route>
        </Switch>
    </BrowserRouter>
);

export default Router;