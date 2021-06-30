import React from 'react';
import { NavLink  } from 'react-router-dom';
import logo from '../res/logo.svg';

const Navbar = () => {
    return (
        <div className='navbar row'>
            <NavLink to='/' exact={true}>
                <img src={logo} alt='logo' className='navbar__logo'/>
            </NavLink>

            <NavLink to='/' exact={true} activeClassName='navbar__active' className='navbar__navlink transition'>Home</NavLink>

            <NavLink to='/About' exact={true} activeClassName='navbar__active' className='navbar__navlink transition'>About</NavLink>

            <NavLink to='/RoomPage' exact={true} activeClassName='navbar__active' className='navbar__navlink transition'>Rooms</NavLink>

            <NavLink to='/Testimonials' exact={true} activeClassName='navbar__active' className='navbar__navlink transition'>Testimonials</NavLink>
        </div>
    )
}

export default Navbar;