import { Card, CardContent, Typography } from "@mui/material";
import { TextH3 } from "../Text/TextH3";
import { TextBody } from "../Text/TextBody";
import { TextCaptions } from "../Text/TextCaptions";
import { TextCaptionsBold } from "../Text/TextCaptionBold";

export const YouthCards = ({
    nameClass,
    nameProfessor,
    modification,
    numberStudents,
    textButtonA, 
    textButtonB,
  }) => {
    return (
      <Card style={{ width: '850px', margin: '16px', boxSizing: 'border-box' }}>
        <CardContent>
          <TextH3 name={nameClass} color='#364F75' /> {/* Aquí debe ser el prop nameClass */}
          <div style={{ display: "flex", flexDirection: "row", justifyContent: 'space-between' }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <TextBody string={nameClass} />
              <TextBody string={nameProfessor} />
              <TextBody string={modification} />
            </div>
            <div style={{ marginTop: "auto" }}>
              <TextBody string={numberStudents} />
            </div>
            <div style={{ alignSelf: 'center' }}>
              {/* El gráfico de asistencia iría aquí */}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}> {/* Agregado gap para separar los botones */}
              <button style={{ background: '#3D4C81', border: 'none', padding: '10px 20px', cursor: 'pointer', color: 'white' }}
                onClick={() => {/* Aquí la lógica para mostrar la lista de asistencia */ }}>
                {textButtonA} {/* Utiliza el prop textButtonA */}
              </button>
              <button style={{ background: '#3D4C81', border: 'none', padding: '10px 20px', cursor: 'pointer', color: 'white' }}
                onClick={() => {/* Aquí la lógica para mostrar los alumnos */ }}>
                {textButtonB} {/* Utiliza el prop textButtonB */}
              </button>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }