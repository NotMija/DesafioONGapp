import { Card, CardContent, Typography } from "@mui/material";
import { TextH3 } from "../Text/TextH3";
import { TextBody } from "../Text/TextBody";
import { TextCaptionsMini } from "../Text/TextCaptionsMini";

export const EducationCard1 = ({ date }) => {
    return (
        <Card style={{ width: '288px' }}>
            <CardContent>
                <TextH3 iconUrl='src/images/icon/NurseryBlue.svg' name='Education' />
                <div style={{display: "flex", flexDirection: "row", gap: "8px", justifyContent: 'space-between'}}>
                    <TextBody string={'Asistance last 5 days'} />
                    <TextCaptionsMini string={date} />
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
