import { TextH2 } from "../components/Text/TextH2";
import { EducationCards } from "../components/EducationComponents/EducationCards"

export const EducationLKG
    = () => {
        return (
            <div style={{ width: '100%', minHeight: '100vh', backgroundColor: '#E4EBF7' }}>
                <TextH2 iconUrl='/icon/DashboardOrange.svg' name='Education / LKG' />
                <div style={{ display: 'flex', flexDirection: 'row', gap: '24px', padding: '0 0 0 50px', flexWrap: 'wrap' }}>
                    <EducationCards
                        name='LKG childs for 4-5 years old'
                        numberClass='Class A'
                        professor='Professor: Kamala Khan'
                        typeClass='Class of 30'
                        textButton='Attendance'
                    />
                    <EducationCards
                        name='LKG childs for 4-5 years old'
                        numberClass='Class B'
                        professor='Professor: Ajay Gupta'
                        typeClass='Class of 30'
                        textButton='Attendance'
                    />
                    <EducationCards
                        name='LKG childs for 4-5 years old'
                        numberClass='Class C'
                        professor='Professor: Rajesh Koothrappali'
                        typeClass='Class of 30'
                        textButton='Attendance'
                    />
                </div>
            </div>
        );
    }