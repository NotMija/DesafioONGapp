export const TextCaptionsBold = ({string, color = 'black'}) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'row', gap: '16px', alignItems: 'center' }}>
            <h2 style={{ color: color, margin: '0', fontSize: '14px', fontWeight: '700', lineHeight: '16px' }}> {string}</h2>
        </div>
    );

}

// color: var(--Primary-DarkBlue, #364F75);

// /* Captions/caption Bold */
// font-family: Manrope;
// font-size: 14px;
// font-style: normal;
// font-weight: 700;
// line-height: 16px; /* 114.286% */