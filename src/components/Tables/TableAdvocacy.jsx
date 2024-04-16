import { useState } from "react"
import { TextCaptionsBold } from "../Text/TextCaptionBold"
import { TextCaptions } from "../Text/TextCaptions"
import { TextH3 } from "../Text/TextH3"
import { Button, ButtonPages } from "../Button/Button"

export const TableAdvocacy = () => {
    const possiblesdatas = [
        {
            name: 'Person Name',
            help: 'Purpose',
            status: 'School building',
            date: '05/05/2024'
        },
        {
            name: 'Otra Persona',
            help: 'Otro Propósito',
            status: 'Construcción de hospital',
            date: '06/06/2025'
        },
        {
            name: 'Tercera Persona',
            help: 'Propósito Adicional',
            status: 'Construcción de biblioteca',
            date: '07/07/2026'
        },
        {
            name: 'Cuarta Persona',
            help: 'Propósito Cuatro',
            status: 'Construcción de parque',
            date: '08/08/2027'
        },
        {
            name: 'Quinta Persona',
            help: 'Propósito Cinco',
            status: 'Construcción de estadio',
            date: '09/09/2028'
        },
        {
            name: 'Sexta Persona',
            help: 'Propósito Seis',
            status: 'Construcción de museo',
            date: '10/10/2029'
        },
        {
            name: 'Séptima Persona',
            help: 'Propósito Siete',
            status: 'Construcción de universidad',
            date: '11/11/2030'
        },
        {
            name: 'Octava Persona',
            help: 'Propósito Ocho',
            status: 'Construcción de teatro',
            date: '12/12/2031'
        },
        {
            name: 'Novena Persona',
            help: 'Propósito Nueve',
            status: 'Construcción de aeropuerto',
            date: '01/01/2032'
        },
        {
            name: 'Décima Persona',
            help: 'Propósito Diez',
            status: 'Construcción de estación de tren',
            date: '02/02/2033'
        },
        {
            name: 'Undécima Persona',
            help: 'Propósito Once',
            status: 'Construcción de puente',
            date: '03/03/2034'
        },
        {
            name: 'Duodécima Persona',
            help: 'Propósito Doce',
            status: 'Construcción de túnel',
            date: '04/04/2035'
        },
        {
            name: 'Decimotercera Persona',
            help: 'Propósito Trece',
            status: 'Construcción de carretera',
            date: '05/05/2036'
        },
        {
            name: 'Cuarta Persona',
            help: 'Propósito Cuatro',
            status: 'Construcción de parque',
            date: '08/08/2027'
        },
        {
            name: 'Quinta Persona',
            help: 'Propósito Cinco',
            status: 'Construcción de estadio',
            date: '09/09/2028'
        },
        {
            name: 'Sexta Persona',
            help: 'Propósito Seis',
            status: 'Construcción de museo',
            date: '10/10/2029'
        },
        {
            name: 'Séptima Persona',
            help: 'Propósito Siete',
            status: 'Construcción de universidad',
            date: '11/11/2030'
        },
        {
            name: 'Octava Persona',
            help: 'Propósito Ocho',
            status: 'Construcción de teatro',
            date: '12/12/2031'
        },
        {
            name: 'Novena Persona',
            help: 'Propósito Nueve',
            status: 'Construcción de aeropuerto',
            date: '01/01/2032'
        },
        {
            name: 'Décima Persona',
            help: 'Propósito Diez',
            status: 'Construcción de estación de tren',
            date: '02/02/2033'
        },
        {
            name: 'Undécima Persona',
            help: 'Propósito Once',
            status: 'Construcción de puente',
            date: '03/03/2034'
        },
        {
            name: 'Duodécima Persona',
            help: 'Propósito Doce',
            status: 'Construcción de túnel',
            date: '04/04/2035'
        },
        {
            name: 'Decimotercera Persona',
            help: 'Propósito Trece',
            status: 'Construcción de carretera',
            date: '05/05/2036'
        }, {
            name: 'Person Name',
            help: 'Purpose',
            status: 'School building',
            date: '05/05/2024'
        },
        {
            name: 'Otra Persona',
            help: 'Otro Propósito',
            status: 'Construcción de hospital',
            date: '06/06/2025'
        },
        {
            name: 'Tercera Persona',
            help: 'Propósito Adicional',
            status: 'Construcción de biblioteca',
            date: '07/07/2026'
        },
        {
            name: 'Cuarta Persona',
            help: 'Propósito Cuatro',
            status: 'Construcción de parque',
            date: '08/08/2027'
        },
        {
            name: 'Quinta Persona',
            help: 'Propósito Cinco',
            status: 'Construcción de estadio',
            date: '09/09/2028'
        },
        {
            name: 'Sexta Persona',
            help: 'Propósito Seis',
            status: 'Construcción de museo',
            date: '10/10/2029'
        },
        {
            name: 'Séptima Persona',
            help: 'Propósito Siete',
            status: 'Construcción de universidad',
            date: '11/11/2030'
        },
        {
            name: 'Octava Persona',
            help: 'Propósito Ocho',
            status: 'Construcción de teatro',
            date: '12/12/2031'
        },
        {
            name: 'Novena Persona',
            help: 'Propósito Nueve',
            status: 'Construcción de aeropuerto',
            date: '01/01/2032'
        },
        {
            name: 'Décima Persona',
            help: 'Propósito Diez',
            status: 'Construcción de estación de tren',
            date: '02/02/2033'
        },
        {
            name: 'Undécima Persona',
            help: 'Propósito Once',
            status: 'Construcción de puente',
            date: '03/03/2034'
        },
        {
            name: 'Duodécima Persona',
            help: 'Propósito Doce',
            status: 'Construcción de túnel',
            date: '04/04/2035'
        },
        {
            name: 'Decimotercera Persona',
            help: 'Propósito Trece',
            status: 'Construcción de carretera',
            date: '05/05/2036'
        },
        {
            name: 'Cuarta Persona',
            help: 'Propósito Cuatro',
            status: 'Construcción de parque',
            date: '08/08/2027'
        },
        {
            name: 'Quinta Persona',
            help: 'Propósito Cinco',
            status: 'Construcción de estadio',
            date: '09/09/2028'
        },
        {
            name: 'Sexta Persona',
            help: 'Propósito Seis',
            status: 'Construcción de museo',
            date: '10/10/2029'
        },
        {
            name: 'Séptima Persona',
            help: 'Propósito Siete',
            status: 'Construcción de universidad',
            date: '11/11/2030'
        },
        {
            name: 'Octava Persona',
            help: 'Propósito Ocho',
            status: 'Construcción de teatro',
            date: '12/12/2031'
        },
        {
            name: 'Novena Persona',
            help: 'Propósito Nueve',
            status: 'Construcción de aeropuerto',
            date: '01/01/2032'
        },
        {
            name: 'Décima Persona',
            help: 'Propósito Diez',
            status: 'Construcción de estación de tren',
            date: '02/02/2033'
        },
        {
            name: 'Undécima Persona',
            help: 'Propósito Once',
            status: 'Construcción de puente',
            date: '03/03/2034'
        },
        {
            name: 'Duodécima Persona',
            help: 'Propósito Doce',
            status: 'Construcción de túnel',
            date: '04/04/2035'
        },
        {
            name: 'Decimotercera Persona',
            help: 'Propósito Trece',
            status: 'Construcción de carretera',
            date: '05/05/2036'
        },
        {
            name: 'Person Name',
            help: 'Purpose',
            status: 'School building',
            date: '05/05/2024'
        },
        {
            name: 'Otra Persona',
            help: 'Otro Propósito',
            status: 'Construcción de hospital',
            date: '06/06/2025'
        },
        {
            name: 'Tercera Persona',
            help: 'Propósito Adicional',
            status: 'Construcción de biblioteca',
            date: '07/07/2026'
        },
        {
            name: 'Cuarta Persona',
            help: 'Propósito Cuatro',
            status: 'Construcción de parque',
            date: '08/08/2027'
        },
        {
            name: 'Quinta Persona',
            help: 'Propósito Cinco',
            status: 'Construcción de estadio',
            date: '09/09/2028'
        },
        {
            name: 'Sexta Persona',
            help: 'Propósito Seis',
            status: 'Construcción de museo',
            date: '10/10/2029'
        },
        {
            name: 'Séptima Persona',
            help: 'Propósito Siete',
            status: 'Construcción de universidad',
            date: '11/11/2030'
        },
        {
            name: 'Octava Persona',
            help: 'Propósito Ocho',
            status: 'Construcción de teatro',
            date: '12/12/2031'
        },
        {
            name: 'Novena Persona',
            help: 'Propósito Nueve',
            status: 'Construcción de aeropuerto',
            date: '01/01/2032'
        },
        {
            name: 'Décima Persona',
            help: 'Propósito Diez',
            status: 'Construcción de estación de tren',
            date: '02/02/2033'
        },
        {
            name: 'Undécima Persona',
            help: 'Propósito Once',
            status: 'Construcción de puente',
            date: '03/03/2034'
        },
        {
            name: 'Duodécima Persona',
            help: 'Propósito Doce',
            status: 'Construcción de túnel',
            date: '04/04/2035'
        },
        {
            name: 'Decimotercera Persona',
            help: 'Propósito Trece',
            status: 'Construcción de carretera',
            date: '05/05/2036'
        },
        {
            name: 'Cuarta Persona',
            help: 'Propósito Cuatro',
            status: 'Construcción de parque',
            date: '08/08/2027'
        },
        {
            name: 'Quinta Persona',
            help: 'Propósito Cinco',
            status: 'Construcción de estadio',
            date: '09/09/2028'
        },
        {
            name: 'Sexta Persona',
            help: 'Propósito Seis',
            status: 'Construcción de museo',
            date: '10/10/2029'
        },
        {
            name: 'Séptima Persona',
            help: 'Propósito Siete',
            status: 'Construcción de universidad',
            date: '11/11/2030'
        },
        {
            name: 'Octava Persona',
            help: 'Propósito Ocho',
            status: 'Construcción de teatro',
            date: '12/12/2031'
        },
        {
            name: 'Novena Persona',
            help: 'Propósito Nueve',
            status: 'Construcción de aeropuerto',
            date: '01/01/2032'
        },
        {
            name: 'Décima Persona',
            help: 'Propósito Diez',
            status: 'Construcción de estación de tren',
            date: '02/02/2033'
        },
        {
            name: 'Undécima Persona',
            help: 'Propósito Once',
            status: 'Construcción de puente',
            date: '03/03/2034'
        },
        {
            name: 'Duodécima Persona',
            help: 'Propósito Doce',
            status: 'Construcción de túnel',
            date: '04/04/2035'
        },
        {
            name: 'Decimotercera Persona',
            help: 'Propósito Trece',
            status: 'Construcción de carretera',
            date: '05/05/2036'
        }
    ]

    const [currentPage, setCurrentPage] = useState(1); // Página actual
    const itemsPerPage = 12; // Registros por página

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const displayedData = possiblesdatas.slice(startIndex, endIndex);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(possiblesdatas.length / itemsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <>
            <table style={{ padding: '0 0 0 50px' }}>
                <thead style={{ backgroundColor: '#05549E' }}>
                    <tr>
                        <th style={{ width: '280px', textAlign: 'left', padding: '16px' }}>
                            <TextH3 color='#E4EBF7' name='Name' />
                        </th>
                        <th style={{ width: '150px', textAlign: 'left', padding: '16px' }}>
                            <TextH3 color='#E4EBF7' name='Help' />
                        </th>
                        <th style={{ width: '150px', textAlign: 'left', padding: '16px' }}>
                            <TextH3 color='#E4EBF7' name='Status' />
                        </th>
                        <th style={{ width: '150px', textAlign: 'left', padding: '16px' }}>
                            <TextH3 color='#E4EBF7' name='Date' />
                        </th>
                        <th style={{ width: '150px', textAlign: 'left', padding: '16px' }}>
                        </th>
                    </tr>
                </thead>
                <tbody style={{ backgroundColor: '#FFFF' }}>
                    {displayedData.map((data, index) => {
                        return (
                            <tr key={index}>
                                <td style={{ padding: '16px' }}>
                                    <TextCaptionsBold string={data.name} />
                                </td>
                                <td style={{ padding: '16px' }}>
                                    <TextCaptions string={data.help} />
                                </td>
                                <td style={{ padding: '16px' }}>
                                    <TextCaptions string={data.status} />
                                </td>
                                <td style={{ padding: '16px' }}>
                                    <TextCaptions string={data.date} />
                                </td>
                                <td style={{ padding: '16px' }}>
                                    <button style={{ background: 'none', border: 'none' }} onClick={() => console.log('funciona')}>
                                        <img src='public/icon/pen.svg' alt="edit" />
                                    </button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>

            <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end', padding: '16px 0px 0px 0px'}}>
                {pageNumbers.map((pageNumber) => (
                    <ButtonPages key={pageNumber} string={pageNumber} currentPage={currentPage} onClick={() => handlePageChange(pageNumber)} />
                    ))}
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', padding: '29px 0px 0px 0px' }}>
                <div style={{ width: '200px'}}>
                    <Button string='New' />
                </div>
            </div>
        </>
    )
}