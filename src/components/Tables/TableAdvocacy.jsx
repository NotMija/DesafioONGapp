import { TextCaptionsBold } from "../Text/TextCaptionBold"
import { TextCaptions } from "../Text/TextCaptions"
import { TextH3 } from "../Text/TextH3"

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
    ]

    return (
        <table style={{ padding: '0 0 0 50px' }}>
            <thead style={{ backgroundColor: '#364F75' }}>
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
            <tbody style={{ backgroundColor: '#ffff' }}>
                {possiblesdatas.map((data, index) => {
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