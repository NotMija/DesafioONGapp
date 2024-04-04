import { Button } from '@mui/material';

export const NavBarSubButton = ({ selectedTab, handleClick, tabName }) => {
    return (
        <Button
            style={{
                display: 'flex',
                height: '32px',
                color: 'white',
                alignItems: 'center',
                justifyContent: 'start',
                alignSelf: 'stretch',
                backgroundColor: selectedTab === tabName ? '#F15B43' : 'transparent'
            }}
            onClick={() => handleClick(tabName)}
        >
            <div style={{ paddingLeft: '40px'}}>
                {tabName}
            </div>
        </Button>
    );
}
