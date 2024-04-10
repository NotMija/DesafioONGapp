import { Card, CardContent } from "@mui/material";
import { TextH3 } from "../Text/TextH3";
import { TextBody } from "../Text/TextBody";
import { Button } from "../Button/Button";

export const NurseryCard = ({ }) => {
    return (
        <div style={{ padding: '0 0 0 50px' }}>
            <Card style={{ width: '900px' }}>
                <CardContent style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: '24px' }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                        <TextH3 name='Class A - Remedial class ' color='#1A2433' />
                        <TextBody string='Proffesor: Doña Ana Camila Mendoza ' />
                        <div style={{ display: "flex", flexDirection: "row", gap: '39px' }}>
                            <p style={{ fontSize: '14px', fontStyle: 'normal', fontWeight: '700', lineHeight: '16px' }} > Last modified: { } </p>
                            <p style={{ fontSize: '14px', fontStyle: 'normal', fontWeight: '700', lineHeight: '16px' }} > students </p>
                        </div>
                    </div>

                    <div>
                        {/* Grafica */}
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
                        <Button string='Attendance'/>
                        <Button string='Edit' iconUrl='src/images/icon/penWhite.svg'/>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}


// color: var(--Primary-DarkBlue, #364F75);
// font-family: Manrope;
// font-size: 14px;
// font-style: normal;
// font-weight: 700;
// line-height: 16px; /* 114.286% */