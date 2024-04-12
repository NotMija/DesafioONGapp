import { Button } from '@mui/material';

export const NavBarButton = ({ selectedTab, handleClick, tabName, showSubButtons }) => {
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
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: 'auto'}}>
                {showSubButtons !== undefined ?
                    showSubButtons ?
                    <img src="src/images/icon/arrowClose.svg" alt="arrow-up" />
                    :
                    <img src="src/images/icon/arrowOpen.svg" alt="arrow-down" />
                :
                null
                }
            </div>
        </Button>
    );
}

