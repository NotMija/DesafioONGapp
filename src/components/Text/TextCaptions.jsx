export const TextCaptions = ({ string }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'row', gap: '16px', alignItems: 'center' }}>
            <h2 style={{ color: '#475466', margin: '0', fontSize: '14px', fontWeight: '500', lineHeight: '16px' }}> {string} </h2>
        </div>
    );

}

export const TextCaptionsPages = ({ string, variantStyle }) => {
    console.log('TextCaptions: ', variantStyle);

    return (
        <h2 style={{
            color: variantStyle.color,
            fontSize: '14px',
            fontStyle: 'normal',
            fontWeight: '700',
            lineHeight: '16px',
            margin: '0px',
        }}>
            {string}
        </h2>
    );

}
// color: #FFF;

// /* Captions/caption Bold */
// font-family: Manrope;
// font-size: 14px;
// font-style: normal;
// font-weight: 700;
// line-height: 16px; /* 114.286% */