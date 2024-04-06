import { TextCaptionsBold } from "../Text/TextCaptionBold"
import { TextCaptions } from "../Text/TextCaptions"
import { TextH3 } from "../Text/TextH3"

export const TableAdvocacy = () => {

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

    return (
        <table style={{ padding: '0 0 0 50px' }}>
            <thead style={{ backgroundColor: '#364F75' }}>
                <tr>
                    <th style={{ width: '320px', textAlign: 'left', padding: '16px' }}>
                        <TextH3 color='#E4EBF7' name='Name' />
                    </th>
                    <th style={{ width: '150px', textAlign: 'left', padding: '16px' }}>
                        <TextH3 color='#E4EBF7' name='Value' />
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
            <tbody style={{ backgroundColor: '#ffff' }}>
                {possiblesdatas.map((data, index) => {
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
                            <td style={{ padding: '16px' }}>
                                <button style={{background: 'none', border: 'none'}} onClick={() => console.log('funciona')}>
                                    <img src='src/images/icon/pen.svg' alt="edit" />
                                </button>
                            </td>
                        </tr>
                    )
                })}

            </tbody>
        </table>
    )
}