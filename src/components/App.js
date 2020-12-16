import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from '../pages/homepage/homepage.component';
import ShopPage from '../pages/shoppage/shoppage.component';
import SignInAndSignUpPage from './sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './header/header.component';
import { auth } from '../firebase/firebase.utils';

import './app.styles.scss';
// in order to save signed in user for the application to know who is signed in, we must
// 1) convert function to class
// 2)
class App extends React.Component {
    constructor() {
        super();
        this.state = { currentUser: null };
    }

    unsubscribeFromAuth = null;

    // because of the subscriber of onAuthStateChanged, the user will always be logged in untill they log out
    // open subscription is an open messaging system
    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
            this.setState({ currentUser: user });
            // user authentication session persistence
            console.log(user);
        });
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return (
            <div>
                <Header currentUser={this.state.currentUser} />
                <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Route path='/shop' component={ShopPage} />
                    <Route path='/signin' component={SignInAndSignUpPage} />
                </Switch>
            </div>
        );
    }
}
export default App;
