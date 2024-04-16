import { TextH2 } from "../components/Text/TextH2";
import { YouthCards } from "../components/YouthComponents/YouthCards";

export const YouthComputer = () => {
    return (
        <div style={{ width: '100%', minHeight: '100vh', backgroundColor: '#E4EBF7' }}>
            <TextH2 iconUrl='/icon/YouthOrange.svg' name='Youth / Computer' />
            <div style={{ display: 'flex', flexDirection: 'row', gap: '24px', padding: '0 0 0 50px', flexWrap: 'wrap' }}>
                <YouthCards
                    nameClass='Class A'
                    nameProfessor='Teacher: Priya Sharma'
                    modification='Last modification: Yesterday'
                    numberStudents='25 of 30 students'
                    textButtonA='Attendance'
                    textButtonB='See students'
                />
                <YouthCards
                    nameClass='Class B'
                    nameProfessor='Teacher: Priya Sharma'
                    modification='Last modification: Yesterday'
                    numberStudents='25 of 30 students'
                    textButtonA='Attendance'
                    textButtonB='See students'
                />
                <YouthCards
                    nameClass='Class C'
                    nameProfessor='Teacher: Priya Sharma'
                    modification='Last modification: Yesterday'
                    numberStudents='25 of 30 students'
                    textButtonA='Attendance'
                    textButtonB='See students'
                />
            </div>
        </div>
    );
}