import React from 'react';
import { withRouter } from 'react-router-dom';

import './menu-item.styles.scss';

// props passed to children from Route, only gets passed to that first component.
// Do not pass pass history down from child to child because its considered bad pattern
// called prop drilling (prop tunneling).

// solution is to use { withRouter } - it is a higher order component, it is a function that
// takes a component as an argument and returns you a modified component.

// example: export default withRouter(MenuItem) - will return you MenuItem with access to history
const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => {
    return (
        <div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
            <div className='background-image' style={{ backgroundImage: `url(${imageUrl}` }} />
            <div className='content'>
                <h1 className='title'>{title.toUpperCase()}</h1>
                <span className='subtitle'>SHOP NOW</span>
            </div>
        </div>
    );
};
// next step, by wrapping MenuItem with withRouter, we now get history, match, and location
// again... withRouter is a higher order component
export default withRouter(MenuItem);
