import { TableAdvocacy } from "../components/Tables/TableAdvocacy";
import { TextH2 } from "../components/Text/TextH2";

export const Advocacy = () => {
    return (
        <div style={{ width: '100%', height: '100%', backgroundColor: '#E4EBF7' }}>
            <TextH2 iconUrl='/icon/AdvocacyOrange.svg' name='Advocacy' />
            <TableAdvocacy />
        </div>
    );
}