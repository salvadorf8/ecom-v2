/* eslint-disable react/prop-types */
import React from 'react';

import CollectionItem from '../collection-item/collection-item.component';

import './collection-preview.styles.scss';

// performance note, everytime page re-renders, this could be a performance issue
// thing to look for (.filter/.map these anonomous function calls)
const CollectionPreview = ({ title, items }) => (
    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {items
                .filter((item, index) => index < 4)
                .map(({ id, ...otherItemProps }) => (
                    <CollectionItem key={id} {...otherItemProps} />
                ))}
        </div>
    </div>
);

export default CollectionPreview;
