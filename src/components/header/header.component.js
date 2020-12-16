import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';

// This is a new special syntax when importing SVG in React.  The ReactComponent
// import name is special and tells create-react-app that you want a React
// Component that renders an SVG, rather than its filename
import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.styles.scss';

const Header = ({ currentUser }) => {
    const renderSignInOrSignOut = () => {
        return currentUser ? (
            <div className='option' onClick={() => auth.signOut()}>
                SIGN OUT
            </div>
        ) : (
            <Link className='option' to='/signin'>
                SIGN IN
            </Link>
        );
    };

    return (
        <div className='header'>
            <Link to='/'>
                <Logo className='logo-container' />
            </Link>
            <div className='options'>
                <Link className='option' to='/shop'>
                    SHOP
                </Link>
                <Link className='option' to='/shop'>
                    CONTACT
                </Link>
                {renderSignInOrSignOut()}
            </div>
        </div>
    );
};

export default Header;
