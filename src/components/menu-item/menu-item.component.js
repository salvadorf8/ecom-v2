import React from 'react';

import './menu-item.styles.scss';

// react gives every html markup elements - style, takes an object that has prop values
// we are using javascript template strings here to display image in background (string terpulation)
// also string interpolation classname to get the size that were added on the object since image is bigger
const MenuItem = ({ title, imageUrl, size }) => (
    <div className={`${size} menu-item`}>
        {/* added below div so the animation will work when hovering over - also by itself so box wont resize */}
        <div className='background-image' style={{ backgroundImage: `url(${imageUrl}` }} />
        <div className='content'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
);

export default MenuItem;
