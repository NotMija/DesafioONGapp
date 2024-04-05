import { Card, CardContent, Typography } from "@mui/material";
import { TextH3 } from "../Text/TextH3";
import { TextBody } from "../Text/TextBody";
import { TextCaptionsMini } from "../Text/TextCaptionsMini";
import { TextCaptions } from "../Text/TextCaptions";
import { TextCaptionsBold } from "../Text/TextCaptionBold";

export const DashboardCard = ({ name, iconUrl, date, percentage, dateString, descriptionString }) => {
    return (
        <Card style={{ width: '288px' }}>
            <CardContent>
                <TextH3 iconUrl={iconUrl} name={name} />
                <div style={{ display: "flex", flexDirection: "row", gap: "8px", justifyContent: 'space-between' }}>
                    <TextBody string={descriptionString} />
                    <TextCaptionsMini string={date} />
                </div>
                <div style={{ display: "flex", flexDirection: "row", height: "150px" }}>
                    {/* GRAFICA */}
                </div>
                <div style={{ display: "flex", flexDirection: "row", gap: "16px" }}>
                    <div style={{ display: "flex", flexDirection: "row", gap: "8px" }}>
                        <img src='src/images/icon/VectorAbajo.svg' alt='down' />
                        <TextCaptionsBold percentage={percentage} />
                    </div>
                    <TextCaptions string={'since ' + dateString} />
                </div>
            </CardContent>
        </Card>
    );
}
