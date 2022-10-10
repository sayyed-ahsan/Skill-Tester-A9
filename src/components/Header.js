import React from 'react';
import { NavLink } from 'react-router-dom';
import './Home.css';

const Header = () => {
    return (
        <div className='navbar-main'>
            <div>
                <h3 className='nav-title'>
                    Skill Tester
                </h3>
            </div>
            <nav>
                <NavLink className={'headerlink'} to={'/'}>Home</NavLink>
                <NavLink className={'headerlink'} to={'/stastic'}>Stastic</NavLink>
                <NavLink className={'headerlink'} to={'/blog'}>Blog</NavLink>
            </nav>
        </div>
    );
};

export default Header;