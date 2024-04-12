import { Link } from 'react-router-dom';
import { TextH2 } from "../components/Text/TextH2";

export const Food = () => {
    return (
        <div style={{ width: '100%', height: '100%', backgroundColor: '#E4EBF7', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <TextH2 iconUrl='src/images/icon/FoodOrange.svg' name='Food' />
            <Link to="/addfood" style={{ textDecoration: 'none' }}>
                <button style={{ display: 'inline-flex', padding: '16px', justifyContent: 'center', alignItems: 'center', gap: '10px', backgroundColor: '#3D4C81', color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>Add Food</button>
            </Link>
        </div>
    );
}
