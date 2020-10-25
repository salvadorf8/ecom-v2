import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from '../pages/homepage/homepage.component';

import './app.styles.scss';

// switch will match a URL, if  a match, it will render only that page where as before
// it will render all Routes that matches

// The component that gets rendered by Route, gets three arguments... history.... location... match...
// also will be passed down only one child down, if you need history passed further use withRouter

// match will hold the id of a record

// /topics/:topicid is a url parameter

// under match, main use is the url wich remains the same, second it allows us to build a nested route structure
// <link to={`${props.match.url}/13`}>TO TOPIC #</Link> (13, 14, etc)

//its not actually redirecting you, or rebuilding the entire application, we are hijacking the URL position to
// determin which javascript which part of the DOM to take off or which to replace

// you can use a Link or props.history.push to paint only the necessary components

//Location the important param is the pathname which is the full  pathname
const App = () => {
    return (
        <div>
            <Switch>
                <Route exact path='/' component={HomePage} />
            </Switch>
        </div>
    );
};
export default App;
