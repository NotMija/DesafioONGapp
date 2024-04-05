import { EducationCard1 } from "../components/DashboardComponents/EducationCard";
import { TextH2 } from "../components/Text/TextH2";

export const Dashboard = () => {
    return (
        <div style={{ width: '100%', height: '100%', backgroundColor: '#E4EBF7' }}>
            <TextH2 iconUrl='src/images/icon/DashboardOrange.svg' name='Dashboard' />
            <div>
                <EducationCard1 date='03/10-09/10' />
            </div>
        </div>
    );
}