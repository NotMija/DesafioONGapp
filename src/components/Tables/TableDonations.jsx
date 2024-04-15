import { useState } from "react"
import { ButtonPages } from "../Button/Button"
import { TextCaptionsBold } from "../Text/TextCaptionBold"
import { TextCaptions } from "../Text/TextCaptions"
import { TextH3 } from "../Text/TextH3"

export const TableDonations = () => {

    const possiblesdatas = [ // Esto deberia de ser el modelo de datos de la BD donaciones
        {
            donor: 'John Doe',
            value: '0.00$',
            purpose: 'School building',
            date: '05/05/2024'
        },
        {
            donor: 'Jane Smith',
            value: '100.00$',
            purpose: 'Library books',
            date: '06/06/2024'
        },
        {
            donor: 'Bob Johnson',
            value: '200.00$',
            purpose: 'Computer lab',
            date: '07/07/2024'
        },
        {
            donor: 'Alice Williams',
            value: '300.00$',
            purpose: 'Sports equipment',
            date: '08/08/2024'
        },
        {
            donor: 'Charlie Brown',
            value: '400.00$',
            purpose: 'Art supplies',
            date: '09/09/2024'
        },
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
                        <th style={{ width: '320px', textAlign: 'left', padding: '16px' }}>
                            <TextH3 color='#E4EBF7' name='Donor' />
                        </th>
                        <th style={{ width: '150px', textAlign: 'left', padding: '16px' }}>
                            <TextH3 color='#E4EBF7' name='Value' />
                        </th>
                        <th style={{ width: '150px', textAlign: 'left', padding: '16px' }}>
                            <TextH3 color='#E4EBF7' name='Purpose' />
                        </th>
                        <th style={{ width: '150px', textAlign: 'left', padding: '16px' }}>
                            <TextH3 color='#E4EBF7' name='Date' />
                        </th>
                    </tr>
                </thead>
                <tbody style={{ backgroundColor: '#ffff' }}>
                    {displayedData.map((data, index) => {
                        return (
                            <tr key={index}>
                                <td style={{ padding: '16px' }}>
                                    <TextCaptionsBold string={data.donor} />
                                </td>
                                <td style={{ padding: '16px' }}>
                                    <TextCaptions string={data.value} />
                                </td>
                                <td style={{ padding: '16px' }}>
                                    <TextCaptions string={data.purpose} />
                                </td>
                                <td style={{ padding: '16px' }}>
                                    <TextCaptions string={data.date} />
                                </td>
                            </tr>
                        )
                    })}

                </tbody>
            </table>

            <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end', padding: '16px 0px 0px 0px' }}>
                {pageNumbers.map((pageNumber) => (
                    <ButtonPages key={pageNumber} string={pageNumber} currentPage={currentPage} onClick={() => handlePageChange(pageNumber)} />
                ))}
            </div>
        </>
    )
}