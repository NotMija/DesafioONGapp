import { DashboardCard } from "../components/DashboardComponents/DashboardCard";
import { TextH2 } from "../components/Text/TextH2";

export const Dashboard = () => {
    return (
        <div style={{ width: '100%', height: '100%', backgroundColor: '#E4EBF7' }}>
            <TextH2 iconUrl='src/images/icon/DashboardOrange.svg' name='Dashboard' />
            <div style={{ display: 'flex', flexDirection: 'row', gap: '24px', padding: '24px', flexWrap: 'wrap'}}>
                <DashboardCard name='Education' iconUrl='src/images/icon/NurseryBlue.svg' date='03/10-09/10' percentage='9.70' dateString='last week' descriptionString='Asistance last 5 days' />
                <DashboardCard name='Education' iconUrl='src/images/icon/NurseryBlue.svg' dateString='last week' descriptionString='Asistance last 8 days'/>
                <DashboardCard name='Women' iconUrl='src/images/icon/WomenBlue.svg' dateString='last week' descriptionString='Asistance last week'/>

                <DashboardCard name='Youth' iconUrl='src/images/icon/YouthBlue.svg' dateString='last week' descriptionString='Asistance last week' />
                <DashboardCard name='Advocacy' iconUrl='src/images/icon/AdvocacyBlue.svg' dateString='last week' descriptionString='Advocacy today'/>
                <DashboardCard name='Food' iconUrl='src/images/icon/FoodBlue.svg'  dateString='yesterday' descriptionString='Food bank today' />

            </div>
        </div>
    );
}