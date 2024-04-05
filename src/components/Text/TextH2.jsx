export const TextH2 = ({ iconUrl, name }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'row', gap: '16px', alignItems: 'center', padding: '64px 0px 16px 50px' }}>
            <img src={iconUrl} alt={name} />
            <h2 style={{ color: '#F15B43', margin: '0', fontSize: '32px', fontWeight: '800', lineHeight: '40px', letterSpacing: '-1px'}}>{name}</h2>
        </div>
    );
}

// /* Headline/H2 */
// font-family: Manrope;
// font-size: 32px;
// font-style: normal;
// font-weight: 800;
// line-height: 40px; /* 125% */
// letter-spacing: -1px;