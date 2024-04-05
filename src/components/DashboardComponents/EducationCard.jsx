import { Card, CardContent, Typography } from "@mui/material";
import { TextH3 } from "../Text/TextH3";

export const EducationCard1 = ({ education }) => {
    return (
        <Card style={{ width: '288px' }}>
            <CardContent>
                <div style={{display: 'flex', gap: '16px', justifyContent: 'start'}}>
                    <TextH3 iconUrl='src/images/icon/NurseryBlue.svg' name='Education' />
                </div>
            </CardContent>
        </Card>
    );
}

export const EducationCard2 = ({ education }) => {
    return (
        <Card style={{ width: '100%', margin: '16px 0', padding: '16px' }}>
            <CardContent>
                <Typography variant='h6' style={{ marginBottom: '16px' }}>
                    {education.name}
                </Typography>
                <Typography variant='body1'>
                    {education.description}
                </Typography>
            </CardContent>
        </Card>
    );
}
