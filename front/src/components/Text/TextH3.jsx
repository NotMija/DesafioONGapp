export const TextH3 = ({iconUrl, name, color}) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'row', gap: '16px', alignItems: 'center'}}>
            {iconUrl && <img src={iconUrl} />}
            <h2 style={{ color: color, margin: '0', fontSize: '24px', fontWeight: '700', lineHeight: '32px', letterSpacing: '-1px' }}>{name}</h2>
        </div>
    );
}

// /* Headline/H3 */
// font-family: Manrope;
// font-size: 24px;
// font-style: normal;
// font-weight: 700;
// line-height: 32px; /* 133.333% */
// letter-spacing: -1px;