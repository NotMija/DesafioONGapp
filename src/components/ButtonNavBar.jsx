import { Button } from '@mui/material';

export const NavBarButton = ({ selectedTab, handleClick, tabName }) => {
    return (
        <Button
            style={{
                display: 'flex',
                justifyContent: 'start',
                color: 'white',
                gap: '8px',
                width: '100%',
                padding: '8px',
                backgroundColor: selectedTab === tabName ? '#F15B43' : 'transparent'
            }}
            onClick={() => handleClick(tabName)}
        >
            <img src={`src/images/icon/${tabName}.svg`} alt={tabName} />
            {tabName}
        </Button>
    );
}

