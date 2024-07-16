

export default function ForsideBillede(IntroBillede: string) {
    return (
        <div style={{ position: 'relative' }}>
            <div>
                <img style={{ width: '100%', height: '73vh', objectFit: 'cover' }} src={IntroBillede} alt="Rwanda" />
            </div>
            <div id='billede-tekst-container' style={{position: 'absolute', color: 'white', right: '3%', left: '3%', bottom: '35%', padding: '15px', fontSize:  'xl', textShadow: '2px 2px 15px rgba(0, 0, 0, 1)'}}>
                <h1>Rejse til Rwanda</h1>
                <p>
                    Er du klar til dit livs eventyr?
                </p>
            </div>
        </div>
    )
} 
