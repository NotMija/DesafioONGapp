import { TextH2 } from "../components/Text/TextH2";
import reportIcon from "../img/icon/report.svg"; // Importa el archivo SVG

export const Reports = () => {
    return (
        <div style={{width: '100%', height: '100%', backgroundColor: '#E4EBF7'}}>
            <TextH2 iconUrl={reportIcon} name='Reports' /> {/* Pasa la importación como prop iconUrl */}
        </div>
    );
}