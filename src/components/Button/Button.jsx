import { Button as ButtonMaterialUI } from "@mui/material";
import { useState } from "react";

const variants = {
    primary: {
        backgroundColor: '#364F75',
        color: '#FFFFFF',
    },
    secondary: {
        backgroundColor: '#FFFFFF',
        color: '#364F75',
        border: '1px solid #364F75',
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

export const Button = ({ string, variant = 'primary', onClick }) => {
    const [currentVariant, setCurrentVariant] = useState(variant);
    const variantStyle = variants[currentVariant];

    const handleMouseEnter = () => {
        setCurrentVariant('hover');
    };

    const handleMouseLeave = () => {
        setCurrentVariant(variant);
    };



    return (
        <ButtonMaterialUI
            onClick={() => console.log('Button clicked!')}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
                fontSize: '16px',
                fontStyle: 'normal',
                fontWeight: '700',
                lineHeight: 'normal',
                letterSpacing: '0.15px',
                display: 'flex',
                width: '100%',
                alignSelf: 'center',
                padding: '11px 16px',
                alignItems: 'center',
                ...variantStyle,
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