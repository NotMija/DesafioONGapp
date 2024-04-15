import { Card, CardContent, Typography } from "@mui/material";
import { TextH3 } from "../Text/TextH3";
import { TextBody } from "../Text/TextBody";
import { TextCaptions } from "../Text/TextCaptions";
import { TextCaptionsBold } from "../Text/TextCaptionBold";

export const EducationCards = ({ name, numberClass, professor, textButton, typeClass }) => {
    return (
        <Card style={{ width: '850px', margin: '16px', boxSizing: 'border-box' }}>
            <CardContent>
                <TextH3 name={name} color='#364F75' />
                <div style={{ display: "flex", justifyContent: 'space-between' }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                        <TextBody string={numberClass} />
                        <TextBody string={professor} />
                    </div>
                    <TextBody string={typeClass} style={{ alignSelf: 'center' }} />
                    <div style={{ alignSelf: 'center' }}>
                        {/* El gráfico de asistencia iría aquí */}
                    </div>
                    <button style={{ background: '#3D4C81', border: 'none', padding: '10px 20px', cursor: 'pointer', color: 'white' }}
                        onClick={() => {/* Aquí la lógica para mostrar la lista de asistencia */ }}>
                        {textButton}
                    </button>
                </div>
            </CardContent>
        </Card>
    );
}
