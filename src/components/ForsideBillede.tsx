
export default function ForsideBillede(IntroBillede: string) {
    return (
        <>
            <div>
                <img style={{ width: '100vw', height: '77vh', objectFit: 'cover' }} src={IntroBillede} alt="Rwanda" />
            </div>
            <div style={{
                color: 'white',
                position: 'absolute',
                right: '3%',
                left: '3%',
                bottom: '35%',
                padding: '15px',
                fontSize:  'xl',
                textShadow: '2px 2px 15px rgba(0, 0, 0, 1)' // Added text shadow
            }}>
                <h1 style={{ fontSize: 'xxl' }}>Rejse til Rwanda</h1>
                <p>
                    Er du klar til dit livs eventyr?
                </p>
            </div>
        </>
    )
} 
