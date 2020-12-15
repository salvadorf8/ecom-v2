import React from 'react';

import './custom-form-input.styles.scss';

// if user typed anything in, it will use the shrink but will always have the form-input-label
// this is mainly for browsers that auto complete
const FormInput = ({ handleChange, label, ...otherProps }) => (
    <div className='group'>
        <input className='form-input' onChange={handleChange} {...otherProps} />
        {label ? <label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label `}>{label}</label> : null}
    </div>
);

export default FormInput;
