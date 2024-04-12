export const TextBody = ({string}) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'row', gap: '16px', alignItems: 'center' }}>
            <h2 style={{ color: '#26354C', margin: '0', fontSize: '16px', fontWeight: '400', lineHeight: '24px', letterSpacing: '0.15px' }}> {string} </h2>
        </div>
    );

}


// color: var(--Text-Caption, #26354C);

// /* Body/Body regular */
// font-family: Manrope;
// font-size: 16px;
// font-style: normal;
// font-weight: 400;
// line-height: 24px; /* 150% */
// letter-spacing: 0.15px;