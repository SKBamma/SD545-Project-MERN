import React from 'react';

import logo from '../../images/logo.jpeg';
import './header.css';

export default function Header() {
    return (
        <div>
            <div className='header'>
                <img src={logo} alt='music profile' className="logo" />
                <input type="search" placeholder="Search..." className='search' />
                <button className="logout">Logout</button>
            </div>

        </div>
    );
}
