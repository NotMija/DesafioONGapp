export const TitleScreen = ({ iconUrl, name }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'row', gap: '16px', alignItems: 'center', padding: '64px' }}>
            <img src={iconUrl} alt={name} />
            <h2 style={{ color: '#F15B43', margin: '0' }}>{name}</h2>
        </div>
    );
}