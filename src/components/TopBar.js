import React from 'react'
import classes from '../asserts/css/TopBar.module.css';
import logo from '../asserts/img/logo.png';

const TopBar = () => {
    return (
        <nav className={classes.TopBar}>
            <img
                src={logo}
                alt="Amazon Logo"
            />
        </nav>
    )
}

export default TopBar;
