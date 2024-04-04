import { AppBar, Toolbar } from '@mui/material';
import { NavBarButton } from './ButtonNavBar';
import { useState } from 'react';
import { NavBarSubButton } from './SubButtonNavBar';

export const NavBar = () => {
    const [selectedTab, setSelectedTab] = useState('Dashboard');

    const handleClick = (tabName) => {
        setSelectedTab(tabName);
    }

    const NavBarElements = [
        {
            name: 'Dashboard',
            subButtons: []
        },
        {
            name: 'Education',
            subButtons: ['Nursery', 'LKG', 'UKG', 'Charts']
        },
        {
            name: 'Women',
            subButtons: []
        },
        {
            name: 'Youth',
            subButtons: []
        },
        {
            name: 'Food',
            subButtons: ['Food', 'Charts']
        },
        {
            name: 'Advocacy',
            subButtons: ['Advocacy', 'Charts']
        },
        {
            name: 'Reports',
            subButtons: []
        }
    ];

    return (
        <AppBar position="static" style={{ backgroundColor: '#364F75', padding: '32px', width: '288px' }}>
            <Toolbar style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '24px 8px' }} >
                {NavBarElements.map((tab) => (
                    <>
                        <NavBarButton
                            key={tab.name}
                            selectedTab={selectedTab}
                            tabName={tab.name}
                            handleClick={tab.subButtons.length === 0 ? handleClick : undefined}
                            />
                        {tab.subButtons.length > 0 &&
                            <div style={{display: 'flex', gap: '8px', flexDirection: 'column', paddingLeft: '32px', justifyContent: 'flex-end', alignItems: 'center', alignSelf: 'stretch'}}>
                                {tab.subButtons.map((subButton) => (
                                    <NavBarSubButton key={subButton} tabName={subButton} handleClick={handleClick} selectedTab={selectedTab}/>
                                ))}
                            </div>
                        }
                    </>
                ))}
            </Toolbar>
        </AppBar>
    );
};
