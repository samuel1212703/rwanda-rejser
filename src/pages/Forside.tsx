import Rejsetilbud from '../components/Rejsetilbud';
import IntroBillede from '../images/rwanda1.jpg';
import ForsideBillede from '../components/ForsideBillede';
import tilbud1 from '../images/t1.jpg';
import tilbud2 from '../images/t2.jpg';
import tilbud3 from '../images/t3.jpg';

export default function Frontpage() {
    const tilbud = [{ titel: "Tilbud1", beskrivelse: "Beskrivelse af tilbud1", billede: tilbud1}, { titel: "Tilbud2", beskrivelse: "Beskrivelse af tilbud2", billede: tilbud2 }, { titel: "Tilbud3", beskrivelse: "Beskrivelse af tilbud3", billede: tilbud3 }]
    return (
        <div>
            <div style={{ position: 'relative' }}>
                {ForsideBillede(IntroBillede)}
            </div>

            <div>
                <div>
                    <h1 style={{margin: '2%'}}>Rejsetilbud</h1>
                    {Rejsetilbud({tilbud: tilbud})}
                </div>
            </div>
        </div>
    )
}
