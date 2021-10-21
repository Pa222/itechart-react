import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Tabs, Tab } from '@mui/material';

const Header = () => {
    const href = window.location.href;
    const path = href.substr(href.indexOf('#/') + 1);
    const [selectedTab, setTab] = useState(path === '/' ? '/about' : path);

    const handleChange = (e, newValue) => {
        setTab(newValue);
    }

    return (
        <Tabs value={selectedTab} onChange={handleChange} centered>
            <Tab label="About us" value="/about" to="/about" component={Link}></Tab>
            <Tab label="Counters" value="/counters" to="/counters" component={Link}></Tab>
            <Tab label="Log in" value="/login" to="/login" component={Link}></Tab>
            <Tab label="Log in with Redux" value="/login-redux" to="/login-redux" component={Link}></Tab>
            <Tab label="Log in with Redux form" value="/login-redux-form" to="/login-redux-form" component={Link}></Tab>
        </Tabs>
    );
}

export default Header;