import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Link to='/home'>Home</Link>
            <Link to='/services'>Services</Link>
            <Link to='/about'>About</Link>
        </div>
    );
};

export default Header;<Link to='/home'>Home</Link>