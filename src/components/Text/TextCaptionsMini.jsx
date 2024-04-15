
export const TextCaptionsMini = ({string}) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'row', gap: '16px', alignItems: 'center' }}>
            <h2 style={{ color: '#26354C', margin: '0', fontSize: '12px', fontWeight: '300', lineHeight: '16px' }}> {string} </h2>
        </div>
    );

}


// color: var(--Text-Caption, #26354C);

// /* Captions/Captions mini */
// font-family: Manrope;
// font-size: 12px;
// font-style: normal;
// font-weight: 300;
// line-height: 16px; /* 133.333% */