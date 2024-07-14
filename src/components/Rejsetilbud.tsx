export interface TilbudProps {
    tilbud: Array<{ titel: string, beskrivelse: string, billede: string }>
}

export default function Rejsetilbud({tilbud}: TilbudProps) {
    return (
        <div>
            {tilbud.map((t, index) => {
                const width = 100 / tilbud.length;
                return (
                    <div key={index} style={{width: width + "%", display: 'inline-block', padding: '2vw'}}>
                        <h3>{t.titel}</h3>
                        <img src={t.billede} style={{width: '70%', height: '320px', objectFit: 'cover'}} alt={t.titel} />
                        <p>{t.beskrivelse}</p>
                    </div>
                )
            })}
        </div>
    )
}
