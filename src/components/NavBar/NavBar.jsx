import { AppBar, Toolbar, Button } from '@mui/material';
import { NavBarButton } from '../ButtonNavBar';
import { useState } from 'react';

export const NavBar = () => {
    const [selectedTab, setSelectedTab] = useState('Dashboard');

    const handleClick = (tabName) => {
        setSelectedTab(tabName);
    }

    return (
        <AppBar position="static" style={{ backgroundColor: '#364F75', padding: '32px', width: '288px' }}>
            <Toolbar style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '24px 8px' }} >
                <NavBarButton selectedTab={selectedTab} handleClick={handleClick} tabName='Dashboard'/>
                <NavBarButton selectedTab={selectedTab} handleClick={handleClick} tabName='Education'/>
                <NavBarButton selectedTab={selectedTab} handleClick={handleClick} tabName='Women'/>
                <NavBarButton selectedTab={selectedTab} handleClick={handleClick} tabName='Youth'/>
                <NavBarButton selectedTab={selectedTab} handleClick={handleClick} tabName='Food'/>
                <NavBarButton selectedTab={selectedTab} handleClick={handleClick} tabName='Advocacy'/>
                <NavBarButton selectedTab={selectedTab} handleClick={handleClick} tabName='Reports'/>
            </Toolbar>
        </AppBar>
    );
};
