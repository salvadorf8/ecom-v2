import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from '../pages/homepage/homepage.component';
import ShopPage from '../pages/shoppage/shoppage.component';
import SignInAndSignUpPage from './sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './header/header.component';

import './app.styles.scss';

const App = () => {
    return (
        <div>
            <Header />
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route path='/shop' component={ShopPage} />
                <Route path='/signin' component={SignInAndSignUpPage} />
            </Switch>
        </div>
    );
};
export default App;
