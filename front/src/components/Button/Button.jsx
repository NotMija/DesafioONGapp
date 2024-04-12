import { Button as ButtonMaterialUI } from "@mui/material";
import { useEffect, useState } from "react";
import { TextCaptionsPages } from "../Text/TextCaptions";

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

const variantsPages = {
    selected: {
        backgroundColor: '#364F75',
        color: '#FFFFFF',
    },
    unselected: {
        backgroundColor: 'transparent',
        color: '#667080',
    }
}

export const Button = ({ string, variant = 'primary', onClick, iconUrl = '' }) => {
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
            onClick={onClick}
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
            {iconUrl && <img src={iconUrl} />}
        </ButtonMaterialUI>
    );
}

export const ButtonPages = ({ string, variant = 'unselected', onClick, iconUrl = '', currentPage }) => {
    const [currentVariant, setCurrentVariant] = useState(variant);
    
    useEffect(() => {
        if (string === currentPage) {
            setCurrentVariant('selected');
        } else {
            setCurrentVariant('unselected');
        }
    }, [string, currentPage]);

    const variantStyle = variantsPages[currentVariant];

    return (
        <ButtonMaterialUI
            onClick={onClick}
            style={{
                display: 'flex',
                height: 'auto',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '8px',
                minWidth: '32px',
                backgroundColor: variantStyle.backgroundColor,
            }}>
            <TextCaptionsPages string={string} variantStyle={variantStyle}/>
            {iconUrl && <img src={iconUrl} />}
        </ButtonMaterialUI>
    );
}

// display: flex;
// width: 32px;
// padding: 8px;
// flex-direction: column;
// justify-content: center;
// align-items: center;
// gap: 8px;