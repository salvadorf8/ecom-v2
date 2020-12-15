import React from 'react';

import './custom-button.styles.scss';

// pass children to get the onSubmit
// destructore the other props and spread that onto the custom button below
const CustomButton = ({ children, ...otherProps }) => (
    <button className='custom-button' {...otherProps}>
        {children}
    </button>
);

export default CustomButton;
