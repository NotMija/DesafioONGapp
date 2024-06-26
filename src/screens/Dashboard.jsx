import { DashboardCard } from "../components/DashboardComponents/DashboardCard";
import { TableDonations } from "../components/Tables/TableDonations";
import { TextH2 } from "../components/Text/TextH2";

export const Dashboard = () => {
    return (
        <div style={{ width: '100%', height: '100%', backgroundColor: '#E4EBF7' }}>
            <TextH2 iconUrl='/icon/DashboardOrange.svg' name='Dashboard' />
            <div style={{ display: 'flex', flexDirection: 'row', gap: '24px', padding: '0 0 0 50px', flexWrap: 'wrap'}}>
                <DashboardCard name='Education' iconUrl='/icon/NurseryBlue.svg' date='03/10-09/10' percentage='9.70%' dateString='last week' descriptionString='Asistance last 5 days' />
                <DashboardCard name='Education' iconUrl='/icon/NurseryBlue.svg' dateString='last week' descriptionString='Asistance last 8 days'/>
                <DashboardCard name='Women' iconUrl='/icon/WomenBlue.svg' dateString='last week' descriptionString='Asistance last week'/>

                <DashboardCard name='Youth' iconUrl='/icon/YouthBlue.svg' dateString='last week' descriptionString='Asistance last week' />
                <DashboardCard name='Advocacy' iconUrl='/icon/AdvocacyBlue.svg' dateString='last week' descriptionString='Advocacy today'/>
                <DashboardCard name='Food' iconUrl='/icon/FoodBlue.svg'  dateString='yesterday' descriptionString='Food bank today' />
            </div>

            <TextH2 iconUrl='/icon/DonationsOrange.svg' name='Donations' />
            <TableDonations />
        </div>
    );
}