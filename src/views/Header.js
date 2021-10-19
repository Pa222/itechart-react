import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Tabs, Tab } from '@mui/material';

const Header = () => {
    const [selectedTab, setTab] = useState("/about");

    const handleChange = (e, newValue) => {
        setTab(newValue);
    }

    return (
        <Tabs value={selectedTab} onChange={handleChange} centered>
            <Tab label="About us" value="/about" to="/about" component={Link}></Tab>
            <Tab label="Counters" value="/counters" to="/counters" component={Link}></Tab>
            <Tab label="Log in" value="/login" to="/login" component={Link}></Tab>
        </Tabs>
    );
}

export default Header;