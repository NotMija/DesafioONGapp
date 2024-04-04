import { AppBar, Toolbar, Button } from '@mui/material';

export const NavBar = () => {
    return (
        <AppBar position="static" style={{ backgroundColor: '#364F75', padding:'32px' }}>
            <Toolbar style={{ display: 'flex', flexDirection: 'column', gap:'24px', padding: '24px 8px' }} >
                <Button style={{ color: 'white', gap: '8px', alignSelf: 'start' }}>
                    <img src='../../src/images/icon/dashboard2.svg' alt='dashboard' />
                    Dashboard
                </Button>
                <Button style={{ color: 'white', gap: '8px', alignSelf: 'start' }}>
                    <img src='../../src/images/icon/baby.svg' alt='baby' />
                    Education
                </Button>
                <Button style={{ color: 'white', gap: '8px' , alignSelf: 'start' }}>
                    <img src='../../src/images/icon/women.svg' alt='women' />
                    Women
                </Button>
                <Button style={{ color: 'white', gap: '8px' , alignSelf: 'start' }}>
                <img src='../../src/images/icon/Bagpack.svg' alt='education' />
                    Youth
                </Button>
                <Button style={{ color: 'white', gap: '8px', alignSelf: 'start' }}>
                    <img src='../../src/images/icon/bread.svg' alt='bread' />
                    Food
                </Button>
                <Button style={{ color: 'white', gap: '8px' , alignSelf: 'start' }}>
                    <img src='../../src/images/icon/􀘷.svg' alt='􀘷' />
                    Advocacy
                </Button>
                <Button style={{ color: 'white', gap: '8px' , alignSelf: 'start' }}>
                    <img src='../../src/images/icon/reports.svg' alt='􀘷' />
                    Reports
                </Button>
            </Toolbar>
        </AppBar>
    );
};
