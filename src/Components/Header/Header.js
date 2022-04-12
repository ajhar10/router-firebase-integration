import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase';
import './Header.css';

const Header = () => {
    const { user, handleSignOut } = useFirebase();
    return (
        <div>
            <div className='header'>
                <nav>
                    <Link to='/'>Home</Link>
                    <Link to='/orders'>Orders</Link>
                    <Link to='/products'>Products</Link>
                    <Link to='/register'>Register</Link>
                    <span>{user?.displayName && user.displayName}</span>
                    {
                        user?.uid ?
                            <button onClick={handleSignOut}>Sign Out</button> :
                            <Link to='/login'>Login</Link>
                    }
                </nav>
            </div>
        </div>
    );
};

export default Header;