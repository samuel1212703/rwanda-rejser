

export default function Footer() {
    const basicStyling = { color: 'white', textDecoration: 'none' }

    return (
        <div style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-evenly',
            backgroundColor: 'grey',
            textAlign:'left'
        }}>
            <p style={{}}>
                Patrick Illunga
                <br />
                tlf: <a href="tlf:" style={basicStyling}>(+45) 12345678</a>
                <br />
                mail: <a href="mailto:" style={basicStyling}>kontakt@mail.com</a>
            </p>
            <div>Andre Kontaktinformationer</div>
        </div>
    )
}
