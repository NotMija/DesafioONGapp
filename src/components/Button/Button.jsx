import { Button as ButtonMaterialUI } from "@mui/material";

const variants = {
    primary: {
        backgroundColor: '#364F75',
        color: '#FFFFFF',
    },
    secondary: {
        backgroundColor: '#FFFFFF',
        color: '##1A2433',
    },
    disabled: {
        backgroundColor: '#FFFFFF',
        color: '#1A2433',
    },
    disabled2: {
        backgroundColor: '#FFFFFF',
        color: '#1A2433',
    },
    hover: {
        backgroundColor: '#263751',
        color: '#FFFFFF',
    },
}

export const Button = ({ string, variant = 'primary' }) => {
    const variantStyle = variants[variant];

    return (
        <ButtonMaterialUI
            style={{
                fontSize: '16px',
                fontStyle: 'normal',
                fontWeight: '700',
                lineHeight: 'normal',
                letterSpacing: '0.15px',
                display: 'flex',
                padding: '11px 16px',
                justifyContent: 'space-between',
                alignItems: 'center',
                ...variantStyle
            }}>
            {string}
        </ButtonMaterialUI>
    );
}

// display: flex;
// padding: 11px 0px;
// justify-content: space-between;
// align-items: center;
// flex: 1 0 0;
// align-self: stretch;

// color: var(--shades-white, #FFF);
// text-align: center;

// /* Buttons/Buttons */
// font-family: Manrope;
// font-size: 16px;
// font-style: normal;
// font-weight: 700;
// line-height: normal;
// letter-spacing: 0.15px;