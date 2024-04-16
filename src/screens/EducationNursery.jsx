import { NurseryCard } from "../components/NurseryComponents/NurseryCard";
import { TextH2 } from "../components/Text/TextH2";

export const EducationNursery = () => {
    return (
        <div style={{width: '100%', height: '100%', backgroundColor: '#E4EBF7'}}>
            <TextH2 iconUrl='/icon/NurseryOrange.svg' name='Nursery' />
            <NurseryCard name='Education' iconUrl='/icon/NurseryBlue.svg' date='03/10-09/10' percentage='9.70%' dateString='last week' descriptionString='Asistance last 5 days' />
        </div>
    );
}