
export default function ForsideBillede(IntroBillede: string) {
    return (
        <>
            <div>
                <img style={{ width: '100vw', maxHeight: '70vh', objectFit: 'cover' }} src={IntroBillede} alt="Rwanda" />
            </div>
            <div style={{
                color: 'white',
                position: 'absolute',
                right: '30%',
                left: '30%',
                bottom: '35%',
                padding: '15px',
                fontSize: '1.2vw',
                textShadow: '2px 2px 15px rgba(0, 0, 0, 1)' // Added text shadow
            }}>
                <h1 style={{ fontSize: '3vw' }}>Rejse til Rwanda</h1>
                <p>
                    Er du klar til dit livs eventyr?
                </p>
            </div>
        </>
    )
} 
