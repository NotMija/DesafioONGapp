export const TextCaptions = ({string}) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'row', gap: '16px', alignItems: 'center' }}>
            <h2 style={{ color: '#475466', margin: '0', fontSize: '14px', fontWeight: '500', lineHeight: '16px' }}> {string} </h2>
        </div>
    );

}

// color: var(--grey-80, #475466);

// /* Captions/Captions */
// font-family: Manrope;
// font-size: 14px;
// font-style: normal;
// font-weight: 500;
// line-height: 16px; /* 114.286% */